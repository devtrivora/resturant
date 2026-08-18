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

  // ── 1. Two-phase Preloader ──────────────────────────────────────────────
  // Phase A: load first 30 frames immediately (hero visible right away)
  // Phase B: load remaining frames silently in the background
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
      // Phase A — critical first 30 frames
      const criticalEnd = Math.min(30, frameCount);
      await loadRange(0, criticalEnd, (done) => {
        setLoadProgress(done / frameCount);
      });
      if (cancelled) return;
      // Phase B — rest in background
      await loadRange(criticalEnd, frameCount, (done) => {
        setLoadProgress(done / frameCount);
      });
    }

    run();
    return () => { cancelled = true; };
  }, [frameCount]);

  // ── 2. Draw helper ──────────────────────────────────────────────────────
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

  // ── 3a. Autoplay loop mode ───────────────────────────────────────────────
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

  // ── 3b. Scroll-driven mode ───────────────────────────────────────────────
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
