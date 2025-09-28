import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const values = [
    {
      icon: "Leaf",
      title: "Sustainability First",
      description: "Every ingredient is ethically sourced through fair trade partnerships with women\'s cooperatives worldwide.",
      details: [
        "100% recyclable packaging",
        "Carbon-neutral shipping",
        "Zero-waste production process",
        "Renewable energy facilities"
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: "Eye",
      title: "Radical Transparency",
      description: "Complete ingredient traceability from source to bottle, with third-party testing for purity and potency.",
      details: [
        "Full ingredient disclosure",
        "Source farm documentation",
        "Third-party lab testing",
        "Supply chain visibility"
      ],
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: "Heart",
      title: "Women\'s Empowerment",
      description: "Supporting women entrepreneurs and cooperatives globally through fair wages and long-term partnerships.",
      details: [
        "Fair trade partnerships",
        "Women\'s education programs",
        "Microfinance initiatives",
        "Leadership development"
      ],
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: "Award",
      title: "Uncompromising Quality",
      description: "Small-batch production ensures every bottle meets our exacting standards for efficacy and luxury.",
      details: [
        "Small-batch crafting",
        "Quality control testing",
        "Premium ingredient selection",
        "Artisanal production methods"
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
            Principles That Guide Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These core values shape every decision we make, from ingredient sourcing to customer relationships, ensuring Ivella Luxe remains true to its mission.
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