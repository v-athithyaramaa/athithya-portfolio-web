git init
git add package.json package-lock.json next.config.mjs tsconfig.json tailwind.config.ts postcss.config.mjs components.json src/app/globals.css src/app/layout.tsx .eslintrc.json .gitignore
git commit -m "chore: initialize project configuration and core layouts"

git add src/components/ui
git commit -m "feat: add shadcn/ui primitive components"

git add src/components/FloatingDock.tsx src/components/Navbar.tsx src/components/CommandPalette.tsx src/components/CustomCursor.tsx src/components/PremiumCursor.tsx src/components/NoiseOverlay.tsx src/components/PageTransition.tsx src/components/Loader.tsx
git commit -m "feat: implement global navigation and layout wrappers"

git add src/components/HeroCover.tsx src/components/AnimLetters.tsx src/components/MagneticButton.tsx src/components/PixelSprite.tsx
git commit -m "feat: build architectural hero section and typography animations"

git add src/components/TelemetryAbout.tsx src/components/HoloBadge.tsx
git commit -m "feat: develop telemetry and about identity components"

git add src/components/EngineeringGallery.tsx src/components/CleanTimelineCard.tsx src/components/CleanSystemsGrid.tsx
git commit -m "feat: integrate case files and engineering history grid"

git add src/components/SystemsToolkit.tsx src/components/TechMarquee.tsx src/components/Marquee.tsx src/components/CircuitTracer.tsx src/components/NeuralToolkit.tsx
git commit -m "feat: implement tech stack marquee and systems toolkits"

git add src/components/SystemConsole.tsx
git commit -m "feat: build interactive system terminal console"

git add src/components/RamaaArrow.tsx src/components/TensionScroll.tsx
git commit -m "feat: add scroll progress indicators and astra animations"

git add src/components/BeyondTheCode.tsx src/components/SystemBlueprint.tsx src/components/ArchitectManifesto.tsx src/components/ArchitectTerminal.tsx src/components/BrainTrust.tsx src/components/GlobalAtlas.tsx src/components/Grandmaster.tsx src/components/OSDashboard.tsx src/components/PageHeader.tsx src/components/StampBlock.tsx src/components/SystemOverloadFooter.tsx src/components/PremiumFooter.tsx
git commit -m "feat: add auxiliary components and footer sections"

git add .
git commit -m "feat: finalize main page assembly and add all remaining assets"

git status
