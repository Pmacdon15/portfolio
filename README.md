This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tests

Tests use [Vitest](https://vitest.dev) and React Testing Library, and live in `tests/`. They are split into projects:

| Project      | What it covers                                              | Command                   |
| ------------ | ----------------------------------------------------------- | ------------------------- |
| `unit`       | `src/lib` (schemas, hooks, the Resend action, the mutation, data) and the no-async-pages check | `bun run test:unit`       |
| `components` | Everything in `src/components`                              | `bun run test:components` |
| `app`        | The layout and pages in `src/app`                           | `bun run test:app`        |
| `build`      | Runs `next build` and checks every page stays static (○)    | `bun run test:build`      |

```bash
bun run test           # all projects
bun run test:coverage  # with coverage; fails below 100%
bun run test:watch
```

CI (`.github/workflows/`) runs Tests (each project in parallel, then a merged 100% coverage check), Type check, Biome (autofixes and commits on PRs) and Audit.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
