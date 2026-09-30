import type { Word } from "../../shared/api/word-schema";
import { Badge } from "@/shared/ui/components/badge";
import { wordFilterOptions } from "./word-filter";

export type WordBadgesProps = {
  readonly word: Word;
};

export function WordBadges({ word }: WordBadgesProps) {
  const labels = wordFilterOptions.filter((option) => word[option.key]);

  if (labels.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((option) => (
        <Badge
          className="bg-primary/10 text-primary"
          key={option.key}
          variant="secondary"
        >
          {option.label}
        </Badge>
      ))}
    </div>
  );
}
