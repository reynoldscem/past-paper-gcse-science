import type { Question } from '../types';

// Original questions about unmodified official OGL images; see public/driving/manifest.json.
export const drivingVisualQuestions: Question[] = [
  {
    "id": "dt-visual-001",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "National speed limit applies",
      "Minimum speed applies",
      "No vehicles allowed",
      "End of all road rules"
    ],
    "correctIndex": 0,
    "explanation": "The applicable limit depends on your vehicle and the type of road.",
    "highwayCodeRule": "124",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-national-speed-limit.jpg",
      "alt": "White circle with a black diagonal stripe"
    }
  },
  {
    "id": "dt-visual-002",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Stop at the line and give way",
      "Slow down only if traffic is visible",
      "Stop only when turning right",
      "Continue if your lane is clear"
    ],
    "correctIndex": 0,
    "explanation": "A STOP sign requires a complete stop at the transverse line before you proceed safely.",
    "highwayCodeRule": "171",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-stop-give-way.jpg",
      "alt": "Red eight-sided STOP sign"
    }
  },
  {
    "id": "dt-visual-003",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Give way to traffic on the major road",
      "You have priority over joining traffic",
      "Always stop for ten seconds",
      "No entry to this road"
    ],
    "correctIndex": 0,
    "explanation": "Give way at the broken transverse line; stop if necessary.",
    "highwayCodeRule": "172",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-give-way.jpg",
      "alt": "Inverted white triangle with a red border"
    }
  },
  {
    "id": "dt-visual-004",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No entry for vehicular traffic",
      "No parking",
      "No stopping",
      "No overtaking"
    ],
    "correctIndex": 0,
    "explanation": "This prohibits entry from this direction, rather than merely restricting parking.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-entry-vehicular-traffic.jpg",
      "alt": "Red circle containing a horizontal white bar"
    }
  },
  {
    "id": "dt-visual-005",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No vehicles except permitted exceptions shown on a plate",
      "No motor vehicles only",
      "No waiting",
      "National speed limit"
    ],
    "correctIndex": 0,
    "explanation": "A blank red-bordered disc prohibits vehicles; read any accompanying exception plate.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-vehicles.jpg",
      "alt": "White disc edged in red"
    }
  },
  {
    "id": "dt-visual-006",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No motor vehicles",
      "No vehicles at all including cycles",
      "Motor vehicles only",
      "No overtaking"
    ],
    "correctIndex": 0,
    "explanation": "This restriction applies to motor vehicles; it is different from the blank no-vehicles sign.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-motor-vehicles.jpg",
      "alt": "Red-bordered circle containing a car and motorcycle"
    }
  },
  {
    "id": "dt-visual-007",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No overtaking",
      "Two-way traffic",
      "Cars may pass either side",
      "Priority over oncoming traffic"
    ],
    "correctIndex": 0,
    "explanation": "Do not overtake where a traffic sign prohibits it.",
    "highwayCodeRule": "109, 165",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-overtaking.jpg",
      "alt": "Red-bordered circle with two cars"
    }
  },
  {
    "id": "dt-visual-008",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Give priority to oncoming vehicles",
      "You have priority over oncoming vehicles",
      "One-way road",
      "No right turn"
    ],
    "correctIndex": 0,
    "explanation": "Wait before the narrow section if oncoming traffic needs to pass.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-give-priority-vehicles.jpg",
      "alt": "Red-bordered circle with a red upward arrow and black downward arrow"
    }
  },
  {
    "id": "dt-visual-009",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No U-turn",
      "No right turn",
      "Turn around ahead",
      "One-way traffic"
    ],
    "correctIndex": 0,
    "explanation": "You must not make a U-turn where this sign applies.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-u-turn.jpg",
      "alt": "Red-bordered circle with a crossed-out U-shaped arrow"
    }
  },
  {
    "id": "dt-visual-010",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No waiting",
      "No stopping at any time",
      "No entry",
      "Minimum speed ends"
    ],
    "correctIndex": 0,
    "explanation": "Waiting restrictions differ from stopping restrictions; check plates and loading restrictions.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-waiting.jpg",
      "alt": "Blue disc with a red border and one red diagonal"
    }
  },
  {
    "id": "dt-visual-011",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No stopping",
      "No overtaking",
      "No waiting only",
      "No motor vehicles"
    ],
    "correctIndex": 0,
    "explanation": "A red cross indicates a stopping prohibition, stricter than no waiting.",
    "highwayCodeRule": "109, 238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-stopping.jpg",
      "alt": "Blue disc with a red border and red cross"
    }
  },
  {
    "id": "dt-visual-012",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Ahead only",
      "One-way road information",
      "Give way ahead",
      "Minimum speed"
    ],
    "correctIndex": 0,
    "explanation": "The circular blue sign gives an instruction to proceed ahead.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-ahead-only.jpg",
      "alt": "Blue circle with a white upward arrow"
    }
  },
  {
    "id": "dt-visual-013",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Keep left",
      "Turn left at the next junction",
      "Pass either side",
      "Left lane ends"
    ],
    "correctIndex": 0,
    "explanation": "Pass to the left of the obstruction or island marked by the sign.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-keep-left.jpg",
      "alt": "Blue circle with an arrow pointing diagonally down-left"
    }
  },
  {
    "id": "dt-visual-014",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Vehicles may pass either side",
      "Two-way traffic ends",
      "Keep left only",
      "No overtaking"
    ],
    "correctIndex": 0,
    "explanation": "Both sides of the obstruction are available, subject to safety and lane markings.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-vehicle-pass-either-side.jpg",
      "alt": "Blue circle with two arrows pointing down to opposite sides"
    }
  },
  {
    "id": "dt-visual-015",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Mini-roundabout",
      "End of motorway",
      "No U-turn",
      "Roundabout warning ahead"
    ],
    "correctIndex": 0,
    "explanation": "Give priority to traffic from the right and pass around the central marking unless your vehicle cannot do so.",
    "highwayCodeRule": "188",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-mini-roundabout.jpg",
      "alt": "Blue circle containing three curved white arrows"
    }
  },
  {
    "id": "dt-visual-016",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Separate cycle and pedestrian routes",
      "Shared route with no separation",
      "Cycles prohibited",
      "Pedestrians prohibited"
    ],
    "correctIndex": 0,
    "explanation": "The dividing line shows separate parts of the route for walking and cycling.",
    "highwayCodeRule": "62, 109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-segregated-cycle-pedestrian-route.jpg",
      "alt": "Blue circle with a pedestrian and cycle divided by a vertical line"
    }
  },
  {
    "id": "dt-visual-017",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Minimum speed",
      "Maximum speed",
      "Recommended speed",
      "Distance to a junction"
    ],
    "correctIndex": 0,
    "explanation": "A blue circular speed sign specifies a minimum, unlike a red-bordered maximum-speed sign.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-minimum-speed.jpg",
      "alt": "Blue circle containing a speed number"
    }
  },
  {
    "id": "dt-visual-018",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Route for buses and cycles only",
      "Bus stop ahead",
      "No buses or cycles",
      "All vehicles may use it outside rush hour"
    ],
    "correctIndex": 0,
    "explanation": "The current sign needs no separate plate saying only; do not enter in an ordinary car.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-buses-cycles-only.jpg",
      "alt": "Blue circle showing a bus and bicycle"
    }
  },
  {
    "id": "dt-visual-019",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Trams only",
      "Trams crossing ahead",
      "Railway station",
      "No trams"
    ],
    "correctIndex": 0,
    "explanation": "This is a route restriction, not a warning triangle. The current design needs no only plate.",
    "highwayCodeRule": "109, 300",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-trams-only.jpg",
      "alt": "Blue circle showing a tram"
    }
  },
  {
    "id": "dt-visual-020",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Dual carriageway ends ahead",
      "Dual carriageway begins",
      "One-way traffic begins",
      "Road closed"
    ],
    "correctIndex": 0,
    "explanation": "Prepare for opposing traffic without a central reservation and reassess your speed.",
    "highwayCodeRule": "146",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-dual-carriageway-ends.jpg",
      "alt": "Red triangle showing two carriageways coming together"
    }
  },
  {
    "id": "dt-visual-021",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Double bend, first to the left",
      "Slippery road",
      "Traffic merges from left",
      "Road narrows"
    ],
    "correctIndex": 0,
    "explanation": "Reduce speed before the bend and stay able to stop within the distance you can see.",
    "highwayCodeRule": "146, 160",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-double-bend.jpg",
      "alt": "Red triangle with a double-bend symbol"
    }
  },
  {
    "id": "dt-visual-022",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Two-way traffic straight ahead",
      "You have priority",
      "One-way traffic",
      "No overtaking"
    ],
    "correctIndex": 0,
    "explanation": "Expect traffic travelling in the opposite direction.",
    "highwayCodeRule": "146",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-two-way-traffic-ahead.jpg",
      "alt": "Red triangle with upward and downward arrows"
    }
  },
  {
    "id": "dt-visual-023",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Slippery road",
      "Loose chippings",
      "Uneven road",
      "Steep hill"
    ],
    "correctIndex": 0,
    "explanation": "Reduce speed and avoid harsh braking or steering where grip may be poor.",
    "highwayCodeRule": "146",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-slippery-road.jpg",
      "alt": "Red triangle with a car and curved tyre tracks"
    }
  },
  {
    "id": "dt-visual-024",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Level crossing with a gate or barrier ahead",
      "No through road",
      "Cattle grid",
      "Road works ahead"
    ],
    "correctIndex": 0,
    "explanation": "Approach prepared to stop and obey the crossing lights and barriers.",
    "highwayCodeRule": "291",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-level-crossing-ahead-barrier-or-gate.jpg",
      "alt": "Red triangle containing a gate symbol"
    }
  },
  {
    "id": "dt-visual-025",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Level crossing without a gate or barrier ahead",
      "Railway station entrance",
      "Trams only",
      "Tunnel ahead"
    ],
    "correctIndex": 0,
    "explanation": "Look for crossing signals and follow the instructions at the crossing.",
    "highwayCodeRule": "291",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-level-crossing-ahead-without-barrier.jpg",
      "alt": "Red triangle containing a locomotive"
    }
  },
  {
    "id": "dt-visual-026",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Frail pedestrians likely to cross ahead",
      "Footpath closed",
      "School crossing patrol",
      "Pedestrians forbidden"
    ],
    "correctIndex": 0,
    "explanation": "Allow time for people who may cross slowly or have difficulty seeing or hearing traffic.",
    "highwayCodeRule": "207",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-frail-pedestrians-cross-road-ahead.jpg",
      "alt": "Red triangle with two walking figures, one using a stick"
    }
  },
  {
    "id": "dt-visual-027",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Wild animals ahead",
      "Zoo parking",
      "Horses only",
      "Farm vehicles prohibited"
    ],
    "correctIndex": 0,
    "explanation": "Anticipate animals entering the road and slow safely without swerving into other traffic.",
    "highwayCodeRule": "214",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-wild-animals.jpg",
      "alt": "Red triangle containing a deer"
    }
  },
  {
    "id": "dt-visual-028",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Accompanied horses or ponies ahead",
      "Horse riding prohibited",
      "Racecourse parking",
      "Wild animals only"
    ],
    "correctIndex": 0,
    "explanation": "Pass horses slowly and widely, at no more than 10 mph and with at least 2 metres where possible.",
    "highwayCodeRule": "215",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-accompanied-horses.jpg",
      "alt": "Red triangle with a horse and rider"
    }
  },
  {
    "id": "dt-visual-029",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Cycle route ahead",
      "Cycles prohibited",
      "Cycles only",
      "End of cycle lane"
    ],
    "correctIndex": 0,
    "explanation": "Look carefully for cyclists joining or crossing your route.",
    "highwayCodeRule": "211, 212",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-cycle-route-ahead.jpg",
      "alt": "Red triangle containing a bicycle"
    }
  },
  {
    "id": "dt-visual-030",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Risk of ice",
      "Snow tyres compulsory",
      "Road closed in winter",
      "No vehicles in snow"
    ],
    "correctIndex": 0,
    "explanation": "Grip can be very low; use gentle controls and leave much more room.",
    "highwayCodeRule": "230, 231",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-risk-of-ice.jpg",
      "alt": "Red triangle containing a snowflake"
    }
  },
  {
    "id": "dt-visual-031",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Traffic queues likely ahead",
      "No overtaking",
      "Car parking",
      "Minimum following distance"
    ],
    "correctIndex": 0,
    "explanation": "Be ready to slow for stationary traffic, including beyond a bend or crest.",
    "highwayCodeRule": "146",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-traffic-queues.jpg",
      "alt": "Red triangle showing a queue of cars"
    }
  },
  {
    "id": "dt-visual-032",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Side winds",
      "Airfield entrance",
      "Fog likely",
      "Low bridge"
    ],
    "correctIndex": 0,
    "explanation": "Expect gusts, especially on exposed roads, and give vulnerable vehicles extra space.",
    "highwayCodeRule": "232, 233",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-side-winds.jpg",
      "alt": "Red triangle showing a windsock"
    }
  },
  {
    "id": "dt-visual-033",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Hump bridge",
      "Uneven road",
      "Steep descent",
      "Tunnel"
    ],
    "correctIndex": 0,
    "explanation": "The crest can hide approaching vehicles; slow and keep to your side.",
    "highwayCodeRule": "146",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-hump-bridge.jpg",
      "alt": "Red triangle showing a hump bridge"
    }
  },
  {
    "id": "dt-visual-034",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Priority over oncoming vehicles",
      "Give priority to oncoming vehicles",
      "One-way road",
      "No entry"
    ],
    "correctIndex": 0,
    "explanation": "The sign gives priority through a narrow section, but never force a dangerous confrontation.",
    "highwayCodeRule": "109, 147",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/Information-sign-traffic-priority-over-oncoming-vehicles.jpg",
      "alt": "Blue rectangle containing a large upward white arrow and downward red arrow"
    }
  },
  {
    "id": "dt-visual-035",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "No through road",
      "No entry",
      "Stop ahead",
      "Hospital entrance"
    ],
    "correctIndex": 0,
    "explanation": "The road is a dead end; this does not itself prohibit entering it.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/Information-sign-no-through-road.jpg",
      "alt": "Blue rectangle with a white T capped in red"
    }
  },
  {
    "id": "dt-visual-036",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Road works",
      "Footpath only",
      "Loose chippings",
      "Road ends"
    ],
    "correctIndex": 0,
    "explanation": "Watch for workers, changed road layouts and temporary controls.",
    "highwayCodeRule": "288",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/road-work-sign-road-works.jpg",
      "alt": "Red triangle showing a person digging"
    }
  },
  {
    "id": "dt-visual-037",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean for you?",
    "options": [
      "Loose chippings",
      "Slippery road",
      "Falling rocks",
      "Uneven road"
    ],
    "correctIndex": 0,
    "explanation": "Slow down and leave space to reduce skidding and flying stones.",
    "highwayCodeRule": "146, 288",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/road-work-sign-loose-chippings.jpg",
      "alt": "Red triangle with stones spraying from a wheel"
    }
  },
  {
    "id": "dt-visual-038",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "Wait behind it when the light is red",
      "Stop beyond it for a better view",
      "Park on it",
      "Treat red as give way"
    ],
    "correctIndex": 0,
    "explanation": "Stop behind the line for a red signal.",
    "highwayCodeRule": "175",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/across-carriageway-stop-line-signals-or-police.jpg",
      "alt": "Solid transverse white line at traffic signals"
    }
  },
  {
    "id": "dt-visual-039",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "Give way to traffic on the major road",
      "You have priority",
      "Always park behind them",
      "Stop only for buses"
    ],
    "correctIndex": 0,
    "explanation": "These mark the give-way position at a junction.",
    "highwayCodeRule": "172",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/across-carriageway-give-way-traffic-major-road.jpg",
      "alt": "Double broken transverse white lines"
    }
  },
  {
    "id": "dt-visual-040",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "A hazard warning line",
      "A parking lane",
      "A motorway boundary",
      "A compulsory overtaking lane"
    ],
    "correctIndex": 0,
    "explanation": "Longer marks with shorter gaps warn of a hazard. Cross only when you can see it is safe.",
    "highwayCodeRule": "127",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/along-carriageway-hazard-warn-line.jpg",
      "alt": "Long white centre-line marks with short gaps"
    }
  },
  {
    "id": "dt-visual-041",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "No waiting at any time",
      "No stopping for any reason",
      "No loading at any time automatically",
      "Waiting allowed at night"
    ],
    "correctIndex": 0,
    "explanation": "Double yellow lines prohibit waiting at all times, subject to applicable exceptions; loading restrictions are separate.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/along-edge-carriageway-double-yellow.jpg",
      "alt": "Double yellow lines along the road edge"
    }
  },
  {
    "id": "dt-visual-042",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "Waiting restricted at the signed times",
      "No stopping at any time",
      "Free parking all day",
      "No loading at any time"
    ],
    "correctIndex": 0,
    "explanation": "Check nearby plates or controlled-zone entry signs for operating times.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/along-edge-carriageway-single_yellow-with-parking.jpg",
      "alt": "Single yellow line along the road edge"
    }
  },
  {
    "id": "dt-visual-043",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "No stopping, subject to specific exemptions",
      "No waiting only",
      "Free loading for everyone",
      "Parking allowed at night"
    ],
    "correctIndex": 0,
    "explanation": "Red-route stopping restrictions apply; double red lines operate at all times.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/along-edge-carriageway-red-route-no-stopping-double-red-line.jpg",
      "alt": "Double red lines along the road edge"
    }
  },
  {
    "id": "dt-visual-044",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "No loading or unloading at any time",
      "No waiting only",
      "Loading allowed for twenty minutes",
      "Bus stop ahead"
    ],
    "correctIndex": 0,
    "explanation": "Kerb marks add a loading restriction; double marks apply at all times.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/on-kerb-double-line-no-loading.jpg",
      "alt": "Double yellow marks across the kerb"
    }
  },
  {
    "id": "dt-visual-045",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "No loading during signed times",
      "No loading at any time",
      "Free parking",
      "No overtaking"
    ],
    "correctIndex": 0,
    "explanation": "Read the sign to find when loading is prohibited.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/on-kerb-single-line-no-loading-times.jpg",
      "alt": "Single yellow marks across the kerb"
    }
  },
  {
    "id": "dt-visual-046",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "Keep the entrance clear of stationary vehicles",
      "Stop here to drop off children",
      "Park here outside lessons without checking signs",
      "Use this as a turning bay"
    ],
    "correctIndex": 0,
    "explanation": "Keeping entrances clear helps children see traffic and be seen. Signs can make the stopping ban enforceable.",
    "highwayCodeRule": "243",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/other-road-markings-school-keep-clear.jpg",
      "alt": "Yellow zigzags and school entrance lettering"
    }
  },
  {
    "id": "dt-visual-047",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this marking mean for you?",
    "options": [
      "Enter only if your exit is clear, apart from the permitted right-turn exception",
      "Enter whenever the lights are green",
      "Wait in it to turn left",
      "Use it to pass a queue"
    ],
    "correctIndex": 0,
    "explanation": "You may wait in the box to turn right only when blocked by oncoming traffic or other vehicles waiting to turn right.",
    "highwayCodeRule": "174",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/other-road-markings-box-junction.jpg",
      "alt": "Yellow criss-cross box at a junction"
    }
  },
  {
    "id": "dt-visual-048",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "What does this signal mean for you?",
    "options": [
      "Stop behind the line",
      "Go if turning left",
      "Go if no traffic is visible",
      "Prepare to go immediately"
    ],
    "correctIndex": 0,
    "explanation": "Red means stop, even on an apparently empty road.",
    "highwayCodeRule": "175",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/traffic-light-red.jpg",
      "alt": "Traffic light showing red"
    }
  },
  {
    "id": "dt-visual-049",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "What does this signal mean for you?",
    "options": [
      "Wait until green, then proceed only if safe",
      "Move off now",
      "Go only if turning left",
      "Treat it as a flashing amber"
    ],
    "correctIndex": 0,
    "explanation": "Red and amber together still mean stop.",
    "highwayCodeRule": "175",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/traffic-light-red-amber.jpg",
      "alt": "Traffic light showing red and amber together"
    }
  },
  {
    "id": "dt-visual-050",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "What does this signal mean for you?",
    "options": [
      "Proceed only if the way is clear",
      "Always go regardless of pedestrians",
      "Enter a blocked junction",
      "Accelerate before checking"
    ],
    "correctIndex": 0,
    "explanation": "Green does not remove your duty to check that you can proceed safely.",
    "highwayCodeRule": "176",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/traffic-light-green.jpg",
      "alt": "Traffic light showing green"
    }
  },
  {
    "id": "dt-visual-051",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "What does this signal mean for you?",
    "options": [
      "Stop unless already over the line or too close to stop safely",
      "Accelerate to beat red",
      "Always brake abruptly",
      "Treat it as green"
    ],
    "correctIndex": 0,
    "explanation": "A steady amber normally means stop; the exception prevents unsafe sudden stopping.",
    "highwayCodeRule": "175",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/traffic-light-amber.jpg",
      "alt": "Traffic light showing amber"
    }
  },
  {
    "id": "dt-visual-052",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "What does this signal mean for you?",
    "options": [
      "Stop",
      "Proceed cautiously",
      "Give way only",
      "Stop only if a barrier is down"
    ],
    "correctIndex": 0,
    "explanation": "Flashing red lights at a level crossing require you to stop, regardless of barrier position.",
    "highwayCodeRule": "293",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/flashing-red-lights.jpg",
      "alt": "Pair of alternately flashing red lights"
    }
  },
  {
    "id": "dt-visual-053",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "What does this signal mean for you?",
    "options": [
      "Do not proceed in that lane",
      "Use that lane to overtake",
      "Advisory lane closure only",
      "Stop in that lane to investigate"
    ],
    "correctIndex": 0,
    "explanation": "A red X closes the lane. Move safely to an open lane and obey the signals.",
    "highwayCodeRule": "258",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/motorway-signal-red-cross.jpg",
      "alt": "Motorway signal showing a red X"
    }
  }
];
