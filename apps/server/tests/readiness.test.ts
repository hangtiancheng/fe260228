import { describe, expect, test } from "vitest";
import { createApp } from "../src/app.js";
import {
  createAiConfigCheck,
  createDependencyStatus,
  type ReadinessCheck,
} from "../src/operations/readiness.js";

const createCheck =
  (ok: boolean): ReadinessCheck =>
  async () =>
    createDependencyStatus("postgres", ok, ok ? "connected" : "unavailable");

describe("readiness endpoint", () => {
  test("returns ready when every dependency is available", async () => {
    const app = createApp({ readinessChecks: [createCheck(true)] });

    const response = await app.request("/api/v1/ready");
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toMatchObject({
      code: 200,
      data: {
        status: "ready",
        dependencies: [{ name: "postgres", ok: true }],
      },
      ok: true,
    });
  });

  test("returns unavailable when one dependency fails", async () => {
    const app = createApp({ readinessChecks: [createCheck(false)] });

    const response = await app.request("/api/v1/ready");
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body).toMatchObject({
      code: 503,
      data: {
        status: "not_ready",
        dependencies: [{ name: "postgres", ok: false }],
      },
      message: "dependencies unavailable",
      ok: false,
    });
  });
});

describe("AI readiness configuration", () => {
  test("requires a OpenAI API key for the OpenAI provider", async () => {
    await expect(
      createAiConfigCheck({
        AI_PROVIDER: "openai",
        BOCHA_API_KEY: "",
        BOCHA_ENABLED: false,
        BOCHA_SEARCH_URL: "",
        OPENAI_API_KEY: "",
        OLLAMA_BASE_URL: "http://127.0.0.1:11434",
        OLLAMA_MODEL: "qwen3.5",
        OLLAMA_REASONER_MODEL: "openai-r1",
      })(),
    ).resolves.toEqual(
      createDependencyStatus("ai", false, "missing OPENAI_API_KEY"),
    );
  });

  test("allows Ollama provider without OpenAI credentials", async () => {
    await expect(
      createAiConfigCheck(
        {
          AI_PROVIDER: "ollama",
          BOCHA_API_KEY: "",
          BOCHA_ENABLED: false,
          BOCHA_SEARCH_URL: "",
          OPENAI_API_KEY: "",
          OLLAMA_BASE_URL: "http://127.0.0.1:11434",
          OLLAMA_MODEL: "qwen3.5",
          OLLAMA_REASONER_MODEL: "openai-r1",
        },
        {
          fetchImpl: async () =>
            Response.json({
              models: [{ name: "qwen3.5:latest" }, { name: "openai-r1" }],
            }),
        },
      )(),
    ).resolves.toEqual(
      createDependencyStatus(
        "ai",
        true,
        "configured for ollama with local models",
      ),
    );
  });

  test("fails when Ollama local models are unavailable", async () => {
    await expect(
      createAiConfigCheck(
        {
          AI_PROVIDER: "ollama",
          BOCHA_API_KEY: "",
          BOCHA_ENABLED: false,
          BOCHA_SEARCH_URL: "",
          OPENAI_API_KEY: "",
          OLLAMA_BASE_URL: "http://127.0.0.1:11434",
          OLLAMA_MODEL: "qwen3.5",
          OLLAMA_REASONER_MODEL: "openai-r1",
        },
        {
          fetchImpl: async () => Response.json({ models: [] }),
        },
      )(),
    ).resolves.toEqual(
      createDependencyStatus(
        "ai",
        false,
        "missing Ollama models: qwen3.5, openai-r1",
      ),
    );
  });

  test("requires valid Bocha config when search is enabled", async () => {
    await expect(
      createAiConfigCheck({
        AI_PROVIDER: "ollama",
        BOCHA_API_KEY: "",
        BOCHA_ENABLED: true,
        BOCHA_SEARCH_URL: "",
        OPENAI_API_KEY: "",
        OLLAMA_BASE_URL: "http://127.0.0.1:11434",
        OLLAMA_MODEL: "qwen3.5",
        OLLAMA_REASONER_MODEL: "openai-r1",
      })(),
    ).resolves.toEqual(
      createDependencyStatus("ai", false, "invalid Bocha config"),
    );
  });
});
