import React, { useState, useEffect } from 'react';
import {
  Brain, ChevronDown, ChevronUp, FileDown, Sparkles, MapPin,
  Calendar, GitBranch, Check, TrendingUp, ShieldCheck, MessageSquare,
  AlertCircle,
} from 'lucide-react';
import {
  LISTENING_PRIORITIES, INSIGHTS, ACTIONS,
} from '../config';
import { isPinned, pinInsight, unpinInsight, subscribePinned } from '../lib/journeyStore';

// ACTIONS.fromInsightRef is inconsistent across demo configs — a plain id
// ('AI1'), a '+'-joined compound id ('AI1+AI5'), or an array (['AI1','AI5'])
// where one action addresses multiple insights. Normalise before matching.
function actionCoversInsight(action, insightId) {
  const ref = action.fromInsightRef;
  if (Array.isArray(ref)) return ref.includes(insightId);
  if (typeof ref === 'string') return ref.split('+').includes(insightId);
  return false;
}

// ─── KIQ period data — UCB demo (Bimzelx / seizure pipeline) ───────────────

const KIQ_PERIOD_DATA = {
  LP1: {
    status: 'new',
    thisPeriod: {
      summary: 'Community dermatologists across US and UK territories are reporting that payer step-therapy requirements — demanding documented TNF-alpha failure before approving Bimzelx in biologic-naïve HS — create a 4–6 month treatment delay in patients who would be appropriate candidates earlier.',
      novaSynthesis: 'The gap is not clinical uncertainty — HCPs already believe these patients are candidates. The barrier is payer criteria that predates the current Bimzelx HS data. No prior-auth support materials currently exist for field use.',
      keyQuote: { text: 'I have patients who are clearly Bimzelx candidates. My hands are tied until they fail on adalimumab. That takes months and their disease gets worse.', msl: 'Community dermatologist', territory: 'Chicago, IL', date: '2026-05-03' },
      actionPill: { insight: 'AI2', taken: true, label: 'Prior-auth one-pager in development' },
    },
    cumulative: {
      summary: 'The biologic-naïve payer-delay pattern has now been confirmed across 3 territories (Chicago, London, Munich) over 2 measurement periods. The consistency of the signal across geographies is what elevated it to a Prioritised insight.',
      runningInsight: 'The question has shifted from "is there a delay?" to "what evidence rebuts the current step-therapy language?" — a payer-engagement question, not an evidence-generation one.',
    },
  },
  LP2: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Two senior stakeholder interviews this period — the highest-confidence signal of any KIQ. Both a Head of Medical Affairs (Brussels) and a VP Medical Affairs (North America) independently described the same gap: MA leadership can report activity volume but not its downstream impact.',
      novaSynthesis: 'This is a synthesis and attribution problem, not a data problem — the field data already exists in MSL systems. Only 23% of pharma MA organizations industry-wide have a validated model for attributing scientific exchange to measurable HCP behavior change.',
      keyQuote: { text: 'I can tell you how many MSL interactions we had this quarter. I cannot tell you what they changed.', msl: 'Head of Medical Affairs', territory: 'Brussels', date: '2026-04-15' },
      actionPill: { insight: 'AI1', taken: true, label: 'VEGA MA impact dashboard deployed' },
    },
    cumulative: {
      summary: 'This has been the most persistent KIQ across all periods — MA impact measurement was already the reason VEGA was commissioned. Insight-to-action conversion remains at 31%, well below the 60% industry-benchmark target cited in KPI review data.',
      runningInsight: 'The question is evolving from "can we measure it?" to "which lever closes the 29-point gap fastest?" — the weekly triage cadence (AI4) is the current answer being tested.',
    },
  },
  LP3: {
    status: 'new',
    thisPeriod: {
      summary: 'An academic HS specialist in London flagged that current payer step-therapy language was written before the current Bimzelx HS data existed, and needs to be actively challenged rather than waited out.',
      novaSynthesis: 'This reframes LP3 from a passive evidence gap into an active advocacy opportunity — the data to rebut the payer language largely already exists; what is missing is a formal payer-facing dossier.',
      keyQuote: { text: 'The step therapy language in the payer criteria was written before the current Bimzelx HS data existed. It needs to be challenged with updated evidence.', msl: 'Academic dermatologist, HS specialist', territory: 'London, UK', date: '2026-04-14' },
      actionPill: { insight: 'AI2', taken: false, label: 'Payer landscape analysis commissioned' },
    },
    cumulative: {
      summary: 'LP3 and LP1 are converging on the same underlying insight (AI2) from two angles — patient-level delay (LP1) and payer-criteria specifics (LP3). Two periods of data now support commissioning a formal HEOR payer landscape analysis.',
      runningInsight: 'The question has narrowed from "what evidence is missing?" to "which specific payer criteria need rebuttal data, in which markets, by when?"',
    },
  },
  LP4: {
    status: 'new',
    thisPeriod: {
      summary: 'Community dermatologists in Phoenix and at AAD 2025 confirmed they understand the IL-17A/F dual-inhibition mechanism in principle but have not translated it into a prescribing preference over familiar IL-17A-only agents.',
      novaSynthesis: 'Academic dermatologists already make this translation; community dermatologists do not. Competitor real-world data is filling the conversation gap that Bimzelx mechanism content has not yet reached, particularly among mid-volume prescribers.',
      keyQuote: { text: 'I know the IL-17F story in theory. I don\'t have a patient case that makes me reach for it over something I already know.', msl: 'Community dermatologist', territory: 'Phoenix, AZ', date: '2026-04-08' },
      actionPill: { insight: 'AI3', taken: false, label: 'Patient-case materials proposed' },
    },
    cumulative: {
      summary: 'IL-17A/F awareness has grown steadily per KIT tracking (see Emerging Themes) but has plateaued at the community-practice level over the last 2 periods, even as academic-centre awareness continues to rise.',
      runningInsight: 'The question is shifting from "do HCPs understand the mechanism?" to "what patient case makes the mechanism actionable at the point of prescribing?" — a materials-design question, not an education-volume one.',
    },
  },
  LP5: {
    status: 'new',
    thisPeriod: {
      summary: 'NOVA\'s publication and congress-tracking analysis identified 14 epileptologists with significant acute seizure rescue publication records — none currently on the UCB neurology engagement list. Three of the 14 presented at AES 2025 with no recorded UCB MSL interaction at the same event.',
      novaSynthesis: 'The seizure pipeline has an 18-month window before data readouts make KOL relationships time-critical. Current neurology KOL mapping is sparse — no tier structure, no sentiment baseline, no congress-attendance overlap with UCB MSL activity.',
      keyQuote: null,
      actionPill: { insight: 'AI5', taken: false, label: 'Tier-1 KOL list drafted (14 candidates)' },
      emptyReason: null,
    },
    cumulative: {
      summary: 'LP5 was established this cycle specifically to support the seizure pipeline. Unlike LP1–LP4, its current evidence base is NOVA analysis-engine output (publication and congress tracking) rather than MSL field signals — engagement has not yet begun.',
      runningInsight: 'The question is "who are the right 14 KOLs to prioritise, and how fast can outreach begin?" — before the window narrows further as pipeline data approaches.',
    },
  },
};

// LP6 is repurposed onto MO3 (Scientific alignment tracking) — UCB's real
// LISTENING_PRIORITIES (LP1-LP5) has no dedicated entry for MO3, and AI4
// (insight-to-action triage gap) spills into it as a secondary moRef. This
// mirrors GSK's real MO5/LP6 case rather than inventing fictional content.
const LP6_MOCK = {
  id: 'LP6', name: 'Scientific alignment tracking', moRef: 'MO3',
  kiq: 'How is portfolio-level HCP scientific alignment shifting across HS, PsO, PsA, and AS — and can Medical Affairs demonstrate collective impact?',
  kits: ['Internal stakeholder interview', 'KPI benchmarking report', 'CRM alignment scoring'],
};

const KIQ_PERIOD_DATA_LP6 = {
  status: 'new',
  thisPeriod: {
    summary: 'Split out this cycle from the broader MA impact measurement question (LP2) — scientific alignment tracking has its own listening priority now that VEGA can isolate portfolio-level shifts from raw activity volume.',
    novaSynthesis: 'The same insight-to-action attribution gap (AI4) that drives LP2 also applies here: alignment data exists but has no systematic triage into MO3-specific action ownership.',
    keyQuote: { text: 'We know insights are being captured. We don\'t have a reliable way to know which ones are being acted on and which are just sitting in the system.', msl: 'Medical Affairs Operations Lead', territory: 'Brussels', date: '2026-04-29' },
    actionPill: { insight: 'AI4', taken: true, label: 'Weekly triage cadence established' },
  },
  cumulative: {
    summary: 'As a newly split-out listening priority, LP6 has one period of data — inherited from AI4. No MO3-dedicated action exists yet distinct from the MO2 triage cadence.',
    runningInsight: 'The question is whether alignment tracking needs its own action track or can continue to ride alongside MO2\'s triage-cadence fix.',
  },
};
KIQ_PERIOD_DATA.LP6 = KIQ_PERIOD_DATA_LP6;

const STATUS_CONFIG = {
  new:    { badge: '● New this month',     style: 'bg-violet-50 text-violet-700 border-violet-200', rowBorder: '' },
  urgent: { badge: '● Urgent this month',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
  none:   { badge: '○ No new insights',    style: 'bg-zinc-100 text-zinc-500 border-zinc-200',      rowBorder: 'opacity-80' },
  gap:    { badge: '0 insights · MO gap',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
};

// ─── Insight card (inline — Tab 3 owns actionable insights) ───────────────

const PRIORITY_STYLE = {
  High:   'bg-rose-50 text-rose-700 border-rose-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  Low:    'bg-sky-50 text-sky-700 border-sky-200',
  Urgent: 'bg-rose-50 text-rose-700 border-rose-200',
  New:    'bg-sky-50 text-sky-700 border-sky-200',
};

const STATUS_STYLE = {
  Captured:    'bg-zinc-50 text-zinc-600 border-zinc-200',
  Triaged:     'bg-sky-50 text-sky-700 border-sky-200',
  Validated:   'bg-violet-50 text-violet-700 border-violet-200',
  Prioritised: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const BORDER_STYLE = {
  High:   'border-l-rose-400',
  Medium: 'border-l-amber-300',
  Low:    'border-l-sky-300',
  Urgent: 'border-l-rose-400',
  New:    'border-l-sky-300',
};

function InsightCard({ insight }) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(() => isPinned(insight.id));

  useEffect(() => {
    return subscribePinned((ids) => setPinned(ids.includes(insight.id)));
  }, [insight.id]);

  const handlePin = (e) => {
    e.stopPropagation();
    if (pinned) unpinInsight(insight.id);
    else pinInsight(insight.id);
  };

  return (
    <div className={`rounded-xl border-l-2 border border-auri-border bg-auri-card overflow-hidden ${BORDER_STYLE[insight.priority] || 'border-l-auri-border'} ${pinned ? 'ring-1 ring-auri-text/20' : ''}`}>
      <button className="w-full text-left p-4 hover:bg-auri-offset transition-colors" onClick={() => setOpen(!open)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-medium text-auri-muted">{insight.id}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${PRIORITY_STYLE[insight.priority] || ''}`}>{insight.priority}</span>
              {insight.lpRefs?.map((lp) => (
                <span key={lp} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-offset text-auri-muted border-auri-border">{lp}</span>
              ))}
              {insight.moRefs?.map((mo) => (
                <span key={mo} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{mo}</span>
              ))}
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_STYLE[insight.status] || ''}`}>{insight.status}</span>
              {pinned && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/10 text-auri-text border-auri-text/30 inline-flex items-center gap-1">
                  <GitBranch size={10} /> On Journey
                </span>
              )}
            </div>
            <div className="text-sm font-semibold text-auri-text mb-1 leading-snug">{insight.title}</div>
            <p className="text-sm text-auri-muted leading-relaxed">{insight.summary}</p>
          </div>
          <div className="text-right shrink-0 flex flex-col items-end gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-0.5">Confidence</div>
              <div className="text-lg font-bold text-auri-text">{Math.round(insight.confidenceScore * 100)}%</div>
            </div>
            <span
              role="button"
              tabIndex={0}
              onClick={handlePin}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePin(e); }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${pinned ? 'bg-auri-text text-auri-bg border-auri-text' : 'bg-auri-bg text-auri-muted border-auri-border hover:text-auri-text hover:border-auri-text/50'}`}
            >
              {pinned ? <><Check size={11} /> Added to Journey</> : <><GitBranch size={11} /> Add to Journey</>}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2.5 text-[11px] text-auri-muted">
          <span className="flex items-center gap-1"><TrendingUp size={11} /> Recurs {insight.recurrence}×</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {insight.recency}</span>
          <span className="flex items-center gap-1"><ShieldCheck size={11} /> {insight.provenance}</span>
          <ChevronDown size={13} className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="border-t border-auri-border bg-auri-bg p-4">
          {(() => {
            const action = ACTIONS.find((a) => actionCoversInsight(a, insight.id));
            if (!action) return null;
            const STATUS_PILL = {
              Proposed: 'bg-auri-offset text-auri-muted border-auri-border',
              Started:  'bg-sky-50 text-sky-700 border-sky-200',
              Accepted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            };
            return (
              <div className="rounded-lg border-l-2 border-l-amber-300 border border-auri-border bg-amber-50/30 p-3 mb-4">
                <div className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1.5">Proposed action · {action.id}</div>
                <p className="text-sm text-auri-text leading-relaxed mb-2">{action.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-auri-muted">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_PILL[action.status] || STATUS_PILL.Proposed}`}>{action.status}</span>
                  <span>{action.owner || 'Owner not yet assigned'}</span>
                  {action.dueBy && <span className="flex items-center gap-1"><Calendar size={11} /> {action.dueBy}</span>}
                  {action.moRef && <span className="px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{action.moRef}</span>}
                </div>
              </div>
            );
          })()}

          <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-2">Source signals ({insight.sourceInsights?.length || 0})</div>
          <div className="space-y-2">
            {insight.sourceInsights?.map((s, i) => (
              <div key={i} className="rounded-lg border border-auri-border bg-auri-card p-3">
                <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                  <MessageSquare size={10} />
                  <span className="font-medium">{s.type}</span><span>·</span>
                  <span>{s.role}</span><span>·</span>
                  <MapPin size={10} /><span>{s.location}</span>
                  <span className="ml-auto">{s.date}</span>
                </div>
                <p className="text-sm text-auri-text italic leading-relaxed">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── KIQ Matrix ────────────────────────────────────────────────────────────

function KIQMatrix() {
  const [openRow, setOpenRow] = useState(null);

  const allLPs = [...LISTENING_PRIORITIES, LP6_MOCK];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-auri-text" />
          <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">KIQ Intelligence Matrix</h3>
          <span className="text-xs text-auri-muted">{allLPs.length} listening priorities</span>
        </div>
        <button
          onClick={() => window.alert('Export to PowerPoint — coming soon.')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
        >
          <FileDown size={12} /> Export to PPT
        </button>
      </div>

      <div className="space-y-2">
        {allLPs.map((lp) => {
          const period = KIQ_PERIOD_DATA[lp.id];
          const statusKey = period?.status || 'gap';
          const cfg = STATUS_CONFIG[statusKey];
          const isOpen = openRow === lp.id;

          return (
            <div key={lp.id} className={`rounded-xl border border-auri-border bg-auri-card overflow-hidden ${cfg.rowBorder}`}>
              {/* Row header */}
              <button
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                onClick={() => setOpenRow(isOpen ? null : lp.id)}
              >
                <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20 shrink-0">{lp.id}</span>
                  <span className="text-[10px] text-auri-muted shrink-0">{lp.moRef}</span>
                  <span className="text-sm font-medium text-auri-text truncate">{lp.name}</span>
                  <span className="text-xs text-auri-muted italic hidden md:block truncate max-w-xs">"{lp.kiq}"</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${cfg.style}`}>{cfg.badge}</span>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted" /> : <ChevronDown size={15} className="text-auri-muted" />}
                </div>
              </button>

              {/* Expanded two-column panel */}
              {isOpen && period && (
                <div className="border-t border-auri-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-auri-border">
                    {/* Left — this period */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-text mb-3">
                        This Period — <span className="text-auri-muted">June 2026</span>
                      </div>

                      {period.thisPeriod.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.thisPeriod.summary}</p>

                          {period.thisPeriod.novaSynthesis && (
                            <div className="border-l-2 border-violet-300 pl-3 bg-violet-50/40 rounded-r-lg py-2 pr-3 mb-3">
                              <span className="text-[10px] font-semibold text-violet-700 uppercase tracking-wider">Nova synthesis · </span>
                              <span className="text-xs text-auri-text">{period.thisPeriod.novaSynthesis}</span>
                            </div>
                          )}

                          {period.thisPeriod.keyQuote && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3 mb-3">
                              <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                                <MessageSquare size={10} />
                                <span>{period.thisPeriod.keyQuote.msl}</span>
                                <span>·</span>
                                <MapPin size={10} />
                                <span>{period.thisPeriod.keyQuote.territory}</span>
                                <span className="ml-auto">{period.thisPeriod.keyQuote.date}</span>
                              </div>
                              <p className="text-sm text-auri-text italic leading-relaxed">"{period.thisPeriod.keyQuote.text}"</p>
                            </div>
                          )}

                          {period.thisPeriod.actionPill && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${period.thisPeriod.actionPill.taken ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-auri-offset text-auri-muted border-auri-border'}`}>
                              {period.thisPeriod.actionPill.taken && <Check size={12} />}
                              <span>{period.thisPeriod.actionPill.insight}</span>
                              <span>→</span>
                              <span>{period.thisPeriod.actionPill.label}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <AlertCircle size={14} className="text-auri-muted mb-2" />
                          <p className="text-sm text-auri-muted leading-relaxed">{period.thisPeriod.emptyReason}</p>
                        </div>
                      )}
                    </div>

                    {/* Right — cumulative picture */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-muted mb-3">Cumulative Picture</div>

                      {period.cumulative.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.cumulative.summary}</p>
                          {period.cumulative.runningInsight && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3">
                              <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">Running Insight</div>
                              <p className="text-xs text-auri-text italic leading-relaxed">{period.cumulative.runningInsight}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <p className="text-sm text-auri-muted leading-relaxed">{period.cumulative.emptyReason || 'No cumulative intelligence to display.'}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab3InsightIntelligence() {
  return (
    <div className="space-y-8">
      {/* Nova intelligence brief */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={15} className="text-violet-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Intelligence Brief</span>
          <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
        </div>
        <p className="text-sm text-auri-text leading-relaxed">
          This period, <strong>6 of 6 KIQs</strong> generated new intelligence. LP2 (MA impact perception) is flagged
          <strong> Urgent</strong> — insight-to-action conversion sits at 31% against a 60% target despite the new VEGA
          dashboard. LP6 (scientific alignment tracking) was split out this period from LP2's broader question, reflecting
          the same underlying triage gap now tracked as its own MO3 listening priority.
          The highest-confidence insight this period is <strong>AI1</strong> (94% confidence, LP2).
        </p>
      </div>

      {/* KIQ Matrix */}
      <KIQMatrix />

      {/* Actionable Insights */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-auri-text" />
            <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">Actionable Insights</h3>
            <span className="text-xs text-auri-muted">{INSIGHTS.length} prioritised · refreshes every 6 hours</span>
          </div>
          <button
            onClick={() => window.alert('Export to PowerPoint — coming soon.')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
          >
            <FileDown size={12} /> Export to PPT
          </button>
        </div>
        <div className="space-y-3">
          {INSIGHTS.map((i) => <InsightCard key={i.id} insight={i} />)}
        </div>
      </section>
    </div>
  );
}
