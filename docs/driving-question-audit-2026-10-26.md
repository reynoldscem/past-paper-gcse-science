# Driving theory question audit, 26 October 2026

Scope: all 307 paper questions (drivingTheory 27, drivingTheoryExpanded 126, drivingRound2 60, drivingPrep 41, drivingVisual 53) and the 71 sign-drill meanings in `drivingSigns.json`. Each one was checked against the live Highway Code (gov.uk, latest update 22 Oct 2025), fetched on 26 Oct 2026. All 124 image checksums match the manifest, and every image's official Highway Code caption was matched to its question. 20 images were viewed by eye. Read-only audit: no source files were changed.

## Verdict: yes, it is safe to practise on tonight, with two caveats

- **No keyed answer contradicts the current Highway Code.** Stopping distances, speed limits (including Wales's 20 mph default), the 1.5 m and 2 m / 10 mph passing distances, H1–H3, the red X, emergency areas, the Scotland pavement-parking rules, tread depth, learner supervision, documents and insurance are all correct. Below there is one answer that is wrong in its wording (a sign meaning) and one imprecise drill meaning. Neither will teach you a dangerous rule.
- **Caveat 1: your scores will look better than they are.** The distractors are often absurd ("Vehicle colour", "Double the dose before driving"). In 74% of the text questions the correct option is the longest. Words like "always/never/only/immediately" appear in 29% of distractors but only 4% of correct answers. The real DVSA test has plausible distractors. Treat 43/50 here as roughly the minimum, not a comfortable pass. Aim for 47 or more.
- **Caveat 2: there are gaps.** These topics have no questions at all: alcohol limits, first aid details, pelican crossings, smart-motorway hard-shoulder running, MOT age, SORN, skids and others (see Coverage). Read those Highway Code sections directly before Thursday.

## 1. Definitely wrong (ranked)

| # | File / id | What it says | What is correct | Source |
|---|---|---|---|---|
| 1 | drivingVisual.ts `dt-visual-005` (white disc, red border) | Answer: "No vehicles except permitted exceptions shown on a plate". Explanation: "read any accompanying exception plate" | **No vehicles except bicycles being pushed.** The exception is part of the sign itself; it is not on a plate. The image's own plate just says "No vehicles". This is a classic DVSA question. | Highway Code, [Traffic signs](https://www.gov.uk/guidance/the-highway-code/traffic-signs) (signs giving orders) |
| 2 | drivingSigns.json `drill-warning-sign-level-crossing-without-barrier-ahead.jpg` (red-edged white X) | "A level crossing without barriers is ahead" | This sign marks the **location** of a level crossing without a barrier (it stands at the crossing). The *ahead* warning is the red triangle with a locomotive (`dt-visual-025`). As written, the two drill items mean almost the same thing. | Traffic signs page captions: "Level crossing without barrier" vs "Level crossing without barrier or gate ahead" |

The next two items are not wrong answers. They are wrong supporting material, and they matter when you click "learn more" tonight:

| # | Where | Problem | Fix |
|---|---|---|---|
| 3 | `src/data/drivingReferences.ts` (`highwayCodeReferenceUrl`, line 118), `drivingTheory.ts` lines 61, 72, 215, 226, `drivingTheoryExpanded.ts` lines 28–29 | Links to `motorways-253-to-274` and `breakdowns-and-incidents-275-to-287` **return 404**. That breaks the Highway Code link on **33 of 307 questions**: every motorway, breakdown and incident question. | The real slugs are `motorways-253-to-273` and `breakdowns-and-incidents-274-to-287`. Note that rule 274 now sits on the motorways page. |
| 4 | Rule citations shifted by the 2025 renumbering of rules 263–280 | `dt-round2-039` cites 272 (now "picking up / walking on a motorway"); missed exit is **263**. `dt-round2-040` cites 273; speed after leaving is **274**. `dt-round2-038` cites 270 (emergency areas); "must not stop" is **271**. In drivingReferences.ts, `dtx-083` gives 270–271 (should be **263**) and `dtx-086` gives 272 (should be **273**). | Update the numbers. The answers themselves are right. Source: [Motorways (253 to 274)](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273) |

**Count: 2 definitely wrong answer texts**, plus 33 broken links and 5 out-of-date rule citations.

## 2. Ambiguous or loosely worded

- `dt-road-rules-008`: the stem "When must you not park…" has options starting "Unless…", so it doesn't read as a question. It also says "must", but Rule 243 is advisory ("DO NOT", not "MUST NOT"). Reword to: "Where may you park within 10 m of a junction?" with the answer "In an authorised parking space".
- `dt-hazard-005` (break down on a motorway, where to wait): "Inside the vehicle with the seat belt on" is the *correct* Rule 277 action when you can't get out safely. The stem's "if possible" rescues it, but keep the scenario explicit (on the hard shoulder or in an emergency area).
- `dtx-088`: "call for help when safe". Rule 277 says that if you are stuck in a live lane, stay belted in with hazard lights on and **call 999 immediately** for the police. Align it with `dt-round2-044`, which is right.
- `dtx-089` (emergency telephone): the answer "when safer or clearer than a mobile and to identify your location" is woolly. Current Rule 277 says to use it "to obtain advice and assistance", and to identify your location by eCall, a mapping app or marker posts.
- `dtx-118`: "licence **can** be revoked". Six points within two years of passing **will** revoke it. Neither the answer nor the explanation states 6 points / 2 years.
- `dtx-077`: "Near a school entrance where markings or danger make it unsafe". Rule 243 says don't park near a school entrance at all.
- `dtx-114` (rear "chevron" markings on large vehicles): the Highway Code's vehicle-markings page has no chevrons. Re-base it on the official rear/side markers or drop it.
- `dtx-044` (dipped headlights): Rule 115 also requires them in dull daytime weather. That is fine as written, but it is weaker than the Code.
- `dtx-009` and `dtx-002`: the answers are correct but clumsy ("…where the Code says to do so"). Quote H2 directly: you MUST give way to people on a zebra crossing, and you should give way to people waiting to cross.
- `dtx-105` (blue rectangle = "information or direction, depending on context") is too hedged to test anything.

## 3. Weak explanations (they restate the answer without the number)

The real test asks for the number, so these should state it:

- `dtx-016`: give the 4 mph pavement limit (Rule 39) and the 8 mph road limit for Class 3 vehicles.
- `dtx-034`: number plate at **20 m** (Rule 92).
- `dtx-036`: the limits (Rule 95). See Coverage.
- `dtx-115`: produce documents at a police station **within 7 days** (Annex 3).
- `dtx-118`: 6 points / 2 years.
- `dtx-120`: 1.6 mm.
- `dtx-076`: says "generally"; Rule 249 is a MUST on roads over 30 mph.
- `dtx-081`: list who is banned (provisional motorcycle licences, under-50 cc, cyclists, horse riders, learner car drivers unless with an ADI in a dual-control car).
- `dt-visual-001`: give the 60/70/70 limits (and 50/60/60 when towing).
- `dt-round2-036`: "passing a slower queue on the right" is confusing. Say "you may pass traffic in the lane to your right".

More broadly, most `dtx-*` explanations are one generic sentence ("Cyclists need legal lights and reflectors"). The Prep and Round2 files are better because they cite rules.

## 4. Image problems

- Every file path, checksum and official caption matches its question. I found no wrong image.
- **Plates that give the answer away:**
  - `dt-visual-008` (plate reads "Give way to oncoming vehicles")
  - `dt-visual-034` ("Priority over oncoming vehicles")
  - `dt-visual-005` ("No vehicles")
  - `dt-visual-030` ("Ice")
  - `dt-visual-031` ("Queues likely")
  - drill images with plates (soft verges, other danger and others)

  The real test usually shows the sign alone. Crop the plate or change the question to "What does the plate add?". Your docs say the plates were kept on purpose; that is a fair provenance choice, but it weakens these questions as tests.
- `dt-visual-021` (double bend, first to the left) was viewed: correct. So were road narrows on the right, no through road, frail pedestrians, red X, minimum speed, double yellow, double red and single yellow with time plate.

## 5. Duplicates and giveaways

There are about 30 near-duplicate clusters, which inflate scores on repeat mocks. The main ones:

| Topic | Question ids |
|---|---|
| Flashing red at a level crossing | `dt-road-signs-004`, `dtx-096`, `dt-visual-052` |
| Traffic light phases (text vs image) | `dt-road-signs-003`/`dt-visual-051`, `dtx-099`/`dt-visual-048`, `dtx-100`/`dt-visual-049` |
| Missed motorway exit | `dtx-083`, `dt-round2-039` |
| Phone in a traffic queue | `dt-round2-002`, `dt-prep-008` |
| Flashing headlights | `dtx-047`, `dt-round2-010`, `dt-prep-006` |
| Horn | `dtx-048`, `dt-round2-009` |
| Following gap in rain | `dt-road-rules-007`, `dt-round2-014`, `dt-prep-013` |
| Ice: ten times the distance | `dtx-070`, `dt-round2-015` |
| Long vehicle, bus and emergency vehicle pairs | `dt-round2-028/030/031` vs `dt-prep-018/019/020` |
| Brakes after water | `dt-round2-018`, `dt-prep-017` |
| Aquaplaning | `dtx-074`, `dt-prep-014` |
| Overtaking a cyclist (1.5 m) | `dtx-067`, `dt-prep-032`, `dt-round2-027` |
| Cyclist riding in the centre of the lane | `dtx-024`, `dt-round2-025` |
| Opening a car door | `dtx-027`, `dtx-080` |
| Theft protection | `dtx-123`, `dt-prep-024` |
| Towing and roof loads | `dt-round2-049/051/052` vs `dt-prep-028/029/030` |
| Box junction | `dtx-110`, `dt-visual-047` |
| Red and blue circles, red triangles | `dtx-103/107` vs `dt-road-signs-001/002` |
| First action at a crash | `dtx-092`, `dt-round2-047` |
| Dangerous goods | `dtx-090`, `dt-round2-048` |
| Medicines | `dtx-035`, `dt-prep-004` |

Giveaway patterns (measured over the bank):

- The correct option is the longest in 185 of 251 non-image questions (74%; 25% would be expected by chance). In 132 of them it is at least 30% longer than the next option.
- Absolute words ("always", "never", "only", "every", "regardless", "immediately") appear in 266 of 921 distractors, but in only 13 of 307 correct answers.
- No question uses "all of the above". Options are shuffled in every paper mode (`shuffleOptions`) and in the sign drill, so position gives nothing away.
- **Fix:** rewrite distractors as plausible near-misses (wrong number, wrong rule from a nearby area, a "should" vs "must" swap), and trim correct answers to the same length as the others.

## 6. Coverage against the 14 DVSA topics

Tag counts (paper bank): signs, markings and lights 85; vulnerable road users 31; general "highway-code" 28; motorways 17; vehicle condition 17; documents 17; incidents 16; junctions 16; weather/parking 15; safety margins 12; alertness 10; attitude 10; other vehicles 9; vehicle loading 9; vehicle handling 6; stopping distances 5; seat belts 4.

- **Thin topics:**
  - Vehicle handling: only 6 questions are tagged to it. It is padded with weather/parking questions.
  - Other types of vehicle (9).
  - Vehicle loading (9).
  - Hazard awareness: it has no questions of its own. It borrows the general "highway-code" and "weather-parking" tags.
  - Alertness and attitude (10 each).
- **Mis-tagged questions:**
  - Phone use and sat nav (`dtx-052/053`) are tagged Documents.
  - Careless driving and post-collision duties (`dtx-124/125`) are tagged Documents.
  - The motorcycle helmet question (`dtx-029`) is tagged vehicle condition.
- **Missing entirely (all regular DVSA material):**
  - Alcohol limits: 35 µg/100 ml breath (22 in Scotland), 80 mg/100 ml blood (50 in Scotland). Rule 95.
  - First aid (Annex 7): DR ABC, CPR (chest compressions 5–6 cm deep, about twice a second), cooling burns for at least 20 minutes, pressure on bleeding, and not removing a motorcyclist's helmet (Rule 283, mentioned only in a distractor).
  - Pelican crossings and the flashing amber phase; parallel crossings (H2); advanced stop lines.
  - Smart motorways: the hard shoulder used as a lane only when a speed limit is shown above it; a red X or blank sign over the hard shoulder; red flashing lights over all lanes meaning the road is closed; Rule 264 (move over for vehicles stopped on the hard shoulder or in an emergency area). Rules 258, 264 and 269.
  - Tunnels, and contraflows at motorway roadworks.
  - Skids, brake fade on long descents, engine braking downhill, parking on a hill, tyre blowout.
  - MOT at 3 years (Annex 3); VED, SORN and the V5C; telling DVLA about a change of address; minimum insurance types (covered once); towing licence entitlement.
  - Child seats (12 years or 135 cm, no rear-facing seat in front of an active airbag) and head restraints.
  - Using hazard warning lights while moving (only on motorways and unrestricted dual carriageways, covered once).
  - EV charging cables and the "Dutch reach" (Rule 239); arm signals; police and DVSA officer signals (already a known gap).
  - Level crossing types (half barrier, user-operated, open).
- **Fix:** add about 40 questions across these gaps, roughly in proportion, before adding any more signs.

## 7. Mock realism

- **Correct:** 50 questions, 57 minutes, pass mark 43, unique questions, options shuffled, all 14 areas guaranteed. The app is honest that it has no video case study (the real test has three questions on one clip).
- **Topic mix is skewed.** A simulation of 2,000 mocks gives on average about 16 sign, marking or light questions per mock (32%) and about 15 image questions, because 12 images are forced in and signs dominate the pool. The real test spreads questions roughly evenly across the 14 topics, so signs are about a sixth to a third over-weighted. Meanwhile vehicle handling (about 0.8 questions per mock), stopping distances (0.8) and seat belts (0.5) barely appear.
- **The pool is small (307) and full of duplicates,** so after 5–6 mocks you will mostly be recognising questions rather than recalling rules. For the last few days, also use DVSA's official [practice test](https://www.gov.uk/take-practice-theory-test) and the official revision app or book, which use the real question style.
- **Suggested changes:** cap image questions at about 8–10 per mock, sample in proportion to topic area rather than tag, and de-duplicate the clusters above.

## Suggested fix order

1. Fix the two wrong meanings (`dt-visual-005` and the level crossing drill item).
2. Fix the broken motorway and incident link slugs and the five rule citations (a few minutes' work; it affects 33 questions).
3. Add the missing must-know facts: alcohol limits, first aid, pelican and parallel crossings, smart motorway hard shoulder, MOT at 3 years, SORN, child seats.
4. Rewrite distractors and correct-answer lengths in `drivingTheoryExpanded.ts` first; it is the weakest file (126 questions).
5. Re-weight the mock and de-duplicate.

Doc note: `docs/DRIVING_CONTENT.md` says there are 305 paper questions; the bank actually has 307.
