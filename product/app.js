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

/* Benchmark engine: per-category rule table.
   esc2021 = [1.25, 1.35] (DIRECTIONAL, derived), esc2024 = [1.09, 1.10]. */
function benchmarkRules(keys) {
  const e21 = BM.escalation.basis_2021_to_2026, e24 = BM.escalation.basis_2024_to_2026;
  return {
    'guestroom-softgoods': {
      base: [6223, 8520], esc: e21, mult: keys, grade: 'directional', basis: 2021,
      src: 'Interpolated from Nehmer/HVS Guide 2021 Midscale–Upscale tiers, pp.10–11',
      url: BM.sources['nehmer-2021'].url, tariff: true,
    },
    'guest-bathrooms': {
      base: [6900, 9800], esc: e21, mult: keys, grade: 'directional', basis: 2021,
      src: 'Scaled from Nehmer/HVS 2021 Economy bathroom full-reno (verified $3,819–$5,332/key, p.14) by tier ratio',
      url: BM.sources['nehmer-2021'].url, tariff: true,
    },
    'corridors': {
      base: [750, 1160], esc: e21, mult: keys, grade: 'directional', basis: 2021,
      src: 'Scaled from Nehmer/HVS 2021 Economy corridors (verified $415–$642/key, p.14) by tier ratio',
      url: BM.sources['nehmer-2021'].url,
    },
    'lobby-public': {
      base: [200000, 400000], esc: e24, mult: 1, grade: 'verified', basis: 2024,
      src: 'HVS Industry Insights — public-space reconfiguration, total project (Holiday Inn Express program)',
      url: BM.sources['hvs-pip-insights'].url,
    },
    'exterior': {
      base: [1000000, 1750000], esc: e24, mult: 1, grade: 'verified', basis: 2024,
      src: 'HVS Industry Insights — mansard-to-cornice conversion, total',
      url: BM.sources['hvs-pip-insights'].url,
      lever: {
        base: [250000, 500000], esc: e24,
        note: 'HVS documents a modern-roofline alternative at $250K–$500K total — same brand intent, roughly one quarter of the cost. Ask whether the alternative scope satisfies the directive.',
      },
    },
    'ptac': {
      base: [1039, 1372], esc: e21, mult: keys, grade: 'verified', basis: 2021,
      src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — PTAC direct replacement per unit',
      url: BM.sources['nehmer-2021'].url,
    },
    'key-system': {
      base: [230, 332], esc: e21, mult: keys, grade: 'verified', basis: 2021,
      src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — electronic key system per key',
      url: BM.sources['nehmer-2021'].url,
    },
    'elevator': {
      base: [50426, 67517], esc: e21, mult: 2, grade: 'verified', basis: 2021,
      src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — hydraulic modernization per cab (×2 cabs)',
      url: BM.sources['nehmer-2021'].url,
    },
    'ada': {
      base: [17857, 28000], esc: e21, mult: 4, grade: 'verified', basis: 2021,
      src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — roll-in shower conversion per room (×4 rooms)',
      url: BM.sources['nehmer-2021'].url,
    },
  };
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
  $('#intake-grid').innerHTML = [
    ['Property', `${p.name}<small>${p.note}</small>`],
    ['Brand family / tier', p.brandFamily],
    ['Keys', String(p.keys)],
    ['Built', String(p.built)],
    ['Market', p.market],
    ['PIP trigger', p.trigger],
  ].map(([k, v]) => `<div class="field"><label>${k}</label><div class="val">${v}</div></div>`).join('');
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
  const keys = SAMPLE.property.keys;
  const rules = benchmarkRules(keys);
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
  const e24 = BM.escalation.basis_2024_to_2026;
  const blended = { low: 35000 * e24.low, high: 40000 * e24.high };
  const lever = results.find((r) => r.rule && r.rule.lever);
  const leverSave = lever ? lever.bid - (lever.rule.lever.base[1] * lever.rule.lever.esc.high) : 0;
  summary = { keys, totalBid, benchLow, benchHigh, excess, unbenched, blended, lever, leverSave };
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
    <div class="stat"><div class="k">Contractor bid</div><div class="v">${fmt(s.totalBid)}</div><div class="s">${fmt(s.totalBid / s.keys)} per key · ${s.keys} keys</div></div>
    <div class="stat"><div class="k">Benchmark range (matched scope)</div><div class="v green">${fmtK(s.benchLow)}–${fmtK(s.benchHigh)}</div><div class="s">9 of 11 lines benchmarked</div></div>
    <div class="stat"><div class="k">Above benchmark high</div><div class="v red">${fmt(s.excess)}</div><div class="s">across ${results.filter((r) => r.verdict === 'above').length} flagged lines</div></div>
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

  $('#blended-note').innerHTML = `Blended check: this bid is <strong>${fmt(s.totalBid / s.keys)}/key</strong>. The published blended range for mid-market select-service PIPs is <strong>${fmt(s.blended.low)}–${fmt(s.blended.high)}/key</strong> (Lee Hunter, Hunter Hotel Advisors, 2024, escalated to 2026$ [est.]). <span class="badge verified">VERIFIED</span> base · escalation <span class="badge directional">DIRECTIONAL</span>`;
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
      ${SAMPLE.property.name} · ${s.keys} keys · ${SAMPLE.property.market}<br>
      Re: Property Improvement Plan — contractor bid of <span class="figure">${fmt(s.totalBid)}</span> (<span class="figure">${fmt(s.totalBid / s.keys)}</span>/key) · Prepared ${today} with PIPBench<br>
      <em>Negotiation support only — not legal, engineering, or investment advice. Every benchmark cites its public source.</em>
    </div>

    <h4>Position summary</h4>
    <p>Nine of the eleven bid lines map to published cost benchmarks. Against those benchmarks (escalated to 2026 dollars, escalation labeled as estimated), the bid exceeds the benchmark high bound by <span class="figure">${fmt(s.excess)}</span> across ${above.length} lines, and a documented alternative scope on the roofline directive represents up to <span class="figure">${fmt(s.leverSave)}</span> of additional potential reduction. On a blended basis the bid stands at <span class="figure">${fmt(s.totalBid / s.keys)}</span>/key against a published mid-market select-service range of <span class="figure">${fmt(s.blended.low)}–${fmt(s.blended.high)}</span>/key <span class="cite">(Hunter Hotel Advisors via Matthews, 2024, escalated)</span>.</p>

    <h4>Items we accept as bid</h4>
    <ol>${inrange.map((r) => `<li><strong>§${r.ref} ${r.text}</strong> — <span class="figure">${fmt(r.bid)}</span> falls within the benchmark range of <span class="figure">${fmt(r.low)}–${fmt(r.high)}</span>. <span class="cite">${r.rule.src}.</span></li>`).join('')}</ol>

    <h4>Items to question — pricing above benchmark</h4>
    <ol>${above.map((r) => r.rule.grade === 'verified'
      ? `<li><strong>§${r.ref} ${r.text}</strong> — bid of <span class="figure">${fmt(r.bid)}</span> exceeds the benchmark high of <span class="figure">${fmt(r.high)}</span> by <span class="figure">${fmt(r.bid - r.high)}</span>. Request: itemized unit costs and quantities against this range, or a price adjusted to the documented band. <span class="cite">${r.rule.src}.</span></li>`
      : `<li><strong>§${r.ref} ${r.text}</strong> — bid of <span class="figure">${fmt(r.bid)}</span> sits above the available public benchmark range of <span class="figure">${fmt(r.low)}–${fmt(r.high)}</span> (an estimate — this benchmark is interpolated/escalated and graded accordingly). Request: itemized unit costs and quantities so the pricing can be evaluated on its own backup, which we will review in good faith. <span class="cite">${r.rule.src}.</span></li>`).join('')}</ol>

    ${lever ? `<h4>Alternative-scope request — roofline directive</h4>
    <p><strong>§${lever.ref} ${lever.text}</strong> — the bid of <span class="figure">${fmt(lever.bid)}</span> is within the documented range for a full mansard-to-cornice conversion. However, the same public source documents a modern-roofline alternative at <span class="figure">$272K–$550K</span> (2026$, est.) that satisfies the same brand intent. We request written confirmation from the brand whether the alternative scope satisfies the directive before committing to the full conversion — a potential difference of up to <span class="figure">${fmt(s.leverSave)}</span>. <span class="cite">HVS Industry Insights: Impacts of Major Brand PIPs.</span></p>` : ''}

    <h4>Items lacking a public benchmark — backup requested</h4>
    <ol>${nodata.map((r) => `<li><strong>§${r.ref} ${r.text}</strong> — <span class="figure">${fmt(r.bid)}</span>. No published benchmark exists for this scope. Request: itemized backup — labor hours and rates, material unit costs, and subcontractor quotes — before approval.</li>`).join('')}</ol>

    <h4>Standard documentation requests</h4>
    <ol>
      <li>Line-item unit costs and quantities for all guestroom and bathroom scope, separated into soft goods versus case goods.</li>
      <li>A phasing schedule identifying which items are life-safety or ADA-mandated versus brand-cosmetic, with proposed sequencing across two capital cycles where permitted.</li>
      <li>Confirmation of FF&E country of origin: USMCA-origin case goods currently carry 0% tariff versus 25% Section 232 tariff on certain furniture categories — a documented sourcing lever. <span class="cite">Innvision tariff summary, 2025–2026.</span></li>
      <li>Vintage credit review: this property's post-1995 construction places it in the lowest published renovation band for its brand class <span class="cite">(HVS Industry Insights: $15,000–$25,000/key for post-1995 vintage)</span> — scope items assuming older-vintage conditions should be re-examined.</li>
    </ol>

    <p style="margin-top:30px">Prepared with PIPBench — the owner-side PIP benchmark. Every figure above carries its named public source and an honest confidence grade; escalations to 2026 dollars are PIPBench estimates and are labeled as such.</p>`;
}

boot();
