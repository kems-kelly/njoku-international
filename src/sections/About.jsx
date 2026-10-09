import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const { eyebrow, statement, supportingText, microHeading, image } = siteContent.about;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.15 });

  return (
    <section id="about" className="about section section--paper" ref={sectionRef}>
      <div className="container about__container">
        <div className={`about__grid reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          {/* Left Column: Company Introduction */}
          <div className="about__text-col">
            <div className="about__eyebrow-wrapper">
              <span className="about__eyebrow-line" aria-hidden="true" />
              <span className="about__eyebrow">{eyebrow}</span>
            </div>

            <h2 className="about__statement">{statement}</h2>

            <p className="about__supporting">{supportingText}</p>
          </div>

          {/* Right Column: Architectural Photography & Layered Art Direction */}
          <div className="about__visual-col">
            {microHeading && (
              <div className="about__micro-badge" aria-hidden="true">
                <span className="about__micro-text">{microHeading}</span>
                <span className="about__micro-line" />
              </div>
            )}

            <div className="about__composition">
              <div className="about__backdrop-panel" aria-hidden="true" />
              <div className="about__image-frame">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="about__img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
