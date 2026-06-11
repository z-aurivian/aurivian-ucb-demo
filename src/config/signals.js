// Background signals — UCB demo.
// MA impact measurement gap and Bimzelx HS momentum are the headline signals.

export const SIGNALS = [
  {
    agent: 'NOVA',
    timestamp: '2026-06-04T08:15:00Z',
    headline: 'MA insight-to-action conversion at 31% — executive leadership requesting ROMI framework',
    context: 'NOVA\'s analysis of 6 months of MSL interaction logs and internal stakeholder interviews reveals only 31% of captured insights are converted to documented actions — versus a 60% industry benchmark. Three senior Medical Affairs leaders have independently flagged this gap in the last 30 days. This is the primary driver behind the MO2 (MA Impact Measurement) Gap rating in the current Strategy-to-Action.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'ARIA',
    timestamp: '2026-06-03T11:30:00Z',
    headline: 'Bimzelx HS share of voice hits 71% at EADV 2025 — competitor response now materializing',
    context: 'ARIA\'s congress monitoring shows Bimzelx dominated HS sessions at EADV 2025 with 71% share of voice in IL-17 biologic discussions. AbbVie (Skyrizi) and Novartis (Cosentyx) both submitted late-breaking HS data. Competitor MSL activity has accelerated since AAD 2026 (March). Sustained counter-messaging is expected ahead of EADV 2026 (October) — the next major opportunity to defend the HS leadership position.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-06-02T14:00:00Z',
    headline: 'KOL alignment gap: Dr. Christos Zouboulis public vs. private divergence detected',
    context: 'Pulse public narrative score for Zouboulis dropped 81 → 53 over 60 days (tracks social posts, publications, and congress co-authorships). Note: LUCA\'s Medical Messaging Alignment — which tracks MSL interaction quality and advisory engagement — remains high at 85%. This divergence between public (53) and private (85) is the signal: his one-on-one UCB relationship is intact, but his public positioning is drifting toward a Novartis platform via a co-authored EADV abstract. Last UCB contact was 8 weeks ago. Re-engage before the public narrative hardens ahead of EADV 2026.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-06-01T09:45:00Z',
    headline: 'HS patient advocacy communities amplifying biologic access barriers — 47K members engaged',
    context: 'HS Connect and HS Foundation social channels (combined 47K members) are actively discussing biologic prior authorisation delays and step-therapy requirements. 39% of posts reference treatment access barriers as a primary frustration. UCB Medical Affairs has no documented response presence in these communities — a gap as patients research Bimzelx directly.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-05-30T10:00:00Z',
    headline: '4 emerging HS/PsA digital influencers crossed the watch threshold',
    context: 'Four academic dermatologists and rheumatologists (combined 29K X/LinkedIn followers) have posted ≥4 times about HS biologic sequencing and IL-17 mechanism differentiation in 30 days. Two have published IL-17F commentary pieces. None are on the current Bimzelx MSL engagement list — early engagement opportunity before competitor teams act.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
];
