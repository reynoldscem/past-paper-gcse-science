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
} as const;

export const subjectMeta = {
  biology: { label: 'Biology', icon: '\u{1F52C}', color: '#10b981', bgGlow: 'rgba(16, 185, 129, 0.15)' },
  chemistry: { label: 'Chemistry', icon: '\u{1F9EA}', color: '#7c3aed', bgGlow: 'rgba(124, 58, 237, 0.15)' },
  physics: { label: 'Physics', icon: '\u26A1', color: '#3b82f6', bgGlow: 'rgba(59, 130, 246, 0.15)' },
} as const;
