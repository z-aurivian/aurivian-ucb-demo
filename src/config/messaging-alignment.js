// Medical Messaging Alignment — UCB demo.
// Pillars cover Bimzelx (IL-17A/F, HS, PsA/axSpA) and MA impact measurement.

export const MESSAGING_PILLARS = [
  { id: 'pillar-1', name: 'IL-17A/F dual inhibition — superior efficacy vs IL-17A-only agents', short: 'IL-17A/F dual MoA' },
  { id: 'pillar-2', name: 'Bimzelx in HS — systemic IL-17 disease modification, not just skin',  short: 'HS systemic disease' },
  { id: 'pillar-3', name: 'Medical Affairs measurable impact — insight-to-outcome traceability',  short: 'MA impact' },
  { id: 'pillar-4', name: 'Bimzelx PsA / axSpA — earlier-line FcRn-independent IL-17 biology',   short: 'PsA/axSpA earlier-line' },
];

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const TIER_BASELINE = { 'Tier 1': 78, 'Tier 2': 64, 'Tier 3': 50 };

export function getMessagingAlignment(kol) {
  if (!kol) return null;
  const baseline = TIER_BASELINE[kol.engagementTier] ?? 60;
  const influenceLift = Math.round((kol.influenceScore - 70) / 4);
  const idHash = hashCode(kol.id);

  const pillars = MESSAGING_PILLARS.map((p, i) => {
    const offset = ((idHash + i * 37) % 31) - 15;
    const score = Math.max(20, Math.min(98, baseline + influenceLift + offset));
    return { ...p, score };
  });

  const gap = pillars.reduce((min, p) => (p.score < min.score ? p : min), pillars[0]);
  const strongest = pillars.reduce((max, p) => (p.score > max.score ? p : max), pillars[0]);
  const avgScore = Math.round(pillars.reduce((sum, p) => sum + p.score, 0) / pillars.length);

  let recommendation;
  if (gap.score >= 75) {
    recommendation = `Strong alignment across all messaging pillars (avg ${avgScore}%). Maintain current cadence — consider advisory board invitation, particularly on ${strongest.short}.`;
  } else if (gap.score >= 55) {
    recommendation = `Average alignment ${avgScore}%. Largest gap is ${gap.name} (${gap.score}%). Recommended: targeted scientific exchange focused on this pillar; bring updated Bimzelx evidence pack.`;
  } else {
    recommendation = `Below-target alignment on ${gap.name} (${gap.score}%). Suggest urgent re-engagement and 1:1 advisory; risk of competitor capture by Cosentyx or Skyrizi MSLs if not addressed within 6 weeks.`;
  }

  return { pillars, avgScore, gap, strongest, recommendation };
}
