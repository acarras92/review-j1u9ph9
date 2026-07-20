/* PIPBench demo app — static, client-side only. Demo property is fictional; benchmarks are real and sourced. */
'use strict';

let BM = null;      // benchmarks.json
let SAMPLE = null;  // sample-pip.json
let HOUSE = { globalNotes: '', assumptions: [] };
let parsed = [];    // parsed scope lines
let results = [];   // benchmark results
let summary = null;

const TARGET_YEAR = 2026; // "today's dollars"

const $ = (sel) => document.querySelector(sel);
const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');
const fmtK = (n) => '$' + (Math.round(n / 100) / 10).toLocaleString('en-US') + 'K';
const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Service-tier / chain-scale system.
   TIER_RATIO is relative to Economy = 1.00, derived from the guide's published
   guestroom-softgoods tiers (range mid-points). Categories the guide only
   publishes at one tier are scaled to the selected tier by these ratios and
   graded DIRECTIONAL — the same tier-ratio method the dataset itself documents. */
const TIER_RATIO = {
  'economy': 1.00, 'midscale': 2.23, 'upper-midscale': 2.66,
  'upscale': 3.10, 'upper-upscale': 3.92, 'luxury': 6.57, 'extended-stay': 2.79,
};
const TIER_LABEL = {
  'economy': 'Economy', 'midscale': 'Midscale', 'upper-midscale': 'Upper-midscale / select-service',
  'upscale': 'Upscale', 'upper-upscale': 'Upper-upscale', 'luxury': 'Luxury', 'extended-stay': 'Extended-stay',
};
const TIER_ORDER = ['economy', 'midscale', 'upper-midscale', 'upscale', 'upper-upscale', 'luxury', 'extended-stay'];
const tierScale = (from, to) => (TIER_RATIO[to] || 1) / (TIER_RATIO[from] || 1);

/* User-adjustable escalation: bring any figure with a basis year before
   TARGET_YEAR into today's dollars at the chosen annual rate. Figures already
   in TARGET_YEAR dollars are not escalated. rate = 0 disables escalation. */
function escFactor(basis, rate) {
  if (!rate || rate <= 0 || basis >= TARGET_YEAR) return 1;
  return Math.pow(1 + rate, TARGET_YEAR - basis);
}
function escLabel(basis, rate) {
  if (basis >= TARGET_YEAR) return `already ${TARGET_YEAR}$`;
  if (!rate || rate <= 0) return `${basis} basis · no escalation applied`;
  const pct = (rate * 100).toFixed(1).replace(/\.0$/, '');
  return `${basis} basis · +${pct}%/yr → ×${escFactor(basis, rate).toFixed(2)} to ${TARGET_YEAR}$ [est.]`;
}

/* Category resolution: keyword parser (real logic, not a lookup of the sample file). */
const CATEGORY_RULES = [
  { id: 'guestroom-softgoods', label: 'Guestrooms — Softgoods', kw: /guestroom.*(soft|caseg|window|lighting)|soft goods|guest room/i },
  { id: 'guest-bathrooms', label: 'Guest Bathrooms', kw: /bathroom|tub|vanit|reglaze/i },
  { id: 'corridors', label: 'Corridors', kw: /corridor/i },
  { id: 'lobby-public', label: 'Lobby & Public Space', kw: /lobby|public space/i },
  { id: 'exterior', label: 'Exterior / Roofline', kw: /roofline|mansard|elevation refresh/i },
  { id: 'ptac', label: 'HVAC — PTAC', kw: /ptac|hvac/i },
  { id: 'key-system', label: 'Key / Lock System', kw: /key|lock/i },
  { id: 'elevator', label: 'Elevators', kw: /elevator/i },
  { id: 'ada', label: 'ADA Conversions', kw: /ada|roll-in/i },
];

/* Mandatory-scope audit: PIP areas an owner should confirm are budgeted.
   The audit flags areas that appear at $0/blank, or are missing entirely. */
const MANDATORY = [
  { id: 'guestrooms', label: 'Guestrooms', kw: /guest ?room|soft ?good/i },
  { id: 'bathrooms', label: 'Guest Bathrooms', kw: /bath(room)?|vanit|shower|\btub\b/i },
  { id: 'corridors', label: 'Corridors & Elevator Landings', kw: /corridor|elevator land/i },
  { id: 'public', label: 'Lobby & Public Space', kw: /lobby|public (space|area|restroom)|reception/i },
  { id: 'mep', label: 'MEP — HVAC / Plumbing / Electrical', kw: /hvac|mechanical|\bmep\b|plumb|electric|\bled\b|mixing valve|doas|duct|ptac/i },
  { id: 'lifesafety', label: 'Fire & Life Safety', kw: /life safety|fire alarm|sprinkler|smoke|carbon monoxide|\bco\b detector|strobe|emergency light|generator|fire protection/i },
  { id: 'elevators', label: 'Elevators', kw: /elevator/i },
  { id: 'boh', label: 'Back of House', kw: /back ?of ?house|\bboh\b|laundry|employee|engineering|housekeep|storage/i },
];

/* Per-category benchmark anchors, each anchored at the tier the public guide
   publishes; the engine scales it to the selected tier by TIER_RATIO.
   tierIndependent categories (per-unit MEP additives, roofline totals) do not scale. */
const ANCHORS = {
  'guestroom-softgoods': { anchorTier: 'upper-midscale', low: 6223, high: 8520, basis: 2021, mult: 'keys', src: 'Nehmer/HVS Guide 2021 softgoods tiers, pp.10–11', urlKey: 'nehmer-2021', tariff: true },
  'guest-bathrooms': { anchorTier: 'upper-midscale', low: 6900, high: 9800, basis: 2021, mult: 'keys', src: 'Nehmer/HVS 2021 bathroom full-renovation additional (Upper-midscale anchor)', urlKey: 'nehmer-2021', tariff: true },
  'corridors': { anchorTier: 'upper-midscale', low: 750, high: 1160, basis: 2021, mult: 'keys', src: 'Nehmer/HVS 2021 corridors (Upper-midscale anchor)', urlKey: 'nehmer-2021' },
  'lobby-public': { anchorTier: 'upper-midscale', low: 200000, high: 400000, basis: 2024, mult: 1, src: 'HVS Industry Insights — public-space reconfiguration, total project', urlKey: 'hvs-pip-insights' },
  'exterior': {
    tierIndependent: true, low: 1000000, high: 1750000, basis: 2024, mult: 1, src: 'HVS Industry Insights — mansard-to-cornice conversion, total', urlKey: 'hvs-pip-insights',
    lever: { base: [250000, 500000], basis: 2024, note: 'HVS documents a modern-roofline alternative at $250K–$500K total — same brand intent, roughly one quarter of the cost. Ask whether the alternative scope satisfies the directive.' },
  },
  'ptac': { tierIndependent: true, low: 1039, high: 1372, basis: 2021, mult: 'keys', src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — PTAC direct replacement per unit', urlKey: 'nehmer-2021' },
  'key-system': { tierIndependent: true, low: 230, high: 332, basis: 2021, mult: 'keys', src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — electronic key system per key', urlKey: 'nehmer-2021' },
  'elevator': { tierIndependent: true, low: 50426, high: 67517, basis: 2021, mult: 2, src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — hydraulic modernization per cab (×2 cabs)', urlKey: 'nehmer-2021' },
  'ada': { tierIndependent: true, low: 17857, high: 28000, basis: 2021, mult: 4, src: 'Nehmer/HVS Guide 2021, Common Additives p.18 — roll-in shower conversion per room (×4 rooms)', urlKey: 'nehmer-2021' },
};

/* Find a house (in-house) assumption for a category + tier, if any. */
function houseFor(id, tier) {
  return (HOUSE.assumptions || []).find((e) => e.category === id && (e.tier === tier || e.tier === 'all' || !e.tier)) || null;
}

/* Benchmark engine: builds the per-category rule table for the selected tier + rate. */
function benchmarkRules(keys, tier, rate) {
  const rules = {};
  for (const [id, a] of Object.entries(ANCHORS)) {
    let low = a.low, high = a.high, grade, note = '';
    if (a.tierIndependent) {
      grade = 'verified';
    } else if (a.anchorTier === tier) {
      grade = 'directional';
    } else {
      const s = tierScale(a.anchorTier, tier);
      low = a.low * s; high = a.high * s; grade = 'directional';
      note = ' · scaled to ' + (TIER_LABEL[tier] || tier) + ' by published tier ratio [est.]';
    }
    const publicMult = a.mult === 'keys' ? keys : a.mult;
    const rule = {
      base: [low, high], escF: escFactor(a.basis, rate), mult: publicMult, grade, basis: a.basis,
      src: a.src + note, url: BM.sources[a.urlKey].url, tariff: !!a.tariff, inhouse: false, publicRef: null,
    };
    const h = houseFor(id, tier);
    if (h) {
      rule.publicRef = {
        low: rule.base[0] * rule.escF * rule.mult, high: rule.base[1] * rule.escF * rule.mult,
        escLabel: escLabel(a.basis, rate), src: a.src + note,
      };
      const hBasis = (h.basis != null) ? h.basis : a.basis;
      rule.base = [h.low, h.high];
      rule.basis = hBasis;
      rule.escF = escFactor(hBasis, rate);
      rule.mult = (h.unit === 'total') ? 1 : keys;
      rule.grade = 'inhouse';
      rule.inhouse = true;
      rule.src = 'In-house: ' + (h.note || h.source || 'team assumption');
      rule.url = null;
    }
    rule.escLabel = escLabel(rule.basis, rate);
    if (a.lever) rule.lever = { base: a.lever.base, escF: escFactor(a.lever.basis, rate), note: a.lever.note };
    rules[id] = rule;
  }
  return rules;
}

/* Tier- and rate-aware blended per-key check, anchored on the published select-service figure. */
function blendedRange(tier, rate) {
  const s = tierScale('upper-midscale', tier);
  const f = escFactor(2024, rate);
  return { low: 35000 * s * f, high: 40000 * s * f };
}

/* Extract the cost from a line. If the line has any '$', use $-amounts; otherwise
   accept bare numbers (Excel columns). Picks the LARGEST value on the line — for a
   budget row the total is the largest number, ahead of per-unit costs or quantities. */
function extractCost(line) {
  const hasDollar = line.includes('$');
  const re = hasDollar ? /\$\s?(\d[\d,]*(?:\.\d+)?)/g : /(?<![\d.])(\d[\d,]{3,}(?:\.\d+)?)/g;
  const vals = [...line.matchAll(re)].map((m) => ({ v: parseFloat(m[1].replace(/,/g, '')), t: m[0] })).filter((x) => !isNaN(x.v));
  if (!vals.length) return null;
  vals.sort((a, b) => b.v - a.v);
  return { val: vals[0].v, matchText: vals[0].t };
}

/* Scope audit: for each mandatory area, is it covered (priced), unpriced ($0/blank), or missing? */
function scopeAudit(text) {
  const lines = text.split('\n');
  const res = { covered: [], unpriced: [], missing: [] };
  for (const area of MANDATORY) {
    let bestCost = null, present = false;
    for (const raw of lines) {
      if (area.kw.test(raw)) {
        present = true;
        const c = extractCost(raw);
        if (c && c.val >= 1000) bestCost = Math.max(bestCost || 0, c.val);
      }
    }
    if (bestCost != null) res.covered.push({ label: area.label, cost: bestCost });
    else if (present) res.unpriced.push({ label: area.label });
    else res.missing.push({ label: area.label });
  }
  return res;
}

function getRate() {
  const el = $('#in-rate');
  if (!el) return 0.05;
  let pct = parseFloat(el.value);
  if (isNaN(pct) || pct < 0) pct = 0;
  if (pct > 25) pct = 25;
  return pct / 100;
}

/* ---------- boot ---------- */
async function boot() {
  if (window.BM_DATA && window.SAMPLE_DATA) {
    BM = window.BM_DATA;
    SAMPLE = window.SAMPLE_DATA;
  } else {
    const [bmRes, sampleRes] = await Promise.all([fetch('data/benchmarks.json'), fetch('data/sample-pip.json')]);
    BM = await bmRes.json();
    SAMPLE = await sampleRes.json();
  }
  if (window.HOUSE_DATA) HOUSE = window.HOUSE_DATA;
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
    <div class="field"><label for="in-tier">Service tier / chain scale</label><select id="in-tier" class="in">${opts}</select></div>
    <div class="field"><label for="in-rate">Escalate older $ to today at</label>
      <div class="rate-wrap"><input id="in-rate" class="in rate" type="number" min="0" max="25" step="0.5" value="5"><span class="rate-suffix">%/yr</span></div>
      <div class="field-hint">Applied only to figures dated before ${TARGET_YEAR}. Try 3–5; 0 = none.</div></div>`;
  $('#in-tier').value = tierDefault;
  const houseCount = (HOUSE.assumptions || []).length;
  const hint = $('#house-hint');
  if (hint) hint.textContent = houseCount ? `${plural(houseCount, 'in-house assumption')} loaded — these override the public benchmark where they match.` : 'No in-house assumptions loaded yet — add your team’s figures in data/house-benchmarks.js.';
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
  const upBtn = $('#btn-upload');
  if (upBtn) upBtn.addEventListener('click', () => $('#pip-file').click());
  const fileIn = $('#pip-file');
  if (fileIn) fileIn.addEventListener('change', (e) => { const f = e.target.files[0]; if (f) handleFile(f); e.target.value = ''; });
  const tplBtn = $('#btn-template');
  if (tplBtn) tplBtn.addEventListener('click', (e) => { e.preventDefault(); downloadTemplate(); });
}

/* ---------- spreadsheet upload (Excel / CSV) ---------- */
/* Imported rows are converted to the same text lines runParse() reads, so the
   whole benchmark pipeline is reused and the user can still edit before parsing. */
const DESC_KW = /descr|scope|item|work|narrative|detail|line\s*item/i;
const PRICE_KW = /price|bid|amount|amt|cost|total|budget|quote|value|\$/i;
const REFHDR_KW = /^\s*(#|no\.?|line\s*#?|item\s*#?|ref)\s*$/i;

function toNumber(v) {
  if (typeof v === 'number') return isFinite(v) ? v : null;
  if (v == null) return null;
  const s = String(v).replace(/[^0-9.\-]/g, '');
  if (!s || s === '-' || s === '.') return null;
  const n = parseFloat(s);
  return isFinite(n) ? n : null;
}

/* Find the description and bid columns — by header keyword first, then by shape. */
function detectColumns(rows) {
  let headerIdx = -1, descCol = -1, priceCol = -1, refCol = -1;
  for (let i = 0; i < Math.min(rows.length, 6); i++) {
    const cells = rows[i].map((c) => String(c == null ? '' : c).trim());
    if (cells.filter(Boolean).length < 2) continue;
    // A header cell is a text label, not a value — ignore cells that parse as numbers
    // so a data value like "$486,000" is never mistaken for a "$" price header.
    const d = cells.findIndex((c) => toNumber(c) === null && DESC_KW.test(c));
    const p = cells.findIndex((c) => toNumber(c) === null && PRICE_KW.test(c));
    if (d !== -1 || p !== -1) {
      headerIdx = i; descCol = d; priceCol = p;
      refCol = cells.findIndex((c) => REFHDR_KW.test(c));
      break;
    }
  }
  const dataStart = headerIdx === -1 ? 0 : headerIdx + 1;
  const dataRows = rows.slice(dataStart);
  const nCols = rows.reduce((m, r) => Math.max(m, r.length), 0);

  if (descCol === -1) { // pick the most text-heavy column
    let best = -1, bestAvg = 0;
    for (let c = 0; c < nCols; c++) {
      let len = 0, text = 0, cnt = 0;
      dataRows.forEach((r) => {
        const v = r[c];
        if (v == null || v === '') return;
        cnt++; len += String(v).length;
        if (toNumber(v) === null) text++;
      });
      const avg = cnt ? len / cnt : 0;
      if (cnt && text >= cnt * 0.5 && avg > bestAvg) { bestAvg = avg; best = c; }
    }
    descCol = best;
  }
  if (priceCol === -1) { // rightmost mostly-numeric column with real dollar values
    for (let c = nCols - 1; c >= 0; c--) {
      if (c === descCol) continue;
      let big = 0, cnt = 0;
      dataRows.forEach((r) => {
        const n = toNumber(r[c]);
        if (n === null) return;
        cnt++; if (n >= 1000) big++;
      });
      if (cnt && big >= 1) { priceCol = c; break; }
    }
  }
  return { dataStart, descCol, priceCol, refCol };
}

function rowsToPipText(rows) {
  const { dataStart, descCol, priceCol, refCol } = detectColumns(rows);
  if (descCol === -1 || priceCol === -1) return { text: '', count: 0 };
  const lines = [];
  let n = 0;
  for (let i = dataStart; i < rows.length; i++) {
    const r = rows[i];
    const desc = String(r[descCol] == null ? '' : r[descCol]).replace(/\s+/g, ' ').trim();
    const bid = toNumber(r[priceCol]);
    if (!desc || bid === null || bid < 1000) continue;
    n++;
    const rawRef = refCol !== -1 && r[refCol] != null ? String(r[refCol]).trim() : '';
    const ref = rawRef || String(n);
    // Bid goes LAST so runParse()'s cost extractor always picks it as the line's amount.
    lines.push(`${ref}. ${desc} — $${Math.round(bid).toLocaleString('en-US')}`);
  }
  return { text: lines.join('\n'), count: n };
}

function readWorkbookRows(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('the file could not be read'));
    reader.onload = (e) => {
      try {
        const wb = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        if (!sheet) throw new Error('the workbook has no sheets');
        resolve(XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: '', blankrows: false }));
      } catch (err) { reject(err); }
    };
    reader.readAsArrayBuffer(file);
  });
}

async function handleFile(file) {
  const status = $('#upload-status');
  const show = (cls, html) => { status.hidden = false; status.className = 'upload-status show ' + cls; status.innerHTML = html; };
  show('', `Reading <strong>${escapeHtml(file.name)}</strong>…`);
  try {
    if (typeof XLSX === 'undefined') throw new Error('the spreadsheet reader failed to load — please refresh and try again');
    const rows = await readWorkbookRows(file);
    const { text, count } = rowsToPipText(rows);
    if (count === 0) {
      show('err', `Couldn’t find scope descriptions and bid amounts in <strong>${escapeHtml(file.name)}</strong>. It needs a column of descriptions and a column of dollar amounts — the template shows the expected layout.`);
      return;
    }
    $('#pip-input').value = text;
    show('ok', `Imported <strong>${count}</strong> scope line${count === 1 ? '' : 's'} from <strong>${escapeHtml(file.name)}</strong> — review or edit below, then benchmark.`);
    runParse();
  } catch (err) {
    show('err', 'Could not import that file: ' + escapeHtml(err.message) + '.');
  }
}

function downloadTemplate() {
  const data = [
    ['Line', 'Scope description', 'Contractor bid'],
    [1, 'Guestrooms — soft goods (case goods, window treatments, lighting)', 486000],
    [2, 'Guest bathrooms — full renovation', 388000],
    [3, 'Corridors — carpet, wallcovering, lighting', 92000],
    [4, 'PTAC replacement', 168000],
    [5, 'Electronic key / lock system', 34000],
  ];
  const ws = XLSX.utils.aoa_to_sheet(data);
  ws['!cols'] = [{ wch: 6 }, { wch: 58 }, { wch: 16 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'PIP scope');
  XLSX.writeFile(wb, 'pipbench-template.xlsx');
}

/* ---------- parse ---------- */
function runParse() {
  const text = $('#pip-input').value;
  parsed = [];
  const log = [];
  text.split('\n').forEach((raw) => {
    const line = raw.trim();
    const cost = extractCost(line);
    if (!cost || cost.val < 1000) return;
    const bid = Math.round(cost.val);
    const refM = line.match(/^([\d]+(?:\.[\d]+)*)[\s.)—-]+/);
    const ref = refM ? refM[1] : String(parsed.length + 1);
    let desc = line.slice(refM ? refM[0].length : 0);
    const amtIdx = desc.lastIndexOf(cost.matchText);
    if (amtIdx > 0) desc = desc.slice(0, amtIdx);
    desc = desc.replace(/[\s.·:—\-\t|]+$/g, '').trim();
    if (!desc) return;
    const rule = CATEGORY_RULES.find((r) => r.kw.test(desc));
    parsed.push({ ref, text: desc, bid, category: rule ? rule.id : null, catLabel: rule ? rule.label : 'Unmatched scope' });
    log.push(rule
      ? `<span class="ok">✓</span> ${ref} → ${rule.label} · ${fmt(bid)}`
      : `<span class="warn">?</span> ${ref} → no benchmark category · ${fmt(bid)} (backup will be requested)`);
  });
  const audit = scopeAudit(text);
  const flags = [...audit.unpriced, ...audit.missing];
  const el = $('#parse-log');
  el.classList.add('show');
  el.innerHTML = `Parsed ${parsed.length} scope lines · ${parsed.filter((p) => p.category).length} matched to benchmark categories\n`
    + log.join('\n')
    + (flags.length ? `\n<span class="warn">⚠</span> Scope audit: ${plural(flags.length, 'mandatory area')} not priced — ${flags.map((f) => f.label).join(', ')} (detailed on the next step)` : `\n<span class="ok">✓</span> Scope audit: every mandatory area has a priced line`);
  $('#btn-to-bench').disabled = parsed.length === 0;
}

/* ---------- benchmark ---------- */
function runBenchmark() {
  const keys = parseInt(($('#in-keys') || {}).value, 10) || SAMPLE.property.keys;
  const tier = (($('#in-tier') || {}).value) || 'upper-midscale';
  const rate = getRate();
  const propName = (($('#in-name') || {}).value || '').trim() || SAMPLE.property.name;
  const market = (($('#in-market') || {}).value || '').trim() || SAMPLE.property.market;
  const rules = benchmarkRules(keys, tier, rate);
  results = parsed.map((line) => {
    const rule = line.category ? rules[line.category] : null;
    if (!rule) return { ...line, verdict: 'nodata' };
    const low = rule.base[0] * rule.escF * rule.mult;
    const high = rule.base[1] * rule.escF * rule.mult;
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
  const blended = blendedRange(tier, rate);
  const lever = results.find((r) => r.rule && r.rule.lever);
  const leverSave = lever ? lever.bid - (lever.rule.lever.base[1] * lever.rule.lever.escF) : 0;
  const anyHouse = benched.some((r) => r.rule.inhouse);
  const audit = scopeAudit($('#pip-input').value);
  summary = { keys, tier, rate, propName, market, totalBid, benchLow, benchHigh, benchedCount: benched.length, lineCount: results.length, excess, blended, lever, leverSave, anyHouse, audit };
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

function auditHTML(a) {
  if (!a) return '';
  const rows = [
    ...a.unpriced.map((x) => `<div class="audit-row bad"><b>${x.label}</b> — appears in the input but carries no priced line ($0 / blank). Confirm it is budgeted before approval.</div>`),
    ...a.missing.map((x) => `<div class="audit-row warn"><b>${x.label}</b> — no line found in the budget. Confirm whether it is in scope and priced.</div>`),
  ].join('');
  const head = rows
    ? `<div class="audit-head bad">⚠ Scope audit — ${plural(a.unpriced.length + a.missing.length, 'mandatory PIP area')} to confirm</div>`
    : `<div class="audit-head ok">✓ Scope audit — every mandatory PIP area has a priced line</div>`;
  const covered = a.covered.length ? `<div class="audit-covered">Priced: ${a.covered.map((x) => x.label).join(' · ')}</div>` : '';
  return head + rows + covered;
}

function renderBenchmark() {
  const s = summary;
  const verdictChip = { above: '<span class="chip above">ABOVE RANGE</span>', inrange: '<span class="chip inrange">IN RANGE</span>', below: '<span class="chip below">BELOW RANGE</span>', nodata: '<span class="chip nodata">NO BENCHMARK — REQUEST BACKUP</span>' };
  const escBadge = s.rate > 0 ? `esc +${(s.rate * 100).toFixed(1).replace(/\.0$/, '')}%/yr` : 'no escalation';

  const auditEl = $('#scope-audit');
  if (auditEl) { auditEl.style.display = ''; auditEl.innerHTML = auditHTML(s.audit); }

  const houseEl = $('#house-banner');
  if (houseEl) {
    const bits = [];
    if (s.anyHouse) bits.push('Benchmarks marked <span class="badge inhouse">IN-HOUSE</span> use your team’s assumptions; the public range is shown beneath as a reference.');
    if (HOUSE.globalNotes) bits.push('<b>Team assumptions:</b> ' + HOUSE.globalNotes);
    houseEl.style.display = bits.length ? '' : 'none';
    houseEl.innerHTML = bits.join('<br>');
  }

  $('#summary-band').innerHTML = `
    <div class="stat"><div class="k">Contractor bid</div><div class="v">${fmt(s.totalBid)}</div><div class="s">${fmt(s.totalBid / s.keys)} per key · ${s.keys} keys · ${TIER_LABEL[s.tier]}</div></div>
    <div class="stat"><div class="k">Benchmark range (matched scope)</div><div class="v green">${fmtK(s.benchLow)}–${fmtK(s.benchHigh)}</div><div class="s">${s.benchedCount} of ${s.lineCount} lines benchmarked · ${escBadge}</div></div>
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
    const badge = `<span class="badge ${r.rule.grade}">${r.rule.grade === 'inhouse' ? 'IN-HOUSE' : r.rule.grade.toUpperCase()}</span>`;
    const srcLine = r.rule.url
      ? `<div class="src-line">Source: <a href="${r.rule.url}" target="_blank" rel="noopener">${r.rule.src}</a> · ${r.rule.escLabel}</div>`
      : `<div class="src-line">${r.rule.src} · ${r.rule.escLabel}</div>`;
    const refLine = r.rule.publicRef ? `<div class="src-line" style="color:#3D5A73">Public reference: ${fmtK(r.rule.publicRef.low)}–${fmtK(r.rule.publicRef.high)} · ${r.rule.publicRef.src} · ${r.rule.publicRef.escLabel}</div>` : '';
    const leverNote = r.rule.lever ? `<div class="src-line" style="color:#9C6F0E">Lever: ${r.rule.lever.note}</div>` : '';
    const tariffNote = r.rule.tariff ? `<div class="src-line" style="color:#9C6F0E">Tariff-sensitive FF&E: Section 232 adds 25% on certain furniture/vanities (since Oct 2025); baseline 10% on most imports; USMCA-origin 0% — a sourcing lever (Innvision, 2025–26).</div>` : '';
    return `<tr>
      <td><div class="item-name">${r.text} ${badge}</div><div class="item-ref">PIP §${r.ref}</div>
        ${srcLine}${refLine}${leverNote}${tariffNote}</td>
      <td class="num">${fmt(r.bid)}</td>
      <td>${rangeBarHTML(r)}</td>
      <td>${verdictChip[r.verdict]}${r.rule.lever ? '<br><span class="chip lever" style="margin-top:6px;display:inline-block">ALT-SCOPE LEVER</span>' : ''}${r.rule.tariff ? '<br><span class="chip lever" style="margin-top:6px;display:inline-block">TARIFF-SENSITIVE</span>' : ''}</td></tr>`;
  }).join('');

  const escText = s.rate > 0 ? `escalated to ${TARGET_YEAR}$ at ${(s.rate * 100).toFixed(1).replace(/\.0$/, '')}%/yr` : `shown at basis-year dollars (no escalation)`;
  $('#blended-note').innerHTML = `Blended check: this bid is <strong>${fmt(s.totalBid / s.keys)}/key</strong>. The published blended range for <strong>${TIER_LABEL[s.tier]}</strong> PIPs is <strong>${fmt(s.blended.low)}–${fmt(s.blended.high)}/key</strong> (anchored on Lee Hunter, Hunter Hotel Advisors 2024 select-service figure, scaled by tier and ${escText} [est.]). <span class="badge verified">VERIFIED</span> anchor · tier scaling & escalation <span class="badge directional">DIRECTIONAL</span>`;
}

/* ---------- memo ---------- */
function renderMemo() {
  const s = summary;
  const above = results.filter((r) => r.verdict === 'above');
  const inrange = results.filter((r) => r.verdict === 'inrange');
  const nodata = results.filter((r) => r.verdict === 'nodata');
  const lever = s.lever;
  const today = 'July 19, 2026';
  const a = s.audit;
  const auditFlags = [...a.unpriced, ...a.missing];
  const escText = s.rate > 0 ? `escalated to ${TARGET_YEAR} dollars at ${(s.rate * 100).toFixed(1).replace(/\.0$/, '')}%/yr where a basis year predates ${TARGET_YEAR}` : `shown at basis-year dollars (escalation turned off)`;

  $('#memo-body').innerHTML = `
    <h3>Owner's Benchmark & Negotiation Memo</h3>
    <div class="memo-meta">
      ${s.propName} · ${s.keys} keys · ${s.market} · ${TIER_LABEL[s.tier]} tier<br>
      Re: Property Improvement Plan — contractor bid of <span class="figure">${fmt(s.totalBid)}</span> (<span class="figure">${fmt(s.totalBid / s.keys)}</span>/key) · Prepared ${today} with PIPBench<br>
      <em>Negotiation support only — not legal, engineering, or investment advice. Every benchmark cites its public source; figures are ${escText}.</em>
    </div>

    ${auditFlags.length ? `<h4>Scope audit — mandatory areas to confirm are budgeted</h4>
    <p>The following mandatory PIP areas carry no priced line in the submitted budget. Confirm each is scoped and priced before treating the total as complete:</p>
    <ol>${auditFlags.map((x) => `<li><strong>${x.label}</strong> — ${a.unpriced.find((u) => u.label === x.label) ? 'appears at $0 / blank' : 'not found in the budget'}. Request confirmation that this scope is priced.</li>`).join('')}</ol>` : ''}

    ${s.anyHouse || HOUSE.globalNotes ? `<h4>In-house assumptions applied</h4>
    <p>${s.anyHouse ? 'Benchmarks labeled IN-HOUSE below reflect your team’s own budget assumptions rather than the public guide; the public range is retained as a reference. ' : ''}${HOUSE.globalNotes ? '<strong>Team assumptions:</strong> ' + HOUSE.globalNotes : ''}</p>` : ''}

    <h4>Position summary</h4>
    <p>${s.benchedCount} of ${s.lineCount} bid lines map to published cost benchmarks for the <strong>${TIER_LABEL[s.tier]}</strong> tier. Against those benchmarks (${escText}), the bid exceeds the benchmark high bound by <span class="figure">${fmt(s.excess)}</span> across ${plural(above.length, 'line')}${lever ? `, and a documented alternative scope on the roofline directive represents up to <span class="figure">${fmt(s.leverSave)}</span> of additional potential reduction` : ''}. On a blended basis the bid stands at <span class="figure">${fmt(s.totalBid / s.keys)}</span>/key against a published ${TIER_LABEL[s.tier]} range of <span class="figure">${fmt(s.blended.low)}–${fmt(s.blended.high)}</span>/key <span class="cite">(Hunter Hotel Advisors via Matthews, 2024, tier-scaled and escalated)</span>.</p>

    <h4>Items we accept as bid</h4>
    <ol>${inrange.length ? inrange.map((r) => `<li><strong>§${r.ref} ${r.text}</strong> — <span class="figure">${fmt(r.bid)}</span> falls within the benchmark range of <span class="figure">${fmt(r.low)}–${fmt(r.high)}</span>. <span class="cite">${r.rule.src}.</span></li>`).join('') : '<li>No lines fell within the benchmark range for the selected tier.</li>'}</ol>

    <h4>Items to question — pricing above benchmark</h4>
    <ol>${above.length ? above.map((r) => r.rule.grade === 'verified'
      ? `<li><strong>§${r.ref} ${r.text}</strong> — bid of <span class="figure">${fmt(r.bid)}</span> exceeds the benchmark high of <span class="figure">${fmt(r.high)}</span> by <span class="figure">${fmt(r.bid - r.high)}</span>. Request: itemized unit costs and quantities against this range, or a price adjusted to the documented band. <span class="cite">${r.rule.src}.</span></li>`
      : `<li><strong>§${r.ref} ${r.text}</strong> — bid of <span class="figure">${fmt(r.bid)}</span> sits above the available benchmark range of <span class="figure">${fmt(r.low)}–${fmt(r.high)}</span> (an estimate — this benchmark is interpolated/escalated/in-house and graded accordingly). Request: itemized unit costs and quantities so the pricing can be evaluated on its own backup, which we will review in good faith. <span class="cite">${r.rule.src}.</span></li>`).join('') : '<li>No lines exceeded the benchmark high for the selected tier.</li>'}</ol>

    ${lever ? `<h4>Alternative-scope request — roofline directive</h4>
    <p><strong>§${lever.ref} ${lever.text}</strong> — the bid of <span class="figure">${fmt(lever.bid)}</span> is within the documented range for a full mansard-to-cornice conversion. However, the same public source documents a modern-roofline alternative that satisfies the same brand intent for a potential difference of up to <span class="figure">${fmt(s.leverSave)}</span>. We request written confirmation from the brand whether the alternative scope satisfies the directive before committing. <span class="cite">HVS Industry Insights: Impacts of Major Brand PIPs.</span></p>` : ''}

    <h4>Items lacking a public benchmark — backup requested</h4>
    <ol>${nodata.length ? nodata.map((r) => `<li><strong>§${r.ref} ${r.text}</strong> — <span class="figure">${fmt(r.bid)}</span>. No published benchmark exists for this scope. Request: itemized backup — labor hours and rates, material unit costs, and subcontractor quotes — before approval.</li>`).join('') : '<li>Every parsed line matched a benchmark category.</li>'}</ol>

    <h4>Standard documentation requests</h4>
    <ol>
      <li>Line-item unit costs and quantities for all guestroom and bathroom scope, separated into soft goods versus case goods.</li>
      <li>A phasing schedule identifying which items are life-safety or ADA-mandated versus brand-cosmetic, with proposed sequencing across two capital cycles where permitted.</li>
      <li>Confirmation of FF&E country of origin: USMCA-origin case goods currently carry 0% tariff versus 25% Section 232 tariff on certain furniture categories — a documented sourcing lever. <span class="cite">Innvision tariff summary, 2025–2026.</span></li>
      <li>Vintage credit review: confirm the property's construction vintage against the published renovation bands for its class — newer-vintage assets fall in materially lower per-key bands, so any scope assuming older-vintage conditions should be re-examined. <span class="cite">(HVS Industry Insights: brand-program bands by vintage.)</span></li>
    </ol>

    <p style="margin-top:30px">Prepared with PIPBench — the owner-side PIP benchmark. Every figure carries its named public source (or an IN-HOUSE label) and an honest confidence grade; tier scaling and escalations to ${TARGET_YEAR} dollars are PIPBench estimates and are labeled as such.</p>`;
}

boot();
