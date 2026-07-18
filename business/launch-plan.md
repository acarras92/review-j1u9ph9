# PIPBench — Launch Plan

Written 2026-07-18. This plan operationalizes the business design in `run-1/design/business-design.md`, the pricing work in `run-1/design/offer-pricing.md`, the channel research in `run-1/design/icp-market-channels.md`, and the binding conditions in `run-1/tournament/tournament-results.md`. Every statistic below traces to one of those files (or the primary source cited inside them); every derived number carries its **[estimated]** label and shows its derivation; every gap in the evidence is flagged **[unclear]** rather than smoothed over. Nothing in this plan has been executed — no landing page is live, no conversation has been held, no domain has been purchased. It is a plan to be run, not a record of what has already happened.

The single governing rule of this plan, carried forward from the tournament ruling (`run-1/tournament/tournament-results.md`, binding condition 4): **validation comes before scale.** Phase 1 and Phase 2 spending and effort are gated on Phase 0 producing a real go signal, not on founder conviction. Nothing past Phase 0 should consume more than a few hundred dollars until that signal exists.

---

## Phase 0 — Pre-launch and demand validation (Weeks 1–3)

### Step 1: The demand-validation protocol (reproduced verbatim from `offer-pricing.md` §4)

This is the first and most important thing to run — before more engineering, before any paid spend, before treating the $399 price point as settled. It is reproduced here faithfully because the entire rest of this plan is gated on its outcome.

> ## 4. Demand-validation protocol for launch
>
> Two parallel tracks, run before committing engineering time beyond a demo: (A) a landing-page smoke test, (B) 10–15 structured owner conversations. Both are designed to produce a go/no-go signal on Architecture A's price point specifically, not just general interest in the product concept.
>
> ### A. Landing-page smoke test
>
> - **Setup**: A single landing page (see Phase 5/build work) offering the Full Benchmark + Negotiation Memo at the recommended $299–$499 price point, with a real "Get my benchmark" checkout/waitlist button — mirroring PIPGURU/PIPGENIUS's own "waitlist with intent" pattern, since both direct competitors are still pre-revenue with this exact mechanism.
> - **Traffic sources**: only organic/low-cost channels consistent with the guardrails already governing this project (no paid ad spend assumed here; if paid traffic is used, it should be small and disclosed separately) — e.g., AAHOA-adjacent LinkedIn posts, hotel-owner subreddit/forum threads (where permitted by community rules), relevant Facebook/LinkedIn hotel-investor groups.
> - **Success thresholds [recommend founder set these explicitly before launch, not after seeing results]:**
>   - **Click-through to price page → checkout-intent rate ≥ 3–5%** of unique visitors who reach the pricing section (a conservative benchmark for a cold, unbranded B2B landing page; below 1–2% suggests the price or framing, not just the channel, is off).
>   - **At least 10–15 real "Buy Now" or "Reserve my slot" clicks** within the first 2–3 weeks of any distribution push — enough to run the conversation track (below) with people who showed real intent, not just curiosity.
>   - **Bounce rate on the pricing section itself, not just the page**, should be tracked separately if analytics allow — a high scroll-to-pricing rate with a sharp drop-off right at the price is the clearest quantitative signal that the *number*, not the concept, is the objection.
>
> ### B. 10–15 owner conversations (structured script)
>
> **Recruiting note**: per guardrails, this protocol is a design document only — the founder (not this research pass) would conduct these conversations; nothing here constitutes contacting anyone.
>
> **Screening question** (to ensure the sample is the real buyer, not a curious bystander):
> > "Have you personally reviewed a brand-issued PIP for one of your properties in the last 3 years, or do you expect one in the next 12 months?"
> — Exclude anyone who answers no to both.
>
> **Core script (aim for 20–25 minutes per call):**
>
> 1. *Anchor on the real pain, not the product*: "Walk me through the last time a PIP landed on your desk — what did you actually do first?" (Listen for: did they call a consultant, call the brand rep, try to estimate it themselves, ignore it, negotiate directly? This validates whether benchmarking is even the first move owners make.)
> 2. *Surface the current spend, unprompted*: "What did you end up spending — in time or money — to get comfortable with that number, if anything?" (Do not lead with the $5,000–$15,000 anchor; let them state a number first, or state that they spent nothing/skipped review, which is itself a critical finding.)
> 3. *Introduce the concept neutrally*: "If a tool could give you a line-by-line benchmark of that PIP against market cost ranges, plus a memo you could hand to the brand or your GC to push back on specific line items — how would that have changed what you did?"
> 4. *Price-anchor test, low-to-high*: "If that report cost $99, would that feel like a no-brainer, a maybe, or not worth it?" then repeat at $299, then $499, then $999 — recording the *first* price where they hesitate, not just their final answer. (This is the standard Van Westendorp-style anchoring technique, simplified for a conversational setting rather than a survey.)
> 5. *Test the subscription hypothesis directly*: "Would you rather pay per PIP as they come up, or pay an annual fee and use it as often as you need?" (Directly tests Architecture A vs. C — do not suggest a "right" answer.)
> 6. *Portfolio/repeat-use probe*: "How many properties do you or your company currently own or manage?" and "Do PIPs across your portfolio tend to land at different times, or in clusters?" (Validates or invalidates Architecture C's premise that multi-property owners have staggered, subscription-justifying demand.)
> 7. *Close on urgency*: "If this existed today at [price from step 4 where they said 'no-brainer' or 'maybe'], would you actually use it on your next PIP, or is this a 'nice idea, not urgent' for you?"
>
> **Success thresholds for the conversation track:**
> - **At least 7 of 10–15 owners (roughly 50%+)** should independently name a dollar figure in the $99–$499 range as "no-brainer" or "would pay without hesitation" for the Full Benchmark tier — if the median hesitation point clusters below $99, Architecture A's price needs to come down toward PIPGURU's range; if it clusters comfortably above $499, there is room to price up.
> - **At least 3–5 of the sample should be genuinely multi-property owners/managers**, and their answers to the portfolio/repeat-use probe (step 6) should be used as the actual go/no-go gate for building Architecture C — do not build the annual pass on fewer than that many corroborating conversations.
> - **A majority preference for "pay per PIP" over "annual fee"** in step 5 is the single clearest kill signal against leading with a subscription SKU, and would directly confirm the Architecture A recommendation above.
> - **If fewer than 3 of 15 conversations produce a genuine "yes, I'd use this on my next PIP"** (step 7), treat this as a signal to revisit the core value proposition (the benchmark + memo) before iterating further on price — a pricing problem cannot be fixed if the underlying demand signal itself is weak.
>
> **Honest caveat to carry into this protocol**: because no first-person owner WTP statement exists anywhere in this project's research to date, these 10–15 conversations are not a confirmatory check on an already-validated price — they are the *first* real WTP evidence this business will have. Weight the results accordingly, and be prepared for the answer to meaningfully move the recommendation in §3.

*(Verbatim from `run-1/design/offer-pricing.md` §4, lines 86–123.)*

**Sequencing within Weeks 1–3**: stand up the landing page and start the low-cost distribution push in Week 1; let the smoke test run continuously through Week 3 while sourcing the 10–15 owner conversations in parallel (owner conversations do not require the landing page to be live first, but should reference the same $99/$299/$499/$999 anchors above). By the end of Week 3 there should be enough data on both tracks to make the Phase 0→Phase 1 go/no-go call in the gates section below.

### Step 2: Legal checklist

- **Trademark search**: run a knockout search for "PIPBench" in the USPTO Trademark Electronic Search System (TESS) and a plain web/business-name search, confined to hospitality-software and consulting classes. No trademark search has been run as part of this project's research to date — this is net-new work for Week 1, not a restatement of prior findings.
- **Entity formation**: form a single-member LLC (or the founder's preferred state/structure) before any payment is collected. No specific state or entity type is prescribed by any research file in this project; this is a founder decision informed by ordinary small-business legal advice, not a claim this plan can source.
- **Terms of service and disclaimers review**: have a lawyer (or, at minimum, a qualified legal-template review) confirm the site's disclaimer language matches the binding liability posture from the tournament ruling — *"product language stays benchmarking/negotiation-support — no legal opinions, no engineering opinions"* (`run-1/tournament/tournament-results.md`, condition 6) and the product's own banner, *"negotiation support, not legal or engineering advice"* (`run-1/design/business-design.md` §5). This checklist item exists specifically to make sure marketing copy and the live disclaimer say the same thing before a single dollar changes hands.
- Do this work in parallel with Step 1, not sequentially after it — none of it depends on the demand-validation results, and all of it should be resolved before Phase 1 content goes live under the PIPBench name.

### Step 3: Domain registration

- **pipbench.com** — verified available via RDAP check, 2026-07-18 (`run-1/design/business-design.md` §1: *"Domain pipbench.com verified available (RDAP check 2026-07-18); no company-name collision found in search."*). Register it in Week 1, before the landing page goes live under the name, so the smoke test in Step 1 runs on the real domain rather than a throwaway one.

---

## Phase 1 — Validation-gated content and outreach (Weeks 4–12)

**Gate to enter Phase 1**: see the go/no-go table below. Everything in this phase assumes Phase 0 produced at least a qualified "go" or "go with price adjustment" signal. If Phase 0 fails outright, do not proceed to Phase 1 as written — see the kill-criteria row.

### SEO content plan — the "PIP cost" query cluster

The research is specific about why this is winnable: current organic results for "hotel PIP cost"-style queries are dominated by one direct competitor (PIPGURU) plus a scatter of contractor, consultant, and CMBS-lender lead-gen content — "no dominant, authoritative 'answer engine' currently owns this query cluster" and "PIPGENIUS, still in private beta, does not yet appear to be ranking organically" (`run-1/design/icp-market-channels.md` §3.6). Content should be built on the same public, sourced dataset the product itself uses (`run-1/design/business-design.md` §5, `product/data/benchmarks.json`), not on invented figures, so every article can cite the same evidence-graded sources the tool shows in-product.

Proposed article titles for the initial content push (10 articles, sequenced so the highest-intent/lowest-competition titles publish first):

1. "How Much Does a Hotel PIP Really Cost in 2026? A Sourced Benchmark by Category"
2. "Hampton Inn PIP Cost Guide: What Upper-Midscale Renovations Actually Run, By Category"
3. "PIP Cost Per Key: What the Public Data Says vs. What Consultants Charge $5,000–$15,000 to Tell You"
4. "Change-of-Ownership PIP: What Triggers It and What It Typically Costs"
5. "Soft-Goods vs. Case-Goods PIP Cycles: Cost Ranges by Renovation Type"
6. "How Tariffs Are Pushing Up FF&E Costs on 2026 Hotel PIPs"
7. "PIP Cost Benchmarks for Select-Service and Midscale Hotels: A Category-by-Category Breakdown"
8. "What to Do When Your Brand's PIP Bid Looks Too High: A Line-Item Benchmarking Approach"
9. "2026 CMBS Maturities and the Wave of PIP Reviews They're Triggering"
10. "PIP Cost Estimator vs. Negotiation Memo: Why an Estimate Alone Doesn't Help You Push Back"

Each article should link its cost figures back to the same named public sources used in the product dataset (FDD filings, HVS/Nehmer cost literature, published per-key figures, construction cost indices), carry the same confidence grading (Verified/Directional) shown in-product, and never repeat the banned claims listed in the risk section below.

### Trade-press pitch plan

The research identifies a specific, receptive set of outlets already running PIP-cost and PIP-distress stories: **LODGING Magazine, Hotel Dive, Hospitality Net, HFTP, Hotel-Online, Hotel Management, HotelsMag, and CoStar/Hotel News Now** (`run-1/design/icp-market-channels.md` §3.5; `run-1/design/business-design.md` §6). These outlets have cross-published the same PIP-cost pieces (e.g., the Matthews "Things to Consider if Your Hotel PIP Is Coming Due" piece syndicated across HFTP and Hospitality Net), indicating an active, receptive beat rather than a cold pitch.

Two to three data-driven story angles to pitch, all grounded in sourced figures already in this project's research (not invented for the pitch):

1. **"What public filings say PIPs really cost, category by category"** — a data-journalism angle built directly on the same benchmark dataset behind the product, positioned as an independent research finding rather than a product pitch.
2. **"The 2026 CMBS wall is about to trigger a wave of PIP reviews"** — anchored to the >$100B (one source: $146.2B total, $76.6B "hard" maturities) 2026 CMBS maturity figure and the 15–20% limited-service distress rate concentrated in exactly this ICP's asset profile (`run-1/design/icp-market-channels.md` §4; sourced to DBRS Morningstar and Matthews). This is the only 2026-dated urgency case in the underlying research and should be the lead pitch angle.
3. **"Why two 'AI-powered' PIP tools are still pre-revenue waitlists"** — a market-structure story about the niche being validated in concept (two competitors built for it) but unoccupied in practice (`run-1/tournament/tournament-results.md` Round 2 findings), pitched carefully to avoid naming this as confirmed weak demand — see the honesty-register risk below on this exact ambiguity.

### Community presence rules

- Participate only in channels and communities where self-promotion is explicitly permitted by posted community rules — the same organic/low-cost-channel guardrail used in the demand-validation protocol itself (`run-1/design/offer-pricing.md` §4A: "AAHOA-adjacent LinkedIn posts, hotel-owner subreddit/forum threads *where permitted by community rules*, relevant Facebook/LinkedIn hotel-investor groups").
- Lead with the sourced content (the SEO articles above, the benchmark dataset), not a sales pitch — consistent with the "honesty as positioning" wedge (`run-1/design/business-design.md` §2.4): no invented testimonials, no fake liveness claims, no case studies that haven't happened yet.
- Treat AAHOA specifically as **an audience to reach through content and its member channels, not as an endorsing partner** — PIPs are not on AAHOA's formal 12 Points advocacy agenda, and this plan does not represent or imply any AAHOA endorsement (binding condition 5, `run-1/tournament/tournament-results.md`).

---

## Phase 2 — Traction-gated expansion

**Gate to enter Phase 2**: real, paid Full Benchmark customers acquired organically in Phase 1 (see gates table). Nothing in this phase should be funded before that traction exists.

### AAHOACON / The Lodging Conference presence

- **AAHOACON** draws 6,500+ attendees and is described as a venue for "million-dollar buying decisions" (`run-1/design/icp-market-channels.md` §3.1, sourced to Hotel-Online and AAHOA's own AAHOACON26 registration page). AAHOA also runs regional conferences with complimentary Industry Partner booth space at each.
- **[unclear] — exact booth/sponsorship rate-card pricing could not be obtained through free/public web access.** AAHOA's own rates-and-deadlines page did not expose pricing to automated fetch, and AAHOA directs vendors to contact sales directly for a rate card. Per this project's no-contact guardrail, that outreach was not performed, so **any AAHOACON budget line in this plan is a placeholder pending a direct rate-card inquiry**, not a sourced cost.
- **The Lodging Conference** (Phoenix, Oct 5–8, 2026; historically 2,000–5,000 attendees, 2,900+ the prior year) is preferred over ALIS for this ICP specifically because ALIS skews toward institutional investors/lenders while The Lodging Conference and AAHOACON more directly reach the 1–5 property independent owner (`run-1/design/icp-market-channels.md` §3.2; `run-1/design/business-design.md` §6).
- Do not commit to a booth or sponsorship spend until (a) the AAHOA rate card is obtained directly and (b) Phase 1 traction justifies the spend.

### Broker referral pilot

- Hotel brokers are documented as actively navigating PIP-encumbered deals — a Marcus & Millichap-brokered Michigan sale explicitly referencing "remaining property improvement plan items," and The Plasencia Group and HVS both publishing thought leadership framing PIPs as a deal obstacle or deal-killer (`run-1/design/icp-market-channels.md` §3.3, §2.2). Brokers have a direct incentive to use a benchmarking tool to keep deals alive and justify pricing to both sides of a transaction.
- **[unclear] — no named, sourced list of brokerages most concentrated in sub-$10M, PIP-burdened select-service deals exists in this project's research.** The broker referral pilot should start with a small, direct outreach test (a handful of brokers, not a mass campaign) once Phase 1 traction exists, rather than assuming a ready-made partner list.
- Structure as a simple referral arrangement first (a discount code or referral credit), not a paid seat license — the seat-license model is reserved for the next step.

### Architecture B seat license (brokers/lenders)

- Once owner-side traction is proven, layer in the annual per-seat licensing arrangement for brokers, lenders, and PIP consultants who see many PIPs per year: an annual seat license priced in the **$2,000–$5,000/year [estimated]** range for unlimited reports per seat (`run-1/design/offer-pricing.md` Architecture B; `run-1/design/business-design.md` §4).
- This is explicitly a **Phase 2, traction-gated** move, not a Phase 1 activity — the research is direct on this point: Architecture B revenue math ($60,000–$120,000/year incremental at 20–40 desks) is **[estimated]** and "depends entirely on unverified broker/lender adoption assumptions with no evidence base yet (no broker/lender WTP research exists in this project's files as of this writing)" (`run-1/design/offer-pricing.md` §2, Architecture B).

---

## 90-Day Calendar

| Week | Phase | Key activities |
|---|---|---|
| 1 | 0 | Register pipbench.com; begin trademark search (TESS); begin entity formation; draft landing page with real $99/$399/$129 pricing and checkout-intent button; begin sourcing 10–15 owner conversations |
| 2 | 0 | Landing page live; begin low-cost/organic distribution push (AAHOA-adjacent LinkedIn, permitted forums/groups); legal/ToS disclaimer review; continue owner-conversation outreach |
| 3 | 0 | Continue smoke test through full 2–3 week window; complete 10–15 owner conversations; complete entity formation and trademark search; **assemble Phase 0 results for go/no-go review** |
| 4 | Gate | **Go/no-go decision** (see gates table below); if go, begin Phase 1 planning: finalize SEO article calendar, trade-press pitch list, community-participation rules |
| 5–6 | 1 | Publish SEO articles 1–3; begin trade-press outreach to LODGING, Hotel Dive, Hospitality Net (angle 2: CMBS wall) |
| 7–8 | 1 | Publish SEO articles 4–6; continue trade-press follow-up; begin structured community participation per Phase 1 rules; first competitor-tripwire monitoring check |
| 9–10 | 1 | Publish SEO articles 7–8; pitch remaining trade-press angles; monitor early organic conversion from SEO + PR |
| 11 | 1 | Publish SEO articles 9–10; assemble Phase 1 traction data (paid customers, conversion rates, organic traffic) |
| 12 | Gate | **Phase 1 → Phase 2 go/no-go decision**; if traction gate met, begin AAHOA rate-card inquiry and broker-pilot planning for Phase 2 |

---

## Go/No-Go Gates and Kill Criteria

### Gate 1 — Phase 0 → Phase 1 (end of Week 3)

**Go** if, per the thresholds specified in the demand-validation protocol itself (`run-1/design/offer-pricing.md` §4):
- Landing page checkout-intent rate is ≥3–5% of visitors reaching the pricing section, **and**
- At least 10–15 real "Buy Now"/"Reserve my slot" clicks occurred, **and**
- At least 7 of 10–15 owner conversations name a dollar figure in the $99–$499 range as "no-brainer" or "would pay without hesitation," **and**
- A majority of owner conversations prefer "pay per PIP" over an annual fee (confirming Architecture A over Architecture C), **and**
- At least 3 of 15 conversations produce a genuine "yes, I'd use this on my next PIP."

**Go with price adjustment** if the concept validates (owners engage, describe the pain, want the memo) but the price signal clusters low (median hesitation point below $99) — proceed to Phase 1 but retest a lower Architecture A price point before scaling content spend.

**No-go / kill criteria**: if fewer than 3 of 15 owner conversations produce a genuine "yes, I'd use this on my next PIP" (the protocol's own explicit kill signal), treat this as evidence the core value proposition — not just the price — needs revisiting before any further investment. Do not proceed to Phase 1 SEO/PR content spend on an unvalidated concept; return to product/positioning work instead.

### Gate 2 — Phase 1 → Phase 2 (end of Week 12)

**Go** if Phase 1 organic activity (SEO + trade press + community presence) has produced real, paid Full Benchmark customers — not just traffic or waitlist signups. The specific volume threshold should be set by the founder based on Phase 0's actual conversion data (this plan does not have a sourced basis for a specific Phase-1 customer-count target beyond "real, paid customers exist").

**No-go / kill criteria**: if Phase 1 produces meaningful traffic and engagement but no paid conversions after the full 8-week content push, do not commit to AAHOACON booth costs, a broker-pilot outreach push, or an Architecture B seat-license build. Revisit pricing, positioning, or the SEO/PR channel mix before scaling further.

### Ongoing — Competitor tripwire monitoring routine

Per the tournament ruling's binding condition 7 (`run-1/tournament/tournament-results.md`): *"if PIPGURU/PIPGENIUS launches with real customers, the 'undefended niche' premise collapses — flagged in the business plan's risk register."* Concretely, run this check on a fixed cadence, not ad hoc:

- **Monthly**, starting Week 1: re-fetch thepipguru.com and thepipgenius.com and check for (a) any named customer, testimonial, or case study that is independently verifiable (not just on-page copy), (b) any disclosed funding, press coverage, or Wayback Machine footprint change indicating real usage, (c) whether PIPGENIUS has exited private beta or PIPGURU's pricing page has changed.
- **Trigger for immediate reassessment** (not waiting for the next monthly check): either competitor publishes a named, checkable customer reference or gets independent press coverage describing real revenue/usage.
- If the tripwire fires, treat the "validated niche, unoccupied in practice" premise as no longer safe to assume, and revisit the differentiation case (negotiation memo, source transparency, document ingestion — `run-1/design/business-design.md` §2) rather than the existence of the niche itself.

---

## Budget [estimated] — near-zero fixed costs

This plan is deliberately built to keep fixed costs close to zero through Phase 1, consistent with the lean, validation-first posture the tournament ruling and pricing research both call for. All figures below are **[estimated]** planning placeholders, not sourced costs, except where a specific source is cited.

| Item | Phase | Estimated cost | Basis |
|---|---|---|---|
| Domain (pipbench.com), annual | 0 | ~$12–20/yr [estimated] | Standard .com registration rate; not independently priced in this project's research |
| Entity formation (LLC) | 0 | ~$50–500 [estimated], state-dependent | Typical range for US state LLC filing fees; no specific state chosen in this plan, so no sourced figure exists |
| Trademark search (self-run TESS search) | 0 | $0 | TESS is a free public search tool |
| Legal/ToS disclaimer review | 0 | $0–$500+ [estimated] | Depends on whether founder uses a template service or paid attorney review; no source in this project prices this |
| Landing page hosting/build | 0 | $0–$20/mo [estimated] | Assumes a low-cost or free-tier site builder; not sourced |
| SEO content (10 articles) | 1 | $0 [estimated] if founder-written | No paid writer/agency assumed; cost is founder time, not cash |
| Trade-press outreach | 1 | $0 | Direct pitching to named outlets, no PR agency or paid placement assumed |
| Community participation | 1 | $0 | Organic participation only, per the no-paid-ad guardrail carried from the demand-validation protocol |
| Paid traffic (optional, not assumed in Phase 0 thresholds) | 0–1 | Small, if used — not budgeted here | The protocol explicitly states "no paid ad spend assumed here; if paid traffic is used, it should be small and disclosed separately" (`run-1/design/offer-pricing.md` §4A) |
| AAHOACON / regional event booth or sponsorship | 2 | **[unclear]** — rate card not obtainable via free/public search | AAHOA directs vendors to contact sales directly (`run-1/design/icp-market-channels.md` §3.1); no placeholder dollar figure is assumed here because none is sourced |
| Broker referral pilot | 2 | $0–$500 [estimated] | Assumes referral-credit structure, not paid partnership fees |
| Architecture B seat license build (engineering time) | 2 | Not budgeted here | Founder engineering time; no cash-cost basis in this project's research |

**Total estimated cash cost through Gate 1 (Phase 0): roughly $60–$1,000+ [estimated]**, driven almost entirely by entity-formation and optional legal-review variability — the two line items where no sourced figure exists in this project's research and the range is genuinely wide.

---

## Risk Section — Honesty Register (carried forward, not buried)

These are the same items documented in `run-1/design/business-design.md` §7, restated here in full so they sit in the risk section of the operating plan rather than only in a design document.

1. **No first-person willingness-to-pay evidence exists.** Nobody has said "I'd pay $X for this" anywhere in this project's research. The $399 price rests on structural analogs (ESA, PCA, HOA reserve-study pricing patterns) and consultant-fee anchoring, not on direct owner testimony. This is precisely why the demand-validation protocol is Step 1 of Phase 0, not an afterthought — it is this business's first real WTP evidence, and the plan should be prepared for the answer to move the price materially.
2. **The annual-PIP-count figure is derived, not sourced.** The 5,000–9,000 PIPs/year **[estimated]** figure used for market-sizing math (`run-1/design/icp-market-channels.md` §1.4) is a founder planning number built from AHLA hotel counts and an assumed renovation cycle — it is explicitly *"a derived planning number... not a citable industry statistic"* and must never be presented externally as sourced fact without its derivation attached.
3. **Two competitors' stall is ambiguous evidence, not proof of weak demand.** PIPGURU and PIPGENIUS are both pre-revenue, waitlist-only landing pages with no named founder, no funding record, no reviews, and no independently verifiable customer (`run-1/tournament/tournament-results.md`, Round 2). "Validated demand, uncaptured niche" and "weak demand" are both consistent with this observation — the competitor tripwire monitoring routine above exists specifically because this ambiguity could resolve in either direction.
4. **Dataset confidence is uneven across property types.** The underlying benchmark dataset is primary-sourced for midscale/upper-midscale properties but only directional for luxury, economy, and extended-stay segments (`run-1/design/business-design.md` §7). The product UI is required to show this distinction rather than hide it, and no marketing content should imply uniform confidence across all chain scales.
5. **AAHOA is an audience, not an endorsing partner.** PIPs are not on AAHOA's formal 12 Points advocacy agenda; this plan's use of AAHOA channels (AAHOACON, regional events, member reach) is a marketing-channel decision, not a claim of AAHOA partnership or endorsement (binding condition 5, `run-1/tournament/tournament-results.md`).
6. **Banned claims** (from `run-1/design/business-design.md` §7, item 6, applying to all Phase 1/Phase 2 marketing and content): decade-old anecdotes (the HREC $2M→$6–8M figure; the Magnuson 15%-of-revenue elevator anecdote) are banned from all marketing, and the unverified "10-year-to-7-year PIP cycle compression" claim is banned everywhere in this project's external communications, including SEO content, trade-press pitches, and conference materials.
7. **AAHOA sponsorship/rate-card pricing is genuinely unknown**, not merely unresearched — direct inquiry was out of scope under this project's no-contact guardrail (`run-1/design/icp-market-channels.md` §3.1). Any Phase 2 AAHOA spend must be preceded by a real rate-card conversation, not estimated from this plan's budget table.
8. **Procore's May 2026 AI contract-review launch is a real but non-blocking platform risk**, pointed at GC-side workflow rather than owner-side PIP benchmarking; it is monitored, not treated as an immediate threat (`run-1/design/business-design.md` §7, item 5).

---

## Sources

All factual and derived claims in this plan trace to:
- `run-1/design/offer-pricing.md` (pricing architecture, demand-validation protocol, revenue math)
- `run-1/design/icp-market-channels.md` (market sizing, ICP, channel evidence and gaps)
- `run-1/design/business-design.md` (synthesized business design, §6 channel order, §7 honesty register)
- `run-1/tournament/tournament-results.md` (binding conditions on validation sequencing, claims discipline, AAHOA framing, competitor tripwire)

Each of these files carries its own full citation list to primary sources (AHLA, AAHOA, LWHA, JLL, Matthews, HVS, DBRS Morningstar, and direct competitor site fetches, among others); this plan does not restate every underlying URL and instead points to the design/research file where each figure is sourced, consistent with the instruction to cite evidence files by path.


---

## Red-team amendments (binding, 2026-07-18)

Rulings from `run-1/redteam/red-team-report.md` that amend this plan:

1. **Legal sequencing is now launch-blocking, in this order:** (a) USPTO trademark search for "PIPBench" BEFORE domain registration or any public use of the mark; (b) entity formation; (c) Terms of Service with limitation of liability + arbitration clause, reviewed by counsel; (d) E&O insurance quote obtained. No paid transaction occurs before all four. Domain registration moves to after (a).
2. **Data licensing gate:** before revenue — counsel review of the Nehmer/HVS extraction scope; a licensing/partnership approach to Nehmer/HVS (doubles as the hedge against HVS building a competing calculator); obtain the current guide edition via its free registration form and re-base the dataset; maintain the fallback dataset plan (FDDs, REIT disclosures, indices).
3. **Founder-conflict checklist (Phase 0):** review any employment agreement for IP-assignment and moonlighting terms; keep the project on personal time and equipment; resolve conflicts before public launch.
4. **Validation protocol hardening:** thresholds pre-registered before the first call; all negative signals logged; sample must include at least 5 owners with a live or recent (≤12 months) PIP; add the question "walk me through what you actually did first when the PIP arrived" with the decision rule: if the dominant answer is "called my GC/broker," v1 distribution pivots broker-embedded (Architecture B first). Add 5 broker interviews alongside the 10–15 owner conversations.
5. **Recruiting realism:** warm paths first (broker introductions, AAHOA chapter contacts, franchise-owner groups); $50–100 gift-card incentive per completed call [estimated cost: $500–$1,500]; assume 3–5% cold-outreach response; Phase 0 window extended from 3 weeks to ~6 weeks at a stated founder budget of ~10 hours/week.
6. **Channel discipline:** SEO/content and trade-press PR are hypothesis tests, not validated channels. Kill criterion: if 90 days of published content produces organic traffic but a checkout-intent rate below 1–2% of pricing-section visitors, the self-serve channel assumption is rejected and distribution shifts to broker/lender-embedded.
7. **Compliance:** any email capture/outreach follows CAN-SPAM mechanics (identified sender, physical address, working opt-out); community posting follows each community's self-promotion rules.
8. **Competitor tripwire (upgraded):** monthly checks of PIPGURU (live signup confirmed 2026-07-18 — watch for a working checkout and any named customer) and PIPGENIUS (blew its stated May 2026 onboarding date — stall signals count as intelligence, not just launches); quarterly checks of Procore owner-facing AI messaging and any HVS/Nehmer calculator move.
9. **Marketing framing:** lead with the savings math ("a $399 check on a six-to-seven-figure demand"), not distress framing; the CMBS wave is context, not the pitch — distressed buyers defer discretionary spend.
