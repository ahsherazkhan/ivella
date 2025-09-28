import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { redirectToInstagram } from '../../../utils/instagramRedirect';

const StickyCartPreview = ({ product, onAddToCart, onViewCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky cart when user scrolls past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      quantity: 1
    };
    
    setCartItems([...cartItems, newItem]);
    onAddToCart(newItem);
  };

  const getTotalPrice = () => {
    return cartItems?.reduce((total, item) => total + (item?.price * item?.quantity), 0)?.toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems?.reduce((total, item) => total + item?.quantity, 0);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Cart */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
        <div className="px-4 py-3">
          {!isExpanded ? (
            // Collapsed State
            (<div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{product?.name}</h4>
                  <p className="text-sm text-muted-foreground">${product?.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {cartItems?.length > 0 && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="relative p-2 text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="ShoppingBag" size={20} />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  </button>
                )}
                
                <Button
                  variant="default"
                  onClick={() => redirectToInstagram()}
                  className="bg-golden-gradient hover:opacity-90 px-6"
                >
                  Buy Now
                </Button>
              </div>
            </div>)
          ) : (
            // Expanded State
            (<div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground">Cart ({getTotalItems()} items)</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              <div className="max-h-40 overflow-y-auto space-y-3">
                {cartItems?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-muted/30 rounded-lg p-3">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">{item?.name}</h4>
                      <p className="text-xs text-muted-foreground">Qty: {item?.quantity}</p>
                    </div>
                    <span className="font-medium text-foreground text-sm">
                      ${(item?.price * item?.quantity)?.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">Total:</span>
                  <span className="font-semibold text-foreground text-lg">${getTotalPrice()}</span>
                </div>
                
                {/* <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={onViewCart}
                    className="flex-1"
                  >
                    View Cart
                  </Button>
                  <Button
                    variant="default"
                    className="flex-1 bg-golden-gradient hover:opacity-90"
                  >
                    Checkout
                  </Button>
                </div> */}
              </div>
            </div>)
          )}
        </div>
      </div>
      {/* Desktop Sticky Cart */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <div className="bg-card border border-border rounded-organic shadow-luxury p-4 w-80">
          {cartItems?.length === 0 ? (
            // Empty Cart State
            (<div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{product?.name}</h4>
                <p className="text-muted-foreground">${product?.price}</p>
              </div>
              <Button
                variant="default"
                onClick={() => redirectToInstagram()}
                iconName="ShoppingBag"
                iconPosition="left"
                className="bg-golden-gradient hover:opacity-90"
              >
                Buy Now
              </Button>
            </div>)
          ) : (
            // Cart with Items
            (<div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground">Cart ({getTotalItems()})</h3>
                <button
                  onClick={onViewCart}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  View All
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {cartItems?.slice(-3)?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded overflow-hidden">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">{item?.name}</h4>
                      <p className="text-xs text-muted-foreground">Qty: {item?.quantity}</p>
                    </div>
                    <span className="font-medium text-foreground text-sm">
                      ${(item?.price * item?.quantity)?.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">Total:</span>
                  <span className="font-semibold text-foreground">${getTotalPrice()}</span>
                </div>
                
                {/* <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={onViewCart}
                    className="flex-1"
                    iconName="ShoppingBag"
                    iconPosition="left"
                  >
                    Cart
                  </Button>
                  <Button
                    variant="default"
                    className="flex-1 bg-golden-gradient hover:opacity-90"
                    iconName="ShoppingBag"
                    iconPosition="left"
                    onClick={() => redirectToInstagram()}
                  >
                    Buy Now
                  </Button>
                </div> */}
              </div>
            </div>)
          )}
        </div>
      </div>
    </>
  );
};

export default StickyCartPreview;