
import { CheckCircle, Search, Bell, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIFeatureShowcase from '@/components/AIFeatureShowcase';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Deals",
      description: "Explore thousands of Amazon deals updated in real-time. Filter by category, price range, and discount percentage to find exactly what you're looking for."
    },
    {
      icon: Bell,
      title: "Set Alerts",
      description: "Create price alerts for specific products or categories. Get notified instantly when prices drop or new deals match your criteria."
    },
    {
      icon: TrendingUp,
      title: "Track Savings",
      description: "Monitor price history and track your savings over time. Make informed decisions with our comprehensive price tracking data."
    }
  ];

  const features = [
    "Real-time deal monitoring",
    "Price history tracking",
    "Personalized alerts",
    "Category filtering",
    "Mobile notifications",
    "Premium deal access"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            How AIDealMonitor Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing Amazon deals with our AI-powered monitoring system. 
            Save money and never miss a great deal again.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Feature Showcase */}
      <AIFeatureShowcase />

      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of smart shoppers who use AIDealMonitor to save money.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Get Started Free
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
