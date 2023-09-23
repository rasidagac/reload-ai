"use client"

import { ScrollArea } from "@components/ui/scroll-area";
import ChatBotForm, { FormData } from "@components/chat-bot/Form";
import { JSX, useEffect, useRef } from "react";

type ChatBotType = {
  formOnSubmit: (values: FormData) => void;
  children: Array<JSX.Element>;
};

const ChatBot = ({ formOnSubmit, children }: ChatBotType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [children.length]);

  return (
    <div>
      <ScrollArea ref={ref} className="h-[30rem]">
        {children}
      </ScrollArea>
      <div className="mt-12 relative">
        <ChatBotForm formOnSubmit={formOnSubmit} />
      </div>
    </div>
  );
};

export default ChatBot;
