# Independent science review — 26 October 2026

## Ranked summary

**Must fix**

1. Repair learning links: **142/161 distinct URLs (88.2%) return 404**; several surviving links teach unrelated subjects. All 100 added questions point to the same Cell Biology hub, including chemistry and physics.
2. Correct the defective questions and explanations below, particularly melting, concentration, heat capacity, refraction and radiation distractors. Do not treat an ambiguous question as evidence of learner weakness.
3. Prevent silent loss of progress: failed loads become empty histories, failed saves appear successful, concurrent clients overwrite each other, and full-history uploads eventually exceed the server's 2 MiB limit.
4. Separate Foundation Trilogy from Higher-tier and separate-science content. Restore missing core topics, equation applications and practical-method practice before presenting this as comprehensive preparation.

**Should fix**

- Skipped science questions disappear from both unseen and weak-question practice; reported accuracy can contradict the quiz score.
- Correct expired-session handling and the development API port mismatch.
- Reduce answer-length clues, near duplicates and the disproportionate emphasis on physics energy. Add structured calculations, graphs, diagrams and experimental reasoning.
- Guard browser-history navigation against missing quiz/review state.

**Nice to have**

- Label random quizzes as practice, distinguish padded unseen sessions, and use topic-specific links with automated status **and relevance** checks.
- Improve broad wording and explain assumptions rather than teaching simplified rules as universal facts.

## Scope, evidence and limitations

Read **all 292 questions, all four options, keys and explanations**: 75 biology, 110 chemistry, 107 physics. Recalculated numerical answers and checked units. No arithmetic/key-index error was found in the straightforward calculations with adequate stated assumptions; defective premises are identified separately below. Question IDs below identify records in `src/data/biology.ts`, `src/data/chemistry.ts` or `src/data/physics.ts` according to their prefixes. Unlisted questions had no material issue identified in this review; that is not a guarantee of acceptance by a different equivalence-exam provider.

Primary reference: [AQA 8464 specification, version 1.3 October 2026](https://cdn.sanity.io/files/p28bar15/green/a18ef3788335dcf75e16c61df6a5149710ec04e8.pdf), linked from the [current AQA specification page](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification). Section numbers below refer to it. Reviewed the subject-content and practical headings against the actual bank, with targeted checks of tier restrictions and equations.

**`papers/` does not exist in this checkout** and no PDFs are tracked. Local paper inventory, missing pairs and filenames therefore could not be audited. As a public cross-check, fetched the [June 2023 Physics 1 Foundation mark scheme](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-8464P1F-MS-JUN23.PDF): Q2.3 explicitly uses 9.8 N/kg, Q3.1 applies specific heat capacity, Q4.3 assesses an experimental method, and Q5.3 is an extended response. This is a limited public substitute, not a review of the absent collection. No authenticated API, `server/data`, secrets or real-user progress was accessed. Runtime reproductions used synthetic in-memory data only. No source changes, commits, pushes or publishing.

## 1. Wrong or unsupported keyed answers

These are content defects, not merely out-of-tier content. Some require rewriting the question rather than choosing a different existing option.

| File / question ID | What the bank says | Correction and reason |
|---|---|---|
| `chemistry.ts` / `chem-quantitative-006` | 10 g dissolved in **2 dm³ of water** gives exactly 5 g/dm³. | The denominator is the **final solution volume**, not the starting solvent volume (§5.3.2.5). Say “made up to 2 dm³ of solution”; otherwise an exact concentration cannot be calculated. |
| `physics.ts` / `phys-particle-model-012` | During melting, particles “gain energy and vibrate more”; explanation says they gain kinetic energy. | Separate warming the solid from melting it. During melting at the melting point, temperature and average kinetic energy remain constant; supplied energy increases potential energy and allows particles to leave fixed positions (§6.3.2.3). The key conflates these stages and conflicts with `phys-particle-model-004`. |
| `physics.ts` / `phys-energy-phys-021` | Copper “heats up faster than water for the same energy input”, from specific heat capacities alone. | Require **equal masses and equal heating powers**, with comparable/negligible losses, to compare heating rates. For equal masses receiving equal energy, copper has the larger **temperature rise**. Energy input alone says nothing about elapsed time or mass: a sufficiently large copper sample can warm less than a small water sample. |
| `biology.ts` / `bio-ecology-011` | Burning trees releases “stored CO2”. | Trees store **carbon in organic compounds**; combustion converts it into CO₂. The explanation already says stored carbon, so bring the key into agreement (§4.7.3.4). |
| `biology.ts` / `bio-infection-005` | Antibiotics fail against viruses “because viruses live inside cells”. | The location is not the defining reason: viruses lack the bacterial structures/processes targeted by antibiotics. Some bacteria also live inside cells. Replace the causal clause; retain the correct fact that antibiotics do not treat viral infections. AQA §4.3.1.8 distinguishes antibiotic specificity from the difficulty of treating intracellular viruses; [CDC](https://www.cdc.gov/antibiotic-use/about/) confirms the bacterial/viral distinction. |

## 2. Ambiguity and wording that can punish a defensible answer

| File / question IDs | Problem and precise repair |
|---|---|
| `physics.ts` / `phys-atomic-structure-phys-005` | “Most penetrating” includes **neutron** as a distractor. Gamma is the expected comparison against alpha/beta, not a universal winner against neutrons. Penetration depends on material and energy. Remove neutron or specify the comparison; [NRC](https://www.nrc.gov/facilities-safety/radiation-protection/radiation-and-its-health-effects/radiation-basics) describes the exceptional penetration and different shielding of neutrons. |
| `physics.ts` / `phys-atomic-structure-phys-013` | Asks what Am-241 emits, with alpha keyed and gamma marked wrong. It emits both: [EPA](https://www.epa.gov/radiation/radionuclide-basics-americium-241). Ask which emission is **used to ionise the air in the detector**. |
| `physics.ts` / `phys-waves-005` | Air-to-glass light is always said to bend towards the normal. At normal incidence it travels straight, another offered option. Specify non-zero incidence angle. |
| `physics.ts` / `phys-energy-phys-001` | A moving car has kinetic energy, but normally also a chemical store in fuel/battery, another option. Ask which store it has **because it is moving**. |
| `physics.ts` / `phys-forces-013` | “The elephant has bigger feet” is also a defensible area-based explanation. The pressure comparison needs masses and contact areas, or an explicit assumption; replace the overlapping distractor. |
| `chemistry.ts` / `chem-analysis-002` | One chromatographic spot is presented as proof of purity. Components can co-migrate or fail to separate in that solvent. Ask what one spot **suggests**, or state successful separation of all components. The explanation's universal claim that mixtures give multiple spots also needs qualification. |
| `chemistry.ts` / `chem-rates-010` | Counting bubbles over time can estimate gas-production rate too; the gas-syringe answer is more quantitative, not the only possible method. Ask which method measures **volume at timed intervals**. |
| `chemistry.ts` / `chem-rates-012` | “A line that goes downward” can be a rapid mass-loss reaction, not a wrong answer. Specify product gas volume versus time and compare positive gradients, preferably with an actual graph. |
| `physics.ts` / `phys-forces-014` | Moment calculation omits **perpendicular** distance to the line of action. 12 N m is valid only under that assumption. Add it or draw the geometry. Also outside Trilogy; see below. |
| `physics.ts` / `phys-particle-model-007` | A sealed container need not have fixed volume. Say **sealed rigid container** for the temperature/pressure inference. |
| `physics.ts` / `phys-electricity-010` | 5 A is the expected school-model choice for a 4 A operating current; “which fuse should be fitted?” lacks cable rating and starting-current assumptions. State the simplified selection rule. The explanation “a 13 A fuse wouldn't protect the circuit” is too absolute: it can protect suitably rated wiring against sufficiently large fault currents. |
| `chemistry.ts` / `chem-energy-changes-008` | The hump/peak is confused with activation energy. Activation energy is the **vertical difference from reactant level to the peak**, not the peak's absolute energy. Use a labelled arrow. |
| `physics.ts` / `phys-energy-phys-024` | Reliability comparison treats all renewables like wind/solar; hydroelectric storage, biomass and geothermal do not share that weather dependence. Specify wind and solar in the question. |

Lower-priority wording: `bio-inheritance-001` should say a **typical nucleated diploid** human cell (mature red cells have no nucleus); `bio-ecology-009` should say 8 daisies is the **mean of representative quadrats**; `phys-atomic-structure-phys-004` should say original **undecayed nuclei** (decay does not make all atoms disappear); `phys-waves-003/010` should specify sound **in air**; `bio-bioenergetics-003` should ask about the GCSE model's limiting factors rather than universally asserting oxygen has no effect on photosynthesis. `bio-bioenergetics-009` is the better phrasing.

## 3. Other misleading explanations

| File / question IDs | Explanation correction |
|---|---|
| `physics.ts` / `phys-energy-phys-009` | “g = 10 N/kg at Foundation level” is false as a tier rule. Use the value supplied, commonly 9.8 N/kg. June 2023 P1F Q2.3 uses 9.8. `phys-forces-010` is fine because it explicitly supplies 10. |
| `chemistry.ts` / `chem-bonding-012` | Poly(ethene) is called “a simple molecular substance”. It consists of **very large polymer molecules**; distinguish this from small simple molecules (§5.2.2.4–5). Covalent bonding is the correct key. |
| `chemistry.ts` / `chem-chemical-changes-013` | “The lower the [pH] number, the stronger the acid” confuses acid strength with concentration. Lower pH means higher hydrogen-ion concentration; strength concerns degree of ionisation. |
| `chemistry.ts` / `chem-organic-005/010` | “High temperatures **or** a catalyst” implies a catalyst replaces heating. Catalytic cracking uses heated/vaporised feedstock and a hot catalyst; steam cracking also requires high temperature (§5.7.1.4). |
| `physics.ts` / `phys-energy-phys-016` | Food's useful chemical energy is released by **respiration**, not simply digestion. Digestion makes smaller soluble molecules available. |
| `physics.ts` / `phys-particle-model-006` | “Energy required” for solid→liquid “or vice versa” obscures direction: melting absorbs energy; freezing **releases** the same magnitude per kg. |
| `physics.ts` / `phys-atomic-structure-phys-010` | Gamma is described as “only stopped” by thick lead/concrete. Say **attenuated/reduced**, rather than suggesting complete stopping or a universal thickness. |
| `physics.ts` / `phys-energy-phys-018` | Wind turbines “produce no greenhouse gases” needs **during operation**; manufacturing/construction have life-cycle emissions. |
| `biology.ts` / `bio-organisation-010` | Above optimum temperature does not mean every enzyme instantly stops. Activity falls as more enzyme molecules denature; describe the active-site change without an abrupt universal threshold. |

## 4. Foundation Trilogy fit

### Tier and qualification boundaries

These entries are not wrong merely because they are outside the requested scope.

| Classification | IDs / reason |
|---|---|
| **Trilogy Higher only** | `chem-quantitative-004/007/012`: moles/Avogadro constant (§5.3.2.1). `chem-energy-changes-005/007/010`: bond-breaking/making energetics (§5.5.1.3). `phys-forces-008`: momentum (§6.5.5). `phys-electromagnetism-004/008/011`: motor effect, left-hand rule and motor operation (§6.7.2.2–3). |
| **Higher-only component of otherwise relevant material** | `chem-chemical-changes-006` explanation adds electron-transfer redox (§5.4.1.4). `phys-waves-005` combines Foundation ray bending with Higher-tier explanation through wave-speed change (§6.6.2.2). |
| **Tier-demand concern** | `phys-atomic-structure-phys-004` asks for fractional decline after several half-lives: closely matches the Higher-only ratio calculation in §6.4.2.3. Prefer reading/halving a supplied graph for Foundation. Do not automatically exclude `phys-atomic-structure-phys-009`'s simple numerical halving. `bio-inheritance-003/009/010` give parental genotypes but no diagram: probability and interpreting/completing crosses are Foundation, constructing the cross is Higher (§4.6.1.4). Supply a square so the intended demand is clear. |
| **Separate biology, not Trilogy topics** | `bio-homeostasis-007/008/011`: detailed thermoregulation, kidneys and ADH. The general need to regulate temperature/water is Trilogy, but these detailed mechanisms are not in §4.5's assessable sequence. ADH is also Higher within separate biology. |
| **Separate chemistry detail** | `chem-analysis-003/007/009/012`: metal-ion flame tests. `chem-organic-012`: addition-polymerisation mechanism/name. Keep `chem-organic-006`'s basic fact that alkenes make polymers: that **is** Trilogy (§5.7.1.4); detailed addition chemistry is beyond it. |
| **Separate physics detail** | `phys-forces-013/014/015`: pressure equation, moments, gears. `phys-atomic-structure-phys-008`: fission. `phys-waves-013`: ultrasound medical imaging. `phys-electromagnetism-006/007/012`: loudspeaker operation and induction/generator effect. Detailed radiation applications in `phys-atomic-structure-phys-007/013` go beyond the core Trilogy radioactivity sequence. |

Do **not** remove `phys-electromagnetism-005` or `phys-energy-phys-025` merely for mentioning transformers: their basic National Grid purpose is Foundation (§6.2.4.3). Newton's second and third laws are also Foundation; the momentum restriction does not apply to all mechanics.

### Coverage and weighting

Counts are by record, including repeats. Biology **25.7%**, chemistry **37.7%**, physics **36.6%** of the mixed pool. Random selection is uniform over questions, not balanced across subjects/topics. Biology receives appreciably less practice than the other subjects.

| Bank topic(s), in `topics.ts` order | Counts | Material gaps in questions (not an exhaustive list of every absent fact) |
|---|---|---|
| Biology: cell biology | 11 | Prokaryotes, ribosomes, diffusion factors/surface-area-to-volume ratio, exchange surfaces, cell cycle stages and stem-cell applications/risks. |
| Organisation | 11 | **Plant tissues, xylem/phloem, transpiration/translocation**; coronary disease/treatments, health/risk factors/cancer; food tests and enzyme pH investigations. Artery direction is repeated. |
| Infection | 11 | Named measles, HIV, TMV, salmonella and gonorrhoea symptoms/transmission/prevention; drug development and trials. Appearing as a distractor is not substantive coverage. |
| Bioenergetics | 10 | Photosynthesis investigation, graph interpretation, exercise responses/oxygen debt, fuller metabolism applications. Limiting factors and mitochondria are repeated. |
| Homeostasis | 11 | Reproductive hormones/menstrual cycle, contraception, Type 2 diabetes, reaction-time investigation; displaced by kidney/ADH content. |
| Inheritance | 10 | Sexual/asexual reproduction, meiosis, sex determination, polydactyly, selective breeding/genetic engineering, fossils/extinction, classification/three domains. Three near-equivalent inheritance probability items dominate limited space. |
| Ecology | 11 | Abiotic/biotic factors, competition/interdependence, water cycle, transects/environmental distribution; waste/land-use detail and interpreting data. |
| Chemistry: atomic structure; bonding | 13; 12 | Atomic-model evidence/history, periodic-table development, relative atomic mass from isotope abundance, separation methods; ionic conduction, alloys, graphene/fullerenes and structure representations. |
| Quantitative; chemical changes | 12; 13 | Uncertainty, gas-related apparent mass changes; soluble-salt preparation, broader electrolysis products/electrodes, pH measurement. Three quantitative records are Higher-only. |
| Energy changes; rates | 12; 12 | Experimental temperature changes; **reversible reactions and dynamic equilibrium**, numerical mean-rate calculation and actual graphs. Three energy records are Higher-only. |
| Organic; analysis | 12; 12 | Hydrocarbon viscosity/flammability, cracking conditions and equations; formulations, chlorine gas test, chromatography method. Four analysis records instead test flame colours. |
| Atmosphere & resources | 12 | CO, SO₂, nitrogen oxides and particulates/their effects, atmospheric carbon sinks; wastewater treatment, desalination and energy costs, finite resources/recycling. Only 3 questions (`006/007/012`) address using resources. `topics.ts` merges two full specification chapters here. |
| Physics: energy | **25** | Work done, spring-energy equation, power-based efficiency and wider energy-resource comparisons; repeated efficiencies/renewables. |
| Electricity | 13 | Circuit symbols, charge calculation, energy/charge relation, I–V curves, thermistor/LDR/diode, resistance investigation and full series/parallel rules. |
| Particle model | 13 | Latent-heat calculations, density measurement, heating/cooling graph interpretation. |
| Atomic structure | 13 | Atomic-model evidence, nuclear equations/alpha changes, activity/count-rate measurement and radioactive randomness; repeated beta/penetration/contamination items. |
| Forces | **18** | Scalars/vectors, distance/displacement, speed/acceleration calculations and motion graphs, work done, Hooke's law/elasticity. Several entries instead assess non-Trilogy mechanics. |
| Waves | 13 | Amplitude/wavelength measurement, period, wave practicals, IR surface investigation, broader spectrum applications. No actual ray/trace diagrams. |
| Electromagnetism | 12 | Attraction/repulsion, permanent versus induced magnets, compass/field plotting, straight-wire field and factors. Half this topic (`004/006/007/008/011/012`) is Higher or separate-science content. |

The largest topic has **2.5×** the records of the smallest (25 versus 10). Energy alone is **23.4% of physics**, versus 11.2% electromagnetism; energy+forces are **40.2%**. These are measurable imbalances, not a claim that AQA demands identical topic weights. Nearly uniform counts elsewhere hide major subtopic omissions. Exact repeated stems occur in nine groups (18 records; one group legitimately spans chemistry/physics isotopes), with additional near duplicates.

### All 21 required practicals

**None has comprehensive method/variables/controls/measurement/error/data-analysis coverage.** The distinction below prevents counting a related definition as a practical question.

| AQA practical | Bank coverage |
|---|---|
| 1 Microscopy | Magnification calculation `bio-cell-biology-010` only; slide preparation, focusing, drawing/scales missing. |
| 2 Osmosis in plant tissue | Osmosis definition only; mass-change investigation missing. |
| 3 Food tests | **Missing** reagents, methods and positive results. |
| 4 pH and amylase | Enzyme/denaturation theory only; iodine timed-sampling/pH-controlled method missing. |
| 5 Light and photosynthesis | Limiting-factor theory only; pondweed/light-distance investigation missing. |
| 6 Human reaction time | **Missing** investigative method and results. |
| 7 Ecology sampling | `bio-ecology-006/009` give quadrat identification and scaling; repeats/random sampling/transects/environmental distribution underdeveloped. |
| 8 Soluble-salt preparation | **Missing** preparation, filtration and crystallisation method. |
| 9 Aqueous electrolysis with inert electrodes | One copper-electrode example (`chem-chemical-changes-011`), not the specified inert-electrode investigation. |
| 10 Temperature changes in reactions | Exothermic/endothermic theory only; measurement/control investigation missing. |
| 11 Concentration and reaction rate | Gas syringe and verbal curve questions partially relevant; comparison method, timed observations and numerical/graph analysis incomplete. |
| 12 Chromatography | Spot/purity and Rf questions only; baseline/solvent setup, method and identifying mixtures incomplete. |
| 13 Water analysis/purification | Filtration/sterilisation recall; pH/dissolved-solids tests and distillation practical missing. |
| 14 Specific heat capacity | Definition/calculations only; block/heater/temperature/energy measurements and losses missing. |
| 15 Resistance | Ohm's-law recall/calculation only; wire-length and series/parallel investigations missing. |
| 16 I–V characteristics | **Missing** resistor/lamp/diode investigative method and curves. |
| 17 Density | Definition/calculation only; regular/irregular solids and liquid measurement methods missing. |
| 18 Force and extension | **Missing** Hooke's-law investigation and graph. |
| 19 Force, mass and acceleration | F=ma recall/calculation only; trolley investigation and controls missing. |
| 20 Waves | v=fλ calculation only; measuring frequency/wavelength/speed in ripple tank/string missing. |
| 21 Infrared surfaces | **Missing** comparing absorption/emission by surfaces. |

### Physics equations without a question

Against Appendix B's traditional **recall-and-apply** list, no question directly asks the learner to recall or use: **W=Fs, F=ke, s=vt, a=Δv/t, P=W/t, efficiency=useful power/total power, Q=It, E=QV, P=I²R**. The last appears in explanations (`phys-electricity-013`, `phys-energy-phys-025`) but is not itself tested. Current as charge per second is described, but there is no Q=It calculation. Energy-based power/efficiency, V=IR, P=VI, E=Pt, density, KE, GPE, weight, F=ma and v=fλ are represented.

Also missing from the **select-and-apply** Foundation list: **v²−u²=2as, Ee=½ke², T=1/f, E=mL**. ΔE=mcΔT is covered. Momentum and F=BIl are not Foundation gaps.

**Exam-arrangement caveat:** AQA supplies full physics equation sheets for 2026/2027 and confirms continuing provision from 2028; the brief's “must recall” premise is not literally the current AQA exam arrangement. Application and rearrangement still matter. The university equivalence provider's policy is unknown; do not assume it supplies the same sheet. [AQA notice](https://www.aqa.org.uk/news/gcse-maths-sciences-formulae-equation-sheets-2027-28).

## 5. Measured giveaway patterns

Method: all 292 records, four options each; compare Unicode-character lengths including spaces/punctuation. “Joint longest” includes ties. Expected accuracy chooses uniformly between tied longest options, rather than crediting every tie as correct.

| Bank | Unique longest is correct | Correct is longest, ties included | Expected score from longest-option guessing |
|---|---:|---:|---:|
| Biology, n=75 | 31 (41.3%) | 44 (58.7%) | 47.2% |
| Chemistry, n=110 | 51 (46.4%) | 67 (60.9%) | 51.7% |
| Physics, n=107 | 44 (41.1%) | 64 (59.8%) | 47.7% |
| **All, n=292** | **126 (43.2%)** | **175 (59.9%)** | **49.1%**, versus 25% random |

Case-insensitive whole-word checks across the 1,168 options:

- **always:** 4 occurrences in wrong options, 0 in correct options; 100% wrong, across 3/292 questions (1.0%).
- **never:** 1 wrong, 0 correct; 100% wrong, across 1/292 questions (0.3%).
- **only:** 10 wrong, 3 correct; 76.9% wrong, across 11/292 questions (3.8%). This is close to the 75% wrong-option base rate, unlike always/never; the latter samples are small.
- Stored correct positions: A 13/292 (4.5%), B 165 (56.5%), C 103 (35.3%), D 11 (3.8%). **Not a live position exploit:** `shuffleOptions` randomises options and updates the key. Length/word clues survive that shuffle.

## 6. Link audit

Fetched every one of the **161 distinct `learnMoreUrl` values** with GET, redirects enabled, a browser User-Agent and 15-second timeout. Results: **142 HTTP 404; 19 HTTP 200; zero timeouts; zero generic redirects observed**. The previous note's dead-guide count was corroborated, but its “working” list did not check relevance. Status alone is insufficient.

The shared live URL `https://www.bbc.co.uk/bitesize/topics/z2mttv4` is **Cell biology**, used by 100/292 records (34.2%); only two of those records are cell-biology questions, so **98 point to the wrong topic**. This is not a generic redirect.

Other live-but-mismatched families (all under `https://www.bbc.co.uk/bitesize/guides/`):

| Guide / revision suffixes | Actual page subject |
|---|---|
| `z2gjtv4` / 1,2,3,4,5,6 | Energy/heating, conductivity, insulation and specific heat capacity; used by biology ecology records. |
| `z2hp3k7` / 1,5,6 | **Art and Design: finding inspiration**. |
| `z3hb97h` / 1,3,4,7 | **Maths: quadratic equations**, including Higher methods. |
| `z2kmk2p` / 1 | Chromosomes and DNA, not a generic cell-division treatment. |
| `zgvq4qt` / 1 | Circuit symbols, not a generic electricity explanation. |
| `zpqpqhv` / 1,2,5 | Cell measurement, cell size, microscopes respectively; review question-to-page alignment. |

### Verified replacements

These topic hubs returned 200 with matching titles, and were found from the live [AQA Trilogy hub](https://www.bbc.co.uk/bitesize/examspecs/z8r997h). They are topic-level starting points, not individually verified replacements for every explanation. Some include Higher material; choose suitable subsections.

- Biology: [cells](https://www.bbc.co.uk/bitesize/topics/z2mttv4), [organisation](https://www.bbc.co.uk/bitesize/topics/zwj22nb), [infection](https://www.bbc.co.uk/bitesize/topics/z9kww6f), [bioenergetics](https://www.bbc.co.uk/bitesize/topics/zgr997h), [homeostasis](https://www.bbc.co.uk/bitesize/topics/zyybb82), [inheritance](https://www.bbc.co.uk/bitesize/topics/zvymrmn), [ecology](https://www.bbc.co.uk/bitesize/topics/zxxhh39).
- Chemistry: [atoms/periodic table](https://www.bbc.co.uk/bitesize/topics/zcckk2p), [bonding](https://www.bbc.co.uk/bitesize/topics/z33rrwx), [quantitative](https://www.bbc.co.uk/bitesize/topics/zb4fjfr), [chemical changes](https://www.bbc.co.uk/bitesize/topics/zt6ppbk), [energy changes](https://www.bbc.co.uk/bitesize/topics/z27xxfr), [rates/equilibrium](https://www.bbc.co.uk/bitesize/topics/zwdqqhv), [organic](https://www.bbc.co.uk/bitesize/topics/z9488mn), [analysis](https://www.bbc.co.uk/bitesize/topics/zgbccj6), [atmosphere](https://www.bbc.co.uk/bitesize/topics/zy43p9q), [resources](https://www.bbc.co.uk/bitesize/topics/zptnng8).
- Physics: [energy](https://www.bbc.co.uk/bitesize/topics/zkjr6rd), [electricity](https://www.bbc.co.uk/bitesize/topics/zms2g2p), [particles](https://www.bbc.co.uk/bitesize/topics/z3ybb82), [atoms](https://www.bbc.co.uk/bitesize/topics/zshssrd), [forces](https://www.bbc.co.uk/bitesize/topics/ztmttv4), [waves](https://www.bbc.co.uk/bitesize/topics/zsrndnb), [magnetism](https://www.bbc.co.uk/bitesize/topics/zwkww6f).

The earlier note's suggested homeostasis URL `https://www.bbc.co.uk/bitesize/topics/z79mnk7` actually returns **Podcasts**; do not adopt it.

### Complete 404 inventory

For compactness, each row denotes every exact URL `https://www.bbc.co.uk/bitesize/guides/{guide}/revision/{number}` for the listed numbers. No unlisted revision number is implied.

| Guide | Revision numbers returning 404 |
|---|---|
| `z2982hv` | 1, 2, 3, 4, 5, 7, 8, 9 |
| `z2d4jxs` | 1 |
| `z2gjtv4` | 7 |
| `z2h7hyc` | 1, 2, 3, 4, 5, 6 |
| `z2m6fg8` | 3, 4, 5 |
| `z2m9rwx` | 1 |
| `z2mpmsg` | 1, 2, 3, 4 |
| `z2p3jty` | 1 |
| `z2wdqhv` | 1, 2, 3, 4 |
| `z32hsbk` | 1, 3, 5 |
| `z3bqtfr` | 1, 2, 5 |
| `z3g8d2p` | 1, 4, 5 |
| `z3hq6yc` | 1 |
| `z3s4k2p` | 1 |
| `z7gjtv4` | 1 |
| `z7rjhv4` | 1, 2, 3, 4, 5, 7, 8 |
| `z8b9jty` | 1, 2, 3, 4, 5, 6 |
| `z8g9kqt` | 1, 2, 3, 5 |
| `z8xtfcw` | 1, 3, 4 |
| `z8yk87h` | 1, 2 |
| `z9bm6yc` | 1, 2, 3, 4, 5, 6 |
| `z9hgk2p` | 2, 3, 4, 5, 6, 7 |
| `z9hyvcw` | 1, 2, 4 |
| `z9qjf82` | 1, 2, 3 |
| `zbfnymn` | 1, 3, 4 |
| `zcbxdsg` | 1, 2, 3 |
| `zg6wjhv` | 1, 2, 4, 6 |
| `zgf2pv4` | 1, 2 |
| `zggjq6f` | 1, 2 |
| `zghp7p3` | 1, 3 |
| `zpwmxsg` | 1, 3, 5, 6 |
| `zqb2pv4` | 1, 5 |
| `zqbrqhv` | 1, 4 |
| `zqf9cwx` | 1, 2, 4 |
| `zqjsgk7` | 1 |
| `zqp9fcw` | 1, 2, 5 |
| `zs3yvcw` | 1, 4 |
| `zs86y4j` | 1, 2, 3 |
| `zsbbkqt` | 1 |
| `zt2hpv4` | 2 |
| `ztgwjhv` | 1 |
| `ztwkw6f` | 1, 2, 3 |
| `zxf9cwx` | 1, 2 |
| `zxj4qty` | 1 |
| `zxkjv9q` | 1, 4 |
| `zxxng82` | 1, 2 |
| `zy3jv9q` | 1, 3, 4, 5 |
| `zy8n7p3` | 1, 2, 3, 4, 5, 6 |
| `zyhbkqt` | 1, 3 |

## 7. Science-path code bugs

Only concrete failures are listed. Static findings are labelled as such; no production API writes were made.

| Priority / location | Concrete failure scenario | Fix |
|---|---|---|
| **Must fix — failed load destroys history on next save.** `src/lib/storage.ts:53`, `src/lib/storage.ts:56`, `src/store/progressStore.ts:45`, `server/index.js:161` | A temporary GET failure returns empty default progress and sets `loaded=true`. Once connectivity recovers, completing a science paper POSTs that empty-history-plus-one-attempt snapshot over the existing history. Mocked HTTP 500 reproduced `loaded=true, attempts=[]`. | Distinguish “no existing record” from failed load; keep last known progress, show retry, and prohibit replacement writes until hydration succeeds. |
| **Must fix — failed science saves are invisible.** `src/store/progressStore.ts:117`, `src/lib/storage.ts:61`, `src/views/QuizView.tsx:58` | Quiz submission updates the store and opens results without awaiting persistence. Offline/401/413/500 responses are only logged. Reloading loses the apparently completed paper. Static control flow confirmed; unlike strict saves used elsewhere, science calls use `strict=false`. | Await an acknowledged save or explicitly show pending/failed state with retry and durable local recovery; make retries idempotent by attempt ID. |
| **Must fix — finite server limit versus unbounded history.** `server/index.js:16`, `server/index.js:24`, `src/store/progressStore.ts:110` | Each save sends all attempts including entire question text/options/explanations/URLs. Synthetic repetitions of one valid 20-question science attempt exceeded 2 MiB at **196 attempts (2,100,739 UTF-8 bytes)**. Express then rejects every further whole-history save. Exact threshold varies with questions and other progress. | Save attempts incrementally, paginate history and store immutable question-version references or compact snapshots. A larger limit alone only postpones failure; surface 413 errors. |
| **Must fix — concurrent clients lose attempts.** `server/index.js:155`, `server/index.js:161`, `src/store/progressStore.ts:118` | Two tabs/devices load history H. One completes A and saves H+A; the other completes B and saves H+B. The second write silently erases A. The same replacement design permits an older in-flight snapshot to arrive last. This is a direct consequence of the POST contract, established statically. | Use append-by-attempt-ID plus optimistic version checks/merging for shared fields. Client request ordering alone does not fix two devices. |
| **Should fix — session expiry does not log the UI out.** `src/lib/storage.ts:47`, `src/store/progressStore.ts:45`, `src/App.tsx:43` | A 401 removes browser storage entries but leaves Zustand `userName/sessionToken` intact. Hydration marks empty progress loaded, so the UI remains signed in; later requests have no bearer token. In-memory reproduction confirmed store token still present, storage token null, `loaded=true`. | Clear the app auth state on authentication failure, reset account-bound progress, and render login. Also handle 401 from saves. |
| **Should fix — skipped science questions fall out of remediation.** `src/lib/questionStats.ts:60`, `src/lib/questionStats.ts:156`, `src/lib/questionStats.ts:169` | Reproduction: a 20-question biology paper with one correct answer and 19 nulls gives score 1/20 and 19 wrong IDs, but **0 weak IDs and 0 unseen IDs**; statistics count just one correct attempt, giving 100% accuracy. Skipped unfamiliar questions are excluded from weak practice and already considered seen. | Count submitted skips consistently with scoring, or explicitly track skipped questions and include them in remediation; label answered-only accuracy if retained. |
| **Should fix — default development commands cannot reach the API.** `src/lib/storage.ts:3`, `server/index.js:14`, `package.json:7`, `vite.config.ts:4` | With no PORT override, `npm run dev` starts Express on **3000**, while login/progress requests target **3001**. Vite has no proxy correcting this. Login fails even when both processes start. Static configuration mismatch. | Use one configured API port or a Vite `/api` proxy to the actual server, shared by login/progress/export. |
| **Should fix — browser history restores a view without its required state.** `src/lib/history.ts:35`, `src/store/appStore.ts:117`, `src/views/QuizView.tsx:85`, `src/views/ResultsView.tsx:27` | Start a subject quiz, use Home and confirm leaving, wait for the 300 ms reset, then browser Back: the old `quiz` entry is restored with `activePaper=null`, rendering an empty quiz body. Likewise an old results entry can be revisited after quiz state has been cleared. History stores only view names, not restorable attempt/paper identity. Static trace through handlers. | Validate target-state prerequisites and route to Home/history when missing; store completed attempt IDs for results routes. |

Question selection/scoring checks: subject/topic filtering keeps science papers in the selected subject; mixed science Home passes a science-only pool. The option shuffle remaps the key correctly, scoring uses shuffled keys, and attempts retain those shuffled options for review. No additional scoring arithmetic defect was identified. `PaperSelectView.tsx` offers generated topic/random/unseen/weak quizzes, **not actual AQA past-paper selection**: there is no year/paper/tier picker or PDF integration to audit. Implement that separately if intended; this is absent functionality, not a claimed broken PDF route.

Unseen selection intentionally pads with random seen questions when fewer than 20 remain (`src/lib/paperGenerator.ts:88`); its “least-attempted” comment is inaccurate. With one unseen question the “Unseen Questions” paper is 95% seen. This is a misleading mode label/selection policy, not a loss of the unseen question: the implementation retains all remaining unseen questions. Prefer a shorter paper or clearly label the mix.

## 8. Validation results

- **`npm ci`: passed**, installed 326 packages. Installer reported 42 dependency vulnerabilities (3 low, 19 moderate, 18 high, 2 critical). No dependency changes or audit-fix commands were made; exploitability was not assessed in this science review.
- **`npm test`: passed**, 8 main tests plus 5 hazard tests (13 total). Only limited shared/science behaviour is covered; passing does not validate science facts.
- **`npm run test:browser`: passed**, **9/9 in 22.0 seconds**. These mostly exercise driving/shared UI and mock API responses; they do not establish real server persistence reliability or science correctness. An earlier attempt to suppress output files with `--output=/dev/null` failed before tests with ENOTDIR; the subsequent normal required command passed.
- Additional checks were run without writing test source: in-memory bundling/imports and synthetic attempts reproduced skipped-question statistics, payload growth and failed-load/auth behaviour. Public specification/PDF content was streamed into memory. URL checks covered all distinct science links and fetched candidate replacements.
- Only `.codex-task/REPORT.md` was authored. Required dependency installation and test execution generated ignored dependency/test artefacts. Source/data/docs and lockfile remain unchanged. No commit, push, deployment or publication was performed.
