import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { redirectToInstagram } from '../../../utils/instagramRedirect';

const ProductHero = ({ product, onAddToCart, onSubscribe }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const currentPrice = product?.price || 44.99;

  const productImages = [
    "/assets/1.jpg",
    "/assets/4.jpg",
    "/assets/2.jpg",
    "/assets/ivella simple video.mp4"
  ];

  const isVideo = (src) => {
    return typeof src === 'string' ? src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov') : false;
  };

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image/Video */}
            <div className="relative bg-card rounded-organic overflow-hidden aspect-[4/5] group">
              {isVideo(productImages?.[selectedImage]) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <source src={productImages[selectedImage]} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={productImages?.[selectedImage]}
                  alt={`${product?.name} - View ${selectedImage + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              )}
              
              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={20} className="text-white" />
              </div>

              {/* 360° Badge */}
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                360° View
              </div>
            </div>

            {/* Thumbnail Images/Videos */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {productImages?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
                    selectedImage === index
                      ? 'border-primary shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {isVideo(image) ? ( 
                    <>
                      <video
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={image} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Icon name="Play" size={16} className="text-white" />
                      </div>
                    </>
                  ) : (
                    <Image
                      src={image}
                      alt={`${product?.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Bestseller
                </span>
                <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                  Organic Certified
                </span>
              </div>
              
              <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                {product?.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < Math.floor(product?.rating) ? "text-secondary fill-current" : "text-muted-foreground"}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product?.rating} ({product?.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product?.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-semibold text-foreground">
                  ${currentPrice?.toFixed(2)}
                </span>
                {product?.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product?.originalPrice}
                  </span>
                )}
                {product?.originalPrice && (
                  <span className="bg-error/10 text-error px-2 py-1 rounded text-sm font-medium">
                    Save ${(product?.originalPrice - currentPrice)?.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Free Shipping Badge */}
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Truck" size={18} className="text-success" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>

              {/* Size Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Size</label>
                <div className="flex space-x-3">
                  {product?.sizes?.map((size) => (
                    <button
                      key={size?.value}
                      className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                        size?.selected
                          ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-sm font-medium">{size?.label}</div>
                      <div className="text-xs text-muted-foreground">${size?.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-muted/50 rounded-organic p-6 space-y-3">
              <h3 className="font-medium text-foreground mb-3">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* <Button
                variant="default"
                fullWidth
                iconName="ShoppingBag"
                iconPosition="left"
                className="bg-golden-gradient hover:opacity-90 h-12"
                onClick={onAddToCart}
              >
                Add to Cart - ${product?.price}
              </Button> */}

              <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    iconName="ShoppingBag"
                    iconPosition="left"
                    className="h-12"
                    onClick={() => redirectToInstagram()}
                  >
                   Buy Now
                  </Button>
                <Button
                  variant="outline"
                  iconName="Share"
                  iconPosition="left"
                  className="h-12"
                >
                  Share
                </Button>
              </div>

              {/* Subscription Option */}
              {/* <div className="bg-accent/20 rounded-organic p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Subscribe & Save 15%</h4>
                    <p className="text-sm text-muted-foreground">
                      ${(product?.price * 0.85)?.toFixed(2)} with subscription
                    </p>
                  </div>
                  <Icon name="RotateCcw" size={20} className="text-primary" />
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={onSubscribe}
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Subscribe Now
                </Button>
              </div> */}
            </div>

            {/* Trust Signals */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Free shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="RotateCcw" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">30-day returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;