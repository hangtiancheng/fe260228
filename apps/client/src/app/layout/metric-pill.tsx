import type { LucideIcon } from "lucide-react";
import { Badge } from "@/shared/ui/components/badge";

export type MetricPillProps = {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly value: number;
};

export function MetricPill({ icon: Icon, label, value }: MetricPillProps) {
  return (
    <Badge
      aria-label={label}
      variant="secondary"
      className="bg-primary/10 text-primary gap-2 px-4 py-2"
    >
      <Icon aria-hidden="true" size={16} />
      <span className="font-bold tabular-nums">{value}</span>
    </Badge>
  );
}
