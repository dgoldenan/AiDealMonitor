
import { Crown, TrendingUp, Eye, Tag, Brain, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Sidebar = () => {
  const categories = [
    { name: "Electronics", count: 1245, icon: "📱" },
    { name: "Home & Garden", count: 892, icon: "🏠" },
    { name: "Clothing", count: 567, icon: "👕" },
    { name: "Books", count: 234, icon: "📚" },
    { name: "Sports", count: 445, icon: "⚽" }
  ];

  const recentDeals = [
    {
      title: "Smart Watch Fitness Tracker",
      price: "$39.99",
      originalPrice: "$99.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop&crop=center&auto=format"
    },
    {
      title: "Wireless Charging Pad",
      price: "$15.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1594436040410-4f6c5b79c3c4?w=80&h=80&fit=crop&crop=center&auto=format"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Premium Upgrade */}
      <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 overflow-hidden relative animate-fade-in">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full -translate-y-10 translate-x-10"></div>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Crown className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Go Premium
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white mb-3 animate-scale-in">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4" />
              <span className="font-semibold text-sm">DealSage AI Premium</span>
            </div>
            <p className="text-xs text-blue-100">Get 25x more AI inquiries daily + advanced features</p>
          </div>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:bg-yellow-100/50 p-1 rounded transition-colors duration-200">
              <Zap className="w-4 h-4 text-blue-500" />
              25 AI inquiries per day
            </li>
            <li className="flex items-center gap-2 hover:bg-yellow-100/50 p-1 rounded transition-colors duration-200">
              <Brain className="w-4 h-4 text-purple-500" />
              Advanced AI conversations
            </li>
            <li className="flex items-center gap-2 hover:bg-yellow-100/50 p-1 rounded transition-colors duration-200">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Price alerts & predictions
            </li>
            <li className="flex items-center gap-2 hover:bg-yellow-100/50 p-1 rounded transition-colors duration-200">
              <Eye className="w-4 h-4 text-blue-500" />
              Advanced price history
            </li>
            <li className="flex items-center gap-2 hover:bg-yellow-100/50 p-1 rounded transition-colors duration-200">
              <Tag className="w-4 h-4 text-purple-500" />
              Exclusive premium deals
            </li>
            <li className="flex items-center gap-2 hover:bg-yellow-100/50 p-1 rounded transition-colors duration-200">
              <Clock className="w-4 h-4 text-orange-500" />
              Priority AI processing
            </li>
          </ul>
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Upgrade Now - $9.99/mo
          </Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <CardHeader>
          <CardTitle className="text-lg">Popular Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${150 + index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                  <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">{category.name}</span>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 group-hover:bg-blue-100 group-hover:text-blue-700 px-2 py-1 rounded-full transition-all duration-200">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recently Viewed */}
      <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <CardHeader>
          <CardTitle className="text-lg">Recently Viewed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDeals.map((deal, index) => (
              <div key={index} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 group animate-fade-in" style={{ animationDelay: `${400 + index * 50}ms` }}>
                <img 
                  src={deal.image}
                  alt={deal.title}
                  className="w-12 h-12 object-cover rounded group-hover:scale-110 transition-transform duration-200"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-200">
                    {deal.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-green-600">{deal.price}</span>
                    <span className="text-xs text-gray-500 line-through">{deal.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
