import { AnimatePresence, motion } from "motion/react";
import type { ChatMessageList as ChatMessages } from "../../shared/api/chat-schema";
import { EmptyState } from "../../shared/ui";
import { Spinner } from "../../shared/ui/components/spinner";
import { MarkdownMessage } from "./markdown-message";

export type ChatMessageListProps = {
  readonly messages: ChatMessages;
};

export function ChatMessageList({ messages }: ChatMessageListProps) {
  if (messages.length === 0) return <EmptyState />;

  return (
    <div className="bg-card flex min-h-[34rem] flex-col gap-5 overflow-y-auto rounded-xl border p-5">
      <AnimatePresence>
        {messages.map((message, index) => {
          const key = `${message.role}-${index}`;
          if (message.role === "human") {
            return (
              <motion.div
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex justify-end"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                key={key}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="bg-primary text-primary-foreground ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm px-4 py-3">
                  {message.content}
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="flex flex-col items-start gap-1"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              key={key}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span className="text-muted-foreground px-1 text-xs">
                fe260228
              </span>
              {message.reasoning ? (
                <div className="bg-secondary text-muted-foreground mr-auto w-fit max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-2 text-xs">
                  {message.reasoning}
                </div>
              ) : null}
              <div className="bg-muted text-muted-foreground mr-auto w-fit max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                {message.content ? (
                  <MarkdownMessage content={message.content} />
                ) : (
                  <Spinner className="size-4" />
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
