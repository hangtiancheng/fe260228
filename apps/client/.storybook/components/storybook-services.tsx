import { useMemo, type ReactNode } from "react";
import { createAppServices } from "../../src/app/app-services";
import { AppServicesProvider } from "../../src/app/app-services-context";
import type { AppConfig } from "../../src/shared/config";

const storybookConfig: AppConfig = {
  dataProvider: "swr",
  requestTimeoutMs: 50_000,
  routerProvider: "react-router",
  serverApiBaseUrl: "/api/v1",
  socketBaseUrl: "http://localhost:3000",
  storeProvider: "zustand",
};

export type StorybookServicesProps = {
  readonly children: ReactNode;
};

export function StorybookServices({ children }: StorybookServicesProps) {
  const services = useMemo(
    () =>
      createAppServices({
        config: storybookConfig,
        navigateHome: () => undefined,
      }),
    [],
  );

  return (
    <AppServicesProvider services={services}>{children}</AppServicesProvider>
  );
}
