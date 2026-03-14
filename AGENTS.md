# Repository Guidelines

## Project Structure & Module Organization

- `src/` holds the React app entry points (`main.tsx`) and root component (`App.tsx`), plus global styles in `index.css` and `App.css`.
- `src/assets/` stores app-specific static assets imported by the UI.
- `src/routes/` contains TanStack Router route components plus the root layout shell.
- `src/router.tsx` defines the TanStack Router route tree.
- `public/` contains static files served as-is by Vite.
- `components/ui/` contains shared UI components (shadcn-style).
- `lib/utils.ts` holds shared utility helpers.
- `src/api/api.ts` provides a typed ky-based API client; shared API types live in `src/api/types.ts`.

## Build, Test, and Development Commands

- `npm run dev`: start the Vite dev server with HMR for local development.
- `npm run build`: type-check (`tsc -b`) and build the production bundle.
- `npm run lint`: run ESLint across the repo.
- `npm run typecheck`: run TypeScript project checks without emitting build output.
- `npm run format`: format the codebase with Prettier.
- `npm run preview`: serve the production build locally for verification.

## Coding Style & Naming Conventions

- Language: TypeScript + React (Vite, ESM).
- Indentation: follow existing files (2-space formatting is typical in the repo).
- Components: PascalCase file/component names (e.g., `App.tsx`), hooks as `useThing`.
- Utilities: camelCase exports in `lib/`.
- Linting: ESLint is configured via `eslint.config.js`; run `npm run lint` before PRs.
- Formatting: Prettier uses `.prettierrc.json`; run `npm run format`.
- Workflow: when making changes, run `npm run lint` and `npm run typecheck`; run `npm run format` after completing tasks to ensure consistent formatting.
- Styling: global styles live in `src/index.css` and `src/App.css`; UI components are in `components/ui/`.
- Routing: TanStack Router is configured in `src/router.tsx`; route components live in `src/routes/`.
- Theme: `src/hooks/theme.ts` manages light/dark/system preference via `localStorage` and the `dark` class.
- Aliases: Vite resolves `@` to the repository root; shadcn aliases map `@/components`, `@/lib`, `@/hooks`.
- API: use the ky client in `src/api/api.ts`; keep request/response types in `src/api/types.ts`.

## Testing Guidelines

- No automated test framework is configured yet.
- If you add tests, document the framework and add a `test` script in `package.json`.
- Keep any test files co-located or in a new `tests/` directory, and note the naming pattern in this guide.

## Commit & Pull Request Guidelines

- Git history currently contains only an “initial commit”; no established commit message convention yet.
- Prefer short, imperative commit messages (e.g., “Add dashboard layout”).
- PRs should include: a clear summary, linked issues (if any), and screenshots for UI changes.

## Configuration & Tooling Notes

- Node tooling is managed via Vite + TypeScript; config files include `vite.config.ts` and `tsconfig*.json`.
- Tailwind CSS v4 is configured via `@tailwindcss/vite` and `src/index.css` imports.
- shadcn/ui is configured via `components.json` (style `base-mira`, Phosphor icons).
- React Compiler is enabled via `@vitejs/plugin-react` + `babel-plugin-react-compiler`.
