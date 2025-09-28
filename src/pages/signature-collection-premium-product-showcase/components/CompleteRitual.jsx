import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompleteRitual = ({ currentProduct, complementaryProducts, tools }) => {
  const [selectedBundle, setSelectedBundle] = useState('complete');
  const [addedToCart, setAddedToCart] = useState([]);

  const bundles = [
    {
      id: 'complete',
      name: 'Complete Hair Ritual',
      description: 'Everything you need for the ultimate hair care experience',
      discount: 25,
      products: [...complementaryProducts?.slice(0, 3), ...tools?.slice(0, 2)],
      originalPrice: 189.95,
      bundlePrice: 142.46
    },
    {
      id: 'essentials',
      name: 'Essential Duo',
      description: 'Perfect starter set for your hair wellness journey',
      discount: 15,
      products: complementaryProducts?.slice(0, 2),
      originalPrice: 89.98,
      bundlePrice: 76.48
    },
    {
      id: 'luxury',
      name: 'Luxury Collection',
      description: 'Premium products for the discerning hair care enthusiast',
      discount: 30,
      products: [...complementaryProducts, ...tools?.slice(0, 1)],
      originalPrice: 249.95,
      bundlePrice: 174.97
    }
  ];

  const handleAddToCart = (productId) => {
    setAddedToCart([...addedToCart, productId]);
    setTimeout(() => {
      setAddedToCart(addedToCart?.filter(id => id !== productId));
    }, 2000);
  };

  const selectedBundleData = bundles?.find(bundle => bundle?.id === selectedBundle);

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Complete Your Hair Ritual
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your hair care routine with our carefully curated complementary products and professional tools for salon-quality results at home.
          </p>
        </div>

        {/* Bundle Selection */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {bundles?.map((bundle) => (
              <button
                key={bundle?.id}
                onClick={() => setSelectedBundle(bundle?.id)}
                className={`flex-1 p-6 rounded-organic border-2 transition-all duration-200 text-left ${
                  selectedBundle === bundle?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {bundle?.name}
                  </h3>
                  <div className="bg-error text-error-foreground px-2 py-1 rounded text-sm font-medium">
                    Save {bundle?.discount}%
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{bundle?.description}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-semibold text-foreground">
                    ${bundle?.bundlePrice}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${bundle?.originalPrice}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Bundle Details */}
          <div className="bg-card rounded-organic p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                {selectedBundleData?.name}
              </h3>
              <div className="text-right">
                <div className="text-3xl font-semibold text-foreground">
                  ${selectedBundleData?.bundlePrice}
                </div>
                <div className="text-muted-foreground line-through">
                  ${selectedBundleData?.originalPrice}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {selectedBundleData?.products?.map((product, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={product?.image}
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{product?.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{product?.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">${product?.price}</span>
                      <span className="text-sm bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                        {product?.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                fullWidth
                iconName="ShoppingBag"
                iconPosition="left"
                className="bg-golden-gradient hover:opacity-90 h-12"
                onClick={() => handleAddToCart(selectedBundle)}
              >
                Add Bundle to Cart - ${selectedBundleData?.bundlePrice}
              </Button>
              <Button
                variant="outline"
                iconName="Heart"
                iconPosition="left"
                className="h-12 sm:w-auto"
              >
                Save Bundle
              </Button>
            </div>
          </div>
        </div>

        {/* Individual Products */}
        <div className="space-y-8">
          {/* Complementary Products */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Complementary Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complementaryProducts?.map((product, index) => (
                <div key={index} className="bg-card rounded-organic overflow-hidden luxury-shadow hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <div className="w-full h-48 overflow-hidden">
                      <Image
                        src={product?.image}
                        alt={product?.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product?.badge && (
                      <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">
                        {product?.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {product?.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {product?.description}
                      </p>
                      
                      {/* Key Benefits */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product?.keyBenefits?.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={i < Math.floor(product?.rating) ? "text-secondary fill-current" : "text-muted-foreground"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product?.rating} ({product?.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-foreground">
                          ${product?.price}
                        </span>
                        {product?.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product?.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Button
                        variant={addedToCart?.includes(product?.id) ? "success" : "outline"}
                        iconName={addedToCart?.includes(product?.id) ? "Check" : "Plus"}
                        iconPosition="left"
                        onClick={() => handleAddToCart(product?.id)}
                        disabled={addedToCart?.includes(product?.id)}
                      >
                        {addedToCart?.includes(product?.id) ? "Added" : "Add"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Tools */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Professional Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools?.map((tool, index) => (
                <div key={index} className="bg-card rounded-organic overflow-hidden luxury-shadow hover:shadow-lg transition-all duration-300">
                  <div className="w-full h-32 overflow-hidden">
                    <Image
                      src={tool?.image}
                      alt={tool?.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{tool?.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool?.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">${tool?.price}</span>
                      <Button
                        variant="outline"
                        iconName="Plus"
                        iconPosition="left"
                        onClick={() => handleAddToCart(tool?.id)}
                        className="text-sm px-3 py-1"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Complete Your Ritual */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-organic p-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Why Complete Your Ritual?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each product in our collection is designed to work synergistically, amplifying the benefits and creating a comprehensive hair wellness experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <Icon name="Zap" size={32} className="text-primary mx-auto" />
              <h4 className="font-medium text-foreground">Enhanced Results</h4>
              <p className="text-sm text-muted-foreground">
                Complementary products work together to maximize effectiveness and deliver superior results.
              </p>
            </div>
            <div className="text-center space-y-3">
              <Icon name="DollarSign" size={32} className="text-secondary mx-auto" />
              <h4 className="font-medium text-foreground">Better Value</h4>
              <p className="text-sm text-muted-foreground">
                Bundle savings of up to 30% compared to purchasing products individually.
              </p>
            </div>
            <div className="text-center space-y-3">
              <Icon name="Heart" size={32} className="text-error mx-auto" />
              <h4 className="font-medium text-foreground">Complete Care</h4>
              <p className="text-sm text-muted-foreground">
                Address all aspects of hair health with our comprehensive approach to hair wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRitual;