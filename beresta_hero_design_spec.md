# Beresta Restaurant Landing Page --- Design & Interaction Specification

## 1. Project Overview

Build a premium, cinematic restaurant landing page for **Beresta ---
Bengali Cuisine**.

The most important part of this project is the **hero experience**:

1.  The user initially sees a normal, elegant restaurant hero section.
2.  The hero uses the supplied warm cream/beige background and the
    Beresta restaurant image.
3.  When the user starts scrolling, the hero becomes a pinned cinematic
    viewport.
4.  The restaurant animation is NOT displayed as a video element.
5.  Instead, scrolling scrubs through **300 individual image frames**
    extracted from a 10-second source animation.
6.  Frame 1 is shown at the beginning of the scroll sequence.
7.  Frame 300 is shown at the end.
8.  Only after frame 300 has been reached does the pinned hero release
    and the next landing-page section appear.
9.  Scrolling upward must reverse the frame sequence smoothly.

The experience should feel like a premium modern restaurant website, not
like a video player.

------------------------------------------------------------------------

# 2. Core Design Principle

The website should communicate:

-   Premium Bengali cuisine
-   Warm hospitality
-   Authenticity
-   Modern elegance
-   Cultural detail without looking old-fashioned
-   Cinematic storytelling
-   Strong visual hierarchy
-   Plenty of breathing room

Do NOT make the entire website coffee-brown.

The supplied cream/beige background should be the main visual
foundation.

Use dark espresso/brown primarily for typography and important UI
elements, with muted gold as an accent.

------------------------------------------------------------------------

# 3. Reference Assets

There are two critical visual references.

## Reference A --- Main Hero Background

Use the supplied warm cream/beige abstract background as the hero
background.

Characteristics:

-   Soft cream
-   Warm beige
-   Subtle blurred gradients
-   Very low contrast
-   Spacious
-   Premium
-   Minimal
-   Slight decorative sparkle

DO NOT redesign this background.

DO NOT replace it with a dark background.

DO NOT turn the entire design brown.

The background should remain light and airy.

## Reference B --- Beresta Restaurant Image

Use the supplied Beresta restaurant exterior image as the
architectural/brand reference.

The restaurant image represents the real physical restaurant.

Preserve:

-   Building identity
-   Restaurant façade
-   Beresta logo
-   Bengali signage
-   Entrance
-   Decorative Islamic/Bengali-inspired patterns
-   Golden lighting
-   Greenery
-   Restaurant proportions
-   Overall architectural character

Do not redesign or reinterpret the restaurant.

------------------------------------------------------------------------

# 4. Overall Page Structure

The landing page should follow this structure:

``` text
HEADER
   ↓
NORMAL HERO INTRODUCTION
   ↓
SCROLL-DRIVEN CINEMATIC RESTAURANT SEQUENCE
   ↓
OUR STORY
   ↓
SIGNATURE DISHES
   ↓
MENU
   ↓
GALLERY
   ↓
LOCATION / CONTACT
   ↓
FOOTER
```

The first hero and the cinematic sequence are conceptually one
experience.

------------------------------------------------------------------------

# 5. Initial Hero --- IMPORTANT

Before the user starts the cinematic scroll sequence, show a normal
premium restaurant hero.

This must look like a complete landing-page hero by itself.

## Layout

Use a wide desktop composition.

### Background

Full viewport warm cream/beige background.

### Header

Place a clean navigation bar at the top.

Left:

**Beresta**

Right:

-   Home
-   Menu
-   About
-   Gallery
-   Contact
-   Book a Table

The header should be elegant and minimal.

Do not use a heavy navbar background.

Use the background naturally.

## Hero Content

Place the main text toward the left side.

Suggested hierarchy:

Small eyebrow:

**AUTHENTIC BENGALI CUISINE**

Large heading:

**A Taste of Bengal**

Supporting text:

**Experience the rich flavors and timeless traditions of Bengali
cuisine, made with love.**

Primary CTA:

**Explore Our Menu**

Secondary action:

**Watch Our Story**

The secondary action should NOT open or display the 10-second video.

It can either:

-   scroll to the cinematic sequence, or
-   act as a subtle visual cue toward the scroll experience.

## Restaurant Image

Place the Beresta restaurant image prominently on the right.

Do NOT put it inside a basic rectangular card.

Blend the image naturally into the cream background.

Use:

-   soft feathered edges
-   subtle transparency/fade
-   warm atmospheric blending
-   slight shadow where necessary
-   no harsh border

The image should remain recognizable and realistic.

------------------------------------------------------------------------

# 6. Initial Hero Visual Hierarchy

The eye should move in this order:

``` text
1. Beresta brand
2. "A Taste of Bengal"
3. Restaurant architecture
4. CTA
5. Small supporting details
```

The restaurant must remain the visual star.

Do not make the text so large that it competes with the restaurant
façade.

------------------------------------------------------------------------

# 7. Hero Typography

Use two primary font personalities.

## Display Font

Elegant editorial serif.

Use it for:

-   A Taste of Bengal
-   Section headings
-   Important brand statements

The typography should feel:

-   sophisticated
-   warm
-   premium
-   editorial
-   timeless

## Body Font

Modern clean sans-serif.

Use it for:

-   Navigation
-   Paragraphs
-   Buttons
-   Labels
-   Small UI text

Avoid using too many fonts.

Maximum:

-   1 display serif
-   1 sans-serif
-   optional Bengali decorative type only when genuinely useful

------------------------------------------------------------------------

# 8. Color System

Primary background:

``` text
Warm Cream / Ivory
```

Suggested direction:

``` text
#F6EBDD
#FFF8EE
```

Primary text:

``` text
Deep Espresso
```

Suggested:

``` text
#382116
```

Accent:

``` text
Muted Warm Gold
```

Suggested:

``` text
#B7833F
```

Secondary text:

``` text
Warm Taupe
```

Avoid:

-   saturated orange
-   bright yellow
-   excessive gold
-   full coffee-brown UI
-   neon colors
-   cold blue
-   overly dark sections everywhere

------------------------------------------------------------------------

# 9. Scroll Experience

This is the most important interaction in the website.

The user must NOT see a normal video player.

There must be:

-   no video controls
-   no play button over the animation
-   no visible video timeline
-   no embedded video element for the cinematic sequence

Instead, use the 300 extracted images.

The animation is controlled entirely by scroll position.

------------------------------------------------------------------------

# 10. Scroll Sequence Architecture

Use a tall scroll section containing a sticky viewport.

Conceptually:

``` text
Scroll Sequence Section
│
├── Tall Scroll Container
│
└── Sticky Viewport
    │
    ├── Canvas
    │
    └── Optional Overlay UI
```

The sticky viewport remains fixed while the user scrolls through the
sequence.

Map scroll progress to frame index.

Example:

``` text
0% scroll     → Frame 001
10%           → Frame 030
25%           → Frame 075
50%           → Frame 150
75%           → Frame 225
100%          → Frame 300
```

The exact interpolation should be smooth.

------------------------------------------------------------------------

# 11. Frame Rendering

Use an HTML Canvas for the image sequence.

Do NOT render 300 visible `<img>` elements simultaneously.

The canvas should display the current frame.

Recommended conceptual logic:

``` text
scroll progress
       ↓
frame calculation
       ↓
current frame
       ↓
canvas redraw
```

Example:

``` text
frameIndex = floor(progress * 299)
```

Clamp the result between:

``` text
0 and 299
```

Frame numbering may be:

``` text
frame-001.webp
frame-002.webp
...
frame-300.webp
```

------------------------------------------------------------------------

# 12. Frame Loading / Performance

Performance is extremely important.

Implement:

-   image preloading
-   progressive loading
-   requestAnimationFrame rendering
-   responsive canvas sizing
-   device pixel ratio handling
-   memory-conscious image management
-   loading indicator or graceful initial state

Do not freeze the page while all 300 images are synchronously loaded.

Prefer a loading strategy where the first frames become available
quickly and remaining frames load progressively.

The first frame must be prioritized.

------------------------------------------------------------------------

# 13. Image Format

Prefer:

``` text
.webp
```

or:

``` text
.avif
```

if the project's browser support and pipeline are appropriate.

Avoid unnecessarily huge PNG files.

The image sequence should be optimized for web delivery.

------------------------------------------------------------------------

# 14. Scroll Distance

The sequence should feel cinematic rather than rushed.

Start around:

``` text
450vh–550vh
```

for the sequence section.

Tune based on the actual animation.

The user should feel that they are revealing a story through scrolling.

Do not make the animation finish after a tiny scroll.

Do not make the scroll so long that it becomes frustrating.

------------------------------------------------------------------------

# 15. Scroll Direction

Scrolling down:

``` text
Frame 001
→ Frame 002
→ Frame 003
...
→ Frame 300
```

Scrolling back up:

``` text
Frame 300
→ Frame 299
→ Frame 298
...
→ Frame 001
```

The sequence must be fully reversible.

Do not restart the animation from frame 1 when the user scrolls upward.

------------------------------------------------------------------------

# 16. Initial Hero → Sequence Transition

The transition from the normal hero into the cinematic sequence must
feel seamless.

At the beginning:

``` text
Cream background
+
Hero text
+
Restaurant image
```

As the user begins scrolling:

-   hero content can subtly fade
-   restaurant image can become more prominent
-   decorative UI can disappear gradually
-   the canvas sequence takes over

Do NOT suddenly cut to a black screen.

Do NOT abruptly replace the entire design.

The transition should feel like the hero is transforming into a
cinematic scene.

------------------------------------------------------------------------

# 17. Suggested Scroll Story

The exact frame content depends on the supplied 300 frames, but use the
following conceptual structure.

## Frames 1--50

Establish the restaurant.

Keep some hero atmosphere visible.

Possible subtle text:

**A Taste of Bengal**

The text gradually fades.

## Frames 50--150

Let the restaurant animation become the primary focus.

Minimal or no text.

The architecture and cinematic movement should speak for itself.

## Frames 150--230

Continue the cinematic movement.

Optional tiny contextual text:

**Crafted with tradition.**

This should be extremely subtle.

## Frames 230--290

Prepare the transition.

Possible text:

**Where every meal feels like home.**

## Frames 290--300

Reach the final composition.

Show the final frame clearly.

Do not immediately cut away.

Hold the final frame briefly while the scroll reaches the end.

------------------------------------------------------------------------

# 18. Releasing the Sticky Section

The next section must NOT appear before frame 300.

Once the user reaches the end of the sequence:

``` text
Frame 300
      ↓
Sticky viewport releases
      ↓
Next section enters normally
```

This should feel like the cinematic introduction has completed.

------------------------------------------------------------------------

# 19. Next Section

The next section can introduce the restaurant story.

Example:

``` text
OUR STORY

Rooted in Bengal.
Created for today.

Beresta brings traditional Bengali flavors,
warm hospitality, and a modern dining experience
together under one roof.

[Discover Our Story]
```

Use the same warm cream visual language.

Do not suddenly switch to a completely different website design.

------------------------------------------------------------------------

# 20. Decorative Language

Use subtle cultural-inspired ornamentation.

Possible elements:

-   fine Bengali/Islamic-inspired line patterns
-   delicate floral line art
-   tiny gold ornaments
-   subtle sparkles
-   thin divider ornaments

Keep them extremely subtle.

They should support the brand rather than dominate the UI.

Avoid giant doodles.

Avoid cartoon food illustrations.

Avoid excessive ornamental borders.

------------------------------------------------------------------------

# 21. Motion Design

Motion should feel:

-   slow
-   smooth
-   premium
-   cinematic
-   intentional

Use subtle:

-   opacity transitions
-   image fades
-   text movement
-   scale changes
-   parallax
-   reveal animations

Avoid:

-   bouncing
-   excessive spinning
-   aggressive zooms
-   flashy transitions
-   random animations

The 300-frame sequence is already the main animation.

Everything else should support it.

------------------------------------------------------------------------

# 22. Desktop Experience

Desktop is the primary design target.

Recommended:

``` text
Hero height: 100vh
Sequence viewport: 100vh
Sequence scroll distance: approximately 450–550vh
```

The restaurant image should have enough space to breathe.

Use generous horizontal margins.

Do not stretch the restaurant image unnaturally.

------------------------------------------------------------------------

# 23. Mobile Experience

Do not blindly use the desktop composition on mobile.

On mobile:

-   simplify navigation
-   use a mobile menu
-   reduce typography
-   reposition the restaurant image
-   preserve the subject
-   maintain the cinematic sequence if performance allows

If 300 high-resolution frames are too expensive on mobile, create a
mobile-optimized frame set.

Do NOT sacrifice the entire website's performance just to force the
desktop frame assets onto mobile.

------------------------------------------------------------------------

# 24. Accessibility

Include:

-   semantic HTML
-   proper heading hierarchy
-   alt text for meaningful images
-   keyboard accessible navigation
-   visible focus states
-   accessible buttons
-   reduced-motion consideration

For users who prefer reduced motion:

provide a simplified static hero/fallback experience instead of forcing
the full scroll animation.

------------------------------------------------------------------------

# 25. Important UX Rule

The user should understand that scrolling is controlling the cinematic
experience.

Use a very subtle indicator:

``` text
SCROLL TO DISCOVER
       ↓
```

or:

``` text
SCROLL
  ↓
```

Do not use a large intrusive instruction.

After scrolling begins, the indicator should disappear.

------------------------------------------------------------------------

# 26. Technical Recommendation

Preferred stack:

``` text
Next.js
React
Tailwind CSS
GSAP + ScrollTrigger
HTML Canvas
```

GSAP ScrollTrigger can be used to:

-   pin the sequence viewport
-   calculate scroll progress
-   map progress to frame number
-   control transitions
-   release the pinned section at the correct point

Do not introduce unnecessary libraries.

------------------------------------------------------------------------

# 27. Suggested Component Structure

``` text
components/
│
├── Navbar.tsx
├── HeroIntro.tsx
├── RestaurantSequence.tsx
├── SequenceCanvas.tsx
├── ScrollIndicator.tsx
├── StorySection.tsx
├── SignatureDishes.tsx
├── MenuSection.tsx
├── GallerySection.tsx
├── ContactSection.tsx
└── Footer.tsx
```

Possible sequence component structure:

``` text
RestaurantSequence
│
├── SequenceCanvas
├── IntroOverlay
├── CinematicOverlay
└── EndOverlay
```

------------------------------------------------------------------------

# 28. Asset Structure

Recommended:

``` text
public/
└── images/
    └── beresta/
        ├── hero-background.webp
        ├── restaurant-reference.webp
        └── sequence/
            ├── frame-001.webp
            ├── frame-002.webp
            ├── frame-003.webp
            ├── ...
            └── frame-300.webp
```

Do not load all assets from remote random URLs.

Keep asset paths predictable.

------------------------------------------------------------------------

# 29. Critical Do-Not-Do Rules

DO NOT:

-   display the original 10-second video
-   add a visible video player
-   autoplay a video instead of the frame sequence
-   replace the 300-frame scroll interaction with a normal video
-   redesign the restaurant architecture
-   alter the restaurant's identity
-   replace the supplied background with a dark background
-   make the whole UI coffee-brown
-   add excessive decorative elements
-   make the first hero look like a generic template
-   show the next section before frame 300
-   make scrolling non-reversible
-   render 300 large `<img>` elements visibly at once
-   block the page while unnecessarily loading every asset
-   add unnecessary 3D effects

------------------------------------------------------------------------

# 30. Critical Success Criteria

The implementation is successful only if the following are true:

### Initial state

The user sees a beautiful normal Beresta restaurant hero.

### Scroll begins

The hero becomes pinned.

### During scroll

The restaurant animation progresses through the 300 images.

### No video

The original video is never displayed as a video element.

### Scroll control

The user's scroll position controls the exact animation frame.

### Reverse

Scrolling upward reverses the animation.

### End

Frame 300 is reached before the next section appears.

### Release

After frame 300, the hero section naturally releases and the landing
page continues.

### Visual quality

The experience feels like a premium cinematic restaurant website.

------------------------------------------------------------------------

# 31. Final Creative Direction

Think of the experience as:

``` text
NORMAL WEBSITE HERO
        ↓
"Let me introduce Beresta..."
        ↓
USER SCROLLS
        ↓
THE HERO COMES ALIVE
        ↓
CINEMATIC RESTAURANT JOURNEY
        ↓
300 FRAMES
        ↓
THE STORY ENDS
        ↓
"Now discover Beresta."
        ↓
NORMAL LANDING PAGE
```

The goal is NOT to make the website look technically impressive for its
own sake.

The goal is to make the restaurant's physical identity and Bengali
dining experience feel like a cinematic introduction to the website.

**The first hero must remain elegant and natural. The scroll sequence
should be the surprise.**
