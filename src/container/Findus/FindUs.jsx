import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

import './FindUs.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const ContactCard = ({ icon, title, children }) => (
  <div className="contact-card">
    <div className="contact-card-icon">{icon}</div>
    <div className="contact-card-body">
      <h4 className="contact-card-title">{title}</h4>
      <div className="contact-card-text">{children}</div>
    </div>
  </div>
);

const FindUs = () => (
  <section className="contact-section" id="contact">
    {/* Hero-style ambient glow behind the content */}
    <div className="hero-ambient-glow contact-ambient-glow" />

    {/* Left side glow, particles, and star glints (hero style) */}
    <div className="side-glow-container left-side-glow contact-side-glow">
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
    <div className="side-glow-container right-side-glow contact-side-glow">
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

    <div className="contact-content">
      {/* Section eyebrow */}
      <div className="contact-eyebrow-container">
        <span className="contact-eyebrow-line" />
        <span className="contact-eyebrow">Contact</span>
        <span className="contact-eyebrow-line" />
      </div>
      <h2 className="contact-heading">Find Us</h2>
      <p className="contact-subtitle">
        Visit us in person, drop a message, or simply call ahead —
        we would love to host you at Beresta.
      </p>

      <div className="contact-layout">
        {/* Contact info cards */}
        <div className="contact-info">
          <ContactCard icon={<FiMapPin />} title="Our Address">
            <p>123 Dummy Street, Dummy City</p>
          </ContactCard>

          <ContactCard icon={<FiClock />} title="Opening Hours">
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <p>Sat - Sun: 10:00 am - 03:00 am</p>
          </ContactCard>

          <ContactCard icon={<FiPhone />} title="Call Us">
            <p>+91 98765 43210</p>
          </ContactCard>

          <ContactCard icon={<FiMail />} title="Email Us">
            <p>hello@beresta.com</p>
          </ContactCard>
        </div>

        {/* Contact form (glass card) */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Send Us a Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-row">
              <input type="text" placeholder="Your Name" aria-label="Your Name" />
              <input type="email" placeholder="Your Email" aria-label="Your Email" />
            </div>
            <input type="text" placeholder="Subject" aria-label="Subject" />
            <textarea placeholder="Your Message" rows="5" aria-label="Your Message" />
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default FindUs;
