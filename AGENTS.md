<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Git

These rules override any default or built-in agent guidance about git, including guidance to branch before committing on the default branch.

Never create branches, worktrees, or commits automatically. Only do so when the user explicitly asks for that specific action in the current request.
Leave changes uncommitted in the working tree on the current branch and let the user decide when and how to commit.
Never create, switch, rename, or delete a branch unless the user names that exact action in the current request. A request to commit is not a request to branch.
All work happens on main. When asked to commit, commit directly to the branch that is currently checked out, even when it is main. Never move work to a feature branch "to be safe".
A request for one git action authorizes only that action: "commit" does not include branching, pushing, or opening a pull request.
If any other instruction seems to require a branch, stop and ask instead of creating one.

## Project structure and organization

Source: https://nextjs.org/docs/app/getting-started/project-structure

Next.js is unopinionated about layout, but large applications require a deterministic, scalable structure. Follow these rules for all new files and modifications.

### 1. Root is for configuration only

- The project root holds only configuration, tooling, and environment files:
  `next.config.ts`, `package.json`, `tsconfig.json`, `eslint.config.mjs`, `proxy.ts`, `components.json`, `.env*`, `.gitignore`.
- All application source code lives inside `src/`.
- Never track `.env*` secrets, `.next/`, or `next-env.d.ts` in version control.
- Root request interception goes in `proxy.ts` (Next.js 16 convention replacing legacy middleware).

### 2. `src/app/` is for routing only

- `src/app/` contains strictly routing and page composition files:
  - Routing files: `layout`, `page`, `loading`, `error`, `global-error`, `not-found`, `template`, `default`, `route`.
  - Metadata files: `icon`, `apple-icon`, `opengraph-image`, `twitter-image`, `sitemap`, `robots`, `favicon.ico`.
- A route is public only if a `page` or `route` file exists in the segment.
- Never name a non-routing file with a reserved Next.js name (`page`, `layout`, `route`, `loading`, etc.).
- **Thin Pages Rule**: `page.tsx` and `layout.tsx` must be thin compositions. They fetch/query data, compose feature components, and declare metadata. Complex UI rendering and domain logic belong in `src/features/`.
- Use Route Groups `(name)` to logically cluster routes without affecting URL paths:
  - `(marketing)`: Public marketing pages (`/`, etc.).
  - `(auth)`: Authentication workflows if added.

### 3. Target architecture

```
src/
├── app/                              # routing & page composition only
│   ├── (marketing)/                  # public marketing route group
│   │   └── page.tsx                  # Thin home page composing features
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx                    # Root layout (fonts, providers, schemas)
│   ├── robots.ts                     # Metadata SEO
│   └── sitemap.ts                    # Metadata sitemap
├── features/                         # domain features (business logic & UI)
│   └── marquee/                      # marquee design canvas & showcase feature
│       ├── components/               # feature-internal components
│       └── index.ts                  # public API of the feature
├── components/                       # cross-cutting UI components
│   ├── ui/                           # Tier 1 primitives (shadcn base components)
│   └── theme-provider.tsx            # Tier 2 global UI wrappers
├── hooks/                            # shared, feature-agnostic React hooks
├── lib/                              # shared utility functions and helpers
└── types/                            # global TypeScript declarations
```

The folder names `components`, `lib`, `hooks`, and `ui` have no special meaning to Next.js; keep them consistent across the project.

### 4. 4-Tier Component Architecture

1. **Tier 1: Primitives / Base UI** (`src/components/ui/`):
   Domain-agnostic, headless or styled UI building blocks (buttons, dialogs, dropdowns, inputs, tabs, tooltips). Primitives must never import from `features/` or `app/`.
2. **Tier 2: Global Cross-Cutting UI** (`src/components/`):
   Shared application wrappers and utilities used across multiple features (e.g. `theme-provider.tsx`).
3. **Tier 3: Domain Features** (`src/features/<feature>/`):
   Self-contained modules representing a business domain. Each feature contains its internal `components/`, `data/` or `queries/`, `actions/`, and exposes its public interface strictly via `index.ts`.
4. **Tier 4: Route-Local Private UI** (`src/app/**/_components/`):
   Private components used strictly within a single route segment or route group. Must be prefixed with an underscore `_` to opt out of routing.

### 5. Imports and boundaries

- Use path aliases from `tsconfig.json` (`@/*` pointing to `./src/*`, e.g., `@/features/*`, `@/components/*`, `@/lib/*`, `@/hooks/*`).
- **Hierarchy of allowed dependencies**:
  - `app/` → may import from `features/`, `components/`, `lib/`, `hooks/`.
  - `features/` → may import from `components/`, `lib/`, `hooks/`, and other features strictly via `@/features/<feature>` (public barrel `index.ts`).
  - **Never deep-import another feature's internal files** (e.g., import from `@/features/marquee`, not `@/features/marquee/components/navbar`).
  - `components/ui/`, `lib/`, and `hooks/` are low-level shared foundations; they must **never** import from `features/` or `app/`.
  - Route segments must **never** import from sibling route segments in `app/`.
- When the project has ESLint import rules, do not disable them to make an import work; fix the structure instead.

### 6. Naming conventions

- Folders and files use `kebab-case` (e.g. `features-section.tsx`, `selection-frame.tsx`).
- Dynamic segments follow Next.js syntax only: `[slug]`, `[...slug]`, `[[...slug]]`.
- One component per file. Name the file after its primary export.

### 7. Next.js 16 breaking conventions

- Request interception goes in `proxy.ts`. If legacy `middleware.ts` exists, migrate to `proxy.ts`.
- Strictly follow React 19 compiler guidelines (no ref access during render).

### 8. Keeping it clean over time

- Delete unused files, exports, and empty folders when you finish a change.
- Do not leave generated, scratch, or debug files in the tree.
- If a new file does not clearly fit this structure, stop and ask rather than inventing a new top-level folder.
- If this structure changes, update this section in the same change.
