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
      "No vehicles except bicycles being pushed",
      "No motor vehicles; cycles may be ridden",
      "No entry for vehicles from this direction",
      "No vehicles over the weight shown"
    ],
    "correctIndex": 0,
    "explanation": "A plain white disc with a red ring means no vehicles, except bicycles being pushed by hand. The exception is part of the sign itself, not a separate plate.",
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
  },
  {
    "id": "dt-visual-054",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "You are waiting at this signal. What does it allow?",
    "options": [
      "Go only in the arrow’s direction, if the way is clear",
      "Go straight ahead, as the arrow overrides the red",
      "Wait: the arrow is for buses and cycles only",
      "Go in any direction once the junction is clear"
    ],
    "correctIndex": 0,
    "explanation": "A green arrow with red lets you go only in the arrow’s direction, if the way is clear. Wait for green to go any other way.",
    "highwayCodeRule": "Annex: Light signals controlling traffic",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/light-signals-controlling-traffic",
    "image": {
      "src": "/driving/traffic-light-green-arrow.jpg",
      "alt": "Traffic signal with red lit and a green arrow lit beside it"
    }
  },
  {
    "id": "dt-visual-055",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "On a motorway you see this signal. What must you do?",
    "options": [
      "Leave the left lane; a 40 mph limit applies",
      "Use only the left lane, at up to 40 mph",
      "Move to the hard shoulder and wait",
      "Keep to 40 mph only if you feel it is safe"
    ],
    "correctIndex": 0,
    "explanation": "A red cross means you must not enter or stay in that lane. The red ring makes the 40 mph limit mandatory.",
    "highwayCodeRule": "258",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/Obstruction_FINAL_.jpg",
      "alt": "Grey signal with a red cross, three yellow arrows, a red-ringed 40 and the word Obstruction"
    }
  },
  {
    "id": "dt-visual-056",
    "subject": "roadRules",
    "topic": "weather-parking",
    "topicLabel": "Weather & Parking",
    "question": "What does this sign mean during the times shown?",
    "options": [
      "No stopping, except briefly to pick up or set down passengers",
      "No stopping at all, even for passengers",
      "Stopping only to load or unload goods",
      "Parking allowed for up to 20 minutes"
    ],
    "correctIndex": 0,
    "explanation": "On an urban clearway you may stop only for as long as needed to pick up or set down passengers.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/sign-giving-order-no-stopping-times.jpg",
      "alt": "Yellow URBAN CLEARWAY panel with a crossed roundel, Monday to Friday and am/pm times"
    }
  },
  {
    "id": "dt-visual-057",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You see this at a level crossing. What should you do?",
    "options": [
      "Stop on red, cross on green, phone if no light shows",
      "Cross on red if no train is in sight",
      "Wait for the operator to open the gates",
      "Cross on green without opening the gates"
    ],
    "correctIndex": 0,
    "explanation": "Miniature lights at user-operated crossings mean stop on red and cross only on green. Phone the operator if no light shows.",
    "highwayCodeRule": "296",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-level-crossing-minature.jpg",
      "alt": "Plate with red and green lamps reading Red STOP, Green Clear, IF NO LIGHT - PHONE CROSSING OPERATOR"
    }
  },
  {
    "id": "dt-visual-058",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does the white number on the black patch show on this blue sign?",
    "options": [
      "The motorway junction number",
      "The speed limit on the slip road",
      "Minutes to the destination",
      "The number of lanes at the exit"
    ],
    "correctIndex": 0,
    "explanation": "On motorway approach signs, junction numbers are on a black background.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/direction-sign-blue-approach-to-junction.jpg",
      "alt": "Blue sign with a place name, a road number, a slanted arrow, a white number on a black patch and half a mile"
    }
  },
  {
    "id": "dt-visual-059",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What do green direction signs like this indicate?",
    "options": [
      "Primary routes",
      "Motorways",
      "Local (non-primary) routes",
      "Tourist destinations"
    ],
    "correctIndex": 0,
    "explanation": "Green-backed direction signs are for primary routes. Blue signs are for motorways, white signs for other routes and brown signs for tourist destinations.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/direction-sign-green-route-sign.jpg",
      "alt": "Green rectangle with a yellow road number, place names, distances and a blue motorway panel"
    }
  },
  {
    "id": "dt-visual-060",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What do white direction signs with a black border like this indicate?",
    "options": [
      "Non-primary and local routes",
      "Motorways",
      "Primary routes",
      "Diversion routes"
    ],
    "correctIndex": 0,
    "explanation": "Non-primary and local routes have black-bordered white signs.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/direction-sign-black-border-at-junction.jpg",
      "alt": "White arrow-shaped sign with a black border, a place name, a distance and a B-road number"
    }
  },
  {
    "id": "dt-visual-061",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What do brown signs like this show?",
    "options": [
      "Tourist attractions and facilities",
      "Emergency diversion routes",
      "Routes for lorries",
      "Motorway services only"
    ],
    "correctIndex": 0,
    "explanation": "Brown signs direct you to tourist attractions and facilities.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/direction-sign-other-tourist-attraction.jpg",
      "alt": "Brown arrow-shaped sign with an elephant symbol and the word Zoo"
    }
  },
  {
    "id": "dt-visual-062",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You see these markers beside a motorway. What do they show?",
    "options": [
      "Distance to the next exit: each bar is about 100 yards",
      "Distance to the next emergency phone",
      "The number of lanes about to close",
      "The start of a speed camera zone"
    ],
    "correctIndex": 0,
    "explanation": "Countdown markers before an exit each represent about 100 yards to the start of the exit.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/information-sign-motorway-exit-countdown-markers.jpg",
      "alt": "Three blue posts with three, two and one white diagonal bars"
    }
  },
  {
    "id": "dt-visual-063",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You drive past this sign. How should you drive?",
    "options": [
      "Drive slowly: people may use the whole street",
      "Drive normally: pedestrians keep to the pavement",
      "Give way only to children at marked crossings",
      "Keep to 20 mph; pedestrians must give way"
    ],
    "correctIndex": 0,
    "explanation": "In a Home Zone people may use the whole street, including children playing. Drive slowly and be ready to stop.",
    "highwayCodeRule": "218",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/Information-sign-home-zone-entry.jpg",
      "alt": "Blue panel with a car, a house, an adult and children above the words Home Zone"
    }
  },
  {
    "id": "dt-visual-064",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "This sign is displayed in the window of a bus. What should you do?",
    "options": [
      "Take care: children may be getting on or off",
      "It must not be overtaken while moving",
      "It has priority at all junctions",
      "It may use bus lanes at any time"
    ],
    "correctIndex": 0,
    "explanation": "This sign means a school bus. Look out for children and be ready to stop, especially when it is stopped.",
    "highwayCodeRule": "209",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/other-school-bus.jpg",
      "alt": "Yellow square with black outlines of two children carrying bags"
    }
  },
  {
    "id": "dt-visual-065",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this road marking mean?",
    "options": [
      "Bus stop: do not stop or park in it",
      "Stop here only to set down passengers",
      "Buses may park here overnight only",
      "A bus lane starts at this point"
    ],
    "correctIndex": 0,
    "explanation": "Keep marked bus stops clear. Do not stop or park in them.",
    "highwayCodeRule": "243",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/other-road-markings-bus-stop-road.jpg",
      "alt": "Yellow broken box at the kerb with BUS STOP painted inside and a yellow line"
    }
  },
  {
    "id": "dt-visual-066",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "A train has passed but the red lights keep flashing at this crossing. What should you do?",
    "options": [
      "Keep waiting: another train is coming",
      "Cross now that the first train has passed",
      "Phone the signal operator, then cross",
      "Cross as soon as the barriers start to rise"
    ],
    "correctIndex": 0,
    "explanation": "If the lights continue to flash after a train passes, another train is coming. Wait until the lights stop.",
    "highwayCodeRule": "293",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-another-train-coming.svg",
      "alt": "Level crossing signal with flashing red lamps above a plate reading ANOTHER TRAIN COMING if lights continue to show"
    }
  },
  {
    "id": "dt-visual-067",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign at a level crossing mean?",
    "options": [
      "Give way to trains: there are no lights or barriers",
      "Stop: lights will show when a train comes",
      "Wait for the barriers to lower and rise",
      "Trains give way to road traffic here"
    ],
    "correctIndex": 0,
    "explanation": "Open crossings with no gates, barriers or signals have give way signs. Look both ways, listen and give way to trains.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/level-crossing-signs-and-signals",
    "image": {
      "src": "/driving/kyts-open-level-crossing.svg",
      "alt": "Red-and-white crossed boards above a GIVE WAY triangle and a plate with a steam engine"
    }
  },
  {
    "id": "dt-visual-068",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "What is this small sign beside a motorway for?",
    "options": [
      "It gives your location in an emergency",
      "It shows the distance to the next exit",
      "It marks the start of an emergency area",
      "It shows the speed limit for that section"
    ],
    "correctIndex": 0,
    "explanation": "Driver location signs give your exact position so you can tell the emergency services where you are.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-driver-location-sign.svg",
      "alt": "Small blue sign with M42, A and 194.7 on three lines"
    }
  },
  {
    "id": "dt-visual-069",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "You break down on a motorway and see this on a marker post. What does the arrow show?",
    "options": [
      "Direction of the nearest emergency phone",
      "Direction of the next exit",
      "Direction of the nearest emergency area",
      "The side to stand on, away from traffic"
    ],
    "correctIndex": 0,
    "explanation": "Marker posts show the direction of the nearest emergency phone. Walk on the verge side, not the carriageway.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-marker-post-phone.svg",
      "alt": "Small blue panel with a white phone handset and an arrow pointing left"
    }
  },
  {
    "id": "dt-visual-070",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "This signal is above your lane. What does it mean?",
    "options": [
      "The lane is available to you",
      "Leave the lane immediately",
      "The lane is closed ahead",
      "Only buses may use the lane"
    ],
    "correctIndex": 0,
    "explanation": "A green downward arrow above a lane shows it is open to traffic facing the signal.",
    "highwayCodeRule": "Annex: Light signals controlling traffic",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/tidal-flow-lane-control-signs-and-signals",
    "image": {
      "src": "/driving/kyts-green-arrow.svg",
      "alt": "Black square with a green downward-pointing arrow"
    }
  },
  {
    "id": "dt-visual-071",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Who must obey this diamond-shaped sign?",
    "options": [
      "Tram drivers",
      "All vehicles",
      "Lorries over 7.5 tonnes",
      "Cyclists"
    ],
    "correctIndex": 0,
    "explanation": "Diamond-shaped signs are for tram drivers. This one gives a tram speed limit.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/tram-signs-signals-and-road-markings",
    "image": {
      "src": "/driving/kyts-tram-speed-limit.svg",
      "alt": "White diamond with a black border containing the number 30"
    }
  },
  {
    "id": "dt-visual-072",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "What does this lane marked with a solid white line and cycle symbol mean for drivers?",
    "options": [
      "Do not drive or park in it during its hours",
      "Drive in it only if no cyclist is present",
      "Park in it if your hazard lights are on",
      "Use it to pass vehicles turning right"
    ],
    "correctIndex": 0,
    "explanation": "A mandatory cycle lane is marked by a solid white line. Do not drive or park in it during its hours of operation.",
    "highwayCodeRule": "140",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-road-markings-cycle-lane.svg",
      "alt": "Road lane separated by a solid white line with a bicycle symbol painted in it"
    }
  },
  {
    "id": "dt-visual-073",
    "subject": "roadRules",
    "topic": "weather-parking",
    "topicLabel": "Weather & Parking",
    "question": "What does this sign allow?",
    "options": [
      "Parking partly on the verge or footway is allowed",
      "No parking on the verge or footway",
      "Parking for breakdown vehicles only",
      "Parking wholly on the footway is allowed"
    ],
    "correctIndex": 0,
    "explanation": "This sign allows vehicles to park partly on the verge or footway where shown. Elsewhere, do not park on the pavement.",
    "highwayCodeRule": "244",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-verge-or-footway.svg",
      "alt": "Blue P sign with a car drawn half on the kerb"
    }
  },
  {
    "id": "dt-visual-074",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean?",
    "options": [
      "Cameras check your average speed between two points",
      "A single fixed camera is just ahead",
      "Cameras check speed only at the end of the road",
      "Your speed is shown on a display ahead"
    ],
    "correctIndex": 0,
    "explanation": "Average speed cameras time vehicles between two points. Keep to the limit along the whole length.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/speed-limit-signs",
    "image": {
      "src": "/driving/kyts-average-speed-check.svg",
      "alt": "White rectangle with a camera symbol above the words Average speed check"
    }
  },
  {
    "id": "dt-visual-075",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "Who may use this lane at the times shown?",
    "options": [
      "Vehicles with at least the number of people shown",
      "Buses and coaches only",
      "Any vehicle with two or more axles",
      "Cars only, not vans or lorries"
    ],
    "correctIndex": 0,
    "explanation": "High-occupancy vehicle lanes are for vehicles with at least the number of occupants shown, plus any other vehicles the signs allow.",
    "highwayCodeRule": "142",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/Information-sign-lane-for-hov.jpg",
      "alt": "Blue lane panel with a car containing two people, 2+, and Mon-Fri 7-9 am and 4-6 pm"
    }
  },
  {
    "id": "dt-visual-076",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You see this on the back of a slow works vehicle in your lane. What should you do?",
    "options": [
      "Pass on the side the arrow points to",
      "Pass on either side",
      "Stop and wait until it moves off",
      "Follow it until it signals you past"
    ],
    "correctIndex": 0,
    "explanation": "This sign is on a slow or stationary works vehicle blocking a lane. Pass on the side the arrow shows.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/road-work-sign-back-vehicle-direction-arrow.jpg",
      "alt": "Yellow board with amber lamps and a blue keep-left style roundel with a downward-left arrow"
    }
  },
  {
    "id": "dt-visual-077",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "What does this road works sign tell you?",
    "options": [
      "Stay in lane: one lane crosses over, max 30 mph",
      "Use the hard shoulder at up to 30 mph",
      "All lanes close ahead: leave at 30 mph",
      "Change lanes freely, keeping under 30 mph"
    ],
    "correctIndex": 0,
    "explanation": "At a contraflow crossover, stay in your lane and keep to the speed limit shown.",
    "highwayCodeRule": "290",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/road-work-sign-lane-crossover.jpg",
      "alt": "Yellow STAY IN LANE board with lane arrows crossing a red area and Max speed 30"
    }
  },
  {
    "id": "dt-visual-078",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You are on the slip road. What does this sign mean?",
    "options": [
      "Main carriageway traffic has priority over joining traffic",
      "Joining traffic has priority over the main carriageway",
      "The slip road becomes an extra lane",
      "Main carriageway traffic must move right for you"
    ],
    "correctIndex": 0,
    "explanation": "Give priority to traffic already on the main carriageway. Adjust your speed to join safely.",
    "highwayCodeRule": "259",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/Information-sign-traffic-on-carriageway-priority.jpg",
      "alt": "Blue lane diagram with a slip road joining from the left beside dashed lines and arrows"
    }
  },
  {
    "id": "dt-visual-079",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does a single red line at the edge of the road mean?",
    "options": [
      "Red route: no stopping at the times shown on signs",
      "Red route: parking allowed outside rush hours",
      "Red route: no stopping at any time",
      "The edge of a cycle lane"
    ],
    "correctIndex": 0,
    "explanation": "On red routes, a single red line means no stopping during the times shown on the upright signs.",
    "highwayCodeRule": "Annex: Road markings",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/along-edge-carriageway-red-route-no-stopping-red-line.jpg",
      "alt": "Single red line along the road edge beside the kerb"
    }
  },
  {
    "id": "dt-visual-080",
    "subject": "roadRules",
    "topic": "weather-parking",
    "topicLabel": "Weather & Parking",
    "question": "What does this sign mean during the times shown?",
    "options": [
      "Park up to 20 minutes; no return within 40 minutes",
      "Park up to 40 minutes; no return within 20 minutes",
      "Park up to 20 minutes, at any time of day",
      "Permit holders may park for 20 minutes"
    ],
    "correctIndex": 0,
    "explanation": "Limited waiting signs show the maximum stay and how long you must stay away before returning.",
    "highwayCodeRule": "Annex: Road markings",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-markings",
    "image": {
      "src": "/driving/along-edge-carriageway-park-times.jpg",
      "alt": "White sign with a blue P, Mon-Sat 8 am-7 pm, 20 mins and No return within 40 mins"
    }
  },
  {
    "id": "dt-visual-081",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean?",
    "options": [
      "Light signals ahead: stop when they show",
      "Traffic lights ahead are out of order",
      "Stop, then go when a green light shows",
      "Lights ahead are only for pedestrians"
    ],
    "correctIndex": 0,
    "explanation": "This warns of light signals ahead, such as at a level crossing, airfield or bridge. Stop when the lights show.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/warning-sign-light-signals-ahead.jpg",
      "alt": "White plate with two red lamps and an amber lamp above STOP when lights show"
    }
  },
  {
    "id": "dt-visual-082",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign warn you of?",
    "options": [
      "A zebra or parallel crossing on a road hump",
      "A pedestrian zone ahead",
      "Pedestrians walking in the road ahead",
      "A road hump with no crossing"
    ],
    "correctIndex": 0,
    "explanation": "A humped crossing is a zebra or parallel crossing on a road hump. Slow down and give way to people on it.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/traffic-calming",
    "image": {
      "src": "/driving/kyts-zebra-humped-crossing.svg",
      "alt": "Red triangle with a person walking on a dashed line and a Humped crossing plate"
    }
  },
  {
    "id": "dt-visual-083",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Where are you likely to see this sign?",
    "options": [
      "After a ford or before a steep descent",
      "On the approach to a level crossing",
      "At the start of a motorway",
      "Before a sharp bend on a level road"
    ],
    "correctIndex": 0,
    "explanation": "Wet brakes or a steep hill call for a brake test. Try your brakes after a ford or before a steep descent.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/warning-signs",
    "image": {
      "src": "/driving/kyts-try-your-brakes.svg",
      "alt": "Red triangle containing the words Try your brakes"
    }
  },
  {
    "id": "dt-visual-084",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "You are overtaking and see this arrow painted in your lane. What does it mean?",
    "options": [
      "Move back to your side of the road",
      "The overtaking lane continues for a mile",
      "Turn left at the next junction",
      "A lane ahead is reserved for buses"
    ],
    "correctIndex": 0,
    "explanation": "Deflection arrows warn that you are approaching a hazard or double white lines. Return to your side of the road when it is safe.",
    "highwayCodeRule": "128",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-road-marking-arrow-.svg",
      "alt": "Grey lane strip with a long white arrow that bends to the left"
    }
  },
  {
    "id": "dt-visual-085",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "This signal is above your lane. What should you do?",
    "options": [
      "Move into the lane the arrow points to",
      "Stop: the lane is closed",
      "Continue in your lane at normal speed",
      "Leave the road at the next exit"
    ],
    "correctIndex": 0,
    "explanation": "A white diagonal arrow means move into the lane it points to. Your lane is about to close.",
    "highwayCodeRule": "Annex: Light signals controlling traffic",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/tidal-flow-lane-control-signs-and-signals",
    "image": {
      "src": "/driving/kyts-white-arrow.svg",
      "alt": "Black square with a white arrow pointing diagonally down to the left"
    }
  },
  {
    "id": "dt-visual-086",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does the plate under this bend sign mean?",
    "options": [
      "The maximum speed advised for the bend",
      "The speed limit you must not exceed",
      "The minimum speed for the bend",
      "The distance to the bend in yards"
    ],
    "correctIndex": 0,
    "explanation": "A rectangular plate under a warning sign gives an advisory maximum speed. A speed limit is shown in a red circle.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/speed-limit-signs",
    "image": {
      "src": "/driving/kyts-max-speed-30-mph.svg",
      "alt": "Red triangle with a bend symbol above a plate reading Max speed 30"
    }
  },
  {
    "id": "dt-visual-087",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean?",
    "options": [
      "Escape lane ahead for vehicles that cannot stop",
      "Lay-by ahead for slow vehicles",
      "Slip road joining the main road",
      "Road closed: follow the diversion"
    ],
    "correctIndex": 0,
    "explanation": "Escape lanes on steep hills are for vehicles whose brakes have failed.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/warning-signs",
    "image": {
      "src": "/driving/kyts-escape-lane.svg",
      "alt": "Blue panel with a white road splitting into a short branch ending in a chequered area and Escape lane ahead"
    }
  },
  {
    "id": "dt-visual-088",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "What does a cycle lane bordered by a broken white line mean for drivers?",
    "options": [
      "Do not drive or park in it unless unavoidable",
      "You must never cross the line",
      "Park in it if no cyclists are around",
      "Drive in it whenever traffic is slow"
    ],
    "correctIndex": 0,
    "explanation": "An advisory cycle lane is marked by a broken white line. Do not drive or park in it unless you cannot avoid it.",
    "highwayCodeRule": "140",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/traffic-signs",
    "image": {
      "src": "/driving/kyts-advisory-road-markings-cycle-lane.svg",
      "alt": "Road lane separated by a broken white line with a small bicycle symbol"
    }
  },
  {
    "id": "dt-visual-089",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this sign mean?",
    "options": [
      "Speed cameras operate on this 30 mph road",
      "A minimum speed of 30 mph applies",
      "Cameras check vehicles over 30 tonnes",
      "A speed limit of 30 km/h applies"
    ],
    "correctIndex": 0,
    "explanation": "This sign reminds drivers of the 30 mph limit and nearby speed cameras.",
    "highwayCodeRule": "Annex: Traffic signs",
    "learnMoreUrl": "https://www.gov.uk/government/publications/know-your-traffic-signs/speed-limit-signs",
    "image": {
      "src": "/driving/kyts-speed-camera-30-mph.svg",
      "alt": "Blue panel with a camera symbol above a red-ringed 30"
    }
  }
];
