import type { Question } from '../types';

// Original coverage questions; Highway Code sources checked 26 October 2026.
export const drivingCoverageQuestions: Question[] = [
  {
    "id": "dt-coverage-alcohol-001",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "In England and Wales, what is the legal alcohol limit in microgrammes per 100 ml of breath?",
    "options": [
      "22",
      "35",
      "50",
      "80"
    ],
    "correctIndex": 1,
    "explanation": "Rule 95 gives a breath limit of 35 microgrammes per 100 ml in England and Wales. Alcohol can impair driving below that limit.",
    "highwayCodeRule": "95",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule95"
  },
  {
    "id": "dt-coverage-alcohol-002",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "A breath sample is being checked against the Scottish drink-driving limit. What is the limit in microgrammes per 100 ml?",
    "options": [
      "20",
      "30",
      "22",
      "35"
    ],
    "correctIndex": 2,
    "explanation": "Rule 95 sets the Scottish breath limit at 22 microgrammes per 100 ml. It is lower than the limit in England and Wales.",
    "highwayCodeRule": "95",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule95"
  },
  {
    "id": "dt-coverage-alcohol-003",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "Which blood-alcohol limits, in milligrammes per 100 ml, match England and Wales / Scotland?",
    "options": [
      "50 / 35",
      "80 / 50",
      "80 / 80",
      "35 / 22"
    ],
    "correctIndex": 1,
    "explanation": "Rule 95 gives blood limits of 80 milligrammes per 100 ml in England and Wales and 50 in Scotland. Blood and breath limits use different units.",
    "highwayCodeRule": "95",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule95"
  },
  {
    "id": "dt-coverage-alcohol-004",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "You drank alcohol late last night and plan to drive early today. Which assumption is unsafe?",
    "options": [
      "Alcohol may still be in your body",
      "A low alcohol level can still impair driving",
      "A full night of sleep guarantees fitness to drive",
      "Alternative transport may be needed this morning"
    ],
    "correctIndex": 2,
    "explanation": "Rule 95 warns that alcohol takes time to leave the body and may still make you unfit to drive the next morning.",
    "highwayCodeRule": "95",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule95"
  },
  {
    "id": "dt-coverage-first-aid-001",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "In the first-aid reminder DR ABC, what does the D ask you to check before approaching a casualty?",
    "options": [
      "Distance to the nearest hospital",
      "Damage to the casualty's vehicle",
      "Danger at the scene",
      "Disability and the casualty's range of movement"
    ],
    "correctIndex": 2,
    "explanation": "Annex 7 starts with Danger: check that approaching is safe. Then consider Response, Airway, Breathing and Circulation.",
    "highwayCodeRule": "Annex 7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-7-first-aid-on-the-road"
  },
  {
    "id": "dt-coverage-first-aid-002",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "The scene is safe. In DR ABC, what does R mean?",
    "options": [
      "Reposition the casualty in a seat",
      "Response: see whether they react",
      "Remove their outer clothing",
      "Record their pulse for one minute"
    ],
    "correctIndex": 1,
    "explanation": "Annex 7 says to check for a response by speaking loudly and gently shaking the shoulders. If there is no response, open the airway and assess normal breathing.",
    "highwayCodeRule": "Annex 7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-7-first-aid-on-the-road"
  },
  {
    "id": "dt-coverage-first-aid-003",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "An adult casualty has no signs of breathing. What compression depth and rate does the Highway Code give for CPR?",
    "options": [
      "3–4 cm, about once each second",
      "5–6 cm, about twice each second",
      "5–6 cm, about once each second",
      "7–8 cm, about twice each second"
    ],
    "correctIndex": 1,
    "explanation": "Annex 7 gives adult chest compressions of about 5–6 cm at roughly two per second. Get emergency help and follow the call handler's instructions.",
    "highwayCodeRule": "Annex 7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-7-first-aid-on-the-road"
  },
  {
    "id": "dt-coverage-first-aid-004",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "After flames are extinguished safely, how should you initially treat a burn?",
    "options": [
      "Cover it with a dry dressing before cooling",
      "Cool it with clean, cool water for at least 20 minutes",
      "Cool it briefly, then remove clothing stuck to the skin",
      "Apply an ice pack directly for at least 20 minutes"
    ],
    "correctIndex": 1,
    "explanation": "Annex 7 says to cool a burn for at least 20 minutes with clean, cool water. Leave anything stuck to it in place; cling film may be used to cover it afterwards.",
    "highwayCodeRule": "Annex 7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-7-first-aid-on-the-road"
  },
  {
    "id": "dt-coverage-first-aid-005",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "A responsive, breathing casualty has a bleeding wound with nothing embedded in it. What should you do?",
    "options": [
      "Apply firm pressure with clean material",
      "Wash the wound repeatedly before applying pressure",
      "Keep checking the wound by lifting the dressing",
      "Apply pressure beside the wound but leave its centre uncovered"
    ],
    "correctIndex": 0,
    "explanation": "Annex 7 advises firm pressure over the wound when nothing is embedded, using the cleanest available material. Protect yourself from contact with blood.",
    "highwayCodeRule": "Annex 7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-7-first-aid-on-the-road"
  },
  {
    "id": "dt-coverage-crossings-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You have slowed safely towards a pelican crossing. Flashing amber is showing while a pedestrian is still crossing. What must you do?",
    "options": [
      "Give way to the pedestrian",
      "Proceed if they have reached the centre line",
      "Move forward slowly to encourage them to finish",
      "Proceed if stopping would need firm braking"
    ],
    "correctIndex": 0,
    "explanation": "Rule 196 requires you to give way to pedestrians on the crossing during flashing amber.",
    "highwayCodeRule": "196",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule196"
  },
  {
    "id": "dt-coverage-crossings-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "The pelican signal changes to flashing amber. The crossing is empty and the road ahead is clear. What may you do?",
    "options": [
      "Proceed with caution",
      "Wait for the next complete red phase",
      "Proceed as though the signal gives priority",
      "Move forward after sounding a warning"
    ],
    "correctIndex": 0,
    "explanation": "Rule 196 permits cautious progress during flashing amber when no pedestrians are on the crossing. This differs from a steady amber traffic light.",
    "highwayCodeRule": "196",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule196"
  },
  {
    "id": "dt-coverage-crossings-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A straight pelican crossing has a central island. During flashing amber, someone is crossing towards the island from the far side. How should you treat the crossing?",
    "options": [
      "As two crossings, so continue past the empty half",
      "As one crossing: wait for the pedestrian",
      "As two crossings unless the pedestrian waves",
      "As one crossing during red but two during amber"
    ],
    "correctIndex": 1,
    "explanation": "Rule 197 treats a straight pelican crossing as one crossing, including when it has a central island. You must wait for someone crossing from the other side.",
    "highwayCodeRule": "197",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule197"
  },
  {
    "id": "dt-coverage-crossings-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist has ridden onto the cycle route of a parallel crossing. What is your duty?",
    "options": [
      "Give way to the cyclist",
      "Give way if the cyclist has dismounted",
      "Continue if the pedestrian stripes are empty",
      "Continue if there is enough room behind the cyclist"
    ],
    "correctIndex": 0,
    "explanation": "Rule 195 requires drivers to give way to a cyclist or pedestrian already on a parallel crossing. You should also give way to those waiting to cross.",
    "highwayCodeRule": "195",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule195"
  },
  {
    "id": "dt-coverage-hard-shoulder-001",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "A motorway can use its hard shoulder as an extra lane. Which overhead display allows ordinary traffic to use it?",
    "options": [
      "A speed limit above that shoulder",
      "A blank display above that shoulder",
      "An amber warning above the neighbouring lane",
      "A national speed limit sign beside the carriageway"
    ],
    "correctIndex": 0,
    "explanation": "Rule 269 allows use of the hard shoulder as an extra lane when a speed limit is displayed above it.",
    "highwayCodeRule": "269",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule269"
  },
  {
    "id": "dt-coverage-hard-shoulder-002",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You are using a motorway hard shoulder that is open as an extra lane. Signs ahead show it closing with a red X. What must you do?",
    "options": [
      "Move safely into an open lane",
      "Stay on the shoulder until the next exit",
      "Remain on the shoulder at a reduced speed",
      "Continue because it was open when you entered"
    ],
    "correctIndex": 0,
    "explanation": "Rule 258 requires you to follow advance closure signs and move safely into an open lane. Rule 269 says a red X above a hard shoulder means it must not be used except in an emergency.",
    "highwayCodeRule": "258, 269",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule258"
  },
  {
    "id": "dt-coverage-hard-shoulder-003",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "The hard shoulder is open as an extra traffic lane. Where are places provided for emergency stops?",
    "options": [
      "Emergency areas",
      "The gap beneath each overhead gantry",
      "The shoulder beside the right-hand lane",
      "The hatched area at the next exit junction"
    ],
    "correctIndex": 0,
    "explanation": "Rule 269 explains that emergency areas are provided where the hard shoulder operates as an extra lane. The running lane must not be treated as a safe stopping area.",
    "highwayCodeRule": "269",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule269"
  },
  {
    "id": "dt-coverage-hard-shoulder-004",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "A motorway sign shows red flashing lights and all lanes closed. Nobody is directing you to continue. May you use the hard shoulder to pass it?",
    "options": [
      "No: the road is closed",
      "Yes, if you leave at the next exit",
      "Yes, if the hard shoulder looks clear",
      "Yes, while keeping below the last displayed limit"
    ],
    "correctIndex": 0,
    "explanation": "Rule 258 prohibits passing an all-lanes closure in any lane or on the hard shoulder, unless a police or traffic officer directs you to do so.",
    "highwayCodeRule": "258",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule258"
  },
  {
    "id": "dt-coverage-documents-001",
    "subject": "vehicleSafety",
    "topic": "documents-loading",
    "topicLabel": "Documents & Loading",
    "question": "For an ordinary new private car in Great Britain, when is its first MOT normally required?",
    "options": [
      "One year after first registration",
      "Two years after first registration",
      "Three years after first registration",
      "Four years after first registration"
    ],
    "correctIndex": 2,
    "explanation": "Annex 3 says cars normally need their first MOT three years after first registration and annually thereafter. Special categories and exemptions have different requirements.",
    "highwayCodeRule": "Annex 3",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements"
  },
  {
    "id": "dt-coverage-documents-002",
    "subject": "vehicleSafety",
    "topic": "documents-loading",
    "topicLabel": "Documents & Loading",
    "question": "You keep your car on private land and want to leave it untaxed. Which notification must you make to DVLA?",
    "options": [
      "A Statutory Off-Road Notification",
      "A request for a replacement registration certificate",
      "A notification that the vehicle has changed keeper",
      "An application to change the vehicle's tax class"
    ],
    "correctIndex": 0,
    "explanation": "Annex 3 requires a SORN when a keeper wants to keep a vehicle untaxed and off the public road.",
    "highwayCodeRule": "Annex 3",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements"
  },
  {
    "id": "dt-coverage-documents-003",
    "subject": "vehicleSafety",
    "topic": "documents-loading",
    "topicLabel": "Documents & Loading",
    "question": "You have declared SORN for a car. Where may you keep it while it remains untaxed?",
    "options": [
      "On your private driveway",
      "On the public road outside your home",
      "In an unrestricted public-road parking bay",
      "In a public-road lay-by away from houses"
    ],
    "correctIndex": 0,
    "explanation": "Annex 3 requires a SORN vehicle to be off the public road. Declaring SORN does not permit untaxed parking on a public road.",
    "highwayCodeRule": "Annex 3",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements"
  },
  {
    "id": "dt-coverage-documents-004",
    "subject": "vehicleSafety",
    "topic": "documents-loading",
    "topicLabel": "Documents & Loading",
    "question": "A non-exempt car is parked on a public road and is not being driven. What is true about vehicle tax?",
    "options": [
      "It must still be taxed",
      "Tax is unnecessary while its engine stays off",
      "An MOT certificate replaces the need for tax",
      "A SORN declaration permits this untaxed parking"
    ],
    "correctIndex": 0,
    "explanation": "Annex 3 requires Vehicle Excise Duty for vehicles used or kept on public roads. Parking rather than driving does not remove that requirement.",
    "highwayCodeRule": "Annex 3",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements"
  },
  {
    "id": "dt-coverage-child-seats-001",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "For ordinary car travel with no exemption, when does the child-restraint requirement normally end?",
    "options": [
      "At age 10 or 125 cm, whichever comes first",
      "At age 12 or 135 cm, whichever comes first",
      "At age 12 and 135 cm, once both are reached",
      "At age 14 or 150 cm, whichever comes first"
    ],
    "correctIndex": 1,
    "explanation": "Rule 99's table uses the 12th birthday or 1.35 metres in height, whichever comes first. The appropriate seat belt is then required.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-coverage-child-seats-002",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "Which front passenger seat must not be used for a rear-facing baby seat?",
    "options": [
      "One protected by an active frontal airbag",
      "One with an adjustable head restraint and seat back",
      "One with an adult three-point seat belt fitted",
      "One where the passenger seat can slide backwards"
    ],
    "correctIndex": 0,
    "explanation": "Rule 101 prohibits a rear-facing baby seat in a seat protected by an active frontal airbag because deployment can seriously injure or kill the child.",
    "highwayCodeRule": "101",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule101"
  },
  {
    "id": "dt-coverage-child-seats-003",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A 13-year-old passenger needs to wear the fitted seat belt. Who is legally responsible for ensuring this?",
    "options": [
      "The driver",
      "The child travelling in the passenger seat",
      "The adult sitting nearest to the child",
      "The child's parent, even when not in the car"
    ],
    "correctIndex": 0,
    "explanation": "Rule 100 makes the driver responsible for ensuring children under 14 use the required restraint or seat belt.",
    "highwayCodeRule": "100",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule100"
  },
  {
    "id": "dt-coverage-child-seats-004",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "You are fitting a child restraint that is suitable for the child. Which fitting guidance should you follow?",
    "options": [
      "The manufacturer's instructions",
      "The position used for a different model of restraint",
      "A fitting guide for a similar seat from another maker",
      "The shortest available route for the adult seat belt"
    ],
    "correctIndex": 0,
    "explanation": "Rule 102 says child restraints should be fitted according to the manufacturer's instructions. Correct installation is part of protecting the child.",
    "highwayCodeRule": "102",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule102"
  },
  {
    "id": "dt-coverage-skids-001",
    "subject": "vehicleSafety",
    "topic": "vehicle-handling",
    "topicLabel": "Vehicle Handling",
    "question": "Which driving action is most likely to start a skid on a slippery bend?",
    "options": [
      "Steering sharply",
      "Reducing speed before entering the bend",
      "Making small, smooth steering adjustments",
      "Maintaining a gentle, steady accelerator position"
    ],
    "correctIndex": 0,
    "explanation": "Rule 119 identifies harsh steering, braking or acceleration and excessive speed for the conditions as common causes of skidding.",
    "highwayCodeRule": "119",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule119"
  },
  {
    "id": "dt-coverage-skids-002",
    "subject": "vehicleSafety",
    "topic": "vehicle-handling",
    "topicLabel": "Vehicle Handling",
    "question": "The rear of your car begins to slide to the right. Which way should you steer to recover?",
    "options": [
      "To the left, away from the slide",
      "To the right, into the slide",
      "Keep the wheel fixed straight ahead",
      "Alternate quickly between left and right"
    ],
    "correctIndex": 1,
    "explanation": "Rule 119 says to steer in the direction of the skid: steer right when the rear slides right. Remove the cause of the skid as well.",
    "highwayCodeRule": "119",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule119"
  },
  {
    "id": "dt-coverage-skids-003",
    "subject": "vehicleSafety",
    "topic": "vehicle-handling",
    "topicLabel": "Vehicle Handling",
    "question": "Excessive acceleration causes your car to skid. How should you remove that cause?",
    "options": [
      "Ease off the accelerator",
      "Press the accelerator further to regain grip",
      "Apply the parking brake while maintaining power",
      "Select a lower gear and accelerate more firmly"
    ],
    "correctIndex": 0,
    "explanation": "Rule 119 says to ease off the accelerator when acceleration causes a skid. Harsh inputs can worsen loss of grip.",
    "highwayCodeRule": "119",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule119"
  },
  {
    "id": "dt-coverage-skids-004",
    "subject": "vehicleSafety",
    "topic": "vehicle-handling",
    "topicLabel": "Vehicle Handling",
    "question": "In a car without ABS, harsh braking locks the wheels and causes a skid. How should you remove the cause?",
    "options": [
      "Release the brake pedal fully",
      "Press the brake pedal harder to slow the car",
      "Apply the parking brake to support the footbrake",
      "Hold the brake pressure until the skid has stopped"
    ],
    "correctIndex": 0,
    "explanation": "Rule 119 says to remove the cause of a skid. If harsh braking has caused it, release the brake pedal fully to allow the wheels to turn and regain grip.",
    "highwayCodeRule": "119",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule119"
  },
  {
    "id": "dt-coverage-tunnels-001",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "You must stop in a tunnel. What minimum gap should you leave behind the vehicle ahead?",
    "options": [
      "1 metre",
      "2 metres",
      "5 metres",
      "10 metres"
    ],
    "correctIndex": 2,
    "explanation": "Rule 126 says to leave at least 5 metres when stopping behind another vehicle in a tunnel.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule126"
  },
  {
    "id": "dt-coverage-tunnels-002",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "On a dry road in a tunnel where visibility is reduced, what is the minimum following time recommended for a car?",
    "options": [
      "One second",
      "Two seconds",
      "Three seconds",
      "Half a second"
    ],
    "correctIndex": 1,
    "explanation": "Rule 126 recommends at least a two-second gap in tunnels where visibility is reduced. Keep more space when conditions require it and remain able to stop within the clear distance.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule126"
  },
  {
    "id": "dt-coverage-tunnels-003",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "At a tunnel entrance, a temporary red traffic light is showing. The tunnel looks empty. What must you do?",
    "options": [
      "Stop at the signal",
      "Continue if no vehicle is approaching",
      "Continue after waiting for thirty seconds",
      "Enter slowly while watching for maintenance work"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109 requires compliance with traffic signals, including temporary signals. An apparently empty tunnel does not cancel the red light.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109"
  }
];
