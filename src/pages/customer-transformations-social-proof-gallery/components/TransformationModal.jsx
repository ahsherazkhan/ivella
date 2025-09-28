import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransformationModal = ({ transformation, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  if (!isOpen || !transformation) return null;

  const images = [
    { src: transformation?.beforeImage, type: 'before' },
    { src: transformation?.afterImage, type: 'after' },
    ...(transformation?.progressImages || [])?.map(img => ({ src: img, type: 'progress' }))
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images?.length) % images?.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-background rounded-organic max-w-4xl w-full max-h-[90vh] overflow-hidden luxury-shadow">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
        >
          <Icon name="X" size={20} className="text-foreground" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="lg:w-1/2 relative bg-muted">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
              <Image
                src={images?.[currentImageIndex]?.src}
                alt={`${transformation?.customerName} transformation ${images?.[currentImageIndex]?.type}`}
                className="w-full h-full object-cover"
              />

              {/* Image Type Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium capitalize">
                    {images?.[currentImageIndex]?.type}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              {images?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
                  >
                    <Icon name="ChevronRight" size={20} className="text-foreground" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {images?.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            {/* Customer Info */}
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={transformation?.customerAvatar}
                alt={transformation?.customerName}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {transformation?.customerName}
                </h2>
                <p className="text-muted-foreground">
                  {transformation?.hairType} • {transformation?.location}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={18}
                    className={i < transformation?.rating ? 'text-secondary fill-current' : 'text-muted-foreground'}
                  />
                ))}
              </div>
              <span className="text-foreground font-medium">{transformation?.rating}/5</span>
            </div>

            {/* Hair Concerns */}
            <div className="mb-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Hair Concerns Addressed
              </h3>
              <div className="flex flex-wrap gap-2">
                {transformation?.concerns?.map((concern, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/30 text-accent-foreground text-sm rounded-full"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Testimonial */}
            <div className="mb-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Transformation Story
              </h3>
              <p className="text-foreground leading-relaxed">
                "{transformation?.fullTestimonial || transformation?.testimonial}"
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Timeline to Results
              </h3>
              <p className="text-muted-foreground">{transformation?.timeframe}</p>
            </div>

            {/* Products Used */}
            <div className="mb-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Products Used
              </h3>
              <div className="space-y-2">
                {transformation?.productsUsed?.map((product, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-foreground">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Routine */}
            {transformation?.routine && (
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  Hair Care Routine
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {transformation?.routine}
                </p>
              </div>
            )}

            {/* Share Button */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                iconName="Share2"
                iconPosition="left"
                className="flex-1"
              >
                Share Story
              </Button>
              <Button
                variant="default"
                className="flex-1 bg-golden-gradient hover:opacity-90"
              >
                Shop Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationModal;