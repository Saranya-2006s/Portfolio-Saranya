import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

// Initialize Google GenAI client
const apiKey = process.env.GEMINI_API_KEY;

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }

    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  return aiClient;
}

// ============================================================
// AI PORTFOLIO Q&A
// ============================================================

app.post('/api/ai/ask', async (req, res) => {
  try {
    const { question, portfolioContext } = req.body;

    if (!question) {
      return res.status(400).json({
        error: 'Question is required',
      });
    }

    const ai = getAiClient();

    const systemPrompt = `
You are a professional, friendly AI portfolio assistant for ${
      portfolioContext?.profile?.name || 'the developer'
    }.

Your task is to answer recruiter, engineering manager, or prospective client
questions about this developer's background, technical skills, projects,
and work experience.

Developer Information:

- Name: ${portfolioContext?.profile?.name}
- Title: ${portfolioContext?.profile?.title}
- Bio: ${portfolioContext?.profile?.bio}
- Location: ${portfolioContext?.profile?.location}
- Email: ${portfolioContext?.profile?.email}
- Availability: ${portfolioContext?.profile?.availability}

- Key Skills:
${portfolioContext?.skills
  ?.map((s: any) => `${s.name} (${s.level})`)
  .join(', ')}

- Featured Projects:
${portfolioContext?.projects
  ?.map((p: any) => `${p.title}: ${p.description}`)
  .join(' | ')}

- Work History:
${portfolioContext?.experiences
  ?.map((e: any) => `${e.role} at ${e.company} (${e.period})`)
  .join(' | ')}

Guidelines:

1. Provide concise, impressive, polite, and accurate answers based on the
   developer's context.

2. If asked about something not mentioned, politely explain what is known
   and offer to connect them via the email
   (${portfolioContext?.profile?.email}).

3. Maintain an encouraging, professional, tech-savvy tone.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: question,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return res.json({
      answer: response.text,
    });
  } catch (err: any) {
    console.error('Error in /api/ai/ask:', err);

    return res.status(500).json({
      error:
        err.message || 'Failed to get answer from AI assistant.',
    });
  }
});

// ============================================================
// AI ENHANCER
// ============================================================

app.post('/api/ai/enhance', async (req, res) => {
  try {
    const { type, content, context } = req.body;

    if (!content) {
      return res.status(400).json({
        error: 'Content is required to enhance',
      });
    }

    const ai = getAiClient();

    let prompt = '';

    if (type === 'bio') {
      prompt = `
Polish and improve the following professional developer bio
to make it engaging, clean, clear, and impactful for tech
recruiters and tech leads.

Bio:
"${content}"

Developer Title:
${context?.title || 'Software Engineer'}
`;
    } else if (type === 'project') {
      prompt = `
Improve this software project description to highlight technical
problem solving, architecture impact, and clean developer phrasing.

Project Title:
${context?.title}

Original Description:
"${content}"
`;
    } else {
      prompt = `
Refine and improve the following technical text for a software portfolio:

"${content}"
`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction:
          'You are an expert technical recruiter and portfolio copywriter. Return polished, high-quality, ready-to-use prose without meta commentary.',
        temperature: 0.6,
      },
    });

    return res.json({
      enhancedText: response.text,
    });
  } catch (err: any) {
    console.error('Error in /api/ai/enhance:', err);

    return res.status(500).json({
      error:
        err.message || 'Failed to enhance text.',
    });
  }
});

// ============================================================
// SERVE FRONTEND IN PRODUCTION
// ============================================================

if (process.env.NODE_ENV === 'production') {
  // IMPORTANT:
  // server.cjs is inside the dist folder when Render runs the app.
  // Therefore __dirname already points to:
  //
  // /opt/render/project/src/dist
  //
  // Do NOT add another "dist" here.

  app.use(express.static(__dirname));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

// ============================================================
// START SERVER
// ============================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
