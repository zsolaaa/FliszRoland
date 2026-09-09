---
name: Flisz Roland E.V.
description: A house painter's landing page built as a top-down, measured layout of workshop tools on raw canvas.
colors:
  linen: "#d9d6cb"
  linen-deep: "#cbc7b9"
  ink: "#1c1b17"
  ink-soft: "#514c42"
  blue: "#2c6fb0"
  blue-deep: "#1f5386"
  blue-ink: "#12324f"
  rust: "#b0502c"
  kraft: "#c6a878"
  paper: "#f0ecdd"
typography:
  display:
    fontFamily: "\"Saira Stencil One\", \"Archivo Narrow\", system-ui, sans-serif"
    fontSize: "clamp(34px, 6vw, 64px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "\"Archivo Narrow\", \"Archivo\", system-ui, sans-serif"
    fontSize: "clamp(26px, 4vw, 42px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "\"Archivo Narrow\", \"Archivo\", system-ui, sans-serif"
    fontSize: "clamp(17px, 2.2vw, 22px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body-large:
    fontFamily: "\"Archivo\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(16px, 1.9vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "\"Archivo\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "clamp(15px, 1vw + 12px, 17px)"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "\"Archivo Narrow\", \"Archivo\", system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  tag: "2px"
  panel: "3px"
  plate: "7px"
  square: "0"
  pill: "50%"
spacing:
  sp-1: "4px"
  sp-2: "8px"
  sp-3: "12px"
  sp-4: "16px"
  sp-5: "24px"
  sp-6: "32px"
  sp-7: "48px"
  sp-8: "64px"
  sp-9: "96px"
  sp-10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.plate}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
  button-cta:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "20px 32px 16px"
    typography: "{typography.label}"
  button-cta-hover:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
  nav-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "8px 12px 7px"
    typography: "{typography.label}"
  nav-tag-accent:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.tag}"
    padding: "8px 12px 7px"
    typography: "{typography.label}"
  chip-tag:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "6px 12px"
    typography: "{typography.label}"
  service-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "24px"
  nameplate:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "8px 16px 9px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "12px"
  input-focus:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
---

# Design System: Flisz Roland E.V.

## Overview

**Creative North Star: "The Measured Toolboard"**

The page is a shop-floor tool layout photographed straight from above: raw painter's canvas as the ground, every object set on an explicit measured grid, a folding ruler along the bottom edge as proof that nothing was placed by eye. Order and measurement are the argument. The product promises a precise, reliable tradesman, so the surface itself is built to that standard — square borders, honest overlap, a single committed accent, nothing decorative that a real workbench would not carry.

The mood is workmanlike, dry, and confident. Depth is physical, never simulated: paper tags lift off the linen on one soft cast shadow and a degree or two of rotation, the way a real label sits when it is taped down. The palette is a warm cool-grey canvas, near-black ink, one masking-tape blue, and a rust marker used sparingly. Type splits cleanly in two: a stencil poster face for the few words that lead, a condensed grotesk for every label and number, and plain Archivo for running prose.

Confirmed rejections, from the direction contract: no smiling-painter-with-roller hero, no three-icon "Quality / Speed / Guarantee" cards, no stock before/after slider, no pseudo-3D, no gradients, no glow. Depth comes only from honest overlap plus one hard light direction.

**Key Characteristics:**
- Warm cool-grey canvas ground with a visible woven-linen texture (SVG feTurbulence, low opacity, multiply).
- One committed accent: masking-tape blue (#2c6fb0), owning nav-active, the primary CTA, section rules, and focus.
- Two-face type: Saira Stencil One for poster headlines and the name only; Archivo / Archivo Narrow for everything else.
- Every actionable element is a paper or kraft tag with a 2px ink border, tiny radius, and a slight rotation.
- Objects sit on an explicit measured grid (5-column process spine, 3-column service wall) with a visible ruler along the hero's bottom edge.
- Motion is a single load gesture ("pull the tape") plus scroll reveals, fully gated behind `prefers-reduced-motion`.

## Colors

A warm cool-grey canvas, near-black ink, one committed blue, and a rust marker — the palette of a taped-off worksite, not a brochure.

### Primary
- **Masking-Tape Blue** (`{colors.blue}`, #2c6fb0): the single chromatic voice. Owns the active nav tag (`.peg-tag--accent`), the primary phone plate (`.enamel`), the CTA hover state, section-rule and step-number accents, form focus rings and focused-input outline, and the translucent "tape" strip over the CTA (`rgba(44,111,176,.5)` with `mix-blend-mode: multiply`). The direction contract budgets it at roughly one third of key regions; hold to that.
- **Tape-Blue Deep** (`{colors.blue-deep}`, #1f5386): the accent nav tag's peg dot only — a darker seat for the blue.
- **Blue-Ink** (`{colors.blue-ink}`, #12324f): dashed edge lines on tape strips (`border-left/right: 1px dashed rgba(18,50,79,.4)`), applied as literal `rgba` rather than the token.

### Secondary
- **Rust** (`{colors.rust}`, #b0502c): a marker, never a surface to act on. Used for the corner "20+ years" stamp (border + text, `mix-blend-mode: multiply`, `opacity: .82`), the dashed placeholder callout (`.note-mark`: rust dashed border on a 5%-rust wash).

### Neutral
- **Linen** (`{colors.linen}`, #d9d6cb): the page ground and the hero board — the raw-canvas base tone; also the input background at rest.
- **Linen Deep** (`{colors.linen-deep}`, #cbc7b9): recessed full-bleed sections (`.section--about`) and the folding-ruler base strip.
- **Paper** (`{colors.paper}`, #f0ecdd): every actionable tag and panel surface — nav tags, the taped CTA, service tags, the quote form. Lifted above the linen ground for contrast.
- **Kraft** (`{colors.kraft}`, #c6a878): identity and process labels — the manila nameplate and the numbered process chips (`.chip-tag`). Kraft names and numbers; it never carries an action.
- **Ink** (`{colors.ink}`, #1c1b17): all primary text, the universal 2px border (`--edge`), peg dots, the footer field.
- **Ink Soft** (`{colors.ink-soft}`, #514c42): secondary and supporting text — ledes, tag descriptions, captions, the small-caps notes.

### Named Rules
**The One Accent Rule.** Masking-tape blue is the only chromatic voice and appears on at most about a third of any key region — nav-active, primary CTA, section rules, focus. A second accent hue is never introduced.

**The Rust-Marks-Never-Leads Rule.** Rust appears only as a stamp, a dashed placeholder callout, or a single highlighted word. It is never a button, link, surface, or heading color.

**The Paper-On-Linen Rule.** Anything a visitor acts on sits on `paper` (#f0ecdd) with a 2px ink border, lifted above the `linen` ground. `kraft` is reserved for identity and process labels and carries no action.

## Typography

**Display Font:** Saira Stencil One (with Archivo Narrow, system-ui fallback)
**Body Font:** Archivo (with system-ui, -apple-system, Segoe UI)
**Label / Condensed Font:** Archivo Narrow (with Archivo fallback)

**Character:** A spray-stencil poster face for the handful of words that lead, against a plain, hardworking grotesk for everything that explains. Archivo Narrow does all the shouting — uppercase, tracked, weight 700 — so the stencil never has to appear at label size.

### Hierarchy
- **Display** (Saira Stencil One 400, `clamp(34px, 6vw, 64px)`, line-height 0.95, tracking 0.01em): poster headlines (`.h-poster`), the hero H1 (`clamp(34px, 5vw, 58px)`, line-height 1.06), the business name in footer and stamp. Poster words only.
- **Headline** (Archivo Narrow 700, `clamp(26px, 4vw, 42px)`, line-height 1, tracking 0.02em): large process step numbers (`.step__no`, in blue) and the enamel phone number (`.enamel__num`, `clamp(21px, 2.4vw, 30px)`).
- **Title** (Archivo Narrow 700 uppercase, `clamp(17px, 2.2vw, 22px)`, tracking 0.03em): step subheads (`h3`), the about lead. Set uppercase.
- **Body Large** (Archivo 400, `clamp(16px, 1.9vw, 20px)`, line-height 1.5, ink-soft): section ledes, the about intro. Max ~46ch.
- **Body** (Archivo 400, `clamp(15px, 1vw + 12px, 17px)`, line-height 1.62): running paragraphs. Max ~60ch.
- **Label** (Archivo Narrow 700 uppercase, 10–16px, tracking 0.04–0.16em): nav tags (13px / 0.06em), process chips (`clamp(11px, 1.2vw, 13.5px)` / 0.04em), service-tag headings (16px), hero verb list (0.08em), form labels (12px / 0.05em), enamel label (11px / 0.16em), nameplate sub-line and ruler note (10px / 0.12em).

### Named Rules
**The Stencil-Leads-Only Rule.** Saira Stencil One is used only for poster headlines and the business name. Never body, never labels, never an eyebrow or kicker.

**The Narrow-For-Labels Rule.** Every uppercase label, step number, and button caption is Archivo Narrow 700. Plain Archivo carries running prose only; it never appears uppercase-tracked.

## Layout

Centered single column, `max-width: 1240px` (`--maxw`), with fluid section padding `clamp(48px, 7vw, 104px)` block and `clamp(16px, 4vw, 64px)` inline. The `--about` section goes full-bleed with its inner content re-constrained to the same max width.

Spacing runs on a fixed 10-step scale (`--sp-1` 4px through `--sp-10` 128px), roughly doubling to `--sp-8` then jumping for page-level rhythm. Component padding stays in the `--sp-3`–`--sp-5` band (12–24px); section rhythm uses `--sp-7`–`--sp-10`.

The hero is a full-viewport board (`min-height: 100vh`) with its content distributed top-to-bottom: pegged-string nav, masthead, five-column process spine (`grid-template-columns: repeat(5, 1fr)`), CTA row, and a folding-ruler strip pinned to the bottom edge. The service wall is `grid-template-columns: repeat(3, 1fr)`. Both grids are the visible proof of measurement — do not collapse them to flow layout on desktop.

Responsive behavior:
- **900px:** hero padding tightens, masthead un-constrains, process spine drops to 2 columns (last item spans both), CTA row goes vertical and full-width, the corner stamp moves inline to the flow, ruler note hides.
- **820px:** service wall goes to 2 columns.
- **560px:** hero inline padding drops to `--sp-4`, the ruler strip hides entirely, process steps stack vertically.
- **520px:** service wall goes to 1 column.

## Elevation & Depth

Depth is physical, not simulated. Every lifted element uses one soft, single-direction cast shadow (light from top, slightly right) plus literal overlap and a degree or two of rotation. No gradients, no glow, no blur-for-depth, no pseudo-3D. The woven-linen texture and the `mix-blend-mode: multiply` tape strips reinforce that everything is a physical layer on canvas.

### Shadow Vocabulary
- **Panel lift** (`box-shadow: 3px 10px 20px -6px rgba(24,22,18,.34)`, token `--shadow-hard`): CTAs (`.enamel`, `.taped-cta`), the quote form. The primary "this is taped down and lifting" shadow.
- **Tag lift** (`box-shadow: 2px 6px 12px -4px rgba(24,22,18,.28)`, token `--shadow-tag`): smaller tags — nav tags, process chips, nameplate, service tags.
- **Inked ring** (`box-shadow: inset 0 0 0 2px var(--linen), inset 0 0 0 3.5px rgba(176,80,44,.55)`): the corner "20+ years" stamp only — a double inset ring reading as a rubber-stamp impression.

### Named Rules
**The Honest-Overlap Rule.** Depth is conveyed only by real overlap, a slight rotation, and one cast shadow. If a treatment could not exist on a physical toolboard, it does not ship.

## Shapes

Rectilinear and worksite-plain. The universal border is `--edge` (`2px solid var(--ink)`) on every tag, panel, input, and most section dividers. Corner radius is deliberately minimal: 2px on tags, chips, nameplate and inputs (`{rounded.tag}`); 3px on service tags (`{rounded.panel}`); 7px on the enamel phone plate (`{rounded.plate}`); `50%` on peg dots, chip numerals, and the stamp. The taped-tape CTA has no radius at all — `{rounded.square}` — reading as a torn strip.

Recurring geometry: tags and tape ship rotated a small amount (default `-1.4deg`, sign alternating by `nth-child`), dashed "leader" lines (`repeating-linear-gradient`) connect tools to their labels, and a punched hole (`::after` circle with 2px ink border) sits at the top of each service tag where its string would pass through.

### Named Rules
**The Askew-Tag Rule.** Tags and tape are rotated one to two degrees, with the sign alternating across a run. Only structural type and grid lines sit perfectly straight.

**The Tiny-Radius Rule.** Corners stay at 2–3px (7px maximum on the enamel plate). The masking-tape CTA is fully square. No large or pill radii except true circles.

## Components

### Buttons
- **Shape:** the enamel phone plate is softly rounded (7px) with a 3px ink border; the taped CTA is a square paper strip (no radius) with a translucent blue tape strip pinned across its top.
- **Primary — Enamel phone plate** (`.enamel`): blue (#2c6fb0) fill, white text, `3px solid ink` border, `12px 24px` padding (`--sp-3 --sp-5`), panel-lift shadow. Stacks an uppercase 0.16em label over the number in Archivo Narrow. `--lg` variant enlarges the number to `clamp(24px, 3vw, 36px)`.
- **Primary — Taped CTA** (`.taped-cta`): paper fill, ink text, 2px ink border, `20px 32px 16px` padding, panel-lift shadow, rotated `-1.4deg`, with a `::before`-style tape strip (`.taped-cta__tape`, `rgba(44,111,176,.5)` multiply, dashed side edges).
- **Hover / Focus:** enamel lifts `translateY(-2px)` (0.16s ease). Taped CTA inverts to blue fill / white text and straightens (`rotate(0) translateY(-2px)`). `:focus-visible` everywhere is `3px solid var(--blue)` with 3px offset.
- **Submit variant** (`.taped-cta--submit`): same treatment, `cursor: pointer`, inherits Archivo Narrow uppercase.

### Chips
- **Process chip** (`.chip-tag`): kraft fill, 2px ink border, 2px radius, `6px 12px` padding, tag-lift shadow, rotated (`-1.5deg`, `1.6deg` on even items). Leads with a circular ink numeral (`b`: 17px, ink fill, linen text).
- Used only in the hero process spine, one chip per tool, connected up to its tool glyph by a dashed vertical leader line.

### Cards / Containers
- **Service tag** (`.wall__tag`): paper fill, 2px ink border, 3px radius, `24px` padding, `26px` top margin (to clear its tool glyph), tag-lift shadow, rotated (`-0.7deg`, varied by `nth-child`). A dashed leader (`::before`) and a punched hole (`::after`, linen fill + 2px ink border) sit at top center; the tool glyph (`.wall__tool`) floats above at `-30px`, rotated `-6deg`. Heading in 16px Archivo Narrow uppercase, description in 14.5px ink-soft.
- **Ask tag** (`.wall__tag--ask`): full-row blue fill, white text, no hole or leader — the "can't find it? call" closer.
- **Quote form** (`.quote`): paper fill, 2px ink border, no radius, `clamp(20px, 4vw, 48px)` padding, panel-lift shadow.

### Inputs / Fields
- **Style:** linen (#d9d6cb) fill, 2px ink border, 2px radius, `12px` padding, full width, inherited font. Label above in 12px Archivo Narrow uppercase 0.05em; optional marker (`.opt`) reverts to sentence case, ink-soft.
- **Focus:** `outline: 3px solid var(--blue)` with 2px offset, background lifts to white (#fff).
- **Textarea:** `resize: vertical` only.

### Navigation
- **Pegged-string nav** (`.clothesline` / `.peg-tag`): a dashed horizontal "string" (`repeating-linear-gradient`) with paper tags clipped to it, each carrying a circular ink "peg" (`::before`) at top center. Tags are 13px Archivo Narrow 700 uppercase 0.06em, 2px border, 2px radius, tag-lift shadow, rotated (`-1.4deg`, varied per child).
- **States:** default rotated and lifted; hover / focus straightens and drops (`rotate(0) translateY(2px)`). The active/destination tag uses `.peg-tag--accent` — blue fill, white text, blue-deep peg.
- **Mobile:** wraps; gap tightens at 560px. No hamburger — the tag row reflows.

### Taped Photo (signature)
`.hero-photo`: a `<figure>` polaroid — off-white stock (`#faf6ec`), `--edge` border, `10px 10px 40px` padding (thick chin), `--shadow-hard` panel lift, rotated `2.4deg` (`1.8deg` under 900px). Real photo inside with a `1px` ink hairline; `<figcaption>` set in the narrow label style (10px, uppercase, tracked) on the chin. Pinned by two blue tape strips (`.hero-photo__tape--tl` top-left, `--br` bottom-right — same `rgba(44,111,176,.5)` + `mix-blend-mode: multiply` + dashed short edges as the CTA tape), so it reads as stretched flat onto the board. Sits right of the masthead in `.hero-top` on desktop; stacks beneath it under 900px. This is the pattern for any future pinned photo — never a plain inline `<img>`.

### Two-Tone Tool Icons (signature)
Every process step and service tag carries a hand-printed **two-colour lino/screenprint tool illustration** — near-black ink #1C1B17 plus the masking-tape blue accent, flat fills, visible ink roughness and a slight registration offset, on a transparent background. Shipped as keyed PNGs in `images/` (`felmeres`, `letakaras`, `gletteles`, `festes`, `atadas`, `szobafestes`, `tapetazas`, `dekorfestes`, `koburkolat`), placed in a `.spine__tool` / `.wall__tool` box at 40–50px and joined to their label by a dashed leader line. New icons must match that exact print style and palette. The one remaining inline SVG is `#t-check` (the Rólam "precíz munka" tick). No icon font, no third-party set.

### Canvas Weave (signature texture)
`.board__weave`: an inline SVG data-URI running two crossed `feTurbulence` filters (warp `baseFrequency 0.16 0.02`, weft `0.02 0.16`, desaturated), tiled at 120px, `mix-blend-mode: multiply`, `opacity: .3` (`.board__weave--soft` at `.18`). Ground texture only; never over text.

## Do's and Don'ts

### Do:
- **Do** keep masking-tape blue (#2c6fb0) on at most ~1/3 of key regions: nav-active, primary CTA, section rules, focus rings.
- **Do** put every actionable element on a `paper` (#f0ecdd) surface with `--edge` (`2px solid var(--ink)`) and a 1–2° rotation; reserve `kraft` for identity and process labels.
- **Do** use Saira Stencil One only for poster headlines and the business name; set all labels, numbers, and button captions in Archivo Narrow 700 uppercase.
- **Do** render tools as hand-printed two-colour lino/screenprint illustrations (ink + tape-blue, flat, transparent PNG), placed on the measured grid and joined to their label by a dashed leader line.
- **Do** convey depth with one cast shadow (`--shadow-hard` / `--shadow-tag`), real overlap, and rotation — nothing else.
- **Do** keep the canvas weave at `opacity` 0.18–0.3 with `mix-blend-mode: multiply`, as ground texture only.
- **Do** gate every animation behind `@media (prefers-reduced-motion: no-preference)` and ship the static layout as the baseline.
- **Do** keep the hero grids explicit (5-column spine, 3-column wall) and the folding ruler visible on desktop as proof of measurement.

### Don't:
- **Don't** introduce a second accent hue. Rust is a marker (stamp, dashed callout, one highlighted word), never a button, link, or surface.
- **Don't** use gradients, glow, backdrop blur, or pseudo-3D for depth.
- **Don't** set the stencil face in body copy, labels, or as an eyebrow / kicker.
- **Don't** pin tags perfectly straight or give them large / pill radii; corners stay 2–3px (7px max on the enamel plate), and the taped CTA stays fully square.
- **Don't** add an icon font or third-party icon set; make new icons in the same two-colour print style as the `images/` set.
- **Don't** collapse the hero process spine or service wall to flow layout on desktop — the grid is the argument.
