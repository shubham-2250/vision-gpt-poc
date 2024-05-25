require("dotenv").config();

// Import OpenAI library
const { OpenAI } = require("openai");
const path = require("path");

export function extractJSON(text) {
  const jsonRegex = /(\{.*\}|\[.*\])/s;
  const match = text.match(jsonRegex);
  if (match) {
    try {
      console.log(JSON.parse(match[0]));
      return JSON.parse(match[0]);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return { error: "Invalid JSON", content: match[0] };
    }
  } else {
    return { error: "No JSON found in the text", content: text };
  }
}

export async function getAssistantResponse(prompt, systemMessage) {
  try {
    // Configure OpenAI API clientcls

    const openai = new OpenAI(process.env.OPENAI_API_KEY);
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

// Function to read a file and extract its text content
// export function extractText(relativeFilePath) {
//   // Resolve the relative path to an absolute path
//   const filePath = path.resolve(__dirname, relativeFilePath);

//   // Read the file asynchronously
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading the file:", err);
//       return "Error reading the file:";
//     }
//     console.log("File content:", data);
//     return data;
//   });
// }
