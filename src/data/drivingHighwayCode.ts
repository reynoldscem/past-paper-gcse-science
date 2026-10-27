import type { Question } from '../types';

// Independently written practice questions, not the DVSA question bank.
// Based on the supplied current GOV.UK Highway Code chapters (27 October 2026).
// Official OGL images are unmodified; provenance is in public/driving/manifest.json.
export const drivingHighwayCodeQuestions: Question[] = [
  {
    "id": "hc-signs-001",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You leave a traffic-calmed area past this panel. Which zone has just finished?",
    "options": [
      "The 20 mph zone",
      "A minimum-speed zone",
      "A pedestrian-only zone",
      "A no-overtaking zone"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The crossed zone panel ends the 20 mph zone. Read the speed sign shown for the road beyond rather than assuming an unrestricted speed.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-end-20-zonev2.jpg",
      "alt": "Zone end panel with diagonal stripes"
    }
  },
  {
    "id": "hc-signs-002",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A patrol holds this board towards approaching vehicles. What instruction does it give?",
    "options": [
      "Keep moving slowly",
      "Stop for the patrol",
      "Pass if no child is visible",
      "Yield to oncoming cars only"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The patrol board is an instruction to stop. Waiting allows the patrol to protect people crossing, including anyone hidden from your view.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-school-crossing-patrol.jpg",
      "alt": "Circular patrol sign with STOP and children"
    }
  },
  {
    "id": "hc-signs-003",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A road worker presents this red board at a narrow work site. What is required?",
    "options": [
      "Proceed if clear",
      "Pass sounding the horn",
      "Wait before the works",
      "Wait for a red traffic light"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: A manually operated STOP board controls traffic through the works. An apparently empty stretch does not cancel the instruction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-manually-stop.jpg",
      "alt": "Red temporary STOP board"
    }
  },
  {
    "id": "hc-signs-004",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This green board has replaced a red STOP board at roadworks. How should you proceed?",
    "options": [
      "Accelerate at once",
      "Wait for a separate green light",
      "Yield to all oncoming traffic",
      "Move on when the route is safe"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The GO face releases the held traffic. You still need to judge whether the route is clear and drive safely through the work site.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-manually-go.jpg",
      "alt": "Green temporary GO board"
    }
  },
  {
    "id": "hc-signs-005",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A person wants to ride a bicycle past this red-bordered symbol. Which action breaches the restriction?",
    "options": [
      "Cycling beyond the sign",
      "Dismounting here",
      "Walking away from the entrance",
      "Choosing another route"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The red-ringed bicycle bans cycling. It is not the blue symbol used to indicate a cycle route.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-cycling.jpg",
      "alt": "Red-bordered circle with a bicycle"
    }
  },
  {
    "id": "hc-signs-006",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which vehicle category does this bus symbol exclude from the road?",
    "options": [
      "Every vehicle carrying any passengers",
      "Buses with over eight passenger seats",
      "Goods vehicles above eight tonnes",
      "Only buses carrying standing passengers"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The illustrated prohibition concerns buses with more than eight passenger seats. It does not depend on how many passengers happen to be aboard.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-buses.jpg",
      "alt": "Red-bordered circle with a bus"
    }
  },
  {
    "id": "hc-signs-007",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Your car is pulling a touring caravan towards this sign. What should you arrange?",
    "options": [
      "A lower speed",
      "A pedestrian walking ahead",
      "An alternative permitted route",
      "Disconnecting the caravan lights"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The red-ringed caravan prohibits towed caravans. Reducing speed or changing the load does not remove that vehicle restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-towed-caravans.jpg",
      "alt": "Red-bordered circle with a caravan"
    }
  },
  {
    "id": "hc-signs-008",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A delivery driver sees this red circle containing a burst symbol. Which load is prohibited?",
    "options": [
      "Fragile glass containers",
      "Unsecured building materials",
      "Unusually wide machinery",
      "Explosives"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: This symbol restricts vehicles carrying explosives. The depicted burst identifies the load hazard rather than a road-surface hazard.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-vehicles-carry-explosives.jpg",
      "alt": "Red-bordered circle with an explosion symbol"
    }
  },
  {
    "id": "hc-signs-009",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A driver towing a trailer checks this sign. Which measurement must meet the restriction?",
    "options": [
      "The full vehicle combination length",
      "The towing car length alone",
      "The trailer load width alone",
      "The gap between car and trailer"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The restriction applies to a vehicle or combination exceeding the displayed length, so the trailer cannot be ignored when assessing the overall length.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-vehicle-combination-length.jpg",
      "alt": "Red circle with a vehicle and length arrows"
    }
  },
  {
    "id": "hc-signs-010",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A roof load takes your car above the height shown in this red circle. What is the correct decision?",
    "options": [
      "Proceed slowly",
      "Use another route",
      "Move to the centre",
      "Ignore the sign for passenger cars"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The displayed height restriction applies to the overall vehicle, including its load. A car body that fits does not make an over-height load acceptable.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-vehicles-over-height.jpg",
      "alt": "Red circle with vertical arrows and height"
    }
  },
  {
    "id": "hc-signs-011",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What dimension is limited by the opposed horizontal arrows in this sign?",
    "options": [
      "Vehicle height",
      "Vehicle length",
      "Vehicle width",
      "Axle spacing"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: Horizontal arrows identify the width restriction. A driver must check the appropriate vehicle dimension rather than confuse it with headroom or length.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-vehicle-width.jpg",
      "alt": "Red circle with horizontal arrows and width"
    }
  },
  {
    "id": "hc-signs-012",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Your route planner says to turn right at this junction. What does the pictured sign require?",
    "options": [
      "Turn if clear",
      "Check for police then turn",
      "Turn without crossing the centre line",
      "Continue by a permitted route"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The crossed right arrow prohibits that turn. Route guidance cannot override the signed restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-right-turn.jpg",
      "alt": "Red circle with a crossed right-turn arrow"
    }
  },
  {
    "id": "hc-signs-013",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A driver reads this as a ban on right turns. Which manoeuvre actually breaches it?",
    "options": [
      "Turning left at the junction",
      "Going straight",
      "Taking a later permitted right turn",
      "Following the main road ahead"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The direction of the crossed arrow matters: this sign prohibits the left turn. It does not prohibit every possible movement at the junction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-left-turn.jpg",
      "alt": "Red circle with a crossed left-turn arrow"
    }
  },
  {
    "id": "hc-signs-014",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The lorry restriction pictured includes a loading exception. Which journey can that exception cover?",
    "options": [
      "A shortcut to avoid a traffic queue",
      "Access to load or unload goods",
      "A diversion chosen to save fuel",
      "A through trip with an empty trailer"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The plate qualifies the goods-vehicle weight restriction for loading and unloading. It does not create a general exemption for convenient through journeys.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-goods-vehicle-over-weight.jpg",
      "alt": "Red circle with a lorry weight and exception plate"
    }
  },
  {
    "id": "hc-signs-015",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "On this weak-bridge panel, what does the abbreviation m g w refer to?",
    "options": [
      "Unladen vehicle weight",
      "Weight carried on one axle",
      "Maximum gross weight",
      "The maximum trailer length"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The letters identify maximum gross weight. This is a vehicle-weight restriction, distinct from an axle limit, an unladen weight or a dimension.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-no-vehicles-max-gross-weight.jpg",
      "alt": "Red circle containing a weight in tonnes"
    }
  },
  {
    "id": "hc-signs-016",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This blue circular arrow bends left after pointing upwards. Where must you turn?",
    "options": [
      "Before the sign",
      "At any later junction",
      "Only when oncoming traffic appears",
      "At the junction ahead"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The bent arrow instructs a left turn ahead. Its shape distinguishes the approaching turn from a horizontal arrow requiring the turn at the sign.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-turn-left-ahead.jpg",
      "alt": "Blue circle containing an upward then left arrow"
    }
  },
  {
    "id": "hc-signs-017",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this horizontal white arrow in a blue circle tell a driver at the junction?",
    "options": [
      "Turn left here",
      "Keep left of a traffic island",
      "Expect a left bend later",
      "Use any lane for straight ahead"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The horizontal arrow gives a compulsory left turn at this point. It is different from the diagonal keep-left arrow used at an obstruction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-turn-left.jpg",
      "alt": "Blue circle with a horizontal left arrow"
    }
  },
  {
    "id": "hc-signs-018",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A car driver thinks this blue bicycle circle indicates a shortcut available to cars. What is the correct interpretation?",
    "options": [
      "A cycle warning on a general road",
      "A route reserved for pedal cycles",
      "A parking area for bicycles and cars",
      "A suggested route for every vehicle"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The circular blue sign designates a pedal-cycle route. It is not a general direction panel inviting car traffic.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-route-pedal-cycles-only.jpg",
      "alt": "Blue circle containing a white bicycle"
    }
  },
  {
    "id": "hc-signs-019",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Where does this blue tram panel direct a pedestrian to check both ways?",
    "options": [
      "At a bus stop",
      "At a railway car park",
      "At a tramway crossing point",
      "At a motorway emergency access"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The panel identifies a pedestrian crossing of a tramway. Looking both ways matters because trams can approach quietly and cannot steer around someone.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-pedestrian-crossing-tramway.jpg",
      "alt": "Blue panel with a tram symbol and LOOK BOTH WAYS lettering"
    }
  },
  {
    "id": "hc-signs-020",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does the rectangular outline add to the meaning of this straight white arrow?",
    "options": [
      "A left turn is mandatory",
      "The road has opposing traffic",
      "A minimum-speed section begins",
      "The road carries one-way traffic"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: A rectangular one-way sign describes the traffic flow. The similar arrow in a blue circle is an ahead-only order.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-one-way-traffic.jpg",
      "alt": "Blue rectangle with a white upward arrow"
    }
  },
  {
    "id": "hc-signs-021",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The bus and bicycle lane shown here runs in which direction?",
    "options": [
      "With the general traffic flow",
      "Against the flow",
      "Either way when quiet",
      "In alternating directions each minute"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: This is a with-flow bus and cycle lane. The sign identifies permitted users and their direction alongside the other traffic.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-with-flow-bus-cycle-lane.jpg",
      "alt": "Blue panel with bus and cycle symbols beside a white lane boundary"
    }
  },
  {
    "id": "hc-signs-022",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You are about to cross a one-way street displaying this lane diagram. What traffic must you anticipate?",
    "options": [
      "Cars reversing along every lane",
      "Buses approaching against the main flow",
      "All traffic following the same arrow",
      "A mandatory U-turn for approaching buses"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: A contra-flow bus lane carries buses in the opposite direction to the main traffic. Checking only the general one-way direction would miss them.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-contra-flow-bus-lane.jpg",
      "alt": "Blue lane panel with opposing arrows and a bus"
    }
  },
  {
    "id": "hc-signs-023",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which lane arrangement is indicated by this blue panel with a bicycle beside a lane boundary?",
    "options": [
      "An oncoming bus lane beside the kerb",
      "A shared parking lane for motorcycles",
      "A cycle lane in the traffic direction",
      "A contraflow lane for all motor vehicles"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The panel indicates a with-flow pedal-cycle lane. It does not designate a parking space or authorise other vehicle categories.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-with-flow-pedal-cycle-lane.jpg",
      "alt": "Blue panel with a cycle symbol beside a white lane boundary"
    }
  },
  {
    "id": "hc-signs-024",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which side of the carriageway reduces in width in the warning shown?",
    "options": [
      "The left-hand side",
      "Both sides equally",
      "Neither side; a lane is being added",
      "The right-hand side"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: Only the right edge of the road symbol moves inward. The warning helps you anticipate the reduced space rather than treat it as an order assigning priority.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-road-narrow.jpg",
      "alt": "Red triangle with the right road edge bending inward"
    }
  },
  {
    "id": "hc-signs-025",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "After seeing this narrowing symbol, what change should a driver expect?",
    "options": [
      "Less width on both sides ahead",
      "An extra lane opens",
      "One-way traffic starts",
      "A compulsory right turn is ahead"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: Both edges of the road diagram move inward, warning of a narrowing from both sides. Reduce your approach speed as needed for the available space.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-road-narrow-both-sides.jpg",
      "alt": "Red triangle with both road edges bending inward"
    }
  },
  {
    "id": "hc-signs-026",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The black cross inside this warning triangle represents what road layout?",
    "options": [
      "A railway crossing",
      "A crossroads ahead",
      "A compulsory four-way stop",
      "A hospital entrance ahead"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The cross depicts intersecting roads. It warns of a crossroads rather than itself imposing a STOP requirement on every approach.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-crossroads.jpg",
      "alt": "Red triangle containing a black cross"
    }
  },
  {
    "id": "hc-signs-027",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This triangle combines a curved main line with a branch. Which hazard does it identify?",
    "options": [
      "A compulsory right turn",
      "Two successive bends",
      "A junction situated on a bend",
      "A road narrowing beside a bridge"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The diagram shows a side road meeting the through route on a bend. Drivers need to anticipate joining or turning traffic where visibility may be limited.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-junction-on-bend-ahead.jpg",
      "alt": "Red triangle with curved main road and side branch"
    }
  },
  {
    "id": "hc-signs-028",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does the broader line mean in this junction warning?",
    "options": [
      "It marks the route with more lanes",
      "It shows a road closed to oncoming cars",
      "It identifies a route for heavy vehicles",
      "It shows the priority through route"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: Line thickness indicates which route has priority. It does not describe carriageway width, and priority still requires care at the junction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-t-junction-with-priority.jpg",
      "alt": "Red triangle with a thick vertical and thin right branch"
    }
  },
  {
    "id": "hc-signs-029",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "How are the side roads arranged in this warning diagram?",
    "options": [
      "They join at offset positions",
      "At one crossroads",
      "On a roundabout",
      "At a dead end beyond the sign"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The side branches are staggered rather than directly opposite. Expect traffic to emerge or turn at two nearby points.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-staggered-junction.jpg",
      "alt": "Red triangle with offset side branches"
    }
  },
  {
    "id": "hc-signs-030",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Where should you expect the additional traffic shown in this triangular diagram?",
    "options": [
      "From the right",
      "Joining from the left ahead",
      "In an opposing lane",
      "Leaving into a compulsory left turn"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The converging branch warns of traffic merging from the left. Make space and monitor the joining traffic rather than assume the lane remains isolated.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-traffic-merging-left.jpg",
      "alt": "Red triangle with a left branch joining the main arrow"
    }
  },
  {
    "id": "hc-signs-031",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Your passenger mistakes this sign for a compulsory turn. What does its triangular shape actually indicate?",
    "options": [
      "A right turn required here",
      "A one-way route to the right",
      "A right bend ahead",
      "A right-only lane at the next junction"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The triangular sign warns about a bend in the road. A compulsory directional movement would normally use a blue circular sign.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-bend-to-right.jpg",
      "alt": "Red triangle with a black right-curving line"
    }
  },
  {
    "id": "hc-signs-032",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A triangular sign contains three curved arrows. What feature should you prepare to approach?",
    "options": [
      "A mandatory U-turn point",
      "A mini-roundabout at the sign itself",
      "A circular diversion ending here",
      "A roundabout"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The triangle gives advance warning of a roundabout. It is distinct from the blue circular mini-roundabout sign positioned at the junction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-roundabout.jpg",
      "alt": "Red triangle containing three circular arrows"
    }
  },
  {
    "id": "hc-signs-033",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which surface problem is indicated by these two irregular humps inside a triangle?",
    "options": [
      "An uneven road surface",
      "A hump-back bridge",
      "A steep climb then a descent",
      "A compulsory speed cushion at the sign"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The two-hump symbol warns that the road surface is uneven. It calls for an appropriate speed and stable control rather than identifying a specific bridge.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-uneven-road.jpg",
      "alt": "Red triangle containing two humps"
    }
  },
  {
    "id": "hc-signs-034",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What is unusual about the traffic at the junction warned of by these horizontal opposing arrows?",
    "options": [
      "Your own lane becomes a contra-flow bus lane",
      "Two-way traffic crosses your one-way road",
      "Every vehicle must turn around at the junction",
      "The crossing road is restricted to one direction"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The opposing horizontal arrows warn that the road crossing your one-way route carries traffic both ways. Check each direction before entering it.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-two-way-traffic-crosses-road.jpg",
      "alt": "Red triangle with opposing horizontal arrows"
    }
  },
  {
    "id": "hc-signs-035",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which feature may interrupt the road ahead of this raised-bridge symbol?",
    "options": [
      "A fixed railway bridge",
      "A hump bridge",
      "An opening or swing bridge",
      "A steep hill with a hidden junction"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The symbol depicts a bridge that can open. Be prepared for its controls and a possible stop rather than assuming the road is continuously available.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-swing-bridge.jpg",
      "alt": "Red triangle showing a raised bridge"
    }
  },
  {
    "id": "hc-signs-036",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What additional hazard should you allow for beyond this aircraft warning triangle?",
    "options": [
      "An airport-only route for all traffic",
      "Aircraft having priority at every junction",
      "A compulsory stop at an airport gate",
      "Low aircraft or sudden aircraft noise"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The warning concerns low-flying aircraft and unexpected noise. Staying alert reduces the risk of being startled into an unsafe manoeuvre.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-aircraft.jpg",
      "alt": "Red triangle containing an aircraft"
    }
  },
  {
    "id": "hc-signs-037",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You see this rockfall symbol below a steep slope. What might affect the carriageway?",
    "options": [
      "Fallen rocks or further falling rocks",
      "Loose chippings deliberately spread by workers",
      "A route restricted to quarry vehicles",
      "A mandatory stopping area at the cliff"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The warning covers rocks already on the road as well as falling material. Look ahead and leave time to respond to an obstruction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-falling-rocks.jpg",
      "alt": "Red triangle with rocks falling from a cliff"
    }
  },
  {
    "id": "hc-signs-038",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The traffic-light symbol is crossed diagonally on this panel. What does that tell you?",
    "options": [
      "A green light follows",
      "The signals are not operating",
      "Pedestrians cannot cross",
      "The next red signal is optional"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The crossed symbol warns that the signals are not in use. Approach cautiously and assess the junction rather than expect normal signal control.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-traffic-signals-not-in-use.jpg",
      "alt": "Traffic light symbol crossed by a red diagonal"
    }
  },
  {
    "id": "hc-signs-039",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "How should a driver read this red triangle containing coloured signal lenses?",
    "options": [
      "The signals are off",
      "Red signals may be passed",
      "Traffic lights are ahead",
      "A railway crossing begins at the sign"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: This is advance warning of traffic signals. It gives time to watch for queues and the actual signal state on approach.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-traffic-signals.jpg",
      "alt": "Red triangle containing traffic lights"
    }
  },
  {
    "id": "hc-signs-040",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The road symbol slopes downwards beside a percentage. What does the figure describe?",
    "options": [
      "The speed limit",
      "The junction distance",
      "The share of vehicles required to stop",
      "The steepness of the descent"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The number gives the gradient, with the symbol showing a descent. It is a warning about the slope, not a speed limit.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-steep-hill-downwards.jpg",
      "alt": "Red triangle with a downward slope and percentage"
    }
  },
  {
    "id": "hc-signs-041",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This hill warning uses a rising slope. Which change should you anticipate?",
    "options": [
      "A steep climb ahead",
      "A height restriction",
      "A minimum-speed section",
      "A sharply descending road ahead"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The rising line identifies an ascent. Recognising the gradient lets you plan speed and gear selection before the climb.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-steep-hill-upwards.jpg",
      "alt": "Red triangle with an upward slope and percentage"
    }
  },
  {
    "id": "hc-signs-042",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What road feature is represented by this arched entrance inside a red triangle?",
    "options": [
      "A low bridge restriction at this point",
      "A tunnel ahead",
      "A compulsory underpass for pedestrians",
      "A covered parking entrance ahead"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The arch is the tunnel warning symbol. It alerts you to the upcoming enclosed road rather than providing a height restriction by itself.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-tunnel-ahead.jpg",
      "alt": "Red triangle containing a tunnel entrance"
    }
  },
  {
    "id": "hc-signs-043",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Where is this red-edged white cross used?",
    "options": [
      "At a banned turn",
      "At a zebra crossing",
      "At a level crossing without a barrier",
      "Before a motorway exit that is closed"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The cross identifies a level crossing without a barrier. It is different from the triangular locomotive sign giving advance warning of such a crossing.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-level-crossing-without-barrier-ahead.jpg",
      "alt": "White diagonal cross edged in red"
    }
  },
  {
    "id": "hc-signs-044",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Why should you allow extra space after seeing the two walking figures in this triangle?",
    "options": [
      "The whole road is a pedestrian-only zone",
      "A compulsory walking-speed limit begins",
      "Vehicles must mount the pavement to pass",
      "Pedestrians may be using the carriageway"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The warning is for pedestrians in the road ahead. It does not make the road pedestrian-only, but calls for a speed and position that protect them.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-pedestrians-in-road-ahead.jpg",
      "alt": "Red triangle showing two walking figures"
    }
  },
  {
    "id": "hc-signs-045",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which crossing should you look for after this triangle showing a person above stripes?",
    "options": [
      "A zebra crossing",
      "A railway pedestrian crossing",
      "A push-button-only pelican crossing",
      "A school patrol permanently in the road"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The striped crossing symbol warns of a zebra crossing. Watch for waiting or crossing pedestrians and prepare to give way.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-zebra-crossing.jpg",
      "alt": "Red triangle with a person on striped markings"
    }
  },
  {
    "id": "hc-signs-046",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What kind of animals does this warning symbol specifically identify?",
    "options": [
      "Wild deer",
      "Cattle",
      "Ridden horses",
      "Domestic dogs"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The cow symbol warns that cattle may be encountered. Be ready to slow or stop if animals are on the road rather than assume the route is clear.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-cattle.jpg",
      "alt": "Red triangle containing a cow"
    }
  },
  {
    "id": "hc-signs-047",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This triangle shows a horse without a rider. What is it warning of?",
    "options": [
      "A bridleway",
      "An equestrian crossing",
      "Wild horses or ponies",
      "A ban on all horse-drawn vehicles"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The unaccompanied horse symbol warns of wild horses or ponies. Their movements can be unpredictable, so approach with room and time to react.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-wild-horses.jpg",
      "alt": "Red triangle containing a horse"
    }
  },
  {
    "id": "hc-signs-048",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A triangle contains an exclamation mark above a worded plate. How do you identify the hazard?",
    "options": [
      "Stop at the sign",
      "Assume roadworks",
      "Use it as a numerical speed-limit sign",
      "Read the plate for its nature"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The exclamation mark is a general danger warning. The accompanying plate explains the particular hazard, so its wording matters.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-other-danger.jpg",
      "alt": "Red triangle with an exclamation mark and plate"
    }
  },
  {
    "id": "hc-signs-049",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You consider pulling partly off the road after seeing this sinking-wheel symbol. What problem does it warn of?",
    "options": [
      "A verge that may not support the vehicle",
      "A steep hill requiring a lower gear",
      "An uneven surface only in the centre lane",
      "A compulsory verge-parking area ahead"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: Soft verges can give way under a vehicle. The warning is a reason to avoid assuming that the roadside is a firm place to pull onto.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-soft-verges.jpg",
      "alt": "Red triangle showing a wheel sinking at the edge"
    }
  },
  {
    "id": "hc-signs-050",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This triangular sign contains the word FORD. What road condition is ahead?",
    "options": [
      "A turning area",
      "A place where water crosses the road",
      "A bridge over a dry stream",
      "A road reserved for agricultural access"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: A ford takes the road through water. The warning calls for assessment of the water and conditions rather than treating the route like an ordinary dry section.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-worded-sign-ford.jpg",
      "alt": "Red triangle containing the word Ford"
    }
  },
  {
    "id": "hc-signs-051",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What roadside hazard does this car-and-water triangle identify?",
    "options": [
      "A vehicle testing area",
      "A ford to cross in low gear",
      "An unprotected quayside or river bank",
      "A launch area for amphibious vehicles"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The symbol warns that the road runs beside water with a risk of leaving the edge. Keep a safe position and control your approach.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-quayside-or-riverbank.jpg",
      "alt": "Red triangle showing a car falling into water"
    }
  },
  {
    "id": "hc-signs-052",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which vehicle problem is highlighted by the long vehicle across a sharp hump?",
    "options": [
      "An axle-weight limit",
      "An overhead wire strike",
      "A vehicle wider than the carriageway",
      "The underside could ground on the road"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: A sharp change of gradient can catch a vehicle with little ground clearance or a long wheelbase. This is different from a height or weight restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-risk-of-grounding.jpg",
      "alt": "Red triangle showing a vehicle on a sharp hump"
    }
  },
  {
    "id": "hc-signs-053",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "At this crossed motorway symbol, which set of special rules ends?",
    "options": [
      "Motorway regulations",
      "Every local parking restriction",
      "All national speed limits",
      "Every restriction on overtaking"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The crossed motorway symbol marks the end of motorway regulations. Other rules and signed restrictions continue to apply on the road beyond.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-motorway-end.jpg",
      "alt": "Blue motorway symbol with a red diagonal stripe"
    }
  },
  {
    "id": "hc-signs-054",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What begins at this uncrossed blue motorway symbol?",
    "options": [
      "A recommended route with no special rules",
      "Motorway regulations",
      "An unrestricted speed section for cars",
      "A road open to cyclists on the shoulder"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The symbol marks the start of motorway regulations. Drivers must already be eligible to enter and must follow the motorway rules from this point.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-start-motorway.jpg",
      "alt": "Blue rectangle containing a white motorway symbol"
    }
  },
  {
    "id": "hc-signs-055",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which medical service does this hospital panel identify?",
    "options": [
      "Routine vehicle recovery services",
      "A police reporting centre",
      "Accident and emergency facilities",
      "A roadside first-aid training school"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The hospital panel identifies accident and emergency facilities. The not 24 hrs wording means this service is not available around the clock.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-hospital-a-and-e.jpg",
      "alt": "Red rectangular panel with H, A & E and not 24 hrs lettering"
    }
  },
  {
    "id": "hc-signs-056",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A visitor sees this brown panel with a white information symbol. What does it identify?",
    "options": [
      "A police stop",
      "A motorway reporting terminal",
      "A toll-payment information office",
      "A tourist information point"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: Brown tourist information signing identifies a place where visitors can obtain local travel and attraction information.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-tourist-info-point.jpg",
      "alt": "Brown panel with a white information letter"
    }
  },
  {
    "id": "hc-signs-057",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What should the black camera symbol on this panel tell a driver?",
    "options": [
      "Cameras enforce traffic regulations in the area",
      "Only drivers exceeding the limit are filmed",
      "A compulsory photography stop is ahead",
      "Cameras replace every speed-limit sign"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The sign identifies camera enforcement of traffic regulations. It does not itself set a numerical speed or remove the need to read other signs.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-camera-area.jpg",
      "alt": "Black camera symbol on a white panel"
    }
  },
  {
    "id": "hc-signs-058",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The yellow lane diagram shows arrows and red bars. What do the bars represent?",
    "options": [
      "A new overtaking lane",
      "The lanes that are temporarily closed",
      "A stopping place in every lane",
      "The lane reserved for joining traffic"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The red bars identify the unavailable lanes. Read the remaining arrows and plan a safe move into an open lane.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/road-work-sign-temporary-lane-closure.jpg",
      "alt": "Yellow panel with lane arrows and a red blocking bar"
    }
  },
  {
    "id": "hc-signs-059",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This entry panel combines a red-ringed 20 with the word ZONE. What limit applies within the zone?",
    "options": [
      "20 mph only beside road humps",
      "30 mph when street lighting is present",
      "20 mph",
      "The national limit outside school hours"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The entry panel establishes a 20 mph zone. It is a maximum throughout the zone, subject to an even lower safe speed when conditions demand it.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-entry-20-zone.jpg",
      "alt": "Red-ringed 20 above ZONE, with a bee emblem and a place name below"
    }
  },
  {
    "id": "hc-signs-060",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You have no permit and see this parking panel. What makes parking in these spaces unacceptable?",
    "options": [
      "Parking is reserved for vehicles over two tonnes",
      "Only motorcycles may use any marked space",
      "The sign requires every driver to buy fuel first",
      "The spaces are reserved for permit holders"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The plate restricts use to permit holders. An empty bay does not remove the eligibility condition.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/sign-giving-order-park-restrict-permit-holders.jpg",
      "alt": "White rectangle with a blue P and the words Permit holders only"
    }
  },
  {
    "id": "hc-signs-061",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You pass this STOP advance-warning plate. Where is the mandatory stop expected?",
    "options": [
      "At the stop line 100 yards ahead",
      "At this panel",
      "At the road intersection",
      "At the next junction with traffic lights"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The plate gives advance notice of the STOP line and its distance. Prepare to stop at that line rather than mistake the warning location for the junction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-distance-to-stop-line-ahead-100-yards.jpg",
      "alt": "Red triangle above a plate reading STOP 100 yds"
    }
  },
  {
    "id": "hc-signs-062",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This advance panel mentions GIVE WAY and 50 yards. What should you prepare to reach?",
    "options": [
      "A stop here",
      "A give-way line 50 yards ahead",
      "A 50 mph limit",
      "A one-way road beginning in 50 yards"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The plate gives the distance to the give-way line. It helps you approach ready to yield at the junction rather than confusing yards with a speed.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-distance-to-stop-line-ahead-50-yards.jpg",
      "alt": "Inverted red triangle above a plate reading GIVE WAY 50 yds"
    }
  },
  {
    "id": "hc-signs-063",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "For a tall load, what does the height plate below this lightning-flash warning indicate?",
    "options": [
      "The lowest speed permitted under the cables",
      "The distance to the next level crossing",
      "The maximum safe height beneath the cables",
      "The required gap from the vehicle ahead"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The warning concerns overhead electric cables, and its plate gives the safe passage height. A tall load must be assessed against that clearance.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-overhead-electric-cables.jpg",
      "alt": "Red triangle with a lightning flash and a Safe height 16 ft 6 in plate"
    }
  },
  {
    "id": "hc-signs-064",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This banded arch carries height indications near its sides. What should a tall vehicle driver assess?",
    "options": [
      "The overall distance between towns",
      "The number of lanes through the bridge",
      "The maximum weight allowed on each axle",
      "The usable width at the required headroom"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: An arched structure offers different clearances across its width. The markings show the space available at the stated headroom.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-available-width-head-room.jpg",
      "alt": "Black and yellow banded arch with two small triangles showing heights"
    }
  },
  {
    "id": "hc-signs-065",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The chevrons on this rectangular board point left. What lies ahead?",
    "options": [
      "A sharp change of route to the left",
      "A one-way street",
      "A left lane closure",
      "Passing an island on either side"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: Chevron boards emphasise a sharp deviation in the route. They draw attention to the bend rather than give the meaning of a one-way or keep-left sign.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-sharp-deviation-of-route.jpg",
      "alt": "Black rectangle with white left-pointing chevrons"
    }
  },
  {
    "id": "hc-signs-066",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The plate says humps extend for half a mile. What does that distance describe?",
    "options": [
      "The gap to the first hump only",
      "The length of road containing the humps",
      "The stopping distance required before a hump",
      "The spacing between each successive hump"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The plate defines the extent of the hump section. Do not accelerate after the first hump on the assumption that no others follow.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/warning-sign-distance-humps-extend.jpg",
      "alt": "Red triangle with a black hump and a Humps for half mile plate"
    }
  },
  {
    "id": "hc-signs-067",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This arrow-shaped direction sign includes a motorway symbol. What happens along the indicated turn?",
    "options": [
      "It leads to a service road",
      "It avoids motorway rules",
      "It leads directly into a motorway",
      "It recommends a route for pedal cycles"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The sign is positioned at a junction leading directly onto a motorway. Check that entry is appropriate before committing to the turn.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-blue-junction-leading-to-motorway.jpg",
      "alt": "Blue arrow-shaped sign with a motorway symbol, a place name and a junction number"
    }
  },
  {
    "id": "hc-signs-068",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "On this blue route-confirmation sign after a junction, what do the figures beside destinations give?",
    "options": [
      "Mandatory speeds on each listed route",
      "The number of lanes at each destination",
      "The next emergency telephone numbers",
      "Distances remaining to those destinations"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: A route-confirmation sign lists places along the route with their distances. The numbers are journey information rather than speed instructions.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-blue-route-sign.jpg",
      "alt": "Blue rectangle headed M1 listing destinations and miles"
    }
  },
  {
    "id": "hc-signs-069",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "On this green junction diagram, what do blue panels indicate about the routes shown?",
    "options": [
      "A motorway starts at the junction ahead",
      "Those roads are reserved for buses only",
      "The destinations are all tourist attractions",
      "Those routes have a lower speed limit"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: Blue panels on a primary-route sign indicate motorway routes beginning at the junction. The colours help identify the type of road reached by each exit.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-green-approach-junction-roundabout.jpg",
      "alt": "Green map-type sign with a roundabout diagram and blue motorway panels"
    }
  },
  {
    "id": "hc-signs-070",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A direction sign includes a triangular height warning beside one route. What should a tall vehicle driver infer?",
    "options": [
      "The height restriction starts on every exit",
      "A height-related hazard lies along that route",
      "The number gives the junction exit speed",
      "The triangle cancels other bridge restrictions"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: Direction signs can include a hazard or restriction symbol for the route indicated. Assess the signed height before choosing that road.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-green-at-junction.jpg",
      "alt": "Green arrow-shaped sign with place names and a red triangle showing a height"
    }
  },
  {
    "id": "hc-signs-071",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Why is a steam-engine destination shown within a brown panel on this green sign?",
    "options": [
      "It identifies a freight-only road",
      "It warns that trains use the road itself",
      "It points towards a tourist attraction",
      "It marks a compulsory railway diversion"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: Brown panels identify tourist destinations within the wider direction sign. The background is a route-finding cue rather than a rail-crossing warning.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-green-approach-junction.jpg",
      "alt": "Green panel with junction arrows and a brown panel with a steam engine"
    }
  },
  {
    "id": "hc-signs-072",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This Welsh direction panel shows two versions of a place name. What should a driver understand?",
    "options": [
      "The two names indicate different speed zones",
      "The upper name applies only to goods traffic",
      "One name indicates that the road is closed",
      "Welsh and English names can appear together"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: Bilingual place names are used on signs in Wales. They describe the destination and do not create separate traffic restrictions.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-green-billingual.jpg",
      "alt": "Green sign with two place names, a route number and an angled arrow"
    }
  },
  {
    "id": "hc-signs-073",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does the letter R within this green ring-road panel identify?",
    "options": [
      "A primary route forming part of a ring road",
      "A motorway reserved for recovery vehicles",
      "A mandatory right turn at every junction",
      "A residential road with a parking ban"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The R ring-road symbol marks a primary route that forms part of a ring road. It is route identification, not a movement order.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-green-primary-route-ring-road.jpg",
      "alt": "White letter R on green, inside a yellow border"
    }
  },
  {
    "id": "hc-signs-074",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What is the purpose of this white advance direction panel with arrows and place names?",
    "options": [
      "To impose the listed maximum speeds",
      "To help choose a route before the junction",
      "To designate a pedestrian-only street",
      "To give distances to motorway phones"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: Advance direction signs allow time to identify the correct route and position safely. Their destination figures do not set speed limits.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-black-border-approach-junction.jpg",
      "alt": "White sign with black border, an upward arrow, places and distances"
    }
  },
  {
    "id": "hc-signs-075",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What facility does the bench-and-tree symbol direct travellers towards?",
    "options": [
      "A caravan repair workshop",
      "A compulsory rest checkpoint",
      "A picnic site",
      "A campsite restricted to tents"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The picnic symbol identifies a place to stop for a picnic. It does not indicate that overnight camping or vehicle repairs are available.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-picnic-site.jpg",
      "alt": "Brown arrow sign with a picnic bench and tree symbol and 150 yds"
    }
  },
  {
    "id": "hc-signs-076",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A brown direction arrow contains both tent and caravan symbols. Which destination does it identify?",
    "options": [
      "A caravan sales centre",
      "A motorway refuge",
      "A ban on towing caravans ahead",
      "A camping and caravan site"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The combined symbols direct travellers to a camping and caravan site. A red-bordered prohibition would be used for a caravan restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-camping-caravan.jpg",
      "alt": "Brown arrow sign with tent and caravan symbols and 300 yds"
    }
  },
  {
    "id": "hc-signs-077",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What status does the lorry route on this black direction sign have?",
    "options": [
      "An advisory route for lorries",
      "A lorry-only road",
      "A trailer parking route",
      "A weight limit for all goods traffic"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The sign recommends a route for lorries. Its directional purpose differs from a red-circle restriction or a compulsory movement order.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-advisory-route-lorries.jpg",
      "alt": "Black sign with a white lorry, an arrow and road numbers"
    }
  },
  {
    "id": "hc-signs-078",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does the numbered bicycle route panel identify?",
    "options": [
      "A minimum cycle speed",
      "A cycle route within a network",
      "A cycle-number limit",
      "A car route with a cycle parking charge"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The number identifies the route within a cycle network. It helps cyclists navigate and is not a numerical speed restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-route-pedal-cycles.jpg",
      "alt": "Blue rectangle with an upward arrow, a bicycle and a red number"
    }
  },
  {
    "id": "hc-signs-079",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A bicycle appears beside a destination and distance on this arrow sign. What is being indicated?",
    "options": [
      "A prohibition on cycling to that place",
      "A road reserved for powered two-wheelers",
      "A recommended cycle route to that place",
      "A compulsory cycle dismount point"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The arrow provides cycle route guidance to the named place. It does not require dismounting or prohibit pedal cycles.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-recommended-route-cycle.jpg",
      "alt": "Blue arrow sign with a bicycle, a place name and a distance"
    }
  },
  {
    "id": "hc-signs-080",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Which road users are addressed by this arrow sign with a walking figure?",
    "options": [
      "Car drivers seeking a short-cut route",
      "Riders looking for a motorway slip road",
      "Bus drivers approaching a bus-only gate",
      "Pedestrians seeking the indicated route"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The walking symbol identifies pedestrian route guidance. A direction suitable for people on foot should not be assumed to provide vehicle access.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-route-pedestrians.jpg",
      "alt": "Blue arrow sign with a walking figure and destination names"
    }
  },
  {
    "id": "hc-signs-081",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Why is this temporary arrow sign yellow with black lettering?",
    "options": [
      "It guides traffic along a diversion",
      "It marks a tourist route",
      "It sets a speed limit",
      "It designates a lane for school buses"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: Yellow direction signing is used for temporary diversions. Follow the indicated alternative route while continuing to obey other controls.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/direction-sign-other-diversion-route.jpg",
      "alt": "Yellow arrow-shaped sign with black border and a place name"
    }
  },
  {
    "id": "hc-signs-082",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "You pass this Zone ENDS panel after parking controls. Which area restriction has ended?",
    "options": [
      "The speed limit",
      "The controlled parking zone",
      "All loading restrictions",
      "Every marked parking-bay condition"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The panel ends the controlled parking zone. Individual restrictions or bay conditions beyond it still need to be checked.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-end-controlled-parking-zone.jpg",
      "alt": "Grey crossed roundel with diagonal bars above Zone ENDS"
    }
  },
  {
    "id": "hc-signs-083",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A blue panel warns of a low bridge two miles ahead. Why is it placed before the bridge?",
    "options": [
      "To permit over-height vehicles to continue slowly",
      "To set a two-mile minimum following distance",
      "To let unsuitable vehicles find another route",
      "To mark a compulsory stop for all passenger cars"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: Advance warning gives a driver time to avoid the restriction before reaching a point where turning back is difficult. It is not an exemption from the bridge limit.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-advance-warning-restriction-ahead.jpg",
      "alt": "Blue plate reading Low bridge 2 miles ahead with a red height roundel"
    }
  },
  {
    "id": "hc-signs-084",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "What does this parking panel reserve the indicated space for?",
    "options": [
      "Motorcycles pulling trailers",
      "Cars carrying just one occupant",
      "Cycles and every type of car",
      "Solo motorcycles"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The motorcycle plate identifies parking for solo motorcycles. A general P symbol does not make the bay available to cars when the plate limits its users.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-parking-place-solo-motorcycles.jpg",
      "alt": "Blue P sign above a white plate with a motorcycle"
    }
  },
  {
    "id": "hc-signs-085",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "How does this rectangular bicycle panel differ from a red-ringed bicycle sign?",
    "options": [
      "It recommends a cycle route",
      "It bans cycles",
      "It requires dismounting",
      "It imposes a maximum cycling speed"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The rectangular panel provides recommended cycle route information. A bicycle inside a red circle would convey a cycling prohibition.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-recommended-route-cycles.jpg",
      "alt": "Blue rectangle with a large white bicycle"
    }
  },
  {
    "id": "hc-signs-086",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "Before turning left, you see this bus-lane information panel. What should you expect on that road?",
    "options": [
      "A car stopping place",
      "A bus lane at the junction ahead",
      "A ban on left turns",
      "A lane only for right-turning buses"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The panel gives advance notice of a bus lane on the road at the junction. Check its signs and permitted users before choosing a position.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/Information-sign-bus-lane-road-junction-ahead.jpg",
      "alt": "White plate with a bus, a left arrow and the words Bus lane"
    }
  },
  {
    "id": "hc-signs-087",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This red temporary board says SLOW WET TAR. What hazard should influence your speed?",
    "options": [
      "A permanent speed limit",
      "A ford",
      "Fresh tar at the roadworks",
      "A ban on vehicles carrying liquids"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The temporary worded board identifies wet tar at the works. Drive appropriately for that surface rather than read SLOW as a numerical speed limit.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/road-work-sign-temporary-hazard.jpg",
      "alt": "Red rectangle with white lettering SLOW WET TAR"
    }
  },
  {
    "id": "hc-signs-088",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "This yellow board shows a red-ringed 50 with a distance ahead. What is it announcing?",
    "options": [
      "An advisory speed that applies immediately",
      "The minimum speed for the next three miles",
      "A distance marker for a closed lane",
      "A mandatory speed limit further ahead"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The board gives advance notice of a mandatory limit. The distance tells you where to expect it; the red circle distinguishes the limit from speed advice.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/road-work-sign-mandatory-speed-limit.jpg",
      "alt": "Yellow board with a red-ringed 50 and three-quarter mile ahead"
    }
  },
  {
    "id": "hc-signs-089",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "The yellow advance panel shows a worker symbol and 1 mile. What does that mile measure?",
    "options": [
      "The distance to the roadworks",
      "The queue length",
      "The cone spacing",
      "The minimum gap between large vehicles"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: This board announces roadworks one mile ahead. It provides preparation distance, not the length of the works or a following-distance requirement.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/road-work-sign-road-works-ahead.jpg",
      "alt": "Yellow board with a road works triangle, 1 mile and Delays possible until a date"
    }
  },
  {
    "id": "hc-signs-090",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A works vehicle displays this board although no cones are visible. What does the diagram warn of?",
    "options": [
      "A lane reserved for overtaking the works convoy",
      "A lane closed ahead by a works vehicle",
      "A closed road requiring every vehicle to turn back",
      "A motorway exit available in all lanes"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: Vehicle-mounted boards can warn of a lane closure without a line of cones. Plan for the closed lane shown rather than assume that an unconed lane is open.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "traffic-signs",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/road-work-sign-back-vehicle-800-yards.jpg",
      "alt": "Yellow board with amber lamps, a worker triangle, lane arrows with a red bar and 800 yds"
    }
  },
  {
    "id": "hc-signals-001",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "Your indicators have not self-cancelled after a turn. What should you do before continuing along the new road?",
    "options": [
      "Cancel the indicator",
      "Keep signalling",
      "Switch on both indicators",
      "Wait for another driver to warn you"
    ],
    "correctIndex": 0,
    "explanation": "Rule 103: An old signal can suggest another turn and mislead anyone deciding whether it is safe to move.",
    "highwayCodeRule": "103",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule103",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-002",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A car approaching from your right has its left indicator flashing. Before emerging, what should you allow for?",
    "options": [
      "The car must take the next left",
      "The indicator may have been left on",
      "The car has surrendered priority",
      "The driver is asking you to emerge"
    ],
    "correctIndex": 1,
    "explanation": "Rule 104: An indicator can remain on accidentally. Establish that emerging is safe rather than treating the signal as a guarantee.",
    "highwayCodeRule": "104",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule104",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-003",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A cyclist uses an arm signal as well as an indicator fitted to the bicycle. Why might this help?",
    "options": [
      "It grants priority at the next junction",
      "It cancels the need to look behind",
      "It can reinforce the intended manoeuvre",
      "It tells cars they must overtake now"
    ],
    "correctIndex": 2,
    "explanation": "Rule 103: Arm signals can make an intention clearer when a direction signal needs emphasis; they do not change who should give way.",
    "highwayCodeRule": "103",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule103",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-004",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A vehicle ahead signals left but remains in its lane for the moment. Which intention can a left signal communicate besides turning?",
    "options": [
      "Inviting traffic to pass on the left",
      "Preparing to reverse",
      "Giving pedestrians a crossing signal",
      "Stopping on the left"
    ],
    "correctIndex": 3,
    "explanation": "Rule 103: A left indicator can announce pulling in to stop. Allow room and assess what the vehicle actually does.",
    "highwayCodeRule": "103",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule103",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-005",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "White lamps illuminate at the rear of a parked car as you approach. Which manoeuvre should you anticipate?",
    "options": [
      "Reversing",
      "Braking",
      "A move into the overtaking lane",
      "A warning to switch your headlights on"
    ],
    "correctIndex": 0,
    "explanation": "Rule 104: Reversing lamps communicate an intention to move backwards. Leave space rather than passing close behind.",
    "highwayCodeRule": "104",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule104",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-006",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "Two red brake lamps brighten on the car in front. What information is the driver communicating?",
    "options": [
      "An engine fault",
      "The brakes are being applied",
      "The driver wants you to overtake",
      "The rear fog lights must be switched on"
    ],
    "correctIndex": 1,
    "explanation": "Rule 103: Brake lights warn following traffic that the driver is braking, giving you time to adjust your speed.",
    "highwayCodeRule": "103",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule103",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-007",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A learner suggests using hazard lights to make a brief stop on a parking prohibition acceptable. Which correction is needed?",
    "options": [
      "Hazards permit a stop of five minutes",
      "Hazards replace a parking permit",
      "Hazards do not excuse illegal parking",
      "Hazards suspend the yellow-line hours"
    ],
    "correctIndex": 2,
    "explanation": "Rule 116: Warning others about an obstruction does not create an exemption from stopping or parking restrictions.",
    "highwayCodeRule": "116",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule116",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-signals-008",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "You are being towed along an ordinary urban road. May you keep the hazard lights flashing merely because you are being towed?",
    "options": [
      "Yes, on all roads",
      "Yes, if the towing car signals for you",
      "Yes, provided your speed stays below 20 mph",
      "No, this is not a permitted use"
    ],
    "correctIndex": 3,
    "explanation": "Rule 116: Moving or towed vehicles may use hazards for an approaching hazard on motorways or unrestricted dual carriageways, rather than as a general towing signal.",
    "highwayCodeRule": "116",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule116",
    "hcChapter": "signals-to-other-road-users",
    "supersededCheck": "current"
  },
  {
    "id": "hc-officers-001",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "An authorised vehicle examiner signals from ahead for you to follow to a safe stopping place. Which response complies with the Code?",
    "options": [
      "Continue until a police car arrives",
      "Follow the direction to stop safely",
      "Ignore amber lights on an examiner vehicle",
      "Stop immediately in a live lane"
    ],
    "correctIndex": 1,
    "explanation": "Rule 107: DVSA officers can require vehicles to stop and may lead from ahead to a suitable place. Their directions must be obeyed.",
    "highwayCodeRule": "107",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule107",
    "hcChapter": "signals-by-authorised-persons",
    "supersededCheck": "current"
  },
  {
    "id": "hc-officers-002",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "After a uniformed traffic officer has directed you to stop safely, what should you do with the engine?",
    "options": [
      "Let it idle",
      "Restart it whenever traffic passes",
      "Switch it off",
      "Leave it running until police attend"
    ],
    "correctIndex": 2,
    "explanation": "Rule 108: The stopping procedure includes switching off once safely stopped, so the vehicle remains stationary during the officer’s intervention.",
    "highwayCodeRule": "108",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule108",
    "hcChapter": "signals-by-authorised-persons",
    "supersededCheck": "current"
  },
  {
    "id": "hc-officers-005",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A school crossing patrol holds the sign down by their side, rather than across the road. What does that position indicate?",
    "options": [
      "Drivers must make an emergency stop",
      "They are not ready to cross pedestrians",
      "Children have priority to run across",
      "Traffic in one direction may ignore later signals"
    ],
    "correctIndex": 1,
    "explanation": "Rule 105: The lowered sign is the chart’s not-ready position. Continue to watch the patrol and be ready for the next signal.",
    "highwayCodeRule": "105",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule105",
    "hcChapter": "signals-by-authorised-persons",
    "supersededCheck": "current"
  },
  {
    "id": "hc-markings-001",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A broken white parking bay is labelled DOCTOR. With no authorisation to use it, how should you treat the marked space?",
    "options": [
      "Park for ten minutes",
      "Use it for any short shopping visit",
      "Leave it for the named vehicles",
      "Use it if you leave the indicators flashing"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The road-markings chart identifies this as a reserved bay. Its lettering limits who may use the space.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "road-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/other-road-markings-space-doctor.jpg",
      "alt": "Broken white kerbside bay with the word DOCTOR painted inside"
    }
  },
  {
    "id": "hc-markings-002",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "At a large junction you see destination names and arrows painted in the lanes. What practical purpose do they serve?",
    "options": [
      "Give pedestrian priority",
      "Permit overtaking through the junction",
      "Show the national speed limit for each lane",
      "Help you choose the appropriate lane"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: Lane destinations let you position early and avoid a sudden move across traffic near the junction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "road-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/other-road-markings-indication-lanes.jpg",
      "alt": "Three lanes with white arrows and painted words CITY, A3 and YORK ST"
    }
  },
  {
    "id": "hc-markings-004",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "This red-route bay sign permits a one-hour stay and no return within two hours. Which stay breaches its conditions during the signed hours?",
    "options": [
      "Parking for forty minutes then leaving",
      "Parking continuously for ninety minutes",
      "Parking once for twenty-five minutes",
      "Returning three hours after leaving"
    ],
    "correctIndex": 1,
    "explanation": "Rule 238: The maximum stay still applies inside an authorised red-route bay; a bay is not unrestricted parking.",
    "highwayCodeRule": "238",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule238",
    "hcChapter": "road-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/along-edge-carriageway-red-route-parking.jpg",
      "alt": "RED ROUTE panel with a blue P, Mon-Sat 7 am-7 pm, 1 hour, no return within 2 hours"
    }
  },
  {
    "id": "hc-markings-005",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A bay’s loading sign specifies goods vehicles. What should a car driver delivering a parcel conclude?",
    "options": [
      "Any parcel makes the car a goods vehicle",
      "Delivery always overrides vehicle restrictions",
      "The car does not meet the vehicle condition",
      "Private cars may use every loading bay"
    ],
    "correctIndex": 2,
    "explanation": "Rule 247: A loading bay may be restricted by vehicle type as well as purpose. Carrying a parcel does not automatically make a car eligible.",
    "highwayCodeRule": "247",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/waiting-and-parking-238-to-252#rule247",
    "hcChapter": "road-markings",
    "supersededCheck": "current"
  },
  {
    "id": "hc-markings-007",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "At a level crossing on foot, a transverse line is marked before the tracks. What is its purpose when the crossing signals prohibit crossing?",
    "options": [
      "A stopping boundary for pedestrians",
      "A point where trains must give way",
      "A waiting place on the railway itself",
      "A guide for vehicles overtaking the barrier"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The road-markings chart includes a pedestrian stop line at a level crossing; waiting behind it keeps people away from the tracks.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "road-markings",
    "supersededCheck": "current"
  },
  {
    "id": "hc-lights-001",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "Alternating red lights are operating at a lifting bridge. What should a driver do even if the bridge deck still looks level?",
    "options": [
      "Cross before the deck starts rising",
      "Stop at the signals",
      "Cross if clear",
      "Cross slowly with hazard lights on"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: Alternating red signals require a stop at sites such as lifting bridges; the visible deck position does not cancel them.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "light-signals-controlling-traffic",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/flashing-red-lights.jpg",
      "alt": "Pair of alternately flashing red lights"
    }
  },
  {
    "id": "hc-lights-003",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "A lane-control panel shows a white diagonal arrow above your lane. Which action does this instruction call for?",
    "options": [
      "Carry on beneath it without changing lanes",
      "Stop permanently below the panel",
      "Cross to the opposite carriageway",
      "Move to the indicated lane when safe"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The lane-control chart uses the diagonal white arrow to direct a lane change. Observe other traffic before moving.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "light-signals-controlling-traffic",
    "supersededCheck": "current"
  },
  {
    "id": "hc-vehicles-001",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "These red and yellow panels are fitted to a goods vehicle. Which feature do they help you recognise?",
    "options": [
      "The entrance to a temporary tunnel",
      "The rear of a large goods vehicle",
      "The side of an unmarked ambulance",
      "The boundary of a mandatory cycle lane"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: The vehicle-markings chart identifies these conspicuous panels as rear markings for large goods vehicles. Recognising a large vehicle helps you allow appropriate room.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/large-goods-vehicle-markings.jpg",
      "alt": "Red and yellow striped and outlined rectangular reflective panels"
    }
  },
  {
    "id": "hc-vehicles-002",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "An orange rectangular plate is visible on a lorry carrying packages. What category of load can it identify?",
    "options": [
      "Refrigerated food",
      "Ordinary parcels needing refrigeration",
      "Certain dangerous goods",
      "A load exempt from all weight limits"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The plain orange panel is used for certain packaged dangerous goods. It warns of a load requiring special caution.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-dangerous-goods.jpg",
      "alt": "Plain orange rectangle with a black border"
    }
  },
  {
    "id": "hc-vehicles-003",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "Reflective red and yellow vertical panels appear on an object beside the carriageway. Apart from long vehicles, what may be marked this way?",
    "options": [
      "A traffic island",
      "A compulsory stopping point for cars",
      "A charging bay reserved for electric cars",
      "A builder’s skip in the road"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The official vehicle-markings chart also requires these conspicuous vertical panels on builders’ skips placed in the road, helping drivers see the obstruction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current"
  },
  {
    "id": "hc-vehicles-004",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A red and white triangular marker faces you on the end of projecting equipment. What is it helping you judge?",
    "options": [
      "The end of an overhanging load",
      "An axle-weight limit",
      "The start of a reduced speed zone",
      "The position of a pedestrian refuge"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: Projection markers make an overhanging load easier to identify so you do not judge clearance from the vehicle body alone.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/projection-marker-end.jpg",
      "alt": "Red and white diagonally striped triangle"
    }
  },
  {
    "id": "hc-vehicles-005",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "A tanker or package carries this skull-and-crossbones diamond. Which kind of substance does the label identify?",
    "options": [
      "A corrosive liquid",
      "Toxic material",
      "A non-flammable gas",
      "Radioactive material"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: This hazard diamond identifies a toxic substance. Recognising the label helps you give accurate information if you report an incident.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-toxic-label.jpg",
      "alt": "White diamond containing a skull and crossed bones, lettering and the number 6"
    }
  },
  {
    "id": "hc-vehicles-006",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "This yellow hazard diamond includes a flame above a circle. Which load description matches that symbol?",
    "options": [
      "Compressed gas",
      "A corrosive substance in packages",
      "An oxidising substance",
      "A radioactive substance in transit"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The official vehicle-markings chart assigns this diamond to oxidising substances. The flame alone should not be mistaken for the separate spontaneously combustible label.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-oxidising-plate.jpg",
      "alt": "Yellow diamond with a flame above a circle, lettering and 5.1"
    }
  },
  {
    "id": "hc-vehicles-007",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "The green diamond on a goods vehicle shows a cylinder. Which cargo category is identified?",
    "options": [
      "Spontaneously combustible material",
      "Corrosive liquid",
      "Material classed as radioactive",
      "Non-flammable compressed gas"
    ],
    "correctIndex": 3,
    "explanation": "Rule 109: The cylinder on a green background identifies non-flammable compressed gas, rather than a flammable-liquid or toxic-substance label.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-compressed-gas-plate.jpg",
      "alt": "Green diamond containing a cylinder silhouette, lettering and the number 2"
    }
  },
  {
    "id": "hc-vehicles-008",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "Which description belongs with this three-part black symbol on a white transport hazard diamond?",
    "options": [
      "Radioactive substance",
      "Non-flammable compressed gas",
      "Oxidising substance",
      "Corrosive substance"
    ],
    "correctIndex": 0,
    "explanation": "Rule 109: The vehicle-markings chart identifies this symbol with radioactive substances. Use the actual label when describing the load to emergency services.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-radioactive-plate.jpg",
      "alt": "White diamond with a three-part black symbol, lettering and the number 7"
    }
  },
  {
    "id": "hc-vehicles-009",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "The upper part of this diamond is white and the lower part red, with a black flame above. What hazard classification does it display?",
    "options": [
      "Non-flammable compressed gas",
      "Spontaneously combustible substance",
      "Toxic substance",
      "Oxidising substance"
    ],
    "correctIndex": 1,
    "explanation": "Rule 109: This two-colour diamond denotes a spontaneously combustible substance. It is a different label from the yellow oxidising-substance diamond.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-spon-combust-red.jpg",
      "alt": "White and red diamond with a black flame, lettering and the number 4"
    }
  },
  {
    "id": "hc-vehicles-010",
    "subject": "roadRules",
    "topic": "highway-code",
    "topicLabel": "Highway Code",
    "question": "This diamond depicts liquid falling from tubes towards a hand and a surface. Which hazard is identified?",
    "options": [
      "Radioactive substance",
      "Non-flammable gas",
      "Corrosive substance",
      "Spontaneously combustible substance"
    ],
    "correctIndex": 2,
    "explanation": "Rule 109: The liquid-and-hand symbol is the corrosive-substance label in the vehicle-markings chart, warning of a particular kind of dangerous load.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158#rule109",
    "hcChapter": "vehicle-markings",
    "supersededCheck": "current",
    "image": {
      "src": "/driving/hazard-warning-corrosive-plate.jpg",
      "alt": "White and black diamond showing tubes dripping onto a hand and a surface, with lettering"
    }
  },
  {
    "id": "hc-pedextra-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "While walking on the right of a road without a pavement, you approach a sharp right-hand bend. Why might crossing well before the bend be safer?",
    "options": [
      "It gives you priority",
      "It prevents vehicles using the outside lane",
      "It can help approaching drivers see you",
      "It removes the need to check behind you"
    ],
    "correctIndex": 2,
    "explanation": "Rule 2: A bend can hide a walker from approaching drivers. Crossing early, after checking it is safe, may improve visibility; cross back after the bend.",
    "highwayCodeRule": "2",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule2",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedextra-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An adult with a buggy needs to see past parked cars before crossing. Which action creates avoidable danger?",
    "options": [
      "Keeping the buggy back",
      "Choosing a nearby clear crossing position",
      "Waiting for a safe view in both directions",
      "Pushing the buggy into the road to look"
    ],
    "correctIndex": 3,
    "explanation": "Rule 4: A buggy can reach traffic before its user has checked the road. Keep the child clear while establishing whether it is safe to cross.",
    "highwayCodeRule": "4",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule4",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedextra-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A large organised parade has no pavement available. Which side of the road should the group keep to?",
    "options": [
      "The left",
      "The centre, spread across both lanes",
      "The right",
      "Whichever side has the widest view"
    ],
    "correctIndex": 0,
    "explanation": "Rule 5: The organised-group guidance differs from that for a lone walker. Keeping the group left, with look-outs, helps other road users identify and pass it.",
    "highwayCodeRule": "5",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule5",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedextra-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian checks an apparently distant vehicle before stepping off the kerb. Why is distance alone insufficient to choose a gap?",
    "options": [
      "Distant vehicles must stop for any walker",
      "The vehicle may be approaching very fast",
      "Distant vehicles cannot reach a crossing",
      "The nearest vehicle always has priority"
    ],
    "correctIndex": 1,
    "explanation": "Rule 7: The available crossing time depends on approach speed as well as distance. Wait until there is enough time to cross safely.",
    "highwayCodeRule": "7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule7",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedextra-005",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Someone proposes waiting on the zebra stripes to talk after reaching the far side. What should they do instead?",
    "options": [
      "Wait there if the lights are still red",
      "Stay on the stripes",
      "Clear the crossing before stopping",
      "Remain there whenever no car is moving"
    ],
    "correctIndex": 2,
    "explanation": "Rule 18: Loitering on a crossing is prohibited. Clearing the carriageway keeps the crossing available and avoids confusing approaching road users.",
    "highwayCodeRule": "18",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule18",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobextra-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A mobility scooter must negotiate a kerb within its manufacturer’s height recommendation. At what angle should it approach the kerb?",
    "options": [
      "Almost parallel to the kerb",
      "Diagonally",
      "At whichever angle needs the least turning",
      "At right angles"
    ],
    "correctIndex": 3,
    "explanation": "Rule 40: Meeting the kerb squarely follows the Code’s advice for negotiating changes in height; using a dropped kerb is preferable where possible.",
    "highwayCodeRule": "40",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule40",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobextra-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A road-equipped Class 3 scooter moves onto a pavement to take a safer route around a junction. Which setting should its user select?",
    "options": [
      "The lower speed setting",
      "The road setting",
      "The cruise setting for dual carriageways",
      "The horn setting instead of reducing speed"
    ],
    "correctIndex": 0,
    "explanation": "Rule 44: The pavement part of the route needs the lower speed setting, so a pedestrian-style alternative does not expose walkers to road-mode speed.",
    "highwayCodeRule": "44",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule44",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animalextra-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A rider can control a horse well but proposes a road journey without a saddle. Which correction follows the Code?",
    "options": [
      "Use only a bridle",
      "Use both a saddle and a bridle",
      "A saddle is needed only on main roads",
      "Neither item is needed for a calm horse"
    ],
    "correctIndex": 1,
    "explanation": "Rule 52: Control and good tack are both necessary. The Code advises against riding on the road without a saddle and bridle, even on a familiar horse.",
    "highwayCodeRule": "52",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule52",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animalextra-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A mounted rider leads a second horse along a road. Where should the led horse be kept relative to the rider?",
    "options": [
      "Ahead of the rider",
      "Directly across the centre line",
      "To the rider’s left",
      "At the end of a long rope behind"
    ],
    "correctIndex": 2,
    "explanation": "Rule 53: Keeping the led horse left follows the road-riding guidance and avoids placing it further out into passing traffic.",
    "highwayCodeRule": "53",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule53",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animalextra-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A horse rider wants to use an ordinary pavement to avoid a short queue. What is the legal position?",
    "options": [
      "It is allowed at walking pace",
      "It is allowed if the horse walks slowly",
      "It is allowed if the rider signals first",
      "Taking the horse onto it is prohibited"
    ],
    "correctIndex": 3,
    "explanation": "Rule 54: The prohibition covers taking a horse onto an ordinary pavement or footpath. A traffic queue does not turn it into a bridleway.",
    "highwayCodeRule": "54",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule54",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycleextra-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist says an ordinary cycle helmet is optional and therefore its fit does not matter. Which advice follows the Code?",
    "options": [
      "Choose a correctly sized, secure helmet",
      "Choose a loose helmet for better comfort",
      "Wear any hard hat without fastening it",
      "Choose size solely by the bicycle frame"
    ],
    "correctIndex": 0,
    "explanation": "Rule 59: The Code recommends a suitable cycle helmet of the correct size, secured properly, because fit affects its protective value.",
    "highwayCodeRule": "59",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule59",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycleextra-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Small cycle traffic lights are mounted at a rider’s eye level at a junction. What useful function may these facilities provide?",
    "options": [
      "Priority over pedestrians",
      "A separate or earlier movement for cyclists",
      "Permission for cars to use the cycle signal",
      "An exemption from checking turning vehicles"
    ],
    "correctIndex": 1,
    "explanation": "Rule 73: Special cycle signals can separate cyclists’ movements from other traffic, reducing conflict when used correctly.",
    "highwayCodeRule": "73",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule73",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycleextra-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian starts to cross a cycle track between its designated crossing points. How should an approaching cyclist prepare to respond?",
    "options": [
      "Keep speed and ring",
      "Ring the bell and pass without slowing",
      "Be ready to stop for the pedestrian",
      "Move onto the footpath to avoid braking"
    ],
    "correctIndex": 2,
    "explanation": "Rule 82: Cycle tracks may run through open pedestrian areas. The Code tells cyclists to watch for informal pedestrian crossing movements as well as marked crossings.",
    "highwayCodeRule": "82",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule82",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A walker leaves a usable pavement to walk along the carriageway for convenience. Which guidance have they overlooked?",
    "options": [
      "Use the pavement where provided",
      "Use either surface",
      "Choose the carriageway if it has a lower speed limit",
      "Use whichever surface has fewer people"
    ],
    "correctIndex": 0,
    "explanation": "Rule 1: A pavement separates walkers from vehicles. The Code advises using one when it is available, rather than entering the road unnecessarily.",
    "highwayCodeRule": "1",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule1",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "For a pedestrian walking after dark, which material is especially useful when illuminated by vehicle headlights?",
    "options": [
      "Non-reflective fluorescent fabric",
      "Reflective material",
      "Plain white cotton clothing",
      "Ordinary yellow waterproof fabric"
    ],
    "correctIndex": 1,
    "explanation": "Rule 3: Reflective items return light towards a driver. Fluorescent colours help in poor daylight but are not a substitute for reflection at night.",
    "highwayCodeRule": "3",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule3",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An adult is taking a small child along a pavement beside moving traffic. Where should the adult walk?",
    "options": [
      "Behind, without holding the child’s hand",
      "Ahead, leaving the child to follow alone",
      "Between the child and the traffic",
      "Furthest from traffic"
    ],
    "correctIndex": 2,
    "explanation": "Rule 4: Keeping the adult on the traffic side and holding the child’s hand reduces the chance of the child entering the road.",
    "highwayCodeRule": "4",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule4",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An organised walking group has no pavement and is using the road after dark. What lights should its look-outs show?",
    "options": [
      "Red front, white rear",
      "Amber at both the front and the rear",
      "White at both the front and the rear",
      "White at the front, red at the rear"
    ],
    "correctIndex": 3,
    "explanation": "Rule 5: These colours identify the front and rear of the group to approaching drivers. Look-outs also need reflective clothing.",
    "highwayCodeRule": "5",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule5",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-005",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian proposes using a motorway slip road as a shortcut to a footbridge. When may a pedestrian be there?",
    "options": [
      "In an emergency",
      "When walking against the traffic",
      "Whenever the hard shoulder is clear",
      "During daylight with reflective clothing"
    ],
    "correctIndex": 0,
    "explanation": "Rule 6: Motorways and their slip roads are prohibited to pedestrians except in emergencies; visibility equipment does not create permission to walk there.",
    "highwayCodeRule": "6",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule6",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-006",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A child has reached the same age at which a friend began crossing roads alone. What should determine whether this child is ready?",
    "options": [
      "The number of school journeys they have made",
      "Their ability to use the crossing code safely",
      "The fact that their friend can already do it",
      "Their height compared with the parked cars"
    ],
    "correctIndex": 1,
    "explanation": "Rule 7: Children develop judgement at different rates. Parents or carers must assess understanding and safe use of the Green Cross Code rather than rely on a fixed age.",
    "highwayCodeRule": "7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule7",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-007",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "After choosing a safe gap, a pedestrian plans to cross diagonally to save time. What is the safer route?",
    "options": [
      "Walk along the centre line before crossing",
      "Cross diagonally while looking straight ahead",
      "Walk straight across",
      "Run diagonally across the first lane"
    ],
    "correctIndex": 2,
    "explanation": "Rule 7: Crossing straight across reduces time spent in the carriageway. Keep watching and listening throughout rather than running or lengthening the route.",
    "highwayCodeRule": "7",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule7",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-008",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You are turning into a side road where a pedestrian is waiting to cross. How should you treat the waiting pedestrian?",
    "options": [
      "Take priority until they step off the kerb",
      "Sound the horn to make them wait",
      "Accelerate through before they can start",
      "Give way to them"
    ],
    "correctIndex": 3,
    "explanation": "Rule 8: Traffic turning at a junction should give way to people waiting to cross as well as those already crossing; waiting on the pavement does not remove that protection.",
    "highwayCodeRule": "8",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule8",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-009",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian barrier separates a pavement from the road. Where should someone cross?",
    "options": [
      "At a gap provided for crossing",
      "Over the barrier",
      "Between the barrier and the moving traffic",
      "At any point if no vehicles are visible"
    ],
    "correctIndex": 0,
    "explanation": "Rule 9: The designated gaps provide access to crossing points. Climbing the barrier or walking on its road side exposes a pedestrian to avoidable danger.",
    "highwayCodeRule": "9",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule9",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-010",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Why might raised studs be fitted to paving at a dropped-kerb crossing point?",
    "options": [
      "To indicate a compulsory stopping point for cars",
      "To guide people with impaired sight",
      "To mark parking bays",
      "To give cyclists priority over people walking"
    ],
    "correctIndex": 1,
    "explanation": "Rule 10: Tactile paving can be felt underfoot and provides information to people who cannot rely on visual cues. Studded surfaces commonly identify crossing points.",
    "highwayCodeRule": "10",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule10",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-011",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian is about to cross a one-way street with a bus lane. Why must they still check both directions?",
    "options": [
      "Buses are required to reverse through junctions",
      "The one-way restriction ends whenever a bus arrives",
      "The bus lane may run against the main flow",
      "Cars may go either way"
    ],
    "correctIndex": 2,
    "explanation": "Rule 11: One-way traffic in the main carriageway does not guarantee that a bus or cycle lane runs the same way. Checking both directions helps detect permitted opposing traffic.",
    "highwayCodeRule": "11",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule11",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-012",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Cars are queuing beside a clear cycle lane. What should a pedestrian remember before stepping across that lane?",
    "options": [
      "Cycles must stop too",
      "The queue makes the cycle lane a safe waiting area",
      "The lane closes while cars are queuing",
      "Cycles may still be moving quickly"
    ],
    "correctIndex": 3,
    "explanation": "Rule 12: Traffic in a bus or cycle lane can keep moving faster than the queue. A stationary row of cars does not make the adjacent lane safe to enter.",
    "highwayCodeRule": "12",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule12",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-013",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "On a divided pedestrian and cycle route, tactile bars run across the direction of travel on one side. Which side does that ladder pattern identify?",
    "options": [
      "The pedestrian side",
      "The side reserved for cyclists",
      "The start of a motorcycle lane",
      "The edge of a vehicle loading area"
    ],
    "correctIndex": 0,
    "explanation": "Rule 13: Across-the-path bars help identify the walking side for visually impaired users. Bars running along the direction of travel identify the cycle side.",
    "highwayCodeRule": "13",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule13",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-014",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian sees a gap immediately behind a parked van whose engine is running. What should they do?",
    "options": [
      "Rely on the reversing lights staying off",
      "Choose another crossing position",
      "Cross behind the van",
      "Stand behind the van to signal approaching cars"
    ],
    "correctIndex": 1,
    "explanation": "Rule 14: A vehicle with its engine running may move and its driver may not see someone close behind it. The Code warns against crossing immediately in front of or behind it.",
    "highwayCodeRule": "14",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule14",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-015",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "White reversing lamps illuminate on a car beside someone about to walk behind it. What is the safe response?",
    "options": [
      "Walk close to its rear bumper",
      "Wait in the space directly behind it",
      "Keep clear behind the car",
      "Cross behind it quickly"
    ],
    "correctIndex": 2,
    "explanation": "Rule 15: Reversing lamps warn of a possible backwards movement. Do not cross behind a vehicle that is reversing or displaying that warning.",
    "highwayCodeRule": "15",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule15",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-016",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A passenger tries to hold the outside of a slowly moving vehicle while walking alongside it. What does the Code say?",
    "options": [
      "It is allowed below normal walking speed",
      "It is allowed if the driver can see the person",
      "It is allowed away from pedestrian crossings",
      "Holding onto a moving vehicle is prohibited"
    ],
    "correctIndex": 3,
    "explanation": "Rule 16: A person on foot must not get onto or hold onto a moving vehicle. A low speed or the driver’s awareness does not remove the prohibition.",
    "highwayCodeRule": "16",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule16",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-017",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "After dark, a pedestrian has no nearby crossing. Which location helps drivers see them crossing?",
    "options": [
      "Near a street light",
      "Beyond a dark bend",
      "Directly behind a parked delivery van",
      "At the darkest point between street lights"
    ],
    "correctIndex": 0,
    "explanation": "Rule 17: Street lighting helps drivers detect a crossing pedestrian. Reflective clothing also improves visibility when illuminated by headlights.",
    "highwayCodeRule": "17",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule17",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-018",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A parent with a pram is waiting at a marked crossing. What check is needed before pushing the pram onto it?",
    "options": [
      "Check only that pedestrians are crossing opposite",
      "Check that traffic has stopped",
      "Check for a driver’s wave",
      "Check that the pram’s front wheels fit the studs"
    ],
    "correctIndex": 1,
    "explanation": "Rule 18: A crossing signal or another person’s movement does not by itself ensure approaching vehicles have stopped. Check before committing the pram to the carriageway.",
    "highwayCodeRule": "18",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule18",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-019",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "At a zebra crossing, a pedestrian is still on the pavement and clearly waiting to cross. What should an approaching driver do?",
    "options": [
      "Maintain speed until a foot touches a stripe",
      "Flash headlights and continue without slowing",
      "Give way to the waiting pedestrian",
      "Insist they wait"
    ],
    "correctIndex": 2,
    "explanation": "Rule 19: Drivers should give way to someone waiting at a zebra crossing. Once someone is on the crossing, giving way is mandatory.",
    "highwayCodeRule": "19",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule19",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-020",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian reaches the island halfway across a zebra crossing. How should they treat the next half?",
    "options": [
      "As one uninterrupted crossing",
      "As a place where traffic cannot approach",
      "As a crossing controlled by the first half’s driver",
      "As a separate crossing"
    ],
    "correctIndex": 3,
    "explanation": "Rule 20: An island divides a zebra crossing into two crossings. The pedestrian needs to check the second carriageway rather than assume vehicles there have stopped.",
    "highwayCodeRule": "20",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule20",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-021",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian is already halfway across when the green walking figure goes out. What should they do?",
    "options": [
      "Continue to the far pavement without delay",
      "Return to the starting pavement",
      "Stop in the traffic lane until green returns",
      "Run diagonally to the nearest traffic island"
    ],
    "correctIndex": 0,
    "explanation": "Rule 21: The crossing sequence allows time for people who have started to finish. Continuing promptly is safer than waiting in the road or suddenly turning back.",
    "highwayCodeRule": "21",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule21",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-022",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian arrives as the green figure at a pelican crossing begins flashing. May they start to cross?",
    "options": [
      "Yes, because the vehicle signal must be green too",
      "No, wait for the next steady green figure",
      "Yes, if traffic has stopped",
      "Yes, provided the first traffic lane is empty"
    ],
    "correctIndex": 1,
    "explanation": "Rule 22: Flashing green is clearance time for people already crossing. A pedestrian who has not started should wait for another steady green invitation.",
    "highwayCodeRule": "22",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule22",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-023",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "At a push-button crossing, your side of the road is blocked by queuing cars. What should you do before walking across?",
    "options": [
      "Assume the other carriageway must also be blocked",
      "Ask a driver to wave you across the far carriageway",
      "Press the button and wait for the crossing signal",
      "Cross between the cars without using the button"
    ],
    "correctIndex": 2,
    "explanation": "Rule 24: The opposite side may still carry moving traffic despite the queue beside you. The controlled crossing should still be used normally.",
    "highwayCodeRule": "24",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule24",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-024",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "At a pedestrian crossing, what may a tactile signal beneath the control box help a deafblind person identify?",
    "options": [
      "The approach speed of the nearest car",
      "Whether the far pavement is crowded",
      "The number of traffic lanes still moving",
      "When the steady green figure is showing"
    ],
    "correctIndex": 3,
    "explanation": "Rule 26: An audible or tactile indication can communicate the crossing phase to someone unable to use the visual signal. It supplements the steady green pedestrian indication.",
    "highwayCodeRule": "26",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule26",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-025",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A crossing has horse-and-rider symbols and a high-mounted push button. Why is the button placed higher?",
    "options": [
      "So a mounted rider can operate it",
      "So only adults can reach it",
      "So a bus driver can request a green light",
      "So cyclists must lift their bikes to use it"
    ],
    "correctIndex": 0,
    "explanation": "Rule 27: Equestrian crossings provide controls reachable from horseback, with wider spaces and suitable barriers. Their design accommodates mounted users.",
    "highwayCodeRule": "27",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule27",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-026",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "The two halves of a puffin crossing are offset on either side of an island. What should a pedestrian do on the island?",
    "options": [
      "Follow the first group regardless of the signal",
      "Press the next button and wait for green",
      "Continue on the first signal",
      "Cross the next half if the first half is empty"
    ],
    "correctIndex": 1,
    "explanation": "Rule 28: Staggered halves operate as separate crossings. Reaching the island requires a fresh request and the correct signal for the second half.",
    "highwayCodeRule": "28",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule28",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-027",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A school crossing patrol signals a pedestrian to cross. Where should the pedestrian pass relative to the patrol?",
    "options": [
      "Around whichever end is closer",
      "Between the patrol and a moving vehicle",
      "In front of the patrol",
      "Behind the patrol"
    ],
    "correctIndex": 2,
    "explanation": "Rule 29: Pedestrians should wait for the authorised person’s signal and pass in front. This keeps their crossing movement where the patrol can supervise it.",
    "highwayCodeRule": "29",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule29",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-028",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An uncontrolled road has a pedestrian refuge island but no traffic signals. How should someone cross?",
    "options": [
      "Check traffic only to the right",
      "Cross both halves after checking the first lane",
      "Wait on the lane line rather than use the refuge",
      "Check each half separately"
    ],
    "correctIndex": 3,
    "explanation": "Rule 30: The island provides a place to pause, not a signal stopping traffic. Apply the Green Cross Code for the first half and again before leaving the island.",
    "highwayCodeRule": "30",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule30",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-029",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Someone is waiting to cross as an ambulance approaches with blue lights and a siren. What should they do?",
    "options": [
      "Remain off the carriageway",
      "Step out and wave",
      "Cross in front to make the ambulance slow down",
      "Stand on the centre line to leave the lane clear"
    ],
    "correctIndex": 0,
    "explanation": "Rule 31: An emergency vehicle may need an unobstructed route. Pedestrians should keep off the road while it approaches rather than add another hazard.",
    "highwayCodeRule": "31",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule31",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-030",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A passenger has just stepped off a bus and needs the opposite pavement. What is the safer choice?",
    "options": [
      "Assume traffic will stop because the bus is there",
      "Wait until the bus has moved and the view is clear",
      "Cross directly in front while the bus is stopped",
      "Walk closely behind the bus into the road"
    ],
    "correctIndex": 1,
    "explanation": "Rule 32: The bus can hide traffic and hide the pedestrian from drivers. Waiting for a clear view in both directions avoids crossing from behind that obstruction.",
    "highwayCodeRule": "32",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule32",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-031",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Tram tracks cross an open pedestrian area. Why should a walker avoid using the track as a walking route?",
    "options": [
      "Pedestrians have priority along every tram track",
      "Tram drivers use the same stopping distance as cars",
      "A quiet tram may approach from behind",
      "Trams can steer around people"
    ],
    "correctIndex": 2,
    "explanation": "Rule 33: Trams can be difficult to hear and are confined to their rails. A walker on the track may be hard to avoid, so designated crossing points should be used where provided.",
    "highwayCodeRule": "33",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule33",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-pedestrians-032",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Pavement repairs direct walkers temporarily into the road. What should a driver anticipate?",
    "options": [
      "Only cyclists using the diversion",
      "Walkers being prohibited from using the diversion",
      "Every walker waiting until all traffic has passed",
      "Pedestrians close to moving traffic"
    ],
    "correctIndex": 3,
    "explanation": "Rule 35: A temporary closure can bring pedestrians into the carriageway. Extra care is needed because their usual separation from traffic may be missing.",
    "highwayCodeRule": "35",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35#rule35",
    "hcChapter": "rules-for-pedestrians-1-to-35",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A mobility scooter user travels on the pavement and then joins the road. Which guidance changes with the location?",
    "options": [
      "Pedestrian guidance becomes vehicle guidance",
      "Pedestrian rules throughout",
      "Vehicle guidance applies on the pavement as well",
      "Neither set applies to powered mobility vehicles"
    ],
    "correctIndex": 0,
    "explanation": "Rule 37: The relevant road-user rules depend on where the scooter is being used: pedestrian guidance on pavements and vehicle guidance on the road.",
    "highwayCodeRule": "37",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule37",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A mobility scooter user can leave a pavement by a high kerb or travel further to a dropped kerb. Which choice is advised?",
    "options": [
      "Tip the scooter backwards off the high kerb",
      "Continue to the dropped kerb",
      "Descend diagonally",
      "Use the high kerb without checking its height"
    ],
    "correctIndex": 1,
    "explanation": "Rule 40: Dropped kerbs provide safer access between pavement and road. If a kerb must be negotiated, approach squarely and stay within the manufacturer’s limits.",
    "highwayCodeRule": "40",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule40",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Why can a powered wheelchair on the carriageway be especially vulnerable even when its user obeys the rules?",
    "options": [
      "It always has priority at every junction",
      "It must travel in the centre of each traffic lane",
      "It is relatively slow and less visible",
      "It must yield at every junction"
    ],
    "correctIndex": 2,
    "explanation": "Rule 41: These vehicles can be difficult for other drivers to detect and have a restricted speed. Traffic may close the gap quickly, so their users need particular care.",
    "highwayCodeRule": "41",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule41",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "At night, a mobility scooter is using the road with its lights on. Which direction should it travel?",
    "options": [
      "At right angles to the traffic",
      "On whichever side has fewer headlights",
      "Against traffic whenever the pavement is absent",
      "With the direction of traffic"
    ],
    "correctIndex": 3,
    "explanation": "Rule 42: At night road-going mobility vehicles should follow traffic flow. Travelling the other way can make their lamps misleading to approaching drivers.",
    "highwayCodeRule": "42",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule42",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-005",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A powered mobility vehicle has working lights but its user relies on reflective clothing after dark. What is wrong?",
    "options": [
      "The lights must also be used",
      "A rear reflector is enough",
      "The user must switch on hazard lights instead",
      "Vehicle lights are optional below 4 mph"
    ],
    "correctIndex": 0,
    "explanation": "Rule 43: Reflective material improves detection but does not replace mandatory lights at night. Fitted lights, indicators and horns are subject to the applicable vehicle rules.",
    "highwayCodeRule": "43",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule43",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-006",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A Class 3 scooter user decides a right turn across a busy road is too hazardous. Which alternative is supported by the Code?",
    "options": [
      "Rely on faster vehicles to stop without warning",
      "Use a safe pavement-and-crossing route",
      "Cross every lane at once",
      "Ride against the traffic until a gap appears"
    ],
    "correctIndex": 1,
    "explanation": "Rule 44: A safer pedestrian-style route or an alternative route can avoid a difficult right turn. The scooter must be switched to its lower speed setting when using the pavement.",
    "highwayCodeRule": "44",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule44",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-007",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A mobility scooter is left unattended across a narrow pavement. What is the problem even if no parking sign is present?",
    "options": [
      "It needs hazard lights to make obstruction lawful",
      "Scooters are exempt from obstruction guidance",
      "It obstructs other pavement users",
      "It lacks a Blue Badge"
    ],
    "correctIndex": 2,
    "explanation": "Rule 45: Parking a mobility vehicle must not block pedestrians, particularly wheelchair users. An absence of signs does not make an obstructive position acceptable.",
    "highwayCodeRule": "45",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule45",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-mobility-008",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A Class 3 scooter is used on an unrestricted dual carriageway with a 60 mph limit. Which warning equipment is mandatory there?",
    "options": [
      "A steady blue lamp",
      "A flashing white headlamp",
      "A red beacon mounted at the front",
      "A flashing amber beacon"
    ],
    "correctIndex": 3,
    "explanation": "Rule 46: The Code discourages use on these faster dual carriageways. If one is used, a flashing amber beacon is required to warn faster traffic of the slow vehicle.",
    "highwayCodeRule": "46",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46#rule46",
    "hcChapter": "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A passenger-carrying horse-drawn carriage is being prepared for road use. Which guidance specifically addresses its operation and fittings?",
    "options": [
      "The horse-drawn vehicle code of practice",
      "The cycle training guide",
      "The motorcycle compulsory basic training syllabus",
      "The rules for parking an unpowered trailer"
    ],
    "correctIndex": 0,
    "explanation": "Rule 47: The Department for Transport’s horse-drawn vehicle code covers safe fittings, checks and road-driving standards, including requirements relevant to passenger services.",
    "highwayCodeRule": "47",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule47",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You approach a horse-drawn vehicle after dark. Which lighting arrangement should identify its direction?",
    "options": [
      "Amber towards the front, green towards the rear",
      "White towards the front, red towards the rear",
      "Red towards the front, white towards the rear",
      "Flashing blue towards both front and rear"
    ],
    "correctIndex": 1,
    "explanation": "Rule 48: A horse-drawn vehicle used at night must display white light forward and red light rearward. It should also have two red rear reflectors.",
    "highwayCodeRule": "48",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule48",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A 12-year-old horse rider is not covered by the turban exemption. Which head protection is legally required on the road?",
    "options": [
      "A reflective cap instead of a helmet",
      "No head protection when accompanied by an adult",
      "A securely fastened approved helmet",
      "Any hard-peaked hat"
    ],
    "correctIndex": 2,
    "explanation": "Rule 49: Riders under 14 must wear a helmet meeting the regulations and fasten it securely. Adult supervision does not remove that requirement.",
    "highwayCodeRule": "49",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule49",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Someone must lead a horse along the road after dark. In which hand should they carry the white-front/red-rear light?",
    "options": [
      "The left hand",
      "Either hand, but only behind the horse",
      "Neither hand; a reflector alone is sufficient",
      "The right hand"
    ],
    "correctIndex": 3,
    "explanation": "Rule 51: The Code places the carried light in the right hand when leading a horse. Its white front and red rear help drivers identify the direction of travel.",
    "highwayCodeRule": "51",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule51",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-005",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A rider is about to take a nervous horse onto the road. Which preparation is advised?",
    "options": [
      "Accompany it with a calmer horse",
      "Take it out alone",
      "Keep the reins loose so it can find its own route",
      "Ride without a saddle to improve balance"
    ],
    "correctIndex": 0,
    "explanation": "Rule 52: A less nervous companion can help a horse cope with traffic. The rider must also be able to control it and check that correctly fitted tack is sound.",
    "highwayCodeRule": "52",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule52",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-006",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Two horse riders approach a narrow bend while riding alongside each other. What formation should they adopt?",
    "options": [
      "One rider on each side of the road",
      "Single file",
      "Three abreast if another rider joins",
      "Side by side across the centre line"
    ],
    "correctIndex": 1,
    "explanation": "Rule 53: Single file is advised on narrow or busy roads and around bends. It reduces the width occupied where sight lines or space are restricted.",
    "highwayCodeRule": "53",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule53",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-007",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A horse rider reaches a railway crossing displaying a “horse rider dismount” sign. What should the rider do?",
    "options": [
      "Ride faster to spend less time on the crossing",
      "Wait for a driver to escort it across",
      "Get off and lead the horse",
      "Remain mounted"
    ],
    "correctIndex": 2,
    "explanation": "Rule 54: Dismounting at the signed crossing follows the Code’s guidance. The sign is directed at mounted riders rather than being an instruction merely to slow down.",
    "highwayCodeRule": "54",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule54",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-008",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A horse rider keeps left while continuing around a roundabout past an exit. Which arm signal should drivers expect?",
    "options": [
      "A left-turn signal",
      "No signal until the rider has left the roundabout",
      "A beckoning signal inviting drivers to cut across",
      "A right-turn signal"
    ],
    "correctIndex": 3,
    "explanation": "Rule 55: A right signal while passing exits shows the rider is continuing around. The rider should signal left just before leaving, so drivers must not infer an exit merely from the left position.",
    "highwayCodeRule": "55",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule55",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-009",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A person walks a dog on a path shared with cyclists. How should the dog be controlled?",
    "options": [
      "On a short lead",
      "Loose provided it usually returns when called",
      "On a lead stretched across the full path",
      "Allowed to run ahead around blind corners"
    ],
    "correctIndex": 0,
    "explanation": "Rule 56: A short lead reduces unpredictable movement into the path of cyclists or riders. The dog must not be left to wander onto the road by itself.",
    "highwayCodeRule": "56",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule56",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-010",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A driver plans to carry a dog loose on the front passenger seat. Why is suitable restraint needed?",
    "options": [
      "To replace the driver’s need to check mirrors",
      "To prevent distraction and injury",
      "To let it change seats",
      "To allow the dog to reach the window controls"
    ],
    "correctIndex": 1,
    "explanation": "Rule 57: A loose animal can distract the driver or be thrown about during sudden braking. A suitable harness, carrier, cage or guard can provide restraint.",
    "highwayCodeRule": "57",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule57",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-animals-011",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Livestock must be moved along a road after dark. Which light colours should mark the herd?",
    "options": [
      "Green at the front and amber at the rear",
      "Blue at the front and white at the rear",
      "White at the front and red at the rear",
      "Red front, white rear"
    ],
    "correctIndex": 2,
    "explanation": "Rule 58: Herding after dark is best avoided. If necessary, reflective clothing and lights showing the herd’s front and rear help approaching drivers see its extent and direction.",
    "highwayCodeRule": "58",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58#rule58",
    "hcChapter": "rules-about-animals-47-to-58",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Which item of cycling clothing most directly creates a risk of losing control?",
    "options": [
      "A loose scarf hanging near the chain",
      "A reflective band around the ankle",
      "A securely fastened cycle helmet",
      "A close-fitting fluorescent jacket"
    ],
    "correctIndex": 0,
    "explanation": "Rule 59: Loose fabric can catch in moving parts or hide lights, so clothing needs to stay clear of the chain and wheels.",
    "highwayCodeRule": "59",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule59",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist chooses extra visibility equipment for an unlit night journey. Which material best returns headlight beams towards drivers?",
    "options": [
      "A matt white cotton panel",
      "Reflective strips",
      "Dark waterproof cloth",
      "Plain fluorescent fabric"
    ],
    "correctIndex": 1,
    "explanation": "Rule 59: Reflective material returns light from vehicle headlamps; fluorescent colours mainly help in daylight.",
    "highwayCodeRule": "59",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule59",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A bicycle has legal lights and reflectors. What front lighting is recommended for riding along an unlit country lane?",
    "options": [
      "An amber flashing lamp",
      "An unlit white reflector",
      "A steady white lamp",
      "A flashing red lamp"
    ],
    "correctIndex": 2,
    "explanation": "Rule 60: Although flashing cycle lamps are allowed, a steady front light is recommended where street lighting is absent.",
    "highwayCodeRule": "60",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule60",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cycle lane is provided beside a road. How should a driver interpret a cyclist choosing to remain in the main lane?",
    "options": [
      "They must leave at the next junction",
      "They need a special permit to do so",
      "They must be cycling to overtake",
      "They may judge the lane unsuitable"
    ],
    "correctIndex": 3,
    "explanation": "Rule 61: Cycle facilities are optional; cyclists can assess whether using them makes that particular journey safer and easier.",
    "highwayCodeRule": "61",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule61",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-005",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A shared route has clearly separate pedestrian and cycle sides. Where must someone riding a bicycle travel?",
    "options": [
      "On the side designated for cycles",
      "On whichever side is less crowded",
      "On the pedestrian side at low speed",
      "Across both sides after ringing a bell"
    ],
    "correctIndex": 0,
    "explanation": "Rule 62: The pedestrian part remains a footpath or pavement, so a rider must stay on the cycle side.",
    "highwayCodeRule": "62",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule62",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-006",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist approaches a child wandering across an unsegregated shared path. What response follows the Code?",
    "options": [
      "Expect the child to keep to the kerb",
      "Slow down and stop if needed",
      "Ring repeatedly and maintain speed",
      "Pass closely before the child turns"
    ],
    "correctIndex": 1,
    "explanation": "Rule 62: Shared routes require care and enough space for pedestrians, including those whose movements may be unpredictable.",
    "highwayCodeRule": "62",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule62",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-007",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "On a route shared with horses, a cyclist plans to overtake a horse on its left. Which assessment is correct?",
    "options": [
      "That is safe if the bell is sounded",
      "That is allowed at walking pace",
      "That is the wrong side to pass",
      "That is required on shared routes"
    ],
    "correctIndex": 2,
    "explanation": "Rule 63: The Code advises cyclists against passing a horse on its left; sudden or close approaches can startle the animal.",
    "highwayCodeRule": "63",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule63",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-008",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian does not react to a cyclist calling out on a shared path. What should the cyclist bear in mind?",
    "options": [
      "The person has agreed to be passed",
      "A louder bell guarantees a response",
      "Pedestrians must move after a warning",
      "The person may not have heard"
    ],
    "correctIndex": 3,
    "explanation": "Rule 63: Hearing or sight impairments may not be apparent, so a warning cannot replace slowing down and leaving safe space.",
    "highwayCodeRule": "63",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule63",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-009",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist wants to bypass a queue by riding on an ordinary pavement with no cycle designation. What is the legal position?",
    "options": [
      "Riding there is prohibited",
      "Riding is allowed below 4 mph",
      "Riding is allowed if nobody is near",
      "Riding is allowed to avoid queues"
    ],
    "correctIndex": 0,
    "explanation": "Rule 64: An ordinary pavement is reserved for pedestrians; a traffic queue does not create an exception to the cycling prohibition.",
    "highwayCodeRule": "64",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule64",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-010",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist reaches a bus stopped against the kerb in a bus lane. Which attempted manoeuvre conflicts with the Code?",
    "options": [
      "Allowing passengers space to board",
      "Squeezing between bus and kerb",
      "Waiting behind the stationary bus",
      "Checking traffic before moving out"
    ],
    "correctIndex": 1,
    "explanation": "Rule 65: Passing through that narrow nearside gap puts the cyclist among boarding or alighting passengers and beside a large vehicle.",
    "highwayCodeRule": "65",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule65",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-011",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist carries a shopping bag hanging close to the front wheel. What is the main reason to change this arrangement?",
    "options": [
      "It automatically invalidates cycle lights",
      "It prevents drivers judging lane width",
      "It could catch and upset balance",
      "It makes the bicycle legally a trailer"
    ],
    "correctIndex": 2,
    "explanation": "Rule 66: Loads should not compromise balance or become entangled in a wheel or the chain.",
    "highwayCodeRule": "66",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule66",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-012",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist follows immediately behind a van to shelter from the wind. Why should they increase the gap?",
    "options": [
      "The van must give them priority",
      "The shelter increases braking grip",
      "The van driver can always see them",
      "The van could stop abruptly"
    ],
    "correctIndex": 3,
    "explanation": "Rule 66: Following too closely leaves too little time or space if the vehicle in front brakes suddenly.",
    "highwayCodeRule": "66",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule66",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-013",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist is alongside a slow-moving lorry shortly before a side road. Why is continuing up its left especially risky?",
    "options": [
      "The driver may not see the cyclist",
      "The lorry must turn right first",
      "The cyclist has no legal priority ever",
      "The lorry cannot move sideways"
    ],
    "correctIndex": 0,
    "explanation": "Rule 67: Large vehicles have blind spots and may turn left or change position; the cyclist must assess that risk rather than assume visibility.",
    "highwayCodeRule": "67",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule67",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-014",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A standard single-seat bicycle has no passenger seat or adaptations. May its rider carry a friend on the handlebars?",
    "options": [
      "Yes, if both riders are adults",
      "No, the bicycle is not built for it",
      "Yes, if the friend wears a helmet",
      "Yes, on roads limited to 20 mph"
    ],
    "correctIndex": 1,
    "explanation": "Rule 68: Carrying a passenger requires a bicycle designed or adapted for that purpose; handlebars are not a passenger seat.",
    "highwayCodeRule": "68",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule68",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-015",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist takes medicine that impairs their ability to ride safely. Which rule applies?",
    "options": [
      "They may ride if they avoid main roads",
      "They may ride if they have cycle lights",
      "They must not ride under its influence",
      "They may ride on short local journeys"
    ],
    "correctIndex": 2,
    "explanation": "Rule 68: The prohibition on riding under the influence includes medicines as well as alcohol and other drugs.",
    "highwayCodeRule": "68",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule68",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-016",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist approaches a STOP sign at an otherwise empty junction. What must happen?",
    "options": [
      "They may roll through after looking",
      "They need stop only for motor traffic",
      "They may treat the sign as advice",
      "They must obey the stop instruction"
    ],
    "correctIndex": 3,
    "explanation": "Rule 69: Traffic signs and signals apply to cyclists too; an empty road does not cancel a mandatory stop.",
    "highwayCodeRule": "69",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule69",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-017",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A bicycle is being left beside a public footway. Which parking choice follows the Code?",
    "options": [
      "Secure it without blocking passage",
      "Lean it across a dropped crossing",
      "Lay it across a narrow walking route",
      "Balance it where it may fall into traffic"
    ],
    "correctIndex": 0,
    "explanation": "Rule 70: A parked cycle should be secure and positioned so it cannot obstruct or endanger other road users.",
    "highwayCodeRule": "70",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule70",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-018",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "At a red light, a cyclist enters the marked advanced cycle waiting area past the first stop line. Where must they wait?",
    "options": [
      "At any point past the pedestrian studs",
      "Behind the final stop line",
      "Beyond the final line if turning left",
      "In the junction clear of motor traffic"
    ],
    "correctIndex": 1,
    "explanation": "Rule 71: Cyclists may enter the advanced waiting area at red, but the final stop line still controls their entry into the junction.",
    "highwayCodeRule": "71",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule71",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-019",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "On a busy road with faster traffic, what minimum distance from the kerb does the Code advise a cyclist to keep, allowing more when safer?",
    "options": [
      "At least 0.25 metres",
      "Exactly 0.3 metres",
      "At least 0.5 metres",
      "At least 0.1 metres"
    ],
    "correctIndex": 2,
    "explanation": "Rule 72: Space from the kerb helps avoid edge hazards; half a metre is the advised minimum, with more room where safety requires it.",
    "highwayCodeRule": "72",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule72",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-020",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist feels unable to negotiate a busy junction safely while riding. Which alternative does the Code suggest?",
    "options": [
      "Ride across the pavement corner",
      "Follow a turning lorry closely",
      "Ignore the lights during a gap",
      "Dismount and wheel the bicycle"
    ],
    "correctIndex": 3,
    "explanation": "Rule 73: Walking the cycle across provides an alternative when taking a normal riding position at the junction feels unsafe.",
    "highwayCodeRule": "73",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule73",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-021",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist intends to turn left. Which road users should they check for before giving the signal?",
    "options": [
      "Other cyclists and motorcyclists",
      "Only pedestrians behind the kerb",
      "Only drivers coming towards them",
      "Only vehicles more than a lane away"
    ],
    "correctIndex": 0,
    "explanation": "Rule 74: Two-wheelers may be nearby or passing on either side, so checking before signalling helps avoid turning across someone.",
    "highwayCodeRule": "74",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule74",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-022",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist approaches a car that is indicating left and slowing for a junction. Which action should the cyclist avoid?",
    "options": [
      "Leaving space for the car to turn",
      "Riding up the inside of the car",
      "Waiting back from the turning car",
      "Checking for pedestrians at the corner"
    ],
    "correctIndex": 1,
    "explanation": "Rule 74: The car is likely to cross the cyclist’s path, so moving into the nearside gap creates a turning collision risk.",
    "highwayCodeRule": "74",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule74",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-023",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist uses a junction marked for a two-stage right turn. After reaching the marked waiting position on the first green, what happens next?",
    "options": [
      "Continue when the original lights go red",
      "Turn as soon as the opposite lane empties",
      "Wait for the signals now facing them",
      "Complete the turn on the original green"
    ],
    "correctIndex": 2,
    "explanation": "Rule 75: The two-stage arrangement separates the movements: the cyclist stops at the marked position and follows the second set of signals.",
    "highwayCodeRule": "75",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule75",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-024",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist goes straight past a side road with no contrary signs or markings. A car waits to turn out. Who has priority?",
    "options": [
      "The car because it is motorised",
      "Whoever gives a hand signal first",
      "The car if its indicator is flashing",
      "The cyclist continuing straight"
    ],
    "correctIndex": 3,
    "explanation": "Rule 76: Straight-ahead cyclists have priority over vehicles waiting to turn into or out of that side road, although they should still check it is safe.",
    "highwayCodeRule": "76",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule76",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-025",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist must cross a fast main road and finds riding across difficult. Which approach is suggested by the Code?",
    "options": [
      "Walk the cycle across in a safe gap",
      "Ride across immediately after a lorry",
      "Cross diagonally to shorten the wait",
      "Require approaching drivers to stop"
    ],
    "correctIndex": 0,
    "explanation": "Rule 77: Dismounting and using suitable gaps or islands can make crossing a busy road easier and safer.",
    "highwayCodeRule": "77",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule77",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-026",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "While cycling around a roundabout, what continuing hazard needs particular attention at every exit?",
    "options": [
      "Traffic always staying in one lane",
      "Vehicles crossing the cyclist’s path",
      "A legal requirement to use the footway",
      "Drivers always stopping for cyclists"
    ],
    "correctIndex": 1,
    "explanation": "Rule 78: Joining and leaving vehicles can cross a cyclist’s route, and the rider may be difficult for their drivers to see.",
    "highwayCodeRule": "78",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule78",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-027",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist keeps to the left lane of a roundabout but intends to continue past an exit. Which signal should they give?",
    "options": [
      "A signal to slow down",
      "No signal until leaving",
      "A right arm signal",
      "A left arm signal"
    ],
    "correctIndex": 2,
    "explanation": "Rule 79: Signalling right tells other road users the cyclist is continuing around rather than taking that exit.",
    "highwayCodeRule": "79",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule79",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-028",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist is about to enter a roundabout beside a long articulated vehicle. What is the safer option if their paths may conflict?",
    "options": [
      "Ride beside its rear wheels",
      "Squeeze through its nearside gap",
      "Rely on its driver to stop first",
      "Wait until the long vehicle clears"
    ],
    "correctIndex": 3,
    "explanation": "Rule 80: Long vehicles need extra manoeuvring room; staying out of that space avoids being trapped as they turn.",
    "highwayCodeRule": "80",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule80",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-029",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A rider reaches an ordinary zebra crossing and wants to use it to cross the road. What should they do with the bicycle?",
    "options": [
      "Get off and wheel it across",
      "Ride across after ringing the bell",
      "Ride across if wearing a helmet",
      "Treat it as a cycle-only crossing"
    ],
    "correctIndex": 0,
    "explanation": "Rule 81: Ordinary zebra, pelican and puffin crossings are not ride-across cycle facilities, so the bicycle should be wheeled.",
    "highwayCodeRule": "81",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule81",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-030",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "At a cycle-only signal crossing, which indication permits a cyclist to start crossing?",
    "options": [
      "The amber light facing motor traffic",
      "The green cycle symbol",
      "A red pedestrian figure",
      "An empty road despite a red cycle light"
    ],
    "correctIndex": 1,
    "explanation": "Rule 82: The cycle signal controls that crossing; riders must wait until its green cycle indication appears.",
    "highwayCodeRule": "82",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule82",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-cycles-031",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist approaches a railway crossing displaying a cyclist-dismount sign. What should they do?",
    "options": [
      "Ride through faster than usual",
      "Dismount only if a train is visible",
      "Get off and push the bicycle",
      "Stay seated but stop pedalling"
    ],
    "correctIndex": 2,
    "explanation": "Rule 82: Where a dismount sign is displayed at a level crossing, wheeling the cycle is the advised procedure.",
    "highwayCodeRule": "82",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-cyclists-59-to-82#rule82",
    "hcChapter": "rules-for-cyclists-59-to-82",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Before a motorcycle journey, what helmet-visor condition needs attention?",
    "options": [
      "A clear visor with no damage",
      "A secure helmet fastening",
      "An approved helmet of the right fit",
      "Scratches or dirt obstructing vision"
    ],
    "correctIndex": 3,
    "explanation": "Rule 83: A dirty or damaged visor reduces the rider’s view, so its condition should be checked before every trip.",
    "highwayCodeRule": "83",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule83",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A rider chooses strong boots, gloves and suitable motorcycle clothing. What is their main safety benefit?",
    "options": [
      "Reducing injury in a collision",
      "Replacing the need for a helmet",
      "Preventing all loss of tyre grip",
      "Removing the need for eye checks"
    ],
    "correctIndex": 0,
    "explanation": "Rule 84: Protective footwear, gloves and suitable clothing can help limit injury if a rider is involved in a collision.",
    "highwayCodeRule": "84",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule84",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A motorcyclist holds only a provisional motorcycle licence. May they carry a pillion passenger on a suitable motorcycle?",
    "options": [
      "Yes, if the journey avoids motorways",
      "No, provisional holders may not",
      "Yes, if the passenger has a full licence",
      "Yes, after fitting a second helmet lock"
    ],
    "correctIndex": 1,
    "explanation": "Rule 85: A motorcycle capable of carrying a passenger does not remove the prohibition for provisional licence holders.",
    "highwayCodeRule": "85",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule85",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A full-licence rider has a motorcycle designed to carry passengers. What is the greatest number of pillion passengers permitted?",
    "options": [
      "Three",
      "Four",
      "One",
      "Two"
    ],
    "correctIndex": 2,
    "explanation": "Rule 85: The motorcycle rules limit pillion carriage to a single passenger, seated properly astride the machine.",
    "highwayCodeRule": "85",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule85",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-005",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A motorcyclist wears fluorescent clothing and uses dipped headlights in daylight. What assumption must they still avoid at junctions?",
    "options": [
      "That mirrors need adjustment",
      "That road signs still apply",
      "That they need room to brake",
      "That every driver has seen them"
    ],
    "correctIndex": 3,
    "explanation": "Rule 86: Visibility aids help, but other drivers can still miss the rider or misjudge their speed and distance.",
    "highwayCodeRule": "86",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule86",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-006",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Which clothing feature is recommended specifically to improve a motorcyclist’s visibility after dark?",
    "options": [
      "Reflective strips",
      "Plain dark leather",
      "Matt fluorescent cloth alone",
      "A dark-tinted outer layer"
    ],
    "correctIndex": 0,
    "explanation": "Rule 87: Reflective material sends other vehicles’ headlight beams back towards drivers and helps them detect a rider earlier.",
    "highwayCodeRule": "87",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule87",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-motos-007",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A motorcyclist filters past a slow queue. Which hazard is particularly likely between the stopped vehicles?",
    "options": [
      "Vehicles being unable to change lanes",
      "Pedestrians crossing through gaps",
      "Traffic lights no longer applying",
      "Pedestrians always using crossings"
    ],
    "correctIndex": 1,
    "explanation": "Rule 88: People may cross between vehicles while drivers may emerge or change lanes, so filtering requires low speed and careful observation.",
    "highwayCodeRule": "88",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-motorcyclists-83-to-88#rule88",
    "hcChapter": "rules-for-motorcyclists-83-to-88",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-001",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "When a heavy vehicle interacts with a person walking, how does the Code allocate responsibility for reducing danger?",
    "options": [
      "Responsibility depends on who arrived first",
      "Responsibility belongs only to the faster user",
      "Greater potential harm means greater responsibility",
      "The pedestrian carries the greater responsibility"
    ],
    "correctIndex": 2,
    "explanation": "Rule 204: The hierarchy places greater responsibility on road users capable of causing the most harm, without removing everyone else’s duties.",
    "highwayCodeRule": "204",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule204",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-002",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You turn from a driveway across a cycle track. A cyclist is travelling along the track towards the access. What should you do?",
    "options": [
      "Expect the cyclist to leave the track",
      "Proceed because it is a private access",
      "Sound the horn and cross ahead",
      "Give way to the cyclist"
    ],
    "correctIndex": 3,
    "explanation": "Rule 206: Crossing a cycle track to use a driveway creates a conflict with through cyclists, whom you should allow to continue.",
    "highwayCodeRule": "206",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule206",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-003",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Road repairs direct pedestrians off the pavement and into your lane ahead. How should you approach?",
    "options": [
      "Slow down and allow them space",
      "Maintain speed if the lane is open",
      "Use the horn to move them onto the works",
      "Pass closely before oncoming traffic arrives"
    ],
    "correctIndex": 0,
    "explanation": "Rule 206: Pedestrians diverted into the carriageway are exposed to traffic; careful, slow driving allows a safe response to their movements.",
    "highwayCodeRule": "206",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule206",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-004",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Amber lamps are flashing below a school warning sign. How long should you maintain a very slow approach?",
    "options": [
      "Until the next vehicle accelerates",
      "Until clear of the school area",
      "Only until reaching the signpost",
      "Only while someone is in the road"
    ],
    "correctIndex": 1,
    "explanation": "Rule 208: The flashing warning indicates children may cross ahead, so caution needs to continue throughout the affected area.",
    "highwayCodeRule": "208",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule208",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-006",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You turn right through a gap in a stationary queue. What hidden traffic should you check for on the queue’s nearside?",
    "options": [
      "Only vehicles reversing in the queue",
      "Only buses in the opposite direction",
      "Pedestrians who must wait for your turn",
      "Cyclists or motorcyclists filtering past"
    ],
    "correctIndex": 3,
    "explanation": "Rule 211: Two-wheelers can continue along the inside of a queue and emerge into your turning path, so look for them and give way.",
    "highwayCodeRule": "211",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule211",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-007",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist ahead looks over their shoulder. What possibility should affect your decision to overtake?",
    "options": [
      "They may move out or turn right",
      "They have invited you to pass closely",
      "They will stop against the kerb",
      "They must now give you priority"
    ],
    "correctIndex": 0,
    "explanation": "Rule 212: A shoulder check can precede a change of direction; leaving time and space avoids squeezing the rider during that move.",
    "highwayCodeRule": "212",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule212",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-008",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A herd completely blocks the road. What should you do while waiting for it to move away?",
    "options": [
      "Use repeated short horn blasts",
      "Stop and switch off the engine",
      "Keep the engine revving steadily",
      "Edge forward to divide the herd"
    ],
    "correctIndex": 1,
    "explanation": "Rule 214: A quiet stationary vehicle is less likely to alarm the animals than engine noise or pressure from moving forwards.",
    "highwayCodeRule": "214",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule214",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-009",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You have just passed a horse safely. Which use of the accelerator should you avoid?",
    "options": [
      "Remaining slow until well clear",
      "Keeping enough space from the rider",
      "A sudden noisy burst of acceleration",
      "A gradual smooth return to speed"
    ],
    "correctIndex": 2,
    "explanation": "Rule 214: Noise and abrupt acceleration can startle the horse even after your vehicle has drawn ahead.",
    "highwayCodeRule": "214",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule214",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-010",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An older driver ahead takes longer than you expect to react to a changing situation. What response follows the Code?",
    "options": [
      "Pressure them with close following",
      "Overtake without checking the view",
      "Assume they must pull over immediately",
      "Allow for slower reactions"
    ],
    "correctIndex": 3,
    "explanation": "Rule 216: Reaction times can be slower for some older drivers, so allow time and space rather than adding pressure.",
    "highwayCodeRule": "216",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule216",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-011",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An emergency vehicle approaches behind as you near a junction. Why should you avoid braking sharply?",
    "options": [
      "Following drivers may not see it yet",
      "Emergency vehicles cannot use brakes",
      "Your brake lamps will hide its lights",
      "You must always accelerate at junctions"
    ],
    "correctIndex": 0,
    "explanation": "Rule 219: A following driver may lack your view of the emergency vehicle, making sudden braking an avoidable collision risk.",
    "highwayCodeRule": "219",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule219",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-012",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You follow a bus so closely that its mirrors are hidden from your view. What should you recognise?",
    "options": [
      "Its driver will stop to let you pass",
      "Its driver may not be able to see you",
      "Its driver must use a rear window",
      "Its driver knows your exact position"
    ],
    "correctIndex": 1,
    "explanation": "Rule 221: Large vehicles have limited rearward visibility; occupying a blind area can prevent the driver knowing you are there.",
    "highwayCodeRule": "221",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule221",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-013",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A large goods vehicle remains below your car’s motorway limit on a clear road. What could explain this?",
    "options": [
      "A rule requiring cars to match its speed",
      "A ban on lorries using the left lane",
      "A limiter restricting it to 56 mph",
      "A universal motorway minimum of 56 mph"
    ],
    "correctIndex": 2,
    "explanation": "Rule 222: Many heavy vehicles have speed limiters around 56 mph and are subject to different limits, so patience may be needed.",
    "highwayCodeRule": "222",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule222",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  },
  {
    "id": "hc-care-015",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A modern tractor can travel no faster than 25 mph. When must it use an amber beacon on an unrestricted dual carriageway?",
    "options": [
      "Whenever it uses that road",
      "Only during the hours of darkness",
      "Only while towing a trailer",
      "Only when more than 25 vehicles follow"
    ],
    "correctIndex": 0,
    "explanation": "Rule 225: The beacon requirement applies to motor vehicles in the specified age and speed category on unrestricted dual carriageways, warning faster traffic of their low speed.",
    "highwayCodeRule": "225",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225#rule225",
    "hcChapter": "road-users-requiring-extra-care-204-to-225",
    "supersededCheck": "current"
  }
];
