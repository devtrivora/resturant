import { useState, useEffect, useRef, useCallback } from 'react';

export function useFrameSequence({
  frameCount,
  canvasRef,
  mode = "autoplay", // user wanted it playing as a 10s video, so autoplay is default
}) {
  const images = useRef([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrame = useRef(0);
  const requestRef = useRef();

  // 1. Batch Preloader
  useEffect(() => {
    let cancelled = false;
    const batchSize = 20;

    async function loadBatch(start) {
      if (cancelled || start >= frameCount) return;
      const end = Math.min(start + batchSize, frameCount);
      
      await Promise.all(
        Array.from({ length: end - start }).map((_, i) => {
          const idx = start + i + 1; // Frames are 1-indexed (001 to 300)
          return new Promise((resolve) => {
            const img = new Image();
            try {
              // Using webpack dynamic require
              img.src = require(`./ezgif-36bc508c79c9ac6f-jpg/ezgif-frame-${String(idx).padStart(3, "0")}.jpg`);
            } catch(e) {
              console.error("Missing frame", idx);
              resolve();
              return;
            }
            img.onload = () => {
              images.current[idx - 1] = img; // store 0-indexed
              resolve();
            };
            img.onerror = resolve; // don't block on a bad frame
          });
        }),
      );
      if (!cancelled) {
        setLoadProgress(end / frameCount);
        loadBatch(end);
      }
    }
    loadBatch(0);
    return () => {
      cancelled = true;
    };
  }, [frameCount]);

  // 2. Draw helper
  const drawFrame = useCallback(
    (index) => {
      const canvas = canvasRef.current;
      const img = images.current[index];
      if (!canvas || !img) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    },
    [canvasRef],
  );

  // 3a. Autoplay loop mode
  useEffect(() => {
    if (mode !== "autoplay") return;
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

  // 3b. Scroll-driven mode
  useEffect(() => {
    if (mode !== "scroll") return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = canvasRef.current?.closest("[data-hero-scroll]");
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode, frameCount, drawFrame, canvasRef]);

  return { loadProgress, drawFrame, scrollProgress };
}
