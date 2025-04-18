// app/api/generateContractQuestions/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai'; // Import the GoogleGenAI SDK

// Initialize the AI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  const { contractDetails } = await request.json(); // Extract contract details from the request body
  
  if (!contractDetails) {
    return NextResponse.json({ error: 'Contract details are required' }, { status: 400 });
  }

  try {
    // Construct the prompt for generating questions related to contract details
    const prompt = `
      You are an intelligent assistant helping generate questions based on a user's contract description.

      The user has submitted the following contract details:
      """${contractDetails}"""

      Your task is to analyze this information and return clear, concise follow-up questions that will help clarify important missing details needed to draft a complete and accurate contract.
      Focus on things like:
      - Roles and responsibilities of each party
      - Specific terms and conditions
      - Payment or consideration involved
      - Timeframe or duration of the agreement
      - Any clauses related to dispute resolution, termination, etc.

      Respond in JSON format like:
      {
        "questions": [
          "What are the specific obligations of each party?",
          "What is the payment or consideration to be exchanged?",
          "What is the start and end date of the agreement?",
          "Are there any penalties for breach of contract?",
          "What dispute resolution method will be used?"
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
