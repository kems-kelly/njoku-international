import React from 'react';
import { siteContent } from './data/content';

export default function App() {
  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <header className="section section--deep-navy">
          <div className="container">
            <span className="section-eyebrow">{siteContent.hero.eyebrow}</span>
            <h1 className="section-title">{siteContent.hero.name}</h1>
            <p className="section-intro">{siteContent.hero.headline}</p>
          </div>
        </header>
      </main>
    </div>
  );
}
