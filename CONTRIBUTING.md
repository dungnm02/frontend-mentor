# Workflow

Rules for adding challenges to this repo and publishing them via GitHub Pages.

## Adding a new challenge

1. Download the challenge zip(s) from Frontend Mentor (`<slug>-main.zip`, and `<slug>-figma.zip` if you're PRO).
2. Extract into a new top-level folder named after the challenge slug, e.g. `qr-code-component/`. Keep whatever nesting the zip produces — no manual restructuring needed, this is the copy-paste workflow and it's intentional.
3. Build the solution inside the extracted `-main` folder's `index.html`/CSS/JS.

## Branching

- `main` is the branch GitHub Pages publishes from — keep it in a working state.
- Create a short-lived branch per challenge: `challenge/<slug>` (slug = the top-level folder name, e.g. `challenge/qr-code-component`).
- Commit on that branch until the solution matches the design and works responsively.
- Merge into `main` yourself once done (fast-forward or regular merge), then delete the branch. No PR needed for this solo repo.

## Commit messages

Format: `<type>(<slug>): <imperative summary>`

Types: `feat`, `style`, `fix`, `docs`, `chore`

Examples:
- `feat(qr-code-component): build markup and base layout`
- `style(qr-code-component): match desktop/mobile spacing to design`
- `fix(qr-code-component): correct card shadow color`
- `chore(qr-code-component): add design and figma reference assets`

Rules:
- One challenge per commit — never mix files from two challenge folders in the same commit, so history stays bisectable per challenge.
- Subject line ≤ 72 chars, imperative mood ("add", not "added"/"adds").
- Optional body explains *why* (a design tradeoff, a deviation from the JPG, an accessibility choice) — not *what*, the diff already shows that.

### Final commit for a challenge

When a challenge is done, the closing commit's body should note:
- Any deviations from the design and why
- Any accessibility notes worth flagging
- Nothing else needed — the live link goes in the root README/index, not the commit.

## Publishing via GitHub Pages

- Pages deploys from `main` / root, no build step — these are static HTML/CSS/JS challenges.
- Because each challenge keeps Frontend Mentor's own zip-extracted nesting (e.g. `qr-code-component/qr-code-component-main/qr-code-component-main/index.html`), its live URL is the full nested path:
  `https://dungnm02.github.io/frontend-mentor/qr-code-component/qr-code-component-main/qr-code-component-main/`
- Don't rename or flatten the extracted folders to "fix" this — keeping them exactly as unzipped is the point (zero extra restructuring per challenge). Instead, add every finished challenge's live link to the root `README.md` and `index.html` so the nested path only has to be figured out once.
- If Pages isn't enabled yet: repo Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## AI assistant instructions

- Each challenge folder ships its own `AGENTS.md`/`CLAUDE.md` from Frontend Mentor, tailored to that challenge's difficulty level (Newbie/Junior/Intermediate/...). Treat those as authoritative for *tutoring behavior* inside that folder, even where their content looks identical across challenges today — they're expected to diverge as difficulty increases.
- The repo root [AGENTS.md](AGENTS.md) covers only the workflow rules on this page (branching, commits, structure, publishing) and applies everywhere in the repo, layered underneath whichever per-challenge `AGENTS.md` is in scope for a given folder.
