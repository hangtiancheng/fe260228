import type { ReactNode } from "react";
import { AppHeader } from "./app-header";

export type AppLayoutProps = {
  readonly activePath: string;
  readonly children: ReactNode;
};

export function AppLayout({ activePath, children }: AppLayoutProps) {
  return (
    <div
      id="smooth-wrapper"
      className="bg-background text-foreground min-h-dvh bg-[radial-gradient(circle_at_20%_0%,oklch(0.95_0.04_230),transparent_40%)]"
    >
      <div id="smooth-content">
        <AppHeader activePath={activePath} />
        <main aria-label="fe260228" className="mx-auto max-w-7xl px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
