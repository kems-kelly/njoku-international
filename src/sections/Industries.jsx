import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Industries.css';

export default function Industries() {
  const { eyebrow, heading, intro, items } = siteContent.industries;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.12 });

  const [primaryItem, ...secondaryItems] = items;

  return (
    <section id="industries" className="industries" ref={sectionRef}>
      <div className="container industries__container">
        <div className="industries__layout">

          {/* Left Column — Introduction */}
          <div className={`industries__intro reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
            <div className="industries__eyebrow-wrapper">
              <span className="industries__eyebrow-line" aria-hidden="true" />
              <span className="industries__eyebrow">{eyebrow}</span>
            </div>
            <h2 className="industries__heading">
              Industries<br />of Interest
            </h2>
            <p className="industries__intro-text">{intro}</p>
          </div>

          {/* Right Column — 2×2 Panel Grid */}
          <div className={`industries__grid reveal-init ${isRevealed ? 'is-revealed' : ''}`}>

            {/* Panel 01 — Navy Primary */}
            <div className="industries__panel industries__panel--primary">
              <div className="industries__panel-top">
                <span className="industries__num">{primaryItem.number}</span>
                <span className="industries__num-line" aria-hidden="true" />
              </div>
              <h3 className="industries__panel-title">{primaryItem.title}</h3>
              <p className="industries__panel-desc">{primaryItem.description}</p>
            </div>

            {/* Panels 02–04 — Ivory Secondary (no numbers) */}
            {secondaryItems.map((item) => (
              <div
                key={item.title}
                className="industries__panel industries__panel--secondary"
              >
                <h3 className="industries__panel-title">{item.title}</h3>
                <p className="industries__panel-desc">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
