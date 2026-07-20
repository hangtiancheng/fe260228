import { motion } from "motion/react";
import type { AppNavigationItem } from "../../shared/navigation";
import { cn } from "@/shared/ui/lib/utils";

export type NavigationPillProps = {
  readonly activePath: string;
  readonly item: AppNavigationItem;
};

export function NavigationPill({ activePath, item }: NavigationPillProps) {
  const Icon = item.icon;
  const isActive = activePath === item.path;

  return (
    <a
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
        isActive
          ? "text-primary-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
      href={item.path}
    >
      {isActive ? (
        <motion.span
          layoutId="nav-pill-bg"
          className="bg-primary absolute inset-0 rounded-full"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      ) : null}
      <Icon aria-hidden="true" className="relative size-4" />
      <span className="relative hidden lg:inline">{item.label}</span>
    </a>
  );
}
