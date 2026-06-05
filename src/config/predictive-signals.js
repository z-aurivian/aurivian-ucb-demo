// Predictive Signals — Command Center & NOVA.
// Replaces the simpler "New Signals" feed. Each signal carries an agent
// attribution (which agent surfaced it) plus trajectory / confidence /
// time-to-impact framing borrowed from the Alexion Momentum Indicators
// pattern.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const PREDICTIVE_SIGNALS = [
  {
    id: 'ps-1',
    agent: 'NOVA',
    signal: 'Biosimilar formulary displacement accelerating',
    currentState: 'Three major US PBMs have excluded originator Soliris from 2026 national formularies. EU5 markets show 35% biosimilar penetration in new patient starts.',
    trajectory: 'rising',
    timeToImpact: '0–6 months',
    confidence: 'high',
    requiredAction: 'Accelerate Soliris→Ultomiris conversion outreach to prescribers managing stable patients at risk of forced biosimilar switching.',
    suggestedAction: { label: 'Open in NOVA', path: '/insights' },
  },
  {
    id: 'ps-2',
    agent: 'ARIA',
    signal: 'Competitor symposium added at EHA 2026 (iptacopan)',
    currentState: 'Late-breaking PNH extension data announced. No equivalent Alexion session currently scheduled in that room.',
    trajectory: 'rising',
    timeToImpact: '0–3 months',
    confidence: 'high',
    requiredAction: 'Brief MSL team before session. Prepare response talking points and an evidence one-pager.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    id: 'ps-3',
    agent: 'LUCA',
    signal: 'Sentiment shift: Dr. K. Rhee toward C5 sequencing in NMOSD',
    currentState: 'Two recent congress talks and one podcast indicate shifting preference on sequencing C5 vs IL-6 inhibition.',
    trajectory: 'rising',
    timeToImpact: '3–6 months',
    confidence: 'medium',
    requiredAction: 'Schedule scientific exchange focused on C5 sequencing data; prepare advisory board invitation.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    id: 'ps-4',
    agent: 'NOVA',
    signal: 'Recurrence threshold hit: infusion-burden switch hesitancy',
    currentState: 'Insight AI1 recorded a third source this month — now at Prioritised status. Strategy-to-Action recommends community-facing switching materials.',
    trajectory: 'rising',
    timeToImpact: '3–6 months',
    confidence: 'high',
    requiredAction: 'Approve patient-facing switching one-pager; deploy community KIT to MSL field team.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    id: 'ps-5',
    agent: 'LUCA',
    signal: '2 emerging NMOSD KOLs crossed the watch threshold',
    currentState: 'Publication cadence and congress-speaking frequency both up 40% vs prior 6 months. Neither is currently on the NMOSD engagement list.',
    trajectory: 'rising',
    timeToImpact: '3–6 months',
    confidence: 'medium',
    requiredAction: 'Add to LUCA watch list; assign MSL for initial outreach.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
];
