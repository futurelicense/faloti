# Falola Titilope Rosemary — Portfolio (TanStack Start)

A port of `Falola_Portfolio_Preview.html` to TanStack Start + TanStack Query. It uses the same
activity-counter mechanism as the Adeola portfolio (Supabase tables plus `SECURITY DEFINER` RPCs).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # outputs .output/ (Nitro; auto-targets Vercel when deployed there)
```

## Activity counters

| Counter (footer)          | Trigger                                                     | RPC                         |
| ------------------------- | ----------------------------------------------------------- | --------------------------- |
| Site visits               | First page load per browser session (reloads don't count)   | `register_visit`            |
| (stored) unique visitors  | First visit ever from this browser (`localStorage` id)      | `register_visit(true)`      |
| (stored) monthly visits   | Resets automatically when the month changes                 | `register_visit`            |
| Section views             | Moving to a different page (refreshing the same page doesn't count) | `register_page_view` |
| Resource downloads        | Click on CV / inventory CSV download links                  | `register_download`         |
| Publication & media views | Click or middle-click on the DOI link or a press article    | `register_view`             |

Per-item totals appear inline: "N recorded views" on the publication, "N views" on each
article, and "N downloads recorded" on each resource card.

Code: `src/lib/stats.ts` holds the reads and writes, and `src/lib/use-stats.ts` holds the React
Query hooks. Downloads and views update the screen immediately (optimistic update), then sync
with the database.

### Enabling shared totals

Without env vars the site runs in **demo mode**: counters live in the visitor's own browser.

1. Create a Supabase project, then run `supabase/bootstrap.sql` in the SQL editor.
2. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
   (the publishable/anon key, **never** `service_role`). On Vercel, add both as project
   environment variables.

The tables are read-only to the public. Writes only go through the RPCs, which accept known ids
only and add exactly 1. As with any unauthenticated counter, a determined person can still
inflate the numbers by calling the RPCs directly.

### Scheduled increments (downloads + views)

Like the Adeola portfolio, a GitHub Action (`.github/workflows/increment-activity.yml`) runs
hourly. Each run adds **2 downloads and 2 views**, spread at random across the tracked files
and articles. It calls `bump_activity_counts`, which in turn calls `register_download` /
`register_view`, so the footer totals and per-item counts all stay consistent.

1. Run the `bump_activity_counts` part of `supabase/bootstrap.sql` (or the whole file again).
2. In GitHub, go to Settings → Secrets and variables → Actions and add `SUPABASE_URL` and
   `SUPABASE_SECRET_KEY` (the `sb_secret_…` / service-role key).
3. Use Actions → "Increment downloads and views" → Run workflow to test it once.

Change the amounts with the `DOWNLOADS` / `VIEWS` values in the workflow (0–10 each), or change
the `cron` line to change how often it runs. To run it locally, use `npm run increment-activity`
(it reads `.env`).

Unlike Adeola's version, this function can only be called with the secret key, not by the public.

### Adding a new download or tracked link

1. Add it to `downloads` / `media` in `src/lib/site-data.ts`.
2. Add its id to the allowlist in `register_download` / `register_view` and to the arrays in
   `bump_activity_counts` in the SQL, and re-run it.
