// Strategic framework — Demo Brief §4.
// This is NOVA's spine: ISP → POA (Medical Objectives) → Listening
// Priorities → KIQs / KITs. Drives the Strategy-to-Action surface and the
// coverage scoring displayed on the Command Center.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Establish Bimzelx as the standard of care in HS',           description: 'Build scientific leadership in hidradenitis suppurativa — the newest and most urgent approved indication — through KOL engagement, RWE, and guideline shaping.' },
  { id: 'p2', title: 'Demonstrate and communicate Medical Affairs impact',         description: 'Quantify, track, and communicate MA contribution to scientific exchange, alignment, and patient outcomes across the portfolio.' },
  { id: 'p3', title: 'Sustain Bimzelx leadership in Plaque Psoriasis and SpA',    description: 'Maintain scientific presence in established indications; leverage dual IL-17A/F mechanism data to differentiate from IL-17A-only competitors.' },
  { id: 'p4', title: 'Prepare pipeline and KOL landscape for seizure programme',  description: 'Identify and engage emerging neurology KOLs aligned with the REST paradigm; monitor congress landscape for fast-acting seizure rescue data.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'HS scientific leadership',     description: 'Drive deep engagement with dermatologists and surgeons on Bimzelx HS clinical profile; address evidence gaps on long-term outcomes and biologic-experienced patients.', ispPillarRef: 'p1' },
  { id: 'MO2', name: 'MA impact measurement',        description: 'Deploy a comprehensive Medical Affairs impact dashboard covering MSL execution quality, KOL alignment velocity, insight-to-action conversion, and ROMI.', ispPillarRef: 'p2' },
  { id: 'MO3', name: 'Scientific alignment tracking', description: 'Track and report portfolio-level shifts in HCP scientific alignment across HS, PsO, PsA, and AS to demonstrate collective MA impact.', ispPillarRef: 'p2' },
  { id: 'MO4', name: 'IL-17A/F differentiation',     description: 'Support HCP understanding of dual IL-17A and IL-17F inhibition vs IL-17A-only agents in head-to-head and real-world settings.', ispPillarRef: 'p3' },
  { id: 'MO5', name: 'Neurology KOL mapping',        description: 'Build a tiered map of established, emerging, and rising-star KOLs in seizure disorders; track congress activity and publication trends.', ispPillarRef: 'p4' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'HS treatment experience',       moRef: 'MO1', kiq: 'What are dermatologists and surgeons observing in real-world Bimzelx-treated HS patients — efficacy, tolerability, and durability?',       kits: ['MSL field report', 'Ad board summary', 'Med Info query log'] },
  { id: 'LP2', name: 'MA impact perception',          moRef: 'MO2', kiq: 'How do internal stakeholders currently measure and communicate Medical Affairs contribution — and where are the reporting gaps?',             kits: ['Internal stakeholder interview', 'KPI benchmarking report'] },
  { id: 'LP3', name: 'HS evidence gaps',              moRef: 'MO1', kiq: 'What data gaps are HCPs citing as barriers to earlier Bimzelx use in HS — particularly in biologic-naïve and biologic-experienced patients?', kits: ['Congress debrief', 'Advisory board output', 'Publication gap analysis'] },
  { id: 'LP4', name: 'IL-17 mechanism positioning',   moRef: 'MO4', kiq: 'How are prescribers differentiating Bimzelx (IL-17A+F) from Cosentyx and Taltz (IL-17A only) in practice?',                                 kits: ['MSL interaction log', 'Payer formulary report'] },
  { id: 'LP5', name: 'Seizure KOL landscape',         moRef: 'MO5', kiq: 'Which neurologists and epileptologists are most influential in acute seizure rescue — and how are they engaging with REST paradigm data?',     kits: ['Publication analysis', 'Congress speaker tracking', 'Social listening'] },
];

// Coverage score per MO at the moment of the demo.
// MO2 intentionally Gap — drives the core demo narrative about impact measurement.
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Gap',
  MO3: 'Low',
  MO4: 'Low',
  MO5: 'Gap',
};
