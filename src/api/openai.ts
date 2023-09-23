import OpenAI from "openai/index";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import { ChatCompletion } from "openai/resources/chat/completions";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

type OpenAiType = { messageInput: string };

async function OpenAi({ messageInput }: OpenAiType) {
  try {
    // Input validation
    if (messageInput.length === 0) {
      throw new Error("Invalid message input");
    }

    // Input sanitization (using a library like DOMPurify for XSS protection)
    const sanitizedInput = DOMPurify.sanitize(messageInput);

    return openai.chat.completions.create({
      messages: [{ role: "user", content: sanitizedInput }],
      model: "gpt-3.5-turbo",
    });
  } catch (error) {
    console.error("Error from OpenAI: ", error);
    const errorMessage: ChatCompletion = {
      id: uuidv4(),
      choices: [
        {
          finish_reason: "stop",
          index: 0,
          message: {
            content: "An error occurred please try again",
            role: "assistant",
          },
        },
      ],
      model: "gpt-3.5-turbo-0613",
      object: "chat.completion",
      created: 0,
    };

    return errorMessage;
  }
}

export default OpenAi;
