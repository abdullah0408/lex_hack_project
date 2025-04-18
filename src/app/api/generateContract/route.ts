// app/api/generateContract/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
    const rawText = await request.text();

  if (!rawText || rawText.length < 2 || !rawText) {
    return NextResponse.json({ error: 'At least two parties and contract details are required.' }, { status: 400 });
  }

  const contractText = `
  You are a legal assistant tasked with drafting a **contract** in **markdown format**.

  The contract involves the following parties:
  
  ---
  
  ${rawText}
  
  ---
  
  ### Contract Details:
  ${rawText}
  
  ---
  
  ### Instructions for the Contract:
  Draft a professional and clear contract using the above details. Make sure to include terms and conditions, obligations of the parties, and the consequences of non-compliance.
  Ensure the contract is legally sound and appropriate for the parties involved.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: contractText,
    });

    const contractMarkdown = response.text || 'No contract generated.';

    return NextResponse.json({ contractMarkdown });
  } catch (error) {
    console.error('Error generating contract:', error);
    return NextResponse.json({ error: 'Error generating contract' }, { status: 500 });
  }
}
