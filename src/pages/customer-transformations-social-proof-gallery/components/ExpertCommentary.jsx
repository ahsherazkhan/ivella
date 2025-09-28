import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExpertCommentary = ({ experts }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-organic p-8 luxury-shadow">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
          Expert Commentary
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional hairstylists and trichologists share their insights on the 
          transformations you see in our gallery.
        </p>
      </div>
      <div className="space-y-8">
        {experts?.map((expert) => (
          <div key={expert?.id} className="bg-background rounded-organic p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Expert Info */}
              <div className="lg:w-1/3">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={expert?.avatar}
                    alt={expert?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {expert?.name}
                    </h3>
                    <p className="text-muted-foreground">{expert?.title}</p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Award" size={16} className="text-secondary" />
                    <span className="text-sm text-foreground font-medium">
                      {expert?.experience} years experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">
                      {expert?.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">
                      {expert?.clientsServed}+ clients served
                    </span>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Specializations:</p>
                  <div className="flex flex-wrap gap-1">
                    {expert?.specializations?.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commentary Content */}
              <div className="lg:w-2/3">
                <div className="mb-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Professional Insights
                  </h4>
                  <blockquote className="text-foreground leading-relaxed italic border-l-4 border-secondary pl-4">
                    "{expert?.commentary}"
                  </blockquote>
                </div>

                {/* Key Points */}
                <div className="mb-6">
                  <h5 className="font-medium text-foreground mb-3">Key Observations:</h5>
                  <div className="space-y-2">
                    {expert?.keyPoints?.map((point, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Products */}
                <div className="mb-6">
                  <h5 className="font-medium text-foreground mb-3">
                    Recommended for Similar Results:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {expert?.recommendedProducts?.map((product, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-muted/50 rounded-lg p-3">
                        <Icon name="Sparkles" size={16} className="text-secondary" />
                        <span className="text-foreground text-sm font-medium">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Tips */}
                <div className="bg-primary/5 rounded-lg p-4 mb-4">
                  <h5 className="font-medium text-foreground mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="text-secondary mr-2" />
                    Pro Tip
                  </h5>
                  <p className="text-foreground text-sm leading-relaxed">
                    {expert?.proTip}
                  </p>
                </div>

                {/* Contact Expert */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="flex-1"
                  >
                    View Portfolio
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="flex-1 text-primary"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Expert Partnership CTA */}
      <div className="text-center mt-8 pt-8 border-t border-border">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
          Are You a Hair Professional?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Join our network of expert partners and share your professional insights 
          with the Ivella community.
        </p>
        <Button
          variant="default"
          className="bg-golden-gradient hover:opacity-90"
          iconName="UserPlus"
          iconPosition="left"
        >
          Become a Partner Expert
        </Button>
      </div>
    </div>
  );
};

export default ExpertCommentary;