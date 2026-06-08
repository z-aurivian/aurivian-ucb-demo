import {
  KIT_SCORECARDS,
  KOL_DATA,
  INSIGHTS,
  ACTIONS,
  ISP_PILLARS,
  MEDICAL_OBJECTIVES,
  LISTENING_PRIORITIES,
  PRODUCT_OPTIONS,
  CONGRESS_OPTIONS,
} from '../config';

export function retrieveContext(query, selectedProduct) {
  const q = query.toLowerCase();
  const product = PRODUCT_OPTIONS.find(p => p.id === selectedProduct) || PRODUCT_OPTIONS[0];
  let context = [];

  context.push(
    `Current product context: ${product.name} (${product.generic}). Indications: ${product.indications.join(', ')}.`
  );

  // KITs / signal velocity
  if (
    q.includes('kit') || q.includes('signal') || q.includes('velocity') ||
    q.includes('theme') || q.includes('trend') || q.includes('insight theme') ||
    q.includes('bimzelx') || q.includes('bimekizumab') || q.includes('il-17') ||
    q.includes('hs') || q.includes('hidradenitis') || q.includes('psoriasis') ||
    q.includes('psa') || q.includes('axspa') || q.includes('seizure') ||
    q.includes('rest') || q.includes('impact') || q.includes('measurement')
  ) {
    context.push(
      '## Key Insight Themes (KITs)\n' +
      KIT_SCORECARDS.map(k =>
        `- **${k.name}**: ${k.currentMentions} mentions (${k.percentChange > 0 ? '+' : ''}${k.percentChange.toFixed(1)}%), ` +
        `sentiment: ${k.currentSentiment.toFixed(2)}, relevance: ${k.relevanceScore}/100, status: ${k.status}. ${k.aiSummaryCurrent}`
      ).join('\n')
    );
  }

  // Insights
  if (
    q.includes('insight') || q.includes('finding') || q.includes('gap') ||
    q.includes('alignment') || q.includes('zouboulis') || q.includes('diverge') ||
    q.includes('access') || q.includes('payer') || q.includes('step therapy') ||
    q.includes('impact') || q.includes('triage') || q.includes('conversion')
  ) {
    const words = q.split(/\s+/).filter(w => w.length > 3);
    const scored = INSIGHTS.map(i => {
      const text = (i.title + ' ' + i.summary).toLowerCase();
      const hits = words.filter(w => text.includes(w)).length;
      return { i, hits };
    }).filter(x => x.hits > 0).sort((a, b) => b.hits - a.hits);
    const toShow = scored.length > 0 ? scored.slice(0, 4).map(x => x.i) : INSIGHTS.slice(0, 3);
    context.push(
      '## Strategic Insights\n' +
      toShow.map(i =>
        `- **${i.title}** (${i.priority} priority, confidence ${Math.round(i.confidenceScore * 100)}%): ${i.summary}`
      ).join('\n')
    );
  }

  // Actions
  if (
    q.includes('action') || q.includes('recommend') || q.includes('next step') ||
    q.includes('should we') || q.includes('engage') || q.includes('program') ||
    q.includes('deploy') || q.includes('brief')
  ) {
    context.push(
      '## Recommended Actions\n' +
      ACTIONS.map(a =>
        `- **${a.id}**: ${a.title} — Owner: ${a.owner}, Due: ${a.dueBy}, Status: ${a.status}` +
        (a.strategyImpact ? `, Impact: ${a.strategyImpact}` : '')
      ).join('\n')
    );
  }

  // KOLs
  if (
    q.includes('kol') || q.includes('opinion leader') || q.includes('expert') ||
    q.includes('investigator') || q.includes('engagement') || q.includes('physician') ||
    q.includes('lebwohl') || q.includes('leonardi') || q.includes('gottlieb') ||
    q.includes('jemec') || q.includes('zouboulis') || q.includes('mcinnes') ||
    q.includes('helbig') || q.includes('nabbout') || q.includes('schett') ||
    q.includes('dermatolog') || q.includes('rheumatolog') || q.includes('epileptolog')
  ) {
    const productKols = KOL_DATA.filter(k =>
      !selectedProduct || k.productAlignment.includes(selectedProduct)
    ).slice(0, 10);
    const toShow = productKols.length > 0 ? productKols : KOL_DATA.slice(0, 8);
    context.push(
      '## Key Opinion Leaders\n' +
      toShow.map(k =>
        `- **${k.name}** (${k.institution}, ${k.country}): ${k.specialty}, ${k.engagementTier}, ` +
        `influence: ${k.influenceScore}/100, focus: ${k.focusAreas.join(', ')}`
      ).join('\n')
    );
  }

  // Strategic framework
  if (
    q.includes('strateg') || q.includes('imperative') || q.includes('isp') ||
    q.includes('objective') || q.includes('pillar') || q.includes('coverage') ||
    q.includes('medical objective')
  ) {
    context.push(
      '## ISP Pillars\n' +
      ISP_PILLARS.map(p => `- **${p.title}**: ${p.description}`).join('\n')
    );
    context.push(
      '## Medical Objectives\n' +
      MEDICAL_OBJECTIVES.map(m => `- **${m.id} — ${m.name}**: ${m.description}`).join('\n')
    );
  }

  // Listening priorities / KIQs
  if (
    q.includes('listening') || q.includes('kiq') || q.includes('research question') ||
    q.includes('listening priority')
  ) {
    context.push(
      '## Listening Priorities & Key Intelligence Questions\n' +
      LISTENING_PRIORITIES.map(lp => `- **${lp.name}**: ${lp.kiq}`).join('\n')
    );
  }

  // Congress
  if (
    q.includes('congress') || q.includes('conference') || q.includes('aad') ||
    q.includes('eadv') || q.includes('eular') || q.includes('acr') ||
    q.includes('aes') || q.includes('ilae') || q.includes('abstract') || q.includes('poster')
  ) {
    const available = CONGRESS_OPTIONS.filter(c => c.available).map(c => c.name).join(', ');
    const upcoming = CONGRESS_OPTIONS.filter(c => !c.available).map(c => c.name).join(', ');
    context.push(
      `## Congress Intelligence\nCurrent / recent congresses: ${available}\nUpcoming: ${upcoming || 'None listed'}`
    );
  }

  // Products
  if (
    q.includes('bimzelx') || q.includes('bimekizumab') || q.includes('il-17') ||
    q.includes('hidradenitis') || q.includes('psoriasis') || q.includes('psa') ||
    q.includes('axial') || q.includes('axspa') || q.includes('seizure') ||
    q.includes('rest') || q.includes('fintepla') || q.includes('brivaracetam') ||
    q.includes('product portfolio')
  ) {
    context.push(
      '## Product Portfolio\n' +
      PRODUCT_OPTIONS.map(p =>
        `- **${p.name} (${p.generic})**: ${p.stage}. Indications: ${p.indications.join(', ')}.`
      ).join('\n')
    );
  }

  return context.join('\n\n');
}
