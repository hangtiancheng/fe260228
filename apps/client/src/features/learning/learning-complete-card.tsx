import { motion } from "motion/react";
import { Button } from "@/shared/ui/components/button";

export type LearningCompleteCardProps = {
  readonly saveMasteredWords: () => Promise<void>;
};

export function LearningCompleteCard({
  saveMasteredWords,
}: LearningCompleteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <section className="bg-muted flex min-h-96 items-center justify-center rounded-lg">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold">Batch complete</h2>
          <p className="text-muted-foreground py-4">
            Save this set as mastered and load the next focused practice batch.
          </p>
          <Button onClick={() => void saveMasteredWords()} type="button">
            Practice next batch
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
