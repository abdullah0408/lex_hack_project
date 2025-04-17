// app/api/generateQuestions/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai'; // Import the GoogleGenAI SDK

// Initialize the AI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  const { firDetails } = await request.json(); // Extract FIR details from the request body
  
  if (!firDetails) {
    return NextResponse.json({ error: 'FIR details are required' }, { status: 400 });
  }

  try {
    // Construct the prompt for generating questions
    const prompt = `
      You are an intelligent assistant helping generate a First Information Report (FIR) based on a user's description of an incident.

      The user has submitted the following problem description:
      """${firDetails}"""

      Your task is to analyze this information and return clear, concise follow-up questions that will help clarify important missing details needed to draft a complete and accurate FIR.
      Focus on things like:
      - Exact time/place of the incident
      - People involved (witnesses, suspects)
      - Type of offense
      - Any harm/damage caused
      - Police action needed, etc.

      Respond in JSON format like:
      {
        "questions": [
          "What was the exact time and date of the incident?",
          "Were there any eyewitnesses present?",
          "Was any person injured or harmed during the incident?",
          "Did you report the matter to local authorities?",
          "Do you know the identity of the person(s) involved?"
        ],
        "user_information" : {
          "name": "John Doe",
          "address": "123 Main St, City, State, Zip",
          "phone": "123-456-7890"
        }
      }
    `;

    console.log('Prompt:', prompt); // Log the prompt for debugging (optional)

    // Call the Gemini API to generate questions based on the prompt
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // Log the response for debugging (optional)
    console.log(response.text);

    if (!response || !response.text) {
      return NextResponse.json({ error: 'Failed to generate questions' }, { status: 500 });
    }

    // Extract the generated questions (assumed to be in JSON format)
    const jsonStart = response.text.indexOf('{');
    const jsonEnd = response.text.lastIndexOf('}');
    const jsonString = response.text.substring(jsonStart, jsonEnd + 1);
    const data = JSON.parse(jsonString);

    // Return the generated questions as a JSON response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error generating questions:', error);
    return NextResponse.json({ error: 'Error generating questions' }, { status: 500 });
  }
}
