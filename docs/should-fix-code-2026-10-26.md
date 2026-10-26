# Code should-fix report — 26 October 2026

Completed all six items. No content/data files were changed. No production data, secrets or credentials were read. Nothing was deployed, published, posted, emailed, pushed or merged. Each item has its own local commit; this report is intentionally uncommitted at `.codex-task/REPORT.md`, with an identical committed copy at `docs/should-fix-code-2026-10-26.md`.

## 1. C5 — Compact history and bounded ordinary save requests

Files: `src/lib/progressCodec.ts`, `src/lib/storage.ts`, `src/store/progressStore.ts`, `server/index.js`, `src/components/quiz/QuestionMedia.tsx`; tests in `tests/history.test.mjs`, `tests/browser/history-storage.spec.mjs`, `tests/browser/progress-safety.spec.mjs`, `tests/server/progress.test.mjs`, wired through `scripts/test.mjs`.

- Current-bank questions are stored as compact references containing question ID, shuffled option order, historical correct index and subject code. Learner answers and attempt scores remain intact. Normal attempt records no longer embed question text, options, explanations, images or URLs.
- Legacy documents load directly without a migration script. Their first successful save writes the compact format. Changed or removed legacy questions retain their content in a deduplicated document-level snapshot table, shared across attempts and option shuffles. Missing references without snapshots render “Question no longer in the bank”, with saved answer positions and scores retained. Missing driving questions retain their original subject classification. Unavailable questions do not show an empty Read more link.
- After migration, ordinary saves upload only new attempts and new snapshot entries. The server validates the existing revision and history base counts, rejects duplicate IDs, merges the append and atomically replaces the disk document. The serialized client queue, durable pending attempts, conflict handling and acknowledgement checks remain intact. Resets still use a revision-checked full empty document.
- The 2 MiB request limit remains. Accumulated server history may exceed it because historical attempts are no longer resent. A 413 produces an explicit visible alert, and failed submissions remain pending for retry.

Tests: 300 independently shuffled 50-question attempts occupy **839,593 UTF-8 bytes** in the final test run (size varies slightly with random selection), below the asserted 1 MiB ceiling. JSON round-trip preserves answers, order and scores. Legacy changed/removed snapshots round-trip; missing references preserve their subject and render a placeholder. Browser coverage loads and renders a legacy document, saves it, reloads the migrated document, verifies a later save contains no old attempts/snapshots, and renders a missing-reference placeholder. Server coverage seeds over 2 MiB of fictional stored history and successfully appends with a request below 1 KiB; stale revisions, duplicate IDs and reset semantics are checked. Existing 413/retry, lost-acknowledgement and competing-tab regressions pass with compact storage.

Limits: the first legacy migration remains a full compact upload; exceptionally large externally created legacy documents can still hit 413. Existing server-created legacy documents were already constrained by the old 2 MiB stored-document limit. History reads, in-memory reconstruction and disk writes still process the entire accumulated document; this change bounds ordinary history upload size, not total disk storage or memory. References resolve text from the current bank; retained legacy snapshots supply historical text when it differs. No required C5 work remains.

## 2. C6 — Parked mock protection

Files: `src/store/appStore.ts`, `src/App.tsx`, `tests/browser/navigation.spec.mjs`.

Starting any new driving mock while a valid parked draft exists opens an explicit Resume / Discard and start new / Cancel dialog. The central start action protects every entry point. Until a choice is made, the draft stays unchanged; resume preserves paper, options, answers, flags, position and original deadline. The browser test verifies both resume and replacement. No work remains.

## 3. Submitted science skips

Files: `src/lib/questionStats.ts`, `tests/science.test.mjs`.

Every question in a submitted paper contributes an attempt, including null answers. Skips count as wrong in question and topic accuracy, qualify for weak practice and count as seen for unseen selection. The regression submits one correct answer and nineteen skips: accuracy is 5%, nineteen questions are weak, all twenty are seen, and weak-topic practice includes the skipped material. No work remains.

## 4. Development API port

Files: `src/lib/storage.ts`, `vite.config.ts`.

Login, progress and export use same-origin `/api` requests. Vite proxies those to Express on `PORT`, defaulting to 3000; production remains same-origin. TypeScript/build pass. A temporary fictional HTTP server and Vite instance verified that `/api/probe` reaches the configured API port. No real API or account was used. No work remains.

## 5. Browser history prerequisites

Files: `src/lib/history.ts`, `tests/browser/navigation.spec.mjs`.

Back/Forward validate quiz state and saved result/review prerequisites. Missing quiz state routes to Home; missing result/review state routes to History. Invalid browser entries are replaced so Forward cannot restore an empty screen. Browser tests clear quiz state and exercise both Back and Forward for quiz/results entries. No work remains.

## 6. Padded unseen labels

Files: `src/lib/paperGenerator.ts`, `src/views/QuizView.tsx`, `tests/science.test.mjs`.

Padded unseen paper titles display “N unseen + M review”; quiz titles wrap so the count is visible on mobile. Tests cover padded papers, a smaller available pool, all-seen and all-unseen selections. No work remains.

## Saved format and compatibility

New disk/export documents add `historyVersion: 1` and `questionSnapshots`. Each attempt's `questions` contains tuples `[questionId, optionOrder, historicalCorrectIndex, snapshotIndexOrNull, subjectCode]`. Subject codes follow biology, chemistry, physics, roadRules, roadSigns, hazardAwareness, vehicleSafety (0–6). Answer indices refer to the retained shuffled order. The runtime still presents full Question objects to existing review/history/scoring UI.

Legacy full-snapshot documents remain readable; saving migrates them without an external script. Revisionless legacy documents retain the existing revision-zero interpretation. Incremental POSTs add `historyBaseCount` and `snapshotBaseCount`, with only newly appended entries; the server strips those transport fields before persisting. Full revision-checked POSTs remain supported for migration and reset. GET/export return the accumulated document. Revisions and `{ok: true, revision}` acknowledgement semantics are unchanged.

Frontend and server must be released together and old open tabs refreshed: an older server does not understand incremental append fields, and an older frontend cannot interpret compact question tuples. No deployment was performed. The existing single-Express-process atomic-write assumption remains.

## Validation

- `npm ci`: passed; dependency files unchanged. npm reported 42 existing vulnerabilities (3 low, 19 moderate, 18 high, 2 critical). Dependency upgrades are outside this task.
- `npm test`: passed — 24 core tests, 5 hazard tests and 2 Express integration tests, **31 total**.
- `npm run test:browser`: passed — **27/27**, final run 24.6 seconds.
- `npm run build`: passed. Existing Browserslist age and bundle-size warnings remain.
- Development proxy smoke test: passed using a temporary fictional server.
- `git diff --check`: passed.
- `pii-check`: run and inspected. It flags 23 lines containing existing app/package names, legacy authentication storage-key names and the existing login placeholder. New tests use those same compatibility keys with fictional identities and credentials. No real-user fixture data or allowlist was introduced.
- During development, two codec assertions initially compared JSON output against objects containing optional `undefined` properties. The assertions were corrected to compare JSON-normalized originals; the final suites above pass.
- `git-loose`: run before completion; local commits deliberately remain unpushed under this brief's explicit rule.

## Commits

- `7d42026` — Count submitted science skips in weak practice and accuracy.
- `91137f4` — Require a resume or discard choice before replacing a mock.
- `1bb4752` — Label unseen papers padded with review questions.
- `9bc1d7c` — Proxy development API requests to the Express port.
- `a785ae7` — Guard browser history routes when quiz state is missing.
- `6883c36` — Compact saved history and append new attempts with revision checks.
- Report copy committed separately as `Document code should-fix changes and validation`.

No blockers or unfinished requested items.
