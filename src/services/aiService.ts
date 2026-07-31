import { PortfolioData } from '../types/portfolio';

export async function askAiAssistant(question: string, portfolioContext: PortfolioData): Promise<string> {
  try {
    const res = await fetch('/api/ai/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, portfolioContext }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error ${res.status}`);
    }

    const data = await res.json();
    return data.answer || "I'm sorry, I couldn't generate an answer right now.";
  } catch (err: any) {
    console.error('API call failed:', err);
    // Graceful offline / fallback response
    return `Hello! I am ${portfolioContext.profile.name}'s AI assistant. ${portfolioContext.profile.name} is a ${portfolioContext.profile.title} with ${portfolioContext.profile.yearsOfExperience}+ years of experience. For specific inquiries or to discuss opportunities, feel free to reach out directly at ${portfolioContext.profile.email}!`;
  }
}

export async function enhanceTextWithAi(
  type: 'bio' | 'project',
  content: string,
  context?: { title?: string }
): Promise<string> {
  try {
    const res = await fetch('/api/ai/enhance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, content, context }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error ${res.status}`);
    }

    const data = await res.json();
    return data.enhancedText || content;
  } catch (err: any) {
    console.error('Enhance API call failed:', err);
    return content;
  }
}
