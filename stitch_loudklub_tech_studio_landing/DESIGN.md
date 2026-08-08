---
name: LoudKlub Cyber-Studio
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#f6f7ff'
  on-tertiary: '#29313d'
  tertiary-container: '#d4dbec'
  on-tertiary-container: '#58606e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dbe3f3'
  tertiary-fixed-dim: '#bfc7d7'
  on-tertiary-fixed: '#141c28'
  on-tertiary-fixed-variant: '#3f4754'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
  glossy-gradient-start: '#00dbe7'
  glossy-gradient-end: '#0566d9'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1440px
---

## Brand & Style
The brand personality is high-energy, technical, and forward-looking, targeting developers, AI enthusiasts, and tech-forward builders. The aesthetic is a sophisticated blend of **Glassmorphism** and **Vaporwave-inspired Futurism**.

The UI should evoke a sense of "building in the future"—clean, precise, but with high-intensity visual accents. Key characteristics include:
- **Neon Accents:** Controlled use of high-saturation cyan and blue glows.
- **Translucency:** Depth is created through blurred, frosted-glass layers rather than solid fills.
- **Technical Precision:** Use of monospaced fonts and grid-pattern overlays to reinforce a "studio" or "workbench" atmosphere.
- **Dynamic Energy:** Subtle animations (pulses, gradient shifts) and high-contrast typography to create "noise" in a structured, purposeful way.

## Colors
The palette is rooted in a deep, nocturnal base (`#030914`) to allow neon accents to pop without causing eye strain. 

- **Primary Neon:** Use `#00f2ff` for interactive elements, primary branding, and glow effects.
- **Deep Blue Secondary:** Use `#3b82f6` for secondary actions and to balance the high-frequency cyan.
- **Atmospheric Backgrounds:** Instead of flat black, use a linear gradient from `#030914` to `#101415` with a subtle radial glow at the top.
- **Functional Accents:** Use high-contrast gradients (Cyan to Royal Blue) for call-to-action buttons to create a "glossy" physical presence.

## Typography
Typography is used as a structural element. 
- **Headlines:** Use **Geist** with tight tracking and heavy weights. Apply gradient masks (`on-surface` to `surface-tint`) to primary headings to create a metallic, futuristic look.
- **Body Text:** **Inter** provides high legibility against dark backgrounds. Use `on-surface-variant` for long-form content to reduce contrast harshness.
- **Utility & Metadata:** **JetBrains Mono** should be used for all labels, tags, and navigation items in uppercase to emphasize the technical "studio" vibe.

## Layout & Spacing
The system uses a **Fixed Grid** approach for desktop and a **Fluid Fluid** approach for mobile.

- **Grid:** A 12-column layout with 24px gutters. Content should be centered within a 1440px max-width container.
- **Rhythm:** Spacing is strictly based on a 4px unit. 
- **Verticality:** Use generous vertical padding (80px - 120px) between sections to allow the background glows and glass elements room to breathe.
- **Card Spacing:** Use an asymmetrical "staggered" layout for grid items (e.g., vertical offsets of 32px or 64px) to create a more dynamic, less corporate flow.

## Elevation & Depth
Hierarchy is established through **Glassmorphism** and light-based layering:
- **Level 0 (Base):** Dark gradient background with a 40px grid pattern overlay at 10% opacity.
- **Level 1 (Surface):** 40% opaque surfaces with a 20px backdrop blur and a thin `surface-tint/15` border.
- **Level 2 (Interactive):** Glossy buttons with `inset` white shadows to simulate a top-down light source and external glows (`drop-shadow`) to simulate emitted neon light.
- **Accents:** Use blur-masks (100px+) for large, non-structural background glows that sit behind content to guide the eye.

## Shapes
The shape language is a mix of high-precision geometric corners and organic "pill" shapes for interactions.
- **Cards:** Use `rounded-2xl` (1rem / 16px) for main containers to keep the technical look friendly.
- **Interactive Elements:** Buttons, tags, and search bars use a full "pill" radius (`rounded-full`) to clearly distinguish them from structural layout cards.
- **Iconography:** Icons should be enclosed in `rounded-xl` containers with subtle borders to mimic modular hardware components.

## Components
- **Glossy Buttons:** Apply a linear gradient (Cyan to Blue), a 20px cyan outer glow, and a 1px white semi-transparent top-inset border. Text must be uppercase monospaced.
- **Glass Cards:** Background `rgba(16, 20, 21, 0.4)`, backdrop-blur 20px, and a 1px border. Add a 2px animated gradient border on hover.
- **Pill Tags:** Low-opacity background of the primary color, uppercase mono text, and a pulse-animated dot for "live" or "status" indicators.
- **Icons:** Use Material Symbols (Outlined) with a thin weight (200-300). Apply a `surface-tint` color or neon glow to the icon itself.
- **Navigation:** Fixed header with a "glass-nav" effect—heavy blur and a distinct bottom border to separate the content as it scrolls.