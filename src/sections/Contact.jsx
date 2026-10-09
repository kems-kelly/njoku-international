import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const { eyebrow, heading, intro, channels } = siteContent.contact;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.12 });

  return (
    <section id="contact" className="contact section section--paper" ref={sectionRef}>
      <div className="container contact__container">
        <div className="contact__layout">

          {/* Left Column — Introduction */}
          <div className={`contact__left reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
            <div className="contact__eyebrow-wrapper">
              <span className="contact__eyebrow-line" aria-hidden="true" />
              <span className="contact__eyebrow">{eyebrow}</span>
            </div>
            <h2 className="contact__heading">
              Have a business<br />opportunity to discuss?
            </h2>
            <p className="contact__intro">{intro}</p>
          </div>

          {/* Right Column — Enquiry Panels */}
          <div className={`contact__panels reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
            {channels.map((channel) => (
              <a
                key={channel.email}
                href={channel.mailto}
                className="contact__panel"
                aria-label={`${channel.label}: ${channel.email}`}
              >
                <span className="contact__panel-label">{channel.label}</span>

                <span className="contact__email-row">
                  <span className="contact__email">{channel.email}</span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="contact__arrow"
                    aria-hidden="true"
                  />
                </span>

                <span className="contact__panel-desc">{channel.description}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
