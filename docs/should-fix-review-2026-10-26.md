Fix first

- Preserve immutable question content for compact history.
- Prevent older clients from overwriting compact documents without their format/snapshot metadata.
- Remove the defensible alternative answers in the four questions below.

## Must-fix items

### Saved history

1. **Compact references silently change historical answers after bank edits** — `src/lib/progressCodec.ts:27–29,49–50`. Current questions store no snapshot or content version; decoding applies saved option indices to today's bank. Rewriting an option changes the learner's displayed selection; reordering options can also make the historical “correct” highlight point at an incorrect answer. Stems and explanations likewise change underneath old attempts. In an in-memory reproduction, saving `phys-energy-phys-013` with selected/correct “4 m”, then swapping bank options 0 and 1, made the restored attempt display “0.25 m” as selected and correct, with its original score of 1. **Fix:** deduplicate immutable snapshots for every distinct question version, or retain versioned banks and include the version in each reference. Test save → bank rewrite/reorder → reload. Existing legacy full-question attempts are preserved by migration; this defect concerns snapshot-free compact attempts, including those saved before a later content deployment.

2. **An older open tab can destroy migrated history metadata** — `server/index.js:167–189`, interacting with the `master` client's `storage.loadProgress` and `progressStore.snapshot`. After an account migrates, an old tab can reload progress using the existing retry/login flow. That client does not decode tuples, and its next ordinary save copies `attempts` but drops `historyVersion` and `questionSnapshots`. The server accepts this full replacement when its revision is current. Snapshot content is then lost and tuple questions are treated as legacy objects; reproducing that old-client transformation makes the new encoder throw `options is not iterable`. Revision checks do not protect against this fresh-revision write. **Fix:** enforce client/schema compatibility on reads and writes, reject format downgrades, and require old tabs to refresh before mutation (or serve them a compatible representation). Add a mixed-version client regression covering reload and save. A deployment note asking users to refresh is insufficient protection.

### Content

| ID | Problem | Fix |
|---|---|---|
| `phys-energy-phys-014` | “It reduces the energy needed to raise each room’s temperature” is defensible alongside keyed “It reduces heat transfer”: insulation reduces losses during warm-up and therefore required heater input. | Replace that distractor with an unequivocal misconception, e.g. “It lowers the specific heat capacity of the air.” [AQA 8464 §6.1.2.1](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/physics-subject-content). |
| `dt-round2-021` | A white cane with a red band indicates combined sight/hearing loss, but the rewritten “Sight loss” and “Hearing loss” are both true subsets. | Use “Sight loss with normal hearing” and “Hearing loss with normal sight”. [Rule 207](https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule207). |
| `dt-round2-049` | “What must you check?” after attaching a roof box admits “That the lid is shut” as well as the keyed secure box/load. | Ask what to check **in addition to closing and locking the lid**. [Rule 98](https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule98). |
| `dt-round2-051` | The general pre-towing check question admits “Towball size” and “Empty trailer weight”, as well as permitted towing/load limits. These are legitimate checks. | Ask specifically which limits determine the maximum permissible towed load, and use incorrect limit sources as distractors. [Official towing checks](https://www.gov.uk/guidance/tow-a-trailer-with-a-car-safety-checks). |

## Minor items

- Narrow three broad driving stems to avoid further defensible readings: `dt-round2-005` (“At the vehicle ahead”) should ask which **concealed hazard** to anticipate; `dt-round2-012` (“Watch its brake lights”) should ask which **position change improves the obstructed view**; `dt-round2-040` (“Following traffic”) should ask what to check **to avoid underestimating speed**. Their intended keys are sound, but the alternatives describe useful observations. See [Rule 104](https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule104) and [Rule 274](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule274).
- `dtx-114`: specify projection beyond the **front or rear** in the stem; its explanation already correctly limits the two-metre marker requirement to longitudinal projections. [Vehicle markings](https://www.gov.uk/guidance/the-highway-code/vehicle-markings).
- Duplicate distractor meanings weaken `chem-analysis-011` (two higher/sharp melting-point answers), `dtx-036` (coffee), `dtx-081` (caravan drivers), and `dtx-095` (red as give-way). Replace one of each pair with a distinct misconception.
- Build warnings: outdated Browserslist data and an 867.53 kB JavaScript chunk; build succeeds.

## Review coverage and validation

- Reviewed `git diff master...HEAD`, including all **430 changed/new question records**: 44 biology, 42 chemistry, 56 physics, 256 existing driving and 32 new driving. Checked keys, explanations and distractors; recalculated numerical answers; checked science scope against live AQA 8464 specifications and doubtful driving facts against live GOV.UK. No other clear incorrect keys, explanation/key conflicts, numerical errors or newly introduced Foundation-scope problems found.
- Reviewed legacy migration, append/revision/conflict handling, parked-mock replacement, submitted skips, history guards, unseen labels and the dev proxy. No additional must-fix issue found in those paths. Existing tests do not cover the two cross-version history failures above.
- `npm test`: **PASS**, 25 main + 5 hazard + 2 server tests (32 total).
- `npm run test:browser`: **PASS**, 27/27.
- `npm run build`: **PASS**.
- `git diff --check master...HEAD`: **PASS**.
- Findings only: no application changes, commits, pushes, merges or deployments. No secrets or `server/data` read. Only this report was authored; required test/build commands produced their normal generated artifacts.
