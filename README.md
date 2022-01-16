# modularized-sveltekit-app

## Dependency graph

[![](https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IFREXG4gICAgbWVzc2FnZXMgLS0-IGFwcCBcbiAgICB1c2VycyAtLT4gYXBwXG4gICAgdXNlcnMgLS0-IG1lc3NhZ2VzXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZmxvd2NoYXJ0IFREXG4gICAgbWVzc2FnZXMgLS0-IGFwcCBcbiAgICB1c2VycyAtLT4gYXBwXG4gICAgdXNlcnMgLS0-IG1lc3NhZ2VzXG4iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

This app is made of 3 sub-apps:

- **users**, a module that offers a Svelte component `UserList.svelte` and an API `/api/users.json`
- **messages**, a module that offers a Svelte component `Chat.svelte` and an API `/api/messages.json` ; it depends on users' library
- **app**, the main SvelteKit app, that offers an entrypoint `/` and uses the two other modules

## How does it work?

- Dependencies are managed by pnpm with the [Workspace](https://pnpm.io/workspaces) feature
- All modules are built with [adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (with [#3362](https://github.com/sveltejs/kit/pull/3362) merged)
- They are loaded dynamically as vite middlewares
  ```js
  vite: {
    plugins: [loadModules('@gauben/users', '@gauben/messages')],
  },
  ```

## How to try it?

You'll need to clone [gauben/kit](https://github.com/GauBen/kit):

```bash
git clone https://github.com/GauBen/kit
cd kit
pnpm install
pnpm build
cd ..
```

You'll also need to clone this very repo:

```bash
git clone https://github.com/GauBen/modularized-sveltekit-app
cd modularized-sveltekit-app
pnpm install

# Link gauben/kit
cd app && pnpm link ../kit/packages/adapter-node && cd ..
cd messages && pnpm link ../kit/packages/adapter-node && cd ..
cd users && pnpm link ../kit/packages/adapter-node && cd ..

pnpm dev
# ✨
```

**Even server-side rendering works!**

## Currently broken

- Type declarations
