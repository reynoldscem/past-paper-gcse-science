# Progress-safety report

Implemented C1–C4. Changes are committed locally; nothing was pushed, merged, deployed, published, posted or emailed. No secrets or real server data were read. `src/data/*` and `public/driving/*` were not changed.

## C1 — Failed loads cannot become empty accounts

- `src/lib/storage.ts` now rejects failed HTTP requests, network errors, malformed JSON and invalid top-level responses. Only a successful load supplies defaults for an empty/legacy account.
- `src/store/progressStore.ts` gates every queued mutation on successful hydration and the authenticated identity. Hydration waits for previous writes and ignores obsolete responses.
- `src/App.tsx` displays a load error and Retry instead of the app when hydration fails.
- Browser regressions exercise HTTP 500, network failure and malformed JSON; each tries every mutation and asserts zero POSTs, then verifies a successful empty-account retry permits writes. Server tests verify missing files return null and corrupt files fail closed.
- No C1 work remains.

## C2 — Acknowledged, durable, idempotent submissions

- `src/views/QuizView.tsx` awaits saving before results, blocks repeated deadline submissions, freezes interaction during submission and displays a visible Retry on failure.
- `src/store/progressStore.ts` writes completed attempts to per-account localStorage before sending. The pending record survives reload/login and is removed only after a valid `{ok: true, revision}` acknowledgement. Retries reuse the original attempt and deduplicate by ID; the ID combines paper ID and original start time.
- `src/App.tsx` exposes pending-save recovery after reload/login. `src/store/appStore.ts` no longer clears mock drafts merely on entering results or crossing the deadline. Only the matching acknowledged attempt clears its draft. Ordinary practice preserves a parked mock.
- `src/views/ResultsView.tsx` selects the matching attempt by stable ID, including retries after other history was saved.
- Browser regressions cover quiz and mock 503/413 failures, refresh recovery, a 200 without acknowledgement, a lost network acknowledgement, deadline auto-submit, conflict/reload/retry, and duplicate prevention. Existing draft and deadline regressions also pass.
- Browser storage must be available for durable local recovery. If writing localStorage fails, submission stops with a visible error and instructions to keep the page open; no false success is shown. Pending attempts are local to that browser, not synced to other devices before acknowledgement.

## C3 — Serialized writes and stale-document rejection

- `src/store/progressStore.ts` serializes all mutations and builds each snapshot after earlier saves settle. Hazard-session changes are applied to the latest state, preserving additions from other queued mutations. Rejected operations do not poison the queue.
- `server/index.js` compares document revisions synchronously before writing, then writes a temporary file and renames it over the previous file. Stale snapshots receive 409. The client blocks further writes and offers a progress reload before retrying.
- `src/views/AdminView.tsx` resets through the same queue and revision-checked POST. The previous DELETE-then-save path would bypass serialization and reset revision history, so legacy DELETE now returns 428.
- Browser tests delay a sign save while queuing area/hazard changes, verify revision order and preserved counters, and exercise two tabs submitting from the same revision. The second tab reloads and retries without losing or duplicating either attempt.
- `tests/server/progress.test.mjs` imports an Express app factory with a temporary data directory and injected fictional credentials. It verifies legacy documents, concurrent writers, stale retries, reset revision monotonicity, missing revisions, authentication/ownership, size rejection and corrupt-file preservation. `package.json` includes this harness in `npm test`.
- Compare/write serialization assumes the existing single Express process owns the data directory. Multiple server processes sharing that directory would require a transactional store or cross-process locking.

## C4 — Expired authentication returns to login

- `src/lib/storage.ts` centralizes progress GET/POST response handling. A 401 logs out the matching session through `useAppStore`, clearing both persisted authentication and Zustand state.
- `src/store/progressStore.ts` invalidates hydration on identity/session changes and prevents queued writes from crossing sessions. Pending attempts and saved mock drafts remain in localStorage.
- Browser tests exercise GET and POST 401s, verify the login form and all four auth values are cleared, then log in with mocked credentials and recover the pending attempt. Server tests verify unauthenticated reads/writes return 401.
- No C4 work remains.

## Validation

- `npm ci`: passed; dependency files unchanged. npm reported 42 existing vulnerabilities (3 low, 19 moderate, 18 high, 2 critical); dependency upgrades were outside scope.
- `npm test`: passed — 8 theory tests, 5 hazard/store tests, 1 Express integration test.
- `npm run test:browser`: passed — 22 tests, including 13 new progress-safety regressions, all with fictional data and mocked APIs.
- `npm run build`: passed. Existing Browserslist-age and bundle-size warnings remain.
- `git diff --check`: passed.
- `pii-check`: run; reports 19 lines, covering existing app/package names, legacy authentication storage keys and the existing login placeholder. Three new test lines use those same compatibility keys; fixture identities and credentials are fictional. No allowlist was added and no unrelated names were changed.
- `git-loose` was run for this worktree. It reports no upstream/unpushed work, as expected because this brief explicitly forbids pushing.
- An initial browser run failed during development hot reload and on a retry expectation that overlooked deadline auto-submit after remount. After pausing edits and correcting that expectation, the final full run passed.

## Commits

- `85d9ec8` — Protect progress loads and serialize acknowledged, recoverable saves (implementation and regression tests).
- This report is committed separately as `Document progress-safety validation and deployment contract`.

## Deployment/API notes

Deploy the frontend and server together; refresh old open tabs. No data migration is required: existing documents without `revision` are interpreted as revision zero, and existing progress fields retain their format. The first accepted write adds an integer `revision`; subsequent writes increment it.

GET retains its existing document-or-null response. POST must include the revision loaded by the client and now returns `{ok: true, revision: <new revision>}`. A stale revision returns 409; missing/invalid revisions return 428. Legacy unversioned clients cannot write. The new client refuses to treat old-server `{ok: true}` responses without a revision as acknowledged saves. DELETE returns 428; reset uses a revision-checked empty-document POST so revisions remain monotonic.

The 2 MiB request limit remains unchanged. C5 (history size) and C6 (replacing parked mocks) are explicitly outside scope. Expired, unsubmitted drafts retain the existing return-to-app expiry policy; completed attempts have their separate durable pending record.

## Open questions

None blocking C1–C4. A future multi-process deployment needs a shared transactional concurrency mechanism, and C5/C6 remain separate follow-up work. No deployment was performed.
