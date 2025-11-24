import React from 'react';
import Icon from '../../../components/AppIcon';
const Certifications = () => {
  const certifications = [
      {
        id: 1,
        name: "Chemicals Free",
        description: "No harmful chemicals",
        icon: "Shield",
        color: "#6B7280",
        organization: "100% Natural"
      },
      {
        id: 2,
        name: "Organic",
        description: "Pure organic ingredients",
        icon: "Leaf",
        color: "#6B7280",
        organization: "Certified"
      },
      {
        id: 3,
        name: "100% Natural",
        description: "Nature's goodness only",
        icon: "Sparkles",
        color: "#6B7280",
        organization: "Pure"
      },
      {
        id: 4,
        name: "First Cold Pressed",
        description: "Preserves nutrients",
        icon: "Droplets",
        color: "#6B7280",
        organization: "Premium"
      },
      {
        id: 5,
        name: "Safe & Effective",
        description: "Suitable for all types",
        icon: "Heart",
        color: "#6B7280",
        organization: "Tested"
      }
  ];
  return (
    <section className="py-16 bg-muted/10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-16">
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