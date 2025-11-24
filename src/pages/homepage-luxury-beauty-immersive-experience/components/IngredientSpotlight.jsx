import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const IngredientSpotlight = () => {
  const navigate = useNavigate();
  const [activeIngredient, setActiveIngredient] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  const ingredients = [
    {
      id: 1,
      name: "Rosemary Extract",
      scientificName: "Rosmarinus Officinalis",
      origin: "Mediterranean Region",
      benefits: ["Scalp Vitality", "Follicle Awakening", "Balanced Renewal", "Natural Stimulation"],
      description: `Known for centuries to revive the scalp, energize follicles, and promote balanced renewal. Its scent alone signals purity and clarity.\n\nRosemary extract works as the awakener in our Triple Nourish System, bringing natural stimulation to dormant hair follicles while maintaining scalp health.`,
      image: "https://images.unsplash.com/photo-1747398690600-ffe8ecda9df1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#A7F3D0",
      sustainability: "Organic Certified",
      concentration: "Premium Extract"
    },
    {
      id: 2,
      name: "Jojoba Oil",
      scientificName: "Simmondsia Chinensis",
      origin: "Sonoran Desert",
      benefits: ["Natural Harmonizer", "Sebum Balance", "Lightweight Feel", "Deep Moisture"],
      description: `Closest to the skin's natural sebum. Brings equilibrium, softness, and a natural glow without heaviness.\n\nJojoba oil serves as the natural harmonizer in our formula, creating perfect balance between moisture and texture while leaving hair with a luxurious, non-greasy finish.`,
      image: "https://images.unsplash.com/photo-1747398690600-ffe8ecda9df1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#FEF3C7",
      sustainability: "First Cold Pressed",
      concentration: "Premium Grade"
    },
    {
      id: 3,
      name: "Castor Oil",
      scientificName: "Ricinus Communis",
      origin: "Ethically Sourced",
      benefits: ["Strength Builder", "Root Fortification", "Growth Support", "Deep Nourishment"],
      description: `Rich, potent, deeply fortifying. Encourages stronger roots, thicker strands, and nourished skin.\n\nCastor oil acts as the strength builder in our Triple Nourish System, providing deep fortification to hair roots while supporting healthy growth cycles from the inside out.`,
      image: "https://images.unsplash.com/photo-1747398690600-ffe8ecda9df1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#E0E7FF",
      sustainability: "100% Natural",
      concentration: "Pure Extract"
    },
    // {
    //   id: 2,
    //   name: "Rosehip Seed Oil",
    //   scientificName: "Rosa Canina",
    //   origin: "Chilean Andes",
    //   benefits: ["Anti-Aging", "Color Protection", "Scalp Health", "Natural Vitamins"],
    //   description: `Sourced from wild rosehip bushes in the pristine Chilean Andes, this precious oil is extracted using traditional methods passed down through generations.\n\nPacked with vitamins A and C, it helps maintain hair color vibrancy while nourishing the scalp and promoting healthy hair growth from root to tip.`,
    //   image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   color: "#FEF3C7",
    //   sustainability: "Wildcrafted",
    //   concentration: "12%"
    // },
    // {
    //   id: 3,
    //   name: "Jojoba Oil",
    //   scientificName: "Simmondsia Chinensis",
    //   origin: "Sonoran Desert, Arizona",
    //   benefits: ["Sebum Balance", "Lightweight Feel", "Non-Comedogenic", "Long-lasting"],
    //   description: `Harvested from drought-resistant jojoba shrubs in the American Southwest, this liquid wax closely mimics your hair's natural sebum.\n\nIts unique molecular structure allows for superior absorption without weighing hair down, making it perfect for all hair types while providing lasting nourishment and protection.`,
    //   image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   color: "#FEF3C7",
    //   sustainability: "Organic Certified",
    //   concentration: "18%"
    // },
    // {
    //   id: 4,
    //   name: "Camellia Oil",
    //   scientificName: "Camellia Oleifera",
    //   origin: "Hunan Province, China",
    //   benefits: ["Silk-like Texture", "Heat Protection", "Antioxidant Rich", "Lightweight"],
    //   description: `Cold-pressed from camellia seeds cultivated in ancient Chinese tea gardens, this oil has been treasured by Asian women for centuries as the secret to lustrous hair.\n\nWith its high oleic acid content and natural antioxidants, it creates an invisible protective barrier while imparting incredible shine and silky smoothness.`,
    //   image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   color: "#6B7280",
    //   sustainability: "Heritage Sourced",
    //   concentration: "10%"
    // }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIngredient((prev) => (prev + 1) % ingredients?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, ingredients?.length]);

  const handleIngredientChange = (index) => {
    setActiveIngredient(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentIngredient = ingredients?.[activeIngredient];

  return (
    <section className="py-20 lg:py-25 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Nature's Finest Ingredients
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Nature's Trio for Stronger, Healthier Hair
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            Our Triple Nourish Hair Oil delivers the combined power of castor for growth, rosemary for scalp vitality, and jojoba for moisture balance. Gentle, natural, and suitable for all hair and skin types.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Ingredient Details */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: currentIngredient?.color }}
                />
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  {currentIngredient?.origin}
                </span>
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-2">
                {currentIngredient?.name}
              </h3>
              
              <p className=" italic mb-6">
                {currentIngredient?.scientificName}
              </p>

              <div className="prose prose-lg max-w-none">
                {currentIngredient?.description?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {currentIngredient?.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                  <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Sustainability & Concentration */}
            {/* <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Leaf" size={20} className="text-secondary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{currentIngredient?.sustainability}</p>
                  <p className="text-xs ">Sustainability</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Droplets" size={20} className="text-secondary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{currentIngredient?.concentration}</p>
                  <p className="text-xs ">Concentration</p>
                </div>
              </div>
            </div> */}

            <Button
              variant="outline"
              iconName="ArrowRight"
              onClick={() => navigate('/ingredient-library-transparency-education')}
              iconPosition="right"
              className="hover-lift"
            >
              Learn More About Our Ingredients
            </Button>
          </div>

          {/* Visual Showcase */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image */}
            <div className="relative w-full aspect-square rounded-organic overflow-hidden luxury-shadow">
              <img
                src='/assets/3.jpg'
                alt={`${currentIngredient?.name} ingredient showcase`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"
                style={{ backgroundColor: `${currentIngredient?.color}20` }}
              />
              
              {/* Floating Info Card */}
              {/* <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary">{currentIngredient?.name}</p>
                    <p className="text-sm ">{currentIngredient?.origin}</p>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: currentIngredient?.color }}
                  />
                </div>
              </div> */}
            </div>

            {/* Ingredient Navigation */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-3 p-2 bg-card rounded-full luxury-shadow">
                {ingredients?.map((ingredient, index) => (
                  <button
                    key={ingredient?.id}
                    onClick={() => handleIngredientChange(index)}
                    className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center ${
                      index === activeIngredient
                        ? 'scale-110 shadow-lg'
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                    style={{ 
                      backgroundColor: index === activeIngredient 
                        ? ingredient?.color 
                        : `${ingredient?.color}40`
                    }}
                    aria-label={`View ${ingredient?.name}`}
                  >
                    <Icon 
                      name="Droplets" 
                      size={20} 
                      className={index === activeIngredient ? 'text-white' : 'text-foreground'}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            {ingredients?.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIngredient ? 'w-8 bg-secondary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSpotlight;