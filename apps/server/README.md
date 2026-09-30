# @fe26/server

The **backend** of [`fe260228`](../..) — an AI-powered English learning platform. A
[Hono](https://hono.dev) API server backed by PostgreSQL (Prisma 7), Redis
(BullMQ), and LangChain/LangGraph for the AI conversation agent.

## Modules

| Module      | Responsibility                                                      |
| ----------- | ------------------------------------------------------------------- |
| `ai`        | LangChain + LangGraph agent, streaming, deep-thinking, web search   |
| `user`      | Registration / login, session, JWT auth                             |
| `word-book` | ECDICT import (parallel worker pool), frequency-ranked word queries |
| `course`    | Course catalog and content                                          |
| `learn`     | Guided learning sessions and mastery tracking                       |
| `tracker`   | Learning-progress and daily-report tracking                         |

## Highlights

- **SSE streaming** with a dedicated **deep-thinking** channel that emits
  reasoning tokens separately from the assistant response.
- **Pluggable model providers** — any OpenAI-compatible endpoint or a local
  openai instance, selected per persona.
- **LangGraph Postgres checkpointing** — conversation history persisted
  per `userId-role` thread.
- **Parallel ECDICT import** — a worker pool capable of ingesting millions of
  dictionary entries.
- **BullMQ job queues** on Redis for background imports and report generation.

## Getting started

Run from the repository root:

```sh
pnpm install
cp .env.example .env      # configure DB / Redis / LLM endpoints
pnpm server:dev
```

| Command              | Description              |
| -------------------- | ------------------------ |
| `pnpm server:dev`    | `tsx watch src/index.ts` |
| `pnpm server:format` | Format with Biome        |

Scoped scripts:

```sh
pnpm --filter @fe26/server db:migrate     # apply Prisma migrations
pnpm --filter @fe26/server db:seed        # seed the database
pnpm --filter @fe26/server word-book:import # import the ECDICT word books
pnpm --filter @fe26/server test           # vitest
pnpm --filter @fe26/server ci             # build + check + test + validate
```

## Layout

```
server/
├── src/
│   ├── modules/         # ai / user / word-book / course / learn / tracker
│   ├── operations/      # staging smoke tests
│   └── app.ts, index.ts # Hono app bootstrap
├── prisma/              # schema + migrations + seed + import scripts
└── package.json
```
