import type { Question } from '../types';

export const physicsQuestions: Question[] = [
  // ─── ENERGY (energy-phys) ─────────────────────────────────────────────
  {
  "id": "phys-energy-phys-001",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Which energy store does a car have because it is moving?",
  "options": [
    "Kinetic energy store",
    "Chemical energy store",
    "Elastic potential energy store",
    "Electrostatic energy store"
  ],
  "correctIndex": 0,
  "explanation": "A moving object has energy in its kinetic energy store. The faster it moves and the greater its mass, the more kinetic energy it has.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    id: 'phys-energy-phys-002',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'What is the equation for kinetic energy?',
    options: ['KE = mgh', 'KE = ½mv²', 'KE = Fd', 'KE = mv'],
    correctIndex: 1,
    explanation: 'Kinetic energy is calculated using KE = ½mv², where m is mass in kg and v is speed in m/s.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
  "id": "phys-energy-phys-003",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Which comparison of nuclear and gas-fired electricity generation is correct?",
  "options": [
    "Both rely on burning their fuel",
    "Both have renewable fuel supplies",
    "Both produce radioactive fuel waste",
    "Neither uses renewable fuel"
  ],
  "correctIndex": 3,
  "explanation": "Uranium and natural gas are finite, non-renewable fuels. Nuclear generation does not burn fuel and has low operational carbon dioxide emissions, but produces radioactive waste. Gas combustion releases carbon dioxide.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    id: 'phys-energy-phys-004',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'What is the unit of power?',
    options: ['Joule', 'Newton', 'Watt', 'Volt'],
    correctIndex: 2,
    explanation: 'Power is measured in watts (W). One watt equals one joule of energy transferred per second.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
    id: 'phys-energy-phys-005',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'A device uses 200 J of energy and produces 50 J of useful output. What is its efficiency?',
    options: ['100%', '50%', '25%', '75%'],
    correctIndex: 2,
    explanation: 'Efficiency = useful output / total input × 100 = 50/200 × 100 = 25%.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
    id: 'phys-energy-phys-006',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'What happens to the gravitational potential energy of a ball as it falls?',
    options: ['It increases', 'It stays the same', 'It decreases', 'It disappears completely'],
    correctIndex: 2,
    explanation: 'As a ball falls, its height decreases so its gravitational potential energy decreases. This energy is transferred to the kinetic energy store.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
  "id": "phys-energy-phys-007",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Which material is the best thermal insulator for reducing heat loss from a house?",
  "options": [
    "Aluminium sheet",
    "Solid glass panel",
    "Fibreglass wool",
    "Steel reinforcing mesh"
  ],
  "correctIndex": 2,
  "explanation": "Fibreglass wool traps pockets of air, which is a poor conductor of heat. This makes it an excellent thermal insulator used in loft insulation.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
  "id": "phys-energy-phys-008",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "According to the law of conservation of energy, energy can be:",
  "options": [
    "Created when chemical reactions release it",
    "Destroyed when friction heats the surroundings",
    "Transferred or stored, but not created or destroyed",
    "Created during heating and destroyed again during cooling"
  ],
  "correctIndex": 2,
  "explanation": "The law of conservation of energy states that energy cannot be created or destroyed, only transferred between stores or dissipated to the surroundings.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},

  {
  "id": "phys-energy-phys-009",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "What is the equation for gravitational potential energy?",
  "options": [
    "GPE = ½mv²",
    "GPE = mgh",
    "GPE = Fd",
    "GPE = Pt"
  ],
  "correctIndex": 1,
  "explanation": "Gravitational potential energy = mass × gravitational field strength × height (GPE = mgh). Use the value of g supplied in the question; 9.8 N/kg is commonly used near Earth’s surface. The value is not determined by exam tier.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
  "id": "phys-energy-phys-010",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "A kettle is rated at 2000 W. How much energy does it transfer in 60 seconds?",
  "options": [
    "12 000 J",
    "60 000 J",
    "120 000 J",
    "240 000 J"
  ],
  "correctIndex": 2,
  "explanation": "Energy = power × time. E = 2000 W × 60 s = 120 000 J. Power tells you how many joules of energy are transferred per second.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
  "id": "phys-energy-phys-011",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Which feature makes tidal generation more predictable than wind generation?",
  "options": [
    "Tidal generators provide constant power throughout the day",
    "Tidal output follows daily changes in electricity demand",
    "Tidal cycles can be forecast",
    "Tidal turbines run throughout the full tidal cycle"
  ],
  "correctIndex": 2,
  "explanation": "Tidal cycles are predictable, unlike short-term changes in wind speed. Tidal output still varies during each cycle, so predictable does not mean continuous or constant output.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    id: 'phys-energy-phys-012',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'What energy store does a stretched spring have?',
    options: ['Kinetic energy store', 'Thermal energy store', 'Elastic potential energy store', 'Gravitational potential energy store'],
    correctIndex: 2,
    explanation: 'A stretched or compressed spring stores energy in its elastic potential energy store. This energy is released when the spring returns to its natural shape.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
  "id": "phys-energy-phys-013",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A steady force of 60 N does 240 J of work moving a trolley along the force direction. Use W = Fs. How far does it move?",
  "options": [
    "0.25 m",
    "4 m",
    "40 m",
    "2 m"
  ],
  "correctIndex": 1,
  "explanation": "Rearrange W = Fs to give s = W/F = 240/60 = 4 m. Work done transfers energy; the distance must be measured along the force direction.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  {
  "id": "phys-energy-phys-014",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "What does a thicker wall cavity insulation do?",
  "options": [
    "It increases conduction by trapping more air",
    "It reduces heat transfer",
    "It increases convection currents across the cavity",
    "It reduces the energy needed to raise each room’s temperature"
  ],
  "correctIndex": 1,
  "explanation": "Cavity wall insulation traps air in small pockets, reducing convection and conduction through the walls. This slows the rate of energy transfer and keeps the house warmer.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    id: 'phys-energy-phys-015',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'When a ball is thrown upwards, what energy transfer takes place as it rises?',
    options: ['Thermal to kinetic', 'Kinetic to gravitational potential', 'Gravitational potential to kinetic', 'Chemical to thermal'],
    correctIndex: 1,
    explanation: 'As the ball rises, it slows down (loses kinetic energy) and gains height (gains gravitational potential energy). Energy is transferred from the kinetic store to the gravitational potential store.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
  "id": "phys-energy-phys-016",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "What is the energy stored in food and fuel called?",
  "options": [
    "Kinetic energy store",
    "Chemical energy store",
    "Nuclear energy store",
    "Magnetic energy store"
  ],
  "correctIndex": 1,
  "explanation": "Food and fuels have chemical energy stores. Respiration releases energy from food molecules; digestion breaks large food molecules into smaller soluble molecules. Burning fuels transfers energy by combustion.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    id: 'phys-energy-phys-017',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'What is the unit of energy?',
    options: ['Watt', 'Newton', 'Joule', 'Kilogram'],
    correctIndex: 2,
    explanation: 'Energy is measured in joules (J). Power is measured in watts (W), force in newtons (N), and mass in kilograms (kg).',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
  "id": "phys-energy-phys-018",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Which limitation affects the electricity output of a wind turbine during operation?",
  "options": [
    "It needs a river with a large height drop",
    "It must store fuel to cover periods of low demand",
    "It needs suitable wind speeds",
    "It must heat water into steam before turning the generator"
  ],
  "correctIndex": 2,
  "explanation": "Wind turbines need suitable wind speeds. They do not emit greenhouse gases from fuel combustion during operation, but manufacture, construction and maintenance have life-cycle emissions.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    id: 'phys-energy-phys-019',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'Which process transfers energy by heating through a solid?',
    options: ['Convection', 'Conduction', 'Radiation', 'Evaporation'],
    correctIndex: 1,
    explanation: 'Conduction is the transfer of energy through a solid by vibrating particles passing on energy to neighbouring particles. Metals are good conductors.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },
  {
    id: 'phys-energy-phys-020',
    subject: 'physics',
    topic: 'energy-phys',
    topicLabel: 'Energy',
    question: 'An object has a mass of 5 kg and is moving at 4 m/s. What is its kinetic energy?',
    options: ['20 J', '40 J', '80 J', '10 J'],
    correctIndex: 1,
    explanation: 'KE = ½mv² = ½ × 5 × 4² = ½ × 5 × 16 = 40 J. Remember to square the velocity before multiplying by mass.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd',
  },

  // ─── ELECTRICITY ──────────────────────────────────────────────────────
  {
    id: 'phys-electricity-001',
    subject: 'physics',
    topic: 'electricity',
    topicLabel: 'Electricity',
    question: 'What is electric current a measure of?',
    options: ['The energy stored in a battery', 'The flow of charge per second', 'The resistance of a wire', 'The voltage across a component'],
    correctIndex: 1,
    explanation: 'Electric current is the rate of flow of electrical charge. It is measured in amperes (A), where 1 A = 1 coulomb of charge per second.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p',
  },
  {
    id: 'phys-electricity-002',
    subject: 'physics',
    topic: 'electricity',
    topicLabel: 'Electricity',
    question: 'In a series circuit with two identical resistors, how does the current compare at different points?',
    options: ['It is the same everywhere', 'It halves after each resistor', 'It doubles after each resistor', 'It is zero between the resistors'],
    correctIndex: 0,
    explanation: 'In a series circuit, the current is the same at all points. The current has only one path to follow so it must be identical throughout.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p',
  },
  {
    id: 'phys-electricity-003',
    subject: 'physics',
    topic: 'electricity',
    topicLabel: 'Electricity',
    question: 'What does Ohm\'s law state?',
    options: [
      'Current is proportional to resistance at constant temperature',
      'Current is proportional to voltage at constant temperature',
      'Voltage is proportional to power at constant resistance',
      'Resistance decreases when voltage increases',
    ],
    correctIndex: 1,
    explanation: 'Ohm\'s law states that the current through a conductor is directly proportional to the potential difference across it, provided the temperature remains constant. V = IR.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p',
  },
  {
    id: 'phys-electricity-004',
    subject: 'physics',
    topic: 'electricity',
    topicLabel: 'Electricity',
    question: 'What is the potential difference (voltage) of UK mains electricity?',
    options: ['12 V', '110 V', '230 V', '400 V'],
    correctIndex: 2,
    explanation: 'The UK mains electricity supply is about 230 V. It is an alternating current (a.c.) supply with a frequency of 50 Hz.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p',
  },
  {
  "id": "phys-electricity-005",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "What colour is the earth wire in a UK three-pin plug?",
  "options": [
    "Brown with a blue stripe",
    "Blue with a brown stripe",
    "Green and yellow",
    "Brown with a green stripe"
  ],
  "correctIndex": 2,
  "explanation": "In a UK plug, the earth wire is green and yellow striped. The live wire is brown and the neutral wire is blue.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  {
    id: 'phys-electricity-006',
    subject: 'physics',
    topic: 'electricity',
    topicLabel: 'Electricity',
    question: 'In a parallel circuit, what happens to the total resistance when more resistors are added?',
    options: ['It increases', 'It decreases', 'It stays the same', 'It doubles'],
    correctIndex: 1,
    explanation: 'Adding more resistors in parallel provides more paths for current to flow, which reduces the total resistance of the circuit.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p',
  },
  {
  "id": "phys-electricity-007",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "What is the role of a fuse in an electrical circuit?",
  "options": [
    "To reduce the supply voltage when the current is large",
    "To store excess charge until the current falls",
    "To melt and break an excessive current",
    "To divert current around the appliance while it operates"
  ],
  "correctIndex": 2,
  "explanation": "A fuse contains a thin wire that melts if too much current flows through it, breaking the circuit and protecting the device and wiring from damage or fire.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  {
    id: 'phys-electricity-008',
    subject: 'physics',
    topic: 'electricity',
    topicLabel: 'Electricity',
    question: 'Which formula correctly links electrical power, current, and voltage?',
    options: ['P = V / I', 'P = V × I', 'P = I / V', 'P = V + I'],
    correctIndex: 1,
    explanation: 'Electrical power (watts) equals the potential difference (volts) multiplied by the current (amps): P = V × I.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p',
  },

  // ─── PARTICLE MODEL ───────────────────────────────────────────────────
  {
    id: 'phys-particle-model-001',
    subject: 'physics',
    topic: 'particle-model',
    topicLabel: 'Particle Model',
    question: 'In which state of matter are particles closely packed in a regular arrangement?',
    options: ['Gas', 'Liquid', 'Solid', 'Plasma'],
    correctIndex: 2,
    explanation: 'In a solid, particles are held closely together in a fixed, regular arrangement by strong forces of attraction. They vibrate about fixed positions.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z3ybb82',
  },
  {
    id: 'phys-particle-model-002',
    subject: 'physics',
    topic: 'particle-model',
    topicLabel: 'Particle Model',
    question: 'What is the equation for density?',
    options: ['Density = mass + volume', 'Density = mass × volume', 'Density = mass / volume', 'Density = volume / mass'],
    correctIndex: 2,
    explanation: 'Density is calculated by dividing mass by volume: ρ = m / V. It is measured in kg/m³ or g/cm³.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z3ybb82',
  },
  {
  "id": "phys-particle-model-003",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "What is the name of the change of state from liquid to gas?",
  "options": [
    "Condensation or deposition",
    "Freezing or solidification",
    "Evaporation or boiling",
    "Sublimation or deposition"
  ],
  "correctIndex": 2,
  "explanation": "When a liquid changes to a gas, it is called evaporation (from the surface at any temperature) or boiling (throughout the liquid at the boiling point).",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
  "id": "phys-particle-model-004",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "A pure substance melts at constant pressure. What happens to its temperature during melting?",
  "options": [
    "It increases",
    "It decreases",
    "It stays constant",
    "It fluctuates randomly"
  ],
  "correctIndex": 2,
  "explanation": "Temperature stays constant during melting. Energy increases the potential energy of the particles rather than their average kinetic energy.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
  "id": "phys-particle-model-005",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "What does specific heat capacity tell you about a material?",
  "options": [
    "Energy to melt 1 kg without changing its temperature",
    "Energy to warm 1 kg by 1°C",
    "Energy to boil 1 kg without changing its temperature",
    "Energy transferred each second through a 1 kg sample"
  ],
  "correctIndex": 1,
  "explanation": "Specific heat capacity is the amount of energy required to raise the temperature of 1 kg of a substance by 1°C. Water has a high specific heat capacity.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
  "id": "phys-particle-model-006",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "What is specific latent heat of fusion?",
  "options": [
    "Energy per kg to boil at constant temperature",
    "Energy per kg to melt at constant temperature",
    "Energy per kg to raise the temperature of a solid by one degree",
    "Energy per kg to cool a liquid by one degree without freezing"
  ],
  "correctIndex": 1,
  "explanation": "Specific latent heat of fusion is the energy absorbed per kilogram when a solid melts at its melting point without a temperature change. Freezing releases the same energy per kilogram.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
  "id": "phys-particle-model-007",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "Why does the pressure of a gas increase when it is heated in a sealed rigid container?",
  "options": [
    "The particles expand, leaving less space between them",
    "Faster particles give more frequent, harder wall collisions",
    "More particles form, each striking the walls at the same speed",
    "The particles slow down and remain in contact with the walls longer"
  ],
  "correctIndex": 1,
  "explanation": "Heating a gas gives the particles more kinetic energy, so they move faster. This means they hit the walls of the container more frequently and with greater force, increasing the pressure.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
  "id": "phys-particle-model-008",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "What is internal energy?",
  "options": [
    "The total kinetic energy of the particles, excluding their potential energy",
    "Total particle kinetic and potential energy",
    "The potential energy between particles, excluding their kinetic energy",
    "The energy needed to raise the whole system’s temperature by one degree"
  ],
  "correctIndex": 1,
  "explanation": "Internal energy is the total kinetic energy and potential energy of all the particles that make up a system. Heating a system increases its internal energy.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},

  // ─── ATOMIC STRUCTURE (atomic-structure-phys) ─────────────────────────
  {
  "id": "phys-atomic-structure-phys-001",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "Two atoms each have 6 protons but have 6 and 8 neutrons respectively. How are they related?",
  "options": [
    "They are ions with different charges",
    "They are isotopes of carbon",
    "They are atoms of different elements",
    "They have equal mass numbers"
  ],
  "correctIndex": 1,
  "explanation": "Both atoms are carbon because they have 6 protons. Their different neutron numbers give mass numbers 12 and 14, so they are isotopes.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},
  {
    id: 'phys-atomic-structure-phys-002',
    subject: 'physics',
    topic: 'atomic-structure-phys',
    topicLabel: 'Atomic Structure',
    question: 'What type of radiation is a helium nucleus?',
    options: ['Beta radiation', 'Gamma radiation', 'Alpha radiation', 'X-ray radiation'],
    correctIndex: 2,
    explanation: 'Alpha radiation consists of particles made up of two protons and two neutrons — the same as a helium nucleus. Alpha particles are relatively large and strongly ionising.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zshssrd',
  },
  {
    id: 'phys-atomic-structure-phys-003',
    subject: 'physics',
    topic: 'atomic-structure-phys',
    topicLabel: 'Atomic Structure',
    question: 'What happens to the atomic number when a nucleus emits a beta particle?',
    options: ['It decreases by 2', 'It stays the same', 'It increases by 1', 'It decreases by 1'],
    correctIndex: 2,
    explanation: 'In beta decay, a neutron in the nucleus turns into a proton and emits a fast-moving electron (beta particle). The atomic number increases by 1 because there is now one more proton.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zshssrd',
  },
  {
  "id": "phys-atomic-structure-phys-004",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "A decay graph has these plotted values for undecayed nuclei: 0 h → 800; 6 h → 400; 12 h → 200; 18 h → 100. What half-life does the graph show?",
  "options": [
    "3 hours",
    "6 hours",
    "12 hours",
    "18 hours"
  ],
  "correctIndex": 1,
  "explanation": "The number of undecayed nuclei halves from 800 to 400 in 6 hours. Each later halving also takes 6 hours.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd",
  "image": {"src": "/science/decay-graph.svg", "alt": "Undecayed nuclei against time: 800 at 0 hours, 400 at 6 hours, 200 at 12 hours and 100 at 18 hours."}
},
  {
  "id": "phys-atomic-structure-phys-005",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "In the usual school comparison of alpha, beta and gamma radiation, which penetrates furthest through shielding?",
  "options": [
    "Alpha",
    "Beta",
    "Gamma",
    "All three penetrate equally"
  ],
  "correctIndex": 2,
  "explanation": "Gamma is the most penetrating of these three in the school model. Thick lead or concrete reduces its intensity; penetration depends on the radiation energy and shielding material.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},
  {
  "id": "phys-atomic-structure-phys-006",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "What is the difference between contamination and irradiation?",
  "options": [
    "Contamination is heating; irradiation is cooling a radioactive source",
    "Contamination is radiation exposure; irradiation is radioactive material present",
    "Contamination is radioactive material present; irradiation is radiation exposure",
    "Contamination makes stable nuclei decay; irradiation removes their neutrons"
  ],
  "correctIndex": 2,
  "explanation": "Contamination occurs when radioactive material gets onto or into an object. Irradiation is exposure to radiation from an external source — the object does not become radioactive itself.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},
  {
    id: 'phys-atomic-structure-phys-007',
    scope: "separate",
    subject: 'physics',
    topic: 'atomic-structure-phys',
    topicLabel: 'Atomic Structure',
    question: 'Which type of radiation is used in smoke detectors?',
    options: ['Gamma', 'Beta', 'Alpha', 'X-ray'],
    correctIndex: 2,
    explanation: 'Alpha radiation is used in smoke detectors. Alpha particles ionise the air inside the detector, creating a small current. Smoke absorbs the alpha particles, reducing the current and triggering the alarm.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zshssrd',
  },
  {
  "id": "phys-atomic-structure-phys-008",
  "scope": "separate",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "In nuclear fission, what happens to a heavy nucleus?",
  "options": [
    "It captures neutrons without splitting into smaller nuclei",
    "It splits, releasing energy",
    "It combines with another light nucleus to form a heavier one",
    "It emits gamma radiation while its proton number increases"
  ],
  "correctIndex": 1,
  "explanation": "Nuclear fission is the splitting of a large, unstable nucleus into two smaller nuclei, releasing a large amount of energy and usually two or three neutrons.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},

  // ─── FORCES ───────────────────────────────────────────────────────────
  {
    id: 'phys-forces-001',
    subject: 'physics',
    topic: 'forces',
    topicLabel: 'Forces',
    question: 'Which of the following is a non-contact force?',
    options: ['Friction', 'Air resistance', 'Gravity', 'Normal contact force'],
    correctIndex: 2,
    explanation: 'Gravity is a non-contact force — it acts between objects without them needing to touch. Friction, air resistance, and the normal contact force all require physical contact.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4',
  },
  {
    id: 'phys-forces-002',
    subject: 'physics',
    topic: 'forces',
    topicLabel: 'Forces',
    question: 'What is the relationship between weight, mass, and gravitational field strength?',
    options: ['W = m / g', 'W = m × g', 'W = g / m', 'W = m + g'],
    correctIndex: 1,
    explanation: 'Weight (N) = mass (kg) × gravitational field strength (N/kg). On Earth, g is approximately 9.8 N/kg.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4',
  },
  {
  "id": "phys-forces-003",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A resultant force of 0 N acts on a moving object. What happens to the object?",
  "options": [
    "It slows steadily because there is no resultant force",
    "It speeds up steadily while keeping its direction",
    "It keeps constant velocity",
    "It moves at constant speed around a circular path"
  ],
  "correctIndex": 2,
  "explanation": "Newton's first law states that if the resultant force on an object is zero, a stationary object stays still and a moving object continues at the same speed in the same direction.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  {
    id: 'phys-forces-004',
    subject: 'physics',
    topic: 'forces',
    topicLabel: 'Forces',
    question: 'According to Newton\'s second law, what is the equation linking force, mass, and acceleration?',
    options: ['F = m / a', 'F = m × a', 'F = a / m', 'F = m + a'],
    correctIndex: 1,
    explanation: 'Newton\'s second law states that force equals mass times acceleration: F = ma. A larger force produces a greater acceleration for a given mass.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4',
  },
  {
  "id": "phys-forces-005",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "Which sum gives the total stopping distance of a car?",
  "options": [
    "Thinking time added to braking time",
    "Thinking distance plus braking distance",
    "Distance during braking minus distance during the reaction time",
    "Speed before braking multiplied by the driver’s reaction time"
  ],
  "correctIndex": 1,
  "explanation": "Stopping distance = thinking distance + braking distance. Thinking distance depends on reaction time; braking distance depends on factors like speed, road conditions, and brake condition.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  {
    id: 'phys-forces-006',
    subject: 'physics',
    topic: 'forces',
    topicLabel: 'Forces',
    question: 'What is Newton\'s third law?',
    options: [
      'Every object at rest stays at rest',
      'Force equals mass times acceleration',
      'For every action there is an equal and opposite reaction',
      'Objects accelerate in the direction of the resultant force',
    ],
    correctIndex: 2,
    explanation: 'Newton\'s third law states that whenever two objects interact, they exert equal and opposite forces on each other. These forces act on different objects.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4',
  },
  {
    id: 'phys-forces-007',
    subject: 'physics',
    topic: 'forces',
    topicLabel: 'Forces',
    question: 'What is the unit of weight?',
    options: ['Kilograms (kg)', 'Newtons (N)', 'Metres per second (m/s)', 'Joules (J)'],
    correctIndex: 1,
    explanation: 'Weight is a force caused by gravity acting on mass, so it is measured in newtons (N). Mass is measured in kilograms — mass and weight are not the same thing.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4',
  },
  {
  "id": "phys-forces-008",
  "scope": "higher",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "What is momentum?",
  "options": [
    "The product of force and distance",
    "The product of mass and velocity",
    "The force needed to stop an object",
    "The energy of a moving object"
  ],
  "correctIndex": 1,
  "explanation": "Momentum = mass × velocity (p = mv). It is measured in kg m/s. In a closed system, total momentum is conserved before and after a collision.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},

  // ─── WAVES ────────────────────────────────────────────────────────────
  {
    id: 'phys-waves-001',
    subject: 'physics',
    topic: 'waves',
    topicLabel: 'Waves',
    question: 'In a transverse wave, which direction do the oscillations travel relative to the direction of energy transfer?',
    options: ['The same direction', 'At right angles', 'In the opposite direction', 'In a circular path'],
    correctIndex: 1,
    explanation: 'In a transverse wave, the oscillations (vibrations) are perpendicular (at right angles) to the direction of energy transfer. Examples include light and water waves.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb',
  },
  {
    id: 'phys-waves-002',
    subject: 'physics',
    topic: 'waves',
    topicLabel: 'Waves',
    question: 'What is the equation linking wave speed, frequency, and wavelength?',
    options: ['v = f / λ', 'v = f × λ', 'v = λ / f', 'v = f + λ'],
    correctIndex: 1,
    explanation: 'Wave speed (m/s) = frequency (Hz) × wavelength (m). This equation applies to all types of wave.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb',
  },
  {
  "id": "phys-waves-003",
  "subject": "physics",
  "topic": "waves",
  "topicLabel": "Waves",
  "question": "Sound waves in air are an example of which type of wave?",
  "options": [
    "Transverse",
    "Longitudinal",
    "Electromagnetic",
    "Surface"
  ],
  "correctIndex": 1,
  "explanation": "Sound waves are longitudinal waves. The particles vibrate parallel to the direction of energy transfer, creating compressions and rarefactions.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
},
  {
    id: 'phys-waves-004',
    subject: 'physics',
    topic: 'waves',
    topicLabel: 'Waves',
    question: 'Which part of the electromagnetic spectrum has the highest frequency?',
    options: ['Radio waves', 'Visible light', 'Gamma rays', 'Microwaves'],
    correctIndex: 2,
    explanation: 'Gamma rays have the highest frequency and shortest wavelength in the electromagnetic spectrum. Radio waves have the lowest frequency and longest wavelength.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb',
  },
  {
  "id": "phys-waves-005",
  "subject": "physics",
  "topic": "waves",
  "topicLabel": "Waves",
  "question": "A light ray enters glass from air at an angle of 30° to the normal. How does the transmitted ray change direction?",
  "options": [
    "It bends away from the normal",
    "It bends towards the normal",
    "It continues without changing direction",
    "It travels along the boundary"
  ],
  "correctIndex": 1,
  "explanation": "The ray refracts towards the normal when entering glass from air at this non-zero angle. At normal incidence it would continue straight.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
},
  {
    id: 'phys-waves-006',
    subject: 'physics',
    topic: 'waves',
    topicLabel: 'Waves',
    question: 'Which type of electromagnetic wave is used in TV remote controls?',
    options: ['Ultraviolet', 'Infrared', 'Gamma rays', 'X-rays'],
    correctIndex: 1,
    explanation: 'Infrared radiation is used in TV remote controls. It is also used in thermal imaging cameras and heating.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb',
  },
  {
    id: 'phys-waves-007',
    subject: 'physics',
    topic: 'waves',
    topicLabel: 'Waves',
    question: 'What is the frequency of a wave?',
    options: [
      'The distance between two consecutive crests',
      'The maximum displacement from the rest position',
      'The number of waves passing a point per second',
      'The speed of the wave',
    ],
    correctIndex: 2,
    explanation: 'Frequency is the number of complete waves passing a point per second. It is measured in hertz (Hz), where 1 Hz = 1 wave per second.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb',
  },
  {
    id: 'phys-waves-008',
    subject: 'physics',
    topic: 'waves',
    topicLabel: 'Waves',
    question: 'Which type of electromagnetic radiation can cause skin cancer with overexposure?',
    options: ['Radio waves', 'Visible light', 'Ultraviolet', 'Microwaves'],
    correctIndex: 2,
    explanation: 'Overexposure to ultraviolet (UV) radiation can damage skin cells and lead to skin cancer. It can also cause premature ageing of the skin and eye damage.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb',
  },

  // ─── ELECTROMAGNETISM ─────────────────────────────────────────────────
  {
  "id": "phys-electromagnetism-001",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "What shape is the magnetic field around a bar magnet?",
  "options": [
    "Straight parallel lines equally spaced around the magnet",
    "Concentric circles centred on the middle of the magnet",
    "Curved lines from north to south outside it",
    "Curved lines from south to north outside the magnet"
  ],
  "correctIndex": 2,
  "explanation": "The magnetic field lines around a bar magnet curve from the north pole to the south pole outside the magnet. They show the direction a north-seeking pole would point.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-002",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "What is an electromagnet?",
  "options": [
    "A piece of iron that stays magnetic without any current",
    "A coil made magnetic by a current",
    "A coil that stores charge when connected to a battery",
    "A wire that becomes magnetic when voltage is zero and no current flows"
  ],
  "correctIndex": 1,
  "explanation": "An electromagnet is a coil of wire (solenoid) that produces a magnetic field when an electric current flows through it. Its magnetism can be switched on and off.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-003",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "How can the strength of an electromagnet be increased?",
  "options": [
    "Reduce the current and replace iron with plastic",
    "Increase current and add an iron core",
    "Keep the current fixed and reduce the number of turns",
    "Keep the coil unchanged and replace iron with wood"
  ],
  "correctIndex": 1,
  "explanation": "An electromagnet can be made stronger by increasing the current, increasing the number of coils, and adding a soft iron core inside the solenoid.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-004",
  "scope": "higher",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "What is the motor effect?",
  "options": [
    "The attraction between a permanent magnet and an unmagnetised iron object",
    "Force on a current-carrying wire in a magnetic field",
    "The production of a potential difference by moving a wire across a field",
    "The increase in a wire’s temperature when electric current flows through it"
  ],
  "correctIndex": 1,
  "explanation": "The motor effect occurs when a current-carrying conductor is placed in a magnetic field. The interaction of the two magnetic fields produces a force on the conductor, causing it to move.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-005",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "What does a transformer do?",
  "options": [
    "Changes alternating current into direct current",
    "Stores electrical energy for later use by a circuit",
    "Changes an a.c. supply’s voltage",
    "Measures the resistance of a component in a circuit"
  ],
  "correctIndex": 2,
  "explanation": "A transformer changes the voltage of an alternating current (a.c.) supply. A step-up transformer increases voltage, while a step-down transformer decreases it.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-006",
  "scope": "separate",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "In a loudspeaker, what causes the cone to vibrate and produce sound?",
  "options": [
    "The alternating current heats and cools the cone so that it expands",
    "An alternating current produces a changing magnetic force",
    "Sound waves from the magnet make the coil vibrate by induction",
    "A steady force from a direct current pushes the cone back and forth"
  ],
  "correctIndex": 1,
  "explanation": "In a loudspeaker, an alternating current flows through a coil of wire attached to the cone. The coil is in a magnetic field, so the motor effect produces a force that varies with the current, making the cone vibrate.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-007",
  "scope": "separate",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "What is electromagnetic induction?",
  "options": [
    "Producing a magnetic field by sending current through a stationary coil",
    "Producing voltage by changing the magnetic field through a circuit",
    "Producing thermal energy as current passes through a resistance wire",
    "Producing charge by rubbing two insulating surfaces against each other"
  ],
  "correctIndex": 1,
  "explanation": "Electromagnetic induction is the process of generating a potential difference (voltage) when a conductor moves through a magnetic field, or when the magnetic field around a conductor changes. This is how generators work.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},

  // ─── NEW QUESTIONS (BATCH 2) ──────────────────────────────────────────

  // Electricity (5 more)
  { id: 'phys-electricity-009', subject: 'physics', topic: 'electricity', topicLabel: 'Electricity', question: 'A resistor has a resistance of 20 ohms. The current flowing through it is 0.5 A. What is the potential difference across it?', options: ['0.025 V', '10 V', '20.5 V', '40 V'], correctIndex: 1, explanation: 'V = I × R = 0.5 × 20 = 10 V. This is Ohm\'s law: potential difference = current × resistance.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p' },
  {
  "id": "phys-electricity-010",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "In a simplified fuse-selection model, choose the lowest available rating above a steady operating current of 4 A. Assume suitable wiring and no starting surge. Which rating should be chosen?",
  "options": [
    "3 A",
    "5 A",
    "13 A",
    "1 A"
  ],
  "correctIndex": 1,
  "explanation": "Under the stated rule, 5 A is the lowest available rating above 4 A. Real selection also depends on cable rating and starting current. A 13 A fuse can protect appropriately rated wiring, but is not the choice under this rule.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  {
  "id": "phys-electricity-011",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "A heater has a power rating of 2000 W and runs on 230 V mains. What current does it draw?",
  "options": [
    "About 4.3 A",
    "About 8.7 A",
    "About 17.4 A",
    "About 0.12 A"
  ],
  "correctIndex": 1,
  "explanation": "P = I × V, so I = P ÷ V = 2000 ÷ 230 = 8.7 A. This is why heaters need a 13 A fuse.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  { id: 'phys-electricity-012', subject: 'physics', topic: 'electricity', topicLabel: 'Electricity', question: 'In a series circuit with two identical lamps, what happens if one lamp blows?', options: ['The other lamp gets brighter', 'The other lamp stays the same', 'The other lamp goes out too', 'The other lamp dims'], correctIndex: 2, explanation: 'In a series circuit there is only one path for current. If one lamp breaks, the circuit is broken and no current flows — both lamps go out.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zms2g2p' },
  {
  "id": "phys-electricity-013",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "Why is electricity transmitted at very high voltages through the National Grid?",
  "options": [
    "To increase current so the cables transmit energy more quickly",
    "To reduce current and cable heating losses",
    "To increase cable resistance and prevent current from escaping",
    "To reduce transmitted power so that thinner cables can be used"
  ],
  "correctIndex": 1,
  "explanation": "P = I × V. For the same power, higher voltage means lower current. Lower current means less energy wasted as heat in the cables (P = I²R). Step-up transformers increase the voltage.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},

  // Forces (5 more)
  { id: 'phys-forces-009', subject: 'physics', topic: 'forces', topicLabel: 'Forces', question: 'A car has a mass of 1200 kg and accelerates at 2 m/s². What is the resultant force on the car?', options: ['600 N', '1200 N', '2400 N', '1202 N'], correctIndex: 2, explanation: 'F = m × a = 1200 × 2 = 2400 N. Newton\'s second law: force = mass × acceleration.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4' },
  { id: 'phys-forces-010', subject: 'physics', topic: 'forces', topicLabel: 'Forces', question: 'What is the weight of a 70 kg person on Earth? (g = 10 N/kg)', options: ['7 N', '70 N', '700 N', '7000 N'], correctIndex: 2, explanation: 'Weight = mass × gravitational field strength = 70 × 10 = 700 N. Weight is a force measured in newtons, not the same as mass.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4' },
  {
  "id": "phys-forces-011",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A skydiver reaches terminal velocity. What can be said about the forces acting on them?",
  "options": [
    "Air resistance is greater than weight",
    "Weight is greater than air resistance",
    "Air resistance equals weight",
    "Both air resistance and weight have fallen to zero"
  ],
  "correctIndex": 2,
  "explanation": "At terminal velocity, the skydiver's weight (downward) equals the air resistance (upward). The resultant force is zero, so acceleration is zero — they fall at constant speed.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  { id: 'phys-forces-012', subject: 'physics', topic: 'forces', topicLabel: 'Forces', question: 'A force of 10 N pushes right and a force of 4 N pushes left on the same object. What is the resultant force?', options: ['14 N to the right', '14 N to the left', '6 N to the right', '6 N to the left'], correctIndex: 2, explanation: 'When forces act in opposite directions, subtract: 10 - 4 = 6 N. The resultant acts in the direction of the larger force (right).', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4' },
  {
  "id": "phys-forces-013",
    scope: "separate",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A block exerts a force of 100 N on an area of 0.02 m². What pressure does it exert? Use pressure = force ÷ area.",
  "options": [
    "2 Pa",
    "5,000 Pa",
    "50 Pa",
    "200 Pa"
  ],
  "correctIndex": 1,
  "explanation": "Pressure = 100 ÷ 0.02 = 5,000 Pa. Both the force and the contact area are needed to calculate pressure.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},

  // Waves (5 more)
  { id: 'phys-waves-009', subject: 'physics', topic: 'waves', topicLabel: 'Waves', question: 'A wave has a frequency of 500 Hz and a wavelength of 0.4 m. What is its speed?', options: ['125 m/s', '200 m/s', '500 m/s', '1250 m/s'], correctIndex: 1, explanation: 'Wave speed = frequency × wavelength = 500 × 0.4 = 200 m/s.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb' },
  {
  "id": "phys-waves-010",
  "subject": "physics",
  "topic": "waves",
  "topicLabel": "Waves",
  "question": "Which type of wave are sound waves travelling through air?",
  "options": [
    "Transverse",
    "Longitudinal",
    "Electromagnetic",
    "Transverse electromagnetic"
  ],
  "correctIndex": 1,
  "explanation": "Sound waves are longitudinal — the vibrations are parallel to the direction of wave travel. The particles compress and rarefy along the direction of travel.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
},
  { id: 'phys-waves-011', subject: 'physics', topic: 'waves', topicLabel: 'Waves', question: 'Which type of electromagnetic wave is used in hospital X-ray machines?', options: ['Radio waves', 'Microwaves', 'X-rays', 'Infrared'], correctIndex: 2, explanation: 'X-rays pass through soft tissue but are absorbed by dense materials like bone. This creates shadow images used for medical diagnosis.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zsrndnb' },
  {
  "id": "phys-waves-012",
  "subject": "physics",
  "topic": "waves",
  "topicLabel": "Waves",
  "question": "What is a danger of excessive exposure to ultraviolet (UV) radiation?",
  "options": [
    "Heating damage deep inside muscles",
    "Sunburn and skin cancer",
    "Damage to hearing from vibrating air",
    "Electrical shocks from induced currents"
  ],
  "correctIndex": 1,
  "explanation": "UV radiation can damage skin cells and cause mutations in DNA, leading to sunburn and increased risk of skin cancer. It can also damage eyes.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
},
  {
  "id": "phys-waves-013",
  "scope": "separate",
  "subject": "physics",
  "topic": "waves",
  "topicLabel": "Waves",
  "question": "What is ultrasound used for in medicine?",
  "options": [
    "Destroying tumours with ionising radiation",
    "Imaging bones using electromagnetic waves",
    "Imaging a foetus",
    "Measuring blood oxygen by visible-light absorption"
  ],
  "correctIndex": 2,
  "explanation": "Ultrasound (high-frequency sound waves above 20,000 Hz) is reflected at boundaries between different tissues. The reflections are used to build up an image, e.g. of a baby during pregnancy.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
},

  // Particle model (5 more)
  {
  "id": "phys-particle-model-009",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "A metal block has a mass of 500 g and a volume of 200 cm³. What is its density?",
  "options": [
    "0.4 g/cm³",
    "2.5 g/cm³",
    "0.25 g/cm³",
    "25 g/cm³"
  ],
  "correctIndex": 1,
  "explanation": "Density = mass ÷ volume = 500 ÷ 200 = 2.5 g/cm³.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  { id: 'phys-particle-model-010', subject: 'physics', topic: 'particle-model', topicLabel: 'Particle Model', question: 'How much energy is needed to heat 2 kg of water by 5°C? (specific heat capacity of water = 4200 J/kg°C)', options: ['2100 J', '4200 J', '21 000 J', '42 000 J'], correctIndex: 3, explanation: 'E = m × c × ΔT = 2 × 4200 × 5 = 42,000 J.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z3ybb82' },
  {
  "id": "phys-particle-model-011",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "Why does a gas exert pressure on the walls of its container?",
  "options": [
    "Particles pull on the walls through gravitational attraction",
    "Particle collisions exert forces",
    "Particles resting on the base push sideways through a solid lattice",
    "Particles transfer electric charge to the walls and repel each other"
  ],
  "correctIndex": 1,
  "explanation": "Gas particles move randomly at high speeds. They collide with the container walls, and each collision exerts a tiny force. Billions of collisions per second create gas pressure.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
  "id": "phys-particle-model-012",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "A pure solid is melting at its melting point at constant pressure. How does the supplied energy affect its particles?",
  "options": [
    "Their potential energy increases as they leave fixed positions",
    "Their average kinetic energy increases throughout melting",
    "Their potential energy decreases as they leave fixed positions",
    "Their average kinetic energy decreases throughout melting"
  ],
  "correctIndex": 0,
  "explanation": "During melting, temperature and average kinetic energy stay constant. Supplied energy increases potential energy as particles overcome attractions and leave their fixed positions.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  { id: 'phys-particle-model-013', subject: 'physics', topic: 'particle-model', topicLabel: 'Particle Model', question: 'In which state of matter are particles closest together and in a regular arrangement?', options: ['Gas', 'Liquid', 'Solid', 'Plasma'], correctIndex: 2, explanation: 'In a solid, particles are closely packed in a regular arrangement and vibrate about fixed positions. In liquids they\'re close but irregular; in gases they\'re far apart and random.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z3ybb82' },

  // Atomic structure - physics (5 more)
  { id: 'phys-atomic-structure-phys-009', subject: 'physics', topic: 'atomic-structure-phys', topicLabel: 'Atomic Structure', question: 'A radioactive isotope has a half-life of 6 hours. Starting with 400 Bq, what will the activity be after 18 hours?', options: ['200 Bq', '100 Bq', '50 Bq', '25 Bq'], correctIndex: 2, explanation: '18 hours = 3 half-lives. After 1: 200. After 2: 100. After 3: 50 Bq. Each half-life halves the remaining activity.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zshssrd' },
  {
  "id": "phys-atomic-structure-phys-010",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "Which type of radiation is the most penetrating?",
  "options": [
    "Alpha",
    "Beta",
    "Gamma",
    "All equally penetrating"
  ],
  "correctIndex": 2,
  "explanation": "In the usual alpha, beta and gamma comparison, gamma is the most penetrating. Thick lead or concrete attenuates it: its intensity is reduced rather than completely stopped. Alpha is stopped by paper and beta by a suitable thickness of aluminium.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},
  {
  "id": "phys-atomic-structure-phys-011",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "When an atom emits a beta particle, what happens to its nucleus?",
  "options": [
    "Two protons and two neutrons are emitted together as an alpha particle",
    "A neutron becomes a proton, emitting an electron",
    "A proton becomes a neutron, reducing the nucleus’s atomic number",
    "An electron leaves an outer shell without changing the nucleus"
  ],
  "correctIndex": 1,
  "explanation": "In beta decay, a neutron in the nucleus converts into a proton, and an electron (beta particle) is emitted. The atomic number increases by 1; mass number stays the same.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},
  {
  "id": "phys-atomic-structure-phys-012",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "Radioactive dust settles on a glove. After the external source is removed, why can the glove still expose someone to radiation?",
  "options": [
    "The glove stores the radiation it absorbed",
    "Radioactive material remains on the glove",
    "Every atom in the glove has become radioactive",
    "The glove reflects radiation indefinitely"
  ],
  "correctIndex": 1,
  "explanation": "The glove is contaminated: radioactive atoms on it continue to decay. Merely irradiating an object does not leave radioactive material on it.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},
  {
  "id": "phys-atomic-structure-phys-013",
    scope: "separate",
  "subject": "physics",
  "topic": "atomic-structure-phys",
  "topicLabel": "Atomic Structure",
  "question": "Which emission from americium-241 is used to ionise the air in an ionisation smoke detector?",
  "options": [
    "Alpha",
    "Beta",
    "Gamma",
    "X-rays"
  ],
  "correctIndex": 0,
  "explanation": "Smoke detectors use alpha radiation. Alpha particles ionise the air, creating a small current. Smoke particles absorb the alpha radiation, reducing the current and triggering the alarm.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zshssrd"
},

  // Electromagnetism (5 more)
  { id: 'phys-electromagnetism-008',
    scope: "higher", subject: 'physics', topic: 'electromagnetism', topicLabel: 'Electromagnetism', question: 'Using Fleming\'s left-hand rule, the thumb represents:', options: ['The direction of the current', 'The direction of the magnetic field', 'The direction of the force (motion)', 'The direction of the voltage'], correctIndex: 2, explanation: 'Fleming\'s left-hand rule: thuMb = Motion (force), First finger = Field, seCond finger = Current. The thumb points in the direction the wire moves.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwkww6f' },
  {
  "id": "phys-electromagnetism-009",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "How can you increase the strength of an electromagnet?",
  "options": [
    "Replace the iron core with a non-magnetic material",
    "Reduce both the current and number of turns",
    "Increase turns and current",
    "Increase the coil’s resistance while keeping supply voltage fixed"
  ],
  "correctIndex": 2,
  "explanation": "Electromagnet strength increases with: more turns of wire, higher current, and using a soft iron core. These all increase the magnetic field strength.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  {
  "id": "phys-electromagnetism-010",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "What is a solenoid?",
  "options": [
    "A straight wire whose field has concentric circular lines",
    "A coil carrying current to make a magnetic field",
    "A permanent bar magnet that retains its field without current",
    "A resistor that changes resistance when its temperature changes"
  ],
  "correctIndex": 1,
  "explanation": "A solenoid is a coil of wire. When current flows through it, it produces a magnetic field pattern similar to a bar magnet, with a north and south pole at each end.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},
  { id: 'phys-electromagnetism-011',
    scope: "higher", subject: 'physics', topic: 'electromagnetism', topicLabel: 'Electromagnetism', question: 'In a simple DC motor, what makes the coil keep spinning in the same direction?', options: ['The magnets', 'The battery', 'The split-ring commutator', 'The axle'], correctIndex: 2, explanation: 'The split-ring commutator reverses the direction of current in the coil every half turn. This means the force always acts in the same rotational direction, keeping the coil spinning.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwkww6f' },
  {
  "id": "phys-electromagnetism-012",
  "scope": "separate",
  "subject": "physics",
  "topic": "electromagnetism",
  "topicLabel": "Electromagnetism",
  "question": "How does a loudspeaker convert electrical energy into sound?",
  "options": [
    "Alternating current heats the air directly without moving the cone",
    "A varying magnetic force vibrates the coil and cone",
    "A constant magnetic force moves the cone continuously outwards",
    "Alternating current changes the mass of the cone so that it vibrates"
  ],
  "correctIndex": 1,
  "explanation": "A coil attached to a paper cone sits in a magnetic field. Alternating current causes the coil to move back and forth (motor effect), vibrating the cone which pushes air to create sound waves.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
},

  // Energy (5 more)
  {
  "id": "phys-energy-phys-021",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Equal masses of copper and water receive equal amounts of energy, with negligible losses. Copper has c = 390 J/kg°C and water c = 4200 J/kg°C. Which has the larger temperature rise?",
  "options": [
    "Copper",
    "Water",
    "Both have the same rise",
    "Neither changes temperature"
  ],
  "correctIndex": 0,
  "explanation": "ΔT = E/(mc). With equal mass and energy input, copper has the larger temperature rise because its specific heat capacity is lower.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
  "id": "phys-energy-phys-022",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A spring stays within its limit of proportionality. If its extension doubles, what happens to its stored energy? Use Ee = ½ke².",
  "options": [
    "It doubles",
    "It quadruples",
    "It stays unchanged",
    "It halves"
  ],
  "correctIndex": 1,
  "explanation": "For the same spring constant, stored energy is proportional to extension squared. Doubling the extension gives 2² = 4 times the elastic potential energy. This relation applies within the limit of proportionality.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  { id: 'phys-energy-phys-023', subject: 'physics', topic: 'energy-phys', topicLabel: 'Energy', question: 'A 3 kW heater runs for 2 hours. Electricity costs 30p per kWh. How much does it cost?', options: ['90p', '£1.80', '£6.00', '60p'], correctIndex: 1, explanation: 'Energy = power × time = 3 kW × 2 h = 6 kWh. Cost = 6 × 30p = 180p = £1.80.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zkjr6rd' },
  {
  "id": "phys-energy-phys-024",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "What advantage can a fuelled fossil-fuel power station have over wind turbines and solar panels when electricity is needed?",
  "options": [
    "It uses fuel that is naturally replenished as fast as it is burned",
    "Its output is controllable without wind or sunlight",
    "It produces less carbon dioxide during operation than a wind turbine",
    "It converts all input chemical energy into useful electrical output"
  ],
  "correctIndex": 1,
  "explanation": "A fuelled power station can provide controllable output without wind or sunlight, subject to operating limits. This comparison does not apply to every renewable source: hydroelectric storage and biomass can also provide controllable output.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
  "id": "phys-energy-phys-025",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "Step-up transformers are used at power stations. What do they do?",
  "options": [
    "Increase current and decrease voltage",
    "Raise voltage and lower current",
    "Increase both current and voltage at the same power",
    "Convert alternating current into direct current"
  ],
  "correctIndex": 1,
  "explanation": "Step-up transformers increase voltage and decrease current for efficient transmission through the National Grid. This reduces energy losses in the cables (P = I²R).",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},

  // Forces additional (5 more)
  {
  "id": "phys-forces-014",
    scope: "separate",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A force of 40 N acts on a spanner. The perpendicular distance from the nut to the line of action of the force is 0.3 m. What is the moment?",
  "options": [
    "12 Nm",
    "40.3 Nm",
    "133 Nm",
    "0.0075 Nm"
  ],
  "correctIndex": 0,
  "explanation": "Moment = force × perpendicular distance to the line of action = 40 × 0.3 = 12 N m.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  { id: 'phys-forces-015',
    scope: "separate", subject: 'physics', topic: 'forces', topicLabel: 'Forces', question: 'If a driver gear with 20 teeth drives a gear with 40 teeth, the driven gear turns:', options: ['At the same speed', 'Twice as fast', 'Half as fast', 'Four times as fast'], correctIndex: 2, explanation: 'The driven gear has twice as many teeth (40 vs 20), so it turns half as fast. Gear ratio = driven teeth ÷ driver teeth = 40/20 = 2. It also turns in the opposite direction.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4' },
  { id: 'phys-forces-016', subject: 'physics', topic: 'forces', topicLabel: 'Forces', question: 'Which factors increase braking distance?', options: ['Worn tyres, wet road, higher speed', 'New tyres, dry road, lower speed', 'Lighter car, lower speed', 'Better brakes, dry road'], correctIndex: 0, explanation: 'Braking distance increases with: higher speed, wet/icy roads, worn tyres, worn brakes, and heavier vehicles. These all reduce friction or increase the energy that must be dissipated.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4' },
  { id: 'phys-forces-017', subject: 'physics', topic: 'forces', topicLabel: 'Forces', question: 'Stopping distance = thinking distance + braking distance. Which part is affected by the driver being tired?', options: ['Braking distance', 'Thinking distance', 'Both equally', 'Neither'], correctIndex: 1, explanation: 'Thinking distance depends on the driver\'s reaction time. Being tired, distracted, or under the influence of drugs/alcohol increases reaction time and therefore thinking distance.', learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/ztmttv4' },
  {
  "id": "phys-forces-018",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "According to Newton's third law, if you push a wall with 50 N, what force does the wall exert on you?",
  "options": [
    "50 N in the same direction",
    "25 N in the opposite direction",
    "50 N in the opposite direction",
    "100 N in the opposite direction"
  ],
  "correctIndex": 2,
  "explanation": "Newton's third law: for every action there is an equal and opposite reaction. If you push the wall with 50 N, the wall pushes back on you with 50 N in the opposite direction.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},

  // Foundation methods, applications and coverage additions.
  {
    "id": "phys-energy-phys-026",
    "subject": "physics",
    "topic": "energy-phys",
    "topicLabel": "Energy",
    "question": "In a specific heat capacity investigation, which measurements allow c to be calculated from E = mcΔT?",
    "options": [
      "Energy, mass and temperature rise",
      "Power, length and initial temperature",
      "Mass, length and heating duration",
      "Current, volume and final temperature"
    ],
    "correctIndex": 0,
    "explanation": "Measure energy supplied, block mass and temperature rise. Insulate the block and ensure good thermal contact to reduce errors.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
  },
  {
  "id": "phys-electricity-014",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "When investigating resistance against wire length, why use a low current and switch off between readings?",
  "options": [
    "To allow the wire temperature to rise steadily",
    "To limit wire heating",
    "To keep the voltage identical for every wire length",
    "To make the current zero during each voltage reading"
  ],
  "correctIndex": 1,
  "explanation": "Heating changes resistance and would confound the effect of length. Measure V and I and calculate R = V/I.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  {
    "id": "phys-electricity-015",
    "subject": "physics",
    "topic": "electricity",
    "topicLabel": "Electricity",
    "question": "To measure an I–V characteristic, how should the voltmeter be connected?",
    "options": [
      "In series with the power supply",
      "Across the ammeter instead of the component",
      "In parallel with the component",
      "In series with the component"
    ],
    "correctIndex": 2,
    "explanation": "The voltmeter measures potential difference across the component; the ammeter is in series to measure its current.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
  },
  {
  "id": "phys-particle-model-014",
  "subject": "physics",
  "topic": "particle-model",
  "topicLabel": "Particle Model",
  "question": "An irregular stone sinks in water. How can its volume be measured?",
  "options": [
    "Divide its mass by the density of water",
    "Multiply its maximum length, width and height",
    "Use the water’s final volume without subtracting its start volume",
    "Measure the displaced water volume"
  ],
  "correctIndex": 3,
  "explanation": "Fully submerge the stone and measure the increase in water volume, avoiding trapped air. Use mass ÷ volume for density.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
},
  {
    "id": "phys-forces-019",
    "subject": "physics",
    "topic": "forces",
    "topicLabel": "Forces",
    "question": "A spring is 12.0 cm long before loading and 15.5 cm after loading. What extension should be plotted?",
    "options": [
      "3.5 cm",
      "12.0 cm",
      "15.5 cm",
      "27.5 cm"
    ],
    "correctIndex": 0,
    "explanation": "Extension is the increase in length: 15.5 − 12.0 = 3.5 cm. Record the applied force for each extension.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
  },
  {
    "id": "phys-forces-020",
    "subject": "physics",
    "topic": "forces",
    "topicLabel": "Forces",
    "question": "To investigate how force affects a trolley’s acceleration, what should be kept constant?",
    "options": [
      "The time taken to reach each speed",
      "Total moving mass",
      "The resultant force on the system",
      "The acceleration being measured"
    ],
    "correctIndex": 1,
    "explanation": "Keep the total moving mass constant while changing the resultant force. Otherwise both mass and force affect acceleration.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
  },
  {
    "id": "phys-waves-014",
    "subject": "physics",
    "topic": "waves",
    "topicLabel": "Waves",
    "question": "Five complete wavelengths on a ripple-tank image span 20 cm. What wavelength should be recorded?",
    "options": [
      "20 cm",
      "100 cm",
      "4 cm",
      "5 cm"
    ],
    "correctIndex": 2,
    "explanation": "Measure across several wavelengths and divide by their number: 20 ÷ 5 = 4 cm. This reduces the relative measurement uncertainty.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
  },
  {
    "id": "phys-waves-015",
    "subject": "physics",
    "topic": "waves",
    "topicLabel": "Waves",
    "question": "To compare infrared emission from different surfaces of a Leslie cube, which detector condition should be kept the same?",
    "options": [
      "The surface finish of each face",
      "The radiation reading for each face",
      "The colour of each measured face",
      "Distance from each face"
    ],
    "correctIndex": 3,
    "explanation": "Keep detector distance and angle the same and compare faces at the same temperature. The surface finish is the variable under test.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
  },
  {
    "id": "phys-forces-021",
    "subject": "physics",
    "topic": "forces",
    "topicLabel": "Forces",
    "question": "A constant 30 N force moves a box 4 m in the force’s direction. Use W = Fs. How much work does this force do?",
    "options": [
      "120 J",
      "7.5 J",
      "34 J",
      "1,200 J"
    ],
    "correctIndex": 0,
    "explanation": "W = F × s = 30 × 4 = 120 J.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
  },
  {
  "id": "phys-forces-022",
  "subject": "physics",
  "topic": "forces",
  "topicLabel": "Forces",
  "question": "A spring obeys F = ke and has k = 200 N/m. What extension is produced by 10 N?",
  "options": [
    "0.005 m",
    "0.05 m",
    "0.5 m",
    "20 m"
  ],
  "correctIndex": 1,
  "explanation": "Rearrange to e = F/k = 10/200 = 0.05 m, within the limit of proportionality.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
},
  {
    "id": "phys-forces-023",
    "subject": "physics",
    "topic": "forces",
    "topicLabel": "Forces",
    "question": "A cyclist travels at a constant 6 m/s for 15 s. Use s = vt. What distance is travelled?",
    "options": [
      "21 m",
      "900 m",
      "90 m",
      "2.5 m"
    ],
    "correctIndex": 2,
    "explanation": "Distance = speed × time = 6 × 15 = 90 m.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
  },
  {
    "id": "phys-forces-024",
    "subject": "physics",
    "topic": "forces",
    "topicLabel": "Forces",
    "question": "A trolley speeds up from 2 m/s to 8 m/s in 3 s. Use a = Δv/t. What is its mean acceleration?",
    "options": [
      "3.3 m/s²",
      "6 m/s²",
      "18 m/s²",
      "2 m/s²"
    ],
    "correctIndex": 3,
    "explanation": "The change in speed is 8 − 2 = 6 m/s. Acceleration = 6/3 = 2 m/s².",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
  },
  {
  "id": "phys-energy-phys-027",
  "subject": "physics",
  "topic": "energy-phys",
  "topicLabel": "Energy",
  "question": "A motor does 600 J of work in 15 s. Use P = W/t. What is its mean power?",
  "options": [
    "40 W",
    "4 W",
    "60 W",
    "0.025 W"
  ],
  "correctIndex": 0,
  "explanation": "P = W/t = 600/15 = 40 W. One watt is one joule transferred per second.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
},
  {
    "id": "phys-energy-phys-028",
    "subject": "physics",
    "topic": "energy-phys",
    "topicLabel": "Energy",
    "question": "A device has total input power 80 W and useful output power 20 W. What is its efficiency?",
    "options": [
      "400%",
      "25%",
      "4%",
      "60%"
    ],
    "correctIndex": 1,
    "explanation": "Efficiency = useful output power ÷ total input power = 20/80 = 0.25 = 25%.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
  },
  {
  "id": "phys-electricity-016",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "A current of 0.5 A flows for 40 s. Use Q = It. How much charge flows?",
  "options": [
    "40 C",
    "80 C",
    "20 C",
    "10 C"
  ],
  "correctIndex": 2,
  "explanation": "Charge = current × time = 0.5 × 40 = 20 C.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  {
  "id": "phys-electricity-017",
  "subject": "physics",
  "topic": "electricity",
  "topicLabel": "Electricity",
  "question": "A charge of 30 C transfers 180 J through a component. Use E = QV. What is the potential difference?",
  "options": [
    "0.167 V",
    "3 V",
    "60 V",
    "6 V"
  ],
  "correctIndex": 3,
  "explanation": "V = E/Q = 180/30 = 6 V.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
},
  {
    "id": "phys-electricity-018",
    "subject": "physics",
    "topic": "electricity",
    "topicLabel": "Electricity",
    "question": "A 5 Ω resistor carries a current of 2 A. Use P = I²R. What power is transferred?",
    "options": [
      "20 W",
      "10 W",
      "25 W",
      "50 W"
    ],
    "correctIndex": 0,
    "explanation": "P = 2² × 5 = 4 × 5 = 20 W.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zms2g2p"
  },
  {
    "id": "phys-forces-025",
    "subject": "physics",
    "topic": "forces",
    "topicLabel": "Forces",
    "question": "A vehicle accelerates uniformly from rest at 2 m/s² over 9 m. Use v² − u² = 2as. What is its final speed?",
    "options": [
      "36 m/s",
      "6 m/s",
      "3 m/s",
      "18 m/s"
    ],
    "correctIndex": 1,
    "explanation": "v² = 0² + 2 × 2 × 9 = 36. Taking the square root gives v = 6 m/s.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/ztmttv4"
  },
  {
    "id": "phys-energy-phys-029",
    "subject": "physics",
    "topic": "energy-phys",
    "topicLabel": "Energy",
    "question": "A spring with k = 100 N/m is stretched elastically by 0.20 m. Use Ee = ½ke². What energy is stored?",
    "options": [
      "20 J",
      "200 J",
      "2 J",
      "10 J"
    ],
    "correctIndex": 2,
    "explanation": "Ee = 0.5 × 100 × 0.20² = 2 J. The extension must be squared.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zkjr6rd"
  },
  {
    "id": "phys-waves-016",
    "subject": "physics",
    "topic": "waves",
    "topicLabel": "Waves",
    "question": "A wave has frequency 5 Hz. Use T = 1/f. What is its period?",
    "options": [
      "5 s",
      "10 s",
      "20 s",
      "0.2 s"
    ],
    "correctIndex": 3,
    "explanation": "T = 1/5 = 0.2 s: this is the time for one complete cycle.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zsrndnb"
  },
  {
    "id": "phys-particle-model-015",
    "subject": "physics",
    "topic": "particle-model",
    "topicLabel": "Particle Model",
    "question": "A 0.50 kg solid melts at its melting point. Its specific latent heat is 60,000 J/kg. Use E = mL. How much energy is absorbed?",
    "options": [
      "30,000 J",
      "60,000 J",
      "120,000 J",
      "300,000 J"
    ],
    "correctIndex": 0,
    "explanation": "E = 0.50 × 60,000 = 30,000 J, without a temperature rise during melting.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z3ybb82"
  },
  {
    "id": "phys-electromagnetism-013",
    "subject": "physics",
    "topic": "electromagnetism",
    "topicLabel": "Electromagnetism",
    "question": "A piece of soft iron becomes magnetic near a permanent magnet. What is this called?",
    "options": [
      "Electromagnetic induction",
      "Induced magnetism",
      "Permanent magnetism",
      "Electrostatic charging"
    ],
    "correctIndex": 1,
    "explanation": "A magnetic material can become an induced magnet in a magnetic field. Soft iron loses most of this magnetism when the field is removed.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
  },
  {
    "id": "phys-electromagnetism-014",
    "subject": "physics",
    "topic": "electromagnetism",
    "topicLabel": "Electromagnetism",
    "question": "What can a small plotting compass show near a straight current-carrying wire?",
    "options": [
      "The current’s magnitude",
      "The wire’s temperature",
      "The magnetic field direction",
      "The wire’s resistance"
    ],
    "correctIndex": 2,
    "explanation": "The compass needle aligns with the magnetic field. Around a straight current-carrying wire, field lines form concentric circles.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
  },
  {
    "id": "phys-electromagnetism-015",
    "subject": "physics",
    "topic": "electromagnetism",
    "topicLabel": "Electromagnetism",
    "question": "With distance from a straight wire unchanged, what increases the strength of its magnetic field?",
    "options": [
      "Decreasing the current in the wire",
      "Reversing the same-sized current",
      "Disconnecting the wire from the supply",
      "Increasing the current"
    ],
    "correctIndex": 3,
    "explanation": "A larger current gives a stronger magnetic field at the same distance. Reversing current reverses the field direction.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwkww6f"
  },
];
