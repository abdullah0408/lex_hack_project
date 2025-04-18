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
  You are a helpful assistant tasked with drafting a **formal First Information Report (FIR)** in **markdown format**.
  
  Use the following data:
  
  ---
  
  ### FIR Details:
  ${Object.entries(firDetails)
    .map(([key, value]) => `- **${key}**: ${value}`)
    .join('\n')}
  
  ---
  
  ### Follow-up Responses:
  ${questionAnswers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((qa: any) => `- **${qa.question}**: ${qa.answer}`)
    .join('\n')}
  
  ---
  
  ### Instructions for the Report:
  
  Write a **well-structured, professional FIR** in clear and formal language. Use markdown formatting with proper headings such as:
  
  - **1. Complainant Details**  
  - **2. Incident Summary**  
  - **3. Accused Details (if known)**  
  - **4. Witnesses (if any)**  
  - **5. Evidence (if any)**  
  - **6. Legal Action Recommended**
  
  In the final section of the FIR titled **Legal Action Recommended**, please mention:
  
  - The **legal action that should be taken**.
  - The **relevant sections of the Indian Penal Code (IPC)** or any other applicable Indian law under which the accused can be charged.
  
  Ensure the tone is formal, factual, and free from emotional or biased language.
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
