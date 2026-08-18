import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* Hero-style ambient glow behind the content */}
    <div className="hero-ambient-glow footer-ambient-glow" />

    {/* Left side glow, particles, and star glints (hero style) */}
    <div className="side-glow-container left-side-glow footer-side-glow">
      <div className="side-radial-glow" />
      <StarGlint style={{ top: '30%', left: '14%', width: '22px', height: '22px', opacity: 0.9 }} />
      <StarGlint style={{ top: '52%', left: '8%', width: '15px', height: '15px', opacity: 0.65 }} />
      <StarGlint style={{ top: '70%', left: '16%', width: '18px', height: '18px', opacity: 0.8 }} />

      <span className="glow-particle" style={{ top: '24%', left: '9%', width: '4px', height: '4px', opacity: 0.6 }} />
      <span className="glow-particle" style={{ top: '40%', left: '18%', width: '3px', height: '3px', opacity: 0.4 }} />
      <span className="glow-particle" style={{ top: '58%', left: '6%', width: '5px', height: '5px', opacity: 0.7 }} />
      <span className="glow-particle" style={{ top: '66%', left: '11%', width: '3px', height: '3px', opacity: 0.5 }} />
      <span className="glow-particle" style={{ top: '80%', left: '14%', width: '4px', height: '4px', opacity: 0.35 }} />
    </div>

    {/* Right side glow, particles, and star glints (hero style) */}
    <div className="side-glow-container right-side-glow footer-side-glow">
      <div className="side-radial-glow" />
      <StarGlint style={{ top: '32%', right: '12%', width: '18px', height: '18px', opacity: 0.85 }} />
      <StarGlint style={{ top: '48%', right: '16%', width: '25px', height: '25px', opacity: 0.95 }} />
      <StarGlint style={{ top: '66%', right: '9%', width: '16px', height: '16px', opacity: 0.7 }} />

      <span className="glow-particle" style={{ top: '26%', right: '14%', width: '3px', height: '3px', opacity: 0.5 }} />
      <span className="glow-particle" style={{ top: '38%', right: '7%', width: '5px', height: '5px', opacity: 0.65 }} />
      <span className="glow-particle" style={{ top: '56%', right: '18%', width: '4px', height: '4px', opacity: 0.45 }} />
      <span className="glow-particle" style={{ top: '72%', right: '12%', width: '3px', height: '3px', opacity: 0.6 }} />
      <span className="glow-particle" style={{ top: '82%', right: '8%', width: '5px', height: '5px', opacity: 0.3 }} />
    </div>

    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <p className="p__opensans">2/3 East Rampura, DIT Road, Dhaka 1219, Bangladesh</p>
        <p className="p__opensans">+880 1841-831360</p>
        <p className="p__opensans">berestadhaka@gmail.com</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 style={{ color: 'var(--color-golden)', fontFamily: 'var(--font-base)', fontSize: '2rem', marginBottom: '1rem' }}>Beresta</h1>
        <p className="p__opensans">&quot;A celebration of Bengal's rich culinary heritage — crafted with passion, served with warmth.&quot;</p>
        <img src={images.spoon} alt="" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Working Hours</h2>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">11:00 am - 11:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">11:00 am - 12:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Beresta. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
