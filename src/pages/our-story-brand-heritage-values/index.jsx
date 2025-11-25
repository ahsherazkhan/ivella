import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StoryTimeline from './components/StoryTimeline';
import ValuesSection from './components/ValuesSection';
import IngredientMap from './components/IngredientMap';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import SustainabilitySection from './components/SustainabilitySection';
import CustomerImpactSection from './components/CustomerImpactSection';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const OurStoryPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Our Story - Brand Heritage & Values | IVELLA';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Discover the inspiring story behind IVELLA - from ancient beauty wisdom to modern luxury hair care. Learn about our values, sustainability commitments, and global impact.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Story Timeline */}
      <StoryTimeline />
      {/* Values Section */}
      {/* <ValuesSection /> */}
      {/* Ingredient Sourcing Map */}
      {/* <IngredientMap /> */}
      {/* Craftsmanship Section */}
      <CraftsmanshipSection />
      {/* Sustainability Section */}
      {/* <SustainabilitySection /> */}
      {/* Customer Impact Section */}
      {/* <CustomerImpactSection /> */}
      {/* Call to Action Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-white">
                Ready to Experience the Promise?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                When you choose Ivella, you're not just taking care of your hair. You're choosing to nourish yourself naturally. Every drop crafted with intention: to hydrate, to strengthen, to soothe, to heal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button 
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
                iconName="Sparkles"
                iconPosition="left"
              >
                Take Hair Quiz
              </Button> */}
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="ShoppingBag"
                iconPosition="left"
                onClick={() => navigate('/signature-collection-premium-product-showcase')}
              >
                Shop Oil
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 border-t border-white/20">
              <p className="text-white/70 text-sm mb-6">
                Trusted by 50,000+ women worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} color="white" />
                  <span className="text-white text-sm">B-Corp Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Leaf" size={20} color="white" />
                  <span className="text-white text-sm">Carbon Neutral</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={20} color="white" />
                  <span className="text-white text-sm">Cruelty Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Handshake" size={20} color="white" />
                  <span className="text-white text-sm">Fair Trade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <span className="font-heading text-2xl font-semibold text-primary">
                  IVELLA
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                A modern beauty house built on three pillars: Purity. Performance. Ritual. Every formulation is designed to feel intentional, elegant, and deeply sensorial—inviting you not just to "use a product," but to experience a moment of care you didn't know you needed.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-primary mb-4">
                Explore
              </h4>
              <div className="space-y-3">
                <a href="/homepage-luxury-beauty-immersive-experience" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </a>
                <a href="/signature-collection-premium-product-showcase" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Product
                </a>
                {/* <a href="/hair-wellness-quiz-personalized-discovery" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Hair Quiz
                </a> */}
                <a href="/ingredient-library-transparency-education" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Ingredients
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold text-primary mb-4">
                Company
              </h4>
              <div className="space-y-3">
                <a href="/our-story-brand-heritage-values" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Our Story
                </a>
                <a href="/customer-transformations-social-proof-gallery" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Transformations
                </a>
                <div className="block text-muted-foreground">
                  Sustainability
                </div>
                <a href="mailto:contact@ivella.net" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} IVELLA. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">
                Privacy Policy
              </div>
              <div className="text-sm text-muted-foreground">
                Terms of Service
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/ivellaofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584310796035" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurStoryPage;