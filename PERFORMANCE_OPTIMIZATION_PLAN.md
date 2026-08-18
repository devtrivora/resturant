# 🚀 Beresta Restaurant — Performance Optimization Execution Plan

> **Purpose:** This document is a complete, self-contained execution guide for fixing slow load times and janky animations on the Beresta restaurant website. Another AI agent can follow this from start to finish without needing any prior context.

---

## 📋 Project Overview

- **Framework:** React 18 (Create React App / react-scripts)
- **Repo root:** `d:/Github/resturant/`
- **Deployed on:** Vercel (+ GitHub Pages via gh-pages)
- **Entry point:** `src/index.js` → `src/App.js`
- **Key problem area:** Hero section with 300-frame scroll animation + 30 MB video

---

## 🔴 Root Cause Summary (Read First)

| # | Problem | File(s) | Size Impact |
|---|---------|---------|-------------|
| 1 | 300 JPEG frames all loaded on page start | `src/components/Hero/useFrameSequence.js` | ~10 MB on startup |
| 2 | `meal.mp4` imported as a JS module — downloaded immediately | `src/constants/index.js`, `src/container/Intro/Intro.jsx` | ~4 MB on startup (video already optimized by user) |
| 3 | All images statically imported at top-level | `src/constants/images.js` | ~18 MB on startup |
| 4 | Google Fonts loaded via CSS `@import` (render-blocking) | `src/index.css` | Blocks first paint |
| 5 | No Vercel CDN cache headers | missing `vercel.json` | Re-downloads everything on each visit |
| 6 | No lazy loading on `<img>` tags in section components | Various `.jsx` files | Wastes bandwidth |
| 7 | Hero section is `600vh` tall (user scrolls 6 full screens) | `src/container/Header/Header.css` | Animation feels sluggish |

---

## ✅ Step-by-Step Execution Plan

---

### STEP 1 — Fix Frame Preloading: Load First 30 Frames Instantly, Rest Lazily

**File:** `src/components/Hero/useFrameSequence.js`

**Problem:** The hook loads all 300 frames in batches of 20, starting from frame 1. Nothing useful happens until at least the first batch (20 frames) is ready. Meanwhile the browser is fighting to fetch 300 images.

**Fix:** Load only frames 1–30 in the first pass (so the animation is immediately playable), then load the remaining frames 31–300 in a low-priority background pass after the first batch is done.

**Replace the entire file content with:**

```js
import { useState, useEffect, useRef, useCallback } from 'react';

export function useFrameSequence({
  frameCount,
  canvasRef,
  mode = "autoplay",
}) {
  const images = useRef([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrame = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    let cancelled = false;

    function loadSingleFrame(idx) {
      return new Promise((resolve) => {
        const img = new Image();
        try {
          img.src = require(`./ezgif-36bc508c79c9ac6f-jpg/ezgif-frame-${String(idx).padStart(3, '0')}.jpg`);
        } catch (e) {
          resolve();
          return;
        }
        img.onload = () => {
          images.current[idx - 1] = img;
          resolve();
        };
        img.onerror = resolve;
      });
    }

    async function loadRange(start, end, onProgress) {
      const batchSize = 10;
      for (let i = start; i < end; i += batchSize) {
        if (cancelled) return;
        const batchEnd = Math.min(i + batchSize, end);
        await Promise.all(
          Array.from({ length: batchEnd - i }, (_, k) => loadSingleFrame(i + k + 1))
        );
        if (!cancelled && onProgress) onProgress(batchEnd);
      }
    }

    async function run() {
      const criticalEnd = Math.min(30, frameCount);
      await loadRange(0, criticalEnd, (done) => {
        setLoadProgress(done / frameCount);
      });
      if (cancelled) return;
      await loadRange(criticalEnd, frameCount, (done) => {
        setLoadProgress(done / frameCount);
      });
    }

    run();
    return () => { cancelled = true; };
  }, [frameCount]);

  const drawFrame = useCallback(
    (index) => {
      const canvas = canvasRef.current;
      const img = images.current[index];
      if (!canvas || !img) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    },
    [canvasRef],
  );

  useEffect(() => {
    if (mode !== 'autoplay') return;
    let last = performance.now();
    const fps = 30;
    const interval = 1000 / fps;
    const play = (time) => {
      if (time - last > interval) {
        currentFrame.current = (currentFrame.current + 1) % frameCount;
        drawFrame(currentFrame.current);
        last = time;
      }
      requestRef.current = requestAnimationFrame(play);
    };
    requestRef.current = requestAnimationFrame(play);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mode, frameCount, drawFrame]);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (mode !== 'scroll') return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = canvasRef.current?.closest('[data-hero-scroll]');
        if (section) {
          const rect = section.getBoundingClientRect();
          const progress = Math.min(
            Math.max(-rect.top / (rect.height - window.innerHeight), 0),
            1,
          );
          setScrollProgress(progress);
          const idx = Math.round(progress * (frameCount - 1));
          currentFrame.current = idx;
          drawFrame(idx);
        }
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mode, frameCount, drawFrame, canvasRef]);

  return { loadProgress, drawFrame, scrollProgress };
}
```

---

### STEP 2 — Fix the Video: Move meal.mp4 to /public/ and Stop Bundling It

> **Note:** The video has already been compressed to ~4 MB by the developer. It is no longer a critical blocker. However, it is still imported via webpack (JS module), which means it gets bundled and downloaded immediately on page load. The fix below is still important: move it to `/public/` and add `preload="none"` so it only downloads when the user presses play. The IntersectionObserver lazy-mount trick is NOT needed at 4 MB.

**Step 2a — Move the file (run from repo root):**
```powershell
Move-Item "src\assets\meal.mp4" "public\meal.mp4"
```

**Step 2b — Update `src/constants/index.js` (remove the meal import):**
```js
import images from './images';
import data from './data';

export { images, data };
```

**Step 2c — Replace entire `src/container/Intro/Intro.jsx` (simplified — no IntersectionObserver needed):**
```jsx
import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

// meal.mp4 is ~4 MB (already optimized). We use preload="none" so the
// browser does NOT download the video until the user actually clicks play.
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src="/meal.mp4"
        type="video/mp4"
        loop
        controls={false}
        muted
        preload="none"
        playsInline
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
```

---

### STEP 3 — Fix Google Fonts: Remove Render-Blocking @import

**Step 3a — In `src/index.css`:** Delete line 1 (the `@import url(...)` line). Keep everything else.

**Step 3b — In `public/index.html`:** Add these lines inside `<head>` BEFORE the `<title>` tag:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&display=swap"></noscript>
```

---

### STEP 4 — Add loading="lazy" to All Below-Fold Images

#### `src/container/AboutUs/AboutUs.jsx`
Add `loading="lazy"` to both corner img tags:
```jsx
<img src={rightCornerImg} alt="" className="about-corner-decoration about-corner-left" loading="lazy" />
<img src={rightCornerImg} alt="" className="about-corner-decoration about-corner-right" loading="lazy" />
```

#### `src/container/Chef/Chef.jsx`
Add `loading="lazy"` to:
- `<img src={images.chef} ...>` 
- Both corner img tags (left and right)
- `<img src={images.sign} ...>`

#### `src/container/Laurels/Laurels.jsx`
Add `loading="lazy"` to both corner img tags.

#### `src/container/Gallery/Gallery.jsx`
Add `loading="lazy"` to:
- `<img src={topImg} ...>`
- `<img src={d3Img} ...>`
- `<img src={leftCornerImg} ...>` (the hero ornament)
- Both banner ornament img tags
- All 6 side panel img tags (d1Img x3, d2Img x3)
- NOTE: Gallery grid images (line 196) already have loading="lazy" — do NOT change them.

**DO NOT add loading="lazy" to images in `src/container/Header/Header.jsx` (hero is above the fold).**

---

### STEP 5 — Move Large Images to /public/ and Update imports

**Step 5a — Copy large files to /public/images/:**
```powershell
New-Item -ItemType Directory -Path "public\images" -Force
Copy-Item "src\assets\bg.png"      "public\images\bg.png"
Copy-Item "src\assets\welcome.png" "public\images\welcome.png"
Copy-Item "src\assets\findus.png"  "public\images\findus.png"
Copy-Item "src\assets\laurels.png" "public\images\laurels.png"
Copy-Item "src\assets\menu.png"    "public\images\menu.png"
```

**Step 5b — Replace `src/constants/images.js` with:**
```js
import chef from '../assets/chef.png';
import G from '../assets/G.png';
import gallery01 from '../assets/gallery01.png';
import gallery02 from '../assets/gallery02.png';
import gallery03 from '../assets/gallery03.png';
import gallery04 from '../assets/gallery04.png';
import knife from '../assets/knife.png';
import logo from '../assets/logo.png';
import overlaybg from '../assets/overlaybg.png';
import spoon from '../assets/spoon.svg';
import award01 from '../assets/award01.png';
import award02 from '../assets/award02.png';
import award03 from '../assets/award03.png';
import award05 from '../assets/award05.png';
import sign from '../assets/sign.png';
import quote from '../assets/quote.png';
import olivebeach from '../assets/olivebeach.png';

const images = {
  // Large images — served from /public/ as static assets (not webpack-bundled)
  bg: '/images/bg.png',
  welcome: '/images/welcome.png',
  findus: '/images/findus.png',
  laurels: '/images/laurels.png',
  menu: '/images/menu.png',
  // Small images — still bundled via webpack
  chef,
  G,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  knife,
  logo,
  overlaybg,
  spoon,
  award01,
  award02,
  award03,
  award05,
  sign,
  quote,
  olivebeach,
};

export default images;
```

**Step 5c — After verifying everything works, delete from src/assets/:**
```powershell
Remove-Item "src\assets\bg.png"
Remove-Item "src\assets\welcome.png"
Remove-Item "src\assets\findus.png"
Remove-Item "src\assets\laurels.png"
Remove-Item "src\assets\menu.png"
```

---

### STEP 6 — Create vercel.json for CDN Cache Headers

Create `vercel.json` at the repo root (`d:/Github/resturant/vercel.json`):
```json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/meal.mp4",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*\\.js)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*\\.css)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

### STEP 7 — Optional: Remove Unused Public Assets

```powershell
Remove-Item "public\awards-preview-desktop.png"
Remove-Item "public\awards-preview-narrow.png"
```

---

### STEP 8 — Optional: Reduce Hero Scroll Height

In `src/container/Header/Header.css`, change:
```css
.scroll-sequence-section {
    height: 600vh;
```
To:
```css
.scroll-sequence-section {
    height: 400vh;
```
This makes the animation snappier (confirm with user before changing).

---

## 🔍 Verification Checklist

```powershell
cd "d:\Github\resturant"
npm run build
npm start
```

Open Chrome DevTools → Network tab → Disable cache → Hard Refresh:
- [ ] Hero canvas shows frame 1 immediately (no waiting)
- [ ] Loading bar fills fast (first 30 frames), then continues filling
- [ ] meal.mp4 does NOT appear in Network on page load
- [ ] meal.mp4 only appears in Network after user clicks play
- [ ] Section images (chef, gallery, etc.) only load as user scrolls
- [ ] Total initial transfer < 4 MB
- [ ] Fonts still render correctly

---

## ⚠️ Gotchas

1. **DO NOT add `loading="lazy"` to any img in `Header.jsx`** — those are above-the-fold.
2. **DO NOT convert frame `require()` calls to `import`** — webpack dynamic require is intentional.
3. **`images.bg` becomes a plain string `/images/bg.png`** — works fine as a CSS backgroundImage value.
4. **`vercel.json` must be at the repo root**, not inside src/ or public/.
5. **After moving `meal.mp4`**, the src in Intro.jsx must be `/meal.mp4` (absolute).
6. **Do NOT `npm run eject`** — CRA is intentional.

---

## 📊 Expected Results

| Metric | Before | After |
|--------|--------|-------|
| Initial download | ~60 MB | ~2–4 MB |
| Hero first frame visible | 5–15 seconds | < 1 second |
| Time to interactive | 10–20 seconds | 2–3 seconds |
| Video downloaded on load | ~4 MB (already optimized) | 0 MB until user clicks play |
| Repeat visit (Vercel CDN) | Same as first | Near-instant |
