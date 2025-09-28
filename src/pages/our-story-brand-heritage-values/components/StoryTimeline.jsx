import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StoryTimeline = () => {
  const timelineEvents = [
    {
      year: "2017",
      title: "The Awakening",
      description: `Sarah's hair transformation journey began during a sabbatical in Morocco, where she discovered ancient Argan oil rituals passed down through generations of Berber women. The profound change in her hair's health and vitality sparked a deep curiosity about traditional beauty wisdom.`,
      image: "https://images.unsplash.com/photo-1544967882-6abaa7b2aa9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Lightbulb"
    },
    {
      year: "2018",
      title: "The Research",
      description: `Extensive travels across India, Peru, and Madagascar revealed a treasure trove of hair care secrets. Sarah collaborated with local women's cooperatives, learning about sustainable harvesting practices and the cultural significance of beauty rituals in different communities.`,
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Search"
    },
    {
      year: "2019",
      title: "The Foundation",
      description: `Ivella Luxe was born in a small laboratory in San Francisco, with the first batch of signature hair oil crafted using ethically sourced ingredients. The name 'Ivella' combines 'Ivy' (representing growth and resilience) with 'Bella' (beauty in Italian).`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Beaker"
    },
    {
      year: "2020",
      title: "The Community",
      description: `Despite global challenges, Ivella's community of conscious beauty enthusiasts grew organically through word-of-mouth. The brand's commitment to supporting women's cooperatives became more crucial than ever, providing stable income during uncertain times.`,
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Users"
    },
    {
      year: "2021",
      title: "The Expansion",
      description: `Launched the complete Signature Collection with five distinct formulations. Achieved B-Corp certification and established the Ivella Foundation, dedicating 2% of profits to women's education programs in ingredient-sourcing communities.`,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "TrendingUp"
    },
    {
      year: "2024",
      title: "The Future",
      description: `Today, Ivella Luxe serves over 50,000 women worldwide while maintaining our commitment to small-batch production and ethical sourcing. Our vision extends beyond beauty to creating a global network of empowered women supporting each other's success.`,
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
            The Story Behind Every Drop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a personal transformation to a global movement, discover how Ivella Luxe became a beacon of conscious luxury in the beauty industry.
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