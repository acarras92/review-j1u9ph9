# Candidate 3 Verification: Construction Draw / Lien-Waiver Tracking for Hotel Owners

**Research date:** 2026-07-18
**Candidate:** AIA G702/G703 draw verification against percent-complete + multi-tier lien waiver tracking, targeted at hotel owners/developers.
**Methodology:** Live web search (WebSearch) + direct page fetch (WebFetch) + Firecrawl scrape for JS-heavy/blocked pages (G2, WSO, CNBC). All URLs below were actually fetched or appeared in a recorded search result; no fabricated citations. Dates flagged where evidence is older than ~2 years (today: 2026-07-18).

---

## 1. Butzel Long client alert — "double payment exposure" for owners

**Verdict: VERIFIED, with nuance.**

Source: [Lien Waivers – Critical to Processing Payment but a Word of Caution (Butzel Long)](https://www.butzel.com/alert-lien-waivers-critical-to-processing-payment-but-a-word-of-caution)

Fetched directly. Exact/near-exact quotes pulled from the page:

- On the purpose of lien waivers for owners/GCs: "when owners and contractors make progress payments, they want to ensure the payments flow downstream to lower-tier subcontractors and suppliers **without having to pay twice for the same labor or materials.**"
- Critical timing warning (a risk that cuts the other way — for subs, not owners): "**A subcontractor or supplier that signs an unconditional waiver of lien before payment risks not being paid and losing its lien rights because the waiver is effective immediately.**"
- On over-broad waiver forms: "go beyond simply waiving lien rights through a particular date or pay request in exchange for payment, and contain broader waiver language that release, for example, outstanding change orders, potential claims, or future payment."
- Remedy language for subs who signed prematurely: send "a letter stating, 'the consideration for the waiver has failed and is hereby rescinded.'"

**Nuance:** The memo's framing of "double payment exposure" is real and explicitly named, but the alert is written broadly for the construction-payment ecosystem (owners, GCs, subs) rather than being an owner-only warning — much of the article's practical caution is actually aimed at subcontractors/suppliers about signing unconditional waivers too early. The double-payment risk to owners is stated as the underlying reason lien waivers exist at all, which supports the pain thesis, but it is one sentence of framing, not the article's main focus.

---

## 2. Levelset: collected lien waivers "absolutely useless" against lower-tier claims

**Verdict: VERIFIED — exact phrase found.**

Source: [Tracking Lien Waivers: Best Practices in Requesting & Collecting Waivers (Levelset)](https://www.levelset.com/blog/tracking-lien-waivers/)

Fetched directly. Exact quote: "The lien waivers collected from the general contractors and subcontractors are **absolutely useless** against the supplier's claim!"

Context: this appears under a "False Belief" section explaining that an owner who collects a waiver from a GC, and a GC who collects one from its sub, still has no protection if that sub's own supplier goes unpaid — the supplier can lien the property regardless, because no one tracked payment all the way down the chain. This is a direct, strong, and exactly-worded validation of the pain point (multi-tier waiver tracking gaps).

---

## 3. G2 reviews — Rabbet and Oracle Textura

**Verdict: VERIFIED with real review data (scraped directly, not just search snippets).**

### Rabbet — [g2.com/products/rabbet/reviews](https://www.g2.com/products/rabbet/reviews)
- Rating: **4.6/5 from 14 reviews** (71% five-star, 28% four-star, 0% three-star-or-below as of scrape date).
- Pros (G2 AI-aggregated): ease of use, document management, features, customer support, tracking.
- Cons (G2 AI-aggregated): integration issues (4 mentions), missing features (3), improvement needed (3), data management (2), complexity (2).
- Representative complaint (Craig L., Accounting Manager, 2/4/2025): "Most of our funding comes through the SF Mayor's Office of Housing, and they insist on using their own draw tracking sheet instead of Rabbets, so that's kind of a bummer" — and separately: "it doesn't integrate with NetSuite by API or anything other than an upload/download file... causing a need for double entry of bills and pay apps, once into NetSuite and another time into Rabbet."
- Representative complaint (Jeremy N., VP, 9/25/2024): "Critical fields like project completion dates and project percent-complete are overlooked natively and instead must be tracked using custom fields" — **directly relevant**: this is a named gap in percent-complete tracking, which is the core of the candidate's proposed feature.
- No explicit pricing complaints surfaced in the 14 visible reviews (pricing is "Contact Us" / enterprise quote-based, not public).

### Oracle Textura Payment Management — [g2.com/products/oracle-textura-payment-management/reviews](https://www.g2.com/products/oracle-textura-payment-management/reviews)
- Rating: **4.1/5 from 46 reviews** (56% five-star, 30% four-star, 6% three-star, 0% two-star, 6% one-star).
- G2 "Perceived Cost" metric: **$$$$$ (highest tier)**; "Time to Implement": 4 months.
- Pricing complaint (Verified User, Construction, small business, 12/5/2023, 2.5/5 review): "Cost. Can get other software that does not charge subs for use" — i.e., subcontractors resent being charged to use the platform.
- Another cost complaint (Verified User, Construction, mid-market, 11/9/2023, 5/5 review overall): "Cost, discovering issues before they are critical, such as payment holds."
- Support complaint (Kate R., Job Cost Accountant, 9/29/2023): "Support can take a very long time to resolve issues."
- Integration complaint (Verified User, Construction, small business, 9/15/2022): "It does not integrate that smoothly with our ERP. It took a while to learn the proper way to use the system with our accounting software."
- Reports gap (Janis B., Team Lead - Construction Accounting, Real Estate, Enterprise, 5/24/2026 — most recent review): "Lack of reports for owners, such as billing reports or accrual reports" — **directly relevant**: an owner-side reporting gap named in a 2026 review.
- Usability: multiple reviewers note subcontractors need real training ("You have to know what you are doing...Textura can be tricky to learn...If you don't use it every day, you can forget what you are doing" — Walter H., 8/10/2021).

**Assessment:** Both G2 profiles corroborate the memo's pain points (percent-complete tracking gaps, owner reporting gaps, integration pain, cost complaints from subs) using real, dated, named reviews — not paraphrase. Textura's cost complaints are more numerous and pointed than Rabbet's, consistent with Textura being the older/pricier enterprise incumbent.

---

## 4. Built Technologies — funding status and AI draw-review agent

**Verdict: VERIFIED.**

### Funding/valuation
Search-corroborated (Construction Dive, PitchBook, Crunchbase, Tracxn — consistent across sources, not directly fetched but cross-corroborating):
- Built Technologies raised a **$125M Series D led by TCV** (with Brookfield Technology Partners, 9Yards Capital, XYZ Venture Capital, HighSage Ventures), which valued the company at **$1.5 billion** — that valuation was reached in **2021** and, per the CNBC piece below, has not been reported as having changed since.
- Total funding across rounds: reported as **~$289–293M** (Crunchbase/Tracxn), consistent across sources.
- This $1.5B figure and 2021 date is **dated** (5 years old) — flagged per instructions. No 2025/2026 up-round was found; the CNBC article (Nov 2025) still refers to Built as a company that "reached a $1.5 billion valuation in 2021," implying no new valuation event as of that date.

### AI Draw Agent
Source: [CNBC — "This fintech unicorn just launched an AI agent to handle billions of dollars in CRE lending," Diana Olick, published 2025-11-06](https://www.cnbc.com/2025/11/06/built-technologies-ai-draw-agent-cre-lending.html) — fetched directly, full text confirmed.

Key verified facts from the article:
- Built Technologies (CEO Chase Gilbert) unveiled the **"Draw Agent,"** an AI agent for construction draw requests, after testing it with a few lender clients including **Anchor Loans** for "the last three months" prior to publication.
- Metrics cited by Built (per CNBC, attributed to the company, not independently audited by CNBC): **95% faster draw approvals**, reviews completed in **as few as 3 minutes**, **400% increase in risk detection** vs. human-led review, **100% policy adherence**, and **300–500% ROI** even on portfolios as small as ~500 loans.
- Built's existing client base includes **U.S. Bank, Citi, and Fifth Third**.
- The Draw Agent is powered by a partner platform, **MightyBot** (confirmed via PR Newswire/Morningstar press release: "MightyBot Powers Built's Draw Agent to Transform Lending with Industry's First Autonomous Agentic AI," and Built's own blog at getbuilt.com/blog/ai-draw-review-automation/).
- Built's own marketing states the system "ingests invoices, lien waivers, progress photos, inspection reports, budgets, and supporting documents, cross-references them against the loan terms and construction schedule" — i.e., it already directly targets the percent-complete-vs-draw verification and lien-waiver-ingestion niche this candidate proposes, but from the **lender** side of the transaction, not the **owner/developer** side.

**Competitive read:** This is a major, well-funded (>$1.5B valuation), incumbent-backed AI entrant already automating exactly the draw-verification workflow this candidate targets — but it is sold to **construction lenders**, not directly to hotel owners/developers. That leaves a narrower but real gap: an owner-side (not lender-side) tool, and a hotel-specific vertical focus, neither of which Built appears to target explicitly.

---

## 5. Beam — GC-side lien-waiver collection only?

**Verdict: LARGELY VERIFIED — Beam is GC/contractor-facing, not an owner-side percent-complete/draw-verification tool.**

Sources: [trybeam.com/lien-waiver-management](https://www.trybeam.com/lien-waiver-management), [trybeam.com/resources/lien-waivers-general-contractors-guide](https://www.trybeam.com/resources/lien-waivers-general-contractors-guide) — fetched via WebFetch and corroborated via search snippets.

- Beam markets itself to "Home Builders & Remodelers," "Trade Contractors," and "Light Commercial General Contractors" — i.e., the contractor/GC side of the transaction, not property owners/developers/hotel asset managers.
- Workflow described: "Add subcontractor and vendor bills to Beam" → "Beam automatically emails vendors to collect missing lien waivers" → track waiver status before releasing payment.
- Beam does list an "Include sub-tier waivers" feature, so it is not strictly limited to first-tier subs — it has some multi-tier tracking capability. This is a partial correction to the memo's framing: Beam is not purely single-tier, but it **is** GC-side (collection tool for a contractor managing its own subs), not an **owner-side** tool for verifying a GC's draw package against percent-complete and cross-checking waivers across the whole tier stack independently of the GC's own reporting.
- No evidence found that Beam offers owner-side AIA G702/G703 percent-complete verification — its feature set (per its own site) is centered on lien waiver workflow and contractor financial/margin management ("Construction Software Built for Margin-First Contractors" — per trybeeam.com listing in search results), not owner draw certification.

**Conclusion:** The memo's characterization is directionally correct — Beam is a contractor-side tool — but "GC-side... only" slightly overstates the limitation since Beam does track sub-tier waivers, not just first-tier. The more precise gap is that Beam has no owner-side draw/percent-complete verification layer, which is the core of this candidate's pitch.

---

## 6. CRITICAL counter-signal: WSO — small developers use Excel, won't pay for Rabbet/Built/Textura

**Verdict: VERIFIED — the sentiment exists, is explicit, and is corroborated by multiple independent commenters in the same thread. This is a material risk to the business case.**

Source: [Wall Street Oasis — "Construction software" forum thread](https://www.wallstreetoasis.com/forum/real-estate/construction-software), originally posted **June 13, 2023**, most comments dated "3y" (~2023) — **this evidence is ~3 years old, older than the 2-year freshness bar — flagged as dated.** Fetched directly via Firecrawl scrape (WSO blocks WebFetch with 403).

Direct quotes, with usernames and their self-tagged role/seniority as shown on WSO:

- **_navyisland** (Real Estate – Commercial – Engineer): "I like procore best but only thing is if your project is not big enough then the cost is not worth it. **Below 10 mil and I won't even think about using it and just do excel and MS projects.** ... Most small time CM work is basically excel and MS projects."
- **laffer** (Real Estate – Commercial – Developer): "Procore charges you a % on hard cost. **Northspyre is stupid expensive.** We looked at each other after both meetings completely failing to understand why we'd spend so much on a helpful but unnecessary tool."
- **CREnadian** (Real Estate – Commercial – Director): "unless you have an extremely robust Construction team in-house **there's no reason for a developer to shell out the obscene amount of money for detailed construction budgeting software**... the only developers I know that do that (or that have construction budgeting software) are in the multinational, **$20B+ AUM category.**"
- **Theft** (Real Estate – Commercial – Associate Director, "Most Helpful" flagged comment, 5 upvotes): describes an entirely manual/Excel-and-accounting-GL-report workflow for tracking draws and payables even at "massive, multiple billions of dollars" scale, concluding "**No system needed what so ever from the development team** on top of the construction accounting software... You don't need a software to do that for you…."
- **ShawnDog** (Real Estate – Commercial – VP): "Procore. But **it is crazy expensive.**"

This is a coherent, multi-voice thread of real-estate professionals (self-identified as commercial RE associates/VPs/directors/developers) explicitly stating that (a) sub-$10M projects use Excel/MS Project instead of paid construction software, and (b) even some larger shops view Northspyre/Procore/Rabbet-style tools as "unnecessary" or "obscene[ly]" priced relative to the value delivered, with genuine software adoption reserved for "$20B+ AUM" institutional developers.

**Corroboration attempted on Reddit/BiggerPockets:**
- Reddit: Targeted searches ("r/CommercialRealEstate," "r/realestatedevelopment," site:reddit.com combined with lien waiver/Excel/small developer terms) returned **no directly on-point threads**. A firecrawl_search for site:reddit.com lien waiver + Excel + small developer surfaced only tangentially related/irrelevant subreddits (r/tasktag, r/umkcbarprep) — not usable corroboration. **I could not verify this specific sentiment independently on Reddit; treat Reddit corroboration as absent, not confirmed.**
- BiggerPockets: Search results surfaced general lien-waiver Q&A threads (e.g., ["Lien waiver documents"](https://www.biggerpockets.com/forums/70/topics/425050-lien-waiver-documents), ["Contractor's Lien Waiver"](https://www.biggerpockets.com/forums/311/topics/319552-contractors-lien-waiver)) but these are small-landlord/rehabber discussions about *what a lien waiver is*, not about rejecting paid draw-tracking software in favor of Excel. Secondary source (Levelset via search synthesis, not independently fetched) states doing lien waiver tracking in Excel is "described as messy" and offers a free tracking spreadsheet — which is *consistent* with, but not a direct quote confirming, the WSO sentiment. **Treat as weak, indirect corroboration only.**

**Net assessment of the counter-signal:** The core claim — that small-to-mid real estate developers below roughly a $10M project-size threshold overwhelmingly use Excel/manual processes instead of paying for Rabbet/Procore/Northspyre-class software, and that even some larger shops resist the pricing — is **directly and explicitly confirmed** in a real, multi-commenter WSO thread, though the evidence is ~3 years old and I could not independently corroborate it on Reddit or BiggerPockets in this pass. This is a genuine market-size and willingness-to-pay ceiling: the addressable buyer for a premium owner-side draw/lien-waiver tool is likely limited to mid-size-and-up developers/owners (probably $15–20M+ projects or portfolio operators), not the long tail of small hotel deals, and even some of those buyers view comparable existing tools as overpriced for the value delivered.

---

## 7. New AI draw-review entrants, 2025–2026

**Verdict: One major confirmed entrant/expansion; no other new dedicated hotel-focused entrants found.**

- **Built Technologies "Draw Agent"** (see §4) — launched/piloted 2025, broad rollout reported "early 2026" per search synthesis of Built's own blog and trade coverage (getbuilt.com/blog/ai-draw-review-automation/, HousingWire). This is lender-side AI draw review, the most significant confirmed new capability in this space in the 2025–2026 window.
- **MightyBot** — the AI vendor powering Built's Draw Agent; per its own site (mightybot.ai) it also markets directly into "real estate" and "commercial lending" as an agentic AI platform, meaning it could plausibly power AI draw-review tools for other players beyond Built, not just power Built exclusively. This is a platform-level entrant to watch, verified via its own marketing pages (mightybot.ai/industries/real-estate/, mightybot.ai/industries/commercial-lending/) surfaced in search — not independently fetched, so treat as **moderate-confidence**, not fully verified firsthand.
- No evidence found of a new, dedicated **hotel-specific** draw/lien-waiver AI startup in the 2025–2026 window. All identifiable AI activity in this space (Built/MightyBot) is generalist CRE/construction-lending, not hospitality-vertical.
- Market-sizing claim seen in search synthesis ("construction draw automation... $1.19B market in 2026") could not be traced to a primary source in this pass — **mark as unverifiable**; do not cite this number as fact.

---

## Summary Table

| # | Claim | Verdict | Key source |
|---|---|---|---|
| 1 | Butzel Long double-payment risk | Verified (nuanced framing) | butzel.com alert |
| 2 | Levelset "absolutely useless" quote | Verified, exact quote | levelset.com/blog/tracking-lien-waivers |
| 3 | G2 Rabbet/Textura pain points & pricing | Verified, real scraped reviews | g2.com (both product pages) |
| 4 | Built funding + AI Draw Agent | Verified | CNBC 11/6/2025; Construction Dive/PitchBook/Crunchbase (funding) |
| 5 | Beam GC-side only | Largely verified (has sub-tier tracking; still contractor-side, not owner-side) | trybeam.com |
| 6 | WSO small-developer Excel counter-signal | Verified in-thread; Reddit/BiggerPockets corroboration weak/absent; evidence ~3 yrs old | wallstreetoasis.com/forum/real-estate/construction-software |
| 7 | New 2025–26 AI entrants | Built/MightyBot confirmed; no hotel-specific entrant found | CNBC, mightybot.ai, getbuilt.com |

---

## Pain Score: 6/10

The underlying legal/financial pain (double-payment exposure, multi-tier lien waiver blind spots, percent-complete verification gaps) is real and independently corroborated by a law firm, an industry publisher (Levelset), and named G2 reviewers calling out percent-complete and owner-reporting gaps in the two leading incumbents. However, the pain is concentrated at the larger end of the market — the WSO thread shows that for the broad population of small-to-mid developers/owners (sub-$10M projects), the pain is either absorbed via manual Excel workarounds or considered not worth paying to solve, which caps how universally "urgent" this pain is felt.

## Willingness-to-Pay Score: 4/10

G2 "Perceived Cost" data show Textura priced at the top tier ($$$$$) with real cost complaints from subcontractors forced onto the platform, and Rabbet reviewers report friction around parallel/duplicate systems rather than pricing objections — evidence that willingness-to-pay exists but is concentrated among larger, institutional, or lender-driven buyers who are somewhat captive (subs/GCs required onto the platform by owners/lenders). The WSO counter-signal is the dominant drag on this score: multiple self-identified commercial real estate professionals explicitly call comparable tools (Procore, Northspyre) "obscene[ly]" priced or "unnecessary," and state real software adoption is effectively reserved for "$20B+ AUM" institutional shops — meaning a large share of the addressable hotel-owner/developer market (small-to-mid operators, exactly the segment likely to lack in-house construction-accounting teams) may not pay for a dedicated tool at all, especially with Built's well-funded, incumbent AI Draw Agent already moving into adjacent lender-side automation.

## Key Risks

1. **Market ceiling from the WSO counter-signal**: a meaningful share of small/mid hotel developers self-report using Excel and resisting paid tools even at large deal sizes; this could shrink the realistic addressable market well below what a TAM built on "all hotel construction loans" would suggest.
2. **Built Technologies' Draw Agent is a well-funded ($1.5B valuation, $125M Series D, U.S. Bank/Citi/Fifth Third as clients), already-shipping AI competitor** attacking the exact draw-verification-against-percent-complete workflow, albeit sold to lenders rather than owners — a fast follow into owner-side tooling by Built (or a lender mandating its use) is plausible and would be hard to out-compete on data/scale.
3. **Beam and other lien-waiver tools are contractor-side**, meaning an owner-side product must either integrate with or displace GC-side workflows, adding sales complexity (multi-stakeholder buy-in) beyond a simple single-buyer SaaS motion.
4. **Reddit/BiggerPockets corroboration for the counter-signal is weak-to-absent** in this pass — the WSO evidence, while explicit, is a single (if multi-commenter) thread ~3 years old; a different sample or more recent thread could show different sentiment, so treat the "small developers won't pay" conclusion as directionally strong but not exhaustively proven across all forums.
5. **No dated pricing was found for Rabbet or Built** (both are "Contact Us" enterprise sales) — true price-sensitivity/WTP ceiling for a hotel-specific product cannot be benchmarked precisely against incumbents from public data alone.
