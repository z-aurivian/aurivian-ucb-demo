// VEGA — Strategic Analytics agent.
// Implements the "must-have" measures from the Aurivian extended analytics
// document (Vision Doc, Strategic Analytics, Section 5).
//
// Default fill: Alexion (template example). Overwrite per demo.

// 1.1 HCP Awareness Progression — movement of HCPs along the awareness ladder.
export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '37% of HCPs achieving sustained practice change vs 22% industry average — +68% outperformance. Slowest conversion: Knowledgeable → Intent (68%, avg 47 days). Primary blocker: reimbursement barriers. Recommended action: expedite reimbursement support tools for MSL deployment.',
  stages: [
    { stage: 'Sustained practice change', hcps: 546,  pctTotal: 37, vsQ4: '+12%' },
    { stage: 'Actively changing practice', hcps: 613,  pctTotal: 42, vsQ4: '+8%'  },
    { stage: 'Intent to change',           hcps: 863,  pctTotal: 59, vsQ4: '+5%'  },
    { stage: 'Knowledgeable',              hcps: 1269, pctTotal: 87, vsQ4: '+4%'  },
    { stage: 'Aware only',                 hcps: 436,  pctTotal: 30, vsQ4: '-14%' },
  ],
};

// 1.2 Interaction Quality vs Quantity — by MSL/Region.
export const VEGA_INTERACTION_QUALITY = {
  insight: 'James T shows high interaction volume but low quality — conversations are not generating usable insights or HCP stage progression. Likely cause: off-KIQ conversations. Recommended: targeted KIQ briefing and joint field visit. Priya K shows both volume and quality gaps — regional manager review recommended.',
  rows: [
    { msl: 'Sarah M',  region: 'London',     interactions: 47, vsTarget: '+5%',  quality: 8.7, insightRate: 81, overall: 'Excellent' },
    { msl: 'James T',  region: 'Midlands',   interactions: 52, vsTarget: '+16%', quality: 6.1, insightRate: 44, overall: 'Quality gap' },
    { msl: 'Anna R',   region: 'North',      interactions: 38, vsTarget: '-15%', quality: 9.1, insightRate: 92, overall: 'Volume gap' },
    { msl: 'David L',  region: 'Scotland',   interactions: 41, vsTarget: '+2%',  quality: 8.4, insightRate: 78, overall: 'On track' },
    { msl: 'Priya K',  region: 'South West', interactions: 29, vsTarget: '-36%', quality: 5.2, insightRate: 31, overall: 'Needs support' },
  ],
};

// 1.3 Engagement Gap Tracker — Tier 1/2 KOLs not contacted within window.
export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. James Okonkwo', tier: 'Tier 2', lastContact: '2025-03-12', gap: '6 weeks', action: 'Re-engage urgently' },
  { kol: 'Prof. Linda Walsh', tier: 'Tier 1', lastContact: '2025-03-28', gap: '4 weeks', action: 'Schedule soon' },
  { kol: 'Dr. Ahmed Hassan',  tier: 'Tier 2', lastContact: '2025-04-02', gap: '3 weeks', action: 'Plan interaction' },
  { kol: 'Dr. Yuki Tanaka',   tier: 'Tier 1', lastContact: '2025-04-14', gap: '1 week',  action: 'On track' },
];

// 2.1 Share of Scientific Voice — vs competitors.
export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Social and digital share of voice declining (-3pts) while Competitor B is growing (+7pts). Recommend reviewing digital scientific communication strategy.',
  rows: [
    { source: 'Congress abstracts (CROI 2025)', us: '38%',  compA: '28%', compB: '22%', compC: '12%', trend: 'up' },
    { source: 'Peer-reviewed publications (12m)', us: '34%', compA: '31%', compB: '24%', compC: '11%', trend: 'flat' },
    { source: 'KOL active endorsements',         us: '41%',  compA: '24%', compB: '26%', compC: '9%',  trend: 'up' },
    { source: 'Citation index (vs competitors)', us: '2.3×', compA: '1.8×', compB: '1.4×', compC: '0.9×', trend: 'up' },
    { source: 'Social / digital mentions',       us: '22%',  compA: '19%', compB: '34%', compC: '25%', trend: 'down' },
  ],
};

// 2.2 KOL Sentiment Velocity — rate-of-change of alignment.
export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Prof. Sarah Mitchell', score: 89, change30d: '+4.2', velocity: '+1.1 ↑↑', interpretation: 'Positive acceleration — advisory board candidate' },
  { kol: 'Dr. James Okonkwo',    score: 61, change30d: '-3.8', velocity: '-1.4 ↓↓', interpretation: 'Worsening faster — urgent re-engagement, risk of competitor capture' },
  { kol: 'Dr. Linda Walsh',      score: 77, change30d: '+1.2', velocity: '-0.6 ⚠',  interpretation: 'Momentum slowing — still improving but decelerating' },
  { kol: 'Prof. Ahmed Hassan',   score: 82, change30d: '+2.1', velocity: '+0.3 ↑',  interpretation: 'Steady positive — maintain current cadence' },
];

// 4.1 Care Gap Closure Tracking — patient-level outcome of MA activity.
export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'Biomarker testing rate',   linkedMO: 'MO1',     baseline: '34%',     current: '57% (+23pts)',  patientsImpacted: '2,340 additional patients tested' },
  { gap: 'Time to treatment',        linkedMO: 'MO1+2',   baseline: '28 days', current: '21 days (-7d)', patientsImpacted: '1,567 patients faster treatment' },
  { gap: 'Appropriate pt. selection', linkedMO: 'MO2',    baseline: '23% off', current: '12% off (-11pts)', patientsImpacted: '890 patients better selected' },
];

// 4.2 ROMI — financial framing.
export const VEGA_ROMI = {
  netValueCreated: '£15.2M',
  roiPct: '185%',
  returnPerPound: '£2.85',
  rows: [
    { category: 'Prescription growth attributed to MA', value: '£12.4M', methodology: 'HCPs with high MA engagement show 2.1× higher prescribing — difference-in-difference analysis' },
    { category: 'Health system efficiency (avoided costs)', value: '£4.2M', methodology: 'Reduced treatment delays, better patient selection, fewer prior authorisation denials' },
    { category: 'Competitive revenue protection', value: '£6.8M', methodology: 'Estimated prescribing prevented from switching to competitors' },
    { category: 'Total investment', value: '-£8.2M', methodology: 'Full Medical Affairs budget — field team, advisory boards, congress, content' },
  ],
};

// 4.3 Medical Affairs Impact Index — composite executive headline metric.
export const VEGA_IMPACT_INDEX = {
  overall: 82,
  vsQ4: '+7',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',     score: 87, commentary: 'Above target — field interactions, content, advisory boards all exceeding benchmarks' },
    { dim: 'External ecosystem impact', score: 84, commentary: '+21% KOL network expansion, +18% total HCP engagement, share of voice up to 38%' },
    { dim: 'HCP practice change',      score: 81, commentary: '37% sustained change vs 22% industry average — strong outperformance' },
    { dim: 'Patient care gap closure', score: 79, commentary: 'Biomarker testing +23pts, treatment delay -7 days, appropriate selection +11pts' },
    { dim: 'Internal ecosystem impact', score: 78, commentary: 'Clinical Development collaboration below potential — key improvement opportunity' },
  ],
};
