import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Industries from './sections/Industries';
import Commitment from './sections/Commitment';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { usePageTitle } from './hooks/usePageTitle';

export default function App() {
  usePageTitle();

  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Process />
        <Industries />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
