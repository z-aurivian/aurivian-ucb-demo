// Background signals — Demo Brief §11.
// Default fill: Alexion template. Overwrite per demo.

export const SIGNALS = [
  {
    agent: 'LUCA',
    timestamp: '2026-04-14T09:12:00Z',
    headline: '2 emerging NMOSD KOLs crossed the watch threshold',
    context: 'Publication cadence and congress-speaking frequency both up 40% vs. prior 6 months. Neither is currently on the NMOSD engagement list.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    agent: 'ARIA',
    timestamp: '2026-04-13T15:30:00Z',
    headline: 'Competitor (iptacopan) symposium added at EHA 2026',
    context: 'Late-breaking PNH extension data announced. No equivalent Alexion session currently scheduled in that room.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-04-12T11:00:00Z',
    headline: 'Recurrence threshold hit: infusion-burden switch hesitancy',
    context: 'Insight AI1 recorded a third source this month — now at Prioritised status. Strategy-to-Action recommends community-facing materials.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-04-10T08:45:00Z',
    headline: 'Sentiment shift: Dr. K. Rhee toward C5 sequencing in NMOSD',
    context: 'Two recent congress talks and one podcast indicate shifting preference on sequencing C5 vs. IL-6 inhibition.',
    suggestedAction: { label: 'Open KOL profile', path: '/kol' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-04-08T16:20:00Z',
    headline: 'New RWE publication on Ultomiris in gMG (Muscle & Nerve)',
    context: '12-month retention data in refractory subgroup. Relevant to MO3 (guideline alignment) and AI3.',
    suggestedAction: { label: 'Open in NOVA', path: '/insights' },
  },
];
