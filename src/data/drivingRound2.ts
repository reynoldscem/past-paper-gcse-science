import type { Question } from '../types';

// Original practice scenarios, checked against the linked Highway Code rules.
export const drivingRound2Questions: Question[] = [
  {
    "id": "dt-round2-001",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "A passenger offers to change your sat-nav destination while you drive. What is safest?",
    "options": [
      "Let the passenger do it without distracting you",
      "Type it while following a straight road",
      "Hold the screen closer to read it",
      "Slow down in the traffic lane to type"
    ],
    "correctIndex": 0,
    "explanation": "Screen use must not divert attention from driving. Arrange changes while safely stopped or let a passenger handle them.",
    "highwayCodeRule": "150",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-002",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "You are stopped in a traffic queue. May you pick up your phone to read a message?",
    "options": [
      "No; being stationary in traffic does not allow handheld phone use",
      "Yes, if the handbrake is on",
      "Yes, if the message is short",
      "Yes, if the engine has stop-start"
    ],
    "correctIndex": 0,
    "explanation": "Handheld phone restrictions apply while driving, including when waiting in traffic.",
    "highwayCodeRule": "149",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-003",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "Your drink falls into the passenger footwell. What should you do?",
    "options": [
      "Leave it until you can stop safely",
      "Reach down immediately",
      "Ask traffic behind to wait with your hazard lights",
      "Steer with your knees to retrieve it"
    ],
    "correctIndex": 0,
    "explanation": "Reaching for objects can remove your eyes and hands from driving at a critical moment.",
    "highwayCodeRule": "148",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-004",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "You leave a busy main road for a narrow residential street. What should change?",
    "options": [
      "Reassess your speed for the new hazards",
      "Keep the main-road speed until a sign appears",
      "Watch only for oncoming cars",
      "Drive near parked cars to discourage overtaking"
    ],
    "correctIndex": 0,
    "explanation": "A suitable speed depends on the road and likely hazards, not just its posted maximum.",
    "highwayCodeRule": "146",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-005",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "You are creeping past a queue of parked delivery vans. Where should you look?",
    "options": [
      "For people or cycles emerging through gaps",
      "Only at the rear bumper ahead",
      "Only at the centre line",
      "Only in the right mirror"
    ],
    "correctIndex": 0,
    "explanation": "In slow traffic, keep scanning for road users emerging from concealed places.",
    "highwayCodeRule": "151",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-006",
    "subject": "hazardAwareness",
    "topic": "alertness",
    "topicLabel": "Alertness",
    "question": "You have barely slept before a long drive. What is the sensible decision?",
    "options": [
      "Delay the drive until rested",
      "Rely on a louder radio",
      "Drive faster before tiredness builds",
      "Avoid all breaks to finish early"
    ],
    "correctIndex": 0,
    "explanation": "Starting tired makes the journey unsafe; a planned rest is more reliable than attempts to mask sleepiness.",
    "highwayCodeRule": "91",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-007",
    "subject": "roadRules",
    "topic": "attitude",
    "topicLabel": "Attitude",
    "question": "Another driver makes an error at a junction. What should guide your response?",
    "options": [
      "Allow space and avoid retaliation",
      "Sound the horn until they apologise",
      "Follow closely to teach them",
      "Block their path"
    ],
    "correctIndex": 0,
    "explanation": "Considerate driving allows for mistakes and avoids turning one error into a confrontation.",
    "highwayCodeRule": "147",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-008",
    "subject": "roadRules",
    "topic": "attitude",
    "topicLabel": "Attitude",
    "question": "A learner stalls ahead as the lights change. What should you do?",
    "options": [
      "Wait patiently and give them time",
      "Rev your engine repeatedly",
      "Overtake without checking",
      "Move up against their bumper"
    ],
    "correctIndex": 0,
    "explanation": "Learners may need extra time. Pressure and intimidation increase the risk of further mistakes.",
    "highwayCodeRule": "147",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-009",
    "subject": "roadRules",
    "topic": "attitude",
    "topicLabel": "Attitude",
    "question": "When is the horn appropriate in a built-up area during the daytime?",
    "options": [
      "To warn another road user of your presence when needed",
      "To complain about slow progress",
      "To greet a friend on the pavement",
      "To insist on priority"
    ],
    "correctIndex": 0,
    "explanation": "The horn is a warning device, not a way to express annoyance or demand that others move.",
    "highwayCodeRule": "112",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-010",
    "subject": "roadRules",
    "topic": "attitude",
    "topicLabel": "Attitude",
    "question": "An oncoming driver flashes headlights at a narrow gap. What can you safely assume?",
    "options": [
      "Only that they are making their presence known",
      "That they guarantee the road is clear",
      "That you have legal priority",
      "That they have checked behind you"
    ],
    "correctIndex": 0,
    "explanation": "A headlight flash is not a reliable invitation to proceed. Make your own observations.",
    "highwayCodeRule": "110",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-011",
    "subject": "roadRules",
    "topic": "attitude",
    "topicLabel": "Attitude",
    "question": "You have signalled to change lanes. What must you still do?",
    "options": [
      "Check that the move is safe and does not force others to react",
      "Move immediately because the signal gives priority",
      "Wait exactly three seconds then move",
      "Expect everyone to brake for you"
    ],
    "correctIndex": 0,
    "explanation": "A signal communicates an intention; it does not confer priority.",
    "highwayCodeRule": "103",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-012",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "You follow a van that blocks your view ahead. What helps you plan safely?",
    "options": [
      "Increase your following gap",
      "Move closer to see around its side",
      "Match every brake application late",
      "Watch only its roof"
    ],
    "correctIndex": 0,
    "explanation": "More space improves both your view and the time available to respond.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-013",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "A car moves into your two-second following gap. What should you do?",
    "options": [
      "Ease back to rebuild the gap",
      "Accelerate to close the gap",
      "Keep the reduced gap indefinitely",
      "Brake sharply to punish the driver"
    ],
    "correctIndex": 0,
    "explanation": "Re-establish a safe interval smoothly rather than defending a piece of road.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-014",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "Rain begins while you are following traffic. What should happen to your dry-road gap?",
    "options": [
      "At least double it",
      "Halve it",
      "Keep it identical with ABS",
      "Reduce it if the road is straight"
    ],
    "correctIndex": 0,
    "explanation": "Wet roads reduce tyre grip, so a larger gap is needed even with modern braking systems.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-015",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "Why should a two-second gap be increased on ice?",
    "options": [
      "Stopping distances can be ten times those on dry roads",
      "Cold air makes engines less powerful",
      "Ice makes mirrors inaccurate",
      "The speedometer always reads too low"
    ],
    "correctIndex": 0,
    "explanation": "Very low grip can make stopping take far longer; allow substantially more space and reduce speed.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-016",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "A narrow bend hides the road ahead. How should you choose your speed?",
    "options": [
      "Be able to stop within the distance you can see is clear",
      "Use the posted limit regardless of view",
      "Follow the speed of the car behind",
      "Accelerate to shorten time on the bend"
    ],
    "correctIndex": 0,
    "explanation": "A speed limit is a maximum, and limited visibility may demand a much lower speed.",
    "highwayCodeRule": "126",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-017",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "You stop in a queue behind a large vehicle. Why leave manoeuvring room?",
    "options": [
      "So you can move safely if the vehicle ahead breaks down",
      "To reserve space for overtaking at speed",
      "To encourage vehicles to cut in",
      "To avoid using the parking brake"
    ],
    "correctIndex": 0,
    "explanation": "A useful stationary gap leaves options if the queue cannot move normally.",
    "highwayCodeRule": "151",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-018",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "After driving through deep water, how should you check the brakes?",
    "options": [
      "Test them gently as soon as it is safe",
      "Apply full braking immediately in traffic",
      "Assume ABS will dry them",
      "Wait until the next emergency"
    ],
    "correctIndex": 0,
    "explanation": "Water may reduce brake effectiveness; a gentle safe check lets you discover the problem early.",
    "highwayCodeRule": "121",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-019",
    "subject": "hazardAwareness",
    "topic": "safety-margins",
    "topicLabel": "Safety Margins",
    "question": "For an ordinary planned stop, what braking approach helps control?",
    "options": [
      "Brake early and progressively, easing pressure as you stop",
      "Brake as late and hard as possible",
      "Coast in neutral then stamp on the brake",
      "Use only the parking brake"
    ],
    "correctIndex": 0,
    "explanation": "Smooth progressive braking gives following traffic warning and helps retain control.",
    "highwayCodeRule": "117",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-020",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You pass a stopped bus with people beside it. What should you anticipate?",
    "options": [
      "Someone stepping out from its concealed front",
      "That everyone will wait for the bus to leave",
      "That the bus driver will stop all pedestrians",
      "That only traffic behind is a risk"
    ],
    "correctIndex": 0,
    "explanation": "A stopped bus hides pedestrians. Slow down and be ready for someone to emerge.",
    "highwayCodeRule": "206",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-021",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A pedestrian has a white cane with a red band. What should you recognise?",
    "options": [
      "They may have both sight and hearing impairments",
      "They are directing traffic",
      "They are always accompanied by a guide",
      "They can hear your horn clearly"
    ],
    "correctIndex": 0,
    "explanation": "Do not rely on sound or eye contact with a person who may have combined sensory impairments.",
    "highwayCodeRule": "207",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-022",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "An older pedestrian is partway across as your route becomes clear. What should you do?",
    "options": [
      "Allow enough time for them to finish crossing",
      "Sound the horn to make them hurry",
      "Pass close behind them",
      "Move forward to claim space"
    ],
    "correctIndex": 0,
    "explanation": "Some people need more time to cross. Keep their route safe rather than pressuring them.",
    "highwayCodeRule": "207",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-023",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "You are turning at a junction where motorcycles may approach. What helps?",
    "options": [
      "Look carefully because a small vehicle can be hard to see",
      "Judge only the largest visible vehicle",
      "Assume a headlight means the rider is far away",
      "Rely on the sound of an engine"
    ],
    "correctIndex": 0,
    "explanation": "Motorcycles and cycles are less conspicuous and can be hidden by larger vehicles.",
    "highwayCodeRule": "211",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-024",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A cyclist moves out to avoid a drain cover. How should you respond?",
    "options": [
      "Give room and avoid squeezing past",
      "Hold a line close to their handlebars",
      "Sound the horn continuously",
      "Assume they are deliberately blocking you"
    ],
    "correctIndex": 0,
    "explanation": "Cyclists may need lateral space to avoid surface hazards that are minor for cars.",
    "highwayCodeRule": "213",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-025",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "Why might a cyclist ride in the centre of a lane on a quiet road?",
    "options": [
      "To be more visible and discourage unsafe close passing",
      "Because cars may never pass a cycle",
      "Because the left half is always reserved",
      "To signal a compulsory right turn"
    ],
    "correctIndex": 0,
    "explanation": "Cyclists may use a central position where appropriate; wait for a safe opportunity to pass.",
    "highwayCodeRule": "213",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-026",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "A horse rider signals that you should slow down. What should you do?",
    "options": [
      "Slow and give the horse extra space",
      "Maintain speed if under the limit",
      "Rev the engine to warn the horse",
      "Pass between two horses"
    ],
    "correctIndex": 0,
    "explanation": "Horses can react unpredictably; heed a rider's request and avoid noise or close passing.",
    "highwayCodeRule": "215",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-027",
    "subject": "hazardAwareness",
    "topic": "vulnerable-road-users",
    "topicLabel": "Vulnerable Road Users",
    "question": "There is not enough room to pass a cyclist with safe clearance. What is the correct choice?",
    "options": [
      "Wait behind until there is enough space",
      "Pass with your wheels on the pavement",
      "Sound the horn and squeeze through",
      "Expect the cyclist to stop immediately"
    ],
    "correctIndex": 0,
    "explanation": "A safe overtake needs adequate clearance. If the available road cannot provide it, wait.",
    "highwayCodeRule": "163",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203"
  },
  {
    "id": "dt-round2-028",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Vehicles",
    "question": "A long vehicle moves right before a left turn. What should you avoid?",
    "options": [
      "Entering the gap on its left",
      "Waiting well behind it",
      "Watching its indicators",
      "Giving it extra room"
    ],
    "correctIndex": 0,
    "explanation": "Long vehicles may need to swing out to turn; their left side can close the apparent gap.",
    "highwayCodeRule": "221",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-029",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Vehicles",
    "question": "You are following a large lorry in heavy rain. What is a particular risk?",
    "options": [
      "Spray can greatly reduce your view",
      "Its tyres make the road dry for you",
      "Its brake lights are unnecessary",
      "Its size guarantees a safe stopping gap"
    ],
    "correctIndex": 0,
    "explanation": "Spray obscures hazards. Drop back to improve visibility and reaction time.",
    "highwayCodeRule": "227",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237"
  },
  {
    "id": "dt-round2-030",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Vehicles",
    "question": "A bus signals to leave a stop. What should you do if it is safe?",
    "options": [
      "Allow it to pull out",
      "Accelerate to prevent it joining",
      "Stop abruptly without checking behind",
      "Ignore the signal because buses never have priority"
    ],
    "correctIndex": 0,
    "explanation": "Give buses an opportunity to rejoin safely while considering other traffic.",
    "highwayCodeRule": "223",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-031",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Vehicles",
    "question": "An ambulance approaches behind with blue lights. What should you do?",
    "options": [
      "Find a safe legal way to let it pass",
      "Drive through a red light immediately",
      "Mount the pavement regardless of pedestrians",
      "Stop on a blind bend"
    ],
    "correctIndex": 0,
    "explanation": "Help the emergency vehicle without endangering others or breaking traffic controls.",
    "highwayCodeRule": "219",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-032",
    "subject": "hazardAwareness",
    "topic": "other-vehicles",
    "topicLabel": "Other Vehicles",
    "question": "A powered mobility vehicle is using the road ahead. What should you allow for?",
    "options": [
      "Its low speed and the user's possible limited mobility",
      "It accelerating like a car",
      "It always moving onto the pavement for you",
      "It being able to turn instantly"
    ],
    "correctIndex": 0,
    "explanation": "Allow space and time for slow-moving mobility vehicles rather than making assumptions about their users.",
    "highwayCodeRule": "220",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
  },
  {
    "id": "dt-round2-033",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You approach the end of a motorway slip road. Who has priority?",
    "options": [
      "Traffic already on the motorway",
      "Every vehicle joining from the slip road",
      "Only vehicles in the middle lane",
      "Whichever driver sounds the horn"
    ],
    "correctIndex": 0,
    "explanation": "Match speed where possible and join a suitable gap without forcing motorway traffic to alter course.",
    "highwayCodeRule": "259",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-034",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You have completed an overtake on a clear motorway. Where should you go?",
    "options": [
      "Back to the left lane when safe",
      "Stay in the middle lane for convenience",
      "Remain on the right until your exit",
      "Use the hard shoulder"
    ],
    "correctIndex": 0,
    "explanation": "Keep left when not overtaking, subject to signs and traffic conditions.",
    "highwayCodeRule": "264",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-035",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "A car towing a small trailer is on a three-lane motorway. Which lane is normally prohibited?",
    "options": [
      "The right-hand lane",
      "The left-hand lane",
      "The middle lane",
      "Every lane except the hard shoulder"
    ],
    "correctIndex": 0,
    "explanation": "Vehicles towing trailers must not normally use the right-hand lane of a motorway with three or more lanes.",
    "highwayCodeRule": "265",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-036",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "Slow motorway queues move at different speeds. What may you do?",
    "options": [
      "Keep with your lane even if it passes traffic to the right",
      "Weave repeatedly to whichever lane moves faster",
      "Use the hard shoulder to jump the queue",
      "Overtake on the left by accelerating out of your lane"
    ],
    "correctIndex": 0,
    "explanation": "In congestion, keeping with your lane can mean passing a slower queue on the right; do not weave.",
    "highwayCodeRule": "268",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-037",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "A motorway hard shoulder has no sign opening it as a running lane. May you use it to pass a queue?",
    "options": [
      "No",
      "Yes, if your exit is nearby",
      "Yes, below 20 mph",
      "Yes, with hazard lights"
    ],
    "correctIndex": 0,
    "explanation": "The hard shoulder is not an extra traffic lane unless signs specifically permit its use.",
    "highwayCodeRule": "269",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-038",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You want to check a map on a motorway. Where should you stop?",
    "options": [
      "At a service area or another permitted parking place after leaving",
      "In an emergency area",
      "On the hard shoulder",
      "At the end of a slip road"
    ],
    "correctIndex": 0,
    "explanation": "Emergency stopping facilities must not be used for routine navigation breaks.",
    "highwayCodeRule": "270",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-039",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You realise you have passed your motorway exit. What should you do?",
    "options": [
      "Continue to the next exit",
      "Reverse along the hard shoulder",
      "Stop and turn across the carriageway",
      "Reverse in the left lane"
    ],
    "correctIndex": 0,
    "explanation": "Never reverse or turn around on a motorway to recover a missed exit.",
    "highwayCodeRule": "272",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-040",
    "subject": "roadRules",
    "topic": "motorways",
    "topicLabel": "Motorways",
    "question": "You leave a motorway after a long high-speed drive. What should you check?",
    "options": [
      "Your speedometer, as lower speeds may feel unusually slow",
      "Only the engine temperature",
      "Whether drivers behind want to pass",
      "Whether the road is wide enough for motorway speed"
    ],
    "correctIndex": 0,
    "explanation": "After sustained high speed, perception can be misleading. Check actual speed and the new limit.",
    "highwayCodeRule": "273",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273"
  },
  {
    "id": "dt-round2-041",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "A warning light suggests an imminent breakdown on a motorway. If possible, where is safest to stop?",
    "options": [
      "A service area designed for parking",
      "The centre lane",
      "A narrow hard shoulder in preference to services",
      "The mouth of a slip road"
    ],
    "correctIndex": 0,
    "explanation": "A designated parking location provides more protection from moving traffic than a roadside stop.",
    "highwayCodeRule": "275",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-042",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "You have stopped safely on a motorway hard shoulder. If safe to leave, which side should you use?",
    "options": [
      "The side away from moving traffic",
      "The side nearest passing vehicles",
      "Either side without checking",
      "The driver's side in every case"
    ],
    "correctIndex": 0,
    "explanation": "Get occupants away from live traffic and wait well away from the vehicle where possible.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-043",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "Your car has broken down on a motorway. Should you place a warning triangle behind it?",
    "options": [
      "No; never use a warning triangle on a motorway",
      "Yes, immediately behind the bumper",
      "Yes, in the nearest live lane",
      "Only if it is dark"
    ],
    "correctIndex": 0,
    "explanation": "Walking along a motorway to place a triangle exposes you to fast-moving traffic.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-044",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "You are trapped in a live motorway lane and cannot leave safely. What should you do?",
    "options": [
      "Keep seat belts on, use hazard lights and call 999 for police",
      "Stand behind the car to wave traffic away",
      "Walk across the carriageway",
      "Try to repair the car in the lane"
    ],
    "correctIndex": 0,
    "explanation": "If safe exit is impossible, remain belted in and seek urgent help to protect the lane.",
    "highwayCodeRule": "277",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-045",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "After a repair in an emergency area, what must you do before rejoining the motorway?",
    "options": [
      "Use the emergency telephone and follow the operator's advice",
      "Rejoin whenever a small gap appears",
      "Reverse to gain more acceleration space",
      "Wave another driver down"
    ],
    "correctIndex": 0,
    "explanation": "Contact the operator before leaving an emergency area; lane protection may be needed.",
    "highwayCodeRule": "278",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-046",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "You approach an incident on the opposite carriageway. What should you avoid?",
    "options": [
      "Staring at it and losing attention to your own lane",
      "Maintaining a safe gap",
      "Watching the traffic ahead",
      "Following signals on your carriageway"
    ],
    "correctIndex": 0,
    "explanation": "Distraction at incidents can cause further collisions, even when your carriageway is unobstructed.",
    "highwayCodeRule": "282",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-047",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "You stop to help at a collision. What comes first?",
    "options": [
      "Protect yourself and others from further danger",
      "Give everyone a drink",
      "Move every injured person immediately",
      "Stand in traffic to take photographs"
    ],
    "correctIndex": 0,
    "explanation": "Make the scene safe and summon help; avoid creating additional casualties.",
    "highwayCodeRule": "283",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-048",
    "subject": "hazardAwareness",
    "topic": "incidents",
    "topicLabel": "Incidents",
    "question": "A damaged vehicle displays a dangerous-goods warning plate. What should you do?",
    "options": [
      "Keep away and tell emergency services about the markings",
      "Touch leaking material to identify it",
      "Smoke nearby while waiting",
      "Enter the vehicle to read its cargo paperwork"
    ],
    "correctIndex": 0,
    "explanation": "Avoid contact with hazardous substances and give responders the warning information from a safe distance.",
    "highwayCodeRule": "285",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
  },
  {
    "id": "dt-round2-049",
    "subject": "vehicleSafety",
    "topic": "vehicle-loading",
    "topicLabel": "Vehicle Loading",
    "question": "You attach a roof box before a journey. What must you check?",
    "options": [
      "That it and its contents are securely fastened",
      "Only that it looks level",
      "Only that its colour matches",
      "That the rear window is covered"
    ],
    "correctIndex": 0,
    "explanation": "Loads must be secure and must not create danger. Recheck fittings as appropriate during a journey.",
    "highwayCodeRule": "98",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-050",
    "subject": "vehicleSafety",
    "topic": "vehicle-loading",
    "topicLabel": "Vehicle Loading",
    "question": "Your car is heavily loaded for a holiday. What information should guide tyre pressure?",
    "options": [
      "The manufacturer's recommendation for that load",
      "The pressure used by a neighbouring car",
      "The maximum number on every tyre regardless of vehicle advice",
      "A lower pressure to make the ride softer"
    ],
    "correctIndex": 0,
    "explanation": "Correct pressure depends on the vehicle and load; use the manufacturer's guidance.",
    "highwayCodeRule": "97",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-051",
    "subject": "vehicleSafety",
    "topic": "vehicle-loading",
    "topicLabel": "Vehicle Loading",
    "question": "What should you check before towing with your car?",
    "options": [
      "The permitted towing and loading limits",
      "Only the trailer's paintwork",
      "Only that the towball fits",
      "That the trailer is wider than the car"
    ],
    "correctIndex": 0,
    "explanation": "The car, trailer and coupling must be suitable for the load; do not exceed the relevant limits.",
    "highwayCodeRule": "98",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-052",
    "subject": "vehicleSafety",
    "topic": "vehicle-loading",
    "topicLabel": "Vehicle Loading",
    "question": "How can a heavy roof load affect a car?",
    "options": [
      "It can make handling less stable by raising the centre of gravity",
      "It always improves cornering grip",
      "It shortens the stopping distance",
      "It removes the effect of crosswinds"
    ],
    "correctIndex": 0,
    "explanation": "Loading changes handling. Keep within limits and adapt speed and manoeuvres.",
    "highwayCodeRule": "98; Annex 6",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-053",
    "subject": "vehicleSafety",
    "topic": "vehicle-loading",
    "topicLabel": "Vehicle Loading",
    "question": "A trailer begins to snake behind your car. What should you do?",
    "options": [
      "Ease off the accelerator and reduce speed gently",
      "Accelerate sharply to pull it straight",
      "Brake violently",
      "Make repeated sharp steering corrections"
    ],
    "correctIndex": 0,
    "explanation": "Abrupt inputs can worsen instability. A gentle reduction in speed helps regain control.",
    "highwayCodeRule": "98",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-054",
    "subject": "vehicleSafety",
    "topic": "vehicle-loading",
    "topicLabel": "Vehicle Loading",
    "question": "Before setting off with luggage, which view must remain usable?",
    "options": [
      "Your required view through the windows and mirrors",
      "Only the sunroof view",
      "Only a passenger's side window",
      "Only the rear-seat view"
    ],
    "correctIndex": 0,
    "explanation": "Secure luggage so it does not obstruct the driver's necessary visibility or interfere with control.",
    "highwayCodeRule": "97",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
  },
  {
    "id": "dt-round2-055",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A temporary roadworks sign conflicts with the usual route. What should you do?",
    "options": [
      "Follow the applicable temporary directions",
      "Ignore it because it is temporary",
      "Follow the most familiar route regardless",
      "Wait for another driver to decide"
    ],
    "correctIndex": 0,
    "explanation": "Temporary controls manage changed hazards and routes; they must be taken seriously.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-056",
    "subject": "roadSigns",
    "topic": "sign-shapes",
    "topicLabel": "Sign Shapes",
    "question": "A restriction sign has a supplementary plate beneath it. Why read both?",
    "options": [
      "The plate may specify when or to whom the restriction applies",
      "The plate always cancels the sign",
      "Only the plate is legally relevant",
      "The plate is only an advert"
    ],
    "correctIndex": 0,
    "explanation": "Read the sign and plate together to understand the complete restriction.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-057",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "A hatched area has a solid white boundary. When may you enter it?",
    "options": [
      "Only in an emergency",
      "Whenever overtaking a slow car",
      "Whenever the area appears empty",
      "To park for a short time"
    ],
    "correctIndex": 0,
    "explanation": "A continuous boundary prohibits entry except in an emergency; a broken boundary has different conditions.",
    "highwayCodeRule": "130",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-058",
    "subject": "roadSigns",
    "topic": "road-markings",
    "topicLabel": "Road Markings",
    "question": "The double centre lines have a broken line nearest you. When may you cross?",
    "options": [
      "If it is safe and you can complete the move before reaching a solid line on your side",
      "Whenever the other line is solid",
      "Only at night",
      "Never under any circumstances"
    ],
    "correctIndex": 0,
    "explanation": "The line nearest you governs crossing; plan the whole manoeuvre before committing.",
    "highwayCodeRule": "128",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  },
  {
    "id": "dt-round2-059",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "A green light shows but traffic blocks the space beyond the junction. What should you do?",
    "options": [
      "Wait until there is room to proceed safely",
      "Enter because green guarantees priority",
      "Sound the horn and move forward",
      "Stop in the path of crossing traffic"
    ],
    "correctIndex": 0,
    "explanation": "Green permits progress only when the route is clear; it does not make a blocked junction safe.",
    "highwayCodeRule": "176",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203"
  },
  {
    "id": "dt-round2-060",
    "subject": "roadSigns",
    "topic": "traffic-lights",
    "topicLabel": "Traffic Lights",
    "question": "An authorised officer directs you to stop while the traffic light is green. What should you do?",
    "options": [
      "Obey the officer and stop",
      "Follow the green light regardless",
      "Ignore the officer unless holding a sign",
      "Continue if the vehicle ahead moves"
    ],
    "correctIndex": 0,
    "explanation": "Directions from authorised traffic controllers must be obeyed even when ordinary signals would permit progress.",
    "highwayCodeRule": "109",
    "learnMoreUrl": "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
  }
];
