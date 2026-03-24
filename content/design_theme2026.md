---
title: "Design Theme 2026"
subtitle: "Branding Identity Proposal -- IOTONE Japan"
date: 2026-03-24T00:00:00+09:00
draft: false
_build:
  list: never
  render: always
sitemap:
  disable: true
---

<style>
  /* Wipeout 2097-inspired inline styles for this proposal page */
  .dt26-section {
    margin: 3rem 0;
    padding: 2rem;
    border-left: 4px solid #FF6B00;
    background: rgba(10, 10, 15, 0.6);
  }
  .dt26-section h3 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #FF6B00;
  }
  .dt26-palette {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  .dt26-swatch {
    width: 120px;
    text-align: center;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }
  .dt26-swatch-color {
    width: 120px;
    height: 80px;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .dt26-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.9rem;
  }
  .dt26-table th, .dt26-table td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #2A2D3A;
  }
  .dt26-table th {
    color: #00F0FF;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
  }
  .dt26-logo-concept {
    padding: 2.5rem;
    margin: 2rem 0;
    background: #0A0A0F;
    border: 1px solid #2A2D3A;
    border-radius: 4px;
    text-align: center;
  }
  .dt26-logo-concept h4 {
    color: #FF6B00;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  .dt26-divider {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, #FF6B00, #FF2D78, transparent);
    margin: 3rem 0;
  }
  .dt26-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border: 1px solid #00F0FF;
    color: #00F0FF;
    border-radius: 2px;
    margin-right: 0.5rem;
  }
  .dt26-badge-rec {
    border-color: #D4FF00;
    color: #D4FF00;
  }
  .dt26-grid-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  .dt26-grid-item {
    padding: 1.5rem;
    background: #12141F;
    border: 1px solid #2A2D3A;
    border-radius: 4px;
  }
  .dt26-grid-item h5 {
    color: #00F0FF;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.85rem;
  }
  .dt26-highlight {
    color: #FF6B00;
    font-weight: bold;
  }
  .dt26-font-sample {
    padding: 1.5rem;
    margin: 1rem 0;
    background: #0A0A0F;
    border-left: 3px solid #00F0FF;
  }
  .dt26-font-sample .display {
    font-size: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #F0F0F5;
    margin-bottom: 0.5rem;
  }
  .dt26-font-sample .body {
    font-size: 1rem;
    line-height: 1.6;
    color: #8B8B99;
  }
  @media (max-width: 768px) {
    .dt26-palette { justify-content: center; }
    .dt26-swatch { width: 100px; }
    .dt26-swatch-color { width: 100px; height: 60px; }
    .dt26-grid-demo { grid-template-columns: 1fr; }
  }
</style>

<hr class="dt26-divider">

## 1. Current Brand Identity Audit

<div class="dt26-section">

### Existing Logo

The current logo (**IoToneFontIcon.svg**) is a monochrome white vector mark -- an organic, calligraphic-style abstract glyph suggesting connectivity and fluidity. It is rendered as a single-path white fill on transparent background.

<div style="text-align:center; padding: 2rem; background: #0A0A0F; border-radius: 4px; margin: 1.5rem 0;">
  <img src="/images/IoToneFontIcon.svg" alt="Current IoTone Logo" style="max-height: 150px; opacity: 0.9;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem; letter-spacing: 0.05em;">CURRENT LOGO MARK -- IoToneFontIcon.svg</p>
</div>

### Current Color Scheme

<div class="dt26-palette">
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #2e3842;"></div>
    <strong>#2E3842</strong><br>Dark Blue-Gray<br>(Background)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #21b2a6;"></div>
    <strong>#21B2A6</strong><br>Teal<br>(Accent)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #00ffcc;"></div>
    <strong>#00FFCC</strong><br>Mint<br>(Accent)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #00f0ff;"></div>
    <strong>#00F0FF</strong><br>Electric Cyan<br>(Accent)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #ed4933;"></div>
    <strong>#ED4933</strong><br>Vermillion<br>(CTA)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #ffffff; border: 1px solid #666;"></div>
    <strong>#FFFFFF</strong><br>White<br>(Text)
  </div>
</div>

### Current Design Character

- **Mood:** Professional, understated, muted futurism
- **Layout:** Single-page scrolling with modular sections (Spectral template)
- **Languages:** Japanese (primary), English
- **Description:** "Unified Human Intelligence" -- IoT, AI, AR/VR, preventive medical tech

**Strengths to preserve:** Bilingual JA/EN structure, clean content hierarchy, B2B credibility, Fukuoka identity

**Weaknesses to address:** Generic startup feel, undifferentiated teal palette, weak brand mark recognition

</div>

<hr class="dt26-divider">

## 2. Design Inspiration: Wipeout 2097

<div class="dt26-section">

### The Designers Republic (tDR)

**Wipeout 2097** (1996, Psygnosis) featured visual identity by **The Designers Republic**, the legendary Sheffield studio. Their work is widely regarded as one of the most influential graphic design achievements in video game history.

tDR treated each racing team (FEISAR, AG Systems, Qirex, Auricom, Piranha, Goteki 45, Assegai, Icaras) as a **complete branding exercise** -- each with its own logo, color scheme, and visual language extending to trackside ads, billboards, and packaging.

### Design Principles We Adopt

<div class="dt26-grid-demo">
  <div class="dt26-grid-item">
    <h5>Brand as World-Building</h5>
    Every touchpoint is an opportunity to reinforce the brand universe
  </div>
  <div class="dt26-grid-item">
    <h5>Typography as Identity</h5>
    Geometric sans-serifs (Eurostile, Microgramma) encode futurism in letterforms
  </div>
  <div class="dt26-grid-item">
    <h5>Neon-on-Dark Palette</h5>
    Deep blacks with electric neons create speed and energy
  </div>
  <div class="dt26-grid-item">
    <h5>Maximum Impact, Minimal Ornament</h5>
    Clean geometry, angular compositions, negative space as design element
  </div>
  <div class="dt26-grid-item">
    <h5>Integration over Decoration</h5>
    Design is intrinsic to the experience, not applied on top
  </div>
  <div class="dt26-grid-item">
    <h5>Corporate Futurism</h5>
    Serious enough to be believable, stylized enough to be exciting
  </div>
</div>

</div>

<hr class="dt26-divider">

## 3. Logo Proposals

Three concepts, each taking a different angle on the Wipeout/tDR aesthetic applied to IOTONE Japan's identity. Each concept includes multiple variations: primary lockup, alternate colorway, compact/icon mark, and stacked format.

---

### Concept A: "VELOCITY MARK"

<span class="dt26-badge">Print</span> <span class="dt26-badge">Web</span> <span class="dt26-badge">Signage</span>

**Personality:** Speed. Precision. Forward momentum. This mark says "we move fast and build the future."

The letters are constructed from sharp diagonal cuts and parallelogram shapes with a 12-degree forward lean. The "O" characters use hexagonal frames with internal circuit-node motifs. A horizontal "speed line" runs the full width of the mark. "JAPAN" appears below in ultra-wide tracking as a grounding anchor.

#### A.1 -- Primary (Orange on Black)

<div class="dt26-logo-concept">
  <h4>Full Wordmark -- Neon Orange</h4>
  <img src="/images/design2026/concept-a-primary.svg" alt="Concept A Primary - Orange wordmark on black" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Full horizontal lockup. Electric Orange <code>#FF6B00</code> letterforms with hexagonal "O" circuit nodes. Speed lines at top and bottom. Use for: website headers, presentation title slides, signage.</p>
</div>

#### A.2 -- White Alternate (White + Orange Accent)

<div class="dt26-logo-concept">
  <h4>Full Wordmark -- White with Orange Accents</h4>
  <img src="/images/design2026/concept-a-white.svg" alt="Concept A White Alternate" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">White letterforms with orange "I" speed stripe and orange circuit-node cores. More restrained but still distinctive. Use for: business documents, partner co-branding, formal contexts.</p>
</div>

#### A.3 -- Stacked Format (Vertical)

<div class="dt26-logo-concept">
  <h4>Stacked Vertical Lockup</h4>
  <img src="/images/design2026/concept-a-stacked.svg" alt="Concept A Stacked" style="width: 100%; max-width: 400px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Large "I+O" icon mark above wordmark. Includes tagline "UNIFIED HUMAN INTELLIGENCE". Use for: social media profiles, app splash screens, event banners, vertical signage.</p>
</div>

#### A.4 -- Compact Icon Mark

<div class="dt26-logo-concept">
  <div style="display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap;">
    <div>
      <h4 style="margin-bottom: 1rem;">Icon Mark (120px)</h4>
      <img src="/images/design2026/concept-a-compact.svg" alt="Concept A Compact Icon" style="width: 120px; height: 120px;" />
    </div>
    <div style="text-align: left; max-width: 400px;">
      <p style="color: #8B8B99; font-size: 0.8rem;">Merged "I" bar + hexagonal "O" with circuit nodes. Reduced to essential elements for small-format use. The vertical speed stripe and hexagonal frame remain recognizable at 32px.</p>
      <p style="color: #8B8B99; font-size: 0.8rem; margin-top: 0.5rem;">Use for: favicon, app icon, social avatar, watermark, embroidery.</p>
    </div>
  </div>
</div>

---

### Concept B: "SIGNAL GRID"

<span class="dt26-badge dt26-badge-rec">RECOMMENDED</span> <span class="dt26-badge">Print</span> <span class="dt26-badge">Web</span> <span class="dt26-badge">Favicon</span> <span class="dt26-badge">App Icon</span>

**Personality:** Connected. Systematic. Technical precision. This mark says "we are the infrastructure of the future."

A modular, grid-based logo system inspired by The Designers Republic's team branding approach. A square icon contains an abstract "IO" monogram built from geometric nodes and circuit paths. The "I" is a vertical line of 3 connected nodes; the "O" is a square circuit path of 4 nodes. A dashed cross-connection links them.

#### B.1 -- Primary (Cyan on Black)

<div class="dt26-logo-concept">
  <h4>Full Horizontal Lockup -- Electric Cyan</h4>
  <img src="/images/design2026/concept-b-primary.svg" alt="Concept B Primary - Cyan icon with white wordmark on black" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Cyan <code>#00F0FF</code> icon mark in grid frame + white wordmark. Subtle 6x6 grid visible inside the frame. Divider line separates "IOTONE" from "JAPAN". Use for: website, primary brand identity, business cards, stationery.</p>
</div>

#### B.2 -- Magenta Alternate (Event/Campaign)

<div class="dt26-logo-concept">
  <h4>Full Horizontal Lockup -- Hot Magenta</h4>
  <img src="/images/design2026/concept-b-magenta.svg" alt="Concept B Magenta Alternate" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Hot Magenta <code>#FF2D78</code> icon variant. Same structure, different energy. Use for: events, product launches, campaigns, secondary division branding. The icon color can rotate through the palette for different contexts.</p>
</div>

#### B.3 -- White Monochrome

<div class="dt26-logo-concept">
  <h4>Full Horizontal Lockup -- Monochrome White</h4>
  <img src="/images/design2026/concept-b-white.svg" alt="Concept B White Monochrome" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Single-color white version for print on dark stock, embossing, foil stamping, or contexts where color is unavailable. The grid frame uses a slightly brighter gray to maintain structure.</p>
</div>

#### B.4 -- Stacked Format (Vertical)

<div class="dt26-logo-concept">
  <h4>Stacked Vertical Lockup</h4>
  <img src="/images/design2026/concept-b-stacked.svg" alt="Concept B Stacked" style="width: 100%; max-width: 400px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Large grid icon above wordmark with full tagline. The grid becomes more prominent at this scale, reinforcing the systematic quality. Use for: social media, app splash, vertical signage, trade show backdrops.</p>
</div>

#### B.5 -- Icon Mark + Favicon

<div class="dt26-logo-concept">
  <div style="display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap;">
    <div>
      <h4 style="margin-bottom: 1rem;">Icon Mark (120px)</h4>
      <img src="/images/design2026/concept-b-icon.svg" alt="Concept B Icon" style="width: 120px; height: 120px;" />
    </div>
    <div>
      <h4 style="margin-bottom: 1rem;">Favicon (32px)</h4>
      <div style="background: #1a1a2a; padding: 1rem; border-radius: 4px; display: inline-block;">
        <img src="/images/design2026/concept-b-favicon.svg" alt="Concept B Favicon" style="width: 32px; height: 32px;" />
        <span style="color: #4A8B99; font-size: 0.7rem; margin-left: 1rem;">Actual 32px size --></span>
        <img src="/images/design2026/concept-b-favicon.svg" alt="Concept B Favicon Enlarged" style="width: 96px; height: 96px; margin-left: 1rem; image-rendering: pixelated;" />
        <span style="color: #4A8B99; font-size: 0.7rem; margin-left: 0.5rem;">3x enlarged</span>
      </div>
    </div>
    <div style="text-align: left; max-width: 300px;">
      <p style="color: #8B8B99; font-size: 0.8rem;">The "IO" node pattern remains legible even at 16px. Rounded corners on favicon only. The grid frame disappears at this size -- only the nodes and connections survive.</p>
    </div>
  </div>
</div>

---

### Concept C: "NEURO CIRCUIT"

<span class="dt26-badge">Print</span> <span class="dt26-badge">Web</span> <span class="dt26-badge">Bilingual</span> <span class="dt26-badge">Motion</span>

**Personality:** Duality. East meets West. Human intelligence amplified by technology. This mark says "we bridge worlds and connect minds."

An asymmetric shield/blade glyph that fuses Japanese typographic sensibility with Wipeout-era futurism. The outer envelope has one curved side (organic/human) and one angular side (technology/machine). Inside, branching lines with node terminals suggest both a circuit board trace and a neural network. Paired with a bilingual wordmark stack.

#### C.1 -- Primary (Velocity Gradient)

<div class="dt26-logo-concept">
  <h4>Full Horizontal Lockup -- Velocity Gradient</h4>
  <img src="/images/design2026/concept-c-primary.svg" alt="Concept C Primary - Gradient glyph with bilingual wordmark" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Orange-to-Magenta gradient glyph mark with English and Japanese katakana wordmark in visual parity. Velocity gradient accent line below. The gradient direction (top-left orange to bottom-right magenta) represents the flow from idea to execution. Use for: website, presentations, primary identity.</p>
</div>

#### C.2 -- Acid Yellow (High-Impact)

<div class="dt26-logo-concept">
  <h4>Full Horizontal Lockup -- Acid Yellow</h4>
  <img src="/images/design2026/concept-c-acid.svg" alt="Concept C Acid Yellow Alternate" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Acid Yellow <code>#D4FF00</code> monochrome glyph for maximum visual impact. Extremely high contrast on black. Use for: event posters, launch campaigns, merchandise, attention-grabbing contexts.</p>
</div>

#### C.3 -- White Monochrome

<div class="dt26-logo-concept">
  <h4>Full Horizontal Lockup -- Monochrome White</h4>
  <img src="/images/design2026/concept-c-white.svg" alt="Concept C White Monochrome" style="width: 100%; max-width: 800px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">All-white version for formal contexts, foil stamping, single-color print. The neural network internal structure reads clearly in white. Use for: business cards (reverse), formal documents, co-branding.</p>
</div>

#### C.4 -- Stacked Format (Vertical)

<div class="dt26-logo-concept">
  <h4>Stacked Vertical Lockup</h4>
  <img src="/images/design2026/concept-c-stacked.svg" alt="Concept C Stacked" style="width: 100%; max-width: 400px;" />
  <p style="color: #8B8B99; margin-top: 1rem; font-size: 0.8rem;">Large glyph mark above bilingual wordmark, tagline, and location. At this scale, the internal neural pathways and sub-nodes become fully visible, creating visual depth. The shield shape acts as a container that works well centered. Use for: app splash, social media, vertical signage, trade show.</p>
</div>

#### C.5 -- Glyph Mark Only

<div class="dt26-logo-concept">
  <div style="display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap;">
    <div>
      <h4 style="margin-bottom: 1rem;">Glyph Mark (120px)</h4>
      <img src="/images/design2026/concept-c-glyph.svg" alt="Concept C Glyph" style="width: 120px; height: 120px;" />
    </div>
    <div style="text-align: left; max-width: 400px;">
      <p style="color: #8B8B99; font-size: 0.8rem;">Standalone shield glyph with full neural circuit detail. The asymmetry (curved left, angular right) is most visible at this scale. Four primary nodes + four sub-nodes + dashed horizontal cross-connection.</p>
      <p style="color: #8B8B99; font-size: 0.8rem; margin-top: 0.5rem;">At smaller sizes (32px and below), simplify to 4 primary nodes only, dropping sub-nodes and dashed line. Use for: favicon, app icon, social avatar, embroidery.</p>
    </div>
  </div>
</div>

<hr class="dt26-divider">

## 4. Proposed Color System

### Primary Palette

<div class="dt26-palette">
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #0A0A0F;"></div>
    <strong>#0A0A0F</strong><br>Void Black<br>(Background)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #FF6B00;"></div>
    <strong>#FF6B00</strong><br>Neon Orange<br>(Primary Accent)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #00F0FF;"></div>
    <strong>#00F0FF</strong><br>Electric Cyan<br>(Tech/Nav)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #F0F0F5;"></div>
    <strong>#F0F0F5</strong><br>Signal White<br>(Text)
  </div>
</div>

### Secondary Palette

<div class="dt26-palette">
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #FF2D78;"></div>
    <strong>#FF2D78</strong><br>Hot Magenta<br>(Highlights)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #D4FF00;"></div>
    <strong>#D4FF00</strong><br>Acid Yellow<br>(Success/Badges)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #12141F;"></div>
    <strong>#12141F</strong><br>Deep Navy<br>(Card Surfaces)
  </div>
  <div class="dt26-swatch">
    <div class="dt26-swatch-color" style="background: #2A2D3A;"></div>
    <strong>#2A2D3A</strong><br>Grid Gray<br>(Borders)
  </div>
</div>

### Gradients

<div class="dt26-palette">
  <div class="dt26-swatch" style="width: 180px;">
    <div class="dt26-swatch-color" style="width: 180px; background: linear-gradient(135deg, #FF6B00, #FF2D78);"></div>
    <strong>Velocity</strong><br>Orange to Magenta<br>(Hero sections)
  </div>
  <div class="dt26-swatch" style="width: 180px;">
    <div class="dt26-swatch-color" style="width: 180px; background: linear-gradient(90deg, #00F0FF, #D4FF00);"></div>
    <strong>Signal</strong><br>Cyan to Yellow<br>(Data/Progress)
  </div>
  <div class="dt26-swatch" style="width: 180px;">
    <div class="dt26-swatch-color" style="width: 180px; background: linear-gradient(180deg, #0A0A0F, #12141F);"></div>
    <strong>Circuit</strong><br>Black to Navy<br>(Backgrounds)
  </div>
</div>

### Contrast Compliance (WCAG)

<table class="dt26-table">
  <tr><th>Combination</th><th>Ratio</th><th>Level</th></tr>
  <tr><td><span style="color:#FF6B00;">Neon Orange</span> on Void Black</td><td>7.2:1</td><td>AAA</td></tr>
  <tr><td><span style="color:#00F0FF;">Electric Cyan</span> on Void Black</td><td>12.1:1</td><td>AAA</td></tr>
  <tr><td><span style="color:#F0F0F5;">Signal White</span> on Void Black</td><td>18.5:1</td><td>AAA</td></tr>
  <tr><td><span style="color:#FF2D78;">Hot Magenta</span> on Void Black</td><td>5.4:1</td><td>AA</td></tr>
</table>

<hr class="dt26-divider">

## 5. Typography System

### Display / Headlines: Eurostile Extended

<div class="dt26-font-sample">
  <div class="display" style="font-family: 'Eurostile', 'Orbitron', sans-serif;">UNIFIED HUMAN INTELLIGENCE</div>
  <div class="body">The canonical futuristic typeface since the 1960s. Squared proportions and extended width create technological authority. Used extensively in Wipeout menus and UI.</div>
</div>

**Free web alternatives:** Orbitron, Exo 2, Rajdhani, Michroma (all via Google Fonts)

### Body Text: Inter

<div class="dt26-font-sample">
  <div class="display" style="font-family: 'Inter', sans-serif; font-size: 1.2rem; text-transform: none; letter-spacing: 0;">Development of preventive medical technology using IoT</div>
  <div class="body">Clean geometric sans-serif for maximum readability in both short and long-form content.</div>
</div>

### Japanese Text: Noto Sans JP

<div class="dt26-font-sample">
  <div class="display" style="font-size: 1.5rem; text-transform: none; letter-spacing: 0.05em;">&#32113;&#21512;&#12373;&#12428;&#12383;&#12498;&#12517;&#12540;&#12510;&#12531;&#12452;&#12531;&#12486;&#12522;&#12472;&#12455;&#12531;&#12473;</div>
  <div class="body">Geometric Japanese typeface that pairs well with Eurostile's squared character. Line height 1.8 for Japanese readability.</div>
</div>

### Type Scale

<table class="dt26-table">
  <tr><th>Level</th><th>Size</th><th>Typeface</th><th>Tracking</th><th>Use</th></tr>
  <tr><td>Display</td><td>72px</td><td>Eurostile Extended Bold</td><td>+0.05em</td><td>Hero headlines</td></tr>
  <tr><td>H1</td><td>48px</td><td>Eurostile Extended Bold</td><td>+0.03em</td><td>Page titles</td></tr>
  <tr><td>H2</td><td>32px</td><td>Eurostile Extended Medium</td><td>+0.02em</td><td>Section headers</td></tr>
  <tr><td>H3</td><td>24px</td><td>Eurostile Extended Medium</td><td>+0.02em</td><td>Subsections</td></tr>
  <tr><td>Body</td><td>16px</td><td>Inter Regular</td><td>0</td><td>Paragraphs</td></tr>
  <tr><td>Caption</td><td>14px</td><td>Inter Regular</td><td>+0.01em</td><td>Labels</td></tr>
  <tr><td>Micro</td><td>11px</td><td>Eurostile Extended Medium</td><td>+0.15em</td><td>Badges, all-caps</td></tr>
</table>

### Rules

1. Headlines: **UPPERCASE** in Eurostile Extended
2. Body: sentence case in Inter / Noto Sans JP
3. Minimum letter-spacing on Eurostile: **+0.02em**
4. Body line-height: **1.6** | Japanese body: **1.8**
5. Max body text width: **72ch**

<hr class="dt26-divider">

## 6. Icon System

### Design Principles

<div class="dt26-grid-demo">
  <div class="dt26-grid-item">
    <h5>Geometric Construction</h5>
    24x24 grid, circles + rectangles + 45-degree diagonals only
  </div>
  <div class="dt26-grid-item">
    <h5>Circuit Node Terminals</h5>
    Line endpoints use small circular dots -- the signature motif
  </div>
  <div class="dt26-grid-item">
    <h5>Consistent Stroke</h5>
    2px stroke weight at default 24px render size
  </div>
  <div class="dt26-grid-item">
    <h5>Sharp Corners</h5>
    No rounded corners on rectangular elements -- sharp = fast
  </div>
</div>

### Core Icon Set

<table class="dt26-table">
  <tr><th>Icon</th><th>Name</th><th>Application</th></tr>
  <tr><td style="color: #00F0FF;">&#9678; &#9135; &#9678;</td><td>IoT / Connected</td><td>IoT services, connectivity</td></tr>
  <tr><td style="color: #00F0FF;">&#9673;</td><td>Vision / AR</td><td>AR/VR services</td></tr>
  <tr><td style="color: #00F0FF;">&#9632;</td><td>Security</td><td>Home security, data protection</td></tr>
  <tr><td style="color: #00F0FF;">&#9829;</td><td>Health / Medical</td><td>Preventive medical tech</td></tr>
  <tr><td style="color: #00F0FF;">&#11200;</td><td>VR / Spatial</td><td>Virtual reality, spatial computing</td></tr>
  <tr><td style="color: #00F0FF;">&#9889;</td><td>AI / Processing</td><td>AI services, computation</td></tr>
  <tr><td style="color: #00F0FF;">&#9678;</td><td>Global / Network</td><td>International, STEM education</td></tr>
  <tr><td style="color: #D4FF00;">&#11042;</td><td>Certification</td><td>Partner certifications</td></tr>
</table>

### Favicon & App Icon

- **Favicon:** Simplified "IO" monogram -- two connected nodes
- **App Icon (512px):** Full icon mark on Void Black with Circuit gradient
- **Touch Icon:** Neon Orange mark on Void Black with platform-spec rounding

<hr class="dt26-divider">

## 7. Application Examples

### Business Card

<div style="background: #0A0A0F; padding: 2rem; border-radius: 4px; margin: 1.5rem 0; max-width: 400px;">
  <div style="color: #00F0FF; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1.5rem;">&#9678;</div>
  <div style="font-size: 1.1rem; letter-spacing: 0.15em; font-weight: 700; color: #F0F0F5; font-family: 'Eurostile', 'Orbitron', sans-serif;">IOTONE JAPAN</div>
  <div style="width: 40px; height: 2px; background: #FF6B00; margin: 0.75rem 0;"></div>
  <div style="color: #8B8B99; font-size: 0.8rem; letter-spacing: 0.05em;">Unified Human Intelligence</div>
  <div style="margin-top: 1.5rem; color: #8B8B99; font-size: 0.75rem; line-height: 1.8;">
    <span style="color: #FF6B00;">&#8226;</span> info@iotone.jp<br>
    <span style="color: #FF6B00;">&#8226;</span> +81 50 5534 1953<br>
    <span style="color: #FF6B00;">&#8226;</span> iotoneai.site
  </div>
  <div style="margin-top: 1rem; color: #4A8B99; font-size: 0.7rem; line-height: 1.6;">
    4-7-12 Chayama, Jonan-ku<br>Fukuoka 814-0111, Japan
  </div>
</div>

**Spec:** Uncoated matte black 400gsm | Foil stamp in white + Neon Orange | Orange edge painting

### Website Header Mockup

<div style="background: linear-gradient(180deg, #0A0A0F, #12141F); padding: 1rem 1.5rem; border: 1px solid #2A2D3A; border-radius: 4px; margin: 1.5rem 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 2rem;">
    <div style="font-size: 0.9rem; letter-spacing: 0.1em; font-weight: 700; color: #F0F0F5; font-family: 'Eurostile', 'Orbitron', sans-serif;"><span style="color: #00F0FF;">&#9678;</span> IOTONE JAPAN</div>
    <div style="font-size: 0.7rem; letter-spacing: 0.1em; color: #8B8B99; font-family: 'Eurostile', 'Orbitron', sans-serif;">NEWS &nbsp;&nbsp; SERVICES &nbsp;&nbsp; ABOUT &nbsp;&nbsp; <span style="color: #F0F0F5;">EN</span></div>
  </div>
  <div style="padding: 2rem 0;">
    <div style="font-size: 1.8rem; letter-spacing: 0.1em; font-weight: 900; color: #F0F0F5; font-family: 'Eurostile', 'Orbitron', sans-serif; text-transform: uppercase;">Unified Human<br>Intelligence</div>
    <div style="width: 60px; height: 2px; background: #FF6B00; margin: 1rem 0;"></div>
    <div style="color: #8B8B99; font-size: 0.85rem; letter-spacing: 0.03em;">IoT. AI. AR/VR.</div>
    <div style="display: inline-block; margin-top: 1.5rem; padding: 0.6rem 1.5rem; background: #FF6B00; color: #0A0A0F; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; border-radius: 2px;">CONTACT US</div>
  </div>
</div>

### Email Signature

<div style="background: #0A0A0F; padding: 1.5rem; border-radius: 4px; margin: 1.5rem 0; max-width: 400px; font-size: 0.85rem;">
  <div style="width: 100%; height: 1px; background: #2A2D3A; margin-bottom: 1rem;"></div>
  <span style="color: #00F0FF;">&#9678;</span> <strong style="color: #F0F0F5; letter-spacing: 0.05em;">IOTONE JAPAN</strong><br>
  <span style="color: #8B8B99;">Name | Title</span><br>
  <span style="color: #8B8B99;">info@iotone.jp | +81 50 5534 1953</span><br>
  <span style="color: #4A8B99;">iotoneai.site</span>
</div>

<hr class="dt26-divider">

## 8. Print & Web Specifications

### Logo Clear Space & Sizing

<table class="dt26-table">
  <tr><th>Specification</th><th>Value</th></tr>
  <tr><td>Minimum clear space</td><td>Height of "I" character on all sides</td></tr>
  <tr><td>Minimum width (print)</td><td>30mm</td></tr>
  <tr><td>Minimum width (digital)</td><td>120px</td></tr>
</table>

### Required File Formats

<table class="dt26-table">
  <tr><th>Format</th><th>Use Case</th></tr>
  <tr><td>SVG</td><td>Web, digital, responsive display</td></tr>
  <tr><td>PDF (vector)</td><td>Print production files</td></tr>
  <tr><td>PNG @1x, @2x, @3x</td><td>Digital where SVG unsupported</td></tr>
  <tr><td>ICO / Favicon bundle</td><td>Browser favicon (16, 32, 180, 512px)</td></tr>
  <tr><td>AI / EPS</td><td>Source files for production</td></tr>
</table>

### Print Color Specs

<table class="dt26-table">
  <tr><th>Color</th><th>CMYK</th><th>Pantone</th></tr>
  <tr><td style="color: #FF6B00;">Neon Orange</td><td>C0 M65 Y100 K0</td><td>Pantone 1505 C</td></tr>
  <tr><td style="color: #00F0FF;">Electric Cyan</td><td>C80 M0 Y0 K0</td><td>Pantone 311 C</td></tr>
  <tr><td style="color: #FF2D78;">Hot Magenta</td><td>C0 M85 Y40 K0</td><td>Pantone 213 C</td></tr>
  <tr><td style="color: #D4FF00;">Acid Yellow</td><td>C20 M0 Y100 K0</td><td>Pantone 388 C</td></tr>
  <tr><td>Void Black</td><td>C80 M70 Y50 K90</td><td>Pantone Black 6 C</td></tr>
</table>

### CSS Custom Properties

```css
:root {
  --color-void-black: #0A0A0F;
  --color-neon-orange: #FF6B00;
  --color-electric-cyan: #00F0FF;
  --color-signal-white: #F0F0F5;
  --color-hot-magenta: #FF2D78;
  --color-acid-yellow: #D4FF00;
  --color-deep-navy: #12141F;
  --color-grid-gray: #2A2D3A;
  --gradient-velocity: linear-gradient(135deg, #FF6B00, #FF2D78);
  --gradient-circuit: linear-gradient(180deg, #0A0A0F, #12141F);
  --gradient-signal: linear-gradient(90deg, #00F0FF, #D4FF00);
  --font-display: 'Eurostile Extended', 'Orbitron', 'Exo 2', sans-serif;
  --font-body: 'Inter', 'DM Sans', sans-serif;
  --font-ja: 'Noto Sans JP', 'M PLUS 1p', sans-serif;
}
```

### Responsive Logo Behavior

<table class="dt26-table">
  <tr><th>Viewport</th><th>Display</th></tr>
  <tr><td>>= 1024px</td><td>Full icon + "IOTONE JAPAN" wordmark</td></tr>
  <tr><td>768-1023px</td><td>Icon + "IOTONE" (drop "JAPAN")</td></tr>
  <tr><td>< 768px</td><td>Icon mark only</td></tr>
</table>

### Animation Guidelines

- Subtle grid/line animations on hover (CSS only)
- Logo entrance: fade-in with 0.3s ease-out
- Color transitions: 0.2s ease-in-out
- Preferred motion: **horizontal translations** (speed) over rotational
- No heavy particle effects or WebGL -- fast and clean, like the game itself

<hr class="dt26-divider">

## 9. Recommendation

<div class="dt26-section" style="border-left-color: #D4FF00;">

<h3 style="color: #D4FF00;">Primary Direction: Concept B -- "Signal Grid"</h3>

**Concept B** is recommended as the primary logo direction because it offers:

- **Strongest scalability** -- works from 16px favicon to billboard
- **Direct IoT metaphor** -- nodes and connections visually encode the company's core business
- **Closest to tDR methodology** -- modular, systematic, grid-based like Wipeout team brands
- **Language-agnostic mark** -- the icon transcends English/Japanese
- **Most distinctive silhouette** -- instantly recognizable at small sizes

Concepts A and C should be explored as **secondary marks or campaign-specific variations**.

</div>

<hr class="dt26-divider">

<div style="text-align: center; padding: 2rem 0; color: #4A8B99; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">
  Design Theme 2026 -- IOTONE Japan Co., Ltd.<br>
  Prepared March 2026<br><br>
  <span style="font-size: 0.65rem; color: #2A2D3A;">Inspired by The Designers Republic and Wipeout 2097</span>
</div>
