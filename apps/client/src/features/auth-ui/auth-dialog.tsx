import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/ui/components/dialog";
import { WordMarquee } from "../word-marquee";
import { LoginForm } from "./login-form";
import type { AuthMode } from "./auth-mode";
import { RegisterForm } from "./register-form";

export type AuthDialogProps = {
  readonly close: () => void;
  readonly isOpen: boolean;
};

export function AuthDialog({ close, isOpen }: AuthDialogProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) close();
      }}
      open={isOpen}
    >
      <DialogContent
        className="grid max-w-6xl gap-0 overflow-hidden p-0 sm:max-w-6xl"
        showCloseButton
      >
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
          <WordMarquee
            eyebrow={
              mode === "login" ? "Welcome word stream" : "Starter word stream"
            }
            title={
              mode === "login"
                ? "Warm up with words before your next session."
                : "Build your first practice loop with living vocabulary."
            }
          />
          <div className="bg-card relative flex min-h-96 flex-col justify-center p-8">
            {mode === "login" ? (
              <LoginForm close={close} setMode={setMode} />
            ) : (
              <RegisterForm close={close} setMode={setMode} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
