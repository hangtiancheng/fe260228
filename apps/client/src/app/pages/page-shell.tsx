import type { LucideIcon } from "lucide-react";
import { Badge } from "@/shared/ui/components/badge";

export type PageShellProps = {
  readonly description: string;
  readonly icon: LucideIcon;
  readonly kicker: string;
  readonly title: string;
};

export function PageShell({
  description,
  icon: Icon,
  kicker,
  title,
}: PageShellProps) {
  return (
    <section className="bg-muted flex min-h-112 items-center justify-center rounded-lg">
      <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
        <Badge className="bg-primary/10 text-primary gap-2 px-3 py-1">
          <Icon aria-hidden="true" />
          {kicker}
        </Badge>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg leading-8">{description}</p>
      </div>
    </section>
  );
}
