import type { Question } from '../types';

// Original scenarios; live GOV.UK Highway Code checked 26 October 2026.
// Existing OGL images retain their provenance in public/driving/manifest.json.
export const drivingWeakTopicsQuestions: Question[] = [
  {
    "id": "dt-weak-001",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A driver reads this blue circular sign as a maximum. What have they confused?",
    "options": [
      "A minimum with a maximum",
      "Advice with a minimum",
      "A local with a national limit",
      "Tram and car limits"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The traffic-signs section identifies this blue circle as a minimum speed order. A red-bordered speed circle sets a maximum.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "image": {
      "src": "/driving/sign-giving-order-minimum-speed.jpg",
      "alt": "Blue circle containing a speed number"
    }
  },
  {
    "id": "dt-weak-002",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "After passing this crossed blue speed sign, which requirement has ended?",
    "options": [
      "The limit for vehicles towing trailers",
      "The signed minimum speed",
      "The national speed limit",
      "The overtaking ban"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The traffic-signs section labels this as the end of minimum speed. It does not cancel a maximum speed limit.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "image": {
      "src": "/driving/sign-giving-order-minimum-speed-end.jpg",
      "alt": "Blue speed circle crossed by a red diagonal"
    }
  },
  {
    "id": "dt-weak-003",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "On a wet road, what does the number inside this red circle tell you?",
    "options": [
      "The minimum safe speed",
      "The recommended speed for wet weather",
      "The maximum permitted speed",
      "The required driving speed"
    ],
    "correctIndex": 2,
    "explanation": "Rule 124: A maximum is a ceiling, not a target. Rule 125 requires a lower speed when conditions make the limit unsafe.",
    "highwayCodeRule": "124",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule124",
    "image": {
      "src": "/driving/sign-giving-order-maximum-speed.jpg",
      "alt": "Red-bordered circle around a speed numeral"
    }
  },
  {
    "id": "dt-weak-004",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This plate is below a bend warning. How should its speed advice affect your approach?",
    "options": [
      "Maintain at least that speed",
      "Keep exactly that speed",
      "Ignore it in a car",
      "Use a lower speed if needed"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: This rectangular plate advises a maximum at the bend; it is not a red-circle limit or a blue-circle minimum. Rule 125 also requires a speed suited to conditions.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "image": {
      "src": "/driving/kyts-max-speed-30-mph.svg",
      "alt": "Red triangle with a bend symbol above a plate reading Max speed 30"
    }
  },
  {
    "id": "dt-weak-005",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Your car is towing a trailer on a dual carriageway beyond this sign. What maximum applies?",
    "options": [
      "60 mph",
      "50 mph",
      "70 mph",
      "80 mph"
    ],
    "correctIndex": 0,
    "explanation": "Rule 124: The national limit for a car towing a trailer on a dual carriageway is 60 mph. The sign does not give every vehicle the same limit.",
    "highwayCodeRule": "124",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule124",
    "image": {
      "src": "/driving/sign-giving-order-national-speed-limit.jpg",
      "alt": "White circle with a black diagonal stripe"
    }
  },
  {
    "id": "dt-weak-006",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The road ahead looks clear when this variable-speed sign appears. How should you interpret it?",
    "options": [
      "Displayed limits are suggestions after dark",
      "Limits can change along the road",
      "National limits apply throughout",
      "Limits apply only in queues"
    ],
    "correctIndex": 1,
    "explanation": "Rule 124: This sign marks the start of a variable-speed-limit section with enforcement cameras. Follow the displayed limits; a speed shown within a red circle is mandatory, even when you cannot yet see the reason for it.",
    "highwayCodeRule": "124",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule124",
    "image": {
      "src": "/driving/variable_speed_limit.png",
      "alt": "Blue sign reading Variable speed limit above a camera symbol"
    }
  },
  {
    "id": "dt-weak-007",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A motorway display shows 50 inside a red circle. What does that mean for a car driver?",
    "options": [
      "A minimum speed of 50 mph",
      "A maximum of 50 mph for heavy vehicles",
      "A compulsory maximum of 50 mph",
      "An advised maximum of 50 mph"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: A speed in a red circle is an order. Rule 124 requires compliance with the maximum limit, including variable limits.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109"
  },
  {
    "id": "dt-weak-008",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This motorway speed display has no red circle. What kind of instruction is the number?",
    "options": [
      "A minimum for all lanes",
      "A compulsory car limit",
      "A compulsory limit for heavy vehicles",
      "An advised maximum speed"
    ],
    "correctIndex": 3,
    "explanation": "Rule 257: Amber motorway signals warn of a hazard. This display advises a maximum; reduce speed and prepare for the hazard.",
    "highwayCodeRule": "257",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule257",
    "image": {
      "src": "/driving/motorway-signal-temporary-speed.jpg",
      "alt": "Grey roadside signal showing a dotted 50 with amber lamps"
    }
  },
  {
    "id": "dt-weak-009",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This sign ends a variable-speed section on a motorway. What maximum now applies to a car towing a trailer, if conditions allow?",
    "options": [
      "60 mph",
      "70 mph",
      "50 mph",
      "80 mph"
    ],
    "correctIndex": 0,
    "explanation": "Rule 124: The end-of-variable-speed sign restores national limits for the road and vehicle class. A car towing a trailer has a motorway maximum of 60 mph.",
    "highwayCodeRule": "124",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule124",
    "image": {
      "src": "/driving/kyts-end-of-variable-speed.svg",
      "alt": "Blue panel reading Variable speed limit ENDS above a diagonal stripe"
    }
  },
  {
    "id": "dt-weak-010",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "After an amber motorway warning, the hazard seems to have gone but no clear signal has been passed. What should you do?",
    "options": [
      "Assume the warning has ended",
      "Keep to the reduced speed",
      "Resume the national limit",
      "Accelerate with the car ahead"
    ],
    "correctIndex": 1,
    "explanation": "Rule 257: Wait until a non-flashing signal, national-limit sign or END sign, and make sure it is safe before increasing speed.",
    "highwayCodeRule": "257",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule257"
  },
  {
    "id": "dt-weak-011",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A car driver sees this diamond beside tram rails. Should its number be used as the car speed limit?",
    "options": [
      "Yes, when a tram is present",
      "No, it instructs lorry drivers",
      "No, it instructs tram drivers",
      "Yes, it overrides circular signs"
    ],
    "correctIndex": 2,
    "explanation": "Rule 300: Diamond-shaped signs instruct tram drivers, not car drivers. Follow the signs and limits for your own vehicle.",
    "highwayCodeRule": "300",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule300",
    "image": {
      "src": "/driving/kyts-tram-speed-limit.svg",
      "alt": "White diamond with a black border containing the number 30"
    }
  },
  {
    "id": "dt-weak-012",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Your sat-nav route points into a street with this blue sign. What should you do in a car?",
    "options": [
      "Enter if there is no tram",
      "Follow a tram through",
      "Use the street outside the rush hour",
      "Choose another route for the car"
    ],
    "correctIndex": 3,
    "explanation": "Rule 300: A route reserved for trams must not be entered by a car. Navigation instructions do not override this restriction.",
    "highwayCodeRule": "300",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule300",
    "image": {
      "src": "/driving/sign-giving-order-trams-only.jpg",
      "alt": "Blue circle showing a tram"
    }
  },
  {
    "id": "dt-weak-013",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This triangular sign appears before a junction. What should you anticipate?",
    "options": [
      "Trams crossing your route",
      "A tram-only route",
      "A minimum speed for trams",
      "Parking for tram passengers"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The traffic-signs section identifies this warning as trams crossing ahead. Rule 301 requires extra care where tracks cross the road.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "image": {
      "src": "/driving/warning-sign-trams-crossing-ahead.jpg",
      "alt": "Red triangle with a tram symbol"
    }
  },
  {
    "id": "dt-weak-014",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "Your traffic light is red but the tram receives a white light signal. What should you do?",
    "options": [
      "Move up beside the tram before stopping",
      "Wait for your own traffic signal",
      "Follow the moving tram",
      "Turn left behind the tram"
    ],
    "correctIndex": 1,
    "explanation": "Rule 300: White light signals instruct tram drivers. They do not release road traffic held by its own red signal; Rule 109 requires obedience to that signal.",
    "highwayCodeRule": "300",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule300"
  },
  {
    "id": "dt-weak-015",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "Yellow dots mark the width of a tram path beside you. What must you avoid when parking?",
    "options": [
      "Turning wheels towards the kerb",
      "Using a marked bay clear of the tram path",
      "Obstructing the marked tram path",
      "Parking beyond a speed sign"
    ],
    "correctIndex": 2,
    "explanation": "Rule 302: All parts of the vehicle must be clear of the delineated tram path. Rule 300 explains that white lines, yellow dots or different surfacing can mark its width.",
    "highwayCodeRule": "302",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule302"
  },
  {
    "id": "dt-weak-016",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A tram stops to collect passengers where there is no platform or alternative signed route. What should you do?",
    "options": [
      "Pass beside the left kerb",
      "Sound the horn and pass right",
      "Follow people across the rails",
      "Wait until the tram moves off"
    ],
    "correctIndex": 3,
    "explanation": "Rule 303: At a stop without a platform, do not pass between the tram and left kerb. With no alternative route signed, wait until the tram moves off.",
    "highwayCodeRule": "303",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule303"
  },
  {
    "id": "dt-weak-017",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist ahead changes angle before crossing wet tram rails. How should you respond?",
    "options": [
      "Allow room to change direction",
      "Move alongside the cyclist",
      "Use the horn to deter swerving",
      "Pass close as the cyclist slows"
    ],
    "correctIndex": 0,
    "explanation": "Rule 306: Wet rails and shallow crossing angles are hazardous. Cyclists may need extra space to cross more nearly at right angles.",
    "highwayCodeRule": "306",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule306"
  },
  {
    "id": "dt-weak-018",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Why is leaving a small part of your parked car inside a marked tram path dangerous?",
    "options": [
      "A tram can pass by ringing its bell",
      "A tram cannot steer around it",
      "A tram must use the pavement",
      "A tram can swerve at low speed"
    ],
    "correctIndex": 1,
    "explanation": "Rule 302: Trams follow their rails and cannot steer round obstructions. Keep the whole vehicle outside the marked tram path.",
    "highwayCodeRule": "302",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307#rule302"
  },
  {
    "id": "dt-weak-019",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "Compared with an ordinary centre line, what do these longer strokes and shorter gaps tell you?",
    "options": [
      "A STOP line is ahead",
      "A waiting ban starts",
      "A hazard is ahead",
      "A bus lane starts"
    ],
    "correctIndex": 2,
    "explanation": "Rule 127: Longer centre-line strokes with shorter gaps warn of a hazard. Cross only with a clear view when overtaking or turning off.",
    "highwayCodeRule": "127",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule127",
    "image": {
      "src": "/driving/along-carriageway-hazard-warn-line.jpg",
      "alt": "Long white centre-line marks with short gaps"
    }
  },
  {
    "id": "dt-weak-020",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "You want to turn across this ordinary broken centre line. What must you establish first?",
    "options": [
      "That solid lines follow",
      "That there are four lanes",
      "That the next car is turning",
      "That the road is clear"
    ],
    "correctIndex": 3,
    "explanation": "Rule 127: A broken centre line can be crossed to turn off or overtake when you can see that the road is clear.",
    "highwayCodeRule": "127",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule127",
    "image": {
      "src": "/driving/along-carriageway-centre-line.jpg",
      "alt": "Short white centre-line strokes with longer gaps"
    }
  },
  {
    "id": "dt-weak-021",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "On a wide carriageway, these short broken lines divide traffic moving the same way. How should you position the car?",
    "options": [
      "Keep between the lane dividers",
      "Straddle a divider",
      "Keep right of every divider",
      "Keep crossing the lines to improve your view"
    ],
    "correctIndex": 0,
    "explanation": "Rule 131: Lane dividers are short broken white lines. Keep between them; they are not the longer hazard-warning centre marks.",
    "highwayCodeRule": "131",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule131",
    "image": {
      "src": "/driving/along-carriageway-lane-line.jpg",
      "alt": "Short broken white lane-dividing line"
    }
  },
  {
    "id": "dt-weak-022",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "What does this continuous white line identify at the side of the road?",
    "options": [
      "A lane reserved for emergency vehicles",
      "The edge of the carriageway",
      "A ban on loading",
      "An all-day waiting ban"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The road-markings section identifies an edge line. It does not, by itself, create a yellow-line waiting restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "image": {
      "src": "/driving/along-carriageway-edge-line.jpg",
      "alt": "Continuous white line at the road edge"
    }
  },
  {
    "id": "dt-weak-023",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "With the broken line of this pair nearest you, an overtake would finish after your line becomes solid. What should you do?",
    "options": [
      "Straddle the pair of lines",
      "Move out before the solid section",
      "Stay behind the vehicle",
      "Finish after the line turns solid"
    ],
    "correctIndex": 2,
    "explanation": "Rule 128: An overtake across the broken line must be completed before you reach a solid line on your side.",
    "highwayCodeRule": "128",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule128",
    "image": {
      "src": "/driving/along-carriageway-double-white-broken-line.jpg",
      "alt": "Double white centre lines, with the nearer line broken"
    }
  },
  {
    "id": "dt-weak-024",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "With the solid line nearest you, which moving vehicle may you cross these lines to pass if necessary and the road is clear?",
    "options": [
      "An agricultural tractor travelling at 8 mph",
      "A cyclist travelling at 15 mph",
      "A delivery van travelling at 8 mph",
      "A cyclist travelling at 8 mph"
    ],
    "correctIndex": 3,
    "explanation": "Rule 129: The exception covers a pedal cycle, horse or road maintenance vehicle travelling at 10 mph or less. It is not a general permission to pass any slow vehicle.",
    "highwayCodeRule": "129",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule129",
    "image": {
      "src": "/driving/along-carriageway-double-white-line.jpg",
      "alt": "Double white centre lines, with a continuous line nearest you"
    }
  },
  {
    "id": "dt-weak-025",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "The nearer centre line is solid, but you need to turn into a driveway across it. When may you cross?",
    "options": [
      "When it is safe to make the turn",
      "When the following car passes",
      "When an oncoming driver flashes",
      "When the driveway is 10 metres wide"
    ],
    "correctIndex": 0,
    "explanation": "Rule 129: You may cross a solid line to enter adjoining premises or a side road when safe. This is a specific exception to the crossing prohibition.",
    "highwayCodeRule": "129",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule129"
  },
  {
    "id": "dt-weak-026",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "You could use this broken-bordered hatched area to get ahead of a queue. What condition governs entry?",
    "options": [
      "It must be used by the vehicle ahead first",
      "It must be necessary and safe",
      "It must shorten your journey",
      "It must be outside peak hours"
    ],
    "correctIndex": 1,
    "explanation": "Rule 130: Broken-bordered hatching should not be entered unless necessary and visibly safe. It separates traffic or protects turning traffic.",
    "highwayCodeRule": "130",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule130",
    "image": {
      "src": "/driving/along-carriageway-diagonal-line.jpg",
      "alt": "Diagonal white stripes between broken white boundary lines"
    }
  },
  {
    "id": "dt-weak-027",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A chevron area has solid white boundaries. Which situation permits entry?",
    "options": [
      "An overtake of a slow tractor",
      "A missed side-road turning",
      "An emergency requiring entry",
      "A queue at the next junction"
    ],
    "correctIndex": 2,
    "explanation": "Rule 130: Solid-bordered chevrons must not be entered except in an emergency. They are more restrictive than broken-bordered hatching.",
    "highwayCodeRule": "130",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule130"
  },
  {
    "id": "dt-weak-028",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "No traffic is visible at a junction with this sign and a solid transverse line. What is required?",
    "options": [
      "Roll across while looking",
      "Stop if traffic appears",
      "Pause beyond the line for a clearer view",
      "Stop behind the solid line"
    ],
    "correctIndex": 3,
    "explanation": "Rule 171: The STOP sign requires a stop behind the line even when the road looks empty, followed by waiting for a safe gap.",
    "highwayCodeRule": "171",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule171",
    "image": {
      "src": "/driving/sign-giving-order-stop-give-way.jpg",
      "alt": "Red eight-sided STOP sign"
    }
  },
  {
    "id": "dt-weak-029",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "At these broken transverse lines, which traffic must you give way to before emerging?",
    "options": [
      "Traffic on the main road",
      "Traffic behind your car",
      "Traffic leaving your road",
      "Traffic from the left alone"
    ],
    "correctIndex": 0,
    "explanation": "Rule 172: Broken lines across the road at a junction require you to give way to traffic on the main road.",
    "highwayCodeRule": "172",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule172",
    "image": {
      "src": "/driving/across-carriageway-give-way-traffic-major-road.jpg",
      "alt": "Double broken transverse white lines"
    }
  },
  {
    "id": "dt-weak-030",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "You want to turn right through this box, but a queue blocks the road you would enter. What should you do?",
    "options": [
      "Follow the next right-turning car into it",
      "Wait outside until the exit clears",
      "Enter because it is a right turn",
      "Enter if no traffic approaches"
    ],
    "correctIndex": 1,
    "explanation": "Rule 174: The right-turn exception does not cover a blocked exit. It permits waiting for oncoming traffic or other right-turning vehicles when your exit is clear.",
    "highwayCodeRule": "174",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule174",
    "image": {
      "src": "/driving/other-road-markings-box-junction.jpg",
      "alt": "Yellow criss-cross box at a junction"
    }
  },
  {
    "id": "dt-weak-031",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A passenger is ready to get out beside the zig-zag approach to a pedestrian crossing. With no traffic behind, may you stop briefly there?",
    "options": [
      "Yes, if the crossing is empty",
      "Yes, for less than a minute",
      "No, stopping there is prohibited",
      "Yes, if the passenger is ready"
    ],
    "correctIndex": 2,
    "explanation": "Rule 240: Do not stop or park on a pedestrian crossing or its zig-zag area. Being brief or having no following traffic does not permit a passenger stop.",
    "highwayCodeRule": "240",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule240"
  },
  {
    "id": "dt-weak-032",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "These school entrance markings have a sign prohibiting stopping during the current period. May you briefly drop off a passenger?",
    "options": [
      "Yes, with the engine running",
      "Yes, if the passenger is ready",
      "Yes, if the entrance is empty",
      "No, stopping is prohibited"
    ],
    "correctIndex": 3,
    "explanation": "Rule 238: When upright signs prohibit stopping, school entrance markings prohibit even passenger pick-up or set-down.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule238",
    "image": {
      "src": "/driving/other-road-markings-school-keep-clear.jpg",
      "alt": "Yellow zigzags and school entrance lettering"
    }
  },
  {
    "id": "dt-weak-033",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "This bus lane has an upright sign stating buses and cycles, 7–10 am. At 9 am, what should a car driver seeking to pass a queue do?",
    "options": [
      "Stay outside the bus lane",
      "Use it if no bus is visible",
      "Use it to pass up to two cars",
      "Use it while indicating right"
    ],
    "correctIndex": 0,
    "explanation": "Rule 141: During the signed operating period, ordinary cars should not drive in this bus lane. The absence of a bus does not suspend the restriction.",
    "highwayCodeRule": "141",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule141",
    "image": {
      "src": "/driving/other-road-markings-bus-lane-road.jpg",
      "alt": "Solid white line beside a lane with BUS LANE painted on it"
    }
  },
  {
    "id": "dt-weak-034",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "There is a queue beside this broken-bordered cycle lane. Is avoiding the delay enough reason to drive along the lane?",
    "options": [
      "Yes, if the queue is stationary",
      "No, entry should be unavoidable",
      "Yes, if no cycle is visible",
      "Yes, if you stay below 10 mph"
    ],
    "correctIndex": 1,
    "explanation": "Rule 140: Avoid driving or parking in a broken-line cycle lane unless unavoidable. A desire to get past a queue does not make entry unavoidable.",
    "highwayCodeRule": "140",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule140",
    "image": {
      "src": "/driving/kyts-advisory-road-markings-cycle-lane.svg",
      "alt": "Road lane separated by a broken white line with a small bicycle symbol"
    }
  },
  {
    "id": "dt-weak-035",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "Double yellow lines have no kerb marks or other loading restriction. Which activity may be allowed?",
    "options": [
      "Parking to collect a meal",
      "Waiting with hazard lights on",
      "Loading or unloading goods",
      "Waiting for a shop to open"
    ],
    "correctIndex": 2,
    "explanation": "Rule 238: Yellow lines restrict waiting. The road-markings section permits loading unless separate loading restrictions apply; avoid obstruction or danger.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule238"
  },
  {
    "id": "dt-weak-036",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "Double yellow lines are accompanied by these double kerb marks. How does that affect unloading?",
    "options": [
      "Five minutes’ unloading is allowed",
      "Unloading is allowed off-peak",
      "Unloading is allowed while the driver stays",
      "Unloading is prohibited at any time"
    ],
    "correctIndex": 3,
    "explanation": "Rule 247: Double yellow kerb marks mean no loading or unloading at any time. Double yellow road lines separately prohibit waiting.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247",
    "image": {
      "src": "/driving/on-kerb-double-line-no-loading.jpg",
      "alt": "Double yellow marks across the kerb"
    }
  },
  {
    "id": "dt-weak-037",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A single yellow line operates 8 am–6 pm; single kerb marks prohibit loading 8–10 am. At 9 am, which restrictions apply?",
    "options": [
      "Both waiting and loading bans",
      "Waiting, but not unloading",
      "Loading, but not waiting",
      "Neither if the driver stays with the car"
    ],
    "correctIndex": 0,
    "explanation": "Rule 247: Read both sets of times: at 9 am both bans operate. Rule 238 covers the waiting restriction; kerb marks and plates control loading.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247"
  },
  {
    "id": "dt-weak-038",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "The same single yellow line operates 8 am–6 pm, with loading banned 8–10 am. At noon, what may be allowed if there are no other restrictions?",
    "options": [
      "Waiting with the engine off",
      "Loading or unloading goods",
      "Waiting for a passenger",
      "Parking to browse in a shop"
    ],
    "correctIndex": 1,
    "explanation": "Rule 247: At noon the loading ban has ended, but the waiting ban still applies under Rule 238. Loading may be permitted where waiting is restricted.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247"
  },
  {
    "id": "dt-weak-039",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "Double yellow road lines remain beside single kerb marks whose loading ban ends at 10 am. At noon, what has ended?",
    "options": [
      "Both prohibitions",
      "The prohibition on all stopping",
      "The loading prohibition",
      "The waiting prohibition"
    ],
    "correctIndex": 2,
    "explanation": "Rule 247: Single kerb marks apply during the signed loading times. The double yellow waiting restriction remains in force under Rule 238.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247"
  },
  {
    "id": "dt-weak-040",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "Double yellow road lines and double yellow kerb marks are present. The nearby shops have closed for the day. Can you unload here?",
    "options": [
      "Yes, once the shops have closed",
      "Yes, for under ten minutes",
      "Yes, if a passenger stays with the car",
      "No, the loading ban still applies"
    ],
    "correctIndex": 3,
    "explanation": "Rule 247: Double yellow kerb marks prohibit loading and unloading at any time, whatever the time of day or whether nearby shops are open. The double yellow lines on the road separately prohibit waiting at any time.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247"
  },
  {
    "id": "dt-weak-041",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "With these single kerb marks, where do you find the hours when unloading is prohibited?",
    "options": [
      "On the nearby loading-restriction plate",
      "On a speed-limit repeater",
      "On the nearest parking meter",
      "On the sign at the end of the motorway"
    ],
    "correctIndex": 0,
    "explanation": "Rule 247: Single yellow kerb marks identify a timed loading restriction. Check its black-and-white plate, separately from waiting times.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247",
    "image": {
      "src": "/driving/on-kerb-single-line-no-loading-times.jpg",
      "alt": "Single yellow marks across the kerb"
    }
  },
  {
    "id": "dt-weak-042",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A single yellow line has a plate reading 8 am–6 pm with no days listed. What applies at noon on Sunday?",
    "options": [
      "It applies on bank holidays alone",
      "The waiting restriction applies",
      "It applies on weekdays alone",
      "It ends at noon on Sundays"
    ],
    "correctIndex": 1,
    "explanation": "Rule 238: The road-markings guidance says that restrictions with no days listed operate every day, including Sundays and bank holidays.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule238"
  },
  {
    "id": "dt-weak-043",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A yellow line runs beside a grass verge. Does moving the car onto the verge avoid the waiting restriction?",
    "options": [
      "Yes, if facing with traffic",
      "No, except for a short stay",
      "No, the verge is covered too",
      "Yes, with all wheels off-road"
    ],
    "correctIndex": 2,
    "explanation": "Rule 238: Yellow-line waiting restrictions cover the carriageway, pavement and verge, as explained in the road-markings section.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule238"
  },
  {
    "id": "dt-weak-044",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "You enter a Controlled Parking Zone and find a single yellow line with no separate time plate. Where are its general waiting hours shown?",
    "options": [
      "On a speed-limit sign",
      "On a bus-stop timetable",
      "Painted beside every line",
      "On signs at the zone entrances"
    ],
    "correctIndex": 3,
    "explanation": "Rule 245: Controlled Parking Zone entry signs show the general waiting times. Separately signed restrictions must also be observed.",
    "highwayCodeRule": "245",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule245"
  },
  {
    "id": "dt-weak-045",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "These double kerb marks are on an ordinary yellow-line road with no other restrictions. What do they NOT prohibit by themselves?",
    "options": [
      "Passenger boarding or alighting",
      "Unloading a customer’s parcel",
      "Loading a delivery van",
      "Unloading with the engine running"
    ],
    "correctIndex": 0,
    "explanation": "Rule 247: Kerb marks restrict loading goods. The road-markings section permits stopping for passengers to board or alight; do not confuse this with waiting for someone to arrive.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247",
    "image": {
      "src": "/driving/on-kerb-double-line-no-loading.jpg",
      "alt": "Double yellow marks across the kerb"
    }
  },
  {
    "id": "dt-weak-046",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A private car without an exemption wants to unload on these double red lines, outside any marked bay. What should the driver do?",
    "options": [
      "Unload if someone stays inside",
      "Find a permitted loading place",
      "Unload for under five minutes",
      "Unload after the evening peak"
    ],
    "correctIndex": 1,
    "explanation": "Rule 240: Double red lines prohibit stopping at any time. Rule 247 directs loading on red routes to specially marked and signed bays.",
    "highwayCodeRule": "240",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule240",
    "image": {
      "src": "/driving/along-edge-carriageway-red-route-no-stopping-double-red-line.jpg",
      "alt": "Double red lines along the road edge"
    }
  },
  {
    "id": "dt-weak-047",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "A passenger offers to put a warning triangle on the motorway hard shoulder after a breakdown. What should you tell them?",
    "options": [
      "Put it beyond the nearest bend",
      "Put it on the hard shoulder",
      "Leave the triangle in the car",
      "Put it 45 metres behind"
    ],
    "correctIndex": 2,
    "explanation": "Rule 276: Warning triangles must not be used on motorways, including the hard shoulder. Rule 277 also prohibits placing one on the carriageway.",
    "highwayCodeRule": "276",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule276"
  },
  {
    "id": "dt-weak-048",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "You have left a broken-down motorway car safely and are behind a barrier. Rain starts. What should you do?",
    "options": [
      "Return to the passenger seat",
      "Stand on the traffic side",
      "Shelter just behind the boot",
      "Remain safely away from the car"
    ],
    "correctIndex": 3,
    "explanation": "Rule 277: Do not return to the vehicle even when it is raining, cold or dark. Stay away from traffic and where a collision could push the car.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule277"
  },
  {
    "id": "dt-weak-049",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "A puncture has forced you onto a motorway hard shoulder. You can safely exit. Should you change the wheel there?",
    "options": [
      "No, get safe and seek help",
      "Yes, if it is a left tyre",
      "Yes, with a triangle behind",
      "Yes, with a passenger watching"
    ],
    "correctIndex": 0,
    "explanation": "Rule 277: Do not attempt repairs on the motorway. Leave by the side away from traffic if safe and seek assistance from a safe position.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule277"
  },
  {
    "id": "dt-weak-050",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "Your car stops in a live motorway lane and you cannot safely get out. Which call should you make immediately?",
    "options": [
      "Recovery for a routine booking",
      "999, asking for the police",
      "The insurer for a claim form",
      "A garage for a repair quote"
    ],
    "correctIndex": 1,
    "explanation": "Rule 277: If you cannot get to relative safety and exit safely, keep seat belts and hazards on and call 999 for the police, or use the vehicle SOS button.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule277"
  },
  {
    "id": "dt-weak-051",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "What facility does this motorway sign identify ahead?",
    "options": [
      "Parking for telephone calls",
      "A shoulder open to traffic",
      "An emergency stopping area",
      "A service area for breaks"
    ],
    "correctIndex": 2,
    "explanation": "Rule 270: Emergency areas are identified by blue signs with an orange SOS telephone symbol. They are for emergencies, not routine stops.",
    "highwayCodeRule": "270",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule270",
    "image": {
      "src": "/driving/kyts-300-yds-emergency-area.svg",
      "alt": "Blue panel with an orange SOS phone shape and 300 yds"
    }
  },
  {
    "id": "dt-weak-052",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "Why must you contact the operator before leaving a motorway emergency area after a breakdown?",
    "options": [
      "The speed limit must change",
      "A new MOT must be issued",
      "Fuel must be arranged",
      "A lane may need to be closed"
    ],
    "correctIndex": 3,
    "explanation": "Rule 278: Use the emergency telephone and follow the operator’s advice. A traffic lane may need to be closed to let you rejoin safely.",
    "highwayCodeRule": "278",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule278"
  },
  {
    "id": "dt-weak-053",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "The sign over a motorway hard shoulder changes from a speed limit to blank. What does the blank display mean?",
    "options": [
      "It is closed to normal traffic",
      "It stays open at national limits",
      "It stays open for overtaking",
      "It becomes a lane for trailers"
    ],
    "correctIndex": 0,
    "explanation": "Rule 269: A blank sign or red X above a hard shoulder means it must not be used except in an emergency. A displayed speed limit is needed for ordinary running.",
    "highwayCodeRule": "269",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule269"
  },
  {
    "id": "dt-weak-054",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "A red X closes the left lane at the exit you planned to use. How should you continue?",
    "options": [
      "Follow the car taking that exit",
      "Continue to a later available exit",
      "Cross the closed lane to exit",
      "Use the shoulder to the slip road"
    ],
    "correctIndex": 1,
    "explanation": "Rule 258: If the left lane is closed at an exit slip road, that exit cannot be used. Stay in an open lane and follow the signs.",
    "highwayCodeRule": "258",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273#rule258"
  },
  {
    "id": "dt-weak-055",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Breakdowns & Incidents",
    "question": "When reporting a motorway breakdown, what information on this sign helps emergency services locate you?",
    "options": [
      "The colour of the car behind",
      "The reading on your trip counter",
      "The sign’s numbers and letters",
      "The next town on your route"
    ],
    "correctIndex": 2,
    "explanation": "Rule 277: Quote the numbers and letters on a driver location sign or marker post so emergency services can identify your position.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule277",
    "image": {
      "src": "/driving/kyts-driver-location-sign.svg",
      "alt": "Small blue sign with M42, A and 194.7 on three lines"
    }
  },
  {
    "id": "dt-weak-056",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You are safely stopped on a hard shoulder after a breakdown. Before rejoining, which manoeuvre is advised?",
    "options": [
      "Enter from a standstill",
      "Wait for traffic to brake",
      "Drive into the middle lane",
      "Build speed and find a safe gap"
    ],
    "correctIndex": 3,
    "explanation": "Rule 278: Build up speed, indicate and watch for a safe gap. Check for vehicles, debris or obstructions on the shoulder.",
    "highwayCodeRule": "278",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287#rule278"
  },
  {
    "id": "dt-weak-057",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A 12-year-old passenger says their parent, sitting beside them, is responsible for their seat belt. Who has the legal duty?",
    "options": [
      "The driver of the car",
      "The accompanying parent",
      "The passenger alone",
      "The registered vehicle keeper"
    ],
    "correctIndex": 0,
    "explanation": "Rule 100: The driver must ensure children under 14 use the required belt or restraint. A parent travelling as a passenger does not take over that legal duty.",
    "highwayCodeRule": "100",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule100"
  },
  {
    "id": "dt-weak-058",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A passenger has just turned 14 and has no exemption. Who is legally responsible for using their fitted belt?",
    "options": [
      "The adult arranging the trip",
      "The passenger wearing the belt",
      "The driver of the car",
      "The vehicle’s registered keeper"
    ],
    "correctIndex": 1,
    "explanation": "Rule 99: From age 14, the passenger is responsible for their own seat belt. The driver’s specific responsibility for children applies below 14.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-059",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "An 11-year-old is 1.40 metres tall. For an ordinary car journey with a fitted belt and no exemption, what is required?",
    "options": [
      "A booster at any height",
      "A child seat until age 12",
      "The fitted adult seat belt",
      "A child seat until age 14"
    ],
    "correctIndex": 2,
    "explanation": "Rule 99: The child-restraint threshold ends at 1.35 metres or the 12th birthday, whichever comes first. The fitted adult belt must be worn; the driver remains responsible under 14.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-060",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A child turns 12 but is still 1.30 metres tall. Which restraint is legally required in a car with fitted belts and no exemption?",
    "options": [
      "A booster until 1.35 metres",
      "A weight-appropriate baby seat",
      "No restraint in the rear",
      "The fitted adult seat belt"
    ],
    "correctIndex": 3,
    "explanation": "Rule 99: The 12th birthday ends the normal child-restraint requirement even below 1.35 metres. The fitted adult belt remains compulsory.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-061",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "An ordinary family car is taking a two-year-old on a short planned journey. What must be provided?",
    "options": [
      "The correct child restraint",
      "An adult belt and cushion",
      "An adult’s lap in the rear",
      "A rear seat without a belt"
    ],
    "correctIndex": 0,
    "explanation": "Rule 99: Children under three need the correct child restraint in an ordinary car. A short planned journey does not create an exemption.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-062",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A two-year-old travels in the rear of a taxi that has no suitable child restraint available. What does the Code permit?",
    "options": [
      "Share another passenger’s belt",
      "Travel unrestrained in the rear",
      "Use an adult’s lap in front",
      "Travel unrestrained in front"
    ],
    "correctIndex": 1,
    "explanation": "Rule 99: The table permits an under-three child to travel unrestrained in the rear of a taxi when the correct restraint is unavailable. It does not extend this exception to the front seat.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-063",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A five-year-old below 1.35 metres must make an unexpected, necessary short journey and no child restraint is available. What must they use in a belted rear seat?",
    "options": [
      "A cushion instead of the belt",
      "No restraint for under 50 metres",
      "The fitted adult seat belt",
      "A belt shared with an adult"
    ],
    "correctIndex": 2,
    "explanation": "Rule 99: For a child aged three or over, the unexpected-necessity short-distance exception allows the adult belt in the rear when the correct restraint is unavailable. It is not for routine planned trips.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-064",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A rear-facing baby seat is to be used in front of a frontal airbag. What must be true before that seat position can be used?",
    "options": [
      "The baby seat faces the airbag",
      "The seat is fully forward",
      "The car stays below 30 mph",
      "The frontal airbag is inactive"
    ],
    "correctIndex": 3,
    "explanation": "Rule 101: An active frontal airbag makes that position prohibited for a rear-facing baby seat. Follow the restraint and vehicle instructions when choosing and fitting a safe position.",
    "highwayCodeRule": "101",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule101"
  },
  {
    "id": "dt-weak-065",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "Which passenger has a recognised medical exemption from wearing a fitted seat belt?",
    "options": [
      "A holder of an exemption certificate",
      "Someone with an uncomfortable belt",
      "Someone going to see a doctor",
      "Someone behind an exempt driver"
    ],
    "correctIndex": 0,
    "explanation": "Rule 99: The medical exemption is for holders of the appropriate certificate; discomfort or the purpose of a journey is not enough.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-066",
    "subject": "vehicleSafety",
    "topic": "seat-belts",
    "topicLabel": "Seat Belts & Restraints",
    "question": "A goods-vehicle driver makes deliveries 40 metres apart. Which seat-belt exemption may apply between those stops?",
    "options": [
      "An exemption for loads over 20 kg",
      "The exemption for short delivery stages",
      "An exemption for urban driving",
      "An exemption for speeds below 30 mph"
    ],
    "correctIndex": 1,
    "explanation": "Rule 99: Drivers making deliveries or collections in goods vehicles may be exempt when travelling less than 50 metres between stops. This does not exempt ordinary goods journeys.",
    "highwayCodeRule": "99",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102#rule99"
  },
  {
    "id": "dt-weak-067",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "A Class 2 mobility scooter and a Class 3 scooter are ahead. Which pair gives their respective upper speeds?",
    "options": [
      "4 mph and 12 mph",
      "8 mph and 15 mph",
      "4 mph and 8 mph",
      "8 mph and 4 mph"
    ],
    "correctIndex": 2,
    "explanation": "Rule 36: Class 2 powered mobility vehicles have an upper speed of 4 mph; Class 3 vehicles have an upper speed of 8 mph and are equipped for road use.",
    "highwayCodeRule": "36",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule36"
  },
  {
    "id": "dt-weak-068",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "A mobility scooter and pedestrians meet on a narrow pavement. Who should be given priority?",
    "options": [
      "The road-capable Class 3 scooter",
      "The faster pavement user",
      "The user nearest the kerb",
      "The pedestrians using the pavement"
    ],
    "correctIndex": 3,
    "explanation": "Rule 38: Mobility scooter users should give pedestrians priority and consider those with hearing or visual impairments who may not know they are there.",
    "highwayCodeRule": "38",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule38"
  },
  {
    "id": "dt-weak-069",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "On a dual carriageway with a 60 mph limit, a mobility scooter displays a flashing amber beacon. What should you understand?",
    "options": [
      "It may travel at no more than 8 mph",
      "It must keep up at 60 mph",
      "It has priority to change lanes",
      "It must stay on the pavement"
    ],
    "correctIndex": 0,
    "explanation": "Rule 220: These mobility vehicles travel at a maximum of 8 mph. On dual carriageways above 50 mph they must display a flashing amber beacon; allow for the large speed difference.",
    "highwayCodeRule": "220",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule220"
  },
  {
    "id": "dt-weak-070",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "A powered mobility scooter user is planning a route. Which road is prohibited even for a Class 3 vehicle?",
    "options": [
      "A 40 mph dual carriageway",
      "A motorway",
      "A 30 mph urban road",
      "A town single carriageway"
    ],
    "correctIndex": 1,
    "explanation": "Rule 46: Powered wheelchairs and mobility scooters must not use motorways. Road equipment and an amber beacon do not create an exception.",
    "highwayCodeRule": "46",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule46"
  },
  {
    "id": "dt-weak-071",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Why should you avoid parking across a dropped kerb used by mobility scooters?",
    "options": [
      "It gives scooters priority over cars",
      "It cancels nearby waiting restrictions",
      "It blocks access to and from the pavement",
      "It changes the pavement speed limit"
    ],
    "correctIndex": 2,
    "explanation": "Rule 243: Do not stop or park where a lowered kerb helps wheelchair and mobility-vehicle users. They may depend on it for safe access.",
    "highwayCodeRule": "243",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule243"
  },
  {
    "id": "dt-weak-072",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You are passing a horse-drawn carriage. Which combination follows the Code’s overtaking guidance?",
    "options": [
      "Under 20 mph and at least 1 metre",
      "Under 30 mph and at least 1.5 metres",
      "Under 15 mph and half a lane’s width",
      "Under 10 mph and at least 2 metres"
    ],
    "correctIndex": 3,
    "explanation": "Rule 163: Pass horse riders and horse-drawn vehicles at under 10 mph with at least 2 metres of space. Wait behind if you cannot do so safely.",
    "highwayCodeRule": "163",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule163"
  },
  {
    "id": "dt-weak-073",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You meet loose ponies on an unfenced road. How should you treat them compared with ridden horses?",
    "options": [
      "Give the same careful consideration",
      "Give less space to loose ponies",
      "Sound the horn to gather them",
      "Accelerate past before they move"
    ],
    "correctIndex": 0,
    "explanation": "Rule 215: Feral and semi-feral ponies need the same consideration as ridden horses. Approach slowly, give space and be ready for unpredictable movement.",
    "highwayCodeRule": "215",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule215"
  },
  {
    "id": "dt-weak-074",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "A tractor ahead displays a flashing amber beacon on an unrestricted dual carriageway. What should you anticipate?",
    "options": [
      "A vehicle obliged to take the next exit",
      "A vehicle moving much slower than you",
      "A vehicle with junction priority",
      "A vehicle keeping motorway speed"
    ],
    "correctIndex": 1,
    "explanation": "Rule 225: An amber beacon warns of slow-moving or stationary vehicles or abnormal loads. Approach cautiously rather than assuming normal traffic speed.",
    "highwayCodeRule": "225",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule225"
  },
  {
    "id": "dt-weak-075",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Types of Vehicle",
    "question": "You are driving a slow vehicle and a long queue has formed behind. What should you do when a suitable place appears?",
    "options": [
      "Wave traffic past before a bend",
      "Drive partly on the pavement",
      "Pull in safely to let traffic pass",
      "Continue at the same pace"
    ],
    "correctIndex": 2,
    "explanation": "Rule 169: Check mirrors frequently and, when necessary, pull in where safe to let following traffic pass. Do not encourage an unsafe overtake.",
    "highwayCodeRule": "169",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule169"
  },
  {
    "id": "dt-weak-076",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist keeps about a metre away from parked cars. What hazard are they allowing for?",
    "options": [
      "A no-cycling zone",
      "A requirement to pass on the right",
      "A change in the legal speed limit",
      "Doors opening from the parked cars"
    ],
    "correctIndex": 3,
    "explanation": "Rule 213: Cyclists are advised to leave at least a door’s width or one metre from parked vehicles. Allow that space rather than trying to force them closer.",
    "highwayCodeRule": "213",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule213"
  },
  {
    "id": "dt-weak-077",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "This single red line is signed as operating 7 am–7 pm. At noon, may a private car without an exemption stop here to collect someone?",
    "options": [
      "No, stopping is prohibited",
      "Yes, for passenger pick-up",
      "Yes, with hazard lights on",
      "Yes, for up to five minutes"
    ],
    "correctIndex": 0,
    "explanation": "Rule 240: A single red line prohibits stopping during the signed times, including ordinary passenger pick-up. Special red-route exemptions do not apply to this car.",
    "highwayCodeRule": "240",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule240",
    "image": {
      "src": "/driving/along-edge-carriageway-red-route-no-stopping-red-line.jpg",
      "alt": "Single red line along the road edge beside the kerb"
    }
  },
  {
    "id": "dt-weak-078",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "You see this loading bay and want to park while visiting a friend. What determines whether that is permitted during its loading-only operation?",
    "options": [
      "You must keep the vehicle attended",
      "You must be loading or unloading",
      "You must return within 20 minutes",
      "You must keep the engine running"
    ],
    "correctIndex": 1,
    "explanation": "Rule 247: A loading bay is for loading or unloading, not general waiting. The road-markings guidance also requires checking the sign for times and permitted vehicle types.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247",
    "image": {
      "src": "/driving/on-kerb-loading-only-space.jpg",
      "alt": "Broken white bay at the kerb with LOADING ONLY painted inside"
    }
  },
  {
    "id": "dt-weak-079",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "The lights are red and the signal post is beyond this transverse line. Where must the front of your car remain?",
    "options": [
      "Beyond the line before the junction",
      "Alongside the crossing",
      "Behind the transverse stop line",
      "Level with the signal post"
    ],
    "correctIndex": 2,
    "explanation": "Rule 175: Wait behind the stop line for red. The position of the signal post does not move the stopping point.",
    "highwayCodeRule": "175",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203#rule175",
    "image": {
      "src": "/driving/across-carriageway-stop-line-signals-or-police.jpg",
      "alt": "Solid transverse white line at traffic signals"
    }
  },
  {
    "id": "dt-weak-080",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A car ahead is waiting to turn right. May you use this solid-bordered cycle lane to pass it during the lane’s operating hours?",
    "options": [
      "Yes, if no cyclist is visible",
      "Yes, if you signal before entry",
      "Yes, for one car’s length",
      "No, driving in it is prohibited"
    ],
    "correctIndex": 3,
    "explanation": "Rule 140: Do not drive or park in a solid-line cycle lane during its operating times. A car waiting to turn does not create an overtaking exception.",
    "highwayCodeRule": "140",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule140",
    "image": {
      "src": "/driving/kyts-road-markings-cycle-lane.svg",
      "alt": "Road lane separated by a solid white line with a bicycle symbol painted in it"
    }
  }
];
