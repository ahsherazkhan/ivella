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
    id: "argan-elixir-001",
    name: "IVELLA Signature Oil",
    description: "A luxurious blend of cold-pressed IVELLA Signature Oil and botanical extracts, designed to nourish, strengthen, and restore your hair's natural radiance. This premium elixir transforms dry, damaged hair into silky, manageable locks with a healthy shine.",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewCount: 287,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop&crop=center",
    sizes: [
      { value: "30ml", label: "30ml", price: 89.99, selected: true },
      // { value: "50ml", label: "50ml", price: 129.99, selected: false },
      // { value: "100ml", label: "100ml", price: 199.99, selected: false }
    ],
    benefits: [
      "Deep nourishment for all hair types",
      "Reduces frizz and flyaways",
      "Strengthens damaged hair",
      "Adds natural shine and softness",
      "Heat protection up to 450°F",
      "Suitable for color-treated hair"
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
      name: "IVELLA Signature Oil",
      origin: "Atlas Mountains, Morocco",
      concentration: "45%",
      primaryBenefit: "Deep Nourishment",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?w=200&h=200&fit=crop&crop=center",
      sourcingStory: "Our IVELLA Signature Oil is cold-pressed by women's cooperatives in the Atlas Mountains, supporting local communities while ensuring the highest quality. Each tree is hand-selected, and the kernels are cracked using traditional methods passed down through generations.",
      sustainability: "Fair Trade Certified",
      benefits: [
        "Rich in Vitamin E and essential fatty acids",
        "Penetrates deeply to repair damaged hair cuticles",
        "Provides long-lasting moisture without greasiness",
        "Protects against environmental damage and UV rays"
      ],
      research: "Clinical studies show 89% improvement in hair softness and 76% reduction in breakage after 4 weeks of use.",
      harvestingProcess: [
        "Hand-picked from century-old trees",
        "Sun-dried using traditional methods",
        "Cold-pressed to preserve nutrients"
      ],
      certifications: ["Organic", "Fair Trade", "Cruelty-Free"]
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
      quote: "As a dermatologist specializing in hair and scalp health, I'm impressed by IVELLA's commitment to ingredient purity and scientific formulation. The Moroccan Argan Elixir contains the optimal concentration of essential fatty acids and antioxidants that I look for in premium hair care products. I regularly recommend it to patients with damaged or chemically-treated hair.",
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
      quote: "I've worked with A-list celebrities for over a decade, and finding products that deliver consistent, camera-ready results is crucial. IVELLA's Argan Elixir has become an essential in my kit. It transforms hair texture instantly while providing lasting nourishment. My clients love how their hair feels and looks, both on set and in their daily lives.",
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
      quote: "From a trichological perspective, the ingredient synergy in this elixir is remarkable. The combination of argan oil, jojoba, and rosehip creates an optimal environment for hair follicle health and cuticle repair. I've observed significant improvements in hair strength and growth patterns among my clients who use this product consistently.",
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