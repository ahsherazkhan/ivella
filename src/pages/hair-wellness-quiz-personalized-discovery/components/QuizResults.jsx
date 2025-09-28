import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const QuizResults = ({ results, onRestart, onSaveResults }) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e?.target?.value;
    setEmail(emailValue);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(emailValue));
  };

  const handleSaveResults = async () => {
    if (!isEmailValid) return;
    
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    onSaveResults(email);
    setIsSaving(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-golden-gradient rounded-full mb-6">
          <Icon name="Sparkles" size={32} color="white" />
        </div>
        <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-4">
          Your Hair Ritual Blueprint
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Based on your responses, we've curated a personalized hair wellness routine designed specifically for your {results?.hairType} hair and {results?.primaryConcern} concerns.
        </p>
      </div>
      {/* Hair Profile Summary */}
      <div className="bg-card rounded-organic p-8 mb-12 luxury-shadow">
        <h2 className="font-heading text-2xl font-semibold text-primary mb-6">
          Your Hair Profile
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="User" size={24} color="var(--color-primary)" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Hair Type</h3>
            <p className="text-muted-foreground">{results?.hairType}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Target" size={24} color="var(--color-primary)" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Primary Concern</h3>
            <p className="text-muted-foreground">{results?.primaryConcern}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} color="var(--color-primary)" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Routine Style</h3>
            <p className="text-muted-foreground">{results?.routinePreference}</p>
          </div>
        </div>
      </div>
      {/* Recommended Products */}
      <div className="mb-12">
        <h2 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
          Your Personalized Recommendations
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {results?.recommendedProducts?.map((product, index) => (
            <div key={product?.id} className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift">
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <Image
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Step {index + 1}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {product?.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product?.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Why it's perfect for you:</h4>
                  <ul className="space-y-1">
                    {product?.whyRecommended?.map((reason, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold text-primary">
                    ${product?.price}
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Special Offer */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-organic p-8 mb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-white mb-4">
            Exclusive Quiz Taker Offer
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Start your personalized hair wellness journey with 20% off your first order. Plus, get free shipping and our signature silk hair wrap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Shop Your Ritual - 20% Off
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              View Product
            </Button>
          </div>
        </div>
      </div>
      {/* Save Results */}
      <div className="bg-card rounded-organic p-8 mb-8">
        <div className="text-center mb-6">
          <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
            Save Your Results
          </h3>
          <p className="text-muted-foreground">
            Get your personalized recommendations sent to your email, plus exclusive hair care tips and early access to new products.
          </p>
        </div>

        {!showEmailForm ? (
          <div className="text-center">
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              onClick={() => setShowEmailForm(true)}
              className="min-w-[200px]"
            >
              Email My Results
            </Button>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  error={email && !isEmailValid ? "Please enter a valid email address" : ""}
                />
              </div>
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                onClick={handleSaveResults}
                disabled={!isEmailValid}
                loading={isSaving}
                className="bg-golden-gradient hover:opacity-90"
              >
                Send
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={onRestart}
        >
          Retake Quiz
        </Button>
        <Button
          variant="ghost"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={() => window.history?.back()}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;