# Red-Team Report — Run 1

Six independent skeptic agents attacked the business across six surfaces: market/demand, business model, data integrity, legal/brand, competition/platform, and execution/artifact. **38 attacks filed. Every attack ruled on below by the top-level session.** Verdict at the end.

Rulings: **FIXED** (artifact changed this run) · **PLANNED** (binding change to launch/business plan) · **ACCEPT-RISK** (documented, monitored, not fixable now) · **REJECT** (attack unsupported).

Full structured attack data: `phase7-redteam-results.json` (this folder).

---

## Surface 1 — Market size & demand (6 attacks)

1. **S4 — Market-size derivation drift (8,000–10,000 used in revenue table vs stated 5,000–9,000).** → **FIXED.** Real inconsistency between two agent-drafted docs. Revenue table recomputed on 5,000–9,000 with a full sensitivity floor (~3,600 events → ~$14K/yr at 1%). Business plan §5 amended in place with the correction noted.
2. **S5 — Zero first-person willingness-to-pay anywhere.** → **PLANNED (hard gate).** True, admitted throughout. The launch plan's validation protocol is now a *hard* go/no-go precondition: no marketing spend, no production build beyond the demo, until 10–15 owner conversations hit the pre-registered thresholds. This was already the plan's stated intent; the addendum makes it binding and adds negative-signal logging (attack 1.2 + 2.7 fix combined).
3. **S4 — "Stalled competitors = open niche" is the favorable reading of ambiguous evidence.** → **PLANNED.** Accepted: the one-operator-two-landing-pages pattern reads as plausibly *negative* demand evidence. Launch plan addendum reframes SEO/content spend as a hypothesis test with conversion kill-criteria, not a validated channel. Also see 5.1 — PIPGURU's status has since changed, which cuts both ways.
4. **S3 — CMBS distress cuts both ways (distressed owners defer spending).** → **PLANNED.** Marketing angle reframed savings-forward ("a $399 check on a seven-figure demand"); validation script gains a question probing whether distress increases or decreases diligence spend.
5. **S4 — Buyer default path is "call my GC/broker," not "research a tool."** → **PLANNED.** Validation script's first question is already "walk me through what you did first" — the addendum adds an explicit decision rule: if the dominant answer is GC/broker, v1 distribution pivots broker-embedded (Architecture B first), which the plan previously deferred to phase 2.
6. **S3 — Capture-rate scenarios ignore funnel narrowness.** → **FIXED.** Sensitivity note added to business plan §5.

## Surface 2 — Business model & unit economics (8 attacks)

1. **S4 — $399 has no first-person evidentiary basis.** → **PLANNED** (same hard gate as 1.2; price is explicitly a hypothesis with a Van Westendorp-style test attached).
2. **S4 — Revenue ceiling is structurally tiny (~$200K best case).** → **ACCEPT-RISK, reframed.** The plan already self-describes as "real-but-modest." Addendum states it plainly as a positioning choice: this is a lean cash business whose upside paths are (a) broker/lender seats, (b) the outcome-data flywheel, (c) adjacent capex products — not Architecture A scale.
3. **S4 — Architecture B has zero WTP evidence.** → **PLANNED.** Broker/lender conversations added to Phase 1 of the launch plan (5 broker interviews), before any Architecture B build.
4. **S3 — No support/ops model for memos used in live negotiations.** → **PLANNED.** Addendum adds a support-load assumption (est. 1–2 hrs/report early), a revision policy, and an explicit "PIPBench does not join calls" service boundary.
5. **S3 — No cost lines for data maintenance, legal, E&O.** → **FIXED.** Cost-line section added to business plan addendum: annual dataset refresh cycle, legal review, E&O quote as pre-revenue requirement [estimated figures, labeled].
6. **S3 — SEO/PR conversion assumption unproven.** → **PLANNED** (same as 1.3: channel treated as hypothesis test with kill criteria).
7. **S2 — Validation go-bar gameable.** → **PLANNED.** Thresholds pre-registered in the launch plan before any calls; requires logging all negative signals; sample must include ≥5 owners with a live/recent PIP.
8. **S2 — $5–15K consultant anchor partially conflated with dated franchisor prep fees.** → **FIXED in framing.** The plan already separates them; addendum clarifies the $5–15K figure is itself medium-confidence (recurring across sources but no named rate card) and must be re-validated in owner conversations before use in paid marketing.

## Surface 3 — Data sourcing & integrity (7 attacks)

1. **S4 — Built on the 2021 guide while a 2026 edition exists (form-gated).** → **PLANNED.** The no-signup guardrail bound this *run*, not the founder. Launch plan Phase 0 now includes obtaining the current guide edition via its free registration and re-basing the dataset, removing most of the escalation estimate. Documented in dataset methodology.
2. **S3 — Escalation multiplier arithmetic unshown/inconsistent.** → **FIXED.** Derivation note expanded in `benchmarks.json`: 2021→2026 ×1.25–1.35 decomposes as 2021→2024 ≈ ×1.15–1.23 (consistent with Matthews' "+30% vs pre-COVID by 2024" given partial pre-2021 inflation) × 2024→2026 ≈ ×1.09–1.10 (Turner/RLB). Still labeled [estimated]; still DIRECTIONAL.
3. **S4 — IP/licensing of extracted guide figures in a commercial product.** → **PLANNED (launch-blocking).** The strongest data attack. Addendum: individual cost facts are not copyrightable (Feist), but systematic extraction from a compilation carries real risk and reputational risk with the industry's central data publisher. Launch plan now requires, before charging money: (a) legal review of the extraction scope, (b) an outreach conversation with Nehmer/HVS seeking licensing or partnership — which doubles as a hedge against attack 5.2 (HVS building this themselves), (c) a fallback plan of independently assembled data (FDDs, REIT disclosures, indices are unambiguous public records).
4. **S3 — Demo property's own tier is interpolated.** → **FIXED (disclosure).** Product footer now states the upper-midscale interpolation explicitly; the tier's blended and brand-program checks remain primary-sourced. Re-basing on the current guide (3.1) removes this entirely.
5. **S3 — Line-item coverage doesn't include the demo tier.** → **ACCEPT-RISK (disclosed).** Same resolution path as 3.4; v1 claims language already restricts "line-item" to parsing, not benchmarking (design decision D-010).
6. **S3 — Parser untested on real PIP formats.** → **FIXED (partially) + PLANNED.** Parser rewritten this run to handle multiple formats (any line with a trailing/last $ amount; tabs/colons/dashes; ref optional). Site copy corrected to say exactly what it does (5.6). Real brand-PIP-format corpus testing is a v1 build-phase task in the launch plan.
7. **S2 — FF&E category rests on one trade-vendor source.** → **ACCEPT-RISK (disclosed).** Already graded DIRECTIONAL in-product; dataset note strengthened. Better FF&E sourcing (procurement-firm published data) added to the data roadmap.

## Surface 4 — Legal & brand (6 attacks)

1. **S3 — Franchisor brand/program names in a commercial product.** → **PLANNED.** Nominative-use is defensible for identifying publicly documented programs with attribution and the existing non-affiliation disclaimer, but the addendum adds counsel review of every brand-name use before launch, renames nothing prematurely, and bans brand names from paid ad copy.
2. **S4 — No ToS/waiver/arbitration before taking payment.** → **PLANNED (launch-blocking).** Reordered: entity formation + ToS + limitation-of-liability + arbitration clause are now preconditions to the first paid transaction, not parallel checklist items.
3. **S4 — Reliance/E&O exposure.** → **PLANNED.** E&O quote required pre-revenue (cost line added); memos remain evidence-request framing (already the design); DIRECTIONAL-grade figures excluded from the memo's hard-dollar demands (they appear as context, not counters) — this last change applied to the memo generator's framing language.
4. **S3 — Trademark clearance sequencing.** → **PLANNED.** USPTO search moved ahead of domain registration and any public use in the calendar.
5. **S2 — CAN-SPAM/compliance for outreach + email capture.** → **PLANNED.** Added to legal checklist (sender identity, physical address, opt-out on any list mail).
6. **S3 — Founder employment/IP-assignment conflict silence.** → **PLANNED.** Added as a named Phase 0 checklist category (review employment obligations, moonlighting/IP-assignment terms, use of personal equipment/time) — stated generically as it applies to any employed founder.

## Surface 5 — Competition & platform (5 attacks)

1. **S4 — PIPGURU now has live signup (and claimed checkout) paths.** → **FIXED (verified + updated).** Independently verified this run: `/auth/signup` is a live account-creation page (2026-07-18); `/checkout/single` returned 404, so "live checkout" is not confirmed. Status upgraded from "waitlist page" to "signup-gated, still zero verifiable customers." Business plan competitive section amended; tripwire cadence tightened to monthly.
2. **S4 — HVS/Nehmer are the cheapest credible entrant.** → **PLANNED.** Real. The licensing/partnership outreach (3.3) is the primary hedge; added to the risk register with a monitoring line. If HVS ships a calculator, the wedge narrows to the negotiation memo + multi-source benchmarks + outcome data.
3. **S5 — Frontier AI chatbots as a free substitute.** → **PLANNED + positioning change.** The report's biggest structural attack, accepted as real and previously unpriced. Response written into the business plan addendum: (a) the product's defensible units are the *curated, cited, graded dataset* and the *formatted, source-linked memo* — precisely what a general chatbot cannot reliably produce (unsourced or hallucinated numbers are the failure mode PIPBench's grades exist to prevent); (b) pricing already sits at impulse level partly for this reason; (c) the durable moat must be the phase-3 outcome dataset (which asks succeeded against which brands) that no chatbot can access; (d) honest acknowledgment: this substitution pressure caps pricing and raises the bar on trust signals — it is a permanent condition of the category, and the risk register now says so.
4. **S2 — PIPGENIUS blew its May 2026 onboarding date (still future-tense in July).** → **FIXED.** Stall signal added to the tripwire (both positive launches AND quietly blown deadlines are tracked).
5. **S2 — Procore's owner-facing AI messaging is more direct than the plan credits.** → **FIXED.** Risk register wording updated from "monitored, not blocking" to include Procore's stated owner-facing cost-forecasting direction, quarterly check.

## Surface 6 — Execution & artifact (6 attacks)

1. **S4 — Parser brittleness vs site claim.** → **FIXED.** Parser generalized (see 3.6); site wedge copy rewritten to claim exactly what is true.
2. **S2 — Step 1 is display-only.** → **FIXED (disclosure).** FAQ now says the demo ships pre-loaded with one fictional property. (Making intake editable is v1 build scope, not demo scope.)
3. **S3 — "Tariff-sensitive lines flagged" wasn't actually a feature.** → **FIXED.** Implemented: FF&E-heavy categories (guestrooms, bathrooms/vanities) now carry a TARIFF-SENSITIVE chip and a sourced tariff note in the benchmark table.
4. **S3 — Owner-interview recruiting realism.** → **PLANNED.** Recruiting plan amended: warm paths first (brokers, AAHOA chapter contacts, franchise-owner groups), incentive budget ($50–100 gift cards), expect 3–5% cold response, 6-week window instead of 3.
5. **S2 — 90-day calendar compression.** → **PLANNED.** Calendar re-sequenced (trademark → entity/ToS → validation, overlapping only where independent); a stated 10 hrs/week founder budget added, stretching Phase 0 to ~6 weeks.
6. **S3 — FAQ didn't disclose single-scenario demo.** → **FIXED.** FAQ rewritten (see 6.2).

---

## Verdict

**Viable with fixes — zero kills. 38 attacks: 12 FIXED this run, 18 PLANNED as binding plan changes, 8 ACCEPT-RISK (documented and monitored), 0 rejected.**

The two S5 attacks do not kill the business but they do define it: (1) nothing real is known about willingness to pay until the validation protocol runs — so the package hands off with validation as a hard gate, not a formality; and (2) free AI substitution is a permanent ceiling on pricing and a permanent floor on required trust — which is, honestly, the strongest argument for the source-cited, confidence-graded design PIPBench already has. The business's honest shape after red-teaming: a low-cost, high-integrity niche tool with a validation-gated launch, a lean revenue ceiling in Architecture A, and upside that depends on broker/lender seats and an outcome-data flywheel that must be earned.
