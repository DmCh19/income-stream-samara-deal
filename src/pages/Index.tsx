
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PropertyDetails from '../components/PropertyDetails';
import FinancialBreakdown from '../components/FinancialBreakdown';
import Benefits from '../components/Benefits';
import AboutSeller from '../components/AboutSeller';
import ContactForm from '../components/ContactForm';

const Index = () => {
  useEffect(() => {
    document.title = 'Готовый бизнес с пассивным доходом';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PropertyDetails />
      <FinancialBreakdown />
      <Benefits />
      <AboutSeller />
      <ContactForm />
    </div>
  );
};

export default Index;
