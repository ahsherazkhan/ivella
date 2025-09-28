import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransformationCard = ({ transformation, onViewDetails }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={showAfter ? transformation?.afterImage : transformation?.beforeImage}
            alt={showAfter ? `${transformation?.customerName} after transformation` : `${transformation?.customerName} before transformation`}
            className="w-full h-full object-cover"
          />
          
          {/* Before/After Toggle */}
          <div className="absolute top-4 left-4">
            <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium">
                {showAfter ? 'After' : 'Before'}
              </span>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
          >
            <Icon name="RotateCcw" size={16} className="text-primary" />
          </button>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Customer Info */}
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={transformation?.customerAvatar}
            alt={transformation?.customerName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {transformation?.customerName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {transformation?.hairType} • {transformation?.timeframe}
            </p>
          </div>
        </div>

        {/* Hair Concern Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {transformation?.concerns?.map((concern, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/30 text-accent-foreground text-xs rounded-full"
            >
              {concern}
            </span>
          ))}
        </div>

        {/* Testimonial Preview */}
        <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          "{transformation?.testimonial}"
        </p>

        {/* Products Used */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Products Used:</p>
          <div className="flex flex-wrap gap-1">
            {transformation?.productsUsed?.map((product, index) => (
              <span
                key={index}
                className="text-xs text-primary font-medium"
              >
                {product}{index < transformation?.productsUsed?.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < transformation?.rating ? 'text-secondary fill-current' : 'text-muted-foreground'}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              {transformation?.rating}/5
            </span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewDetails(transformation)}
            iconName="ArrowRight"
            iconPosition="right"
            className="text-primary hover:text-primary/80"
          >
            View Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransformationCard;