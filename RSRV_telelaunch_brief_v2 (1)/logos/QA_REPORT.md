# RSRV Logo Master Family — QA Report (Phase 2.2)
**Date:** 2026-07-09 · **Built by:** Claude Code (autonomy grant, this session) · **Authority:** Brand_Foundation_Reference **v0.3.3** §5.1/§5.2/§5.7 + `assets/tokens/design-tokens.json` · **Reference:** `mockups/exploration/rsrv-lockup-explore-03.svg` (+ inverse)

> **Premise notes (§E rule 3).** (a) The task brief cited Brand_Foundation *v0.3.4*; the repo
> has **v0.3.3** and no v0.3.4 exists in history. §5 design content is identical since v0.3.1
> (later bumps changed domain/status text only), and the two master-build corrections
> (+20% tracking; champagne-rule drop <~48px with platinum 1-color fallback) were supplied
> in the instruction itself — build proceeded on v0.3.3. (b) The exploration files were
> present on disk but **untracked**; they are committed with this change so the contact
> sheet derives from committed sources.

## Fixed parameters (from explore-03) and corrections applied
| Parameter | Value | Source |
|---|---|---|
| RSRV face/weight | Archivo SemiExpanded **Bold (700)** static | explore-03 · §5.1 |
| RSRV tracking | **+20%** (0.20em) | master correction (a) — ref was +18%; floor stays +18% |
| Rule | present; centered; **0.72em × 0.01em**; 0.20em below baseline | explore-03 geometry |
| Rule color | champagne `#C2A15F`; **platinum `#DCDAD4` fallback variants** for 1-color; **dropped** in avatar/favicon (<~48px) | correction (b) · §5.7-2 |
| Line-size ratio | endorsement/RSRV = **0.24** | explore-03 |
| Endorsement | Archivo Regular caps, **+10%** tracking | §5.1 |

## Programmatic QA — 67 checks, ALL PASS (1 fix round used of 3)
Checks per SVG: valid SVG + viewBox · zero `<text>` (outlines only) · every fill/stroke ∈ design-tokens hexes and nothing else · RSRV min glyph-gap ≥ 0.18em (measured geometrically; masters build at 0.20em → measured 0.244em incl. sidebearings) · clear-space margin ≥ measured cap height on all four sides · raster exports exact px.

| File | valid | no-text | token-colors | tracking | clear-space |
|---|---|---|---|---|---|
| rsrv-primary-dark.svg | ✅ | ✅ | ✅ bone/obsidian/champagne | ✅ 0.244em | ✅ |
| rsrv-primary-light.svg | ✅ | ✅ | ✅ | ✅ 0.244em | ✅ |
| rsrv-primary-dark-rule-platinum.svg | ✅ | ✅ | ✅ bone/obsidian/platinum | ✅ | ✅ |
| rsrv-primary-light-rule-platinum.svg | ✅ | ✅ | ✅ | ✅ | ✅ |
| rsrv-wordmark-dark/light.svg | ✅ | ✅ | ✅ | ✅ 0.244em | ✅ |
| rm-house-dark/light.svg | ✅ | ✅ | ✅ | n/a (house +14%) | ✅ |
| rm-house-stacked-dark/light.svg | ✅ | ✅ | ✅ | n/a | ✅ |
| rm-micro-dark/light.svg | ✅ | ✅ | ✅ | ✅ 0.321em | ✅ |
| rsrv-avatar.svg / favicon.svg | ✅ | ✅ | ✅ | ✅ 0.244em | ⚠️ exempt (see below) |
| favicon-32.png / favicon-16.png | — | — | — | — | ✅ exact 32×32 / 16×16 |
| favicon.ico | — | — | — | — | ✅ entries 16+32 |

**Iterations:** Round 1 → 8 clear-space failures (margins were budgeted from the font's cap-height *metric*; rendered ink overshoots it — the S overshoot both shrank the margin and raised the measured bar). Fix: placement rewritten to measure the **rendered ink bbox** and set margin = measured cap height × 1.02. Round 2 → clean. (Two toolchain-only fixes not counted as asset rounds: fontkit ESM interop; a non-WinAnsi glyph in the PDF labels.)

## Visual QA — renders inspected at 16/32/200/1200px (all 14 marks)
- **Glyph integrity / kerning / clipping:** clean at all sizes; tracking optically even; no clipped paths; light variants correct.
- **Champagne hairline at 16/32px: does NOT survive** — fully collapsed at both sizes (at 200px render it is already ~0.8px). Handled per correction (b) + §5.7-2: avatar/favicon masters carry **no rule**, and platinum-rule variants (`*-rule-platinum.svg`) are included alongside the champagne masters for 1-color/low-res contexts. Both included.
- **favicon-32:** legible. **favicon-16: borderline-illegible** (glyphs ≈5px tall) — see judgment items.

## Fallbacks & variants produced
- `rsrv-primary-dark-rule-platinum.svg`, `rsrv-primary-light-rule-platinum.svg` (§5.7-2 platinum fallback).
- Rule omitted from `rsrv-avatar.svg`/`favicon.svg` (sub-48px contexts, correction (b)).

## Parameter decisions within spec ranges (documented, not silent)
1. **House wordmark tracking +14%** — §5.1 allows +12–16%; midpoint chosen.
2. **Stacked house line gap 0.55em** (baseline-to-cap-top) — §5.1 doesn't specify; set for even optical color.
3. **RM micro in SemiExpanded Bold at +20% tracking** — §5.1 specifies only "RM"; set to match the mark's DNA.
4. **Endorsement "small caps" = Archivo Regular caps at 0.24 ratio** — Archivo has no true small-caps glyphs (`smcp`); for an all-caps string the rendering is visually equivalent.
5. **Field rects included in masters** (obsidian/bone per variant) — matches exploration format; makes clear space visible and renders deterministic.
6. **Avatar/favicon clear-space exemption** — R-height margins inside a square app-icon tile would shrink glyphs to ~15% of tile (illegible at 16px); 12% tile margins used instead. App-icon crops conventionally sit outside print clear-space rules; flagged rather than silently reinterpreted.

## Judgment items for the §5.7 gate (items 3–6) — NOT self-certified; reserved for the gate
*Observations only. No pass/fail asserted for gate items 3–6.*
- **(Item 3 — cross-cultural/RSVP):** at 32px and below, the wide tracking that mitigates the RSVP misread is proportionally less protective; the endorsement line (the pronunciation teacher) is illegible below ~100px lockup height. A human should glance-test the 32px row on the stress board.
- **(Item 4 — visual similarity):** the champagne-colored rule under "RSRV" sits adjacent to **Perrier-Jouët's RSRV champagne brand** (known distant-class use, §0). A gold hairline + RSRV together may read closer to that mark than the word alone did at search-layer. Counsel/gate should look specifically at this pairing.
- **(Item 4):** stacked RESERVE/MOLECULAR in wide-tracked grotesque caps is a common luxury/pharma-adjacent pattern; gate should run the visual-similarity sweep against health/luxury marks per §5.7-4 — not performed here.
- **(Item 5 — presentation set):** NOT built in this phase — stress-board covers §5.7 item 2 only. Certificate, outer vessel, app-icon-in-context, site header, and editorial-ad mockups remain open for the gate.
- **(Item 6 — register):** the deboss and billboard cells on the stress board are CSS simulations, not proofs; register judgment ("considered, not clever") is the gate's call on real surfaces.
- **favicon-16 legibility:** spec-literal reading (§5.1: RM takes over *below* 16px) puts RSRV at 16px, which my inspection finds borderline-illegible. Recommend the gate consider the RM micro-mark at 16px; both marks exist as masters either way.
- **Champagne-on-bone (light-mode rule):** low contrast by design; §5.2 keeps champagne "sparingly" — gate may prefer the platinum-rule variant as the light-mode default.

## Inventory committed
14 SVG masters + favicon-32.png + favicon-16.png + favicon.ico + `_manifest.json` (build params) in `logos/`; `mockups/stress-board.html`; `mockups/exploration/` (7 SVGs + notes + `contact-sheet.pdf`); toolchain in `tools/` (scripts + pinned deps; Node runtime and node_modules gitignored).
