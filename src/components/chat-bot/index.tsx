import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

type ChatBot = {
  clientData: {
    imageSrc: string;
    name: string;
    message: string;
  };
};

const ChatBot = ({ clientData }: ChatBot) => {
  const { imageSrc, name, message } = clientData;

  const clientNameFirstLetters =
    name
      .split(" ")
      .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
      .join("") || "R";

  return (
    <ScrollArea>
      <div className="flex justify-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src={imageSrc} alt="Avatar" />
          <AvatarFallback>{clientNameFirstLetters}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="table-cell align-middle text-sm font-medium leading-none h-9">
            {name}
          </p>
          <p className="text-sm break-all text-primary-foreground">{message}</p>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ChatBot;
