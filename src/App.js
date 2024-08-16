import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AIIntegration from './components/AIIntegration';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HowItWorks />
      <AIIntegration />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

