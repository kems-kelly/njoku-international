import React, { useEffect, useRef } from 'react';
import Button from './Button';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose, navigation }) {
  const panelRef = useRef(null);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on outside click
  const handleBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      id="mobile-navigation"
      className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu__panel" ref={panelRef}>
        <nav className="mobile-menu__nav" aria-label="Mobile Navigation">
          <ul className="mobile-menu__list">
            {navigation.map((item) => (
              <li key={item.href} className="mobile-menu__item">
                <a
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={onClose}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <Button
            variant="primary"
            href="mailto:info@njokuinternational.com?subject=Business%20Enquiry%20-%20Njoku%20International"
            className="mobile-menu__cta"
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            Discuss an Opportunity
          </Button>
        </div>
      </div>
    </div>
  );
}
