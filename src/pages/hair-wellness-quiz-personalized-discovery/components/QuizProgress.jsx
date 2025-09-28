import React from 'react';

const QuizProgress = ({ currentStep, totalSteps, completedSteps }) => {
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </div>
        <div className="text-sm font-medium text-primary">
          {Math.round(progressPercentage)}% Complete
        </div>
      </div>
      
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-golden-gradient transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index < completedSteps
                ? 'bg-secondary'
                : index === currentStep - 1
                ? 'bg-primary' :'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizProgress;