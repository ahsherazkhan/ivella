import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RitualMoments = () => {
  const [activeRitual, setActiveRitual] = useState(0);

  const ritualMoments = [
    {
      id: 1,
      title: "Morning Awakening",
      subtitle: "Start your day with intention",
      time: "5-10 minutes",
      description: `Begin each morning by connecting with yourself through the ritual of hair care. The gentle warming of oil between your palms, the mindful application from root to tip, and the moment of gratitude for your natural beauty.\n\nThis isn't just hair care - it's a daily practice of self-love that sets the tone for confidence and grace throughout your day.`,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Warm 3-4 drops between palms",
        "Inhale the natural aromatics deeply",
        "Apply with gentle, mindful strokes",
        "Set positive intentions for the day"
      ],
      benefits: ["Instant hydration", "Frizz protection", "Natural shine", "Mindful start"],
      mood: "Energizing & Uplifting",
      products: ["Signature Morning Blend", "Energizing Citrus Oil"]
    },
    {
      id: 2,
      title: "Evening Restoration",
      subtitle: "Unwind and restore",
      time: "15-20 minutes",
      description: `Transform your evening routine into a sacred ritual of restoration. As you massage nourishing oils into your scalp and hair, feel the stress of the day melt away.\n\nThis is your time to reconnect with yourself, to nurture not just your hair but your spirit. Let the therapeutic scents and textures guide you into a state of deep relaxation and self-care.`,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Create a calming atmosphere",
        "Warm oil to body temperature",
        "Massage scalp in circular motions",
        "Apply through lengths mindfully",
        "Practice gratitude meditation"
      ],
      benefits: ["Deep nourishment", "Stress relief", "Improved sleep", "Scalp health"],
      mood: "Calming & Restorative",
      products: ["Nighttime Recovery Oil", "Lavender Scalp Serum"]
    },
    {
      id: 3,
      title: "Weekend Indulgence",
      subtitle: "Luxurious self-care ritual",
      time: "45-60 minutes",
      description: `Dedicate time to the ultimate hair wellness experience. This extended ritual combines multiple premium oils, gentle heat, and mindful massage techniques for transformative results.\n\nCreate your personal spa sanctuary at home. Light candles, play soothing music, and immerse yourself in this luxurious practice that nourishes both hair and soul.`,
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Prepare your sacred space",
        "Layer multiple oil treatments",
        "Use warm towel compression",
        "Extended scalp massage ritual",
        "Gentle cleansing and styling"
      ],
      benefits: ["Maximum hydration", "Intensive repair", "Complete relaxation", "Visible transformation"],
      mood: "Luxurious & Transformative",
      products: ["Intensive Treatment Mask", "Premium Oil Collection", "Silk Hair Wrap"]
    },
    {
      id: 4,
      title: "Travel Companion",
      subtitle: "Beauty rituals on-the-go",
      time: "2-3 minutes",
      description: `Maintain your hair wellness routine wherever life takes you. Our travel-sized essentials ensure that distance never compromises your commitment to beautiful, healthy hair.\n\nWhether you're in a hotel room or airplane bathroom, these quick ritual moments help you stay connected to your self-care practice and maintain your hair's health and beauty.`,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Apply travel-size oil to palms",
        "Smooth over hair surface",
        "Focus on ends and flyaways",
        "Take a moment for gratitude"
      ],
      benefits: ["Instant smoothing", "Frizz control", "UV protection", "Confidence boost"],
      mood: "Convenient & Confident",
      products: ["Travel Essentials Kit", "Mini Oil Collection", "Portable Mist"]
    }
  ];

  const currentRitual = ritualMoments?.[activeRitual];

  return (
    <section className="py-20 lg:py-25 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Mindful Beauty Practices
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Ritual Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how to transform your daily hair care into meaningful rituals of self-love and mindfulness. 
            Each moment becomes an opportunity to nurture both your hair and your well-being.
          </p>
        </div>

        {/* Ritual Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ritualMoments?.map((ritual, index) => (
            <button
              key={ritual?.id}
              onClick={() => setActiveRitual(index)}
              className={`flex flex-col items-center p-4 rounded-organic transition-all duration-300 min-w-[120px] ${
                index === activeRitual
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-card text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
              }`}
            >
              <Icon 
                name={index === 0 ? 'Sun' : index === 1 ? 'Moon' : index === 2 ? 'Sparkles' : 'Plane'} 
                size={24} 
                className="mb-2" 
              />
              <span className="text-sm font-medium text-center">{ritual?.title}</span>
              <span className="text-xs opacity-80 mt-1">{ritual?.time}</span>
            </button>
          ))}
        </div>

        {/* Main Ritual Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Ritual Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-organic overflow-hidden luxury-shadow">
              <img
                src={currentRitual?.image}
                alt={`${currentRitual?.title} ritual moment`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-primary">{currentRitual?.title}</h4>
                  <span className="text-sm text-secondary font-medium">{currentRitual?.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentRitual?.mood}</p>
              </div>
            </div>

            {/* Ambient Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Heart" size={28} className="text-secondary" />
            </div>
          </div>

          {/* Ritual Details */}
          <div>
            <div className="mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-2">
                {currentRitual?.title}
              </h3>
              <p className="text-xl text-secondary font-medium mb-6">
                {currentRitual?.subtitle}
              </p>

              <div className="prose prose-lg max-w-none">
                {currentRitual?.description?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Ritual Steps */}
            <div className="mb-8">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="List" size={20} />
                Ritual Steps
              </h4>
              <div className="space-y-3">
                {currentRitual?.steps?.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 text-secondary rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
                Benefits
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentRitual?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-card rounded-lg">
                    <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products */}
            <div className="mb-8">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="Package" size={20} />
                Recommended Products
              </h4>
              <div className="space-y-2">
                {currentRitual?.products?.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Droplets" size={16} className="text-secondary" />
                    <span className="text-foreground font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-golden-gradient hover:opacity-90"
                iconName="Play"
                iconPosition="left"
              >
                Watch Ritual Guide
              </Button>
              <Button
                variant="outline"
                iconName="ShoppingBag"
                iconPosition="left"
              >
                Shop Ritual Products
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-organic p-12">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            Ready to Begin Your Hair Wellness Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your daily routine into meaningful rituals of self-care. 
            Discover which products and practices are perfect for your unique hair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-golden-gradient hover:opacity-90"
              iconName="Sparkles"
              iconPosition="left"
            >
              Take Hair Assessment Quiz
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
            >
              Download Ritual Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualMoments;