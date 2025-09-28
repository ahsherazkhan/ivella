import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IngredientMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: 'morocco',
      name: 'Morocco',
      ingredient: 'Argan Oil',
      coordinates: { top: '35%', left: '48%' },
      description: 'Hand-harvested by Berber women\'s cooperatives in the Atlas Mountains, our argan oil is cold-pressed within 24 hours to preserve its potent nutrients.',
      image: 'https://images.unsplash.com/photo-1544967882-6abaa7b2aa9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      cooperative: 'Atlas Women\'s Argan Cooperative',
      members: 45,
      established: 2018
    },
    {
      id: 'india',
      name: 'Kerala, India',
      ingredient: 'Coconut Oil',
      coordinates: { top: '45%', left: '75%' },
      description: 'Sourced from organic coconut groves managed by women\'s self-help groups, our virgin coconut oil is extracted using traditional methods.',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
      cooperative: 'Kerala Coconut Women\'s Federation',
      members: 120,
      established: 2019
    },
    {
      id: 'madagascar',
      name: 'Madagascar',
      ingredient: 'Ylang Ylang',
      coordinates: { top: '65%', left: '68%' },
      description: 'Distilled from flowers picked at dawn by local women, our ylang ylang essential oil captures the pure essence of this exotic bloom.',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      cooperative: 'Madagascar Flower Collective',
      members: 78,
      established: 2020
    },
    {
      id: 'peru',
      name: 'Peru',
      ingredient: 'Sacha Inchi Oil',
      coordinates: { top: '55%', left: '25%' },
      description: 'Harvested from the Amazon rainforest by indigenous women\'s groups, this omega-rich oil is cold-pressed to maintain its nutritional profile.',
      image: 'https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=400',
      cooperative: 'Amazon Women\'s Alliance',
      members: 89,
      established: 2021
    },
    {
      id: 'bulgaria',
      name: 'Bulgaria',
      ingredient: 'Rose Oil',
      coordinates: { top: '32%', left: '58%' },
      description: 'Hand-picked at sunrise in the Valley of Roses, our Bulgarian rose oil is steam-distilled using centuries-old techniques.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      cooperative: 'Rose Valley Women\'s Cooperative',
      members: 67,
      established: 2019
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            Global Sourcing
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Our Ingredient Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the origins of our precious ingredients and meet the remarkable women who cultivate them with care and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-card rounded-organic p-8 luxury-shadow">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6 text-center">
                Our Global Partners
              </h3>
              
              {/* World Map Container */}
              <div className="relative bg-muted/30 rounded-organic overflow-hidden" style={{ aspectRatio: '2/1' }}>
                {/* Simplified World Map Background */}
                <svg 
                  viewBox="0 0 1000 500" 
                  className="w-full h-full"
                  style={{ background: 'linear-gradient(180deg, #FEF3C7 0%, #F9FAFB 100%)' }}
                >
                  {/* Continents - Simplified shapes */}
                  <path d="M100 150 Q200 120 300 140 L350 180 Q300 220 200 200 Q150 180 100 150 Z" fill="#FEF3C7" opacity="0.3" />
                  <path d="M400 100 Q500 80 600 100 L650 140 Q600 180 500 160 Q450 140 400 100 Z" fill="#FEF3C7" opacity="0.3" />
                  <path d="M700 120 Q800 100 900 120 L950 160 Q900 200 800 180 Q750 160 700 120 Z" fill="#FEF3C7" opacity="0.3" />
                  <path d="M150 250 Q250 230 350 250 L400 290 Q350 330 250 310 Q200 290 150 250 Z" fill="#FEF3C7" opacity="0.3" />
                  <path d="M50 300 Q150 280 250 300 L300 340 Q250 380 150 360 Q100 340 50 300 Z" fill="#FEF3C7" opacity="0.3" />
                </svg>

                {/* Region Markers */}
                {regions.map((region) => (
                  <button
                    key={region.id}
                    className={`absolute w-6 h-6 rounded-full border-2 border-white transition-all duration-200 hover:scale-125 ${
                      selectedRegion?.id === region.id 
                        ? 'bg-secondary scale-125 shadow-lg' 
                        : 'bg-primary hover:bg-secondary'
                    }`}
                    style={{
                      top: region.coordinates.top,
                      left: region.coordinates.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                  >
                    <span className="sr-only">{region.name}</span>
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm transition-colors duration-200 ${
                      selectedRegion?.id === region.id
                        ? 'bg-secondary text-white' :'bg-muted hover:bg-accent text-foreground'
                    }`}
                    onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      selectedRegion?.id === region.id ? 'bg-white' : 'bg-primary'
                    }`}></div>
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            {selectedRegion ? (
              <div className="bg-card rounded-organic overflow-hidden luxury-shadow fade-in-up">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={selectedRegion.image}
                    alt={`${selectedRegion.ingredient} from ${selectedRegion.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-heading font-semibold">
                      {selectedRegion.ingredient}
                    </h3>
                    <p className="text-sm opacity-90">{selectedRegion.name}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedRegion.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" size={20} className="text-secondary" />
                      <div>
                        <div className="font-medium text-foreground">
                          {selectedRegion.cooperative}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {selectedRegion.members} women members
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Icon name="Calendar" size={20} className="text-secondary" />
                      <div>
                        <div className="font-medium text-foreground">
                          Partnership Since
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {selectedRegion.established}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Icon name="Award" size={20} className="text-secondary" />
                      <div>
                        <div className="font-medium text-foreground">
                          Fair Trade Certified
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Ethical sourcing guaranteed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-organic p-8 luxury-shadow text-center">
                <Icon name="MapPin" size={48} className="text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Explore Our Global Network
                </h3>
                <p className="text-muted-foreground">
                  Click on any location on the map or select from the legend below to learn about our ingredient sources and the amazing women who make our products possible.
                </p>
              </div>
            )}

            {/* Summary Stats */}
            <div className="bg-card rounded-organic p-6 luxury-shadow">
              <h4 className="text-lg font-heading font-semibold text-primary mb-4">
                Partnership Impact
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-heading font-semibold text-secondary">
                    399
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Women Supported
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-semibold text-secondary">
                    5
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientMap;