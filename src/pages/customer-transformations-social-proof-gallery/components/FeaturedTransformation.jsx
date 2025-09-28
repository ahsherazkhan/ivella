import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedTransformation = ({ transformation, onViewDetails }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-organic overflow-hidden luxury-shadow">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden">
            <Image
              src={showAfter ? transformation?.afterImage : transformation?.beforeImage}
              alt={`${transformation?.customerName} featured transformation`}
              className="w-full h-full object-cover"
            />
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Icon name="Star" size={14} className="inline mr-1" />
                Featured Story
              </div>
            </div>

            {/* Before/After Toggle */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white transition-colors duration-200"
              >
                <span className="text-primary font-medium text-sm">
                  {showAfter ? 'Show Before' : 'Show After'}
                </span>
              </button>
            </div>

            {/* Current State Indicator */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">
                  {showAfter ? 'After' : 'Before'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* Customer Info */}
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src={transformation?.customerAvatar}
              alt={transformation?.customerName}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-secondary/20"
            />
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">
                {transformation?.customerName}
              </h2>
              <p className="text-muted-foreground">
                {transformation?.hairType} • {transformation?.location}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={20}
                  className={i < transformation?.rating ? 'text-secondary fill-current' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <span className="text-foreground font-medium text-lg">{transformation?.rating}/5</span>
          </div>

          {/* Testimonial */}
          <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
            "{transformation?.featuredQuote || transformation?.testimonial}"
          </blockquote>

          {/* Key Results */}
          <div className="mb-6">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
              Key Results in {transformation?.timeframe}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {transformation?.keyResults?.map((result, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-foreground text-sm">{result}</span>
                </div>
              )) || transformation?.concerns?.map((concern, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-foreground text-sm">Improved {concern}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products Used */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">Products Used:</p>
            <div className="flex flex-wrap gap-2">
              {transformation?.productsUsed?.map((product, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/30 text-accent-foreground text-sm rounded-full"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => onViewDetails(transformation)}
              iconName="ArrowRight"
              iconPosition="right"
              className="flex-1"
            >
              Read Full Story
            </Button>
            <Button
              variant="default"
              className="flex-1 bg-golden-gradient hover:opacity-90"
            >
              Shop Her Routine
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTransformation;