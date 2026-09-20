import { ChatOpenAI } from "@langchain/openai";
import { PostgresSaver } from "@langchain/langgraph-checkpoint-postgres";
import type { CreateAgentParams } from "langchain";
import { createAgent } from "langchain";
import { type Env, env } from "../../shared/config/env.js";

export interface ChatModelOptions {
	readonly deepThink?: boolean;
}

export interface AiAgentOptions extends ChatModelOptions {
	readonly systemPrompt: string;
	readonly checkpointer?: PostgresSaver;
	readonly tools?: AiAgentTools;
}

type AiRuntimeEnv = Pick<
	Env,
	| "AI_PROVIDER"
	| "OPENAI_API_KEY"
	| "OPENAI_BASE_URL"
	| "OPENAI_MODEL"
	| "OPENAI_REASONING_MODEL"
>;

type AiAgentTools = NonNullable<CreateAgentParams["tools"]>;

export const createOpenAIInstance = (config: AiRuntimeEnv = env) =>
	new ChatOpenAI({
		apiKey: config.OPENAI_API_KEY,
		model: config.OPENAI_MODEL,
		temperature: 1.3,
		maxTokens: 4396,
		streaming: true,
	});

export const createOpenAIReasoner = (config: AiRuntimeEnv = env) =>
	new ChatOpenAI({
		apiKey: config.OPENAI_API_KEY,
		model: config.OPENAI_REASONING_MODEL,
		temperature: 1.3,
		maxTokens: 18000,
		streaming: true,
	});

export const createChatModelForEnv = (
	config: AiRuntimeEnv,
	options: ChatModelOptions = {},
) => {
	const deepThink = options.deepThink === true;

	// if (config.AI_PROVIDER === "openai")

	return deepThink
		? createOpenAIReasoner(config)
		: createOpenAIInstance(config);
};

export const createChatModel = (options: ChatModelOptions = {}) =>
	createChatModelForEnv(env, options);

export const selectAgentModelId = (
	config: AiRuntimeEnv,
	options: ChatModelOptions = {},
) => {
	const deepThink = options.deepThink === true;

	// if (config.AI_PROVIDER === "openai")

	return `openai:${
		deepThink ? config.OPENAI_REASONING_MODEL : config.OPENAI_MODEL
	}`;
};

export const selectAgentModel = (options: ChatModelOptions = {}) =>
	selectAgentModelId(env, options);

export const createAiAgentForEnv = (
	config: AiRuntimeEnv,
	options: AiAgentOptions,
) => {
	const model = selectAgentModelId(config, {
		deepThink: options.deepThink === true,
	});

	// if (config.AI_PROVIDER === "openai")
	process.env.OPENAI_BASE_URL = config.OPENAI_BASE_URL;

	return createAgent({
		...(options.checkpointer ? { checkpointer: options.checkpointer } : {}),
		...(options.tools ? { tools: options.tools } : {}),
		model,
		systemPrompt: options.systemPrompt,
	});
};

export const createAiAgent = (options: AiAgentOptions) =>
	createAiAgentForEnv(env, options);

let checkpointer: PostgresSaver | null = null;

export const getCheckpoint = async () => {
	if (!checkpointer) {
		checkpointer = PostgresSaver.fromConnString(env.DATABASE_URL);
		await checkpointer.setup();
	}
	return checkpointer;
};
