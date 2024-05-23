require("dotenv").config();

// Import OpenAI library
const { Configuration, OpenAI } = require("openai");

// Configure OpenAI API clientcls

const openai = new OpenAI(process.env.OPENAI_API_KEY);
// Function to get response from the assistant
async function getAssistantResponse(prompt, systemMessage) {
  try {
    console.log("hello bhai 3");
    console.log(systemMessage);

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: prompt },
      ],
      stream: true,
    });
    var str = "";
    for await (const chunk of stream) {
      // process.stdout.write();
      str = str.concat(chunk.choices[0]?.delta?.content || "");
    }
    console.log(str);
    return str.trim();
  } catch (error) {
    console.error("Error getting response from OpenAI:", error);
    return "An error occurred while getting the response from the assistant.";
  }
}

// Example usage
const prompt =
  "Explain the benefits of using Node.js for server-side programming.";

export async function DefiningWorkflow(prompt) {
  try {
    console.log("hello bhai 1");
    const response = await getAssistantResponse(
      prompt,
      ' Given a ListOfFunctions and parameters required select a json and fill appropriate parameters  \r\n ListOfFunctions :- \r\n { name : "get_weather" ,  location : "abc"}  \r\n { name : "get_temperature" ,  location : "abc"} '
    );
    const json = extractJSON(response);
    return json;
  } catch (error) {
    console.error("Error getting response from OpenAI:", error);
    return "An error occurred while getting the response from the assistant.";
  }
}

function extractJSON(text) {
  const jsonRegex = /(\{.*\}|\[.*\])/s;
  const match = text.match(jsonRegex);
  if (match) {
    try {
      return JSON.parse(match[0]);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return { error: "Invalid JSON", content: match[0] };
    }
  } else {
    return { error: "No JSON found in the text", content: text };
  }
}
