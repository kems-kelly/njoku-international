import React from 'react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const { eyebrow, statement, supportingLine } = siteContent.about;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.2 });

  return (
    <section id="about" className="about section section--paper" ref={sectionRef}>
      <div className="container about__container">
        <div className={`about__inner reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="about__header">
            <span className="section-eyebrow">{eyebrow}</span>
            <div className="about__accent-line" aria-hidden="true" />
          </div>

          <div className="about__content">
            <blockquote className="about__statement">
              {statement}
            </blockquote>
            <p className="about__supporting">
              {supportingLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
