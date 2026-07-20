import { Badge } from "@/shared/ui/components/badge";
import { Button } from "@/shared/ui/components/button";
import { EmptyState, ErrorState, LoadingState } from "../../shared/ui";
import { LearningCompleteCard } from "./learning-complete-card";
import type { LearnRouteParams } from "./learn-route-params";
import { SpellingGrid } from "./spelling-grid";
import { useLearningSession } from "./use-learning-session";
import { WordDetailCard } from "./word-detail-card";

export type CourseLearningProps = {
  readonly params: LearnRouteParams | null;
};

export function CourseLearning({ params }: CourseLearningProps) {
  if (!params) return <ErrorState />;

  return (
    <CourseLearningContent courseId={params.courseId} title={params.title} />
  );
}

type CourseLearningContentProps = {
  readonly courseId: string;
  readonly title: string;
};

function CourseLearningContent({
  courseId,
  title,
}: CourseLearningContentProps) {
  const session = useLearningSession(courseId);
  const currentPosition = session.currentIndex + 1;

  return (
    <div className="flex flex-col gap-6">
      <header className="text-center">
        <Badge variant="secondary" className="mb-3">
          Learning mode
        </Badge>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-3">
          Spell each word after reading the definition and translation.
        </p>
      </header>
      {session.error ? <ErrorState /> : null}
      {session.isLoading ? <LoadingState /> : null}
      {!session.isLoading && session.words.length === 0 ? <EmptyState /> : null}
      {session.currentWord ? (
        <>
          <div className="text-muted-foreground flex justify-between text-sm">
            <span>
              Word {currentPosition} / {session.words.length}
            </span>
          </div>
          <WordDetailCard
            isHidden={session.isWordHidden}
            toggleHidden={() => session.setIsWordHidden((value) => !value)}
            word={session.currentWord}
          />
          <SpellingGrid cells={session.cells} updateCell={session.updateCell} />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={session.previous} type="button">
              Previous
            </Button>
            <Button
              disabled={!session.isComplete}
              onClick={session.next}
              type="button"
            >
              Next
            </Button>
          </div>
        </>
      ) : null}
      {!session.currentWord && session.words.length > 0 ? (
        <LearningCompleteCard saveMasteredWords={session.saveMasteredWords} />
      ) : null}
    </div>
  );
}
