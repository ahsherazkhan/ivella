import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CustomerImpactSection = () => {
  const impactStories = [
    {
      name: "Maria Santos",
      location: "Argan Cooperative, Morocco",
      story: `"Working with IVELLA has transformed not just my income, but my entire community. The fair trade premiums have allowed us to build a school for our children and invest in sustainable farming equipment."`,
      image: "https://images.unsplash.com/photo-1544967882-6abaa7b2aa9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "Supports 45 families",
      product: "Argan Oil"
    },
    {
      name: "Priya Sharma",
      location: "Kerala, India",
      story: `"The partnership with Ivella has given our women's collective the stability we needed. We've expanded from 30 to 120 members, and many of us have started our own small businesses with the additional income."`,
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400",
      impact: "120 women employed",
      product: "Coconut Oil"
    },
    {
      name: "Esperanza Quispe",
      location: "Amazon, Peru",
      story: `"Before Ivella, we struggled to find markets for our sacha inchi. Now our daughters can attend university, and we're preserving our traditional knowledge while building a sustainable future."`,
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=400",
      impact: "89 families benefited",
      product: "Sacha Inchi Oil"
    }
  ];

  const communityPrograms = [
    {
      title: "Education Scholarships",
      description: "Funding higher education for daughters of cooperative members",
      beneficiaries: 127,
      icon: "GraduationCap"
    },
    {
      title: "Healthcare Access",
      description: "Mobile health clinics serving remote farming communities",
      beneficiaries: 2400,
      icon: "Heart"
    },
    {
      title: "Microfinance Programs",
      description: "Small business loans for women entrepreneurs",
      beneficiaries: 89,
      icon: "DollarSign"
    },
    {
      title: "Sustainable Farming",
      description: "Training and equipment for eco-friendly agriculture",
      beneficiaries: 156,
      icon: "Sprout"
    }
  ];

  const purchaseImpact = [
    {
      purchase: "1 Bottle",
      impact: "Supports 1 woman for 2 days",
      details: "Fair wages and community development"
    },
    {
      purchase: "3 Bottles",
      impact: "Plants 5 trees",
      details: "Reforestation in sourcing regions"
    },
    {
      purchase: "5 Bottles",
      impact: "Funds 1 week of education",
      details: "Literacy programs for women"
    },
    {
      purchase: "Annual Subscription",
      impact: "Sponsors 1 scholarship",
      details: "Full year university tuition"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            Customer Impact
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Your Purchase, Their Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every IVELLA product you choose creates ripple effects of positive change in communities worldwide. Meet the women whose lives are transformed through our partnerships.
          </p>
        </div>

        {/* Impact Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {impactStories?.map((story, index) => (
            <div key={story?.name} className="bg-card rounded-organic overflow-hidden luxury-shadow hover-lift">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story?.image}
                  alt={`${story?.name} from ${story?.location}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Product Badge */}
                <div className="absolute top-4 right-4 bg-golden-gradient px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {story?.product}
                  </span>
                </div>

                {/* Impact Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-primary text-sm font-medium">
                    {story?.impact}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {story?.name}
                  </h3>
                  <p className="text-sm text-secondary">
                    {story?.location}
                  </p>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  {story?.story}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Community Programs */}
        <div className="bg-card rounded-organic p-12 luxury-shadow mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-primary mb-4">
              Community Programs We Support
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through our partnerships and the Ivella Foundation, we fund programs that create lasting positive change in sourcing communities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityPrograms?.map((program, index) => (
              <div key={program?.title} className="text-center">
                <div className="w-20 h-20 bg-golden-gradient rounded-full flex items-center justify-center mx-auto mb-4 luxury-shadow">
                  <Icon name={program?.icon} size={32} color="white" />
                </div>
                
                <h4 className="font-heading font-semibold text-primary mb-2">
                  {program?.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {program?.description}
                </p>
                
                <div className="text-2xl font-heading font-semibold text-secondary mb-1">
                  {program?.beneficiaries}
                </div>
                <div className="text-xs text-muted-foreground">
                  People Benefited
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Impact Calculator */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
                Your Impact
              </p>
              <h3 className="text-3xl font-heading font-semibold text-primary mb-6">
                See How Your Purchase Creates Change
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product you choose from IVELLA directly contributes to our impact fund. Here's how your purchases translate into real-world positive change for women and communities worldwide.
              </p>
            </div>

            <div className="space-y-4">
              {purchaseImpact?.map((item, index) => (
                <div key={item?.purchase} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-organic">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-primary mb-1">
                      {item?.purchase}
                    </div>
                    <div className="text-secondary font-medium mb-1">
                      {item?.impact}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item?.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-organic p-8 luxury-shadow">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Collective Impact This Year
                </h4>
                <p className="text-muted-foreground">
                  Together, our community has achieved remarkable results
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-organic">
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={24} className="text-secondary" />
                    <span className="font-medium text-foreground">Women Supported</span>
                  </div>
                  <span className="text-2xl font-heading font-semibold text-secondary">
                    399
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-organic">
                  <div className="flex items-center space-x-3">
                    <Icon name="TreePine" size={24} className="text-secondary" />
                    <span className="font-medium text-foreground">Trees Planted</span>
                  </div>
                  <span className="text-2xl font-heading font-semibold text-secondary">
                    15,000
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-organic">
                  <div className="flex items-center space-x-3">
                    <Icon name="GraduationCap" size={24} className="text-secondary" />
                    <span className="font-medium text-foreground">Scholarships Funded</span>
                  </div>
                  <span className="text-2xl font-heading font-semibold text-secondary">
                    127
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-organic">
                  <div className="flex items-center space-x-3">
                    <Icon name="DollarSign" size={24} className="text-secondary" />
                    <span className="font-medium text-foreground">Fair Trade Premiums</span>
                  </div>
                  <span className="text-2xl font-heading font-semibold text-secondary">
                    $2.3M
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Quote */}
            <div className="absolute -top-6 -right-6 bg-golden-gradient p-6 rounded-organic luxury-shadow max-w-xs">
              <p className="text-white text-sm italic mb-2">
                "When you choose Ivella, you're not just caring for your hair—you're caring for women worldwide."
              </p>
              <div className="text-white/80 text-xs">
                - Sarah Chen, Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerImpactSection;