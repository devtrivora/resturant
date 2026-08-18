import React from 'react';

import aboutImg from '../../components/About/about-us.png';
import rightCornerImg from '../../components/About/right.png';
import './AboutUs.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const AboutUs = () => (
  <section className="about-section" id="about">
    {/* Full background image (no effects) */}
    <div className="about-bg" style={{ backgroundImage: `url('${aboutImg}')` }} />

    {/* Left side shiny glow (same as hero) */}
    <div className="side-glow-container left-side-glow about-side-glow">
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

    {/* Right side shiny glow (same as hero) */}
    <div className="side-glow-container right-side-glow about-side-glow">
      <div className="side-radial-glow" />
      <StarGlint style={{ top: '34%', right: '12%', width: '18px', height: '18px', opacity: 0.85 }} />
      <StarGlint style={{ top: '50%', right: '17%', width: '25px', height: '25px', opacity: 0.95 }} />
      <StarGlint style={{ top: '68%', right: '9%', width: '16px', height: '16px', opacity: 0.7 }} />

      <span className="glow-particle" style={{ top: '28%', right: '15%', width: '3px', height: '3px', opacity: 0.5 }} />
      <span className="glow-particle" style={{ top: '40%', right: '7%', width: '5px', height: '5px', opacity: 0.65 }} />
      <span className="glow-particle" style={{ top: '58%', right: '19%', width: '4px', height: '4px', opacity: 0.45 }} />
      <span className="glow-particle" style={{ top: '65%', right: '13%', width: '3px', height: '3px', opacity: 0.6 }} />
      <span className="glow-particle" style={{ top: '80%', right: '8%', width: '5px', height: '5px', opacity: 0.3 }} />
    </div>

    {/* Bottom corner art decorations (right.png mirrored for the left corner) */}
    <img src={rightCornerImg} alt="" className="about-corner-decoration about-corner-left" loading="lazy" />
    <img src={rightCornerImg} alt="" className="about-corner-decoration about-corner-right" loading="lazy" />

    <div className="about-content">
      {/* Section eyebrow */}
      <div className="about-eyebrow-container">
        <span className="about-eyebrow-line" />
        <span className="about-eyebrow">Our Story</span>
        <span className="about-eyebrow-line" />
      </div>

      <h1 className="about-section-heading">About Beresta</h1>
      <p className="about-section-subtitle">
        A celebration of Bengal's rich culinary heritage — crafted with passion,<br />
        served with warmth, cherished by every guest.
      </p>

      <div className="about-columns">
        {/* About Us card */}
        <div className="about-column">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            At Beresta, we celebrate the rich culinary heritage of Bengal with a passion for authenticity and excellence.
            Every dish is crafted with the finest ingredients and time-honored recipes, bringing you an unforgettable dining experience.
          </p>
          <button type="button" className="about-btn">Know More &rarr;</button>
        </div>

        {/* Our History card */}
        <div className="about-column">
          <h2 className="about-heading">Our History</h2>
          <p className="about-text">
            Rooted in tradition and inspired by generations, Beresta began as a heartfelt journey to share the true flavors of Bengal.
            Today, we continue our legacy of warm hospitality and exceptional cuisine with every guest we serve.
          </p>
          <button type="button" className="about-btn">Know More &rarr;</button>
        </div>
      </div>
    </div>

  </section>
);

export default AboutUs;
