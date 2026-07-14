import React, { useState } from 'react';
import {
  Layers, Target, Microscope, BookOpen, Users, FileText, BarChart2,
  Heart, TrendingUp, TrendingDown, ChevronDown, ChevronUp, FileDown,
  Sparkles, AlertCircle, MapPin, Calendar, MessageSquare, X,
  CheckCircle, ArrowRight, DollarSign, Brain, Zap, Activity,
} from 'lucide-react';
import {
  ISP_PILLARS, MEDICAL_OBJECTIVES, COVERAGE_TARGETS, EMERGING_THEMES,
  INSIGHT_SOURCES,
} from '../config';

// ─── Mock data (structural — override per demo via config when needed) ────

const TACTIC_POA = [
  { id: 'T1', name: 'Evidence Generation',      Icon: Microscope, budget: '$1.8M', pct: 28, moRefs: ['MO1'],             signalCount: 3, signalStatus: 'Active',  deliverables: ['HS biologic-naïve RWE sub-analysis', 'Payer step-therapy rebuttal dossier (US/EU5)', 'PsA earlier-line real-world data pull'], novaSummary: 'Signal volume confirms payer step-therapy requirements as the #1 barrier to earlier Bimzelx use in biologic-naïve HS — a 4–6 month treatment delay pattern recurring across US and EU field reports.' },
  { id: 'T2', name: 'Medical Education',         Icon: BookOpen,   budget: '$1.4M', pct: 22, moRefs: ['MO1','MO4'],       signalCount: 2, signalStatus: 'Monitor', deliverables: ['Community dermatologist IL-17A/F case-based module', 'HS prior-auth support one-pager for P&T reviewers'], novaSummary: 'Community dermatologists understand the IL-17A/F mechanism in theory but are not yet translating it into prescribing decisions — patient-case materials are the missing lever.' },
  { id: 'T3', name: 'Field Medical Engagement',  Icon: Users,      budget: '$1.6M', pct: 25, moRefs: ['MO1','MO2','MO5'], signalCount: 5, signalStatus: 'Alert',   deliverables: ['MSL interaction quality programme', 'Weekly insight-to-action triage cadence', 'Tier-1 neurology KOL outreach plan (seizure pipeline)'], novaSummary: 'Highest signal volume of any tactic. MA impact measurement (MO2) is the dominant theme — 69% of field insights are not actioned within 90 days.' },
  { id: 'T4', name: 'Scientific Communications', Icon: FileText,   budget: '$0.6M', pct:  9, moRefs: ['MO3','MO4'],       signalCount: 1, signalStatus: 'Active',  deliverables: ['IL-17A/F mechanism manuscript pipeline', 'AAD/EULAR 2026 poster submissions'], novaSummary: 'One signal this cycle: scientific alignment tracking (MO3) still has no dedicated listening priority of its own — folded into the broader MA impact question.' },
  { id: 'T5', name: 'HEOR',                      Icon: BarChart2,  budget: '$0.5M', pct:  8, moRefs: ['MO1'],             signalCount: 0, signalStatus: 'Monitor', deliverables: ['HS step-therapy cost-of-delay model', 'Payer landscape analysis (US/EU5 formulary review)'], novaSummary: 'No new signals this cycle. Payer landscape analysis commissioned in response to AI2; budget allocation reviewed, no reallocation proposed.' },
  { id: 'T6', name: 'Patient Advocacy',          Icon: Heart,      budget: '$0.5M', pct:  8, moRefs: ['MO1'],             signalCount: 1, signalStatus: 'Active',  deliverables: ['HS patient organisation engagement plan', 'Biologic-naïve patient disease-burden co-creation'], novaSummary: 'One signal: HS patient groups requesting plain-language materials on earlier biologic eligibility. Aligns with the MO1 payer-delay narrative.' },
];

const INSIGHT_LOOPS = [
  {
    id: 'IL1', tactic: 'Field Medical Engagement', moRef: 'MO2',
    signals: [
      { source: 'Internal stakeholder interview', msl: 'Head of Medical Affairs', territory: 'Brussels', date: '2026-04-15', text: 'I can tell you how many MSL interactions we had this quarter. I cannot tell you what they changed.' },
      { source: 'Internal stakeholder interview', msl: 'VP Medical Affairs, North America', territory: 'Atlanta, GA', date: '2026-04-22', text: 'Our board wants to see the return on the MA investment. We don\'t have a number we can stand behind right now.' },
    ],
    novaSynthesis: 'Pattern across two senior stakeholder interviews: MA leadership tracks activity volume but cannot attribute it to alignment shifts or downstream prescribing. This is a synthesis and attribution problem, not a data problem. Confidence: 94%.',
    insight: { id: 'AI1', confidence: 0.94, status: 'Prioritised', title: 'MA leadership cannot quantify field medical contribution to outcomes', summary: 'Internal stakeholder interviews consistently show MA leadership tracks MSL activity volume but cannot connect it to scientific alignment shifts, insight generation, or prescribing behavior.' },
    action: { title: 'Deploy VEGA MA impact dashboard for next quarterly leadership review', owner: 'Medical Affairs Ops', dueBy: '2026-Q3', moRef: 'MO2' },
    loopCondition: 'VEGA MA impact dashboard deployed and reviewed by leadership',
    loopMet: true,
  },
  {
    id: 'IL2', tactic: 'Evidence Generation', moRef: 'MO1',
    signals: [
      { source: 'MSL field report', msl: 'Community dermatologist', territory: 'Chicago, IL', date: '2026-05-03', text: 'I have patients who are clearly Bimzelx candidates. My hands are tied until they fail on adalimumab. That takes months and their disease gets worse.' },
      { source: 'Ad board summary', msl: 'Academic dermatologist, HS specialist', territory: 'London, UK', date: '2026-04-14', text: 'The step therapy language in the payer criteria was written before the current Bimzelx HS data existed. It needs to be challenged with updated evidence.' },
    ],
    novaSynthesis: 'Payer step-therapy requirements are creating a 4–6 month treatment delay for biologic-naïve HS patients who would be appropriate Bimzelx candidates earlier. No prior-auth support materials currently exist for field use. Confidence: 88%.',
    insight: { id: 'AI2', confidence: 0.88, status: 'Prioritised', title: 'Biologic-naïve HS patients facing 4–6 month payer delay for Bimzelx', summary: 'Payer step therapy requiring documented TNF-alpha failure before approving Bimzelx in biologic-naïve HS is creating avoidable disease progression.' },
    action: { title: 'Develop prior-auth support one-pager for Bimzelx in biologic-naïve HS (payer-facing)', owner: 'Field Medical', dueBy: '2026-Q3', moRef: 'MO1' },
    loopCondition: 'Prior-auth one-pager approved and deployed to P&T-facing field materials',
    loopMet: false,
  },
  {
    id: 'IL3', tactic: 'Medical Education', moRef: 'MO4',
    signals: [
      { source: 'MSL interaction', msl: 'Community dermatologist', territory: 'Phoenix, AZ', date: '2026-04-08', text: 'I know the IL-17F story in theory. I don\'t have a patient case that makes me reach for it over something I already know.' },
      { source: 'Congress debrief', msl: 'Community dermatologist', territory: 'AAD 2025', date: '2026-03-09', text: 'The mechanism talk was compelling. I just need to know what it means for my patients who haven\'t responded fully to Cosentyx.' },
    ],
    novaSynthesis: 'Academic dermatologists understand the dual IL-17A/F rationale clearly, but community dermatologists have not translated the mechanism into prescribing preference. Competitor real-world data is filling the conversation gap. Confidence: 79%.',
    insight: { id: 'AI3', confidence: 0.79, status: 'Validated', title: 'IL-17A/F differentiation not translating to prescribing decisions in community', summary: 'Community dermatologists do not yet translate the dual IL-17A/F mechanism into a prescribing preference, particularly among mid-volume prescribers.' },
    action: { title: 'Develop patient-case-led IL-17A/F differentiation materials for community dermatologists', owner: 'Medical Comms', dueBy: '2026-Q3', moRef: 'MO4' },
    loopCondition: 'Patient-case materials reviewed, approved and deployed to MSL tablets',
    loopMet: false,
  },
  {
    id: 'IL4', tactic: 'Field Medical Engagement', moRef: 'MO2',
    signals: [
      { source: 'Internal KPI review', msl: 'VEGA analysis engine', territory: 'ucb-prod-azure', date: '2026-05-01', text: 'Insight-to-action conversion rate: 31% (90-day window). Target: 60%. Gap: 29 percentage points. Primary bottleneck: triage ownership undefined.' },
      { source: 'Internal stakeholder interview', msl: 'Medical Affairs Operations Lead', territory: 'Brussels', date: '2026-04-29', text: 'We know insights are being captured. We don\'t have a reliable way to know which ones are being acted on and which are just sitting in the system.' },
    ],
    novaSynthesis: 'Structural gap: insights are captured in field systems but there is no systematic triage process routing them to NOVA strategy-to-action review or assigning an owner. Confidence: 91%.',
    insight: { id: 'AI4', confidence: 0.91, status: 'Prioritised', title: 'Insight-to-action triage gap: 69% of field insights not actioned within 90 days', summary: 'VEGA ROMI analysis shows 69% of MSL-captured insights are not progressing to a defined action within 90 days — high-quality field intelligence is sitting inert.' },
    action: { title: 'Establish weekly insight triage cadence: route high-recurrence insights to action owners within 10 days', owner: 'Medical Affairs Ops', dueBy: '2026-Q2', moRef: 'MO2' },
    loopCondition: 'Weekly triage cadence established and staffed',
    loopMet: true,
  },
];

const MAO_METRICS = [
  { label: 'Total signals ingested',              value: '198', sub: 'this cycle',          alert: false },
  { label: 'Actionable insights generated',       value: '5',   sub: '+2 vs prior cycle',   alert: false },
  { label: 'Actions initiated',                   value: '4',   sub: '4 of 7 actions in motion', alert: false },
  { label: 'Tactical POA areas reshaped by AI',   value: '2',   sub: 'of 6 tactics',         alert: false },
  { label: 'MOs with critical coverage gaps',     value: '2',   sub: 'MO2 · MO5 Gap',        alert: true  },
];

const MAO_TABLE = [
  { mo: 'MO1', name: 'HS scientific leadership',        signalsIn: 54, breakdown: 'MSL 55% · Ad board 26% · Congress 19%',          insightIds: 'AI2',      actionsCount: 2, actionsInitiated: 1, coverage: 'Sufficient', aiImpact: 'Reshaped', impactDesc: 'Prior-auth one-pager in development; HEOR payer landscape analysis commissioned.' },
  { mo: 'MO2', name: 'MA impact measurement',           signalsIn: 46, breakdown: 'Internal interview 61% · KPI benchmarking 39%',    insightIds: 'AI1, AI4', actionsCount: 3, actionsInitiated: 3, coverage: 'Gap',        aiImpact: 'Reshaped', impactDesc: 'VEGA MA impact dashboard deployed for Q3 leadership review; weekly insight triage cadence established.' },
  { mo: 'MO3', name: 'Scientific alignment tracking',   signalsIn: 31, breakdown: 'Internal KPI review 68% · Stakeholder interview 32%', insightIds: 'AI4',   actionsCount: 0, actionsInitiated: 0, coverage: 'Low',        aiImpact: 'Not yet', impactDesc: 'Insight spillover from AI4 (MA impact) but no MO3-dedicated action yet accepted by leadership.' },
  { mo: 'MO4', name: 'IL-17A/F differentiation',        signalsIn: 38, breakdown: 'MSL interaction 55% · Congress debrief 45%',        insightIds: 'AI3',      actionsCount: 1, actionsInitiated: 0, coverage: 'Low',        aiImpact: 'Partial',  impactDesc: 'Patient-case-led differentiation materials proposed; awaiting Medical Comms sign-off.' },
  { mo: 'MO5', name: 'Neurology KOL mapping',           signalsIn: 14, breakdown: 'Publication analysis 64% · Congress speaker tracking 36%', insightIds: 'AI5', actionsCount: 1, actionsInitiated: 0, coverage: 'Gap',        aiImpact: 'Not yet', impactDesc: 'Tier-1 neurology KOL list drafted (14 candidates); outreach plan not yet initiated.' },
];

const AUDIT_TRAILS = {
  MO1: {
    rawSignals: [
      { source: 'MSL field report', msl: 'Community dermatologist', territory: 'Chicago, IL', date: '2026-05-03', text: 'I have patients who are clearly Bimzelx candidates. My hands are tied until they fail on adalimumab.' },
      { source: 'Ad board summary', msl: 'Academic dermatologist, HS specialist', territory: 'London, UK', date: '2026-04-14', text: 'The step therapy language in the payer criteria was written before the current Bimzelx HS data existed.' },
    ],
    synthesis: { text: 'Pattern across MSL and advisory-board sources: payer step-therapy requirements are creating a 4–6 month delay for biologic-naïve HS patients who are appropriate Bimzelx candidates earlier.', confidence: 0.88, checks: ['MSL field reports', 'Ad board transcript', 'Payer criteria language review'] },
    insight: { id: 'AI2', confidence: 0.88, status: 'Prioritised', title: 'Biologic-naïve HS patients facing 4–6 month payer delay for Bimzelx', summary: 'Step therapy requiring documented TNF-alpha failure is delaying appropriate biologic-naïve HS patients.' },
    action: { title: 'Develop prior-auth support one-pager for Bimzelx in biologic-naïve HS (payer-facing)', owner: 'Field Medical', date: '2026-Q3', mos: ['MO1'] },
    planChange: { when: 'May 2026', effect: 'HEOR payer landscape analysis commissioned across US and EU5 formularies. New deliverable added: prior-auth support one-pager for P&T-facing use.', condition: 'Prior-auth one-pager approved and deployed' },
  },
  MO2: {
    rawSignals: [
      { source: 'Internal stakeholder interview', msl: 'Head of Medical Affairs', territory: 'Brussels', date: '2026-04-15', text: 'I can tell you how many MSL interactions we had this quarter. I cannot tell you what they changed.' },
      { source: 'Internal stakeholder interview', msl: 'VP Medical Affairs, North America', territory: 'Atlanta, GA', date: '2026-04-22', text: 'Our board wants to see the return on the MA investment. We don\'t have a number we can stand behind right now.' },
    ],
    synthesis: { text: 'MA leadership tracks activity volume but cannot attribute it to alignment shifts or prescribing behavior — a synthesis and attribution problem, not a data problem.', confidence: 0.94, checks: ['Internal stakeholder interviews', 'KPI benchmarking report', 'VEGA ROMI analysis'] },
    insight: { id: 'AI1', confidence: 0.94, status: 'Prioritised', title: 'MA leadership cannot quantify field medical contribution to outcomes', summary: 'MA leadership tracks MSL activity volume but cannot connect it to scientific alignment shifts, insight generation, or prescribing behavior.' },
    action: { title: 'Deploy VEGA MA impact dashboard for next quarterly leadership review', owner: 'Medical Affairs Ops', date: '2026-Q3', mos: ['MO2'] },
    planChange: { when: 'June 2026', effect: 'VEGA MA impact dashboard deployed ahead of Q3 leadership review. New deliverable: 3 instrumented MA outcome metrics (alignment velocity, insight conversion, exchange quality). Weekly insight triage cadence established.', condition: 'Dashboard reviewed by Medical Affairs leadership' },
  },
};

const ROI_METRICS = [
  { label: 'Total ISP Budget', value: '$6.3M', sub: '2024–2026' },
  { label: 'Insight affirmation score', value: '68 / 100', sub: '+6 pts vs Q1 2026' },
  { label: 'AI-proposed reallocation', value: '$180K', sub: 'pending approval' },
  { label: 'Actions taken from insights', value: '4 / 7', sub: '57% actioned this cycle' },
];

const ROI_TACTICS = [
  { tactic: 'Field Medical Engagement', budget: '$1.6M', pct: 25, delta: 'up',     note: 'Increase by 5% — highest signal ROI this cycle, driven by MA impact triage' },
  { tactic: 'Evidence Generation',       budget: '$1.8M', pct: 28, delta: 'stable', note: 'Maintain allocation — HS payer-delay evidence generation on track' },
  { tactic: 'Medical Education',          budget: '$1.4M', pct: 22, delta: 'up',     note: 'Increase by 3% — community IL-17A/F translation gap confirmed' },
  { tactic: 'Scientific Communications', budget: '$0.6M', pct:  9, delta: 'down',   note: 'Decrease by 3% — low signal return this cycle' },
  { tactic: 'HEOR',                       budget: '$0.5M', pct:  8, delta: 'up',     note: 'Increase by 2% — payer landscape analysis approved' },
  { tactic: 'Patient Advocacy',           budget: '$0.5M', pct:  8, delta: 'stable', note: 'Maintain allocation' },
];

// ─── Shared helpers ────────────────────────────────────────────────────────

const COVERAGE_STYLE = {
  Sufficient: { chip: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-500', pct: 100 },
  Low:        { chip: 'bg-amber-50 text-amber-700 border-amber-200',       bar: 'bg-amber-500',   pct: 55  },
  Gap:        { chip: 'bg-rose-50 text-rose-700 border-rose-200',          bar: 'bg-rose-500',    pct: 20  },
};

const SIGNAL_STYLE = {
  Alert:   'bg-rose-50 text-rose-700 border-rose-200',
  Active:  'bg-emerald-50 text-emerald-700 border-emerald-200',
  Monitor: 'bg-amber-50 text-amber-700 border-amber-200',
};

const IMPACT_STYLE = {
  Reshaped: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Partial:  'bg-amber-50 text-amber-700 border-amber-200',
  'Not yet':'bg-zinc-50 text-zinc-600 border-zinc-200',
};

function SectionHeader({ icon: Icon, label, sub, right }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-auri-text" />
        <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">{label}</h3>
        {sub && <span className="text-xs text-auri-muted">{sub}</span>}
      </div>
      {right}
    </div>
  );
}

function ExportBtn({ label = 'Export to PPT' }) {
  return (
    <button
      onClick={() => window.alert('Export to PowerPoint — coming soon.')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all shrink-0"
    >
      <FileDown size={12} />
      {label}
    </button>
  );
}

// ─── Section components ────────────────────────────────────────────────────

function NovaStrategicBrief() {
  return (
    <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={15} className="text-violet-600" />
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Strategic Brief</span>
        <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
      </div>
      <p className="text-sm text-auri-text leading-relaxed">
        The strategy-to-action score stands at <strong>68/100</strong>, up 6 points from last cycle.
        MA impact measurement (MO2) remains the highest-signal theme — insight-to-action conversion sits at
        just <strong>31%</strong> against a 60% target, the core driver behind this quarter's dashboard build.
        The HS biologic-naïve payer-delay pattern (MO1) is the #2 priority: a 4–6 month treatment delay is
        recurring across US and EU field reports. Neurology KOL mapping for the seizure pipeline (MO5) has
        received minimal new signals this cycle — an 18-month engagement window before pipeline data readouts
        is narrowing.
      </p>
    </div>
  );
}

function ISPPillars() {
  return (
    <section>
      <SectionHeader icon={Layers} label="Tier 1 — Integrated Strategic Plan" sub="2024–2026" right={<ExportBtn />} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {ISP_PILLARS.map((p) => (
          <div key={p.id} className="rounded-xl border border-auri-border bg-auri-card p-4">
            <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-1">Pillar · {p.id.toUpperCase()}</div>
            <div className="text-sm font-semibold text-auri-text leading-snug mb-1.5">{p.title}</div>
            <p className="text-xs text-auri-muted leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MedicalObjectivesTier2() {
  return (
    <section>
      <SectionHeader icon={Target} label="Tier 2 — Medical Objectives" sub="Plan of Action · coverage status" right={<ExportBtn />} />
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium w-16">ID</th>
              <th className="text-left px-4 py-2.5 font-medium">Objective</th>
              <th className="text-left px-4 py-2.5 font-medium w-32">Coverage</th>
              <th className="text-left px-4 py-2.5 font-medium w-40">Progress</th>
            </tr>
          </thead>
          <tbody>
            {MEDICAL_OBJECTIVES.map((mo) => {
              const score = COVERAGE_TARGETS[mo.id] || 'Low';
              const style = COVERAGE_STYLE[score];
              return (
                <tr key={mo.id} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{mo.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-auri-text text-sm">{mo.name}</div>
                    <div className="text-xs text-auri-muted mt-0.5">{mo.description}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${style.chip}`}>{score}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-full h-1.5 bg-auri-border rounded-full overflow-hidden">
                      <div className={`h-full ${style.bar} transition-all`} style={{ width: `${style.pct}%` }} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TacticalPOA() {
  return (
    <section>
      <SectionHeader icon={Activity} label="Tier 3 — Medical Affairs Tactical POA" sub="six tactic areas" right={<ExportBtn />} />
      {/* Pillar-to-MO mapping bar */}
      <div className="flex gap-1 mb-4 text-[10px] font-medium">
        {MEDICAL_OBJECTIVES.map((mo) => {
          const score = COVERAGE_TARGETS[mo.id] || 'Low';
          const style = COVERAGE_STYLE[score];
          return (
            <div key={mo.id} className={`flex-1 px-2 py-1.5 rounded text-center border ${style.chip}`}>
              {mo.id}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {TACTIC_POA.map((t) => {
          const { Icon } = t;
          return (
            <div key={t.id} className="rounded-xl border border-auri-border bg-auri-card p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Icon size={15} className="text-auri-muted shrink-0" />
                  <span className="text-sm font-semibold text-auri-text leading-snug">{t.name}</span>
                </div>
                <span className="text-[10px] font-semibold text-auri-muted bg-auri-offset border border-auri-border px-2 py-0.5 rounded shrink-0">{t.budget} · {t.pct}%</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2.5">
                {t.moRefs.map((mo) => (
                  <span key={mo} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{mo}</span>
                ))}
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ml-auto ${SIGNAL_STYLE[t.signalStatus]}`}>
                  {t.signalCount} signal{t.signalCount !== 1 ? 's' : ''} · {t.signalStatus}
                </span>
              </div>
              <ul className="text-xs text-auri-muted space-y-0.5 mb-3">
                {t.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5"><span className="text-auri-border mt-0.5">—</span>{d}</li>
                ))}
              </ul>
              <div className="border-l-2 border-violet-300 pl-2.5 text-xs text-auri-muted italic leading-relaxed">{t.novaSummary}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function InsightLoop() {
  const [openLoop, setOpenLoop] = useState(null);

  return (
    <section>
      <SectionHeader icon={Zap} label="Tier 4 — Insight Loop" sub="signal → insight → action → loop closure" right={<ExportBtn />} />
      <div className="space-y-2">
        {INSIGHT_LOOPS.map((loop) => {
          const isOpen = openLoop === loop.id;
          return (
            <div key={loop.id} className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                onClick={() => setOpenLoop(isOpen ? null : loop.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-auri-text">{loop.tactic}</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{loop.moRef}</span>
                  <span className="text-xs text-auri-muted">{loop.signals.length} signal{loop.signals.length !== 1 ? 's' : ''} · AI{loop.insight.id.replace('AI','')} → {loop.action.owner || 'pending'}</span>
                </div>
                <div className="flex items-center gap-2">
                  {loop.loopMet && <CheckCircle size={14} className="text-emerald-600" />}
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted" /> : <ChevronDown size={15} className="text-auri-muted" />}
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-auri-border p-4 space-y-4">
                  {/* Stage 1 — Incoming signals */}
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-muted mb-2">Stage 1 — Incoming Signals</div>
                    <div className="space-y-2 mb-2">
                      {loop.signals.map((s, i) => (
                        <div key={i} className="rounded-lg border border-auri-border bg-auri-bg p-3">
                          <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1">
                            <span className="font-medium text-auri-text">{s.source}</span>
                            <span>·</span><MapPin size={10} /><span>{s.territory}</span>
                            <span>·</span><span>{s.msl}</span>
                            <span className="ml-auto">{s.date}</span>
                          </div>
                          <p className="text-xs text-auri-text italic leading-relaxed">"{s.text}"</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-l-2 border-violet-300 pl-3 bg-violet-50/50 rounded-r-lg py-2 pr-3">
                      <span className="text-[10px] font-semibold text-violet-700 uppercase tracking-wider">Nova synthesis · </span>
                      <span className="text-xs text-auri-text">{loop.novaSynthesis}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-auri-muted"><ArrowRight size={14} /><span className="text-[10px] uppercase tracking-wider">Stage 2 — Actionable Insight</span></div>

                  {/* Stage 2 — Insight */}
                  <div className="rounded-lg border border-auri-border bg-auri-bg p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-semibold text-auri-muted">{loop.insight.id}</span>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-violet-50 text-violet-700 border-violet-200">{loop.insight.status}</span>
                      <span className="text-[10px] text-auri-muted ml-auto">Confidence {Math.round(loop.insight.confidence * 100)}%</span>
                    </div>
                    <div className="text-sm font-semibold text-auri-text mb-1">{loop.insight.title}</div>
                    <p className="text-xs text-auri-muted leading-relaxed">{loop.insight.summary}</p>
                  </div>

                  <div className="flex items-center gap-2 text-auri-muted"><ArrowRight size={14} /><span className="text-[10px] uppercase tracking-wider">Stage 3 — Proposed Action</span></div>

                  {/* Stage 3 — Action */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
                    <div className="text-sm font-medium text-auri-text mb-1.5">{loop.action.title}</div>
                    <div className="flex items-center gap-3 text-[10px] text-auri-muted">
                      <span>{loop.action.owner || 'Owner TBD'}</span>
                      <span>·</span>
                      <Calendar size={10} />
                      <span>{loop.action.dueBy}</span>
                      <span>·</span>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{loop.action.moRef}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-auri-muted"><ArrowRight size={14} /><span className="text-[10px] uppercase tracking-wider">Stage 4 — Close the Loop</span></div>

                  {/* Stage 4 — Closure */}
                  <div className={`rounded-lg border p-3 flex items-center gap-3 ${loop.loopMet ? 'border-emerald-200 bg-emerald-50/50' : 'border-auri-border bg-auri-bg'}`}>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${loop.loopMet ? 'bg-emerald-500' : 'bg-auri-muted'}`} />
                    <div>
                      <div className="text-xs text-auri-text">{loop.loopCondition}</div>
                      <div className={`text-[10px] font-medium mt-0.5 ${loop.loopMet ? 'text-emerald-600' : 'text-auri-muted'}`}>{loop.loopMet ? 'Condition met — loop closed' : 'In progress'}</div>
                    </div>
                    {loop.loopMet && <CheckCircle size={16} className="text-emerald-500 ml-auto" />}
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

function MAODashboard() {
  const [openTrail, setOpenTrail] = useState(null);

  return (
    <section>
      <SectionHeader icon={Brain} label="MAO Intelligence Dashboard" sub="AI-driven impact on strategy" right={<ExportBtn />} />

      {/* Metric strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
        {MAO_METRICS.map((m) => (
          <div key={m.label} className={`rounded-xl border p-3 ${m.alert ? 'border-rose-200 bg-rose-50/60' : 'border-auri-border bg-auri-card'}`}>
            <div className={`text-xl font-bold mb-0.5 ${m.alert ? 'text-rose-600' : 'text-auri-text'}`}>{m.value}</div>
            <div className="text-[10px] text-auri-muted leading-snug">{m.label}</div>
            <div className={`text-[10px] font-medium mt-0.5 ${m.alert ? 'text-rose-500' : 'text-auri-muted'}`}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Per-MO table with audit trail */}
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium w-48">Medical Objective</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Signals In</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Insights</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Actions</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Coverage</th>
              <th className="text-left px-4 py-2.5 font-medium">AI-Driven Impact</th>
            </tr>
          </thead>
          <tbody>
            {MAO_TABLE.map((row) => {
              const covStyle = COVERAGE_STYLE[row.coverage] || COVERAGE_STYLE.Low;
              const impStyle = IMPACT_STYLE[row.aiImpact] || IMPACT_STYLE['Not yet'];
              const trailData = AUDIT_TRAILS[row.mo];
              const isOpen = openTrail === row.mo;
              return (
                <React.Fragment key={row.mo}>
                  <tr
                    className={`border-t border-auri-border ${trailData ? 'cursor-pointer hover:bg-auri-offset' : ''} transition-colors`}
                    onClick={() => trailData && setOpenTrail(isOpen ? null : row.mo)}
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium text-auri-text">{row.mo}</div>
                      <div className="text-xs text-auri-muted">{row.name}</div>
                      {trailData && <div className="text-[10px] text-violet-600 mt-0.5">Click to view audit trail</div>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-auri-text">{row.signalsIn}</div>
                      <div className="text-[10px] text-auri-muted leading-snug mt-0.5">{row.breakdown}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-auri-muted">{row.insightIds}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-auri-text">{row.actionsInitiated}</span>
                      <span className="text-xs text-auri-muted"> / {row.actionsCount}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${covStyle.chip}`}>{row.coverage}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border mr-2 ${impStyle}`}>{row.aiImpact}</span>
                      <span className="text-xs text-auri-muted">{row.impactDesc}</span>
                    </td>
                  </tr>

                  {/* Inline audit trail */}
                  {isOpen && trailData && (
                    <tr className="border-t border-violet-200 bg-violet-50/40">
                      <td colSpan={6} className="px-4 py-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Sparkles size={14} className="text-violet-600" />
                            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Insight-to-Change Audit Trail — {row.mo}</span>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); setOpenTrail(null); }} className="text-auri-muted hover:text-auri-text transition-colors">
                            <X size={14} />
                          </button>
                        </div>

                        <div className="relative pl-6 space-y-4">
                          <div className="absolute left-2 top-0 bottom-0 w-px bg-violet-200" />

                          {/* Raw signals */}
                          <div>
                            <div className="absolute left-0 w-4 h-4 rounded-full bg-auri-muted flex items-center justify-center -translate-x-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-auri-muted mb-2">Raw Signals</div>
                            <div className="space-y-1.5">
                              {trailData.rawSignals.map((s, i) => (
                                <div key={i} className="rounded-lg border border-auri-border bg-auri-bg p-2.5">
                                  <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1">
                                    <MessageSquare size={10} /><span className="font-medium">{s.source}</span>
                                    <span>·</span><span>{s.msl}</span><span>·</span><span>{s.territory}</span>
                                    <span className="ml-auto">{s.date}</span>
                                  </div>
                                  <p className="text-xs text-auri-text italic">"{s.text}"</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Nova synthesis */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-violet-700 mb-2">Nova Synthesis</div>
                            <div className="border-l-2 border-violet-400 pl-3 bg-white/60 rounded-r-lg py-2 pr-3">
                              <p className="text-xs text-auri-text mb-1">{trailData.synthesis.text}</p>
                              <div className="flex items-center gap-3 text-[10px] text-auri-muted">
                                <span>Confidence: <strong className="text-violet-700">{Math.round(trailData.synthesis.confidence * 100)}%</strong></span>
                                <span>Cross-checks: {trailData.synthesis.checks.join(' · ')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Actionable insight */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-auri-muted mb-2">Actionable Insight</div>
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-2.5">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-semibold text-auri-muted">{trailData.insight.id}</span>
                                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-violet-50 text-violet-700 border-violet-200">{trailData.insight.status}</span>
                                <span className="text-[10px] text-auri-muted ml-auto">{Math.round(trailData.insight.confidence * 100)}% confidence</span>
                              </div>
                              <div className="text-sm font-medium text-auri-text mb-0.5">{trailData.insight.title}</div>
                              <p className="text-xs text-auri-muted">{trailData.insight.summary}</p>
                            </div>
                          </div>

                          {/* Proposed action */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-auri-muted mb-2">Proposed Action</div>
                            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-2.5">
                              <div className="text-sm font-medium text-auri-text mb-1">{trailData.action.title}</div>
                              <div className="flex items-center gap-3 text-[10px] text-auri-muted">
                                <span>{trailData.action.owner}</span><span>·</span>
                                <Calendar size={10} /><span>{trailData.action.date}</span><span>·</span>
                                {trailData.action.mos.map((m) => <span key={m} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{m}</span>)}
                              </div>
                            </div>
                          </div>

                          {/* Plan change */}
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 mb-2">Plan Change</div>
                            <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/60 p-2.5">
                              <div className="flex items-center gap-2 mb-1.5">
                                <CheckCircle size={13} className="text-emerald-600" />
                                <span className="text-[10px] font-semibold text-emerald-700">{trailData.planChange.when}</span>
                              </div>
                              <p className="text-xs text-auri-text mb-1.5">{trailData.planChange.effect}</p>
                              <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Loop closure: {trailData.planChange.condition}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function EmergingThemesSection() {
  if (!EMERGING_THEMES || EMERGING_THEMES.length === 0) return null;
  return (
    <section>
      <SectionHeader icon={TrendingUp} label="Emerging Themes" sub="growth-ranked · all source channels" right={<ExportBtn />} />
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium">Theme</th>
              <th className="text-left px-4 py-2.5 font-medium w-20">Growth</th>
              <th className="text-left px-4 py-2.5 font-medium w-32">First detected</th>
              <th className="text-left px-4 py-2.5 font-medium w-40">Related KIT</th>
              <th className="text-left px-4 py-2.5 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {EMERGING_THEMES.map((t) => {
              const heat = t.growthRate > 50 ? 'text-emerald-700 font-semibold' : t.growthRate > 20 ? 'text-emerald-600' : 'text-auri-text';
              return (
                <tr key={t.id} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{t.theme}</td>
                  <td className={`px-4 py-3 ${heat}`}>+{t.growthRate}%</td>
                  <td className="px-4 py-3 text-auri-muted">{t.firstDetected}</td>
                  <td className="px-4 py-3 text-auri-text">{t.relatedKIT}</td>
                  <td className="px-4 py-3 text-xs text-auri-muted leading-snug">{t.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InsightSourceMatrix() {
  if (!INSIGHT_SOURCES || INSIGHT_SOURCES.length === 0) return null;
  return (
    <section>
      <SectionHeader icon={Target} label="Insight Source Value Matrix" sub="volume · quality · ROI" right={<ExportBtn />} />
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium">Source</th>
              <th className="text-left px-4 py-2.5 font-medium w-24">Volume</th>
              <th className="text-left px-4 py-2.5 font-medium w-32">Quality</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Leads to action</th>
              <th className="text-left px-4 py-2.5 font-medium w-28">Cost / insight</th>
              <th className="text-left px-4 py-2.5 font-medium w-24">ROI score</th>
            </tr>
          </thead>
          <tbody>
            {INSIGHT_SOURCES.map((s) => {
              const qColor = s.qualityScore >= 80 ? 'bg-emerald-500' : s.qualityScore >= 60 ? 'bg-amber-500' : 'bg-rose-500';
              const roiColor = s.roiScore >= 8 ? 'text-emerald-600' : s.roiScore >= 5 ? 'text-amber-600' : 'text-rose-600';
              return (
                <tr key={s.id} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{s.source}</td>
                  <td className="px-4 py-3 text-auri-text">{s.volume.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-auri-border rounded-full overflow-hidden">
                        <div className={`h-full ${qColor}`} style={{ width: `${s.qualityScore}%` }} />
                      </div>
                      <span className="text-xs text-auri-muted">{s.qualityScore}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-auri-text">{s.leadsToActionPct}%</td>
                  <td className="px-4 py-3 text-auri-muted">${s.costPerInsight.toLocaleString()}</td>
                  <td className={`px-4 py-3 font-semibold ${roiColor}`}>{s.roiScore.toFixed(1)}/10</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ROICalculator() {
  return (
    <section>
      <SectionHeader icon={DollarSign} label="Medical ROI Calculator" sub="budget allocation · insight affirmation" right={<ExportBtn />} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {ROI_METRICS.map((m) => (
          <div key={m.label} className="rounded-xl border border-auri-border bg-auri-card p-3">
            <div className="text-xl font-bold text-auri-text mb-0.5">{m.value}</div>
            <div className="text-xs text-auri-muted">{m.label}</div>
            <div className="text-[10px] text-auri-muted mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
            <tr>
              <th className="text-left px-4 py-2.5 font-medium">Tactic</th>
              <th className="text-left px-4 py-2.5 font-medium w-24">Budget</th>
              <th className="text-left px-4 py-2.5 font-medium w-40">Allocation</th>
              <th className="text-left px-4 py-2.5 font-medium w-20">Signal</th>
              <th className="text-left px-4 py-2.5 font-medium">Nova reallocation note</th>
            </tr>
          </thead>
          <tbody>
            {ROI_TACTICS.map((t) => {
              const deltaEl = t.delta === 'up'
                ? <TrendingUp size={13} className="text-emerald-600" />
                : t.delta === 'down'
                ? <TrendingDown size={13} className="text-rose-600" />
                : <span className="w-3 h-px bg-auri-muted inline-block" />;
              return (
                <tr key={t.tactic} className="border-t border-auri-border">
                  <td className="px-4 py-3 font-medium text-auri-text">{t.tactic}</td>
                  <td className="px-4 py-3 text-auri-text">{t.budget}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-auri-border rounded-full overflow-hidden">
                        <div className="h-full bg-auri-text" style={{ width: `${(t.pct / 28) * 100}%` }} />
                      </div>
                      <span className="text-xs text-auri-muted">{t.pct}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{deltaEl}</td>
                  <td className="px-4 py-3 text-xs text-auri-muted">{t.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <AlertCircle size={14} className="text-amber-600" />
          <span className="text-xs font-semibold text-amber-700">Nova Reallocation Recommendation</span>
        </div>
        <p className="text-xs text-auri-text">
          Based on signal ROI analysis, Nova recommends reallocating <strong>$120K</strong> from Scientific Communications to Field Medical Engagement and <strong>$60K</strong> to Medical Education.
          Combined reallocation of <strong>$180K</strong> is projected to move insight-to-action conversion from <strong>31% → 45%</strong> within 2 cycles, closing roughly a third of the gap to the 60% target.
          Pending Medical Affairs leadership approval.
        </p>
      </div>
    </section>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab1MedicalStrategy() {
  return (
    <div className="space-y-8">
      <NovaStrategicBrief />
      <ISPPillars />
      <MedicalObjectivesTier2 />
      <TacticalPOA />
      <InsightLoop />
      <MAODashboard />
      <EmergingThemesSection />
      <InsightSourceMatrix />
      <ROICalculator />
    </div>
  );
}
