# Fix first

- Rewrite or exclude `bio-bioenergetics-014`: it tests the Higher-only explanation of post-exercise oxygen debt.

## Must fix

**`bio-bioenergetics-014` — Higher content in the Foundation pool.** The question asks why breathing remains fast **after** exercise; the key is “To help repay oxygen debt”, explained as extra oxygen dealing with accumulated lactic acid. This is scientifically consistent, but AQA §4.4.2.2 places that post-exercise explanation in its HT-only paragraph. Foundation includes anaerobic respiration **creating** an oxygen debt, which is a different demand. Rewrite around lactic-acid accumulation during insufficient oxygen supply, or tag this record `higher` and replace its Foundation coverage. It currently has no scope tag, so the otherwise-working filter admits it. See [AQA biology specification §4.4.2.2](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), confirmed against the [current specification, version 1.3, printed page 42](https://cdn.sanity.io/files/p28bar15/green/a18ef3788335dcf75e16c61df6a5149710ec04e8.pdf#page=42).

## Minor items

- **`bio-homeostasis-014`:** the FSH key and egg-maturation explanation are correct for Foundation. Remove the extra clause “and stimulates oestrogen production”; interactions between menstrual-cycle hormones belong to HT-only §4.5.3.3. [AQA biology specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).
- **`chem-chemical-changes-013`:** pH 7 is the intended correct answer. Put “at room temperature” in the question as well as its explanation. Remove the final acid-strength/degree-of-ionisation sentence for Foundation: that distinction is HT-only §5.4.2.5. Neither change requires a different key. [AQA chemistry specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content).
- **`phys-atomic-structure-phys-004` / `decay-graph.svg`:** all four coordinates, scales and the 6-hour key are correct. The connecting line is piecewise straight; a smooth decay curve would avoid implying constant decay rate between observations. This does not invalidate the requested half-life reading.

## Review coverage and calculations

Reviewed every stem, four options, key and explanation for **88 additions + 39 corrections**: biology 44+9, chemistry 20+10, physics 24+20. Independently compared the records with `master`, ignoring URL/scope-only changes; the changed-ID lists match the manifest exactly. No other material key, distractor, explanation or tier defect was identified in these 127 records. The three corrected separate-science records remain appropriately excluded.

All **25 numerical calculations** independently reproduced their keyed values and units, including the excluded questions. Compact audit below; IDs share the displayed prefixes:

| IDs | Recalculation |
|---|---|
| `bio-inheritance-003`, `-009`, `-010` | Completed squares: 1/4 = 25%, 1/4 = 25%, 3/4 = 75% |
| `bio-ecology-009` | 8 ÷ (0.5 m × 0.5 m) × 200 m² = 6,400 daisies |
| `chem-quantitative-006` | 10 g ÷ 2 dm³ = 5 g/dm³ |
| `chem-atomic-structure-015` | 0.75×35 + 0.25×37 = 35.5, dimensionless |
| `chem-rates-014` | 48 cm³ ÷ 20 s = 2.4 cm³/s |
| `phys-atomic-structure-phys-004` | 800→400→200→100: three halvings in 18 h = 6 h per halving |
| `phys-forces-013`, `-014` | 100 N ÷ 0.02 m² = 5,000 Pa; 40 N × 0.3 m = 12 N m |
| `phys-forces-019`, `-021`, `-022` | 15.5−12.0 = 3.5 cm; 30 N × 4 m = 120 J; 10 N ÷ 200 N/m = 0.05 m |
| `phys-forces-023`, `-024`, `-025` | 6 m/s × 15 s = 90 m; (8−2) m/s ÷ 3 s = 2 m/s²; √(2×2 m/s²×9 m) = 6 m/s |
| `phys-energy-phys-027`, `-028`, `-029` | 600 J ÷ 15 s = 40 W; 20 W ÷ 80 W = 25%; ½×100 N/m×(0.20 m)² = 2 J |
| `phys-electricity-016`, `-017`, `-018` | 0.5 A × 40 s = 20 C; 180 J ÷ 30 C = 6 V; (2 A)²×5 Ω = 20 W |
| `phys-waves-014`, `-016` | 20 cm ÷ 5 = 4 cm; 1 ÷ 5 Hz = 0.2 s |
| `phys-particle-model-015` | 0.50 kg × 60,000 J/kg = 30,000 J |

Also checked the numerical comparisons: `phys-energy-phys-021` gives ΔT(copper)/ΔT(water) = 4200/390 ≈ 10.77 under the stated assumptions; `phys-electricity-010` selects 5 A as the smallest offered rating above 4 A. Chromosome counts and the pondweed plateau values are consistent with their keys.

## Filtering, diagrams and validation

- No filtering-code defect found. Selection and padding use the filtered bank; weak IDs are intersected with eligible records. Current-bank IDs control topic statistics even when historical snapshots lack scope. An additional synthetic attempt containing only all 28 excluded records produced zero eligible attempts, 352 unseen questions and no available weak topics, without mutating history.
- Eligible totals: **352 = 116 biology + 119 chemistry + 117 physics**. Every science topic remains nonempty; smallest pool is electromagnetism with 9. Historical paper scores remain historical, while bank statistics use current eligibility.
- All four SVGs parsed successfully. Punnett squares and activation-energy arrow are correct; decay presentation caveat above. No scripts, event handlers, external resource references or embedded active content found. Mobile rendering/accessibility test passed.
- `npm test`: **passed**, 19 main + 5 hazard + 1 server test. The server suite logs an expected oversized-request error while passing.
- `npm run test:browser`: **23/23 passed**.
- `npm run build`: **passed**; non-fatal warnings for old Browserslist data and an 825.81 kB JavaScript chunk.

Reviewed HEAD `7296802`. Findings only: no source edits, commits, pushes, merges or deployment. Only this report was intentionally written; requested test/build commands generated their normal ignored artifacts.
