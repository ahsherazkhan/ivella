import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RitualGuide = ({ ritualSteps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsVideoPlaying(false);
  };

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Your Hair Ritual Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your daily routine into a luxurious self-care ritual with our step-by-step guide to achieving salon-worthy results at home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Visual Guide */}
          <div className="space-y-6">
            {/* Main Visual */}
            <div className="relative bg-card rounded-organic overflow-hidden aspect-[4/3]">
              {isVideoPlaying ? (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <Icon name="Play" size={48} className="mx-auto" />
                    <p className="text-lg">Video Tutorial Playing</p>
                    <Button
                      variant="outline"
                      onClick={handleVideoToggle}
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      Pause Video
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={ritualSteps?.[activeStep]?.image}
                    alt={`Step ${activeStep + 1}: ${ritualSteps?.[activeStep]?.title}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Play Button */}
                  <button
                    onClick={handleVideoToggle}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 group"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:bg-white transition-colors duration-200">
                      <Icon name="Play" size={32} className="text-primary ml-1" />
                    </div>
                  </button>

                  {/* Step Indicator */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Step {activeStep + 1} of {ritualSteps?.length}
                  </div>
                </>
              )}
            </div>

            {/* Step Navigation */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {ritualSteps?.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeStep === index
                      ? 'border-primary shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Image
                    src={step?.thumbnail}
                    alt={`Step ${index + 1} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Step Instructions */}
          <div className="space-y-8">
            {/* Current Step Details */}
            <div className="bg-card rounded-organic p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {activeStep + 1}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {ritualSteps?.[activeStep]?.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {ritualSteps?.[activeStep]?.description}
              </p>

              {/* Pro Tips */}
              {ritualSteps?.[activeStep]?.tips && (
                <div className="bg-accent/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Lightbulb" size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground">Pro Tip</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {ritualSteps?.[activeStep]?.tips}
                  </p>
                </div>
              )}

              {/* Duration */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>{ritualSteps?.[activeStep]?.duration}</span>
              </div>
            </div>

            {/* All Steps Overview */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Complete Ritual Steps</h4>
              <div className="space-y-3">
                {ritualSteps?.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      activeStep === index
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        activeStep === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">{step?.title}</h5>
                        <p className="text-sm text-muted-foreground">{step?.duration}</p>
                      </div>
                      {activeStep === index && (
                        <Icon name="ChevronRight" size={16} className="text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                iconName="ChevronLeft"
                iconPosition="left"
                className="flex-1"
              >
                Previous Step
              </Button>
              <Button
                variant="default"
                disabled={activeStep === ritualSteps?.length - 1}
                onClick={() => setActiveStep(Math.min(ritualSteps?.length - 1, activeStep + 1))}
                iconName="ChevronRight"
                iconPosition="right"
                className="flex-1 bg-golden-gradient hover:opacity-90"
              >
                Next Step
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-organic p-8 max-w-2xl mx-auto">
            <Icon name="BookOpen" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Download Complete Guide
            </h3>
            <p className="text-muted-foreground mb-6">
              Get our comprehensive hair care ritual guide with additional tips, seasonal variations, and troubleshooting advice.
            </p>
            <Button
              variant="outline"
              iconName="Download"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Download PDF Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualGuide;