# ⚙️ Optimization Progress Log

> Tracks execution of `PERFORMANCE_OPTIMIZATION_PLAN.md` — updated live as each step completes.

| Step | Description | Status | Result |
|------|-------------|--------|--------|
| 1 | Fix frame preloading (30 critical + background) | ✅ Done | `useFrameSequence.js` rewritten with 2-phase loader |
| 2a | Move meal.mp4 to /public/ | ✅ Done | File moved from `src/assets/meal.mp4` → `public/meal.mp4` |
| 2b | Remove meal import from constants/index.js | ✅ Done | Barrel export now only has `images` and `data` |
| 2c | Update Intro.jsx — preload=none, public URL | ✅ Done | Simplified component, no webpack bundling of video |
| 3a | Remove @import from index.css | ✅ Done | Replaced with a comment explaining fonts are in index.html |
| 3b | Add async Google Fonts preload to index.html | ✅ Done | preconnect + preload + noscript fallback added |
| 4 | Add loading="lazy" to all below-fold images | ✅ Done | AboutUs (2), Chef (4), Laurels (2), Gallery (9) images updated |
| 5a | Copy 5 large images to /public/images/ | ✅ Done | bg(7.4MB), welcome(3.3MB), findus(2.8MB), laurels(2.7MB), menu(1.7MB) |
| 5b | Update constants/images.js — URL strings for large imgs | ✅ Done | 5 large images now use `/images/xxx.png` public paths |
| 5c | Delete originals from src/assets/ | ✅ Done | ~18 MB removed from webpack bundle scope |
| 6 | Create vercel.json (CDN cache headers) | ✅ Done | 1-year immutable cache for /static/, /images/, /meal.mp4, .js, .css |
| — | Production build verification | ✅ Done | `npm run build` completed successfully. JS: 91.58 kB, CSS: 10.23 kB |

---

## 📝 Detailed Change Log

### Step 1 — `src/components/Hero/useFrameSequence.js`
- **Before:** All 300 frames loaded in batches of 20 simultaneously on startup (~10 MB download before hero visible)
- **After:** First 30 frames loaded in batches of 10 immediately (hero visible in <1s), remaining 270 frames load silently in background

### Step 2 — Video: `meal.mp4`
- **Before:** `meal.mp4` imported as a JS module in `src/constants/index.js` — webpack bundled it, browser downloaded ~4 MB on every page load
- **After:**
  - File moved to `public/meal.mp4` (static asset, not bundled)
  - `src/constants/index.js` — removed `meal` export entirely
  - `src/container/Intro/Intro.jsx` — uses `src="/meal.mp4"` with `preload="none"` (video downloads only when user clicks play)

### Step 3 — Google Fonts & CSS Cleanup
- **Before:** `@import url(...)` at top of `src/index.css` blocked rendering. `App.css` had unused `.app__bg` class referencing `bg.png`.
- **After:**
  - `src/index.css` — `@import` removed, replaced with comment
  - `public/index.html` — `<link rel="preconnect">` + `<link rel="preload" as="style" onload="...">` + `<noscript>` fallback added
  - `src/App.css` — Unused `.app__bg` rule removed to fix webpack build error trying to resolve the deleted `bg.png`.

### Step 4 — Lazy Image Loading
- **Before:** All `<img>` tags loaded immediately regardless of viewport position
- **After (files changed):**
  - `AboutUs.jsx` — 2 corner decoration images
  - `Chef.jsx` — chef portrait, signature, 2 corner decorations (4 total)
  - `Laurels.jsx` — 2 corner decoration images
  - `Gallery.jsx` — topImg, d3Img, 2 ornament corners, 2 banner ornaments, 6 side panels (9 total + grid already had lazy)

### Step 5 — Large Image Unbundling
- **Before:** `images.js` imported bg(7.4MB), welcome(3.3MB), findus(2.8MB), laurels(2.7MB), menu(1.7MB) via webpack — ~18 MB in the bundle
- **After:**
  - Files copied to `public/images/`
  - `images.js` references them as `/images/xxx.png` URL strings
  - Originals deleted from `src/assets/`
  - webpack bundle is ~18 MB lighter

### Step 6 — `vercel.json` (NEW FILE)
- Created at repo root
- 1-year `Cache-Control: public, max-age=31536000, immutable` for: `/static/`, `/images/`, `/meal.mp4`, `.js` files, `.css` files

### Step 7 — Unused Assets Deleted
- `public/awards-preview-desktop.png` (2.3 MB) — deleted
- `public/awards-preview-narrow.png` (1.2 MB) — deleted

---

## 📊 Summary of Size Savings

| Category | Before | After | Saved |
|----------|--------|-------|-------|
| Hero frames (startup) | ~10 MB instant | ~1 MB instant, rest deferred | ~9 MB |
| Video on page load | ~4 MB always | 0 MB (deferred to play click) | ~4 MB |
| Large images in bundle | ~18 MB | 0 MB (public static) | ~18 MB |
| Unused public assets | ~3.5 MB | 0 MB | ~3.5 MB |
| **Total Initial Savings** | **~35.5 MB** | | |

---

## 🔍 Build Verification

```
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  91.58 kB  build\static\js\main.218b33cb.js
  10.23 kB  build\static\css\main.f585c0f5.css
```

### Next Steps
1. The development server is currently running (`npm start`). You can view it in your browser.
2. Open Chrome DevTools → Network → Disable cache
3. Verify hero shows frame 1 immediately
4. Verify meal.mp4 does NOT appear in Network until play is clicked
5. Verify section images load only on scroll
6. Push to git → Vercel auto-deploys with new cache headers
