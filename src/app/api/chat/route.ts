import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NAME, DESCRIPTION, EMAIL, PROJECTS, EXPERIENCE, EDUCATION, WORK_HISTORY } from '@/lib/data';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Construct the system prompt with context
  const cvContext = `
    ${NAME} - ${DESCRIPTION}
    
    Email: ${EMAIL}
    
    Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
    
    Education: ${EDUCATION.map(e => `${e.school} (${e.degree} ${e.year})`).join(', ')}
    
    Experience: ${WORK_HISTORY.map(w => `${w.role} at ${w.company} (${w.period})`).join(', ')}
    
    Skills: ${EXPERIENCE.join(', ')}
  `;

  const systemPrompt = `You are Buddy, Gaspard Hassenforder's AI assistant.
  Provide concise, relevant information based on his background.
  
  CV Context:
  ${cvContext}
  
  Be professional, helpful, and concise. If information isn't available, 
  suggest contacting Gaspard at ${EMAIL}.`;

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages,
    system: systemPrompt,
  });

  return result.toDataStreamResponse();
}
