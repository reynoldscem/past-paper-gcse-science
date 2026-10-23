# Driving theory preparation report

Completed on branch `wip/driving-theory-prep-2026-10-23`. Nothing deployed or merged. Hazard perception was excluded following the updated scope.

## What changed

- 245 driving questions in total: retained 151 existing questions and added 94 original questions. 56 questions use 53 official sign, marking and signal images stored locally.
- Image source URLs, OGL v3.0 attribution/licence, retrieval dates and SHA-256 checksums are in `public/driving/manifest.json`. No commercial/DVSA question bank or video clips were copied.
- Visual questions render in practice, quick check, results and saved history, with descriptive alternative text and a missing-image fallback. Explanations show Highway Code rule numbers/ranges or the appropriate unnumbered introduction/annex, with links to the relevant chapter.
- Current-rule coverage includes H1–H3, cyclist passing distances, Welsh default restricted-road speed limits, Scottish pavement/lowered-kerb parking rules, updated bus/cycle and tram signs, and driver-assistance responsibilities.
- A driving preparation panel offers visual practice, the 14 syllabus areas, timed mocks and weak-topic practice.
- Mocks have 50 unique driving questions, a 57-minute countdown, automatic submission, answer editing, flags and a 43/50 pass mark. They guarantee coverage across the topic areas and at least 12 visual questions. Quick Check is disabled for mocks; results retain pass marks in history.
- Weak-topic practice targets the three weakest attempted topics below 86%, including unseen questions from those topics. Unanswered mock questions count against topic accuracy. Science practice retains its existing behaviour.
- Added content/source documentation in `docs/DRIVING_CONTENT.md`, a core test runner and Playwright browser tests with entirely fictional data and a mocked API.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed. Non-fatal warnings remain for an old Browserslist dataset and a JavaScript chunk above 500 kB.
- `npm test`: 7 tests passed. Includes 100 randomly generated mocks, question validity, syllabus coverage, option shuffling, image provenance/checksums, scoring boundaries, weak-topic selection, unanswered questions and science regression coverage.
- `npm run test:browser`: 3 tests passed. Covers mobile visual rendering without horizontal overflow, Quick Check, images/rule references in results and saved reviews, mock flags and answer changes, hidden feedback, expiry while confirmation is open, exactly-once submission, browser-back behaviour, 42/50 fail, 43/50 pass and weak-topic practice.
- Visually inspected a contact sheet of all 53 downloaded images and a mobile quiz screenshot. Images match the authored questions.
- `git diff --check`: passed.
- Package installation reported 21 dependency advisories. Dependency security remediation was not part of this change.

## Commits pushed

- `bc40e1a` — Add visual driving theory practice and timed mock tests.
- `d92310e` — Verify driving mock browser flows and document content provenance.
- This report is checked in as a final documentation commit on the same branch and pushed to origin.

## What remains / limitations

- Hazard perception is intentionally left for a separately scoped branch.
- The real multiple-choice test includes three questions about a silent video. This mock uses still images and text instead and says so before starting. Topic/visual weights are revision choices, not claimed DVSA quotas.
- The question bank covers all 14 areas but is not an exhaustive substitute for the official study books. Official revision, free practice, Code updates and traffic-sign resources are linked in the app.
- In-progress papers remain in memory and are lost on refresh, matching the existing app. Completed attempts use existing API persistence. Browser tests mock that API; no real account data was accessed.
- No deployment was performed.

## Try locally

1. Run `npm ci` and `npm run dev` in this worktree.
2. Open `http://localhost:5173` and use an existing local account.
3. Choose **UK Driving Theory** on the home screen.
4. Choose **Visual practice**, **Start mock**, or expand **Study all 14 syllabus areas**.
5. Finish a paper to enable **Practise weakest topics** when attempted topics score below 86%. Review images and references via results or **Paper History**.

For automated checks: `npm test`, `npm run lint`, `npm run build`. For browser checks, install Chromium if necessary with `npx playwright install chromium`, then run `npm run test:browser`. Browser tests start their own isolated Vite server on port 5179 and do not require an API account.
