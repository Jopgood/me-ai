import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
export type MessageType = {
  role: "user" | "assistant";
  content: string;
};

export const Message = ({ message }: { message: MessageType }) => {
  return (
    <div
      className={cn(
        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        message.role === "user"
          ? "bg-primary text-primary-foreground ml-auto"
          : "bg-muted",
      )}
    >
      <ReactMarkdown>{message.content}</ReactMarkdown>
    </div>
  );
};
