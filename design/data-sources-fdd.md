
# Franchise Disclosure Documents (FDDs) as a free public data source for PIP/renovation cost ranges

Research date: 2026-07-18. Guardrails observed: research only, nothing published/purchased/contacted; every figure below has a live URL; anything not directly verified is marked **[unclear]**. No proprietary or Highgate references.

---

## 1. Free public FDD portals — status

| Portal | State | Status | URL |
|---|---|---|---|
| CARDS (Commerce Actions and Regulatory Documents Search) | Minnesota | **Live, free, no login.** Search by franchisor/brand name; documents are direct PDF downloads. This is the deepest and most reliable free portal — MN requires registration of all FDDs offered/sold in-state, and it posts the full document (not just a summary). | https://cards.web.commerce.state.mn.us/franchise-registrations |
| DFI Franchise Search | Wisconsin | **Live, free, no login.** Lets you check registration status and download the FDD. | https://apps.dfi.wi.gov/apps/FranchiseSearch/MainSearch.aspx |
| DOCQNET (successor to Cal-EASI) | California DFPI | **Live, free.** Cal-EASI was retired June 18, 2014 and replaced by the DOCQNET self-service portal; also reachable via DFPI's unified search. Requires the franchisor's exact legal filing name (e.g., "Hilton Franchise Holding LLC", not "Hilton"). | https://docqnet.dfpi.ca.gov/ , https://dfpi.ca.gov/regulated-industries/franchises/ |
| INBiz / Securities Portal | Indiana | Indiana's Secretary of State runs a general business-entity and securities registration search (https://securities.sos.in.gov/public-portfolio-search/), but I could not confirm a dedicated, free-standing FDD document repository comparable to MN/WI — **[unclear]** whether full FDD PDFs are downloadable here versus just registration status. Would need direct testing to confirm document-level access. |
| Washington DFI | Washington | **No public document portal found.** Search results and DFI's own franchise FAQ page indicate registration status must be checked by *contacting* the Securities Division directly (phone/email) rather than through a self-service document database. Treat as **not a usable free-document source** for this project. | https://dfi.wa.gov/franchises/franchises |

**Practical implication for the product:** Minnesota CARDS and Wisconsin DFI are the two portals that reliably return full, free, downloadable FDD PDFs by brand name with no login. California DOCQNET is usable but pickier about exact legal-entity names. Indiana and Washington are not confirmed as reliable free full-document sources — Indiana needs hands-on testing, Washington appears to require a direct request to the regulator.

Separately, general web search plus the franchisors' own investor/development sites surfaced several **hotel-brand FDD PDFs hosted directly by the franchisor or its PR/marketing vendor** (Hilton's hmd-wp.go-vip.net site, Marriott's hotel-development.marriott.com, G6 Hospitality's own site, and a franchise-marketplace site hosting Sonesta's FDD) — these are also free and public, and in practice were faster to retrieve than scraping the state portals (which return JS-rendered search UIs that plain fetch tools can't execute; a browser-driving tool or the portal's own search form would be needed to search MN CARDS interactively rather than guessing document IDs).

---

## 2. Extracted Item 7 (Estimated Initial Investment) figures — actual documents opened and read

All four documents below were fetched and parsed directly (PDF parsed to text); figures below are quoted from the parsed text.

### A. Hilton (full-service brand) — 2025 FDD
- **Source:** Hilton Franchise Holding LLC, "Franchise Disclosure Document," Item 7, table "YOUR ESTIMATED INITIAL INVESTMENT — HILTON (300 ROOMS)."
- **URL:** https://hmd-wp.go-vip.net/wp-content/uploads/2025/05/2025-US-FDD-Hilton-v.2.pdf
- **Figures (300-room prototype, new construction):**
  - Construction and Leasehold Improvements: $25,410,000–$145,200,000
  - Designer and Engineering Fees: $924,000–$5,530,000
  - Furniture, Fixtures and Equipment (FF&E): $15,000,000–$22,500,000
  - Inventory and Operating Equipment: $2,000,000–$3,500,000
  - Contingencies: $2,310,000–$13,200,000
  - **TOTAL: $49,685,442–$204,323,235** (excludes real estate, market studies, insurance, interest, "or the cost of improvements under a Conversion, Re-licensing or Change of Ownership license")
  - Property Improvement Plan (Note 2) line item is only **$0–$10,000** — this is the *fee Hilton charges to prepare a PIP scope*, not the cost of executing the PIP itself.
- **Granularity:** Lump per-category ranges (construction, FF&E, design fees, etc.), not line-item unit costs. **No separate conversion-specific dollar table** — Note 6 explicitly states conversion renovation costs "will vary" and are not quantified, and the total explicitly excludes conversion/PIP execution costs.

### B. Hampton Inn (by Hilton, select-service) — 2025 FDD
- **Source:** Hilton Franchise Holding LLC, Item 7, tables for "HAMPTON INN (89 ROOMS)" and "HAMPTON INN & SUITES (113 ROOMS)."
- **URL:** https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf
- **Figures (Hampton Inn, 89 rooms, new construction):**
  - Construction and Leasehold Improvements: $11,139,759–$16,090,763
  - FF&E: $1,228,796–$1,746,184
  - Contingencies: $1,113,976–$1,609,076
  - **TOTAL: $15,218,226–$22,193,244**
  - Same PIP-fee-only line item ($0–$10,000) as Hilton above.
- **Same limitation:** new-construction only; the table's own footer states it excludes/does not "separately identify the cost of improvements under a Conversion, Re-licensing or Change of Ownership license." Confirms this is a systemic pattern across Hilton-branded FDDs, not a one-off.

### C. Studio 6 (G6 Hospitality, economy extended-stay) — FDD dated March 5, 2021 (amended April 9 and July 1, 2021)
- **Source:** G6 Hospitality LLC, Item 7, "Table 1: YOUR ESTIMATED INITIAL INVESTMENT FOR 100 ROOM RENOVATED STUDIO 6 EXTENDED STAY MOTEL OR NEW CONSTRUCTION... PROTOTYPE GEMINI" — this brand's FDD uniquely splits every line into a **Renovation** column and a **New Construction** column.
- **URL:** http://g6hospitality.com/wp-content/uploads/2021/12/Studio-6-2021-FDD-dated-3-5-21-as-amended-4-9-21-and-7-1-21-PDF.pdf
- **Figures (100-room prototype):**
  | Line item | Renovation | New Construction |
  |---|---|---|
  | Construction Expenses | $0–$680,000 | $5,915,500–$6,802,825 |
  | FF&E (materials & freight only) | $0–$590,000 | $708,000–$849,600 |
  | Signage | $4,000–$40,000 | $20,000–$40,000 |
  | Opening Inventory & Supplies | $20,000–$150,000 | $160,000–$190,000 |
  | **TOTAL (excl. land)** | **$206,850–$1,795,050** | **$7,133,850–$8,676,275** |
  | **Total per guest room** | **$2,068–$17,950** | **$71,338–$86,762** |
- **Note (age):** this is a 2021 FDD (most recent Studio 6 FDD I could locate publicly); treat as a historical baseline only, not current-year pricing — flag as **[dated: 2021]** if used anywhere customer-facing.
- **Significance:** this is the clearest example found of a brand disclosing an explicit **per-key renovation range** directly in Item 7, rather than only a lump new-construction total.

### D. Sonesta Select (conversion-focused midscale brand) — FDD dated "2022_04" (April 2022)
- **Source:** Sonesta RL Hotels Franchising Inc., Item 7, "ESTIMATED INITIAL INVESTMENT — SONESTA SELECT CONVERSION — 125 ROOMS."
- **URL:** https://storage.googleapis.com/wefranch-files/media/fdd__20210915_qe5lbPy.pdf (hosted by a franchise-marketplace site; internal document footer reads "SRLHF – Sonesta Select 2022_04 FDD")
- **Figures (125-room conversion):**
  - Initial Fee: $65,000
  - PIP Fee: $5,000; PIP Reinspection Fee: $0–$5,000
  - **Conversion Remodeling Expenses: $500,000–$4,500,000** (≈ **$4,000–$36,000 per room**)
  - Signage: $25,000–$125,000
  - Guest Wi-Fi/In-Room Entertainment Installation: $25,000–$60,000
  - Additional Funds (first 3 months): $550,000–$700,000
  - **TOTAL: $1,299,180–$5,919,498**
- **Significance:** second (and cleanest) example of a brand explicitly disclosing conversion-specific remodeling cost as its own labeled line item, with a per-room-derivable range. Cover page itself states the total conversion investment range ($1,299,180–$5,919,498) up front in plain English before Item 7.

---

## 3. Coverage assessment

**How many brands could be assembled this way?** In principle, essentially every U.S. hotel franchisor (Marriott, Hilton, IHG, Wyndham, Choice, Best Western, Hyatt, Sonesta, G6/Motel 6, Red Roof, Extended Stay America, etc.) must register or file an FDD in registration states, and most now also self-host current FDDs on their own development/investor-relations sites for lead-gen purposes (confirmed directly for Hilton family brands, Marriott's Luxury Collection, and G6). A systematic pull — either scripted state-portal downloads (MN/WI, ideally via a tool that can drive the search UI, since it's JS-rendered) or web search for "`<brand>` franchise disclosure document filetype:pdf" — could plausibly assemble on the order of 20–40+ current brand FDDs across the major chains (each major franchisor typically files one FDD per sub-brand, so a company like Wyndham or Choice contributes many documents, one per named brand).

**How current?** Varies widely by document and by how it was found:
- Franchisor-hosted PDFs (Hilton family, Marriott) were current-year (2025) in this pull.
- State-portal and marketplace-hosted PDFs can lag — the Studio 6 and Sonesta Select documents found here were 2021–2022 vintage. FDDs are refiled annually, so a production pipeline would need to re-pull yearly and would sometimes only find last year's version depending on where a document happens to be indexed/cached online.
- **Implication for the product:** currency cannot be assumed from search results alone; every pulled FDD needs its cover-date checked before use, and stale ones (>18–24 months) should be flagged to the user rather than silently used for benchmarking.

**Granularity — is it line-item or lump ranges?**
- It is **mixed and brand-dependent**, which is itself an important finding:
  - Hilton-family brands (Hilton, Hampton, and — per search snippets — Curio, DoubleTree, Embassy Suites, Home2) give a fairly granular Item 7 table (12–20 line items: construction, design/engineering, FF&E, inventory, signage, IT systems, permits, contingency, etc.) but **only for new construction**, and explicitly disclaim/exclude conversion or PIP-execution costs from the numbers. For a PIP-benchmarking tool, this is close to useless for the actual PIP-cost question — it only gives the *fee* to have Hilton prepare a PIP ($0–$10,000), not what the PIP will cost to execute.
  - G6 (Studio 6/Motel 6) and Sonesta (Sonesta Select) brands, by contrast, disclose **explicit renovation/conversion-remodeling dollar ranges** as their own line items, directly usable (with derivation) as a per-key range.
- Where present, ranges are still **lump sums per category** (e.g., "Construction Expenses: $0–$680,000"), not itemized by trade (roofing, HVAC, FF&E-by-room-type, etc.) — so FDDs give a coarse benchmarking anchor at the category level, not the line-by-line granularity (paint, carpet, casegoods, bathroom vanities, etc.) that an actual PIP bid document contains. This matches the product's premise: FDDs are useful as a *sanity-check ceiling/floor* for total or per-key PIP cost, not as a substitute for the line-by-line bid comparison itself.

**Bottom line:** FDDs are a real, free, legally-mandated public disclosure with genuine dollar figures — but coverage of *PIP/conversion* cost specifically (as opposed to new-construction cost) is inconsistent across brands, several major full-service brands (Hilton, Marriott) structurally omit conversion-cost figures from Item 7, and the documents that do disclose conversion costs (G6, Sonesta) only give total-per-category ranges, not itemized bid-line detail. This is directly relevant to the product's design: FDDs alone cannot populate a full line-by-line PIP cost benchmark database; they are best used as one corroborating input (order-of-magnitude sanity check) alongside other data sources.

---

## 4. Other free brand-cost disclosures found

- **Wyndham brand development pages** explicitly point franchise prospects back to the FDD for investment figures rather than publishing their own numbers: "...Item 7 of the Franchise Disclosure Document (FDD) for the brand you're considering, which outlines estimated initial investment requirements for each brand." (https://development.wyndhamhotels.com/convert-your-existing-hotel) — confirms Wyndham does not publish a separate capex/PIP number outside the FDD itself; a full Wyndham brand-by-brand PDF (Days Inn, Super 8, La Quinta, etc.) was not located in this session — **[unclear]**, would need direct download from https://development.wyndhamhotels.com/downloads/ or a state portal.
- **HVS "US Hotel Franchise Fee Guide"** (referenced 2020 edition found via search: https://www.hvs.com/Print/HVS-US-Hotel-Franchise-Fee-Guide-2020?id=8966) is a secondary/analyst compilation of franchise fee and investment data across brands, but the file returned as binary/undecodable in this session, and it's a paid-adjacent HVS publication whose free public availability and update cadence is **[unclear]** — flag as a lead to revisit with a PDF-capable reader, not confirmed as freely reusable data.
- **Industry press on 2025 capex sentiment:** "What hotel investors think about capex in 2025" (Hospitality Investor / Hotel Management, 2025) was identified in search results as discussing PIP and conversion capex sentiment, but the page returned HTTP 403 to automated fetch in this session — content not verified beyond the search snippet; **[unclear]**, would need a browser-based fetch to confirm actual figures.
- **General market benchmarks (not brand-specific):** search results cited a "2025 HVS median for select-service hotels" of approximately $223,000 per key for full new-build development cost, and luxury new-build costs "more than $1 million per key" up to "$2 million per key" (HotelsMag.com, 2025: https://hotelsmag.com/news/luxury-hotels-are-more-expensive-than-ever-to-build-it-doesnt-mean-they-arent-getting-done/). These are **new-construction development costs, not PIP/renovation costs**, and are secondary-source citations (from search snippets, not independently opened and verified against the original article in this session) — flag as **[unclear — snippet-only, not independently verified]**.
- No investor-day deck with an explicit "capex-per-key for conversions" metric, and no brand-issued conversion-cost press release, were located in this session's searches. This is a plausible avenue to keep watching (major public REITs and C-corp franchisors — Wyndham Hotels & Resorts, Choice Hotels International, Hilton Worldwide Holdings — file 10-Ks/investor decks that occasionally discuss system-wide renovation capex, but a targeted search for a per-key figure specifically did not surface one) — **[gap, not found]**.

---

## Extracted-figures summary table

| Brand | Franchisor | FDD date | Item | Scope | Figure | Per-room (derived) | Source URL |
|---|---|---|---|---|---|---|---|
| Hilton | Hilton Franchise Holding LLC | 2025 | Item 7 | New construction, 300 rooms | Construction & Leasehold Improvements $25.41M–$145.2M; FF&E $15.0M–$22.5M; TOTAL $49.69M–$204.32M | ~$165,600–$681,000/room (total, new build) | https://hmd-wp.go-vip.net/wp-content/uploads/2025/05/2025-US-FDD-Hilton-v.2.pdf |
| Hampton Inn | Hilton Franchise Holding LLC | 2025 | Item 7 | New construction, 89 rooms | Construction & Leasehold Improvements $11.14M–$16.09M; TOTAL $15.22M–$22.19M | ~$171,000–$249,300/room (total, new build) | https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf |
| Studio 6 (renovation) | G6 Hospitality LLC | 2021 (amended 2021) | Item 7, Table 1 | Renovation/conversion, 100 rooms | TOTAL $206,850–$1,795,050 | **$2,068–$17,950/room** | http://g6hospitality.com/wp-content/uploads/2021/12/Studio-6-2021-FDD-dated-3-5-21-as-amended-4-9-21-and-7-1-21-PDF.pdf |
| Studio 6 (new construction) | G6 Hospitality LLC | 2021 (amended 2021) | Item 7, Table 1 | New construction, 100 rooms | TOTAL $7,133,850–$8,676,275 | $71,338–$86,762/room | (same as above) |
| Sonesta Select | Sonesta RL Hotels Franchising Inc. | 2022 (footer "2022_04 FDD") | Item 7 | Conversion, 125 rooms | Conversion Remodeling Expenses $500,000–$4,500,000; TOTAL $1,299,180–$5,919,498 | **~$4,000–$36,000/room (remodeling only)**; ~$10,400–$47,400/room (total conversion investment) | https://storage.googleapis.com/wefranch-files/media/fdd__20210915_qe5lbPy.pdf |

All "per-room" figures above are derived by dividing the disclosed total/line-item range by the disclosed room count; the FDDs themselves do not always state a per-room figure explicitly (Studio 6 is the exception — it states "Total Per Guest Room" directly).

---

## Gaps / follow-ups flagged (not fabricated, not resolved this session)
- Indiana portal's actual FDD-document-level access — **[unclear]**, needs hands-on test.
- Washington — appears to require direct regulator contact, not a self-service document search — treat as **not usable** as a free automated source.
- No Wyndham, Choice, IHG, Best Western, or Hyatt FDD was actually opened and read in this session (links were found in search results for Marriott's Luxury Collection and several Hilton sub-brands, but time/budget did not allow opening all of them) — **[gap]**, straightforward to fill in a follow-up pull using the same method (franchisor-hosted PDF search + MN CARDS).
- HVS Franchise Fee Guide and the Hospitality Investor capex-2025 article were identified but not successfully opened (binary/403 respectively) — **[unclear]**, flagged rather than guessed at.
- No brand-specific "capex per key" investor-day figure or conversion-cost press release was found.
