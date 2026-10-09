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

  /* Return focus to the toggle when menu closes */
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

          {/* Logo / brand */}
          <a href="#home" className="header__brand" aria-label="Njoku International Home">
            <img
              src="/images/logo.png"
              alt="Njoku International"
              className="header__logo"
              width="auto"
              height="100"
            />
          </a>

          {/* Desktop nav + CTA */}
          <div className="header__right">
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

            <Button
              variant="primary"
              size="header"
              href="mailto:info@njokuinternational.com?subject=Business%20Enquiry%20-%20Njoku%20International"
              className="header__cta"
            >
              Contact
            </Button>

            {/* Mobile toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              className="header__toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen
                ? <X size={22} aria-hidden="true" />
                : <Menu size={22} aria-hidden="true" />}
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
