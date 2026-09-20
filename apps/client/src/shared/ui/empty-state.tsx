import { Inbox } from "lucide-react";

export function EmptyState() {
  return (
    <section className="bg-muted flex min-h-72 items-center justify-center rounded-lg">
      <div className="flex max-w-md flex-col items-center gap-3 text-center">
        <Inbox aria-hidden="true" className="text-muted-foreground size-9" />
        <h2 className="text-xl font-semibold tracking-tight">
          Nothing here yet
        </h2>
        <p className="text-muted-foreground">
          This area is ready for the next migration milestone.
        </p>
      </div>
    </section>
  );
}
