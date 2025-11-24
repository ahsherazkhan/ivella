import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: 1,
      title: "Transform Your Routine Into Ritual",
      subtitle: "Experience the perfect blend of jojoba, rosemary, and castor oils",
      description: "Crafted to strengthen roots, boost shine, and deeply hydrate.",
      primaryCta: "Shop Triple Nourish",
      secondaryCta: "Discover the ingredients",
      // backgroundImage: "https://images.unsplash.com/photo-1723565358502-eca503eef1c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // backgroundImage: "https://images.unsplash.com/photo-1722029105103-c5041db883b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // backgroundImage: "https://images.unsplash.com/photo-1593129747951-db31f82963da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      // backgroundImage: "https://images.unsplash.com/photo-1710587385407-8305a4515ca1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // backgroundImage: "https://images.unsplash.com/photo-1712481846921-d5df6dc4abfd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // backgroundImage: "https://images.unsplash.com/photo-1638640983932-dea21424691d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // backgroundImage: "/assets/1.jpg",
      backgroundVideo: "/assets/ivella simple video.mp4"
    },
    // {
    //   id: 2,
    //   title: "Nature's Luxury, Perfected",
    //   subtitle: "Premium botanicals for exceptional results",
    //   description: "Each drop contains the essence of carefully sourced ingredients from around the world, creating a sensory experience that elevates your daily hair care into a moment of pure indulgence.",
    //   primaryCta: "Start Hair Assessment",
    //   secondaryCta: "Explore Ingredients",
    //   backgroundImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    //   videoUrl: "https://player.vimeo.com/video/example2"
    // }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const navigateToProducts = () => {
    navigate('/signature-collection-premium-product-showcase');
  };

  const currentHero = heroSlides?.[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {currentHero?.backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={currentHero.backgroundVideo} type="video/mp4" />
          </video>
        ) : currentHero?.backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${currentHero.backgroundImage})` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        {/* Floating Oil Drops Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)]?.map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full opacity-60 liquid-animation"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-25">
          {/* Text Content */}
          <div className="text-center fade-in-up max-w-4xl">
            <div className="mb-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                {currentHero?.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
                {currentHero?.subtitle}
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                {currentHero?.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-golden-gradient hover:opacity-90 text-black font-semibold px-8 py-4"
                iconName="Sparkles"
                iconPosition="left"
                onClick={navigateToProducts}
              >
                {currentHero?.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => navigate('/ingredient-library-transparency-education')}
              >
                {currentHero?.secondaryCta}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/70">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} />
                <span className="text-sm">Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Leaf" size={20} />
                <span className="text-sm">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} />
                <span className="text-sm">Dermatologist Tested</span>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          {/* <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-organic overflow-hidden luxury-shadow hover-lift">
                <img
                  src="/assets/1.jpg"
                  alt="IVELLA Hair Oil Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-organic p-4 luxury-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-golden-gradient rounded-full flex items-center justify-center">
                    <Icon name="Star" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">4.9/5 Rating</p>
                    <p className="text-sm text-muted-foreground">447 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {heroSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-secondary scale-125' :'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-px h-12 bg-white/30 relative">
            <div className="absolute top-0 w-px h-6 bg-secondary animate-pulse" />
          </div>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;