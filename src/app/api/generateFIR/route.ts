// app/api/generateFIR/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  const { firDetails, questionAnswers } = await request.json();

  if (!firDetails || !questionAnswers) {
    return NextResponse.json({ error: 'Missing FIR details or follow-up answers' }, { status: 400 });
  }

  const firText = `
You are a helpful assistant tasked with writing a formal First Information Report (FIR) in markdown format.

Use the following information:
- **FIR Details**:
${Object.entries(firDetails)
  .map(([key, value]) => `  - ${key}: ${value}`)
  .join('\n')}

- **Follow-up Responses**:
${questionAnswers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((qa: any) => `  - ${qa.question}: ${qa.answer}`)
  .join('\n')}

Please write a professional, structured FIR in proper markdown with headings, bullet points if needed, and clear narrative.

Make sure to include:
- Introduction
- Incident details (date, time, location)
- Persons involved
- Damages/injuries
- Action requested
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: firText,
    });

    const firMarkdown = response.text || 'No response generated.';

    return NextResponse.json({ firMarkdown });
  } catch (error) {
    console.error('Error generating FIR:', error);
    return NextResponse.json({ error: 'Error generating FIR' }, { status: 500 });
  }
}
