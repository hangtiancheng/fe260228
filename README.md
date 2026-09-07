# fe260228

> An AI-powered English learning platform: scenario-based AI conversation practice, exam-oriented vocabulary training, structured course pathways, automated daily learning reports, and a first-party web analytics and error-tracking pipeline.

![Node](https://img.shields.io/badge/Node-24-5FA04E?logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-workspace-F69220?logo=pnpm&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Hono](https://img.shields.io/badge/Hono-API-E36002)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

### AI Conversation Practice

- SSE streaming responses with a dedicated **deep-thinking** mode that emits reasoning tokens on a separate channel
- Five conversation personas: AI Assistant, English Master, Business English, Creative Mode, and Programmer Mode
- LangChain agent backed by a LangGraph Postgres checkpoint saver, persisting conversation history per `userId-role` thread
- Optional Bocha web-search integration, with source attribution in answers
- Pluggable model providers: any OpenAI-compatible endpoint, or a local Ollama instance

### Vocabulary Library and Word Training

- Ships with ECDICT dictionary data, imported through a parallel worker pool capable of handling millions of entries
- Eight exam word books: Gaokao, Zhongkao, GRE, TOEFL, IELTS, CET-4, CET-6, and postgraduate entrance exam
- Frequency-ranked browsing with full-text search, tag filtering, and pagination
- Guided learning sessions: each round selects the ten highest-frequency unlearned words for spelling drills and mastery tracking

### Course Catalog

- Eight exam vocabulary courses with cover assets served from MinIO object storage
- Per-user progress tracking: mastered word count and streak days

### Daily Learning Digest

- A `node-cron` job scans users with scheduled reporting enabled
- An AI agent queries the day's learning records via tool calling and composes a Markdown report
- BullMQ delayed jobs deliver at each user's configured time, rendered to HTML and sent through Nodemailer

### Web Analytics and Observability

- Anonymous visitor (UV), page view (PV), and custom event tracking
- Web Vitals collection: FP, FCP, LCP, INP, and CLS
- JavaScript and unhandled promise rejection reporting, alongside Sentry integration

### Accounts and Authentication

- Phone and email registration with JWT access tokens plus refresh tokens
- Transparent password hash upgrades on login, and avatar uploads to MinIO

## Technology Stack

| Layer                      | Technology                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Frontend framework**     | React 19 · Vite 7 · TypeScript                                                                                        |
| **UI**                     | Tailwind CSS v4 · shadcn-style components · Lucide icons · Sonner                                                     |
| **Animation**              | Motion · GSAP                                                                                                         |
| **Routing / data / state** | React Router 7 ⇄ TanStack Router · SWR ⇄ TanStack Query · Zustand ⇄ Jotai (each selectable via environment variables) |
| **Frontend quality**       | Vitest · Testing Library · MSW · Storybook · ESLint · Prettier                                                        |
| **Backend framework**      | Hono · @hono/node-server · pino logging · request-id middleware                                                       |
| **Data layer**             | Prisma 7 · PostgreSQL · Redis · BullMQ · MinIO                                                                        |
| **AI**                     | LangChain · LangGraph Postgres checkpoint · OpenAI / Ollama                                                           |
| **Backend quality**        | Vitest · Biome · Zod validation · staging smoke tests                                                                 |

## Project Structure

```
fe260228/
├── apps/
│   ├── client/                 # React SPA
│   │   ├── src/
│   │   │   ├── app/            # Routing, layouts, page composition
│   │   │   ├── features/       # Feature modules (chat / courses / learning / word-book / settings / auth)
│   │   │   ├── shared/         # Infrastructure (http / api / state / data / realtime / ui / security)
│   │   │   └── mocks/          # MSW request handlers
│   │   ├── tests/              # Vitest suites
│   │   └── .storybook/         # Component stories
│   └── server/                 # Hono API service
│       ├── src/
│       │   ├── modules/        # Feature modules (user / word-book / ai / course / learn / tracker)
│       │   ├── shared/         # Infrastructure (prisma / redis / minio / auth / email / middleware)
│       │   ├── operations/     # Operational tooling (readiness probes, staging smoke tests)
│       │   └── generated/      # Prisma client output
│       ├── prisma/             # Schema, migrations, seeds, word-book importer
│       └── tests/              # Vitest suites
├── pnpm-workspace.yaml
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js 24** (pinned in `.node-version`) and pnpm
- **PostgreSQL** — primary datastore, also backing LangGraph conversation checkpoints
- **Redis** — BullMQ job queue
- **MinIO** — object storage for avatars and course assets
- Optional: **Ollama** for local models or an OpenAI-compatible API key; an SMTP account for daily digests

### Installation and Configuration

```bash
pnpm install

# Backend environment
cp apps/server/.env.example apps/server/.env
# Adjust DATABASE_URL / JWT_SECRET / MinIO / AI / Redis / email settings as needed

# Frontend environment (defaults are sufficient for local development)
cp apps/client/.env.example apps/client/.env
```

### Database Initialization

```bash
cd apps/server
pnpm prisma:generate        # Generate the Prisma client
pnpm db:migrate             # Apply migrations
pnpm db:seed                # Seed the eight courses and upload assets to MinIO

# Import the ECDICT vocabulary (place ecdict.csv at the repository root first)
pnpm word-book:import       # An optional second argument sets the worker count
```

### Running the Development Servers

```bash
# From the repository root, starts the frontend and backend together
pnpm dev
```

- Frontend: <http://localhost:5173> (Vite proxies `/api` to `:3000`)
- Backend: <http://localhost:3000>
- Liveness probe: `GET /api/v1/health` · dependency readiness probe: `GET /api/v1/ready`

### Swappable Frontend Providers

`apps/client/.env` selects the underlying implementation at build time, which makes side-by-side comparisons straightforward:

| Variable          | Values                      |
| ----------------- | --------------------------- |
| `ROUTER_PROVIDER` | `react-router` / `tanstack` |
| `STORE_PROVIDER`  | `zustand` / `jotai`         |
| `SWR_PROVIDER`    | `swr` / `tanstack-query`    |

## API Reference

| Module    | Endpoint                                                     | Description                                                 |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| User      | `POST /api/v1/user/login` `register` `refresh-token`         | Registration, login, token refresh                          |
| User      | `POST /api/v1/user/update-user` `upload-avatar`              | Profile updates and avatar upload (authenticated)           |
| Word book | `GET /api/v1/word-book`                                      | Entry search, exam tag filtering, pagination                |
| AI        | `GET /api/v1/ai/prompt/list`                                 | Available conversation modes                                |
| AI        | `POST /api/v1/ai/chat`                                       | SSE streaming chat (`deepThink`, `webSearch`)               |
| AI        | `GET /api/v1/ai/chat/history`                                | Conversation history retrieval                              |
| Course    | `GET /api/v1/course/list`                                    | Course catalog                                              |
| Learning  | `GET /api/v1/learn/word/:courseId`                           | Ten unlearned words for a course (authenticated)            |
| Learning  | `POST /api/v1/learn/word/master`                             | Record mastery and update progress (authenticated)          |
| Tracker   | `POST /api/v1/tracker/uv` `pv` `event` `performance` `error` | Visitor, page view, event, performance, and error reporting |

## Testing and Quality

```bash
# Frontend
pnpm --filter @fe26/client test          # Vitest suites
pnpm --filter @fe26/client typecheck     # Type checking
pnpm --filter @fe26/client storybook     # Component gallery

# Backend
pnpm --filter @fe26/server test          # Vitest suites
pnpm --filter @fe26/server ci            # build + biome check + test + prisma validate
pnpm --filter @fe26/server staging:smoke # Staging environment smoke tests
```

## License

[MIT](./LICENSE) © hangtiancheng
