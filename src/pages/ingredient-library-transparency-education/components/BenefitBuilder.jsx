import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BenefitBuilder = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const availableIngredients = [
    {
      id: 'argan',
      name: 'Argan Oil',
      benefits: ['Deep Moisturizing', 'Frizz Control', 'Shine Enhancement'],
      synergy: ['rosehip', 'jojoba']
    },
    {
      id: 'rosehip',
      name: 'Rosehip Oil',
      benefits: ['Scalp Nourishment', 'Hair Growth', 'Damage Repair'],
      synergy: ['argan', 'vitamin-e']
    },
    {
      id: 'jojoba',
      name: 'Jojoba Oil',
      benefits: ['Sebum Balance', 'Lightweight Moisture', 'Scalp Health'],
      synergy: ['argan', 'tea-tree']
    },
    {
      id: 'vitamin-e',
      name: 'Vitamin E',
      benefits: ['Antioxidant Protection', 'UV Defense', 'Hair Strength'],
      synergy: ['rosehip', 'coconut']
    },
    {
      id: 'coconut',
      name: 'Coconut Oil',
      benefits: ['Protein Retention', 'Deep Conditioning', 'Breakage Prevention'],
      synergy: ['vitamin-e', 'tea-tree']
    },
    {
      id: 'tea-tree',
      name: 'Tea Tree Oil',
      benefits: ['Scalp Cleansing', 'Dandruff Control', 'Antimicrobial'],
      synergy: ['jojoba', 'coconut']
    }
  ];

  const toggleIngredient = (ingredient) => {
    setSelectedIngredients(prev => {
      const isSelected = prev?.find(item => item?.id === ingredient?.id);
      if (isSelected) {
        return prev?.filter(item => item?.id !== ingredient?.id);
      } else {
        return [...prev, ingredient];
      }
    });
    setShowResults(false);
  };

  const calculateSynergy = () => {
    if (selectedIngredients?.length < 2) return [];
    
    const synergyPairs = [];
    selectedIngredients?.forEach(ingredient => {
      selectedIngredients?.forEach(other => {
        if (ingredient?.id !== other?.id && ingredient?.synergy?.includes(other?.id)) {
          const existingPair = synergyPairs?.find(pair => 
            (pair?.ingredient1?.id === ingredient?.id && pair?.ingredient2?.id === other?.id) ||
            (pair?.ingredient1?.id === other?.id && pair?.ingredient2?.id === ingredient?.id)
          );
          if (!existingPair) {
            synergyPairs?.push({
              ingredient1: ingredient,
              ingredient2: other,
              effect: `Enhanced ${ingredient?.benefits?.[0]} + ${other?.benefits?.[0]}`
            });
          }
        }
      });
    });
    return synergyPairs;
  };

  const getAllBenefits = () => {
    const allBenefits = selectedIngredients?.reduce((acc, ingredient) => {
      return [...acc, ...ingredient?.benefits];
    }, []);
    return [...new Set(allBenefits)];
  };

  const buildFormulation = () => {
    setShowResults(true);
  };

  return (
    <div className="bg-card rounded-organic border border-border p-6">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          Benefit Builder Tool
        </h3>
        <p className="text-muted-foreground">
          Select ingredients to see how they work synergistically in our formulations
        </p>
      </div>
      {/* Ingredient Selection */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-4">Choose Ingredients</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {availableIngredients?.map((ingredient) => {
            const isSelected = selectedIngredients?.find(item => item?.id === ingredient?.id);
            return (
              <button
                key={ingredient?.id}
                onClick={() => toggleIngredient(ingredient)}
                className={`p-3 rounded-sm border transition-all duration-200 text-left ${
                  isSelected
                    ? 'border-secondary bg-secondary/10 text-foreground'
                    : 'border-border hover:border-secondary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-secondary bg-secondary' : 'border-muted-foreground'
                  }`}>
                    {isSelected && <Icon name="Check" size={12} className="text-white" />}
                  </div>
                  <span className="text-sm font-medium">{ingredient?.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* Build Button */}
      {selectedIngredients?.length > 0 && (
        <div className="mb-6">
          <Button
            variant="default"
            iconName="Zap"
            iconPosition="left"
            onClick={buildFormulation}
            className="bg-golden-gradient hover:opacity-90"
          >
            Build My Formulation ({selectedIngredients?.length} ingredients)
          </Button>
        </div>
      )}
      {/* Results */}
      {showResults && selectedIngredients?.length > 0 && (
        <div className="space-y-6">
          {/* Combined Benefits */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Combined Benefits</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {getAllBenefits()?.map((benefit, index) => (
                <div key={index} className="bg-accent text-accent-foreground px-3 py-2 rounded-full text-sm text-center">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Synergistic Effects */}
          {calculateSynergy()?.length > 0 && (
            <div>
              <h4 className="font-medium text-foreground mb-3">Synergistic Effects</h4>
              <div className="space-y-3">
                {calculateSynergy()?.map((synergy, index) => (
                  <div key={index} className="bg-success/10 border border-success/20 rounded-sm p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="Zap" size={16} className="text-success" />
                      <span className="font-medium text-foreground">
                        {synergy?.ingredient1?.name} + {synergy?.ingredient2?.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{synergy?.effect}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Products */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Products Featuring This Combination</h4>
            <div className="bg-muted rounded-sm p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={16} className="text-secondary" />
                </div>
                <span className="font-medium text-foreground">Signature Hair Elixir</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Our premium blend featuring {selectedIngredients?.length} of these powerful ingredients
              </p>
              <Button
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitBuilder;