import React, { useState } from 'react';
import { GitBranch, Activity, Target } from 'lucide-react';
import AgentSurfaceHeader from './AgentSurfaceHeader';
import StrategyToAction from './StrategyToAction';
import KITPerformance from './KITPerformance';
import InsightSources from './InsightSources';

// NOVA surface. Three tabs:
// - Strategy-to-Action: the canonical NOVA output (ISP→MO→LP→insights→actions)
// - KIT Performance: scorecards, AI insight analysis, emerging themes, trend
// - Insight Sources & Impact: source value matrix + insight-to-impact lineage
const TABS = [
  { id: 'strategy', label: 'Strategy-to-Action',     icon: GitBranch },
  { id: 'kit',      label: 'KIT Performance',        icon: Activity },
  { id: 'sources',  label: 'Insight Sources & Impact', icon: Target },
];

function MedicalInsights() {
  const [activeTab, setActiveTab] = useState('strategy');

  return (
    <>
      <AgentSurfaceHeader agentId="nova" />

      <div className="flex items-center gap-1 border-b border-auri-border mb-6">
        {TABS.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                isActive
                  ? 'border-auri-text text-auri-text'
                  : 'border-transparent text-auri-muted hover:text-auri-text'
              }`}
            >
              <Icon size={15} />
              {t.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'strategy' && <StrategyToAction />}
      {activeTab === 'kit'      && <KITPerformance />}
      {activeTab === 'sources'  && <InsightSources />}
    </>
  );
}

export default MedicalInsights;
