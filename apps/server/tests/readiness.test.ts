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
				OPENAI_BASE_URL: "https://api.openai.com/v1",
				OPENAI_API_KEY: "",
			})(),
		).resolves.toEqual(
			createDependencyStatus("ai", false, "missing OPENAI_API_KEY"),
		);
	});

	test("requires valid Bocha config when search is enabled", async () => {
		await expect(
			createAiConfigCheck({
				AI_PROVIDER: "openai",
				BOCHA_API_KEY: "",
				BOCHA_ENABLED: true,
				BOCHA_SEARCH_URL: "",
				OPENAI_BASE_URL: "https://api.openai.com/v1",
				OPENAI_API_KEY: "",
			})(),
		).resolves.toEqual(
			createDependencyStatus("ai", false, "invalid Bocha config"),
		);
	});
});
