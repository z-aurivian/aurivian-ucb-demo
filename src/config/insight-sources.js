// Insight Source Value Matrix — UCB demo.
// MA impact measurement is the headline — note the low insight-to-action conversion rate.

export const INSIGHT_SOURCES = [
  { id: 'is-1', source: 'MSL Field Reports',            volume: 1087, qualityScore: 78, leadsToActionPct: 31, costPerInsight: 203,  roiScore: 6.8 },
  { id: 'is-2', source: 'Advisory Boards',               volume: 42,   qualityScore: 92, leadsToActionPct: 69, costPerInsight: 4900, roiScore: 8.2 },
  { id: 'is-3', source: 'Congress Feedback',             volume: 289,  qualityScore: 74, leadsToActionPct: 28, costPerInsight: 910,  roiScore: 6.0 },
  { id: 'is-4', source: 'Med Info Inquiries',            volume: 743,  qualityScore: 66, leadsToActionPct: 18, costPerInsight: 51,   roiScore: 6.9 },
  { id: 'is-5', source: 'X / LinkedIn Social Listening', volume: 3841, qualityScore: 49, leadsToActionPct: 17, costPerInsight: 11,   roiScore: 7.2 },
  { id: 'is-6', source: 'Internal Stakeholder Interviews', volume: 94, qualityScore: 88, leadsToActionPct: 64, costPerInsight: 1200, roiScore: 7.8 },
];

// KIT Relevance Trend — 6-month relevance score per UCB KIT.
export const KIT_RELEVANCE_TREND = [
  { month: 'Jan 2026', 'HS RWE': 61, 'IL-17A/F Differentiation': 58, 'MA Impact Measurement': 72, 'Bimzelx PsA Earlier-Line': 49, 'REST Pipeline': 42 },
  { month: 'Feb 2026', 'HS RWE': 68, 'IL-17A/F Differentiation': 64, 'MA Impact Measurement': 76, 'Bimzelx PsA Earlier-Line': 53, 'REST Pipeline': 46 },
  { month: 'Mar 2026', 'HS RWE': 76, 'IL-17A/F Differentiation': 71, 'MA Impact Measurement': 79, 'Bimzelx PsA Earlier-Line': 59, 'REST Pipeline': 51 },
  { month: 'Apr 2026', 'HS RWE': 84, 'IL-17A/F Differentiation': 79, 'MA Impact Measurement': 83, 'Bimzelx PsA Earlier-Line': 65, 'REST Pipeline': 56 },
  { month: 'May 2026', 'HS RWE': 91, 'IL-17A/F Differentiation': 86, 'MA Impact Measurement': 87, 'Bimzelx PsA Earlier-Line': 72, 'REST Pipeline': 62 },
  { month: 'Jun 2026', 'HS RWE': 97, 'IL-17A/F Differentiation': 93, 'MA Impact Measurement': 89, 'Bimzelx PsA Earlier-Line': 76, 'REST Pipeline': 68 },
];
