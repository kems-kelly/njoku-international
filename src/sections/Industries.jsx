import React from 'react';
import { Globe, Coins, Briefcase, TrendingUp } from 'lucide-react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Industries.css';

const ICON_MAP = {
  Globe: Globe,
  Coins: Coins,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
};

export default function Industries() {
  const { eyebrow, heading, intro, items } = siteContent.industries;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.15 });

  return (
    <section id="industries" className="industries section section--paper" ref={sectionRef}>
      <div className="container industries__container">
        <div className="industries__layout">
          <header className={`industries__header reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title">{heading}</h2>
            <p className="section-intro">{intro}</p>
          </header>

          <div className="industries__list">
            {items.map((item, index) => {
              const IconComponent = ICON_MAP[item.icon] || Globe;
              return (
                <div
                  key={item.number}
                  className={`industries__item reveal-init ${isRevealed ? 'is-revealed' : ''}`}
                  style={{ '--i': index }}
                >
                  <div className="industries__item-top">
                    <span className="industries__item-icon" aria-hidden="true">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </span>
                    <span className="industries__item-num">{item.number}</span>
                  </div>

                  <div className="industries__item-body">
                    <h3 className="industries__item-title">{item.title}</h3>
                    <p className="industries__item-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
