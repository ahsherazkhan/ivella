import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/homepage-luxury-beauty-immersive-experience',
      description: 'Discover luxury hair care'
    },
    // { 
    //   name: 'Hair Quiz', 
    //   path: '/hair-wellness-quiz-personalized-discovery',
    //   description: 'Find your perfect ritual'
    // },
    { 
      name: 'Products', 
      path: '/signature-collection-premium-product-showcase',
      description: 'Premium hair care products'
    },
    { 
      name: 'Our Story', 
      path: '/our-story-brand-heritage-values',
      description: 'Brand heritage & values'
    }
  ];

  const moreMenuItems = [
    { 
      name: 'Ingredients', 
      path: '/ingredient-library-transparency-education',
      description: 'Transparency & education'
    },
    { 
      name: 'Transformations', 
      path: '/customer-transformations-social-proof-gallery',
      description: 'Customer success stories'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-subtle' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/homepage-luxury-beauty-immersive-experience"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <span className={`font-heading text-2xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`} style={{ fontSize: '2rem', lineHeight: '1' }}>

                IVELLA
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <a
                key={item?.name}
                href={item?.path}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item?.name}
              </a>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-colors duration-200 font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}>
                <span>More</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-64 bg-popover border border-border rounded-organic shadow-luxury opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {moreMenuItems?.map((item) => (
                    <a
                      key={item?.name}
                      href={item?.path}
                      className="block px-4 py-3 rounded-sm hover:bg-muted transition-colors duration-200"
                    >
                      <div className="font-medium text-foreground">{item?.name}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item?.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Button 
              variant="ghost" 
              iconName="Search" 
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              Search
            </Button>
            <Button 
              variant="outline"
              iconName="ShoppingBag"
              iconPosition="left"
            >
              Cart (0)
            </Button>
            <Button 
              variant="default"
              className="bg-golden-gradient hover:opacity-90"
            >
              Start Quiz
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 transition-colors duration-200 ${
              isScrolled 
                ? 'text-foreground hover:text-primary' 
                : 'text-white/90 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0' :'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation Items */}
            {navigationItems?.map((item) => (
              <a
                key={item?.name}
                href={item?.path}
                onClick={closeMenu}
                className="block py-3 border-b border-border/50 last:border-b-0"
              >
                <div className="font-medium text-foreground">{item?.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{item?.description}</div>
              </a>
            ))}
            
            {/* Mobile More Items */}
            <div className="pt-4 border-t border-border">
              <div className="text-sm font-medium text-muted-foreground mb-3">More</div>
              {moreMenuItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.path}
                  onClick={closeMenu}
                  className="block py-3 border-b border-border/50 last:border-b-0"
                >
                  <div className="font-medium text-foreground">{item?.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item?.description}</div>
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                fullWidth
                iconName="Search"
                iconPosition="left"
              >
                Search Products
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                iconName="ShoppingBag"
                iconPosition="left"
              >
                View Cart (0)
              </Button>
              <Button 
                variant="default" 
                fullWidth
                className="bg-golden-gradient hover:opacity-90"
              >
                Start Hair Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;