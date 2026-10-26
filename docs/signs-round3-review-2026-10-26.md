Fix first — correct the weak-bridge exemption, cattle-crossing instruction and contraflow speed explanation; remove overlapping drill answers; repair rule-link fragments; resolve the SVG external-DTD references.

**Must fix**

1. **Missing exemption:** `src/data/drivingSigns.json:1468`, `drill-kyts-weak-bridge.svg`, says “Weak bridge: no vehicles over the gross weight shown”. The image explicitly includes an empty-vehicle exemption, also explained in its manifest caption. Correct meaning: vehicles over 18 tonnes maximum gross weight prohibited, **except empty vehicles**. [Official regulatory signs](https://www.gov.uk/government/publications/know-your-traffic-signs/regulatory-signs).

2. **Incorrect stop instruction:** `drill-kyts-cattle-crossing.svg` says “Supervised cattle crossing ahead: stop when the lights show”. The caption identifies an advance warning of a supervised cattle crossing; flashing amber lights warn drivers to **be prepared to stop**, rather than imposing an unconditional stop. Replace the added instruction with “slow down and be prepared to stop”. [Official warning signs](https://www.gov.uk/government/publications/know-your-traffic-signs/warning-signs); [Traffic Signs Manual, chapter 6, §24.7.1](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/851465/dft-traffic-signs-manual-chapter-6.pdf).

3. **Advisory speed described as a limit:** `src/data/drivingVisual.ts:1608–1614`, `dt-visual-077` / `road-work-sign-lane-crossover.jpg`. The keyed answer says “max 30 mph” and the explanation says “keep to the speed limit shown”. The rectangular yellow “Max speed 30” panel is advisory; it is not a red-ringed mandatory limit. Say “stay in lane; maximum advised speed 30 mph” and distinguish any separately signed legal limit. The manifest's “One lane crossover at contraflow road works” caption does not establish a mandatory limit. [Official speed-sign distinction](https://www.gov.uk/government/publications/know-your-traffic-signs/speed-limit-signs). The branch correctly teaches this distinction in `dt-visual-086`.

4. **Two correct options generated:** `drill-kyts-contra-flow-bus-cycle-lane.svg` (`src/data/drivingSigns.json:1950`; `src/data/signDrill.ts:5–12`) offers both the keyed contraflow bus-and-cycle description and “Bus lane on the road at the junction ahead”. The latter is also true of this image, but is marked wrong. Confirmed against the actual bundled `signBank`, not just hypothetical family selection. Use explicit incompatible meanings or semantic exclusion groups. String uniqueness does not establish answer exclusivity. [Official bus/cycle signs](https://www.gov.uk/government/publications/know-your-traffic-signs/bus-and-cycle-signs-and-road-markings).

5. **Broken rule anchors:** `src/data/drivingReferences.ts:122` emits `#rule-${rule}`. Live GOV.UK headings use `#rule263`, `#rule274`, `#rule277`, etc., without the hyphen. The corrected chapter URLs load, but numbered references fail to jump to their rules. This fragment bug predates the branch; the newly added link tests perpetuate it. Fix the builder and expectations. Verified heading IDs in motorway, breakdown, general-rules and road-works chapters. [Working Rule 263 target](https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule263). Keep the motorway boundary at **274**: despite its historical URL slug, that chapter really includes Rule 274.

6. **Literal SVG safety requirement unmet:** 22 new SVGs contain an external SVG 1.1 DTD declaration at line 3, referencing `http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd`; e.g. `kyts-rising-bollards.svg`, `kyts-green-arrow-light.svg`, `kyts-driver-location-sign.svg`. Identify the complete set with `rg -l '<!DOCTYPE' public/driving/kyts-*.svg`. These are external references under the brief's literal requirement. No scripts, event handlers, external image/use links or CSS network references were found. The Adobe `foreignObject` elements reference internal Illustrator metadata; embedded PNG data is local. This is a compliance finding, not evidence of executable malware. Remove external DTD dependencies safely, preserving namespace resolution, and update manifest hashes/modification records if assets change.

**Minor items**

- Further semantic overlap: `drill-kyts-different-traffic-road-markings.svg` currently offers both compulsory lane movements and “Lane arrows and destinations: choose your lane for your route”. Make the wrong option clearly incompatible. Family pairs also needing exclusion from future mutual selection include `motorway-signal-temporary-speed-limit-message.jpg` / `motorway-signal-temporary-speed.jpg`, and `warning-sign-pedestrians-in-road-ahead.jpg` / `kyts-no-footway.svg`; their broader meanings overlap, although those pairs are not currently selected against each other.
- `drill-kyts-green-arrow-light.svg` says oncoming traffic “is held”. Restore the official qualification to check that opposing traffic has stopped before turning. [Official traffic signals](https://www.gov.uk/government/publications/know-your-traffic-signs/traffic-signals).
- `manifest.json` assigns `kyts-rising-bollards.svg` a caption about red/green bollard-control signals, while the asset is the triangular advance-warning sign. The drill meaning is correct; the recorded caption describes a neighbouring illustration. [Official bollard guidance](https://www.gov.uk/government/publications/know-your-traffic-signs/miscellaneous-signs#rising-bollards).
- `level-crossing`, `signals` and `vehicle-markings` each contain only three drill entries. The fallback successfully supplies three distinct options, but they come from other families. This is supported by the code, not a crash.
- Installation reported 42 dependency vulnerabilities (3 low, 19 moderate, 18 high, 2 critical). Dependency files are unchanged by this branch; individual advisories were not investigated. Build warnings: stale Browserslist data and a 779.74 kB JS chunk.

**Coverage and validation**

Reviewed all five commits (`ab25987` through `421e69e`) and the diff against `master`. Compared every new drill entry (148) and visual question (`dt-visual-054`–`089`, 36) with its manifest caption and official guidance. Personally viewed **all 184 new images** in six rendered contact sheets, with additional enlargement of the zone-entry image. No identifiable people or real organisation logos observed; the zone-entry placeholder is documented as fictional in the repository.

All 184 new records have OGL v3 attribution and official government asset sources; all local SHA-256 hashes match. Fetched all 18 distinct source pages successfully, confirmed their OGL notices and presence of the referenced assets and caption text (caption association caveat above). Inspected all 114 new SVGs. No additional keyed-meaning mismatch found. The 308-question bank has four textually distinct options per question. `QuestionMedia.tsx`'s new reference labels and KYTS fallback links work as intended.

| Required command | Result |
| --- | --- |
| `npm ci` | PASS; 326 packages installed; audit warnings above |
| `npm test` | PASS; 10 theory tests + 5 hazard tests |
| `npm run test:browser` | PASS; 9/9 tests, including mobile image decoding |
| `npm run build` | PASS; TypeScript and Vite; warnings above |

Findings only. No source edits, commits, pushes, merges or deployment performed.
