export type ManualCheckName =
  | "digest-email"
  | "avatar-upload"
  | "tracker-persist";

export interface ManualSmokeCheck {
  readonly name: ManualCheckName;
  readonly status: "required";
  readonly owner: string;
  readonly rollbackCriterion: string;
}

export const manualChecks: readonly ManualSmokeCheck[] = [
  {
    name: "digest-email",
    status: "required",
    owner: "backend",
    rollbackCriterion: "digest queue or SMTP delivery fails",
  },
  {
    name: "avatar-upload",
    status: "required",
    owner: "backend",
    rollbackCriterion: "uploaded avatar is not readable from object storage",
  },
  {
    name: "tracker-persist",
    status: "required",
    owner: "backend",
    rollbackCriterion: "tracker events are not persisted in PostgreSQL",
  },
];
