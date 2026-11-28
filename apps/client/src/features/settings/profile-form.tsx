import type { Dispatch, SetStateAction } from "react";
import type { SettingsForm } from "./settings-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/components/card";
import { Field, FieldGroup, FieldLabel } from "@/shared/ui/components/field";
import { Input } from "@/shared/ui/components/input";
import { Textarea } from "@/shared/ui/components/textarea";

export type ProfileFormProps = {
  readonly form: SettingsForm;
  readonly setForm: Dispatch<SetStateAction<SettingsForm | null>>;
};

export function ProfileForm({ form, setForm }: ProfileFormProps) {
  const update = <Key extends keyof SettingsForm>(
    key: Key,
    value: SettingsForm[Key],
  ) => {
    setForm((current) => (current ? { ...current, [key]: value } : current));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="settings-name">Name</FieldLabel>
            <Input
              id="settings-name"
              onChange={(event) => update("name", event.target.value)}
              value={form.name}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="settings-email">Email</FieldLabel>
            <Input
              id="settings-email"
              onChange={(event) => update("email", event.target.value)}
              type="email"
              value={form.email}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="settings-address">Address</FieldLabel>
            <Input
              id="settings-address"
              onChange={(event) => update("address", event.target.value)}
              value={form.address}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="settings-bio">Bio</FieldLabel>
            <Textarea
              id="settings-bio"
              maxLength={120}
              onChange={(event) => update("bio", event.target.value)}
              value={form.bio}
            />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
