import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const { eyebrow, heading, intro, channels } = siteContent.contact;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.15 });

  return (
    <section id="contact" className="contact section section--white" ref={sectionRef}>
      <div className="container contact__container">
        <div className="contact__layout">
          <div className={`contact__left reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title contact__heading">{heading}</h2>
            <p className="section-intro contact__intro">{intro}</p>
          </div>

          <div className="contact__right">
            {channels.map((channel, index) => (
              <div
                key={channel.email}
                className={`contact__channel reveal-init ${isRevealed ? 'is-revealed' : ''}`}
                style={{ '--i': index }}
              >
                <div className="contact__channel-header">
                  <span className="contact__channel-icon" aria-hidden="true">
                    <Mail size={18} strokeWidth={1.5} />
                  </span>
                  <span className="contact__channel-label">{channel.label}</span>
                </div>

                <a href={channel.mailto} className="contact__email-link">
                  <span className="contact__email-text">{channel.email}</span>
                  <ArrowUpRight size={20} className="contact__email-arrow" aria-hidden="true" />
                </a>

                <p className="contact__channel-desc">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
