import ChatBot from "@components/chat-bot";
import { FormData } from "@components/chat-bot/Form";
import { v4 as uuidv4 } from "uuid";
import { Avatar, AvatarFallback } from "@components/ui/avatar";
import { useEffect, useState } from "react";
import OpenAi from "@/api/openai";
import { ChatCompletion } from "openai/resources/chat/completions";

type renderedMessageType = {
  id: string;
  role: string;
  content: string | null;
};

const ChatBotContainer = () => {
  const [conversation, setConversation] = useState<Array<renderedMessageType>>(
    [],
  );
  const [responseFromOpenAi, setResponseFromOpenAi] =
    useState<ChatCompletion>();

  const formOnSubmit = async (values: FormData) => {
    setConversation([
      ...conversation,
      {
        id: uuidv4(),
        role: "user",
        content: values.messageInput,
      },
    ]);

    return await OpenAi({ messageInput: values.messageInput }).then(
      (response) => setResponseFromOpenAi(response),
    );
  };

  useEffect(() => {
    if (responseFromOpenAi?.choices[0])
      setConversation((c) => [
        ...c,
        {
          id: responseFromOpenAi.id,
          role: responseFromOpenAi.choices[0].message.role,
          content: responseFromOpenAi.choices[0].message.content,
        },
      ]);
  }, [responseFromOpenAi]);

  const renderedMessages = conversation.map((msg) => {
    const isAssistant = msg.role === "assistant";

    return (
      <div
        key={msg.id}
        className={`flex justify-start p-6 ${
          isAssistant ? "bg-[#1a1a1a] rounded-lg" : ""
        }`}
      >
        <Avatar className="h-11 w-11">
          <AvatarFallback
            className={`${
              isAssistant ? "bg-primary" : "bg-purple-300"
            } text-primary-foreground font-bold`}
          >
            {isAssistant ? "" : "R"}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p
            className={`table-cell align-middle text-sm font-medium leading-none h-11 ${
              isAssistant ? "text-primary" : ""
            }`}
          >
            {isAssistant ? "ChatGPT" : "Reload.app"}
          </p>
          <p className="text-sm break-words text-primary-foreground">
            {msg.content}
          </p>
        </div>
      </div>
    );
  });

  return <ChatBot formOnSubmit={formOnSubmit}>{...renderedMessages}</ChatBot>;
};

export default ChatBotContainer;
