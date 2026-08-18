import React from 'react';

import { images } from '../../constants';
import leftCornerImg from '../../components/Hero/left.png';
import rightCornerImg from '../../components/Hero/right.png';
import './Chef.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const Chef = () => (
  <section className="chef-section" id="chef">
    {/* Hero-style ambient glow behind the content (champagne-gold tint) */}
    <div className="hero-ambient-glow chef-ambient-glow" />

    {/* Left side glow, particles, and star glints (gold) */}
    <div className="side-glow-container left-side-glow chef-side-glow">
      <div className="side-radial-glow" />
      <StarGlint style={{ top: '30%', left: '14%', width: '22px', height: '22px', opacity: 0.85 }} />
      <StarGlint style={{ top: '54%', left: '8%', width: '15px', height: '15px', opacity: 0.6 }} />
      <StarGlint style={{ top: '72%', left: '17%', width: '18px', height: '18px', opacity: 0.75 }} />

      <span className="glow-particle" style={{ top: '25%', left: '9%', width: '4px', height: '4px', opacity: 0.6 }} />
      <span className="glow-particle" style={{ top: '42%', left: '19%', width: '3px', height: '3px', opacity: 0.4 }} />
      <span className="glow-particle" style={{ top: '48%', left: '6%', width: '5px', height: '5px', opacity: 0.7 }} />
      <span className="glow-particle" style={{ top: '64%', left: '11%', width: '3px', height: '3px', opacity: 0.5 }} />
      <span className="glow-particle" style={{ top: '78%', left: '15%', width: '4px', height: '4px', opacity: 0.35 }} />
    </div>

    {/* Right side glow, particles, and star glints (gold) */}
    <div className="side-glow-container right-side-glow chef-side-glow">
      <div className="side-radial-glow" />
      <StarGlint style={{ top: '34%', right: '12%', width: '18px', height: '18px', opacity: 0.8 }} />
      <StarGlint style={{ top: '50%', right: '17%', width: '25px', height: '25px', opacity: 0.9 }} />
      <StarGlint style={{ top: '68%', right: '9%', width: '16px', height: '16px', opacity: 0.65 }} />

      <span className="glow-particle" style={{ top: '28%', right: '15%', width: '3px', height: '3px', opacity: 0.5 }} />
      <span className="glow-particle" style={{ top: '40%', right: '7%', width: '5px', height: '5px', opacity: 0.65 }} />
      <span className="glow-particle" style={{ top: '58%', right: '19%', width: '4px', height: '4px', opacity: 0.45 }} />
      <span className="glow-particle" style={{ top: '72%', right: '12%', width: '3px', height: '3px', opacity: 0.6 }} />
      <span className="glow-particle" style={{ top: '80%', right: '8%', width: '5px', height: '5px', opacity: 0.3 }} />
    </div>

    {/* Bottom corner art decorations (hero style) */}
    <img src={leftCornerImg} alt="" className="chef-corner-decoration chef-corner-left" loading="lazy" />
    <img src={rightCornerImg} alt="" className="chef-corner-decoration chef-corner-right" loading="lazy" />

    <div className="chef-content">
      {/* Chef portrait inside an elegant arched champagne-gold frame */}
      <div className="chef-portrait">
        <div className="chef-portrait-glow" />
        <div className="chef-portrait-frame">
          <div className="chef-portrait-image">
            <img src={images.chef} alt="Chef Manu Chandra" loading="lazy" />
          </div>
        </div>
        <div className="chef-portrait-ornament">
          <span className="chef-ornament-line" />
          <span className="chef-ornament-diamond" />
          <span className="chef-ornament-line" />
        </div>
      </div>

      {/* Chef's word */}
      <div className="chef-info">
        <div className="chef-eyebrow-container">
          <span className="chef-eyebrow-line" />
          <span className="chef-eyebrow">Chef&apos;s Word</span>
        </div>
        <h2 className="chef-heading">What We Believe In</h2>

        <div className="chef-quote">
          <span className="chef-quote-mark">&ldquo;</span>
          <p className="chef-quote-text">
            Cooking is an act of love — every plate we serve carries the warmth
            of our kitchen and the soul of Bengal.
          </p>
        </div>

        <div className="chef-divider">
          <span className="chef-divider-line" />
          <span className="chef-divider-diamond" />
        </div>

        <p className="chef-body">
          For us, authenticity is not a compromise. We honour the recipes of our
          grandmothers, source the finest local produce, and season each dish with
          patience and pride — so every bite tells the story of where we come from.
        </p>

        <div className="chef-sign">
          <p className="chef-sign-name">Manu Chandra</p>
          <p className="chef-sign-role">Chef &amp; Founder</p>
          <img src={images.sign} alt="Signature of Manu Chandra" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default Chef;
