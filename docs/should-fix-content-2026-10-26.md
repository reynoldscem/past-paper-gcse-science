# Content should-fix revision — 26 October 2026

Completed all seven brief items. All existing question IDs remain; 32 original driving questions were added. Nothing was pushed, merged, deployed or published. The implementation is committed locally; this report is copied to `docs/should-fix-content-2026-10-26.md` for commit. `.codex-task/REPORT.md` is deliberately left out of commits, preserving its tracked Git version.

## 1. Driving wording and safety

23 specifically flagged records were corrected. The following table gives the final rule/annex reference; the source chapters were retrieved live from GOV.UK (HTTP 200). Options were subsequently balanced without changing the correct fact.

| ID | Verified reference |
|---|---|
| `dtx-002` | H2 |
| `dtx-009` | H2, 195 |
| `dtx-016` | 39 |
| `dtx-034` | 92 |
| `dtx-036` | 95 |
| `dtx-044` | 113–115 |
| `dtx-059` | 188 |
| `dtx-076` | 249 |
| `dtx-077` | 243 |
| `dtx-081` | 253 |
| `dtx-088` | 277 |
| `dtx-089` | 277 |
| `dtx-105` | 109 |
| `dtx-109` | 191 |
| `dtx-114` | 98 |
| `dtx-115` | Annex 3 |
| `dtx-118` | Annex 8 |
| `dtx-120` | Annex 6 |
| `dt-road-rules-008` | 243 |
| `dt-hazard-005` | 277 |
| `dt-prep-034` | 243 |
| `dt-round2-036` | 268 |
| `dt-visual-001` | 124 |

Corrections distinguish safe evacuation from being trapped in a live lane (belt, hazards, immediate 999 police call); make the mini-roundabout instruction a MUST; include the stopped lead vehicle at crossings; qualify Scotland’s lowered kerbs by pedestrian/cyclist purpose; and distinguish advisory junction parking from statutory restrictions. They also cover school entrances, dull-weather dipped headlights, zebra priority, motorway direction colours, and load projection markers. Explanations now state 4/8 mph mobility limits, 20 m eyesight, alcohol limits, seven-day document production, six points/two years, 1.6 mm tread, compulsory parking lights above 30 mph, motorway exclusions, national/towing speed limits and passing the queue to your right.

## 2. Citations

Corrected three remaining citations: `dtx-010` → Rule 23 (puffin crossings), `dtx-101` → Rule 177 (filter arrows), `dt-round2-060` → Rule 105 (authorised signals). All were checked live.

The historical motorway fixes were already present and were reverified: `dt-round2-038` → 271, `dt-round2-039` → 263, `dt-round2-040` → 274, `dtx-083` → 263, `dtx-086` → 273. The valid chapter slugs and non-hyphenated rule anchors were retained. Rewritten scenarios also have precise citations, including Rule 231 for detecting ice, Rule 293 for amber at a level crossing, and Rules 97–98 for visibility/loading.

## 3. Sign minors

Corrected one manifest entry: `kyts-rising-bollards.svg` now describes the advance-warning triangle and Rising bollards plate rather than the separate red/green control signals. The underlying drawing and checksum are unchanged.

No further drill-data edit was necessary: reciprocal `overlaps` already exclude `drill-kyts-different-traffic-road-markings.svg` and `drill-other-road-markings-indication-lanes.jpg`. The generated wrong options now concern an edge line, a hatched area and a bus lane, all incompatible with the compulsory movement markings. Existing motorway-speed and no-footway overlap exclusions, and the green-arrow check for stopped opposing traffic, were verified and retained. Existing overlap tests passed.

## 4. Giveaway patterns

Method: text questions only (`!image`); Unicode character count including spaces and punctuation; ties count as longest. Full banks retain Higher/separate science records for history. The practice-pool check independently excludes those records. The supplied driving baseline was reproduced; the science baseline was measured from this branch, which already contains the earlier must-fix expansion.

| Text bank | Before longest-correct | After longest-correct | After shortest-correct |
|---|---:|---:|---:|
| Driving | 185/251 (73.71%) | 72/283 (25.44%) | 65/283 (22.97%) |
| Biology | 55/116 (47.41%) | 27/116 (23.28%) | 40/116 (34.48%) |
| Chemistry | 70/129 (54.26%) | 37/129 (28.68%) | 45/129 (34.88%) |
| Physics | 66/130 (50.77%) | 29/130 (22.31%) | 45/130 (34.62%) |

Default practice text-bank longest proportions: driving 72/283 (25.44%); biology 26/113 (23.01%); chemistry 34/118 (28.81%); physics 25/116 (21.55%).

Distractors now use nearby numbers, related road rules and specific scientific misconceptions. Correct wording was tightened where it retained the full fact; some conditions moved into stems. Short distractors were deliberately retained too, avoiding a replacement “pick the shortest” clue.

Case-insensitive whole-word always/never/only incidence in text options: driving correct 6/251 → 3/283 (1.06%); wrong 201/753 → 9/849 (1.06%). Science ends at zero in both correct and wrong options; before counts were biology 0 correct/3 wrong, chemistry 1/6, physics 0/5. Ten visual driving option sets also had obvious distractors improved.

The new unit test in `tests/science.test.mjs`, run by `npm test`, fails above 40% for each bank, including ties, for both full and practice pools. Its initial red run failed with the expected 185/251 driving result; the final suite passes.

Across the completed revision, options changed in 398 existing records (256 driving, 44 biology, 42 chemistry, 56 physics). Counts overlap the safety and duplicate changes; they are not additive. Exact IDs, grouped by prefix (inclusive numeric ranges):

- **Driving:** `dt-hazard-` 001–006; `dt-prep-` 001–010, 013–030, 032–034, 038–041; `dt-road-rules-` 001–008; `dt-road-signs-` 001–006; `dt-round2-` 001–060; `dt-theory-source-` 001; `dt-vehicle-` 001–006; `dt-visual-` 001, 003, 011, 027–028, 038–040, 050–051; `dtx-` 001–045, 047–049, 051–126.
- **Biology:** `bio-bioenergetics-` 006, 008–009; `bio-cell-biology-` 003, 007, 011–013, 016; `bio-ecology-` 001–003, 005–008, 010; `bio-homeostasis-` 001, 004–005, 007, 010–014; `bio-infection-` 001, 003–004, 008, 010–012, 017; `bio-inheritance-` 002, 004, 008, 016; `bio-organisation-` 006, 010–013, 018.
- **Chemistry:** `chem-analysis-` 001, 004, 009–011; `chem-atmosphere-` 004–007, 011–012, 016; `chem-atomic-structure-` 002–003, 008–009; `chem-bonding-` 002–005, 007, 011; `chem-chemical-changes-` 002, 012; `chem-energy-changes-` 003–004, 010; `chem-organic-` 005, 009–011; `chem-quantitative-` 002, 008, 010; `chem-rates-` 002–005, 008–011.
- **Physics:** `phys-atomic-structure-phys-` 001, 006, 008, 010–013; `phys-electricity-` 005, 007, 011, 013–014, 016–017; `phys-electromagnetism-` 001–007, 009–010, 012; `phys-energy-phys-` 003, 007–008, 010–011, 013–014, 018, 022, 024–025, 027; `phys-forces-` 003, 005, 008, 011, 018, 020, 022; `phys-particle-model-` 003, 005–009, 011, 013–014; `phys-waves-` 010, 012–013, 015.

## 5. Near-duplicates

Revised 28 driving records across the audit’s grouped topics. IDs: `dt-prep-` 004, 006, 008, 013–014, 017–020, 024, 028–030; `dt-road-signs-` 003; `dt-round2-` 009, 015, 047–048; `dtx-` 024, 067, 080, 083, 096, 099–100, 103, 107, 110.

Distinct tests now cover an amber stopping exception rather than basic light recognition; secondary stop-line position; amber after crossing the level-crossing line; wrong slip-road reversal; a cradled phone; stationary horn use; wet-gap calculation; recognising ice; drying wet brakes; aquaplaning cause; large-vehicle turning time; tram passengers; an ambulance near a bend; cycle clearance above 30 mph; cyclist positioning at junctions; the far-hand door technique; spare-key storage; loading visibility; secondary trailer coupling; projecting loads; right-turn box exceptions; numerical speed signs; reacting to hazard warnings; crash warning lights; dangerous-goods plate information; and non-prescription medicines.

Revised 17 science records for repeated stems and nearby recall questions. IDs: `bio-bioenergetics-` 009; `bio-cell-biology-` 011; `bio-homeostasis-` 010; `bio-organisation-` 011; `chem-analysis-` 009–010; `chem-atomic-structure-` 009; `chem-bonding-` 011; `chem-energy-changes-` 010; `chem-organic-` 009; `chem-quantitative-` 008; `phys-atomic-structure-phys-` 001, 010, 012–013; `phys-particle-model-` 013; `phys-waves-` 010.

The review’s nine repeated-stem groups were checked against the current branch. Activation-energy wording was already differentiated by the previous must-fix work and was developed further; case-normalisation also caught the artery pair. Final trim/case-normalised science stems have zero exact duplicates. Definitions were differentiated from evidence, calculations, investigation methods and applications.

## 6. Science weighting

- `phys-energy-phys-013`: repeated energy-efficiency calculation → rearranging work done W = Fs; topic now Forces.
- `phys-energy-phys-022`: repeated efficiency percentage → how spring energy changes when extension doubles; topic now Forces.
- `phys-energy-phys-003`: non-renewable recall → nuclear/gas fuel and waste comparison.
- `phys-energy-phys-011`: renewable recall → tidal/wind predictability comparison.

Energy decreases from 29 to 27 physics records; Forces increases from 25 to 27. IDs remain unchanged, topic labels and learning links match, and the existing 13 protected equation-answer strings and 28 scope tags remain intact. This broadens coverage without claiming every topic has equal exam weighting.

## 7. New driving coverage

32 new original records, all unique, in `src/data/drivingCoverage.ts` and included by `src/data/index.ts`. The driving paper bank is now 375 questions (283 text, 92 image-bearing); science remains 380 records; total 755. No existing ID was removed. New coverage longest-correct is 6/32 (18.75%); shortest-correct is 9/32 (28.13%).

| Topic | New IDs, inclusive | Count | Live references |
|---|---|---:|---|
| Alcohol limits | `dt-coverage-alcohol-001`–`004` | 4 | Rule 95 |
| First aid: DR ABC, CPR, burns, bleeding | `dt-coverage-first-aid-001`–`005` | 5 | Annex 7 |
| Pelican and parallel crossings | `dt-coverage-crossings-001`–`004` | 4 | Rules 195–197 |
| Hard shoulder as running lane | `dt-coverage-hard-shoulder-001`–`004` | 4 | Rules 258, 269 |
| First MOT, SORN and tax | `dt-coverage-documents-001`–`004` | 4 | Annex 3 |
| Child restraints | `dt-coverage-child-seats-001`–`004` | 4 | Rules 99–102 |
| Skids | `dt-coverage-skids-001`–`004` | 4 | Rule 119 |
| Tunnels | `dt-coverage-tunnels-001`–`003` | 3 | Rules 109, 126 |

## Source verification

Live GOV.UK Highway Code chapters checked on 26 October 2026 (HTTP 200; rule/annex references appear in each changed or new question):

- [introduction](https://www.gov.uk/guidance/the-highway-code/introduction).
- [rules for pedestrians 1 to 35](https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35).
- [rules for users of powered wheelchairs and mobility scooters 36 to 46](https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46).
- [general rules techniques and advice for all drivers and riders 103 to 158](https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158).
- [using the road 159 to 203](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203).
- [waiting and parking 238 to 252](https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252).
- [motorways 253 to 273](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273).
- [breakdowns and incidents 274 to 287](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287).
- [annex 3 motor vehicle documentation and learner driver requirements](https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements).
- [annex 6 vehicle maintenance safety and security](https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security).
- [annex 8 safety code for new drivers](https://www.gov.uk/guidance/the-highway-code/annex-8-safety-code-for-new-drivers).
- [vehicle markings](https://www.gov.uk/guidance/the-highway-code/vehicle-markings).
- [rules for drivers and motorcyclists 89 to 102](https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102).
- [road users requiring extra care 204 to 225](https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225).
- [driving in adverse weather conditions 226 to 237](https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237).
- [rules for cyclists 59 to 82](https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82).
- [road works level crossings and tramways 288 to 307](https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307).
- [traffic signs](https://www.gov.uk/guidance/the-highway-code/traffic-signs).
- [annex 7 first aid on the road](https://www.gov.uk/guidance/the-highway-code/annex-7-first-aid-on-the-road).

Sign metadata and retained overlap meanings were checked against [rising bollards](https://www.gov.uk/government/publications/know-your-traffic-signs/miscellaneous-signs#rising-bollards), [road markings](https://www.gov.uk/government/publications/know-your-traffic-signs/road-markings), and [traffic signals](https://www.gov.uk/government/publications/know-your-traffic-signs/traffic-signals). Science was checked against AQA’s live Trilogy [biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), [chemistry](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content), and [physics](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/physics-subject-content) content. No commercial question text was copied.

## Validation and scope

- `npm ci`: PASS, 326 packages installed. Lockfile unchanged.
- `npm test`: PASS, 20 main content/theory/science tests, 5 hazard tests, 1 server test (26 total).
- `npm run test:browser`: PASS, 23/23 in 25.1 seconds, with fictional/mocked test accounts.
- `npm run build`: PASS (TypeScript and Vite).
- `git diff --check`: PASS.
- ID audit: all 723 original records retained; exactly 32 new unique IDs; all scope tags preserved.
- Exact science-stem duplicate check: none after trim/case normalisation.
- `pii-check`: reports the same 19 pre-existing hits in unrelated package/app/test files, none in the changed content or new report. No unrelated cleanup was made.
- Existing warnings: npm reports 42 dependency advisories (3 low, 19 moderate, 18 high, 2 critical); Vite reports old Browserslist data and an 863.49 kB JS chunk. Dependency or application changes are outside this brief.
- Prohibited `src/lib`, `src/store`, `src/views`, and `server/` files are unchanged. The test and report outputs are the explicit exceptions requested by the brief to the content/data whitelist. No secrets or real account data were read; no paid APIs used.
- `git-loose` was run for this worktree; it flags the deliberately unpushed branch (no upstream). Documentation/report-copy changes are committed at finish; the requested `.codex-task/REPORT.md` working copy is the sole intentional uncommitted file.
- No blockers remain. Existing sign fixes were retained rather than duplicated. Nothing was pushed, published, emailed, posted, merged or deployed.

## Commits

Each implementation commit addresses one brief item; items with independent bank revisions use several focused commits. The final documentation/report commit follows these implementation commits.

- `fb3b2be` — Correct rising-bollards advance warning caption.
- `239e381` — Differentiate repeated science questions while preserving ids.
- `b122925` — Broaden repeated energy content into work springs and resource comparisons.
- `ab4c80b` — Guard answer-length balance across text question banks.
- `fd5ffd2` — Clarify driving safety scenarios and rule explanations.
- `7ead812` — Correct puffin filter-arrow and officer-signal citations.
- `1e2a0cf` — Add driving questions for eight uncovered safety topics.
- `6562922` — Differentiate repeated driving questions with distinct scenarios.
- `159f8a2` — Balance science answer lengths and replace implausible distractors.
- `7fd2b04` — Differentiate remaining science recall pairs with applications.
- `462ab38` — Replace driving preparation giveaways with plausible distractors.
- `4f950db` — Vary science distractor lengths to avoid shortest-answer clues.
- `14e6c76` — Balance short and long options in new coverage and preparation questions.
- `e9f97c4` — Balance core and round-two driving options with plausible misconceptions.
- `ac87224` — Replace giveaway driving options with plausible misconceptions.
