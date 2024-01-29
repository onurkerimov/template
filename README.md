# Project Name

## Stack Summary

- Vite (fast thanks to Esbuild)
- Vike (Similar to Next.js, but in Viteland, and I think better opinions)
- Vitest (same as jest, instead fast, and reuses a lot of the deps)
- Storybook (same advantages as Vitest thanks to @storybook/builder-vite)
- LightningCSS as the CSS transpiler (fast af)
- Prisma
- tRPC (I always wanted to use this)
- UnoCSS

## TODO

- Add Github actions for:
  - Test coverage
  - Deploying the site
  - Deploying the storybook
- Recommended VSCode extensions

## Add these if needed in the future
- Plop generators
- Automatically use SVGs as React components?

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `pnpm install` to install dependencies.

## Usage

### Development

To start the development server, run: `pnpm run dev`

This command executes `tsx ./express-entry.ts` for TypeScript compilation.

### Building

To build the project, run: `pnpm run build`

This command executes `vite build`.

### Preview

For a production-like preview, run: `pnpm run preview`

This command sets `NODE_ENV=production` and executes `tsx ./express-entry.ts`.


### Storybook

To run Storybook in development mode, use: `pnpm run storybook`

This command runs Storybook on port 6006 (`storybook dev -p 6006`).

To build Storybook, use: `pnpm run build:storybook`

This command executes `storybook build`.

### Linting

To lint the project, use: `pnpm run lint:fix`

This command executes both ESLint and Stylelint.

To fix only ESLint issues, `pnpm run lint:eslint-fix`, for only Stylelint issues, `pnpm run lint:style-fix`.

### Prisma

To open Prisma Studio, run: `pnpm run prisma:studio`

This command launches Prisma Studio.

To generate Prisma client, use: `pnpm run prisma:generate`

This command generates the Prisma client.

### Testing

To run tests, use: `pnpm run test`

This command runs tests using `vitest`.

To generate coverage report, use: `pnpm run test:coverage`

This command runs tests with coverage using `vitest`.

To update virtual snapshots, run: `pnpm run test:virtual-update`

This command updates virtual snapshots using `vitest`.
