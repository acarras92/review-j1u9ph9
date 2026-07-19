/* PIPBench demo app — static, client-side only. Demo property is fictional; benchmarks are real and sourced. */
'use strict';

let BM = null;      // benchmarks.json
let SAMPLE = null;  // sample-pip.json
let parsed = [];    // parsed scope lines
let results = [];   // benchmark results
let summary = null;

const $ = (sel) => document.querySelector(sel);
const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');
const fmtK = (n) => '$' + (Math.round(n / 100) / 10).toLocaleString('en-US') + 'K';
const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');

/* Service-tier / chain-scale system.
   TIER_RATIO is relative to Economy = 1.00, derived from the guide's published
   guestroom-softgoods tiers (range mid-points). Categories the guide only
   publishes at one tier are scaled to the selected tier by these ratios and
   graded DIRECTIONAL — the same tier-ratio method the dataset itself documents. */
const TIER_RATIO = {
  'economy': 1.00,
  'midscale': 2.23,
  'upper-midscale': 2.66,
  'upscale': 3.10,
  'upper-upscale': 3.92,
  'luxury': 6.57,
  'extended-stay': 2.79,
};
const TIER_LABEL = {
  'economy': 'Economy',
  'midscale': 'Midscale',
  'upper-midscale': 'Upper-midscale / select-service',
  'upscale': 'Upscale',
  'upper-upscale': 'Upper-upscale',
  'luxury': 'Luxury',
  'extended-stay': 'Extended-stay',
};
const TIER_ORDER = ['economy', 'midscale', 'upper-midscale', 'upscale', 'upper-upscale', 'luxury', 'extended-stay'];
const tierScale = (from, to) => (TIER_RATIO[to] || 1) / (TIER_RATIO[from] || 1);

/* Category resolution: keyword parser (real logic, not a lookup of the sample file). */
const CATEGORY_RULES = [
  { id: 'guestroom-softgoods', label: 'Guestrooms — Softgoods', kw: /guestroom.*(soft|caseg|window|lighting)|soft goods/i },
  { id: 'guest-bathrooms', label: 'Guest Bathrooms', kw: /bathroom|tub|vanit|reglaze/i },
  { id: 'corridors', label: 'Corridors', kw: /corridor/i },
  { id: 'lobby-public', label: 'Lobby & Public Space', kw: /lobby|public space/i },
  { id: 'exterior', label: 'Exterior / Roofline', kw: /roofline|mansard|elevation refresh/i },
  { id: 'ptac', label: 'HVAC — PTAC', kw: /ptac|hvac/i },
  { id: 'key-system', label: 'Key / Lock System', kw: /key|lock/i },
  { id: 'elevator', label: 'Elevators', kw: /elevator/i },
  { id: 'ada', label: 'ADA Conversions', kw: /ada|roll-in/i },
];

/* Per-category benchmark anchors. Each is anchored at the tier the public guide
   actually publishes; the engine scales it to the selected tier by TIER_RATIO.
   tierIndependent categories (per-unit MEP additives, roofline totals) do not scale. */
const ANCHORS = {
  'guestroom-softgoods': {
    anchorTier: 'upper-midscale', low: 6223, high: 8520, esc: 'e21', basis: 2021, mult: 'keys',
    src: 'Nehmer/HVS Guide 2021 softgoods tiers, pp.10–11', urlKey: 'nehmer-2021', tariff: true,
  },
  'guest-bathrooms': {
    anchorTier: 'upper-midscale', low: 6900, high: 9800, esc: 'e21', basis: 2021, mult: 'keys',
    src: 'Nehmer/HVS 2021 bathroom full-renovation additional (Upper-midscale anchor)', urlKey: 'nehmer-2021', tariff: true,
  },
  'corridors': {
    anchorTier: 'upper-midscale', low: 750, high: 1160, esc: 'e21', basis: 2021, mult: 'keys',
    src: 'Nehmer/HVS 2021 corridors (Upper-midscale anchor)', urlKey: 'nehmer-2021',
  },
  'lobby-public': {
    anchorTier: 'upper-midscale', low: 200000, high: 400000, esc: 'e24', basis: 2024, mult: 1,
    src: 'HVS Industry Insights — public-space reconfiguration, total project', urlKey: 'hvs-pip-insights',
  },
  'exterior': {
    tierIndependent: true, low: 1000000, high: 1750000, esc: 'e24', basis: 2024, mult: 1,
    src: 'HVS Industry Insights — mansard-to-cornice conversion, total', urlKey: 'hvs-pip-insights',
    lever: {
      base: [250000, 500000], esc: 'e24',
      note: 'HVS documents a modern-roofline alternative at $250K–$500K total — same brand intent, roughly one quarter of the cost. Ask whether the alternative scope satisfies the directive.',
    },
  },
  'ptac': {
    tierIndependent: true, low: 1039, high: 1372, esc: 'e21', basis: 2021, mult: 'keys',
    src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — PTAC direct replacement per unit', urlKey: 'nehmer-2021',
  },
  'key-system': {
    tierIndependent: true, low: 230, high: 332, esc: 'e21', basis: 2021, mult: 'keys',
    src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — electronic key system per key', urlKey: 'nehmer-2021',
  },
  'elevator': {
    tierIndependent: true, low: 50426, high: 67517, esc: 'e21', basis: 2021, mult: 2,
    src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — hydraulic modernization per cab (×2 cabs)', urlKey: 'nehmer-2021',
  },
  'ada': {
    tierIndependent: true, low: 17857, high: 28000, esc: 'e21', basis: 2021, mult: 4,
    src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — roll-in shower conversion per room (×4 rooms)', urlKey: 'nehmer-2021',
  },
};

/* Benchmark engine: builds the per-category rule table for the selected tier. */
function benchmarkRules(keys, tier) {
  const escMap = { e21: BM.escalation.basis_2021_to_2026, e24: BM.escalation.basis_2024_to_2026 };
  const rules = {};
  for (const [id, a] of Object.entries(ANCHORS)) {
    let low = a.low, high = a.high, grade, note = '';
    if (a.tierIndependent) {
      // Per-unit MEP additives / roofline totals — cost does not track chain scale.
      grade = 'verified';
    } else if (a.anchorTier === tier) {
      // Anchored at the selected tier; tier-based category ranges are interpolated in the guide.
      grade = 'directional';
    } else {
      // Scale the anchor to the selected tier by the guide's published tier ratios.
      const s = tierScale(a.anchorTier, tier);
      low = a.low * s; high = a.high * s;
      grade = 'directional';
      note = ' · scaled to ' + (TIER_LABEL[tier] || tier) + ' by published tier ratio [est.]';
    }
    const mult = a.mult === 'keys' ? keys : a.mult;
    rules[id] = {
      base: [low, high], esc: escMap[a.esc], mult, grade, basis: a.basis,
      src: a.src + note, url: BM.sources[a.urlKey].url, tariff: !!a.tariff,
    };
    if (a.lever) rules[id].lever = { base: a.lever.base, esc: escMap[a.lever.esc], note: a.lever.note };
  }
  return rules;
}

/* Tier-aware blended per-key check, anchored on the published select-service figure. */
function blendedRange(tier) {
  const e24 = BM.escalation.basis_2024_to_2026;
  const s = tierScale('upper-midscale', tier);
  return { low: 35000 * s * e24.low, high: 40000 * s * e24.high };
}

/* ---------- boot ---------- */
async function boot() {
  if (window.BM_DATA && window.SAMPLE_DATA) {
    // Embedded data (works from file:// with no server)
    BM = window.BM_DATA;
    SAMPLE = window.SAMPLE_DATA;
  } else {
    const [bmRes, sampleRes] = await Promise.all([
      fetch('data/benchmarks.json'), fetch('data/sample-pip.json'),
    ]);
    BM = await bmRes.json();
    SAMPLE = await sampleRes.json();
  }
  renderIntake();
  $('#pip-input').value = SAMPLE.rawText;
  wireNav();
}

function renderIntake() {
  const p = SAMPLE.property;
  const tierDefault = (p.tier && TIER_RATIO[p.tier]) ? p.tier : 'upper-midscale';
  const opts = TIER_ORDER.map((t) => `<option value="${t}">${TIER_LABEL[t]}</option>`).join('');
  $('#intake-grid').innerHTML = `
    <div class="field"><label for="in-name">Property</label><input id="in-name" class="in" value="${p.name}"></div>
    <div class="field"><label for="in-market">Market</label><input id="in-market" class="in" value="${p.market}"></div>
    <div class="field"><label for="in-keys">Keys</label><input id="in-keys" class="in" type="number" min="1" step="1" value="${p.keys}"></div>
    <div class="field"><label for="in-tier">Service tier / chain scale</label><select id="in-tier" class="in">${opts}</select></div>`;
  $('#in-tier').value = tierDefault;
}

/* ---------- step navigation ---------- */
function goStep(n) {
  document.querySelectorAll('.panel').forEach((el) => el.classList.remove('active'));
  $('#panel-' + n).classList.add('active');
  document.querySelectorAll('.step-tab').forEach((el, i) => {
    el.classList.toggle('active', i === n - 1);
    el.classList.toggle('done', i < n - 1);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function wireNav() {
  $('#btn-to-scope').addEventListener('click', () => goStep(2));
  $('#btn-parse').addEventListener('click', runParse);
  $('#btn-to-bench').addEventListener('click', () => { runBenchmark(); goStep(3); });
  $('#btn-to-memo').addEventListener('click', () => { renderMemo(); goStep(4); });
  $('#btn-print').addEventListener('click', () => window.print());
  $('#btn-back-1').addEventListener('click', () => goStep(1));
  $('#btn-back-2').addEventListener('click', () => goStep(2));
  $('#btn-back-3').addEventListener('click', () => goStep(3));
  const loadBtn = $('#btn-load-sample');
  if (loadBtn) loadBtn.addEventListener('click', () => { $('#pip-input').value = SAMPLE.rawText; $('#parse-log').classList.remove('show'); $('#btn-to-bench').disabled = true; });
  const clearBtn = $('#btn-clear');
  if (clearBtn) clearBtn.addEventListener('click', () => { $('#pip-input').value = ''; $('#parse-log').classList.remove('show'); $('#btn-to-bench').disabled = true; $('#pip-input').focus(); });
}

/* ---------- parse ---------- */
function runParse() {
  const text = $('#pip-input').value;
  parsed = [];
  const log = [];
  text.split('\n').forEach((raw) => {
    const line = raw.trim();
    // Take the LAST dollar amount on the line as the bid (handles dot-leaders, tabs, colons, dashes).
    const amounts = [...line.matchAll(/\$\s?([\d][\d,]{3,})/g)];
    if (!amounts.length) return;
    const amtStr = amounts[amounts.length - 1][1];
    const bid = parseInt(amtStr.replace(/,/g, ''), 10);
    if (!bid || bid < 1000) return;
    const refM = line.match(/^([\d]+(?:\.[\d]+)*)[\s.)—-]+/);
    const ref = refM ? refM[1] : String(parsed.length + 1);
    let desc = line.slice(refM ? refM[0].length : 0);
    const amtIdx = desc.lastIndexOf(amounts[amounts.length - 1][0]);
    if (amtIdx > 0) desc = desc.slice(0, amtIdx);
    desc = desc.replace(/[\s.·:—-]+$/g, '').trim();
    if (!desc) return;
    const rule = CATEGORY_RULES.find((r) => r.kw.test(desc));
    parsed.push({ ref, text: desc, bid, category: rule ? rule.id : null, catLabel: rule ? rule.label : 'Unmatched scope' });
    log.push(rule
      ? `<span class="ok">✓</span> ${ref} → ${rule.label} · ${fmt(bid)}`
      : `<span class="warn">?</span> ${ref} → no benchmark category · ${fmt(bid)} (backup will be requested)`);
  });
  const el = $('#parse-log');
  el.classList.add('show');
  el.innerHTML = `Parsed ${parsed.length} scope lines · ${parsed.filter((p) => p.category).length} matched to benchmark categories\n` + log.join('\n');
  $('#btn-to-bench').disabled = parsed.length === 0;
}

/* ---------- benchmark ---------- */
function runBenchmark() {
  const keys = parseInt(($('#in-keys') || {}).value, 10) || SAMPLE.property.keys;
  const tier = (($('#in-tier') || {}).value) || 'upper-midscale';
  const propName = (($('#in-name') || {}).value || '').trim() || SAMPLE.property.name;
  const market = (($('#in-market') || {}).value || '').trim() || SAMPLE.property.market;
  const rules = benchmarkRules(keys, tier);
  results = parsed.map((line) => {
    const rule = line.category ? rules[line.category] : null;
    if (!rule) return { ...line, verdict: 'nodata' };
    const low = rule.base[0] * rule.esc.low * rule.mult;
    const high = rule.base[1] * rule.esc.high * rule.mult;
    let verdict = 'inrange';
    if (line.bid > high) verdict = 'above';
    else if (line.bid < low) verdict = 'below';
    return { ...line, rule, low, high, verdict };
  });

  const benched = results.filter((r) => r.verdict !== 'nodata');
  const totalBid = results.reduce((s, r) => s + r.bid, 0);
  const benchLow = benched.reduce((s, r) => s + r.low, 0);
  const benchHigh = benched.reduce((s, r) => s + r.high, 0);
  const excess = benched.reduce((s, r) => s + Math.max(0, r.bid - r.high), 0);
  const unbenched = results.filter((r) => r.verdict === 'nodata').reduce((s, r) => s + r.bid, 0);
  const blended = blendedRange(tier);
  const lever = results.find((r) => r.rule && r.rule.lever);
  const leverSave = lever ? lever.bid - (lever.rule.lever.base[1] * lever.rule.lever.esc.high) : 0;
  summary = { keys, tier, propName, market, totalBid, benchLow, benchHigh, benchedCount: benched.length, lineCount: results.length, excess, unbenched, blended, lever, leverSave };
  renderBenchmark();
}

function rangeBarHTML(r) {
  const max = Math.max(r.high, r.bid) * 1.1;
  const pct = (v) => Math.min(100, (v / max) * 100).toFixed(1) + '%';
  return `<div class="range-wrap">
    <div class="range-bar">
      <div class="range-band" style="left:${pct(r.low)}; width:${(((r.high - r.low) / max) * 100).toFixed(1)}%"></div>
      <div class="range-marker ${r.verdict}" style="left:${pct(r.bid)}" title="Bid ${fmt(r.bid)}"></div>
    </div>
    <div class="range-scale"><span>${fmtK(r.low)}</span><span>${fmtK(r.high)}</span></div>
  </div>`;
}

function renderBenchmark() {
  const s = summary;
  const verdictChip = { above: '<span class="chip above">ABOVE RANGE</span>', inrange: '<span class="chip inrange">IN RANGE</span>', below: '<span class="chip below">BELOW RANGE</span>', nodata: '<span class="chip nodata">NO BENCHMARK — REQUEST BACKUP</span>' };
  $('#summary-band').innerHTML = `
    <div class="stat"><div class="k">Contractor bid</div><div class="v">${fmt(s.totalBid)}</div><div class="s">${fmt(s.totalBid / s.keys)} per key · ${s.keys} keys · ${TIER_LABEL[s.tier]}</div></div>
    <div class="stat"><div class="k">Benchmark range (matched scope)</div><div class="v green">${fmtK(s.benchLow)}–${fmtK(s.benchHigh)}</div><div class="s">${s.benchedCount} of ${s.lineCount} lines benchmarked · ${TIER_LABEL[s.tier]}</div></div>
    <div class="stat"><div class="k">Above benchmark high</div><div class="v red">${fmt(s.excess)}</div><div class="s">across ${plural(results.filter((r) => r.verdict === 'above').length, 'flagged line')}</div></div>
    <div class="stat"><div class="k">Alternative-scope lever</div><div class="v amber">${fmt(s.leverSave)}</div><div class="s">documented roofline alternative (HVS)</div></div>`;

  $('#bench-rows').innerHTML = results.map((r) => {
    if (r.verdict === 'nodata') {
      return `<tr>
        <td><div class="item-name">${r.text}</div><div class="item-ref">PIP §${r.ref}</div>
          <div class="src-line">No public benchmark exists for this line. The memo requests itemized backup (labor hours, unit costs, sub quotes).</div></td>
        <td class="num">${fmt(r.bid)}</td>
        <td><span class="hint">—</span></td>
        <td>${verdictChip[r.verdict]}</td></tr>`;
    }
    const badge = `<span class="badge ${r.rule.grade}">${r.rule.grade.toUpperCase()}</span>`;
    const escNote = r.rule.basis === 2021 ? '2021 basis × 1.25–1.35 [est.]' : '2024 basis × 1.09–1.10 [est.]';
    const leverNote = r.rule.lever ? `<div class="src-line" style="color:#9C6F0E">Lever: ${r.rule.lever.note}</div>` : '';
    const tariffNote = r.rule.tariff ? `<div class="src-line" style="color:#9C6F0E">Tariff-sensitive FF&E: Section 232 adds 25% on certain furniture/vanities (since Oct 2025); baseline 10% on most imports; USMCA-origin 0% — a sourcing lever (Innvision, 2025–26).</div>` : '';
    return `<tr>
      <td><div class="item-name">${r.text} ${badge}</div><div class="item-ref">PIP §${r.ref}</div>
        <div class="src-line">Source: <a href="${r.rule.url}" target="_blank" rel="noopener">${r.rule.src}</a> · ${escNote}</div>${leverNote}${tariffNote}</td>
      <td class="num">${fmt(r.bid)}</td>
      <td>${rangeBarHTML(r)}</td>
      <td>${verdictChip[r.verdict]}${r.rule.lever ? '<br><span class="chip lever" style="margin-top:6px;display:inline-block">ALT-SCOPE LEVER</span>' : ''}${r.rule.tariff ? '<br><span class="chip lever" style="margin-top:6px;display:inline-block">TARIFF-SENSITIVE</span>' : ''}</td></tr>`;
  }).join('');

  $('#blended-note').innerHTML = `Blended check: this bid is <strong>${fmt(s.totalBid / s.keys)}/key</strong>. The published blended range for <strong>${TIER_LABEL[s.tier]}</strong> PIPs is <strong>${fmt(s.blended.low)}–${fmt(s.blended.high)}/key</strong> (anchored on Lee Hunter, Hunter Hotel Advisors 2024 select-service figure, scaled by tier and escalated to 2026$ [est.]). <span class="badge verified">VERIFIED</span> anchor · tier scaling & escalation <span class="badge directional">DIRECTIONAL</span>`;
}

/* ---------- memo ---------- */
function renderMemo() {
  const s = summary;
  const above = results.filter((r) => r.verdict === 'above');
  const inrange = results.filter((r) => r.verdict === 'inrange');
  const nodata = results.filter((r) => r.verdict === 'nodata');
  const lever = s.lever;
  const today = 'July 18, 2026';

  $('#memo-body').innerHTML = `
    <h3>Owner's Benchmark & Negotiation Memo</h3>
    <div class="memo-meta">
      ${s.propName} · ${s.keys} keys · ${s.market} · ${TIER_LABEL[s.tier]} tier<br>
      Re: Property Improvement Plan — contractor bid of <span class="figure">${fmt(s.totalBid)}</span> (<span class="figure">${fmt(s.totalBid / s.keys)}</span>/key) · Prepared ${today} with PIPBench<br>
      <em>Negotiation support only — not legal, engineering, or investment advice. Every benchmark cites its public source.</em>
    </div>

    <h4>Position summary</h4>
    <p>${s.benchedCount} of ${s.lineCount} bid lines map to published cost benchmarks for the <strong>${TIER_LABEL[s.tier]}</strong> tier. Against those benchmarks (escalated to 2026 dollars, escalation labeled as estimated), the bid exceeds the benchmark high bound by <span class="figure">${fmt(s.excess)}</span> across ${plural(above.length, 'line')}${lever ? `, and a documented alternative scope on the roofline directive represents up to <span class="figure">${fmt(s.leverSave)}</span> of additional potential reduction` : ''}. On a blended basis the bid stands at <span class="figure">${fmt(s.totalBid / s.keys)}</span>/key against a published ${TIER_LABEL[s.tier]} range of <span class="figure">${fmt(s.blended.low)}–${fmt(s.blended.high)}</span>/key <span class="cite">(Hunter Hotel Advisors via Matthews, 2024, tier-scaled and escalated)</span>.</p>

    <h4>Items we accept as bid</h4>
    <ol>${inrange.length ? inrange.map((r) => `<li><strong>§${r.ref} ${r.text}</strong> — <span class="figure">${fmt(r.bid)}</span> falls within the benchmark range of <span class="figure">${fmt(r.low)}–${fmt(r.high)}</span>. <span class="cite">${r.rule.src}.</span></li>`).join('') : '<li>No lines fell within the benchmark range for the selected tier.</li>'}</ol>

    <h4>Items to question — pricing above benchmark</h4>
    <ol>${above.length ? above.map((r) => r.rule.grade === 'verified'
      ? `<li><strong>§${r.ref} ${r.text}</strong> — bid of <span class="figure">${fmt(r.bid)}</span> exceeds the benchmark high of <span class="figure">${fmt(r.high)}</span> by <span class="figure">${fmt(r.bid - r.high)}</span>. Request: itemized unit costs and quantities against this range, or a price adjusted to the documented band. <span class="cite">${r.rule.src}.</span></li>`
      : `<li><strong>§${r.ref} ${r.text}</strong> — bid of <span class="figure">${fmt(r.bid)}</span> sits above the available public benchmark range of <span class="figure">${fmt(r.low)}–${fmt(r.high)}</span> (an estimate — this benchmark is interpolated/escalated and graded accordingly). Request: itemized unit costs and quantities so the pricing can be evaluated on its own backup, which we will review in good faith. <span class="cite">${r.rule.src}.</span></li>`).join('') : '<li>No lines exceeded the benchmark high for the selected tier.</li>'}</ol>

    ${lever ? `<h4>Alternative-scope request — roofline directive</h4>
    <p><strong>§${lever.ref} ${lever.text}</strong> — the bid of <span class="figure">${fmt(lever.bid)}</span> is within the documented range for a full mansard-to-cornice conversion. However, the same public source documents a modern-roofline alternative at <span class="figure">$272K–$550K</span> (2026$, est.) that satisfies the same brand intent. We request written confirmation from the brand whether the alternative scope satisfies the directive before committing to the full conversion — a potential difference of up to <span class="figure">${fmt(s.leverSave)}</span>. <span class="cite">HVS Industry Insights: Impacts of Major Brand PIPs.</span></p>` : ''}

    <h4>Items lacking a public benchmark — backup requested</h4>
    <ol>${nodata.length ? nodata.map((r) => `<li><strong>§${r.ref} ${r.text}</strong> — <span class="figure">${fmt(r.bid)}</span>. No published benchmark exists for this scope. Request: itemized backup — labor hours and rates, material unit costs, and subcontractor quotes — before approval.</li>`).join('') : '<li>Every parsed line matched a benchmark category.</li>'}</ol>

    <h4>Standard documentation requests</h4>
    <ol>
      <li>Line-item unit costs and quantities for all guestroom and bathroom scope, separated into soft goods versus case goods.</li>
      <li>A phasing schedule identifying which items are life-safety or ADA-mandated versus brand-cosmetic, with proposed sequencing across two capital cycles where permitted.</li>
      <li>Confirmation of FF&E country of origin: USMCA-origin case goods currently carry 0% tariff versus 25% Section 232 tariff on certain furniture categories — a documented sourcing lever. <span class="cite">Innvision tariff summary, 2025–2026.</span></li>
      <li>Vintage credit review: confirm the property's construction vintage against the published renovation bands for its class — newer-vintage assets fall in materially lower per-key bands, so any scope assuming older-vintage conditions should be re-examined. <span class="cite">(HVS Industry Insights: brand-program bands by vintage.)</span></li>
    </ol>

    <p style="margin-top:30px">Prepared with PIPBench — the owner-side PIP benchmark. Every figure above carries its named public source and an honest confidence grade; tier scaling and escalations to 2026 dollars are PIPBench estimates and are labeled as such.</p>`;
}

boot();
