// Therapeutic area — Demo Brief §3.
// Default fill reflects Alexion (rare hematology/neurology).

export const THERAPEUTIC_AREA = {
  name: 'Immunology & Neurology',
  subIndications: ['Hidradenitis Suppurativa (HS)', 'Plaque Psoriasis', 'Psoriatic Arthritis', 'Ankylosing Spondylitis', 'Seizure Disorders'],
  competitors: [
    { name: 'Humira / biosimilars', company: 'AbbVie + biosimilar entrants', moA: 'TNF inhibitor', posture: 'Established in HS; Bimzelx targeting superiority data' },
    { name: 'Cosentyx', company: 'Novartis', moA: 'IL-17A inhibitor', posture: 'Competitor in PsO/PsA/AS; IL-17A vs IL-17A+F differentiation' },
    { name: 'Taltz', company: 'Eli Lilly', moA: 'IL-17A inhibitor', posture: 'Overlap in PsO/PsA; head-to-head data opportunity' },
    { name: 'Rinvoq', company: 'AbbVie', moA: 'JAK1 inhibitor', posture: 'Emerging in HS; safety profile differentiation key' },
    { name: 'Spravato / Epidiolex', company: 'J&J / Jazz', moA: 'Various', posture: 'Neurology adjacency; seizure disorder landscape' },
  ],
  advocacyOrgs: ['HS Foundation', 'National Psoriasis Foundation', 'Epilepsy Foundation', 'Spondylitis Association of America'],
};
