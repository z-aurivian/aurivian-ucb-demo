// Congress roster — Demo Brief §3 (+ §8 for per-congress ARIA data).

export const CONGRESS_OPTIONS = [
  {
    id: 'eadv-2025',
    name: 'EADV 2025',
    fullName: 'European Academy of Dermatology and Venereology Congress 2025',
    location: 'Amsterdam, Netherlands',
    date: 'Oct 1–4, 2025',
    available: true,
  },
  {
    id: 'aad-2025',
    name: 'AAD 2025',
    fullName: 'American Academy of Dermatology Annual Meeting 2025',
    location: 'Orlando, FL',
    date: 'Mar 7–11, 2025',
    available: true,
  },
  {
    id: 'trend-aad-eadv',
    name: 'Trend: AAD → EADV',
    fullName: 'Sentiment trend AAD 2025 to EADV 2025',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'acr-2026',
    name: 'ACR 2026',
    fullName: 'American College of Rheumatology Convergence 2026',
    location: 'TBD',
    date: 'Nov 2026',
    available: false,
    comingSoon: true,
  },
  { id: 'eular-2026', name: 'EULAR 2026', fullName: 'European Alliance of Associations for Rheumatology 2026', location: 'TBD', date: 'Jun 2026', available: false, comingSoon: true },
  { id: 'aan-2026',   name: 'AAN 2026',   fullName: 'American Academy of Neurology Annual Meeting 2026',       location: 'TBD', date: 'Apr 2026', available: false, comingSoon: true },
];
