import React from 'react';
import { siteContent } from '../data/content';
import Button from '../components/Button';
import './Hero.css';

export default function Hero() {
  const { eyebrow, headline, subline, ctaPrimary, ctaSecondary, image } = siteContent.hero;

  return (
    <section id="home" className="hero section section--deep-navy" aria-label="Hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{eyebrow}</span>
          <h1 className="hero__headline">
            Connecting Businesses.<br />
            Creating Opportunities.
          </h1>
          <p className="hero__subline">{subline}</p>
          <div className="hero__actions">
            <Button
              variant="primary"
              href={ctaPrimary.href}
              className="hero__btn"
            >
              {ctaPrimary.label}
            </Button>
            <Button
              variant="secondary"
              href={ctaSecondary.href}
              className="hero__btn"
            >
              {ctaSecondary.label}
            </Button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="eager"
              fetchPriority="high"
              className="hero__img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Elegant SVG/CSS Fallback & Ambient Background */}
            <div className="hero__placeholder" aria-hidden="true">
              <svg
                className="hero__placeholder-svg"
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="300"
                  cy="225"
                  r="150"
                  stroke="var(--gold-500)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  strokeOpacity="0.4"
                />
                <ellipse
                  cx="300"
                  cy="225"
                  rx="150"
                  ry="65"
                  stroke="var(--gold-500)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <ellipse
                  cx="300"
                  cy="225"
                  rx="80"
                  ry="150"
                  stroke="var(--gold-500)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line
                  x1="150"
                  y1="225"
                  x2="450"
                  y2="225"
                  stroke="var(--gold-500)"
                  strokeWidth="1"
                  strokeOpacity="0.35"
                />
                <circle cx="250" cy="190" r="4" fill="var(--gold-500)" />
                <circle cx="360" cy="250" r="4" fill="var(--gold-500)" />
                <circle cx="380" cy="180" r="3" fill="var(--gold-500)" />
                <path
                  d="M250 190 Q305 165 380 180"
                  stroke="var(--gold-500)"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  fill="none"
                />
                <path
                  d="M250 190 Q310 240 360 250"
                  stroke="var(--gold-500)"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className="hero__image-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
