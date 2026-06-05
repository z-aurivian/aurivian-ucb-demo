// Auri canned Q&A — Demo Brief §12.
// Backs the chatbot's suggested prompts and the offline/fallback path.
// Every response should cite populated config objects (insights / KOLs /
// congresses / actions) via ref ids — see AURI_RAG_SPEC.md.
//
// Default fill: Alexion template. Overwrite per demo.

export const AURI_PROMPTS = [
  {
    prompt: 'Where are our biggest strategic coverage gaps?',
    response:
      'Three MO-level gaps stand out right now:\n\n• **MO4 (Scientific exchange)** — 0 qualifying insights this cycle. Gap Radar proposes a new LP on mechanistic differentiation vs. next-gen agents.\n• **MO3 (Guideline alignment)** — only 2 insights across gMG and NMOSD. Steering-committee KOLs are open if we bring refractory-subgroup data (AI3).\n• **MO1 (RWE)** — 3 insights but pediatric aHUS (AI5) is isolated; no LP currently triangulates pediatric dosing confidence.',
    cites: [
      { type: 'mo',      id: 'MO4' },
      { type: 'mo',      id: 'MO3' },
      { type: 'mo',      id: 'MO1' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI5' },
    ],
  },
  {
    prompt: 'Summarise the most important signals from the last congress cycle.',
    response:
      'Three themes dominated this cycle:\n\n1. **Biosimilar switching readiness** (momentum 94) — community hematologists debating readiness for Soliris biosimilar entry. Action pending: community-facing outcomes narrative.\n2. **Oral complement inhibitors** (momentum 91) — iptacopan/pegcetacoplan reshaping convenience-vs-control conversations. MSL FAQ on long-term RWE in progress.\n3. **C5 vs proximal inhibition** (momentum 87) — mechanistic differentiation debate concentrated among academic hematologists. Mechanistic slide deck recommended.',
    cites: [
      { type: 'congress-theme', id: 'theme-0' },
      { type: 'congress-theme', id: 'theme-1' },
      { type: 'congress-theme', id: 'theme-2' },
    ],
  },
  {
    prompt: 'Which insights are driving the most action right now?',
    response:
      '**AI1 (Infusion-burden / switch hesitancy)** is the most load-bearing — recurs 3× this cycle, confidence 87%, Prioritised. Three actions in-flight (A1 Started, A2 Proposed, A6 Accepted).\n\n**AI2 (Long-term NMOSD RWE gap)** is the most strategically impactful — A3 has been flagged as *Changed* (actually shifted the strategy), pulling HEOR resources toward a long-horizon sub-analysis.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
      { type: 'action',  id: 'A3'  },
    ],
  },
  {
    prompt: 'Who should we engage for the gMG guideline push?',
    response:
      'The most pragmatic path runs through the gMG steering committee contact who commented in the Feb 2026 ad board: *"Bring us the refractory subgroup data and we have something to work with."* That language is an open door. Action A5 (engage steering KOLs for refractory-subgroup dossier) is currently Proposed — no owner assigned.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A5'  },
    ],
  },
  {
    prompt: 'What would NOVA change about the current plan if given free rein?',
    response:
      'Three concrete changes:\n\n1. **Add a new LP under MO4** covering mechanistic-differentiation conversations. MO4 is a Gap and no current LP captures where these debates actually happen.\n2. **Commission a pediatric aHUS long-term RWE sub-analysis** (A7) — AI5 is isolated and the data gap is recurring.\n3. **Promote the community-facing switch-stability one-pager** (A6, currently Accepted) as the flagship MO2 deliverable — AI1 and AI4 both triangulate on community-HCP language.',
    cites: [
      { type: 'mo',      id: 'MO4' },
      { type: 'insight', id: 'AI5' },
      { type: 'action',  id: 'A7'  },
      { type: 'action',  id: 'A6'  },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'Where are our biggest strategic coverage gaps?',
  'Summarise the most important signals from the last congress cycle.',
  'Which insights are driving the most action right now?',
  'Who should we engage for the gMG guideline push?',
  'What would NOVA change about the current plan if given free rein?',
];
