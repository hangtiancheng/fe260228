import { TriangleAlertIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/ui/components/alert";

export function ErrorState() {
  return (
    <Alert variant="destructive">
      <TriangleAlertIcon data-icon="inline-start" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Unable to load this area. Please try again later.
      </AlertDescription>
    </Alert>
  );
}
