import type { Question } from '../types';

export const chemistryQuestions: Question[] = [
  // ── atomic-structure (8 questions) ──────────────────────────────────
  {
    id: 'chem-atomic-structure-001',
    subject: 'chemistry',
    topic: 'atomic-structure',
    topicLabel: 'Atoms & Periodic Table',
    question: 'What is the charge of a proton?',
    options: ['+1', '-1', '0', '+2'],
    correctIndex: 0,
    explanation: 'Protons have a relative charge of +1. They are found in the nucleus of an atom alongside neutrons.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p',
  },
  {
  "id": "chem-atomic-structure-002",
  "subject": "chemistry",
  "topic": "atomic-structure",
  "topicLabel": "Atoms & Periodic Table",
  "question": "Where are electrons found in an atom?",
  "options": [
    "Inside the nucleus",
    "In shells around the nucleus",
    "Fixed between neighbouring protons in the nucleus",
    "On circular paths inside the atomic nucleus"
  ],
  "correctIndex": 1,
  "explanation": "Electrons orbit the nucleus in energy levels, also called electron shells. Each shell can hold a specific number of electrons.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zcckk2p"
},
  {
  "id": "chem-atomic-structure-003",
  "subject": "chemistry",
  "topic": "atomic-structure",
  "topicLabel": "Atoms & Periodic Table",
  "question": "What are isotopes?",
  "options": [
    "Different elements, equal mass numbers",
    "Same element, different neutron numbers",
    "Atoms of the same element with different proton numbers",
    "Atoms of different elements with equal electron numbers"
  ],
  "correctIndex": 1,
  "explanation": "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons, giving them different mass numbers.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zcckk2p"
},
  {
    id: 'chem-atomic-structure-004',
    subject: 'chemistry',
    topic: 'atomic-structure',
    topicLabel: 'Atoms & Periodic Table',
    question: 'What does the atomic number of an element tell you?',
    options: [
      'The number of neutrons',
      'The total number of protons and neutrons',
      'The number of protons',
      'The number of electron shells',
    ],
    correctIndex: 2,
    explanation: 'The atomic number is the number of protons in the nucleus of an atom. It defines which element the atom is.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p',
  },
  {
    id: 'chem-atomic-structure-005',
    subject: 'chemistry',
    topic: 'atomic-structure',
    topicLabel: 'Atoms & Periodic Table',
    question: 'What is the electronic configuration of sodium (atomic number 11)?',
    options: ['2, 8, 2', '2, 8, 1', '2, 9', '8, 3'],
    correctIndex: 1,
    explanation: 'Sodium has 11 electrons arranged as 2 in the first shell, 8 in the second shell, and 1 in the third shell (2, 8, 1).',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p',
  },
  {
    id: 'chem-atomic-structure-006',
    subject: 'chemistry',
    topic: 'atomic-structure',
    topicLabel: 'Atoms & Periodic Table',
    question: 'Which group of the periodic table contains the noble gases?',
    options: ['Group 1', 'Group 7', 'Group 0', 'Group 4'],
    correctIndex: 2,
    explanation: 'The noble gases are in Group 0 (sometimes called Group 8 or 18). They have full outer electron shells and are very unreactive.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p',
  },
  {
    id: 'chem-atomic-structure-007',
    subject: 'chemistry',
    topic: 'atomic-structure',
    topicLabel: 'Atoms & Periodic Table',
    question: 'What happens to the reactivity of Group 1 metals as you go down the group?',
    options: [
      'Reactivity decreases',
      'Reactivity stays the same',
      'Reactivity increases',
      'Reactivity first increases then decreases',
    ],
    correctIndex: 2,
    explanation: 'Group 1 metals become more reactive as you go down the group because the outer electron is further from the nucleus and is lost more easily.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p',
  },
  {
  "id": "chem-atomic-structure-008",
  "subject": "chemistry",
  "topic": "atomic-structure",
  "topicLabel": "Atoms & Periodic Table",
  "question": "What happens to the reactivity of Group 7 elements as you go down the group?",
  "options": [
    "Reactivity increases",
    "Reactivity decreases",
    "Reactivity stays the same",
    "Reactivity increases then stays constant"
  ],
  "correctIndex": 1,
  "explanation": "Group 7 elements (halogens) become less reactive going down the group because the outer shell is further from the nucleus, making it harder to gain an electron.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zcckk2p"
},

  // ── bonding (7 questions) ───────────────────────────────────────────
  {
    id: 'chem-bonding-001',
    subject: 'chemistry',
    topic: 'bonding',
    topicLabel: 'Bonding & Structure',
    question: 'What type of bonding involves the transfer of electrons?',
    options: ['Covalent bonding', 'Metallic bonding', 'Ionic bonding', 'Intermolecular bonding'],
    correctIndex: 2,
    explanation: 'Ionic bonding involves the transfer of electrons from a metal atom to a non-metal atom, forming positive and negative ions that attract each other.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z33rrwx',
  },
  {
  "id": "chem-bonding-002",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "In covalent bonding, what happens to electrons?",
  "options": [
    "Electrons are transferred from one atom to another",
    "Electrons are shared between atoms",
    "Electrons are lost by both atoms",
    "Electrons form a mobile sea around positive ions"
  ],
  "correctIndex": 1,
  "explanation": "Covalent bonding involves the sharing of pairs of electrons between non-metal atoms. This allows both atoms to achieve a full outer shell.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},
  {
  "id": "chem-bonding-003",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "Why do ionic compounds have high melting points?",
  "options": [
    "Strong covalent bonds",
    "Strong attractions between opposite ions",
    "Strong attractions hold neutral molecules together",
    "Strong metallic bonds connect a lattice of neutral atoms"
  ],
  "correctIndex": 1,
  "explanation": "Ionic compounds form giant lattices with strong electrostatic forces of attraction between oppositely charged ions. A lot of energy is needed to overcome these forces.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},
  {
  "id": "chem-bonding-004",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "Which of the following describes metallic bonding?",
  "options": [
    "Attraction to shared electron pairs",
    "Attraction between positive and negative metal ions",
    "Positive ions attracted to delocalised electrons",
    "Attraction between separate molecules containing metal atoms"
  ],
  "correctIndex": 2,
  "explanation": "In metallic bonding, metal atoms lose their outer electrons to form a \"sea\" of delocalised electrons. The positive metal ions are held together by their attraction to these electrons.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},
  {
  "id": "chem-bonding-005",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "Why do simple molecular substances have low melting points?",
  "options": [
    "Weak covalent bonds",
    "Weak intermolecular forces",
    "Strong forces hold the molecules in a giant lattice",
    "Mobile electrons weaken the bonds inside molecules"
  ],
  "correctIndex": 1,
  "explanation": "Simple molecular substances have weak intermolecular forces between molecules. It is these weak forces that are overcome when the substance melts, not the strong covalent bonds within the molecules.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},
  {
    id: 'chem-bonding-006',
    subject: 'chemistry',
    topic: 'bonding',
    topicLabel: 'Bonding & Structure',
    question: 'Which substance has a giant covalent structure?',
    options: ['Water (H₂O)', 'Sodium chloride (NaCl)', 'Diamond (C)', 'Oxygen (O₂)'],
    correctIndex: 2,
    explanation: 'Diamond is made entirely of carbon atoms, each bonded to four others in a giant covalent structure. This makes it extremely hard with a very high melting point.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z33rrwx',
  },
  {
  "id": "chem-bonding-007",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "Why can metals conduct electricity?",
  "options": [
    "Mobile positive ions",
    "Mobile delocalised electrons",
    "Neutral atoms carry charge between lattice positions",
    "Bonded pairs of electrons flow between separate molecules"
  ],
  "correctIndex": 1,
  "explanation": "Metals can conduct electricity because they have delocalised electrons that are free to move through the metal structure, carrying electrical charge.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},

  // ── quantitative (7 questions) ─────────────────────────────────────
  {
    id: 'chem-quantitative-001',
    subject: 'chemistry',
    topic: 'quantitative',
    topicLabel: 'Quantitative Chemistry',
    question: 'What is the relative formula mass (Mr) of water (H₂O)? (Ar: H = 1, O = 16)',
    options: ['16', '17', '18', '20'],
    correctIndex: 2,
    explanation: 'Mr of H₂O = (2 × 1) + 16 = 18. You add up the relative atomic masses of all atoms in the formula.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr',
  },
  {
  "id": "chem-quantitative-002",
  "subject": "chemistry",
  "topic": "quantitative",
  "topicLabel": "Quantitative Chemistry",
  "question": "In a chemical reaction, what happens to the total mass of reactants and products?",
  "options": [
    "New bonds create mass",
    "Some mass is destroyed when bonds break",
    "Total mass stays the same",
    "Total mass depends on the speed of the reaction"
  ],
  "correctIndex": 2,
  "explanation": "The law of conservation of mass states that no atoms are created or destroyed in a chemical reaction, so the total mass of products equals the total mass of reactants.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zb4fjfr"
},
  {
    id: 'chem-quantitative-003',
    subject: 'chemistry',
    topic: 'quantitative',
    topicLabel: 'Quantitative Chemistry',
    question: 'What is the relative formula mass (Mr) of carbon dioxide (CO₂)? (Ar: C = 12, O = 16)',
    options: ['28', '44', '56', '32'],
    correctIndex: 1,
    explanation: 'Mr of CO₂ = 12 + (2 × 16) = 12 + 32 = 44.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr',
  },
  {
    id: 'chem-quantitative-004',
    scope: "higher",
    subject: 'chemistry',
    topic: 'quantitative',
    topicLabel: 'Quantitative Chemistry',
    question: 'How many moles of a substance are there if you have 40 g of calcium (Ar = 40)?',
    options: ['0.5 mol', '1 mol', '2 mol', '40 mol'],
    correctIndex: 1,
    explanation: 'Moles = mass ÷ relative atomic mass = 40 ÷ 40 = 1 mol.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr',
  },
  {
    id: 'chem-quantitative-005',
    subject: 'chemistry',
    topic: 'quantitative',
    topicLabel: 'Quantitative Chemistry',
    question: 'What is the unit of concentration when measured as mass per volume?',
    options: ['mol/dm³', 'g/dm³', 'g/mol', 'dm³/g'],
    correctIndex: 1,
    explanation: 'Concentration can be measured in g/dm³ (grams per cubic decimetre). This tells you how many grams of solute are dissolved in each dm³ of solution.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr',
  },
  {
  "id": "chem-quantitative-006",
  "subject": "chemistry",
  "topic": "quantitative",
  "topicLabel": "Quantitative Chemistry",
  "question": "10 g of solute is dissolved and made up to 2 dm³ of solution. What is the concentration?",
  "options": [
    "20 g/dm³",
    "5 g/dm³",
    "0.2 g/dm³",
    "12 g/dm³"
  ],
  "correctIndex": 1,
  "explanation": "Concentration = mass of solute ÷ final volume of solution = 10 ÷ 2 = 5 g/dm³.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zb4fjfr"
},
  {
    id: 'chem-quantitative-007',
    scope: "higher",
    subject: 'chemistry',
    topic: 'quantitative',
    topicLabel: 'Quantitative Chemistry',
    question: 'What is one mole of any substance equal to in terms of particles?',
    options: [
      '6.02 × 10²³ particles',
      '6.02 × 10²² particles',
      '3.01 × 10²³ particles',
      '1.00 × 10²³ particles',
    ],
    correctIndex: 0,
    explanation: 'One mole of any substance contains 6.02 × 10²³ particles (atoms, molecules, or ions). This number is called the Avogadro constant.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr',
  },

  // ── chemical-changes (8 questions) ─────────────────────────────────
  {
    id: 'chem-chemical-changes-001',
    subject: 'chemistry',
    topic: 'chemical-changes',
    topicLabel: 'Chemical Changes',
    question: 'Which of the following metals is the most reactive?',
    options: ['Gold', 'Iron', 'Potassium', 'Copper'],
    correctIndex: 2,
    explanation: 'Potassium is one of the most reactive metals. In the reactivity series it is near the top, above sodium, calcium, magnesium and most other metals.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk',
  },
  {
  "id": "chem-chemical-changes-002",
  "subject": "chemistry",
  "topic": "chemical-changes",
  "topicLabel": "Chemical Changes",
  "question": "How are metals less reactive than carbon extracted from their ores?",
  "options": [
    "Distillation",
    "Reduction with carbon",
    "Dissolving the ore followed by crystallisation",
    "Filtering the ore from a suspension in water"
  ],
  "correctIndex": 1,
  "explanation": "Metals less reactive than carbon can be extracted by heating their oxide with carbon. The carbon removes the oxygen from the metal oxide in a reduction reaction.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
},
  {
    id: 'chem-chemical-changes-003',
    subject: 'chemistry',
    topic: 'chemical-changes',
    topicLabel: 'Chemical Changes',
    question: 'What is the pH of a neutral solution?',
    options: ['0', '7', '14', '1'],
    correctIndex: 1,
    explanation: 'A neutral solution has a pH of 7. Acids have a pH below 7 and alkalis have a pH above 7.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk',
  },
  {
    id: 'chem-chemical-changes-004',
    subject: 'chemistry',
    topic: 'chemical-changes',
    topicLabel: 'Chemical Changes',
    question: 'What is produced when an acid reacts with a base?',
    options: [
      'An acid and a gas',
      'A salt and water',
      'A metal and hydrogen',
      'A polymer and carbon dioxide',
    ],
    correctIndex: 1,
    explanation: 'When an acid reacts with a base (neutralisation), a salt and water are produced. For example, hydrochloric acid + sodium hydroxide → sodium chloride + water.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk',
  },
  {
    id: 'chem-chemical-changes-005',
    subject: 'chemistry',
    topic: 'chemical-changes',
    topicLabel: 'Chemical Changes',
    question: 'What gas is produced when a metal reacts with an acid?',
    options: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Nitrogen'],
    correctIndex: 2,
    explanation: 'When a metal reacts with an acid, a salt and hydrogen gas are produced. The hydrogen can be tested with a burning splint — it makes a squeaky pop.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk',
  },
  {
  "id": "chem-chemical-changes-006",
  "subject": "chemistry",
  "topic": "chemical-changes",
  "topicLabel": "Chemical Changes",
  "question": "What is oxidation in terms of oxygen?",
  "options": [
    "The loss of oxygen",
    "The gain of oxygen",
    "The gain of electrons",
    "The sharing of electrons"
  ],
  "correctIndex": 1,
  "explanation": "In terms of oxygen, oxidation is gain of oxygen and reduction is loss of oxygen. For example, removing oxygen from a metal oxide reduces it to the metal.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
},
  {
    id: 'chem-chemical-changes-007',
    subject: 'chemistry',
    topic: 'chemical-changes',
    topicLabel: 'Chemical Changes',
    question: 'Which method is used to extract aluminium from its ore?',
    options: [
      'Heating with carbon',
      'Electrolysis',
      'Displacement with iron',
      'Dissolving in acid',
    ],
    correctIndex: 1,
    explanation: 'Aluminium is more reactive than carbon, so it cannot be reduced by carbon. Instead, electrolysis of molten aluminium oxide is used to extract the metal.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk',
  },
  {
    id: 'chem-chemical-changes-008',
    subject: 'chemistry',
    topic: 'chemical-changes',
    topicLabel: 'Chemical Changes',
    question: 'What is the name of the salt produced when hydrochloric acid reacts with sodium hydroxide?',
    options: ['Sodium sulfate', 'Sodium nitrate', 'Sodium chloride', 'Sodium carbonate'],
    correctIndex: 2,
    explanation: 'Hydrochloric acid always produces chloride salts. Sodium hydroxide + hydrochloric acid → sodium chloride + water.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk',
  },

  // ── energy-changes (7 questions) ───────────────────────────────────
  {
    id: 'chem-energy-changes-001',
    subject: 'chemistry',
    topic: 'energy-changes',
    topicLabel: 'Energy Changes',
    question: 'In an exothermic reaction, what happens to the temperature of the surroundings?',
    options: [
      'It decreases',
      'It increases',
      'It stays the same',
      'It first increases then decreases',
    ],
    correctIndex: 1,
    explanation: 'Exothermic reactions transfer energy to the surroundings, causing the temperature to increase. Combustion and neutralisation are examples of exothermic reactions.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr',
  },
  {
    id: 'chem-energy-changes-002',
    subject: 'chemistry',
    topic: 'energy-changes',
    topicLabel: 'Energy Changes',
    question: 'Which of the following is an example of an endothermic reaction?',
    options: ['Combustion', 'Neutralisation', 'Thermal decomposition', 'Oxidation of metals'],
    correctIndex: 2,
    explanation: 'Thermal decomposition is endothermic — it absorbs energy from the surroundings. This is why heat must be continuously supplied to break down the compound.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr',
  },
  {
  "id": "chem-energy-changes-003",
  "subject": "chemistry",
  "topic": "energy-changes",
  "topicLabel": "Energy Changes",
  "question": "On a reaction profile for an exothermic reaction, how do the energy levels of products compare to reactants?",
  "options": [
    "Products are higher than reactants",
    "Products are lower than reactants",
    "Products and reactants are at the same level",
    "Products are at the activation-energy peak"
  ],
  "correctIndex": 1,
  "explanation": "In an exothermic reaction, the products have less energy than the reactants because energy has been released to the surroundings. The products sit lower on the reaction profile diagram.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z27xxfr"
},
  {
  "id": "chem-energy-changes-004",
  "subject": "chemistry",
  "topic": "energy-changes",
  "topicLabel": "Energy Changes",
  "question": "What is the activation energy of a reaction?",
  "options": [
    "Total energy released",
    "Minimum energy for reaction",
    "The difference between reactant and product energies",
    "The energy released as the products cool to room temperature"
  ],
  "correctIndex": 1,
  "explanation": "Activation energy is the minimum amount of energy that reactant particles need in order to react. It is shown as the initial rise on a reaction profile diagram.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z27xxfr"
},
  {
    id: 'chem-energy-changes-005',
    scope: "higher",
    subject: 'chemistry',
    topic: 'energy-changes',
    topicLabel: 'Energy Changes',
    question: 'If bond breaking requires more energy than bond making releases, is the reaction exothermic or endothermic?',
    options: [
      'Exothermic',
      'Endothermic',
      'Neither — it is neutral',
      'It depends on the temperature',
    ],
    correctIndex: 1,
    explanation: 'If more energy is needed to break bonds than is released when new bonds form, the overall reaction is endothermic — it takes in energy from the surroundings.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr',
  },
  {
    id: 'chem-energy-changes-006',
    subject: 'chemistry',
    topic: 'energy-changes',
    topicLabel: 'Energy Changes',
    question: 'Which everyday use relies on an exothermic reaction?',
    options: ['A cold pack for injuries', 'A hand warmer', 'Photosynthesis', 'Dissolving ammonium nitrate'],
    correctIndex: 1,
    explanation: 'Hand warmers use exothermic reactions (such as the oxidation of iron) to release heat energy and warm your hands.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr',
  },
  {
    id: 'chem-energy-changes-007',
    scope: "higher",
    subject: 'chemistry',
    topic: 'energy-changes',
    topicLabel: 'Energy Changes',
    question: 'Is bond breaking an exothermic or endothermic process?',
    options: [
      'Exothermic — it releases energy',
      'Endothermic — it requires energy',
      'It neither absorbs nor releases energy',
      'It depends on the type of bond',
    ],
    correctIndex: 1,
    explanation: 'Bond breaking is always endothermic because energy must be supplied to overcome the attractive forces holding the atoms together.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr',
  },

  // ── rates (7 questions) ────────────────────────────────────────────
  {
    id: 'chem-rates-001',
    subject: 'chemistry',
    topic: 'rates',
    topicLabel: 'Rates of Reaction',
    question: 'How does increasing the temperature affect the rate of reaction?',
    options: [
      'It decreases the rate',
      'It has no effect',
      'It increases the rate',
      'It stops the reaction',
    ],
    correctIndex: 2,
    explanation: 'Increasing the temperature gives particles more kinetic energy, so they move faster and collide more frequently and with more energy. This increases the rate of reaction.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwdqqhv',
  },
  {
  "id": "chem-rates-002",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "What does a catalyst do in a chemical reaction?",
  "options": [
    "Raises reactant energy",
    "Speeds reaction without being consumed",
    "Increases the final amount of product from fixed reactants",
    "Raises the temperature of the reaction mixture"
  ],
  "correctIndex": 1,
  "explanation": "A catalyst speeds up a chemical reaction by providing an alternative pathway with a lower activation energy. The catalyst is not used up and can be reused.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-003",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "Why does increasing the surface area of a solid reactant increase the rate of reaction?",
  "options": [
    "It raises particle temperature",
    "More particles are exposed for collisions",
    "It increases the concentration of the other reactant",
    "It reduces the minimum energy needed for each reaction"
  ],
  "correctIndex": 1,
  "explanation": "A larger surface area means more particles of the solid are exposed and available for collisions with particles of the other reactant, increasing the frequency of successful collisions.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-004",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "According to collision theory, what two conditions must be met for a reaction to occur?",
  "options": [
    "Frequent collisions, regardless of energy",
    "Collisions with enough energy and suitable orientation",
    "Particles must collide gently so that their bonds stay intact",
    "Particles must be heated until every collision causes a reaction"
  ],
  "correctIndex": 1,
  "explanation": "Collision theory states that particles must collide with at least the activation energy and in the correct orientation for a successful reaction to occur.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-005",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "How does increasing the concentration of a solution affect the rate of reaction?",
  "options": [
    "It decreases the rate",
    "It has no effect",
    "It increases the rate",
    "It changes the activation energy instead of the rate"
  ],
  "correctIndex": 2,
  "explanation": "Increasing concentration means there are more reactant particles in the same volume, so collisions are more frequent, which increases the rate of reaction.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
    id: 'chem-rates-006',
    subject: 'chemistry',
    topic: 'rates',
    topicLabel: 'Rates of Reaction',
    question: 'Which of the following would NOT increase the rate of a reaction between marble chips and hydrochloric acid?',
    options: [
      'Using smaller marble chips',
      'Heating the acid',
      'Using more concentrated acid',
      'Using larger marble chips',
    ],
    correctIndex: 3,
    explanation: 'Using larger marble chips decreases the surface area exposed to the acid, which would decrease the rate of reaction, not increase it.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwdqqhv',
  },
  {
    id: 'chem-rates-007',
    subject: 'chemistry',
    topic: 'rates',
    topicLabel: 'Rates of Reaction',
    question: 'On a graph of gas volume produced against time, what does a steeper curve indicate?',
    options: [
      'A slower rate of reaction',
      'A faster rate of reaction',
      'More product is made overall',
      'The reaction has stopped',
    ],
    correctIndex: 1,
    explanation: 'A steeper curve on a graph of volume against time shows that gas is being produced more quickly, indicating a faster rate of reaction.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwdqqhv',
  },

  // ── organic (7 questions) ──────────────────────────────────────────
  {
    id: 'chem-organic-001',
    subject: 'chemistry',
    topic: 'organic',
    topicLabel: 'Organic Chemistry',
    question: 'What is crude oil a mixture of?',
    options: ['Elements', 'Hydrocarbons', 'Ionic compounds', 'Pure metals'],
    correctIndex: 1,
    explanation: 'Crude oil is a complex mixture of hydrocarbons — compounds made up of hydrogen and carbon atoms only.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn',
  },
  {
    id: 'chem-organic-002',
    subject: 'chemistry',
    topic: 'organic',
    topicLabel: 'Organic Chemistry',
    question: 'What is the name of the process used to separate crude oil into fractions?',
    options: ['Filtration', 'Chromatography', 'Fractional distillation', 'Crystallisation'],
    correctIndex: 2,
    explanation: 'Fractional distillation separates crude oil into fractions based on their different boiling points. Each fraction contains hydrocarbons with a similar number of carbon atoms.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn',
  },
  {
    id: 'chem-organic-003',
    subject: 'chemistry',
    topic: 'organic',
    topicLabel: 'Organic Chemistry',
    question: 'What is the general formula for alkanes?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
    correctIndex: 1,
    explanation: 'Alkanes have the general formula CₙH₂ₙ₊₂. For example, methane is CH₄ (n = 1) and ethane is C₂H₆ (n = 2). They are saturated hydrocarbons with only single bonds.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn',
  },
  {
    id: 'chem-organic-004',
    subject: 'chemistry',
    topic: 'organic',
    topicLabel: 'Organic Chemistry',
    question: 'What are the products of complete combustion of a hydrocarbon?',
    options: [
      'Carbon monoxide and water',
      'Carbon dioxide and water',
      'Carbon and hydrogen',
      'Carbon dioxide and hydrogen',
    ],
    correctIndex: 1,
    explanation: 'Complete combustion of a hydrocarbon (with plenty of oxygen) produces carbon dioxide and water. Incomplete combustion produces carbon monoxide and/or soot (carbon).',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn',
  },
  {
  "id": "chem-organic-005",
  "subject": "chemistry",
  "topic": "organic",
  "topicLabel": "Organic Chemistry",
  "question": "What happens during cracking of hydrocarbons?",
  "options": [
    "Short chains join together",
    "Long chains break into shorter molecules",
    "Hydrocarbons separate by their different boiling points",
    "Hydrocarbons react with oxygen to form carbon dioxide"
  ],
  "correctIndex": 1,
  "explanation": "Cracking breaks long-chain hydrocarbons into shorter hydrocarbons, including useful alkenes. Catalytic cracking uses vaporised feedstock passed over a hot catalyst. Steam cracking also needs a high temperature; a catalyst does not replace heating.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9488mn"
},
  {
    id: 'chem-organic-006',
    subject: 'chemistry',
    topic: 'organic',
    topicLabel: 'Organic Chemistry',
    question: 'What type of molecule is produced by the polymerisation of alkenes?',
    options: ['An alkane', 'An alcohol', 'A polymer', 'An acid'],
    correctIndex: 2,
    explanation: 'Alkenes can undergo addition polymerisation, where many small alkene monomers join together to form a long-chain polymer such as poly(ethene).',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn',
  },
  {
    id: 'chem-organic-007',
    subject: 'chemistry',
    topic: 'organic',
    topicLabel: 'Organic Chemistry',
    question: 'As the chain length of hydrocarbons increases, what happens to their boiling point?',
    options: [
      'Boiling point decreases',
      'Boiling point stays the same',
      'Boiling point increases',
      'Boiling point becomes unpredictable',
    ],
    correctIndex: 2,
    explanation: 'Longer hydrocarbon chains have stronger intermolecular forces between molecules, so more energy is needed to separate them. This means they have higher boiling points.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn',
  },

  // ── analysis (7 questions) ─────────────────────────────────────────
  {
  "id": "chem-analysis-001",
  "subject": "chemistry",
  "topic": "analysis",
  "topicLabel": "Chemical Analysis",
  "question": "What is a pure substance in chemistry?",
  "options": [
    "A clean-looking mixture",
    "One element or one compound",
    "A solution with no undissolved particles remaining",
    "A mixture with the same composition throughout"
  ],
  "correctIndex": 1,
  "explanation": "In chemistry, a pure substance consists of only one type of element or compound. It melts and boils at specific, sharp temperatures.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
},
  {
  "id": "chem-analysis-002",
  "subject": "chemistry",
  "topic": "analysis",
  "topicLabel": "Chemical Analysis",
  "question": "A dissolved sample produces one spot in paper chromatography. What does this suggest?",
  "options": [
    "It contains several separated components",
    "It may be pure",
    "It must be insoluble in the solvent",
    "It must contain two different dyes"
  ],
  "correctIndex": 1,
  "explanation": "One spot suggests a pure substance, but is not proof: different components can move together or fail to separate in that solvent.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
},
  {
    id: 'chem-analysis-003',
    scope: "separate",
    subject: 'chemistry',
    topic: 'analysis',
    topicLabel: 'Chemical Analysis',
    question: 'What colour flame does lithium produce in a flame test?',
    options: ['Lilac', 'Crimson red', 'Yellow', 'Green'],
    correctIndex: 1,
    explanation: 'Lithium produces a crimson red flame. Each metal ion produces a characteristic flame colour that can be used to identify it.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgbccj6',
  },
  {
  "id": "chem-analysis-004",
  "subject": "chemistry",
  "topic": "analysis",
  "topicLabel": "Chemical Analysis",
  "question": "How do you test for hydrogen gas?",
  "options": [
    "Look for cloudy limewater",
    "Use a lit splint; listen for a pop",
    "Insert a glowing splint and look for it relighting",
    "Hold damp blue litmus nearby and look for bleaching"
  ],
  "correctIndex": 1,
  "explanation": "Hydrogen gas is tested with a burning splint. If hydrogen is present, it burns with a squeaky pop sound.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
},
  {
    id: 'chem-analysis-005',
    subject: 'chemistry',
    topic: 'analysis',
    topicLabel: 'Chemical Analysis',
    question: 'How do you test for carbon dioxide gas?',
    options: [
      'It makes a squeaky pop with a burning splint',
      'It relights a glowing splint',
      'It turns limewater milky (cloudy)',
      'It bleaches damp litmus paper',
    ],
    correctIndex: 2,
    explanation: 'Carbon dioxide is tested by bubbling it through limewater (calcium hydroxide solution). If CO₂ is present, the limewater turns milky or cloudy.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgbccj6',
  },
  {
    id: 'chem-analysis-006',
    subject: 'chemistry',
    topic: 'analysis',
    topicLabel: 'Chemical Analysis',
    question: 'How do you test for oxygen gas?',
    options: [
      'It turns limewater milky',
      'It makes a squeaky pop',
      'It relights a glowing splint',
      'It turns universal indicator green',
    ],
    correctIndex: 2,
    explanation: 'Oxygen is tested with a glowing splint. If oxygen is present, the glowing splint relights.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgbccj6',
  },
  {
    id: 'chem-analysis-007',
    scope: "separate",
    subject: 'chemistry',
    topic: 'analysis',
    topicLabel: 'Chemical Analysis',
    question: 'What colour flame does potassium produce in a flame test?',
    options: ['Yellow', 'Green', 'Lilac', 'Crimson red'],
    correctIndex: 2,
    explanation: 'Potassium produces a lilac flame in a flame test. This is a distinctive colour that helps identify the presence of potassium ions.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgbccj6',
  },

  // ── atmosphere (7 questions) ───────────────────────────────────────
  {
    id: 'chem-atmosphere-001',
    subject: 'chemistry',
    topic: 'atmosphere',
    topicLabel: 'Atmosphere & Resources',
    question: 'What are the two main gases in the Earth\'s atmosphere today?',
    options: [
      'Oxygen and carbon dioxide',
      'Nitrogen and oxygen',
      'Hydrogen and helium',
      'Carbon dioxide and water vapour',
    ],
    correctIndex: 1,
    explanation: 'The Earth\'s atmosphere today is about 78% nitrogen and 21% oxygen, with small amounts of other gases including argon and carbon dioxide.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zy43p9q',
  },
  {
    id: 'chem-atmosphere-002',
    subject: 'chemistry',
    topic: 'atmosphere',
    topicLabel: 'Atmosphere & Resources',
    question: 'What was the main gas in the Earth\'s early atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctIndex: 2,
    explanation: 'Scientists believe the Earth\'s early atmosphere was mainly carbon dioxide, with little or no oxygen — similar to the atmospheres of Mars and Venus today.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zy43p9q',
  },
  {
    id: 'chem-atmosphere-003',
    subject: 'chemistry',
    topic: 'atmosphere',
    topicLabel: 'Atmosphere & Resources',
    question: 'Which gas is the main contributor to the greenhouse effect and climate change from human activities?',
    options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    correctIndex: 2,
    explanation: 'Carbon dioxide is the main greenhouse gas produced by human activities such as burning fossil fuels. It traps heat in the atmosphere, contributing to global warming.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zy43p9q',
  },
  {
  "id": "chem-atmosphere-004",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "How did oxygen levels in the early atmosphere increase?",
  "options": [
    "Volcanoes emitted oxygen",
    "Photosynthesis released oxygen",
    "Evaporation separated oxygen from water molecules",
    "Respiring animals converted carbon dioxide to oxygen"
  ],
  "correctIndex": 1,
  "explanation": "The evolution of photosynthetic organisms (such as algae and plants) produced oxygen as a by-product of photosynthesis, gradually increasing the oxygen levels in the atmosphere.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zy43p9q"
},
  {
  "id": "chem-atmosphere-005",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "What is a \"carbon footprint\"?",
  "options": [
    "Carbon dioxide emitted during use",
    "Total greenhouse-gas emissions across a life cycle",
    "The mass of carbon contained in the finished product itself",
    "The area of forest cleared to obtain the raw materials"
  ],
  "correctIndex": 1,
  "explanation": "A carbon footprint measures the total greenhouse gas emissions caused by an individual, event, organisation, or product, expressed as carbon dioxide equivalent.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zy43p9q"
},
  {
  "id": "chem-atmosphere-006",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "Why is water treated before it is safe to drink?",
  "options": [
    "To remove every mineral",
    "To reduce harmful microbes and contaminants",
    "To make dissolved substances settle out by filtration alone",
    "To ensure the water contains no dissolved gases or salts"
  ],
  "correctIndex": 1,
  "explanation": "Treatment makes water potable by reducing harmful microorganisms and contaminants. The method depends on the source: fresh water is filtered and sterilised, while salty water needs desalination. Potable water need not be chemically pure.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zptnng8"
},
  {
  "id": "chem-atmosphere-007",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "What is a life cycle assessment (LCA)?",
  "options": [
    "Time until a product stops working",
    "Environmental impacts throughout a product’s life",
    "An assessment of the energy consumed while a product is used",
    "A comparison of the price of raw materials for a product"
  ],
  "correctIndex": 1,
  "explanation": "A life cycle assessment examines the environmental impact of a product at every stage — from extracting raw materials, through manufacturing and use, to disposal or recycling.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zptnng8"
},

  // ─── NEW QUESTIONS (BATCH 2) ──────────────────────────────────────────

  // Atomic structure (5 more)
  {
  "id": "chem-atomic-structure-009",
  "subject": "chemistry",
  "topic": "atomic-structure",
  "topicLabel": "Atoms & Periodic Table",
  "question": "A sodium atom has electron arrangement 2,8,1. What arrangement does its Na⁺ ion have?",
  "options": [
    "2,8,2",
    "2,8",
    "2,7,1",
    "2,8,1"
  ],
  "correctIndex": 1,
  "explanation": "A sodium atom loses its outer electron to form Na⁺. Its remaining 10 electrons have arrangement 2,8; the proton number stays 11.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zcckk2p"
},
  { id: 'chem-atomic-structure-010', subject: 'chemistry', topic: 'atomic-structure', topicLabel: 'Atoms & Periodic Table', question: 'An atom of chlorine has 17 protons and 18 neutrons. What is its mass number?', options: ['17', '18', '35', '1'], correctIndex: 2, explanation: 'Mass number = protons + neutrons = 17 + 18 = 35. The mass number is the total number of particles in the nucleus.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p' },
  { id: 'chem-atomic-structure-011', subject: 'chemistry', topic: 'atomic-structure', topicLabel: 'Atoms & Periodic Table', question: 'When a sodium atom forms a sodium ion (Na+), what happens?', options: ['It gains one electron', 'It loses one electron', 'It gains one proton', 'It loses one proton'], correctIndex: 1, explanation: 'Sodium is in Group 1, so it loses one electron to achieve a full outer shell. Losing a negative electron gives it a positive charge (Na+).', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p' },
  { id: 'chem-atomic-structure-012', subject: 'chemistry', topic: 'atomic-structure', topicLabel: 'Atoms & Periodic Table', question: 'Why are Group 0 elements (noble gases) unreactive?', options: ['They have no electrons', 'They have full outer electron shells', 'They are all metals', 'They have no protons'], correctIndex: 1, explanation: 'Noble gases have full outer electron shells (except helium with 2, they have 8). This stable arrangement means they don\'t need to gain, lose, or share electrons.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p' },
  { id: 'chem-atomic-structure-013', subject: 'chemistry', topic: 'atomic-structure', topicLabel: 'Atoms & Periodic Table', question: 'Where are the most reactive metals found in the periodic table?', options: ['Group 7', 'Group 0', 'Group 1', 'The bottom of Group 7'], correctIndex: 2, explanation: 'The most reactive metals are in Group 1 (alkali metals). Reactivity increases going down the group because the outer electron is further from the nucleus and easier to lose.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zcckk2p' },

  // Bonding (5 more)
  { id: 'chem-bonding-008', subject: 'chemistry', topic: 'bonding', topicLabel: 'Bonding & Structure', question: 'Why does diamond have a very high melting point?', options: ['It contains ionic bonds', 'Each carbon atom forms four strong covalent bonds in a giant structure', 'It contains metallic bonds', 'It is made of small molecules'], correctIndex: 1, explanation: 'Diamond is a giant covalent structure where each carbon atom is bonded to four others by strong covalent bonds. A huge amount of energy is needed to break all these bonds.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z33rrwx' },
  { id: 'chem-bonding-009', subject: 'chemistry', topic: 'bonding', topicLabel: 'Bonding & Structure', question: 'Why can graphite conduct electricity but diamond cannot?', options: ['Graphite contains ions', 'Graphite has delocalised electrons that are free to move', 'Diamond is too hard', 'Graphite is a metal'], correctIndex: 1, explanation: 'In graphite, each carbon bonds to three others, leaving one electron per atom delocalised (free to move). These free electrons can carry electrical current. In diamond, all four electrons are used in bonding.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z33rrwx' },
  { id: 'chem-bonding-010', subject: 'chemistry', topic: 'bonding', topicLabel: 'Bonding & Structure', question: 'Why do simple molecular substances like water have low boiling points?', options: ['The covalent bonds within molecules are weak', 'The intermolecular forces (forces between molecules) are weak', 'They contain ionic bonds', 'They have no bonds at all'], correctIndex: 1, explanation: 'The covalent bonds within molecules are strong, but the intermolecular forces between molecules are weak. Only a small amount of energy is needed to overcome these weak forces, so boiling points are low.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z33rrwx' },
  {
  "id": "chem-bonding-011",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "A metal wire conducts while solid. Which particles carry charge along the wire?",
  "options": [
    "Positive metal ions",
    "Delocalised electrons",
    "Neutral metal atoms",
    "Negative metal ions"
  ],
  "correctIndex": 1,
  "explanation": "Delocalised electrons can move through a solid metal and carry charge. The positive ions remain in the lattice; this differs from conduction by mobile ions in molten ionic compounds.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},
  {
  "id": "chem-bonding-012",
  "subject": "chemistry",
  "topic": "bonding",
  "topicLabel": "Bonding & Structure",
  "question": "What type of bonding is found in poly(ethene)?",
  "options": [
    "Ionic bonding",
    "Metallic bonding",
    "Covalent bonding",
    "Hydrogen bonding"
  ],
  "correctIndex": 2,
  "explanation": "Poly(ethene) consists of very large polymer molecules with covalent bonds between their atoms. It is not a substance made of small simple molecules.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
},

  // Chemical changes (5 more)
  { id: 'chem-chemical-changes-009', subject: 'chemistry', topic: 'chemical-changes', topicLabel: 'Chemical Changes', question: 'What are the products when zinc reacts with hydrochloric acid?', options: ['Zinc chloride + water', 'Zinc chloride + hydrogen', 'Zinc oxide + hydrogen', 'Zinc sulfate + hydrogen'], correctIndex: 1, explanation: 'Metal + acid → salt + hydrogen. Zinc + hydrochloric acid → zinc chloride + hydrogen. The salt name comes from the metal (zinc) and the acid (hydrochloric = chloride).', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk' },
  { id: 'chem-chemical-changes-010', subject: 'chemistry', topic: 'chemical-changes', topicLabel: 'Chemical Changes', question: 'What are the products when calcium carbonate reacts with sulfuric acid?', options: ['Calcium sulfate + water + carbon dioxide', 'Calcium chloride + water', 'Calcium sulfate + hydrogen', 'Calcium carbonate + oxygen'], correctIndex: 0, explanation: 'Carbonate + acid → salt + water + carbon dioxide. Calcium carbonate + sulfuric acid → calcium sulfate + water + CO2.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk' },
  { id: 'chem-chemical-changes-011', subject: 'chemistry', topic: 'chemical-changes', topicLabel: 'Chemical Changes', question: 'During the electrolysis of copper sulfate solution using copper electrodes, what forms at the cathode?', options: ['Oxygen gas', 'Hydrogen gas', 'Copper metal', 'Sulfur'], correctIndex: 2, explanation: 'During electrolysis of copper sulfate, copper ions (Cu2+) are attracted to the negative cathode where they gain electrons and are deposited as copper metal.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zt6ppbk' },
  {
  "id": "chem-chemical-changes-012",
  "subject": "chemistry",
  "topic": "chemical-changes",
  "topicLabel": "Chemical Changes",
  "question": "Iron is more reactive than copper. What happens when iron is added to copper sulfate solution?",
  "options": [
    "Copper displaces iron to form iron sulfate",
    "Iron displaces copper",
    "Iron and copper form a soluble alloy in the water",
    "Iron becomes coated with unchanged copper sulfate crystals"
  ],
  "correctIndex": 1,
  "explanation": "A more reactive metal displaces a less reactive one from its compound. Iron displaces copper: Fe + CuSO4 → FeSO4 + Cu. The solution changes from blue to green.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
},
  {
  "id": "chem-chemical-changes-013",
  "subject": "chemistry",
  "topic": "chemical-changes",
  "topicLabel": "Chemical Changes",
  "question": "At room temperature, what is the pH of a neutral solution?",
  "options": [
    "0",
    "7",
    "14",
    "1"
  ],
  "correctIndex": 1,
  "explanation": "At room temperature pH 7 is neutral, below 7 acidic and above 7 alkaline. Lower pH indicates a higher hydrogen-ion concentration.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
},

  // Quantitative (5 more)
  {
  "id": "chem-quantitative-008",
  "subject": "chemistry",
  "topic": "quantitative",
  "topicLabel": "Quantitative Chemistry",
  "question": "Magnesium oxide (MgO) has Mr = 40. Oxygen has Ar = 16. What is the relative atomic mass of magnesium?",
  "options": [
    "16",
    "24",
    "40",
    "56"
  ],
  "correctIndex": 1,
  "explanation": "MgO contains one magnesium and one oxygen atom per formula unit. Therefore Ar(Mg) = Mr(MgO) − Ar(O) = 40 − 16 = 24.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zb4fjfr"
},
  { id: 'chem-quantitative-009', subject: 'chemistry', topic: 'quantitative', topicLabel: 'Quantitative Chemistry', question: 'What is the balanced equation for the reaction of magnesium with hydrochloric acid?', options: ['Mg + HCl → MgCl + H', 'Mg + 2HCl → MgCl2 + H2', 'Mg + HCl → MgCl2 + H2', '2Mg + HCl → MgCl2 + H2'], correctIndex: 1, explanation: 'Mg + 2HCl → MgCl2 + H2. There must be equal numbers of each atom on both sides. Two HCl are needed to provide two chlorine atoms and form H2.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr' },
  {
  "id": "chem-quantitative-010",
  "subject": "chemistry",
  "topic": "quantitative",
  "topicLabel": "Quantitative Chemistry",
  "question": "10 g of calcium carbonate decomposes completely. According to conservation of mass, what can we say about the products?",
  "options": [
    "More than 10 g because a gas is formed",
    "10 g in total",
    "Less than 10 g because some atoms disappear",
    "An unknown mass because the products are different substances"
  ],
  "correctIndex": 1,
  "explanation": "The law of conservation of mass states that no atoms are created or destroyed in a chemical reaction. The total mass of products equals the total mass of reactants (10 g).",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zb4fjfr"
},
  { id: 'chem-quantitative-011', subject: 'chemistry', topic: 'quantitative', topicLabel: 'Quantitative Chemistry', question: 'A solution has a concentration of 5 g/dm3. What mass of solute is dissolved in 2 dm3 of solution?', options: ['2.5 g', '5 g', '7 g', '10 g'], correctIndex: 3, explanation: 'Mass = concentration × volume = 5 g/dm3 × 2 dm3 = 10 g.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr' },
  { id: 'chem-quantitative-012',
    scope: "higher", subject: 'chemistry', topic: 'quantitative', topicLabel: 'Quantitative Chemistry', question: 'How many moles of carbon (Ar = 12) are in 36 g of carbon?', options: ['2 moles', '3 moles', '12 moles', '36 moles'], correctIndex: 1, explanation: 'Moles = mass ÷ relative atomic mass = 36 ÷ 12 = 3 moles.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zb4fjfr' },

  // Rates (5 more)
  {
  "id": "chem-rates-008",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "On a graph of gas volume produced against time, how can you tell when a reaction has finished?",
  "options": [
    "The curve steepens",
    "The curve levels off",
    "The curve slopes back towards zero volume",
    "The curve continues upwards at a steady gradient"
  ],
  "correctIndex": 1,
  "explanation": "When the line levels off (becomes horizontal), no more gas is being produced, meaning the reaction has finished — one of the reactants has been used up.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-009",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "How does a catalyst speed up a reaction?",
  "options": [
    "It increases particle kinetic energy",
    "A pathway with lower activation energy",
    "It increases the number of reactant particles in each volume",
    "It increases the total energy released by the reaction"
  ],
  "correctIndex": 1,
  "explanation": "A catalyst provides an alternative reaction pathway with a lower activation energy. It is not used up in the reaction and can be reused.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-010",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "Which method directly measures the volume of gas produced at timed intervals during a reaction?",
  "options": [
    "Weigh the open flask at intervals",
    "Read a gas syringe at timed intervals",
    "Record the time needed for a cross beneath the flask to vanish",
    "Record the temperature change of the reaction at timed intervals"
  ],
  "correctIndex": 1,
  "explanation": "Collecting gas in a gas syringe and recording the volume at regular time intervals allows you to plot a graph and calculate the rate of reaction.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-011",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "Why does increasing the concentration of a solution increase the rate of reaction?",
  "options": [
    "Faster-moving particles",
    "More frequent collisions per unit volume",
    "Particles need less energy to react at higher concentration",
    "The same particles collide less often but with greater energy"
  ],
  "correctIndex": 1,
  "explanation": "Higher concentration means more reactant particles in the same volume. This increases the frequency of collisions between particles, increasing the rate.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},
  {
  "id": "chem-rates-012",
  "subject": "chemistry",
  "topic": "rates",
  "topicLabel": "Rates of Reaction",
  "question": "Two reactions produce gas. On graphs of product gas volume against time with identical scales, which line shows the greater initial rate?",
  "options": [
    "A gently rising line",
    "A steeply rising line",
    "A horizontal line",
    "A line that remains at zero"
  ],
  "correctIndex": 1,
  "explanation": "Initial rate is the initial gradient of the product gas volume–time graph. A steeper positive gradient means more gas is produced per second.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
},

  // Energy changes (5 more)
  {
  "id": "chem-energy-changes-008",
  "subject": "chemistry",
  "topic": "energy-changes",
  "topicLabel": "Energy Changes",
  "question": "On a reaction profile, an upward vertical arrow runs from the reactant energy level to the peak. What does this arrow measure?",
  "options": [
    "The energy released",
    "The activation energy",
    "The temperature",
    "The catalyst"
  ],
  "correctIndex": 1,
  "explanation": "Activation energy is the energy difference between the reactants and the peak, not the absolute height of the peak above zero.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z27xxfr",
  "image": {"src": "/science/reaction-profile.svg", "alt": "Energy against reaction progress: arrow A points vertically upwards from the reactant energy level to the peak."}
},
  { id: 'chem-energy-changes-009', subject: 'chemistry', topic: 'energy-changes', topicLabel: 'Energy Changes', question: 'A reaction causes the temperature of the surroundings to decrease. What type of reaction is this?', options: ['Exothermic', 'Endothermic', 'Neutralisation', 'Combustion'], correctIndex: 1, explanation: 'An endothermic reaction takes in energy from the surroundings, causing the temperature to decrease. The opposite of exothermic which releases energy and increases temperature.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr' },
  {
  "id": "chem-energy-changes-010",
  "scope": "higher",
  "subject": "chemistry",
  "topic": "energy-changes",
  "topicLabel": "Energy Changes",
  "question": "In an exothermic reaction, how does energy released by making bonds compare with energy absorbed by breaking bonds?",
  "options": [
    "Less is released than absorbed",
    "More is released than absorbed",
    "Equal amounts are released and absorbed",
    "No energy is absorbed in breaking bonds"
  ],
  "correctIndex": 1,
  "explanation": "Bond breaking absorbs energy and bond formation releases it. The release is greater in an exothermic reaction, so there is a net transfer of energy to the surroundings.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z27xxfr"
},
  { id: 'chem-energy-changes-011', subject: 'chemistry', topic: 'energy-changes', topicLabel: 'Energy Changes', question: 'Which of these is an example of an exothermic reaction used in everyday life?', options: ['Thermal decomposition', 'Photosynthesis', 'Hand warmers', 'Dissolving ammonium nitrate in water'], correctIndex: 2, explanation: 'Hand warmers use an exothermic reaction (often iron oxidation) to release heat. Thermal decomposition, photosynthesis, and dissolving ammonium nitrate are endothermic.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr' },
  { id: 'chem-energy-changes-012', subject: 'chemistry', topic: 'energy-changes', topicLabel: 'Energy Changes', question: 'On a reaction profile, if the products are at a lower energy level than the reactants, the reaction is:', options: ['Endothermic', 'Exothermic', 'Reversible', 'Impossible'], correctIndex: 1, explanation: 'If products are lower in energy than reactants, energy has been released to the surroundings — this is exothermic. The energy difference is the overall energy change.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z27xxfr' },

  // Organic (5 more)
  { id: 'chem-organic-008', subject: 'chemistry', topic: 'organic', topicLabel: 'Organic Chemistry', question: 'As hydrocarbon molecules get larger, what happens to their boiling points?', options: ['They decrease', 'They increase', 'They stay the same', 'They become unpredictable'], correctIndex: 1, explanation: 'Larger hydrocarbons have stronger intermolecular forces between their longer chains, so more energy is needed to separate them. This means higher boiling points.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn' },
  {
  "id": "chem-organic-009",
  "subject": "chemistry",
  "topic": "organic",
  "topicLabel": "Organic Chemistry",
  "question": "A hydrocarbon burns with too little oxygen. Which toxic gas may form instead of carbon dioxide?",
  "options": [
    "Sulfur dioxide",
    "Carbon monoxide",
    "Hydrogen chloride",
    "Nitrogen dioxide"
  ],
  "correctIndex": 1,
  "explanation": "Incomplete combustion can produce carbon monoxide when oxygen is limited. Complete combustion produces carbon dioxide and water; carbon monoxide is toxic.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9488mn"
},
  {
  "id": "chem-organic-010",
  "subject": "chemistry",
  "topic": "organic",
  "topicLabel": "Organic Chemistry",
  "question": "What is cracking used for?",
  "options": [
    "To join small molecules together",
    "To make smaller, more useful hydrocarbons",
    "To separate crude-oil fractions without breaking molecules",
    "To remove sulfur compounds by dissolving crude oil in water"
  ],
  "correctIndex": 1,
  "explanation": "Cracking breaks long-chain hydrocarbons into shorter hydrocarbons, including useful alkenes. Catalytic cracking uses vaporised feedstock passed over a hot catalyst. Steam cracking also needs a high temperature; a catalyst does not replace heating.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9488mn"
},
  {
  "id": "chem-organic-011",
  "subject": "chemistry",
  "topic": "organic",
  "topicLabel": "Organic Chemistry",
  "question": "What happens when bromine water is added to an alkene?",
  "options": [
    "It stays orange",
    "It becomes colourless",
    "It changes from colourless to orange/brown",
    "It forms a white precipitate without losing its colour"
  ],
  "correctIndex": 1,
  "explanation": "Alkenes contain a C=C double bond which reacts with bromine water, decolourising it from orange/brown to colourless. This is the test for unsaturation.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9488mn"
},
  { id: 'chem-organic-012',
    scope: "separate", subject: 'chemistry', topic: 'organic', topicLabel: 'Organic Chemistry', question: 'What type of polymerisation involves monomers with C=C double bonds opening up and joining together?', options: ['Condensation polymerisation', 'Addition polymerisation', 'Natural polymerisation', 'Ionic polymerisation'], correctIndex: 1, explanation: 'Addition polymerisation occurs when many monomers with C=C double bonds (like ethene) open up their double bonds and join together to form a long chain. No other substance is produced.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9488mn' },

  // Analysis (5 more)
  { id: 'chem-analysis-008', subject: 'chemistry', topic: 'analysis', topicLabel: 'Chemical Analysis', question: 'A spot in a chromatogram travels 4.2 cm and the solvent front travels 6.0 cm. What is the Rf value?', options: ['0.5', '0.6', '0.7', '1.4'], correctIndex: 2, explanation: 'Rf = distance moved by spot ÷ distance moved by solvent = 4.2 ÷ 6.0 = 0.7. Rf values are always between 0 and 1.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgbccj6' },
  {
  "id": "chem-analysis-009",
  "scope": "separate",
  "subject": "chemistry",
  "topic": "analysis",
  "topicLabel": "Chemical Analysis",
  "question": "A flame test gives a crimson colour. Which metal ion does this support identifying?",
  "options": [
    "Sodium",
    "Lithium",
    "Potassium",
    "Copper"
  ],
  "correctIndex": 1,
  "explanation": "Lithium ions give a crimson flame. Sodium gives yellow, potassium lilac, and copper green. Compare with known samples to identify an unknown ion.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
},
  {
  "id": "chem-analysis-010",
  "subject": "chemistry",
  "topic": "analysis",
  "topicLabel": "Chemical Analysis",
  "question": "A gas from a metal reacting with dilute acid makes a squeaky pop with a lit splint. Which gas is it?",
  "options": [
    "Carbon dioxide",
    "Oxygen",
    "Hydrogen",
    "Chlorine"
  ],
  "correctIndex": 2,
  "explanation": "The squeaky-pop test identifies hydrogen, a product of many metal-acid reactions. Oxygen relights a glowing splint, carbon dioxide turns limewater cloudy, and chlorine bleaches damp litmus.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
},
  {
  "id": "chem-analysis-011",
  "subject": "chemistry",
  "topic": "analysis",
  "topicLabel": "Chemical Analysis",
  "question": "A pure substance melts at a sharp, specific temperature. What would you expect for an impure substance?",
  "options": [
    "A higher, sharp melting point",
    "A lower, broader melting range",
    "An unchanged melting point with the same sharp transition",
    "A higher melting point with the original sharp transition"
  ],
  "correctIndex": 1,
  "explanation": "Impurities lower the melting point and make the substance melt over a range of temperatures rather than at one sharp point. This is used to test purity.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
},
  { id: 'chem-analysis-012',
    scope: "separate", subject: 'chemistry', topic: 'analysis', topicLabel: 'Chemical Analysis', question: 'What colour flame does copper produce in a flame test?', options: ['Crimson red', 'Yellow', 'Lilac', 'Green/blue-green'], correctIndex: 3, explanation: 'Copper compounds produce a green or blue-green flame in a flame test. This is a distinctive colour used to identify copper ions.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgbccj6' },

  // Atmosphere (5 more)
  { id: 'chem-atmosphere-008', subject: 'chemistry', topic: 'atmosphere', topicLabel: 'Atmosphere & Resources', question: 'Which gas made up most of the Earth\'s early atmosphere, released by volcanic eruptions?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Methane'], correctIndex: 2, explanation: 'Volcanic eruptions released large amounts of carbon dioxide (and water vapour) into the early atmosphere. There was very little or no oxygen.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zy43p9q' },
  { id: 'chem-atmosphere-009', subject: 'chemistry', topic: 'atmosphere', topicLabel: 'Atmosphere & Resources', question: 'How did the first organisms that photosynthesised change the atmosphere?', options: ['They removed oxygen and added CO2', 'They removed CO2 and produced oxygen', 'They had no effect', 'They increased nitrogen levels'], correctIndex: 1, explanation: 'Early algae and plants used CO2 for photosynthesis and released O2 as a waste product. Over billions of years, this dramatically increased oxygen levels and decreased CO2.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zy43p9q' },
  { id: 'chem-atmosphere-010', subject: 'chemistry', topic: 'atmosphere', topicLabel: 'Atmosphere & Resources', question: 'Which of these is NOT a greenhouse gas?', options: ['Carbon dioxide', 'Methane', 'Nitrogen', 'Water vapour'], correctIndex: 2, explanation: 'Nitrogen makes up 78% of the atmosphere but is not a greenhouse gas. CO2, methane, and water vapour all absorb and re-emit infrared radiation, trapping heat.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zy43p9q' },
  {
  "id": "chem-atmosphere-011",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "Which of these actions would reduce a person's carbon footprint?",
  "options": [
    "Replacing electric motors with engines",
    "Using renewables instead of fossil fuels",
    "Replacing a short rail journey with a short-haul flight",
    "Replacing an insulated wall with one that loses heat faster"
  ],
  "correctIndex": 1,
  "explanation": "Using renewable energy sources (solar, wind) instead of burning fossil fuels reduces CO2 emissions and therefore reduces your carbon footprint.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zy43p9q"
},
  {
  "id": "chem-atmosphere-012",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "What are the main steps in making potable water from fresh water?",
  "options": [
    "Distillation then freezing",
    "Filtration then sterilisation",
    "Sterilisation followed by dissolving suspended particles",
    "Filtration followed by evaporating all the remaining water"
  ],
  "correctIndex": 1,
  "explanation": "Potable water from fresh water sources is made by: 1) filtration to remove solid particles, then 2) sterilisation (using chlorine, ozone, or UV light) to kill microorganisms.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zptnng8"
},

  // Foundation methods, applications and coverage additions.
  {
    "id": "chem-chemical-changes-014",
    "subject": "chemistry",
    "topic": "chemical-changes",
    "topicLabel": "Chemical Changes",
    "question": "Excess copper oxide is added to warm dilute sulfuric acid to make copper sulfate. How is the unreacted oxide removed?",
    "options": [
      "Filtration",
      "Distillation",
      "Chromatography",
      "Crystallisation"
    ],
    "correctIndex": 0,
    "explanation": "Filter off excess insoluble copper oxide, then gently concentrate the filtrate and allow it to cool so crystals form.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
  },
  {
    "id": "chem-chemical-changes-015",
    "subject": "chemistry",
    "topic": "chemical-changes",
    "topicLabel": "Chemical Changes",
    "question": "During electrolysis of copper sulfate solution with inert electrodes, how can the gas at the positive electrode be identified?",
    "options": [
      "Damp blue litmus turns red then white",
      "A glowing splint relights",
      "A lighted splint gives a squeaky pop",
      "Limewater turns milky when shaken"
    ],
    "correctIndex": 1,
    "explanation": "Oxygen forms at the positive inert electrode and relights a glowing splint. Copper is deposited at the negative electrode.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
  },
  {
    "id": "chem-energy-changes-013",
    "subject": "chemistry",
    "topic": "energy-changes",
    "topicLabel": "Energy Changes",
    "question": "Why use an insulated cup when measuring a reaction’s temperature change?",
    "options": [
      "To speed up all reactions",
      "To improve the thermometer scale",
      "To reduce energy transfer to the room",
      "To increase the acid concentration"
    ],
    "correctIndex": 2,
    "explanation": "Insulation reduces energy exchange with the surroundings, making the measured temperature change closer to that caused by the reaction.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z27xxfr"
  },
  {
    "id": "chem-rates-013",
    "subject": "chemistry",
    "topic": "rates",
    "topicLabel": "Rates of Reaction",
    "question": "Acid concentration is varied in reactions with marble chips. What should be kept the same to compare rates fairly?",
    "options": [
      "The time taken to collect each gas volume",
      "The concentration of the acid solution",
      "The initial gradient of each results graph",
      "Mass and size of chips"
    ],
    "correctIndex": 3,
    "explanation": "Chip mass and size affect available reactant and surface area. Control these, temperature and acid volume while varying concentration.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
  },
  {
    "id": "chem-analysis-013",
    "subject": "chemistry",
    "topic": "analysis",
    "topicLabel": "Chemical Analysis",
    "question": "Where should the starting spots be placed in paper chromatography?",
    "options": [
      "Above the solvent level",
      "Below the solvent surface",
      "At the top edge of the paper",
      "On the lid of the solvent container"
    ],
    "correctIndex": 0,
    "explanation": "Start spots on a pencil baseline above the solvent. Submerged spots can dissolve into the solvent reservoir instead of travelling up the paper.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
  },
  {
    "id": "chem-atmosphere-013",
    "subject": "chemistry",
    "topic": "atmosphere",
    "topicLabel": "Atmosphere & Resources",
    "question": "In simple distillation of salt water, which part turns water vapour back into liquid?",
    "options": [
      "The salt left in the flask",
      "The condenser",
      "The boiling flask",
      "The thermometer bulb"
    ],
    "correctIndex": 1,
    "explanation": "The condenser cools water vapour so it becomes liquid water. Dissolved salts remain in the heated flask.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zptnng8"
  },
  {
    "id": "chem-atomic-structure-014",
    "subject": "chemistry",
    "topic": "atomic-structure",
    "topicLabel": "Atoms & Periodic Table",
    "question": "Most alpha particles passed straight through thin gold foil. What did this suggest about atoms?",
    "options": [
      "Their nuclei fill the volume",
      "Their mass is in electrons",
      "They are mostly empty space",
      "Their charge is spread evenly"
    ],
    "correctIndex": 2,
    "explanation": "Most particles passed through without deflection, suggesting mostly empty space. Rare large deflections supported a small, dense, positive nucleus.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zcckk2p"
  },
  {
    "id": "chem-atomic-structure-015",
    "subject": "chemistry",
    "topic": "atomic-structure",
    "topicLabel": "Atoms & Periodic Table",
    "question": "An element contains 75% atoms of mass 35 and 25% atoms of mass 37. What is its relative atomic mass?",
    "options": [
      "36.0",
      "36.5",
      "72.0",
      "35.5"
    ],
    "correctIndex": 3,
    "explanation": "The weighted mean is (75 × 35 + 25 × 37) ÷ 100 = 35.5.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zcckk2p"
  },
  {
    "id": "chem-bonding-013",
    "subject": "chemistry",
    "topic": "bonding",
    "topicLabel": "Bonding & Structure",
    "question": "Why can molten sodium chloride conduct electricity?",
    "options": [
      "Its ions can move",
      "Its atoms release electrons like a metal",
      "Its molecules move without any charge",
      "Its ions stay fixed in a rigid lattice"
    ],
    "correctIndex": 0,
    "explanation": "Molten ionic compounds conduct because charged ions are free to move and carry current. In the solid the ions are fixed.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
  },
  {
    "id": "chem-bonding-014",
    "subject": "chemistry",
    "topic": "bonding",
    "topicLabel": "Bonding & Structure",
    "question": "Why is an alloy often harder than the pure metal?",
    "options": [
      "Their atoms become molecules",
      "Different-sized atoms disrupt layers",
      "Their electrons cannot move",
      "Their layers slide freely"
    ],
    "correctIndex": 1,
    "explanation": "Atoms of different sizes distort the regular layers, making it harder for the layers to slide.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z33rrwx"
  },
  {
    "id": "chem-quantitative-013",
    "subject": "chemistry",
    "topic": "quantitative",
    "topicLabel": "Quantitative Chemistry",
    "question": "A flask containing acid and marble chips loses mass during reaction because gas escapes. What happens to total mass if the escaped gas is also counted?",
    "options": [
      "It increases",
      "It doubles",
      "It is conserved",
      "It decreases"
    ],
    "correctIndex": 2,
    "explanation": "Atoms are conserved. The apparent loss occurs because carbon dioxide leaves the measured system.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zb4fjfr"
  },
  {
    "id": "chem-chemical-changes-016",
    "subject": "chemistry",
    "topic": "chemical-changes",
    "topicLabel": "Chemical Changes",
    "question": "Which instrument gives a numerical pH reading for a solution?",
    "options": [
      "A gas syringe",
      "An ammeter",
      "A measuring cylinder",
      "A pH probe"
    ],
    "correctIndex": 3,
    "explanation": "A calibrated pH probe measures pH numerically. Universal indicator estimates pH by comparison with a colour chart.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zt6ppbk"
  },
  {
    "id": "chem-rates-014",
    "subject": "chemistry",
    "topic": "rates",
    "topicLabel": "Rates of Reaction",
    "question": "A reaction produces 48 cm³ of gas in 20 seconds. What is the mean rate over this interval?",
    "options": [
      "2.4 cm³/s",
      "0.42 cm³/s",
      "28 cm³/s",
      "960 cm³/s"
    ],
    "correctIndex": 0,
    "explanation": "Mean rate = gas volume ÷ time = 48 ÷ 20 = 2.4 cm³/s.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
  },
  {
    "id": "chem-rates-015",
    "subject": "chemistry",
    "topic": "rates",
    "topicLabel": "Rates of Reaction",
    "question": "What happens at dynamic equilibrium in a closed system?",
    "options": [
      "Reactant and product masses match",
      "Forward and reverse rates are equal",
      "Both reactions stop",
      "All reactants are used up"
    ],
    "correctIndex": 1,
    "explanation": "Both reactions continue at equal rates, so the amounts of reactants and products stay constant. Equal rates do not require equal amounts.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwdqqhv"
  },
  {
    "id": "chem-organic-013",
    "subject": "chemistry",
    "topic": "organic",
    "topicLabel": "Organic Chemistry",
    "question": "Compared with short-chain hydrocarbons, longer-chain hydrocarbons are usually:",
    "options": [
      "Lower-boiling",
      "More volatile",
      "More viscous",
      "More flammable"
    ],
    "correctIndex": 2,
    "explanation": "Longer hydrocarbon chains usually have higher viscosity and boiling points and are less flammable.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9488mn"
  },
  {
    "id": "chem-analysis-014",
    "subject": "chemistry",
    "topic": "analysis",
    "topicLabel": "Chemical Analysis",
    "question": "What is a formulation?",
    "options": [
      "A single pure element",
      "A compound with a fixed formula",
      "An unplanned contaminant",
      "A mixture designed for a purpose"
    ],
    "correctIndex": 3,
    "explanation": "Formulations combine components in carefully measured quantities to give useful properties, as in paints and medicines.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
  },
  {
    "id": "chem-analysis-015",
    "subject": "chemistry",
    "topic": "analysis",
    "topicLabel": "Chemical Analysis",
    "question": "What is the positive test for chlorine gas using damp blue litmus paper?",
    "options": [
      "It is bleached white",
      "It becomes permanently blue-black",
      "It forms a brick-red precipitate",
      "It produces a cloudy white emulsion"
    ],
    "correctIndex": 0,
    "explanation": "Chlorine turns damp blue litmus red and then bleaches it white.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgbccj6"
  },
  {
    "id": "chem-atmosphere-014",
    "subject": "chemistry",
    "topic": "atmosphere",
    "topicLabel": "Atmosphere & Resources",
    "question": "Which pollutant binds to haemoglobin and reduces the blood’s oxygen-carrying ability?",
    "options": [
      "Nitrogen dioxide",
      "Carbon monoxide",
      "Carbon dioxide",
      "Sulfur dioxide"
    ],
    "correctIndex": 1,
    "explanation": "Carbon monoxide is toxic because it binds to haemoglobin, reducing oxygen transport.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zy43p9q"
  },
  {
    "id": "chem-atmosphere-015",
    "subject": "chemistry",
    "topic": "atmosphere",
    "topicLabel": "Atmosphere & Resources",
    "question": "Which pollutant from burning sulfur-containing fuels contributes to acid rain?",
    "options": [
      "Solid carbon particles",
      "Water vapour",
      "Sulfur dioxide",
      "Carbon monoxide"
    ],
    "correctIndex": 2,
    "explanation": "Sulfur dioxide dissolves and reacts in the atmosphere to form acidic solutions that fall as acid rain.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zy43p9q"
  },
  {
  "id": "chem-atmosphere-016",
  "subject": "chemistry",
  "topic": "atmosphere",
  "topicLabel": "Atmosphere & Resources",
  "question": "Why does desalinating seawater by distillation have a high energy cost?",
  "options": [
    "Boiling needs much energy",
    "To melt the salt",
    "Water must first be frozen",
    "Salt must first be electrolysed"
  ],
  "correctIndex": 0,
  "explanation": "Distillation needs substantial energy to vaporise water. This contributes to the cost of making potable water from seawater.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zptnng8"
},
];
