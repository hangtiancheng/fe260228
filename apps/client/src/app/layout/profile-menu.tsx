import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useAuthSession } from "../../features/auth";
import { Button } from "@/shared/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/components/dropdown-menu";
import { useTheme } from "@/shared/providers/use-theme";
import { useAppServices } from "../use-app-services";
import { UserAvatar } from "./user-avatar";

export function ProfileMenu() {
  const { session } = useAppServices();
  const { user } = useAuthSession(session);
  const { theme, toggleTheme } = useTheme();
  const name = user?.name ?? "Guest";
  const bio = user?.bio ?? "Sign in to sync progress and learning streaks.";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="focus-visible:ring-ring/50 flex items-center gap-2 rounded-full outline-none focus-visible:ring-2"
        asChild
      >
        <button
          className="hover:bg-accent flex items-center gap-2 rounded-full p-1 transition-colors"
          type="button"
        >
          <UserAvatar avatarUrl={user?.avatar ?? undefined} name={name} />
          <span className="hidden max-w-28 truncate text-sm font-bold md:inline">
            {name}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <UserAvatar avatarUrl={user?.avatar ?? undefined} name={name} />
            <div className="min-w-0">
              <h2 className="truncate font-bold">{name}</h2>
              <p className="text-muted-foreground truncate text-sm">{bio}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-muted rounded-lg p-3">
              <div className="text-muted-foreground text-xs">Words</div>
              <div className="font-display text-xl font-bold tabular-nums">
                {user?.wordNumber ?? 0}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-muted-foreground text-xs">Streak</div>
              <div className="font-display text-xl font-bold tabular-nums">
                {user?.dayNumber ?? 0}
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </DropdownMenuItem>
          <div className="grid grid-cols-2 gap-2">
            <Button asChild size="sm" variant="outline">
              <a href="/setting/index">
                <Settings aria-hidden="true" />
                Profile
              </a>
            </Button>
            <Button
              onClick={session.logout}
              size="sm"
              type="button"
              variant="destructive"
            >
              <LogOut aria-hidden="true" />
              Logout
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
