# Independent driving review

Reviewed 26 October 2026, revision `c525eaf`. Findings only; no fixes applied.

## Ranked summary

- **Must fix before relying on saved progress:** failed loads can erase history (C1); failed submissions lose the completed mock and its draft (C2); overlapping saves overwrite progress (C3); expired sessions leave an apparently logged-in but unsaveable app (C4). Correct the two sign meanings below before learning them.
- **Should fix:** misleading emergency/mini-roundabout wording; the overbroad lowered-kerb question; broken reference links and incorrect citations; giveaway distractors; the progress-size ceiling (C5) and silent replacement of parked mocks (C6).
- **Nice to have:** score expired drafts on return rather than discard them; revoke server sessions on logout. These are secondary to reliable saving.

## Content: wrong answers and scope

Read every question, option and explanation in the five driving question files (307 paper questions), and every meaning in `drivingSigns.json`. Compared against the current [Highway Code](https://www.gov.uk/guidance/the-highway-code) (listed update: 22 October 2025), its relevant chapters/annexes, and [Know your traffic signs](https://www.gov.uk/government/publications/know-your-traffic-signs) (listed correction: 5 December 2023). This is an independent review, not confirmation that the bank covers every examinable fact.

| File / question ID | Existing answer or claim | Correction and official source |
| --- | --- | --- |
| `src/data/drivingVisual.ts:90`, `dt-visual-005` | “No vehicles except permitted exceptions shown on a plate”; explanation only directs attention to exception plates. | **Confirm prior finding:** the sign inherently permits pedal cycles being pushed by hand. The pictured plate merely says “No vehicles”. Teach that exception explicitly; additional plates can qualify restrictions, but are not needed for pushed cycles. [Regulatory signs](https://www.gov.uk/government/publications/know-your-traffic-signs/regulatory-signs). |
| `src/data/drivingSigns.json:453`, `drill-warning-sign-level-crossing-without-barrier-ahead.jpg` | “A level crossing without barriers is ahead”, attached to the red-edged white cross. | **Confirm prior finding:** this is the marker **at** an open crossing, not the triangular advance warning. Use “Level crossing without a gate or barrier”. [Level crossing signs, Open level crossings](https://www.gov.uk/government/publications/know-your-traffic-signs/level-crossing-signs-and-signals#open-level-crossings). |
| `src/data/drivingPrep.ts:566`, `dt-prep-034` | Asks about parking anywhere “the kerb has been lowered”; keys “You must not park there, subject to legal exceptions”. | **Additional overgeneralisation:** specify a kerb lowered **to help pedestrians or cyclists**. That is the Scottish prohibition described by [Rule 243](https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule-243); the existing stem omits its defining purpose. |

No other confidently incorrect keyed choice found. Several best-available choices nevertheless teach incomplete rules, as below.

## Content quality — ranked

1. **Safety explanations need precision.** `drivingTheoryExpanded.ts:151`, `dtx-088`, says to call for help “when safe” after failing to reach the hard shoulder. Explicitly distinguish safe evacuation from being trapped in a live lane: stay belted in, hazards on, call 999 immediately for police when unable to get out safely ([Rule 277](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule-277)). `drivingTheory.ts`, `dt-hazard-005`, also needs that scenario specified: its “inside … seat belt on” distractor is defensible when evacuation is unsafe. **New:** `drivingTheoryExpanded.ts:117`, `dtx-059`, downgrades going around a mini-roundabout to “should … where possible”; [Rule 188](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule-188) says MUST, except large vehicles physically incapable. Also add the stopped lead vehicle to `dtx-109`’s crossing explanation ([Rule 191](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule-191)).
2. **References are broken or point at other rules.** Independently confirmed both bad slugs return 404 and **33 rendered question links** use them. Fix `drivingReferences.ts:118` to `motorways-253-to-273` and `breakdowns-and-incidents-274-to-287`; also fix stored URLs in `drivingTheory.ts:61,72,215,226` and `drivingTheoryExpanded.ts:28–29`. Merely fixing stored URLs is insufficient: `QuestionMedia.tsx:20` regenerates links from rule numbers. Confirmed prior citation corrections: `dt-round2-038` →271, `039` →263, `040` →274; `dtx-083` →263, `dtx-086` →273 ([motorway chapter](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273)). **Additional:** `drivingReferences.ts:81`, `dtx-010` →[23, puffin](https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule-23), not 22; line 67, `dtx-101` →[177, filter arrow](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule-177), not 176; `drivingRound2.ts:1022`, `dt-round2-060` →[105, officer signals](https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule-105), not 109.
3. **Scores are easy to inflate through wording.** Recalculated: the keyed option is longest (including ties) in **185/251 non-image questions**. Examples include `dt-prep-029`’s trailer-colour distractor and `dt-vehicle-002`’s tyre-colour/horn distractors. Replace absurd alternatives with plausible competing rules/numbers and balance answer lengths. The awkward “When must you not … Unless …” structure in `dt-road-rules-008` also confuses an advisory Rule 243 with a statutory prohibition.
4. **Images:** visually inspected eight originals: no-vehicles disc, open-crossing cross, double bend, goods-weight/loading exception, single-yellow/time plate, road narrowing on right, buses/cycles only, and motorway change-lane signal. Apart from the meaning issues above, no mismatched image found in this sample. Printed explanatory plates give away answers; use questions about application or exceptions. Automated checksum/decoding checks cover the image bank, but are not semantic verification of every pixel.

The prior audit's six-point criticism needs qualification: `dtx-118` already puts six points in the stem; the explanation still omits the two-year period and understates revocation. I have not adopted its unsupported numerical conversion from this mock score to real-test readiness, or its claimed official topic quotas.

## Code findings

### C1 — Failed loading can overwrite all previous progress (must fix)

**Locations:** `src/lib/storage.ts:42–57`, `src/store/progressStore.ts:45–47,66–79`; `server/index.js:155–162`.

A transient GET failure/500 returns empty defaults, and hydration marks them loaded. When connectivity recovers, switching learning area or answering a sign POSTs those defaults as the whole account, replacing existing attempts and hazard/sign history. An in-memory check reproduced GET 500 → `loaded: true`, zero attempts.

**Fix:** distinguish a successful empty account from a failed load; show retry and prohibit writes until authoritative hydration succeeds. Never recover from a read error by treating it as empty saved data.

### C2 — Submission declares success and removes the draft before saving (must fix)

**Locations:** `src/views/QuizView.tsx:46–59`, `src/store/progressStore.ts:117–127`, `src/lib/storage.ts:61–71`, `src/store/appStore.ts:132`.

Offline/401/500/413 submission updates memory and shows results; save failure only logs to console. Entering results deletes the mock draft. Reload loses the attempt. Reproduced with a mocked 503: results displayed, draft removed, no successful save.

**Fix:** await an acknowledged save and provide retry; retain a durable pending attempt/draft until acknowledgement. Make retries idempotent by paper/attempt ID, including after auto-submit.

### C3 — Concurrent whole-account saves lose acknowledged work (must fix)

**Locations:** `src/store/progressStore.ts:32–42,66–79,118–127`; `server/index.js:155–162`.

Answer a sign on a slow connection, return Home and change learning area before the answer save finishes. The second request snapshots the old sign counters. Even if requests arrive in their original order, the second overwrites the acknowledged answer. Reproduced: local sign accuracy contained one correct attempt while simulated server state contained none. Two tabs/devices can similarly erase each other's papers or hazard sessions.

**Fix:** serialize mutations and build each snapshot after preceding saves resolve; add server revision checks/merge semantics or per-event endpoints so multiple clients cannot overwrite history. The drill's awaited save is insufficient while other views can save concurrently.

### C4 — Session expiry does not return the app to login (must fix)

**Locations:** `server/index.js:39–40,65–68`; `src/lib/storage.ts:47–51`; `src/App.tsx:43`; `src/store/appStore.ts:72–76`.

Server restart discards the in-memory session map; sessions also expire after seven days. A GET 401 clears browser storage but not Zustand's `userName/sessionToken`, so the app remains logged in with empty progress. Subsequent writes lack a valid token; mock saves fail silently and sign answers cannot advance. Reproduced with mocked 401: stored token absent, store token/user still present, hydration marked loaded.

**Fix:** centralise 401 handling to update auth state and prompt reauthentication, preserving pending work. Apply it to POST as well as GET.

### C5 — History eventually exceeds the API limit and all saves fail (should fix)

**Locations:** `server/index.js:15,24,158`; `src/store/progressStore.ts:110`; `src/lib/scoring.ts:34` (embedded question snapshots).

Every request resends every question in every past attempt. A sampled 50-question mock serialised to about 30 KB; roughly 70 comparable mocks alone reach the 2 MiB parser limit, sooner with other history. Thereafter even a single sign answer receives 413; mock failures remain silent via C2. This is a calculated capacity bound, not a claim about the learner's current history.

**Fix:** append individual attempts/events and paginate history, or persist compact versioned question references. Handle 413 visibly; increasing the limit alone postpones the failure.

### C6 — Starting another mock silently destroys the parked one (should fix)

**Locations:** `src/components/quiz/DrivingPrepPanel.tsx:19`, `src/store/appStore.ts:80–88,137`; `src/views/HomeView.tsx:106–112`.

After leaving a mock, Home offers Resume/Discard but also leaves Start mock enabled. Starting another writes the same per-user localStorage key immediately, losing the old paper, answers and flags without choosing Discard.

**Fix:** require an explicit replace/discard decision or disable starting another mock while a draft exists.

### Verified behaviour and remaining limitations

- Mock generation/scoring correctly uses 50 unique questions, 3,420 seconds and a raw 43-point pass mark. The wall-clock deadline, post-deadline answer guard, confirmation-screen auto-submit and single-submission guard passed tests. Resume preserves question/option order, answers, flags, position and the original deadline.
- **Expiry is deliberately destructive:** `mockDraft.ts:22–29` deletes an expired draft on return; auto-submit only runs with `QuizView` mounted. Closing the page or staying Home beyond the deadline yields no scored attempt. This matches the current docs/UI/tests, so it is a product limitation rather than an undocumented timer bug. Prefer scoring saved answers once on return.
- Sign rounds shuffle options, repeat first-pass misses once and await saves; the ordinary failed-save retry test passes. Weak-topic practice correctly selects up to three attempted topics below 86%, stays within driving questions at its call site, avoids unrelated padding and counts unanswered mock questions as wrong. No additional scoring/selection defect found.
- Server auth checks bearer sessions and enforces account-name ownership; no direct cross-account access bypass found by inspection. Logout only removes client state: an already copied bearer token remains valid until expiry/restart. Add an authenticated revocation endpoint. No live-account security testing was performed.

## Validation and limits

- `npm ci`: succeeded. It reported 42 dependency vulnerabilities; their exploitability was not audited and no dependency changes were made.
- `npm test`: **13 passed** (8 theory, 5 hazard), exit 0.
- `npm run test:browser`: **9 passed**, exit 0, fictional fixtures and mocked API. Includes mobile image rendering, pass/fail boundary, resume/discard, deadline submission, sign repeats and failed-save retry. These tests do not exercise real Express persistence or session expiry.
- Additional in-memory checks reproduced C1–C4; measured answer-length bias and resolved all rendered links to confirm the 33 broken references. C5–C6 are static/data-flow findings. No production API, secrets or `server/data` accessed.
- Only this report was authored. Required install/tests generated their normal dependency/cache/results files and the suite's two configured `.codex-task/*-mobile.png` screenshots. Source, data and documentation files remain unchanged; nothing committed, pushed, published or deployed.
