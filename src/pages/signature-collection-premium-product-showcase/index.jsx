import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ProductHero from './components/ProductHero';
import RitualGuide from './components/RitualGuide';
import IngredientStory from './components/IngredientStory';
import CustomerReviews from './components/CustomerReviews';
import CompleteRitual from './components/CompleteRitual';
import ExpertEndorsements from './components/ExpertEndorsements';
import StickyCartPreview from './components/StickyCartPreview';

const SignatureCollectionShowcase = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock product data
  const product = {
    id: "triple-nourish-001",
    name: "Triple Nourish Hair Oil",
    description: "Experience the perfect blend of jojoba, rosemary, and castor oils: crafted to strengthen roots, boost shine, and deeply hydrate. A unisex, all-skin-type formula made for everyday nourishment. Infused with pure botanical extracts, this unisex blend nourishes from root to tip, promoting stronger, smoother, more radiant hair.",
    price: 44.99,
    originalPrice: 60,
    rating: 4.8,
    reviewCount: 287,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop&crop=center",
    sizes: [
      { value: "50ml", label: "50ml", price: 44.99, selected: true },
      // { value: "50ml", label: "50ml", price: 129.99, selected: false },
      // { value: "100ml", label: "100ml", price: 199.99, selected: false }
    ],
    benefits: [
      "Promotes visibly healthier, thicker-looking hair",
      "Revives the scalp with natural stimulation",
      "Enhances shine + smoothness with a single treatment",
      "Strengthens roots and supports healthy growth cycles",
      "Doubles as a brow + lash nourishment ritual",
      "Clean, botanical, and ethically crafted"
    ]
  };

  // Mock ritual steps data
  const ritualSteps = [
    {
      title: "Prepare Your Hair",
      description: "Start with clean, towel-dried hair. Gently squeeze out excess water without rubbing to prevent damage and prepare your hair for optimal oil absorption.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop&crop=center",
      duration: "2-3 minutes",
      tips: "Use a microfiber towel to reduce friction and prevent hair breakage while drying."
    },
    {
      title: "Warm the Oil",
      description: "Place 3-5 drops of the elixir in your palms and rub them together to warm the oil. This activates the botanical ingredients and ensures even distribution.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center",
      duration: "30 seconds",
      tips: "The warmth helps the oil penetrate deeper into the hair shaft for maximum nourishment."
    },
    {
      title: "Apply to Mid-Lengths",
      description: "Starting from the mid-lengths of your hair, gently work the oil through to the ends. Avoid the roots to prevent weighing down your hair.",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop&crop=center",
      duration: "2-3 minutes",
      tips: "Use a wide-tooth comb to ensure even distribution and prevent tangles."
    },
    {
      title: "Massage and Style",
      description: "Gently massage the oil into your hair, then style as desired. The elixir provides heat protection and enhances your hair's natural texture.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&crop=center",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop&crop=center",
      duration: "5-10 minutes",
      tips: "For overnight treatment, apply more generously and braid hair to prevent pillow staining."
    }
  ];

  // Mock ingredients data
  const ingredients = [
    {
      name: "Rosemary Extract",
      origin: "Mediterranean Region",
      concentration: "Premium Extract",
      primaryBenefit: "The Awakener",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?w=200&h=200&fit=crop&crop=center",
      sourcingStory: "Known for centuries to revive the scalp, energize follicles, and promote balanced renewal. Our rosemary extract is carefully sourced and cold-extracted to preserve its potent properties. Its scent alone signals purity and clarity, awakening both your senses and your hair's natural vitality.",
      sustainability: "Organic Certified",
      benefits: [
        "Revives scalp with natural stimulation",
        "Energizes dormant hair follicles",
        "Promotes balanced renewal and growth",
        "Provides antioxidant protection"
      ],
      research: "Studies demonstrate rosemary's ability to support scalp health and promote hair growth through improved circulation and follicle stimulation.",
      harvestingProcess: [
        "Hand-selected from organic farms",
        "Cold-extracted to preserve actives",
        "Pharmaceutical-grade processing"
      ],
      certifications: ["Organic", "100% Natural", "Cruelty-Free"]
    },
    {
      name: "Jojoba Oil",
      origin: "Sonoran Desert",
      concentration: "First Cold Pressed",
      primaryBenefit: "The Natural Harmonizer",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?w=200&h=200&fit=crop&crop=center",
      sourcingStory: "Closest to the skin's natural sebum, jojoba oil brings equilibrium, softness, and a natural glow without heaviness. Harvested from drought-resistant jojoba shrubs, this liquid wax closely mimics your hair's natural oils, creating perfect harmony between moisture and texture.",
      sustainability: "First Cold Pressed",
      benefits: [
        "Mimics natural sebum for perfect balance",
        "Lightweight, non-greasy absorption",
        "Provides long-lasting moisture",
        "Suitable for all hair and skin types"
      ],
      research: "Jojoba's unique molecular structure allows for superior absorption without weighing hair down, making it ideal for all hair types.",
      harvestingProcess: [
        "Sustainably harvested from organic sources",
        "First cold-pressed extraction",
        "Pharmaceutical-grade refinement"
      ],
      certifications: ["Organic", "100% Natural", "First Cold Pressed"]
    },
    {
      name: "Castor Oil",
      origin: "Ethically Sourced",
      concentration: "Pure Extract",
      primaryBenefit: "The Strength Builder",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?w=200&h=200&fit=crop&crop=center",
      sourcingStory: "Rich, potent, deeply fortifying. Castor oil encourages stronger roots, thicker strands, and nourished skin. This powerful botanical has been used for generations to support hair growth and strength, making it the perfect foundation for our Triple Nourish System.",
      sustainability: "100% Natural",
      benefits: [
        "Strengthens hair roots and follicles",
        "Supports healthy growth cycles",
        "Deeply nourishes and fortifies",
        "Promotes thicker, stronger strands"
      ],
      research: "Castor oil's high ricinoleic acid content has been shown to support hair growth and improve hair strength when used consistently.",
      harvestingProcess: [
        "Ethically sourced from trusted partners",
        "Cold-pressed to preserve nutrients",
        "Pure, unrefined extraction"
      ],
      certifications: ["100% Natural", "Organic", "Cruelty-Free"]
    },
  ];

  // Mock customer reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      hairType: "Curly, Color-treated",
      rating: 5,
      date: "2 weeks ago",
      title: "Transformed my damaged hair!",
      content: "I\'ve been using this elixir for 3 months now and the transformation is incredible. My hair went from dry and brittle to soft and manageable. The scent is divine and a little goes a long way. Worth every penny!",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      verified: true,
      helpful: 24,
      usageDuration: "3 months",
      images: [
        "/assets/new.jpg",
      ]
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      hairType: "Straight, Fine",
      rating: 5,
      date: "1 week ago",
      title: "Perfect for fine hair",
      content: "I was hesitant to try hair oil because my hair is fine and gets greasy easily. This elixir is different - it absorbs completely and leaves my hair silky without any weight. My stylist noticed the difference immediately.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      verified: true,
      helpful: 18,
      usageDuration: "6 weeks",
      images: []
    },
    {
      id: 3,
      name: "Jennifer Chen",
      hairType: "Wavy, Thick",
      rating: 4,
      date: "3 days ago",
      title: "Great results, love the packaging",
      content: "The oil works wonderfully for taming frizz and adding shine. The packaging is beautiful and feels luxurious. Only wish it came in a larger size option for the price point.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      verified: true,
      helpful: 12,
      usageDuration: "2 months",
      // images: [
      //   "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&crop=center"
      // ]
    },
    {
      id: 4,
      name: "Amanda Thompson",
      hairType: "Coily, Natural",
      rating: 5,
      date: "5 days ago",
      title: "Holy grail for natural hair",
      content: "This is hands down the best hair oil I've ever used. It penetrates my coily hair beautifully and keeps it moisturized for days. The ingredients are top-notch and you can feel the quality.",
      avatar: "https://randomuser.me/api/portraits/women/38.jpg",
      verified: true,
      helpful: 31,
      usageDuration: "4 months",
      images: []
    },
    {
      id: 5,
      name: "Lisa Park",
      hairType: "Straight, Damaged",
      rating: 5,
      date: "1 month ago",
      title: "Saved my over-processed hair",
      content: "After years of bleaching and heat styling, my hair was in terrible condition. This elixir has been a game-changer. My hair is stronger, shinier, and actually growing again. I'm a customer for life!",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      verified: true,
      helpful: 27,
      usageDuration: "5 months",
      // images: [
      //   "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&crop=center"
      // ]
    },
    {
      id: 6,
      name: "Rachel Green",
      hairType: "Wavy, Color-treated",
      rating: 4,
      date: "2 weeks ago",
      title: "Excellent quality, noticeable results",
      content: "I've tried many hair oils and this one stands out. The texture is perfect - not too thick or thin. It's helped reduce my frizz significantly and my color looks more vibrant. Definitely recommend!",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      verified: true,
      helpful: 15,
      usageDuration: "7 weeks",
      images: []
    }
  ];

  // Mock complementary products data
  const complementaryProducts = [
    {
      id: "shampoo-001",
      name: "Nourishing Cleanse Shampoo",
      description: "Sulfate-free shampoo that gently cleanses while preserving natural oils",
      price: 45.99,
      originalPrice: 55.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      category: "Cleanse",
      rating: 4.7,
      reviews: 156,
      badge: "Bestseller",
      keyBenefits: ["Sulfate-free", "Color-safe", "Moisturizing"]
    },
    {
      id: "conditioner-001",
      name: "Intensive Repair Conditioner",
      description: "Deep conditioning treatment that restores damaged hair cuticles",
      price: 48.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center",
      category: "Condition",
      rating: 4.8,
      reviews: 203,
      keyBenefits: ["Protein-rich", "Strengthening", "Detangling"]
    },
    {
      id: "mask-001",
      name: "Weekly Revival Hair Mask",
      description: "Intensive weekly treatment for deeply damaged and chemically processed hair",
      price: 65.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center",
      category: "Treatment",
      rating: 4.9,
      reviews: 89,
      badge: "New",
      keyBenefits: ["Weekly use", "Intensive repair", "Salon-quality"]
    },
    {
      id: "serum-001",
      name: "Shine & Protect Serum",
      description: "Lightweight serum that adds shine and protects against heat damage",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
      category: "Style",
      rating: 4.6,
      reviews: 124,
      keyBenefits: ["Heat protection", "Shine enhancing", "Lightweight"]
    }
  ];

  // Mock tools data
  const tools = [
    {
      id: "comb-001",
      name: "Wide-Tooth Detangling Comb",
      description: "Gentle detangling for wet hair",
      price: 24.99,
      image: "https://images.pixabay.com/photo/2016/03/05/19/02/comb-1238322_1280.jpg?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: "brush-001",
      name: "Boar Bristle Brush",
      description: "Distributes natural oils evenly",
      price: 49.99,
      image: "https://images.pixabay.com/photo/2017/08/06/12/06/people-2592247_1280.jpg?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: "towel-001",
      name: "Microfiber Hair Towel",
      description: "Reduces frizz and breakage",
      price: 19.99,
      image: "https://images.pixabay.com/photo/2020/02/06/20/01/spa-4825173_1280.jpg?w=200&h=200&fit=crop&crop=center"
    }
  ];

  // Mock expert endorsements data
  const endorsements = [
    {
      name: "Dr. Sarah Williams",
      title: "Board-Certified Dermatologist",
      category: "Dermatologist",
      location: "Beverly Hills, CA",
      experience: "15+ years",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
      quote: "As a dermatologist specializing in hair and scalp health, I'm impressed by IVELLA's commitment to ingredient purity and scientific formulation. The Triple Nourish Hair Oil contains the optimal blend of rosemary, jojoba, and castor oils that I look for in premium hair care products. The pharmaceutical-grade compounding and botanical wisdom create a truly effective formula.",
      shortQuote: "The optimal concentration of essential fatty acids makes this exceptional for hair repair.",
      credentials: ["MD Dermatology", "American Board Certified", "Hair Restoration Specialist"],
      notableWork: "Featured expert on Good Morning America, author of 'Healthy Hair Science'"
    },
    {
      name: "Marcus Johnson",
      title: "Celebrity Hair Stylist",
      category: "Celebrity Stylist",
      location: "New York, NY",
      experience: "12+ years",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "I've worked with A-list celebrities for over a decade, and finding products that deliver consistent, camera-ready results is crucial. IVELLA's Triple Nourish Hair Oil has become an essential in my kit. It transforms hair texture instantly while providing lasting nourishment. My clients love how their hair feels and looks, both on set and in their daily lives.",
      shortQuote: "An essential in my celebrity styling kit - delivers instant, camera-ready results.",
      credentials: ["Celebrity Stylist", "Fashion Week Expert", "Red Carpet Specialist"],
      notableWork: "Styled for Met Gala, Oscars, and major fashion campaigns"
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Certified Trichologist",
      category: "Trichologist",
      location: "Miami, FL",
      experience: "10+ years",
      photo: "https://randomuser.me/api/portraits/women/40.jpg",
      quote: "From a trichological perspective, the ingredient synergy in this formula is remarkable. The combination of rosemary extract, jojoba oil, and castor oil creates an optimal environment for hair follicle health and cuticle repair. The Triple Nourish System—awakening, harmonizing, and strengthening—works beautifully together. I've observed significant improvements in hair strength and growth patterns among my clients who use this product consistently.",
      shortQuote: "Remarkable ingredient synergy that promotes optimal hair follicle health.",
      credentials: ["Certified Trichologist", "Hair Loss Specialist", "Scalp Health Expert"],
      notableWork: "Published researcher in Journal of Cosmetic Dermatology"
    },
    {
      name: "Isabella Chen",
      title: "Beauty Editor & Influencer",
      category: "Beauty Expert",
      location: "Los Angeles, CA",
      experience: "8+ years",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
      quote: "In my years of testing luxury beauty products, IVELLA stands out for its authentic commitment to quality. This isn't just marketing - the results speak for themselves. My followers consistently ask about my hair routine, and this elixir is always part of my recommendation. It's become my holy grail hair product.",
      shortQuote: "My holy grail hair product - the results truly speak for themselves.",
      credentials: ["Beauty Editor", "Luxury Product Specialist", "Brand Consultant"],
      notableWork: "500K+ social media following, featured in Vogue and Harper's Bazaar"
    }
  ];

  const handleAddToCart = (item) => {
    console.log('Added to cart:', item);
    // Handle cart functionality
  };

  const handleSubscribe = () => {
    console.log('Subscribe clicked');
    // Handle subscription functionality
  };

  const handleViewCart = () => {
    console.log('View cart clicked');
    // Handle view cart functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <ProductHero 
          product={product}
          onAddToCart={handleAddToCart}
          onSubscribe={handleSubscribe}
        />
        
        {/* <RitualGuide ritualSteps={ritualSteps} /> */}
        
        <IngredientStory ingredients={ingredients} />
        
        <CustomerReviews 
          reviews={reviews}
          averageRating={4.8}
          totalReviews={6}
        />
        
        {/* <ExpertEndorsements endorsements={endorsements} /> */}
        
        {/* <CompleteRitual 
          currentProduct={product}
          complementaryProducts={complementaryProducts}
          tools={tools}
        /> */}
      </main>
    </div>
  );
};

export default SignatureCollectionShowcase;