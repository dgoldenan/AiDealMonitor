
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover the Best{' '}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Amazon Deals
              </span>{' '}
              in Real-Time
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Never miss a great deal again. Our AI-powered platform monitors millions of products 
              24/7 to bring you the hottest discounts and lightning deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3">
                <Zap className="w-5 h-5 mr-2" />
                Start Finding Deals
              </Button>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm">
                  <span className="font-bold text-white">50,000+</span>
                  <span className="text-gray-300"> deals tracked daily</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">
                  <span className="font-bold text-white">100K+</span>
                  <span className="text-gray-300"> happy users</span>
                </span>
              </div>
            </div>
          </div>

          {/* Featured Deal Showcase */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-800">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                75% OFF - Limited Time!
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop&crop=center&auto=format" 
                       alt="Product" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Wireless Bluetooth Headphones</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold text-green-600">$24.99</span>
                    <span className="text-gray-500 line-through">$99.99</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                View This Deal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
