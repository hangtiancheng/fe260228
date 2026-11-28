import { Volume2 } from "lucide-react";
import { motion } from "motion/react";
import type { Word } from "../../shared/api/word-schema";
import { speakText } from "../../shared/browser";
import { Button } from "@/shared/ui/components/button";
import { Card, CardContent } from "@/shared/ui/components/card";
import { MarkdownMessage } from "../chat/markdown-message";
import { WordBadges } from "./word-badges";

export type WordCardProps = {
  readonly word: Word;
};

export function WordCard({ word }: WordCardProps) {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full shadow-sm transition-shadow hover:shadow-md">
        <CardContent className="flex flex-col gap-4">
          <div>
            <h2 className="text-primary text-xl font-semibold">{word.word}</h2>
            <Button
              className="mt-1"
              onClick={() => speakText(word.word)}
              size="xs"
              type="button"
              variant="ghost"
            >
              <Volume2 aria-hidden="true" />
              {word.phonetic ?? "Play pronunciation"}
            </Button>
          </div>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {word.definition ?? "No definition available."}
          </p>
          <div className="text-muted-foreground line-clamp-3 text-sm">
            <MarkdownMessage content={word.translation ?? ""} />
          </div>
          <WordBadges word={word} />
        </CardContent>
      </Card>
    </motion.div>
  );
}
