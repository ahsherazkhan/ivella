import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunitySpotlight = ({ spotlightCustomers }) => {
  return (
    <div className="bg-card rounded-organic p-8 luxury-shadow">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
          Community Spotlight
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet our amazing customers who've become brand advocates, sharing their Ivella journey 
          and inspiring others to embrace their natural beauty.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spotlightCustomers?.map((customer) => (
          <div key={customer?.id} className="bg-background rounded-organic p-6 hover-lift transition-all duration-300">
            {/* Customer Header */}
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={customer?.avatar}
                alt={customer?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {customer?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  @{customer?.socialHandle}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={16} className="text-secondary" />
                <span className="text-sm text-muted-foreground">
                  {customer?.followers}
                </span>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                <Icon name="Award" size={14} />
                <span>{customer?.achievement}</span>
              </div>
            </div>

            {/* Recent Post */}
            <div className="mb-4">
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <Image
                  src={customer?.recentPost?.image}
                  alt={`${customer?.name}'s recent post`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-foreground text-sm leading-relaxed line-clamp-3">
                {customer?.recentPost?.caption}
              </p>
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={14} />
                <span>{customer?.recentPost?.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={14} />
                <span>{customer?.recentPost?.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Share2" size={14} />
                <span>{customer?.recentPost?.shares}</span>
              </div>
            </div>

            {/* View Profile Button */}
            <Button
              variant="outline"
              size="sm"
              fullWidth
              iconName="ExternalLink"
              iconPosition="right"
              className="text-primary border-primary/20 hover:bg-primary/5"
            >
              View Profile
            </Button>
          </div>
        ))}
      </div>
      {/* Join Community CTA */}
      <div className="text-center mt-8 pt-8 border-t border-border">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
          Join Our Community
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Share your transformation using #IvellaRitual and get featured in our community spotlight.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Button
            variant="outline"
            iconName="Instagram"
            iconPosition="left"
            className="flex-1"
          >
            Follow @IvellaLuxe
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-golden-gradient hover:opacity-90"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySpotlight;