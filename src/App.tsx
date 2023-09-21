import Layout from "@components/Layout";
import Section from "@components/ui/section";
import { Button } from "@components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { Icons } from "@components/ui/icons";
import ChatBotContainer from "@container/chat-bot";
import { Separator } from "@components/ui/separator";
import Cta from "@components/ui/cta";

const { Frame, Logo } = Icons;

function App() {
  return (
    <Layout>
      <Cta
        title={
          <>
            <span className="text-primary">AI</span> Chatbot
          </>
        }
        description="We’ve trained a model called ChatGPT which interacts in a conversational way."
        buttonLabel="Continue"
        className="text-center items-center"
        innerProps={{
          buttonProps: {
            variant: "secondary",
          },
          descriptionProps: {
            className: "w-[39%]",
          },
        }}
      />
      <Section className="flex flex-col items-center gap-12">
        <Frame className="w-full" />
      </Section>
      <Cta
        title={
          <>
            Start chatting with <span className="text-primary">AI.</span>
          </>
        }
        description="Chat about any topic with ChatGPT in any time. It can be your friend, tutor or therapist."
        buttonLabel="Let's start chat"
        innerProps={{
          buttonProps: {
            variant: "link",
            className: "p-0",
          },
          descriptionProps: {
            className: "w-[39%]",
          },
        }}
        buttonIcon={<MoveRight />}
      />
      <Section>
        <div className="flex border border-primary-foreground rounded-2xl p-4 gap-8">
          <div className="w-5/12 bg-accent-background justify-between rounded-l-2xl flex flex-col">
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
          <div className="w-7/12 py-12 flex flex-col justify-between">
            <Logo className="fill-primary" />
            <div className="self-center w-3/4">
              <ChatBotContainer />
            </div>
          </div>
        </div>
      </Section>
      <div className="py-44">
        <Separator className="bg-foreground" />
        <Section className="flex h-[70rem] space-x-14">
          <div className="w-1/2 flex flex-col py-20 justify-center space-y-20">
            <Cta
              title="Chat with unique characters"
              description="You can chat many different characters for a few set of topics and interests."
              buttonLabel="Let's start chat"
            />
            <div className="py-64 rounded-2xl bg-neutral-900" />
          </div>
          <Separator orientation="vertical" className="bg-primary-foreground" />
          <div className="w-1/2 self-center text-lg text-primary-foreground grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-12 ">
            <div>
              <img
                src="src/assets/img/image-5.png"
                alt="Hitachi Digital Brand Ecosystem"
              />
              <p>Hitachi Digital Brand Ecosystem</p>
            </div>
            <div>
              <img src="src/assets/img/image-4.png" alt="Stråbe" />
              <p>Stråbe</p>
            </div>
            <div className="row-start-2">
              <img src="src/assets/img/image-3.png" alt="Commons" />
              <p>Commons</p>
            </div>
            <div className="row-start-2">
              <img src="src/assets/img/image-2.png" alt="Aeizei" />
              <p>Aeizei</p>
            </div>
            <div className="row-start-3">
              <img src="src/assets/img/image-1.png" alt="Zvurçyk Fashion" />
              <p>Zvurçyk Fashion</p>
            </div>
            <div className="row-start-3">
              <img src="src/assets/img/image.png" alt="Lancome" />
              <p>Lancome</p>
            </div>
          </div>
        </Section>
        <Separator className="bg-primary-foreground" />
      </div>
      <div className="pt-44 pb-56  flex flex-col gap-y-12 items-center text-center bg-gradient-to-b from-neutral-950 to-background">
        <Cta
          buttonLabel="Get started for free"
          title={
            <>
              Let's experiencing the new internet
              <span className="text-primary"> today.</span>
            </>
          }
          innerProps={{
            titleProps: {
              className: "lg:w-3/5",
            },
          }}
          className="items-center"
        />
      </div>
    </Layout>
  );
}

export default App;
