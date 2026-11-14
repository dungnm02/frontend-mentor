# AGENTS.md (repo root)

Repo-wide rules for AI assistants working anywhere in this repository. This file governs git workflow and publishing — it does not replace a challenge's own `AGENTS.md` for tutoring behavior.

## Scope

- Each top-level folder is one Frontend Mentor challenge, containing Frontend Mentor's own zip-extracted structure (starter files, optionally a sibling `-figma` folder). Don't flatten or rename this nesting — see `CONTRIBUTING.md` for why.
- If a challenge folder has its own `AGENTS.md`, follow it for how to mentor/assist the user on that specific challenge — it's tailored to that challenge's difficulty level by Frontend Mentor and takes precedence over this file for tutoring style within that folder. This root file only adds the workflow rules below on top of that.

## Workflow rules

Full detail lives in `CONTRIBUTING.md`. Summary:

- Slug = the Frontend Mentor URL slug, without `-main`/`-master`. Top folder and branch use it: `<slug>/` and `challenge/<slug>`.
- Commit untouched starter files first: `chore(<slug>): add starter files`, then build commits.
- Commit messages: `<type>(<slug>): <imperative summary>` (`feat`/`style`/`fix`/`docs`/`chore`), one challenge per commit.
- `main` always deploys via GitHub Pages from root — keep it in a working state.
- When a challenge is finished, add its live Pages link to BOTH the root `README.md` and `index.html`, then delete the local and remote branch.

Follow these conventions for any git operation in this repo without needing them re-explained each time.

## Bug log

When the user gets stuck on an error for more than 15 minutes, or fixes a bug, add one row to `BUGS.md` at the repo root: date, challenge slug, symptom, root cause, how it was found, minutes spent, whether it was fixed independently.

- Ask for these details if they are missing; do not invent them.
- Record the root cause, not just the workaround.
- Never delete old rows, and mark repeats with `lặp lại` in the notes column.
- This log feeds the 4-week review in `C:\Users\admin\Documents\LifeLog\career\progress.md`. Do not move it into the challenge folders.
