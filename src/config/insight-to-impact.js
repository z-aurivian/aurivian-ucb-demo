// Insight-to-Impact — Vision Doc Module 2 (Insights to Action) impact view.
// Surfaces the lineage from a captured insight → action taken → measurable
// outcome, with timeframe and impact score.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const INSIGHT_TO_IMPACT = [
  {
    id: 'i2i-1',
    insight: 'Community hematologists request a switching algorithm one-pager.',
    action: 'Patient-facing Soliris→Ultomiris switching one-pager deployed to MSL field team across NA + EU5.',
    outcome: '+18% switch-conversation rate in tracked accounts; community center inquiries up 2.1×.',
    timeframe: '6 weeks',
    impactScore: 8,
    relatedInsight: 'AI1',
    relatedMO: 'MO2',
  },
  {
    id: 'i2i-2',
    insight: 'Recurring physician concern about C3-mediated extravascular hemolysis.',
    action: 'BTH evidence pack commissioned; advisory board scheduled for proximal-complement positioning.',
    outcome: 'Slide deck adopted by 11 of 14 KOLs in 2026 Q1; competitor narrative neutralized in 3 ad-board markets.',
    timeframe: '8 weeks',
    impactScore: 7,
    relatedInsight: 'AI3',
    relatedMO: 'MO3',
  },
  {
    id: 'i2i-3',
    insight: 'Pediatric aHUS dosing confidence gap surfaced via MSL interactions.',
    action: 'Targeted scientific-exchange session with pediatric hematology centers; registry data refresh distributed.',
    outcome: 'Awareness ladder progression: 27 HCPs moved Aware → Knowledgeable; 4 pediatric centers initiated protocol updates.',
    timeframe: '10 weeks',
    impactScore: 6,
    relatedInsight: 'AI5',
    relatedMO: 'MO1',
  },
];
