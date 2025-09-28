import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ExpertEndorsements = ({ endorsements }) => {
  const [activeEndorsement, setActiveEndorsement] = useState(0);

  const expertCategories = [
    { id: 'stylists', name: 'Celebrity Stylists', icon: 'Scissors' },
    { id: 'dermatologists', name: 'Dermatologists', icon: 'Stethoscope' },
    { id: 'trichologists', name: 'Trichologists', icon: 'Microscope' },
    { id: 'influencers', name: 'Beauty Experts', icon: 'Star' }
  ];

  return (
    <div className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading hair care professionals and beauty experts recommend our products for their exceptional quality and proven results.
          </p>
        </div>

        {/* Expert Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {expertCategories?.map((category, index) => (
            <button
              key={category?.id}
              onClick={() => setActiveEndorsement(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                activeEndorsement === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span className="font-medium">{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Endorsement */}
        <div className="bg-card rounded-organic p-8 lg:p-12 mb-12 luxury-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Expert Photo & Info */}
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto lg:mx-0 mb-6">
                <Image
                  src={endorsements?.[activeEndorsement]?.photo}
                  alt={endorsements?.[activeEndorsement]?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                {endorsements?.[activeEndorsement]?.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {endorsements?.[activeEndorsement]?.title}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{endorsements?.[activeEndorsement]?.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Award" size={14} />
                  <span>{endorsements?.[activeEndorsement]?.experience}</span>
                </div>
              </div>
            </div>

            {/* Endorsement Content */}
            <div className="space-y-6">
              <div className="relative">
                <Icon name="Quote" size={32} className="text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="text-lg text-foreground leading-relaxed pl-8">
                  {endorsements?.[activeEndorsement]?.quote}
                </blockquote>
              </div>
              
              {/* Credentials */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Professional Credentials</h4>
                <div className="flex flex-wrap gap-2">
                  {endorsements?.[activeEndorsement]?.credentials?.map((credential, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notable Clients/Work */}
              {endorsements?.[activeEndorsement]?.notableWork && (
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Notable Work</h4>
                  <p className="text-muted-foreground text-sm">
                    {endorsements?.[activeEndorsement]?.notableWork}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* All Endorsements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {endorsements?.map((endorsement, index) => (
            <div
              key={index}
              className={`bg-card rounded-organic p-6 cursor-pointer transition-all duration-200 ${
                activeEndorsement === index
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={() => setActiveEndorsement(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={endorsement?.photo}
                    alt={endorsement?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{endorsement?.name}</h4>
                  <p className="text-sm text-muted-foreground">{endorsement?.title}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className="text-secondary fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground text-sm leading-relaxed">
                "{endorsement?.shortQuote}"
              </blockquote>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                  {endorsement?.category}
                </span>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Professional Recognition */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-organic p-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Professional Recognition
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our products have been featured in leading beauty publications and recommended by top professionals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Allure Magazine", award: "Best Hair Oil 2024" },
              { name: "Vogue Beauty", award: "Editor's Choice" },
              { name: "Harper's Bazaar", award: "Beauty Award Winner" },
              { name: "Elle Beauty", award: "Sustainable Beauty Award" }
            ]?.map((recognition, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Award" size={24} className="text-secondary" />
                </div>
                <h4 className="font-medium text-foreground text-sm">{recognition?.name}</h4>
                <p className="text-xs text-muted-foreground">{recognition?.award}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-card rounded-organic p-8 max-w-2xl mx-auto">
            <Icon name="Users" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Join the Professional Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover why leading hair care professionals choose Ivella Luxe for their clients and personal use.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <Icon name="Users" size={16} />
                <span>Professional Program</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors duration-200">
                <Icon name="BookOpen" size={16} />
                <span>View All Reviews</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertEndorsements;