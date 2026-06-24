# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite HMR)
npm run build    # Production build to /dist
npm run lint     # ESLint
npm run preview  # Preview prod build
```

## Tech Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- React Router DOM 7
- Lucide React for icons
- Path alias: `@/*` → `./src/*`

## Architecture

**Marketing site for Infinititech Partners** - heavy animation focus, dark theme, custom cursor.

### Component Layers

1. **effects/** - Canvas-based visuals (ParticleField, AuroraBackground, CustomCursor, Constellation)
   - ParticleField runs 300 particles with physics/connections per frame
   - CustomCursor replaces OS cursor globally

2. **ui/** - Interactive primitives (SplitText, MagneticButton, TiltCard, ParallaxLayer, BlurText, Icon)
   - All use IntersectionObserver or mouse tracking for animations
   - `Icon` component wraps Lucide icons - add new icons to `iconMap` in `Icon.tsx`
   - `SplitText` animates text character-by-character on scroll into view

3. **sections/** - Page sections (Hero, About, Services, Products, Portfolio, Process, Team, Contact)
   - Data-driven from `data/data.tsx`

4. **pages/** - Route views composing sections
   - HomePage stacks all sections sequentially
   - Other pages use `PageLayout` wrapper with hero section
   - `PageLayout` provides tag, title, titleAccent, description props

5. **common/** - Shared layout components (PageLayout, Header, Footer)

### Hooks

- `useInView` - IntersectionObserver wrapper for scroll triggers
- `useMousePosition` - Real-time mouse coords
- `useParallax` - Scroll-based offset

### Styling

- `styles/globals.css` - Tailwind + CSS variables + all custom animations
- Design tokens: `--color-primary: #00ffcc`, `--color-secondary: #ff6b35`, `--color-accent: #667eea`, `--color-bg: #080c15`
- Fonts: Clash Display (headings), Satoshi (body), JetBrains Mono (code)

### Key Patterns

- Section headers use `section-header` div + `section-title` h2 + `SplitText` for animated text
- Use `SplitText` with `className="accent"` for gradient-colored text
- Wrap content in `ParallaxLayer` with `speed` prop for scroll parallax
- Text starts invisible (`opacity: 0`) and animates in via `useInView` hook
- **CRITICAL:** Page CTA sections (`.page-cta-section`) MUST wrap content in `<ParallaxLayer speed={0.1}>` - without it, text elements won't render. Use `<h2>` for title, not `<p>`

### Data

- All static content in `data/data.tsx` with TypeScript interfaces
- Exports: navItems, footerLinks, contactInfo, socialLinks, whyChooseUs, values, stats, services, products, projects, processSteps, team, about* exports
- No state management lib - direct imports where needed

### Newsletter / Insights posts

- Blog posts ("News Letter" in the nav → `/insights`) live in `data/insights.ts` as `Insight` objects; the list + detail pages are fully data-driven.
- **Every post MUST have a supporting image.** `Insight.image` is a required field (path under `/public`, e.g. `/insights/<slug>.svg`) — the build fails without it. Add a 1200x630 on-brand hero image per post; existing ones are themed SVGs in `public/insights/`.
- Each post auto-gets BlogPosting + BreadcrumbList schema and a contact CTA. Add new posts to `public/sitemap.xml` too.
- **For AI visibility (LLM answer engines), add 3 FAQ entries per post to `data/insight-faqs.ts`** (keyed by slug). These render a visible "Frequently asked questions" block and a `FAQPage` JSON-LD node (merged into the post's `@graph`). Questions must be phrased as real search queries; answers 2–4 sentences, grounded strictly in the article. Also list the new post in `public/llms.txt` under the right section.
