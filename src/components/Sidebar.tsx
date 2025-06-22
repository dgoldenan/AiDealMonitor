
import { Crown, TrendingUp, Eye, Tag } from 'lucide-react';
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
      <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Crown className="w-5 h-5 text-yellow-600" />
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Go Premium
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Price alerts & notifications
            </li>
            <li className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-500" />
              Advanced price history
            </li>
            <li className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-purple-500" />
              Exclusive premium deals
            </li>
          </ul>
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
            Upgrade Now - $9.99/mo
          </Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium text-gray-700">{category.name}</span>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recently Viewed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recently Viewed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDeals.map((deal, index) => (
              <div key={index} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <img 
                  src={deal.image}
                  alt={deal.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
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
