// Insight Source Value Matrix — NOVA's "Insight Sources & Impact" tab.
// Quantifies the value of each insight-source channel: volume,
// quality, leads-to-action, cost, and an aggregated ROI score.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const INSIGHT_SOURCES = [
  { id: 'is-1', source: 'MSL Field Reports',  volume: 1243, qualityScore: 82, leadsToActionPct: 41, costPerInsight: 187,  roiScore: 7.8 },
  { id: 'is-2', source: 'Advisory Boards',    volume: 47,   qualityScore: 94, leadsToActionPct: 72, costPerInsight: 4250, roiScore: 8.5 },
  { id: 'is-3', source: 'Congress Feedback',  volume: 312,  qualityScore: 76, leadsToActionPct: 34, costPerInsight: 890,  roiScore: 6.2 },
  { id: 'is-4', source: 'Med Info Inquiries', volume: 876,  qualityScore: 68, leadsToActionPct: 22, costPerInsight: 45,   roiScore: 7.1 },
  { id: 'is-5', source: 'Social Listening',   volume: 4521, qualityScore: 41, leadsToActionPct: 8,  costPerInsight: 12,   roiScore: 4.4 },
];

// KIT Relevance Trend — 6-month relevance score per KIT.
export const KIT_RELEVANCE_TREND = [
  { month: 'Nov 2025', 'Biosimilar Switching': 88, 'Complement Education': 74, 'BTH Mgmt': 79, 'Oral Competitor': 83, 'Diagnosis & Referral': 69 },
  { month: 'Dec 2025', 'Biosimilar Switching': 90, 'Complement Education': 73, 'BTH Mgmt': 82, 'Oral Competitor': 86, 'Diagnosis & Referral': 68 },
  { month: 'Jan 2026', 'Biosimilar Switching': 91, 'Complement Education': 72, 'BTH Mgmt': 85, 'Oral Competitor': 88, 'Diagnosis & Referral': 67 },
  { month: 'Feb 2026', 'Biosimilar Switching': 93, 'Complement Education': 71, 'BTH Mgmt': 86, 'Oral Competitor': 89, 'Diagnosis & Referral': 67 },
  { month: 'Mar 2026', 'Biosimilar Switching': 94, 'Complement Education': 72, 'BTH Mgmt': 88, 'Oral Competitor': 91, 'Diagnosis & Referral': 67 },
  { month: 'Apr 2026', 'Biosimilar Switching': 94, 'Complement Education': 72, 'BTH Mgmt': 88, 'Oral Competitor': 91, 'Diagnosis & Referral': 67 },
];
