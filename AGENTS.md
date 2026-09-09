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

<!-- END:nextjs-agent-rules -->
