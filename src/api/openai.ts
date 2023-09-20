import OpenAI from "openai/index";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

type OpenAi = { messageInput: string };

async function OpenAi({ messageInput }: OpenAi) {
  return openai.chat.completions.create({
    messages: [{role: "user", content: messageInput}],
    model: "gpt-3.5-turbo",
  });
}

export default OpenAi;
