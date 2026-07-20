import { Eye, EyeOff, Volume2 } from "lucide-react";
import { motion } from "motion/react";
import type { Word } from "../../shared/api/word-schema";
import { speakText } from "../../shared/browser";
import { Button } from "@/shared/ui/components/button";
import { Card, CardContent } from "@/shared/ui/components/card";
import { cn } from "@/shared/ui/lib/utils";
import { MarkdownMessage } from "../chat/markdown-message";

export type WordDetailCardProps = {
  readonly isHidden: boolean;
  readonly toggleHidden: () => void;
  readonly word: Word;
};

export function WordDetailCard({
  isHidden,
  toggleHidden,
  word,
}: WordDetailCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5">
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={toggleHidden}
          type="button"
        >
          {isHidden ? (
            <Eye aria-hidden="true" size={18} />
          ) : (
            <EyeOff aria-hidden="true" size={18} />
          )}
          {isHidden ? "Show word" : "Hide word"}
        </Button>
        <motion.div
          animate={{ filter: isHidden ? "blur(8px)" : "blur(0px)" }}
          className={cn("text-center", isHidden && "select-none")}
        >
          <h2 className="text-primary text-4xl font-bold">{word.word}</h2>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2"
            onClick={() => speakText(word.word)}
            type="button"
          >
            <Volume2 aria-hidden="true" size={16} />
            {word.phonetic ?? "Play pronunciation"}
          </Button>
        </motion.div>
        <section className="bg-muted rounded-lg p-4">
          <h3 className="text-muted-foreground mb-2 text-xs font-bold uppercase">
            Definition
          </h3>
          <MarkdownMessage
            content={word.definition ?? "No definition available."}
          />
        </section>
        <section className="bg-muted rounded-lg p-4">
          <h3 className="text-muted-foreground mb-2 text-xs font-bold uppercase">
            Translation
          </h3>
          <MarkdownMessage
            content={word.translation ?? "No translation available."}
          />
        </section>
      </CardContent>
    </Card>
  );
}
