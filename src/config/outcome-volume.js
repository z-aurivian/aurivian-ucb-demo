// Outcome Volume (RaaS) — Demo Brief §10.
// Powers the persistent header chip. Results-as-a-Service: customers
// pre-commit to an outcome volume; we show real-time consumed/remaining.

export const OUTCOME_VOLUME = {
  period: 'Q2 2026',
  committed: 1200,
  consumed: 847,
  // Optional per-agent breakdown
  byAgent: {
    aria: { committed: 400, consumed: 312 },
    luca: { committed: 400, consumed: 268 },
    nova: { committed: 400, consumed: 267 },
  },
  // Optional momentum note ("+12% vs last quarter")
  momentumNote: null,
};
