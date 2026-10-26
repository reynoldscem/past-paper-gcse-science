# Weak-topic expansion report — 26 October 2026

Completed: 80 original questions in `src/data/drivingWeakTopics.ts`, with stable IDs `dt-weak-001`–`dt-weak-080`. Registered in `src/data/index.ts` alongside the existing coverage bank. No deployment, publishing, push or merge was performed.

## Content counts

| Topic family | Questions | Image-based |
| --- | ---: | ---: |
| Speed signs | 10 | 8 |
| Trams | 8 | 3 |
| Road markings | 18 | 15 |
| Kerbs and yellow lines | 14 | 6 |
| Motorway breakdown and signals | 10 | 2 |
| Seat belts and child restraints | 10 | 0 |
| Slow and vulnerable vehicles | 10 | 0 |
| **Total** | **80** | **34** |

The full driving paper bank now contains **455 questions, including 126 image-based questions**. The separate 308-entry sign drill is unchanged. All 34 new visual questions reuse existing official OGL images and their manifest provenance; no assets were downloaded into the repository or added to the manifest.

Coverage includes minimum/maximum/advisory speeds, cancellation and variable limits; tram diamonds, signals and reserved paths; centre, hazard, lane and edge lines, double white lines, hatching, stop/give-way lines, boxes, zig-zags, bus/cycle lanes and red routes; yellow-line/kerb-mark combinations and time plates; motorway emergency procedures; child-restraint thresholds, responsibility and exemptions; mobility scooters, horses, tractors and cyclists.

The existing subjects and eight topics are used: sign-shapes, traffic-lights, road-markings, motorways, incidents, seat-belts, other-vehicles and vulnerable-road-users. Selection tests establish that every addition is available through its existing weak topic and that the new pool can supply mock questions. Existing full-bank tests retain all 14 mock syllabus areas and the visual minimum.

## Accuracy and sources

Checked the live GOV.UK pages on 26 October 2026. Each question has a numbered rule, an explanation starting with that rule and a direct official rule link. Stems were compared with the existing driving banks; an automated check rejects exact normalised duplicates. Scenarios and distractors are original, not copied from the DVSA bank.

The brief refers to the motorway triangle prohibition as Rule 274. The **live Code puts it in Rule 276**, supplemented by Rule 277. Rule 274 now concerns leaving a motorway. The new questions cite the live numbering.

Official source groups:

- [General driving rules](https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158): Rules 109, 124–125, 127–131, 140–141, and the carriageway distinction accompanying Rule 136.
- [Using the road](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203): Rules 163, 169, 171–172, 174–175.
- [Waiting and parking](https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252): Rules 238, 240, 243, 245, 247.
- [Motorways](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273): Rules 257–258, 269–270.
- [Breakdowns and incidents](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287): Rules 276–278.
- [Drivers and restraints](https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102): Rules 99–101, including the seat-belt responsibility table and rear-seat exceptions.
- [Powered mobility vehicles](https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46): Rules 36, 38, 46.
- [Road users requiring extra care](https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225): Rules 213, 215, 220, 225.
- [Tramways](https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307): Rules 300, 302–303, 306.
- Official [traffic signs](https://www.gov.uk/guidance/the-highway-code/traffic-signs), [road markings](https://www.gov.uk/guidance/the-highway-code/road-markings) and [light signals](https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic) clarify the diagrams and timed restrictions.
- Supporting *Know your traffic signs* chapters: [speed limits](https://www.gov.uk/government/publications/know-your-traffic-signs/speed-limit-signs), [tram signs](https://www.gov.uk/government/publications/know-your-traffic-signs/tram-signs-signals-and-road-markings), [motorway signs](https://www.gov.uk/government/publications/know-your-traffic-signs/motorway-signs-signals-and-road-markings), [bus and cycle markings](https://www.gov.uk/government/publications/know-your-traffic-signs/bus-and-cycle-signs-and-road-markings), and [miscellaneous signs](https://www.gov.uk/government/publications/know-your-traffic-signs/miscellaneous-signs). Exact asset sources remain in `public/driving/manifest.json`.

## Answer clues

Unicode character counts include spaces, punctuation and ties:

- New questions: **24/80 longest-correct (30.00%)**; **15/80 shortest-correct (18.75%)**.
- New text questions alone: 18/46 longest-correct (39.13%).
- Combined driving text bank: **90/329 longest-correct (27.36%)**, below the existing 40% guard.
- Correct positions are evenly distributed: 20 in each position; practice also shuffles options.

Options were reviewed for plausible same-family misconceptions and a single defensible key. The new test enforces the 30% overall longest-correct target and guards against consistently shortest correct answers. It also verifies unique options, valid integer keys, rule citations, stable IDs, distinct stems and registration.

## Validation

Final runs all passed:

- `npm test`: 28 content/theory/history tests, 5 hazard tests and 2 server tests; **35 passed**.
- `npm run test:browser`: **27 passed**, including mobile image decoding, weak-topic navigation, mock coverage and persistence flows using fictional accounts and mocked APIs.
- `npm run build`: passed TypeScript compilation and Vite production build. Vite retains its non-fatal bundle-size warning.
- `git diff --check` and staged whitespace checks: passed.
- Dependencies were installed with `npm ci` because this worktree initially had no `node_modules`; the initial pre-install test invocation could not resolve esbuild. Final validation above used the installed lockfile dependencies.
- `pii-check .` reported 23 existing lines in unrelated content or unchanged imports; none were introduced or altered by this task. The new question file was included in the scan after staging. No flagged personal details were copied into this report or new content.

No secrets, live account data or `server/data` were read. No paid APIs were used.

## Commits and report handling

- `0c8ff4d` — `Add 80 driving theory weak-topic questions and coverage checks` (questions, integration, tests and content counts).
- This report is saved in the subsequent local documentation commit titled `Document weak-topic content and validation results`, as `docs/weak-topics-2026-10-26.md`.

`.codex-task/REPORT.md` contains the same report but is deliberately **not staged or committed**. Its tracked Git version is preserved; its working copy is the requested output. Local commits remain unpushed, as explicitly required by the brief.
