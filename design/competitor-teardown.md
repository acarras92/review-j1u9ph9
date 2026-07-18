# Competitor Teardown: PIP Bid-Benchmarking Space

**Research date:** 2026-07-18
**Scope:** PIPGURU, PIPGENIUS, human PIP consultants, reference cost guides, adjacent platform threats.
**Guardrails followed:** Research only. Nothing published, no signups, no purchases. Every figure below is tied to a live URL fetched on 2026-07-18 (see citations); anything not directly verifiable is marked **[unclear]** or **[estimated]**. No proprietary/internal deal data referenced.

---

## 1. PIPGURU (thepipguru.com)

Fetched directly: [homepage](https://www.thepipguru.com), [/about](https://www.thepipguru.com/about), [/help](https://www.thepipguru.com/help). Sitemap via Firecrawl map: homepage, /about, /help, /blog, /contact, /privacy, /tos, /auth/login, /auth/signup.

### Positioning / copy
- Hero: *"Your PIP just landed... and your owner wants a number. Every PIP has a price. Know yours first."*
- Sub-head: "PIPGURU gives hotel owners, managers and franchise consultants defensible renovation cost estimates across 66+ brands in minutes, not weeks."
- Anchors against the status quo with four stat call-outs: **$10k** consultant fee, **3wks** turnaround, **±20%** variance, **2025** tariffs added 5–10% to FF&E costs.
- Tagline used site-wide: "The PIP Whisperer."
- CTAs: "Start a free estimate," "See how it works," "Join the waitlist" — **all CTAs route to `#waitlist`, including "Buy one estimate" and "Start free trial."** There is no live checkout; despite displaying a priced menu as if self-serve, the product is not purchasable today.

### Pricing tiers (as displayed 2026-07-18)
| Tier | Price | Included |
|---|---|---|
| Single Estimate | $25 one-time | 1 Deep Dive, all 6 tiers, PDF export, no subscription |
| Starter | $50/mo | Unlimited Gut Checks, 5 Deep Dives/mo, Midscale/Upscale/Upper Upscale only, saved history |
| Professional (Most Popular) | $100/mo | Unlimited Gut Check + Deep Dive, all 6 tiers, actual SF inputs, branded PDF, 2025 data |
| Enterprise | $200/mo | Everything in Pro + 5 seats, portfolio comparison, custom branding, priority support |

**Internal inconsistency found on the live page itself:** the pricing section's own intro copy says *"PIPGURU Starter is $99/month"* while the priced card two lines below it says **$50/mo**. This is a live copy bug on the site as fetched, not a stale-cache artifact — both strings appear in the same page fetch. Flag: **[site self-contradicts on Starter price — $50 vs $99]**.

### Claimed features
- "Gut Check" (<2 min, ballpark range, per-key) and "Deep Dive" (5–15 min, full line-item, editable unit costs/quantities, adjustable markup/freight/tariff/contingency).
- 66+ brands auto-classified across 8 flag families; 200+ line items; 6 hotel tiers (Economy→Luxury); low/avg/high ranges on every line; "2025 tariff adjustments" as a distinct line; branded PDF export (Pro/Enterprise only); saved estimate history/portfolio comparison (Enterprise).
- Data claim: "proprietary cost database... built from real project experience across hundreds of US hotel renovations, updated annually" — **unverifiable, no source/methodology disclosed.**
- Sample output shown on homepage: a 120-key Select Service "Deep Dive" — Guestrooms Soft Goods $1.16M–$1.59M, Public Space Full Reno $485K–$720K, Exterior Soft Goods $210K–$340K, Fitness $95K–$145K, Prof Fees/Freight/Contingency $320K–$490K → **Total $2.27M–$3.29M / $18,900–$27,400 per key.**

### Traction / real vs. vaporware
- Confirmed by prior gap-fill research in this project (2026-07-18): no named founder, no LinkedIn company page, no Crunchbase/funding record, no legal entity disclosed, no G2/Capterra/Product Hunt listing, no social presence, **zero Wayback Machine snapshots ever** (`archived_snapshots: {}` from archive.org's own availability API), one unattributed testimonial ("Asset Manager · Regional Hotel Management Company," no name/photo/company), and **every purchase CTA routes to a waitlist form**, not checkout.
- **Verdict: pre-revenue, single-page marketing/waitlist site simulating a live SaaS product.** The pricing menu, "Most Popular" badge, and feature-gating (All Plans / Pro & Enterprise) are real UX artifacts, but nothing behind them is purchasable — this is closer to a demand-testing landing page than an operating company.

### Gaps / what it does not do
- No negotiation output, no pushback memo, no brand-standard citation/variance logic, no lender/broker workflow, no per-brand generation-cycle tracking, no way to upload an actual PIP document (estimates are built from brand+keys+scope toggles only, not a real PIP PDF).
- No visible source citations for its cost data (no named reference like RSMeans/Nehmer, no methodology page).

---

## 2. PIPGENIUS (thepipgenius.com)

Fetched directly: [homepage](https://www.thepipgenius.com), [/pricing](https://www.thepipgenius.com/pricing), [/about](https://www.thepipgenius.com/about), [/case-studies](https://www.thepipgenius.com/case-studies). Sitemap: homepage, /help, /pricing, /about, /blog (+5 posts), /case-studies, /contact, /privacy, /tos.

### Positioning / copy
- Near-identical hero to PIPGURU: *"Your PIP just landed and your owner wants a number. Every PIP has a price. Know yours first."* — same stat framework (5-figure consultant fee, 2–3wk turnaround, ±20% variance, 2025+ tariffs), same "66+ brands / 8 flag families / 200+ line items" numbers. This strongly suggests a shared template/operator or direct cloning between the two sites (an observation from directly comparing both fetched pages, not an external claim).
- Explicitly labeled "Founding Clients · Private Beta," "Now accepting founding clients," onboarding "May 2026."
- Product-walkthrough mockup on the homepage is **explicitly labeled "Demo data shown; every live order renders the asset manager's own property"** for a fictional "Fairfield Inn Dallas Galleria" — i.e., the screenshots are acknowledged as fabricated demo, not real usage.

### Pricing (found live on /pricing — more current than prior research pass, which had found "no public pricing")
| Tier | Founding-client rate | List rate (strikethrough) | Turnaround | Deliverable |
|---|---|---|---|---|
| Snapshot | **$495** | $990 | 24hr | 3-page: total range, per-key economics, section subtotals |
| Blueprint | **$1,175** | $2,500 | 48hr | 9-page: full line-item estimate, allowances/assumptions table, top cost drivers, methodology page |
| Playbook | Not priced ("Coming soon") | — | 72hr | Everything in Blueprint + restructuring levers, phasing scenarios, capital scenarios, co-branded deliverable |

- Portfolio/volume pricing: owners with 5+ properties expecting PIPs within 12 months get "roughly 15–25% below per-order list pricing" (per FAQ on /pricing) — **[self-reported by PIPGENIUS, not independently verified]**.
- Explicitly **out of scope**: demolition/structural-engineering takeoffs, construction-management/GC procurement, "brand-variance negotiation with the franchisor on your behalf," property-condition assessments outside PIP scope, environmental/geotechnical/zoning reports. This is a direct, self-disclosed boundary — PIPGENIUS does not claim to negotiate with the franchisor for the client, only to "identify leverage" (per the Playbook FAQ: "we'll identify leverage; you run the call").

### Claimed features
- Service-delivery model (upload PIP PDF → hand-reviewed analyst-delivered PDF), not self-serve software like PIPGURU.
- "NDA-Protected... every engagement is NDA-protected," revision policy (Blueprint: 1 free revision in 14 days; Playbook: 2), tier upgrade path (pay only the delta), ownership of delivered report vested in client (PIPGENIUS retains "aggregated, de-identified benchmark data" only).
- Case-studies page (3 "composite/representative scenarios," explicitly **not named clients**: a Best Western→Hampton conversion Snapshot ($8.4M±$2.1M, 96 keys), a Fairfield refresh Blueprint ($11.8M±$1.9M, 120 keys), and a Hilton Garden Inn Playbook ($19.2M full-scope → $14.6M phased alternative, 148 keys) — all labeled "Composite scenarios calibrated to current cost-guide data — not named clients," i.e., **illustrative fiction, not case studies of real customers.**

### Traction / real vs. vaporware
- Prior gap-fill research (2026-07-18): no named founder/team, no LinkedIn/Crunchbase presence, **zero testimonials** (vs. PIPGURU's one unattributed quote), zero Wayback Machine snapshots, no press coverage. Every CTA is a waitlist/intake form, and the site explicitly self-identifies as "Private beta" throughout — this is the one claim PIPGENIUS is transparent about (unlike PIPGURU, which markets as if live).
- **Verdict: also pre-revenue/pre-launch**, but more upmarket-positioned (analyst-delivered PDF vs. instant calculator) and more candid about its beta status. The detailed procurement FAQ (payment terms, MSA/NDA, revision policy, upgrade path) reads as more operationally mature copywriting than PIPGURU's, but is equally unverifiable as an actual functioning service — no evidence any Snapshot/Blueprint has ever actually shipped.

### Gaps / what it does not do
- Explicitly refuses to negotiate with the franchisor on the client's behalf (self-disclosed scope exclusion above) — it hands back "leverage," not an outcome.
- No self-serve product at all (fully consultant/service-model), meaning turnaround is inherently gated by human analyst availability, not software.
- No published cost-data methodology beyond "sourced from real PIP projects... cross-referenced against brand standards, regional labor indices, and contractor data" (/about) — same unverifiable-source problem as PIPGURU.

---

## 3. Human alternatives: PIP consultants and PM/GC firms

### Beyer Brown (beyerbrown.com) — real, operating firm
Fetched directly: [PIP Analysis & Reporting service page](https://www.beyerbrown.com/services/pip-analysis-reporting/).
- Beyer Brown is a real, long-operating **FF&E procurement and PIP-consulting firm** with a visible portfolio (Waldorf Astoria Bonnet Creek, Omni San Diego, Montage Big Sky, Hotel Alpenrock Breckenridge, etc.), named client testimonials with title/company (Davidson Hospitality SVP Design & Construction; LittKM Group Principal; Hudson Advisors Director; Wheelock Street Capital Principal), and a "PIP Analysis & Reporting" service explicitly described as producing **cost estimates, prioritization by requirement level/urgency, and phasing/timeline guidance** — i.e., a superset of what PIPGURU/PIPGENIUS claim, delivered by actual named humans with a decade-plus track record ("over a decade completing over 20 projects" per one testimonial).
- **No public pricing disclosed** — the page is entirely "Get a Quote" / "Get Started" CTA-gated. **[unclear — no price point publicly available]**.
- Does not claim a negotiation-memo product; its FAQ says PIP items are organized by "requirement level, urgency, and operational impact" to help owners "distinguish between mandatory brand requirements and discretionary improvements" — adjacent to, but not the same as, a structured brand-standard-citation pushback memo.
- **Conclusion:** Beyer Brown is the clearest evidence that credible owner-side PIP analysis is a real, currently-operating, paid professional service with named repeat clients — a much higher bar of proof-of-concept than either PIPGURU or PIPGENIUS can show, but priced opaquely and not self-serve/instant.

### "Warvi Hospitality" — could not be found
- Targeted search for `"Warvi" hospitality` and `"Warvi Hospitality" PIP` returned **zero relevant results** — only unrelated surname/place-name hits (a village called Warvi, a person's surname, an unrelated obituary). **[unclear/not found — no evidence this firm exists under this name, or it is not discoverable via public search as of 2026-07-18]**. Do not cite this as a real competitor without further verification.

### General "PIP consultant" market signal (from prior verified research in this project + this pass)
- **CoStar, "3 Tips for Navigating PIPs"** (fetched directly, [costar.com/article/1637180968](https://www.costar.com/article/1637180968/3-tips-for-navigating-pips), **published March 31, 2017 — dated, ~9 years old**): Marriott's own VP of Owner & Franchise Services stated Marriott charges owners **$8,000 for select-service PIP document prep and $20,000 for full-service**; Hilton's director of product improvement said Hilton's PIP prep fee is **$7,500**. Note: **these are the franchisor's fee to produce/issue the PIP document itself, not a third-party renovation-cost estimate** — a distinct cost owners pay before they ever get to the estimating step this candidate addresses. Panelists (Bill Robinson, RAM Group; Matt Arrants, Pinnacle Advisory Group; Ben Wallace, River Ridge Renovations) explicitly advised owners to "work with professionals to price out the PIP rather than try to estimate it themselves" — direct trade-conference evidence that professional PIP-cost consulting is the industry-normal path, though the advice itself is 2017-vintage.
- Prior research in this project (see `candidate2-pip-benchmarking.md`) separately verified: Lee Hunter (Hunter Hotel Advisors) cites **$35,000–$40,000/key** for mid-market select-service PIPs (date unclear, corroborated only via search snippet, primary CoStar source blocked 403); general consultant preliminary-budget fees of **$5,000–$15,000 per engagement, 2–3 week turnaround** are the number both PIPGURU and PIPGENIUS use as their own "old way" anchor stat on their homepages — i.e., **PIPGURU and PIPGENIUS are both implicitly citing the human-consultant market (not a named source) as their point of comparison**, and neither discloses where the "$5,000–$15,000" / "5-figure" figure itself comes from.
- Other adjacent-content (not tools) found: [DEV Builders Group](https://www.devbuilders.com/markets/hospitality-entertainment/hotel-pip-costs-puerto-rico-us) — a real Puerto Rico general-contracting firm's SEO content page on estimating hotel PIP costs manually; not a software competitor, included for completeness (verified in prior research pass).

---

## 4. Reference products

### Nehmer/HVS Hotel Cost Estimating Guide
Fetched directly: [nehmer.com/costguide](https://www.nehmer.com/costguide), [hvs.com store listing](https://www.hvs.com/article/store/paid/212-nehmer-hvs-design-hotel-cost-estimating-guide), [hotelcostestimatingguide.com](https://www.hotelcostestimatingguide.com) (redirects to nehmer.com/costguide).
- **Now in its 18th year — the 2026 edition** was released by Jonathan Nehmer + Associates and HVS Design (per the HVS article text itself, fetched directly).
- **Contents (per the HVS announcement text):** capital expenditure construction and FF&E costs across **six hotel tiers** — Economy, Extended Stay, Midscale, Upscale, Upper Upscale, Luxury. Within each tier, costs are broken into categories: **Guestrooms, Guest Bathrooms, Guestroom Corridors; Public Spaces; Food & Beverage; Function Spaces; Guest Amenities; Infrastructure; and Common Additives.** Costs given as low/average/high per item, covering FF&E, construction, and installation. Unit-cost data contributed by five named construction firms (Ironstar Construction, POK Construction, Zerr Enterprises, Reliance Construction Company, Benjamin West).
- **Pricing/access — genuinely conflicting evidence found in this pass:**
  - The **HVS URL path itself is `/article/store/paid/...`** (implies a paid product), but **the article's own body text says: "The Hotel Cost Estimating Guide is available as a complimentary download at www.hotelcostestimatingguide.com."**
  - **hotelcostestimatingguide.com redirects to nehmer.com/costguide**, which is a **lead-gen form** ("To access the Hotel Cost Estimating Guide, please fill out the form below") — i.e., free to obtain, but gated behind a contact-info form, not an open PDF link and not a paid checkout.
  - **Flag: [unclear/conflicting]** — this contradicts the prior research pass in this project, which had concluded the guide was a straightforwardly "paid" product based on the HVS store URL alone without reading the article body text. Correct current understanding: **it appears to be a free-to-download (lead-gen-gated) reference, not a purchased report** — treat the "paid guide" framing from earlier research as superseded by this direct-fetch finding. Actual PDF contents were not accessed in this pass (would require submitting the lead-gen form, which is out of scope per guardrails — no signups).
- **Granularity vs. PIPGURU/PIPGENIUS:** broader (hotel-tier category level, ~9 categories) rather than brand-specific (Nehmer/HVS does not appear to break out by individual franchise brand/flag — it is tier-based, not brand-based, per the description). This is a structurally different product: an industry-wide reference vs. a brand-specific, PIP-document-anchored estimate.

### RLB Quarterly Cost Report / general construction-cost indices
- Previously verified (prior research pass, not re-fetched this pass): RLB publishes quarterly North America construction cost reports; general (data centers, healthcare, education, commercial), **not hotel-PIP-specific**, summary versions freely available, full granular data reportedly behind a paywall **[unclear — exact paid/free line not confirmed]**.

### Generic construction-estimating software (Procore, RSMeans, PlanSwift, CostX, STACK, Buildertrend)
- Procore has a dedicated "Estimating" module (per [procore.com/estimating](https://www.procore.com/estimating) and third-party reviews found in search) aimed at general contractors — digital takeoff, cost database, bid management. **General-purpose construction estimating, not hotel-brand-PIP-specific**, and not marketed toward hotel owners/asset managers as a PIP-benchmarking tool. Pricing reported by a third party as "$375/mo starting, $10K–$60K/yr typical" **[third-party estimate, not confirmed via Procore's own site — Procore does not publish list pricing]**. [Hotel Tech Report's Procore listing](https://hoteltechreport.com/operations/renovations-and-development/procore) does index Procore under hospitality "Renovations and Development," confirming it's used in the hotel-construction context generally, but not as a franchise-PIP-specific tool.

---

## 5. Adjacent threats: could Procore or the franchisors themselves build this?

- **No evidence found of any franchisor (Marriott, Hilton, IHG, Hyatt, Wyndham, Choice) offering an owner-facing PIP *cost-estimating* tool or portal.** Search for "Marriott/Hilton/IHG own PIP cost estimating tool for owners" surfaced only: Marriott's Franchise Disclosure Document (states estimated initial investment ranges, e.g., $11.66M–$25.87M for an 80–110-room Fairfield — a pre-opening development-cost range, not a PIP-renovation-cost tool) and general PIP-navigation trade coverage. **Structural reason this is unlikely to change soon:** the franchisor's institutional incentive is to charge owners to *produce the PIP document* itself ($7,500–$20,000 per the 2017 CoStar figures above) — building a free tool that helps owners *push back* on that same PIP's cost would work against the franchisor's own brand-standards leverage. This is a structural, not merely observed, reason franchisor entry is a low-probability threat — but it should be flagged as **[a reasoned inference, not a stated franchisor position]**.
- **No evidence found of Procore (or any general construction-estimating platform) building hotel-brand-specific PIP logic.** Procore's estimating module is brand-agnostic and GC-facing (takeoffs, bid management), not owner-facing PIP-benchmarking with brand-standard citation. A pivot is technically plausible (Procore already touches hospitality "Renovations and Development" per Hotel Tech Report) but no product evidence of this specific move was found.
- **Overall adjacent-threat assessment:** the more credible near-term entrant risk is not Procore or a franchisor, but a **third PIP-specific SaaS/service clone** (given how easily PIPGURU and PIPGENIUS appear to have been stood up with near-identical copy/stats) — the barrier to entry for a landing page in this niche is evidently very low.

---

## 6. Feature / Pricing Comparison Table

| | PIPGURU | PIPGENIUS | Beyer Brown (human) | Nehmer/HVS Guide | Generic PM/GC (Procore) |
|---|---|---|---|---|---|
| **Status** | Live site, pre-revenue, waitlist-gated | Live site, explicit private beta, waitlist-gated | Real operating firm, named clients | Live, 18th annual edition | Real operating platform |
| **Delivery model** | Self-serve SaaS (claimed) | Analyst-delivered PDF (claimed) | Human consulting engagement | Static reference PDF | GC-facing estimating software |
| **Pricing** | $25 one-time / $50–$200/mo (site self-contradicts on Starter: $50 vs $99) | $495 Snapshot / $1,175 Blueprint (founding rate); list $990/$2,500; Playbook unpriced | Not disclosed (quote-gated) | Free, lead-gen-gated (contradicts "paid" URL path) | ~$375/mo+ (third-party estimate, unconfirmed) |
| **Turnaround claimed** | <5 min | 24–72hrs | Not disclosed | N/A (static reference) | N/A |
| **Brand-specific granularity** | 66+ brands, 8 flag families, 200+ line items (claimed) | Same claimed figures | Case-by-case, brand-agnostic process | Hotel-tier based (6 tiers), not brand-specific | None (brand-agnostic) |
| **Negotiation/pushback output** | None | Explicitly excludes brand-variance negotiation ("we'll identify leverage; you run the call") | Prioritizes mandatory vs. discretionary items; no dedicated pushback memo | None (reference data only) | None |
| **Evidence of real paying customers** | 1 unattributed testimonial; no purchasable product | 0 testimonials; explicitly demo data; no purchasable product | Multiple named client testimonials + portfolio | N/A (free reference, not a "customer" product) | Established GC customer base (general, not hotel-PIP-specific) |
| **Source-data transparency** | None disclosed | None disclosed beyond generic claim | Implicit (named 20+ years of firm project experience) | 5 named contributing GC firms disclosed | N/A |

---

## 7. Differentiation Map — what a new entrant must do that nobody currently does

Based on the above, no existing product (real or vaporware) combines all of the following. A new entrant's wedge:

1. **Ingest the actual brand-issued PIP document, not just brand+keys+scope toggles.** PIPGENIUS claims to parse an uploaded PIP PDF into line items (its homepage demo shows "PIP parsed · 214 line items detected"), but this is explicitly demo/mockup data with no evidence it works on a real document today. PIPGURU doesn't even claim document upload — its "Deep Dive" is manual section-by-section toggling. **A working PIP-PDF-to-line-item parser, actually demonstrated, is unclaimed-but-real territory.**
2. **Produce a structured pushback/negotiation memo citing brand-standard rationale, not just a cost range.** Both competitors explicitly stop short of this: PIPGURU has no negotiation feature at all; PIPGENIUS explicitly **excludes** "brand-variance negotiation with the franchisor on your behalf" from its scope and only promises to "identify leverage." Beyer Brown gets closest (prioritizes mandatory vs. discretionary, by requirement level/urgency) but delivers this via a bespoke human report, not a repeatable structured memo. **Nobody currently ships a generated, line-item-linked negotiation memo as the core product.**
3. **Disclose cost-data sourcing/methodology.** All three tech products (PIPGURU, PIPGENIUS, and even the human-adjacent framing) either disclose nothing ("proprietary cost database... from real project experience," unattributed) or disclose only in the free Nehmer/HVS reference (5 named GC contributors, but that's a static PDF, not a live benchmarking tool). **Transparent, named-source cost data paired with an interactive tool is currently unclaimed.**
4. **Real, verifiable traction as proof the tool actually works** — both direct competitors currently have zero verifiable paying customers, zero named testimonials with attribution, and all-CTAs-to-waitlist funnels. A new entrant that ships even one small, real, attributable case (with permission) immediately differentiates on credibility alone.
5. **Honest self-serve pricing that doesn't contradict itself on the same page** — a low but real bar; PIPGURU's own pricing section already fails this ($50 vs $99 Starter self-contradiction).

### Real vs. vaporware — summary verdict
- **PIPGURU:** Presents as a live, self-serve SaaS product with working checkout, but every purchase button routes to a waitlist and no independent evidence of paying customers exists. **Verdict: vaporware / pre-launch landing page dressed as a live product.**
- **PIPGENIUS:** More honest about its own status (explicitly "private beta" everywhere), but its "case studies" are labeled composite/fictional, its product screenshots are labeled demo data, and it has zero testimonials. **Verdict: vaporware / pre-launch, but more transparent about it than PIPGURU.**
- **Beyer Brown:** **Real.** Verifiable named clients, visible portfolio, operating history — the strongest existing proof that owner-side PIP cost/prioritization work is a viable, currently-paid service, just not delivered as fast, cheap, self-serve software.
- **Nehmer/HVS Guide:** **Real** and free (contra this project's earlier assumption that it was a paid product) — but static, tier-based (not brand-specific), and not a benchmarking *tool* against a specific bid.

---

## Sources (all fetched or searched directly on 2026-07-18)
- https://www.thepipguru.com
- https://www.thepipguru.com/about
- https://www.thepipguru.com/help
- https://www.thepipgenius.com
- https://www.thepipgenius.com/pricing
- https://www.thepipgenius.com/about
- https://www.thepipgenius.com/case-studies
- https://www.beyerbrown.com/services/pip-analysis-reporting/
- https://www.nehmer.com/costguide
- https://www.hvs.com/article/store/paid/212-nehmer-hvs-design-hotel-cost-estimating-guide
- https://www.hotelcostestimatingguide.com (redirects to nehmer.com/costguide)
- https://www.costar.com/article/1637180968/3-tips-for-navigating-pips (published March 31, 2017 — dated)
- https://www.procore.com/estimating
- https://hoteltechreport.com/operations/renovations-and-development/procore
- https://www.devbuilders.com/markets/hospitality-entertainment/hotel-pip-costs-puerto-rico-us
- https://www.hotel-development.marriott.com/resourcefiles/fdd-document/2024-ff-fdd-3-31-2024.pdf
- Prior verified research in this project: `run-1/research/candidate2-pip-benchmarking.md`, `run-1/research/gapfill-competitor-traction.md`
- Search performed, no results found: `"Warvi Hospitality" PIP` and `"Warvi" hospitality` — no evidence this entity exists under this name as of 2026-07-18. **[unclear/not found]**
