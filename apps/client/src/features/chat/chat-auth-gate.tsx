import { LockKeyhole } from "lucide-react";
import { Alert, AlertDescription } from "../../shared/ui/components/alert";
import { Button } from "../../shared/ui/components/button";

export type ChatAuthGateProps = {
  readonly openAuth: () => void;
};

export function ChatAuthGate({ openAuth }: ChatAuthGateProps) {
  return (
    <Alert variant="warning">
      <LockKeyhole aria-hidden="true" size={20} />
      <AlertDescription className="flex flex-wrap items-center gap-3">
        <span>Sign in to load chat history and stream AI responses.</span>
        <Button onClick={openAuth} size="sm" type="button">
          Sign in
        </Button>
      </AlertDescription>
    </Alert>
  );
}
