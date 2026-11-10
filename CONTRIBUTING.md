# Workflow

Rules for adding challenges to this repo and publishing them via GitHub Pages.

## Adding a new challenge

1. **Slug** = the Frontend Mentor URL slug, without `-main`/`-master` (e.g. `article-preview-component`).
2. Create a top-level folder named exactly `<slug>/`.
3. Extract `<slug>-main.zip` into that folder, not around it (7-Zip: "Extract Here"; Explorer: "Extract All" with destination `<slug>/`), giving `<slug>/<slug>-main/index.html`.
4. PRO only: extract `<slug>-figma.zip` into the same `<slug>/` folder, giving `<slug>/<slug>-figma/`.
5. Do not rename or flatten the inner zip folder. Build inside `<slug>/<slug>-main/`.
6. Create `challenge/<slug>` and commit the untouched starter files first: `chore(<slug>): add starter files`.
7. Commit the build in small `feat`/`style`/`fix` commits.
8. Update BOTH the root `README.md` table and `index.html` list with the live path.
9. Merge into `main`, push, then delete the local and remote branch (commands under [Branching](#branching)).
10. Open the live URL after Pages deploys and confirm it loads. Copy the path from the address bar; do not reconstruct it by hand.

> **Legacy layout:** `qr-code-component` and `article-preview-component-master` predate this rule and keep their current paths — their live links are already published. Don't rename them.

## Branching

- `main` is the branch GitHub Pages publishes from — keep it in a working state.
- Create a short-lived branch per challenge: `challenge/<slug>` (slug = the challenge slug defined above, e.g. `challenge/qr-code-component`).
- Commit on that branch until the solution matches the design and works responsively.
- Merge into `main` yourself once done (fast-forward or regular merge), then delete the local and remote branch: `git branch -d challenge/<slug>` and, if pushed, `git push origin --delete challenge/<slug>`. No PR needed for this solo repo.

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
- New challenges follow `<slug>/<slug>-main/`, so the live URL is:
  `https://dungnm02.github.io/frontend-mentor/<slug>/<slug>-main/`
- The two legacy challenges have different nesting; use their existing paths in `README.md`. Never hand-build a URL — copy the path from the address bar.
- Don't rename or flatten the extracted folders to "fix" nesting. Instead, add every finished challenge's live link to both the root `README.md` and `index.html` so the path only has to be figured out once.
- If Pages isn't enabled yet: repo Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## AI assistant instructions

- Each challenge folder ships its own `AGENTS.md`/`CLAUDE.md` from Frontend Mentor, tailored to that challenge's difficulty level (Newbie/Junior/Intermediate/...). Treat those as authoritative for *tutoring behavior* inside that folder, even where their content looks identical across challenges today — they're expected to diverge as difficulty increases.
- The repo root [AGENTS.md](AGENTS.md) covers only the workflow rules on this page (branching, commits, structure, publishing) and applies everywhere in the repo, layered underneath whichever per-challenge `AGENTS.md` is in scope for a given folder.
