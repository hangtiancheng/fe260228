import { useAppServices } from "../../app/use-app-services";
import { EmptyState, ErrorState, LoadingState } from "../../shared/ui";
import { Badge } from "@/shared/ui/components/badge";
import { CourseCard } from "./course-card";
import { useCourseCatalog } from "./use-course-catalog";

export function CourseCatalog() {
  const { config } = useAppServices();
  const state = useCourseCatalog();

  return (
    <div className="flex flex-col gap-8">
      <header className="text-center">
        <Badge className="bg-primary/10 text-primary mb-3" variant="secondary">
          Vocabulary Courses
        </Badge>
        <h1 className="text-4xl font-black">Curated vocabulary tracks</h1>
        <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
          Pick a track and start practicing with focused word batches.
        </p>
      </header>
      {state.error ? <ErrorState /> : null}
      {state.isLoading ? <LoadingState /> : null}
      {!state.isLoading && state.courses.length === 0 ? <EmptyState /> : null}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {state.courses.map((course) => (
          <CourseCard
            course={course}
            key={course.id}
            serverBaseUrl={config.serverApiBaseUrl}
          />
        ))}
      </section>
    </div>
  );
}
