import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';

export default function App() {
  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
}
