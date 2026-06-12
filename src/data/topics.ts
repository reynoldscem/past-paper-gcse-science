import type { LearningArea, Subject } from '../types';

export const topics = {
  biology: [
    { id: 'cell-biology', label: 'Cell Biology', icon: '\u{1F52C}', color: '#10b981' },
    { id: 'organisation', label: 'Organisation', icon: '\u{1FAC1}', color: '#06b6d4' },
    { id: 'infection', label: 'Infection & Response', icon: '\u{1F9A0}', color: '#f59e0b' },
    { id: 'bioenergetics', label: 'Bioenergetics', icon: '\u26A1', color: '#8b5cf6' },
    { id: 'homeostasis', label: 'Homeostasis', icon: '\u{1F321}\uFE0F', color: '#ef4444' },
    { id: 'inheritance', label: 'Inheritance & Variation', icon: '\u{1F9EC}', color: '#ec4899' },
    { id: 'ecology', label: 'Ecology', icon: '\u{1F33F}', color: '#22c55e' },
  ],
  chemistry: [
    { id: 'atomic-structure', label: 'Atoms & Periodic Table', icon: '\u269B\uFE0F', color: '#6366f1' },
    { id: 'bonding', label: 'Bonding & Structure', icon: '\u{1F517}', color: '#14b8a6' },
    { id: 'quantitative', label: 'Quantitative Chemistry', icon: '\u2696\uFE0F', color: '#f97316' },
    { id: 'chemical-changes', label: 'Chemical Changes', icon: '\u{1F9EA}', color: '#a855f7' },
    { id: 'energy-changes', label: 'Energy Changes', icon: '\u{1F525}', color: '#ef4444' },
    { id: 'rates', label: 'Rates of Reaction', icon: '\u23F1\uFE0F', color: '#0ea5e9' },
    { id: 'organic', label: 'Organic Chemistry', icon: '\u{1F6E2}\uFE0F', color: '#84cc16' },
    { id: 'analysis', label: 'Chemical Analysis', icon: '\u{1F50D}', color: '#e879f9' },
    { id: 'atmosphere', label: 'Atmosphere & Resources', icon: '\u{1F30D}', color: '#06b6d4' },
  ],
  physics: [
    { id: 'energy-phys', label: 'Energy', icon: '\u{1F4A1}', color: '#eab308' },
    { id: 'electricity', label: 'Electricity', icon: '\u{1F50C}', color: '#3b82f6' },
    { id: 'particle-model', label: 'Particle Model', icon: '\u{1F9CA}', color: '#8b5cf6' },
    { id: 'atomic-structure-phys', label: 'Atomic Structure', icon: '\u2622\uFE0F', color: '#f43f5e' },
    { id: 'forces', label: 'Forces', icon: '\u{1F3CB}\uFE0F', color: '#10b981' },
    { id: 'waves', label: 'Waves', icon: '\u{1F30A}', color: '#0ea5e9' },
    { id: 'electromagnetism', label: 'Electromagnetism', icon: '\u{1F9F2}', color: '#d946ef' },
  ],
  roadRules: [
    { id: 'highway-code', label: 'Highway Code', icon: '\u{1F6E3}\uFE0F', color: '#0ea5e9' },
    { id: 'junctions-roundabouts', label: 'Junctions & Roundabouts', icon: '\u{1F501}', color: '#22c55e' },
    { id: 'motorways', label: 'Motorways', icon: '\u{1F6E3}\uFE0F', color: '#6366f1' },
    { id: 'weather-parking', label: 'Weather & Parking', icon: '\u{1F326}\uFE0F', color: '#f59e0b' },
  ],
  roadSigns: [
    { id: 'sign-shapes', label: 'Sign Shapes', icon: '\u{1F6A7}', color: '#ef4444' },
    { id: 'traffic-lights', label: 'Traffic Lights', icon: '\u{1F6A6}', color: '#84cc16' },
    { id: 'road-markings', label: 'Road Markings', icon: '\u{1F6D1}', color: '#14b8a6' },
  ],
  hazardAwareness: [
    { id: 'vulnerable-road-users', label: 'Vulnerable Road Users', icon: '\u{1F6B6}', color: '#ec4899' },
    { id: 'stopping-distances', label: 'Stopping Distances', icon: '\u23F1\uFE0F', color: '#f97316' },
    { id: 'incidents', label: 'Breakdowns & Incidents', icon: '\u{1F9EF}', color: '#a855f7' },
  ],
  vehicleSafety: [
    { id: 'vehicle-condition', label: 'Vehicle Condition', icon: '\u{1F697}', color: '#06b6d4' },
    { id: 'documents-loading', label: 'Documents & Loading', icon: '\u{1F4C4}', color: '#eab308' },
    { id: 'seat-belts', label: 'Seat Belts & Restraints', icon: '\u{1FA91}', color: '#10b981' },
  ],
} as const;

export const subjectMeta = {
  biology: { label: 'Biology', icon: '\u{1F52C}', color: '#10b981', bgGlow: 'rgba(16, 185, 129, 0.15)' },
  chemistry: { label: 'Chemistry', icon: '\u{1F9EA}', color: '#7c3aed', bgGlow: 'rgba(124, 58, 237, 0.15)' },
  physics: { label: 'Physics', icon: '\u26A1', color: '#3b82f6', bgGlow: 'rgba(59, 130, 246, 0.15)' },
  roadRules: { label: 'Road Rules', icon: '\u{1F6E3}\uFE0F', color: '#0ea5e9', bgGlow: 'rgba(14, 165, 233, 0.15)' },
  roadSigns: { label: 'Road Signs', icon: '\u{1F6A7}', color: '#ef4444', bgGlow: 'rgba(239, 68, 68, 0.15)' },
  hazardAwareness: { label: 'Hazard Awareness', icon: '\u26A0\uFE0F', color: '#f59e0b', bgGlow: 'rgba(245, 158, 11, 0.15)' },
  vehicleSafety: { label: 'Vehicle Safety', icon: '\u{1F697}', color: '#14b8a6', bgGlow: 'rgba(20, 184, 166, 0.15)' },
} as const;

export const learningAreaMeta = {
  science: {
    label: 'Science',
    shortLabel: 'Science',
    description: 'GCSE Foundation Biology, Chemistry and Physics',
    icon: '\u{1F52D}',
    color: '#7c3aed',
  },
  drivingTheory: {
    label: 'UK Driving Theory',
    shortLabel: 'Driving Theory',
    description: 'Car theory test revision from official GOV.UK source material',
    icon: '\u{1F698}',
    color: '#0ea5e9',
  },
} as const satisfies Record<LearningArea, {
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
  color: string;
}>;

export const subjectsByLearningArea = {
  science: ['biology', 'chemistry', 'physics'],
  drivingTheory: ['roadRules', 'roadSigns', 'hazardAwareness', 'vehicleSafety'],
} as const satisfies Record<LearningArea, readonly Subject[]>;

export const subjectLearningArea = Object.fromEntries(
  Object.entries(subjectsByLearningArea).flatMap(([area, subjects]) =>
    subjects.map(subject => [subject, area]),
  ),
) as Record<Subject, LearningArea>;

export const subjectOrder = Object.values(subjectsByLearningArea).flat() as Subject[];
