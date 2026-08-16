# Beresta — Exact Hero Design Specification

## Purpose

Recreate the supplied Beresta hero design as closely as possible.

The user will provide the **middle Beresta restaurant image separately**. Insert that exact image into the central image area.

The design must remain **minimalistic, premium, spacious, black-dominant, and orange/amber-accented**.

---

# 1. Overall Composition

Use this exact visual hierarchy:

```text
HEADER
   ↓
AUTHENTIC BANGALI CUISINE
   ↓
A Taste Of Bengal
   ↓
CENTRAL BERESTA RESTAURANT IMAGE
   ↓
SHORT DESCRIPTION
   ↓
FOUR FEATURE ITEMS
```

The central restaurant image is the main visual focus.

The left and right sides of the restaurant image must remain **clean negative space**.

---

# 2. Header

### Left
Display only the primary **Beresta** wordmark/logo.

Do NOT include:
- Bengali Beresta text
- “Bengali Cuisine” beside the logo

### Center Navigation
- Home
- About
- Menu
- Awards
- Contact

### Right
- Log In / Registration
- Book Table

Keep the header minimal and spacious.

---

# 3. Background

Use a predominantly black background.

Suggested base:

`#050505`

Supporting dark tones may include:

`#0A0806`
`#100B07`

Use warm orange/amber only for accents.

Suggested accent direction:

`#F28A18`
`#FF9D2E`
`#C96A10`

Black must clearly dominate.

Do not make the background coffee-brown.

Do not use blue, purple, neon colors, or excessive orange.

---

# 4. Center Hero Text

Place both of these elements in the **middle**, exactly as in the supplied design.

### Eyebrow

**AUTHENTIC BANGALI CUISINE**

- centered
- uppercase
- small
- generous letter spacing
- warm orange/amber
- subtle ornament/divider if appropriate

### Main Heading

**A Taste Of Bengal**

- centered
- large elegant serif
- warm ivory/gold
- premium editorial appearance
- not excessively oversized

The heading must remain directly above the restaurant image.

---

# 5. Central Restaurant Image

The user will provide the actual Beresta restaurant image.

Use the supplied image exactly.

Do NOT:
- redesign the architecture
- reinterpret the façade
- replace the building
- change the restaurant identity
- invent architectural elements
- alter the logo
- add fake signage

The image should be treated as the real restaurant reference.

## Image Treatment

Keep the same visual feeling as the supplied reference:

- wide horizontal image
- soft oval/arched cinematic shape
- feathered edges
- subtle dark blending into the black background
- warm orange atmospheric glow
- no harsh rectangular card border

The restaurant should remain clearly recognizable.

---

# 6. LEFT AND RIGHT SIDES — CRITICAL

Remove the entire left-side paragraph from the reference.

Remove the entire right-side paragraph from the reference.

There must be **NO text on either side of the restaurant image**.

Do NOT replace the text with:

- heritage copy
- signature dish copy
- descriptive paragraphs
- quotes
- additional feature text
- cards

Leave these areas as **clean, intentional negative space**.

This is essential to preserve the minimalist design.

---

# 7. Side Decorations

Only very subtle decorative elements may remain on the left and right.

Allowed:

- tiny orange sparkle
- very thin ornamental detail
- subtle corner line art

Do not add large illustrations.

Do not add icons beside the restaurant.

Do not fill the negative space.

---

# 8. Text Below Restaurant Image

Use exactly:

**Experience The Rich Flavors And Timeless Traditions Of Bengali Cuisine, Made With Love.**

Center-align it.

Use a smaller elegant font.

Color: warm ivory / muted gold.

Keep generous space around it.

---

# 9. REMOVE BOTH HERO BUTTONS

Completely remove:

- Explore Our Menu
- Watch Our Story

Do NOT replace them with other hero buttons.

The area below the description should remain clean.

---

# 10. Bottom Feature Row

Keep the four minimal feature items.

### Authentic Recipes
Traditional flavors passed down

### Fresh Ingredients
Carefully selected every day

### Warm Hospitality
Where every meal feels like home

### Quality & Care
Made with passion and perfection

Use four columns on desktop.

Use subtle vertical orange dividers between them.

Do NOT place the features inside cards.

Do NOT use large boxes or heavy backgrounds.

---

# 11. Feature Icons

Use small, elegant line icons:

- serving dish
- leaf
- steaming bowl/cup
- quality badge

Use thin orange/amber strokes.

No cartoon icons, emoji, or colorful illustrations.

---

# 12. Bottom Corner Decoration

Keep the elegant Bengali-inspired floral/ornamental line-art at the lower left and lower right corners from the reference.

Requirements:

- thin orange lines
- subtle opacity
- mostly confined to corners
- never overlap important content
- never compete with the restaurant image

The decoration should feel premium and understated.

---

# 13. Sparkles

Use only a few tiny orange/gold sparkles.

They should act as micro-details, not major visual elements.

Do not scatter sparkles everywhere.

---

# 14. Typography

Use two main font personalities.

### Display
Elegant high-contrast serif.

Use for:

- A Taste Of Bengal
- selected feature headings

### UI / Body
Clean modern sans-serif.

Use for:

- navigation
- eyebrow
- description
- feature subtitles
- buttons elsewhere on the site

Do not use many different fonts.

---

# 15. Color Hierarchy

Target approximately:

- Black / near-black: 75–85%
- Warm ivory: 10–15%
- Orange / amber: 5–10%

Orange is an accent only.

---

# 16. Spacing

The design must breathe.

Do NOT try to fill empty areas.

The left and right negative spaces around the central restaurant image are intentional.

Use:

- generous margins
- generous vertical spacing
- restrained ornamentation
- clear hierarchy

Minimalism is more important than adding more content.

---

# 17. Responsive Design

### Desktop

Keep the full composition.

- large central image
- visible left/right negative space
- horizontal feature row

### Tablet

Reduce:

- heading size
- image width
- navigation spacing
- feature spacing

### Mobile

Stack naturally:

```text
Header
↓
AUTHENTIC BANGALI CUISINE
↓
A Taste Of Bengal
↓
Restaurant Image
↓
Description
↓
Feature Items
```

The desktop side negative spaces can collapse naturally.

The bottom decorations must be reduced significantly on mobile.

---

# 18. Scroll-Driven Cinematic Integration

This hero is the opening state of the previously specified 300-frame cinematic scroll experience.

The interaction is:

```text
Initial static hero
        ↓
User scrolls
        ↓
Hero becomes sticky
        ↓
300 image frames begin
        ↓
Scroll position controls frame
        ↓
Frame 300
        ↓
Hero releases
        ↓
Next landing-page section
```

The original 10-second video must **NOT** be displayed.

Use the 300 extracted images.

Use a canvas/image-sequence approach.

---

# 19. Scroll Sequence Rules

Scrolling down:

`Frame 001 → Frame 002 → ... → Frame 300`

Scrolling up:

`Frame 300 → Frame 299 → ... → Frame 001`

The animation must be reversible.

The next section must not appear until Frame 300 has been reached.

---

# 20. Initial Hero Transition

The initial hero should look exactly like this design before scrolling.

When scrolling starts:

- static hero overlays can fade subtly
- the restaurant becomes more prominent
- the cinematic frame sequence takes over
- unnecessary text disappears smoothly
- side negative spaces remain clean

Do not abruptly cut to a video.

Do not suddenly switch to a different visual theme.

---

# 21. Exact Hero Text Content

The hero should contain only:

### Header
**Beresta**

**Home / About / Menu / Awards / Contact**

**Log In / Registration**

**Book Table**

### Center
**AUTHENTIC BANGALI CUISINE**

**A Taste Of Bengal**

### Below Image
**Experience The Rich Flavors And Timeless Traditions Of Bengali Cuisine, Made With Love.**

### Bottom Features
**Authentic Recipes** — Traditional flavors passed down

**Fresh Ingredients** — Carefully selected every day

**Warm Hospitality** — Where every meal feels like home

**Quality & Care** — Made with passion and perfection

Nothing else should be added to this hero.

---

# 22. Strictly Remove

Do NOT include:

- left-side paragraph
- right-side paragraph
- Explore Our Menu
- Watch Our Story
- replacement hero buttons
- extra hero paragraphs
- excessive decoration
- large side illustrations
- large food graphics
- excessive orange
- coffee-brown background
- blue/purple accents
- visible video controls
- normal video player

---

# 23. Final Creative Direction

The finished hero should communicate:

**Premium Bengali restaurant + cinematic storytelling + minimal luxury.**

The black background provides sophistication.

The orange/amber accents connect naturally with the warm restaurant lighting.

The central Beresta image is the main visual.

The empty left and right areas create breathing room.

The center text establishes the restaurant identity.

The bottom feature row adds just enough information without clutter.

The user then scrolls into the 300-frame cinematic sequence, which eventually releases into the rest of the landing page.

The final result should feel:

**minimal, premium, spacious, warm, cinematic, elegant, and unmistakably Beresta.**
