import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const IngredientStory = ({ ingredients }) => {
  const [expandedIngredient, setExpandedIngredient] = useState(null);

  const toggleIngredient = (index) => {
    setExpandedIngredient(expandedIngredient === index ? null : index);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            The Story Behind Every Drop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each ingredient is carefully sourced from trusted partners around the world, bringing you the finest botanical treasures nature has to offer.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="space-y-6">
          {ingredients?.map((ingredient, index) => (
            <div
              key={index}
              className="bg-card rounded-organic overflow-hidden luxury-shadow transition-all duration-300 hover:shadow-lg"
            >
              {/* Ingredient Header */}
              <button
                onClick={() => toggleIngredient(index)}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={ingredient?.image}
                        alt={ingredient?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                        {ingredient?.name}
                      </h3>
                      <p className="text-muted-foreground">{ingredient?.origin}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                          {ingredient?.concentration}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {ingredient?.primaryBenefit}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Icon
                    name={expandedIngredient === index ? "ChevronUp" : "ChevronDown"}
                    size={24}
                    className="text-muted-foreground"
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedIngredient === index && (
                <div className="px-6 pb-6 space-y-6 border-t border-border">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
                    {/* Sourcing Story */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground flex items-center space-x-2">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span>Sourcing Story</span>
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {ingredient?.sourcingStory}
                      </p>
                      
                      {/* Sustainability Badge */}
                      {ingredient?.sustainability && (
                        <div className="bg-success/10 text-success px-3 py-2 rounded-lg flex items-center space-x-2">
                          <Icon name="Leaf" size={16} />
                          <span className="text-sm font-medium">{ingredient?.sustainability}</span>
                        </div>
                      )}
                    </div>

                    {/* Benefits & Science */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground flex items-center space-x-2">
                        <Icon name="Zap" size={16} className="text-secondary" />
                        <span>Benefits & Science</span>
                      </h4>
                      <div className="space-y-3">
                        {ingredient?.benefits?.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Scientific Backing */}
                      {ingredient?.research && (
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon name="BookOpen" size={16} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">Research Backed</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{ingredient?.research}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Harvesting Process */}
                  {ingredient?.harvestingProcess && (
                    <div className="bg-accent/10 rounded-lg p-6">
                      <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="Scissors" size={16} className="text-accent-foreground" />
                        <span>Harvesting Process</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {ingredient?.harvestingProcess?.map((step, stepIndex) => (
                          <div key={stepIndex} className="text-center">
                            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                              {stepIndex + 1}
                            </div>
                            <p className="text-sm text-muted-foreground">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quality Certifications */}
                  {ingredient?.certifications && (
                    <div className="flex flex-wrap gap-3">
                      {ingredient?.certifications?.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1"
                        >
                          <Icon name="Award" size={14} />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Transparency Commitment */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-organic p-8 text-center">
          <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Our Transparency Commitment
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We believe you have the right to know exactly what goes into your hair care products. Every ingredient is traceable, every claim is backed by science, and every bottle represents our commitment to your hair's health.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-foreground">Third-party tested</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-foreground">Ethically sourced</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-foreground">Sustainably harvested</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-foreground">Purity guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientStory;