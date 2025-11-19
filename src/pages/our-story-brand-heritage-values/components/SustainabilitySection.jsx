import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SustainabilitySection = () => {
  const sustainabilityPillars = [
    {
      icon: "Recycle",
      title: "Circular Packaging",
      description: "100% recyclable glass bottles and biodegradable labels made from agricultural waste.",
      metrics: [
        { label: "Plastic Reduction", value: "95%" },
        { label: "Recyclable Materials", value: "100%" }
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Leaf",
      title: "Carbon Neutral",
      description: "Offset 120% of our carbon footprint through verified reforestation and renewable energy projects.",
      metrics: [
        { label: "Carbon Offset", value: "120%" },
        { label: "Trees Planted", value: "15,000" }
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Droplets",
      title: "Water Conservation",
      description: "Closed-loop water systems and partnerships with water restoration projects in sourcing regions.",
      metrics: [
        { label: "Water Saved", value: "50,000L" },
        { label: "Efficiency Gain", value: "85%" }
      ],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const certifications = [
    {
      name: "B-Corp Certified",
      description: "Verified social and environmental performance",
      icon: "Award",
      year: "2021"
    },
    {
      name: "Carbon Neutral",
      description: "Climate impact verified by third parties",
      icon: "Leaf",
      year: "2020"
    },
    {
      name: "Fair Trade",
      description: "Ethical sourcing and fair wages guaranteed",
      icon: "Handshake",
      year: "2019"
    },
    {
      name: "Cruelty Free",
      description: "Never tested on animals, certified by Leaping Bunny",
      icon: "Heart",
      year: "2019"
    }
  ];

  const impactStories = [
    {
      title: "Reforestation in Madagascar",
      description: "Our partnership with local communities has resulted in 15,000 native trees planted, restoring 200 hectares of degraded forest land.",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      impact: "200 hectares restored"
    },
    {
      title: "Women\'s Education in Peru",
      description: "Through our foundation, we've funded literacy programs for 150 women in our Amazonian partner communities.",
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "150 women educated"
    },
    {
      title: "Clean Water Access in Morocco",
      description: "Solar-powered water purification systems installed in 5 villages, providing clean water access to 2,000 people.",
      image: "https://images.unsplash.com/photo-1544967882-6abaa7b2aa9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      impact: "2,000 people served"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            Sustainability
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Beauty That Gives Back
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to the planet and its people goes beyond creating exceptional products. Every purchase contributes to a more sustainable and equitable world.
          </p>
        </div>

        {/* Sustainability Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {sustainabilityPillars?.map((pillar, index) => (
            <div key={pillar?.title} className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pillar?.image}
                  alt={pillar?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center luxury-shadow">
                  <Icon name={pillar?.icon} size={24} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  {pillar?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {pillar?.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {pillar?.metrics?.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 bg-muted/50 rounded-organic">
                      <div className="text-2xl font-heading font-semibold text-secondary mb-1">
                        {metric?.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric?.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-muted/30 rounded-organic p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-primary mb-4">
              Verified Commitments
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our sustainability claims are backed by third-party certifications and regular audits to ensure transparency and accountability.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications?.map((cert, index) => (
              <div key={cert?.name} className="text-center">
                <div className="w-20 h-20 bg-golden-gradient rounded-full flex items-center justify-center mx-auto mb-4 luxury-shadow">
                  <Icon name={cert?.icon} size={32} color="white" />
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert?.description}
                </p>
                <div className="text-xs text-secondary font-medium">
                  Since {cert?.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stories */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-primary mb-4">
              Stories of Impact
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how your purchases create positive change in communities around the world through our sustainability initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {impactStories?.map((story, index) => (
              <div key={story?.title} className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story?.image}
                    alt={story?.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Impact Badge */}
                  <div className="absolute bottom-4 left-4 bg-golden-gradient px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">
                      {story?.impact}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    {story?.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {story?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-card rounded-organic p-12 luxury-shadow">
          <Icon name="Globe" size={48} className="text-secondary mx-auto mb-6" />
          <h3 className="text-3xl font-heading font-semibold text-primary mb-4">
            Join Our Mission
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every IVELLA purchase contributes to our sustainability fund, supporting environmental restoration and women's empowerment projects worldwide.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-heading font-semibold text-secondary mb-1">
                $2.3M
              </div>
              <div className="text-sm text-muted-foreground">
                Invested in Communities
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-semibold text-secondary mb-1">
                15,000
              </div>
              <div className="text-sm text-muted-foreground">
                Trees Planted
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-semibold text-secondary mb-1">
                399
              </div>
              <div className="text-sm text-muted-foreground">
                Women Supported
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-semibold text-secondary mb-1">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Carbon Neutral
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;