import { type Env, env } from "../shared/config/env.js";
import {
	createDependencyStatus,
	type ReadinessCheck,
} from "./readiness-types.js";

type AiReadinessEnv = Pick<
	Env,
	| "AI_PROVIDER"
	| "BOCHA_API_KEY"
	| "BOCHA_ENABLED"
	| "BOCHA_SEARCH_URL"
	| "OPENAI_API_KEY"
	| "OPENAI_BASE_URL"
>;

interface AiReadinessOptions {
	readonly fetchImpl?: typeof fetch;
}

const hasUrl = (value: string) => {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
};

export const createAiConfigCheck =
	(
		config: AiReadinessEnv = env,
		options: AiReadinessOptions = {},
	): ReadinessCheck =>
	async () => {
		if (config.AI_PROVIDER === "openai" && config.OPENAI_API_KEY === "") {
			return createDependencyStatus("ai", false, "missing OPENAI_API_KEY");
		}

		if (
			config.BOCHA_ENABLED &&
			(config.BOCHA_API_KEY === "" || !hasUrl(config.BOCHA_SEARCH_URL))
		) {
			return createDependencyStatus("ai", false, "invalid Bocha config");
		}

		return createDependencyStatus("ai", true, "configured for openai");
	};
