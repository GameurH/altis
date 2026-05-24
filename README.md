# altis

Altis boxing & fitness brand — website, docs, and digital MVP.

## Structure

- `altis_web/` — Next.js app (deploy this folder on Vercel)
- `docs/` — project documentation and Obsidian vault

## Deploy on Vercel

1. Import [GameurH/altis](https://github.com/GameurH/altis) on [Vercel](https://vercel.com/new)
2. Set **Root Directory** to `altis_web` (required — app is not at repo root)
3. Add environment variables (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy from the latest `master` commit

### If you see `NOT_FOUND`

Per [Vercel NOT_FOUND docs](https://vercel.com/docs/errors/not_found):

1. **Use the latest deployment URL** from Vercel → Project → Deployments (not an old failed build link)
2. **Confirm Root Directory** is `altis_web` — if it is `.`, Vercel deploys an empty repo root and the site 404s
3. **Redeploy** after adding env vars: Deployments → ⋮ → Redeploy
4. **Check build status** is Ready (green), not Error or Canceled
