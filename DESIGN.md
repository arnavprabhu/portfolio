---
name: Finance & AI (Swiss Poster)
source: claude.ai/design — "Arnav Prabhu Portfolio.dc.html"
colors:
  light:
    bg: '#ecebe7'
    ink: '#0e0e0e'
    mute: '#5f5f5b'
    rule: '#0e0e0e'
    accent: 'oklch(0.57 0.2 32)'
  dark:
    bg: '#0e0e0e'
    ink: '#ecebe7'
    mute: '#8d8d88'
    rule: '#ecebe7'
    accent: 'oklch(0.7 0.19 32)'
  on-accent: '#ffffff'
typography:
  family: Archivo (variable, wdth + wght axes)
  display-hero:
    fontSize: clamp(84px, 22.5vw, 300px)
    fontWeight: '900'
    fontStretch: 72%
    lineHeight: '0.8'
    letterSpacing: -0.03em
    textTransform: uppercase
  display-project:
    fontSize: clamp(64px, 12.5vw, 160px)
    fontWeight: '900'
    fontStretch: 72%
    lineHeight: '0.85'
    letterSpacing: -0.02em
    textTransform: uppercase
  display-contact:
    fontSize: clamp(56px, 10.5vw, 132px)
    fontWeight: '900'
    fontStretch: 72%
    lineHeight: '1.05'
    textTransform: uppercase
  display-number:
    fontSize: clamp(88px, 9vw, 120px)
    fontWeight: '900'
    fontStretch: 72%
    lineHeight: '0.9'
  heading-group:
    fontSize: clamp(44px, 4.5vw, 56px)
    fontWeight: '800'
    fontStretch: 80%
    lineHeight: '1'
    textTransform: uppercase
  lead:
    fontSize: clamp(24px, 3.2vw, 42px)
    fontWeight: '500'
    lineHeight: '1.15'
    letterSpacing: -0.015em
  body:
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.4–1.7'
  label:
    fontSize: 14px
    fontWeight: '700'
    textTransform: uppercase
  nav:
    fontSize: 14px
    fontWeight: '600'
    letterSpacing: 0.02em
    textTransform: uppercase
spacing:
  gutter: clamp(20px, 4vw, 48px)
  section-y: clamp(40px, 6vw, 64px)
  rule-major: 2px
  rule-minor: 1px
---

## Brand & Style
A Swiss / International-style poster. The page is one tall sheet of warm paper, cut into bands by heavy black rules. Headlines are huge, condensed and uppercase, and set tight enough that the words read as blocks of ink. A single red accent carries meaning: the ampersand in "Finance & AI", the "Open to roles" chip, the numbers, and the hovered project. There are no cards, shadows, gradients, icons or rounded corners.

## Colors
Four neutrals and one accent. The accent is defined in `oklch` so it keeps the same perceived hue in both themes.

| Token | Light (default) | Dark |
| --- | --- | --- |
| `--bg` | `#ECEBE7` | `#0E0E0E` |
| `--ink` | `#0E0E0E` | `#ECEBE7` |
| `--mute` | `#5F5F5B` | `#8D8D88` |
| `--rule` | `#0E0E0E` | `#ECEBE7` |
| `--acc` | `oklch(0.57 0.2 32)` | `oklch(0.7 0.19 32)` |

- Text on the accent is always white (`--on-acc`).
- `--mute` is for secondary information: the nav meta, the "Also" skill group, proof lines and the footer row.
- **Theme:** light is the default. The toggle sets `data-theme="dark"` on `<html>`, and the choice is stored in `localStorage` under `theme`. A `beforeInteractive` script applies it before paint. Tailwind colors (`bg`, `ink`, `mute`, `rule`, `acc`, `on-acc`) map to these variables in `globals.css`.

## Typography
One family: **Archivo**, loaded via `next/font` with the `wdth` axis.

- **Display** (`.display`): weight 900 at 72% width, uppercase, with line-height below 1. It's used for the hero, project names, contact links, the Applied AI numbers and page titles such as "PRIVACY.".
- **Group headings**: weight 800 at 80% width. Slightly wider, so they sit below display in the hierarchy.
- **Lead**: weight 500, fluid 24–42px, slightly negative tracking. It's used for the About statement and the hero tagline.
- **Label** (`.label`): 14px, weight 700, uppercase. This is every section name ("About", "Skills", "01 — RAG Systems").
- **Body**: 16–20px regular.

## Layout & Spacing
- Horizontal padding is a single fluid gutter (`.gutter`, `clamp(20px, 4vw, 48px)`). There's no max-width: bands run edge to edge.
- Each major section is a `.section`: a 2px `--rule` top border plus `clamp(40px, 6vw, 64px)` vertical padding.
- **Label + content row:** a `flex-wrap` row with the label at `flex: 1 1 200px` and the content at `flex: 3 1 560px`. On narrow screens it collapses to a stack with no breakpoints. Used by About, Skills and every privacy-policy section.
- Grids use `repeat(auto-fit, minmax(min(100%, 200–220px), 1fr))`.
- 1px rules divide items inside a section: project rows, Applied AI columns, contact links and privacy sections.

## Motion
- **Reveal:** below-the-fold `[data-reveal]` elements start at `opacity: 0; translateY(24px)` and ease in over 0.8s (`cubic-bezier(.2,.7,.2,1)`) when they enter the viewport. Content already on screen at load is never hidden.
- **Project hover:** the row fills with `--acc`, the text turns white (0.25s), and the description, detail and stack expand. On touch devices every row stays expanded.
- **Links** dim to 75% opacity on hover.
- **The "Open to roles" dot** pulses a white ring every 1.8s.
- **Reduced motion** disables the reveal, the pulse and smooth scrolling.

## Components
- **Nav:** three clusters in a wrapping flex row: name, mute meta ("Finance / Analytics & AI", "UT Dallas"), then the links and theme toggle. The toggle is a solid ink block with bg-colored text ("☾ Dark" / "☀ Light").
- **Status chip:** accent fill, white 14px bold text with 0.06em tracking, and a pulsing white dot.
- **Project row:** a full-width link with the name in display type on the left and "NN — Skill" as a label on the right, aligned to the baseline.
- **Numbered capability:** 1px top rule, an accent display numeral, a 22px bold title, and a mute proof line.
- **Contact link:** a display-size word with an accent `↗` on the right, above a 1px bottom rule.
- **Footer row:** 13px, weight 600, uppercase, mute, spread with `justify-content: space-between`. It includes the Privacy link.
- **Favicon:** white "AP" in Archivo 900 on the accent (`#D33318`), generated by `npm run generate:favicons`.
