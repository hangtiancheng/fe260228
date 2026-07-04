import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import type { AppConfig } from "../shared/config";
import { createAppRoot } from "./app-root";

const providerBranches: readonly AppConfig[] = [
  {
    dataProvider: "swr",
    requestTimeoutMs: 50_000,
    routerProvider: "react-router",
    serverApiBaseUrl: "/api/v1",
    socketBaseUrl: "http://localhost:3000",
    storeProvider: "zustand",
  },
  {
    dataProvider: "tanstack",
    requestTimeoutMs: 50_000,
    routerProvider: "tanstack",
    serverApiBaseUrl: "/api/v1",
    socketBaseUrl: "http://localhost:3000",
    storeProvider: "jotai",
  },
];

describe("createAppRoot", () => {
  afterEach(() => {
    cleanup();
  });

  test.each(providerBranches)(
    "renders with $dataProvider, $storeProvider, and $routerProvider",
    async (config) => {
      const AppRoot = createAppRoot(config);

      render(<AppRoot />);

      expect(
        // MUST `fe260228`
        await screen.findByRole("main", { name: "fe260228" }),
      ).toBeInTheDocument();
    },
  );
});
