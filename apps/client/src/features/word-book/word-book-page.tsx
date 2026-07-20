import { BookOpen } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { EmptyState, ErrorState, LoadingState } from "../../shared/ui";
import { Badge } from "@/shared/ui/components/badge";
import { useWordBook } from "./use-word-book";
import { WordBookControls } from "./word-book-controls";
import { WordBookPagination } from "./word-book-pagination";
import { WordCard } from "./word-card";

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function WordBook() {
  const state = useWordBook();

  return (
    <div className="flex flex-col gap-8">
      <header className="text-center">
        <Badge
          className="bg-primary/10 text-primary mb-3 gap-2 [&>svg]:size-4"
          variant="secondary"
        >
          <BookOpen aria-hidden="true" />
          Vocabulary Library
        </Badge>
        <h1 className="text-4xl font-bold">Explore the word book</h1>
        <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
          Search curated dictionary entries across exam tracks, frequency lists,
          and safe translated notes.
        </p>
      </header>
      <WordBookControls
        filters={state.filters}
        search={state.search}
        setWord={state.setWord}
        toggleFilter={state.toggleFilter}
      />
      {state.error ? <ErrorState /> : null}
      {state.isLoading ? <LoadingState /> : null}
      {!state.isLoading && state.words.length === 0 ? <EmptyState /> : null}
      <motion.ul
        animate="show"
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        variants={listVariants}
      >
        {state.words.map((word) => (
          <motion.li key={word.id} variants={itemVariants}>
            <WordCard word={word} />
          </motion.li>
        ))}
      </motion.ul>
      {!state.isLoading && state.total > 0 ? (
        <WordBookPagination
          page={state.page}
          setPage={state.setPage}
          total={state.total}
          totalPages={state.totalPages}
        />
      ) : null}
    </div>
  );
}
