
import { Brain, MessageSquare, Zap, Crown, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIFeatureShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Understanding",
      description: "Ask in plain English: 'Find me wireless headphones under $100' or 'What's the best laptop deal right now?'"
    },
    {
      icon: TrendingUp,
      title: "Price Intelligence",
      description: "Get insights on price history, optimal buying times, and future price predictions based on market trends."
    },
    {
      icon: Zap,
      title: "Instant Recommendations",
      description: "Receive personalized deal suggestions tailored to your preferences and shopping history."
    },
    {
      icon: Clock,
      title: "Real-time Analysis",
      description: "Access live deal data and up-to-the-minute price comparisons across thousands of products."
    }
  ];

  const tiers = [
    {
      name: "DealSage Lite",
      type: "Free",
      inquiries: "1 per day",
      features: [
        "Basic deal search",
        "Limited price history",
        "Standard responses"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "outline"
    },
    {
      name: "DealSage Pro",
      type: "Premium",
      inquiries: "25 per day",
      features: [
        "Advanced conversations",
        "Full price analysis",
        "Priority responses",
        "Proactive suggestions",
        "Custom AI models"
      ],
      buttonText: "Upgrade to Pro",
      buttonStyle: "default"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Powered by AI</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet DealSage AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your intelligent deal-finding assistant that understands what you need and helps you save more. 
            Ask questions, get personalized recommendations, and discover deals you never knew existed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Choose Your AI Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-sm border-2 ${
                  tier.type === 'Premium' 
                    ? 'border-blue-200 ring-4 ring-blue-50' 
                    : 'border-gray-100'
                }`}
              >
                {tier.type === 'Premium' && (
                  <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                )}
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                <p className="text-gray-600 mb-4">{tier.type} • {tier.inquiries}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.buttonStyle as any}
                  className={`w-full ${
                    tier.buttonStyle === 'default' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                      : ''
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Chat Preview */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">DealSage AI Demo</span>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">Find me noise-cancelling headphones under $200</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-md">
                  <p className="text-sm">
                    I found the <strong>Sony WH-CH720N</strong> for <strong>$149.99</strong> (originally $199.99, <strong>25% off</strong>). 
                    Great active noise cancellation and 35-hour battery life. This is an excellent deal - historically the lowest price!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatureShowcase;
