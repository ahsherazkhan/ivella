import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuizIntro = ({ onStart }) => {
  const benefits = [
    {
      icon: "Target",
      title: "Personalized Recommendations",
      description: "Get products tailored specifically to your hair type and concerns"
    },
    {
      icon: "Clock",
      title: "Save Time & Money",
      description: "Skip the guesswork and find your perfect routine faster"
    },
    {
      icon: "Sparkles",
      title: "Expert Insights",
      description: "Receive professional hair care tips based on your lifestyle"
    },
    {
      icon: "Gift",
      title: "Exclusive Offers",
      description: "Unlock special discounts available only to quiz takers"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center bg-accent/50 rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" size={16} className="text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Personalized Hair Discovery</span>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Discover Your Perfect Hair Ritual
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take our comprehensive hair wellness assessment to receive personalized product recommendations and expert care tips tailored specifically to your unique hair needs and lifestyle.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {benefits?.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Icon name={benefit?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {benefit?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quiz Details */}
          <div className="bg-card rounded-organic p-6 mb-8 luxury-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-foreground">Quiz Details</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="mr-1" />
                <span>3-5 minutes</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-primary">8</div>
                <div className="text-xs text-muted-foreground">Questions</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary">3-5</div>
                <div className="text-xs text-muted-foreground">Minutes</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Free</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={onStart}
            className="bg-golden-gradient hover:opacity-90 w-full sm:w-auto"
          >
            Start Your Hair Discovery
          </Button>

          <p className="text-xs text-muted-foreground mt-4">
            No email required to start. Results can be saved at the end.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10">
            <div className="rounded-organic overflow-hidden luxury-shadow">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful woman with healthy, shiny hair applying hair care products"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          
          {/* Testimonial Card */}
          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-organic p-4 luxury-shadow max-w-xs">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Customer testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">Sarah M.</div>
                <div className="flex items-center">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-secondary fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              "The quiz helped me find the perfect routine. My hair has never looked better!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;