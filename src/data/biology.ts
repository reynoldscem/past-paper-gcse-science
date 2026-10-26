import type { Question } from '../types';

export const biologyQuestions: Question[] = [
  // ─── Cell Biology (9 questions) ────────────────────────────────────────────
  {
    id: 'bio-cell-biology-001',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'Which organelle controls the activities of the cell?',
    options: ['Cell membrane', 'Nucleus', 'Cytoplasm', 'Mitochondria'],
    correctIndex: 1,
    explanation: 'The nucleus contains genetic material (DNA) and controls the activities of the cell, including growth and reproduction.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
    id: 'bio-cell-biology-002',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'Which structure is found in plant cells but NOT in animal cells?',
    options: ['Nucleus', 'Cell membrane', 'Cell wall', 'Cytoplasm'],
    correctIndex: 2,
    explanation: 'Plant cells have a rigid cell wall made of cellulose that provides structural support. Animal cells do not have a cell wall.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
  "id": "bio-cell-biology-003",
  "subject": "biology",
  "topic": "cell-biology",
  "topicLabel": "Cell Biology",
  "question": "What is the function of mitochondria?",
  "options": [
    "Storage of water and dissolved ions",
    "Photosynthesis",
    "Aerobic respiration",
    "Protein synthesis from amino acids"
  ],
  "correctIndex": 2,
  "explanation": "Mitochondria are the site of aerobic respiration, where glucose and oxygen react to release energy for the cell.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
},
  {
    id: 'bio-cell-biology-004',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'What is the movement of water from a dilute solution to a more concentrated solution through a partially permeable membrane called?',
    options: ['Diffusion', 'Active transport', 'Osmosis', 'Evaporation'],
    correctIndex: 2,
    explanation: 'Osmosis is the net movement of water molecules from a region of higher water concentration (dilute solution) to a region of lower water concentration (concentrated solution) through a partially permeable membrane.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
    id: 'bio-cell-biology-005',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'During mitosis, how many new cells are produced from one parent cell?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Mitosis produces two genetically identical daughter cells from one parent cell. This is how organisms grow and replace damaged cells.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
    id: 'bio-cell-biology-006',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'What is the green pigment found in chloroplasts called?',
    options: ['Haemoglobin', 'Melanin', 'Chlorophyll', 'Carotene'],
    correctIndex: 2,
    explanation: 'Chlorophyll is the green pigment found in chloroplasts that absorbs light energy for photosynthesis.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
  "id": "bio-cell-biology-007",
  "subject": "biology",
  "topic": "cell-biology",
  "topicLabel": "Cell Biology",
  "question": "Which type of transport requires energy from the cell?",
  "options": [
    "Diffusion",
    "Osmosis through a partially permeable membrane",
    "Gas exchange across the alveolar walls",
    "Active transport"
  ],
  "correctIndex": 3,
  "explanation": "Active transport uses energy from respiration to move substances against the concentration gradient, from a lower concentration to a higher concentration.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
},
  {
    id: 'bio-cell-biology-008',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'What type of cell can differentiate into many different types of cell?',
    options: ['Red blood cell', 'Nerve cell', 'Stem cell', 'Muscle cell'],
    correctIndex: 2,
    explanation: 'Stem cells are undifferentiated cells that have the ability to develop into many different specialised cell types in the body.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
    id: 'bio-cell-biology-009',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'What is the unit used to measure the size of most cells?',
    options: ['Metres (m)', 'Centimetres (cm)', 'Millimetres (mm)', 'Micrometres (\u00b5m)'],
    correctIndex: 3,
    explanation: 'Most cells are very small and are measured in micrometres (\u00b5m). One micrometre is one-thousandth of a millimetre.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },

  // ─── Organisation (9 questions) ────────────────────────────────────────────
  {
    id: 'bio-organisation-001',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'What is the correct order of organisation in the human body, from smallest to largest?',
    options: [
      'Organ \u2192 Tissue \u2192 Cell \u2192 Organ system',
      'Cell \u2192 Tissue \u2192 Organ \u2192 Organ system',
      'Tissue \u2192 Cell \u2192 Organ system \u2192 Organ',
      'Cell \u2192 Organ \u2192 Tissue \u2192 Organ system',
    ],
    correctIndex: 1,
    explanation: 'The levels of organisation from smallest to largest are: cells, which form tissues, which form organs, which form organ systems.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
    id: 'bio-organisation-002',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'Where in the digestive system is most of the food absorbed into the blood?',
    options: ['Stomach', 'Large intestine', 'Small intestine', 'Oesophagus'],
    correctIndex: 2,
    explanation: 'The small intestine is where most digested food is absorbed into the bloodstream. It has a large surface area due to villi, which increases absorption.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
    id: 'bio-organisation-003',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'What type of blood vessel carries blood AWAY from the heart?',
    options: ['Veins', 'Capillaries', 'Arteries', 'Venules'],
    correctIndex: 2,
    explanation: 'Arteries carry blood away from the heart. They have thick, muscular walls to withstand the high pressure of blood being pumped from the heart.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
    id: 'bio-organisation-004',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'What is the function of red blood cells?',
    options: ['To fight infection', 'To carry oxygen around the body', 'To help blood clot', 'To carry messages around the body'],
    correctIndex: 1,
    explanation: 'Red blood cells contain haemoglobin, which binds to oxygen in the lungs and carries it to cells around the body.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
    id: 'bio-organisation-005',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'Which enzyme breaks down proteins in the stomach?',
    options: ['Amylase', 'Lipase', 'Protease', 'Bile'],
    correctIndex: 2,
    explanation: 'Protease enzymes (such as pepsin in the stomach) break down proteins into amino acids during digestion.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
  "id": "bio-organisation-006",
  "subject": "biology",
  "topic": "organisation",
  "topicLabel": "Organisation",
  "question": "What does bile do during digestion?",
  "options": [
    "It digests starch",
    "It emulsifies fats",
    "It absorbs nutrients into the blood",
    "It produces acid in the stomach"
  ],
  "correctIndex": 1,
  "explanation": "Bile is produced by the liver and stored in the gall bladder. It emulsifies fats, breaking large fat droplets into smaller ones to increase surface area for lipase to work on.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
},
  {
    id: 'bio-organisation-007',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'Which chamber of the heart pumps blood to the lungs?',
    options: ['Left atrium', 'Left ventricle', 'Right atrium', 'Right ventricle'],
    correctIndex: 3,
    explanation: 'The right ventricle pumps deoxygenated blood to the lungs via the pulmonary artery, where it picks up oxygen and releases carbon dioxide.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
    id: 'bio-organisation-008',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'What component of blood helps with clotting at wound sites?',
    options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'],
    correctIndex: 2,
    explanation: 'Platelets are small cell fragments that clump together at a wound site to form a clot, preventing further blood loss and entry of pathogens.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },
  {
    id: 'bio-organisation-009',
    subject: 'biology',
    topic: 'organisation',
    topicLabel: 'Organisation',
    question: 'Where in the body does gas exchange take place?',
    options: ['Bronchi', 'Trachea', 'Alveoli', 'Bronchioles'],
    correctIndex: 2,
    explanation: 'Gas exchange occurs in the alveoli in the lungs. Oxygen diffuses from the alveoli into the blood, and carbon dioxide diffuses from the blood into the alveoli.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zwj22nb',
  },

  // ─── Infection & Response (9 questions) ────────────────────────────────────
  {
  "id": "bio-infection-001",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "What is a pathogen?",
  "options": [
    "An oxygen-carrying blood cell",
    "A disease-causing microorganism",
    "A protein made in response to infection",
    "A chemical released to neutralise a toxin"
  ],
  "correctIndex": 1,
  "explanation": "A pathogen is a microorganism that enters the body and causes disease. Examples include bacteria, viruses, fungi, and protists.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
    id: 'bio-infection-002',
    subject: 'biology',
    topic: 'infection',
    topicLabel: 'Infection & Response',
    question: 'Which type of pathogen causes the flu (influenza)?',
    options: ['Bacteria', 'Virus', 'Fungus', 'Protist'],
    correctIndex: 1,
    explanation: 'Influenza (flu) is caused by a virus. Viruses reproduce inside living cells and cause cell damage, which makes us feel ill.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9kww6f',
  },
  {
  "id": "bio-infection-003",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "How do white blood cells help defend the body against pathogens?",
  "options": [
    "Carrying oxygen and forming clots",
    "Antibodies, phagocytosis and antitoxins",
    "Producing insulin, digesting glucose and releasing bile",
    "Trapping mucus, moving cilia and producing stomach acid"
  ],
  "correctIndex": 1,
  "explanation": "White blood cells defend the body by: producing antibodies that target specific pathogens, engulfing and digesting pathogens (phagocytosis), and producing antitoxins to neutralise toxins.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
  "id": "bio-infection-004",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "What does a vaccination contain?",
  "options": [
    "Antibiotics",
    "Dead or inactive pathogens",
    "Ready-made antibodies from another animal",
    "Painkillers that prevent antibody production"
  ],
  "correctIndex": 1,
  "explanation": "Vaccinations contain a dead or inactive form of the pathogen. This stimulates the immune system to produce antibodies and memory cells, providing future immunity.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
  "id": "bio-infection-005",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "Why do antibiotics that target bacterial structures or processes not treat viral infections?",
  "options": [
    "Viruses have a thicker bacterial cell wall",
    "Viruses lack the bacterial targets of these drugs",
    "Viruses carry out respiration faster than bacteria",
    "Viruses are larger than the bacteria targeted"
  ],
  "correctIndex": 1,
  "explanation": "Antibiotics target bacterial structures or processes, such as cell-wall production. Viruses lack these targets; being inside cells is not the defining reason.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
    id: 'bio-infection-006',
    subject: 'biology',
    topic: 'infection',
    topicLabel: 'Infection & Response',
    question: 'Which disease is caused by the Plasmodium protist and spread by mosquitoes?',
    options: ['Measles', 'Cholera', 'Malaria', 'Salmonella'],
    correctIndex: 2,
    explanation: 'Malaria is caused by the Plasmodium protist, which is spread between humans through the bite of infected female Anopheles mosquitoes.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9kww6f',
  },
  {
    id: 'bio-infection-007',
    subject: 'biology',
    topic: 'infection',
    topicLabel: 'Infection & Response',
    question: 'Which of these is a physical barrier that prevents pathogens from entering the body?',
    options: ['Antibodies', 'White blood cells', 'Skin', 'Antitoxins'],
    correctIndex: 2,
    explanation: 'The skin acts as a physical barrier that prevents most pathogens from entering the body. Other physical barriers include mucus in the nose and cilia in the airways.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9kww6f',
  },
  {
  "id": "bio-infection-008",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "What is the main problem with the overuse of antibiotics?",
  "options": [
    "Resistant bacteria become more common",
    "The human body becomes resistant",
    "Viruses evolve resistance to the antibiotic",
    "Susceptible bacteria reproduce faster than resistant ones"
  ],
  "correctIndex": 0,
  "explanation": "Overuse of antibiotics leads to antibiotic-resistant strains of bacteria developing through natural selection. These resistant bacteria, such as MRSA, are harder to treat.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
    id: 'bio-infection-009',
    subject: 'biology',
    topic: 'infection',
    topicLabel: 'Infection & Response',
    question: 'Which plant disease is caused by a fungus and results in purple or black spots on leaves?',
    options: ['Tobacco mosaic virus', 'Rose black spot', 'Crown gall disease', 'Ash dieback'],
    correctIndex: 1,
    explanation: 'Rose black spot is a fungal disease that causes purple or black spots on leaves. Affected leaves often turn yellow and drop off, reducing photosynthesis.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z9kww6f',
  },

  // ─── Bioenergetics (8 questions) ───────────────────────────────────────────
  {
    id: 'bio-bioenergetics-001',
    subject: 'biology',
    topic: 'bioenergetics',
    topicLabel: 'Bioenergetics',
    question: 'What is the word equation for photosynthesis?',
    options: [
      'Glucose + Oxygen \u2192 Carbon dioxide + Water',
      'Carbon dioxide + Water \u2192 Glucose + Oxygen',
      'Glucose + Water \u2192 Carbon dioxide + Oxygen',
      'Oxygen + Water \u2192 Glucose + Carbon dioxide',
    ],
    correctIndex: 1,
    explanation: 'Photosynthesis converts carbon dioxide and water into glucose and oxygen, using light energy absorbed by chlorophyll.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgr997h',
  },
  {
    id: 'bio-bioenergetics-002',
    subject: 'biology',
    topic: 'bioenergetics',
    topicLabel: 'Bioenergetics',
    question: 'What are the products of aerobic respiration?',
    options: [
      'Carbon dioxide and water',
      'Glucose and oxygen',
      'Lactic acid and carbon dioxide',
      'Ethanol and carbon dioxide',
    ],
    correctIndex: 0,
    explanation: 'Aerobic respiration produces carbon dioxide and water as waste products, while releasing energy. The equation is: Glucose + Oxygen \u2192 Carbon dioxide + Water.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgr997h',
  },
  {
  "id": "bio-bioenergetics-003",
  "subject": "biology",
  "topic": "bioenergetics",
  "topicLabel": "Bioenergetics",
  "question": "Which is NOT one of the three main limiting factors in the GCSE model of photosynthesis?",
  "options": [
    "Light intensity",
    "Carbon dioxide concentration",
    "Temperature",
    "Oxygen concentration"
  ],
  "correctIndex": 3,
  "explanation": "The GCSE model considers light intensity, carbon dioxide concentration and temperature as the three main limiting factors. Oxygen is a product of photosynthesis.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
},
  {
    id: 'bio-bioenergetics-004',
    subject: 'biology',
    topic: 'bioenergetics',
    topicLabel: 'Bioenergetics',
    question: 'What is produced during anaerobic respiration in human muscles?',
    options: ['Carbon dioxide and water', 'Ethanol and carbon dioxide', 'Lactic acid', 'Glucose and oxygen'],
    correctIndex: 2,
    explanation: 'During anaerobic respiration in human muscles (when oxygen is insufficient), glucose is partially broken down to produce lactic acid. This causes muscle fatigue and cramp.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgr997h',
  },
  {
    id: 'bio-bioenergetics-005',
    subject: 'biology',
    topic: 'bioenergetics',
    topicLabel: 'Bioenergetics',
    question: 'Where in the cell does aerobic respiration mainly take place?',
    options: ['Nucleus', 'Cell membrane', 'Chloroplast', 'Mitochondria'],
    correctIndex: 3,
    explanation: 'Aerobic respiration mainly takes place in the mitochondria of cells. This is where glucose and oxygen react to release energy.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgr997h',
  },
  {
  "id": "bio-bioenergetics-006",
  "subject": "biology",
  "topic": "bioenergetics",
  "topicLabel": "Bioenergetics",
  "question": "What do plants use the glucose produced in photosynthesis for?",
  "options": [
    "Respiration and storage as glycogen",
    "Respiration, cellulose, amino acids and starch",
    "Respiration, absorbing minerals, storing energy as chlorophyll",
    "Making starch, making cellulose, absorbing glucose through roots"
  ],
  "correctIndex": 1,
  "explanation": "Plants use glucose for respiration (releasing energy), making cellulose for cell walls, making amino acids for proteins, and converting it to starch for storage.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
},
  {
    id: 'bio-bioenergetics-007',
    subject: 'biology',
    topic: 'bioenergetics',
    topicLabel: 'Bioenergetics',
    question: 'Which type of respiration releases more energy per glucose molecule?',
    options: ['Anaerobic respiration', 'Aerobic respiration', 'They release the same amount', 'Neither releases energy'],
    correctIndex: 1,
    explanation: 'Aerobic respiration releases much more energy per glucose molecule than anaerobic respiration because glucose is fully broken down in the presence of oxygen.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgr997h',
  },
  {
  "id": "bio-bioenergetics-008",
  "subject": "biology",
  "topic": "bioenergetics",
  "topicLabel": "Bioenergetics",
  "question": "What is metabolism?",
  "options": [
    "Ventilation of the lungs",
    "All chemical reactions in cells or the body",
    "The mechanical movement of food through the intestine",
    "Circulation that transports oxygen around the body"
  ],
  "correctIndex": 1,
  "explanation": "Metabolism is the sum of all the chemical reactions that occur in the body or in a cell. It includes reactions like respiration, photosynthesis, and protein synthesis.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
},

  // ─── Homeostasis (9 questions) ─────────────────────────────────────────────
  {
  "id": "bio-homeostasis-001",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "What is homeostasis?",
  "options": [
    "Matching conditions outside the body",
    "Maintaining a stable internal environment",
    "Increasing every reaction rate as body temperature rises",
    "Stopping all changes to the composition of the blood"
  ],
  "correctIndex": 1,
  "explanation": "Homeostasis is the regulation of the internal conditions of a cell or organism to maintain optimum conditions for function, in response to internal and external changes.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
    id: 'bio-homeostasis-002',
    subject: 'biology',
    topic: 'homeostasis',
    topicLabel: 'Homeostasis',
    question: 'What is the correct order for a reflex arc?',
    options: [
      'Effector \u2192 Relay neurone \u2192 Receptor \u2192 Motor neurone \u2192 Sensory neurone',
      'Receptor \u2192 Sensory neurone \u2192 Relay neurone \u2192 Motor neurone \u2192 Effector',
      'Sensory neurone \u2192 Receptor \u2192 Motor neurone \u2192 Relay neurone \u2192 Effector',
      'Receptor \u2192 Motor neurone \u2192 Relay neurone \u2192 Sensory neurone \u2192 Effector',
    ],
    correctIndex: 1,
    explanation: 'In a reflex arc, a stimulus is detected by a receptor, which sends an impulse along a sensory neurone to a relay neurone in the spinal cord, then along a motor neurone to an effector (muscle or gland).',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zyybb82',
  },
  {
    id: 'bio-homeostasis-003',
    subject: 'biology',
    topic: 'homeostasis',
    topicLabel: 'Homeostasis',
    question: 'Which hormone controls blood glucose levels by causing cells to take up glucose?',
    options: ['Adrenaline', 'Glucagon', 'Insulin', 'Oestrogen'],
    correctIndex: 2,
    explanation: 'Insulin is produced by the pancreas when blood glucose levels are too high. It causes cells (especially liver and muscle cells) to absorb glucose from the blood, lowering the level.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zyybb82',
  },
  {
  "id": "bio-homeostasis-004",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "What is Type 1 diabetes caused by?",
  "options": [
    "Insulin being released whenever blood glucose falls",
    "Too little insulin production",
    "Insulin resistance",
    "An increased conversion of glucose to glycogen in the liver"
  ],
  "correctIndex": 1,
  "explanation": "Type 1 diabetes is caused by the destruction of insulin-producing cells in the pancreas, meaning the body can no longer produce insulin. It is treated with insulin injections.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
  "id": "bio-homeostasis-005",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "What is the small gap between two neurones called?",
  "options": [
    "Axon",
    "Synapse",
    "Receptor",
    "Dendrite"
  ],
  "correctIndex": 1,
  "explanation": "A synapse is the small gap between two neurones. When a nerve impulse reaches a synapse, chemicals called neurotransmitters are released to carry the signal across the gap.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
    id: 'bio-homeostasis-006',
    subject: 'biology',
    topic: 'homeostasis',
    topicLabel: 'Homeostasis',
    question: 'Which gland in the brain is often called the "master gland" because it controls other glands?',
    options: ['Thyroid gland', 'Adrenal gland', 'Pituitary gland', 'Pancreas'],
    correctIndex: 2,
    explanation: 'The pituitary gland is called the master gland because it produces hormones that control many other endocrine glands in the body.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zyybb82',
  },
  {
  "id": "bio-homeostasis-007",
  "scope": "separate",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "How does the body cool down when it is too hot?",
  "options": [
    "Sweating and vasoconstriction",
    "Sweating and skin vasodilation",
    "Skin blood vessels dilate and the muscles begin shivering",
    "Sweating decreases and hairs are raised to trap air"
  ],
  "correctIndex": 1,
  "explanation": "When the body is too hot, sweat glands produce sweat which evaporates and cools the skin. Blood vessels near the skin surface also dilate (vasodilation) to increase heat loss by radiation.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
    id: 'bio-homeostasis-008',
    scope: "separate",
    subject: 'biology',
    topic: 'homeostasis',
    topicLabel: 'Homeostasis',
    question: 'Which organ removes excess water and urea from the blood?',
    options: ['Liver', 'Lungs', 'Heart', 'Kidneys'],
    correctIndex: 3,
    explanation: 'The kidneys filter the blood, removing excess water, urea (a waste product from the breakdown of amino acids), and ions. These are excreted as urine.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zyybb82',
  },
  {
    id: 'bio-homeostasis-009',
    subject: 'biology',
    topic: 'homeostasis',
    topicLabel: 'Homeostasis',
    question: 'What type of response is faster: a nervous response or a hormonal response?',
    options: [
      'Hormonal response',
      'They are the same speed',
      'Nervous response',
      'It depends on the stimulus',
    ],
    correctIndex: 2,
    explanation: 'Nervous responses are much faster than hormonal responses because electrical impulses travel very quickly along neurones. Hormonal responses are slower because hormones travel in the blood.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zyybb82',
  },

  // ─── Inheritance & Variation (8 questions) ─────────────────────────────────
  {
  "id": "bio-inheritance-001",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "How many chromosomes are in a typical nucleated diploid human cell?",
  "options": [
    "23",
    "46",
    "44",
    "48"
  ],
  "correctIndex": 1,
  "explanation": "A typical nucleated diploid human cell has 46 chromosomes in 23 pairs. Gametes have 23 chromosomes; mature red blood cells have no nucleus.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
},
  {
  "id": "bio-inheritance-002",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "What is a gene?",
  "options": [
    "A whole chromosome",
    "DNA coding for a particular protein",
    "A sequence of amino acids in a completed protein",
    "A membrane-bound structure containing chromosomes"
  ],
  "correctIndex": 1,
  "explanation": "A gene is a small section of DNA on a chromosome. Each gene codes for a particular sequence of amino acids, which makes a specific protein.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
},
  {
  "id": "bio-inheritance-003",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "Use the completed Punnett square shown. In a Punnett square cross between two heterozygous parents (Bb x Bb), what is the probability of offspring having the recessive phenotype (bb)?",
  "options": [
    "0%",
    "25%",
    "50%",
    "75%"
  ],
  "correctIndex": 1,
  "explanation": "When two heterozygous parents (Bb x Bb) are crossed, the offspring ratio is 1 BB : 2 Bb : 1 bb. This means there is a 25% (1 in 4) chance of the recessive phenotype (bb).",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn",
  "image": {
    "src": "/science/punnett-bb.svg",
    "alt": "Completed Punnett square: column gametes B and b; row gametes B and b. Top row: BB, Bb. Bottom row: Bb, bb."
  }
},
  {
  "id": "bio-inheritance-004",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "What is natural selection?",
  "options": [
    "Individuals changing their genes because they need to adapt",
    "Better-adapted organisms surviving and reproducing",
    "Humans choosing parents to breed",
    "Individuals passing on traits acquired through exercise"
  ],
  "correctIndex": 1,
  "explanation": "Natural selection is the process where organisms with characteristics best suited to their environment are more likely to survive, reproduce, and pass on their genes to the next generation.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
},
  {
    id: 'bio-inheritance-005',
    subject: 'biology',
    topic: 'inheritance',
    topicLabel: 'Inheritance & Variation',
    question: 'What is a mutation?',
    options: [
      'A change in the sequence of DNA',
      'A type of natural selection',
      'The crossing of two organisms',
      'The splitting of a cell',
    ],
    correctIndex: 0,
    explanation: 'A mutation is a random change in the sequence of bases in DNA. Most mutations have no effect on the protein produced, but some can be harmful or occasionally beneficial.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zvymrmn',
  },
  {
    id: 'bio-inheritance-006',
    subject: 'biology',
    topic: 'inheritance',
    topicLabel: 'Inheritance & Variation',
    question: 'What is the structure of DNA often described as?',
    options: ['A single helix', 'A double helix', 'A triple helix', 'A flat ladder'],
    correctIndex: 1,
    explanation: 'DNA has a double helix structure, which looks like a twisted ladder. The two strands are held together by pairs of complementary bases (A-T and C-G).',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zvymrmn',
  },
  {
    id: 'bio-inheritance-007',
    subject: 'biology',
    topic: 'inheritance',
    topicLabel: 'Inheritance & Variation',
    question: 'Who proposed the theory of evolution by natural selection?',
    options: ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur', 'Alexander Fleming'],
    correctIndex: 1,
    explanation: 'Charles Darwin proposed the theory of evolution by natural selection after his observations during the voyage of HMS Beagle, publishing "On the Origin of Species" in 1859.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zvymrmn',
  },
  {
  "id": "bio-inheritance-008",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "Which of the following is an example of variation caused by the environment rather than genes?",
  "options": [
    "Eye colour",
    "Natural hair colour",
    "An injury scar",
    "Inherited blood group"
  ],
  "correctIndex": 2,
  "explanation": "A scar is caused by environmental factors (an injury), not by genes. Eye colour, natural hair colour, and blood group are all determined by genetic factors.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
},

  // ─── Ecology (8 questions) ─────────────────────────────────────────────────
  {
  "id": "bio-ecology-001",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "What is a community in ecology?",
  "options": [
    "One species in one habitat",
    "Interacting populations in an area",
    "The organisms and non-living conditions in an area",
    "All the habitats with the same physical conditions"
  ],
  "correctIndex": 1,
  "explanation": "A community is made up of all the populations of different species living and interacting together in an area. A single species group is called a population.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-002",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "In a food chain, what do arrows represent?",
  "options": [
    "Predator movement",
    "The transfer of energy",
    "The flow from each consumer back to its food source",
    "The direction of increasing population size"
  ],
  "correctIndex": 1,
  "explanation": "Arrows in a food chain show the direction of energy transfer from one organism to the next. They point from the organism being eaten to the organism doing the eating.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-003",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "What is an adaptation?",
  "options": [
    "A change in the weather",
    "A feature aiding survival",
    "A feeding relationship between two populations",
    "A short-term increase in the size of a population"
  ],
  "correctIndex": 1,
  "explanation": "An adaptation is a feature or characteristic that has evolved to help an organism survive and reproduce in its environment. Adaptations can be structural, behavioural, or functional.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
    id: 'bio-ecology-004',
    subject: 'biology',
    topic: 'ecology',
    topicLabel: 'Ecology',
    question: 'Which of the following is NOT a way that humans are reducing biodiversity?',
    options: [
      'Deforestation',
      'Building nature reserves',
      'Pollution',
      'Overfishing',
    ],
    correctIndex: 1,
    explanation: 'Building nature reserves helps to protect and increase biodiversity. Deforestation, pollution, and overfishing all reduce biodiversity by destroying habitats or reducing populations.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zxxhh39',
  },
  {
  "id": "bio-ecology-005",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "What process returns carbon dioxide to the atmosphere in the carbon cycle?",
  "options": [
    "Photosynthesis",
    "Respiration",
    "Dissolving carbon dioxide in oceans",
    "Carbon becoming locked in sedimentary rock"
  ],
  "correctIndex": 1,
  "explanation": "Respiration (carried out by animals, plants, and decomposers) and combustion of fossil fuels return carbon dioxide to the atmosphere. Photosynthesis removes carbon dioxide from the atmosphere.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-006",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "What piece of equipment would you use to estimate the population of daisies in a field?",
  "options": [
    "Sweep net",
    "Quadrat",
    "Pitfall trap",
    "Pooter"
  ],
  "correctIndex": 1,
  "explanation": "A quadrat is a square frame placed randomly on the ground to count the number of organisms within a known area. Multiple samples are taken and averaged to estimate the whole population.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-007",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "What is biodiversity?",
  "options": [
    "The number of individuals of the most common species",
    "The variety of species",
    "Total biomass",
    "The range of non-living conditions within a habitat"
  ],
  "correctIndex": 1,
  "explanation": "Biodiversity is the variety of all the different species of organisms on Earth, or within an ecosystem. High biodiversity means a large variety of species.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-008",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "What is the role of decomposers in an ecosystem?",
  "options": [
    "Build organic nutrients from carbon dioxide using light",
    "Hunt and eat living prey",
    "Decay dead matter and recycle nutrients",
    "Transport pollen between flowers of the same species"
  ],
  "correctIndex": 2,
  "explanation": "Decomposers (such as bacteria and fungi) break down dead plant and animal matter, recycling nutrients back into the soil so they can be used by plants for growth.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},

  // ─── NEW QUESTIONS (BATCH 2) ──────────────────────────────────────────

  {
    id: 'bio-cell-biology-010',
    subject: 'biology',
    topic: 'cell-biology',
    topicLabel: 'Cell Biology',
    question: 'A cell is 0.05 mm long. It is viewed under a microscope at ×400 magnification. How large will the image appear?',
    options: ['0.5 mm', '2 mm', '20 mm', '200 mm'],
    correctIndex: 2,
    explanation: 'Magnification = image size ÷ actual size, so image size = actual size × magnification = 0.05 × 400 = 20 mm.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/z2mttv4',
  },
  {
  "id": "bio-cell-biology-011",
  "subject": "biology",
  "topic": "cell-biology",
  "topicLabel": "Cell Biology",
  "question": "How does a mature human red blood cell’s lack of a nucleus help its function?",
  "options": [
    "It allows it to divide rapidly in the blood",
    "It leaves more room for haemoglobin",
    "It lets it produce antibodies against pathogens",
    "It enables it to engulf bacteria"
  ],
  "correctIndex": 1,
  "explanation": "A mature red blood cell has no nucleus, leaving more space for haemoglobin that binds and transports oxygen. It does not divide or act as a white blood cell.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
},
  {
  "id": "bio-organisation-010",
  "subject": "biology",
  "topic": "organisation",
  "topicLabel": "Organisation",
  "question": "What happens to an enzyme if the temperature gets too high?",
  "options": [
    "It works faster",
    "It becomes denatured",
    "Its active site remains unchanged",
    "It changes into a different enzyme"
  ],
  "correctIndex": 1,
  "explanation": "At high temperatures, more enzyme molecules denature: their active sites change shape so substrates no longer fit. Activity falls as more molecules are affected; every molecule does not instantly stop just above the optimum.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
},
  {
  "id": "bio-organisation-011",
  "subject": "biology",
  "topic": "organisation",
  "topicLabel": "Organisation",
  "question": "Which vessel returns oxygenated blood from the lungs to the heart?",
  "options": [
    "Pulmonary artery",
    "Vena cava",
    "Pulmonary vein",
    "Aorta"
  ],
  "correctIndex": 2,
  "explanation": "The pulmonary vein returns oxygenated blood to the left atrium. Veins carry blood towards the heart; their definition is not based on oxygen content.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
},
  {
  "id": "bio-infection-010",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "How does vaccination prevent disease?",
  "options": [
    "It supplies ready-made antibodies",
    "It stimulates an immune response to pathogen antigens",
    "It destroys the pathogen using antibiotics in the vaccine",
    "It prevents pathogens entering by thickening the skin"
  ],
  "correctIndex": 1,
  "explanation": "Vaccines contain dead or inactive forms of a pathogen. White blood cells produce antibodies against it. If the real pathogen enters later, memory cells produce antibodies rapidly.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
  "id": "bio-infection-011",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "Why is antibiotic resistance a growing problem?",
  "options": [
    "People inherit resistance to antibiotic medicines",
    "Antibiotics select for resistant bacteria",
    "Viruses develop antibiotic resistance",
    "Antibiotics cause each bacterium to adapt deliberately"
  ],
  "correctIndex": 1,
  "explanation": "When antibiotics are overused, bacteria with resistance mutations survive and reproduce (natural selection). These resistant strains spread, making infections harder to treat.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
  "id": "bio-bioenergetics-009",
  "subject": "biology",
  "topic": "bioenergetics",
  "topicLabel": "Bioenergetics",
  "question": "In a greenhouse with adequate light and warmth, which change can increase photosynthesis if carbon dioxide is limiting?",
  "options": [
    "Increase the oxygen concentration",
    "Raise the temperature further",
    "Increase the carbon dioxide concentration",
    "Reduce the light intensity"
  ],
  "correctIndex": 2,
  "explanation": "Increasing the carbon dioxide supply can raise photosynthesis when it is limiting. Increasing a factor that is already sufficient does not remove the carbon dioxide limitation.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
},
  {
    id: 'bio-bioenergetics-010',
    subject: 'biology',
    topic: 'bioenergetics',
    topicLabel: 'Bioenergetics',
    question: 'What is the word equation for anaerobic respiration in yeast?',
    options: [
      'Glucose → lactic acid',
      'Glucose → ethanol + carbon dioxide',
      'Glucose + oxygen → carbon dioxide + water',
      'Glucose → carbon dioxide + water',
    ],
    correctIndex: 1,
    explanation: 'In yeast (and plants), anaerobic respiration produces ethanol and carbon dioxide. This process is called fermentation and is used in brewing and bread-making.',
    learnMoreUrl: 'https://www.bbc.co.uk/bitesize/topics/zgr997h',
  },
  {
  "id": "bio-homeostasis-010",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "In a simple withdrawal reflex, which neurone carries impulses from the central nervous system to a muscle?",
  "options": [
    "Relay neurone",
    "Sensory neurone",
    "Motor neurone",
    "Receptor cell"
  ],
  "correctIndex": 2,
  "explanation": "A motor neurone carries impulses from the central nervous system to an effector such as a muscle. A sensory neurone carries impulses towards the central nervous system; a relay neurone connects them within it.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
  "id": "bio-homeostasis-011",
  "scope": "separate",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "What does ADH do when you are dehydrated?",
  "options": [
    "Less water reabsorbed; urine more dilute",
    "Kidneys reabsorb more water, producing more dilute urine",
    "More water is reabsorbed; urine is concentrated",
    "Kidneys stop filtering the blood until water is consumed"
  ],
  "correctIndex": 2,
  "explanation": "When dehydrated, more ADH is released by the pituitary gland. ADH causes the kidney tubules to reabsorb more water back into the blood, producing a smaller volume of more concentrated urine.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
  "id": "bio-inheritance-009",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "Use the completed Punnett square shown. Cystic fibrosis is caused by a recessive allele (f). Two parents who are both carriers (Ff) have a child. What is the probability the child will have cystic fibrosis?",
  "options": [
    "0%",
    "25%",
    "50%",
    "75%"
  ],
  "correctIndex": 1,
  "explanation": "From a Punnett square of Ff × Ff: FF, Ff, Ff, ff. Only ff (1 out of 4) has cystic fibrosis. That's a 25% (1 in 4) chance.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn",
  "image": {
    "src": "/science/punnett-ff.svg",
    "alt": "Completed Punnett square: column gametes F and f; row gametes F and f. Top row: FF, Ff. Bottom row: Ff, ff."
  }
},
  {
  "id": "bio-inheritance-010",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "Use the completed Punnett square shown. In a Punnett square cross between Bb and Bb, what proportion of offspring would you expect to show the dominant phenotype?",
  "options": [
    "25%",
    "50%",
    "75%",
    "100%"
  ],
  "correctIndex": 2,
  "explanation": "Bb × Bb gives: BB, Bb, Bb, bb. Three out of four (75%) have at least one dominant allele (B) and will show the dominant phenotype.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn",
  "image": {
    "src": "/science/punnett-bb.svg",
    "alt": "Completed Punnett square: column gametes B and b; row gametes B and b. Top row: BB, Bb. Bottom row: Bb, bb."
  }
},
  {
  "id": "bio-ecology-009",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "The mean count from representative 0.5 m × 0.5 m quadrats is 8 daisies. The field is 200 m². What is the estimated population?",
  "options": [
    "1,600",
    "3,200",
    "6,400",
    "800"
  ],
  "correctIndex": 2,
  "explanation": "Quadrat area = 0.5 × 0.5 = 0.25 m². Density = 8 ÷ 0.25 = 32 daisies per m². Estimated population = 32 × 200 = 6,400.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-010",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "Which factor would increase the rate of decomposition?",
  "options": [
    "A fall in temperature below the optimum",
    "Drying the surroundings",
    "Warming towards the optimum",
    "A reduction in oxygen available for aerobic respiration"
  ],
  "correctIndex": 2,
  "explanation": "Decomposers (bacteria and fungi) work faster at warmer temperatures (up to about 40-50°C), with more moisture, and with more oxygen for aerobic respiration.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},
  {
  "id": "bio-ecology-011",
  "subject": "biology",
  "topic": "ecology",
  "topicLabel": "Ecology",
  "question": "How does deforestation contribute to climate change?",
  "options": [
    "Less carbon dioxide is released by respiration in the remaining trees",
    "Less CO₂ is absorbed, and burning wood converts stored carbon into CO₂",
    "Burning wood removes carbon dioxide from the atmosphere",
    "The remaining trees stop absorbing carbon dioxide"
  ],
  "correctIndex": 1,
  "explanation": "Trees store carbon in organic compounds. Burning wood converts that carbon into CO₂. Removing trees also reduces CO₂ uptake by photosynthesis.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
},

  // Foundation methods, applications and coverage additions.
  {
  "id": "bio-cell-biology-012",
  "subject": "biology",
  "topic": "cell-biology",
  "topicLabel": "Cell Biology",
  "question": "When first viewing a prepared slide with a light microscope, which objective should you select?",
  "options": [
    "Lowest power",
    "High power",
    "Medium power",
    "Oil immersion"
  ],
  "correctIndex": 0,
  "explanation": "Begin at low power to find and centre the specimen, then increase magnification and refocus carefully.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
},
  {
  "id": "bio-cell-biology-013",
  "subject": "biology",
  "topic": "cell-biology",
  "topicLabel": "Cell Biology",
  "question": "Potato cylinders are weighed before and after soaking in sugar solutions. What should be done immediately before each weighing?",
  "options": [
    "Squeeze them",
    "Blot the surface dry",
    "Rinse them in concentrated sugar",
    "Leave them overnight to dry out"
  ],
  "correctIndex": 1,
  "explanation": "Blotting removes surface solution without deliberately removing water from the tissue. This makes the mass comparison fairer.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
},
  {
  "id": "bio-organisation-012",
  "subject": "biology",
  "topic": "organisation",
  "topicLabel": "Organisation",
  "question": "A food sample is tested for reducing sugar using Benedict’s reagent. Which step is needed after mixing?",
  "options": [
    "Filter off the blue reagent first",
    "Cool in ice",
    "Heat in a water bath",
    "Add iodine at room temperature"
  ],
  "correctIndex": 2,
  "explanation": "Benedict’s test requires heating, safely in a hot water bath. A positive result forms a green, yellow, orange or brick-red precipitate.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
},
  {
  "id": "bio-organisation-013",
  "subject": "biology",
  "topic": "organisation",
  "topicLabel": "Organisation",
  "question": "In an amylase investigation, drops are tested with iodine every 30 seconds. Which observation marks the endpoint?",
  "options": [
    "Iodine first turns blue-black",
    "The starch mixture becomes warm",
    "The mixture turns cloudy",
    "Iodine stays orange-brown"
  ],
  "correctIndex": 3,
  "explanation": "Iodine stays orange-brown when starch is no longer detected. Use the same sampling interval at each pH and control temperature.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
},
  {
    "id": "bio-bioenergetics-011",
    "subject": "biology",
    "topic": "bioenergetics",
    "topicLabel": "Bioenergetics",
    "question": "A lamp is moved to investigate light intensity and pondweed photosynthesis. Which variable should be kept constant?",
    "options": [
      "Water temperature",
      "The distance from lamp to plant",
      "The measured oxygen volume",
      "The rate of gas production"
    ],
    "correctIndex": 0,
    "explanation": "Temperature also affects photosynthesis, so control it while changing lamp distance. Measure oxygen volume over the same time each trial.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
  },
  {
  "id": "bio-homeostasis-012",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "In a ruler-drop reaction-time investigation, why repeat the test several times for each condition?",
  "options": [
    "To avoid controls",
    "To calculate a mean",
    "To make each result equal to the previous one",
    "To remove a systematic error in the ruler scale"
  ],
  "correctIndex": 1,
  "explanation": "Repeated measurements allow a mean to be calculated and help reveal variability. Keep the hand position and release method consistent.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
    "id": "bio-ecology-012",
    "subject": "biology",
    "topic": "ecology",
    "topicLabel": "Ecology",
    "question": "How should quadrat locations be chosen to estimate daisies across a field without choosing the densest patches?",
    "options": [
      "Place every quadrat beside the gate",
      "Avoid all patches with bare soil",
      "Use random coordinates",
      "Choose the patches with most flowers"
    ],
    "correctIndex": 2,
    "explanation": "Random coordinates reduce selection bias. Sample enough locations to estimate a representative mean density.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
  },
  {
    "id": "bio-cell-biology-014",
    "subject": "biology",
    "topic": "cell-biology",
    "topicLabel": "Cell Biology",
    "question": "Which structure is present in a bacterial cell but is not enclosed in a nucleus?",
    "options": [
      "Chloroplast",
      "Nucleus",
      "Mitochondrion",
      "Circular DNA"
    ],
    "correctIndex": 3,
    "explanation": "Bacteria are prokaryotes. Their main DNA molecule is circular and lies in the cytoplasm; they do not have a nucleus.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
  },
  {
    "id": "bio-cell-biology-015",
    "subject": "biology",
    "topic": "cell-biology",
    "topicLabel": "Cell Biology",
    "question": "Which cell structures assemble proteins?",
    "options": [
      "Ribosomes",
      "Mitochondria",
      "Chloroplasts",
      "Vacuoles"
    ],
    "correctIndex": 0,
    "explanation": "Ribosomes are the sites of protein synthesis. Both prokaryotic and eukaryotic cells have them.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
  },
  {
  "id": "bio-cell-biology-016",
  "subject": "biology",
  "topic": "cell-biology",
  "topicLabel": "Cell Biology",
  "question": "Two identical membranes separate solutions at the same temperature. Which change increases the net rate of diffusion?",
  "options": [
    "Less membrane surface area",
    "A steeper concentration gradient",
    "A reduction in the concentration difference",
    "An increase in the thickness of the membrane"
  ],
  "correctIndex": 1,
  "explanation": "A greater concentration difference increases net diffusion rate when other factors are unchanged.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
},
  {
    "id": "bio-cell-biology-017",
    "subject": "biology",
    "topic": "cell-biology",
    "topicLabel": "Cell Biology",
    "question": "Why do alveoli have very thin walls?",
    "options": [
      "To contract during exhalation",
      "To produce more mucus",
      "To shorten the diffusion path",
      "To trap inhaled dust"
    ],
    "correctIndex": 2,
    "explanation": "A short diffusion path helps gases move rapidly between alveolar air and the blood.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
  },
  {
    "id": "bio-cell-biology-018",
    "subject": "biology",
    "topic": "cell-biology",
    "topicLabel": "Cell Biology",
    "question": "What must happen to a cell’s DNA before mitosis?",
    "options": [
      "It is halved",
      "It leaves the nucleus",
      "It becomes protein",
      "It is copied"
    ],
    "correctIndex": 3,
    "explanation": "DNA is replicated before mitosis so each daughter cell can receive a complete set of chromosomes.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
  },
  {
    "id": "bio-cell-biology-019",
    "subject": "biology",
    "topic": "cell-biology",
    "topicLabel": "Cell Biology",
    "question": "Which is a possible risk when undifferentiated stem cells are transplanted?",
    "options": [
      "Tumour formation",
      "Improved tissue repair",
      "Cell replacement",
      "Restored movement"
    ],
    "correctIndex": 0,
    "explanation": "If transplanted cells divide without proper control they may form tumours. Stem-cell treatments require testing for safety.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z2mttv4"
  },
  {
    "id": "bio-organisation-014",
    "subject": "biology",
    "topic": "organisation",
    "topicLabel": "Organisation",
    "question": "Which plant tissue carries water and mineral ions from roots to leaves?",
    "options": [
      "Palisade mesophyll",
      "Xylem",
      "Phloem",
      "Epidermis"
    ],
    "correctIndex": 1,
    "explanation": "Xylem carries water and mineral ions and helps support the plant. Phloem transports dissolved sugars.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
  },
  {
    "id": "bio-organisation-015",
    "subject": "biology",
    "topic": "organisation",
    "topicLabel": "Organisation",
    "question": "What is translocation in a plant?",
    "options": [
      "Absorption of water by root hairs",
      "Movement of gases through stomata",
      "Transport of dissolved sugars",
      "Evaporation of water from leaves"
    ],
    "correctIndex": 2,
    "explanation": "Translocation is the movement of dissolved sugars through phloem to tissues that use or store them.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
  },
  {
    "id": "bio-organisation-016",
    "subject": "biology",
    "topic": "organisation",
    "topicLabel": "Organisation",
    "question": "Which change usually increases transpiration if other conditions stay the same?",
    "options": [
      "Higher humidity",
      "Lower temperature",
      "Less light",
      "Greater air movement"
    ],
    "correctIndex": 3,
    "explanation": "Moving air removes water vapour near the leaf, maintaining a steeper gradient for water loss.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
  },
  {
    "id": "bio-organisation-017",
    "subject": "biology",
    "topic": "organisation",
    "topicLabel": "Organisation",
    "question": "How does a coronary stent help blood reach heart muscle?",
    "options": [
      "It holds an artery open",
      "It lowers cholesterol",
      "It controls heart rate",
      "It repairs a valve"
    ],
    "correctIndex": 0,
    "explanation": "A stent supports a narrowed coronary artery so blood can flow more freely to heart muscle.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
  },
  {
  "id": "bio-organisation-018",
  "subject": "biology",
  "topic": "organisation",
  "topicLabel": "Organisation",
  "question": "Which statement describes a malignant tumour?",
  "options": [
    "It remains enclosed",
    "It can spread to other tissues",
    "It is a mass of normal cells that cannot divide",
    "It grows by making existing cells larger without division"
  ],
  "correctIndex": 1,
  "explanation": "Malignant tumours invade nearby tissues and can spread through the blood to form secondary tumours.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
},
  {
    "id": "bio-organisation-019",
    "subject": "biology",
    "topic": "organisation",
    "topicLabel": "Organisation",
    "question": "What does a positive iodine test for starch look like?",
    "options": [
      "Lilac-purple",
      "Cloudy white",
      "Blue-black",
      "Brick-red"
    ],
    "correctIndex": 2,
    "explanation": "Iodine turns blue-black in the presence of starch. Different food tests use different reagents and endpoints.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zwj22nb"
  },
  {
  "id": "bio-infection-012",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "Which pair describes common symptoms of measles?",
  "options": [
    "Coughing blood and persistent weight loss",
    "Painful urination and thick discharge",
    "Vomiting and diarrhoea after contaminated food",
    "Fever and a red rash"
  ],
  "correctIndex": 3,
  "explanation": "Measles is a viral infection spread by inhaled droplets. Vaccination reduces transmission and the risk of serious complications.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
    "id": "bio-infection-013",
    "subject": "biology",
    "topic": "infection",
    "topicLabel": "Infection & Response",
    "question": "What does HIV damage if infection is not successfully controlled?",
    "options": [
      "Immune cells",
      "Red blood cells",
      "Enamel-forming cells",
      "Stomach lining cells"
    ],
    "correctIndex": 0,
    "explanation": "HIV attacks immune cells. Antiretroviral drugs can control the infection; advanced immune damage can lead to AIDS.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
  },
  {
    "id": "bio-infection-014",
    "subject": "biology",
    "topic": "infection",
    "topicLabel": "Infection & Response",
    "question": "How does tobacco mosaic virus commonly reduce a plant’s growth?",
    "options": [
      "It blocks pollination",
      "It reduces photosynthesis",
      "It increases transpiration",
      "It increases mineral uptake"
    ],
    "correctIndex": 1,
    "explanation": "TMV causes mosaic leaf discolouration. Reduced photosynthesis means less glucose is available for growth.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
  },
  {
    "id": "bio-infection-015",
    "subject": "biology",
    "topic": "infection",
    "topicLabel": "Infection & Response",
    "question": "Which practice kills Salmonella bacteria in contaminated food before it is eaten?",
    "options": [
      "Rinsing with cold water",
      "Adding a small amount of salt",
      "Thorough cooking",
      "Refrigerating after cooking"
    ],
    "correctIndex": 2,
    "explanation": "Proper cooking kills Salmonella bacteria. Hygiene and avoiding cross-contamination also reduce infection risk.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
  },
  {
    "id": "bio-infection-016",
    "subject": "biology",
    "topic": "infection",
    "topicLabel": "Infection & Response",
    "question": "Which measure directly reduces the sexual transmission of gonorrhoea?",
    "options": [
      "Taking the pill",
      "Using an implant",
      "Using a contraceptive injection",
      "Using a condom"
    ],
    "correctIndex": 3,
    "explanation": "Barrier contraception reduces contact with infected fluids. Hormonal contraceptives do not protect against this bacterial infection.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
  },
  {
  "id": "bio-infection-017",
  "subject": "biology",
  "topic": "infection",
  "topicLabel": "Infection & Response",
  "question": "Why are some clinical-trial volunteers given a placebo?",
  "options": [
    "To provide a comparison",
    "To increase the dose",
    "To ensure every volunteer receives active medicine",
    "To replace the need to allocate groups randomly"
  ],
  "correctIndex": 0,
  "explanation": "A placebo group helps distinguish effects of the active drug from other effects. Trials also assess toxicity, efficacy and suitable dose.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/z9kww6f"
},
  {
    "id": "bio-bioenergetics-012",
    "subject": "biology",
    "topic": "bioenergetics",
    "topicLabel": "Bioenergetics",
    "question": "Pondweed gives 3, 6 and 6 cm³ of oxygen per minute at successively higher light intensities. What do the last two results suggest?",
    "options": [
      "Another factor is limiting",
      "More light is still increasing the rate",
      "The rate has fallen to zero",
      "Oxygen production is decreasing"
    ],
    "correctIndex": 0,
    "explanation": "The plateau suggests more light no longer increases the rate under these conditions. Carbon dioxide supply or temperature may now limit the rate.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
  },
  {
    "id": "bio-bioenergetics-013",
    "subject": "biology",
    "topic": "bioenergetics",
    "topicLabel": "Bioenergetics",
    "question": "Why does heart rate increase during exercise?",
    "options": [
      "To slow muscle respiration",
      "To lower muscle temperature",
      "To deliver more oxygen",
      "To lower blood glucose uptake"
    ],
    "correctIndex": 2,
    "explanation": "A higher heart rate increases delivery of oxygen and glucose for respiration and helps remove carbon dioxide.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
  },
  {
    "id": "bio-bioenergetics-014",
    "subject": "biology",
    "topic": "bioenergetics",
    "topicLabel": "Bioenergetics",
    "question": "During vigorous exercise, why does an oxygen debt build up in the muscles?",
    "options": [
      "Muscles stop respiring once glucose runs out",
      "Muscles respire anaerobically when oxygen supply is too low",
      "Muscles release extra oxygen into the blood",
      "Muscles respire aerobically and produce lactic acid"
    ],
    "correctIndex": 1,
    "explanation": "If the muscles are not supplied with enough oxygen, they respire anaerobically. Glucose is only partly broken down, lactic acid builds up and an oxygen debt is created.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
  },
  {
    "id": "bio-bioenergetics-015",
    "subject": "biology",
    "topic": "bioenergetics",
    "topicLabel": "Bioenergetics",
    "question": "Which metabolic reaction makes a storage carbohydrate in plants?",
    "options": [
      "Glucose joining to make starch",
      "Starch breaking into glucose molecules",
      "Glucose reacting with oxygen in respiration",
      "Protein breaking into amino acids"
    ],
    "correctIndex": 0,
    "explanation": "Plants convert some glucose into starch for storage. Metabolism includes both building larger molecules and breaking molecules down.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zgr997h"
  },
  {
  "id": "bio-homeostasis-013",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "What is a common feature of Type 2 diabetes?",
  "options": [
    "Cells respond less well to insulin",
    "No insulin is produced",
    "Blood glucose falls because insulin is overproduced",
    "Insulin stimulates glucose release from liver stores"
  ],
  "correctIndex": 0,
  "explanation": "In Type 2 diabetes, body cells become less responsive to insulin, making blood glucose harder to regulate.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
  "id": "bio-homeostasis-014",
  "subject": "biology",
  "topic": "homeostasis",
  "topicLabel": "Homeostasis",
  "question": "Which hormone stimulates an egg to mature in an ovarian follicle?",
  "options": [
    "Progesterone",
    "Testosterone",
    "FSH",
    "Oestrogen"
  ],
  "correctIndex": 2,
  "explanation": "Follicle-stimulating hormone (FSH) causes an egg to mature in the ovary.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
},
  {
    "id": "bio-homeostasis-015",
    "subject": "biology",
    "topic": "homeostasis",
    "topicLabel": "Homeostasis",
    "question": "Which hormone triggers ovulation?",
    "options": [
      "Insulin",
      "Oestrogen",
      "Progesterone",
      "LH"
    ],
    "correctIndex": 3,
    "explanation": "Luteinising hormone (LH) triggers release of an egg from the ovary.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
  },
  {
    "id": "bio-homeostasis-016",
    "subject": "biology",
    "topic": "homeostasis",
    "topicLabel": "Homeostasis",
    "question": "Which contraceptive method acts as a physical barrier to sperm?",
    "options": [
      "A condom",
      "An implant",
      "A hormone injection",
      "The combined pill"
    ],
    "correctIndex": 0,
    "explanation": "A condom forms a physical barrier. The other choices use hormones to affect reproduction.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zyybb82"
  },
  {
    "id": "bio-inheritance-011",
    "subject": "biology",
    "topic": "inheritance",
    "topicLabel": "Inheritance & Variation",
    "question": "What is a key difference between sexual and asexual reproduction?",
    "options": [
      "Asexual reproduction requires meiosis",
      "Sexual reproduction joins gametes",
      "Asexual reproduction joins two gametes",
      "Sexual reproduction produces clones"
    ],
    "correctIndex": 1,
    "explanation": "Sexual reproduction involves fusion of gametes and combines genetic information. Asexual reproduction uses one parent without gamete fusion.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
  },
  {
    "id": "bio-inheritance-012",
    "subject": "biology",
    "topic": "inheritance",
    "topicLabel": "Inheritance & Variation",
    "question": "How many chromosomes does a typical human gamete have after meiosis?",
    "options": [
      "92",
      "12",
      "23",
      "46"
    ],
    "correctIndex": 2,
    "explanation": "Meiosis halves chromosome number. Human gametes have 23 chromosomes; fertilisation restores the diploid number of 46.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
  },
  {
    "id": "bio-inheritance-013",
    "subject": "biology",
    "topic": "inheritance",
    "topicLabel": "Inheritance & Variation",
    "question": "In the usual human sex-chromosome model, which sperm chromosome produces an XY offspring when it joins an X egg?",
    "options": [
      "X",
      "XX",
      "XY",
      "Y"
    ],
    "correctIndex": 3,
    "explanation": "An egg contributes X. A sperm contributing Y produces XY in this model.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
  },
  {
    "id": "bio-inheritance-014",
    "subject": "biology",
    "topic": "inheritance",
    "topicLabel": "Inheritance & Variation",
    "question": "How does selective breeding begin?",
    "options": [
      "Choose parents with desired traits",
      "Insert a gene into DNA",
      "Irradiate seeds to cause mutations",
      "Clone a single adult"
    ],
    "correctIndex": 0,
    "explanation": "Selected parents are bred, and offspring with desired characteristics are chosen for further breeding over many generations.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
  },
  {
    "id": "bio-inheritance-015",
    "subject": "biology",
    "topic": "inheritance",
    "topicLabel": "Inheritance & Variation",
    "question": "Which example uses genetic engineering?",
    "options": [
      "Crossing two varieties of apple tree",
      "Adding a human insulin gene to bacteria",
      "Choosing the largest seeds for planting",
      "Breeding cows with high milk yields"
    ],
    "correctIndex": 1,
    "explanation": "Genetic engineering transfers selected genetic material. Modified bacteria can produce human insulin.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
  },
  {
  "id": "bio-inheritance-016",
  "subject": "biology",
  "topic": "inheritance",
  "topicLabel": "Inheritance & Variation",
  "question": "What can fossils provide evidence about?",
  "options": [
    "Past organisms",
    "The exact age of every living species",
    "The complete DNA sequence of extinct organisms",
    "The precise behaviour of every fossilised individual"
  ],
  "correctIndex": 0,
  "explanation": "Fossils provide evidence about organisms that lived in the past and changes in life over time; the fossil record is incomplete.",
  "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
},
  {
    "id": "bio-inheritance-017",
    "subject": "biology",
    "topic": "inheritance",
    "topicLabel": "Inheritance & Variation",
    "question": "Which list gives the three domains in the three-domain classification system?",
    "options": [
      "Animals, Plants, Fungi",
      "Protists, Plants, Animals",
      "Bacteria, Viruses, Animals",
      "Archaea, Bacteria, Eukaryota"
    ],
    "correctIndex": 3,
    "explanation": "The three domains are Archaea, Bacteria and Eukaryota. Molecular evidence helped distinguish Archaea from Bacteria.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zvymrmn"
  },
  {
    "id": "bio-ecology-013",
    "subject": "biology",
    "topic": "ecology",
    "topicLabel": "Ecology",
    "question": "Which is an abiotic factor that can affect plant distribution?",
    "options": [
      "Soil pH",
      "Grazing",
      "Competition",
      "Fungal disease"
    ],
    "correctIndex": 0,
    "explanation": "Abiotic factors are non-living features such as pH, light, temperature and moisture. Competition and disease are biotic factors.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
  },
  {
    "id": "bio-ecology-014",
    "subject": "biology",
    "topic": "ecology",
    "topicLabel": "Ecology",
    "question": "A student samples plants every metre along a line from shade into sunlight. What is this method called?",
    "options": [
      "A food web",
      "A transect",
      "Random quadrats",
      "Mark-release-recapture"
    ],
    "correctIndex": 1,
    "explanation": "A transect samples along an environmental gradient and can reveal how distribution changes with conditions.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
  },
  {
    "id": "bio-ecology-015",
    "subject": "biology",
    "topic": "ecology",
    "topicLabel": "Ecology",
    "question": "Which process returns water vapour from plant leaves to the atmosphere?",
    "options": [
      "Condensation",
      "Absorption",
      "Transpiration",
      "Precipitation"
    ],
    "correctIndex": 2,
    "explanation": "Transpiration is water loss from leaves. It contributes water vapour to the atmosphere as part of the water cycle.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
  },
  {
    "id": "bio-ecology-016",
    "subject": "biology",
    "topic": "ecology",
    "topicLabel": "Ecology",
    "question": "A flowering plant relies on insects for pollination, and the insects obtain nectar. What does this illustrate?",
    "options": [
      "Competition",
      "Predation",
      "Decomposition",
      "Interdependence"
    ],
    "correctIndex": 3,
    "explanation": "The organisms depend on one another: insects obtain food and the plant gains a pollination service.",
    "learnMoreUrl": "https://www.bbc.co.uk/bitesize/topics/zxxhh39"
  },
];
