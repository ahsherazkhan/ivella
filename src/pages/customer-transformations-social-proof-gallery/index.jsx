import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TransformationCard from './components/TransformationCard';
import FilterBar from './components/FilterBar';
import TransformationModal from './components/TransformationModal';
import FeaturedTransformation from './components/FeaturedTransformation';
import CommunitySpotlight from './components/CommunitySpotlight';
import SubmissionPortal from './components/SubmissionPortal';
import ExpertCommentary from './components/ExpertCommentary';

const CustomerTransformationsGallery = () => {
  const [filters, setFilters] = useState({
    hairType: 'all',
    concern: 'all',
    timeframe: 'all'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTransformation, setSelectedTransformation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  // Mock transformations data
  const transformations = [
    {
      id: 1,
      customerName: "Sarah Chen",
      customerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      location: "San Francisco, CA",
      hairType: "Wavy",
      concerns: ["Dryness", "Frizz Control"],
      timeframe: "3 Months",
      rating: 5,
      beforeImage: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=400&h=300&fit=crop",
      testimonial: "I've struggled with dry, frizzy hair for years. After using Ivella's Nourishing Hair Oil consistently for 3 months, my hair feels completely transformed.",
      fullTestimonial: `I've struggled with dry, frizzy hair for years, trying countless products that promised miracles but delivered disappointment. When I discovered Ivella, I was skeptical but desperate. After using the Nourishing Hair Oil consistently for 3 months, my hair feels completely transformed. The dryness is gone, the frizz is manageable, and I actually look forward to styling my hair now. The oil doesn't weigh my hair down, and the natural ingredients make me feel good about what I'm putting on my scalp. This has been a game-changer for my confidence and daily routine.`,
      productsUsed: ["Nourishing Hair Oil", "Scalp Revival Serum"],
      routine: "Applied the oil to damp hair 3 times a week, focusing on mid-lengths and ends. Used the scalp serum twice weekly for overall hair health.",
      keyResults: ["90% less frizz", "Improved shine", "Softer texture", "Easier styling"],
      featuredQuote: "This has been a game-changer for my confidence and daily routine."
    },
    {
      id: 2,
      customerName: "Maria Rodriguez",
      customerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Miami, FL",
      hairType: "Curly",
      concerns: ["Damage", "Scalp Health"],
      timeframe: "6+ Months",
      rating: 5,
      beforeImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=300&fit=crop",
      testimonial: "After years of chemical treatments, my curls were damaged and lifeless. Ivella brought them back to life with natural ingredients I can trust.",
      fullTestimonial: `After years of chemical treatments and heat styling, my curls were damaged and lifeless. I had almost given up on having healthy hair again when a friend recommended Ivella. The Intensive Repair Mask became my weekly ritual, and the Daily Ritual Oil helped restore moisture without weighing down my curls. Six months later, my hair has bounce, definition, and health I haven't seen in years. The natural ingredients give me peace of mind, and the results speak for themselves.`,
      productsUsed: ["Intensive Repair Mask", "Daily Ritual Oil", "Protective Hair Mist"],
      routine: "Weekly deep conditioning with the repair mask, daily oil application to damp hair, and protective mist before heat styling.",
      keyResults: ["Restored curl pattern", "Reduced breakage", "Improved scalp health", "Natural shine"]
    },
    {
      id: 3,
      customerName: "Jennifer Kim",
      customerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      location: "Seattle, WA",
      hairType: "Straight",
      concerns: ["Thinning Hair", "Hair Growth"],
      timeframe: "1 Month",
      rating: 4,
      beforeImage: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=400&h=300&fit=crop",
      testimonial: "I noticed new baby hairs growing within just one month of using the Growth Stimulating Oil. My scalp feels healthier too.",
      fullTestimonial: `I was experiencing postpartum hair loss and was devastated by how thin my hair had become. The Growth Stimulating Oil caught my attention because of its natural ingredients and positive reviews. Within just one month of consistent use, I noticed new baby hairs growing along my hairline. My scalp feels healthier, less irritated, and I'm optimistic about continued improvement. While it's still early in my journey, the initial results give me hope.`,
      productsUsed: ["Growth Stimulating Oil", "Scalp Revival Serum"],
      routine: "Massaged growth oil into scalp every other night, used scalp serum on alternate days for comprehensive care.",
      keyResults: ["New hair growth", "Healthier scalp", "Reduced irritation", "Increased confidence"]
    },
    {
      id: 4,
      customerName: "Ashley Thompson",
      customerAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      location: "Austin, TX",
      hairType: "Coily",
      concerns: ["Dryness", "Damage"],
      timeframe: "2 Weeks",
      rating: 5,
      beforeImage: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg?w=400&h=300&fit=crop",
      testimonial: "Even after just 2 weeks, my coily hair feels more moisturized and manageable. The natural oils blend perfectly with my hair texture.",
      fullTestimonial: `As someone with 4C hair, finding products that truly understand my hair's needs has been a lifelong challenge. Ivella's Nourishing Hair Oil changed everything in just 2 weeks. The blend of natural oils penetrates my hair shaft without leaving a greasy residue. My wash days are easier, my hair retains moisture longer, and the definition in my coils is incredible. This is the first product that makes me excited about my natural texture.`,
      productsUsed: ["Nourishing Hair Oil", "Intensive Repair Mask"],
      routine: "Pre-shampoo oil treatment twice weekly, followed by the repair mask for deep conditioning.",
      keyResults: ["Better moisture retention", "Improved coil definition", "Easier detangling", "Enhanced natural texture"]
    },
    {
      id: 5,
      customerName: "Rachel Green",
      customerAvatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      location: "Denver, CO",
      hairType: "Wavy",
      concerns: ["Frizz Control", "Scalp Health"],
      timeframe: "3 Months",
      rating: 5,
      beforeImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1181471/pexels-photo-1181471.jpeg?w=400&h=300&fit=crop",
      testimonial: "My waves are now defined and frizz-free. The scalp serum also helped with the itchiness I was experiencing.",
      fullTestimonial: `Living in Denver's dry climate wreaked havoc on my wavy hair and sensitive scalp. I was dealing with constant frizz and scalp irritation that made me self-conscious. The combination of Ivella's Daily Ritual Oil and Scalp Revival Serum has been transformative. After 3 months, my waves are defined, bouncy, and frizz-free even on humid days. The scalp serum eliminated the itchiness and flaking I struggled with for years. I finally have a routine that works with my hair, not against it.`,
      productsUsed: ["Daily Ritual Oil", "Scalp Revival Serum", "Protective Hair Mist"],
      routine: "Daily oil application to damp hair, scalp serum 3 times weekly, protective mist before outdoor activities.",
      keyResults: ["Defined waves", "Eliminated scalp irritation", "Frizz-free results", "Climate protection"]
    },
    {
      id: 6,
      customerName: "Priya Patel",
      customerAvatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=150&h=150&fit=crop&crop=face",
      location: "New York, NY",
      hairType: "Straight",
      concerns: ["Damage", "Hair Growth"],
      timeframe: "6+ Months",
      rating: 5,
      beforeImage: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=400&h=300&fit=crop",
      afterImage: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=400&h=300&fit=crop",
      testimonial: "Six months with Ivella has completely restored my over-processed hair. The growth I\'ve seen is remarkable.",
      fullTestimonial: `Years of bleaching and heat styling left my hair severely damaged and breaking constantly. I was considering cutting it all off when I discovered Ivella's repair system. Six months of consistent use with the Intensive Repair Mask and Growth Stimulating Oil has completely transformed my hair. The breakage stopped, my hair grew several inches, and the texture is healthier than it's been in years. The natural ingredients gave my hair the gentle care it needed to heal and thrive.`,
      productsUsed: ["Intensive Repair Mask", "Growth Stimulating Oil", "Nourishing Hair Oil"],
      routine: "Weekly repair mask treatments, growth oil massages 4 times weekly, daily nourishing oil on ends.",
      keyResults: ["Stopped breakage", "Significant growth", "Restored texture", "Healthy shine"]
    }
  ];

  // Mock community spotlight data
  const spotlightCustomers = [
    {
      id: 1,
      name: "Emma Wilson",
      socialHandle: "emmawilson_hair",
      followers: "12.5K",
      achievement: "Brand Ambassador",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      recentPost: {
        image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=300&h=300&fit=crop",
        caption: "6 months with @ivellaluxe and my hair has never been healthier! The Nourishing Hair Oil is my holy grail. #IvellaRitual #HairTransformation",
        likes: "1.2K",
        comments: "89",
        shares: "34"
      }
    },
    {
      id: 2,
      name: "Zoe Martinez",
      socialHandle: "curlygirl_zoe",
      followers: "8.3K",
      achievement: "Top Reviewer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      recentPost: {
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=300&h=300&fit=crop",
        caption: "Curly hair girls, this is IT! My curls have never been more defined and healthy. Thank you @ivellaluxe for creating products that actually work! #CurlyHair #IvellaRitual",
        likes: "856",
        comments: "67",
        shares: "23"
      }
    },
    {
      id: 3,
      name: "Aisha Johnson",
      socialHandle: "naturalhairaisha",
      followers: "15.7K",
      achievement: "Community Leader",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      recentPost: {
        image: "https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg?w=300&h=300&fit=crop",
        caption: "Natural hair journey update: 4 months with @ivellaluxe products and my 4C hair is thriving! The moisture retention is incredible. #NaturalHair #IvellaRitual #HairGrowth",
        likes: "2.1K",
        comments: "156",
        shares: "78"
      }
    }
  ];

  // Mock expert commentary data
  const experts = [
    {
      id: 1,
      name: "Dr. Amanda Foster",
      title: "Certified Trichologist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      experience: 15,
      location: "Beverly Hills, CA",
      clientsServed: "5000",
      specializations: ["Hair Loss", "Scalp Health", "Natural Hair Care"],
      commentary: "The transformations I see in this gallery demonstrate the power of consistent, quality hair care. Ivella's natural ingredient approach aligns with what I recommend to my clients - gentle, nourishing formulations that work with your hair's natural structure rather than against it.",
      keyPoints: [
        "Natural oils penetrate the hair shaft more effectively than synthetic alternatives",
        "Consistent application is key to seeing lasting results",
        "Scalp health directly impacts hair quality and growth",
        "Individual results vary based on hair type and damage level"
      ],
      recommendedProducts: ["Nourishing Hair Oil", "Scalp Revival Serum"],
      proTip: "Apply hair oils to damp hair for better absorption and distribution. The water helps carry the nutrients deeper into the hair shaft."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Master Hair Stylist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      experience: 12,
      location: "New York, NY",
      clientsServed: "3500",
      specializations: ["Color Correction", "Texture Repair", "Styling"],
      commentary: "As a stylist who works with damaged hair daily, I'm impressed by the repair results I see from clients using Ivella products. The natural approach to hair restoration is not only effective but also sustainable for long-term hair health.",
      keyPoints: [
        "Heat protection is crucial for maintaining transformation results",
        "Regular trims complement the repair process",
        "Natural ingredients reduce the risk of further damage",
        "Professional guidance enhances at-home care results"
      ],
      recommendedProducts: ["Intensive Repair Mask", "Protective Hair Mist"],
      proTip: "Use a wide-tooth comb on damp, oil-treated hair to minimize breakage while detangling. Always start from the ends and work your way up."
    }
  ];

  // Filter transformations based on active filters
  const filteredTransformations = transformations?.filter(transformation => {
    if (filters?.hairType !== 'all' && transformation?.hairType?.toLowerCase() !== filters?.hairType) {
      return false;
    }
    if (filters?.concern !== 'all' && !transformation?.concerns?.some(concern => 
      concern?.toLowerCase()?.includes(filters?.concern?.replace('-', ' ')))) {
      return false;
    }
    if (filters?.timeframe !== 'all' && transformation?.timeframe !== filters?.timeframe?.replace('-', ' ')) {
      return false;
    }
    return true;
  });

  // Get featured transformation (first one for demo)
  const featuredTransformation = transformations?.[0];

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setVisibleCount(9); // Reset visible count when filters change
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      hairType: 'all',
      concern: 'all',
      timeframe: 'all'
    });
    setVisibleCount(9);
  };

  // Count active filters
  const activeFiltersCount = Object.values(filters)?.filter(value => value !== 'all')?.length;

  // Handle view mode toggle
  const handleToggleView = (mode) => {
    setViewMode(mode);
  };

  // Handle transformation details
  const handleViewDetails = (transformation) => {
    setSelectedTransformation(transformation);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransformation(null);
  };

  // Load more transformations
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-6xl font-semibold text-foreground mb-6">
              Real Stories, Real
              <span className="text-primary"> Transformations</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover authentic hair transformation journeys from our community. 
              See how Ivella's natural luxury has helped women embrace their most beautiful hair.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-golden-gradient hover:opacity-90"
                iconName="Sparkles"
                iconPosition="left"
              >
                Share Your Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                Watch Video Stories
              </Button>
            </div> */}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-semibold text-primary mb-2">
                2,500+
              </div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-semibold text-primary mb-2">
                98%
              </div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-semibold text-primary mb-2">
                4.9/5
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-semibold text-primary mb-2">
                90%
              </div>
              <p className="text-muted-foreground">See Results in 30 Days</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Transformation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Featured Transformation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This month's spotlight story showcases an incredible hair journey 
              that embodies the Ivella transformation experience.
            </p>
          </div>
          
          <FeaturedTransformation 
            transformation={featuredTransformation}
            onViewDetails={handleViewDetails}
          />
        </div>
      </section>
      {/* Filter and Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Transformation Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through hundreds of authentic before and after photos. 
              Filter by hair type and concerns to find stories that match your journey.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mb-8">
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              activeFiltersCount={activeFiltersCount}
              onToggleView={handleToggleView}
              viewMode={viewMode}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {Math.min(visibleCount, filteredTransformations?.length)} of {filteredTransformations?.length} transformations
            </p>
          </div>

          {/* Transformations Grid */}
          <div className={`grid gap-6 mb-12 ${
            viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredTransformations?.slice(0, visibleCount)?.map((transformation) => (
              <TransformationCard
                key={transformation?.id}
                transformation={transformation}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredTransformations?.length && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
                iconName="ChevronDown"
                iconPosition="right"
              >
                Load More Stories ({filteredTransformations?.length - visibleCount} remaining)
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredTransformations?.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                No transformations found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results.
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
      </section>
      {/* Community Spotlight */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CommunitySpotlight spotlightCustomers={spotlightCustomers} />
        </div>
      </section> */}
      {/* Expert Commentary */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ExpertCommentary experts={experts} />
        </div>
      </section> */}
      {/* Submission Portal */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SubmissionPortal />
        </div>
      </section> */}
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Ready to Start Your Own Transformation?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Join thousands of women who've discovered their most beautiful hair with Ivella's 
            natural luxury hair care collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              variant="default"
              size="lg"
              className="bg-golden-gradient hover:opacity-90"
              iconName="Sparkles"
              iconPosition="left"
            >
              Take Hair Quiz
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              iconName="ShoppingBag"
              iconPosition="left"
            >
              Shop Product
            </Button>
          </div>
        </div>
      </section>
      {/* Transformation Modal */}
      <TransformationModal
        transformation={selectedTransformation}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-heading text-2xl font-semibold">IVELLA</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Luxury hair care crafted with nature's finest ingredients for your most beautiful hair transformation.
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/homepage-luxury-beauty-immersive-experience" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="/signature-collection-premium-product-showcase" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Product</a></li>
                {/* <li><a href="/hair-wellness-quiz-personalized-discovery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Hair Quiz</a></li> */}
                <li><a href="/our-story-brand-heritage-values" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Story</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a></li>
              </ul>
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

export default CustomerTransformationsGallery;