import { Lock, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useAppServices } from "../../app/use-app-services";
import { Alert, AlertDescription } from "@/shared/ui/components/alert";
import { Button } from "@/shared/ui/components/button";
import { Field, FieldGroup, FieldLabel } from "@/shared/ui/components/field";
import { Input } from "@/shared/ui/components/input";
import type { AuthFormProps } from "./auth-form-props";
import { LoginFormSchema } from "./auth-form-schema";
import { getFormError, getUnknownErrorMessage } from "./form-error";

export function LoginForm({ close, setMode }: AuthFormProps) {
  const { api, session } = useAppServices();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const result = LoginFormSchema.safeParse(
      Object.fromEntries(new FormData(event.currentTarget)),
    );
    if (!result.success) {
      setError(getFormError(result.error));
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await api.user.login(result.data);
      session.setUser(user);
      close();
    } catch (requestError) {
      setError(getUnknownErrorMessage(requestError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={submit}>
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Welcome back
        </h2>
        <p className="text-muted-foreground text-sm">
          Sign in to continue your English practice.
        </p>
      </div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="login-phone">Phone number</FieldLabel>
          <div className="relative">
            <Phone
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="pl-9"
              id="login-phone"
              maxLength={11}
              name="phone"
              placeholder="Phone number"
            />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="login-password">Password</FieldLabel>
          <div className="relative">
            <Lock
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="pl-9"
              id="login-password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
        </Field>
      </FieldGroup>
      {error ? (
        <Alert className="py-2" variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
      <Button
        onClick={() => {
          setMode("register");
        }}
        type="button"
        variant="link"
      >
        Create a new account
      </Button>
    </form>
  );
}
