import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../data/content';
import { useScrolled } from '../hooks/useScrolled';
import Button from './Button';
import MobileMenu from './MobileMenu';
import './Header.css';

export default function Header() {
  const isScrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  // Return focus to menu toggle button when closed
  const prevMenuOpen = useRef(menuOpen);
  useEffect(() => {
    if (prevMenuOpen.current && !menuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
    prevMenuOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__container">
          <a href="#home" className="header__brand" aria-label="Njoku International Home">
            <span className="header__monogram" aria-hidden="true">NI</span>
            <span className="header__wordmark">{siteContent.brand.name}</span>
          </a>

          <nav className="header__nav" aria-label="Main Navigation">
            <ul className="header__nav-list">
              {siteContent.navigation.map((item) => (
                <li key={item.href} className="header__nav-item">
                  <a href={item.href} className="header__nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <Button
              variant="primary"
              href="mailto:info@njokuinternational.com?subject=Business%20Enquiry%20-%20Njoku%20International"
              className="header__cta"
            >
              Contact
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              className="header__toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navigation={siteContent.navigation}
      />
    </>
  );
}
