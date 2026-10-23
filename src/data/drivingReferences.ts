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
  'dtx-030': '211',
  'dtx-031': '85',
  'dtx-032': '86',
  'dtx-033': '97',
  'dtx-037': '98',
  'dtx-038': '99',
  'dtx-039': '100',
  'dtx-040': '98',
  'dtx-041': '126',
  'dtx-042': '126',
  'dtx-043': '126',
  'dtx-050': '109',
  'dtx-051': '161',
  'dtx-052': '149',
  'dtx-053': '150',
  'dtx-054': '162',
  'dtx-055': '165–167',
  'dtx-056': '182–183',
  'dtx-057': '172',
  'dtx-058': '170',
  'dtx-059': '188',
  'dtx-060': '200–203',
  'dtx-061': '152, 163',
  'dtx-062': '103',
  'dtx-063': '103',
  'dtx-064': '232–233',
  'dtx-065': '207',
  'dtx-066': '206',
  'dtx-068': '205, 208',
  'dtx-069': '217',
  'dtx-070': '230',
  'dtx-071': '234–236',
  'dtx-072': '234',
  'dtx-073': '227',
  'dtx-074': '227',
  'dtx-075': '237',
  'dtx-077': '243',
  'dtx-078': '238',
  'dtx-079': '238',
  'dtx-080': '239',
  'dtx-081': '253',
  'dtx-082': '259',
  'dtx-083': '270–271',
  'dtx-085': '261',
  'dtx-086': '272',
  'dtx-087': '116',
  'dtx-088': '277',
  'dtx-089': '277',
  'dtx-090': '285',
  'dtx-091': '280',
  'dtx-094': '288',
  'dtx-095': '109, 288',
  'dtx-097': '300–307',
  'dtx-099': '175',
  'dtx-100': '175',
  'dtx-101': '176',
  'dtx-102': '257',
  'dtx-103': '109',
  'dtx-104': '109',
  'dtx-105': '109',
  'dtx-106': '171',
  'dtx-107': '109',
  'dtx-108': '171, 175',
  'dtx-111': '141',
  'dtx-113': '243',
  'dtx-114': '109',

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

/** Link the displayed rule to its actual chapter, including unnumbered annexes. */
export function highwayCodeReferenceUrl(reference: string, fallback: string): string {
  const base = 'https://www.gov.uk/guidance/the-highway-code/';
  const annexes: Record<string, string> = {
    '3': 'annex-3-motor-vehicle-documentation-and-learner-driver-requirements',
    '4': 'annex-4-the-road-user-and-the-law', '5': 'annex-5-penalties',
    '6': 'annex-6-vehicle-maintenance-safety-and-security', '7': 'annex-7-first-aid-on-the-road',
    '8': 'annex-8-safety-code-for-new-drivers',
  };
  if (/^(Introduction|H[123])/.test(reference)) return base + 'introduction';
  const annex = reference.match(/^Annex (\d+)/)?.[1];
  if (annex && annexes[annex]) return base + annexes[annex];
  const rule = Number(reference.match(/^\d+/)?.[0]);
  const chapters: [number, string][] = [
    [35, 'rules-for-pedestrians-1-to-35'], [46, 'rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46'],
    [58, 'rules-about-animals-47-to-58'], [82, 'rules-for-cyclists-59-to-82'], [88, 'rules-for-motorcyclists-83-to-88'],
    [102, 'rules-for-drivers-and-motorcyclists-89-to-102'], [158, 'general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158'],
    [203, 'using-the-road-159-to-203'], [225, 'road-users-requiring-extra-care-204-to-225'],
    [237, 'driving-in-adverse-weather-conditions-226-to-237'], [252, 'waiting-and-parking-238-to-252'],
    [274, 'motorways-253-to-274'], [287, 'breakdowns-and-incidents-275-to-287'],
    [307, 'road-works-level-crossings-and-tramways-288-to-307'],
  ];
  const chapter = rule > 0 ? chapters.find(([end]) => rule <= end)?.[1] : undefined;
  return chapter ? `${base}${chapter}#rule-${rule}` : fallback;
}
