import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/context/theme-provider";
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { MoveLeft, MoveRight } from "lucide-react";
import ChatBot from "@/components/chat-bot";

const { Frame, Logo } = Icons;

const mockData = {
  message:
      "olivia.martin@email.com olivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.comolivia.martin@email.com",
  imageSrc: "",
  name: "Olivia Martin King",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider storageKey="vite-ui-theme">
      <Layout>
        <Section className="flex flex-col items-center gap-12 py-16 text-center">
          <h1>
            <span className="text-primary">AI</span> Chatbot
          </h1>
          <p className="w-[39%]">
            We’ve trained a model called ChatGPT which interacts in a
            conversational way.
          </p>
          <Button
            type="button"
            className="h-[56px] py-0 px-[90px]"
            variant="secondary"
          >
            Continue
          </Button>
        </Section>
        <Section className="flex flex-col items-center gap-12 py-16">
          <Frame />
        </Section>
        <Section className="flex flex-col items-start gap-12 py-16">
          <h1>
            Start chatting with <span className="text-primary">AI.</span>
          </h1>
          <div>
            <p className="w-[65%]">
              Chat about any topic with ChatGPT in any time. It can be your
              friend, tutor or therapist.
            </p>
          </div>
          <Button className="p-0" variant="link">
            Let's start chat
            <span className="ml-4">
              <MoveRight />
            </span>
          </Button>
          <div className="border rounded-2xl p-2 flex gap-8">
            <div className="w-2/5 bg-accent-background rounded-l-2xl flex flex-col">
              <Button className="p-0 ml-8 mt-4" variant="link">
                <span className="mr-4">
                  <MoveLeft />
                </span>
                Back
              </Button>
              <div className="text-center px-20 py-28">
                <h2>
                  <span className="text-primary">AI</span> Chatbot
                </h2>
                <p>
                  We’ve trained a model called ChatGPT which interacts in a
                  conversational way.
                </p>
              </div>
              <Frame className="w-full h-auto" />
            </div>
            <div className="w-3/5 flex flex-col justify-between">
              <Logo className="mt-12" />
              <div className="self-center w-3/4">
                <ChatBot clientData={mockData} />
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
);
