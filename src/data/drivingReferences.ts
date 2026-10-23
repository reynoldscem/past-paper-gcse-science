import type { Question } from '../types';

// Existing question IDs and history are preserved. Broad questions cite the relevant rule range.
const references: Record<string, string> = {
  'highway-code': '103–158', 'junctions-roundabouts': '159–203', motorways: '253–274',
  'weather-parking': '226–252', 'sign-shapes': '109', 'traffic-lights': '175–176',
  'road-markings': '127–141, 174, 238–247', 'vulnerable-road-users': '204–225',
  'stopping-distances': '126', incidents: '275–287; Annex 7',
  'vehicle-condition': '89–96; Annex 6', 'documents-loading': '98; Annex 3', 'seat-belts': '99–102',
};
const specific: Record<string, string> = {
  'dtx-001':'H1', 'dtx-002':'H2', 'dtx-003':'H3', 'dtx-004':'H1', 'dtx-005':'Introduction',
  'dtx-006':'Introduction: self-driving vehicles', 'dtx-007':'2', 'dtx-008':'7', 'dtx-009':'19, 195',
  'dtx-010':'22', 'dtx-011':'25', 'dtx-012':'34', 'dtx-013':'14', 'dtx-014':'208',
  'dtx-015':'36–46', 'dtx-016':'39', 'dtx-017':'204', 'dtx-018':'204',
  'dtx-019':'215', 'dtx-020':'215', 'dtx-021':'50', 'dtx-022':'214',
  'dtx-023':'67', 'dtx-024':'72', 'dtx-025':'186', 'dtx-026':'60', 'dtx-027':'239', 'dtx-028':'66',
  'dtx-029':'83', 'dtx-034':'92', 'dtx-035':'96', 'dtx-036':'95',
  'dtx-044':'113–115', 'dtx-045':'114, 226', 'dtx-046':'236', 'dtx-047':'110', 'dtx-048':'112',
  'dtx-049':'159', 'dtx-067':'163', 'dtx-076':'249', 'dtx-084':'258',
  'dtx-092':'Annex 7', 'dtx-093':'Annex 7', 'dtx-096':'293', 'dtx-098':'293',
  'dtx-109':'191', 'dtx-110':'174', 'dtx-112':'140',
  'dtx-115':'Annex 3', 'dtx-116':'Annex 3', 'dtx-117':'Annex 3', 'dtx-118':'Annex 8',
  'dtx-119':'Annex 5', 'dtx-120':'Annex 6', 'dtx-121':'Annex 6', 'dtx-122':'Annex 6', 'dtx-123':'239; Annex 6',
  'dtx-124':'Annex 4', 'dtx-125':'286–287', 'dtx-126':'Annex 8',
  'dt-road-rules-001':'Introduction', 'dt-road-rules-002':'H1', 'dt-road-rules-003':'H2, 170',
};
export function withDrivingReference(question: Question): Question {
  return { ...question, highwayCodeRule: specific[question.id] ?? references[question.topic] };
}
