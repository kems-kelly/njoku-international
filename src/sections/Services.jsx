import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

export default function Services() {
  const { eyebrow, heading, intro, items } = siteContent.services;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.15 });

  return (
    <section id="services" className="services section section--white" ref={sectionRef}>
      <div className="container services__container">
        <header className={`services__header reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">{heading}</h2>
          <p className="section-intro">{intro}</p>
        </header>

        <div className="services__list">
          {items.map((service, index) => (
            <div
              key={service.number}
              className={`services__row reveal-init ${isRevealed ? 'is-revealed' : ''}`}
              style={{ '--i': index }}
            >
              <div className="services__row-num">
                <span className="services__num">{service.number}</span>
              </div>

              <div className="services__row-title">
                <h3 className="services__item-heading">{service.title}</h3>
                <div className="services__line-indicator" aria-hidden="true" />
              </div>

              <div className="services__row-desc">
                <p className="services__item-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
