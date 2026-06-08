import { queryClaudeAPI } from './claudeApi';
import { queryOpenAIAPI } from './openaiApi';
import { buildSystemPrompt } from './promptBuilder';
import { retrieveContext } from './rag';
import {
  KIT_SCORECARDS,
  KOL_DATA,
  INSIGHTS,
  ACTIONS,
  CLIENT,
  PRODUCT_OPTIONS,
  CONGRESS_OPTIONS,
} from '../config';

function keywordFallback(query, selectedProduct) {
  const q = query.toLowerCase();
  const product = PRODUCT_OPTIONS.find(p => p.id === selectedProduct) || PRODUCT_OPTIONS[0];
  const productKols = KOL_DATA.filter(k =>
    !selectedProduct || k.productAlignment.includes(selectedProduct)
  );

  // KITs / signal velocity
  if (
    q.includes('kit') || q.includes('signal') || q.includes('velocity') ||
    q.includes('theme') || q.includes('trend') || q.includes('what is happening') ||
    q.includes("what's happening")
  ) {
    return `## Key Insight Themes (KITs)\n\n${KIT_SCORECARDS.map(k =>
      `### ${k.name}\n- **Status:** ${k.status} | Mentions: ${k.currentMentions} (${k.percentChange > 0 ? '+' : ''}${k.percentChange.toFixed(1)}% vs prior)\n- **Sentiment:** ${k.currentSentiment.toFixed(2)} (was ${k.priorSentiment.toFixed(2)})\n\n${k.aiSummaryCurrent}`
    ).join('\n\n')}`;
  }

  // MA impact / VEGA gap — core demo narrative
  if (
    q.includes('impact') || q.includes('romi') || q.includes('measurement') ||
    q.includes('mo2') || q.includes('conversion') || q.includes('triage') ||
    q.includes('31%') || q.includes('60%') || q.includes('insight-to-action')
  ) {
    const impactInsight = INSIGHTS.find(i => i.id === 'AI1') || INSIGHTS.find(i => i.id === 'AI4');
    return `## Medical Affairs Impact Gap\n\n${impactInsight ? impactInsight.summary : ''}\n\n**The MO2 Gap:** Only 31% of field insights are converted to documented actions within 90 days — vs a 60% industry benchmark. VEGA's impact measurement dashboard is the direct solution to this gap.\n\n**Recommended Actions:**\n${ACTIONS.filter(a => a.moRef === 'MO2').map(a =>
      `- **${a.id}**: ${a.title} — Owner: ${a.owner}, Due: ${a.dueBy}`
    ).join('\n')}\n\nOpen VEGA → Impact & Outcomes for the full ROMI and insight conversion breakdown.`;
  }

  // KOL alignment / Zouboulis divergence
  if (
    q.includes('alignment') || q.includes('diverge') || q.includes('zouboulis') ||
    q.includes('engagement gap') || q.includes('re-engage') || q.includes('luca alert')
  ) {
    const zouboulis = KOL_DATA.find(k => k.name.toLowerCase().includes('zouboulis'));
    return `## KOL Engagement Alert — Zouboulis\n\n${zouboulis ? `**${zouboulis.name}** (${zouboulis.institution}): ${zouboulis.recommendedStrategy}` : 'Engagement gap detected for European HS mechanism leader.'}\n\n**Top Tier 1 KOLs tracked for ${product.name}:**\n${productKols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5).map(k =>
      `- **${k.name}** (${k.institution}): ${k.focusAreas[0]}`
    ).join('\n')}\n\nOpen LUCA for full per-KOL messaging alignment scores and engagement history.`;
  }

  // Insights
  if (
    q.includes('insight') || q.includes('finding') || q.includes('gap') ||
    q.includes('risk') || q.includes('issue') || q.includes('concern')
  ) {
    return `## Strategic Insights\n\n${INSIGHTS.map(i =>
      `### ${i.title}\n**Priority:** ${i.priority} | **Confidence:** ${Math.round(i.confidenceScore * 100)}%\n\n${i.summary}`
    ).join('\n\n')}`;
  }

  // Actions / recommendations
  if (
    q.includes('action') || q.includes('recommend') || q.includes('next step') ||
    q.includes('should we') || q.includes('what should') || q.includes('priority') ||
    q.includes('deploy') || q.includes('engage')
  ) {
    return `## Recommended Actions\n\n${ACTIONS.map(a =>
      `### ${a.id}: ${a.title}\n- **Owner:** ${a.owner} | **Due:** ${a.dueBy} | **Status:** ${a.status}${a.strategyImpact ? ` | **Impact:** ${a.strategyImpact}` : ''}`
    ).join('\n\n')}`;
  }

  // KOLs
  if (
    q.includes('kol') || q.includes('opinion leader') || q.includes('expert') ||
    q.includes('physician') || q.includes('engagement') || q.includes('who are')
  ) {
    const tier1 = productKols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5);
    const toShow = tier1.length > 0 ? tier1 : KOL_DATA.slice(0, 5);
    return `## Key Opinion Leaders — ${product.name}\n\n${toShow.map(k =>
      `### ${k.name}\n- **Institution:** ${k.institution}, ${k.country}\n- **Specialty:** ${k.specialty} | **Influence:** ${k.influenceScore}/100\n- **Focus:** ${k.focusAreas.join(', ')}\n- **Strategy:** ${k.recommendedStrategy}`
    ).join('\n\n')}\n\n*${productKols.length} total KOLs tracked for this product.*`;
  }

  // Bimzelx / IL-17 / HS / dermatology
  if (
    q.includes('bimzelx') || q.includes('bimekizumab') || q.includes('il-17') ||
    q.includes('hidradenitis') || q.includes('hs ') || q.includes('psoriasis') ||
    q.includes('psa') || q.includes('axspa') || q.includes('cosentyx') || q.includes('taltz')
  ) {
    const bimzelx = PRODUCT_OPTIONS.find(p => p.id === 'bimzelx');
    const bimzelxKits = KIT_SCORECARDS.filter(k =>
      k.name.toLowerCase().includes('il-17') || k.name.toLowerCase().includes('hs') ||
      k.name.toLowerCase().includes('bimzelx') || k.name.toLowerCase().includes('psa')
    );
    return `## Bimzelx (bimekizumab-bkzx) Intelligence\n\n**Indications:** ${bimzelx?.indications.join(', ')}\n**Stage:** ${bimzelx?.stage}\n\n${bimzelxKits.map(k =>
      `### ${k.name}\n${k.aiSummaryCurrent}`
    ).join('\n\n')}\n\nAsk about HS real-world evidence, IL-17A/F mechanism differentiation vs Cosentyx/Taltz, payer access barriers, or earlier-line PsA positioning for more detail.`;
  }

  // Seizure pipeline / REST / neurology
  if (
    q.includes('seizure') || q.includes('rest') || q.includes('epilep') ||
    q.includes('dravet') || q.includes('fintepla') || q.includes('brivaracetam') ||
    q.includes('neurology') || q.includes('pipeline')
  ) {
    const seizure = PRODUCT_OPTIONS.find(p => p.id === 'ucb-seizure-pipeline');
    const seizureKits = KIT_SCORECARDS.filter(k =>
      k.name.toLowerCase().includes('seizure') || k.name.toLowerCase().includes('rest')
    );
    return `## UCB Seizure Pipeline Intelligence\n\n**Programme:** ${seizure?.indications.join(', ')}\n**Stage:** ${seizure?.stage}\n\n${seizureKits.map(k =>
      `### ${k.name}\n${k.aiSummaryCurrent}`
    ).join('\n\n')}\n\nAsk about neurology KOL mapping, AES 2025 congress activity, or the 18-month KOL engagement window for more detail.`;
  }

  // Congress
  if (
    q.includes('congress') || q.includes('conference') || q.includes('aad') ||
    q.includes('eadv') || q.includes('eular') || q.includes('aes') || q.includes('abstract')
  ) {
    const available = CONGRESS_OPTIONS.filter(c => c.available);
    return `## Congress Intelligence\n\n${available.map(c =>
      `### ${c.name}\n- Status: Active / Recent`
    ).join('\n\n')}\n\nAAD 2025 and EADV 2025 have been the primary drivers of HS RWE and IL-17A/F mechanism KIT growth this cycle. AES 2025 abstracts show early REST paradigm interest from 4 targeted investigators.`;
  }

  // Default
  return `## Auri Intelligence Summary — ${CLIENT.name}\n\nI can help you with intelligence across ${CLIENT.franchiseDescription}. Key areas this cycle:\n\n- **MO2 Impact Gap** — 31% insight-to-action conversion vs 60% target; VEGA dashboard is the solution\n- **KIT Performance** — ${KIT_SCORECARDS.length} KITs tracked; HS RWE signal velocity +97% this quarter\n- **KOL Engagement** — Zouboulis re-engage alert (8-week gap); ${KOL_DATA.length} KOLs across immunology and neurology\n- **Strategic Insights** — ${INSIGHTS.length} active insights mapped to Medical Objectives\n- **Actions** — ${ACTIONS.length} recommended actions across Field Medical, MA Ops, HEOR, and Medical Comms\n- **Products** — Bimzelx (IL-17A/F dual, HS/PsO/PsA/axSpA, launched) · UCB Seizure Pipeline (REST paradigm, ~2027)\n\nTry asking about the MA impact gap, Bimzelx IL-17A/F differentiation, HS real-world evidence, Zouboulis re-engagement, payer access barriers, or seizure pipeline KOL strategy.`;
}

export async function queryAuri(messages, selectedProduct) {
  const lastMessage = messages[messages.length - 1]?.content || '';
  const ragContext = retrieveContext(lastMessage, selectedProduct);
  const systemPrompt = buildSystemPrompt(selectedProduct, ragContext);

  try {
    return await queryClaudeAPI(messages, systemPrompt);
  } catch (e) {
    console.log('Claude API unavailable, trying OpenAI:', e.message);
  }

  try {
    return await queryOpenAIAPI(messages, systemPrompt);
  } catch (e) {
    console.log('OpenAI API unavailable, using keyword fallback:', e.message);
  }

  return keywordFallback(lastMessage, selectedProduct);
}
