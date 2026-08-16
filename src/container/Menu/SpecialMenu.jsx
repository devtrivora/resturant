import React, { useEffect, useRef, useState } from 'react';
import {
  GiBowlOfRice,
  GiPretzel,
  GiRoastChicken,
  GiShrimp,
  GiDrinkMe,
  GiCakeSlice,
  GiLeafSwirl,
  GiWheat,
  GiMedal,
  GiFamilyHouse,
  GiChefToque,
} from 'react-icons/gi';
import { data } from '../../constants';
import leftCornerImg from '../../components/Hero/left.png';
import rightCornerImg from '../../components/Hero/right.png';
import heroFoodImg from '../../components/PhotoGallery/11.jpg';
import heroAccentImg from '../../components/PhotoGallery/d3 (2).png';
import hospitalityImg from '../../components/PhotoGallery/2.jpg';
import './SpecialMenu.css';

const { menuCategories, popularDishes } = data;

const StarGlint = ({ style }) => (
  <svg viewBox="0 0 24 24" className="star-glint-svg" style={style}>
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" fill="#FFB347" />
  </svg>
);

const categoryIcons = {
  breakfast: <GiBowlOfRice />,
  snacks: <GiPretzel />,
  grill: <GiRoastChicken />,
  fishbbq: <GiShrimp />,
  beverages: <GiDrinkMe />,
  desserts: <GiCakeSlice />,
};

const MenuDish = ({ item, index }) => (
  <div className="menu-dish menu-dish-enter" style={{ animationDelay: `${index * 90}ms` }}>
    <span className="menu-dish-badge">{String(index + 1).padStart(2, '0')}</span>
    <div className="menu-dish-body">
      <div className="menu-dish-head">
        <h4 className="menu-dish-name">{item.nameBn}</h4>
        <span className="menu-dish-dots" aria-hidden="true" />
        <span className="menu-dish-price">{item.price}</span>
      </div>
      <p className="menu-dish-desc">{item.nameEn}{item.description ? ` — ${item.description}` : ''}</p>
    </div>
  </div>
);

const valueItems = [
  { icon: <GiLeafSwirl />, bn: 'তাজা উপকরণ', en: 'Fresh ingredients' },
  { icon: <GiWheat />, bn: 'ঐতিহ্যের স্বাদ', en: 'Authentic traditional flavors' },
  { icon: <GiMedal />, bn: 'উন্নত মানের সেবা', en: 'Premium service' },
  { icon: <GiFamilyHouse />, bn: 'পরিবারের মতো পরিবেশ', en: 'Warm family-style atmosphere' },
];

const SpecialMenu = () => {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [leaving, setLeaving] = useState(false);
  const leaveTimer = useRef(null);

  const activeCategory = menuCategories.find((cat) => cat.id === activeId) || menuCategories[0];
  const leftItems = activeCategory.items.slice(0, 3);
  const rightItems = activeCategory.items.slice(3, 6);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const selectCategory = (id) => {
    if (id === activeId || leaving) return;
    setLeaving(true);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      setActiveId(id);
      setLeaving(false);
    }, 380);
  };

  const nextCategory = () => {
    const idx = menuCategories.findIndex((cat) => cat.id === activeId);
    selectCategory(menuCategories[(idx + 1) % menuCategories.length].id);
  };

  return (
    <section className="menu-section" id="menu">
      {/* Hero-style ambient glow behind the content */}
      <div className="hero-ambient-glow menu-ambient-glow" />

      {/* Left side glow, particles, and star glints */}
      <div className="side-glow-container left-side-glow menu-side-glow">
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

      {/* Right side glow, particles, and star glints */}
      <div className="side-glow-container right-side-glow menu-side-glow">
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

      {/* Bottom corner art decorations */}
      <img src={leftCornerImg} alt="" className="menu-corner-decoration menu-corner-left" />
      <img src={rightCornerImg} alt="" className="menu-corner-decoration menu-corner-right" />

      {/* ==================== 1. MENU HERO ==================== */}
      <div className="menu-hero">
        {/* Right ~55%: food photo with left-to-right dark gradient (Moments of Beresta style) */}
        <div className="menu-hero-image">
          <img src={heroFoodImg} alt="Traditional Bengali cuisine" />
          <div className="menu-hero-overlay" />
        </div>

        {/* Bottom-left corner floral ornament (partially cropped) */}
        <img src={leftCornerImg} alt="" className="menu-hero-ornament" />

        {/* Left: small dish accent + text panel */}
        <div className="menu-hero-left">
          <img src={heroAccentImg} alt="" className="menu-hero-accent" />
          <div className="menu-hero-text">
            <div className="menu-eyebrow-container">
              <span className="menu-eyebrow-line" />
              <span className="menu-eyebrow">Our Menu</span>
              <span className="menu-eyebrow-line" />
            </div>
            <h1 className="menu-hero-title">A Taste Of Bengal</h1>
            <p className="menu-hero-copy">
              Discover the rich flavors and timeless traditions of authentic Bengali cuisine.
            </p>
            <a href="#menu-showcase" className="menu-hero-cta">
              Explore Menu <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* ==================== 2. CATEGORY NAVIGATION ==================== */}
      <nav className="menu-categories" aria-label="Menu categories">
        {menuCategories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              type="button"
              key={cat.id}
              className={`menu-cat ${isActive ? 'active' : ''}`}
              onClick={() => selectCategory(cat.id)}
              aria-pressed={isActive}
            >
              <span className="menu-cat-icon">{categoryIcons[cat.id]}</span>
              <span className="menu-cat-text">
                <span className="menu-cat-bn">{cat.tabBn}</span>
                <span className="menu-cat-en">{cat.tabEn}</span>
              </span>
              <span className="menu-cat-indicator" aria-hidden="true" />
            </button>
          );
        })}
      </nav>

      {/* ==================== 3. MAIN MENU SHOWCASE ==================== */}
      <div className="menu-showcase-wrap" id="menu-showcase">
        <div className={`menu-showcase ${leaving ? 'menu-showcase-leaving' : ''}`} key={activeId}>
          <div className="menu-showcase-header menu-showcase-header-enter">
            <h2 className="menu-showcase-title">{activeCategory.titleBn}</h2>
            <span className="menu-showcase-subtitle">{activeCategory.titleEn}</span>
            <div className="menu-showcase-rule">
              <span className="menu-showcase-rule-line" />
              <span className="menu-showcase-rule-diamond" />
              <span className="menu-showcase-rule-line" />
            </div>
          </div>

          <div className="menu-showcase-grid">
            <div className="menu-column menu-column-left">
              {leftItems.map((item, index) => (
                <MenuDish item={item} index={index} key={item.nameBn} />
              ))}
            </div>

            <div className="menu-showcase-image menu-showcase-image-enter">
              <div className="menu-image-glow" />
              <div className="menu-image-frame">
                <img src={activeCategory.image} alt={activeCategory.imageAlt} />
              </div>
              <div className="menu-image-ornament">
                <span className="menu-image-ornament-diamond" />
              </div>
            </div>

            <div className="menu-column menu-column-right">
              {rightItems.map((item, index) => (
                <MenuDish item={item} index={index + 3} key={item.nameBn} />
              ))}
            </div>
          </div>

          <div className="menu-showcase-actions menu-showcase-actions-enter">
            <a href="#popular" className="menu-ghost-btn">View Full Menu <span aria-hidden="true">&rarr;</span></a>
            <button type="button" className="menu-ghost-btn" onClick={nextCategory}>
              Next Category <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================== 4. HOSPITALITY BANNER ==================== */}
      <div className="menu-hospitality">
        <div className="menu-hospitality-overlay" />
        <div className="menu-hospitality-text">
          <div className="menu-eyebrow-container">
            <span className="menu-eyebrow-line" />
            <span className="menu-eyebrow">Hospitality</span>
            <span className="menu-eyebrow-line" />
          </div>
          <h2 className="menu-hospitality-title">Experience Hospitality Like No Other</h2>
          <p className="menu-hospitality-copy">
            From the moment you step in, we serve more than just food. We create memories.
          </p>
          <span className="menu-hospitality-icon"><GiChefToque /></span>
        </div>
        <div className="menu-hospitality-media">
          <img src={hospitalityImg} alt="Warm Beresta hospitality" />
        </div>
      </div>        {/* ==================== 5. POPULAR DISHES — infinite round marquee ==================== */}
      <div className="menu-popular" id="popular">
        <div className="menu-eyebrow-container">
          <span className="menu-eyebrow-line" />
          <span className="menu-eyebrow">Most Loved</span>
          <span className="menu-eyebrow-line" />
        </div>
        <h2 className="menu-popular-title">Our Popular Dishes</h2>

        <div className="menu-popular-glass">
          <div className="menu-popular-carousel">
          <div className="menu-popular-track">
            <div className="menu-popular-set">
              {popularDishes.map((dish) => (
                <div className="menu-popular-card" key={dish.id}>
                  <div className="menu-popular-card-img">
                    <img src={dish.image} alt={dish.name} loading="lazy" />
                  </div>
                  <h4 className="menu-popular-card-name">{dish.nameBn}</h4>
                  <span className="menu-popular-card-en">{dish.name}</span>
                  <span className="menu-popular-card-price">{dish.price}</span>
                </div>
              ))}
            </div>
            <div className="menu-popular-set" aria-hidden="true">
              {popularDishes.map((dish) => (
                <div className="menu-popular-card" key={dish.id}>
                  <div className="menu-popular-card-img">
                    <img src={dish.image} alt="" loading="lazy" />
                  </div>
                  <h4 className="menu-popular-card-name">{dish.nameBn}</h4>
                  <span className="menu-popular-card-en">{dish.name}</span>
                  <span className="menu-popular-card-price">{dish.price}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* ==================== 6. VALUE / SERVICE STRIP ==================== */}
      <div className="menu-value-strip">
        {valueItems.map((item) => (
          <div className="menu-value-item" key={item.en}>
            <span className="menu-value-icon">{item.icon}</span>
            <h4 className="menu-value-bn">{item.bn}</h4>
            <p className="menu-value-en">{item.en}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialMenu;
