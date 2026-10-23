# Hazard perception handover

Implemented the study guide and practice tracker. No question bank or mock-test changes; no deployment or merge.

## Changes

- Driving Theory home has one Hazard Perception entry.
- Guide covers format, 15 hazards across 14 clips, scoring windows, 44/75 threshold, developing hazards, clicking technique, and ten hazard categories with linked Highway Code rule numbers.
- Official links checked on 23 October 2026: https://www.gov.uk/theory-test/hazard-perception-test, https://www.gov.uk/theory-test/pass-mark-and-result, https://www.gov.uk/take-practice-theory-test and the linked https://www.safedrivingforlife.info/free-practice-tests/hazard-perception-test/ page. GOV.UK advertises three free clips hosted externally; the guide explicitly does not say GOV.UK hosts clips. Embedded clip playback was not tested.
- Tracker records local calendar date, source, integer score out of 5/10/75 and missed-hazard notes; supports deletion with confirmation. Source dropdown includes DVSA/TSO, Safe Driving for Life, RAC, iTheory, Hazard Perception Test Kit UK, Revision Clips and toptests.co.uk, plus editable free text. No unverified price/licence claims or links for third-party presets.
- Full-test trend shows pass-mark reference and score change. Readiness requires each of the latest three dated full tests to reach 44, explicitly labelled a practice indicator. Clip scores are never extrapolated.
- Reuses existing authentication, JSON progress API and styling. Existing actions preserve hazard records; clearing all progress clears them. Failed tracker writes show a retry message without claiming success or discarding form entries.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed. Existing toolchain warnings: stale Browserslist data and bundle above 500 kB.
- `npm test`: passed both test files (five test cases): score/date validation, readiness boundaries, clip exclusion, chronological ordering; real bundled store with mocked authenticated transport checks legacy hydration, persistence, existing actions, failed saves, account-data replacement and reset.
- `git diff --check`: passed.
- Dependency installation required an approved sandbox escalation for esbuild's binary check. npm reported 21 dependency vulnerabilities; dependency upgrades are outside this task.
- No browser end-to-end or real-account tests performed; no account files or secrets read.

## Commits

- `6b51d0f` — Add hazard perception study guide and practice tracker; pushed to origin on this task branch.
- This report is checked in with the following documentation commit on the same branch.

## Try locally

Use Node 22.6+ for the test runner. Run `npm ci`, then `PORT=3001 npm run dev` (the frontend expects port 3001; the server otherwise defaults to 3000). Open http://localhost:5173 and sign in with a local test account. Choose Driving Theory → Hazard Perception. Read the guide, follow official practice links, then log clip or full-test results. Log three full tests at 44/75 to see the readiness indicator, reload to check persistence, and delete a session to correct an entry.

## Left / limitations

The optional simulator was not implemented. No footage was copied or re-hosted. Browser interaction and official embedded playback remain manual checks. Storage retains the existing whole-document, last-write-wins API, so simultaneous edits across tabs/devices can overwrite one another. Deployment and integration with the separate theory branch remain outside scope.

## Browser practice follow-up

Added verified links to https://toptests.co.uk/practice-hazard-perception-test/ and https://www.drivingtheory4all.co.uk/free-hazard-perception-test, prioritised PC/browser practice in the guide, and added Driving Theory 4 All alongside the existing TopTests source preset. Both pages loaded in the web tool and advertise free practice; embedded playback remains untested. TopTests is labelled third-party practice with its own interaction rules. The optional paid Theory Test Complete listing was omitted: a retailer lists £8.99 and 26 official sample clips, but its requirements specify Windows XP–8/DVD-ROM and current compatibility was not verified.

Validation after this content update: lint, build, tests and diff whitespace check passed. No additional tests needed for links and a dropdown option. Changes committed and pushed in the browser-practice follow-up commit.
