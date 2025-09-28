import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SourcingStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const sourcingStories = [
    {
      id: 1,
      title: "Argan Oil from Morocco",
      location: "Essaouira, Morocco",
      partner: "Women\'s Argan Cooperative",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      story: `Deep in the heart of Morocco's Argan forests, we partner with a women's cooperative that has been perfecting the art of argan oil extraction for generations. These skilled artisans hand-crack each argan nut, preserving the oil's precious nutrients and ensuring the highest quality.\n\nOur partnership directly supports 150 women and their families, providing fair wages and sustainable employment. The cooperative also runs educational programs for local children and environmental conservation initiatives.`,
      impact: {
        womenEmployed: 150,
        familiesSupported: 600,
        treesProtected: 2500,
        yearEstablished: 2018
      },
      certifications: ["Fair Trade", "Organic", "Women Empowerment"]
    },
    {
      id: 2,
      title: "Rosehip Oil from Chile",
      location: "Patagonia, Chile",
      partner: "Patagonian Family Farms",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      story: `In the pristine wilderness of Patagonia, family-owned farms have been cultivating rosehips for over 50 years. The harsh climate and pure mountain air create the perfect conditions for rosehips with exceptional vitamin C content and antioxidant properties.\n\nWe work directly with three family farms, ensuring they receive premium prices for their harvest. Our long-term contracts provide stability and allow these families to invest in sustainable farming practices and organic certification.`,
      impact: {
        womenEmployed: 45,
        familiesSupported: 180,
        treesProtected: 1200,
        yearEstablished: 2019
      },
      certifications: ["Organic", "Sustainable Farming", "Direct Trade"]
    },
    {
      id: 3,
      title: "Jojoba Oil from Australia",
      location: "Queensland, Australia",
      partner: "Indigenous Community Partnership",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      story: `Our jojoba oil comes from a pioneering partnership with an Indigenous Australian community that has been stewarding this land for thousands of years. Their traditional knowledge combined with modern sustainable farming creates jojoba oil of unparalleled purity.\n\nThis partnership not only provides economic opportunities but also supports cultural preservation and land conservation efforts. A portion of every purchase goes directly to community development programs.`,
      impact: {
        womenEmployed: 80,
        familiesSupported: 320,
        treesProtected: 5000,
        yearEstablished: 2020
      },
      certifications: ["Indigenous Partnership", "Organic", "Carbon Neutral"]
    }
  ];

  const currentStory = sourcingStories?.[activeStory];

  return (
    <div className="bg-card rounded-organic border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          Sourcing Stories
        </h3>
        <p className="text-muted-foreground">
          Meet the communities behind our ingredients
        </p>
      </div>
      {/* Story Navigation */}
      <div className="flex overflow-x-auto border-b border-border">
        {sourcingStories?.map((story, index) => (
          <button
            key={story?.id}
            onClick={() => setActiveStory(index)}
            className={`flex-shrink-0 px-6 py-4 text-left transition-colors duration-200 ${
              activeStory === index
                ? 'bg-secondary/10 border-b-2 border-secondary text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <div className="font-medium text-sm">{story?.title}</div>
            <div className="text-xs mt-1">{story?.location}</div>
          </button>
        ))}
      </div>
      {/* Story Content */}
      <div className="p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Story Image and Basic Info */}
          <div>
            <div className="relative overflow-hidden rounded-organic mb-6">
              <Image
                src={currentStory?.image}
                alt={currentStory?.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-sm p-3 text-white">
                  <div className="font-medium">{currentStory?.partner}</div>
                  <div className="text-sm opacity-90">{currentStory?.location}</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {currentStory?.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-success/10 text-success px-3 py-2 rounded-full">
                    <Icon name="Award" size={16} />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Details */}
          <div>
            <div className="mb-6">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                Our Partnership Story
              </h4>
              <div className="prose prose-sm max-w-none">
                {currentStory?.story?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-4">Community Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {currentStory?.impact?.womenEmployed}
                  </div>
                  <div className="text-sm text-muted-foreground">Women Employed</div>
                </div>
                <div className="bg-muted rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {currentStory?.impact?.familiesSupported}
                  </div>
                  <div className="text-sm text-muted-foreground">Families Supported</div>
                </div>
                <div className="bg-muted rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {currentStory?.impact?.treesProtected?.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Trees Protected</div>
                </div>
                <div className="bg-muted rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {currentStory?.impact?.yearEstablished}
                  </div>
                  <div className="text-sm text-muted-foreground">Partnership Since</div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              fullWidth
            >
              Learn More About This Partnership
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingStories;