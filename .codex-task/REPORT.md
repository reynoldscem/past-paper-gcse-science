# Highway Code chunk 1 — blocked

The question expansion is incomplete. Work stopped under the brief's “If blocked or unsure, stop and say so in the report” instruction. No new questions were generated or wired into the app.

## Blocking conflict

Acceptance item 7 requires a whole-driving-bank checker to fail on duplicate IDs, duplicate normalised stems, or token-Jaccard similarity strictly greater than 0.7. It also says “never edit existing ones”. The existing bank already violates the required stem checks, so adding or rewriting new questions cannot make that check pass.

The reproducible checker loads `getAllQuestions()` from `src/data/index.ts`, using esbuild exactly as the theory test runner does, and filters the four existing driving subjects. It compares every pair, including existing-to-existing pairs. Normalisation lowercases and removes non-ASCII-alphanumeric characters. Token sets use lowercase alphanumeric words, retaining stopwords and numbers. No existing pairs are exempted and images do not exempt matching stems.

Results from `node scripts/hc-dedupe.mjs --json` (exit 1):

- Existing driving questions: **455**; new questions: **0**.
- Duplicate ID pairs: **0**.
- Duplicate normalised stem pairs: **733**.
- Additional nonidentical stem pairs with token-Jaccard > 0.7: **802**.
- Total failing stem pairs: **1,535** (pair counts, not question counts).

For example, `dt-visual-001` and `dt-visual-002` both ask “What does this sign mean for you?”. They have different images, but the brief explicitly checks stems. `dt-prep-011` and `dt-prep-012` ask the same stopping-distance template for different speeds and have token-Jaccard similarity 0.8667.

Full pair results are saved locally in `.codex-task/dedupe-results.json`. Run `node scripts/hc-dedupe.mjs` for counts and five examples, or add `--json` for every pair. To resume, clarify whether existing-to-existing stem collisions may be exempted, or permit rewriting existing stems. Neither exception was assumed.

## Files changed

- `scripts/hc-dedupe.mjs`: new whole-driving-bank checker; exits nonzero for any required collision.
- `.codex-task/REPORT.md`: this report, replacing an unrelated older report already present in the worktree.
- `.codex-task/dedupe-results.json`: complete local diagnostic output.

The report is tracked and committed; the full diagnostic JSON is ignored and remains local. No app, question, topic, manifest or image files changed. No new-question regression test was added because there is no new bank to validate. Ignored dependency links reuse the main checkout's existing installed packages, with build caches local to this worktree. No package download was needed.

## New question counts

| Chapter | Image | Non-image | Total |
| --- | ---: | ---: | ---: |
| traffic-signs | 0 | 0 | 0 |
| road-markings | 0 | 0 | 0 |
| light-signals-controlling-traffic | 0 | 0 | 0 |
| signals-to-other-road-users | 0 | 0 | 0 |
| signals-by-authorised-persons | 0 | 0 | 0 |
| vehicle-markings | 0 | 0 | 0 |
| rules-for-pedestrians-1-to-35 | 0 | 0 | 0 |
| rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46 | 0 | 0 | 0 |
| rules-about-animals-47-to-58 | 0 | 0 | 0 |
| rules-for-cyclists-59-to-82 | 0 | 0 | 0 |
| rules-for-motorcyclists-83-to-88 | 0 | 0 | 0 |
| road-users-requiring-extra-care-204-to-225 | 0 | 0 | 0 |
| **Total** | **0** | **0** | **0** |

All chapter expansion was deferred at the baseline dedupe blocker. No substantive Highway Code ambiguity was adjudicated and no rule-by-rule concept coverage audit was completed. Official officer photographs remain a documented pre-existing personal-data exclusion in `docs/DRIVING_CONTENT.md`.

## Validation

- `npm test`: **passed**, exit 0; 28 content/history/science tests, 5 hazard tests, 2 server tests.
- `npm run lint`: **failed**, exit 1; pre-existing `src/lib/progressCodec.ts:44:27`, `_version` assigned but unused (`@typescript-eslint/no-unused-vars`). No change was made to that unrelated file after the task stop condition was reached.
- `npm run build`: **passed**, exit 0. First attempt could not write TypeScript caches through the shared dependency-directory symlink; changing only ignored local dependency links made caches writable. Existing warnings concern old Browserslist data and a JavaScript bundle above 500 kB.
- `node scripts/hc-dedupe.mjs`: **failed as required**, exit 1, on the existing conflicts above.
- `git diff --check`: passed before commit.
- `pii-check .`: failed on 23 pre-existing tracked lines; only filenames and line numbers were emitted. The new checker contains no personal data. Existing flagged files were not changed or copied into new content.

No figures were downloaded. No deployment, publication, merge, message or email occurred. No secrets, backups or `server/data` were accessed.

## Commit and push

Local branch: `wip/highway-code-2026-10-27`.

Local implementation commit: `f31a80f817b7b7c3076dd5cb99e895d5f226f207` — `Add Highway Code whole-bank duplicate checker`. This report is committed separately.

**Commit hashes pushed: none.** Automatic approval review rejected `git push -u origin HEAD`: it classified pushing code to the unverified external `origin` as sensitive egress and said the delegated brief did not clearly establish trust in that destination or authorise that transfer. No workaround or retry was attempted. Explicit approval to push this commit to the configured GitHub origin is required.

`git-loose` was not run because it performs additional fetch/GitHub network requests, outside the brief's figure-download-only network allowance. Read-only `git status --short` was clean after the checker commit, before updating this tracked report. The diagnostic JSON and local dependency/build files are ignored.
