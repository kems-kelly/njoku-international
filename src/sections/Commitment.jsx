import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Commitment.css';

export default function Commitment() {
  const { eyebrow, heading, intro, values } = siteContent.commitment;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.15 });

  return (
    <section id="commitment" className="commitment section section--navy" ref={sectionRef}>
      <div className="container commitment__container">
        <header className={`commitment__header reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title commitment__title">{heading}</h2>
          <p className="section-intro commitment__intro">{intro}</p>
        </header>

        <div className="commitment__list">
          {values.map((val, index) => (
            <div
              key={val.title}
              className={`commitment__row reveal-init ${isRevealed ? 'is-revealed' : ''}`}
              style={{ '--i': index }}
            >
              <div className="commitment__row-body">
                <h3 className="commitment__value-title">{val.title}</h3>
                <p className="commitment__value-desc">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
