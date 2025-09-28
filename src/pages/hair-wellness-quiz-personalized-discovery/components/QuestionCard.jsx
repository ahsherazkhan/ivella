import React from 'react';
import Image from '../../../components/AppImage';


const QuestionCard = ({ question, onAnswer, selectedAnswer }) => {
  const handleOptionSelect = (optionValue) => {
    onAnswer(optionValue);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary mb-4">
          {question?.title}
        </h2>
        {question?.subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {question?.subtitle}
          </p>
        )}
      </div>
      {question?.image && (
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md h-64 rounded-organic overflow-hidden luxury-shadow">
            <Image
              src={question?.image}
              alt={question?.imageAlt || "Quiz question illustration"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <div className="grid gap-4 md:gap-6">
        {question?.options?.map((option, index) => (
          <div
            key={option?.value}
            className={`group cursor-pointer transition-all duration-300 ${
              selectedAnswer === option?.value
                ? 'transform scale-[1.02]'
                : 'hover:transform hover:scale-[1.01]'
            }`}
            onClick={() => handleOptionSelect(option?.value)}
          >
            <div
              className={`p-6 rounded-organic border-2 transition-all duration-300 ${
                selectedAnswer === option?.value
                  ? 'border-secondary bg-accent/20 luxury-shadow'
                  : 'border-border bg-card hover:border-secondary/50 hover:bg-accent/10'
              }`}
            >
              <div className="flex items-start space-x-4">
                {option?.image && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={option?.image}
                      alt={option?.imageAlt || option?.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-lg text-foreground">
                      {option?.label}
                    </h3>
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                        selectedAnswer === option?.value
                          ? 'border-secondary bg-secondary' :'border-muted-foreground group-hover:border-secondary'
                      }`}
                    >
                      {selectedAnswer === option?.value && (
                        <div className="w-full h-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                  </div>
                  
                  {option?.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {option?.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;