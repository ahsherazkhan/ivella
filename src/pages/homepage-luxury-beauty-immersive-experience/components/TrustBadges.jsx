import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  const certifications = [
    {
      id: 1,
      name: "Cruelty-Free Certified",
      description: "Never tested on animals",
      icon: "Heart",
      color: "#6B7280",
      organization: "Leaping Bunny"
    },
    {
      id: 2,
      name: "USDA Organic",
      description: "95%+ organic ingredients",
      icon: "Leaf",
      color: "#6B7280",
      organization: "USDA"
    },
    {
      id: 3,
      name: "Dermatologist Tested",
      description: "Clinically proven safe",
      icon: "Shield",
      color: "#6B7280",
      organization: "Clinical Labs"
    },
    {
      id: 4,
      name: "Sustainable Sourcing",
      description: "Ethically sourced ingredients",
      icon: "Globe",
      color: "#FEF3C7",
      organization: "Fair Trade"
    },
    {
      id: 5,
      name: "Clean Beauty",
      description: "No harmful chemicals",
      icon: "Sparkles",
      color: "#6B7280",
      organization: "Clean Beauty Council"
    },
    {
      id: 6,
      name: "Carbon Neutral",
      description: "Net-zero carbon footprint",
      icon: "TreePine",
      color: "#6B7280",
      organization: "Climate Neutral"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best Natural Hair Oil 2024",
      publication: "Allure Beauty Awards",
      year: "2024"
    },
    {
      id: 2,
      title: "Editor\'s Choice",
      publication: "Harper\'s Bazaar",
      year: "2024"
    },
    {
      id: 3,
      title: "Clean Beauty Innovation",
      publication: "Byrdie Eco Beauty Awards",
      year: "2023"
    }
  ];

  const stats = [
    {
      id: 1,
      number: "5K+",
      label: "Happy Customers",
      description: "Worldwide"
    },
    {
      id: 2,
      number: "4.9/5",
      label: "Average Rating",
      description: "From 447 reviews"
    },
    {
      id: 3,
      number: "98%",
      label: "Repurchase Rate",
      description: "Customer loyalty"
    },
    {
      id: 4,
      number: "30+",
      label: "Countries",
      description: "Global shipping"
    }
  ];

  return (
    <section className="py-16 bg-muted/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats?.map((stat) => (
            <div key={stat?.id} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat?.number}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat?.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {certifications?.map((cert) => (
            <div
              key={cert?.id}
              className="flex flex-col items-center text-center p-4 bg-card rounded-organic hover:shadow-subtle transition-all duration-200 hover-lift"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${cert?.color}20` }}
              >
                <Icon
                  name={cert?.icon}
                  size={28}
                  style={{ color: cert?.color }}
                />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {cert?.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">
                {cert?.description}
              </p>
              <span className="text-xs text-secondary font-medium">
                {cert?.organization}
              </span>
            </div>
          ))}
        </div> */}

        {/* Awards Section */}
        {/* <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-semibold text-primary mb-8">
            Award-Winning Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards?.map((award) => (
              <div
                key={award?.id}
                className="bg-card p-6 rounded-organic luxury-shadow hover-lift"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {award?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {award?.publication}
                </p>
                <span className="text-xs text-secondary font-medium">
                  {award?.year}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Trust Message */}
        {/* <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-organic p-8">
          <Icon name="Shield" size={48} className="text-secondary mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-primary mb-4">
            Your Trust is Our Foundation
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every certification, award, and positive review represents our unwavering commitment 
            to quality, transparency, and your hair's health. We believe luxury should never 
            compromise on safety or sustainability.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default TrustBadges;