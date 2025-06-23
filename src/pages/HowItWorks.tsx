
import { CheckCircle, Search, Bell, TrendingUp, Brain, Zap, Clock, Crown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIFeatureShowcase from '@/components/AIFeatureShowcase';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Deals",
      description: "Explore thousands of Amazon deals updated in real-time. Filter by category, price range, and discount percentage to find exactly what you're looking for.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Bell,
      title: "Set Alerts",
      description: "Create price alerts for specific products or categories. Get notified instantly when prices drop or new deals match your criteria.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Track Savings",
      description: "Monitor price history and track your savings over time. Make informed decisions with our comprehensive price tracking data.",
      color: "from-green-500 to-green-600"
    }
  ];

  const aiSteps = [
    {
      icon: Brain,
      title: "Ask DealSage AI",
      description: "Simply ask our AI assistant about any product or deal you're looking for. It understands natural language and provides personalized recommendations.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Get Smart Insights",
      description: "Receive AI-powered price predictions, optimal buying windows, and exclusive deal recommendations tailored to your preferences.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "Let AI do the heavy lifting. Get instant answers, compare deals, and never miss the perfect buying opportunity again.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const features = [
    "Real-time deal monitoring",
    "AI-powered deal discovery",
    "Price history tracking",
    "Personalized alerts",
    "Category filtering",
    "Mobile notifications",
    "Premium deal access",
    "DealSage AI assistant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-scale-in">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Deal Discovery</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '100ms' }}>
            How AIDealMonitor Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Discover amazing Amazon deals with our revolutionary AI-powered monitoring system. 
            Save money, save time, and never miss a great deal again with DealSage AI.
          </p>
        </div>

        {/* AI Steps Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 animate-fade-in">
            Meet Your AI Deal Assistant
          </h2>
          <p className="text-center text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            DealSage AI revolutionizes how you find and secure the best deals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiSteps.map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Traditional Deal Hunting Made Easy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium AI Showcase */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 mb-20 text-white relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Crown className="w-12 h-12 mx-auto mb-4 text-yellow-400 animate-pulse" />
              <h2 className="text-3xl font-bold mb-4">DealSage AI Premium</h2>
              <p className="text-blue-100 text-lg">
                Unlock the full power of AI-driven deal discovery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">25x</div>
                <div className="text-sm">More AI inquiries daily</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
                <div className="text-sm">Advanced AI conversations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Feature Showcase */}
      <AIFeatureShowcase />

      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-xl animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Saving with AI?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of smart shoppers who use AIDealMonitor and DealSage AI to maximize their savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300">
              Try DealSage AI
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
