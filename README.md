# Oksii Admin Panel

Admin panel UI built with React, TypeScript, Vite, TanStack Router, and shadcn/ui on Tailwind CSS v4.

## Getting Started

### Prerequisites

- Node.js LTS (recommended)
- npm (bundled with Node.js)

### Install

```bash
npm install
```

## Development

Start the Vite dev server with HMR:

```bash
npm run dev
```

## Production Build

Create a production build (type-checks + Vite build):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Quality Checks

Lint the codebase:

```bash
npm run lint
```

Run TypeScript checks only:

```bash
npm run typecheck
```

Format the codebase with Prettier:

```bash
npm run format
```

## Project Structure

- `src/main.tsx`: app entry point
- `src/router.tsx`: TanStack Router configuration
- `src/routes/`: route components and layout
- `components/ui/`: shared shadcn/ui components
- `lib/utils.ts`: shared utilities
- `src/index.css`: global styles + Tailwind/shadcn imports
- `public/`: static assets served by Vite

## Path Aliases

Vite resolves `@` to the repository root. Common aliases (from `components.json`):

- `@/components`
- `@/components/ui`
- `@/lib`
- `@/hooks`
