require("dotenv").config();

// Import OpenAI library
const { Configuration, OpenAIApi } = require("openai");

// Configure OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Function to get response from the assistant
async function getAssistantResponse(prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4", // specify the model you are using
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: prompt },
      ],
      max_tokens: 150, // you can adjust the number of tokens as needed
    });

    console.log(response.data.choices[0].message.content.trim());
  } catch (error) {
    console.error("Error getting response from OpenAI:", error);
  }
}

// Example usage
const prompt =
  "Explain the benefits of using Node.js for server-side programming.";
const systemMessage = "This is a sample system message";

getAssistantResponse(prompt);
