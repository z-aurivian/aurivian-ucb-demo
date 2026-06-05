// ============================================================================
// Congress Intelligence Data — adapted from Terumo ingestion pipeline
// Keys off CONGRESS_OPTIONS from clientConfig
// ============================================================================

import { PRODUCT_OPTIONS } from '../config/clientConfig';

const productNames = PRODUCT_OPTIONS.map(p => p.name);

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-ASH 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'ASH 2025'],
  scientific: [
    { period: 'Post-ASH 2024', [productNames[0]]: 62, [productNames[1]]: 68, 'Iptacopan': 55, Other: 50 },
    { period: 'Q1 2025', [productNames[0]]: 64, [productNames[1]]: 72, 'Iptacopan': 60, Other: 52 },
    { period: 'Q2 2025', [productNames[0]]: 66, [productNames[1]]: 76, 'Iptacopan': 65, Other: 54 },
    { period: 'Q3 2025', [productNames[0]]: 68, [productNames[1]]: 80, 'Iptacopan': 70, Other: 56 },
    { period: 'ASH 2025', [productNames[0]]: 65, [productNames[1]]: 84, 'Iptacopan': 74, Other: 58 },
  ],
  social: [
    { period: 'Post-ASH 2024', [productNames[0]]: 58, [productNames[1]]: 64, 'Iptacopan': 52, Other: 48 },
    { period: 'Q1 2025', [productNames[0]]: 60, [productNames[1]]: 68, 'Iptacopan': 56, Other: 50 },
    { period: 'Q2 2025', [productNames[0]]: 62, [productNames[1]]: 72, 'Iptacopan': 60, Other: 52 },
    { period: 'Q3 2025', [productNames[0]]: 64, [productNames[1]]: 76, 'Iptacopan': 64, Other: 54 },
    { period: 'ASH 2025', [productNames[0]]: 62, [productNames[1]]: 80, 'Iptacopan': 68, Other: 56 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'Long-term ravulizumab efficacy in PNH: 5-year follow-up', journalOrCongress: 'ASH 2024', date: '2024-12', product: productNames[1], sentiment: 'positive' },
  { title: 'Biosimilar eculizumab switching outcomes in Europe', journalOrCongress: 'Blood', date: '2024-11', product: productNames[0], sentiment: 'neutral' },
  { title: 'Iptacopan oral complement inhibitor Phase III results', journalOrCongress: 'NEJM', date: '2025-01', product: 'Iptacopan', sentiment: 'positive' },
  { title: 'C5 inhibitor sequencing strategies in gMG', journalOrCongress: 'ASH 2025 Abstract', date: '2025-12', product: productNames[1], sentiment: 'positive' },
  { title: 'Real-world complement inhibitor utilization patterns', journalOrCongress: 'Am J Hematol', date: '2025-03', product: productNames[0], sentiment: 'neutral' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'Twitter', author: 'Prof. R. Brodsky', topic: 'PNH treatment landscape', date: '2024-12', product: productNames[1], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. A. Hill', topic: 'Biosimilar switching readiness', date: '2025-01', product: productNames[0], sentiment: 'neutral' },
  { platform: 'Twitter', author: 'KOL Hematology', topic: 'Oral complement inhibitor data', date: '2025-03', product: 'Iptacopan', sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. H. Schrezenmeier', topic: 'Ultomiris real-world data', date: '2025-06', product: productNames[1], sentiment: 'positive' },
  { platform: 'Conference backchannel', author: 'Multiple', topic: 'ASH 2025 complement sessions', date: '2025-12', product: productNames[1], sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 14,
  abstracts: 1247,
  posters: 489,
  speakers: 342,
  publicationsLinked: 1568,
  sessions: [
    { title: 'Complement Inhibition in PNH: Current and Emerging Therapies', track: 'Hematology', products: [productNames[0], productNames[1], 'Iptacopan'] },
    { title: 'C5 Inhibitor Sequencing and Switching Strategies', track: 'Clinical Practice', products: [productNames[0], productNames[1]] },
    { title: 'Rare Disease Registries and Real-World Evidence', track: 'Health Services', products: [productNames[1]] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'ash-2024': {
    agendas: 12,
    abstracts: 1108,
    posters: 412,
    speakers: 298,
    publicationsLinked: 1342,
    sessions: [
      { title: 'Complement Pathway Therapeutics in PNH', track: 'Hematology', products: [productNames[0], productNames[1]] },
      { title: 'Biosimilar Transition in Rare Disease', track: 'Health Services', products: [productNames[0]] },
      { title: 'Emerging Oral Complement Inhibitors', track: 'Clinical Trials', products: ['Iptacopan', 'Danicopan'] },
    ],
  },
  'ash-2025': {
    agendas: 14,
    abstracts: 1247,
    posters: 489,
    speakers: 342,
    publicationsLinked: 1568,
    sessions: [
      { title: 'Complement Inhibition in PNH: Current and Emerging Therapies', track: 'Hematology', products: [productNames[0], productNames[1], 'Iptacopan'] },
      { title: 'C5 Inhibitor Sequencing and Switching Strategies', track: 'Clinical Practice', products: [productNames[0], productNames[1]] },
      { title: 'Rare Disease Registries and Real-World Evidence', track: 'Health Services', products: [productNames[1]] },
    ],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'Biosimilar switching readiness & outcomes',
    momentum: 94,
    mentions: 52,
    summary: 'Community hematologists and infusion-center directors are openly debating readiness for Soliris biosimilar entry. Discussion clusters on outcome parity in PNH and practical switching protocols for stable patients.',
    action: 'Accelerate MSL switch-protocol toolkit and co-create a community-facing outcomes narrative before biosimilar launch windows open.',
  },
  {
    theme: 'Oral complement inhibitor competitive pressure',
    momentum: 91,
    mentions: 44,
    summary: 'Iptacopan and pegcetacoplan oral/SC options are reshaping patient-preference conversations, especially among younger PNH patients. KOLs frame the debate as convenience vs. long-term disease control.',
    action: 'Prepare head-to-head disease-control narrative and MSL FAQ emphasizing long-term RWE. Engage oral-combination investigators to anchor sequencing conversations.',
  },
  {
    theme: 'C5 vs proximal complement inhibition debate',
    momentum: 87,
    mentions: 38,
    summary: 'Mechanistic differentiation conversations are concentrated among academic hematologists and translational scientists. Proximal inhibition proponents challenge C5 durability; C5 advocates cite bleed control and long-term safety profile.',
    action: 'Commission a mechanistic-differentiation slide deck and sponsor a roundtable bridging C5 and proximal-inhibition perspectives.',
  },
  {
    theme: 'Real-world evidence in rare hematologic disease',
    momentum: 82,
    mentions: 31,
    summary: 'Persistent call from community centers and payers for long-horizon RWE — particularly in aHUS and pediatric populations where registrational data are thin.',
    action: 'Prioritize pediatric aHUS sub-analysis and long-term retention RWE. Align with HEOR on publication cadence.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} (Alexion)`, share: 24, mentions: 78 },
  { product: `${productNames[1]} (Alexion)`, share: 34, mentions: 112 },
  { product: 'Iptacopan / Fabhalta (Novartis)', share: 22, mentions: 71 },
  { product: 'Other C5/C3 inhibitors', share: 20, mentions: 64 },
];

export const MOCK_TRIALS = {
  total: 52,
  linkedToKOLs: 34,
  byIndication: { PNH: 28, aHUS: 12, gMG: 8, NMOSD: 4 },
  sample: [
    { nctId: 'NCT04432584', title: 'Ravulizumab vs eculizumab switching study in PNH', phase: 'Phase III', sponsor: 'Alexion', product: productNames[1], indication: 'PNH', status: 'Completed', sites: 24 },
    { nctId: 'NCT04557735', title: 'Long-term safety of ravulizumab in aHUS', phase: 'Phase III', sponsor: 'Alexion', product: productNames[1], indication: 'aHUS', status: 'Active', sites: 18 },
    { nctId: 'NCT05070858', title: 'Iptacopan monotherapy in PNH (APPLY-PNH)', phase: 'Phase III', sponsor: 'Novartis', product: 'Iptacopan', indication: 'PNH', status: 'Completed', sites: 32 },
    { nctId: 'NCT04469465', title: 'Danicopan add-on to C5 inhibitor in PNH', phase: 'Phase III', sponsor: 'Alexion', product: 'Danicopan', indication: 'PNH', status: 'Active', sites: 20 },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 4280,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'Twitter / X', mentions: 1480, kolsTracked: 95 },
    { platform: 'LinkedIn', mentions: 1024, kolsTracked: 128 },
    { platform: 'PubMed / alerts', mentions: 568, kolsTracked: 340 },
    { platform: 'Conference backchannels', mentions: 1208, kolsTracked: 142 },
  ],
  sample: [
    { platform: 'Twitter', author: 'Prof. R. Brodsky', topic: 'PNH treatment paradigm shift', sentiment: 'positive', date: '2025-11-18' },
    { platform: 'LinkedIn', author: 'Dr. A. Hill', topic: 'Biosimilar eculizumab real-world data', sentiment: 'neutral', date: '2025-11-12' },
    { platform: 'PubMed alert', author: 'Multiple', topic: 'Complement inhibition systematic review', sentiment: 'positive', date: '2025-11-08' },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText', status: 'connected', description: 'Agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials', label: 'Clinical Trials', iconId: 'Activity', status: 'available', description: 'Trial sponsorship, sites, outcomes by product' },
  { id: 'social', label: 'Social & Digital', iconId: 'MessageCircle', status: 'available', description: 'Scientific and digital footprint signals' },
];

export function getDemoContext() {
  return {
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
