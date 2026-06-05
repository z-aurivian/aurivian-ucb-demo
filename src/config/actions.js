// Proposed actions — UCB demo.
// Actions flow from the MA impact gap (AI1, AI4) and HS field insights (AI2, AI3).

export const ACTIONS = [
  { id: 'A1', title: 'Deploy VEGA MA impact dashboard for next quarterly leadership review', fromInsightRef: 'AI1', moRef: 'MO2', owner: 'Medical Affairs Ops', dueBy: '2026-Q3', status: 'Started', strategyImpact: 'Confirmed' },
  { id: 'A2', title: 'Define and instrument 3 MA outcome metrics: alignment velocity, insight conversion, scientific exchange quality', fromInsightRef: 'AI1', moRef: 'MO2', owner: 'Medical Affairs Ops', dueBy: '2026-Q3', status: 'Accepted', strategyImpact: 'Changed' },
  { id: 'A3', title: 'Develop prior-auth support one-pager for Bimzelx in biologic-naïve HS (payer-facing)', fromInsightRef: 'AI2', moRef: 'MO1', owner: 'Field Medical', dueBy: '2026-Q3', status: 'Started', strategyImpact: 'Confirmed' },
  { id: 'A4', title: 'Commission payer landscape analysis on HS step therapy requirements across US and EU5', fromInsightRef: 'AI2', moRef: 'MO1', owner: 'HEOR', dueBy: '2026-Q4', status: 'Proposed', strategyImpact: null },
  { id: 'A5', title: 'Develop patient-case-led IL-17A/F differentiation materials for community dermatologists', fromInsightRef: 'AI3', moRef: 'MO4', owner: 'Medical Comms', dueBy: '2026-Q3', status: 'Proposed', strategyImpact: null },
  { id: 'A6', title: 'Establish weekly insight triage cadence: route high-recurrence insights to action owners within 10 days', fromInsightRef: 'AI4', moRef: 'MO2', owner: 'Medical Affairs Ops', dueBy: '2026-Q2', status: 'Accepted', strategyImpact: 'Confirmed' },
  { id: 'A7', title: 'Build tier-1 neurology KOL list for seizure pipeline: 14 identified candidates need outreach plan', fromInsightRef: 'AI5', moRef: 'MO5', owner: 'Field Medical', dueBy: '2026-Q4', status: 'Proposed', strategyImpact: null },
];
