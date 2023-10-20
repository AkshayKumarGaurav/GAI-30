import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Get the API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("OpenAI API key is not set. Please make sure it's in your .env file.");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: apiKey,
});

async function main() {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Hey chatGPT how are you' }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main();
