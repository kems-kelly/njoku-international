import React from 'react';
import { siteContent } from '../data/content';
import Button from '../components/Button';
import './Hero.css';

export default function Hero() {
  const { eyebrow, subline, ctaPrimary, ctaSecondary, image } = siteContent.hero;

  return (
    <section id="home" className="hero section section--deep-navy" aria-label="Hero">
      <div className="hero__background" aria-hidden="true">
        <img
          src={image.src}
          alt=""
          className="hero__bg-img"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{eyebrow}</span>
          <h1 className="hero__headline">
            <span className="hero__headline-line">Connecting Businesses.</span>
            <br />
            <span className="hero__headline-line">Creating Opportunities.</span>
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
      </div>
    </section>
  );
}
