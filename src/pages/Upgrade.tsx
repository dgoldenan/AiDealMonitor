
import { Check, Crown, Zap, Brain, TrendingUp, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Upgrade = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for casual deal hunters",
      features: [
        "Basic deal browsing",
        "Limited filters",
        "Email alerts (weekly)",
        "1 DealSage AI inquiry per day",
        "Basic price history"
      ],
      buttonText: "Current Plan",
      buttonDisabled: true,
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "For serious bargain hunters and power users",
      features: [
        "Unlimited deal browsing",
        "Advanced filters & sorting",
        "Real-time notifications",
        "25 DealSage AI inquiries per day",
        "Advanced AI conversations",
        "Full price history & analytics",
        "Priority support",
        "Custom deal alerts",
        "Exclusive premium deals",
        "No ads"
      ],
      buttonText: "Upgrade Now",
      buttonDisabled: false,
      popular: true
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Conversations",
      description: "Engage in multi-turn conversations with DealSage AI for complex queries and detailed recommendations."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Get AI-powered insights on future price trends and optimal buying windows."
    },
    {
      icon: Clock,
      title: "Priority Processing",
      description: "Premium users get faster AI response times and access to the most advanced models."
    },
    {
      icon: Zap,
      title: "Proactive Suggestions",
      description: "Receive personalized deal recommendations based on your preferences and shopping history."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Unlock Premium Features</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Supercharge Your Deal Hunting
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upgrade to Premium and unlock the full power of DealSage AI, advanced analytics, 
            and exclusive features designed for serious savers.
          </p>
        </div>

        {/* AI Features Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">DealSage AI Premium</h2>
            <p className="text-blue-100">
              Get 25x more AI inquiries and unlock advanced features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border-2 p-8 relative ${
                plan.popular ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={plan.buttonDisabled}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                How does DealSage AI work?
              </h3>
              <p className="text-gray-600">
                DealSage AI uses advanced language models to understand your queries and provide personalized deal recommendations. 
                It analyzes real-time price data, historical trends, and your preferences to find the best deals for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I cancel my premium subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your premium subscription at any time. Your premium features will remain active until the end of your current billing period.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What happens to my AI inquiries each month?
              </h3>
              <p className="text-gray-600">
                Your AI inquiry limit resets daily. Premium users get 25 inquiries per day, while free users get 1 inquiry per day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upgrade;
