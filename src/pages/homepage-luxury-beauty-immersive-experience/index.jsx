import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import IngredientSpotlight from './components/IngredientSpotlight';
import HairGallery from './components/HairGallery';
import CustomerTransformations from './components/CustomerTransformations';
import RitualMoments from './components/RitualMoments';
import TrustBadges from './components/TrustBadges';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <IngredientSpotlight />
        <HairGallery />
        <Certifications />
        <CustomerTransformations />
        <TrustBadges />
        {/* <RitualMoments /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;