
import { Star, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Deal {
  id: number;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  category: string;
  isPrime: boolean;
  rating: number;
  timeLeft: string;
}

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({ deal }: DealCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const savings = deal.originalPrice - deal.currentPrice;

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      {/* Deal Badge */}
      <div className="relative">
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold z-10">
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
        
        {/* Prime Badge */}
        {deal.isPrime && (
          <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Prime
          </div>
        )}
      </div>

      {/* Deal Info */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
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
        
        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-green-600">
              ${deal.currentPrice}
            </span>
            <span className="text-gray-500 line-through">
              ${deal.originalPrice}
            </span>
          </div>
          <div className="text-sm text-green-600 font-medium">
            Save ${savings.toFixed(2)}
          </div>
        </div>
        
        {/* Time Left */}
        <div className="flex items-center gap-1 mb-4 text-orange-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{deal.timeLeft} left</span>
        </div>
        
        {/* Action Button */}
        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold">
          View Deal
        </Button>
      </div>
    </div>
  );
};

export default DealCard;
