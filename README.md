# zachmannon.com

Personal site, served by GitHub Pages from the `main` branch. Anything merged to
`main` is live within about a minute.

## How it's built

GitHub Pages runs Jekyll on every push to `main`:

- `_layouts/default.html` holds the `<head>`, meta tags, and page shell.
- `_includes/nav.html` and `_includes/footer.html` are the shared nav and footer.
  Edit them once and every page updates.
- `_includes/structured-data.html` holds the JSON-LD (search engine / AI profile data).
- Each page (`index.html`, `about.html`, `work.html`, `contact.html`, `404.html`)
  starts with front matter (`title`, `description`) and contains only its own content.
- `README.md` and `CLAUDE.md` are excluded from the build in `_config.yml`.

If a Jekyll build fails, GitHub keeps serving the last good version, so a bad
build does not take the site down. Check the repo's **Actions** tab for build status.

## Backups and restoring

Every commit on `main` is a restorable snapshot, and the full history lives on GitHub.
Named restore points are tagged `backup/...`:

```bash
git tag -l "backup/*"
```

**Undo the most recent change** (safe; keeps history):

```bash
git revert HEAD
git push origin main
```

**Roll the whole site back to a tagged snapshot** (keeps history):

```bash
git switch main
git restore --source backup/live-2026-09-26 --staged --worktree -- .
git commit -m "Restore site to backup/live-2026-09-26"
git push origin main
```

**Look at an old version without changing anything:**

```bash
git switch --detach backup/live-2026-09-26
```

Before a big change, create a restore point:

```bash
git tag backup/live-YYYY-MM-DD main
git push origin backup/live-YYYY-MM-DD
```
