const code = 'https://www.gov.uk/guidance/the-highway-code/';
const care = `${code}road-users-requiring-extra-care-204-to-225`;
const general = `${code}general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158`;
const road = `${code}using-the-road-159-to-203`;
const weather = `${code}driving-in-adverse-weather-conditions-226-to-237`;
const cues = [
  ['Pedestrians', 'Watch kerbs, crossings and gaps between vehicles. Someone stepping into your path means you may need to slow or stop.', '205–207, 195', care, road],
  ['Cyclists and motorcyclists', 'Look for riders hidden by traffic or approaching junctions. A cyclist moving out around a drain or parked car may need more room.', '211–213', care],
  ['Junctions', 'Check side roads and obscured entrances. A vehicle edging into your path or turning across you may require braking.', '170–172', road],
  ['Parked vehicles', 'Look for occupants, opening doors, indicators and wheels moving. A stationary car is a potential hazard; pulling into your path makes it develop.', '152, 163', general, road],
  ['Buses and large vehicles', 'Watch a bus signalling to leave its stop, passengers crossing and wide turns. Keep enough distance to see beyond large vehicles.', '221–223', care],
  ['Children', 'Scan near schools, ice cream vans and parked cars. A child approaching or running into the road can require an immediate response.', '205–209', care],
  ['Weather', 'Rain, ice, spray and fog reduce grip or visibility. Watch for traffic braking ahead, standing water and riders buffeted by wind; allow more stopping space.', '226–235', weather],
  ['Road layout', 'Look ahead for bends, lane closures, narrow gaps and queues. A vehicle moving into your lane or stopping beyond a bend may force you to slow.', '146, 151', general],
  ['Country roads', 'Blind bends can conceal tractors, horses and walkers. Approach within the distance you can see to be clear; watch for animals or traffic entering your path.', '154–155, 214–215', general, care],
  ['Night', 'Use lights and silhouettes to spot movement. Watch for unlit road users and vehicles beyond the reach of headlights; reduce speed when visibility is limited.', '114–115', general],
];
export function HazardGuide() {
  return <div className="space-y-6 leading-relaxed">
    <section className="glass-card rounded-2xl p-6 space-y-3">
      <h2 className="text-2xl font-bold">How the car test works</h2>
      <p>After a tutorial, you watch 14 clips. There are 15 scoring hazards: one clip contains two. Each hazard earns 0–5 points, for a maximum of 75. The hazard perception pass mark is 44/75; you must also pass the multiple-choice part.</p>
      <p>Each developing hazard has a scoring window. An early response within it earns more points (5 down to 1); outside it, a click earns no points for that hazard. Spotting a possible risk before it develops is useful anticipation, but that click may be too early to score.</p>
      <p>A wrong click does not deduct points. Continuous or patterned clicking can give you zero for the entire clip: the test checks recognition, so do not use a rhythm or click repeatedly to cover the window. There is no published “safe click count”. You cannot replay clips or revise responses.</p>
      <p className="text-sm"><a className="underline" href="https://www.gov.uk/theory-test/hazard-perception-test">GOV.UK: test and scoring</a> · <a className="underline" href="https://www.gov.uk/theory-test/pass-mark-and-result">Official pass marks</a></p>
    </section>
    <section className="glass-card rounded-2xl p-6 space-y-3">
      <h2 className="text-2xl font-bold">Potential → developing hazard</h2>
      <p>A developing hazard would make you change speed or direction. A person on the pavement is a potential risk. If they begin walking into your path, the situation develops: you would need to respond. Look for the change, not just the presence of an object.</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Scan:</strong> look ahead and across the whole scene, including side roads and the edges of parked vehicles.</li>
        <li><strong>Anticipate:</strong> ask what could enter your path or make traffic slow. Highway Code rules 146 and 160 support looking ahead and adapting to conditions.</li>
        <li><strong>Respond:</strong> click as soon as you see the hazard beginning to develop. Do not wait for an emergency. If you clicked at a potential risk, respond naturally again when it actually develops; do not follow a fixed clicking pattern.</li>
        <li><strong>Keep watching:</strong> click again if a second hazard develops. Stay focused until the clip ends.</li>
        <li><strong>Review practice:</strong> identify the first visible cue and whether you clicked too early, too late, or missed it. Practise unfamiliar scenes as well as repeats.</li>
      </ol>
      <p className="text-sm"><a className="underline" href={general}>Rule 146</a> · <a className="underline" href={road}>Rule 160</a></p>
    </section>
    <section><h2 className="text-2xl font-bold mb-4">Hazard types and cues</h2>
      <div className="grid sm:grid-cols-2 gap-4">{cues.map(([title, text, rules, url, second]) => <article key={title} className="glass-card rounded-2xl p-5 space-y-2">
        <h3 className="font-bold text-lg">{title}</h3><p>{text}</p>
        <p className="text-sm"><a className="underline" href={url}>Highway Code rules {rules}</a>{second && <> · <a className="underline" href={second}>Related rules</a></>}</p>
      </article>)}</div>
      <p className="text-sm text-navy-300 mt-3">These are learning examples, not a list of guaranteed scoring hazards. Rule references checked against GOV.UK on 23 October 2026.</p>
    </section>
    <section className="glass-card rounded-2xl p-6 space-y-3">
      <h2 className="text-2xl font-bold">Practise on PC in your browser</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><a className="underline" href="https://toptests.co.uk/practice-hazard-perception-test/">TopTests — free browser hazard perception practice</a>. Select “Start Now”. This third-party practice uses its own interaction rules; follow the GOV.UK guidance above for the real test.</li>
        <li><a className="underline" href="https://www.drivingtheory4all.co.uk/free-hazard-perception-test">Driving Theory 4 All — free online hazard perception test</a>. Choose the car test. The provider advertises free practice without payment details; paid packages are listed separately.</li>
      </ul>
      <p>Use a mouse to practise on PC, then record the displayed score and source below. Choose “Full test / 75” only when the result is actually out of 75; otherwise record each clip with its stated maximum.</p>
      <p className="text-sm text-navy-300">Both practice pages loaded when checked on 23 October 2026. Embedded video playback has not been tested.</p>
      <h3 className="text-xl font-bold">Official resources</h3>
      <p><a className="underline" href="https://www.gov.uk/take-practice-theory-test">GOV.UK free practice resources</a> links to three free hazard perception clips hosted on <a className="underline" href="https://www.safedrivingforlife.info/free-practice-tests/hazard-perception-test/">Safe Driving for Life (DVSA)</a>, not on GOV.UK itself.</p>
      <p>Three clips help you learn the format; they are not a full 75-point test. Log each clip separately below. For full practice tests, use the <a className="underline" href="https://www.gov.uk/theory-test/revision-and-practice">official DVSA revision products</a> (paid options). Return here to record your result and the cues you missed.</p>
    </section>
  </div>;
}
