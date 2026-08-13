import React, { useState, useEffect } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { AuthGateModal } from './components/AuthGateModal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { GrowthCalculator } from './components/GrowthCalculator';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/OrderModal';
import { User, Service } from './types';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(true);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<Service | null>(null);

  useEffect(() => {
    // Check if user session stored in localStorage safely
    try {
      const savedUser = localStorage.getItem('growup_user');
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (parsed && typeof parsed === 'object') {
          setUser(parsed);
          setAuthModalOpen(false);
        }
      }
    } catch {
      // ignore if storage is disabled or throws security error
    }
  }, []);

  const handleLoginSuccess = (loggedInUser: User) => {
    setUser(loggedInUser);
    try {
      localStorage.setItem('growup_user', JSON.stringify(loggedInUser));
    } catch {
      // ignore if storage is disabled
    }
    setAuthModalOpen(false);
  };

  const handleOpenAuth = () => {
    setAuthModalOpen(true);
  };

  const handleSelectServiceForModal = (service: Service) => {
    setSelectedServiceForModal(service);
    setOrderModalOpen(true);
  };

  const handleOpenGenericOrderModal = () => {
    setSelectedServiceForModal(null);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
      
      {/* 3D WebGL Interactive Particle Background */}
      <ThreeBackground />

      {/* Auth Gate Login/Register Modal */}
      <AuthGateModal
        isOpen={authModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Main Website App View */}
      <div className={`transition-all duration-500 ${authModalOpen ? 'blur-sm pointer-events-none select-none opacity-40' : 'opacity-100'}`}>
        
        {/* Navigation Bar */}
        <Navbar
          user={user}
          onOpenAuth={handleOpenAuth}
          onOpenOrderModal={handleOpenGenericOrderModal}
        />

        {/* Hero Section */}
        <HeroSection
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenOrderModal={handleOpenGenericOrderModal}
        />

        {/* 5 Core Services Section (₹49 starter pricing) */}
        <ServicesSection
          onSelectServiceForModal={handleSelectServiceForModal}
        />

        {/* Interactive Growth Potential Calculator */}
        <GrowthCalculator />

        {/* Why Choose GROWUP Section */}
        <WhyChooseSection />

        {/* Testimonials / Reviews Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Footer with Yashvir Paul credit */}
        <Footer />

        {/* Floating Animated WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Custom Order Builder Modal */}
        <OrderModal
          isOpen={orderModalOpen}
          onClose={() => setOrderModalOpen(false)}
          selectedService={selectedServiceForModal}
          user={user}
        />

      </div>
    </div>
  );
}
