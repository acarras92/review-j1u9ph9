
# FDD Cost-Anchor Pull — Round 2 (broadened brand coverage)

Research date: 2026-07-18. This is a follow-up to `data-sources-fdd.md` (round 1), which flagged "no Wyndham, Choice, IHG, Best Western, or Hyatt FDD was actually opened and read" as a gap. This round targeted that gap directly.

Guardrails observed: research only — nothing published, nothing purchased, no forms submitted, no sign-ups (including free ones), no contact made with any franchisor/broker. Every figure below has a live source URL. Anything not independently verified in this session is marked **[unclear]**. No Highgate references.

---

## 0. Portal status (inherited from round 1, not re-tested this session)

MN CARDS (https://cards.web.commerce.state.mn.us/franchise-registrations) and WI DFI (https://apps.dfi.wi.gov/apps/FranchiseSearch/MainSearch.aspx) were confirmed live/free/no-login in round 1 (same date). Both portals return JS-rendered search UIs that a non-interactive fetch tool cannot drive — actually pulling documents from them requires a browser-automation tool to submit the search form, which was not used this session. **[unclear — not re-tested]**: whether CARDS/WI DFI's own hosted copies of the round-2 brands below differ from the franchisor-hosted/marketplace-hosted copies found via search. In practice, this round again found it faster to reach actual FDD PDF text via general web search + direct-fetch/scrape of franchisor-hosted or marketplace-hosted PDFs than to drive the state portals' search forms.

A recurring technical finding this round: several free "FDD preview" sites (fddexchange.com, franchisepanda.com) serve PDFs whose text layer shows visible **redline/amendment-overlay artifacts** — two different years' numbers appear concatenated digit-for-digit in the same cell (e.g., "$15,964,72516,665,875" = $15,964,725 and $16,665,875 overlaid). Where this occurred, both readable numbers are reported below with a note; where the overlap could not be cleanly decomposed, it is flagged **[unclear]** rather than guessed at.

---

## 1. Brands opened and read this session

### A. Super 8 (Wyndham economy tier) — partial FDD dated April 1, 2014
- **Source:** FDD Exchange-hosted partial FDD, table appears to originate from a Wyndham-affiliate multi-brand disclosure document (regional franchisor entities listed include DIW, HJI, WII, KFS, THI, RWI, WHR, BFS, MISF — i.e., Days Inn, Howard Johnson, Wingate, Knights Inn, Travelodge, Ramada, Baymont, Microtel-family affiliates). Brand-specific attribution to "Super 8" per the filename; franchisor legal-entity name for the Item 7 table itself was not cleanly isolated in the scraped text — **[unclear: exact filing entity for this specific Item 7 table]**.
- **URL:** https://fddexchange.com/wp-content/uploads/2015/02/Super-8-Partial-FDD-April-1-2014.pdf
- **FDD date:** April 1, 2014 — **[dated: 12 years old as of 2026, treat as historical baseline only]**.
- **Room basis:** 60 rooms (derived by cross-checking the disclosed "Total" against the disclosed "Total Cost Per Room" line, which divides out evenly to 60 in both tables).
- **Conversion table (60 rooms):**
  - Conversion Contingency: raw text shows digit-overlap artifact ("$0-$376,0400") — **[unclear, likely $0–$37,600 or $0–$376,000, not cleanly resolved]**
  - Total Estimated Initial Investment: **$176,170–$1,591,000**
  - Total Cost per Room (as disclosed): **$2,936–$26,517**
- **New-construction table (60 rooms):**
  - Facility Construction: $24,000,984,000–$2,700,606,000 — visible digit-overlap artifact, **[unclear — likely two overlaid years, not cleanly decomposable; treat total/per-room rows below as the reliable figures instead]**
  - Total Estimated Initial Investment: **$2,851,570–$3,962,600**
  - Total Cost Per Room (as disclosed): **$47,526–$66,043**
- **Pattern:** **Conversion-costs-disclosed** — this document explicitly splits Item 7 into a "conversion" column and a "new construction" column, consistent with the G6/Sonesta pattern, not the Hilton pattern.

### B. Comfort Inn / Comfort Suites (Choice Hotels) — FDD dated April 1, 2021
- **Source:** Choice Hotels International, Inc. (franchisor address 1 Choice Hotels Circle, Rockville, MD; development site referenced in the document is https://choicehotelsdevelopment.com). Retrieved via a franchisepanda-hosted preview mirror of the same document; content matches Choice's own cover-page language.
- **URL:** https://franchisepanda.com/fdd-previews/comfort-choice-hotels-2021-franchise-disclosure-document-preview.pdf
- **FDD date:** April 1, 2021 — **[dated: 5 years old as of 2026]**.
- **Room basis:** 80 rooms (conversion table), 86 rooms (new-construction tables).
- **Figures (as disclosed on the cover-page investment table):**
  | Franchise | Affiliation Fee | Conversion Estimated Initial Investment (80 rooms) | New Construction Estimated Initial Investment (86 rooms) |
  |---|---|---|---|
  | Comfort Inn | $500/room new; $750/room transfer/renewal ($50,000 min / $65,000 min) | $305,100–$2,210,495 | $6,692,226–$9,215,783 |
  | Comfort Inn & Suites | (same) | $305,100–$2,210,495 | $6,692,226–$9,215,783 |
  | Comfort Suites | (same) | $305,100–$2,210,495 | $7,222,500–$9,942,595 |
- **Per-room (derived):**
  - Conversion (80 rooms): **$3,814–$27,631/room**
  - Comfort Inn new construction (86 rooms): **$77,817–$107,160/room**
  - Comfort Suites new construction (86 rooms): **$83,983–$115,612/room**
- **Pattern:** **Conversion-costs-disclosed** — Choice's cover page states conversion and new-construction totals side by side as distinct line items, same pattern as Super 8/G6/Sonesta.

### C. Vignette Collection (IHG family; Holiday Inn Express itself not independently opened this session — see gap note below) — FDD dated September 2021
- **Source:** Holiday Hospitality Franchising, LLC (IHG affiliate). Retrieved via a franchise-marketplace-hosted mirror.
- **URL:** https://storage.googleapis.com/wefranch-files/media/fdd_630352_20210913_trlmqNM.pdf
- **FDD date:** September 2021 issuance — **[dated: ~4.5 years old as of 2026]**.
- **Room basis:** 200-room prototype, new construction only.
- **Figures:**
  - Application Fee: $100,000
  - Property Improvement Plan ("PIP") fee: $0–$8,500 (this is the *fee to have IHG prepare a PIP scope*, not the cost to execute it — same structural pattern as Hilton's PIP-fee line)
  - Building Construction: $22,000,000–$50,000,000 (or $110,000–$250,000/key, as stated directly in the document)
  - FF&E: $4,200,000–$8,500,000 (or $21,000–$42,500/key, as stated directly)
  - **TOTAL: $28,725,250–$64,876,500** (excludes land, "inestimable" items, and contingency)
- **Per-room (as disclosed directly in the document, not derived):** **$110,000–$250,000/key** (building construction only) plus **$21,000–$42,500/key** (FF&E only)
- **Pattern:** **New-construction-only** for this specific brand/table — no conversion or PIP-execution-cost line is broken out; matches the Hilton pattern. **This is the Vignette Collection (upscale, full-service) brand, not Holiday Inn Express** — see gap note in Section 3.

### D. Best Western family (Best Western / Best Western Plus / Best Western Premier / Executive Residency / Vib / GLo / Aiden / Sadie) — FDD dated April 6, 2020
- **Source:** Best Western International, Inc. (2601 W Camelback... /24th? Phoenix, AZ). Retrieved via a franchisepanda-hosted preview mirror; the preview's PDF text layer shows visible character-level overlap artifacts (likely a redlined/amended-version export), so only the cleanly-decomposable rows are reported.
- **URL:** https://franchisepanda.com/download-franchise-disclosure-document-preview/best-western/2020
- **FDD date:** April 6, 2020 — **[dated: 6 years old as of 2026]**.
- **Cover page explicitly frames the offer as "a membership...to construct, or convert an existing hotel to" a Best Western-family hotel** — i.e., conversion is the document's primary framing, not an afterthought.
- **Figures (cleanly decomposable rows only; brand-tier attribution to each row is inferred from the order in which brand names are listed on the cover page — Best Western, Best Western Plus, Best Western Premier, Executive Residency, Vib, GLo, Aiden, Sadie — and is not independently confirmed per-row, so tier labels below are marked accordingly):**
  | Tier (order-inferred, [unclear] per-tier match) | New construction | Conversion | Room count |
  |---|---|---|---|
  | Best Western (standard) | [unclear — low bound cut off in captured preview text; high bound reads "...,589,538"] | $505,050–$1,939,539 | 75 rooms (stated) |
  | Best Western Plus (inferred) | $6,433,050–$10,397,788 | $608,050–$2,406,288 | **[unclear — not restated per tier]** |
  | Best Western Premier (inferred) | [unclear — low bound cut off; high reads "...,773,188"] | $869,450–$5,673,188 | **[unclear]** |
  | Executive Residency (inferred) | [unclear — low bound cut off; high reads "...,949,788"] | $648,050–$3,149,788 | **[unclear]** |
  | Vib (inferred) | [unclear — low bound cut off; high reads "...,065,838"] | $726,750–$3,370,838 | **[unclear]** |
  | GLo (inferred) | [unclear — low bound cut off; high reads "...,354,988"] | $1,392,150–$3,804,988 | **[unclear]** |
  | Aiden (inferred) | [unclear — low bound cut off; high reads "...,821,488"] | $1,129,750–$2,771,488 | **[unclear]** |
- **Per-room (derived, standard Best Western tier only, 75 rooms, conversion range):** **$6,734–$25,860/room**
- **Pattern:** **Conversion-costs-disclosed** — every tier shown has an explicit, separate conversion-investment range alongside new construction; this is the clearest "conversion-first" framing found in either research round, consistent with Best Western's no-royalty/conversion-friendly market positioning.

### E. Hyatt Place — FDD, cover page shows overlapping 2021/2022 issuance figures
- **Source:** Hyatt Place Franchising, L.L.C. (150 North Riverside Plaza, Chicago, IL; development site www.hyattdevelopment.com). Retrieved via a franchisepanda-hosted preview mirror; only the cover page was reached in this session (the preview is a 4-page crop and did not extend to the Item 7 table body), so **no line-item or conversion/PIP breakdown was obtained** — only the aggregate total.
- **URL:** https://franchisepanda.com/download-franchise-disclosure-document-preview/hyatt-place/2022
- **FDD date:** cover page text reads "Issuance date...March 23, 2021" amended to "March 28, 2022" (both numbers legible in the overlap) — **[dated: figures below are shown for both years where decomposable]**.
- **Figures (aggregate total, both years shown; overlap decomposes cleanly into two full numbers):**
  - 2021: Total investment **$15,964,725–$30,919,350**, including **$163,625–$250,610** payable to franchisor/affiliate
  - 2022 (amended): Total investment **$16,665,875–$37,622,250**, including **$196,775–$267,100** payable to franchisor/affiliate
- **Room basis:** not stated in the captured cover-page text — **[unclear]**.
- **Pattern:** **[unclear]** — whether Hyatt Place's Item 7 discloses a separate conversion/PIP cost line could not be determined this session; only the cover-page aggregate was reached, not the itemized table.

### F. Fairfield by Marriott (Fairfield Inn / Fairfield Inn & Suites) — FDD dated March 31, 2024
- **Source:** Marriott International, Inc. — franchisor-hosted directly.
- **URL:** https://www.hotel-development.marriott.com/resourcefiles/fdd-document/2024-ff-fdd-3-31-2024.pdf
- **FDD date:** March 31, 2024 — **[current, 2 years old as of 2026]**.
- **Room basis:** two tiers, 80–110 guestrooms and 120–150 guestrooms, both new construction.
- **Figures (selected lines, both tiers):**
  | Line item | 80–110 guestroom tier | 120–150 guestroom tier |
  |---|---|---|
  | Building Construction (per guestroom, as disclosed) | $115,300–$192,200/room | $107,000–$180,200/room |
  | Kitchen & Laundry Equipment (per guestroom) | $1,400–$2,400/room | $1,300–$2,000/room |
  | Furniture & Fixtures (per guestroom) | $12,300–$16,900/room | $12,100–$16,100/room |
  | Professional Design Services | $423,900–$955,100 | $593,500–$1,222,700 |
  | Additional Funds (first 3 months, per guestroom) | $3,000–$5,000/room | $2,000–$3,500/room |
  | **Total Range** (excludes not-determinable items) | **$11,662,400–$25,867,500** | **$16,123,600–$32,831,600** |
- **Per-room (derived from Total Range ÷ room-count bounds):**
  - 80–110 tier: **$106,022–$323,344/room** (low total ÷ 110 rooms to high total ÷ 80 rooms)
  - 120–150 tier: **$107,491–$273,597/room** (low total ÷ 150 rooms to high total ÷ 120 rooms)
- **Pattern:** **New-construction-only** — no conversion, renovation, or PIP-execution cost line appears in this Item 7 table; matches the Hilton pattern, not the G6/Sonesta/Choice/Best Western pattern. (A search of the surrounding document for "conversion" found only an unrelated litigation matter — a franchise-conversion lawsuit — not a cost-disclosure table.)

---

## 2. Gaps — brands targeted but not independently opened/verified this session

- **Days Inn, La Quinta, Microtel (Wyndham family):** not opened this session as standalone documents. The Super 8 document above (Section 1A) is drawn from what appears to be a shared Wyndham multi-brand FDD structure that likely also covers these brands, but a Days Inn/La Quinta/Microtel-specific Item 7 table was not independently located and read. Secondary aggregator sites (franzy.com, vettedbiz.com) show La Quinta total-investment figures in the $12.2M–$17.2M range, but these are **[unclear — secondary/summarized, not independently verified against a primary FDD in this session, and different aggregator sites showed inconsistent numbers for each other]**.
- **Holiday Inn Express specifically (IHG):** the only IHG document independently opened and read this session was the Vignette Collection FDD (Section 1C), which is a different (upscale, non-Holiday-Inn-Express) brand under the same franchisor entity. A franchisepanda preview for "Holiday Inn" (2018 vintage, https://franchisepanda.com/fdd-previews/holiday-inn-2018-franchise-disclosure-document-preview.pdf) was fetched, but its 4-page preview crop ended before any dollar figures appeared — cover page only, no Item 7 table reached. A widely-repeated web-search summary figure ("$7,841,597–$10,964,667, $84,318–$117,900 per guest room, 93-room 2018 FDD") appears across multiple secondary sites but **was not independently confirmed against primary document text in this session — flag as [unclear, snippet-only]**.
- **Quality Inn, Sleep Inn (Choice family):** not opened. The only franchisepanda/franchimp links located for these required either a signup-gated download (franchimp.com — explicitly requires name/email for the full PDF) or returned only a franchise-overview marketing page, not an Item 7 table. Per the hard guardrail against any lead-gen sign-up, these were not pursued further. **[gap, not resolved]**.
- **Staybridge Suites, Avid Hotels (IHG):** not opened this session. **[gap, not resolved]**.
- **TownePlace Suites (Marriott):** not opened this session (only Fairfield was pulled). Given Fairfield's clean new-construction-only result, TownePlace is likely structurally similar (same franchisor, same Item 7 template pattern), but this is an inference, not a verified fact — **[unclear, not independently confirmed]**.

---

## 3. Consolidated cost-anchor table

| Brand | Chain scale | FDD year | Cost line | Low | High | Per-room low (computed) | Per-room high (computed) | Pattern | Source URL |
|---|---|---|---|---|---|---|---|---|---|
| Super 8 (Wyndham economy) | Economy | 2014 [dated] | Conversion — Total Estimated Initial Investment (60 rooms) | $176,170 | $1,591,000 | $2,936 (as disclosed) | $26,517 (as disclosed) | Conversion-disclosed | https://fddexchange.com/wp-content/uploads/2015/02/Super-8-Partial-FDD-April-1-2014.pdf |
| Super 8 (Wyndham economy) | Economy | 2014 [dated] | New construction — Total Estimated Initial Investment (60 rooms) | $2,851,570 | $3,962,600 | $47,526 (as disclosed) | $66,043 (as disclosed) | Conversion-disclosed (brand also has NC table) | (same) |
| Comfort Inn (Choice) | Midscale | 2021 | Conversion — Total Estimated Initial Investment (80 rooms) | $305,100 | $2,210,495 | $3,814 | $27,631 | Conversion-disclosed | https://franchisepanda.com/fdd-previews/comfort-choice-hotels-2021-franchise-disclosure-document-preview.pdf |
| Comfort Inn (Choice) | Midscale | 2021 | New construction — Total Estimated Initial Investment (86 rooms) | $6,692,226 | $9,215,783 | $77,817 | $107,160 | Conversion-disclosed (brand also has NC table) | (same) |
| Comfort Suites (Choice) | Midscale | 2021 | New construction — Total Estimated Initial Investment (86 rooms) | $7,222,500 | $9,942,595 | $83,983 | $115,612 | Conversion-disclosed | (same) |
| Vignette Collection (IHG family; NOT Holiday Inn Express) | Upscale/full-service | 2021 | New construction — Building Construction + FF&E (200 rooms) | $26,200,000 (sum of low bounds) | $58,500,000 (sum of high bounds) | $131,000 (as disclosed, construction only) | $292,500 (as disclosed, construction only) | New-construction-only | https://storage.googleapis.com/wefranch-files/media/fdd_630352_20210913_trlmqNM.pdf |
| Best Western (standard tier) | Midscale/economy | 2020 | Conversion — Total Estimated Initial Investment (75 rooms) | $505,050 | $1,939,539 | $6,734 | $25,860 | Conversion-disclosed | https://franchisepanda.com/download-franchise-disclosure-document-preview/best-western/2020 |
| Best Western Plus (tier inferred, [unclear]) | Upper-midscale | 2020 | Conversion — Total Estimated Initial Investment | $608,050 | $2,406,288 | [unclear — room count not restated] | [unclear] | Conversion-disclosed | (same) |
| Hyatt Place | Upscale select-service | 2021/2022 | Aggregate Total Investment (no line-item breakdown reached) | $15,964,725 (2021) / $16,665,875 (2022) | $30,919,350 (2021) / $37,622,250 (2022) | [unclear — room count not stated in captured text] | [unclear] | [unclear — Item 7 detail not reached] | https://franchisepanda.com/download-franchise-disclosure-document-preview/hyatt-place/2022 |
| Fairfield by Marriott | Upper-midscale select-service | 2024 | New construction — Total Range (80–110 rooms) | $11,662,400 | $25,867,500 | $106,022 | $323,344 | New-construction-only | https://www.hotel-development.marriott.com/resourcefiles/fdd-document/2024-ff-fdd-3-31-2024.pdf |
| Fairfield by Marriott | Upper-midscale select-service | 2024 | New construction — Total Range (120–150 rooms) | $16,123,600 | $32,831,600 | $107,491 | $273,597 | New-construction-only | (same) |

All "per-room" figures are computed by dividing the disclosed total or line-item range by the disclosed room-count basis (or room-count range, using the bound that produces the widest honest interval), except where the FDD itself already states a per-room/per-key figure directly — those are labeled "(as disclosed)" rather than "(computed)."

---

## 4. Pattern assessment across both research rounds combined

- **Conversion-costs-disclosed pattern** (explicit conversion/renovation line or column in Item 7, separate from new construction): **G6/Studio 6, Sonesta Select** (round 1) + **Super 8/Wyndham-economy, Choice/Comfort, Best Western** (round 2). This is now confirmed across 5 brand families spanning economy through midscale — a real, recurring disclosure pattern, not a one-off.
- **New-construction-only pattern** (Item 7 excludes/omits conversion or PIP-execution cost, PIP line is fee-only): **Hilton, Hampton Inn** (round 1) + **Vignette Collection/IHG, Fairfield by Marriott** (round 2). Now confirmed across 4 brand families spanning full-service through select-service — also a real, recurring pattern.
- **Emerging read:** the conversion-vs-new-construction-only split appears to correlate more with **brand era/positioning** (legacy economy/midscale brands built on a large existing-hotel-conversion pipeline — Wyndham economy tier, Choice, Best Western, G6, Sonesta) than with **chain scale** alone — Choice's midscale Comfort brand discloses conversion costs just as clearly as economy G6/Super 8, while upper-midscale/upscale brands from IHG and Marriott (Vignette Collection, Fairfield) do not, regardless of scale. **[hypothesis based on n=9 brand families total across both rounds, not a statistically confirmed rule]**.
- **Hyatt Place remains genuinely unresolved** — the only Hyatt document reached this session was a cover-page preview crop that didn't extend to Item 7, so it cannot yet be classified into either pattern.
