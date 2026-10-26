# Foundation science content

The bank targets AQA Combined Science: Trilogy (8464), Foundation. New material is original practice, not copied exam-paper text or a complete substitute for the specification.

## Scope and history

`Question.scope` is `higher` or `separate` for the 28 reviewed exclusions. `getAllQuestions()` retains every record; `getPracticeQuestions()` supplies the default view pools. The generator independently filters its input, including fallback padding. Topic statistics and unseen IDs filter against current metadata, so old snapshots without scope tags cannot reintroduce excluded records. Completed attempt snapshots are unchanged.

## Evidence

- [AQA 8464 specification, version 1.3 October 2026](https://cdn.sanity.io/files/p28bar15/green/a18ef3788335dcf75e16c61df6a5149710ec04e8.pdf): checked practical-method descriptions and Foundation equation list.
- [AQA specification landing page](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification).
- The supplied review determines the explicit Higher/separate exclusions.
- BBC topic hubs below were fetched with GET on 26 October 2026; all returned 200 and matching page titles. Links are topic starting points and may contain sections beyond Foundation.

The offline audit manifest is `tests/fixtures/science-content.json`. Unit tests make no network calls. Recheck HTTP status **and page title/topic** when replacing a URL; a 200 response alone is insufficient.

## Required practical mapping

| Practical | Method/data question |
|---|---|
| 1. Microscopy | `bio-cell-biology-012` |
| 2. Osmosis in plant tissue | `bio-cell-biology-013` |
| 3. Food tests | `bio-organisation-012` |
| 4. pH and amylase | `bio-organisation-013` |
| 5. Light and photosynthesis | `bio-bioenergetics-011` |
| 6. Human reaction time | `bio-homeostasis-012` |
| 7. Ecology sampling | `bio-ecology-012` |
| 8. Soluble-salt preparation | `chem-chemical-changes-014` |
| 9. Aqueous electrolysis with inert electrodes | `chem-chemical-changes-015` |
| 10. Reaction temperature changes | `chem-energy-changes-013` |
| 11. Concentration and rate | `chem-rates-013` |
| 12. Chromatography | `chem-analysis-013` |
| 13. Water purification | `chem-atmosphere-013` |
| 14. Specific heat capacity | `phys-energy-phys-026` |
| 15. Resistance | `phys-electricity-014` |
| 16. I–V characteristics | `phys-electricity-015` |
| 17. Density | `phys-particle-model-014` |
| 18. Force and extension | `phys-forces-019` |
| 19. Force, mass and acceleration | `phys-forces-020` |
| 20. Waves | `phys-waves-014` |
| 21. Infrared surfaces | `phys-waves-015` |

Each practical has at least one method or measurement question; this does not claim comprehensive coverage of every step, control or possible error.

## Equation mapping

| Application | Question |
|---|---|
| W=Fs | `phys-forces-021` |
| F=ke | `phys-forces-022` |
| s=vt | `phys-forces-023` |
| a=dv/t | `phys-forces-024` |
| P=W/t | `phys-energy-phys-027` |
| efficiency-power | `phys-energy-phys-028` |
| Q=It | `phys-electricity-016` |
| E=QV | `phys-electricity-017` |
| P=I2R | `phys-electricity-018` |
| v2-u2=2as | `phys-forces-025` |
| Ee=halfke2 | `phys-energy-phys-029` |
| T=1/f | `phys-waves-016` |
| E=mL | `phys-particle-model-015` |

## Verified learning links

| HTTP | Topic page title | URL |
|---|---|---|
| 200 | Energy changes - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/z27xxfr |
| 200 | Cell biology - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/z2mttv4 |
| 200 | Bonding, structure and the properties of matter - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/z33rrwx |
| 200 | Particle model of matter - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/z3ybb82 |
| 200 | Organic chemistry - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/z9488mn |
| 200 | Infection and response - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/z9kww6f |
| 200 | Quantitative chemistry - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zb4fjfr |
| 200 | Atomic structure and the periodic table - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zcckk2p |
| 200 | Chemical analysis - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zgbccj6 |
| 200 | Bioenergetics - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zgr997h |
| 200 | Energy - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zkjr6rd |
| 200 | Electricity - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zms2g2p |
| 200 | Using resources - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zptnng8 |
| 200 | Atomic structure - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zshssrd |
| 200 | Waves - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zsrndnb |
| 200 | Chemical changes - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zt6ppbk |
| 200 | Forces - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/ztmttv4 |
| 200 | Inheritance, variation and evolution - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zvymrmn |
| 200 | The rate and extent of chemical change - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zwdqqhv |
| 200 | Organisation - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zwj22nb |
| 200 | Magnetism and electromagnetism - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zwkww6f |
| 200 | Ecology - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zxxhh39 |
| 200 | Chemistry of the atmosphere - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zy43p9q |
| 200 | Homeostasis and response - GCSE Combined Science - BBC Bitesize | https://www.bbc.co.uk/bitesize/topics/zyybb82 |

The combined atmosphere/resources topic uses the resources hub for water treatment, sustainability, life-cycle assessment and distillation. The cell-biology hub is restricted to cell biology.

## Visuals and regression checks

Four original SVG assets supply two completed Punnett squares, a reaction profile with an activation-energy arrow, and plotted decay data. Alt text preserves the evidence if an image cannot load. Science diagrams have their own attribution; driving image attribution is unchanged.

`npm test` checks the full science bank, URL relevance mapping/denylist, required coverage, longest-answer percentage including ties, numerical equation answers, selection modes and denominators with legacy attempts. `npm run test:browser` additionally checks all five illustrated science records on a mobile viewport.
