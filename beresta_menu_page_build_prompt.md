# Beresta Restaurant — Menu Page Build Prompt

## ROLE
You are a senior frontend engineer and luxury restaurant UI/UX designer. Build a production-quality **Beresta Bengali Restaurant Menu page** that integrates seamlessly with the existing Beresta website.

The existing site already has a cinematic landing page, About, Contact, Gallery, Awards and other sections using a dark brown/black background, warm amber-gold highlights, subtle particles, Bengali ornamental corner decorations and elegant serif typography.

**Do not redesign the existing brand. The Menu page must look like it belongs to the exact same website.**

---

## 1. CORE VISUAL DIRECTION

Create a **luxurious, cinematic, editorial Bengali restaurant menu experience**.

Use:
- Deep chocolate/dark brown background, not pure black
- Warm antique gold/amber accents
- Slightly lighter and more readable than the darkest landing areas
- Premium, elegant, traditional + modern styling
- Bengali-inspired ornamental details
- Strong negative space
- Subtle textured background
- Thin gold borders and refined floral/Bengali flourishes
- Soft warm glow around important imagery

### Color reference
Use the supplied Beresta menu artwork as the visual color reference.

Suggested palette:
- Deep chocolate: `#1A0F07`
- Secondary brown: `#2A180B`
- Antique gold: `#B97824`
- Warm gold: `#C88A32`
- Light gold: `#E0A84F`
- Cream text: `#E8D7B7`
- Muted text: `#B9A789`

**Important:** Do not turn the page into bright orange/gold. The gold should feel like antique brass under warm restaurant lighting.

---

# 2. PAGE STRUCTURE

Build the page in this order:

1. Header / Navbar
2. Menu Hero
3. Category Navigation
4. Main Menu Showcase
5. Hospitality Banner
6. Popular Dishes
7. Brand Value / Service Strip
8. Footer

The sections must feel continuous rather than like unrelated cards.

---

# 3. HEADER / NAVBAR

Match the existing Beresta navbar.

### Left
Beresta logo in warm cream/gold.

### Center
- Home
- About
- Menu
- Awards
- Gallery
- Contact

The active item is **Menu**, with a thin gold underline/glow.

### Right
- Log In / Registration
- Book Table

Book Table is the primary CTA with a dark transparent pill, warm gold border and subtle glow.

Add a compact menu icon on smaller screens.

### Behavior
- Transparent/dark over hero
- Becomes slightly more solid while scrolling
- Backdrop blur
- Thin bronze/gold bottom border
- Smooth transition

---

# 4. MENU HERO

Create a cinematic full-width hero.

### Left
Eyebrow:
`OUR MENU`

Heading:
`A Taste Of Bengal`

Copy:
`Discover the rich flavors and timeless traditions of authentic Bengali cuisine.`

CTA:
`EXPLORE MENU →`

### Right / center-right
Large premium Bengali food photograph, such as:
- steaming Bengali curry
- layered paratha
- brass bowl
- traditional Bengali serving plate

Use warm cinematic food photography, natural steam, subtle vignette and gold/brown grading.

Add subtle corner ornaments, texture and particles.

---

# 5. CATEGORY NAVIGATION

Below the hero create a horizontal category selector:

1. বাংলা খাবার (BREAKFAST)
2. চটচটি & নাস্তা (SNACKS)
3. চুলা ও গ্রিল (GRILL)
4. ফিশ বারবিকিউ (FISH BBQ)
5. পানীয় (BEVERAGES)
6. ডেজার্ট (DESSERTS)

Each category contains:
- Small line icon
- Bengali title
- English subtitle
- Thin separators

Active category:
- brighter gold
- subtle glow
- thin gold bottom indicator
- small animated marker

On mobile, make the selector horizontally scrollable.

---

# 6. MAIN MENU SHOWCASE

This is the signature section.

**Do not display the generated menu poster as one flat image.**

Recreate the composition using real HTML/CSS so text is selectable, responsive, accessible and animatable.

### Desktop
Use:

**3 menu items LEFT + large food image CENTER + 3 menu items RIGHT**

The center image dominates the composition.

Each menu item includes:
- Ornamental circular number badge
- Item name
- Optional description
- Gold dotted separator
- Price

Do not use generic modern card styling. The result should feel like a refined Bengali menu translated into a modern interface.

### Center image
- Thin antique-gold frame
- Subtle ornamental frame details
- Soft warm glow
- Natural shadow
- Optional steam animation

---

# 7. FIRST CATEGORY: BREAKFAST

Initially display:

## বাংলা খাবার — সকালের নাস্তা
### Breakfast

### Left
01. প্লেইন পরোটা — ৳25
02. ঘি ভাজা পরোটা (বেরেস্তা স্পেশাল) — ৳35
03. চিকেন সুপ (বাঙালি স্টাইল) — ৳140

### Right
04. বিফ নিহারি/নলা — ৳170
05. স্পেশাল মটন পায়া — ৳160
06. মিক্স চা — ৳30

Center image:
- layered paratha
- steaming soup/curry
- small brass bowl
- traditional plate
- warm golden restaurant lighting

Controls:
`VIEW FULL MENU →`
`NEXT CATEGORY →`

---

# 8. CATEGORY TRANSITIONS

When selecting another category, do not simply refresh the content.

Use a cinematic transition:

1. Current menu items fade and move away.
2. Center food image scales down slightly.
3. Gold ornamental line expands.
4. Current title fades.
5. New title appears.
6. New food image scales from about `0.94` to `1`.
7. New menu items slide in from left/right.
8. Gold number badges appear with a subtle stagger.
9. Section settles.

Target duration: **700–1100ms**.

Use an elegant easing such as:
`cubic-bezier(0.22, 1, 0.36, 1)`

Avoid aggressive motion.

---

# 9. SCROLL EXPERIENCE

Make the menu cinematic:
- Smooth scrolling
- Section reveal animations
- Subtle food-image parallax
- Very subtle gold particles
- Restrained motion

Recommended:
- Framer Motion
- Lenis

Do not use unnecessary heavy animation libraries.

---

# 10. MENU ITEM HOVER

Desktop hover should be elegant.

Normal:
`01  Grilled Fish Fillet ........ ৳350`

Hover:
- Number badge becomes brighter
- Gold line extends
- Text moves 2–4px
- Small gold glow
- If individual dish images exist, optionally crossfade the center image

No flashy effects.

---

# 11. HOSPITALITY BANNER

After the main menu showcase, add a wide cinematic banner.

Left:
`Experience Hospitality Like No Other`

Copy:
`From the moment you step in, we serve more than just food. We create memories.`

Right:
Warm restaurant/bar/hospitality photograph.

Use a dark overlay, amber lighting, gold typography and subtle Bengali ornament.

---

# 12. POPULAR DISHES

Create a premium horizontal carousel.

Eyebrow:
`MOST LOVED`

Heading:
`Our Popular Dishes`

Example items:
- Mutton Rezala — ৳380
- Kacchi Biryani — ৳350
- Firni Special — ৳120
- Mango Lassi — ৳150
- Beef Tehari — ৳220

Cards:
- Food image
- Item name
- Price
- Thin gold border
- Subtle hover elevation

Desktop: 5–6 visible.
Mobile: swipeable, with partial next-card preview.

---

# 13. VALUE / SERVICE STRIP

Create a refined strip with:

### তাজা উপকরণ
Fresh ingredients

### ঐতিহ্যের স্বাদ
Authentic traditional flavors

### উন্নত মানের সেবা
Premium service

### পরিবারের মতো পরিবেশ
Warm family-style atmosphere

Use small gold line icons and the same visual language as the rest of the site.

---

# 14. FOOTER

Match the existing Beresta footer.

Include:
- Beresta logo
- Brand statement
- Navigation
- Social links
- Contact
- Opening hours
- Book Table CTA
- Copyright
- Privacy Policy
- Terms & Conditions

Use dark brown/black with subtle gold linework and corner ornaments.

---

# 15. RESPONSIVE DESIGN

### Desktop
3 items left / center image / 3 items right.

### Tablet
Reduce spacing and typography while preserving the center image.

### Mobile
Do not force the desktop 3/3 layout.

Use:
Category title
↓
Center food image
↓
01
02
03
04
05
06

The category navigation becomes horizontally scrollable.

Keep food imagery prominent and all text readable.

---

# 16. TYPOGRAPHY

Use elegant serif typography for major headings.

Possible:
- Cormorant Garamond
- Playfair Display
- Cinzel
- Noto Serif Bengali

Use a clean sans-serif for small UI labels when appropriate.

Bengali text must render correctly.

---

# 17. ANIMATION LANGUAGE

Keep animation consistent with the existing Beresta website.

### Page entrance
Fade + slight upward movement.

### Hero
Very subtle image zoom.

### Category navigation
Smooth active indicator.

### Menu items
Staggered reveal.

### Food image
Slow scale/parallax.

### Category change
Crossfade + slide + scale.

### Carousel
Smooth horizontal movement.

### Buttons
Small lift + subtle glow.

Everything must remain elegant and restrained.

---

# 18. TECHNICAL ARCHITECTURE

Use:
- Next.js
- React
- TypeScript
- Tailwind CSS or clean modular CSS
- Framer Motion
- Lenis if appropriate

Recommended components:

```text
MenuPage
├── MenuNavbar
├── MenuHero
├── CategoryNavigation
├── MenuCategory
│   ├── MenuItem
│   └── FoodShowcase
├── HospitalityBanner
├── PopularDishes
├── ValueStrip
└── Footer
```

Make categories data-driven.

Example:

```ts
const menuCategories = [
  {
    id: "breakfast",
    titleBn: "বাংলা খাবার - সকালের নাস্তা",
    titleEn: "Breakfast",
    image: "...",
    items: [...]
  }
];
```

The same `MenuCategory` component should render every category.

---

# 19. MENU DATA

Use the supplied Beresta menu data as the source of truth.

Do not invent prices.

Categories include:
- Bengali & Traditional Cuisine
- Lunch / Main Meals
- Dhaka Delicacies
- Chef's Special
- Charcoal & Grill
- Fish Bar-B-Q
- Naan & Paratha
- Seasonal Fresh Juice
- Mocktails & Lemonade
- Smoothies
- Milkshakes & Lassi
- Hot Chocolate & Mocha
- Fresh Bean Coffee
- Iced Signature Coffee
- Iced Tea
- Dessert

For the first visible showcase, use the six Breakfast items specified above.

---

# 20. REFERENCE RULE

The supplied Beresta menu artwork is **visual reference only**.

Use it to understand:
- color
- background
- gold tone
- ornament style
- spacing
- food presentation
- typography feel
- composition

Do not simply place the reference image on the page.

Recreate the design as a real responsive interface.

The existing Beresta landing/about/contact/gallery/awards screenshots are also brand references.

The final Menu page must look like it was designed as part of the **same website**.

Reference hierarchy:
1. Existing Beresta website screenshots = brand consistency
2. Locked Beresta menu artwork = menu visual language
3. This specification = structure and interaction
4. Supplied menu data = content and prices

---

# 21. AVOID

Do not use:
- Generic restaurant templates
- Bright white backgrounds
- Red/green restaurant colors
- Neon gold
- Excessive glassmorphism
- Huge rounded cards
- Gaming-style animations
- Excessive shadows
- Random decorations
- Completely different typography
- Plain list/table menus
- A PDF-like single image menu
- Excessive parallax
- Overly fast animations

The result should feel:

**Elegant + Bengali + cinematic + premium + modern + warm.**

---

# 22. FINAL EXPERIENCE GOAL

The user should feel:

> “I am not browsing a normal restaurant menu. I am exploring Beresta's culinary identity.”

The Menu page must feel like a natural continuation of the existing Beresta landing page, About, Gallery, Awards and Contact sections.

Prioritize brand consistency over unnecessary features.

Build production-quality responsive code with reusable components, smooth animation, accessible text and a polished luxury restaurant finish.
