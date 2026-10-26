# Round-two report

Implementation and validation are complete, with the content exclusions below. **Push is blocked by automatic approval review. Nothing was deployed, merged or published.**

## Changes

- `public/driving/`: 71 additional unmodified official OGL images; 124 distinct images total. `manifest.json` includes original asset URL, source page, licence, attribution, SHA-256, alt text and Highway Code rule/annex for every image.
- `src/data/drivingSigns.json`, `src/data/signDrill.ts`, `src/views/SignDrillView.tsx`: shuffled 20-sign rounds, four choices, immediate explanation/reference, one repeat of each missed sign at the end, saved per-image accuracy and a ten-item weakest-sign list after a round. Accuracy includes repeats. Each answer requires a successful API save; failed saves can be retried without double counting.
- `src/types/index.ts`, `src/store/progressStore.ts`, `src/lib/storage.ts`: sign accuracy persists through the existing progress API and is retained by other progress actions.
- `src/lib/mockDraft.ts`, `src/store/appStore.ts`, `src/views/HomeView.tsx`, `src/views/QuizView.tsx`, `src/components/ui/TopBar.tsx`: per-learner browser-local mock draft, original fixed deadline, answers, flags and position; resume/discard prompt; invalid/expired draft removal; removal on mock submission. Ordinary practice submission preserves a parked mock. Navigation controls wrap on narrow screens.
- `src/App.tsx`: drill route.
- `src/data/drivingRound2.ts`, `src/data/index.ts`: 60 original questions, taking the paper bank from 245 to 305. Added 8 each for safety margins, vulnerable users, motorways and incidents; 6 each for alertness, loading and signs; 5 each for attitude and other vehicles. All have explanations and rule links. Full before/after counts for the 14 syllabus areas are in `docs/DRIVING_CONTENT.md`.
- `tests/theory.test.mjs`, `tests/browser/theory.spec.mjs`, `playwright.config.mjs`: provenance, image uniqueness, drill, persistence, failure and mobile regressions. Browser viewport defaults to 390 × 844.

## Validation

- `npm ci`: succeeded.
- `npm run lint`: passed.
- `npm run build`: passed.
- `npm test`: 8 theory/content tests and 5 hazard tests passed.
- `npm run test:browser`: all 9 tests passed, using fictional accounts and a mocked API. Covers original flows, deadlines, refresh recovery, flags/answers, expiry/corruption/account isolation, discard, drill keyboard answering/repeats, saved accuracy after reload, API error retry, preservation of a parked mock during practice, and decoding all 124 images.
- Two targeted browser tests passed again after directing screenshots into `.codex-task/`; inspected `sign-drill-mobile.png` and `visual-mobile.png`. No horizontal overflow or broken images found.
- `git diff --check`: passed.
- Existing warnings: npm reported 42 dependency vulnerabilities; Vite reported a large bundle and old Browserslist data. Dependency upgrades were outside this task.
- No real accounts, secrets or running app data volumes were accessed.

## Commits and push status

Local commits on `wip/driving-theory-round2-2026-10-25`:

- `3713187` — official images, provenance and drill catalogue.
- `73cba90` — sign drill and resumable mocks.
- `f257903` — 60 original questions.
- `f27abcb` — mobile regressions and content documentation.
- This report is committed separately.

**Commits pushed: none.** Automatic approval review rejected `git push -u origin HEAD`. Read-only checks verified that the authenticated GitHub account owns the configured repository and has ADMIN permission. Review still rejected the retry because the destination is public and it requires explicit approval of the payload and destination. Approval is needed to push these changes to `github.com/reynoldscem/past-paper-gcse-science`; no workaround was attempted.

## Try locally without real accounts

From this worktree:

```bash
npm ci
npm run test:browser -- --ui
```

Select the keyboard sign-round test or mock-refresh test in Playwright's local UI. They start Vite on `127.0.0.1:5179`, inject a fictional session and mock every API request. For an interactive browser with the inspector, run:

```bash
PWDEBUG=1 npm run test:browser -- --grep 'keyboard sign'
```

Step to the Sign drill screen, then use Tab and Enter/Space to answer. Finish the round to see repeats and weakest signs. The mock test demonstrates answering, flagging, refresh and Resume without resetting the deadline. A graphical display is required for UI/debug modes; the normal browser command runs headlessly.

## Exclusions and limits

- Officer photographs were excluded under the supplied personal-data rule. Police/traffic-officer hand-signal recognition therefore remains a content gap pending suitable official illustrations without identifiable people. Candidate signs with names/logos were also excluded. No unclear-licence asset was included.
- One official school-patrol image was served under two filenames; only one copy is retained. Selected alt text was corrected after visual inspection.
- Mock drafts are local to a browser and learner, not synchronised across devices. An expired draft is discarded on return; an open mock still auto-submits at its deadline.
- Closing a sign drill loses the unfinished round but retains each successfully saved answer. Weakest signs appear on the completed-round screen. Progress uses the existing whole-document API, with its existing last-write behaviour for simultaneous devices.
- No commercial or DVSA question-bank text was copied. Official Highway Code pages were checked for the added material.
