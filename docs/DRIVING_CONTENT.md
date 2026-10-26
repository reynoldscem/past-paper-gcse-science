# Driving theory content and sources

The driving bank contains 343 original paper questions, including 92 visual questions (the round-two notes said 305 questions; the true round-two count was 307, and round three added 36 visual questions). A separate sign drill uses 308 distinct official images: the 89 images used by visual questions plus 219 drill-only signs (124 after round two, 184 added in round three). It covers the 14 car theory topic areas through the app's existing four driving subjects. Science questions and historic question IDs are preserved. These are independently written practice questions, not the DVSA revision question bank or an official DVSA product.

Sources checked on 23 October 2026 and rechecked for the round-two content on 25 October 2026:

- [Online Highway Code](https://www.gov.uk/guidance/the-highway-code) and [published updates](https://www.gov.uk/guidance/the-highway-code/updates). The latest listed update was 22 October 2025. Content includes H1–H3, passing clearances, handheld-device restrictions, Wales's default restricted-road 20 mph limit, Scotland's lowered-kerb/pavement parking rules and the current bus/cycle and tram signs without an “only” plate.
- [Know your traffic signs](https://www.gov.uk/government/publications/know-your-traffic-signs), including [the signing system](https://www.gov.uk/government/publications/know-your-traffic-signs/the-signing-system). The publication page lists its latest correction as 5 December 2023.
- [Know your traffic signs](https://www.gov.uk/government/publications/know-your-traffic-signs) HTML chapters, checked on 26 October 2026 for round three. Each chapter states: “This publication is licensed under the terms of the Open Government Licence v3.0 except where otherwise stated”, © Crown copyright 2023. No chapter body names any third-party material. The sign images are SVG files on assets.publishing.service.gov.uk.
- [DVSA car theory preparation](https://www.safedrivingforlife.info/advice/car-driving/pass-your-learner-tests/car-theory-test-preparation/) describes the 14 topic areas and test structure. [DVSA's published driving syllabus, Unit 3](https://www.gov.uk/guidance/learning-to-drive-a-car-syllabus/unit-3-driving-a-vehicle-in-accordance-with-the-highway-code) explains the relationship to the Code and traffic signs.
- [Official multiple-choice format](https://www.gov.uk/theory-test/multiple-choice-questions) and [pass marks](https://www.gov.uk/theory-test/pass-mark-and-result).

## Image provenance

[The image manifest](../public/driving/manifest.json) records each local path, exact original asset URL, source page, retrieval date, licence, attribution and SHA-256 checksum. Images come from the online Highway Code's traffic signs, road markings, light signals and vehicle markings pages (JPEG/PNG), and from the *Know your traffic signs* chapters (SVG, stored with a `kyts-` filename prefix). They are stored locally with no runtime dependency on a remote image host. The drawings are unmodified; 22 SVGs had their external SVG 1.1 DOCTYPE removed and its internal Illustrator entity values inlined, recorded in each entry's `modifications` field and checksum. Round-three entries also record the page's `officialCaption`. The SVGs were checked to contain no scripts or external references. Explanations for *Know your traffic signs* images link to the relevant chapter and are labelled “Know your traffic signs — chapter”.

Contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). © Crown copyright, Department for Transport. No third-party image exceptions were identified for the selected official illustrations. Images containing identifiable real people or real organisations were not used.

Each visual has a descriptive alternative text which describes its appearance rather than supplies its meaning. Some official illustrations include explanatory plates; these are intentionally preserved, not edited out. A failed image displays its description. Questions, quick-check explanations, result review and saved history all show the images. Explanations provide a rule number/range or annex reference and link to the appropriate Highway Code chapter. The Code introduction and annexes do not all have numbered rules, so these are named rather than assigned invented numbers.

## Practice behaviour

- **Sign drill:** 20 distinct randomly selected signs with shuffled choices, immediate feedback and one end-of-round repeat for each miss. Each answer is saved through the progress API before continuing; errors offer retry. Per-image accuracy includes repeats. The completed-round screen lists the ten weakest attempted signs. Keyboard users can Tab to an answer and press Enter or Space, then continue with Next sign.
- **Visual practice:** 20 shuffled questions from the visual bank; immediate feedback is available.
- **Mock:** 50 unique driving questions, 57-minute countdown, automatic submission, 43/50 pass mark, flags, navigation and editable answers. Feedback is hidden until submission. At least 12 visual questions and coverage of all 14 areas are guaranteed. These are our revision weights, not published DVSA topic quotas.
- **Weak topics:** selects up to three lowest-accuracy attempted topics below 86%, then samples questions from those topics, including unseen questions. It does not pad with unrelated questions. Unanswered mock questions count as wrong for topic statistics. Existing science practice behaviour is retained.
- **Progress:** attempts use the existing persistence/API path, including image metadata and pass marks. Mock pass/fail appears in results and history. Driving mocks save their paper, answers, flags, position and fixed end timestamp in browser local storage, keyed by learner. Returning offers Resume or Discard. Time continues while away; expired drafts are discarded on return and submitted drafts are removed. Ordinary practice submission does not remove a parked mock. Completed attempts use the progress API. Drafts do not sync across devices.

This is a study aid with coverage across all topic areas, not an exhaustive substitute for the Code, *Know your traffic signs* and *Driving – the essential skills*. The real multiple-choice test has three questions based on a silent video; this mock uses still images/text and explicitly explains that difference before starting. The existing separate hazard perception guide and tracker remain available.

## Maintaining the bank

New question IDs must be unique and stable. Add new assets to the manifest and retain the original source and licence. Each drill entry in `src/data/drivingSigns.json` has a `family` (regulatory, warning, direction, motorway, information, markings, bus-cycle-tram, level-crossing, parking, roadworks, signals or vehicle-markings). The drill takes its three distractors from the same family when it has at least four members, so keep meanings in a family distinct from each other. An image used by a visual question must not also be a drill entry, because the drill bank requires unique images. Check the live official pages when updating legal content. `npm test` validates choices, references, topic selection, image checksums, mock coverage and scoring, and weak-topic generation. `npm run test:browser` tests mobile rendering, saved review, mock answer/flag behaviour, wall-clock expiry and pass/fail boundaries using fictional data and a mocked API.

## Round-two coverage

Counts below describe paper questions, excluding the separate sign drill. The existing syllabus mapping has overlapping areas, so these columns do not sum to the bank size.

| Area | Before | After |
| --- | ---: | ---: |
| Alertness | 4 | 10 |
| Attitude | 5 | 10 |
| Safety and your vehicle | 21 | 21 |
| Safety margins | 9 | 17 |
| Hazard awareness | 43 | 43 |
| Vulnerable road users | 23 | 31 |
| Other types of vehicle | 4 | 9 |
| Vehicle handling | 21 | 21 |
| Motorway rules | 9 | 17 |
| Rules of the road | 44 | 44 |
| Road and traffic signs | 79 | 85 |
| Documents | 17 | 17 |
| Incidents, accidents and emergencies | 8 | 16 |
| Vehicle loading | 3 | 9 |

The 60 new scenarios are in `src/data/drivingRound2.ts`; drill-only meanings are in `src/data/drivingSigns.json`. Neither is copied from a commercial or DVSA question bank.

The official source serves the same school-crossing-patrol image under two filenames; only one is retained. Officer photographs and candidate signs with names/logos were excluded under the project data rules. No images with unclear licensing were included. This means police/traffic-officer hand-signal recognition still needs suitable official illustrations without identifiable people. The manifest's annex references name the relevant Highway Code section where a numbered rule is not needed.

Mock storage is local to the browser and learner. A storage failure displays an alert; sign accuracy requires a successful API save. Multi-device simultaneous editing follows the existing whole-progress API's last-write behaviour. Closing a drill ends its current round but retains each successfully saved answer.

## Round-three signs and audit fixes (26 October 2026)

Round three added 184 official images (70 from Highway Code pages and 114 from *Know your traffic signs*). 148 of them are drill-only signs, and 36 back new visual questions (`dt-visual-054` to `dt-visual-089`). Each image was rendered and checked by eye against its meaning.

| Family | Drill-only entries after round three |
| --- | ---: |
| Regulatory | 33 |
| Warning | 60 |
| Direction | 15 |
| Motorway | 15 |
| Information | 10 |
| Road markings | 19 |
| Bus, cycle and tram | 23 |
| Level crossing | 3 |
| Parking and loading | 16 |
| Road works and temporary | 19 |
| Signals | 3 |
| Vehicle markings | 3 |

The visual questions cover the direction-sign colours, green filter arrows and lane-control signals, smart-motorway signals, driver location signs and marker posts, motorway countdown markers, level crossings (another train coming, user-operated and open crossings), Home Zones, school buses, bus stop and red-route markings, mandatory and advisory cycle lanes, HOV lanes, limited waiting, advisory speed plates, deflection arrows, escape lanes and road-works contraflows. Their rule numbers were checked against the live Code on 26 October 2026, after the 2025 renumbering of rules 263–280.

Excluded from round three:

- Highway Code photographs of police officers, school crossing patrols, drivers giving arm signals, and traffic officer and DVSA vehicles (identifiable people or real organisations). Police and traffic-officer hand signals are still a gap: no OGL illustration without an identifiable person was found.
- Signs that show a real organisation's logo or name: the congestion-charging sign (Transport for London logo), the end-of-road-works sign with the National Highways logo and the English Heritage sign.
- Photographs and scene illustrations (a bridge strike, an emergency area and an automatic half-barrier crossing), illustrations too small to read at quiz size, and near-duplicates of signs already in the bank. Duplicates included *Know your traffic signs* redrawings of Highway Code images.
- Dangerous-goods hazard diamonds, other low-value plates, and signs that only make sense alongside another sign (time plates, distance plates).

Fictional placeholder names in official examples (for example Beesworth, Puddleworth and Ashkee Council) are part of the unmodified images. Signs with the council placeholders were not selected.

Audit fixes in the same branch, from `docs/driving-question-audit-2026-10-26.md`:

- `dt-visual-005` now reads “No vehicles except bicycles being pushed”, the official caption.
- The red-edged white cross (official filename `warning-sign-level-crossing-without-barrier-ahead.jpg`) now marks the crossing itself. The official caption is “Level crossing without barrier”, so it no longer duplicates the locomotive triangle (`dt-visual-025`). The manifest notes the misleading filename.
- The motorway and breakdown chapter links now use `motorways-253-to-273` and `breakdowns-and-incidents-274-to-287`; the old slugs return 404. A unit test guards against the old slugs.
- Rule citations were updated for the 2025 renumbering: `dt-round2-038` → 271, `dt-round2-039` → 263, `dt-round2-040` → 274, `dtx-083` → 263, `dtx-086` → 273.

The audit also notes that signs are already over-weighted in mocks. Round three adds image questions but routes some into the motorway, parking, vulnerable-road-user, incident and other-vehicle topics. The mock image cap and topic re-weighting it suggests are not part of this round.


## Round-three review fixes (26 Oct)

An independent pre-deploy review (`docs/signs-round3-review-2026-10-26.md`) led to these fixes: the weak-bridge sign now includes the empty-vehicle exemption; the cattle-crossing sign says to slow down and be prepared to stop; the green-arrow signal says to check oncoming traffic has stopped; `dt-visual-077` treats the yellow "Max speed 30" panel as advisory; drill entries can list `overlaps` so two signs whose meanings could both be true are never offered as each other's wrong answer; Highway Code rule anchors use GOV.UK's `#rule263` form; the external DTDs were removed from 22 SVGs.
