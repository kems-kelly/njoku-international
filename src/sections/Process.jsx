import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Process.css';

export default function Process() {
  const { eyebrow, heading, intro, stages, note } = siteContent.approach;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.15 });

  return (
    <section id="approach" className="process section section--mist" ref={sectionRef}>
      <div className="container process__container">
        <header className={`process__header reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">{heading}</h2>
          <p className="section-intro">{intro}</p>
        </header>

        <div className="process__timeline">
          <div className="process__track-line" aria-hidden="true" />
          <div className="process__grid">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`process__step reveal-init ${isRevealed ? 'is-revealed' : ''}`}
                style={{ '--i': index }}
              >
                <div className="process__step-marker">
                  <span className="process__step-num">{stage.number}</span>
                  <div className="process__step-dot" aria-hidden="true" />
                </div>
                <div className="process__step-content">
                  <h3 className="process__step-title">{stage.name}</h3>
                  <p className="process__step-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`process__footer reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          <p className="process__note">{note}</p>
        </div>
      </div>
    </section>
  );
}
