---
name: Monolith Precision
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1d'
  surface-container: '#1e2021'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e4'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e2e2e4'
  inverse-on-surface: '#2f3132'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#98d59f'
  on-tertiary: '#003916'
  tertiary-container: '#000000'
  on-tertiary-container: '#488153'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#b3f1b9'
  tertiary-fixed-dim: '#98d59f'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#175128'
  background: '#111415'
  on-background: '#e2e2e4'
  surface-variant: '#333537'
  mint-green: '#ADEBB3'
  gray-muted: '#86868B'
  surface-dark: '#0A0A0A'
  light-background: '#F5F5F7'
  light-surface: '#FFFFFF'
  light-on-surface: '#1A1A1A'
typography:
  display-hero:
    fontFamily: Instrument Serif
    fontSize: 96px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Instrument Serif
    fontSize: 56px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Instrument Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Instrument Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Roboto Serif
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Roboto Serif
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  meta-technical:
    fontFamily: Pixelify Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-caps:
    fontFamily: Roboto Serif
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  unit: 4px
  gutter: 1px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style
This design system embodies the intersection of high-stakes finance, artificial intelligence, and architectural strategy. It is built for a personal brand that demands the same rigor and aesthetic precision as a BMW Individual specification: high-performance, exclusive, and engineered to the millimeter.

The visual style is **Cinematic Minimalism**. It avoids the soft, friendly tropes of modern SaaS in favor of a sharp, authoritative, and slightly experimental "editorial" look. The aesthetic relies on extreme negative space, sophisticated serif pairings, and a strict adherence to 1px geometric structures. The goal is to evoke an emotional response of calculated intelligence and quiet luxury—where every pixel is intentional and every interaction feels like a deliberate movement in a high-end physical space.

## Colors
The palette is rooted in a "void and light" philosophy. The primary environment is a deep, absolute black (`#000000`), providing a cinematic backdrop that allows content to emerge with high contrast.

### Light and dark mode
Two theme layers share the same structure (hairlines, mint accent, sharp corners); only tonal tokens change.

| Token | Dark (default) | Light |
| --- | --- | --- |
| Background | `#111415` | `#E8E8EC` |
| Surface / footer / nav | `#0A0A0A` | `#F3F3F6` |
| Primary text | `#E2E2E4` | `#2F3132` |
| Secondary text | `#B8B4B5` | `#5C5F63` |
| Hairlines | `rgba(255,255,255,0.1)` | `rgba(47,49,50,0.12)` |
| Accent (labels, links) | `#ADEBB3` | `#2A6B3C` |
| Accent fill (hovers, chips) | `#ADEBB3` | `#3D8A52` |

- **Default:** Dark mode (brand cinematic look). Preference is stored in `localStorage` under `theme`.
- **Toggle:** Fixed in the header — square control, 1px border, Material icon (`light_mode` / `dark_mode`), mint on hover. No border radius.
- **Implementation:** Dark tokens live on `:root` (default). Light mode adds a `light` class on `<html>`. CSS variables (`--theme-*`) drive Tailwind semantic colors. A blocking script in the document head applies any saved preference before paint. 

The primary accent is **BMW Individual W97 Mint Green**, used sparingly to highlight data points, strategic insights, and interactive nodes. This specific green provides a technical, "night-vision" precision that feels more premium than standard neons. White (`#FFFFFF`) and an off-white neutral (`#F5F5F7`) are used for primary and secondary text respectively, ensuring clarity and an expensive, "unprinted" editorial feel.

## Typography
The typographic hierarchy creates a tension between the classic and the futuristic. 

**Instrument Serif** is the voice of the brand—used for large-scale headlines and hero statements. It should be typeset with tight tracking to emphasize its elegant, vertical forms. 

**Roboto Serif** provides a grounded, analytical readability for body copy, mimicking high-end financial journals. 

**Pixelify Sans** acts as the "technical layer," used exclusively for micro-metadata, section numbering (e.g., 01, 02), and AI-generated status tags. This creates a subtle "glitch in the luxury" feel, signaling the brand's technological edge.

## Layout & Spacing
The layout follows an **Architectural Fixed Grid**. Content is housed within a 12-column grid system where the gutters are not empty space, but visible **1px fine lines** (Hairlines) in `rgba(255, 255, 255, 0.1)`. 

Vertical spacing is aggressive, using a "Less is More" philosophy to create focus. Sections should be separated by large gaps (`160px+`) to allow each concept to breathe. Content reflow for mobile should maintain the 1px border philosophy, converting the multi-column desktop grid into a single-column stack defined by horizontal hair-lines. All elements should align to a strict 4px baseline grid to ensure mathematical precision.

## Elevation & Depth
In this system, depth is achieved through **Tonal Layering** and **Transparency**, never through shadows.

- **The Base:** Absolute black (`#000000`).
- **The Surface:** A slightly elevated dark gray (`#0A0A0A`) for container-like areas, separated only by 1px borders.
- **Glassmorphism:** Used for navigation bars and overlays. Use a high-density backdrop blur (30px) with a very low opacity white tint (3%) to simulate expensive smoked glass.
- **Fine Lines:** Depth is signaled by the intersection of 1px lines. Where lines cross, a small 4x4px "Mint Green" pixel may be placed to indicate a structural node or interactive anchor.

## Shapes
Shapes are strictly **Sharp (0px)**. To maintain the BMW-inspired precision and architectural feel, avoid all rounded corners. Rectangular containers, buttons, and image masks must have crisp 90-degree angles. This reinforces a sense of rigid, engineered structure and differentiates the UI from the "bubble-like" aesthetics of consumer apps.

## Components
- **Buttons:** Rectangular with a 1px white border. On hover, the background fills with Mint Green (`#ADEBB3`) and the text flips to Black. No transition easing—interaction should be instantaneous and "mechanical."
- **Input Fields:** A single 1px line at the bottom. The label sits above in `Pixelify Sans`. When active, the bottom line turns Mint Green.
- **Cards:** Defined by 1px borders on all sides. Do not use background fills unless highlighting a specific "Active" state. The card title should use `Instrument Serif` and the metadata should use `Pixelify Sans` in the top-right corner.
- **Chips/Status:** Small rectangular boxes with `Pixelify Sans` text. Use Mint Green text on a black background to indicate "Live" or "AI-Processed" data.
- **Data Visualizations:** Use 1px line charts. Points of interest should be marked with a single Mint Green pixel. No fills under the lines; keep the aesthetic skeletal and precise.
- **Navigation:** A fixed top bar with a 30px backdrop blur and a 1px bottom border. Links are in `Roboto Serif` (caps), turning to Mint Green on hover. Include the **theme toggle** to the left of the primary CTA.
- **Theme toggle:** 48×48px, `Pixelify Sans` optional label omitted (icon-only). Border uses hairline token; hover border/text mint. Instant mechanical feedback (`scale(0.98)` on press).
- **Legal pages:** Use the same grid, hairlines, and typography as content sections (`Instrument Serif` headings, `Roboto Serif` body, `Pixelify Sans` meta labels). Footer includes a conspicuous **Privacy Policy** link (`/privacy`).