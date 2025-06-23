
import { Star, Clock, Heart, Calendar, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface WarehouseDeal {
  id: number;
  title: string;
  image: string;
  newPrice: number;
  usedPrice: number;
  originalPrice: number;
  condition: string;
  discount: number;
  category: string;
  isPrime: boolean;
  rating: number;
  timeLeft: string;
  foundAt?: string;
}

interface WarehouseDealCardProps {
  deal: WarehouseDeal;
}

const WarehouseDealCard = ({ deal }: WarehouseDealCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const usedSavings = deal.originalPrice - deal.usedPrice;
  const newSavings = deal.originalPrice - deal.newPrice;

  // Get current EST time or use foundAt if provided
  const getESTTime = () => {
    if (deal.foundAt) return deal.foundAt;
    
    const now = new Date();
    const estTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    return estTime.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }) + ' EST';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      {/* Deal Badge */}
      <div className="relative">
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold z-10">
          {deal.discount}% OFF
        </div>
        <div className="absolute top-3 right-3 z-10">
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 rounded-full ${isSaved ? 'text-red-500 bg-white' : 'text-gray-400 bg-white/80'} hover:bg-white hover:text-red-500`}
            onClick={() => setIsSaved(!isSaved)}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img 
            src={deal.image} 
            alt={deal.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Warehouse Badge */}
        <div className="absolute bottom-3 left-3 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
          <Package className="w-3 h-3" />
          Warehouse
        </div>

        {/* Prime Badge */}
        {deal.isPrime && (
          <div className="absolute bottom-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Prime
          </div>
        )}
      </div>

      {/* Deal Info */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-orange-600 font-medium mb-2 uppercase tracking-wide">
          {deal.category}
        </div>
        
        {/* Title */}
        <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 leading-tight">
          {deal.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(deal.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">({deal.rating})</span>
        </div>

        {/* Condition */}
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-medium">
            {deal.condition}
          </span>
        </div>
        
        {/* Pricing - Used vs New */}
        <div className="mb-4 space-y-2">
          {/* Used Price */}
          <div className="p-2 bg-orange-50 rounded border border-orange-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-orange-800">Used Price</span>
              <span className="text-lg font-bold text-orange-600">${deal.usedPrice}</span>
            </div>
            <div className="text-xs text-orange-600">
              Save ${usedSavings.toFixed(2)} vs MSRP
            </div>
          </div>
          
          {/* New Price */}
          <div className="p-2 bg-gray-50 rounded border border-gray-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">New Price</span>
              <span className="text-lg font-bold text-gray-600">${deal.newPrice}</span>
            </div>
            <div className="text-xs text-gray-600">
              Save ${newSavings.toFixed(2)} vs MSRP
            </div>
          </div>

          {/* Original Price */}
          <div className="text-center">
            <span className="text-sm text-gray-500">MSRP: </span>
            <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
          </div>
        </div>
        
        {/* Time Left */}
        <div className="flex items-center gap-1 mb-3 text-orange-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{deal.timeLeft} left</span>
        </div>

        {/* Found Date/Time in EST */}
        <div className="flex items-center gap-1 mb-4 text-gray-500">
          <Calendar className="w-4 h-4" />
          <span className="text-xs">Found: {getESTTime()}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold">
            View Used Deal
          </Button>
          <Button variant="outline" className="w-full text-gray-600 border-gray-300 hover:bg-gray-50">
            View New Deal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDealCard;
