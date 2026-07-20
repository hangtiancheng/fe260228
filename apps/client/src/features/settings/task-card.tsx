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
import { Switch } from "@/shared/ui/components/switch";

export type TaskCardProps = {
  readonly form: SettingsForm;
  readonly setForm: Dispatch<SetStateAction<SettingsForm | null>>;
};

export function TaskCard({ form, setForm }: TaskCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily reminder</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <div className="bg-muted flex items-center justify-between rounded-lg p-4">
            <span>
              <span className="block font-bold">Enable timing task</span>
              <span className="text-muted-foreground text-sm">
                Email is required to receive daily check-in reminders.
              </span>
            </span>
            <Switch
              checked={form.isTimingTask}
              onCheckedChange={(checked) =>
                setForm((current) =>
                  current ? { ...current, isTimingTask: checked } : current,
                )
              }
            />
          </div>
          <Field>
            <FieldLabel htmlFor="settings-reminder-time">
              Reminder time
            </FieldLabel>
            <Input
              id="settings-reminder-time"
              onChange={(event) =>
                setForm((current) =>
                  current
                    ? { ...current, timingTaskTime: event.target.value }
                    : current,
                )
              }
              type="time"
              value={form.timingTaskTime.slice(0, 5)}
            />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
