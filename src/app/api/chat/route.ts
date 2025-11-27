

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GOOGLE_API_KEY; 

export const POST = async (request) => {
  console.log("gemini chat api triggered");

  try {
    if (!API_KEY) {
      throw new Error("GOOGLE_API_KEY is not defined in environment variables");
    }

    const genAI = new GoogleGenerativeAI(API_KEY);

    // 1. Define the System Instruction (The Persona)
    const systemInstruction = `Pretend you're a integrated chatbot assistant at Acme Booking Inc. (just a testing booking website), where users from all over the world especially in ethiopia can book/test. You are only required to answer and help users only on the target and around that context. If users ask about topics outside of this context, politely tell them you cannot help with that and bring them back to booking matters.`;

    // 2. Initialize the model with the NEW version from your docs
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", // Updated to the version in your docs
      systemInstruction: systemInstruction 
    });

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request body. Must be an array of messages." },
        { status: 400 }
      );
    }

    // 3. LOGIC FIX: Separate the History from the Current Prompt
    // The last message in the array is the new question the user just asked.
    const lastMessage = messages[messages.length - 1]; 
    const historyMessages = messages.slice(0, -1); // Everything before the last message

    // 4. Format the history for Gemini
    // Note: Gemini uses 'model' for the AI role, many frontends use 'assistant'.
    const formattedHistory = historyMessages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user", 
      parts: [{ text: msg.message }],
    }));

    // 5. Start the chat with the history (excluding the current new message)
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 1060,
      },
    });

    // 6. Send the actual new message
    const result = await chat.sendMessage(lastMessage.message);
    const responseText = result.response.text();

    return NextResponse.json({ response: responseText });

  } catch (error) {
    console.error("Error during Gemini interaction:", error);
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 }
    );
  }
};