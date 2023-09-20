import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export type FormData = {
  messageInput: string;
};

type ChatBotForm = {
  formOnSubmit: (values: FormData) => void;
};

const ChatBotForm = ({ formOnSubmit }: ChatBotForm) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const form = useForm<FormData>({
    defaultValues: {
      messageInput: "",
    },
  });

  const { control, watch, reset, formState, handleSubmit } = form;

  const messageInputValue = watch("messageInput");

  useEffect(() => {
    if (messageInputValue.length < 1) setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  }, [messageInputValue.length]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ messageInput: "" });
  }, [formState, reset]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(formOnSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="messageInput"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-16 px-6 rounded-full"
                  type="text"
                  autoComplete="off"
                  placeholder="Message"
                  disabled={formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="absolute h-16 flex items-center right-0 top-0 pr-4 !mt-0">
          <Button disabled={isButtonDisabled || formState.isSubmitting} type="submit" size="icon">
            {formState.isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowRight />}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChatBotForm;
