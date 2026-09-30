# @fe26/client

The **frontend** of [`fe260228`](../..) — an AI-powered English learning platform. A
React 19 + Vite + TanStack Router single-page app covering scenario-based AI
conversation practice, vocabulary training, structured courses, and learning
tracking, with a first-party `@yukino.js/sentry` analytics pipeline.

## Features

- **AI conversation practice** — SSE streaming chat with multiple personas
  (AI Assistant, English Master, Business English, Creative Mode, Programmer Mode),
  deep-thinking reasoning streams, and source-attributed search results.
- **Vocabulary & word training** — frequency-ranked browsing, full-text search,
  tag filtering, and guided spelling/mastery drills across eight exam word books.
- **Course catalog & learning** — structured course pathways with progress tracking.
- **Dark/light theming, i18n** — Tailwind CSS 4 with a shadcn-style component system
  (`@base-ui/react`).
- **First-party telemetry** — `@yukino.js/sentry` for errors, performance, and
  behavior monitoring.

## Getting started

Run from the repository root:

```sh
pnpm install
pnpm client:dev
```

| Command              | Description              |
| -------------------- | ------------------------ |
| `pnpm client:dev`    | Vite dev server with HMR |
| `pnpm client:format` | Format with Prettier     |

Or scoped directly:

```sh
pnpm --filter @fe26/client dev
pnpm --filter @fe26/client test         # vitest
pnpm --filter @fe26/client storybook    # Storybook on :6006
```

## Layout

```
client/
├── src/
│   ├── app/           # router + providers
│   ├── features/      # auth / chat / courses / learning / word-book / settings
│   ├── shared/        # shared components, hooks, and utilities
│   └── mocks/         # MSW-style mock handlers
└── vite.config.ts
```
