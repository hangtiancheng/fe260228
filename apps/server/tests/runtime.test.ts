import { ChatOpenAI } from "@langchain/openai";
import { describe, expect, test } from "vitest";
import { parseEnv } from "../src/shared/config/env.js";
import {
	createChatModelForEnv,
	selectAgentModelId,
} from "../src/modules/ai/runtime.js";

const createRuntimeEnv = (provider: "openai") =>
	parseEnv({
		AI_PROVIDER: provider,
		JWT_SECRET: "012345abcdefghijklmnopqrstuvwxyz",
		OPENAI_BASE_URL: "https://api.openai.com/v1",
		OPENAI_API_KEY: "openai-key",
		OPENAI_MODEL: "openai-chat",
		OPENAI_REASONING_MODEL: "deepseek-v4-flash",
	});

describe("AI runtime provider selection", () => {
	test("creates OpenAI chat and reasoner models", () => {
		const env = createRuntimeEnv("openai");
		const chatModel = createChatModelForEnv(env);
		const reasonerModel = createChatModelForEnv(env, { deepThink: true });

		expect(chatModel).toBeInstanceOf(ChatOpenAI);
		expect(reasonerModel).toBeInstanceOf(ChatOpenAI);
		expect(chatModel.model).toBe("openai-chat");
		expect(reasonerModel.model).toBe("deepseek-v4-flash");
	});

	test("selects LangChain agent model identifiers", () => {
		const openaiEnv = createRuntimeEnv("openai");

		expect(selectAgentModelId(openaiEnv)).toBe("openai:openai-chat");
		expect(selectAgentModelId(openaiEnv, { deepThink: true })).toBe(
			"openai:deepseek-v4-flash",
		);
	});
});
