import { RotateCcw, TriangleAlert } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../shared/ui/components/alert";
import { Button } from "../../shared/ui/components/button";

export type ChatStreamErrorProps = {
  readonly message: string;
  readonly retry: () => void;
};

export function ChatStreamError({ message, retry }: ChatStreamErrorProps) {
  return (
    <Alert className="items-start" variant="destructive">
      <TriangleAlert aria-hidden="true" size={22} />
      <AlertTitle className="font-bold">Streaming interrupted</AlertTitle>
      <AlertDescription className="flex items-center justify-between gap-3">
        <p className="text-sm">{message}</p>
        <Button onClick={retry} size="sm" type="button">
          <RotateCcw aria-hidden="true" size={16} />
          Retry
        </Button>
      </AlertDescription>
    </Alert>
  );
}
