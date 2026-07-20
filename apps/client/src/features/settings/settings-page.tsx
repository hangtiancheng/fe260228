import { Settings } from "lucide-react";
import { useState } from "react";
import { AuthDialog } from "../auth-ui";
import { useAppServices } from "../../app/use-app-services";
import { createAvatarUrl } from "./avatar-url";
import { AccountCard } from "./account-card";
import { AvatarCard } from "./avatar-card";
import { ProfileForm } from "./profile-form";
import { TaskCard } from "./task-card";
import { useSettingsProfile } from "./use-settings-profile";
import { Alert, AlertDescription } from "@/shared/ui/components/alert";
import { Badge } from "@/shared/ui/components/badge";
import { Button } from "@/shared/ui/components/button";

export function SettingsProfile() {
  const { config } = useAppServices();
  const state = useSettingsProfile();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  if (!state.user || !state.form) {
    return (
      <>
        <section className="bg-muted flex min-h-96 flex-col items-center justify-center rounded-lg p-8 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Sign in to manage settings</h1>
            <p className="text-muted-foreground py-4">
              Profile, avatar, and daily reminder controls require an account.
            </p>
            <Button onClick={() => setIsAuthOpen(true)} type="button">
              Sign in
            </Button>
          </div>
        </section>
        <AuthDialog close={() => setIsAuthOpen(false)} isOpen={isAuthOpen} />
      </>
    );
  }

  const avatarUrl = createAvatarUrl(config.serverApiBaseUrl, state.form.avatar);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge className="mb-3 gap-2" variant="secondary">
            <Settings aria-hidden="true" size={16} />
            Account Settings
          </Badge>
          <h1 className="text-4xl font-bold">Tune your learning profile</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Keep your profile fresh and configure reminders for daily practice.
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={state.reset} type="button" variant="outline">
            Reset
          </Button>
          <Button
            disabled={state.isSaving}
            onClick={() => void state.save()}
            type="button"
          >
            {state.isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </header>
      {state.error ? (
        <Alert variant="destructive">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      ) : null}
      {state.success ? (
        <Alert variant="success">
          <AlertDescription>{state.success}</AlertDescription>
        </Alert>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="flex flex-col gap-6">
          <AvatarCard
            avatarUrl={avatarUrl}
            name={state.form.name}
            uploadAvatar={state.uploadAvatar}
          />
          <AccountCard logout={state.logout} user={state.user} />
        </div>
        <div className="flex flex-col gap-6">
          <ProfileForm form={state.form} setForm={state.setForm} />
          <TaskCard form={state.form} setForm={state.setForm} />
        </div>
      </div>
    </div>
  );
}
