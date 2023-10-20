import OpenAI from 'openai';
//const mySecret= process.env.OpenAI
const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Hey chatGPT how are you' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices);
}

main();