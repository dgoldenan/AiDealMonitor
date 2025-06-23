
import { Check, Crown, Zap, TrendingUp, Bell } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Upgrade = () => {
  const features = [
    {
      icon: Bell,
      title: "Advanced Price Alerts",
      description: "Get notified instantly when deals match your criteria",
      free: "Basic alerts",
      premium: "Unlimited custom alerts"
    },
    {
      icon: TrendingUp,
      title: "Price History Tracking",
      description: "Detailed graphs showing price trends over time",
      free: "7-day history",
      premium: "Full historical data"
    },
    {
      icon: Crown,
      title: "Exclusive Premium Deals",
      description: "Access to deals available only to premium members",
      free: false,
      premium: "Exclusive access"
    },
    {
      icon: Zap,
      title: "Lightning Deal Alerts",
      description: "Get notified before Lightning Deals go live",
      free: false,
      premium: "Early access"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      savings: "$1,247",
      quote: "The price alerts have saved me so much money. I never miss a deal on items I actually want!"
    },
    {
      name: "Mike Chen",
      savings: "$892",
      quote: "Premium features are worth every penny. The exclusive deals alone pay for the subscription."
    },
    {
      name: "Emily Rodriguez",
      savings: "$1,563",
      quote: "Price history tracking helps me make smart purchasing decisions. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Premium
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Unlock the Full Power of Deal Hunting
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of premium members who save more money with advanced features, 
            exclusive deals, and priority support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
              <p className="text-gray-600">Forever free with basic features</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Browse all deals</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Basic category filtering</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>7-day price history</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Email support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Current Plan
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-2">
                $9.99
                <span className="text-lg font-normal">/month</span>
              </div>
              <p className="text-blue-100">Or $99/year (save 17%)</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span>Unlimited price alerts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span>Full price history</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span>Exclusive premium deals</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span>Lightning deal alerts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-50">
              Start 7-Day Free Trial
            </Button>
            <p className="text-center text-sm text-blue-100 mt-3">
              Cancel anytime. No hidden fees.
            </p>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  {feature.free ? (
                    <span className="text-gray-600">{feature.free}</span>
                  ) : (
                    <span className="text-gray-400">Not available</span>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-blue-600 font-medium">{feature.premium}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Premium Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-green-600 font-medium">Saved {testimonial.savings}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time with no cancellation fees.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and Apple Pay for your convenience.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! Premium comes with a 7-day free trial so you can test all features risk-free.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How much can I really save?</h3>
              <p className="text-gray-600">Our premium members save an average of $500+ per year through exclusive deals and alerts.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Saving More?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of smart shoppers who upgraded to premium
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Start Your Free Trial
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            7-day free trial • Cancel anytime • No setup fees
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upgrade;
