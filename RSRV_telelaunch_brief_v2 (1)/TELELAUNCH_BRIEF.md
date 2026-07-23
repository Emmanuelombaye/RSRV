# RSRV — Brand Brief

**Package:** RSRV_telelaunch_brief_v2 · Prepared 2026-07-11 · For: TeleLaunch (platform + storefront build)

Everything needed to build the consumer surface on-brand: the marks, the position, the
voice, the palette, the type, the imagery rules. It is deliberately short. Use the files
in this package as shipped; where something visual is not covered here, ask rather than
improvise.

---

## 1. The marks

- **RSRV** is the consumer mark. It is pronounced **"reserve"** and is never spelled out
  letter by letter. Never set the mark adjacent to invitation or RSVP-context copy — it
  misreads at a glance.
- The endorsement line **BY RESERVE MOLECULAR** sets in Archivo Regular, letterspaced
  caps, +10% tracking, in platinum.
- The **primary lockup** (RSRV over the endorsement line) holds at roughly 96px height
  and above. Below that, use **standalone RSRV**. The **RM monogram** is micro-use only —
  favicon and seal at 16px and under, never the lead mark.
- **Clear space:** the height of the R on all sides.
- **Never** outline the marks, never apply gradients, never place them over photography
  without an obsidian scrim.
- Descriptor and endorsement devices set in **plain text** — an em dash or a line break
  (`RESERVE MOLECULAR — CLINICIAN-DIRECTED`). The double-slash (`//`) device never
  appears on a customer-facing surface.
- The logo family in `logos/` (SVG masters + PNG exports, dark and light, favicons) is
  **final and frozen**. Use the files; do not redraw, re-space, or restyle them.

## 2. The position

RSRV is a premium, clinician-guided optimization brand for high-performing
professionals — people who already hold a standard everywhere else in their lives and
expect the same for their body and mind. The differentiator is real, not rhetorical:
licensed clinicians direct every protocol, and prescriptions are compounded by licensed
US 503A pharmacies, one patient at a time. Verification — testing and documentation —
is the quiet proof layer beneath those two facts. In copy and in layout it **closes**
an argument; it never opens one.

The core customer is an established professional or executive, either sex, paying cash.
A younger, premium-native customer enters through the non-prescription line and grows
into the rest. Build for both without splitting the register.

**Women are the whole lineup, not a segment.** The category defaults to male-coded
copy; RSRV does not. No surface positions the full lineup with male-coded lead copy.

**Taglines.** Two are sanctioned:
- **"The standard, extended."** — flagship.
- **"Reserve, deepened."** — brand-level, for tight surfaces (certificate, etches,
  small lockups); it also teaches the mark's pronunciation.

These are the only two. Any tagline found in older materials is retired — do not reuse.

## 3. The voice

The register is the **trusted curator with taste** — the knowledgeable friend who
happens to have access, not a clinic and not a salesman. Quiet authority,
understated-confident. Short declaratives. Facts before adjectives; numbers stated
plainly. No exclamation points, no hype, no emoji. Luxury is demonstrated, never
self-applied: "luxury," "exclusive," "elite," "VIP," and "premium" stay out of
customer-facing copy.

Vocabulary that carries the brand: *protocol* (never "plan," "program," or
"subscription box"); *your allocation* / *standing reserve* for the replenishment
relationship (never "subscription," "auto-ship," "refill plan"); *clinician-directed,
US-compounded, tested, verified* (never "pharma-grade," "research-grade," "purest,"
"cleanest"); *build reserve, restore capacity, for longer* (never "anti-aging" or
"maximize").

Style rules that shape page copy — apply them as editing checks:

- **Vary section length and shape on every page.** A page of same-sized blocks with
  matched endings fails even when each sentence is good.
- **At most one three-part parallel construction per page** ("X, Y, and Z" with matched
  grammar). Lists of facts take uneven, concrete form instead.
- **Copy never narrates the brand's own restraint or process** ("we chose not to…").
  Restraint is shown, not described.
- **"Ship / ships / shipped": at most once per page, closing position only.** Prefer
  "dispensed," "leaves the pharmacy," "what was dispensed."

## 4. The palette

| Token | Hex | Use |
|---|---|---|
| `--rm-obsidian` | `#0B0B0D` | Dominant field (~70%) |
| `--rm-charcoal` | `#17171A` | Elevated surfaces, cards |
| `--rm-bone` | `#F3F1EC` | Primary type on dark; light-mode field |
| `--rm-platinum` | `#DCDAD4` | Secondary type, dividers |
| `--rm-espresso` | `#3A2E28` | Warm accent surfaces |
| `--rm-champagne` | `#C2A15F` | Hairlines/seal/deboss ONLY — never fills, never type |
| `--rm-silver` | `#9DA1A6` | Data/technical annotation |

Ratio discipline: obsidian/charcoal 70 · bone/platinum 20 · espresso 7 ·
champagne+silver 3. **Dark mode is the brand's default state**; light mode is the
exception (print, clinical documents).

`tokens.css` in this package is the generated source of these values. Import it and
reference the `--rm-*` variables; never hand-edit it or re-derive hex values. If a
token must change, it changes upstream and a new file is issued.

## 5. The typography

- **Display / headlines:** Newsreader, weight 500 (Medium), variable optical sizing on
  auto.
- **Wordmark / UI / body:** Archivo, 400/500.
- **Data / annotation:** Archivo, all-caps, +8% tracking, set in silver.

Both families are open-source (SIL Open Font License); the variable font files and
licenses are in `fonts/`. **Self-host them — never load fonts from a third-party CDN**
on this property.

## 6. The imagery

Editorial, available-light, subjects in context — a study, a terrace, a car, a court.
Product photography is matte black on black with a single champagne hairline of rim
light. Never: gym floors, white-coat stock photography, syringes or vials as hero
objects, medical crosses, pill-bottle clichés, before/after bodies. Any molecular
lattice motif stays abstract and generic — never a recognizable or complete structure.
No AI-generated human faces or figures anywhere; human presence is conveyed through
implied-presence composition or licensed editorial photography.

## 7. Compliance

Certain verticals carry marketing restrictions the platform build must respect;
TeleLaunch governs compliance implementation on this surface and coordinates the
specifics with the owner.

---

**Notes.** The primary platform domain is being confirmed — do not hard-code a
storefront URL. The marks are pending intent-to-use filings.

*Colophon: derived from Brand_Foundation_Reference v0.4.7 (2026-07-11). Questions:
Steven Wruble.*
