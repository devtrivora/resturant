import React, { useCallback, useEffect, useState } from 'react';
import { BsCamera, BsX, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { GiOldLantern } from 'react-icons/gi';

import img1 from '../../components/PhotoGallery/1.jpg';
import img2 from '../../components/PhotoGallery/2.jpg';
import img3 from '../../components/PhotoGallery/3.jpg';
import img4 from '../../components/PhotoGallery/4.jpg';
import img5 from '../../components/PhotoGallery/5.jpg';
import img6 from '../../components/PhotoGallery/6.jpg';
import img7 from '../../components/PhotoGallery/7.jpg';
import img8 from '../../components/PhotoGallery/8.jpg';
import img9 from '../../components/PhotoGallery/9.jpg';
import img10 from '../../components/PhotoGallery/10.jpg';
import img11 from '../../components/PhotoGallery/11.jpg';
import img12 from '../../components/PhotoGallery/12.jpg';
import img13 from '../../components/PhotoGallery/13.jpg';
import img14 from '../../components/PhotoGallery/14.jpg';
import topImg from '../../components/PhotoGallery/top.png';
import d1Img from '../../components/PhotoGallery/d1 (2).png';
import d2Img from '../../components/PhotoGallery/d2 (2).png';
import d3Img from '../../components/PhotoGallery/d3 (2).png';

import leftCornerImg from '../../components/Hero/left.png';
import rightCornerImg from '../../components/Hero/right.png';
import './Gallery.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const filters = ['All', 'Food', 'The Restaurant', 'Bengali Heritage', 'People & Moments', 'Events'];

const galleryItems = [
  { id: 1, category: 'The Restaurant', image: img1, alt: 'Beresta restaurant interior' },
  { id: 2, category: 'The Restaurant', image: img2, alt: 'Beresta restaurant corner' },
  { id: 3, category: 'The Restaurant', image: img3, alt: 'Beresta restaurant corner' },
  { id: 4, category: 'The Restaurant', image: img4, alt: 'Beresta restaurant interior' },
  { id: 5, category: 'The Restaurant', image: img5, alt: 'Beresta restaurant interior' },
  { id: 6, category: 'Food', image: img6, alt: 'Traditional Bengali dish' },
  { id: 7, category: 'Food', image: img7, alt: 'Traditional Bengali dish' },
  { id: 8, category: 'Food', image: img8, alt: 'Traditional Bengali dish' },
  { id: 9, category: 'Food', image: img9, alt: 'Traditional Bengali dish' },
  { id: 10, category: 'Food', image: img10, alt: 'Traditional Bengali dish' },
  { id: 11, category: 'Bengali Heritage', image: img11, alt: 'Bengali heritage food' },
  { id: 12, category: 'Bengali Heritage', image: img12, alt: 'Bengali heritage food' },
  { id: 13, category: 'Bengali Heritage', image: img13, alt: 'Bengali heritage food' },
  { id: 14, category: 'Bengali Heritage', image: img14, alt: 'Bengali heritage food' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((idx) => (idx + filteredItems.length - 1) % filteredItems.length);
  }, [filteredItems.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((idx) => (idx + 1) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, prevImage, nextImage, closeLightbox]);

  return (
    <section className="gallery-section" id="gallery">
      {/* Hero-style ambient glow behind the content */}
      <div className="hero-ambient-glow gallery-ambient-glow" />

      {/* Left side glow, particles, and star glints (hero style) */}
      <div className="side-glow-container left-side-glow gallery-side-glow">
        <div className="side-radial-glow" />
        <StarGlint style={{ top: '30%', left: '14%', width: '22px', height: '22px', opacity: 0.9 }} />
        <StarGlint style={{ top: '54%', left: '8%', width: '15px', height: '15px', opacity: 0.65 }} />
        <StarGlint style={{ top: '72%', left: '17%', width: '18px', height: '18px', opacity: 0.8 }} />

        <span className="glow-particle" style={{ top: '25%', left: '9%', width: '4px', height: '4px', opacity: 0.6 }} />
        <span className="glow-particle" style={{ top: '42%', left: '19%', width: '3px', height: '3px', opacity: 0.4 }} />
        <span className="glow-particle" style={{ top: '48%', left: '6%', width: '5px', height: '5px', opacity: 0.7 }} />
        <span className="glow-particle" style={{ top: '64%', left: '11%', width: '3px', height: '3px', opacity: 0.5 }} />
        <span className="glow-particle" style={{ top: '78%', left: '15%', width: '4px', height: '4px', opacity: 0.35 }} />
      </div>

      {/* Right side glow, particles, and star glints (hero style) */}
      <div className="side-glow-container right-side-glow gallery-side-glow">
        <div className="side-radial-glow" />
        <StarGlint style={{ top: '34%', right: '12%', width: '18px', height: '18px', opacity: 0.85 }} />
        <StarGlint style={{ top: '50%', right: '17%', width: '25px', height: '25px', opacity: 0.95 }} />
        <StarGlint style={{ top: '68%', right: '9%', width: '16px', height: '16px', opacity: 0.7 }} />

        <span className="glow-particle" style={{ top: '28%', right: '15%', width: '3px', height: '3px', opacity: 0.5 }} />
        <span className="glow-particle" style={{ top: '40%', right: '7%', width: '5px', height: '5px', opacity: 0.65 }} />
        <span className="glow-particle" style={{ top: '58%', right: '19%', width: '4px', height: '4px', opacity: 0.45 }} />
        <span className="glow-particle" style={{ top: '72%', right: '12%', width: '3px', height: '3px', opacity: 0.6 }} />
        <span className="glow-particle" style={{ top: '80%', right: '8%', width: '5px', height: '5px', opacity: 0.3 }} />
      </div>

      <div className="gallery-content">
        {/* ---- Hero ---- */}
        <div className="gallery-hero">
          <div className="gallery-hero-image">
            <img src={topImg} alt="Beresta restaurant interior" loading="lazy" />
            <div className="gallery-hero-overlay" />
          </div>
          <img src={leftCornerImg} alt="" className="gallery-hero-ornament" loading="lazy" />

          <div className="gallery-hero-left">
            <img src={d3Img} alt="Beresta dish" className="gallery-hero-d1" loading="lazy" />
            <div className="gallery-hero-text">
              <div className="gallery-eyebrow-container">
                <span className="gallery-eyebrow-line" />
                <span className="gallery-eyebrow">Our Gallery</span>
                <span className="gallery-eyebrow-line" />
              </div>
              <h1 className="gallery-hero-title">Moments Of Beresta</h1>
              <p className="gallery-hero-desc">
                A visual journey through the flavors,<br />
                heritage and hospitality of Bengal.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Gold separator ---- */}
        <div className="gallery-separator">
          <span className="gallery-separator-line" />
          <span className="gallery-separator-diamond" />
          <span className="gallery-separator-line" />
        </div>

        {/* ---- Story statement banner ---- */}
        <div className="gallery-story-banner">
          <img src={leftCornerImg} alt="" className="gallery-banner-ornament gallery-banner-orn-left" loading="lazy" />
          <GiOldLantern className="gallery-lantern-icon" />
          <div className="gallery-banner-text">
            <h2 className="gallery-banner-title">Every Moment Tells Our Story</h2>
            <p className="gallery-banner-desc">Discover the heart of Beresta through every frame.</p>
          </div>
          <img src={rightCornerImg} alt="" className="gallery-banner-ornament gallery-banner-orn-right" loading="lazy" />
        </div>

        {/* ---- Category filters ---- */}
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter);
                setLightboxIndex(null);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ---- Full-width photo grid flanked by repeating side panels ---- */}
        {filteredItems.length > 0 ? (
          <div className="gallery-grid-wrap">
            <div className="gallery-side-column gallery-side-left">
              <img src={d1Img} alt="" className="gallery-side-panel" loading="lazy" />
              <img src={d1Img} alt="" className="gallery-side-panel" loading="lazy" />
              <img src={d1Img} alt="" className="gallery-side-panel" loading="lazy" />
            </div>
            <div className="gallery-grid" key={activeFilter}>
              {filteredItems.map((item, index) => (
                <figure
                  className="gallery-card"
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <BsCamera className="gallery-card-icon" />
                  </div>
                </figure>
              ))}
            </div>
            <div className="gallery-side-column gallery-side-right">
              <img src={d2Img} alt="" className="gallery-side-panel" loading="lazy" />
              <img src={d2Img} alt="" className="gallery-side-panel" loading="lazy" />
              <img src={d2Img} alt="" className="gallery-side-panel" loading="lazy" />
            </div>
          </div>
        ) : (
          <p className="gallery-empty">No photos in this category yet.</p>
        )}

        {/* ---- Bottom ornament ---- */}
        <div className="gallery-bottom-ornament">
          <span className="gallery-bottom-diamond" />
        </div>
      </div>

      {/* ---- Lightbox ---- */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button type="button" className="gallery-lightbox-btn gallery-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <BsX />
          </button>
          <button
            type="button"
            className="gallery-lightbox-btn gallery-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <BsChevronLeft />
          </button>

          <div className="gallery-lightbox-media" onClick={(e) => e.stopPropagation()}>
            <img src={filteredItems[lightboxIndex].image} alt={filteredItems[lightboxIndex].alt} />
            <div className="gallery-lightbox-meta">
              <span className="gallery-lightbox-counter">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="gallery-lightbox-category">{filteredItems[lightboxIndex].category}</span>
            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-btn gallery-lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <BsChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
