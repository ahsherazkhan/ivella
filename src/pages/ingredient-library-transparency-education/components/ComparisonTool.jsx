import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ComparisonTool = () => {
  const [selectedIngredients, setSelectedIngredients] = useState(['', '']);
  const [showComparison, setShowComparison] = useState(false);

  const ingredients = [
    {
      value: 'ivella-argan',
      label: 'Ivella Argan Oil',
      type: 'Premium',
      purity: 99.8,
      extraction: 'Cold-pressed by hand',
      source: 'Single-origin Morocco cooperative',
      certifications: ['Organic', 'Fair Trade', 'Third-party tested'],
      benefits: ['Deep moisturizing', 'Frizz control', 'Shine enhancement', 'UV protection'],
      price: '$$$',
      sustainability: 'Carbon-neutral shipping, recyclable packaging'
    },
    {
      value: 'mass-market-argan',
      label: 'Mass Market Argan Oil',
      type: 'Commercial',
      purity: 85.2,
      extraction: 'Machine-pressed with heat',
      source: 'Mixed-origin suppliers',
      certifications: ['Basic quality standards'],
      benefits: ['Basic moisturizing', 'Some frizz reduction'],
      price: '$',
      sustainability: 'Standard packaging'
    },
    {
      value: 'ivella-rosehip',
      label: 'Ivella Rosehip Oil',
      type: 'Premium',
      purity: 98.5,
      extraction: 'CO2 extraction',
      source: 'Patagonian family farms',
      certifications: ['Organic', 'Direct Trade', 'Vitamin C verified'],
      benefits: ['Scalp nourishment', 'Hair growth support', 'Damage repair', 'Antioxidant protection'],
      price: '$$$',
      sustainability: 'Biodegradable packaging, carbon offset'
    },
    {
      value: 'generic-rosehip',
      label: 'Generic Rosehip Oil',
      type: 'Commercial',
      purity: 78.9,
      extraction: 'Solvent extraction',
      source: 'Various suppliers',
      certifications: ['Basic purity standards'],
      benefits: ['Light moisturizing', 'Some vitamin content'],
      price: '$',
      sustainability: 'Standard packaging'
    }
  ];

  const ingredientOptions = ingredients?.map(ing => ({
    value: ing?.value,
    label: ing?.label
  }));

  const handleIngredientChange = (index, value) => {
    const newSelected = [...selectedIngredients];
    newSelected[index] = value;
    setSelectedIngredients(newSelected);
    setShowComparison(false);
  };

  const compareIngredients = () => {
    if (selectedIngredients?.[0] && selectedIngredients?.[1]) {
      setShowComparison(true);
    }
  };

  const getIngredientData = (value) => {
    return ingredients?.find(ing => ing?.value === value);
  };

  const comparisonData = showComparison ? [
    getIngredientData(selectedIngredients?.[0]),
    getIngredientData(selectedIngredients?.[1])
  ] : [];

  return (
    <div className="bg-card rounded-organic border border-border p-6">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          Ingredient Comparison Tool
        </h3>
        <p className="text-muted-foreground">
          Compare our premium ingredients with mass-market alternatives
        </p>
      </div>
      {/* Ingredient Selection */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <Select
            label="First Ingredient"
            placeholder="Select an ingredient"
            options={ingredientOptions}
            value={selectedIngredients?.[0]}
            onChange={(value) => handleIngredientChange(0, value)}
          />
        </div>
        <div>
          <Select
            label="Second Ingredient"
            placeholder="Select an ingredient"
            options={ingredientOptions}
            value={selectedIngredients?.[1]}
            onChange={(value) => handleIngredientChange(1, value)}
          />
        </div>
      </div>
      {/* Compare Button */}
      {selectedIngredients?.[0] && selectedIngredients?.[1] && (
        <div className="mb-6">
          <Button
            variant="default"
            iconName="GitCompare"
            iconPosition="left"
            onClick={compareIngredients}
            className="bg-golden-gradient hover:opacity-90"
          >
            Compare Ingredients
          </Button>
        </div>
      )}
      {/* Comparison Results */}
      {showComparison && comparisonData?.length === 2 && (
        <div className="space-y-6">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            {comparisonData?.map((ingredient, index) => (
              <div key={index} className="text-center">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {ingredient?.label}
                </h4>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  ingredient?.type === 'Premium' ?'bg-secondary text-secondary-foreground' :'bg-muted text-muted-foreground'
                }`}>
                  {ingredient?.type}
                </span>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="space-y-4">
            {/* Purity */}
            <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
              <div className="font-medium text-foreground">Purity Level</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {ingredient?.purity}%
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        ingredient?.purity > 95 ? 'bg-success' : 
                        ingredient?.purity > 85 ? 'bg-warning' : 'bg-error'
                      }`}
                      style={{ width: `${ingredient?.purity}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Extraction Method */}
            <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
              <div className="font-medium text-foreground">Extraction Method</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="text-foreground">{ingredient?.extraction}</div>
                </div>
              ))}
            </div>

            {/* Source */}
            <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
              <div className="font-medium text-foreground">Source</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="text-foreground text-sm">{ingredient?.source}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
              <div className="font-medium text-foreground">Certifications</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="space-y-1">
                    {ingredient?.certifications?.map((cert, certIndex) => (
                      <div key={certIndex} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
              <div className="font-medium text-foreground">Key Benefits</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index}>
                  <div className="space-y-2">
                    {ingredient?.benefits?.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
              <div className="font-medium text-foreground">Price Range</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-secondary">{ingredient?.price}</div>
                </div>
              ))}
            </div>

            {/* Sustainability */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="font-medium text-foreground">Sustainability</div>
              {comparisonData?.map((ingredient, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-foreground">{ingredient?.sustainability}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Winner Highlight */}
          <div className="bg-success/10 border border-success/20 rounded-sm p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Icon name="Trophy" size={20} className="text-success" />
              <span className="font-heading text-lg font-semibold text-foreground">
                Why Choose Premium?
              </span>
            </div>
            <p className="text-foreground text-sm leading-relaxed">
              Our premium ingredients offer superior purity, ethical sourcing, and proven benefits. 
              While they may cost more upfront, the concentrated potency means you use less product 
              and achieve better results, making them more cost-effective in the long run.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonTool;