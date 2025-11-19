import React, { useState, useEffect, useRef } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const HairGallery = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  const benefits = [
    {
      id: 1,
      title: "Deep Hydration",
      subtitle: "Moisture That Lasts",
      description: "Our premium blend of argan, jojoba, and castor oils penetrates deep into the hair cuticle, creating a protective barrier that locks in moisture for up to 72 hours. Unlike surface-level treatments that wash away, our formula works at the molecular level to repair damaged cuticles and restore your hair's natural ability to retain moisture.",
      detailedDescription: "The unique combination of fatty acids and vitamins in our signature oil blend creates a micro-emulsion that doesn't just sit on top of your hair—it becomes part of it. This deep penetration means your hair stays hydrated through multiple washes, humidity changes, and styling sessions.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Droplet",
      stat: "72hrs",
      statLabel: "Moisture Retention",
      features: [
        "Repairs damaged cuticles",
        "Prevents moisture loss",
        "Works for all hair types",
        "No build-up or residue"
      ],
      keyIngredient: "Argan Oil from Morocco"
    },
    {
      id: 2,
      title: "Frizz Control",
      subtitle: "Smooth in Any Weather",
      description: "Experience up to 95% reduction in frizz with our advanced formula that smooths the hair cuticle and creates a protective barrier against humidity. Our blend of natural oils works to neutralize static electricity and seal the hair shaft, resulting in silky, manageable strands that stay smooth even in challenging weather conditions.",
      detailedDescription: "Frizz occurs when the hair cuticle is raised, allowing moisture to enter and exit rapidly. Our formula contains oils with the perfect molecular weight to smooth and seal the cuticle, creating a barrier that prevents humidity from penetrating while maintaining your hair's natural movement and volume.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Wind",
      stat: "95%",
      statLabel: "Frizz Reduction",
      features: [
        "Humidity-resistant formula",
        "Smooths hair cuticle",
        "Reduces static electricity",
        "Maintains natural volume"
      ],
      keyIngredient: "Jojoba Oil from Arizona"
    },
    {
      id: 3,
      title: "Natural Shine",
      subtitle: "Radiant Without the Weight",
      description: "Achieve salon-quality shine with 100% natural ingredients that enhance your hair's inherent luster. Our lightweight formula reflects light beautifully without creating greasy buildup or weighing down your strands. The result is hair that looks healthy, feels soft, and moves naturally with every step.",
      detailedDescription: "True shine comes from healthy, well-moisturized hair with a smooth cuticle surface. Our blend of camellia and argan oils creates a natural sheen by filling in microscopic gaps in the cuticle, allowing light to reflect evenly across each strand. This creates depth and dimension that synthetic products simply can't replicate.",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Sparkles",
      stat: "100%",
      statLabel: "Natural Ingredients",
      features: [
        "Lightweight formula",
        "No greasy residue",
        "Enhances natural texture",
        "Long-lasting shine"
      ],
      keyIngredient: "Camellia Oil from China"
    },
    {
      id: 4,
      title: "Scalp Health",
      subtitle: "Nourish from the Root",
      description: "Healthy hair starts at the scalp. Our formula includes ingredients specifically chosen for their ability to nourish the scalp, balance oil production, and create an optimal environment for hair growth. Regular use can help reduce dryness, irritation, and flakiness while promoting stronger, healthier hair from root to tip.",
      detailedDescription: "A healthy scalp is the foundation of beautiful hair. Our blend contains anti-inflammatory and antimicrobial properties that soothe the scalp while providing essential nutrients. The lightweight formula absorbs quickly without clogging pores, making it suitable for daily use even on sensitive scalps.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "Leaf",
      stat: "4x",
      statLabel: "Stronger Hair",
      features: [
        "Soothes dry scalp",
        "Balances oil production",
        "Promotes hair growth",
        "Reduces irritation"
      ],
      keyIngredient: "Rosemary Oil from Mediterranean"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, benefits.length]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentBenefit = benefits[activeIndex];

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-secondary text-sm font-medium mb-3 tracking-wider uppercase">
            Transform Your Hair
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground mb-4">
            The Science of Beautiful Hair
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of premium natural ingredients that work in harmony with your hair's biology. 
            Discover how each benefit transforms your hair care routine into a luxurious ritual.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" ref={carouselRef}>
          {/* Main Carousel Slide */}
          <div className="relative rounded-organic overflow-hidden luxury-shadow bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
              {/* Image Side */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0">
                  <Image
                    src={currentBenefit?.image}
                    alt={currentBenefit?.title}
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Stat Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-organic p-5 text-center min-w-[120px] luxury-shadow">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {currentBenefit?.stat}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {currentBenefit?.statLabel}
                    </div>
                  </div>

                  {/* Key Ingredient Badge */}
                  <div className="absolute bottom-6 left-6 bg-secondary/20 backdrop-blur-sm rounded-organic px-4 py-2">
                    <p className="text-xs text-white/90 font-medium mb-1">Key Ingredient</p>
                    <p className="text-sm text-white font-semibold">{currentBenefit?.keyIngredient}</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="relative order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-card to-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={currentBenefit?.icon} size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl lg:text-4xl font-semibold text-foreground mb-1">
                      {currentBenefit?.title}
                    </h3>
                    <p className="text-secondary text-sm font-medium">
                      {currentBenefit?.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {currentBenefit?.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {currentBenefit?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 w-full lg:w-auto"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => navigate('/signature-collection-premium-product-showcase')}
                >
                  Explore Products
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleSlideChange((activeIndex - 1 + benefits.length) % benefits.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 z-10 hover-lift"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          <button
            onClick={() => handleSlideChange((activeIndex + 1) % benefits.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 z-10 hover-lift"
            aria-label="Next slide"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {benefits?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-secondary w-8' 
                    : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {activeIndex + 1} / {benefits.length}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-golden-gradient hover:opacity-90 text-black font-semibold px-8 py-4"
            iconName="ShoppingBag"
            iconPosition="left"
            onClick={() => navigate('/signature-collection-premium-product-showcase')}
          >
            Shop Signature Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HairGallery;

