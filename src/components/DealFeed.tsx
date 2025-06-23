
import { useState, useEffect } from 'react';
import DealCard from './DealCard';

interface DealFeedProps {
  filters: {
    category: string;
    priceRange: [number, number];
    discount: number;
    sortBy: string;
  };
}

// Mock deals data with EST timestamps
const mockDeals = [
  {
    id: 1,
    title: "Wireless Bluetooth Earbuds with Charging Case",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center&auto=format",
    currentPrice: 29.99,
    originalPrice: 89.99,
    discount: 67,
    category: "Electronics",
    isPrime: true,
    rating: 4.5,
    timeLeft: "2h 15m",
    foundAt: "Dec 23, 3:45 PM EST"
  },
  {
    id: 2,
    title: "Smart Home Security Camera 1080P",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop&crop=center&auto=format",
    currentPrice: 45.99,
    originalPrice: 129.99,
    discount: 65,
    category: "Electronics",
    isPrime: true,
    rating: 4.3,
    timeLeft: "5h 42m",
    foundAt: "Dec 23, 2:20 PM EST"
  },
  {
    id: 3,
    title: "Ergonomic Office Chair with Lumbar Support",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center&auto=format",
    currentPrice: 89.99,
    originalPrice: 199.99,
    discount: 55,
    category: "Home",
    isPrime: false,
    rating: 4.7,
    timeLeft: "1d 3h",
    foundAt: "Dec 23, 1:10 PM EST"
  },
  {
    id: 4,
    title: "Stainless Steel Kitchen Knife Set",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop&crop=center&auto=format",
    currentPrice: 34.99,
    originalPrice: 79.99,
    discount: 56,
    category: "Home",
    isPrime: true,
    rating: 4.6,
    timeLeft: "8h 23m",
    foundAt: "Dec 23, 12:35 PM EST"
  },
  {
    id: 5,
    title: "Athletic Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center&auto=format",
    currentPrice: 59.99,
    originalPrice: 120.00,
    discount: 50,
    category: "Clothing",
    isPrime: true,
    rating: 4.4,
    timeLeft: "12h 5m",
    foundAt: "Dec 23, 11:50 AM EST"
  },
  {
    id: 6,
    title: "Portable Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&crop=center&auto=format",
    currentPrice: 19.99,
    originalPrice: 49.99,
    discount: 60,
    category: "Electronics",
    isPrime: true,
    rating: 4.2,
    timeLeft: "4h 17m",
    foundAt: "Dec 23, 10:25 AM EST"
  }
];

const DealFeed = ({ filters }: DealFeedProps) => {
  const [deals, setDeals] = useState(mockDeals);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate filtering and sorting
    setLoading(true);
    
    setTimeout(() => {
      let filteredDeals = [...mockDeals];
      
      // Filter by category
      if (filters.category !== 'all') {
        filteredDeals = filteredDeals.filter(deal => 
          deal.category.toLowerCase() === filters.category.toLowerCase()
        );
      }
      
      // Filter by discount
      if (filters.discount > 0) {
        filteredDeals = filteredDeals.filter(deal => deal.discount >= filters.discount);
      }
      
      // Sort deals
      switch (filters.sortBy) {
        case 'discount':
          filteredDeals.sort((a, b) => b.discount - a.discount);
          break;
        case 'price-low':
          filteredDeals.sort((a, b) => a.currentPrice - b.currentPrice);
          break;
        case 'price-high':
          filteredDeals.sort((a, b) => b.currentPrice - a.currentPrice);
          break;
        default:
          // Keep original order for 'newest'
          break;
      }
      
      setDeals(filteredDeals);
      setLoading(false);
    }, 500);
  }, [filters]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border p-4 animate-pulse">
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
              <div className="bg-gray-200 h-6 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {deals.length} Deals Found
        </h2>
        <div className="text-sm text-gray-600">
          Updated 2 minutes ago
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealFeed;
