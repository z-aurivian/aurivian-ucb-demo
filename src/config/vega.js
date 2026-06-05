// VEGA — Strategic Analytics agent — UCB demo.
// MA impact measurement is the headline VEGA story — MO2 Gap drives the demo narrative.
// All data processed within UCB sovereign cloud (Azure) — no data leaves the UCB-managed tenancy.

export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '31% of target HCPs achieving sustained practice change vs 22% industry average — +41% outperformance. Slowest conversion: Knowledgeable → Intent (54%, avg 68 days). Primary blocker: biologic prior authorisation step-therapy requirements at community dermatology. Recommended action: deploy payer navigation resource kit to community dermatology and rheumatology networks.',
  stages: [
    { stage: 'Sustained practice change', hcps: 418,  pctTotal: 31, vsQ4: '+8%'  },
    { stage: 'Actively changing practice', hcps: 512,  pctTotal: 38, vsQ4: '+10%' },
    { stage: 'Intent to change',           hcps: 729,  pctTotal: 54, vsQ4: '+6%'  },
    { stage: 'Knowledgeable',              hcps: 1047, pctTotal: 77, vsQ4: '+4%'  },
    { stage: 'Aware only',                 hcps: 389,  pctTotal: 29, vsQ4: '-9%'  },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Marcus V shows high interaction volume but the lowest insight capture rate on the team — MSL conversations are not generating documented insights. This is a direct contributor to the 31% insight-to-action conversion rate vs the 60% target that defines the MO2 Gap. Recommended: deploy MA impact measurement training and structured insight capture template to full field team.',
  rows: [
    { msl: 'Sophie L',   region: 'UK / Nordics',    interactions: 49, vsTarget: '+9%',  quality: 8.8, insightRate: 79, overall: 'Excellent'     },
    { msl: 'Marcus V',   region: 'DACH',             interactions: 56, vsTarget: '+19%', quality: 5.8, insightRate: 24, overall: 'Quality gap'   },
    { msl: 'Celine M',   region: 'France / Benelux', interactions: 41, vsTarget: '-3%',  quality: 8.3, insightRate: 72, overall: 'Volume gap'    },
    { msl: 'Rafael G',   region: 'Southern EU',      interactions: 44, vsTarget: '+6%',  quality: 8.0, insightRate: 68, overall: 'On track'      },
    { msl: 'Anika H',    region: 'US Northeast',     interactions: 31, vsTarget: '-24%', quality: 6.2, insightRate: 38, overall: 'Needs support' },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. Christos Zouboulis', tier: 'Tier 1', lastContact: '2026-04-07', gap: '8 weeks', action: 'Re-engage urgently — competitor co-authorship detected; alignment divergence risk' },
  { kol: 'Dr. Solomon Moshé',      tier: 'Tier 1', lastContact: '2026-04-21', gap: '6 weeks', action: 'Re-engage with seizure pipeline science brief before AES 2026' },
  { kol: 'Dr. Philip Mease',       tier: 'Tier 2', lastContact: '2026-05-05', gap: '4 weeks', action: 'Schedule PsA IL-17A/F RWE co-publication discussion before ACR 2026' },
  { kol: 'Dr. Laura Coates',       tier: 'Tier 1', lastContact: '2026-05-26', gap: '1 week',  action: 'On track — GRAPPA guideline engagement and EULAR 2026 session planned' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Bimzelx HS share of voice is dominant (71%) following EADV 2025. In PsA and plaque psoriasis, Cosentyx (Novartis) still leads at 44% vs Bimzelx 38%. IL-17F contribution debate is growing +28pts in 90 days. Recommend prioritising IL-17A/F differentiation content co-creation with Lebwohl and Thaçi ahead of AAD 2026.',
  rows: [
    { source: 'Congress abstracts (AAD/EADV 2025)',    us: '48%', compA: '29%', compB: '16%', compC: '7%',  trend: 'up'   },
    { source: 'Peer-reviewed publications (12m)',      us: '39%', compA: '33%', compB: '20%', compC: '8%',  trend: 'up'   },
    { source: 'KOL active endorsements (HS)',          us: '71%', compA: '14%', compB: '10%', compC: '5%',  trend: 'up'   },
    { source: 'X / LinkedIn mentions (PsO/PsA)',       us: '38%', compA: '44%', compB: '13%', compC: '5%',  trend: 'flat' },
    { source: 'Patient advocacy (HS communities)',     us: '54%', compA: '22%', compB: '16%', compC: '8%',  trend: 'up'   },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Gregor Jemec',       score: 91, change30d: '+2.4', velocity: '+0.9 ↑↑', interpretation: 'Strongly positive — HS global KOL; advisory board anchor for RWE programme' },
  { kol: 'Christos Zouboulis', score: 53, change30d: '-8.8', velocity: '-2.1 ↓↓', interpretation: 'Worsening fast — competitor co-authorship signal; re-engage urgently with Bimzelx HS data' },
  { kol: 'Iain McInnes',       score: 87, change30d: '+1.8', velocity: '+0.6 ↑',  interpretation: 'Steady positive — IL-17 immunobiology alignment strong; EULAR 2026 symposia anchor' },
  { kol: 'Mark Lebwohl',       score: 89, change30d: '+1.2', velocity: '+0.4 ↑',  interpretation: 'Stable — primary US psoriasis KOL; IL-17A/F differentiation positioning well-aligned' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'Bimzelx awareness among community dermatologists (HS)', linkedMO: 'MO1', baseline: '22%',     current: '44% (+22pts)',    patientsImpacted: '~390 additional HS patients accessing biologic therapy' },
  { gap: 'Time to Bimzelx HS treatment (diagnosis → biologic Rx)', linkedMO: 'MO1', baseline: '14.2 wks', current: '10.8 wks (-3.4w)', patientsImpacted: '~210 patients receiving earlier effective treatment' },
  { gap: 'MA insight-to-action conversion rate',                    linkedMO: 'MO2', baseline: '18%',     current: '31% (+13pts)',    patientsImpacted: 'Internal metric — 89 additional insights converted to documented MA actions this quarter' },
];

export const VEGA_ROMI = {
  netValueCreated: '$19.7M',
  roiPct: '+221%',
  returnPerPound: '$3.21',
  rows: [
    { category: 'Bimzelx HS prescription growth attributed to MA',       value: '$11.8M', methodology: 'HCPs with high MSL engagement show 2.5× higher Bimzelx HS prescribing — difference-in-difference vs matched controls' },
    { category: 'IL-17A/F differentiation — share of voice premium',     value: '$4.1M',  methodology: 'Bimzelx retained at premium formulary position in 3 major EU payers vs IL-17A-only step-therapy; avg revenue per position maintained' },
    { category: 'MA impact measurement uplift (MO2 improvement)',        value: '$7.2M',  methodology: 'Projected value of closing insight-to-action gap from 31% to 60% — additional insights converted to MSL actions x average prescribing impact per action' },
    { category: 'Total MA investment',                                    value: '-$4.6M', methodology: 'Full Medical Affairs budget — field team, advisory boards, congress, scientific exchange, content (run within UCB Azure sovereign cloud)' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 71,
  vsQ4: '+9',
  target: 82,
  dimensions: [
    { dim: 'Execution excellence',      score: 78, commentary: 'MSL interaction volume near target; DACH region quality gap (Marcus V) being addressed with insight capture training' },
    { dim: 'External ecosystem impact', score: 74, commentary: '+19% KOL network expansion; 4 new HS/PsA digital influencers identified; Bimzelx HS SOV at 71%' },
    { dim: 'HCP practice change',       score: 73, commentary: '31% sustained practice change vs 22% industry average; HS community dermatologist awareness +22pts is primary driver' },
    { dim: 'Patient care gap closure',  score: 71, commentary: 'HS diagnosis-to-treatment delay -3.4 weeks; MA insight-to-action +13pts; 390 additional HS patients on Bimzelx' },
    { dim: 'MA impact measurement',     score: 58, commentary: 'MO2 Gap — insight-to-action at 31% vs 60% target. Aurivian deployment is the primary lever to close this gap in Q3 2026' },
  ],
};
