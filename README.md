# Kuhn Tunes

is an app built using svelte, hosted in cloudflare, and version-controled in codeberg.

## Deployment
``` bash
npm run build
wrangler pages publish ./.svelte-kit/cloudflare
```