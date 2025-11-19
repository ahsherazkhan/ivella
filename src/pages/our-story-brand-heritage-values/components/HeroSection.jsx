import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-muted">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Founder in natural setting with flowing hair"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 fade-in-up">
          <div className="space-y-4">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm">
              Our Story
            </p>
            <h1 className="font-heading text-5xl lg:text-6xl font-semibold text-primary leading-tight">
              Where Ancient Wisdom Meets Modern Luxury
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Born from a personal journey of hair transformation and inspired by centuries-old beauty rituals, IVELLA represents the perfect harmony between nature's finest ingredients and contemporary sophistication.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default"
              className="bg-golden-gradient hover:opacity-90"
              iconName="ArrowDown"
              iconPosition="right"
            >
              Discover Our Journey
            </Button>
            <Button 
              variant="outline"
              iconName="Play"
              iconPosition="left"
            >
              Watch Our Story
            </Button>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-heading font-semibold text-primary">2019</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-semibold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-semibold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Countries Sourced</div>
            </div>
          </div>
        </div>

        {/* Founder Image */}
        <div className="relative">
          <div className="relative rounded-organic overflow-hidden luxury-shadow">
            <Image
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Founder Sarah Chen in her ingredient laboratory"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Quote */}
          <div className="absolute -bottom-6 -left-6 bg-popover p-6 rounded-organic luxury-shadow max-w-sm">
            <p className="text-sm text-muted-foreground italic mb-2">
              "Every woman deserves to feel the confidence that comes from truly caring for herself with nature's finest gifts."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Sarah Chen, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-foreground text-sm">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;