<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

## React Component Conventions

- Use PascalCase for component names.
- Declare and export props using `export type ComponentNameProps = { ... }`.
- Use TypeScript primitive types such as `string`, `number`, and `boolean`. Do not use `String`, `Number`, or `Boolean`.
- Declare components as named functions: `export function ComponentName`.
- Destructure props in the function parameters and use the corresponding component props type.
- Do not use arrow functions, `React.FC`, or default exports for components.
- Create global, reusable components inside `src/components`.
- Keep feature-specific components inside their respective modules.

### Required Pattern

```tsx
export type ComponentNameProps = {
  keyName: string
}

export function ComponentName({ keyName }: ComponentNameProps) {
  return <div>{keyName}</div>
}
```

## Fast Task Execution

- Never run production builds automatically.
- Do not execute `npm run build`, `pnpm build`, `yarn build`, `bun run build`, `next build`, `turbo build`, or equivalent commands unless explicitly requested.
- Never run lint automatically.
- Do not execute `npm run lint`, `pnpm lint`, `yarn lint`, `bun run lint`, `eslint`, `next lint`, `turbo lint`, or equivalent commands unless explicitly requested.
- Do not run lint after creating or modifying files.
- Do not start development servers or long-running processes unless explicitly requested.
- Avoid running the entire test suite or performing a full type-check for small changes.
- Prefer fast validation by inspecting only the files modified.
- Do not install, remove, or update dependencies unless required by the task.
- Inspect only the files necessary to complete the request.
- Do not refactor, format, or modify unrelated files.
- Keep changes minimal and complete tasks as quickly as possible.
- If a build, lint, or full validation is recommended, inform the user of the command without executing it.

<!-- END:nextjs-agent-rules -->
