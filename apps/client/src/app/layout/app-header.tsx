import { Flame, Sparkles } from "lucide-react";
import { useAuthSession } from "../../features/auth";
import { appNavigationItems } from "../../shared/navigation";
import { Button } from "@/shared/ui/components/button";
import { useAppServices } from "../use-app-services";
import { MetricPill } from "./metric-pill";
import { NavigationPill } from "./navigation-pill";
import { ProfileMenu } from "./profile-menu";

export type AppHeaderProps = {
  readonly activePath: string;
};

export function AppHeader({ activePath }: AppHeaderProps) {
  const { session } = useAppServices();
  const { user } = useAuthSession(session);

  return (
    <header className="bg-background/70 sticky top-0 z-20 [mask-image:linear-gradient(to_bottom,black_calc(100%-1px),transparent)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-3">
          <Button asChild className="size-10 rounded-lg p-0 text-lg font-black">
            <a href="/">
              <span>E</span>
            </a>
          </Button>
          <span className="font-display hidden text-xl font-black tracking-tight md:inline">
            fe260228
          </span>
        </div>
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-1"
        >
          {appNavigationItems.map((item) => (
            <NavigationPill
              activePath={activePath}
              item={item}
              key={item.path}
            />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden gap-2 xl:flex">
            <MetricPill
              icon={Sparkles}
              label="Words learned"
              value={user?.wordNumber ?? 0}
            />
            <MetricPill
              icon={Flame}
              label="Learning streak"
              value={user?.dayNumber ?? 0}
            />
          </div>
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
