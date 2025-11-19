import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CraftsmanshipSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Ingredient Selection",
      description: "Each batch begins with hand-selected ingredients that meet our exacting standards for purity, potency, and ethical sourcing.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Search"
    },
    {
      step: "02", 
      title: "Cold Extraction",
      description: "Our proprietary cold-extraction process preserves the delicate molecular structure of each ingredient, ensuring maximum efficacy.",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Droplets"
    },
    {
      step: "03",
      title: "Artisanal Blending",
      description: "Master formulators blend each ingredient in precise ratios, creating synergistic combinations that amplify natural benefits.",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Beaker"
    },
    {
      step: "04",
      title: "Quality Testing",
      description: "Every batch undergoes rigorous testing for purity, potency, and safety before receiving our seal of approval.",
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "CheckCircle"
    }
  ];

  const qualityMetrics = [
    {
      metric: "99.8%",
      label: "Purity Rating",
      description: "Third-party verified ingredient purity"
    },
    {
      metric: "24hrs",
      label: "Fresh Processing",
      description: "From harvest to extraction"
    },
    {
      metric: "100%",
      label: "Batch Tested",
      description: "Every single batch quality assured"
    },
    {
      metric: "0",
      label: "Synthetic Additives",
      description: "Pure, natural formulations only"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            Our Craftsmanship
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Artistry in Every Bottle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our small-batch production process combines traditional techniques with modern precision, ensuring each bottle delivers the luxury experience you deserve.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {processSteps?.map((step, index) => (
              <div key={step?.step} className="group">
                <div className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={step?.image}
                      alt={step?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Step Number */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center luxury-shadow">
                      <span className="text-white font-heading font-semibold text-lg">
                        {step?.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name={step?.icon} size={20} color="white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                      {step?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div>
              <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
                Behind the Scenes
              </p>
              <h3 className="text-3xl font-heading font-semibold text-primary mb-6">
                Where Magic Happens
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our San Francisco laboratory is where science meets artistry. Here, our team of master formulators and quality specialists work in harmony to create products that honor both tradition and innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every surface is temperature-controlled, every tool is precision-calibrated, and every process is documented to ensure consistency across batches while maintaining the artisanal touch that makes each bottle special.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Thermometer" size={20} className="text-secondary" />
                <span className="text-foreground">Temperature-controlled environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={20} className="text-secondary" />
                <span className="text-foreground">FDA-compliant facility</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={20} className="text-secondary" />
                <span className="text-foreground">Expert formulators on-site</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={20} className="text-secondary" />
                <span className="text-foreground">24/7 quality monitoring</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-organic overflow-hidden luxury-shadow">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IVELLA laboratory and production facility"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-organic luxury-shadow">
              <div className="text-center">
                <div className="text-3xl font-heading font-semibold text-secondary mb-1">
                  2,500
                </div>
                <div className="text-sm text-muted-foreground">
                  Bottles crafted monthly
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-card rounded-organic p-12 luxury-shadow">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-primary mb-4">
              Quality by the Numbers
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every metric we track, ensuring you receive nothing but the finest quality.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-heading font-semibold text-secondary mb-2">
                  {metric?.metric}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {metric?.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;