# Repository Guidelines

## Project Structure & Module Organization

- `src/` holds the React app entry points (`main.tsx`) and root component (`App.tsx`), plus global styles in `index.css` and `App.css`.
- `src/assets/` stores app-specific static assets imported by the UI.
- `public/` contains static files served as-is by Vite.
- `components/ui/` contains shared UI components (shadcn-style).
- `lib/utils.ts` holds shared utility helpers.

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
- Tailwind CSS is listed in dev dependencies; if used, document custom setup in this file.
