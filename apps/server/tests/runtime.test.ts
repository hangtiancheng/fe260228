import { ChatOpenAI } from "@langchain/openai";
import { ChatOllama } from "@langchain/ollama";
import { describe, expect, test } from "vitest";
import { parseEnv } from "../src/shared/config/env.js";
import {
  createChatModelForEnv,
  createOllamaInstance,
  selectAgentModelId,
  selectOllamaModel,
} from "../src/modules/ai/runtime.js";

const createRuntimeEnv = (provider: "openai" | "ollama") =>
  parseEnv({
    AI_PROVIDER: provider,
    JWT_SECRET: "012345abcdefghijklmnopqrstuvwxyz",
    OPENAI_BASE_URL: "https://api.openai.com/v1",
    OPENAI_API_KEY: "openai-key",
    OPENAI_API_MODEL: "openai-chat",
    OPENAI_REASONER_API_MODEL: "openai-reasoner",
    OLLAMA_BASE_URL: "http://127.0.0.1:11434",
    OLLAMA_MODEL: "qwen3.5",
    OLLAMA_REASONER_MODEL: "deepseek-r1",
  });

describe("AI runtime provider selection", () => {
  test("creates OpenAI chat and reasoner models", () => {
    const env = createRuntimeEnv("openai");
    const chatModel = createChatModelForEnv(env);
    const reasonerModel = createChatModelForEnv(env, { deepThink: true });

    expect(chatModel).toBeInstanceOf(ChatOpenAI);
    expect(reasonerModel).toBeInstanceOf(ChatOpenAI);
    expect(chatModel.model).toBe("openai-chat");
    expect(reasonerModel.model).toBe("openai-reasoner");
  });

  test("creates Ollama chat model from local provider config", () => {
    const env = createRuntimeEnv("ollama");
    const model = createChatModelForEnv(env);
    const ollamaModel = createOllamaInstance(env);

    expect(model).toBeInstanceOf(ChatOllama);
    expect(model.model).toBe("qwen3.5");
    expect(ollamaModel.baseUrl).toBe("http://127.0.0.1:11434");
  });

  test("uses Ollama reasoner model only when configured", () => {
    const env = createRuntimeEnv("ollama");
    const fallbackEnv = parseEnv({
      AI_PROVIDER: "ollama",
      JWT_SECRET: "012345abcdefghijklmnopqrstuvwxyz",
      OLLAMA_MODEL: "qwen3.5",
      OLLAMA_REASONER_MODEL: "",
    });

    expect(selectOllamaModel(env, true)).toBe("deepseek-r1");
    expect(selectOllamaModel(fallbackEnv, true)).toBe("qwen3.5");
  });

  test("selects LangChain agent model identifiers", () => {
    const openaiEnv = createRuntimeEnv("openai");
    const ollamaEnv = createRuntimeEnv("ollama");

    expect(selectAgentModelId(openaiEnv)).toBe("openai:openai-chat");
    expect(selectAgentModelId(openaiEnv, { deepThink: true })).toBe(
      "openai:openai-reasoner",
    );
    expect(selectAgentModelId(ollamaEnv)).toBe("ollama:qwen3.5");
    expect(selectAgentModelId(ollamaEnv, { deepThink: true })).toBe(
      "ollama:deepseek-r1",
    );
  });
});
