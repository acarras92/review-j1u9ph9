# PIPBench — Business Plan

**Prepared:** 2026-07-18
**Status:** Pre-launch. v1 demo built this run; no customers, no revenue, no outreach conducted (guardrails prohibited it). This plan is written for a founder deciding whether to build and launch, not for external distribution as a proof of traction.

All research and design source files referenced below live in `run-1/research/`, `run-1/design/`, `run-1/tournament/`, and `run-1/product/data/` and can be opened directly to verify any claim in this document.

---

## 1. Executive Summary

PIPBench is a benchmarking and negotiation tool for the owner side of a hotel Property Improvement Plan (PIP) — the renovation scope of work a franchisor issues to a hotel owner, typically at brand-standard cycle points or at any change of ownership. When a brand hands an owner a PIP, the owner today has two options: hire a consultant for $5,000–$15,000 and wait 2–3 weeks (`run-1/design/offer-pricing.md` §0, citing `thepipguru.com`-adjacent industry framing), or accept the brand's number without an independent reference point. PIPBench gives the owner a third option: enter the property and paste or upload the PIP's scope, and within minutes get a category-by-category cost benchmark against named public sources — brand FDD filings, the Nehmer/HVS Hotel Cost Estimating Guide, HVS advisory articles, published construction-cost indices — each benchmark honestly graded **Verified** or **Directional** depending on how solid its source is, plus a generated **negotiation memo**: which line items to accept, which to question, which to counter, and the sourced evidence for each (`run-1/design/business-design.md` §1, §5).

**Who it's for:** the primary buyer is an independent franchisee owner-operator with 1–5 properties, typically a select-service or midscale asset — the median profile of AAHOA's roughly 20,000 members, who collectively own more than 36,000 hotels (`run-1/design/icp-market-channels.md` §2.1, citing AAHOA and Asian Hospitality). For this owner, a PIP is frequently the single largest capital event of their loan term, and they cannot absorb a bad negotiation the way a larger portfolio owner can.

**Why now:** more than $100 billion in CMBS hotel debt matures in 2026, with over half of maturing loans projected not to repay at maturity; 15–20% of limited/select-service hotel loans already show distress, concentrated in exactly this ICP's asset profile; roughly 70% of hotel loans are floating-rate, facing refinancing into a 6–8% environment; and tariffs have added an estimated 5–10%+ to FF&E costs on top of ~4–5%/year general construction-cost escalation (`run-1/design/icp-market-channels.md` §4; `run-1/product/data/benchmarks.json` tariffs and escalation blocks). Every sale, refinance, or brand-cycle renewal inside this wave is a fresh PIP trigger.

**How it makes money:** pay-per-report pricing with no forced subscription — a $99 Fair-Range Check, a $399 Full Benchmark + Negotiation Memo, and a $129 Refresh for a revised PIP within 18 months (`run-1/design/business-design.md` §4; `run-1/design/offer-pricing.md` §2 Architecture A). This mirrors the pricing shape of every other episodic, transaction-triggered diligence category — Phase I Environmental Site Assessments, Property Condition Assessments, HOA reserve studies — none of which have ever successfully sold as a subscription, and stands in explicit contrast to the one live direct competitor's own subscription-first pricing, which shows signs of not fitting its buyer (`run-1/design/offer-pricing.md` §1, row 1).

**Honest status:** this is a real product built to a working demo this run (`run-1/design/business-design.md` §5), against a real and carefully sourced cost dataset (`run-1/product/data/benchmarks.json`), targeting a real and dated market condition. It is not yet a validated business. Nobody — not one hotel owner — has told this project's research they would pay $399 for this. The $5,000–$9,000 annual PIP-count used throughout this plan is a derived planning estimate, not a citable industry statistic. Both direct competitors are themselves pre-revenue landing pages, which is ambiguous evidence: it could mean an unoccupied, validated niche, or it could mean the demand is weaker than it looks. Section 10 states all of this plainly rather than burying it.

---

## 2. The Problem

A Property Improvement Plan is the scope of renovation work a hotel franchisor requires an owner to complete — issued on a recurring cycle (commonly cited as every 5–7 years for soft-goods work, longer for full repositioning) and, independently of that cycle, at essentially every change of ownership (`run-1/design/icp-market-channels.md` §1.3, citing King Construction and The Plasencia Group). Franchise agreements make compliance mandatory; non-compliance risks termination of the franchise itself, which for a small owner can mean losing the business, not just one asset in a portfolio (`run-1/design/icp-market-channels.md` §2.1).

The owner's problem is that the PIP arrives as a number from the brand with no independent reference point. The traditional response — hire a professional cost consultant — costs $5,000–$15,000 and takes 2–3 weeks, a figure both live competitor sites use as their own "old way" anchor and that recurs across the pricing research pulled for this plan (`run-1/design/offer-pricing.md` §0; `run-1/design/competitor-teardown.md` §3, noting franchisors themselves charge $7,500–$20,000 just to produce the PIP document, per a 2017 CoStar panel of Marriott and Hilton executives — a separate and dated figure not to be confused with renovation-cost estimating). For the primary ICP, this is a real hurdle before a deal or refinance can even proceed to underwriting.

**The 2026 squeeze, evidence-cited:**

- More than $100 billion in CMBS loans mature in 2026, with one source putting the full calendar at $146.2 billion including $76.6 billion in "hard" maturities, and more than half of maturing loans projected not to repay at maturity (`run-1/design/icp-market-channels.md` §4, citing DBRS Morningstar and CRE Daily, both 2026).
- Limited/select-service hotels — the ICP's segment — show roughly 15–20% loan distress, described as "deeply structural and operational, concentrated among smaller franchised assets in suburban markets that lack pricing power" (`run-1/design/icp-market-channels.md` §4, citing Matthews, "The Rising Tide of Hotel Delinquency").
- Roughly 70% of hotel loans carry floating-rate debt originated in the 2020–2022 low-rate window, now facing refinancing into a 6–8% fixed-rate environment or a forced sale once extension options run out (same Matthews source).
- Section 232 tariffs have applied a 25% duty on upholstered wood furniture, cabinets, and vanities since October 14, 2025, plus a 10% baseline import tariff, layered on top of roughly 4.87% year-over-year national construction-cost escalation per the Turner Building Cost Index, Q1 2026 (`run-1/product/data/benchmarks.json`, `tariffs` and `escalation.national_yoy_2026` blocks, citing Innvision and Turner Construction).

Each of these forces — a maturity wall, a distress-concentrated ICP, floating-rate refinancing pressure, and rising FF&E cost — converges on the same event: a PIP review, at the exact moment the owner has the least slack to absorb a bad number.

---

## 3. The Customer

### 3.1 Primary ICP: the independent franchisee owner-operator, 1–5 properties, select-service/midscale

AAHOA's roughly 20,000 members collectively own more than 36,000 hotels — an average of about 1.8 properties per member, strongly suggesting the median member owns 1–3 properties rather than a large portfolio (`run-1/design/icp-market-channels.md` §2.1, citing AAHOA's "About" page and Asian Hospitality's coverage of the AAHOA-commissioned Oxford Economics study). This owner cannot spread a $500,000–$2,000,000 PIP mandate across a large balance sheet or a professional asset-management team; it is frequently the largest capital event of their loan term. They typically cannot afford, or don't know how to source, HVS/Nehmer-caliber cost consultants at $5,000–$15,000 and 2–3 weeks (`run-1/design/icp-market-channels.md` §2.1). This segment sits squarely inside the 15–20% limited-service loan distress pocket described above. And because PIPBench's price points ($99–$399) sit in the same range as the one live direct competitor's own pricing ($25–$200/mo, per `run-1/design/competitor-teardown.md` §1), this is plausibly a self-serve, credit-card purchase for an owner-operator who personally signs checks — an inference from observed competitor pricing structure, not a directly sourced claim about this ICP's buying behavior (`run-1/design/icp-market-channels.md` §2.1).

### 3.2 Secondary ICP (phase 2, not v1)

- **Small management/ownership groups (6–30 properties)** — feel the same pain with more internal capacity to absorb it; a plausible higher-ACV, lower-volume buyer for a future portfolio tier. No source quantifies this segment's population; flagged **[unclear]** in the underlying research (`run-1/design/icp-market-channels.md` §2.2).
- **Hotel brokers** — evidence shows brokers actively navigating PIP-encumbered deals (a Marcus & Millichap-brokered Michigan sale explicitly referencing "remaining property improvement plan items"; The Plasencia Group's own thought-leadership on PIPs as deal-killers) — a channel and referral relationship more than a direct buyer in v1 (`run-1/design/icp-market-channels.md` §2.2, §3.3).
- **Lenders requiring PIP reserves** — CMBS and bank lenders structurally escrow PIP capital at closing, released against verified contractor progress; a plausible B2B2B channel where a lender requires the borrower to produce a benchmarked estimate, but no source describes lenders as a direct customer of any existing PIP-estimate product today — this is inference from escrow mechanics, not observed demand (`run-1/design/icp-market-channels.md` §2.2).

---

## 4. The Product

### 4.1 v1 as built (demo, this run)

A four-step flow (`run-1/design/business-design.md` §5):

1. **Property intake** — brand, flag family, keys, chain scale, state, and PIP trigger type (cyclical brand renewal vs. change-of-ownership).
2. **Scope ingestion** — the owner pastes or uploads the PIP's line items; the parser categorizes them against the industry-standard taxonomy used by the Nehmer/HVS Hotel Cost Estimating Guide (Guestrooms, Guest Bathrooms, Guestroom Corridors, Public Spaces, Food & Beverage, Function Spaces, Guest Amenities, Infrastructure/MEP, and Common Additives). The demo built this run implements the subset of that taxonomy exercised by its sample scope — guestrooms, bathrooms, corridors, lobby/public space, exterior brand-program scope, and the Common Additives items (PTAC, key systems, elevator modernization, ADA conversions); F&B, function-space, and amenity categories are dataset-backed targets for the v1 build, not yet wired into the demo parser.
3. **Benchmark** — each category is scored against the evidence-graded dataset (per-key ranges by chain scale and category), escalated to 2026 dollars using the Turner Building Cost Index and RLB regional cost-index factors, with tariff-sensitive FF&E lines flagged separately.
4. **Flags** — every line item is marked Above range / In range / Below range / Insufficient data, each with a source citation and a confidence badge.
5. **Negotiation memo** — the generated deliverable: items to accept (life-safety, ADA, or clearly in-range items), items to question (missing cost backup, above-range figures), and items to counter (alternate specification, phasing, vintage credit for an already-recent renovation), each paired with the sourced evidence paragraph, plus standard asks the owner should make of the brand or GC — itemized backup, unit costs, a phasing schedule, and a soft-goods-versus-case-goods split. The product carries an explicit banner: *negotiation support, not legal or engineering advice* (`run-1/design/business-design.md` §5).

**The confidence-grade system**, the product's core honesty mechanism: every benchmark in `run-1/product/data/benchmarks.json` is labeled **Verified** (drawn directly from a named primary or strong secondary public source — the Nehmer/HVS guide, HVS advisory articles, franchise disclosure documents, published cost indices) or **Directional** (interpolated, escalated, or drawn from a lower-confidence aggregator source, and shown as an estimate rather than a sourced fact). For example, Nehmer's 2021 guide publishes Economy and Upscale guestroom soft-goods figures directly (Verified), but has no separate Upper-Midscale tier, so PIPBench's Upper-Midscale figure ($6,223–$8,520/key) is interpolated between the two published tiers and marked Directional with the interpolation method disclosed in the dataset's own notes (`run-1/product/data/benchmarks.json`, `categories[0].benchmarks.upper-midscale`). Non-midscale tiers (luxury, economy, extended-stay) generally show more Directional badges than midscale/upper-midscale, because the underlying public dataset itself is thinner there — a limitation the product surfaces in the UI rather than hides (`run-1/design/business-design.md` §7.4).

**Demo data:** the sample PIP modeled for this build is a fictional 118-key upper-midscale property (a "Hampton Inn-style" composite), with scope quantities typical of a soft-goods-plus-bathroom-cycle renovation. Every benchmark figure shown against it traces to the sourced dataset in `run-1/product/data/benchmarks.json`, itself built from the data-source research files in `run-1/design/`.

### 4.2 What v1 deliberately does not do

Per the binding claims-discipline rule in `run-1/design/business-design.md` §5: marketing language says **category-level benchmarking**; "line-item" is used only to describe parsing and organizing the owner's own uploaded document, not a claim that PIPBench's underlying cost database has independent line-item-level source data for every possible PIP scope item (it does not — see the dataset's own `lineItems` array, which covers a meaningful but partial set of granular items, e.g. carpet & pad, window treatments, bedsets, at the Economy and Upper-Upscale tiers only). v1 also does not: perform demolition or structural-engineering takeoffs; act as a construction-management or GC procurement tool; negotiate with the franchisor on the owner's behalf (the product hands the owner leverage and language, it does not place the call); issue property-condition, environmental, geotechnical, or zoning assessments; or offer legal or engineering opinions of any kind. Per the tournament's binding condition 6 (`run-1/tournament/tournament-results.md`), product language stays in benchmarking/negotiation-support territory throughout.

---

## 5. Market Size

No public source publishes a direct count of PIPs issued per year in the United States. The following derivation is built transparently from sourced components and is labeled **[estimated]** throughout — it must never be presented externally as a citable statistic without this derivation attached (`run-1/design/icp-market-channels.md` §1.4).

**Method A — renovation-cycle-driven (cyclical PIPs):**
Base of ~36,000 franchised U.S. hotels (AHLA, 2025, cited in `run-1/design/icp-market-channels.md` §1.1) divided by a blended ~7-year renovation-trigger interval (the soft-goods cycle most frequently cited across hospitality-construction sources) yields **≈5,100 cyclical PIPs per year [estimated]**. Sensitivity: at a 10-year cycle, ≈3,600/year; at a 6-year cycle, ≈6,000/year.

**Method B — transaction-driven (change-of-ownership PIPs):**
LW Hospitality Advisors tracked 392 single-asset hotel transactions over $10 million in 2025, totaling ~$15 billion (`run-1/design/icp-market-channels.md` §1.2, citing Hospitality Net/LWHA). Each such sale typically triggers a fresh PIP review (per The Plasencia Group and HVS sourcing, same section). Because LWHA's $10 million threshold structurally excludes the bulk of small select-service deals that are this product's actual ICP, and no free public source publishes a total transaction count across all price points, the underlying research applies an unsourced planning multiplier (5–8x the ≥$10M count, reasoning from general CRE deal-size distribution logic, not a cited study) to arrive at **≈2,000–3,100 change-of-ownership PIP triggers per year [estimated, methodology explicitly a placeholder assumption]**.

**Combined reconciliation:** Method A (≈3,600–6,000, cyclical) plus Method B (≈2,000–3,100, transactional, with the caveat that some transactional PIPs coincide with a cyclical PIP already due) yields a working range of **roughly 5,000–9,000 PIPs issued per year in the U.S., with 6,000–7,000 as a reasonable midpoint — the entire range is [estimated]**, a derived planning number, not a sourced industry statistic (`run-1/design/icp-market-channels.md` §1.4).

### Revenue scenarios at capture rates (from `run-1/design/offer-pricing.md` §2, Architecture A)

Using this plan's own reconciled **5,000–9,000 events/year [estimated]** range (not the older 8,000–10,000 figure from `offer-pricing.md`, which was derived from a broader hotel-stock base and superseded by the AHLA-based reconciliation above — inconsistency caught and corrected in red-team review) against the $399 Full Benchmark + Negotiation Memo price:

| Capture rate | Approx. reports/year | Approx. annual revenue [estimated] |
|---|---|---|
| 1% | ~50–90 | ~$20,000–$36,000/year |
| 5% | ~250–450 | ~$100,000–$180,000/year |

Full sensitivity: at the derivation's own low bound (~3,600 cyclical-only events/year), 1% capture is ~$14,000/year — the honest floor. Note also that "capture rate" here is against *all* U.S. PIP events; the realistically addressable funnel (owners who search online, buy self-serve, and trust an unbranded tool over their existing GC/broker relationship) is a narrower subset, so early-year results below the 1% row should not be read as failure of the market-size estimate (red-team finding, accepted).

These figures are explicitly a "real-but-modest" business at low capture, not a venture-scale projection, per the underlying pricing research's own framing (`run-1/design/offer-pricing.md` §2–3). A future broker/lender seat-license line (Architecture B, phase 2 — see Section 7 below) could add an estimated $60,000–$120,000/year at 20–40 desks licensed at ~$3,000/year average, but this rests entirely on unverified broker/lender willingness-to-pay assumptions with no evidence base yet collected (`run-1/design/offer-pricing.md` §2 Architecture B).

---

## 6. Competition

### 6.1 PIPGURU (thepipguru.com) — live site, vaporware status with evidence

PIPGURU presents pricing as if a live, self-serve SaaS product: Single Estimate $25 one-time; Starter $50/mo; Professional $100/mo; Enterprise $200/mo. But **every purchase CTA on the site — including "Buy one estimate" and "Start free trial" — routes to a waitlist form**, not a checkout (`run-1/design/competitor-teardown.md` §1). The site itself self-contradicts on price: its own pricing-section intro copy states "PIPGURU Starter is $99/month" two lines above a card that prices Starter at $50/mo (same source). Prior gap-fill research in this project found no named founder, no LinkedIn company page, no Crunchbase or funding record, no G2/Capterra/Product Hunt listing, no social presence, and **zero Wayback Machine snapshots ever** (`archived_snapshots: {}` returned directly from archive.org's own availability API) — plus exactly one unattributed testimonial with no name, photo, or company (`run-1/design/competitor-teardown.md` §1). PIPGURU has no negotiation feature at all, no way to upload an actual PIP document (its "Deep Dive" is built from brand/keys/scope toggles, not document ingestion), and discloses no source or methodology for its claimed "proprietary cost database... built from real project experience across hundreds of US hotel renovations" (`run-1/design/competitor-teardown.md` §1).

### 6.2 PIPGENIUS (thepipgenius.com) — live site, vaporware status with evidence

PIPGENIUS is more candid about its own status: explicitly labeled "Private Beta," "Founding clients onboard May 2026," throughout the site. Its homepage product-walkthrough mockup is directly labeled "Demo data shown; every live order renders the asset manager's own property," describing a fictional "Fairfield Inn Dallas Galleria." Its "case studies" page presents three scenarios explicitly labeled "Composite scenarios calibrated to current cost-guide data — not named clients" (`run-1/design/competitor-teardown.md` §2). Pricing is a founding-client rate structure — Snapshot $495 (list $990), Blueprint $1,175 (list $2,500), Playbook unpriced/"coming soon." Prior gap-fill research found no named founder or team, no LinkedIn/Crunchbase presence, zero testimonials, zero Wayback Machine snapshots, and no press coverage (`run-1/design/competitor-teardown.md` §2). Most importantly for PIPBench's positioning, PIPGENIUS **explicitly excludes** "brand-variance negotiation with the franchisor on your behalf" from its own scope — its FAQ states plainly, "we'll identify leverage; you run the call" (`run-1/design/competitor-teardown.md` §2). Both sites share near-identical hero copy and the same "66+ brands / 8 flag families / 200+ line items" statistics, which the underlying research flags as strongly suggestive of a shared template or operator, not independent evidence of two validated businesses (`run-1/design/competitor-teardown.md` §2).

### 6.3 Beyer Brown — the real human comp

Beyer Brown is a real, long-operating FF&E-procurement and PIP-consulting firm with a visible project portfolio (Waldorf Astoria Bonnet Creek, Omni San Diego, Montage Big Sky, among others) and named client testimonials with title and company attached — a Davidson Hospitality SVP of Design & Construction, a LittKM Group Principal, a Hudson Advisors Director, a Wheelock Street Capital Principal (`run-1/design/competitor-teardown.md` §3). Beyer Brown's PIP Analysis & Reporting service prioritizes items by requirement level, urgency, and operational impact — a superset of what either software competitor claims, delivered by real humans with over a decade of track record. It does not, however, ship a structured pushback/negotiation memo as a distinct deliverable, and its pricing is entirely quote-gated with no public price point disclosed (`run-1/design/competitor-teardown.md` §3). Beyer Brown is the clearest evidence in this research that credible owner-side PIP work is a real, currently-paid professional service — a materially higher bar of proof-of-concept than either PIPGURU or PIPGENIUS can show.

### 6.4 Nehmer/HVS Hotel Cost Estimating Guide — the free reference

Now in its 18th year, the 2026 edition of the Nehmer & HVS Design Hotel Cost Estimating Guide is the primary data backbone of PIPBench's own dataset. Contrary to an earlier research pass's assumption that it was a paid product, direct verification found the guide is a free, lead-gen-gated download at nehmer.com/costguide, despite the HVS store URL path suggesting otherwise (`run-1/design/competitor-teardown.md` §4). It covers six hotel tiers (Economy through Luxury) across nine categories with low/average/high unit costs, contributed by five named construction firms. It is structurally different from PIPBench: an industry-wide, tier-based static reference, not a brand-specific or bid-specific benchmarking tool, and it offers no negotiation output.

### 6.5 Adjacent threats

- **Procore** has a dedicated Estimating module aimed at general contractors — digital takeoff, cost database, bid management — and Hotel Tech Report does index Procore under hospitality "Renovations and Development." But no evidence was found of Procore building hotel-brand-specific PIP logic, and its module is GC-facing, not owner-facing (`run-1/design/competitor-teardown.md` §5). Procore's May 2026 AI contract-review launch is a real development to monitor, but it points at GC-side workflow, not owner-side PIP benchmarking, per the business-design synthesis (`run-1/design/business-design.md` §7.5).
- **Franchisors themselves** (Marriott, Hilton, IHG, Hyatt, Wyndham, Choice) show no evidence of building an owner-facing PIP cost-estimating tool. The underlying research offers a structural (reasoned, not stated) explanation: a franchisor's institutional incentive is to charge owners to produce the PIP document itself, not to build a free tool that helps owners push back on that same document's cost (`run-1/design/competitor-teardown.md` §5).
- **The more credible near-term entrant risk**, per the underlying research, is a third PIP-specific clone — the barrier to standing up a landing page in this niche is evidently very low, as PIPGURU and PIPGENIUS themselves demonstrate (`run-1/design/competitor-teardown.md` §5).

### 6.6 Differentiation map

No existing product — real or vaporware — combines all four of the following, per the direct-comparison research (`run-1/design/competitor-teardown.md` §7):

1. **A working PIP-document parser, actually demonstrated** (not brand+keys+scope toggles, and not a labeled demo mockup).
2. **A generated, line-item-linked negotiation memo as the core deliverable**, not an afterthought — PIPGURU has none; PIPGENIUS explicitly excludes brand-variance negotiation from scope; Beyer Brown prioritizes but doesn't ship a structured memo.
3. **Named-source cost data with honest confidence grading**, paired with an interactive tool — both software competitors claim unverifiable "proprietary databases"; the only named-source reference (Nehmer/HVS) is a static PDF, not a live tool.
4. **Honest self-serve pricing that doesn't contradict itself on the same page** — a low bar PIPGURU already fails.

---

## 7. Business Model & Pricing

### 7.1 Architecture A rationale (adopted)

| SKU | Price | What it delivers |
|---|---|---|
| Fair-Range Check | $99 | Brand + keys + scope → sourced per-key benchmark range for the property's PIP tier, in minutes |
| Full Benchmark + Negotiation Memo | $399 | Upload the PIP/bid → category-by-category benchmark vs. named sources, over/under flags, confidence grades, and the negotiation memo |
| Refresh | $129 | Re-run within 18 months against the saved property record (revised PIP, second opinion) |

This pricing shape is adopted specifically because PIP benchmarking is bought roughly once every 5–10 years per property, which breaks the core assumption behind monthly SaaS pricing: a single-property owner has no reason to keep paying in months 2 through 60 with nothing to do (`run-1/design/offer-pricing.md` §1). Every real-world business facing an identical episodic-transaction pattern has converged on pure pay-per-report pricing with no subscription default: Phase I Environmental Site Assessments run $1,800–$10,000 with no subscription tier anywhere in the category; Property Condition Assessments run $1,250–$2,500, same pattern; HOA reserve studies run $1,200–$6,000 for a full study, with a cheaper "update" SKU for repeat buyers — the single closest pricing-mechanics analog to PIPBench's own Refresh tier (`run-1/design/offer-pricing.md` §1, rows 3–5). PIPGURU's own $25-one-time-alongside-a-subscription structure reads as the vendor hedging against this exact episodic mismatch, not as proof its subscription tiers work (`run-1/design/offer-pricing.md` §3).

Price anchoring: the $399 Full Benchmark sits far below the $5,000–$15,000 consultant anchor (a 95%+ discount, the same story both software competitors already tell) and above PIPGURU's $25 one-time price, priced on the strength of the negotiation-memo deliverable, which no other competitor's public pricing page presents as a distinct output (`run-1/design/offer-pricing.md` §2).

### 7.2 Unit economics

Once the benchmark dataset and parser exist, PIPBench's marginal cost per report is near zero: a report is a database lookup, an escalation calculation, and a templated memo generation, not a human analyst's time (unlike PIPGENIUS's analyst-delivered PDF model, `run-1/design/competitor-teardown.md` §2). This is structurally closer to Carfax's pay-per-report consumer model — cheap to run per report once the pipeline exists — than to a human-consulting business, though Carfax's buyer volume (millions of transactions/year) is orders of magnitude larger and does not transfer directly as a volume comparison (`run-1/design/offer-pricing.md` §1, row 7). The dataset itself (`run-1/product/data/benchmarks.json`) is a one-time and periodically-refreshed research asset, not a per-report cost center.

### 7.3 Phase 2: the broker/lender Architecture B

Architecture B layers a second revenue line onto the same owner-side per-report pricing: an annual per-seat license ($2,000–$5,000/year, illustratively ~$3,000/year average) sold to brokers and lenders who touch many PIPs a year and would use the tool repeatedly across a client roster — converting the episodic single-owner problem into a recurring B2B2C channel for the segment that actually transacts often enough to justify a subscription (`run-1/design/offer-pricing.md` §2, Architecture B). This is explicitly a phase-2 initiative, contingent on owner-side traction first, because no broker or lender willingness-to-pay research exists yet in this project (same section).

---

## 8. Go-to-Market

Channel order, per the underlying research (`run-1/design/icp-market-channels.md` §3; `run-1/design/business-design.md` §6):

1. **SEO.** The "hotel PIP cost" query cluster is genuinely winnable today: current top results are a mix of one direct competitor's landing page (PIPGURU), consulting/contractor cost-guide content marketing, and CMBS/lending content marketers — no authoritative, purpose-built self-serve benchmarking tool currently owns this query cluster, and PIPGENIUS, still in private beta, does not yet appear to rank organically (`run-1/design/icp-market-channels.md` §3.6). Content strategy: per-brand PIP-cost pages built directly on the public dataset.
2. **Trade-press PR.** LODGING Magazine, Hotel Dive, Hospitality Net, HFTP, and Hotel-Online are all actively running PIP-cost and PIP-distress stories in 2025–2026 (`run-1/design/icp-market-channels.md` §3.5, with named recent examples). The pitch: a data-backed angle such as "what public filings and cost guides say PIPs really cost," which fits an already-receptive beat rather than requiring the outlet to be educated on the category from scratch.
3. **The AAHOA ecosystem, treated as an audience, not an endorsing partner.** AAHOACON draws 6,500+ attendees and is described as a venue for "million-dollar buying decisions" (`run-1/design/icp-market-channels.md` §3.1). Per the tournament's binding condition 5, PIPs are not on AAHOA's formal 12 Points agenda, so AAHOA should be treated as a high-overlap audience to reach through content, regional events, and Today's Hotelier advertising — not as an implied endorsement (`run-1/tournament/tournament-results.md`). Exact sponsorship/exhibitor rate-card pricing requires direct inquiry and was out of scope for this research pass under the no-contact guardrail (`run-1/design/icp-market-channels.md` §3.1).
4. **Broker referrals.** Brokers already fight PIP surprises mid-deal — the Marcus & Millichap Michigan deal and The Plasencia Group's own "Slaying the PIP Dragon" thought-leadership both evidence this directly (`run-1/design/icp-market-channels.md` §2.2, §3.3). A benchmark that keeps a deal alive by giving both sides a defensible number is a natural broker referral hook; this is the on-ramp to the phase-2 Architecture B seat-license channel.
5. **The Lodging Conference over ALIS for the primary ICP.** The Lodging Conference (Phoenix, Oct 2026) historically draws 2,000–5,000 attendees (2,900+ the prior year) and is owner-heavy; ALIS skews institutional/investor and is a better fit for the secondary lender/broker ICP (`run-1/design/icp-market-channels.md` §3.2).

**The CMBS-wave targeting insight:** the highest-intent, most time-sensitive segment to target first is small, suburban, franchised, limited/select-service hotels carrying floating-rate CMBS debt originated in the 2020–2022 low-rate window and maturing in 2026 — this owner must either refinance (triggering a lender-mandated PIP-reserve underwriting exercise) or sell (triggering a change-of-ownership PIP review), giving marketing a concrete, dated urgency window rather than a generic "PIPs are expensive" pitch (`run-1/design/icp-market-channels.md` §4).

---

## 9. Moat

PIPBench's durable advantages are not proprietary data lockup — the underlying dataset is built entirely from named public sources (Nehmer/HVS, FDD filings, HVS advisory articles, published cost indices), which anyone could in principle assemble. The moat is elsewhere:

1. **The honesty/source-transparency brand itself.** Both direct competitors claim unverifiable "proprietary databases" with no named methodology; PIPGENIUS's own case studies and product demo screenshots are labeled fictional/composite on the page itself; PIPGURU's pricing section self-contradicts. In a category where the two live entrants are both pre-revenue and both hedge on their own liveness, a product that shows its work — named source, page citation, and an honest Verified/Directional grade on every single number — is a differentiator that is expensive for a copycat to fake, because faking it requires actually doing the sourcing work, not just writing the copy (`run-1/design/competitor-teardown.md` §7; `run-1/design/business-design.md` §2).
2. **The negotiation-outcome data flywheel (phase 3).** Once PIPBench has real users generating real negotiation memos, it can begin tracking anonymized, aggregated negotiation outcomes — which asks succeed, which counters get accepted, by brand and category. This is the beginning of a genuinely proprietary dataset that neither PIPGURU nor PIPGENIUS can copy from a landing page, because it can only be built from actual usage, not from public sources (`run-1/design/business-design.md` §8, phase 3).
3. **Why incumbent-data-style moats do not block this business.** Unlike categories where a paywalled, licensed dataset (for example, the ISHC/HAMA capex benchmark considered and rejected for the runner-up FF&E-reserve concept during the tournament, `run-1/tournament/tournament-results.md`) is a precondition for building the product at all, PIPBench's v1 dataset is assembled entirely from free or already-public sources — the Nehmer/HVS guide, FDD filings, HVS articles, cost indices. There is no incumbent gatekeeper who can revoke access to the data PIPBench is built on.

---

## 10. Risks & Honest Unknowns

Every item in this project's honesty register (`run-1/design/business-design.md` §7) is carried here in full, each with its mitigation or tripwire — not buried in an appendix.

**1. No first-person willingness-to-pay evidence exists.** Nobody in this project's research — no hotel owner, anywhere — has said "I would pay $X for this." The $399 price rests entirely on structural analogs (ESA/PCA/reserve-study pricing shape) and consultant-fee anchoring, not on direct owner statements. **Mitigation/tripwire:** the demand-validation protocol documented in `run-1/design/offer-pricing.md` §4 — a landing-page smoke test plus 10–15 structured owner conversations using a Van Westendorp-style price-anchoring script — is explicitly step one of the launch plan, not something already done. It could not be run inside this build because outreach was outside this run's guardrails. Success thresholds are pre-specified in that document (e.g., at least 50% of interviewed owners independently naming a figure in the $99–$499 range as "no-brainer" or "would pay without hesitation"); if the results fall short, the price or the product concept itself needs revisiting before further build investment.

**2. The annual-PIP-count is derived, not sourced.** The 5,000–9,000 PIPs/year figure used throughout Sections 1 and 5 is built from two independent back-of-envelope methods (renovation-cycle math and an unsourced transaction-volume multiplier), not from any single citable industry statistic (`run-1/design/icp-market-channels.md` §1.4). **Mitigation:** this plan never presents the figure without its derivation attached, and a founder should re-derive it from STR or transaction-volume data before using it in any external-facing pitch material.

**3. The two direct competitors' stall is ambiguous evidence.** PIPGURU and PIPGENIUS being pre-revenue, waitlist-gated sites with zero verifiable customers is consistent with two different stories: "validated demand, uncaptured niche" or "weak demand that even two attempts couldn't convert." This project's tournament ruling treated it as the former, but that is an interpretation, not a proven fact (`run-1/tournament/tournament-results.md`, Final ruling). **Tripwire:** if either competitor launches with real, named, verifiable customers, the "undefended niche" premise should be revisited immediately (`run-1/design/business-design.md` §7.3; `run-1/tournament/tournament-results.md` condition 7).

**4. Dataset confidence is uneven across chain scale.** Midscale and upper-midscale benchmarks in `run-1/product/data/benchmarks.json` are substantially primary-sourced (Verified); luxury, economy, and extended-stay figures lean more heavily on interpolation and lower-confidence trade-vendor sources (Directional). **Mitigation:** the product UI shows this distinction on every figure rather than hiding it — the confidence grade is a core product feature, not a disclaimer buried in fine print (`run-1/design/business-design.md` §7.4).

**5. Procore platform risk.** Procore's May 2026 AI contract-review launch is a real, dated development in adjacent construction-estimating software. It is currently GC-facing, not owner-facing, and shows no evidence of hotel-brand-specific PIP logic (`run-1/design/competitor-teardown.md` §5). **Mitigation:** monitor, don't treat as blocking; if Procore or a similar general-contractor platform begins marketing an owner-facing, brand-specific PIP tool, this needs active reassessment (`run-1/design/business-design.md` §7.5).

**6. Franchisor-relations risk.** PIPBench's core value proposition is helping an owner push back against a franchisor's PIP demands. No franchisor currently offers an owner-facing PIP cost-estimating tool, and the underlying research offers a structural (reasoned, not confirmed) explanation for why: a franchisor's institutional incentive runs toward charging owners to produce the PIP document, not toward building a tool that undercuts its own brand-standards leverage (`run-1/design/competitor-teardown.md` §5). This does not create legal risk to PIPBench's own product — the memo is explicitly labeled negotiation support, not a legal opinion (`run-1/design/business-design.md` §5) — but a founder should expect no cooperation from franchisors and should not assume any brand will validate, endorse, or provide data access to this product.

**7. Banned claims, carried forward as a standing constraint, not just a past instruction.** Decade-old anecdotes (an HREC figure describing a PIP escalating from $2M to $6–8M; a Magnuson elevator-cost-as-percent-of-revenue claim) are banned from all marketing, per the binding claims-discipline rule (`run-1/design/business-design.md` §7.6). The unverified "PIP cycle compressed from 10 years to 7 years" claim, which could not be verified anywhere in this project's research, is banned everywhere it might otherwise be tempting to use as a why-now argument (`run-1/design/offer-pricing.md` §0; `run-1/tournament/tournament-results.md` condition 2). Any 2016/2017-vintage pricing anecdote (e.g., the 2017 CoStar panel's $7,500–$20,000 franchisor PIP-prep fees) must be labeled as dated when cited, as done in Section 2 above, never presented as current pricing.

---

## 11. Roadmap

**Phase 1 (current, v1 — locked scope per tournament conditions):** PIP benchmarking calculator plus negotiation/pushback memo generator, exactly as described in Section 4. No reserve-forecasting bundle, no GC track-record dossier — both were evaluated and explicitly excluded from v1 scope by the tournament ruling (`run-1/tournament/tournament-results.md`, condition 1).

**Step one of any real launch, before further engineering investment:** run the demand-validation protocol (`run-1/design/offer-pricing.md` §4) — the landing-page smoke test and the 10–15 structured owner conversations — since this is the first real willingness-to-pay evidence this business will have (see Risk 1, Section 10).

**Phase 2 (post-validation):**
- Broker/lender seat licenses (Architecture B, Section 7.3), contingent on owner-side traction being demonstrated first.
- An FF&E reserve-adequacy forecasting module — the tournament runner-up concept (E5/E6 in `run-1/tournament/tournament-results.md`) — reaches the same buyer with a recurring-cadence use case and opens a lender-side second market, but is contingent on either solving the ISHC/HAMA capex-benchmark data-licensing wall (a paid, stale report as of Nov 2023 with 2018–2022 data — a genuine buildability blocker, per the tournament's own finding) or assembling an alternative public dataset (`run-1/tournament/tournament-results.md`, Round 2 evidence; `run-1/design/business-design.md` §8).

**Phase 3:** brand-negotiation outcome tracking — aggregating anonymized results across users on which specific negotiation asks succeed, by brand and category. This is the beginning of a genuinely proprietary dataset neither PIPGURU nor PIPGENIUS can replicate from a landing page, and is the foundation of the data-flywheel moat described in Section 9 (`run-1/design/business-design.md` §8).


---

## 12. Red-team addendum (binding amendments, 2026-07-18)

Thirty-eight adversarial attacks were filed against this plan and ruled on individually (`run-1/redteam/red-team-report.md`). The material amendments:

**New risk — free AI substitution (severity 5, accepted).** Owners can paste a PIP into a general-purpose AI chatbot and get a rough benchmark and pushback language for free. This is a permanent condition of the category, previously unpriced in this plan. Response: PIPBench's defensible units are the curated, source-cited, confidence-graded dataset and the formatted, citation-linked memo — precisely the outputs a general chatbot cannot reliably produce (unsourced or hallucinated figures are the failure mode PIPBench's grades exist to prevent). Pricing already sits at impulse level partly for this reason; the durable moat must be the phase-3 outcome dataset. This risk caps pricing and raises the permanent bar on trust signals.

**New risk — the data publisher as competitor.** HVS/Nehmer own the category's best data and are the cheapest credible entrant into calculators. Hedge: the launch plan now requires a licensing/partnership conversation with Nehmer/HVS before revenue (which also resolves the data-licensing exposure below). Monitored quarterly.

**Competitive fact update (verified 2026-07-18).** PIPGURU now operates a live account-signup page (`/auth/signup`); a checkout path could not be confirmed (404). Still zero verifiable customers, reviews, or named operators — but the "pure waitlist page" characterization in §6 is superseded. Tripwire cadence: monthly, and stall signals count (PIPGENIUS's own May 2026 onboarding date had passed without launch as of this writing).

**Data licensing (launch-blocking).** The demo dataset extracts figures from the copyrighted Nehmer/HVS guide (2021 edition, openly hosted) with attribution. Individual facts are not copyrightable, but systematic commercial extraction from a proprietary compilation carries legal and reputational risk. Before any paid transaction: legal review of extraction scope; a licensing/partnership approach to Nehmer/HVS; fallback dataset assembled from unambiguous public records (FDD filings, REIT disclosures, cost indices). The current guide edition (form-gated, free) must also be obtained at launch, re-basing the dataset and removing most of the 2021→2026 escalation estimate.

**Cost lines previously omitted [all estimated].** Entity formation + ToS/liability drafting (~$1.5–4K one-time legal); E&O insurance quote required pre-revenue (~$1–3K/yr class-dependent); annual dataset refresh cycle (founder time + current guide edition); support load ~1–2 hrs per early report with a stated service boundary (PIPBench reviews revisions; it does not join negotiation calls).

**Distribution decision rule.** If validation conversations show the dominant owner reflex is "call my GC/broker," v1 distribution pivots broker-embedded (Architecture B first), rather than deferring broker seats to phase 2. Five broker interviews added alongside the 10–15 owner conversations.

**Memo integrity rule (applied in-product).** DIRECTIONAL-graded benchmarks are never used for hard price-adjustment demands in generated memos — they support requests for itemized backup only. VERIFIED-graded benchmarks may anchor an adjustment request.
