# Beresta Restaurant — Gallery Page Design Specification

## 1. Design Goal

Recreate the provided Beresta restaurant gallery page as closely as possible.

The page is a **premium Bengali heritage restaurant photo gallery** with:

- Near-black luxury background
- Warm gold/golden-orange accents
- Bengali/Islamic ornamental motifs
- Elegant serif display typography
- Warm cinematic restaurant photography
- Thin gold borders
- Rounded image cards
- Spacious but dense editorial gallery composition
- Premium, traditional, handcrafted visual language

**Important:** This is a visual reconstruction specification, not a redesign. Preserve the hierarchy, proportions, spacing, ornamentation, typography style, image treatment, and overall composition shown in the reference.

Reference screenshot aspect ratio: **1024 × 1536**.

---

# 2. Global Visual System

## Background

Primary page background:

```text
#070706
```

Use a very subtle black-to-warm-black variation rather than a flat pure black.

Suggested background treatment:

```css
background:
  radial-gradient(circle at 50% 20%, rgba(120, 70, 15, 0.08), transparent 35%),
  #070706;
```

The background must remain predominantly black.

Do NOT use a bright brown page background.

---

## Primary Gold

Main decorative gold:

```text
#D99524
```

Bright highlight gold:

```text
#F0B43A
```

Soft champagne text:

```text
#E8D8B8
```

Primary heading cream:

```text
#F1E5CC
```

Muted text:

```text
#C8B89B
```

Border gold:

```text
rgba(217, 149, 36, 0.75)
```

---

# 3. Overall Page Structure

The page must contain these major areas in this exact order:

1. Fixed/top navigation
2. Gallery hero section
3. Decorative separator
4. "Every Moment Tells Our Story" statement banner
5. Gallery category filter navigation
6. 3-column photo gallery
7. Decorative bottom ornament

The visual flow should be:

```text
NAVIGATION
    ↓
HERO
    ↓
ORNAMENTAL SEPARATOR
    ↓
STORY BANNER
    ↓
CATEGORY FILTERS
    ↓
3-COLUMN IMAGE GALLERY
    ↓
BOTTOM ORNAMENT
```

---

# 4. Navigation Bar

## Height

Desktop:

```text
58–64px
```

Reference appearance is approximately 60px.

Background:

```text
rgba(0, 0, 0, 0.92)
```

Add a very subtle bottom separation line:

```text
rgba(217, 149, 36, 0.10)
```

---

## Navigation Layout

Use a horizontal layout:

```text
[BER ESTA LOGO]     Home   About   Menu   Awards   Gallery   Contact       Log in / Registration   [Book Table]
```

### Left

Beresta logo.

Position:

```text
left: 30–34px
```

Logo width:

```text
~90px
```

Use the actual Beresta logo asset. Do not recreate it with plain text if an official logo asset is available.

---

## Navigation Links

Use:

- Home
- About
- Menu
- Awards
- Gallery
- Contact

Font size:

```text
12–14px
```

Color:

```text
#D8CCB6
```

Spacing:

```text
24–30px
```

### Active Gallery State

Gallery must be highlighted.

Active text:

```text
#DFA22D
```

Under it place a short gold underline.

Underline:

```text
width: 38–42px
height: 2px
margin-top: 9px
```

---

## Right Navigation

Text:

```text
Log in / Registration
```

Then a pill-shaped CTA:

```text
Book Table
```

Button:

```text
background: #E9A126;
color: #160F05;
border-radius: 24px;
padding: 10px 25px;
```

The button must visually stand out without becoming oversized.

---

# 5. Hero Section

## Height

Desktop:

```text
~290px
```

The reference hero begins immediately below the navbar and ends at the thin gold separator.

---

## Hero Layout

Use a two-part composition.

### Left

Approximately:

```text
45%
```

of the hero width.

### Right

Approximately:

```text
55%
```

with the restaurant interior image.

---

## Hero Background

The right side contains a large warm restaurant interior photograph.

Image characteristics:

- Bengali heritage restaurant interior
- Arched windows
- Ornamental Islamic/Bengali patterns
- Warm hanging lanterns
- Plants
- Dark wood furniture
- Golden ambient lighting
- Deep shadows
- Cinematic photography

Image should fill the right side.

Use:

```css
object-fit: cover;
```

Add a strong black gradient over the image from left to right so the text remains readable.

Example:

```css
background:
  linear-gradient(
    90deg,
    #070706 0%,
    rgba(7,7,6,0.94) 22%,
    rgba(7,7,6,0.30) 58%,
    rgba(7,7,6,0.05) 100%
  );
```

---

# 6. Hero Text

The hero text is left aligned and vertically centered.

## Eyebrow

Text:

```text
OUR GALLERY
```

Uppercase.

Letter spacing:

```text
4–5px
```

Font size:

```text
11–13px
```

Color:

```text
#DFA22D
```

Place thin decorative horizontal gold lines on both sides.

Concept:

```text
────  OUR GALLERY  ────
```

---

## Main Heading

Text:

```text
Moments Of Beresta
```

Typography:

- Elegant serif
- High contrast
- Editorial/luxury appearance
- Slightly italic or italic serif appearance

Font size desktop:

```text
46–52px
```

Line height:

```text
1.05
```

Color:

```text
#F0E4CC
```

Do NOT use a generic bold sans-serif font.

Recommended font direction:

- Cormorant Garamond
- Playfair Display
- DM Serif Display
- Libre Baskerville

Prefer a refined italic serif if available.

---

## Hero Description

Text:

```text
A visual journey through the flavors,
heritage and hospitality of Bengal.
```

Center the two-line description relative to the left hero panel.

Font:

```text
15–17px
```

Line height:

```text
1.7
```

Color:

```text
#D9C9AA
```

---

## Hero Corner Ornament

Bottom-left of the hero contains a large decorative Bengali/Islamic floral ornament.

Characteristics:

- Thin gold linework
- Intricate mandala/folklore pattern
- Partially cropped by the edge
- Occupies roughly 115–150px of the lower-left area

The ornament should not interfere with the text.

Use an SVG/PNG ornament asset with transparency.

---

# 7. Hero Bottom Separator

Immediately below the hero, create a horizontal gold separator.

Use:

```text
1px gold line
```

At the center, place a small symmetrical diamond/ornamental motif.

Visual:

```text
────────────── ◇ ──────────────
```

The central ornament should be gold and delicate.

---

# 8. Story Statement Banner

This is one of the most important visual elements.

Create a large rounded rectangular banner below the hero.

## Position

Horizontal centered container.

Width:

```text
~96%
```

Maximum width:

```text
1000px
```

Margin:

```text
18–22px auto
```

---

## Banner Shape

Border:

```text
1px solid #D99524
```

Border radius:

```text
20–24px
```

Background:

```text
linear-gradient(
  90deg,
  rgba(28, 22, 14, 0.95),
  rgba(12, 11, 9, 0.98),
  rgba(28, 22, 14, 0.95)
)
```

Height:

```text
~88–95px
```

---

## Banner Ornamentation

Both left and right edges contain intricate gold floral/Bengali ornamental line art.

These ornaments should:

- Sit inside the banner
- Fade into the black background
- Remain subtle
- Never compete with the text

---

## Banner Icon

On the left side of the text, place a gold traditional lantern icon.

Approximate size:

```text
42–48px
```

Color:

```text
#E7A72E
```

---

## Banner Heading

Text:

```text
Every Moment Tells Our Story
```

Font:

Elegant serif.

Size:

```text
27–31px
```

Color:

```text
#E9B03A
```

---

## Banner Description

Text:

```text
Discover the heart of Beresta through every frame.
```

Font:

```text
15–17px
```

Color:

```text
#D6C5A6
```

---

# 9. Gallery Filter Navigation

Place the filter buttons below the story banner.

Horizontal centered row.

Reference categories:

```text
All
Food
The Restaurant
Bengali Heritage
People & Moments
Events
```

---

## Filter Button Style

Inactive button:

```text
background: transparent;
border: 1px solid rgba(217,149,36,0.35);
color: #D7C6A5;
```

Border radius:

```text
24px
```

Height:

```text
40px
```

Horizontal padding:

```text
26–32px
```

Font size:

```text
13–14px
```

---

## Active Filter

The "All" button is active.

```text
background: #E6A027;
color: #171008;
border-color: #E6A027;
```

The active button should look filled and premium.

---

## Filter Spacing

Horizontal gap:

```text
15–17px
```

Vertical margin below filters:

```text
26px
```

---

# 10. Main Gallery

## Gallery Container

Desktop width:

```text
calc(100% - 36px)
```

Maximum width:

```text
1000px
```

Centered.

Reference has approximately:

```text
18px left/right margin
```

---

# 11. Gallery Grid

Use exactly **3 columns** on desktop.

```css
grid-template-columns: repeat(3, 1fr);
```

Gap:

```text
14–16px
```

Reference visual gap:

```text
~14px
```

---

## Gallery Card

Every image should be inside a rounded rectangular card.

Border:

```text
1px solid rgba(218, 155, 42, 0.85)
```

Border radius:

```text
14–16px
```

Overflow:

```text
hidden
```

Background:

```text
#11100D
```

---

## Image Treatment

All images:

```css
width: 100%;
height: 100%;
object-fit: cover;
display: block;
```

Add a subtle warm cinematic treatment.

Do not make images excessively bright.

The reference uses:

- Deep blacks
- Amber highlights
- Warm orange practical lights
- Strong contrast
- Soft bokeh
- Slight golden haze

---

# 12. Exact Desktop Gallery Composition

The visible reference gallery contains **12 image cards** arranged as:

```text
ROW 1
[Food / Rice]       [Restaurant Entrance]      [Spices]

ROW 2
[Fish Dish]         [Dining Table]             [Architecture]

ROW 3
[Spices]            [Restaurant Interior]      [Food / Rice]

ROW 4
[People Dining]     [Lantern]                  [Restaurant Interior]
```

Each row contains exactly 3 cards.

---

# 13. Gallery Image Content Direction

## Image 01 — Food / Rice

Large steaming Bengali rice/biryani-style dish.

Visual:

- Brass/metal serving bowl
- Steaming food
- Warm amber lighting
- Dark restaurant background
- Detailed spices
- Premium food photography

---

## Image 02 — Restaurant Entrance

Beresta entrance.

Visual:

- Beresta logo/sign
- Large heritage arch
- Ornamental wall design
- Warm doorway lighting
- Plants on both sides
- Symmetrical composition

---

## Image 03 — Spice Collection

Traditional spice containers.

Visual:

- Brass containers
- Red chili
- Turmeric
- Green spices
- Black spices
- Warm lantern lighting

---

## Image 04 — Fish Dish

Traditional Bengali fish preparation.

Visual:

- Whole plated fish
- Rich golden sauce
- Red chilies
- Curry leaves/herbs
- Dark ceramic/metal plate
- Macro food photography

---

## Image 05 — Dining Table

Elegant restaurant dining table.

Visual:

- Brass serving vessels
- Plates
- Wine glasses
- Candles
- Warm lantern
- Deep amber bokeh

---

## Image 06 — Heritage Architecture

Decorative restaurant interior.

Visual:

- Islamic/Bengali patterned screens
- Arched windows
- Warm light
- Plants
- Gold/bronze details

---

## Image 07 — Spices

Close-up spice display.

Visual:

- Multiple bowls
- Different colored spices
- Red
- Orange
- Yellow
- Green
- Brown
- Black

Use strong top-down/editorial photography.

---

## Image 08 — Main Restaurant Interior

Wide restaurant interior.

Visual:

- Multiple dining tables
- Tall arches
- Hanging lanterns
- Plants
- Warm golden lighting
- Symmetrical/deep perspective

---

## Image 09 — Food / Rice Repeat

Use a different crop or alternate photograph of the rice dish.

The reference intentionally repeats the food visual language.

---

## Image 10 — People & Moments

Four people dining together.

Visual:

- Natural conversation
- Food on table
- Warm candlelight
- Brass serving vessels
- Restaurant interior visible behind them
- Genuine hospitality atmosphere

Avoid stiff stock-photo posing.

---

## Image 11 — Lantern

Single decorative heritage lantern.

Visual:

- Tall ornate metal lantern
- Internal warm light
- Dark background
- Plants around it
- Strong shallow depth of field

---

## Image 12 — Restaurant Interior

Another wide architectural shot.

Visual:

- Arched windows
- Hanging lanterns
- Green plants
- Warm restaurant lighting
- Rich heritage details
- Deep perspective

---

# 14. Image Card Aspect Ratio

Desktop cards should visually match the screenshot.

Approximate card ratio:

```text
1.45 : 1
```

Recommended:

```css
aspect-ratio: 1.45 / 1;
```

Do not use square cards.

The gallery should feel like a premium editorial photo wall.

---

# 15. Gallery Hover Interaction

On desktop hover:

1. Image gently zooms.
2. Brightness increases slightly.
3. Gold border becomes more visible.
4. Optional dark transparent overlay appears.
5. A small gold camera/gallery icon can appear in the center.

Animation:

```text
300–450ms ease
```

Image zoom:

```text
scale(1.04)
```

Do not use aggressive animations.

---

# 16. Gallery Lightbox

Clicking an image should open a premium lightbox.

Lightbox background:

```text
rgba(0,0,0,0.94)
```

Image centered.

Include:

- Close button
- Previous button
- Next button
- Image counter
- Optional category label

Controls should use subtle gold accents.

---

# 17. Bottom Decorative Element

After the fourth gallery row, continue the black background.

At the bottom edge of the visible gallery area, place another large cropped ornamental floral design.

It should mirror the decorative language used in the hero's bottom-left corner.

Place a small central gold ornament above/between the bottom decoration if needed.

---

# 18. Typography System

## Display Font

Use one elegant serif font.

Preferred:

```text
Cormorant Garamond
```

Alternative:

```text
Playfair Display
```

or:

```text
DM Serif Display
```

Use this for:

- Hero heading
- Story banner heading
- Important decorative titles

---

## UI Font

Use a clean modern sans-serif.

Recommended:

```text
Inter
```

Alternative:

```text
Manrope
```

Use for:

- Navigation
- Filter buttons
- Login/register
- CTA
- Supporting descriptions

---

# 19. Font Hierarchy

```text
Hero eyebrow
11–13px
uppercase
letter-spacing: 4–5px

Hero title
46–52px
serif
line-height: 1.05

Hero description
15–17px
line-height: 1.7

Story title
27–31px
serif

Story description
15–17px

Navigation
12–14px

Filter buttons
13–14px
```

---

# 20. Responsive Behavior

## Desktop — 1200px+

Use:

```text
3-column gallery
```

Hero:

```text
left content + right image
```

Navigation remains horizontal.

---

## Tablet — 768px–1199px

Use:

```text
3-column gallery
```

but reduce:

- Card gap
- Navigation spacing
- Hero heading size
- Filter button padding

---

## Mobile — <768px

Navigation becomes a compact mobile navigation.

Hero becomes:

```text
image background
+
dark overlay
+
centered text
```

Hero heading:

```text
36–42px
```

Gallery becomes:

```text
2 columns
```

Story banner:

- Reduce height
- Reduce ornament size
- Stack icon/text if required

Filters should become horizontally scrollable rather than wrapping into many rows.

---

## Small Mobile — <480px

Gallery:

```text
1 column
```

Hero:

```text
~300–350px
```

Story title:

```text
23–26px
```

Filter buttons remain horizontally scrollable.

---

# 21. Spacing System

Use the following approximate spacing:

```text
Navbar → Hero:
0

Hero → Separator:
0

Separator → Story Banner:
18px

Story Banner → Filters:
22px

Filters → Gallery:
25–28px

Gallery row gap:
14–16px

Gallery horizontal gap:
14–16px

Gallery → Bottom ornament:
20–30px
```

---

# 22. Visual Effects

Use subtle effects only.

### Image Shadow

```css
box-shadow:
  0 8px 30px rgba(0,0,0,0.35);
```

### Gold Glow

Use extremely subtle gold glow around decorative elements:

```css
box-shadow:
  0 0 12px rgba(217,149,36,0.10);
```

Do not overuse glow.

---

# 23. Decorative Language

All decorative assets should belong to one consistent visual family.

Use:

- Bengali floral patterns
- Islamic geometric motifs
- Traditional lantern illustrations
- Diamond ornaments
- Fine gold linework
- Symmetrical framing
- Brass/gold visual language

Avoid:

- Modern neon effects
- Blue/purple gradients
- Excessive glassmorphism
- Thick borders
- Cartoon icons
- Flat generic restaurant illustrations

---

# 24. Exact Visual Character

The page should feel:

```text
Luxury
+
Bengali Heritage
+
Warm Hospitality
+
Editorial Photography
+
Traditional Craftsmanship
```

It should NOT feel like:

```text
Generic restaurant website
Modern SaaS dashboard
Bright food delivery app
Minimal white gallery
Generic Pinterest masonry grid
```

---

# 25. Component Architecture

Recommended component structure:

```text
GalleryPage
│
├── Navbar
│   ├── BerestaLogo
│   ├── NavLinks
│   ├── AuthLink
│   └── BookTableButton
│
├── GalleryHero
│   ├── HeroEyebrow
│   ├── HeroTitle
│   ├── HeroDescription
│   ├── HeroImage
│   └── HeroOrnament
│
├── GoldSeparator
│
├── StoryBanner
│   ├── SideOrnament
│   ├── LanternIcon
│   ├── StoryTitle
│   └── StoryDescription
│
├── GalleryFilters
│   └── FilterButton[]
│
├── GalleryGrid
│   └── GalleryCard[]
│
├── GalleryLightbox
│
└── BottomOrnament
```

---

# 26. Suggested Data Model

Use an array like:

```js
const galleryItems = [
  {
    id: 1,
    category: "Food",
    image: "/images/gallery/food-rice-01.jpg",
    alt: "Traditional Bengali rice dish"
  },
  {
    id: 2,
    category: "The Restaurant",
    image: "/images/gallery/restaurant-entrance.jpg",
    alt: "Beresta restaurant entrance"
  },
  {
    id: 3,
    category: "Bengali Heritage",
    image: "/images/gallery/spices-01.jpg",
    alt: "Traditional Bengali spices"
  },
  {
    id: 4,
    category: "Food",
    image: "/images/gallery/fish-dish.jpg",
    alt: "Traditional Bengali fish dish"
  },
  {
    id: 5,
    category: "Food",
    image: "/images/gallery/dining-table.jpg",
    alt: "Beresta dining table"
  },
  {
    id: 6,
    category: "Bengali Heritage",
    image: "/images/gallery/heritage-architecture.jpg",
    alt: "Bengali heritage interior"
  },
  {
    id: 7,
    category: "Bengali Heritage",
    image: "/images/gallery/spices-02.jpg",
    alt: "Traditional spice collection"
  },
  {
    id: 8,
    category: "The Restaurant",
    image: "/images/gallery/restaurant-interior-01.jpg",
    alt: "Beresta restaurant interior"
  },
  {
    id: 9,
    category: "Food",
    image: "/images/gallery/food-rice-02.jpg",
    alt: "Traditional Bengali rice dish"
  },
  {
    id: 10,
    category: "People & Moments",
    image: "/images/gallery/people-dining.jpg",
    alt: "Guests enjoying a meal at Beresta"
  },
  {
    id: 11,
    category: "Bengali Heritage",
    image: "/images/gallery/heritage-lantern.jpg",
    alt: "Traditional decorative lantern"
  },
  {
    id: 12,
    category: "The Restaurant",
    image: "/images/gallery/restaurant-interior-02.jpg",
    alt: "Beresta restaurant interior"
  }
];
```

---

# 27. Filter Behavior

Default:

```text
All
```

Display all 12 images.

When clicking:

```text
Food
```

show only Food items.

When clicking:

```text
The Restaurant
```

show restaurant architecture/interior images.

When clicking:

```text
Bengali Heritage
```

show heritage, spice, lantern, and architectural details.

When clicking:

```text
People & Moments
```

show guest/social moments.

When clicking:

```text
Events
```

show event-related gallery images.

Filtering should animate smoothly.

Use a short fade/scale transition.

---

# 28. Implementation Notes

If implementing in Next.js + React:

- Keep the page server-rendered where possible.
- Make only the interactive filter/lightbox portion client-side.
- Store gallery images in `/public/images/gallery/`.
- Use optimized image loading.
- Use lazy loading for images below the hero.
- Use the first hero image with high priority.
- Preserve image aspect ratios to minimize layout shift.

---

# 29. Important Asset Rules

Do not generate generic replacement images if real Beresta photography is available.

Use:

1. Actual Beresta logo
2. Actual restaurant architecture
3. Actual restaurant interior
4. Actual food photography
5. Actual staff/guest photography where available
6. Consistent Bengali heritage ornament assets

All images must share the same warm cinematic color language.

---

# 30. Final Pixel-Level Checklist

Before considering the page complete, verify:

- [ ] Background is almost black
- [ ] Navbar height matches reference
- [ ] Beresta logo is correctly positioned
- [ ] Gallery nav item is gold and underlined
- [ ] Book Table button is gold/orange
- [ ] Hero is approximately 290px tall on desktop
- [ ] Hero has dark left panel and warm restaurant image on right
- [ ] "OUR GALLERY" has decorative horizontal lines
- [ ] "Moments Of Beresta" uses an elegant serif font
- [ ] Hero description is two lines
- [ ] Bottom-left hero ornament is visible
- [ ] Gold separator has central ornament
- [ ] Story banner has rounded gold border
- [ ] Story banner contains lantern icon
- [ ] Story title is gold serif
- [ ] Story banner has side ornaments
- [ ] Filters are pill-shaped
- [ ] "All" filter is filled gold
- [ ] Gallery has exactly 3 columns on desktop
- [ ] Gallery cards have rounded corners
- [ ] Gallery cards have thin gold borders
- [ ] Gallery cards have approximately 1.45:1 aspect ratio
- [ ] Gallery gap is approximately 14–16px
- [ ] 12 visible desktop gallery cards are arranged in 4 rows × 3 columns
- [ ] Images have warm amber cinematic grading
- [ ] Images are not overly bright
- [ ] Hover effect is subtle
- [ ] Clicking an image opens a lightbox
- [ ] Bottom decorative ornament is present
- [ ] Mobile layout changes appropriately
- [ ] No blue/purple/modern neon colors appear
- [ ] No generic white gallery styling appears
- [ ] Overall result feels like a premium Bengali heritage restaurant
