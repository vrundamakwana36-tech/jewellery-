# Maison d’Or — Haute Joaillerie Solitaire Showroom

An interactive luxury web application honoring the artistry of high jewelry, designed to evoke standing in a private Paris atelier at candlelight.

---

## Atelier Aesthetic & Design Architecture

### 1. Cormorant Garamond Italic Typography
- **Display Typography**: Google Fonts `Cormorant Garamond` (300 / 400 italic weights) for headings, quote sections, and narrative titles.
- **Accompanying Type**: `Plus Jakarta Sans` for clean metallurgical specifications, metadata badges, and navigation micro-labels (`letter-spacing: 0.2em - 0.28em`, uppercase).
- **Branding Monogram**: `Cinzel` for classical Roman luxury proportions.

### 2. Warm Champagne-Gold Radial Glow Behind Canvas (Mandatory Spec)
- **CSS Formula**:
  ```css
  radial-gradient(circle at center, rgba(212, 175, 55, 0.07) 0%, rgba(212, 175, 55, 0.04) 35%, rgba(212, 175, 55, 0.015) 55%, transparent 72%)
  ```
- Positioned directly behind the central interactive HTML5 canvas, pulsating with subtle candlelight breathing physics (`canvasGlowBreath`).

### 3. Grain Texture Overlay at 4% Opacity
- SVG procedural fractal noise overlay fixed across the viewport at `opacity: 0.04`, creating a vintage cinematic emulsion texture without obstructing interactions (`pointer-events: none`).

### 4. Custom Luxury Cursor
- Precision inner gold dot (`5px`) paired with a lagging outer gold ring (`26px`).
- **48px Scaling on CTA Hover**: When hovering over CTAs, interactive cards, and navigation links, the outer ring smoothly expands to **48px** with an intensified champagne glow and subtle backdrop blur.

### 5. Scroll Progress Bar
- Fixed top progress bar in a champagne gold gradient:
  ```css
  linear-gradient(90deg, #997B28 0%, #D4AF37 50%, #F5E8C7 75%, #D4AF37 100%)
  ```
  Accurately tracks window scroll progress with a gold ambient drop shadow.

### 6. Frame Preloading Screen
- Preloads all **38 high-definition frames** (`frame_001.png` to `frame_038.png`) into browser memory before rendering.
- Displays a champagne gold progress track and a live percentage counter (`0%` to `100%`) with graceful fade-out transition.

### 7. Interactive HTML5 Canvas & 4 Narrative Sections
Scrubbing is mapped smoothly to scroll position with requestAnimationFrame interpolation across 4 precise milestones:
- **Section 1 (0% – 22%)**: *The Solitaire* — 3.50 Carats, Color D Flawless, Atelier 6-Prong.
- **Section 2 (26% – 48%)**: *Fifty-Eight Facets of Light* — 0.01mm Optical Precision, 2.417 Refractive Index, Ideal Symmetry.
- **Section 3 (52% – 74%)**: *Sculpted 18K Champagne Gold* — 750‰ Pure Gold with trace palladium, micro-beveled comfort profile.
- **Section 4 (78% – 100%)**: *A Legacy in Solitude* — Six weeks of solitary benchwork by a single master jeweler, with "Request Private Viewing" CTA.

### 8. Craftsmanship Section (3 Columns)
1. **The Lapidary’s Hand**: 0.01mm optical precision, diamond-dust laps, 40-hour polish.
2. **Lost-Wax Forging**: Cire perdue method, 18K 750 alloyed gold, manual agate burnishing.
3. **The Atelier Hallmark**: Official French Bureau de Garantie eagle head hallmark, lifetime ledger registry.

### 9. Process Quote Section
- Atmospheric sanctuary setting with warm candlelight back-glow and oversized champagne quote flourishes:
  > *"In the stillness of the atelier, gold is not merely shaped—it is persuaded to surrender to light, until the metal forgets its weight and the diamond forgets the earth."*
  > — **Jean-Luc Vane**, *Maître Joaillier, Atelier Place Vendôme*

### 10. Materials Section (3 Exact Cards)
1. **100% Conflict-Free Diamonds**: Kimberley Process System of Warranties & digital blockchain chain-of-custody.
2. **18K Hallmarked Gold**: 750‰ purity alloyed with palladium, hand-stamped with the French eagle assay mark.
3. **0% Compromise**: Single artisan dedication, 2-micron maximum tolerance, recasting on any flaw.

### 11. Private Viewing Modal & Atelier Ambience
- Interactive consultation scheduler with salon reception options (Paris Place Vendôme, London New Bond St, New York 5th Ave).
- Interactive Candlelight Ambience toggle in navigation to intensify candlelight flickers.
- Harmonic Web Audio chime toggle using Solfeggio golden ratio frequencies.

---

## Running the Application

### Option A: Next.js Server
Run via the included launcher:
```cmd
dev.cmd
```
Or via npm:
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.

### Option B: Ultra-Reliable PowerShell Static Server
Run the built static export directly without dependencies:
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1 -port 8080
```
Open **http://127.0.0.1:8080** in your browser.
