Fix first

- **dt-weak-040:** replace the inconsistent waiting/loading scenario before deploying.
- All three requested checks passed. No other deployment-blocking content findings.

## Must-fix items

### dt-weak-040 — inconsistent restriction combination

**Problem:** The question says a single-yellow waiting restriction has ended, while double kerb marks continue to prohibit loading at all times. This teaches a restriction combination that is contrary to DfT signing guidance. The keyed answer correctly describes double kerb marks in isolation, and the explanation agrees with it, but the scenario is unsuitable as an ordinary theory-test example.

*Know your traffic signs* describes loading restrictions as additional to waiting restrictions. To resolve this particular edge case, I also checked the DfT Traffic Signs Manual: chapter 3, paragraph 13.4.12, printed page 147 explicitly says loading prohibitions should not be more onerous than waiting prohibitions; all-day loading prohibitions belong with all-day waiting restrictions. [Know your traffic signs: parking controls](https://www.gov.uk/government/publications/know-your-traffic-signs/on-street-parking-control-signs-and-road-markings); [Traffic Signs Manual, chapter 3](https://assets.publishing.service.gov.uk/media/5c78f895e5274a0ebfec719b/traffic-signs-manual-chapter-03.pdf#page=148).

**Fix:** Replace the scenario, for example: “Double yellow road lines and double yellow kerb marks are present. The nearby shops have closed for the day. Can you unload here?” Keep the negative answer; replace the distractors about the expired waiting restriction and the single road line. Explain that double kerb marks prohibit loading at any time, irrespective of shop opening hours. Rule 247 remains relevant. Do not merely change the answer to permit unloading in the original scenario.

## Minor items

- **dt-weak-006 — distinguish the information sign from the enforceable speed display.** The key (“Limits can change along the road”) and image are correct. The explanation switches to “Variable speed signs change the maximum permitted speed”, although the pictured blue sign announces the variable-limit section and enforcement cameras; it displays no numerical limit. Suggested explanation: “This sign marks the start of a variable-speed-limit section with enforcement cameras. Follow the displayed speed limits; a speed shown within a red circle is mandatory.” [Speed limit signs](https://www.gov.uk/government/publications/know-your-traffic-signs/speed-limit-signs).
- **dt-weak-024 — tighten the tractor distractor.** The cyclist at 8 mph is the intended correct answer under Rule 129. However, “A tractor travelling at 8 mph” leaves its function unspecified: a tractor being used as a road-maintenance vehicle can fall within the same exception. Change it to “An agricultural tractor not doing road maintenance, travelling at 8 mph”, or use an unambiguous ordinary passenger vehicle. This is an edge-case wording improvement, not a wrong keyed answer. [Rule 129](https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule129).

## Review coverage

Reviewed `git diff master...HEAD`, at HEAD `33bcc00`, and all 80 entries in `src/data/drivingWeakTopics.ts` on 26 October 2026. For each entry I checked the key, all three distractors, explanation, rule attribution and any image against live GOV.UK material. Apart from the findings above, no incorrect keys, conflicting explanations, wrong rule numbers or reasonably defensible competing answers were found.

| Question IDs (`dt-weak-`) | Coverage and outcome |
| --- | --- |
| 001–018 | Speed signs, tram signs/signals and tram safety. Correct; wording note for 006. |
| 019–034 | Centre/lane/edge lines, double whites, hatching, junctions and restricted lanes. Correct; distractor note for 024. |
| 035–046 | Waiting, loading, kerb marks, CPZs and red routes. Correct except the scenario in 040. |
| 047–056 | Motorway breakdowns, emergency areas, lane closures and rejoining. Correct. |
| 057–066 | Seat belts, child-restraint age/height thresholds and exemptions. Correct, including the under-three taxi exception and the 12th-birthday threshold. |
| 067–076 | Mobility vehicles, horses, slow vehicles and cyclists. Correct. |
| 077–080 | Red-route stopping, loading-only bays, stop lines and solid cycle lanes. Correct. |

Visually viewed all **34 image references (33 distinct assets)**, including rendering the SVGs, and compared them with `public/driving/manifest.json` captions and official meanings. All match their question and caption. Image-bearing IDs: 001–006, 008–009, 011–013, 019–024, 026, 028–030, 032–034, 036, 041, 045–046, 051, 055, 077–080. The transverse stop-line image in 079 depicts the marking alone; the traffic lights are supplied by the question's scenario.

Additional live sources checked:

- [Highway Code rules 99–101](https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102), [rules 109–141 and speed-limit table](https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158), [rules 163–175](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203).
- [Rules 213–225](https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225), [rules 238–247](https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252), [rules 257–270](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273).
- [Rules 276–278](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287), [rules 300–306](https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307), [mobility vehicle rules 36–46](https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46), [road markings](https://www.gov.uk/guidance/the-highway-code/road-markings).
- *Know your traffic signs*: [tram signs](https://www.gov.uk/government/publications/know-your-traffic-signs/tram-signs-signals-and-road-markings), [road markings](https://www.gov.uk/government/publications/know-your-traffic-signs/road-markings), [bus and cycle markings](https://www.gov.uk/government/publications/know-your-traffic-signs/bus-and-cycle-signs-and-road-markings), [motorway signs](https://www.gov.uk/government/publications/know-your-traffic-signs/motorway-signs-signals-and-road-markings), [driver location signs](https://www.gov.uk/government/publications/know-your-traffic-signs/miscellaneous-signs).

## Verification

- `npm test` — **passed**, exit 0, including question-bank/image-manifest checks, hazard tests and server tests using temporary fixture directories. The logged `PayloadTooLargeError` comes from the passing request-limit test.
- `npm run test:browser` — **passed**, 27/27, exit 0.
- `npm run build` — **passed**, exit 0. Non-blocking warnings: outdated Browserslist data and a 923.51 kB minified JavaScript chunk exceeding Vite's 500 kB warning threshold.

No source changes, commits, pushes, merges or deployments. Only this report was authored; the required commands generated their normal ignored build/test artifacts. No secrets or `server/data` were accessed.
