import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const CustomerTransformations = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedHairType, setSelectedHairType] = useState('straight');

  const transformations = [
    {
      id: 1,
      name: "Sarah Chen",
      age: 32,
      location: "San Francisco, CA",
      hairType: "curly",
      concern: "Frizz & Dryness",
      timeframe: "6 weeks",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1747398690600-ffe8ecda9df1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: `I've struggled with frizzy, unmanageable curls my entire life. After just 6 weeks with Ivella's Signature Oil, my hair has completely transformed.\n\nThe frizz is gone, my curls are defined and bouncy, and I finally feel confident wearing my natural texture. This isn't just a product - it's been life-changing for my self-esteem.`,
      productUsed: "Signature Argan Blend",
      routine: "Applied 3-4 drops to damp hair, focusing on mid-lengths and ends",
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      age: 28,
      location: "Miami, FL",
      hairType: "straight",
      concern: "Damage & Breakage",
      timeframe: "8 weeks",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: `Years of heat styling and chemical treatments left my hair brittle and breaking constantly. I was skeptical about hair oils, but Ivella proved me wrong.\n\nMy hair stylist couldn't believe the transformation. My hair is stronger, shinier, and grows faster than it has in years. I wish I had found this sooner!`,
      productUsed: "Restorative Blend",
      routine: "Used as overnight treatment twice weekly, plus daily leave-in protection",
    },
    {
      id: 3,
      name: "Aisha Johnson",
      age: 35,
      location: "Atlanta, GA",
      hairType: "coily",
      concern: "Dryness & Scalp Issues",
      timeframe: "4 weeks",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: `As someone with 4C hair, finding products that actually work is a constant struggle. Ivella's oil blend has been a game-changer for both my hair and scalp health.\n\nThe chronic dryness and irritation I dealt with for years is completely gone. My hair retains moisture like never before, and the growth I've seen is incredible.`,
      productUsed: "Intensive Nourishment Blend",
      routine: "Scalp massage 3x weekly, plus daily moisture sealing",
    },
    {
      id: 4,
      name: "Emma Thompson",
      age: 41,
      location: "Seattle, WA",
      hairType: "wavy",
      concern: "Aging & Thinning",
      timeframe: "12 weeks",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: `Menopause brought unexpected changes to my hair - thinning, dullness, and loss of volume. I was devastated and considering expensive treatments.\n\nIvella's approach to hair wellness changed everything. My hair feels thicker, looks healthier, and I've regained so much confidence. It's like turning back the clock on my hair.`,
      productUsed: "Vitality Restoration Blend",
      routine: "Daily scalp massage with oil, weekly intensive mask treatment",
    }
  ];

  const hairTypes = [
    { value: 'straight', label: 'Straight', icon: 'Minus' },
    { value: 'wavy', label: 'Wavy', icon: 'Waves' },
    { value: 'curly', label: 'Curly', icon: 'RotateCcw' },
    { value: 'coily', label: 'Coily', icon: 'Circle' }
  ];

  const filteredTransformations = selectedHairType === 'all' 
    ? transformations 
    : transformations?.filter(t => t?.hairType === selectedHairType);

  const currentTransformation = filteredTransformations?.[activeTestimonial] || transformations?.[0];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % filteredTransformations?.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? filteredTransformations?.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 lg:py-25 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Real Results, Real Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Customer Transformations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Ivella has transformed the hair and confidence of thousands of women. 
            These authentic stories showcase the power of premium natural ingredients.
          </p>
        </div>

        {/* Hair Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {hairTypes?.map((type) => (
            <button
              key={type?.value}
              onClick={() => {
                setSelectedHairType(type?.value);
                setActiveTestimonial(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                selectedHairType === type?.value
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
              }`}
            >
              <Icon name={type?.icon} size={16} />
              <span className="text-sm font-medium">{type?.label}</span>
            </button>
          ))}
        </div>

        {/* Main Transformation Display */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Before/After Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Before Image */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-organic overflow-hidden luxury-shadow">
                  <img
                    src={currentTransformation?.beforeImage}
                    alt={`${currentTransformation?.name} before transformation`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 left-3 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-organic overflow-hidden luxury-shadow">
                  <img
                    src={currentTransformation?.afterImage}
                    alt={`${currentTransformation?.name} after transformation`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  After {currentTransformation?.timeframe}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-card hover:bg-secondary/10 rounded-full flex items-center justify-center transition-colors duration-200 luxury-shadow"
                disabled={filteredTransformations?.length <= 1}
              >
                <Icon name="ChevronLeft" size={20} className="text-foreground" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-card hover:bg-secondary/10 rounded-full flex items-center justify-center transition-colors duration-200 luxury-shadow"
                disabled={filteredTransformations?.length <= 1}
              >
                <Icon name="ChevronRight" size={20} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div>
            {/* Customer Info */}
            <div className="mb-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(currentTransformation?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-secondary fill-current" />
                ))}
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                {currentTransformation?.name}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>{currentTransformation?.age} years old</span>
                <span>•</span>
                <span>{currentTransformation?.location}</span>
                <span>•</span>
                <span className="capitalize">{currentTransformation?.hairType} hair</span>
              </div>

              <div className="prose prose-lg max-w-none">
                {currentTransformation?.testimonial?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              {currentTransformation?.results?.map((result, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                  <Icon name="TrendingUp" size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{result}</span>
                </div>
              ))}
            </div> */}

            {/* Product & Routine Info */}
            <div className="bg-card rounded-organic mb-8">
              <h4 className="font-semibold text-primary mb-4">Treatment Details</h4>
              <div className="space-y-3">
                {/* <div>
                  <span className="text-sm font-medium text-muted-foreground">Product Used:</span>
                  <p className="text-foreground">{currentTransformation?.productUsed}</p>
                </div> */}
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Routine:</span>
                  <p className="text-foreground">{currentTransformation?.routine}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Main Concern:</span>
                  <p className="text-foreground">{currentTransformation?.concern}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-golden-gradient hover:opacity-90"
                iconName="ShoppingBag"
                iconPosition="left"
                onClick={() => navigate('/signature-collection-premium-product-showcase')}
              >
                Shop
              </Button>
              {/* <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Read More Stories
              </Button> */}
            </div>
          </div>
        </div>

        {/* Transformation Indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            {filteredTransformations?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'w-8 bg-secondary' : 'w-2 bg-border hover:bg-secondary/50'
                }`}
                aria-label={`View transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTransformations;