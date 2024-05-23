

type Role = 'system' | 'user' | 'assistant';

interface Message {
  role: Role;
  content: string;
}

interface CompletionRequest {
  model: string;
  messages: Message[];
  max_tokens: number;
}

interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: { message: Message }[];
}

const requestData: CompletionRequest = {
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Once upon a time' }],
  max_tokens: 100,
};
export async function getCompletion() {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer apiKey`,
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: CompletionResponse = await response.json() as CompletionResponse;
    console.log('Response:', data);

    // Print the completion response content
    data.choices.forEach(choice => {
      console.log('Assistant:', choice.message.content);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getCompletion();
