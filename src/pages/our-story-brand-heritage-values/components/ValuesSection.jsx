import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const values = [
    {
      icon: "Leaf",
      title: "Purity & Quality",
      description: "We use only the finest natural and organic ingredients, free from harmful chemicals, to ensure your hair receives the nourishment it truly deserves.",
      details: [
        "100% Natural ingredients",
        "No chemicals or shortcuts",
        "First cold-pressed oils",
        "Pharmaceutical-grade compounding"
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: "Eye",
      title: "Transparency",
      description: "We believe in honest, clear communication about our ingredients, sourcing practices, and impact. Every ingredient is traceable, every claim is backed by science.",
      details: [
        "Full ingredient disclosure",
        "Honest sourcing practices",
        "Science-backed formulations",
        "Clear communication"
      ],
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: "Heart",
      title: "Care & Well-Being",
      description: "We craft our products with love, prioritizing your hair's health and your overall wellness. Every drop is crafted with intention: to hydrate, to strengthen, to soothe, to heal.",
      details: [
        "Crafted with intention",
        "Prioritizes hair health",
        "Holistic wellness approach",
        "Ritual-centered care"
      ],
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: "Award",
      title: "Innovation Rooted in Nature",
      description: "We blend traditional botanical wisdom with modern research to create effective, nature-powered hair solutions. Pharmaceutical precision meets natural beauty.",
      details: [
        "Traditional botanical wisdom",
        "Modern research integration",
        "Nature-powered solutions",
        "Scientific confidence"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            Our Values
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These core values shape every decision we make, from ingredient sourcing to formulation, ensuring Ivella remains true to its promise: to honor your hair, respect the earth, and create with purpose.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {values?.map((value, index) => (
            <div key={value?.title} className="group">
              <div className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={value?.image}
                    alt={value?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center luxury-shadow">
                    <Icon name={value?.icon} size={24} color="white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                    {value?.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {value?.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3">
                    {value?.details?.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 bg-card rounded-organic p-12 luxury-shadow">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-primary mb-4">
              Our Global Impact
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every purchase creates positive change in communities worldwide through our commitment to ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-semibold text-secondary mb-2">
                127
              </div>
              <div className="text-sm text-muted-foreground">
                Women's Cooperatives Supported
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-semibold text-secondary mb-2">
                $2.3M
              </div>
              <div className="text-sm text-muted-foreground">
                Fair Trade Premiums Paid
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-semibold text-secondary mb-2">
                15
              </div>
              <div className="text-sm text-muted-foreground">
                Countries Sourced From
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-semibold text-secondary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Carbon Neutral Operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;