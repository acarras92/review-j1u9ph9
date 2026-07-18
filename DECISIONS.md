# Run 1 — Decision Log

Every consequential call made during this run, with reasoning. Per the master prompt: "Make every call yourself. Write down why you made it and keep moving."

---

## D-001 — Start immediately without waiting for a "go"
**When:** Phase 0 (setup)
**Decision:** Andrew asked me to "confirm I'm all set" but also said he'd be away for hours and that the run must be one-shot with no questions. Waiting for a reply would stall the run for hours, which contradicts the stated intent. I confirmed and started in the same turn.
**Why:** The master prompt's own invocation line ends "Start now," and the never-ask rule makes waiting the only wrong choice.

## D-002 — Execute the master prompt directly with Workflow orchestration (not the /autoresearch skill)
**When:** Phase 0
**Decision:** The prompt references Fable's "/goal" feature. In this Claude Code environment the equivalent is direct autonomous execution using the Workflow tool for multi-agent fan-outs, which the master prompt explicitly demands ("Use multi-agent workflows aggressively").
**Why:** The autoresearch skill is built for metric-driven iterate/verify loops; this mission is a phased build with a qualitative definition of done. The master prompt itself is the goal harness.

## D-003 — Environment inventory results and media-phase adaptation
**When:** Phase 0
**Findings:** No `.env` and no avatar/voice assets exist in this project. Available: Node 22-era toolchain (node/npm/npx), git, Chrome automation (incl. GIF screen recording), Firecrawl + Exa + WebSearch for research. Not available: ffmpeg, ImageMagick, Python (Store stub only), HeyGen/ElevenLabs keys.
**Decision:** Media phase will be produced with free, no-signup local tooling: product demo recorded from the real built product via Chrome; launch/founder videos rendered programmatically (HTML/CSS/JS motion graphics; Windows built-in SAPI text-to-speech for voiceover if a voice track is needed). No new accounts, no spending.
**Why:** Guardrail: "No new spending... do not sign up for or pay for anything new." The reference run used the owner's HeyGen/ElevenLabs keys; this project has none, so the founder video concept must be adapted, not faked.

## D-004 — Subagent cost discipline
**When:** Phase 0, enforced throughout
**Decision:** All workflow subagents run on Sonnet. Research/verification/drafting at medium effort; bulk scraping/search at low effort. Fable 5 (this session) reserved for planning, judging, synthesis, and final builds.
**Why:** Explicit guardrail in the master prompt.

## D-005 — Working structure
**When:** Phase 0
**Decision:** All run outputs live in `run-1/` with subfolders: `research/`, `tournament/`, `design/`, `brand/`, `site/`, `product/`, `media/`, `redteam/`, and `recap.html` at the root of `run-1/`.
**Why:** Mirrors the reference run's structure so the recap can link everything; keeps the project folder clean.

## D-006 — Phase 1 verdict: proceed to tournament with gap-fill, not a full re-research round
**When:** End of Phase 1
**Decision:** The completeness critic failed the phase (6 gaps). Rather than re-running broad research, I'm running 4 targeted gap-fill agents (direct WTP demand check, PIPGURU/PIPGENIUS traction, HAMA capex figures via secondary sources, Business Screen/surety-tool hotel footprint) feeding directly into the tournament in one workflow. Gaps 1 and 6 are score-reconciliation issues, handled by writing them into `research/critic-gaps.md` and requiring judges to apply them.
**Why:** The gaps are narrow and targeted; broad re-research would burn budget without changing the decision inputs. The two reconciliation gaps are judgment calls that belong in the tournament, not more scraping.

## D-007 — Tournament field: 8 entrants including two designed combinations
**When:** Phase 2 setup
**Decision:** Field = 4 seeded candidates + 2 scout ideas (FF&E reserve forecasting; soft-displacement modeling) + 2 combinations (E6: PIP benchmark + reserve forecasting "Capex Defense"; E7: PIP + change-order audit + GC-records-lite "Construction Defense"). Soft displacement included despite thin evidence so its elimination is on the record rather than silent.
**Why:** The master prompt explicitly demands combinations be considered; the scout itself assessed FF&E reserve forecasting as "a better-evidenced extension of candidate 2," which makes E6 a serious contender, and E7 captures the shared-buyer thesis in the memo.

## D-008 — Winner: E2 (PIP Bid Benchmark); failed third vote not re-run
**When:** End of Phase 2
**Decision:** E2 wins. Panel ranked it #1 (6.71); both completed fresh judges voted for it. The third vote agent died on a structured-output formatting technicality after 5 retries; I did not re-run it because no possible third vote changes the outcome (E2 already has panel #1 + 2 votes; worst case is 2–1). The judges' conditions are adopted as binding design constraints (see tournament-results.md).
**Why:** Re-running would spend tokens to confirm a decided result. The failure was mechanical (schema retry cap), not evidentiary — the duel briefs it would have judged are on record and were judged by two other fresh judges who agreed with each other and with the panel.

## D-009 — Demand validation deferred to the launch plan, honestly flagged
**When:** End of Phase 2
**Decision:** Judges conditioned the win on pre-sales/owner-conversation validation. The publish-nothing/no-outreach guardrail makes that impossible inside this run. I am documenting a concrete validation protocol as step one of the launch plan instead, and stating in the business plan that first-person willingness-to-pay remains the single biggest unvalidated assumption.
**Why:** Guardrails outrank judge conditions; hiding the gap would violate the invent-nothing spirit.

## D-010 — Design-critic actions: three adopted, one rejected on guardrail grounds
**When:** End of Phase 3
**Decision:** The design critic passed the phase with 4 actions. Adopted: (a) reconcile the annual-PIP estimate on the AHLA ~36,000-franchised-hotel base → ~5,000–9,000 PIPs/yr [estimated]; (b) evidence-grade the benchmark tiers — midscale/upper-midscale/select-service ship with "verified" confidence, other tiers visibly badged "directional estimate"; (c) pull FDDs for Wyndham/Choice/IHG/Best Western families (workflow running). Rejected: filling Nehmer's free lead-gen form to obtain the cost guide — the no-new-signups guardrail covers free forms that capture contact details. Instead an agent hunts for publicly hosted copies; if none exist, v1 claims language stays "category-level benchmarking" and reserves "line-item" for the bid-parsing step only.
**Why:** The guardrail is absolute; and the honest fallback (category-level claims + confidence badges) converts a data limitation into a trust-building product feature, which fits an evidence-first brand.

## D-011 — Logo: concept A (surveyor's benchmark) chosen from four candidates
**When:** Phase 4
**Decision:** Four SVG concepts were generated and reviewed rendered (full size + 40px legibility row). A won on distinctiveness, meaning (a surveyor's benchmark IS a verified public reference point), and small-size performance. Critique record in `brand/brand-guidelines.md` §2; candidates + contact sheet preserved in `brand/logo-candidates/`.
**Why:** The critique loop ran at top level (Fable) rather than via subagents because visual judgment on four small SVGs is exactly the judging work the cost-discipline guardrail reserves for the top-level session.

## D-012 — Cost-discipline exception: Fable built the benchmark dataset and demo app directly
**When:** Phase 5
**Decision:** The evidence-graded dataset (`product/data/benchmarks.json`) and the demo app logic were written by the top-level session, not delegated to Sonnet. Landing page and business docs WERE delegated (Sonnet drafts, Fable review/fix).
**Why (exception justification per guardrail):** The dataset is the product's integrity — every figure maps to a specific source and grade, and a transcription error there violates the invent-nothing guardrail in the shipped artifact itself. The benchmark math (escalation bands, per-key multipliers, verdict logic) had to exactly match the research files. This is precision synthesis, not bulk drafting.

## D-013 — Media approach: honest production, no simulated humans
**When:** Phase 6
**Decision:** (a) Product demo GIF recorded from the real working app in Chrome. (b) Launch video: Remotion motion graphics over real UI screenshots with an Edge neural-TTS voiceover. (c) Founder video: typographic note with the same TTS voice, carrying an on-screen label that it is an AI-voiced note with no human footage or cloned voice simulated. (d) No music track — no licensed/owned music assets exist in this project, and generating pseudo-music adds risk without informational value.
**Why:** No avatar/voice-clone assets exist in this project (unlike the reference run). Simulating a human founder without disclosure would be a fabrication; the honest label converts the constraint into brand-consistent transparency.

## D-014 — Red team: 38 attacks, all ruled, verdict "viable with fixes"
**When:** Phase 7
**Decision:** 12 attacks fixed in artifacts this run (parser generalized, tariff flags implemented, revenue-table inconsistency corrected, site claims trued-up, memo integrity rule applied, competitor status re-verified live); 18 bound into the plans as amendments (legal gating order, data licensing gate, validation hardening, channel kill-criteria); 8 accepted as documented risks; 0 rejected; 0 kills. Full rulings: `redteam/red-team-report.md`.
**Why:** The two severity-5 findings (no first-person WTP; free AI substitution) are structural truths about the category, not fixable bugs — the correct response was to make validation a hard gate and to answer substitution with the sourced-and-graded data strategy, both now binding in the plans.

## D-015 — Video QA method: frame extraction, not in-browser playback
**When:** Phase 6/9
**Decision:** The Chrome automation environment cannot play any MP4 (even a canonical MDN H.264 test file fails to load metadata — environment limitation, not an artifact defect). Both rendered videos were verified instead via Remotion's bundled ffprobe (valid H.264/AAC, correct durations) and extracted frames reviewed visually at six timestamps. The recap embeds the videos with poster frames and notes that files open in any player.
**Why:** Debugging a browser-environment quirk further would burn the run's remaining time on a non-defect; ffprobe + frame review verifies the actual deliverable.

## D-016 — Stranger test: PASS with minor issues; all four issues fixed
**When:** Phase 9
**Decision:** An independent fresh-context agent ran the acceptance test against the definition of done. It independently reproduced the demo's entire arithmetic by hand ($5,727,000 bid, $266,416 above-range, $1,100,000 lever — all exact), confirmed every link resolves, confirmed the demo runs from file://, and found four secondary issues, all fixed: (1) "PIP" acronym now expanded in the recap hero; (2) pricing glance box now carries tier names; (3) the category-taxonomy claim in business-plan/business-design/site now states exactly which subset the demo implements vs the full Nehmer/HVS taxonomy it targets; (4) the three raw-JSON archives had a UTF-8 BOM + double-encoding mojibake from a PowerShell export step — repaired with a cp1252-reverse-mapping script, all three now parse cleanly with zero residual artifacts.
**Why:** The definition of done demands a stranger needs no further explanation; each fix closes a spot where close reading would have raised an eyebrow.
