import React from 'react';
import Icon from '../../../components/AppIcon';
const Certifications = () => {
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
  return (
    <section className="py-16 bg-muted/10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">
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
      </div>
    </section>
  );
};

export default Certifications;