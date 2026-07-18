# PIPBench — Business Design (Master Synthesis)

Synthesized by the top-level session from all Phase 1–3 research. Every factual claim traces to a research file in `run-1/research/` or `run-1/design/`; derived numbers carry [estimated]. This document is the single source of truth for the business plan, site copy, and product build.

---

## 1. The company in one paragraph

**PIPBench** is the owner-side PIP benchmarking and negotiation tool for franchise hotel owners. When a brand hands an owner a Property Improvement Plan, PIPBench benchmarks it category-by-category against **named, public cost sources** — FDD filings, the HVS/Nehmer cost literature, published per-key renovation figures, current construction cost indices — grades every benchmark's confidence honestly, and generates the **negotiation memo** the owner takes back to the brand or their GC. Competitors sell an estimate; PIPBench arms the pushback.

**Name**: PIPBench — "bench" as in *benchmark* (a surveyor's benchmark is literally a verified reference point) and *workbench*. Domain **pipbench.com verified available** (RDAP check 2026-07-18); no company-name collision found in search.

**Tagline**: *Your PIP isn't a bill. It's an opening offer.*

## 2. The wedge (from `competitor-teardown.md` §7 — what nobody currently does)

1. **The negotiation memo is the product, not an afterthought.** PIPGURU has no negotiation feature; PIPGENIUS *explicitly excludes* "brand-variance negotiation" ("we'll identify leverage; you run the call"); Beyer Brown prioritizes items but ships no structured memo. PIPBench's core deliverable is a line-item-linked memo: what to accept, what to question, what to counter, and the sourced cost evidence for each.
2. **Radical source transparency.** Both software competitors claim unverifiable "proprietary databases." Every PIPBench benchmark shows its named public source and an honest confidence grade: **Verified** (primary-sourced: brand FDDs, HVS-published PIP line items, named advisory figures) or **Directional** (interpolated/escalated, shown as such). The data limitation becomes the trust feature.
3. **Real document ingestion, demonstrated.** PIPGENIUS's "PIP parsed · 214 line items" is labeled demo fiction; PIPGURU can't ingest documents at all. PIPBench's demo shows an actual PIP-style scope table being parsed, categorized, and benchmarked end-to-end.
4. **Honesty as positioning.** Both competitors are pre-revenue waitlist pages posing as products (PIPGURU's pricing section contradicts itself: "$99/month" copy above a $50/mo card). PIPBench never fakes liveness: real prices, real methodology page, no invented testimonials, no fake case studies.

## 3. ICP and market (from `icp-market-channels.md`)

- **Primary buyer**: independent franchisee owner-operator, 1–5 properties, select-service/midscale (AAHOA's ~20,000 members own 36,000+ hotels ≈ 1.8/member — the median member IS this buyer). A $500K–$2M PIP is the largest capital event of their loan term; a $5,000–$15,000, 2–3-week consultant engagement is the painful status quo. Buys on a credit card.
- **Secondary**: small management groups (6–30 properties), hotel brokers (PIP-encumbered deals), lenders (PIP reserves escrowed at underwriting) — a phase-2 seat-license market, not v1.
- **Market math** [estimated, derivation on record]: ~36,000 franchised US hotels (AHLA) ÷ ~7-yr blended renovation cycle ≈ 5,100 cyclical PIPs/yr + ~2,000–3,100 transaction-triggered ≈ **5,000–9,000 PIPs issued/yr**. Never present externally without the derivation.
- **Why now (all 2025–2026-dated)**: $100B+ CMBS maturities in 2026 with >half projected not to repay at maturity; 15–20% of limited-service hotel loans in distress, concentrated in exactly the ICP's asset profile; ~70% of hotel loans floating-rate facing 6–8% refis; tariffs adding 5–10%+ to FF&E costs; Turner/RLB indices ~4–5%/yr escalation. Every sale/refi in this wave is a PIP trigger.

## 4. Offer & pricing (Architecture A from `offer-pricing.md`, adopted)

| SKU | Price | What you get |
|---|---|---|
| **Fair-Range Check** | $99 | Brand + keys + scope → sourced per-key benchmark range for your PIP tier, in minutes. |
| **Full Benchmark + Negotiation Memo** | $399 | Upload the PIP/bid → category-by-category benchmark vs named sources, over/under flags, confidence grades, and the negotiation memo. |
| **Refresh** | $129 | Re-run within 18 months (revised PIP, second opinion) against your saved property record. |

- Anchors: consultants $5,000–$15,000 / 2–3 weeks; PIPGENIUS founding rates $495/$1,175 (analyst-delivered); PIPGURU's (unlaunched) $25–$200/mo. $399 sits far below the consultant anchor, above race-to-zero, priced on the memo deliverable nobody else ships.
- **No subscription for single-property owners** — the ESA/PCA/reserve-study pattern (the only pricing shape proven in episodic categories). Phase 2: broker/lender annual seats ($2,000–$5,000/yr) once owner-side traction exists.
- Revenue math [estimated]: at 1% capture of ~8,000 events/yr → ~$32–40K/yr; at 5% → ~$160–200K/yr; broker/lender seats add $60–120K/yr at 20–40 desks. A real-but-modest lean business, honestly stated.

## 5. Product v1 spec (demo built this run)

**Flow**: (1) Property intake — brand, flag family, keys, chain scale, state, PIP trigger type. (2) Scope ingestion — paste/upload PIP line items; parser categorizes against the Nehmer/HVS industry-standard taxonomy (Guestrooms; Guest Bathrooms; Corridors; Public Spaces; F&B; Function Space; Guest Amenities; Infrastructure/MEP; Additives). [As built: the demo implements the subset exercised by its sample scope — guestrooms, bathrooms, corridors, lobby/public, exterior program scope, and Common Additives items (PTAC, keys, elevators, ADA); F&B/function/amenities are v1 build targets.] (3) Benchmark — each category scored against the evidence-graded dataset (per-key ranges by chain scale × category), escalated to 2026 dollars via Turner/RLB factors, tariff-sensitive FF&E lines flagged. (4) Flags — each line: Above range / In range / Below range / Insufficient data, each with source citation + confidence badge. (5) **Negotiation memo** — generated, line-item-linked: items to accept (life-safety/ADA/clearly in-range), items to question (missing backup, above-range), items to counter (alternate spec, phasing, vintage credit), with the sourced evidence paragraph for each, plus standard asks (itemized backup, unit costs, phasing schedule, soft-goods vs case-goods split). Explicit banner: *negotiation support, not legal or engineering advice*.
**Claims discipline** (binding): marketing says **category-level benchmarking**; "line-item" refers only to parsing/organizing the owner's own document. Non-midscale tiers show "Directional" badges (design-critic condition adopted in D-010).
**Demo data**: sample PIP modeled on a fictional 118-key upper-midscale property ("Hampton Inn–style"), with scope quantities typical of a soft-goods + bathroom cycle renovation; all benchmark figures from the sourced dataset (`product/data/benchmarks.json`, built from `data-sources-*.md` files with per-figure citations).

## 6. Channels (launch plan order)

1. **SEO** — the "hotel PIP cost" query cluster is genuinely winnable: current results are one competitor landing page + contractor/lender lead-gen content; no authoritative tool owns it. Content: per-brand PIP cost pages built on the public dataset.
2. **Trade-press PR** — LODGING, Hotel Dive, Hospitality Net, HFTP, Hotel-Online are actively running PIP-cost stories; pitch the data angle ("what public filings say PIPs really cost").
3. **AAHOA ecosystem** — AAHOACON (6,500+ attendees), regional events, Today's Hotelier advertising. Rate cards require direct inquiry (not done — no-contact guardrail).
4. **Broker referrals** — brokers already fight PIP surprises mid-deal (Plasencia, Marcus & Millichap evidence); the benchmark keeps deals alive. Phase-2 seat license target.
5. **The Lodging Conference** (owner-heavy, 2,900+) over ALIS (institutional) for the primary ICP.

## 7. Honesty register (carried into the business plan and site)

1. **No first-person WTP evidence exists.** Nobody has said "I'd pay $X for this." The $399 price rests on structural analogs (ESA/PCA/reserve studies) and consultant-fee anchoring. The demand-validation protocol (`offer-pricing.md` §4: smoke test + 10–15 owner conversations with Van Westendorp-style script) is **step one of the launch plan** — it could not be run inside this build (no-outreach guardrail).
2. **The annual-PIP-count is derived, not sourced** (5,000–9,000/yr [estimated]).
3. **Two competitors' stall is ambiguous evidence** — "validated demand, uncaptured niche" and "weak demand" are both consistent with PIPGURU/PIPGENIUS sitting at zero verifiable customers. Tripwire: if either launches with real customers, revisit.
4. **Dataset confidence is uneven**: midscale/upper-midscale is primary-sourced; luxury/economy/extended-stay is directional. The UI shows this rather than hiding it.
5. **Procore platform risk** (May 2026 AI contract-review launch) is real but points at GC-side workflow, not owner-side PIP benchmarking; monitored, not blocking.
6. Decade-old anecdotes (HREC $2M→$6–8M; Magnuson 15%-of-revenue elevator) are banned from marketing; the unverified "10yr→7yr cycle compression" claim is banned everywhere.

## 8. Roadmap after v1

Phase 2 (post-validation): broker/lender seat licenses; FF&E reserve-adequacy forecasting module (the tournament runner-up E6/E5 concept — same buyer, recurring cadence, lender second market) — contingent on solving the ISHC/HAMA data-licensing wall or assembling an alternative public dataset. Phase 3: brand-negotiation outcome tracking (aggregate anonymized results: which asks succeed), the beginnings of a proprietary dataset neither competitor can copy from a landing page.
