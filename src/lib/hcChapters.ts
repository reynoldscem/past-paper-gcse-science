import type { Question } from '../types';

export interface HcChapter {
  id: string;
  label: string;
  /** Inclusive rule-number range in the current Highway Code. */
  rules?: [number, number];
  /** hcChapter slugs (gov.uk page names) that belong here. */
  slugs?: string[];
}

export const hcChapters: HcChapter[] = [
  { id: 'pedestrians', label: 'Pedestrians (1–35)', rules: [1, 35] },
  { id: 'mobility', label: 'Wheelchairs & mobility scooters (36–46)', rules: [36, 46] },
  { id: 'animals', label: 'Animals (47–58)', rules: [47, 58] },
  { id: 'cyclists', label: 'Cyclists (59–82)', rules: [59, 82] },
  { id: 'motorcyclists', label: 'Motorcyclists (83–88)', rules: [83, 88] },
  { id: 'drivers', label: 'Drivers & motorcyclists (89–102)', rules: [89, 102] },
  { id: 'general', label: 'General rules (103–158)', rules: [103, 158] },
  { id: 'using-road', label: 'Using the road (159–203)', rules: [159, 203] },
  { id: 'extra-care', label: 'Road users needing extra care (204–225)', rules: [204, 225] },
  { id: 'weather', label: 'Adverse weather (226–237)', rules: [226, 237] },
  { id: 'parking', label: 'Waiting & parking (238–252)', rules: [238, 252] },
  { id: 'motorways', label: 'Motorways (253–274)', rules: [253, 274] },
  { id: 'incidents', label: 'Breakdowns & incidents (275–287)', rules: [275, 287] },
  { id: 'roadworks', label: 'Road works, level crossings, trams (288–307)', rules: [288, 307] },
  { id: 'lights-signals', label: 'Light signals & signals', slugs: ['light-signals-controlling-traffic', 'signals-to-other-road-users', 'signals-by-authorised-persons'] },
  { id: 'signs', label: 'Traffic signs', slugs: ['traffic-signs'] },
  { id: 'markings', label: 'Road & vehicle markings', slugs: ['road-markings', 'vehicle-markings'] },
  { id: 'annexes', label: 'Annexes' },
];

const bySlug = new Map<string, string>();
for (const c of hcChapters) for (const s of c.slugs ?? []) bySlug.set(s, c.id);

/** Chapter id for a question, from its hcChapter slug or the first rule number it cites. */
export function chapterOf(q: Question): string | null {
  if (q.hcChapter) {
    const fromSlug = bySlug.get(q.hcChapter);
    if (fromSlug) return fromSlug;
    if (q.hcChapter.startsWith('annex')) return 'annexes';
  }
  const rule = q.highwayCodeRule;
  if (!rule) return null;
  if (/^annex/i.test(rule)) return 'annexes';
  const n = parseInt(rule.match(/\d+/)?.[0] ?? '', 10);
  if (!Number.isFinite(n)) return null;
  return hcChapters.find(c => c.rules && n >= c.rules[0] && n <= c.rules[1])?.id ?? null;
}
