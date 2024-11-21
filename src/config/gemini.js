import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyBMNSBCEP7ilgvXq9fZu7G9hyttrYwuzXA";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const MODEL_NAME = "gemini-1.5-pro-latest";
// const API_KEY = "AIzaSyBMNSBCEP7ilgvXq9fZu7G9hyttrYwuzXA";

// async function runChat(prompt) {
//   try {
//     // Initialize the Google Generative AI client
//     const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });

//     const generationConfig = {
//       temperature: 1,
//       topK: 0,
//       topP: 0.95,
//       maxOutputTokens: 8192,
//     };

//     const safetySettings = [
//       { category: "HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
//       { category: "HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
//       { category: "SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
//       { category: "DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
//     ];

//     // Generate a chat response
//     const response = await genAI.generateMessage({
//       model: MODEL_NAME,
//       prompt,
//       generationConfig,
//       safetySettings,
//     });

//     console.log("Response:", response.content); // Adjust based on the actual API response
//     return response.content;
//   } catch (error) {
//     console.error("Error generating chat response:", error);
//     return "An error occurred while processing your request.";
//   }
// }

// export default runChat;
