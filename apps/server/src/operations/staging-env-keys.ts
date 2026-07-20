import type { z } from "zod";
import type { aiProviderSchema } from "../shared/config/env.js";

export type StagingAiProvider = z.infer<typeof aiProviderSchema>;

export interface StagingDependencyFlags {
  readonly emailEnabled?: boolean;
}

const commonRequiredStagingEnvKeys = [
  "DATABASE_URL",
  "REDIS_HOST",
  "MINIO_ENDPOINT",
  "MINIO_BUCKET",
] as const;

const emailRequiredStagingEnvKeys = [
  "EMAIL_HOST",
  "EMAIL_USER",
  "EMAIL_PASSWORD",
  "EMAIL_FROM",
] as const;

const providerRequiredStagingEnvKeys = {
  openai: ["OPENAI_API_KEY"] as const,
  ollama: ["OLLAMA_BASE_URL", "OLLAMA_MODEL"] as const,
};

export const createRequiredStagingEnvKeys = (
  aiProvider: StagingAiProvider,
  flags: StagingDependencyFlags = {},
) => [
  ...commonRequiredStagingEnvKeys,
  ...(flags.emailEnabled ? emailRequiredStagingEnvKeys : []),
  ...providerRequiredStagingEnvKeys[aiProvider],
];
