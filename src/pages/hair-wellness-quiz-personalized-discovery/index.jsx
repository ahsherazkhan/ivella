import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import QuizIntro from './components/QuizIntro';
import QuizProgress from './components/QuizProgress';
import QuestionCard from './components/QuestionCard';
import QuizNavigation from './components/QuizNavigation';
import QuizResults from './components/QuizResults';

const HairWellnessQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  // Quiz questions with smart branching logic
  const questions = [
    {
      id: 'routine_view',
      title: 'How do you view your hair care routine?',
      subtitle: 'Understanding your mindset helps us recommend the right approach for you.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Woman enjoying her hair care routine',
      options: [
        {
          value: 'quick_necessity',
          label: 'Quick necessity',
          description: 'I want effective results with minimal time investment'
        },
        {
          value: 'daily_maintenance',
          label: 'Daily maintenance',
          description: 'I maintain a consistent routine but keep it simple'
        },
        {
          value: 'self_care_ritual',
          label: 'Sacred self-care ritual',
          description: 'I enjoy taking time for luxurious hair care experiences'
        },
        {
          value: 'beauty_passion',
          label: 'Beauty passion project',
          description: 'I love experimenting with products and techniques'
        }
      ]
    },
    {
      id: 'hair_type',
      title: 'What best describes your hair type?',
      subtitle: 'Select the option that most closely matches your natural hair texture.',
      options: [
        {
          value: 'straight_fine',
          label: 'Straight & Fine',
          description: 'Hair lies flat, tends to get oily quickly, lacks volume',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
        },
        {
          value: 'straight_thick',
          label: 'Straight & Thick',
          description: 'Heavy, dense hair that can be difficult to style',
          image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
        },
        {
          value: 'wavy_loose',
          label: 'Wavy & Loose',
          description: 'Gentle waves, prone to frizz in humidity',
          image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
        },
        {
          value: 'wavy_defined',
          label: 'Wavy & Defined',
          description: 'Clear wave pattern, medium texture and density',
          image: 'https://images.unsplash.com/photo-1595475038665-8d7e8c5c8f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
        },
        {
          value: 'curly_loose',
          label: 'Curly & Loose',
          description: 'Springy curls, tends to be dry and frizzy',
          image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
        },
        {
          value: 'curly_tight',
          label: 'Curly & Tight',
          description: 'Dense, coily texture requiring intensive moisture',
          image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
        }
      ]
    },
    {
      id: 'primary_concern',
      title: 'What is your primary hair concern?',
      subtitle: 'Choose the issue that bothers you most about your hair.',
      options: [
        {
          value: 'dryness',
          label: 'Dryness & Brittleness',
          description: 'Hair feels rough, breaks easily, lacks moisture'
        },
        {
          value: 'damage',
          label: 'Damage & Split Ends',
          description: 'Visible damage from heat, chemicals, or styling'
        },
        {
          value: 'lack_shine',
          label: 'Lack of Shine & Luster',
          description: 'Hair appears dull and lifeless'
        },
        {
          value: 'frizz',
          label: 'Frizz & Unmanageability',
          description: 'Difficult to control, especially in humidity'
        },
        {
          value: 'thinning',
          label: 'Thinning & Volume Loss',
          description: 'Hair feels less dense, lacks body and fullness'
        },
        {
          value: 'scalp_issues',
          label: 'Scalp Sensitivity',
          description: 'Itchy, flaky, or irritated scalp conditions'
        }
      ]
    },
    {
      id: 'heat_styling',
      title: 'How often do you use heat styling tools?',
      subtitle: 'This helps us understand your hair\'s exposure to potential damage.',
      condition: (answers) => answers?.primary_concern === 'damage',
      options: [
        {
          value: 'daily',
          label: 'Daily',
          description: 'Blow dryer, straightener, or curling iron every day'
        },
        {
          value: 'few_times_week',
          label: 'Few times a week',
          description: '3-4 times per week for styling'
        },
        {
          value: 'weekly',
          label: 'Weekly',
          description: 'Once or twice a week for special occasions'
        },
        {
          value: 'rarely',
          label: 'Rarely',
          description: 'Only for special events or never'
        }
      ]
    },
    {
      id: 'current_routine',
      title: 'How would you describe your current hair routine?',
      subtitle: 'Understanding your current approach helps us make better recommendations.',
      options: [
        {
          value: 'minimal',
          label: 'Minimal',
          description: 'Basic shampoo and conditioner only'
        },
        {
          value: 'standard',
          label: 'Standard',
          description: 'Shampoo, conditioner, and occasional treatments'
        },
        {
          value: 'comprehensive',
          label: 'Comprehensive',
          description: 'Multiple products including oils, masks, and serums'
        },
        {
          value: 'inconsistent',
          label: 'Inconsistent',
          description: 'I try different things but lack a steady routine'
        }
      ]
    },
    {
      id: 'ingredient_preferences',
      title: 'What ingredients are most important to you?',
      subtitle: 'Select what matters most in your hair care products.',
      options: [
        {
          value: 'natural_organic',
          label: 'Natural & Organic',
          description: 'Plant-based ingredients, minimal processing'
        },
        {
          value: 'proven_actives',
          label: 'Proven Active Ingredients',
          description: 'Scientifically-backed compounds for specific results'
        },
        {
          value: 'gentle_sensitive',
          label: 'Gentle & Sensitive-Safe',
          description: 'Hypoallergenic, fragrance-free formulations'
        },
        {
          value: 'luxury_experience',
          label: 'Luxury Experience',
          description: 'Premium textures, beautiful scents, indulgent feel'
        }
      ]
    },
    {
      id: 'lifestyle_factors',
      title: 'Which lifestyle factors affect your hair?',
      subtitle: 'Environmental and lifestyle elements that impact your hair health.',
      options: [
        {
          value: 'frequent_washing',
          label: 'Frequent Washing',
          description: 'I wash my hair daily or every other day'
        },
        {
          value: 'active_lifestyle',
          label: 'Active Lifestyle',
          description: 'Regular workouts, swimming, or outdoor activities'
        },
        {
          value: 'color_treated',
          label: 'Color-Treated Hair',
          description: 'Regular coloring, highlights, or chemical treatments'
        },
        {
          value: 'environmental_stress',
          label: 'Environmental Stress',
          description: 'Pollution, hard water, or extreme weather conditions'
        }
      ]
    },
    {
      id: 'goals',
      title: 'What are your hair goals?',
      subtitle: 'What would you most like to achieve with your hair care routine?',
      options: [
        {
          value: 'healthy_foundation',
          label: 'Build Healthy Foundation',
          description: 'Strengthen and nourish for overall hair health'
        },
        {
          value: 'enhance_natural',
          label: 'Enhance Natural Beauty',
          description: 'Bring out my hair\'s natural texture and shine'
        },
        {
          value: 'repair_damage',
          label: 'Repair Existing Damage',
          description: 'Fix current issues and prevent future damage'
        },
        {
          value: 'styling_ease',
          label: 'Easier Daily Styling',
          description: 'Make my hair more manageable and style-friendly'
        }
      ]
    }
  ];

  // Filter questions based on branching logic
  const getVisibleQuestions = () => {
    return questions?.filter(question => {
      if (!question?.condition) return true;
      return question?.condition(answers);
    });
  };

  const visibleQuestions = getVisibleQuestions();
  const totalSteps = visibleQuestions?.length;
  const isQuizStarted = currentStep > 0;
  const isOnResults = showResults;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, showResults]);

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = async () => {
    if (currentStep === totalSteps) {
      setIsLoading(true);
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const results = generateResults();
      setQuizResults(results);
      setShowResults(true);
      setIsLoading(false);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setQuizResults(null);
  };

  const handleSaveResults = (email) => {
    // Simulate saving results
    console.log('Saving results for:', email);
    // In real app, this would make an API call
  };

  const generateResults = () => {
    const hairType = getHairTypeDescription(answers?.hair_type);
    const primaryConcern = getConcernDescription(answers?.primary_concern);
    const routinePreference = getRoutineDescription(answers?.routine_view);
    
    // Generate personalized product recommendations based on answers
    const recommendedProducts = getRecommendedProducts(answers);

    return {
      hairType,
      primaryConcern,
      routinePreference,
      recommendedProducts,
      answers
    };
  };

  const getHairTypeDescription = (hairType) => {
    const descriptions = {
      'straight_fine': 'Fine Straight Hair',
      'straight_thick': 'Thick Straight Hair',
      'wavy_loose': 'Loose Wavy Hair',
      'wavy_defined': 'Defined Wavy Hair',
      'curly_loose': 'Loose Curly Hair',
      'curly_tight': 'Tight Curly Hair'
    };
    return descriptions?.[hairType] || 'Mixed Texture Hair';
  };

  const getConcernDescription = (concern) => {
    const descriptions = {
      'dryness': 'Dryness & Moisture',
      'damage': 'Damage Repair',
      'lack_shine': 'Shine & Luster',
      'frizz': 'Frizz Control',
      'thinning': 'Volume & Thickness',
      'scalp_issues': 'Scalp Health'
    };
    return descriptions?.[concern] || 'General Hair Health';
  };

  const getRoutineDescription = (routine) => {
    const descriptions = {
      'quick_necessity': 'Quick & Efficient',
      'daily_maintenance': 'Consistent Daily Care',
      'self_care_ritual': 'Luxurious Ritual',
      'beauty_passion': 'Experimental & Fun'
    };
    return descriptions?.[routine] || 'Personalized Approach';
  };

  const getRecommendedProducts = (answers) => {
    // Mock product recommendations based on quiz answers
    const baseProducts = [
      {
        id: 'nourishing-oil',
        name: 'Nourishing Hair Oil',
        price: 48,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        description: 'A lightweight, fast-absorbing oil blend that nourishes without weighing hair down.',
        whyRecommended: [
          'Perfect for your hair type and texture',
          'Addresses your primary concern effectively',
          'Fits seamlessly into your routine preference'
        ]
      },
      {
        id: 'repair-mask',
        name: 'Intensive Repair Mask',
        price: 52,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        description: 'Weekly treatment mask that deeply repairs and strengthens damaged hair.',
        whyRecommended: [
          'Targets damage from heat styling',
          'Restores moisture and elasticity',
          'Provides long-lasting protection'
        ]
      },
      {
        id: 'shine-serum',
        name: 'Luminous Shine Serum',
        price: 38,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        description: 'Lightweight serum that adds instant shine and smooths frizz.',
        whyRecommended: [
          'Enhances your natural hair texture',
          'Provides heat protection for styling',
          'Creates a glossy, healthy finish'
        ]
      }
    ];

    // Customize recommendations based on specific answers
    return baseProducts?.map(product => {
      const customizedProduct = { ...product };
      
      // Customize based on hair type
      if (answers?.hair_type?.includes('fine')) {
        customizedProduct.whyRecommended = [
          'Lightweight formula won\'t weigh down fine hair',
          ...customizedProduct?.whyRecommended?.slice(1)
        ];
      }
      
      // Customize based on primary concern
      if (answers?.primary_concern === 'damage') {
        customizedProduct.whyRecommended = [
          customizedProduct?.whyRecommended?.[0],
          'Specifically formulated for damaged hair repair',
          customizedProduct?.whyRecommended?.[2]
        ];
      }
      
      return customizedProduct;
    });
  };

  const currentQuestion = visibleQuestions?.[currentStep - 1];
  const currentAnswer = currentQuestion ? answers?.[currentQuestion?.id] : null;
  const canGoNext = currentStep === 0 || currentAnswer || currentStep > totalSteps;
  const canGoPrevious = currentStep > 1;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-6 py-12 lg:py-25">
          {!isQuizStarted && !isOnResults && (
            <QuizIntro onStart={handleStart} />
          )}

          {isQuizStarted && !isOnResults && (
            <div className="max-w-4xl mx-auto">
              <QuizProgress
                currentStep={currentStep}
                totalSteps={totalSteps}
                completedSteps={currentStep - 1}
              />

              <div className="mb-12">
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswer={currentAnswer}
                  onAnswer={(answer) => handleAnswer(currentQuestion?.id, answer)}
                />
              </div>

              <QuizNavigation
                currentStep={currentStep}
                totalSteps={totalSteps}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onSkip={handleSkip}
                canGoNext={canGoNext}
                canGoPrevious={canGoPrevious}
                isLoading={isLoading}
                showSkip={true}
              />
            </div>
          )}

          {isOnResults && quizResults && (
            <QuizResults
              results={quizResults}
              onRestart={handleRestart}
              onSaveResults={handleSaveResults}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default HairWellnessQuiz;