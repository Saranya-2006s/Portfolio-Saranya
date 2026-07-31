import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { GoogleGenAI } from '@google/genai';

function expressApiPlugin(): Plugin {
  return {
    name: 'express-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/ai/ask' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { question, portfolioContext } = JSON.parse(body || '{}');
              const apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'GEMINI_API_KEY environment variable is missing.' }));
              }

              const ai = new GoogleGenAI({
                apiKey: apiKey,
                httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
              });

              const systemPrompt = `You are a professional, friendly AI portfolio assistant for ${portfolioContext?.profile?.name || 'the developer'}.
Your task is to answer recruiter, engineering manager, or prospective client questions about this developer's background, technical skills, projects, and work experience.

Developer Information:
- Name: ${portfolioContext?.profile?.name}
- Title: ${portfolioContext?.profile?.title}
- Bio: ${portfolioContext?.profile?.bio}
- Location: ${portfolioContext?.profile?.location}
- Email: ${portfolioContext?.profile?.email}
- Availability: ${portfolioContext?.profile?.availability}
- Key Skills: ${portfolioContext?.skills?.map((s: any) => `${s.name} (${s.level})`).join(', ')}
- Featured Projects: ${portfolioContext?.projects?.map((p: any) => `${p.title}: ${p.description}`).join(' | ')}
- Work History: ${portfolioContext?.experiences?.map((e: any) => `${e.role} at ${e.company} (${e.period})`).join(' | ')}

Guidelines:
1. Provide concise, impressive, polite, and accurate answers based on the developer's context.
2. If asked about something not mentioned, politely offer to connect them via email (${portfolioContext?.profile?.email}).`;

              const aiRes = await ai.models.generateContent({
                model: 'gemini-3.6-flash',
                contents: question,
                config: { systemInstruction: systemPrompt, temperature: 0.7 },
              });

              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ answer: aiRes.text }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: err.message || 'AI request failed' }));
            }
          });
          return;
        }

        if (req.url === '/api/ai/enhance' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { type, content, context } = JSON.parse(body || '{}');
              const apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'GEMINI_API_KEY environment variable is missing.' }));
              }

              const ai = new GoogleGenAI({
                apiKey: apiKey,
                httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
              });

              let prompt = '';
              if (type === 'bio') {
                prompt = `Polish and improve the following professional developer bio to make it engaging, clean, clear, and impactful for tech recruiters:\n\n"${content}"\n\nDeveloper Title: ${context?.title || 'Software Engineer'}`;
              } else if (type === 'project') {
                prompt = `Improve this software project description to highlight technical problem solving, architecture impact, and clean developer phrasing:\n\nProject Title: ${context?.title}\nOriginal Description:\n"${content}"`;
              } else {
                prompt = `Refine and improve the following technical text for a software portfolio:\n\n"${content}"`;
              }

              const aiRes = await ai.models.generateContent({
                model: 'gemini-3.6-flash',
                contents: prompt,
                config: {
                  systemInstruction: 'You are an expert technical recruiter and portfolio copywriter. Return polished, high-quality, ready-to-use prose without meta commentary.',
                  temperature: 0.6,
                },
              });

              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ enhancedText: aiRes.text }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: err.message || 'Enhance failed' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), expressApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
