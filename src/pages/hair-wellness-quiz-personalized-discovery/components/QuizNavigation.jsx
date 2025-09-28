import React from 'react';
import Button from '../../../components/ui/Button';

const QuizNavigation = ({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrevious, 
  onSkip,
  canGoNext,
  canGoPrevious,
  isLoading,
  showSkip = false
}) => {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-border">
      <div className="flex-1">
        {canGoPrevious && (
          <Button
            variant="ghost"
            iconName="ArrowLeft"
            iconPosition="left"
            onClick={onPrevious}
            disabled={isLoading}
            className="text-muted-foreground hover:text-foreground"
          >
            Previous
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {showSkip && currentStep < totalSteps && (
          <Button
            variant="ghost"
            onClick={onSkip}
            disabled={isLoading}
            className="text-muted-foreground hover:text-foreground"
          >
            Skip
          </Button>
        )}

        <Button
          variant="default"
          iconName={currentStep === totalSteps ? "Check" : "ArrowRight"}
          iconPosition="right"
          onClick={onNext}
          disabled={!canGoNext}
          loading={isLoading}
          className="bg-golden-gradient hover:opacity-90 min-w-[120px]"
        >
          {currentStep === totalSteps ? 'Get Results' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};

export default QuizNavigation;