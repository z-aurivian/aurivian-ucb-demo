// ============================================================================
// Congress Intelligence Data — UCB / Bimzelx
// Keys off CONGRESS_OPTIONS (EADV 2025, AAD 2025 + trend)
// ============================================================================

import { PRODUCT_OPTIONS } from '../config';

const productNames = PRODUCT_OPTIONS.map(p => p.name);

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Pre-AAD 2025', 'AAD 2025', 'Q2 2025', 'Q3 2025', 'EADV 2025'],
  scientific: [
    { period: 'Pre-AAD 2025',  [productNames[0]]: 60, 'Secukinumab': 66, 'Risankizumab': 58, Other: 48 },
    { period: 'AAD 2025',      [productNames[0]]: 65, 'Secukinumab': 67, 'Risankizumab': 62, Other: 50 },
    { period: 'Q2 2025',       [productNames[0]]: 70, 'Secukinumab': 68, 'Risankizumab': 64, Other: 52 },
    { period: 'Q3 2025',       [productNames[0]]: 74, 'Secukinumab': 68, 'Risankizumab': 66, Other: 53 },
    { period: 'EADV 2025',     [productNames[0]]: 79, 'Secukinumab': 69, 'Risankizumab': 68, Other: 55 },
  ],
  social: [
    { period: 'Pre-AAD 2025',  [productNames[0]]: 55, 'Secukinumab': 62, 'Risankizumab': 52, Other: 44 },
    { period: 'AAD 2025',      [productNames[0]]: 60, 'Secukinumab': 63, 'Risankizumab': 56, Other: 46 },
    { period: 'Q2 2025',       [productNames[0]]: 65, 'Secukinumab': 64, 'Risankizumab': 58, Other: 48 },
    { period: 'Q3 2025',       [productNames[0]]: 70, 'Secukinumab': 64, 'Risankizumab': 60, Other: 50 },
    { period: 'EADV 2025',     [productNames[0]]: 76, 'Secukinumab': 65, 'Risankizumab': 62, Other: 52 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'Bimekizumab dual IL-17A/F inhibition: 2-year maintenance data in moderate-to-severe PsO', journalOrCongress: 'EADV 2025', date: '2025-10', product: productNames[0], sentiment: 'positive' },
  { title: 'Head-to-head IL-17 inhibitor outcomes in HS: bimekizumab vs secukinumab', journalOrCongress: 'JAMA Dermatology', date: '2025-08', product: productNames[0], sentiment: 'positive' },
  { title: 'Secukinumab long-term safety in psoriatic arthritis: 5-year registry data', journalOrCongress: 'AAD 2025', date: '2025-03', product: 'Secukinumab', sentiment: 'neutral' },
  { title: 'Risankizumab vs IL-17 inhibitors in axSpA: network meta-analysis', journalOrCongress: 'Ann Rheum Dis', date: '2025-06', product: 'Risankizumab', sentiment: 'neutral' },
  { title: 'IL-17F blockade contribution to bimekizumab efficacy in hidradenitis suppurativa', journalOrCongress: 'NEJM', date: '2025-09', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'Twitter', author: 'Prof. C. Zouboulis', topic: 'HS disease control — IL-17A/F vs IL-17A only', date: '2025-10', product: productNames[0], sentiment: 'neutral' },
  { platform: 'LinkedIn', author: 'Dr. K. Reich', topic: 'Bimekizumab EADV data — impressive PASI 100 rates', date: '2025-10', product: productNames[0], sentiment: 'positive' },
  { platform: 'Twitter', author: 'Dr. L. Puig', topic: 'AAD 2025 highlights: IL-17 class differentiation', date: '2025-03', product: productNames[0], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. A. Blauvelt', topic: 'Comparative IL-17 inhibitor persistence data', date: '2025-06', product: 'Secukinumab', sentiment: 'neutral' },
  { platform: 'Conference backchannel', author: 'Multiple', topic: 'EADV 2025: bimekizumab SC modality discussion', date: '2025-10', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 16,
  abstracts: 1384,
  posters: 521,
  speakers: 378,
  publicationsLinked: 1742,
  sessions: [
    { title: 'IL-17 Pathway Inhibition in Inflammatory Skin and Joint Disease', track: 'Dermatology / Rheumatology', products: [productNames[0], 'Secukinumab', 'Ixekizumab'] },
    { title: 'Hidradenitis Suppurativa: Emerging Biologics and Treat-to-Target Strategies', track: 'Dermatology', products: [productNames[0]] },
    { title: 'Psoriatic Arthritis in 2025: Sequencing Biologics and Small Molecules', track: 'Rheumatology', products: [productNames[0], 'Risankizumab', 'Guselkumab'] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'aad-2025': {
    agendas: 13,
    abstracts: 1156,
    posters: 437,
    speakers: 312,
    publicationsLinked: 1418,
    sessions: [
      { title: 'Biologics in Moderate-to-Severe Psoriasis: Long-Term Outcomes', track: 'Dermatology', products: [productNames[0], 'Secukinumab', 'Ixekizumab'] },
      { title: 'Hidradenitis Suppurativa — Pathogenesis and Biologic Targets', track: 'Dermatology', products: [productNames[0]] },
      { title: 'IL-17 vs IL-23 Inhibition: Choosing the Right Mechanism', track: 'Clinical Practice', products: ['Secukinumab', 'Risankizumab', 'Guselkumab'] },
    ],
  },
  'eadv-2025': {
    agendas: 16,
    abstracts: 1384,
    posters: 521,
    speakers: 378,
    publicationsLinked: 1742,
    sessions: [
      { title: 'IL-17 Pathway Inhibition in Inflammatory Skin and Joint Disease', track: 'Dermatology / Rheumatology', products: [productNames[0], 'Secukinumab', 'Ixekizumab'] },
      { title: 'Hidradenitis Suppurativa: Emerging Biologics and Treat-to-Target Strategies', track: 'Dermatology', products: [productNames[0]] },
      { title: 'Psoriatic Arthritis in 2025: Sequencing Biologics and Small Molecules', track: 'Rheumatology', products: [productNames[0], 'Risankizumab', 'Guselkumab'] },
    ],
  },
  'trend-aad-eadv': {
    agendas: 29,
    abstracts: 2540,
    posters: 958,
    speakers: 690,
    publicationsLinked: 3160,
    sessions: [
      { title: 'AAD → EADV: Bimekizumab momentum across both congresses', track: 'Cross-congress trend', products: [productNames[0]] },
      { title: 'Competitive positioning: IL-17A/F vs IL-17A-only inhibitors', track: 'Class differentiation', products: [productNames[0], 'Secukinumab', 'Ixekizumab'] },
    ],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'IL-17A/F dual inhibition as the new efficacy benchmark',
    momentum: 96,
    mentions: 58,
    summary: 'Dermatology KOLs at EADV 2025 are coalescing around the view that simultaneous IL-17A and IL-17F blockade delivers meaningfully higher PASI 100 and IGA 0/1 rates than IL-17A-only approaches. The mechanism debate is shifting from "class equivalence" to "where does the extra F blockade matter."',
    action: 'Equip MSLs with a mechanistic differentiation deck and head-to-head efficacy comparators for KOL engagements at AAD, GRAPPA, and EULAR.',
  },
  {
    theme: 'Hidradenitis suppurativa as a breakout indication',
    momentum: 92,
    mentions: 47,
    summary: 'HS is generating disproportionate EADV 2025 buzz. Bimzelx is the only IL-17A/F inhibitor with an approved HS indication, and KOLs are actively discussing treat-to-target protocols and patient selection. High unmet need creates strong referral and education opportunity.',
    action: 'Prioritize HS-focused MSL training and co-develop a treat-to-target resource with top HS investigators. Capture HS pathway discussions via Congress Capture at upcoming dermatology meetings.',
  },
  {
    theme: 'Durability and SC-modality transition in PsO',
    momentum: 87,
    mentions: 41,
    summary: 'Long-term responder data and the availability of subcutaneous dosing are driving conversations about patient preference and adherence. Payers and HCPs want 2-year+ PASI 100 persistence data. SC modality perceived as differentiating versus IV-requiring biosimilars.',
    action: 'Publish and amplify 2-year PASI 100 maintenance data. Build SC patient preference narrative for HEOR and market access.',
  },
  {
    theme: 'PsA and axSpA sequencing debate — IL-17 vs IL-23',
    momentum: 83,
    mentions: 35,
    summary: 'Rheumatologists are actively debating first-line biologic choice in PsA and axSpA between IL-17 and IL-23 inhibitors. Bimzelx\'s dual coverage of skin and joint manifestations is a key talking point, but IL-23 agents\' once-quarterly dosing is a competing value proposition.',
    action: 'Commission a sequencing white-paper with Rheumatology KOLs. Develop shared-care messaging for dermatologists and rheumatologists co-managing PsA patients.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} (UCB)`, share: 31, mentions: 104 },
  { product: 'Secukinumab / Cosentyx (Novartis)', share: 27, mentions: 91 },
  { product: 'Risankizumab / Skyrizi (AbbVie)', share: 22, mentions: 74 },
  { product: 'Ixekizumab / Taltz (Eli Lilly)', share: 12, mentions: 40 },
  { product: 'Guselkumab / Tremfya (J&J)', share: 8, mentions: 27 },
];

export const MOCK_TRIALS = {
  total: 38,
  linkedToKOLs: 24,
  byIndication: { PsO: 14, HS: 10, PsA: 8, axSpA: 6 },
  sample: [
    { nctId: 'NCT03370133', title: 'BE READY: Bimekizumab vs placebo in moderate-to-severe psoriasis', phase: 'Phase III', sponsor: 'UCB', product: productNames[0], indication: 'PsO', status: 'Completed', sites: 46 },
    { nctId: 'NCT03412747', title: 'BE VIVID: Bimekizumab vs secukinumab and ustekinumab in PsO', phase: 'Phase IIIb', sponsor: 'UCB', product: productNames[0], indication: 'PsO', status: 'Completed', sites: 58 },
    { nctId: 'NCT04242498', title: 'BE HEARD I: Bimekizumab in moderate-to-severe hidradenitis suppurativa', phase: 'Phase III', sponsor: 'UCB', product: productNames[0], indication: 'HS', status: 'Completed', sites: 62 },
    { nctId: 'NCT04242550', title: 'BE HEARD II: Bimekizumab in moderate-to-severe hidradenitis suppurativa', phase: 'Phase III', sponsor: 'UCB', product: productNames[0], indication: 'HS', status: 'Active', sites: 55 },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 3960,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'Twitter / X', mentions: 1340, kolsTracked: 88 },
    { platform: 'LinkedIn', mentions: 978, kolsTracked: 114 },
    { platform: 'PubMed / alerts', mentions: 512, kolsTracked: 298 },
    { platform: 'Conference backchannels', mentions: 1130, kolsTracked: 127 },
  ],
  sample: [
    { platform: 'Twitter', author: 'Dr. K. Reich', topic: 'EADV 2025 bimekizumab 2-year PASI 100 — best-in-class?', sentiment: 'positive', date: '2025-10-03' },
    { platform: 'LinkedIn', author: 'Prof. C. Zouboulis', topic: 'HS treat-to-target: IL-17A/F vs TNFi sequencing', sentiment: 'neutral', date: '2025-10-02' },
    { platform: 'PubMed alert', author: 'Multiple', topic: 'IL-17 pathway inhibition systematic review 2025', sentiment: 'positive', date: '2025-09-28' },
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
