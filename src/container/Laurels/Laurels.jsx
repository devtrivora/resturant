import React from 'react';
import { GiLaurelsTrophy, GiStarMedal, GiMedallist, GiChefToque } from 'react-icons/gi';

import { data } from '../../constants';
import leftCornerImg from '../../components/Hero/left.png';
import rightCornerImg from '../../components/Hero/right.png';
import './Laurels.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const awardIcons = {
  'Bib Gourmond': <GiLaurelsTrophy />,
  'Rising Star': <GiStarMedal />,
  'AA Hospitality': <GiMedallist />,
  'Outstanding Chef': <GiChefToque />,
};

const AwardCard = ({ award }) => (
  <div className="laurels-award-card">
    <div className="laurels-award-icon">{awardIcons[award.title] || <GiMedallist />}</div>
    <div className="laurels-award-content">
      <h4 className="laurels-award-title">{award.title}</h4>
      <p className="laurels-award-subtitle">{award.subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <section className="laurels-section" id="awards">
    {/* Hero-style ambient glow behind the content (champagne-gold tint) */}
    <div className="hero-ambient-glow laurels-ambient-glow" />

    {/* Left side glow, particles, and star glints (gold) */}
    <div className="side-glow-container left-side-glow laurels-side-glow">
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
    <div className="side-glow-container right-side-glow laurels-side-glow">
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
    <img src={leftCornerImg} alt="" className="laurels-corner-decoration laurels-corner-left" />
    <img src={rightCornerImg} alt="" className="laurels-corner-decoration laurels-corner-right" />

    <div className="laurels-content">
      {/* Section eyebrow */}
      <div className="laurels-eyebrow-container">
        <span className="laurels-eyebrow-line" />
        <span className="laurels-eyebrow">Awards &amp; Recognition</span>
        <span className="laurels-eyebrow-line" />
      </div>
      <h2 className="laurels-heading">Our Laurels</h2>
      <p className="laurels-subtitle">
        A celebration of the craft, consistency, and hospitality that define
        Beresta — honoured by the industry and loved by our guests.
      </p>

      {/* Award cards */}
      <div className="laurels-grid">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
  </section>
);

export default Laurels;
