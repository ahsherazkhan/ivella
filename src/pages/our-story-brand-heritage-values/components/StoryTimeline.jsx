import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StoryTimeline = () => {
  const timelineEvents = [
    {
      year: "The Beginning",
      title: "The Quiet Frustration",
      description: `After 10 years of working behind the scenes of global health brands as a pharmaceutical formulator, the founder found himself facing something unexpected: stubborn hair thinning, dull skin texture, and overall loss of vitality. He understood ingredients, but he also understood something bigger: true beauty doesn't come from chemicals alone—it comes from purity, balance, and ritual.`,
      image: "https://images.unsplash.com/photo-1544967882-6abaa7b2aa9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Lightbulb"
    },
    {
      year: "The Research",
      title: "Years of Study",
      description: `Instead of choosing a quick fix, he spent years studying plant actives, clinical extraction methods, and the ancient rituals that helped people preserve their beauty for centuries. He blended this with his pharmaceutical precision to create something that didn't exist yet: a beauty brand that feels like luxury, performs like science, and works like nature intended.`,
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Search"
    },
    {
      year: "The Creation",
      title: "Small Batches. Hand-Selected. Precise.",
      description: `The journey began late at night in a small lab, long before Ivella had a name. After years of pharmaceutical work, the founder saw up close how many products were diluted, rushed, or built to impress—not to heal. So he began formulating for himself. Small batches. Hand-selected botanicals. Precise concentration. No shortcuts.`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Beaker"
    },
    {
      year: "The Realization",
      title: "What Changed?",
      description: `When people around him began asking, "What changed? Your hair looks fuller—your skin looks healthier—your glow is different…" he realized he had created something rare. Ivella was never meant to be mass-produced. It was meant to be crafted.`,
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Users"
    },
    {
      year: "The Vision",
      title: "Three Pillars",
      description: `That vision became Ivella—a modern beauty house built on three pillars: Purity. Performance. Ritual. Every formulation is designed to feel intentional, elegant, and deeply sensorial—inviting people not just to "use a product," but to experience a moment of care they didn't know they needed.`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "TrendingUp"
    },
    {
      year: "Today",
      title: "The Promise",
      description: `Ivella isn't just a product—it's a promise. A promise that we will always honor your hair, respect the earth, and create with purpose. Because when you choose Ivella, you're not just taking care of your hair. You're choosing to nourish yourself naturally. No chemicals. No shortcuts. Just nature's goodness, bottled with care.`,
      image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Star"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            Our Journey
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
            The Refined, Ritual-Driven Beauty House
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from pharmaceutical expertise and a deep understanding that true beauty comes from purity, balance, and ritual. Discover how Ivella blends traditional botanical wisdom with modern research to create effective, nature-powered hair solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-accent to-secondary hidden lg:block"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents?.map((event, index) => (
              <div key={event?.year} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center luxury-shadow z-10 hidden lg:flex">
                  <Icon name={event?.icon} size={24} color="white" />
                </div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-card p-8 rounded-organic luxury-shadow hover-lift">
                    <div className="flex items-center space-x-4 mb-4 lg:hidden">
                      <div className="w-12 h-12 bg-golden-gradient rounded-full flex items-center justify-center">
                        <Icon name={event?.icon} size={20} color="white" />
                      </div>
                      <div className="text-3xl font-heading font-semibold text-secondary">
                        {event?.year}
                      </div>
                    </div>
                    
                    <div className="hidden lg:block text-3xl font-heading font-semibold text-secondary mb-4">
                      {event?.year}
                    </div>
                    
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                      {event?.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event?.description}
                    </p>
                    
                    <div className="rounded-organic overflow-hidden">
                      <Image
                        src={event?.image}
                        alt={`${event?.title} - ${event?.year}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;