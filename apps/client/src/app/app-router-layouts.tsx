import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Outlet as ReactRouterOutlet,
  useLocation as useReactRouterLocation,
} from "react-router-dom";
import {
  Outlet as TanstackOutlet,
  useLocation as useTanstackLocation,
} from "@tanstack/react-router";
import { AppLayout } from "./layout";

function AnimatedMain({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        initial={{ opacity: 0, y: 8 }}
        key={pathname}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export function ReactRouterLayout() {
  const location = useReactRouterLocation();

  return (
    <AppLayout activePath={location.pathname}>
      <AnimatedMain pathname={location.pathname}>
        <ReactRouterOutlet />
      </AnimatedMain>
    </AppLayout>
  );
}

export function TanstackRouterLayout() {
  const location = useTanstackLocation();

  return (
    <AppLayout activePath={location.pathname}>
      <AnimatedMain pathname={location.pathname}>
        <TanstackOutlet />
      </AnimatedMain>
    </AppLayout>
  );
}
