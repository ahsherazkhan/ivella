import React from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  activeFiltersCount,
  onToggleView,
  viewMode 
}) => {
  const hairTypeOptions = [
    { value: 'all', label: 'All Hair Types' },
    { value: 'straight', label: 'Straight' },
    { value: 'wavy', label: 'Wavy' },
    { value: 'curly', label: 'Curly' },
    { value: 'coily', label: 'Coily' }
  ];

  const concernOptions = [
    { value: 'all', label: 'All Concerns' },
    { value: 'dryness', label: 'Dryness' },
    { value: 'damage', label: 'Damage' },
    { value: 'frizz', label: 'Frizz Control' },
    { value: 'thinning', label: 'Thinning Hair' },
    { value: 'scalp', label: 'Scalp Health' },
    { value: 'growth', label: 'Hair Growth' }
  ];

  const timeframeOptions = [
    { value: 'all', label: 'All Timeframes' },
    { value: '2-weeks', label: '2 Weeks' },
    { value: '1-month', label: '1 Month' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6+ Months' }
  ];

  return (
    <div className="bg-card rounded-organic p-6 luxury-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex-1 min-w-0">
            <Select
              placeholder="Hair Type"
              options={hairTypeOptions}
              value={filters?.hairType}
              onChange={(value) => onFilterChange('hairType', value)}
              className="w-full"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <Select
              placeholder="Hair Concern"
              options={concernOptions}
              value={filters?.concern}
              onChange={(value) => onFilterChange('concern', value)}
              className="w-full"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <Select
              placeholder="Timeframe"
              options={timeframeOptions}
              value={filters?.timeframe}
              onChange={(value) => onFilterChange('timeframe', value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              Clear ({activeFiltersCount})
            </Button>
          )}

          {/* View Toggle */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => onToggleView('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => onToggleView('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;