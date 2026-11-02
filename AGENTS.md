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

---

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

---

## Clean Code Rules

These rules guide code generation and maintenance to produce maintainable, professional-quality code.

### 1. Meaningful Names

- Use intention-revealing names that explicitly explain why something exists and what it does.
- Avoid disinformation and meaningless distinctions (e.g., `data`, `info`, `manager`, `itemMap`).
- Use pronounceable, searchable names across all files and variables.
- Class/Type/Interface names: nouns (e.g., `UserAccount`, `PaymentProcessor`, `CartSummary`).
- Method/Function names: verbs (e.g., `calculateTotal`, `sendEmail`, `validateInput`).
- Avoid mental mapping and archaic encodings (e.g., Hungarian notation, redundant prefixes like `IUser`, `strName`).

### 2. Functions

- Keep functions small (< 20 lines ideal).
- Do one thing only — adhere strictly to the Single Responsibility Principle (SRP).
- Maintain one level of abstraction per function.
- Limit arguments: 0–2 ideal, 3 maximum; avoid boolean flag arguments (split into distinct functions or use composition).
- No side effects: a function must strictly perform what its name states.
- Command-Query Separation (CQS): separate commands (change state) from queries (return information).
- Prefer exceptions over return error codes or error flag objects.

### 3. Comments

- Code should be self-explanatory — avoid comments when clean naming and structure can express intent.
- Good comments: legal information, important warnings, actionable TODOs with context, public API documentation.
- Bad comments: redundant restatements of code, misleading comments, or comments attempting to explain bad code.
- Never comment out code — delete it immediately; Git preserves history.
- If you feel the need for an explanatory comment, refactor the code first.

### 4. Formatting

- Keep files small, focused, and cohesive.
- Vertical formatting: related concepts must stay close together; blank lines separate distinct concepts and logical steps.
- Horizontal formatting: limit line length to 80–120 characters; wrap parameters or chained calls cleanly.
- Use consistent indentation and team Prettier/ESLint rules.
- Group related functions together; order callers above callees (newspaper metaphor).

### 5. Objects and Data Structures

- Objects: hide internal data behind abstractions; expose behavior through methods.
- Data structures: expose data without hiding schema, but have minimal or no business behavior.
- Law of Demeter: talk only to immediate friends; avoid train wrecks like `a.getB().getC().doSomething()`.
- Do not expose internal structures through indiscriminate getters and setters.

### 6. Error Handling

- Use exceptions and robust Error objects, not return codes or status flags.
- Write `try-catch-finally` early when writing code that can fail across external boundaries.
- Provide detailed, actionable context in exception messages.
- Do not return `null` — return empty collections, empty arrays, or use explicit Optional/nullable types.
- Do not pass `null` as arguments into functions unless explicitly required by an external API.

### 7. Classes and Modules

- Small modules/classes: measured by responsibilities, not pure line count.
- Single Responsibility Principle: every class/module should have only one reason to change.
- High cohesion: internal variables and methods must be tightly related and mutually utilized.
- Low coupling: minimize external dependencies between classes and modules.
- Open/Closed Principle: open for extension, closed for modification.

### 8. Unit Tests

- F.I.R.S.T.: Fast, Independent, Repeatable, Self-validating, Timely.
- One concept or one assertion focus per test.
- Test code quality equals production code quality.
- Readable test names that clearly describe scenario and expected outcome.
- Structure tests using the Arrange-Act-Assert (AAA) pattern.

### 9. Core Code Quality Principles

- **DRY (Don't Repeat Yourself)**: Eliminate duplicate logic and duplicate truth.
- **YAGNI (You Aren't Gonna Need It)**: Never build for speculative, hypothetical futures.
- **KISS (Keep It Simple)**: Avoid unnecessary complexity, premature abstractions, or over-engineering.
- **Boy Scout Rule**: Leave any file cleaner than you found it.

### 10. Code Smells to Avoid

- Long functions or monolithic classes.
- Duplicate code or copy-pasted blocks.
- Dead code (unused variables, uncalled functions, stale parameters, unused imports).
- Feature envy (a method or component overly interested in the data of another module).
- Inappropriate intimacy (modules knowing private internal details of each other).
- Long parameter lists.
- Primitive obsession (overusing raw strings/numbers instead of strong domain types).
- Massive `switch/case` statements (favor polymorphism or lookup tables).
- Temporary fields (class variables only populated in specific execution branches).

### 11. Concurrency and Async

- Keep concurrent/async execution code separated from synchronous domain logic.
- Limit the scope of shared, synchronized, or locked data.
- Utilize thread-safe and immutable data structures.
- Keep critical sections and async wait boundaries as small as possible.
- Fully understand execution models, event loops, and microtask queues.

### 12. System Design

- Separate construction from use (use Dependency Injection and factory patterns).
- Use factories and builders for complex object assembly.
- Program to interfaces/contracts, not concrete implementations.
- Favor composition over inheritance.
- Apply design patterns only when they genuinely simplify comprehension, not to demonstrate cleverness.

### 13. Refactoring

- Refactor continuously in small, incremental steps, not in massive high-risk batches.
- Ensure automated verification (lint, typecheck, tests) passes before and after refactoring.
- Apply standard refactorings: Extract Function, Rename Variable, Move File, Inline Variable.

### 14. Documentation & Core Philosophy

- Self-documenting code > comments > external documentation.
- Public APIs, exported library functions, and shared features require clear type signatures and usage examples.
- Keep documentation adjacent to the code it describes.
- **Core Philosophy**: Code is read 10x more than it is written. Optimize relentlessly for readability, predictability, and maintainability over cleverness.

---

## React Composition Patterns

Guidelines for building flexible, scalable, and maintainable React components. Prevents boolean prop proliferation by favoring compound components, lifted state, and composable internals.

### 1. Component Architecture (HIGH)

- **`architecture-avoid-boolean-props`**: Never add boolean props (e.g. `isThread`, `isEditing`, `isCompact`, `isDM`) to customize component layout or behavior. Each boolean prop doubles the state space and leads to exponential conditional nesting. Use composition and compound components instead.
- **`architecture-compound-components`**: Structure complex components into compound components that share context (`Component.Provider`, `Component.Frame`, `Component.Header`, `Component.Body`, `Component.Footer`, `Component.Submit`). Consumers explicitly assemble only the parts they need without prop drilling.

### 2. State Management (MEDIUM)

- **`state-decouple-implementation`**: Decouple state management from UI presentation. The Provider is the single source of truth for how state is managed (useState, Zustand, server sync). Presentational subcomponents only consume the context interface without knowing the backing store.
- **`state-context-interface`**: Define generic, explicit context interfaces with `{ state, actions, meta }` to support dependency injection, storybook mocking, and headless testing.
- **`state-lift-state`**: Lift state into provider components so sibling components have direct, clean access rather than threading callbacks through multiple intermediary layers.

### 3. Implementation Patterns (MEDIUM)

- **`patterns-explicit-variants`**: Create explicit, dedicated component variants (e.g., `PrimaryButton`, `IconButton`, `SubmitButton`) or explicit variant types rather than toggling behaviour through boolean flags.
- **`patterns-children-over-render-props`**: Prefer composing standard React `children` over `renderHeader`, `renderFooter`, or `renderActions` props.

### 4. React 19 APIs (MEDIUM)

- **`react19-no-forwardref`**: Do not use `forwardRef`. In React 19, `ref` is passed directly as a standard component prop. Use `use(Context)` instead of `useContext(Context)`.

---

## Vercel React & Next.js Performance Optimization

Engineered performance rules across 8 prioritized categories to ensure fast load times, minimal bundle sizes, and optimal re-rendering.

### 1. Eliminating Waterfalls (Priority 1 — CRITICAL)

- **`async-cheap-condition-before-await`**: Check synchronous guards, cached variables, and cheap conditions before awaiting promises or remote flags.
- **`async-defer-await`**: Move `await` calls into the specific conditional branches or blocks where their resolved values are actually used.
- **`async-parallel`**: Execute independent asynchronous operations concurrently with `Promise.all()` or `Promise.allSettled()` instead of serial `await` statements.
- **`async-dependencies`**: For partially dependent async operations, chain dependent promises immediately and run them concurrently alongside independent tasks.
- **`async-api-routes`**: In Route Handlers and Server Actions, initiate asynchronous promises early and await them as late as possible to overlap CPU work with network I/O.
- **`async-suspense-boundaries`**: Wrap slow, data-fetching server components with `<Suspense>` boundaries to stream HTML to the browser immediately without blocking the entire page.

### 2. Bundle Size Optimization (Priority 2 — CRITICAL)

- **`bundle-barrel-imports`**: Import directly from concrete module paths (e.g. `lucide-react/dist/esm/icons/...` or specific submodules) to avoid pulling in entire barrel files.
- **`bundle-analyzable-paths`**: Ensure dynamic imports and file-system operations use statically analyzable string literals, avoiding dynamic templates that cause broad bundler inclusions.
- **`bundle-dynamic-imports`**: Use `next/dynamic` (`React.lazy`) for heavy, below-the-fold, or conditional client components (e.g., dialogs, rich text editors, charts, syntax highlighters).
- **`bundle-defer-third-party`**: Defer third-party scripts (analytics, logging, chat widgets) until after hydration using `next/script` with `strategy="lazyOnload"`.
- **`bundle-conditional`**: Dynamically import heavy libraries (e.g. export-to-PDF, zip tools) only inside the event handler that executes the feature.
- **`bundle-preload`**: Preload code and data on mouse hover or element focus for instant perceived transition speeds.

### 3. Server-Side Performance (Priority 3 — HIGH)

- **`server-auth-actions`**: Always authenticate and authorize incoming requests inside Server Actions with the same rigor as public API endpoints; never trust client-provided IDs.
- **`server-cache-react`**: Use `React.cache()` to deduplicate identical data fetch and compute operations across multiple components during a single server render pass.
- **`server-cache-lru`**: Implement an LRU cache for expensive, cross-request server computations that remain valid across users.
- **`server-dedup-props`**: Avoid passing duplicate or redundant data objects from Server Components into Client Components to prevent bloated RSC payload serialization.
- **`server-hoist-static-io`**: Hoist static I/O (reading config files, loading fonts, asset buffers) to the module level so it runs once during worker boot, not per request.
- **`server-no-shared-module-state`**: Never store request-specific mutable data in module-level global variables in RSC/SSR to prevent cross-request data leaks.
- **`server-serialization`**: Minimize data passed across the server-client boundary by picking only the exact fields required by the Client Component.
- **`server-parallel-fetching`**: Place data fetching in sibling components or initiate fetches simultaneously so data loads in parallel rather than sequentially down a tree.
- **`server-parallel-nested-fetching`**: When fetching nested relationships for list items, map and batch them concurrently inside `Promise.all()` instead of item-by-item sequential waterfalls.
- **`server-after-nonblocking`**: Use Next.js `after()` for non-blocking secondary work (audit logs, metrics, cache warming) that should run after the response is sent.

### 4. Client-Side Data Fetching (Priority 4 — MEDIUM-HIGH)

- **`client-swr-dedup`**: Use SWR (or TanStack Query) for client-side data fetching to get automatic request deduplication, background caching, and optimistic updates.
- **`client-event-listeners`**: Deduplicate global listeners on `window` or `document` by using a single shared event listener with a subscriber set.
- **`client-passive-event-listeners`**: Always specify `{ passive: true }` when attaching event listeners to high-frequency scroll, touch, or wheel events.
- **`client-localstorage-schema`**: Version and minimize data stored in `localStorage` or `sessionStorage` to prevent quota exhaustion and broken states during schema migrations.

### 5. Re-render Optimization (Priority 5 — MEDIUM)

- **`rerender-defer-reads`**: Avoid subscribing components to fast-moving state if that state is only read inside an event callback; read from a ref or event payload instead.
- **`rerender-memo`**: Wrap computationally heavy subtrees in `React.memo` to shield them from parent re-renders.
- **`rerender-memo-with-default-value`**: Hoist non-primitive default prop values (empty arrays `[]`, objects `{}`, noop functions) outside the component to prevent breaking memoization.
- **`rerender-dependencies`**: Pass primitive values (`string`, `number`, `boolean`) into hook dependency arrays instead of objects or arrays.
- **`rerender-derived-state`**: In list components, subscribe to derived booleans (e.g. `isSelected = selectedId === id`) rather than passing the raw selected ID to every item.
- **`rerender-derived-state-no-effect`**: Compute derived values synchronously during render; never sync derived values using `setState` inside `useEffect`.
- **`rerender-functional-setstate`**: Use functional updater form `setState(prev => ...)` to keep callbacks stable without needing state values in dependency arrays.
- **`rerender-lazy-state-init`**: Pass an initializer function `useState(() => expensiveComputation())` to prevent re-running costly initialization logic on every render.
- **`rerender-simple-expression-in-memo`**: Avoid `useMemo` for basic arithmetic, string concatenation, or lightweight primitive comparisons; the hook overhead outweighs the computation.
- **`rerender-split-combined-hooks`**: Decompose combined custom hooks with unrelated concerns into separate, granular hooks with independent dependencies.
- **`rerender-move-effect-to-event`**: Place user-triggered logic directly in event handlers (`onClick`, `onSubmit`) rather than synchronizing through `useEffect`.
- **`rerender-transitions`**: Wrap non-urgent state updates (e.g., search filtering, page tabs) in `startTransition` to keep typing and micro-interactions responsive.
- **`rerender-use-deferred-value`**: Use `useDeferredValue` to defer expensive list or visualization updates while immediate user input renders instantly.
- **`rerender-use-ref-transient-values`**: Store high-frequency transient values (mouse coordinates, scroll offsets, animation frame IDs) in `useRef` when they do not drive JSX layout.
- **`rerender-no-inline-components`**: Never declare component functions inside another component's render body; this forces complete remounting and state destruction on every render.

### 6. Rendering Performance (Priority 6 — MEDIUM)

- **`rendering-animate-svg-wrapper`**: Animate a wrapper `<div>` using GPU-accelerated CSS `transform` and `opacity` instead of animating SVG elements or attributes directly.
- **`rendering-content-visibility`**: Apply CSS `content-visibility: auto` and `contain-intrinsic-size` to long off-screen lists to bypass rendering work until scrolled into view.
- **`rendering-hoist-jsx`**: Hoist static JSX trees outside of component render functions so React reuses the exact same virtual DOM node without reallocating.
- **`rendering-svg-precision`**: Reduce decimal precision on SVG path coordinates to minimize DOM size and layout computation.
- **`rendering-hydration-no-flicker`**: Use small inline `<script>` tags in `<head>` for client-only preference initialization (theme, color mode) to avoid flash of incorrect content.
- **`rendering-hydration-suppress-warning`**: Use `suppressHydrationWarning` strictly on specific elements with inevitable client-server differences (e.g., localized timestamps).
- **`rendering-activity`**: Use React's `<Activity mode="hidden">` (or CSS `display: none`) to preserve the DOM and state of inactive tabs or panels instead of unmounting.
- **`rendering-conditional-render`**: Always use ternary operators (`condition ? <Component /> : null`) instead of `condition && <Component />` to prevent accidental rendering of `0` or `NaN`.
- **`rendering-usetransition-loading`**: Prefer `useTransition` and `isPending` for inline loading states rather than creating manual boolean loading flags.
- **`rendering-resource-hints`**: Utilize React DOM resource hints (`preload`, `preconnect`, `prefetch`) to initiate early downloads of critical web fonts, hero images, and API endpoints.
- **`rendering-script-defer-async`**: Ensure all external non-critical script tags specify `defer` or `async` to avoid blocking HTML parsing.

### 7. JavaScript Performance (Priority 7 — LOW-MEDIUM)

- **`js-batch-dom-css`**: Batch direct DOM styling modifications using class names or `element.style.cssText` instead of mutating individual style properties sequentially.
- **`js-index-maps`**: Build an index `Map` or dictionary object when performing repeated lookups by ID instead of repeatedly executing `.find()` inside a loop.
- **`js-cache-property-access`**: Cache deeply nested object properties in local variables inside intensive loops.
- **`js-cache-function-results`**: Memoize the results of pure, computationally expensive functions in a module-level cache.
- **`js-cache-storage`**: Cache `localStorage` and `sessionStorage` values in memory to avoid repetitive synchronous disk I/O on hot code paths.
- **`js-combine-iterations`**: Combine consecutive `.filter().map()` calls into a single loop or single `.reduce()` pass when operating on large collections.
- **`js-length-check-first`**: Compare array or collection lengths first before initiating expensive element-by-element equality checks.
- **`js-early-exit`**: Use early guard clauses and returns to avoid deep indentation and terminate execution immediately upon unmet conditions.
- **`js-hoist-regexp`**: Instantiate `RegExp` objects outside of functions or loops to prevent recompiling regular expressions on every invocation.
- **`js-min-max-loop`**: Find minimum and maximum values using a single `for` loop traversal instead of sorting the entire array.
- **`js-set-map-lookups`**: Use `Set.has()` and `Map.get()` for $O(1)$ lookups instead of calling `Array.includes()` ($O(N)$) on collections.
- **`js-tosorted-immutable`**: Use modern immutable array methods (`toSorted()`, `toReversed()`, `toSpliced()`) instead of mutating in-place methods (`sort()`, `reverse()`, `splice()`).
- **`js-flatmap-filter`**: Use `flatMap()` to filter and transform array items simultaneously in a single iteration pass.
- **`js-request-idle-callback`**: Schedule non-critical background computations and precomputations during browser idle periods with `requestIdleCallback`.

### 8. Advanced Patterns (Priority 8 — LOW)

- **`advanced-effect-event-deps`**: Never include `useEffectEvent` functions in `useEffect` dependency arrays; they are guaranteed to have stable identity.
- **`advanced-event-handler-refs`**: Keep dynamic event callbacks stored in `useRef` when subscribing to external event emitters so subscriptions remain stable across handler changes.
- **`advanced-init-once`**: Ensure application-wide singletons and SDK initializations run once per application lifecycle rather than re-triggering on component remounts.
- **`advanced-use-latest`**: Use a `useLatest(value)` hook to read the most up-to-date props or state inside stable callbacks and timers without re-triggering effects.
