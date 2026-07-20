import { useEffect, useState } from "react";
import { useAppServices } from "../../app/use-app-services";
import type { Course, CourseList } from "../../shared/api/course-schema";

export function useCourseCatalog() {
  const { api } = useAppServices();
  const [courses, setCourses] = useState<CourseList>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCourses = () => {
    setIsLoading(true);
    setError(null);
    void api.course
      .getCourseList()
      .then(setCourses)
      .catch(() => setError("Unable to load courses."))
      .finally(() => setIsLoading(false));
  };

  useEffect(loadCourses, [api.course]);

  return {
    courses,
    error,
    isLoading,
    loadCourses,
  };
}
