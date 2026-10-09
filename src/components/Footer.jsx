import React from 'react';
import { siteContent } from '../data/content';
import './Footer.css';

export default function Footer() {
  const { brand, navigation, contact, footer } = siteContent;

  return (
    <footer className="footer section--deep-navy" aria-label="Site Footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand-block">
            <a href="#home" className="footer__brand-link" aria-label="Njoku International Home">
              <span className="footer__monogram" aria-hidden="true">NI</span>
              <span className="footer__wordmark">{brand.name}</span>
            </a>
            <p className="footer__tagline">{brand.tagline}</p>
          </div>

          <div className="footer__nav-block">
            <h4 className="footer__block-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navigation.map((item) => (
                <li key={item.href} className="footer__nav-item">
                  <a href={item.href} className="footer__nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-block">
            <h4 className="footer__block-title">Direct Enquiries</h4>
            <ul className="footer__contact-list">
              {contact.channels.map((channel) => (
                <li key={channel.email} className="footer__contact-item">
                  <span className="footer__contact-label">{channel.label}</span>
                  <a href={channel.mailto} className="footer__email-link">
                    {channel.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">{footer.disclaimer}</p>
          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
