import { z } from "zod";

const messageChunkSchema = z.object({
	content: z.union([z.string(), z.array(z.unknown())]).optional(),
	type: z.string().optional(),
	additional_kwargs: z
		.looseObject({
			reasoning_content: z.string().optional(),
		})
		.optional(),
});

export const parseMessageChunk = (value: unknown) =>
	messageChunkSchema.safeParse(value);

export const getMessageText = (
	content: string | readonly unknown[] | undefined,
) => (typeof content === "string" ? content : "");

export const toHistoryItem = (value: unknown) => {
	const result = parseMessageChunk(value);
	if (!result.success) {
		return null;
	}

	const role =
		result.data.type === "human"
			? ("human" as const)
			: result.data.type === "ai"
				? ("ai" as const)
				: null;
	if (!role) {
		return null;
	}

	return {
		content: getMessageText(result.data.content),
		role,
		type: "chat" as const,
		reasoning: result.data.additional_kwargs?.reasoning_content,
	};
};

export const parseAgentStreamChunk = (chunk: unknown) => {
	if (!Array.isArray(chunk)) {
		return null;
	}

	const result = parseMessageChunk(chunk[0]);
	if (!result.success) {
		return null;
	}

	return result.data;
};
