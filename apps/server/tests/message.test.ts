import { describe, expect, test } from "vitest";
import {
	parseAgentStreamChunk,
	toHistoryItem,
} from "../src/modules/ai/message.js";

describe("AI message parsing", () => {
	test("narrows streamed agent chunks", () => {
		expect(
			parseAgentStreamChunk([
				{
					content: "hello",
					type: "ai",
					additional_kwargs: { reasoning_content: "thinking" },
				},
			]),
		).toEqual({
			content: "hello",
			type: "ai",
			additional_kwargs: { reasoning_content: "thinking" },
		});
	});

	test("rejects unknown history messages", () => {
		expect(toHistoryItem({ content: 1 })).toBeNull();
	});

	test("normalizes history messages to the client chat contract", () => {
		expect(
			toHistoryItem({
				content: "hi there",
				type: "ai",
				additional_kwargs: { reasoning_content: "thinking" },
			}),
		).toEqual({
			content: "hi there",
			role: "ai",
			type: "chat",
			reasoning: "thinking",
		});
		expect(toHistoryItem({ content: "hello", type: "human" })).toEqual({
			content: "hello",
			role: "human",
			type: "chat",
			reasoning: undefined,
		});
	});

	test("drops non-chat history messages", () => {
		expect(toHistoryItem({ content: "sys", type: "system" })).toBeNull();
		expect(toHistoryItem({ content: "tool output", type: "tool" })).toBeNull();
	});
});
