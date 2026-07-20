import { BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import type { Course } from "../../shared/api/course-schema";
import { Badge } from "@/shared/ui/components/badge";
import { Button } from "@/shared/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/ui/components/card";
import { createCourseImageUrl } from "./course-image";

export type CourseCardProps = {
  readonly course: Course;
  readonly serverBaseUrl: string;
};

export function CourseCard({ course, serverBaseUrl }: CourseCardProps) {
  const imageUrl = createCourseImageUrl(serverBaseUrl, course.url);
  const learnUrl = `/courses/learn/${encodeURIComponent(course.id)}/${encodeURIComponent(course.name)}`;

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="overflow-hidden shadow-sm transition-shadow hover:shadow-md">
        <div className="bg-muted relative -mt-6 aspect-4/3 overflow-hidden rounded-t-lg">
          <img
            alt={course.name}
            className="size-full object-cover"
            src={imageUrl}
          />
          <Badge
            className="bg-primary/10 text-primary absolute top-4 left-4"
            variant="secondary"
          >
            Vocabulary
          </Badge>
        </div>
        <CardHeader>
          <h3 className="font-display text-lg leading-none font-semibold tracking-tight">
            {course.name}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {course.description ?? "Focused vocabulary practice course."}
          </p>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-muted-foreground flex items-center gap-2 text-sm">
              <GraduationCap aria-hidden="true" size={16} />
              {course.teacher}
            </span>
            <span className="text-primary text-xl font-black">
              ¥{course.price}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <a href={learnUrl}>
              <BookOpen aria-hidden="true" />
              Start learning
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
