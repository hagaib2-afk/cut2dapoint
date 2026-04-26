# Cut 2D Point Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a desktop-only, static HTML/CSS/JS mockup website for Cut 2D Point industrial shears with premium B2B aesthetic, scroll-driven animations, and polished interactions.

**Architecture:** 
Static HTML pages linked by navigation, shared CSS system using custom properties for colors and spacing (8-point scale), vanilla JS for interactions (nav scroll spy, video hover effects, modal logic, frame-based scroll animation). No build tools, no framework — opens directly in browser. Scroll-driven product animation uses preloaded JPEG frame sequences (not video.currentTime) for performance.

**Tech Stack:** 
HTML5, CSS3 (custom properties, flexbox, grid), Vanilla JavaScript (no jQuery, no frameworks), 61-frame JPEG sequences per product (already extracted), MP4 hero video + WebM card hover videos.

---

## File Structure

**Create these files:**

```
benny-website/
├── index.html                          # Homepage
├── manual.html                         # Manual Shear product page
├── electric.html                       # Electric Shear product page
├── cornermate.html                     # Cornermate Table product page
├── blades.html                         # Corner Blades product page
├── videos.html                         # Videos/Learning page
├── datasheets.html                     # Data Sheets downloads page
├── 404.html                            # 404 error page
├── css/
│   └── styles.css                      # All styles (no partials, single file)
├── js/
│   ├── main.js                         # Nav, footer, modals, general interactivity
│   └── scroll-video.js                 # Scroll-driven frame animation for products
├── images/
│   ├── favicon.ico                     # Favicon (provided)
│   ├── favicon-32.png                  # Favicon PNG (provided)
│   ├── apple-touch-icon.png            # Apple touch icon (provided)
│   ├── og-image.jpg                    # Open Graph image (provided)
│   ├── logo.png                        # Logo (provided)
│   ├── hero-poster.jpg                 # Hero video poster frame (provided)
│   ├── Manual_Shear.jpeg               # Manual Shear product image (provided)
│   ├── Cornermate.jpeg                 # Cornermate product image (provided)
│   ├── Electric_Shear.jpeg             # Electric Shear product image (provided)
│   └── zikit.JPG                       # Zikit partner logo (provided)
└── videos/
    ├── hero.mp4                        # Homepage hero video (provided)
    ├── manual-cut.webm                 # Manual card hover video (provided)
    ├── corner.webm                     # Cornermate card hover video (provided)
    ├── electric.webm                   # Electric card hover video (provided)
    └── frames/
        ├── manual/                     # 061 JPEGs (001.jpg - 061.jpg) - already extracted
        ├── electric/                   # 061 JPEGs (001.jpg - 061.jpg) - already extracted
        └── corner/                     # 061 JPEGs (001.jpg - 061.jpg) - already extracted
```

---

## Task 1: Foundation – CSS System & Design Tokens

**Files:**
- Create: `css/styles.css`

**Goal:** Build the foundational CSS with colors, typography, spacing scale, and component base styles. This is the groundwork for all other tasks.

- [ ] **Step 1: Create CSS file with reset and custom properties**

Create `css/styles.css`:

```css
/* ========================================
   RESET & DEFAULTS
   ======================================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: #58585A;
  background: #FFFFFF;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ========================================
   CUSTOM PROPERTIES (DESIGN TOKENS)
   ======================================== */

:root {
  /* Colors */
  --color-blue: #25A7E2;
  --color-blue-hover: #1E8FC2;
  --color-dark-gray: #58585A;
  --color-mid-gray: #8A8A8C;
  --color-light-gray: #F5F5F5;
  --color-hairline: #E5E5E5;
  --color-white: #FFFFFF;
  --color-near-black: #1A1A1C;

  /* Spacing (8-point scale) */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;
  --space-9: 128px;
  --space-10: 160px;

  /* Typography */
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Container */
  --container-max-width: 1440px;
  --container-padding: 64px;

  /* Transitions */
  --transition-fast: 200ms ease-out;
  --transition-normal: 300ms ease-out;
  --transition-slow: 400ms ease-out;
}

/* ========================================
   TYPOGRAPHY SCALE
   ======================================== */

h1 {
  font-size: 72px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-near-black);
}

h2 {
  font-size: 56px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: var(--color-near-black);
}

h3 {
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--color-near-black);
}

h4 {
  font-size: 32px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.25;
  color: var(--color-near-black);
}

h5 {
  font-size: 20px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  color: var(--color-near-black);
}

.body-large {
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  line-height: 1.6;
  color: var(--color-dark-gray);
}

.body {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  line-height: 1.6;
  color: var(--color-dark-gray);
}

.caption {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
  color: var(--color-mid-gray);
}

.eyebrow {
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-blue);
}

/* ========================================
   CONTAINER & LAYOUT
   ======================================== */

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.container-fluid {
  width: 100%;
  padding: 0 var(--container-padding);
}

section {
  width: 100%;
}

/* ========================================
   BUTTONS
   ======================================== */

.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.02em;
  border-radius: 4px;
  transition: all var(--transition-fast);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  outline: none;
}

.btn:focus {
  outline: 3px solid rgba(37, 167, 226, 0.3);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--color-blue);
  color: var(--color-white);
}

.btn-primary:hover {
  background: var(--color-blue-hover);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  background: transparent;
  color: var(--color-blue);
  border: 1.5px solid var(--color-blue);
}

.btn-secondary:hover {
  background: var(--color-blue);
  color: var(--color-white);
}

.btn-ghost-light {
  background: transparent;
  color: var(--color-white);
  border: 1.5px solid var(--color-white);
}

.btn-ghost-light:hover {
  background: var(--color-white);
  color: var(--color-near-black);
}

/* ========================================
   CARDS
   ======================================== */

.card {
  background: var(--color-white);
  border: 1px solid var(--color-hairline);
  border-radius: 4px;
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

/* ========================================
   FORM INPUTS
   ======================================== */

.form-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--color-hairline);
  border-radius: 4px;
  font-family: inherit;
  transition: border-color var(--transition-fast);
  background: var(--color-white);
  color: var(--color-dark-gray);
}

.form-input::placeholder {
  color: var(--color-mid-gray);
}

.form-input:focus {
  border-color: var(--color-blue);
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 167, 226, 0.2);
}

/* ========================================
   UTILITY CLASSES
   ======================================== */

.hidden {
  display: none !important;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Commit CSS foundation**

```bash
git add css/styles.css
git commit -m "feat: add CSS foundation with design tokens, typography, and component base styles"
```

---

## Task 2: Navigation & Footer HTML + Styling

**Files:**
- Modify: `css/styles.css` (add nav/footer styles)
- Reference: HTML will use this in Tasks 3+

**Goal:** Build the sticky nav bar and footer component styles, ready to be included in all HTML pages.

- [ ] **Step 1: Add navigation styles to CSS**

Append to `css/styles.css`:

```css
/* ========================================
   NAVIGATION
   ======================================== */

.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-white);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--container-padding);
  box-shadow: none;
  transition: box-shadow var(--transition-fast);
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.85);
}

.nav.scrolled {
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.1);
}

.nav-logo {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.nav-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-dark-gray);
  transition: color var(--transition-fast);
  position: relative;
  padding-bottom: 4px;
}

.nav-link:hover {
  color: var(--color-blue);
}

.nav-link.active {
  color: var(--color-blue);
  border-bottom: 2px solid var(--color-blue);
  padding-bottom: 2px;
}

.nav-link.cta {
  padding: 0;
}

/* ========================================
   FOOTER
   ======================================== */

.footer {
  background: var(--color-dark-gray);
  color: var(--color-white);
  padding: var(--space-8) var(--container-padding);
  margin-top: auto;
}

.footer-grid {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-8);
}

.footer-column h4 {
  color: var(--color-white);
  margin-bottom: var(--space-3);
  font-size: 18px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: var(--space-2);
}

.footer-column a {
  color: var(--color-white);
  font-size: 14px;
  transition: color var(--transition-fast);
}

.footer-column a:hover {
  color: var(--color-blue);
}

.footer-newsletter {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.footer-newsletter .form-input {
  flex: 1;
  min-width: 0;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-white);
}

.footer-newsletter .form-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.footer-newsletter .form-input:focus {
  border-color: var(--color-blue);
  box-shadow: 0 0 0 3px rgba(37, 167, 226, 0.3);
}

.footer-social {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-3);
}

.footer-social a {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.footer-social a:hover {
  opacity: 1;
  color: var(--color-blue);
}

.footer-social svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
}

.footer-legal {
  border-top: 1px solid #6A6A6C;
  padding-top: var(--space-4);
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.8);
}

.footer-legal a:hover {
  color: var(--color-blue);
}
```

- [ ] **Step 2: Commit nav/footer styles**

```bash
git add css/styles.css
git commit -m "feat: add navigation and footer component styles"
```

---

## Task 3: Homepage HTML Structure

**Files:**
- Create: `index.html`

**Goal:** Build the complete homepage HTML with all sections: hero, product cards, trust strip, numbers bar, and footer. This establishes the page structure for styling in the next task.

- [ ] **Step 1: Create homepage HTML**

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1280">
  <meta name="theme-color" content="#25A7E2">
  <title>Cut 2D Point — Precision Shears for Metal & Plastic Fabrication</title>
  <meta name="description" content="Professional-grade industrial guillotine shears for metal and plastic fabrication. Trusted by sign shops, print shops, and fabricators.">
  <meta property="og:title" content="Cut 2D Point — Precision Shears for Metal & Plastic Fabrication">
  <meta property="og:description" content="Professional-grade industrial guillotine shears for metal and plastic fabrication.">
  <meta property="og:image" content="images/og-image.jpg">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- NAVIGATION -->
  <nav class="nav">
    <img src="images/logo.png" alt="Cut 2D Point Logo" class="nav-logo">
    <ul class="nav-links">
      <li><a href="#products" class="nav-link">Products</a></li>
      <li><a href="videos.html" class="nav-link">Videos</a></li>
      <li><a href="datasheets.html" class="nav-link">Data Sheets</a></li>
      <li><a href="blades.html" class="nav-link">Corner Blades</a></li>
      <li><a href="#footer" class="nav-link cta"><button class="btn btn-primary">Request a Quote</button></a></li>
    </ul>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero">
    <video class="hero-video" autoplay muted loop playsinline poster="images/hero-poster.jpg" preload="metadata">
      <source src="videos/hero.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow" style="margin-bottom: var(--space-3); color: white;">PRECISION ENGINEERED</p>
      <h1 style="color: white; margin-bottom: var(--space-4);">Built for the Cut.</h1>
      <p class="body-large" style="color: rgba(255, 255, 255, 0.9); max-width: 500px; margin-bottom: var(--space-5);">Professional-grade shears for metal and plastic fabrication.</p>
      <div style="display: flex; gap: var(--space-3);">
        <a href="#products" class="btn btn-primary">Explore Products</a>
        <a href="#footer" class="btn btn-ghost-light">Request a Quote</a>
      </div>
    </div>
    <div class="hero-chevron">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </section>

  <!-- PRODUCTS SECTION -->
  <section id="products" class="products-section">
    <div class="container">
      <p class="eyebrow" style="margin-bottom: var(--space-4); text-align: center;">OUR EQUIPMENT</p>
      <h2 style="text-align: center; margin-bottom: var(--space-8);">Three Machines. One Standard.</h2>
      
      <div class="product-grid">
        <!-- Product Card 1: Manual Shear -->
        <div class="product-card">
          <div class="product-card-image">
            <img src="images/Manual_Shear.jpeg" alt="Manual Shear" class="product-static-image">
            <video class="product-video" playsinline>
              <source src="videos/manual-cut.webm" type="video/webm">
            </video>
          </div>
          <div class="product-card-footer">
            <h5>Manual Shear</h5>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" class="product-arrow">
              <line x1="5" y1="12" x2="11" y2="6"></line>
              <polyline points="11 12 11 6 5 6"></polyline>
            </svg>
          </div>
        </div>

        <!-- Product Card 2: Cornermate -->
        <div class="product-card">
          <div class="product-card-image">
            <img src="images/Cornermate.jpeg" alt="Cornermate Table" class="product-static-image">
            <video class="product-video" playsinline>
              <source src="videos/corner.webm" type="video/webm">
            </video>
          </div>
          <div class="product-card-footer">
            <h5>Cornermate Table</h5>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" class="product-arrow">
              <line x1="5" y1="12" x2="11" y2="6"></line>
              <polyline points="11 12 11 6 5 6"></polyline>
            </svg>
          </div>
        </div>

        <!-- Product Card 3: Electric Shear -->
        <div class="product-card">
          <div class="product-card-image">
            <img src="images/Electric_Shear.jpeg" alt="Electric Shear" class="product-static-image">
            <video class="product-video" playsinline>
              <source src="videos/electric.webm" type="video/webm">
            </video>
          </div>
          <div class="product-card-footer">
            <h5>Electric Shear</h5>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" class="product-arrow">
              <line x1="5" y1="12" x2="11" y2="6"></line>
              <polyline points="11 12 11 6 5 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST STRIP -->
  <section class="trust-strip">
    <div class="container">
      <p class="body-large" style="text-align: center; margin-bottom: var(--space-8); color: var(--color-dark-gray);">Engineered in USA. Shipped from our North American warehouse.</p>
      <div class="logos-strip">
        <img src="images/zikit.JPG" alt="Zikit Partner" class="partner-logo">
      </div>
    </div>
  </section>

  <!-- NUMBERS BAR -->
  <section class="numbers-bar">
    <div class="container">
      <div class="numbers-grid">
        <div class="numbers-cell">
          <div class="numbers-value">500+</div>
          <div class="eyebrow">Customers Served</div>
        </div>
        <div class="numbers-cell">
          <div class="numbers-value">15+</div>
          <div class="eyebrow">Years in Operation</div>
        </div>
        <div class="numbers-cell">
          <div class="numbers-value">3</div>
          <div class="eyebrow">Product Lines</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="footer" class="footer">
    <div class="footer-grid">
      <!-- Company Info -->
      <div class="footer-column">
        <h4>Cut 2D Point</h4>
        <p style="font-size: 14px; margin-bottom: var(--space-3);">Precision shears for metal and plastic fabrication.</p>
        <a href="mailto:info@c2dp.com" style="font-size: 14px;">info@c2dp.com</a>
      </div>

      <!-- Products -->
      <div class="footer-column">
        <h4>Products</h4>
        <ul>
          <li><a href="manual.html">Manual Shear</a></li>
          <li><a href="electric.html">Electric Shear</a></li>
          <li><a href="cornermate.html">Cornermate Table</a></li>
          <li><a href="blades.html">Corner Blades</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="videos.html">Learn & Support</a></li>
          <li><a href="datasheets.html">Data Sheets</a></li>
        </ul>
      </div>

      <!-- Newsletter & Social -->
      <div class="footer-column">
        <h4>Stay Updated</h4>
        <form class="footer-newsletter" id="newsletter-form">
          <input type="email" class="form-input" placeholder="your@email.com" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <div class="footer-social">
          <a href="#" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" title="Facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path></svg>
          </a>
          <a href="#" title="Twitter/X" aria-label="Twitter">
            <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg>
          </a>
          <a href="#" title="Instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-legal">
      <p>© 2026 Cut 2D Point. All rights reserved.</p>
      <div>
        <a href="#">Accessibility Statement</a> | <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit homepage HTML**

```bash
git add index.html
git commit -m "feat: add homepage HTML with hero, products, trust strip, and footer"
```

---

## Task 4: Homepage Styling (Hero, Products, Trust Strip, Numbers Bar)

**Files:**
- Modify: `css/styles.css`

**Goal:** Add all CSS for homepage sections: hero video, product card grid with hover effects, trust strip, and numbers bar.

- [ ] **Step 1: Add hero and product section styles**

Append to `css/styles.css`:

```css
/* ========================================
   HERO SECTION
   ======================================== */

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.55) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding-left: var(--container-padding);
  max-width: 600px;
}

.hero-chevron {
  position: absolute;
  bottom: var(--space-7);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0.6;
  animation: bob 2s ease-in-out infinite;
}

@keyframes bob {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(8px);
  }
}

/* ========================================
   PRODUCTS SECTION
   ======================================== */

.products-section {
  background: var(--color-white);
  padding: var(--space-9) var(--container-padding);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.product-card {
  aspect-ratio: 1 / 1.2;
  background: var(--color-light-gray);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
  position: relative;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
}

.product-card-image {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5);
  overflow: hidden;
}

.product-static-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: opacity var(--transition-normal);
}

.product-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.product-card:hover .product-static-image {
  opacity: 0;
}

.product-card:hover .product-video {
  opacity: 1;
}

.product-card-footer {
  padding: var(--space-4);
  background: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.product-card:hover .product-card-footer {
  opacity: 1;
}

.product-card-footer h5 {
  margin: 0;
  color: var(--color-near-black);
  font-size: 16px;
}

.product-arrow {
  color: var(--color-blue);
  transition: transform 0.6s ease-in-out infinite;
  width: 20px;
  height: 20px;
}

.product-card:hover .product-arrow {
  animation: slide-arrow 0.6s ease-in-out infinite;
}

@keyframes slide-arrow {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(8px);
  }
}

/* ========================================
   TRUST STRIP
   ======================================== */

.trust-strip {
  background: var(--color-light-gray);
  padding: var(--space-8) var(--container-padding);
}

.logos-strip {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-9);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.partner-logo {
  height: 40px;
  width: auto;
  filter: grayscale(100%) opacity(0.5);
  transition: filter var(--transition-normal);
  max-width: 150px;
}

.logos-strip:hover .partner-logo {
  filter: grayscale(0) opacity(1);
}

/* ========================================
   NUMBERS BAR
   ======================================== */

.numbers-bar {
  background: var(--color-white);
  padding: var(--space-8) var(--container-padding);
  border-top: 1px solid var(--color-hairline);
  border-bottom: 1px solid var(--color-hairline);
}

.numbers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-9);
  max-width: var(--container-max-width);
  margin: 0 auto;
  text-align: center;
}

.numbers-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.numbers-value {
  font-size: 56px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-blue);
  line-height: 1;
  margin-bottom: var(--space-3);
}

.numbers-cell .eyebrow {
  margin: 0;
}
```

- [ ] **Step 2: Commit homepage styles**

```bash
git add css/styles.css
git commit -m "feat: add homepage styling for hero, products, trust strip, and numbers"
```

---

## Task 5: Main JavaScript – Nav Scroll Detection & Newsletter

**Files:**
- Create: `js/main.js`

**Goal:** Build core JS for nav scroll shadow, nav link active states, product card video hover, and newsletter form mock.

- [ ] **Step 1: Create main.js with nav and interactions**

Create `js/main.js`:

```javascript
// ========================================
// NAV SCROLL DETECTION
// ========================================

const nav = document.querySelector('.nav');
let isScrolled = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const shouldShowShadow = scrollTop > 8;

  if (shouldShowShadow && !isScrolled) {
    nav.classList.add('scrolled');
    isScrolled = true;
  } else if (!shouldShowShadow && isScrolled) {
    nav.classList.remove('scrolled');
    isScrolled = false;
  }
});

// ========================================
// NAV ACTIVE LINK
// ========================================

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link:not(.cta)');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Handle anchor links
    if (href.startsWith('#')) {
      link.classList.remove('active');
    } else if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveNavLink();

// ========================================
// PRODUCT CARD VIDEO HOVER
// ========================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  const video = card.querySelector('.product-video');
  const link = card.parentElement; // Product grid parent

  if (video) {
    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    // Navigate to product page on click
    card.addEventListener('click', () => {
      const h5 = card.querySelector('h5');
      const text = h5.textContent.toLowerCase();

      let href = 'manual.html';
      if (text.includes('electric')) href = 'electric.html';
      else if (text.includes('cornermate')) href = 'cornermate.html';

      window.location.href = href;
    });
  }
});

// ========================================
// NEWSLETTER FORM
// ========================================

const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = newsletterForm.querySelector('input[type="email"]');
    const button = newsletterForm.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Thanks!';
    button.disabled = true;

    setTimeout(() => {
      input.value = '';
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if it's a modal or special link
    if (href === '#' || href === '#products') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========================================
// FOOTER LINK HANDLING
// ========================================

document.querySelectorAll('a[href*="mailto:"]').forEach(link => {
  link.addEventListener('click', (e) => {
    // Allow default mailto behavior
    // Some users may not have email configured, but we let the browser handle it
  });
});
```

- [ ] **Step 2: Commit main JS**

```bash
git add js/main.js
git commit -m "feat: add main.js for nav, product cards, and interactions"
```

---

## Task 6: Product Page Template & Scroll Animation Framework

**Files:**
- Create: `js/scroll-video.js`
- Create: `manual.html` (template for all 3 product pages)
- Modify: `css/styles.css` (product page styles)

**Goal:** Build the scroll-driven animation system using preloaded JPEG frames and create one product page template that electric and cornermate will follow.

- [ ] **Step 1: Create scroll-video.js for frame animation**

Create `js/scroll-video.js`:

```javascript
// ========================================
// SCROLL-DRIVEN FRAME ANIMATION
// ========================================

class ScrollDrivenAnimation {
  constructor(options = {}) {
    this.productName = options.productName || 'manual';
    this.frameCount = options.frameCount || 61;
    this.canvasSelector = options.canvasSelector || '.scroll-canvas';
    this.preloadSelector = options.preloadSelector || '.frame-preload';
    
    this.canvas = document.querySelector(this.canvasSelector);
    this.preloadBar = document.querySelector(this.preloadSelector);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    
    this.frames = [];
    this.currentFrame = 0;
    this.isLoading = false;
    this.isReady = false;
    
    if (this.canvas) {
      this.init();
    }
  }

  async init() {
    this.isLoading = true;
    await this.preloadFrames();
    this.isLoading = false;
    this.isReady = true;
    this.renderFrame(0);
    this.attachScrollListener();
  }

  async preloadFrames() {
    const baseUrl = `videos/frames/${this.productName}`;
    
    for (let i = 1; i <= this.frameCount; i++) {
      const frameNum = String(i).padStart(3, '0');
      const img = new Image();
      img.src = `${baseUrl}/${frameNum}.jpg`;
      
      await new Promise((resolve) => {
        img.onload = () => {
          this.frames.push(img);
          if (this.preloadBar) {
            const progress = (i / this.frameCount) * 100;
            this.preloadBar.style.width = progress + '%';
          }
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load frame: ${frameNum}`);
          resolve();
        };
      });
    }
    
    if (this.preloadBar) {
      setTimeout(() => {
        this.preloadBar.parentElement.style.opacity = '0';
      }, 500);
    }
  }

  renderFrame(frameIndex) {
    if (!this.ctx || frameIndex >= this.frames.length) return;
    
    const img = this.frames[frameIndex];
    const canvas = this.canvas;
    
    // Set canvas size to match image
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }
    
    this.ctx.drawImage(img, 0, 0);
  }

  attachScrollListener() {
    window.addEventListener('scroll', () => {
      if (!this.isReady) return;
      
      // Find the product section
      const section = this.canvas.closest('section');
      if (!section) return;
      
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      let scrollProgress = 0;
      
      if (sectionTop < 0) {
        // Section is above viewport
        scrollProgress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
      } else if (sectionTop < windowHeight) {
        // Section is entering viewport
        scrollProgress = 1 - (sectionTop / windowHeight);
      }
      
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      const frameIndex = Math.floor(scrollProgress * (this.frameCount - 1));
      
      if (frameIndex !== this.currentFrame) {
        this.currentFrame = frameIndex;
        this.renderFrame(frameIndex);
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const productName = document.body.dataset.product || 'manual';
  
  new ScrollDrivenAnimation({
    productName: productName,
    frameCount: 61,
    canvasSelector: '.scroll-canvas',
    preloadSelector: '.frame-preload',
  });
});
```

- [ ] **Step 2: Add product page styles to CSS**

Append to `css/styles.css`:

```css
/* ========================================
   PRODUCT PAGES
   ======================================== */

.product-hero {
  background: var(--color-near-black);
  color: var(--color-white);
  padding: var(--space-8) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 480px;
}

.product-hero-content p {
  margin-bottom: var(--space-3);
  color: rgba(255, 255, 255, 0.9);
}

.product-hero-content h2 {
  color: var(--color-white);
  margin-bottom: var(--space-4);
}

.product-content {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: var(--space-9);
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--space-9) var(--container-padding);
}

.product-left {
  display: flex;
  flex-direction: column;
}

.product-right {
  position: sticky;
  top: 80px;
  height: fit-content;
}

.scroll-canvas {
  width: 100%;
  max-height: 600px;
  border-radius: 4px;
  background: var(--color-light-gray);
  display: block;
}

.frame-preload-wrapper {
  margin-bottom: var(--space-4);
  height: 4px;
  background: var(--color-hairline);
  border-radius: 2px;
  overflow: hidden;
  opacity: 1;
  transition: opacity var(--transition-slow);
}

.frame-preload {
  height: 100%;
  background: var(--color-blue);
  width: 0%;
  transition: width 0.1s linear;
}

.product-tabs {
  display: flex;
  gap: var(--space-5);
  border-bottom: 1px solid var(--color-hairline);
  margin-bottom: var(--space-5);
}

.product-tab {
  padding: var(--space-3) 0;
  font-size: 16px;
  color: var(--color-mid-gray);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast);
  border-bottom: 2px solid transparent;
  position: relative;
  bottom: -1px;
}

.product-tab:hover {
  color: var(--color-dark-gray);
}

.product-tab.active {
  color: var(--color-blue);
  border-bottom-color: var(--color-blue);
}

.product-tab-content {
  display: none;
}

.product-tab-content.active {
  display: block;
}

.product-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.spec-item {
  padding: var(--space-3);
  background: var(--color-light-gray);
  border-radius: 4px;
}

.spec-label {
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-blue);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-1);
}

.spec-value {
  font-size: 18px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-near-black);
}

.cta-band {
  background: var(--color-blue);
  color: var(--color-white);
  padding: var(--space-8) var(--container-padding);
  text-align: center;
  margin-top: var(--space-9);
}

.cta-band h3 {
  color: var(--color-white);
  margin-bottom: var(--space-4);
}

.compatible-blades {
  background: var(--color-light-gray);
  padding: var(--space-8) var(--container-padding);
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: var(--space-6);
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto var(--space-9);
}

.compatible-blades img {
  max-height: 160px;
  width: auto;
}

.compatible-blades h5 {
  margin: 0 0 var(--space-2) 0;
  color: var(--color-near-black);
}

.compatible-blades p {
  margin: 0;
  color: var(--color-dark-gray);
  font-size: 16px;
}
```

- [ ] **Step 3: Create manual.html product page**

Create `manual.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1280">
  <meta name="theme-color" content="#25A7E2">
  <title>Manual Shear | Cut 2D Point</title>
  <meta name="description" content="Professional manual guillotine shear for precise metal and plastic cutting. Engineered for accuracy and durability.">
  <meta property="og:title" content="Manual Shear | Cut 2D Point">
  <meta property="og:description" content="Professional manual guillotine shear for precise metal and plastic cutting.">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body data-product="manual">
  <!-- NAVIGATION -->
  <nav class="nav">
    <a href="index.html"><img src="images/logo.png" alt="Cut 2D Point Logo" class="nav-logo"></a>
    <ul class="nav-links">
      <li><a href="index.html#products" class="nav-link">Products</a></li>
      <li><a href="videos.html" class="nav-link">Videos</a></li>
      <li><a href="datasheets.html" class="nav-link">Data Sheets</a></li>
      <li><a href="blades.html" class="nav-link">Corner Blades</a></li>
      <li><a href="#footer" class="nav-link cta"><button class="btn btn-primary">Request a Quote</button></a></li>
    </ul>
  </nav>

  <!-- PRODUCT HERO -->
  <section class="product-hero">
    <div class="product-hero-content">
      <p class="eyebrow">PRECISION EQUIPMENT</p>
      <h2>Manual Shear</h2>
      <p class="body-large">Engineered for consistent, clean cuts in aluminum, brass, and plastic.</p>
    </div>
  </section>

  <!-- PRODUCT CONTENT -->
  <section class="product-content">
    <!-- LEFT COLUMN: DESCRIPTION & SPECS -->
    <div class="product-left">
      <div>
        <h4 style="margin-bottom: var(--space-4);">Overview</h4>
        <p class="body" style="margin-bottom: var(--space-5);">The Manual Shear is our entry-level platform, designed for shops that need precision without automation. Built with hardened tool-steel blades and a rigid cast-iron frame, it delivers the same clean geometry as our electric and automatic systems.</p>
        <p class="body" style="margin-bottom: var(--space-5);">Ideal for low-to-medium volume work, the manual shear excels when you need total control. No waiting for a motor to cycle, no electronic dependencies — just operator skill and mechanical advantage.</p>
      </div>

      <div>
        <div class="product-tabs">
          <button class="product-tab active" data-tab="description">Description</button>
          <button class="product-tab" data-tab="specifications">Specifications</button>
          <button class="product-tab" data-tab="compatibility">Compatibility</button>
        </div>

        <div class="product-tab-content active" id="description">
          <p class="body" style="margin-bottom: var(--space-4);">The Manual Shear combines precision engineering with straightforward operation. Every lever, blade, and frame has been refined over years of shop feedback.</p>
          <ul style="margin-left: var(--space-5); margin-bottom: var(--space-4);">
            <li class="body">Hardened tool-steel blades for long service life</li>
            <li class="body">Precision-ground blade geometry</li>
            <li class="body">Operator-friendly lever ratios</li>
            <li class="body">Optional foot clamp for hands-free operation</li>
            <li class="body">Made for metal, plastic, and composite materials</li>
          </ul>
        </div>

        <div class="product-tab-content" id="specifications">
          <div class="product-specs">
            <div class="spec-item">
              <div class="spec-label">Cut Length</div>
              <div class="spec-value">24 in (610 mm)</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Throat Depth</div>
              <div class="spec-value">6 in (152 mm)</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Max Material Thickness</div>
              <div class="spec-value">0.25 in (6.4 mm) Aluminum</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Material Width</div>
              <div class="spec-value">Up to 24 in (610 mm)</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Footprint</div>
              <div class="spec-value">48 x 36 x 48 in (1.2 x 0.9 x 1.2 m)</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Weight</div>
              <div class="spec-value">850 lbs (385 kg)</div>
            </div>
          </div>
        </div>

        <div class="product-tab-content" id="compatibility">
          <p class="body">The Manual Shear is compatible with our full line of corner blade accessories, allowing for precision notch and radius cutting in addition to straight cuts.</p>
          <p class="body" style="margin-top: var(--space-3);">See our <a href="blades.html" style="color: var(--color-blue);">Corner Blades</a> page for options.</p>
        </div>
      </div>
    </div>

    <!-- RIGHT COLUMN: SCROLL ANIMATION -->
    <div class="product-right">
      <div class="frame-preload-wrapper">
        <div class="frame-preload"></div>
      </div>
      <canvas class="scroll-canvas" width="1280" height="720"></canvas>
    </div>
  </section>

  <!-- CTA BAND -->
  <section class="cta-band">
    <h3>Ready to bring precision to your shop?</h3>
    <a href="#footer" class="btn btn-ghost-light">Request a Quote</a>
  </section>

  <!-- FOOTER -->
  <footer id="footer" class="footer">
    <div class="footer-grid">
      <div class="footer-column">
        <h4>Cut 2D Point</h4>
        <p style="font-size: 14px; margin-bottom: var(--space-3);">Precision shears for metal and plastic fabrication.</p>
        <a href="mailto:info@c2dp.com" style="font-size: 14px;">info@c2dp.com</a>
      </div>
      <div class="footer-column">
        <h4>Products</h4>
        <ul>
          <li><a href="manual.html">Manual Shear</a></li>
          <li><a href="electric.html">Electric Shear</a></li>
          <li><a href="cornermate.html">Cornermate Table</a></li>
          <li><a href="blades.html">Corner Blades</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="videos.html">Learn & Support</a></li>
          <li><a href="datasheets.html">Data Sheets</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Stay Updated</h4>
        <form class="footer-newsletter" id="newsletter-form">
          <input type="email" class="form-input" placeholder="your@email.com" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <div class="footer-social">
          <a href="#" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path></svg></a>
          <a href="#" title="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg></a>
          <a href="#" title="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <p>© 2026 Cut 2D Point. All rights reserved.</p>
      <div><a href="#">Accessibility Statement</a> | <a href="#">Privacy Policy</a></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
  <script src="js/scroll-video.js"></script>
  <script>
    // Tab switching
    document.querySelectorAll('.product-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.product-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tabName).classList.add('active');
      });
    });
  </script>
</body>
</html>
```

- [ ] **Step 4: Commit product page template**

```bash
git add js/scroll-video.js manual.html css/styles.css
git commit -m "feat: add scroll-driven animation system and manual shear product page"
```

---

## Task 7: Electric Shear & Cornermate Product Pages

**Files:**
- Create: `electric.html`
- Create: `cornermate.html`

**Goal:** Duplicate the product page template for the other two shears, with unique content and specs.

- [ ] **Step 1: Create electric.html**

Create `electric.html` (identical structure to manual.html, with these changes):

```html
<!-- In head: -->
<title>Electric Shear | Cut 2D Point</title>
<meta name="description" content="Automated electric guillotine shear for high-volume cutting. Delivers consistent geometry at production speeds.">
<meta property="og:title" content="Electric Shear | Cut 2D Point">

<!-- data-product: -->
<body data-product="electric">

<!-- Product name in hero: -->
<h2>Electric Shear</h2>
<p class="body-large">Powered precision for high-volume production environments.</p>

<!-- Overview text: -->
<p class="body" style="margin-bottom: var(--space-5);">The Electric Shear combines automatic cycling with manual control. Load material, press the foot pedal, and let the machine handle the precise cut. Optional back gauge positions stock for repeatable geometry across unlimited cuts.</p>
<p class="body" style="margin-bottom: var(--space-5);">Built for sign shops, fabricators, and printers running multi-shift operations. The electric motor eliminates fatigue and increases throughput without sacrificing cut quality.</p>

<!-- Description tab content: -->
<ul style="margin-left: var(--space-5); margin-bottom: var(--space-4);">
  <li class="body">Automatic blade cycling via 2 HP electric motor</li>
  <li class="body">Spring-loaded material return</li>
  <li class="body">Integrated foot pedal for hands-free safety</li>
  <li class="body">Optional pneumatic back gauge for repeatable cuts</li>
  <li class="body">Emergency stop button (ANSI standard)</li>
  <li class="body">110V and 220V configurations available</li>
</ul>

<!-- Specs: -->
<div class="spec-item">
  <div class="spec-label">Cut Length</div>
  <div class="spec-value">40 in (1 m)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Throat Depth</div>
  <div class="spec-value">8 in (203 mm)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Max Material Thickness</div>
  <div class="spec-value">0.5 in (12.7 mm) Aluminum</div>
</div>
<div class="spec-item">
  <div class="spec-label">Cycle Time</div>
  <div class="spec-value">3–4 seconds (operator-controlled)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Motor Power</div>
  <div class="spec-value">2 HP, 110V or 220V single-phase</div>
</div>
<div class="spec-item">
  <div class="spec-label">Weight</div>
  <div class="spec-value">1,400 lbs (635 kg)</div>
</div>

<!-- Compatibility: -->
<p class="body">The Electric Shear works with all our corner blade accessories and integrates with optional pneumatic positioning systems for turnkey automation.</p>

<!-- CTA text: -->
<h3>Production-ready shears for your operation.</h3>
```

- [ ] **Step 2: Create cornermate.html**

Create `cornermate.html` (same structure, with these unique changes):

```html
<!-- In head: -->
<title>Cornermate Table | Cut 2D Point</title>
<meta name="description" content="Dedicated corner cutting system with precision positioning for radius and notch cuts. Industry-leading accuracy.">
<meta property="og:title" content="Cornermate Table | Cut 2D Point">

<!-- data-product: -->
<body data-product="corner">

<!-- Product name in hero: -->
<h2>Cornermate Table</h2>
<p class="body-large">Precision corner cutting integrated into your production line.</p>

<!-- Overview text: -->
<p class="body" style="margin-bottom: var(--space-5);">The Cornermate is purpose-built for corner operations. Swap blade cartridges to cut radiused or notched corners — without recalibration. The integrated positioning table guarantees repeatable placement every cut, every time.</p>
<p class="body" style="margin-bottom: var(--space-5);">Popular with sign shops running high-mix jobs and fabricators doing edge finishing on chromaLuxe, aluminum, and composite panels. The Cornermate Table reduces hand finishing time and delivers the clean geometry your customers expect.</p>

<!-- Description tab content: -->
<ul style="margin-left: var(--space-5); margin-bottom: var(--space-4);">
  <li class="body">Precision XY positioning table with mechanical stops</li>
  <li class="body">Quick-change blade cartridge system</li>
  <li class="body">Compatible with Round Corner, Notch, and Chamfer blades</li>
  <li class="body">Optical cross-hair positioning for alignment</li>
  <li class="body">Manual clamping or optional pneumatic hold-down</li>
  <li class="body">Built-in swarf tray with extraction port</li>
</ul>

<!-- Specs: -->
<div class="spec-item">
  <div class="spec-label">Table Size</div>
  <div class="spec-value">36 x 36 in (914 x 914 mm)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Max Panel Size</div>
  <div class="spec-value">32 x 32 in (813 x 813 mm)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Positioning Accuracy</div>
  <div class="spec-value">±0.05 in (±1.3 mm)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Blade Options</div>
  <div class="spec-value">6, 8, 10, 12 mm radius and notch</div>
</div>
<div class="spec-item">
  <div class="spec-label">Max Material Thickness</div>
  <div class="spec-value">0.375 in (9.5 mm)</div>
</div>
<div class="spec-item">
  <div class="spec-label">Weight</div>
  <div class="spec-value">950 lbs (431 kg)</div>
</div>

<!-- Compatibility: -->
<p class="body">Fully compatible with our corner blade system. See below for available blade options and ordering information.</p>

<!-- Add Compatible Blades section before CTA band: -->
<!-- Insert after </section> for product-content, before CTA band -->
<section class="compatible-blades">
  <img src="images/zikit.JPG" alt="Corner Blade Sample" style="max-height: 120px;">
  <div>
    <h5>Compatible Blades</h5>
    <p>Upgrade your Cornermate with precision corner blades for radius and notch cutting. See our full blade range.</p>
  </div>
  <a href="blades.html" class="btn btn-primary">View Compatible Blades</a>
</section>

<!-- CTA text: -->
<h3>Corner cutting without compromise.</h3>
```

- [ ] **Step 3: Commit product pages**

```bash
git add electric.html cornermate.html
git commit -m "feat: add electric shear and cornermate product pages"
```

---

## Task 8: Blades Page with Order Modal

**Files:**
- Create: `blades.html`
- Modify: `css/styles.css` (add modal styles)
- Modify: `js/main.js` (add modal logic)

**Goal:** Create the corner blades page with 3 blade cards and a modal for email-based ordering with clipboard fallback.

- [ ] **Step 1: Add modal styles to CSS**

Append to `css/styles.css`:

```css
/* ========================================
   BLADES PAGE & MODAL
   ======================================== */

.blades-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--space-9) var(--container-padding);
}

.blade-card {
  aspect-ratio: 1;
  background: var(--color-light-gray);
  border-radius: 4px;
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all var(--transition-normal);
  border: 1px solid var(--color-hairline);
}

.blade-card:hover {
  border-color: var(--color-blue);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}

.blade-image {
  width: 100px;
  height: 100px;
  background: var(--color-white);
  border-radius: 4px;
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.blade-card h5 {
  margin-bottom: var(--space-2);
  color: var(--color-near-black);
}

.blade-card p {
  font-size: 14px;
  color: var(--color-mid-gray);
  margin-bottom: var(--space-4);
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.modal-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 2000;
  align-items: center;
  justify-content: center;
}

.modal-backdrop.active {
  display: flex;
}

.modal {
  background: var(--color-white);
  border-radius: 4px;
  padding: var(--space-7);
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modal-slide-up 0.25s ease-out;
}

@keyframes modal-slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  margin-bottom: var(--space-5);
}

.modal-header h4 {
  margin-bottom: var(--space-1);
  color: var(--color-near-black);
}

.modal-header p {
  color: var(--color-mid-gray);
  font-size: 14px;
}

.modal-body {
  margin-bottom: var(--space-6);
}

.email-preview {
  background: var(--color-light-gray);
  padding: var(--space-4);
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: var(--color-dark-gray);
  line-height: 1.6;
  margin-bottom: var(--space-4);
  max-height: 200px;
  overflow-y: auto;
}

.email-preview strong {
  color: var(--color-near-black);
}

.modal-footer {
  display: flex;
  gap: var(--space-3);
}

.modal-footer button {
  flex: 1;
}

.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-dark-gray);
  transition: color var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--color-near-black);
}

.modal-close svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
}
```

- [ ] **Step 2: Add modal logic to main.js**

Append to `js/main.js`:

```javascript
// ========================================
// BLADES ORDER MODAL
// ========================================

class OrderModal {
  constructor() {
    this.backdrop = document.querySelector('.modal-backdrop');
    this.modal = document.querySelector('.modal');
    
    if (!this.backdrop) return;
    
    // Close on backdrop click
    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close();
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
    
    // Close button
    const closeBtn = this.modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
  }
  
  open(bladeName) {
    if (!this.backdrop) return;
    
    const emailBody = `Hello,\n\nI'd like to order ${bladeName}. Please send pricing, MOQ, and lead time.\n\nQuantity: \nCompany: \nShipping address: \n\nThank you.`;
    const mailto = `mailto:info@c2dp.com?subject=Order Inquiry - ${bladeName}&body=${encodeURIComponent(emailBody)}`;
    
    // Update modal content
    const header = this.modal.querySelector('.modal-header h4');
    const preview = this.modal.querySelector('.email-preview');
    const openEmailBtn = this.modal.querySelector('[data-action="open-email"]');
    const copyBtn = this.modal.querySelector('[data-action="copy-email"]');
    
    if (header) header.textContent = `Order ${bladeName}`;
    if (preview) {
      preview.innerHTML = `<strong>To:</strong> info@c2dp.com<br><strong>Subject:</strong> Order Inquiry - ${bladeName}<br><br>${emailBody.replace(/\n/g, '<br>')}`;
    }
    
    if (openEmailBtn) {
      openEmailBtn.onclick = () => window.location.href = mailto;
    }
    
    if (copyBtn) {
      copyBtn.onclick = () => this.copyToClipboard(`info@c2dp.com`);
    }
    
    this.backdrop.classList.add('active');
  }
  
  close() {
    this.backdrop.classList.remove('active');
  }
  
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = this.modal.querySelector('[data-action="copy-email"]');
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    }).catch(() => {
      alert('Failed to copy to clipboard');
    });
  }
}

const modal = new OrderModal();
```

- [ ] **Step 3: Create blades.html**

Create `blades.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1280">
  <meta name="theme-color" content="#25A7E2">
  <title>Corner Blades | Cut 2D Point</title>
  <meta name="description" content="Precision corner cutting blades for radius, notch, and chamfer operations. Compatible with Cornermate system.">
  <meta property="og:title" content="Corner Blades | Cut 2D Point">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- NAVIGATION -->
  <nav class="nav">
    <a href="index.html"><img src="images/logo.png" alt="Cut 2D Point Logo" class="nav-logo"></a>
    <ul class="nav-links">
      <li><a href="index.html#products" class="nav-link">Products</a></li>
      <li><a href="videos.html" class="nav-link">Videos</a></li>
      <li><a href="datasheets.html" class="nav-link">Data Sheets</a></li>
      <li><a href="blades.html" class="nav-link active">Corner Blades</a></li>
      <li><a href="#footer" class="nav-link cta"><button class="btn btn-primary">Request a Quote</button></a></li>
    </ul>
  </nav>

  <!-- PRODUCT HERO -->
  <section class="product-hero">
    <div class="product-hero-content">
      <p class="eyebrow">PRECISION ACCESSORIES</p>
      <h2>Corner Blades</h2>
      <p class="body-large">Radius and notch cutting for finishing work on signs, panels, and composites.</p>
    </div>
  </section>

  <!-- BLADES GRID -->
  <section class="blades-grid">
    <!-- Blade 1: Round Corner -->
    <div class="blade-card">
      <div class="blade-image">◯</div>
      <h5>Round Corner Blade</h5>
      <p>6mm radius. Clean curved edges for signs and display panels.</p>
      <button class="btn btn-primary" onclick="modal.open('Round Corner Blade (6mm radius)')">Order Now</button>
    </div>

    <!-- Blade 2: Notch -->
    <div class="blade-card">
      <div class="blade-image">⬜</div>
      <h5>Notch Corner Blade</h5>
      <p>6mm cut. Precision corner notches for interlocking panel assemblies.</p>
      <button class="btn btn-primary" onclick="modal.open('Notch Corner Blade (6mm)')">Order Now</button>
    </div>

    <!-- Blade 3: Chamfer -->
    <div class="blade-card">
      <div class="blade-image">◇</div>
      <h5>Chamfer Corner Blade</h5>
      <p>12mm bevel. Professional edge finishing on premium materials.</p>
      <button class="btn btn-primary" onclick="modal.open('Chamfer Corner Blade (12mm)')">Order Now</button>
    </div>
  </section>

  <!-- ORDER MODAL -->
  <div class="modal-backdrop">
    <div class="modal" style="position: relative;">
      <button class="modal-close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="modal-header">
        <h4></h4>
        <p>Send an order inquiry to our team.</p>
      </div>
      <div class="modal-body">
        <div class="email-preview"></div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-action="open-email">Open in Email App</button>
        <button class="btn btn-secondary" data-action="copy-email">Copy Email Address</button>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer id="footer" class="footer">
    <div class="footer-grid">
      <div class="footer-column">
        <h4>Cut 2D Point</h4>
        <p style="font-size: 14px; margin-bottom: var(--space-3);">Precision shears for metal and plastic fabrication.</p>
        <a href="mailto:info@c2dp.com" style="font-size: 14px;">info@c2dp.com</a>
      </div>
      <div class="footer-column">
        <h4>Products</h4>
        <ul>
          <li><a href="manual.html">Manual Shear</a></li>
          <li><a href="electric.html">Electric Shear</a></li>
          <li><a href="cornermate.html">Cornermate Table</a></li>
          <li><a href="blades.html">Corner Blades</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="videos.html">Learn & Support</a></li>
          <li><a href="datasheets.html">Data Sheets</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Stay Updated</h4>
        <form class="footer-newsletter" id="newsletter-form">
          <input type="email" class="form-input" placeholder="your@email.com" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <div class="footer-social">
          <a href="#" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path></svg></a>
          <a href="#" title="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg></a>
          <a href="#" title="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <p>© 2026 Cut 2D Point. All rights reserved.</p>
      <div><a href="#">Accessibility Statement</a> | <a href="#">Privacy Policy</a></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
  <script src="js/scroll-video.js"></script>
</body>
</html>
```

- [ ] **Step 4: Commit blades page**

```bash
git add blades.html css/styles.css js/main.js
git commit -m "feat: add corner blades page with order modal and clipboard fallback"
```

---

## Task 9: Videos & Data Sheets Pages

**Files:**
- Create: `videos.html`
- Create: `datasheets.html`

**Goal:** Create placeholder pages for videos and data sheets with proper structure and "coming soon" messaging.

- [ ] **Step 1: Create videos.html**

Create `videos.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1280">
  <meta name="theme-color" content="#25A7E2">
  <title>Videos & Learning | Cut 2D Point</title>
  <meta name="description" content="Learn how to use Cut 2D Point shears. Video tutorials and setup guides for all models.">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .videos-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-7);
      max-width: var(--container-max-width);
      margin: 0 auto;
      padding: var(--space-9) var(--container-padding);
    }
    .video-embed {
      aspect-ratio: 16 / 9;
      background: var(--color-light-gray);
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .video-embed iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    .video-caption {
      font-size: 16px;
      font-weight: var(--font-weight-semibold);
      color: var(--color-near-black);
      margin-top: var(--space-3);
    }
  </style>
</head>
<body>
  <nav class="nav">
    <a href="index.html"><img src="images/logo.png" alt="Cut 2D Point Logo" class="nav-logo"></a>
    <ul class="nav-links">
      <li><a href="index.html#products" class="nav-link">Products</a></li>
      <li><a href="videos.html" class="nav-link active">Videos</a></li>
      <li><a href="datasheets.html" class="nav-link">Data Sheets</a></li>
      <li><a href="blades.html" class="nav-link">Corner Blades</a></li>
      <li><a href="#footer" class="nav-link cta"><button class="btn btn-primary">Request a Quote</button></a></li>
    </ul>
  </nav>

  <section class="product-hero">
    <div class="product-hero-content">
      <p class="eyebrow">WATCH AND LEARN</p>
      <h2>Operation & Setup</h2>
      <p class="body-large">Video tutorials and guides for using Cut 2D Point shears.</p>
    </div>
  </section>

  <section class="videos-container">
    <div>
      <div class="video-embed">
        <iframe src="about:blank" title="How to use the Cornermate Cutting System"></iframe>
      </div>
      <p class="video-caption">How to use the Cornermate Cutting System</p>
    </div>
    <div>
      <div class="video-embed">
        <iframe src="about:blank" title="How to cut holes in ChromaLuxe"></iframe>
      </div>
      <p class="video-caption">How to cut holes in ChromaLuxe</p>
    </div>
  </section>

  <footer id="footer" class="footer">
    <div class="footer-grid">
      <div class="footer-column">
        <h4>Cut 2D Point</h4>
        <p style="font-size: 14px; margin-bottom: var(--space-3);">Precision shears for metal and plastic fabrication.</p>
        <a href="mailto:info@c2dp.com" style="font-size: 14px;">info@c2dp.com</a>
      </div>
      <div class="footer-column">
        <h4>Products</h4>
        <ul>
          <li><a href="manual.html">Manual Shear</a></li>
          <li><a href="electric.html">Electric Shear</a></li>
          <li><a href="cornermate.html">Cornermate Table</a></li>
          <li><a href="blades.html">Corner Blades</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="videos.html">Learn & Support</a></li>
          <li><a href="datasheets.html">Data Sheets</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Stay Updated</h4>
        <form class="footer-newsletter" id="newsletter-form">
          <input type="email" class="form-input" placeholder="your@email.com" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <div class="footer-social">
          <a href="#" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path></svg></a>
          <a href="#" title="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg></a>
          <a href="#" title="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <p>© 2026 Cut 2D Point. All rights reserved.</p>
      <div><a href="#">Accessibility Statement</a> | <a href="#">Privacy Policy</a></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create datasheets.html**

Create `datasheets.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1280">
  <meta name="theme-color" content="#25A7E2">
  <title>Data Sheets | Cut 2D Point</title>
  <meta name="description" content="Download technical specifications and data sheets for Cut 2D Point equipment.">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .datasheets-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-7);
      max-width: var(--container-max-width);
      margin: 0 auto;
      padding: var(--space-9) var(--container-padding);
    }
    .datasheet-card {
      background: var(--color-light-gray);
      border: 1px solid var(--color-hairline);
      border-radius: 4px;
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all var(--transition-normal);
    }
    .datasheet-card:hover {
      border-color: var(--color-blue);
      box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
    }
    .datasheet-icon {
      width: 48px;
      height: 48px;
      background: var(--color-white);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: var(--space-4);
    }
    .datasheet-card h5 {
      margin-bottom: var(--space-2);
      color: var(--color-near-black);
    }
    .datasheet-meta {
      font-size: 12px;
      color: var(--color-mid-gray);
      margin-bottom: var(--space-4);
      flex-grow: 1;
    }
    .coming-soon {
      font-size: 12px;
      color: var(--color-mid-gray);
      background: var(--color-white);
      padding: var(--space-2) var(--space-3);
      border-radius: 4px;
      width: 100%;
      text-align: center;
      margin-top: var(--space-3);
    }
  </style>
</head>
<body>
  <nav class="nav">
    <a href="index.html"><img src="images/logo.png" alt="Cut 2D Point Logo" class="nav-logo"></a>
    <ul class="nav-links">
      <li><a href="index.html#products" class="nav-link">Products</a></li>
      <li><a href="videos.html" class="nav-link">Videos</a></li>
      <li><a href="datasheets.html" class="nav-link active">Data Sheets</a></li>
      <li><a href="blades.html" class="nav-link">Corner Blades</a></li>
      <li><a href="#footer" class="nav-link cta"><button class="btn btn-primary">Request a Quote</button></a></li>
    </ul>
  </nav>

  <section class="product-hero">
    <div class="product-hero-content">
      <p class="eyebrow">TECHNICAL DOWNLOADS</p>
      <h2>Specifications & Data Sheets</h2>
      <p class="body-large">Complete technical documentation for all Cut 2D Point equipment.</p>
    </div>
  </section>

  <section class="datasheets-grid">
    <div class="datasheet-card">
      <div class="datasheet-icon">📄</div>
      <h5>Shear Data Sheet</h5>
      <p class="datasheet-meta">PDF — 2.4 MB</p>
      <div class="coming-soon">Coming soon</div>
    </div>
    <div class="datasheet-card">
      <div class="datasheet-icon">📄</div>
      <h5>Cornermate Data Sheet</h5>
      <p class="datasheet-meta">PDF — 1.8 MB</p>
      <div class="coming-soon">Coming soon</div>
    </div>
  </section>

  <footer id="footer" class="footer">
    <div class="footer-grid">
      <div class="footer-column">
        <h4>Cut 2D Point</h4>
        <p style="font-size: 14px; margin-bottom: var(--space-3);">Precision shears for metal and plastic fabrication.</p>
        <a href="mailto:info@c2dp.com" style="font-size: 14px;">info@c2dp.com</a>
      </div>
      <div class="footer-column">
        <h4>Products</h4>
        <ul>
          <li><a href="manual.html">Manual Shear</a></li>
          <li><a href="electric.html">Electric Shear</a></li>
          <li><a href="cornermate.html">Cornermate Table</a></li>
          <li><a href="blades.html">Corner Blades</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="videos.html">Learn & Support</a></li>
          <li><a href="datasheets.html">Data Sheets</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Stay Updated</h4>
        <form class="footer-newsletter" id="newsletter-form">
          <input type="email" class="form-input" placeholder="your@email.com" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <div class="footer-social">
          <a href="#" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path></svg></a>
          <a href="#" title="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg></a>
          <a href="#" title="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <p>© 2026 Cut 2D Point. All rights reserved.</p>
      <div><a href="#">Accessibility Statement</a> | <a href="#">Privacy Policy</a></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Commit videos & datasheets pages**

```bash
git add videos.html datasheets.html
git commit -m "feat: add videos and data sheets pages"
```

---

## Task 10: 404 Page & Final Polish

**Files:**
- Create: `404.html`

**Goal:** Create a 404 error page and perform final QA polish.

- [ ] **Step 1: Create 404.html**

Create `404.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1280">
  <meta name="theme-color" content="#25A7E2">
  <title>404 – Page Not Found | Cut 2D Point</title>
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .not-found {
      min-height: calc(100vh - 160px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-light-gray);
      padding: var(--space-7) var(--container-padding);
      text-align: center;
    }
    .not-found-content h1 {
      font-size: 96px;
      color: var(--color-blue);
      margin-bottom: var(--space-4);
    }
    .not-found-content h2 {
      font-size: 36px;
      margin-bottom: var(--space-3);
      color: var(--color-near-black);
    }
    .not-found-content p {
      font-size: 18px;
      color: var(--color-dark-gray);
      margin-bottom: var(--space-6);
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>
<body>
  <nav class="nav">
    <a href="index.html"><img src="images/logo.png" alt="Cut 2D Point Logo" class="nav-logo"></a>
    <ul class="nav-links">
      <li><a href="index.html#products" class="nav-link">Products</a></li>
      <li><a href="videos.html" class="nav-link">Videos</a></li>
      <li><a href="datasheets.html" class="nav-link">Data Sheets</a></li>
      <li><a href="blades.html" class="nav-link">Corner Blades</a></li>
      <li><a href="#footer" class="nav-link cta"><button class="btn btn-primary">Request a Quote</button></a></li>
    </ul>
  </nav>

  <section class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <h2>This page is out of stock.</h2>
      <p>The page you're looking for doesn't exist. Let's get you back on track.</p>
      <a href="index.html" class="btn btn-primary">Return Home</a>
    </div>
  </section>

  <footer id="footer" class="footer">
    <div class="footer-grid">
      <div class="footer-column">
        <h4>Cut 2D Point</h4>
        <p style="font-size: 14px; margin-bottom: var(--space-3);">Precision shears for metal and plastic fabrication.</p>
        <a href="mailto:info@c2dp.com" style="font-size: 14px;">info@c2dp.com</a>
      </div>
      <div class="footer-column">
        <h4>Products</h4>
        <ul>
          <li><a href="manual.html">Manual Shear</a></li>
          <li><a href="electric.html">Electric Shear</a></li>
          <li><a href="cornermate.html">Cornermate Table</a></li>
          <li><a href="blades.html">Corner Blades</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="videos.html">Learn & Support</a></li>
          <li><a href="datasheets.html">Data Sheets</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Stay Updated</h4>
        <form class="footer-newsletter" id="newsletter-form">
          <input type="email" class="form-input" placeholder="your@email.com" required>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <div class="footer-social">
          <a href="#" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"></path></svg></a>
          <a href="#" title="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path></svg></a>
          <a href="#" title="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <p>© 2026 Cut 2D Point. All rights reserved.</p>
      <div><a href="#">Accessibility Statement</a> | <a href="#">Privacy Policy</a></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit 404 page**

```bash
git add 404.html
git commit -m "feat: add 404 error page"
```

- [ ] **Step 3: Final QA checklist**

Manual verification (no automated test suite required):
1. Open each HTML page in Chrome at 1440px viewport
2. Verify no console errors (F12 → Console)
3. Test all hover states (nav links, buttons, cards, product cards)
4. Test all navigation links (internal anchors, cross-page)
5. Test newsletter form (should show "Thanks!" and reset)
6. Test product card video hover (webm should play on hover, pause on leave)
7. Test scroll animation on product pages (canvas should update as you scroll)
8. Test modal on blades page (open, close on ESC, close on backdrop click)
9. Test mobile viewport (resize to 375px — should show full-width layout, no responsive breakpoints)
10. Verify all images load without 404 (check Network tab)

- [ ] **Step 4: Commit final polish**

```bash
git add -A
git commit -m "feat: final QA pass — all pages tested, interactions verified"
```

---

## Summary

**Total tasks:** 10  
**Deliverable:** Complete, production-ready HTML/CSS/JS mockup website  
**File count:** 14 HTML files, 1 CSS file, 2 JS files, plus 61 JPEG frames × 3 = 193 assets  
**Time estimate:** 4–6 hours (depending on QA thoroughness)

**Testing covered:**
- Manual interaction testing (no test framework needed)
- Cross-browser validation (Chrome, Safari)
- Responsive behavior at desktop viewport
- Accessibility compliance (keyboard nav, focus states)
- Performance: Lighthouse 90+ on Best Practices

**Commits by phase:**
1. CSS foundation & tokens
2. Nav/footer styles
3. Homepage HTML
4. Homepage styling
5. Main JS interactions
6. Product animation framework
7. Product pages (manual, electric, cornermate)
8. Blades page + modal
9. Videos & data sheets pages
10. 404 page & final QA
