import { createRoot } from "react-dom/client";
import { createAppRoot } from "./app/app-root";
import "./index.css";
import { parseProviderEnv } from "./shared/config";
import { ErrorState } from "./shared/ui";

import { init, enablePlugin } from "@swifty.js/sentry";
import {
  PerformancePlugin,
  ScreenRecordPlugin,
  ExposurePlugin,
} from "@swifty.js/sentry/plugins";
import {
  ReactErrorBoundary,
  type ReactErrorBoundaryProps,
} from "@swifty.js/sentry/react";

if (!import.meta.env.DEV) {
  init({ dsn: "/sentry", visitorId: "" });
  enablePlugin(new PerformancePlugin());
  enablePlugin(new ScreenRecordPlugin());
  enablePlugin(new ExposurePlugin());
}

const boundaryProps: ReactErrorBoundaryProps = {
  fallback: <ErrorState />,
};

const AppRoot = createAppRoot(parseProviderEnv(import.meta.env));

const rootElement = document.getElementById("root");

if (!(rootElement instanceof HTMLElement)) {
  throw new Error("Root element was not found.");
}

async function enableMocking(): Promise<void> {
  if (!import.meta.env.DEV) {
    return;
  }

  const { worker } = await import("./mocks/browser");
  await worker.start({ onUnhandledRequest: "bypass" });
}

void enableMocking().then(() => {
  createRoot(rootElement).render(
    import.meta.env.DEV ? (
      <AppRoot />
    ) : (
      <ReactErrorBoundary {...boundaryProps}>
        <AppRoot />
      </ReactErrorBoundary>
    ),
  );
});
