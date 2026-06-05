import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, Activity, Users as UsersIcon, Microscope, BarChart3 } from 'lucide-react';
import { AGENTS, OUTCOME_VOLUME } from '../config';
import ExportPPTButton from './ExportPPTButton';

const ICONS = { aria: Activity, luca: UsersIcon, nova: Microscope, vega: BarChart3 };

const AGENT_ACCENT = {
  aria: { text: 'text-sky-700',     bg: 'bg-sky-50',     border: 'border-sky-200',     chip: 'bg-sky-100 text-sky-700' },
  luca: { text: 'text-violet-700',  bg: 'bg-violet-50',  border: 'border-violet-200',  chip: 'bg-violet-100 text-violet-700' },
  nova: { text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', chip: 'bg-emerald-100 text-emerald-700' },
  vega: { text: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200',   chip: 'bg-amber-100 text-amber-700' },
};

/**
 * Persistent header at the top of ARIA / LUCA / NOVA surfaces. Makes the
 * named agent present on every screen so the "direct a named agent" frame
 * from the Position Document reads through the UI.
 */
export default function AgentSurfaceHeader({ agentId, children }) {
  const agent = AGENTS[agentId];
  if (!agent) return null;
  const Icon = ICONS[agentId];
  const accent = AGENT_ACCENT[agentId] || AGENT_ACCENT.aria;
  const volume = OUTCOME_VOLUME.byAgent?.[agentId];

  return (
    <div className="mb-6">
      {/* Breadcrumb + page-level export */}
      <div className="flex items-center justify-between mb-3">
        <NavLink
          to="/"
          className="inline-flex items-center gap-1 text-xs text-auri-muted hover:text-auri-text"
        >
          <ChevronLeft size={14} />
          <span>Command Center</span>
        </NavLink>
        <ExportPPTButton surface={`The ${agent.name} surface`} />
      </div>

      {/* Agent banner */}
      <div className={`rounded-xl border ${accent.border} ${accent.bg} p-5`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <div className={`w-12 h-12 rounded-lg bg-auri-bg border ${accent.border} ${accent.text} flex items-center justify-center shrink-0`}>
              <Icon size={22} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`font-michroma text-xl tracking-wider ${accent.text}`}>{agent.name}</span>
                <span className="text-xs text-auri-muted">·</span>
                <span className="text-xs text-auri-muted">{agent.role}</span>
              </div>
              <div className="text-sm text-auri-text font-medium italic">{agent.tagline}</div>
              <p className="text-sm text-auri-muted mt-2 leading-relaxed max-w-3xl">{agent.description}</p>
            </div>
          </div>

          {volume && (
            <div className={`shrink-0 rounded-lg px-3 py-2 ${accent.chip} text-right`}>
              <div className="text-[10px] uppercase tracking-wider opacity-80">Results this period</div>
              <div className="text-base font-semibold">{volume.consumed} / {volume.committed}</div>
            </div>
          )}
        </div>

        {/* Optional surface-specific affordances (quick prompts, filters, etc.) */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
