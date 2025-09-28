import React from 'react';

import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle 
}) => {
  const filterCategories = [
    {
      id: 'category',
      label: 'Ingredient Category',
      options: [
        { value: 'nourishing-oils', label: 'Nourishing Oils' },
        { value: 'botanical-extracts', label: 'Botanical Extracts' },
        { value: 'essential-nutrients', label: 'Essential Nutrients' },
        { value: 'active-compounds', label: 'Active Compounds' }
      ]
    },
    {
      id: 'hairConcern',
      label: 'Hair Concern',
      options: [
        { value: 'dryness', label: 'Dryness & Damage' },
        { value: 'thinning', label: 'Thinning & Loss' },
        { value: 'scalp-health', label: 'Scalp Health' },
        { value: 'frizz', label: 'Frizz Control' },
        { value: 'growth', label: 'Hair Growth' },
        { value: 'shine', label: 'Shine & Luster' }
      ]
    },
    {
      id: 'origin',
      label: 'Sourcing Region',
      options: [
        { value: 'morocco', label: 'Morocco' },
        { value: 'india', label: 'India' },
        { value: 'france', label: 'France' },
        { value: 'peru', label: 'Peru' },
        { value: 'australia', label: 'Australia' },
        { value: 'madagascar', label: 'Madagascar' }
      ]
    },
    {
      id: 'certifications',
      label: 'Certifications',
      options: [
        { value: 'organic', label: 'Certified Organic' },
        { value: 'fair-trade', label: 'Fair Trade' },
        { value: 'cruelty-free', label: 'Cruelty Free' },
        { value: 'sustainable', label: 'Sustainably Sourced' }
      ]
    }
  ];

  const handleFilterChange = (categoryId, value, checked) => {
    const currentFilters = filters?.[categoryId] || [];
    const newFilters = checked
      ? [...currentFilters, value]
      : currentFilters?.filter(f => f !== value);
    
    onFilterChange(categoryId, newFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(filters)?.reduce((count, filterArray) => count + filterArray?.length, 0);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          fullWidth
          iconName="Filter"
          iconPosition="left"
          onClick={onToggle}
        >
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} bg-card rounded-organic border border-border p-6 mb-6 lg:mb-0`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Filter Ingredients
          </h3>
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {filterCategories?.map((category) => (
            <div key={category?.id}>
              <h4 className="font-medium text-foreground mb-3">
                {category?.label}
              </h4>
              <div className="space-y-2">
                {category?.options?.map((option) => (
                  <Checkbox
                    key={option?.value}
                    label={option?.label}
                    checked={(filters?.[category?.id] || [])?.includes(option?.value)}
                    onChange={(e) => handleFilterChange(category?.id, option?.value, e?.target?.checked)}
                    size="sm"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Close Button */}
        <div className="lg:hidden mt-6 pt-6 border-t border-border">
          <Button
            variant="default"
            fullWidth
            onClick={onToggle}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;