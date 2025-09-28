import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IngredientCard = ({ ingredient, onViewDetails, isExpanded = false }) => {
  return (
    <div className={`bg-card rounded-organic border border-border transition-all duration-300 hover:shadow-luxury hover-lift ${
      isExpanded ? 'col-span-full' : ''
    }`}>
      <div className="relative overflow-hidden rounded-t-organic">
        <Image
          src={ingredient?.image}
          alt={ingredient?.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {ingredient?.category}
          </span>
        </div>
        {ingredient?.certifications && ingredient?.certifications?.length > 0 && (
          <div className="absolute top-4 right-4 flex space-x-2">
            {ingredient?.certifications?.map((cert, index) => (
              <div key={index} className="bg-success text-success-foreground p-1 rounded-full">
                <Icon name="Award" size={16} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            {ingredient?.name}
          </h3>
          <p className="text-sm text-muted-foreground italic mb-2">
            {ingredient?.scientificName}
          </p>
          <p className="text-foreground text-sm leading-relaxed">
            {ingredient?.description}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="MapPin" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground">Origin:</span>
            <span className="text-sm text-muted-foreground">{ingredient?.origin}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground">Primary Benefits:</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {ingredient?.benefits?.slice(0, 3)?.map((benefit, index) => (
              <span key={index} className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs">
                {benefit}
              </span>
            ))}
            {ingredient?.benefits?.length > 3 && (
              <span className="text-xs text-muted-foreground">+{ingredient?.benefits?.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={16} className="text-secondary fill-current" />
              <span className="text-sm font-medium">{ingredient?.purityScore}/10</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Leaf" size={16} className="text-success" />
              <span className="text-sm text-success">Organic</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onViewDetails(ingredient)}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;