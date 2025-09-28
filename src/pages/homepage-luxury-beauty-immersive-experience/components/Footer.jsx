import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Discover",
      links: [
        // { name: "Hair Wellness Quiz", href: "/hair-wellness-quiz-personalized-discovery" },
        { name: "Signature Collection", href: "/signature-collection-premium-product-showcase" },
        { name: "Ingredient Library", href: "/ingredient-library-transparency-education" },
        // { name: "Customer Stories", href: "/customer-transformations-social-proof-gallery" }
      ]
    },
    // {
    //   title: "Learn",
    //   links: [
    //     { name: "Our Story", href: "/our-story-brand-heritage-values" },
    //     { name: "Hair Care Guides", href: "#" },
    //     { name: "Ritual Tutorials", href: "#" },
    //     { name: "Sustainability", href: "#" }
    //   ]
    // },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Shipping & Returns", href: "#" },
        // { name: "Size Guide", href: "#" }
      ]
    },
    // {
    //   title: "Account",
    //   links: [
    //     { name: "My Account", href: "#" },
    //     { name: "Order Tracking", href: "#" },
    //     { name: "Wishlist", href: "#" },
    //     { name: "Rewards Program", href: "#" }
    //   ]
    // }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", href: "#", color: "#6B7280" },
    { name: "Facebook", icon: "Facebook", href: "#", color: "#6B7280" },
    { name: "YouTube", icon: "Youtube", href: "#", color: "#6B7280" },
    { name: "TikTok", icon: "Music", href: "#", color: "#6B7280" },
    { name: "Pinterest", icon: "Pin", href: "#", color: "#6B7280" }
  ];

  const paymentMethods = [
    { name: "Visa", icon: "CreditCard" },
    { name: "Mastercard", icon: "CreditCard" },
    // { name: "American Express", icon: "CreditCard" },
    { name: "PayPal", icon: "Wallet" },
    { name: "Apple Pay", icon: "Smartphone" },
    { name: "Google Pay", icon: "Smartphone" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      {/* <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                Join the Ivella Community
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Be the first to discover new products, exclusive rituals, and hair wellness tips. 
                Plus, get 15% off your first order when you subscribe.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-organic bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <Button
                  variant="default"
                  className="bg-golden-gradient hover:opacity-90 text-black px-8"
                  iconName="Send"
                  iconPosition="right"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Icon name="Shield" size={16} />
                <span>We respect your privacy. Unsubscribe at any time.</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-golden-gradient rounded-full flex items-center justify-center">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-white"
                >
                  <path 
                    d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6 1 1 2 2 3 4 1-2 2-3 3-4 1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6z" 
                    fill="currentColor"
                  />
                  <circle cx="12" cy="8" r="2" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
              <span className="font-heading text-3xl font-semibold">
                Ivella Luxe
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Where ancient wisdom meets modern luxury. Transform your hair care routine 
              into meaningful rituals of self-love with our premium natural ingredients.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h4 className="font-semibold text-lg mb-6">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-primary-foreground/70">
                © {currentYear} Ivella Luxe. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-2 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground/80">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground/80">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground/80">
                  Cookie Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground/80">
                  Accessibility
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center lg:items-end">
              <p className="text-primary-foreground/70 text-sm mb-3">Secure Payment Methods</p>
              <div className="flex gap-3">
                {paymentMethods?.map((method) => (
                  <div
                    key={method?.name}
                    className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center"
                    title={method?.name}
                  >
                    <Icon name={method?.icon} size={16} className="text-primary-foreground/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trust Badges */}
      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={16} />
              <span className="text-sm">Free Shipping $75+</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="RotateCcw" size={16} />
              <span className="text-sm">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" size={16} />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} />
              <span className="text-sm">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;