---
name: Monolith Precision
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1d'
  surface-container: '#212325'
  surface-container-high: '#2b2d30'
  surface-container-highest: '#37393b'
  on-surface: '#ffffff'
  on-surface-variant: '#c4c7c5'
  outline: '#8e918f'
  outline-variant: '#444746'
  primary: '#adebb3'
  on-primary: '#003919'
  primary-container: '#005226'
  on-primary-container: '#c9f1cf'
  secondary: '#b3ccbe'
  on-secondary: '#1e352b'
  secondary-container: '#354c41'
  on-secondary-container: '#cee8d9'
  tertiary: '#a5ccd0'
  on-tertiary: '#073538'
  tertiary-container: '#234c50'
  on-tertiary-container: '#c0e9ec'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  mint-green: '#ADEBB3'

typography:
  display-large:
    font: Instrument Serif
    weight: 400
    size: 96px
    line-height: 1.1
    letter-spacing: -0.02em
  headline-large:
    font: Instrument Serif
    weight: 400
    size: 64px
    line-height: 1.2
  body-large:
    font: Roboto Serif
    weight: 400
    size: 18px
    line-height: 1.6
  label-technical:
    font: Pixelify Sans
    weight: 400
    size: 12px
    line-height: 1.0
    letter-spacing: 0.1em
    text-transform: uppercase

spacing:
  section-gap: 160px
  element-gap: 32px
  margin-desktop: 80px

components:
  Navigation:
    style: Minimal, sticky, background-blur
    links: uppercase, Roboto Serif, hover:mint-green
  ProjectCard:
    style: Editorial, sharp corners, 1px borders
    hover: 1.02x scale, spotlight glow, mint accent
  Button:
    style: Mechanical, instantaneous color swap
    font: Pixelify Sans

motion:
  timing: Smooth, cinematic
  effects: Terminal-reveal loading, scroll-triggered drawing lines, cursor-following highlights
---

# Monolith Precision

A premium, cinematic design system bridging the worlds of high-end finance and artificial intelligence. Inspired by the surgical precision of BMW Individual's W97 Mint Green, this system emphasizes negative space, high-contrast typography, and architectural layouts.

## Visual Principles

- **Luxury Finance Aesthetic:** Deep black surfaces with surgical 1px borders.
- **AI-Driven Intelligence:** Technical micro-details using Pixelify Sans and animated data-inspired backgrounds.
- **Editorial Precision:** High-contrast serif headlines paired with restrained, readable body copy.
- **Intentional Motion:** Animations that feel mechanical and precise, never distracting.

## Typography

### Instrument Serif
Used for oversized hero headlines, section titles, and major pull-quotes. It conveys elegance and tradition within a modern context.

### Roboto Serif
The primary choice for body text, project summaries, and navigational links. It provides an editorial feel and high readability.

### Pixelify Sans
Used sparingly for technical metadata, status labels (e.g., "AVAILABLE / ANALYZING"), and section numbers. It adds a layer of "digital precision" to the luxury aesthetic.

## Color Palette

The system is locked to a dark mode default to maintain its cinematic quality.

- **Primary Canvas:** `#111415` (Deep Charcoal/Black)
- **Primary Text:** `#FFFFFF` (Pure White)
- **Accent:** `#ADEBB3` (BMW W97 Mint Green) — used for indicators, highlights, and active states.

## Component Patterns

- **Structural Grid:** Generous margins and asymmetrical layouts that avoid standard SaaS patterns.
- **Sharp Edges:** No rounded corners; the system favors an architectural, "built" look.
- **Micro-interactions:** Hover states use mint-green underlines and spotlight glows to guide focus without clutter.