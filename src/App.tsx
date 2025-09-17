import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SecuritySection from './components/SecuritySection';
import GuardiansSection from './components/GuardiansSection';
import IntegrationSection from './components/IntegrationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SecuritySection />
        <GuardiansSection />
        <IntegrationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;