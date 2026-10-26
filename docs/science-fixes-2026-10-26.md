# Science content task report

Completed 26 October 2026 on the supplied branch. All four content items are implemented. No push, merge, deployment, publication, email or external post was performed.

## 1. Learning links

- Replaced **290 of 292** existing URL values. The two already-correct cell-biology hub links were retained. This removes all 142 distinct dead URLs identified by the review, the mismatched guide families, and the 98 misassigned cell-biology hub uses.
- All **380** science records now use one of **24** verified topic hubs. Public GET checks returned HTTP 200 with matching titles for all 24 on 26 October 2026. The atmosphere/resources topic is split by actual question subject.
- Added offline tests for presence, known-wrong URL families, verified destinations and the topic-to-URL mapping. Tests make no network requests.
- Titles, statuses and URLs are preserved in `tests/fixtures/science-content.json` and `docs/SCIENCE_CONTENT.md`. Topic hubs are revision starting points rather than promises that every subsection is Foundation material.

## 2. Corrections

**39 existing records** changed beyond their URLs/scope: **9 biology, 10 chemistry and 20 physics**. IDs remain stable. Repairs cover every row in review §§1–3, the lower-priority wording, the two Higher-only explanation components and the tier-demand concerns.

Melting now consistently distinguishes potential energy from average kinetic energy in `phys-particle-model-004/012`. Concentration uses final solution volume; heat-capacity comparisons specify equal masses and energy; radiation/refraction/fuse questions state the intended comparison or assumptions. Detailed explanations were corrected as requested.

The three inheritance questions now supply completed Punnett squares. The half-life question reads a supplied decay graph instead of requiring a multi-half-life fractional ratio. An original reaction-profile diagram supplies the labelled activation-energy arrow. Four SVG assets serve five questions, with accessible descriptions and science-specific attribution.

Corrected IDs:

- Biology: `bio-bioenergetics-003`, `bio-ecology-009`, `bio-ecology-011`, `bio-infection-005`, `bio-inheritance-001`, `bio-inheritance-003`, `bio-inheritance-009`, `bio-inheritance-010`, `bio-organisation-010`.
- Chemistry: `chem-analysis-002`, `chem-bonding-012`, `chem-chemical-changes-006`, `chem-chemical-changes-013`, `chem-energy-changes-008`, `chem-organic-005`, `chem-organic-010`, `chem-quantitative-006`, `chem-rates-010`, `chem-rates-012`.
- Physics: `phys-atomic-structure-phys-004`, `phys-atomic-structure-phys-005`, `phys-atomic-structure-phys-010`, `phys-atomic-structure-phys-013`, `phys-electricity-010`, `phys-energy-phys-001`, `phys-energy-phys-009`, `phys-energy-phys-016`, `phys-energy-phys-018`, `phys-energy-phys-021`, `phys-energy-phys-024`, `phys-forces-013`, `phys-forces-014`, `phys-particle-model-004`, `phys-particle-model-006`, `phys-particle-model-007`, `phys-particle-model-012`, `phys-waves-003`, `phys-waves-005`, `phys-waves-010`.

## 3. Tier and scope

Added optional `scope?: 'higher' | 'separate'`. Tagged **10 Higher-only** and **18 separate-science** questions. Kept every record in the complete bank and left stored attempt snapshots untouched.

Default view pools, random/topic/mixed generation, unseen/weak modes (including padding), weak-topic mode, topic counts, unseen counts and bank-statistics denominators exclude tagged records. Filtering uses the current bank even when old attempt snapshots have no scope field. No progress/saving files were changed.

The **352-question default pool** contains **116 biology, 119 chemistry and 117 physics** questions. Basic transformer/National Grid questions, simple numerical halving, and basic alkene/polymer use remain eligible.

Tagged IDs:

- higher: `chem-quantitative-004`, `chem-quantitative-007`, `chem-quantitative-012`, `chem-energy-changes-005`, `chem-energy-changes-007`, `chem-energy-changes-010`, `phys-forces-008`, `phys-electromagnetism-004`, `phys-electromagnetism-008`, `phys-electromagnetism-011`.
- separate: `bio-homeostasis-007`, `bio-homeostasis-008`, `bio-homeostasis-011`, `chem-analysis-003`, `chem-analysis-007`, `chem-analysis-009`, `chem-analysis-012`, `chem-organic-012`, `phys-forces-013`, `phys-forces-014`, `phys-forces-015`, `phys-atomic-structure-phys-008`, `phys-waves-013`, `phys-electromagnetism-006`, `phys-electromagnetism-007`, `phys-electromagnetism-012`, `phys-atomic-structure-phys-007`, `phys-atomic-structure-phys-013`.

## 4. New coverage

**88 original Foundation questions:** 44 biology, 20 chemistry, 24 physics. Each of the **21 required practicals** has a method/measurement/data question; each of the **13 missing equations** has an application or rearrangement question. All new records have verified topic links and existing topic labels.

Biology additions emphasise plant transport, infection examples, reproductive hormones, reproduction/inheritance, cell processes and ecological methods. Chemistry additions include practical methods, equilibrium, ionic conduction/alloys, pollutants and water purification. Physics additions include all requested equations, methods and Foundation magnetism.

| Subject | Topic | New count | New IDs |
|---|---|---:|---|
| biology | Cell Biology | 8 | `bio-cell-biology-012` – `bio-cell-biology-019` |
| biology | Organisation | 8 | `bio-organisation-012` – `bio-organisation-019` |
| biology | Bioenergetics | 5 | `bio-bioenergetics-011` – `bio-bioenergetics-015` |
| biology | Homeostasis | 5 | `bio-homeostasis-012` – `bio-homeostasis-016` |
| biology | Ecology | 5 | `bio-ecology-012` – `bio-ecology-016` |
| biology | Infection & Response | 6 | `bio-infection-012` – `bio-infection-017` |
| biology | Inheritance & Variation | 7 | `bio-inheritance-011` – `bio-inheritance-017` |
| chemistry | Chemical Changes | 3 | `chem-chemical-changes-014` – `chem-chemical-changes-016` |
| chemistry | Energy Changes | 1 | `chem-energy-changes-013` – `chem-energy-changes-013` |
| chemistry | Rates of Reaction | 3 | `chem-rates-013` – `chem-rates-015` |
| chemistry | Chemical Analysis | 3 | `chem-analysis-013` – `chem-analysis-015` |
| chemistry | Atmosphere & Resources | 4 | `chem-atmosphere-013` – `chem-atmosphere-016` |
| chemistry | Atoms & Periodic Table | 2 | `chem-atomic-structure-014` – `chem-atomic-structure-015` |
| chemistry | Bonding & Structure | 2 | `chem-bonding-013` – `chem-bonding-014` |
| chemistry | Quantitative Chemistry | 1 | `chem-quantitative-013` – `chem-quantitative-013` |
| chemistry | Organic Chemistry | 1 | `chem-organic-013` – `chem-organic-013` |
| physics | Energy | 4 | `phys-energy-phys-026` – `phys-energy-phys-029` |
| physics | Electricity | 5 | `phys-electricity-014` – `phys-electricity-018` |
| physics | Particle Model | 2 | `phys-particle-model-014` – `phys-particle-model-015` |
| physics | Forces | 7 | `phys-forces-019` – `phys-forces-025` |
| physics | Waves | 3 | `phys-waves-014` – `phys-waves-016` |
| physics | Electromagnetism | 3 | `phys-electromagnetism-013` – `phys-electromagnetism-015` |

No new atomic-structure physics questions were added; that topic’s reviewed defects were corrected in place.

**Longest-answer measurement:** 24/88 = **27.27%**, including joint-longest options; uniquely longest correct: 17/88 = 19.32%. Unicode character counts include spaces and punctuation. No new options use “always” or “never”. Distractors were reviewed for plausible misconceptions and calculation errors.

Complete practical/equation-to-question mapping: `docs/SCIENCE_CONTENT.md` and `tests/fixtures/science-content.json`. The AQA specification’s practical descriptions and Foundation equation list were checked; questions are original and no past-paper text was copied.

## Validation

- `npm ci --cache .codex-task/work/npm-cache`: passed. Lockfile unchanged. Installer reported 16 dependency vulnerabilities (1 low, 5 moderate, 9 high, 1 critical); no dependency changes were in scope.
- `npm test`: **passed, 21 tests** (16 main tests including 8 new science tests, plus 5 hazard tests). Checks cover all science records, not just additions.
- `npm run test:browser`: **passed, 10/10**, 24.5 seconds. Includes the existing 9 tests and a new mobile science-diagram test across all 5 illustrated records. The first run’s new overflow assertion sampled an active transition; waiting for stable layout resolved the test timing issue.
- `npm run build`: **passed**. Non-fatal warnings: outdated Browserslist data and a JavaScript chunk over 500 kB.
- `git diff --check`: passed.
- `pii-check`: flagged 18 pre-existing lines in unchanged files; no new content was identified in its findings. Existing authentication/storage identifiers and unrelated fixtures were left untouched.

## Commits

- `cd02263` — Fix science learning links with verified topic hubs
- `201ffa9` — Correct science answers, assumptions and Foundation explanations
- `9ceb6df` — Exclude Higher and separate science from Foundation practice pools
- `5756b36` — Add 88 Foundation questions covering practicals and missing equations
- Final tests/docs commit: `Test and document Foundation science content fixes` (contains this report; obtain its hash with `git log -1`).

## Skipped or open

- No requested content item is blocked or skipped. One method question per practical is a baseline, not comprehensive coverage of every practical skill or specification statement.
- Progress/saving/server files and driving data/assets were left untouched as required. Their separately assigned bugs remain outside this task.
- Historical attempts retain their original question snapshots, including their original wording/links; this task updates the bank for future practice without migrating saved history.
- No past-paper PDF inventory audit was needed or performed.
- External URLs can change after verification; offline regression tests cannot guarantee future availability.
- Dependency audit findings and build-size warnings remain open outside this content brief.
- Commits are intentionally local and unpushed, as the brief requires.
