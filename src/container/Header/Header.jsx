import React, { useRef, useEffect } from 'react';
import { GiBowlOfRice, GiLeafSwirl, GiHotMeal, GiMedal } from 'react-icons/gi';
import { useFrameSequence } from '../../components/Hero/useFrameSequence';
import leftCornerImg from '../../components/Hero/left.png';
import rightCornerImg from '../../components/Hero/right.png';
import './Header.css';

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const Header = () => {
  const canvasRef = useRef(null);

  const { loadProgress, drawFrame, scrollProgress } = useFrameSequence({
    frameCount: 300,
    canvasRef,
    mode: "scroll",
  });

  useEffect(() => {
    if (loadProgress > 0) drawFrame(0);
  }, [loadProgress, drawFrame]);

  // Interpolation logic for the first 15% of scroll
  const animationThreshold = 0.15;
  const p = Math.min(scrollProgress / animationThreshold, 1);

  const canvasWidth = 55 + (45 * p);
  const canvasHeight = 50 + (50 * p);
  
  const textOpacity = 1 - p;
  const textTranslateY = p * -20;

  const maskSolid = 40 + (60 * p);
  const maskTransparent = 70 + (30 * p);
  const maskImage = `radial-gradient(ellipse, rgba(0,0,0,1) ${maskSolid}%, rgba(0,0,0,0) ${maskTransparent}%)`;

  const canvasStyle = {
    position: 'absolute',
    left: '50%',
    top: '54%',
    transform: 'translate(-50%, -50%)',
    width: `${canvasWidth}%`,
    height: `${canvasHeight}%`,
    objectFit: 'cover',
    display: 'block',
    zIndex: 2,
    maskImage: maskImage,
    WebkitMaskImage: maskImage,
  };

  const textStyleTop = {
    opacity: textOpacity,
    transform: `translateX(-50%) translateY(${textTranslateY}px)`,
    position: 'absolute',
    left: '50%',
    top: '115px',
    width: '80%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 3,
    pointerEvents: textOpacity < 0.5 ? 'none' : 'auto',
  };

  const textStyleBottom = {
    opacity: textOpacity,
    transform: `translateX(-50%) translateY(${textTranslateY}px)`,
    position: 'absolute',
    left: '50%',
    bottom: '45px',
    width: '75%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 3,
    pointerEvents: textOpacity < 0.5 ? 'none' : 'auto',
  };

  const sideFeaturesLeftStyle = {
    opacity: textOpacity,
    position: 'absolute',
    left: '3.5%',
    top: '54%',
    transform: `translateY(calc(-50% + ${textTranslateY}px))`,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    zIndex: 3,
    width: '230px',
    pointerEvents: textOpacity < 0.5 ? 'none' : 'auto',
  };

  const sideFeaturesRightStyle = {
    opacity: textOpacity,
    position: 'absolute',
    right: '3.5%',
    top: '54%',
    transform: `translateY(calc(-50% + ${textTranslateY}px))`,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    zIndex: 3,
    width: '230px',
    pointerEvents: textOpacity < 0.5 ? 'none' : 'auto',
  };

  return (
    <div className="hero-background-wrapper black-dominant-theme">
      <section data-hero-scroll className="scroll-sequence-section">
        <div className="sticky-viewport">
          
          {/* Left Side Glow, Particles, and Star Glints */}
          <div className="side-glow-container left-side-glow" style={{ opacity: textOpacity }}>
            <div className="side-radial-glow" />
            <StarGlint style={{ top: '32%', left: '12%', width: '22px', height: '22px', opacity: 0.9 }} />
            <StarGlint style={{ top: '56%', left: '7%', width: '15px', height: '15px', opacity: 0.65 }} />
            <StarGlint style={{ top: '70%', left: '16%', width: '18px', height: '18px', opacity: 0.8 }} />
            
            <span className="glow-particle" style={{ top: '25%', left: '8%', width: '4px', height: '4px', opacity: 0.6 }} />
            <span className="glow-particle" style={{ top: '42%', left: '18%', width: '3px', height: '3px', opacity: 0.4 }} />
            <span className="glow-particle" style={{ top: '48%', left: '5%', width: '5px', height: '5px', opacity: 0.7 }} />
            <span className="glow-particle" style={{ top: '64%', left: '10%', width: '3px', height: '3px', opacity: 0.5 }} />
            <span className="glow-particle" style={{ top: '78%', left: '14%', width: '4px', height: '4px', opacity: 0.35 }} />
          </div>

          {/* Right Side Glow, Particles, and Star Glints */}
          <div className="side-glow-container right-side-glow" style={{ opacity: textOpacity }}>
            <div className="side-radial-glow" />
            <StarGlint style={{ top: '36%', right: '10%', width: '18px', height: '18px', opacity: 0.85 }} />
            <StarGlint style={{ top: '50%', right: '15%', width: '25px', height: '25px', opacity: 0.95 }} />
            <StarGlint style={{ top: '68%', right: '8%', width: '16px', height: '16px', opacity: 0.7 }} />
            
            <span className="glow-particle" style={{ top: '28%', right: '14%', width: '3px', height: '3px', opacity: 0.5 }} />
            <span className="glow-particle" style={{ top: '40%', right: '6%', width: '5px', height: '5px', opacity: 0.65 }} />
            <span className="glow-particle" style={{ top: '58%', right: '18%', width: '4px', height: '4px', opacity: 0.45 }} />
            <span className="glow-particle" style={{ top: '65%', right: '12%', width: '3px', height: '3px', opacity: 0.6 }} />
            <span className="glow-particle" style={{ top: '80%', right: '7%', width: '5px', height: '5px', opacity: 0.3 }} />
          </div>

          {/* Corner Art Decorations with Ambient Glow */}
          <img
            src={leftCornerImg}
            alt=""
            className="hero-corner-decoration hero-corner-left"
            style={{ opacity: textOpacity * 0.85 }}
          />
          <img
            src={rightCornerImg}
            alt=""
            className="hero-corner-decoration hero-corner-right"
            style={{ opacity: textOpacity * 0.85 }}
          />

          {/* Left Side 2 Features */}
          <div className="hero-side-features-left" style={sideFeaturesLeftStyle}>
            <div className="hero-feature-item-vertical">
              <GiBowlOfRice className="hero-feature-icon" />
              <div className="hero-feature-text-block">
                <h4 className="hero-feature-title">Authentic Recipes</h4>
                <p className="hero-feature-sub">Traditional flavors passed down</p>
              </div>
            </div>
            
            <div className="hero-feature-item-vertical">
              <GiLeafSwirl className="hero-feature-icon" />
              <div className="hero-feature-text-block">
                <h4 className="hero-feature-title">Fresh Ingredients</h4>
                <p className="hero-feature-sub">Carefully selected every day</p>
              </div>
            </div>
          </div>

          {/* Right Side 2 Features */}
          <div className="hero-side-features-right" style={sideFeaturesRightStyle}>
            <div className="hero-feature-item-vertical">
              <GiHotMeal className="hero-feature-icon" />
              <div className="hero-feature-text-block">
                <h4 className="hero-feature-title">Warm Hospitality</h4>
                <p className="hero-feature-sub">Where every meal feels like home</p>
              </div>
            </div>

            <div className="hero-feature-item-vertical">
              <GiMedal className="hero-feature-icon" />
              <div className="hero-feature-text-block">
                <h4 className="hero-feature-title">Quality & Care</h4>
                <p className="hero-feature-sub">Made with passion and perfection</p>
              </div>
            </div>
          </div>

          {/* Top Text: Eyebrow + Main Heading */}
          <div className="hero-animated-text-top" style={textStyleTop}>
            <div className="hero-eyebrow-container">
              <span className="hero-eyebrow-line" />
              <span className="hero-eyebrow">AUTHENTIC BANGALI CUISINE</span>
              <span className="hero-eyebrow-line" />
            </div>
            <h1 className="hero-heading-h1">A Taste Of Bengal</h1>
          </div>

          {/* Central 300-Frame Scroll Canvas */}
          <div className="hero-ambient-glow" style={{ opacity: textOpacity }} />
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            style={canvasStyle}
          />
          
          {/* Text Below Restaurant Image */}
          <div className="hero-animated-text-bottom" style={textStyleBottom}>
            <p className="hero-description-text">
              Experience The Rich Flavors And Timeless Traditions Of Bengali Cuisine, Made With Love.
            </p>
          </div>
          
          {loadProgress < 1 && (
            <div
              className="hero-loading-bar"
              style={{ width: `${loadProgress * 100}%` }}
            />
          )}
          
          <div className="scroll-indicator" style={{ opacity: textOpacity }}>
            <span>SCROLL TO DISCOVER</span>
            <div className="scroll-arrow">↓</div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Header;
