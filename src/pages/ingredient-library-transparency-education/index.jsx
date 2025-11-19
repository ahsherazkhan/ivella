import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import IngredientCard from './components/IngredientCard';
import FilterPanel from './components/FilterPanel';
import IngredientModal from './components/IngredientModal';
import BenefitBuilder from './components/BenefitBuilder';
import SourcingStories from './components/SourcingStories';
import ComparisonTool from './components/ComparisonTool';
import { useNavigate } from 'react-router-dom';

const IngredientLibrary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('library');

  // Mock ingredient data
  const ingredients = [
    {
      id: 1,
      name: "IVELLA Signature Oil",
      category: "Nourishing Oils",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "Liquid gold from Morocco's ancient argan trees, rich in vitamin E and essential fatty acids for deep hair nourishment.",
      detailedDescription: `IVELLA Signature Oil, often called 'liquid gold,' is extracted from the kernels of the Argania spinosa tree, which grows exclusively in southwestern Morocco. This precious oil has been used for centuries by Berber women for its remarkable hair and skin benefits.\n\nRich in vitamin E, essential fatty acids, and antioxidants, argan oil penetrates deep into the hair shaft to provide intensive moisture and repair. Its unique molecular structure allows it to smooth the hair cuticle, reducing frizz and adding brilliant shine without weighing hair down.`,
      origin: "Essaouira, Morocco",
      benefits: [
        "Deep moisturizing and hydration",
        "Frizz control and smoothing",
        "Natural shine enhancement",
        "UV protection and color preservation",
        "Split end repair and prevention",
        "Scalp nourishment and health"
      ],
      purityScore: 9.8,
      certifications: ["Certified Organic", "Fair Trade", "Cruelty Free"],
      sourcingStory: "Sourced from a women\'s cooperative in Morocco that has been perfecting argan oil extraction for generations.",
      featuredProducts: ["Signature Hair Elixir", "Intensive Repair Mask", "Daily Nourishing Serum"]
    },
    // {
    //   id: 2,
    //   name: "Rosehip Seed Oil",
    //   scientificName: "Rosa canina",
    //   category: "Botanical Extracts",
    //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    //   description: "Vitamin C powerhouse from Patagonian rosehips, promoting scalp health and hair growth with antioxidant protection.",
    //   detailedDescription: `Rosehip Seed Oil is extracted from the seeds of wild rose bushes that grow in the harsh climate of Patagonia. This challenging environment produces rosehips with exceptionally high concentrations of vitamin C and essential fatty acids.\n\nThis lightweight oil is particularly beneficial for scalp health, providing the nutrients needed for healthy hair growth. Its high antioxidant content helps protect hair from environmental damage while its regenerative properties support the repair of damaged hair follicles.`,
    //   origin: "Patagonia, Chile",
    //   benefits: [
    //     "Scalp nourishment and healing",
    //     "Hair growth stimulation",
    //     "Damage repair and regeneration",
    //     "Antioxidant protection",
    //     "Lightweight moisture",
    //     "Color protection"
    //   ],
    //   purityScore: 9.5,
    //   certifications: ["Organic", "Direct Trade", "Sustainable Sourcing"],
    //   sourcingStory: "Harvested by family farms in Patagonia who have been cultivating rosehips for over 50 years.",
    //   featuredProducts: ["Growth Stimulating Serum", "Scalp Treatment Oil", "Protective Leave-In Conditioner"]
    // },
    // {
    //   id: 3,
    //   name: "Jojoba Oil",
    //   scientificName: "Simmondsia chinensis",
    //   category: "Nourishing Oils",
    //   image: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=600&h=400&fit=crop",
    //   description: "Technically a wax ester that mimics natural sebum, providing balanced moisture without greasiness.",
    //   detailedDescription: `Jojoba Oil is unique among hair care ingredients because it's technically not an oil at all, but a liquid wax ester that closely mimics the natural sebum produced by our scalp. This similarity allows it to regulate oil production and provide balanced moisture.\n\nNative to the Sonoran Desert, the jojoba plant produces seeds that yield this precious liquid gold. Its molecular structure is so similar to human sebum that it's readily absorbed without leaving a greasy residue, making it perfect for all hair types.`,
    //   origin: "Queensland, Australia",
    //   benefits: [
    //     "Sebum regulation and balance",
    //     "Lightweight, non-greasy moisture",
    //     "Scalp health maintenance",
    //     "Hair follicle cleansing",
    //     "Natural shine without buildup",
    //     "Long-lasting hydration"
    //   ],
    //   purityScore: 9.7,
    //   certifications: ["Organic", "Indigenous Partnership", "Carbon Neutral"],
    //   sourcingStory: "Sourced through partnership with Indigenous Australian communities using traditional knowledge.",
    //   featuredProducts: ["Balancing Scalp Serum", "Lightweight Hair Oil", "Daily Moisture Mist"]
    // },
    // {
    //   id: 4,
    //   name: "Vitamin E Complex",
    //   scientificName: "Tocopherol",
    //   category: "Essential Nutrients",
    //   image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop",
    //   description: "Powerful antioxidant complex that protects hair from environmental damage and supports healthy growth.",
    //   detailedDescription: `Our Vitamin E Complex is a carefully balanced blend of tocopherols and tocotrienols, providing comprehensive antioxidant protection for hair and scalp. This essential nutrient is crucial for maintaining healthy hair growth and protecting against environmental damage.\n\nVitamin E works by neutralizing free radicals that can damage hair follicles and cause premature aging. It also improves blood circulation to the scalp, ensuring that hair follicles receive the nutrients they need for optimal growth.`,
    //   origin: "France",
    //   benefits: [
    //     "Antioxidant protection",
    //     "UV damage prevention",
    //     "Hair strength and elasticity",
    //     "Scalp circulation improvement",
    //     "Free radical neutralization",
    //     "Growth support"
    //   ],
    //   purityScore: 9.9,
    //   certifications: ["Pharmaceutical Grade", "Non-GMO", "Allergen Free"],
    //   sourcingStory: "Sourced from premium French suppliers using advanced extraction methods.",
    //   featuredProducts: ["Antioxidant Hair Shield", "Strengthening Treatment", "UV Protection Spray"]
    // },
    // {
    //   id: 5,
    //   name: "Coconut Oil",
    //   scientificName: "Cocos nucifera",
    //   category: "Nourishing Oils",
    //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    //   description: "Virgin coconut oil with unique protein-binding properties that prevent hair damage and breakage.",
    //   detailedDescription: `Virgin Coconut Oil is unique among hair oils for its ability to actually penetrate the hair shaft and bind to hair proteins, providing protection from the inside out. This molecular affinity makes it exceptionally effective at preventing protein loss during washing and styling.\n\nOur coconut oil is cold-pressed from fresh coconut meat within hours of harvesting, preserving its natural nutrients and maintaining its characteristic light, tropical scent. The high concentration of lauric acid gives it natural antimicrobial properties.`,
    //   origin: "Kerala, India",
    //   benefits: [
    //     "Protein retention and binding",
    //     "Deep conditioning",
    //     "Breakage prevention",
    //     "Antimicrobial scalp protection",
    //     "Natural detangling",
    //     "Heat protection"
    //   ],
    //   purityScore: 9.6,
    //   certifications: ["Virgin Cold-Pressed", "Organic", "Fair Trade"],
    //   sourcingStory: "Sourced from small family farms in Kerala using traditional cold-pressing methods.",
    //   featuredProducts: ["Deep Conditioning Mask", "Protein Treatment", "Heat Protection Serum"]
    // },
    // {
    //   id: 6,
    //   name: "Tea Tree Oil",
    //   scientificName: "Melaleuca alternifolia",
    //   category: "Active Compounds",
    //   image: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=600&h=400&fit=crop",
    //   description: "Australian tea tree oil with powerful antimicrobial properties for scalp health and dandruff control.",
    //   detailedDescription: `Tea Tree Oil from the native Australian Melaleuca alternifolia tree has been used by Aboriginal Australians for thousands of years for its healing properties. This potent essential oil contains over 100 different compounds, with terpinen-4-ol being the primary active ingredient.\n\nIts powerful antimicrobial and anti-inflammatory properties make it exceptional for treating scalp conditions like dandruff, seborrheic dermatitis, and folliculitis. When properly diluted, it provides gentle yet effective cleansing without stripping natural oils.`,
    //   origin: "New South Wales, Australia",
    //   benefits: [
    //     "Antimicrobial scalp cleansing",
    //     "Dandruff control and prevention",
    //     "Seborrheic dermatitis treatment",
    //     "Follicle purification",
    //     "Inflammation reduction",
    //     "Natural preservation"
    //   ],
    //   purityScore: 9.4,
    //   certifications: ["100% Pure", "Steam Distilled", "Therapeutic Grade"],
    //   sourcingStory: "Sustainably harvested from native Australian tea tree plantations using traditional methods.",
    //   featuredProducts: ["Scalp Purifying Shampoo", "Anti-Dandruff Treatment", "Clarifying Scalp Mask"]
    // }
  ];

  const tabs = [
    { id: 'library', label: 'Ingredient Library', icon: 'BookOpen' },
    // { id: 'builder', label: 'Benefit Builder', icon: 'Zap' },
    // { id: 'stories', label: 'Sourcing Stories', icon: 'Heart' },
    // { id: 'comparison', label: 'Comparison Tool', icon: 'GitCompare' }
  ];

  // Filter ingredients based on search and filters
  const filteredIngredients = ingredients?.filter(ingredient => {
    // Search filter
    const matchesSearch = !searchTerm || 
      ingredient?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      ingredient?.scientificName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      ingredient?.benefits?.some(benefit => benefit?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

    // Category filter
    const matchesCategory = !filters?.category?.length || 
      filters?.category?.some(cat => {
        switch(cat) {
          case 'nourishing-oils': return ingredient?.category === 'Nourishing Oils';
          case 'botanical-extracts': return ingredient?.category === 'Botanical Extracts';
          case 'essential-nutrients': return ingredient?.category === 'Essential Nutrients';
          case 'active-compounds': return ingredient?.category === 'Active Compounds';
          default: return false;
        }
      });

    // Hair concern filter
    const matchesHairConcern = !filters?.hairConcern?.length ||
      filters?.hairConcern?.some(concern => {
        switch(concern) {
          case 'dryness': return ingredient?.benefits?.some(b => b?.toLowerCase()?.includes('moistur') || b?.toLowerCase()?.includes('hydrat'));
          case 'thinning': return ingredient?.benefits?.some(b => b?.toLowerCase()?.includes('growth') || b?.toLowerCase()?.includes('thin'));
          case 'scalp-health': return ingredient?.benefits?.some(b => b?.toLowerCase()?.includes('scalp'));
          case 'frizz': return ingredient?.benefits?.some(b => b?.toLowerCase()?.includes('frizz') || b?.toLowerCase()?.includes('smooth'));
          case 'growth': return ingredient?.benefits?.some(b => b?.toLowerCase()?.includes('growth'));
          case 'shine': return ingredient?.benefits?.some(b => b?.toLowerCase()?.includes('shine') || b?.toLowerCase()?.includes('luster'));
          default: return false;
        }
      });

    // Origin filter
    const matchesOrigin = !filters?.origin?.length ||
      filters?.origin?.some(origin => {
        switch(origin) {
          case 'morocco': return ingredient?.origin?.toLowerCase()?.includes('morocco');
          case 'india': return ingredient?.origin?.toLowerCase()?.includes('india');
          case 'france': return ingredient?.origin?.toLowerCase()?.includes('france');
          case 'peru': return ingredient?.origin?.toLowerCase()?.includes('peru');
          case 'australia': return ingredient?.origin?.toLowerCase()?.includes('australia');
          case 'madagascar': return ingredient?.origin?.toLowerCase()?.includes('madagascar');
          default: return false;
        }
      });

    // Certifications filter
    const matchesCertifications = !filters?.certifications?.length ||
      filters?.certifications?.some(cert => {
        switch(cert) {
          case 'organic': return ingredient?.certifications?.some(c => c?.toLowerCase()?.includes('organic'));
          case 'fair-trade': return ingredient?.certifications?.some(c => c?.toLowerCase()?.includes('fair trade'));
          case 'cruelty-free': return ingredient?.certifications?.some(c => c?.toLowerCase()?.includes('cruelty free'));
          case 'sustainable': return ingredient?.certifications?.some(c => c?.toLowerCase()?.includes('sustain'));
          default: return false;
        }
      });

    return matchesSearch && matchesCategory && matchesHairConcern && matchesOrigin && matchesCertifications;
  });

  const handleFilterChange = (categoryId, values) => {
    setFilters(prev => ({
      ...prev,
      [categoryId]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const handleViewDetails = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIngredient(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Ingredient Library
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the science behind our premium ingredients. Every component in our formulations 
              is carefully selected, ethically sourced, and rigorously tested for purity and potency.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Search"
                iconPosition="left"
                className="bg-golden-gradient hover:opacity-90"
              >
                Explore Ingredients
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
              >
                Learn About Sourcing
              </Button>
            </div> */}
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-organic transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-secondary text-secondary-foreground shadow-subtle'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={20} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {activeTab === 'library' && (
            <>
              {/* Search and Filter Section */}
              <div className="mb-12">
                <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                  {/* Filter Panel */}
                  {/* <div className="lg:col-span-1">
                    <FilterPanel
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onClearFilters={handleClearFilters}
                      isOpen={isFilterOpen}
                      onToggle={() => setIsFilterOpen(!isFilterOpen)}
                    />
                  </div> */}

                  {/* Search and Results */}
                  <div className="lg:col-span-4">
                    {/* Search Bar */}
                    {/* <div className="mb-8">
                      <Input
                        type="search"
                        placeholder="Search ingredients, benefits, or scientific names..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e?.target?.value)}
                        className="w-full"
                      />
                    </div> */}

                    {/* Results Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground">
                          {filteredIngredients?.length} Ingredients Found
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          Premium ingredients for exceptional hair care
                        </p>
                      </div>
                    </div>

                    {/* Ingredient Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {filteredIngredients?.map((ingredient) => (
                        <IngredientCard
                          key={ingredient?.id}
                          ingredient={ingredient}
                          onViewDetails={handleViewDetails}
                        />
                      ))}
                    </div>

                    {/* No Results */}
                    {filteredIngredients?.length === 0 && (
                      <div className="text-center py-16">
                        <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          No ingredients found
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Try adjusting your search terms or filters
                        </p>
                        <Button
                          variant="outline"
                          onClick={handleClearFilters}
                          iconName="RotateCcw"
                          iconPosition="left"
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'builder' && (
            <div className="max-w-4xl mx-auto">
              <BenefitBuilder />
            </div>
          )}

          {activeTab === 'stories' && (
            <div className="max-w-6xl mx-auto">
              <SourcingStories />
            </div>
          )}

          {activeTab === 'comparison' && (
            <div className="max-w-5xl mx-auto">
              <ComparisonTool />
            </div>
          )}
        </div>
      </main>
      {/* Educational CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
            Ready to Experience Premium Hair Care?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover which of our carefully crafted products contain the ingredients 
            that will transform your hair care routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              variant="default"
              size="lg"
              iconName="Sparkles"
              iconPosition="left"
              className="bg-golden-gradient hover:opacity-90"
            >
              Take Hair Quiz
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              iconName="ShoppingBag"
              iconPosition="left"
              onClick={() => navigate('/signature-collection-premium-product-showcase')}
            >
              Shop Oil
            </Button>
          </div>
        </div>
      </section>
      {/* Ingredient Detail Modal */}
      <IngredientModal
        ingredient={selectedIngredient}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-heading text-2xl font-semibold">IVELLA</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Premium hair care crafted with the finest natural ingredients, 
                ethically sourced and scientifically proven.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/signature-collection-premium-product-showcase" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Product
                </a>
                {/* <a href="/hair-wellness-quiz-personalized-discovery" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hair Quiz
                </a> */}
                <a href="/our-story-brand-heritage-values" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Story
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learn More</h4>
              <div className="space-y-2">
                <a href="/customer-transformations-social-proof-gallery" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Transformations
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hair Care Tips
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sustainability
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {new Date()?.getFullYear()} IVELLA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IngredientLibrary;