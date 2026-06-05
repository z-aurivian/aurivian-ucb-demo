// Auri canned Q&A — UCB demo.
// VEGA-first framing. Lead with MA impact measurement.
// No language that positions Aurivian as replacing UCB's internal tool — additive only.

export const AURI_PROMPTS = [
  {
    prompt: 'What is VEGA showing about our Medical Affairs impact right now?',
    response:
      'VEGA is flagging two structural gaps that are worth addressing before the next leadership review:\n\n**Gap 1 — Attribution**: 74% of Bimzelx HS MSL interactions generate captured insights that are never formally tied to a Medical Objective outcome (AI1). Leadership reviews are running on anecdote, not measurement. MO2 is the only Gap-rated objective this cycle — and it\'s the one your board is asking about.\n\n**Gap 2 — Conversion**: Insight-to-action rate is 31% against a 60% target (AI4). The bottleneck is triage — high-quality field intelligence is sitting inert because there\'s no structured pathway from capture to action ownership.\n\nActions A1 and A2 (Started/Accepted) address both. A1 brings the VEGA dashboard into the leadership review cycle. A2 defines the three outcome metrics that give you a number you can stand behind.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI4' },
      { type: 'mo',      id: 'MO2' },
      { type: 'action',  id: 'A1'  },
      { type: 'action',  id: 'A2'  },
    ],
  },
  {
    prompt: 'Where are the biggest field medical coverage gaps right now?',
    response:
      'Two MOs are rated Gap and one is rated Low:\n\n• **MO2 (MA impact measurement)** — Gap. The attribution and conversion gaps from AI1 and AI4 are the most strategically load-bearing. This is the gap your leadership is feeling.\n\n• **MO5 (Neurology KOL mapping)** — Gap. 14 epileptologists with >20 publications on acute seizure rescue are unengaged. The 18-month window before pipeline data readouts is the right time to build those relationships. Action A7 is Proposed but has no owner yet.\n\n• **MO3 (Scientific alignment tracking)** — Low. LUCA is detecting alignment velocity slowing among 3 tier-1 dermatology KOLs on IL-17A/F differentiation. No proactive exchange has been scheduled.',
    cites: [
      { type: 'mo',      id: 'MO2' },
      { type: 'mo',      id: 'MO5' },
      { type: 'mo',      id: 'MO3' },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI4' },
      { type: 'insight', id: 'AI5' },
      { type: 'action',  id: 'A7'  },
    ],
  },
  {
    prompt: 'What is the HS field medical story this cycle?',
    response:
      'Two signals are worth actioning now:\n\n**1. Biologic-naïve step therapy barrier (AI2)** — Dermatologists want to use Bimzelx earlier but payer step therapy is creating a 4–6 month delay. This has recurred in 4 separate MSL reports. A3 (prior-auth one-pager) is Started — the urgency is getting it deployed before the next payer P&T cycle. A4 (payer landscape analysis) is Proposed and needs an owner.\n\n**2. IL-17A/F differentiation plateau (AI3)** — Academic KOLs are aligned; community dermatologists aren\'t translating the mechanism into prescribing decisions. The LUCA signal is that 3 tier-1 KOLs have already shifted to neutral. A5 (patient-case-led differentiation materials) is Proposed.',
    cites: [
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A3'  },
      { type: 'action',  id: 'A4'  },
      { type: 'action',  id: 'A5'  },
    ],
  },
  {
    prompt: 'How does Aurivian work within our existing infrastructure?',
    response:
      'Aurivian is deployed entirely within your existing cloud environment — in UCB\'s case, ucb-prod-azure. No field data, insight logs, KOL interaction records, or strategic content leaves your perimeter.\n\nAurivian connects to the data systems you already have: CRM interaction logs, Med Info query databases, congress debrief repositories, and publication feeds. It synthesizes across those sources and routes intelligence to the right surface — NOVA for strategy, LUCA for KOL engagement, VEGA for MA impact measurement.\n\nThis is additive to your existing tooling, not a replacement for it. Aurivian is the synthesis and attribution layer that your field data is currently missing.',
    cites: [],
  },
  {
    prompt: 'Which actions should we prioritise this quarter?',
    response:
      'Ranked by strategic impact × urgency:\n\n1. **A1** (VEGA MA impact dashboard) — Already Started. Highest visibility item; directly addresses the board-level ask on MA ROI. Get it into the Q3 leadership review.\n\n2. **A6** (Weekly insight triage cadence) — Accepted. Structural fix that immediately improves the 31% conversion rate. Low cost, high leverage. Needs a designated triage owner.\n\n3. **A3** (Bimzelx biologic-naïve prior-auth one-pager) — Started. Field teams are asking for this now. Every week without it is a week a prescriber can\'t push back on a step therapy requirement.\n\n4. **A7** (Neurology KOL list for seizure pipeline) — Proposed, no owner. The 18-month window is the easy part to ignore. It\'s also the only pipeline action with no current owner — assign one this quarter.',
    cites: [
      { type: 'action',  id: 'A1'  },
      { type: 'action',  id: 'A6'  },
      { type: 'action',  id: 'A3'  },
      { type: 'action',  id: 'A7'  },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'What is VEGA showing about our Medical Affairs impact right now?',
  'Where are the biggest field medical coverage gaps right now?',
  'What is the HS field medical story this cycle?',
  'How does Aurivian work within our existing infrastructure?',
  'Which actions should we prioritise this quarter?',
];
