---
name: frontend-design
description: Guidelines and context for building the next-gen architectural portfolio.
---

# Next-Gen Architectural Portfolio Context

## Visual & Interactive Masterpiece
- **Theme**: "Architectural Blueprint Revision" - elevated, high-end, premium.
- **Aesthetics**: Dark mode, technical line/arrow drawings, negative space, modular grid lines, blueprint-style "issued for review" tags.
- **Micro-interactions**: Hover states for custom buttons, active stamp blocks, live local time/status tickers.
- **Navigation**: Command Palette (`Ctrl + K` / `Cmd + K`).

## Stack
- Next.js (App Router, Turbopack)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Rules
- No manual `package.json` creation. Use `npx` / `npm` commands exclusively.
- All code must be strictly typed.
- Components must be clean, modular, and use `clsx` + `tailwind-merge` for style overrides.
