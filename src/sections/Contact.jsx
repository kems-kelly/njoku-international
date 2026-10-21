import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import ContactModal from './ContactModal';
import './Contact.css';

export default function Contact() {
  const { eyebrow, heading, intro, card, email } = siteContent.contact;
  const [sectionRef, isRevealed] = useReveal({ threshold: 0.12 });

  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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

          {/* Right Column — Enquiry Panel */}
          <div className={`contact__panels reveal-init ${isRevealed ? 'is-revealed' : ''}`}>
            <button
              ref={cardRef}
              type="button"
              className="contact__panel"
              onClick={handleOpenModal}
              aria-label={`Open message form for ${card.label}`}
            >
              <span className="contact__panel-label">{card.label}</span>

              <span className="contact__email-row">
                <span className="contact__email">{email}</span>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="contact__arrow"
                  aria-hidden="true"
                />
              </span>

              <span className="contact__panel-desc">{card.description}</span>
            </button>
          </div>

        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        returnFocusRef={cardRef}
      />
    </section>
  );
}
