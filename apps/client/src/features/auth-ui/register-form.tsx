import { Lock, Mail, Phone, User } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useAppServices } from "../../app/use-app-services";
import { Alert, AlertDescription } from "@/shared/ui/components/alert";
import { Button } from "@/shared/ui/components/button";
import { Field, FieldGroup, FieldLabel } from "@/shared/ui/components/field";
import { Input } from "@/shared/ui/components/input";
import type { AuthFormProps } from "./auth-form-props";
import { RegisterFormSchema } from "./auth-form-schema";
import { getFormError, getUnknownErrorMessage } from "./form-error";

export function RegisterForm({ close, setMode }: AuthFormProps) {
  const { api, session } = useAppServices();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const result = RegisterFormSchema.safeParse(
      Object.fromEntries(new FormData(event.currentTarget)),
    );
    if (!result.success) {
      setError(getFormError(result.error));
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await api.user.register(result.data);
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
          Create your account
        </h2>
        <p className="text-muted-foreground text-sm">
          Save vocabulary, streaks, and AI chat progress.
        </p>
      </div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="register-name">Name</FieldLabel>
          <div className="relative">
            <User
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="pl-9"
              id="register-name"
              name="name"
              placeholder="Name"
            />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="register-phone">Phone number</FieldLabel>
          <div className="relative">
            <Phone
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="pl-9"
              id="register-phone"
              maxLength={11}
              name="phone"
              placeholder="Phone number"
            />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="register-email">Email</FieldLabel>
          <div className="relative">
            <Mail
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="pl-9"
              id="register-email"
              name="email"
              placeholder="Email"
              type="email"
            />
          </div>
        </Field>
        <Field>
          <FieldLabel htmlFor="register-password">Password</FieldLabel>
          <div className="relative">
            <Lock
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="pl-9"
              id="register-password"
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
        {isSubmitting ? "Creating..." : "Create account"}
      </Button>
      <Button
        onClick={() => {
          setMode("login");
        }}
        type="button"
        variant="link"
      >
        I already have an account
      </Button>
    </form>
  );
}
