import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Process.css';

export default function Process() {
  const { eyebrow, heading, stages, note } = siteContent.approach;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.12 });

  const [primaryStage, ...secondaryStages] = stages;

  return (
    <section id="approach" className="process" ref={sectionRef}>
      <div className="container process__container">

        {/* Section Header */}
        <header className={`process__header reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="process__eyebrow-wrapper">
            <span className="process__eyebrow-line" aria-hidden="true" />
            <span className="process__eyebrow">{eyebrow}</span>
          </div>
          <h2 className="process__heading">{heading}</h2>
        </header>

        {/* Four-Card Row */}
        <div className={`process__cards reveal-init ${isRevealed ? 'is-revealed' : ''}`}>

          {/* Card 1 ΓÇö Primary (Navy): keep the "01" as a single anchor mark */}
          <div className="process__card process__card--primary">
            <span className="process__num">{primaryStage.number}</span>
            <h3 className="process__card-title">{primaryStage.name}</h3>
            <p className="process__card-desc">{primaryStage.description}</p>
          </div>

          {/* Cards 2ΓÇô4 ΓÇö No numbers, just title + description */}
          {secondaryStages.map((stage) => (
            <div
              key={stage.number}
              className="process__card process__card--secondary"
            >
              <h3 className="process__card-title">{stage.name}</h3>
              <p className="process__card-desc">{stage.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <p className={`process__note reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          {note}
        </p>
      </div>
    </section>
  );
}
