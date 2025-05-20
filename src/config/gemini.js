import { GoogleGenerativeAI } from "@google/generative-ai"; // Use import instead of require

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Ensure this is stored in a .env file
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro", // Ensure correct model name
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text(); // Returns generated text
}

export default run;
