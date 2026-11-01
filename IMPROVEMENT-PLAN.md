# Personal website: improvement plan

**This is a temporary working document.** It lets work continue across machines and sessions. It is
deleted in the final phase, when the history lives in `ai-changelogs`.

## Status

Update this table in every phase-ending commit. It is the source of truth for where work stands.

| Phase | Title | Status |
|---|---|---|
| 0 | Set up the branch and this document | Done |
| 1 | Tests and pre-push hook | Done |
| 2 | Runtime and deployment | Done |
| 3 | App fixes | Done |
| 3.5 | Move tests to `test/unit` | Not started |
| 4 | Templates, mobile and accessibility | Not started |
| 5 | Images | Not started |
| 6 | Toolchain | Not started |
| 7 | Finish | Not started |

**Next action:** Phase 3.5.

**Check at first deploy:** the Docker build passed, but the image hasn't been confirmed running. Check
that it serves pages as `USER node`, reports `healthy`, stops promptly, and that the server has
Docker Compose 1.27 or newer.

**Decisions and notes made during the work:** add anything here that changes this plan or that the
next session needs to know.

- **Claude never pushes.** The `commit-messages` skill forbids it, even when a plan includes a push.
  Claude commits locally and says what is ready; the user pushes. Wherever this document says
  "pushed", the user does it.
- Commit messages carry no AI co-author or tool trailers, also per `commit-messages`.
- **Tests cover site structure, never data contents.** The user maintains `src/services/**/data/` by
  hand, so nothing tests the reading log, skill colours or image paths. TypeScript covers the data's
  shape. In all phases, ask about data that looks odd rather than changing it.
- **No GitHub Actions.** The user chose a pre-push hook instead. `.githooks/pre-push` runs `npm test`,
  and `prepare` sets `core.hooksPath` on each `npm ci`. `prepare` must keep working where git is
  missing, because the Docker build runs it too.

## How to work on this

This applies to every session, on any machine. A new session should start here.

1. Run `git fetch`, check out `site-improvements`, and pull. Pull `master` in the sibling
   `ai-changelogs` repo too. If that repo isn't next to this one, stop and tell the user.
2. Read this document, then the changelogs in `ai-changelogs/projects/personal-website/`.
3. Run `npm ci`, then `npm run build`, so the phase starts from a working state.
4. Do **only** the phase named under "Next action". Step by step means one phase at a time.
5. Run the checks for that phase, then **stop and report the results to the user**.
6. Once the user approves, update the changelog and the Status table, then commit. The user pushes.
   Do not begin the next phase until the user says to.

**Before the user switches machines**, the user must push both of these, or the other machine will be
missing work. Claude should remind them, naming anything still unpushed:

- `site-improvements` in this repo, including this document's latest Status.
- `master` in `ai-changelogs`. That repo never uses branches.

**Commits:** use the `commit-messages` skill. Commit only with user approval. Each phase gets its own
commit (or a few), so any phase can be dropped or reverted.

**Changelogs:** use the `feature-changelog` skill. They go in `ai-changelogs`, never in this repo.

- This effort and phases 1, 3, 4 and 5: `projects/personal-website/2026-10-31-1-site-quality.md`.
- Phases 2 and 6: append to `projects/personal-website/2024-04-08-1-dependency-security.md`. These
  close its Node 20 and TypeScript pin loose ends and supersede its `shelljs` and `clean` decisions.
- Keep them current during the work, including decisions the user makes in conversation.

## Background

`npm audit` reached 0 on 2026-10-31, at commit `893f9cb`. What remained was bugs, a poor phone
experience, an end-of-life runtime and no automated checks. Everything below was measured against
the built site, production or the npm registry on that date.

| Priority | Finding | Evidence |
|---|---|---|
| High | Docker image runs Node 20, which reached end of life on 2026-04-30 | `Dockerfile:1,22`; Node release schedule |
| High | `/about-me` downloads 28 images totalling 39.9 MB on load, including those in collapsed panels | Measured in a browser; largest file is 4 MB |
| High | Phone layout is poor: text column is 226px wide, and the reading log table (383px) overflows onto the background, unreadable | Measured at 375px usable width; screenshot confirms |
| Medium | `.env` is ignored: a `.env` of `PORT=8223` still started on 8001, contradicting the README | `server.ts:34` reads `PORT` before `app.ts:9` loads dotenv |
| Medium | No tests and no CI | Nothing in the repo; every audit fix so far was done by hand |
| Medium | Production image ships dev dependencies | `node_modules` is 70 MB, 4.5 MB with `--omit=dev` |
| Medium | Production sends no security headers and reveals `X-Powered-By: Express` | Live headers from theferalrooster.com |
| Medium | TypeScript pinned at 5.0.4; `ts-node` has had no release since 2023-12 | npm registry |
| Medium | Red White & Brew page says the brewery website "is still live" and links to `rwabbc.com`, which the user confirms is decommissioned | `src/templates/red-white-and-brew.ejs:47-51` |
| Low | `view-router.ts` imports `express()` under the name `Router`, so the "router" is a whole sub-app | `view-router.ts:1,11` |
| Low | `EXPOSE 3000` but the app listens on 8001; `npm install` used instead of `npm ci`; runs as root; `nano` in the image | `Dockerfile` |
| Low | Same `<head>` block in all 8 page templates; Bootstrap 5.2.3 (latest 5.3.8); no `charset`, description or Open Graph tags | Templates |
| Low | Accessibility gaps: icon-only links and the nav toggle have no accessible name, the gallery toggle can't be reached by keyboard, pages have no `<h1>` | Templates |
| Low | Footer hardcodes `© 2024`; `about-me.js` and `personal-projects.js` are identical; `getReadingLog()` sorts the shared array in place; `server.ts` is excluded from lint | Source |

Production sits behind Cloudflare. On 2026-10-31 the live site served Brotli, with
`Cache-Control: public, max-age=14400` on static files. `/nope` returned a 404 without
`X-Powered-By`, so nginx or Cloudflare may be answering it instead of Express.

### Deliberately not doing

- **Express 5:** Express 4 is still listed as supported (end date "ongoing"), 4.22.3 is current, and
  the dependency changelog already decided against it. Nothing here needs it.
- **`compression` or caching middleware:** Cloudflare already handles both.
- **`NODE_ENV` as a speedup:** expected one, measured none (`/` 16 ms and `/reading/series` about
  85 ms in both modes). It's set in Phase 2 only for production error handling.
- **Self-hosting Bootstrap or Font Awesome:** a CDN is fine for this site.
- **TypeScript 7:** `typescript-eslint` requires `<6.1.0`.
- **GitHub Actions:** the pre-push hook runs the tests instead.
- **Dependabot:** without CI its PRs would arrive untested and skip the hook. Vulnerability alerts
  need no file in the repo, and `npm outdated` covers the rest.

### Environment notes

- The original checks ran on Windows with Node 24.20 and npm 12.2. Check the versions on each machine.
- Docker wasn't installed on that machine, so there the image is only proven by the Docker Hub build
  after a push.
- `curl` in Git Bash failed certificate checks there (`000` for every URL). That was curl's CA
  bundle, not dead sites. Use Node `fetch` for network checks, and don't disable TLS verification.
- Git on the original machine was 2.22, which has no `git hook run`. To test the hook without pushing,
  run the file from `git rev-parse --git-path hooks/pre-push` with `sh`. Git for Windows can't be
  upgraded from inside a session started in Git Bash; the user does that with those shells closed.
- Machine-local scratch files don't carry over between machines, so anything needed later must be
  recreated or committed. The baseline below is designed for that.

## Shared checks

**Every phase:** fresh `npm ci`, `npm run build`, `npm audit`, and from Phase 1 onward `npm test`.

**Baseline for HTML diffs.** Recreate on any machine from commit `893f9cb`: build it in a temporary
`git worktree` outside this repo, start it with a preload script that sets `Math.random = () => 0`
(the homepage picks a random project), and save the HTML for `/`, `/about-me`,
`/professional-experience`, `/personal-projects`, `/red-white-and-brew`, `/reading/log`,
`/reading/stats` and `/reading/series`. Remove the worktree afterwards. Compare the current branch
the same way, using `diff -r --strip-trailing-cr`: a fresh checkout has CRLF templates where the
working tree may have LF, and otherwise every line appears to differ. Output should be unchanged through Phase 3.5. After that, every difference must be an
intended one, and Phase 6 should match the end of Phase 5 exactly.

**Browser measurement.** With the `playwright-skill`, load each route at viewport widths 390 and 1440.
Record `document.documentElement.scrollWidth` against the usable width, the `.content-pane` text
width, and image bytes on load for `/about-me`.

## Phases

### Phase 0: Set up the branch and this document

- Create the `site-improvements` branch from `master`.
- Save this document as `IMPROVEMENT-PLAN.md` at the project root.
- Save the working preference to Claude's memory: cross-machine work uses a root plan document that
  is deleted on completion.
- Commit, then the user pushes so the other machine can pick it up.

**Done when:** the branch is committed with this document, and Status is updated.

### Phase 1: Tests and pre-push hook

- Add `npm test`: `node:test` files in `test/unit/` (moved there in Phase 3.5), compiled by `tsc` and run from `dist/`.
- Smoke test all 8 routes through `getApp` (`src/app.ts`) on an ephemeral port.
- Check the structure only: each page renders with its title, and its internal links, stylesheets and
  scripts resolve. Nothing tests the contents of the data files (see the note under Status).
- Add a versioned `.githooks/pre-push` that runs `npm test`, enabled by a `prepare` script.
- Check that the test files stay out of the Docker image's runtime stage.

**Done when:** tests pass locally, and a deliberately broken route fails them and blocks the hook.

### Phase 2: Runtime and deployment

- Move both stages to `node:24-alpine`. Node 24 is what the audit work ran on, and it is supported
  until 2028-04-30.
- Add `engines.node: ">=24"` and move `@types/node` to `^24`.
- Build stage: `npm ci`. Add a stage with `npm ci --omit=dev` for the runtime `node_modules`.
- Runtime stage: `NODE_ENV=production`, `USER node`, `EXPOSE 8001`, a `HEALTHCHECK`, and
  `CMD ["node", "dist/src/server.js"]` so signals reach the process. Remove `nano`, `apk update` and
  `MAINTAINER`.
- Remove `dotenv`. `start` becomes `node --env-file-if-exists=.env dist/src/server.js`, which fixes
  the `.env` bug and drops a production dependency. Docker keeps getting `PORT` from compose.
- Remove the obsolete `version` key from `docker-compose.yml`.

**Done when:** a `.env` with a different port is honoured, HTML matches the baseline, and the Docker
Hub build passes. Write the `HEALTHCHECK` with `node` rather than `curl`, which Alpine doesn't include.

### Phase 3: App fixes

- `src/routes/view-router.ts`: use a real `express.Router()` built inside the function.
- `src/app.ts`: set the view engine here. This has to happen first, because a 404 handler on the main
  app can't render with settings held on the sub-app.
- Add a styled 404 page and a 500 handler. Stack traces stay out of responses.
- Add `helmet`. Turn its HSTS off, because Cloudflare terminates TLS and HSTS is hard to undo.
- Ship the CSP as **report-only** at first: Cloudflare can inject scripts that can't be tested
  locally, and enforcing blind could break the live site. It must allow `cdn.jsdelivr.net` and the
  Font Awesome kit's hosts; confirm those from the browser console.
- Remove the unused `express.urlencoded` and `app.set('port')`.
- Make `getReadingLog()` sort a copy (`src/services/reading/reading-datasource.ts:22`).
- Lint `src/server.ts` and replace its `any` with `NodeJS.ErrnoException`.
- Extend the tests to cover the 404 and 500 pages.

**Done when:** `/nope` shows the styled 404 locally, all 8 routes match the baseline, and no CSP
reports appear in the console.

### Phase 3.5: Move tests to `test/unit`

The user doesn't want tests living beside the code they test.

- Move `src/app.test.ts` to `test/unit/app.test.ts`, and fix its imports and `appRoot`.
- Point `npm test` at `dist/test/`.
- Remove the `.dockerignore` rule for test files. The Dockerfile never copies `test/`.

**Done when:** all tests pass from the new location, HTML matches the baseline, and rebuilding the
Docker stages by hand leaves no tests in `dist`.

### Phase 4: Templates, mobile and accessibility

- Add `partials/_head.ejs` taking a title, description and page assets, and use it in all 8 pages
  and `error.ejs`.
  It adds `charset`, `initial-scale=1`, description and Open Graph tags, and moves Bootstrap to 5.3.8
  with SRI hashes.
- Mobile: replace the `col-2 / col-8 / col-2` wrapper with `col-12 col-lg-8 offset-lg-2`, and wrap the
  reading log in `.table-responsive`.
- Accessibility: `aria-label`s, a real `<button>` for the gallery toggle, an `<h1>` on each page.
- Merge the two gallery scripts into `public/javascripts/image-gallery.js`, using `textContent` rather
  than `innerHTML`.
- Show the current year in the footer. Add `public/robots.txt` and `public/sitemap.xml`.
- Remove the decommissioned-website paragraph and its preceding `<br/>` from
  `src/templates/red-white-and-brew.ejs`. The closure history above it stays.
- Keep the TCNJ PDF link for now: it timed out twice, which could be temporary. Recheck it here and
  ask the user if it's still failing.

**Done when:** no route scrolls horizontally at 390 wide, desktop screenshots look unchanged apart
from intended changes, and the console is clean.

### Phase 5: Images

- Add `loading="lazy"` to images, which also stops collapsed panels loading until opened.
- Resize large JPEGs in place to at most 1600px with a one-off script that isn't committed. Filenames
  don't change, no dependency is added, and the originals stay in git history.

**Done when:** `/about-me` loads far less than 39.9 MB, opening each gallery still shows its images,
and the modal preview still works.

### Phase 6: Toolchain

- TypeScript `5.0.4` → `6.0.3`, the newest `typescript-eslint` accepts. Fix any new deprecations
  properly, without `ignoreDeprecations`. Raise `target` to `es2022`, and set `rootDir: "."` so the
  `dist/src` layout that `appRoot` relies on doesn't change.
- Remove `ts-node` and `shelljs`. Rewrite `tools/clean.ts` and `tools/copy-assets.ts` with `node:fs` and
  run them directly (Node 24 strips types natively).
- Remove the empty `postbuild` script.
- Take the in-range `@types/express` and `serve-favicon` updates.
- Update the README.

**Done when:** a clean clone builds and tests pass, HTML matches the end of Phase 5, and the Docker Hub
build passes.

### Phase 7: Finish

- Run the shared checks one last time and confirm the changelogs are complete.
- Delete `IMPROVEMENT-PLAN.md` as the branch's final commit, so it never reaches `master`.
- With the user's approval, merge to `master`.
- After deploy, check production:
  - `/nope`: if the styled 404 doesn't appear, nginx or Cloudflare is answering it. That config isn't
    in this repo, so record it as a loose end.
  - Security headers are present and `X-Powered-By` is gone.
  - Open each live page and read the browser console. The CSP has no reporting endpoint, so
    violations appear only there. Add any host Cloudflare needs, then switch to enforcing as a
    separate change.

**Done when:** the branch is merged, the plan document is gone, and any production findings are
recorded in `ai-changelogs`.
