import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IngredientModal = ({ ingredient, isOpen, onClose }) => {
  if (!isOpen || !ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background rounded-organic max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            {ingredient?.name}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
          />
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image and Basic Info */}
            <div>
              <div className="relative overflow-hidden rounded-organic mb-6">
                <Image
                  src={ingredient?.image}
                  alt={ingredient?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {ingredient?.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Scientific Profile
                  </h3>
                  <p className="text-muted-foreground italic mb-2">
                    {ingredient?.scientificName}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {ingredient?.detailedDescription || ingredient?.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Origin & Sourcing</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span className="text-foreground">{ingredient?.origin}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {ingredient?.sourcingStory || `Sustainably sourced from ${ingredient?.origin} through partnerships with local communities and family farms.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="space-y-6">
              {/* Benefits */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Hair Benefits
                </h3>
                <div className="grid gap-3">
                  {ingredient?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-accent/50 rounded-sm">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {ingredient?.certifications && ingredient?.certifications?.length > 0 && (
                <div>
                  <h4 className="font-medium text-foreground mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {ingredient?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-success/10 text-success px-3 py-2 rounded-full">
                        <Icon name="Award" size={16} />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Purity & Testing */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Quality Assurance</h4>
                <div className="bg-muted rounded-sm p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Purity Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(10)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={`${
                              i < ingredient?.purityScore
                                ? 'text-secondary fill-current' :'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{ingredient?.purityScore}/10</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Third-party tested for purity, potency, and safety. All ingredients meet our strict quality standards.
                  </div>
                </div>
              </div>

              {/* Usage in Products */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Featured In</h4>
                <div className="space-y-2">
                  {ingredient?.featuredProducts?.map((product, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 border border-border rounded-sm">
                      <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Icon name="Droplets" size={16} className="text-secondary" />
                      </div>
                      <span className="text-foreground text-sm">{product}</span>
                    </div>
                  )) || (
                    <p className="text-sm text-muted-foreground">
                      This premium ingredient is featured across our signature collection.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              iconName="ShoppingBag"
              iconPosition="left"
              className="bg-golden-gradient hover:opacity-90"
            >
              Shop Products with {ingredient?.name}
            </Button>
            <Button
              variant="outline"
              iconName="BookOpen"
              iconPosition="left"
            >
              Learn More About Hair Care
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;