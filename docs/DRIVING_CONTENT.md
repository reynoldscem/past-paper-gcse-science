# Driving theory content and sources

The driving bank contains 305 original paper questions, including the existing 56 visual questions. A separate sign drill uses 124 distinct unmodified official images (53 existing and 71 added). It covers the 14 car theory topic areas through the app's existing four driving subjects. Science questions and historic question IDs are preserved. These are independently written practice questions, not the DVSA revision question bank or an official DVSA product.

Sources checked on 23 October 2026 and rechecked for the round-two content on 25 October 2026:

- [Online Highway Code](https://www.gov.uk/guidance/the-highway-code) and [published updates](https://www.gov.uk/guidance/the-highway-code/updates). The latest listed update was 22 October 2025. Content includes H1–H3, passing clearances, handheld-device restrictions, Wales's default restricted-road 20 mph limit, Scotland's lowered-kerb/pavement parking rules and the current bus/cycle and tram signs without an “only” plate.
- [Know your traffic signs](https://www.gov.uk/government/publications/know-your-traffic-signs), including [the signing system](https://www.gov.uk/government/publications/know-your-traffic-signs/the-signing-system). The publication page lists its latest correction as 5 December 2023.
- [DVSA car theory preparation](https://www.safedrivingforlife.info/advice/car-driving/pass-your-learner-tests/car-theory-test-preparation/) describes the 14 topic areas and test structure. [DVSA's published driving syllabus, Unit 3](https://www.gov.uk/guidance/learning-to-drive-a-car-syllabus/unit-3-driving-a-vehicle-in-accordance-with-the-highway-code) explains the relationship to the Code and traffic signs.
- [Official multiple-choice format](https://www.gov.uk/theory-test/multiple-choice-questions) and [pass marks](https://www.gov.uk/theory-test/pass-mark-and-result).

## Image provenance

[The image manifest](../public/driving/manifest.json) records each local path, exact original asset URL, source page, retrieval date, licence, attribution and SHA-256 checksum. Images come from the online Highway Code's traffic signs, road markings and light signals pages. They are stored locally, unmodified, with no runtime dependency on a remote image host.

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

New question IDs must be unique and stable. Add new assets to the manifest and retain the original source and licence. Check the live official pages when updating legal content. `npm test` validates choices, references, topic selection, image checksums, mock coverage and scoring, and weak-topic generation. `npm run test:browser` tests mobile rendering, saved review, mock answer/flag behaviour, wall-clock expiry and pass/fail boundaries using fictional data and a mocked API.

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
