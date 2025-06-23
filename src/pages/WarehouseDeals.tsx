
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WarehouseDealCard from '@/components/WarehouseDealCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, Filter } from 'lucide-react';

const WarehouseDeals = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    condition: 'all',
    sortBy: 'newest'
  });

  // Mock warehouse deals data
  const warehouseDeals = [
    {
      id: 1,
      title: "Apple MacBook Air 13-inch M1 Chip",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop&crop=center&auto=format",
      newPrice: 899.99,
      usedPrice: 749.99,
      originalPrice: 999.99,
      condition: "Like New",
      discount: 25,
      category: "Electronics",
      isPrime: true,
      rating: 4.8,
      timeLeft: "3h 45m",
      foundAt: "Dec 23, 2:30 PM EST"
    },
    {
      id: 2,
      title: "Sony WH-1000XM4 Wireless Headphones",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center&auto=format",
      newPrice: 279.99,
      usedPrice: 199.99,
      originalPrice: 349.99,
      condition: "Very Good",
      discount: 43,
      category: "Electronics",
      isPrime: true,
      rating: 4.6,
      timeLeft: "1d 2h",
      foundAt: "Dec 23, 1:15 PM EST"
    },
    {
      id: 3,
      title: "KitchenAid Stand Mixer Classic",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&crop=center&auto=format",
      newPrice: 299.99,
      usedPrice: 229.99,
      originalPrice: 379.99,
      condition: "Good",
      discount: 39,
      category: "Home & Kitchen",
      isPrime: false,
      rating: 4.7,
      timeLeft: "8h 20m",
      foundAt: "Dec 23, 12:45 PM EST"
    },
    {
      id: 4,
      title: "Dyson V11 Cordless Vacuum",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop&crop=center&auto=format",
      newPrice: 499.99,
      usedPrice: 349.99,
      originalPrice: 599.99,
      condition: "Like New",
      discount: 42,
      category: "Home & Kitchen",
      isPrime: true,
      rating: 4.5,
      timeLeft: "5h 30m",
      foundAt: "Dec 23, 11:20 AM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Amazon Warehouse Deals
            </h1>
          </div>
          <p className="text-gray-600">
            Find amazing deals on open-box, returned, and warehouse items with significant savings
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-2 mb-4 lg:mb-0">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>

            {/* Category Filter */}
            <div className="flex-1">
              <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="home">Home & Kitchen</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="sports">Sports & Outdoors</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Condition Filter */}
            <div className="flex-1">
              <Select value={filters.condition} onValueChange={(value) => setFilters({...filters, condition: value})}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Conditions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="like-new">Like New</SelectItem>
                  <SelectItem value="very-good">Very Good</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="acceptable">Acceptable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort Filter */}
            <div className="flex-1">
              <Select value={filters.sortBy} onValueChange={(value) => setFilters({...filters, sortBy: value})}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="discount">Highest Discount</SelectItem>
                  <SelectItem value="price-low">Lowest Price</SelectItem>
                  <SelectItem value="price-high">Highest Price</SelectItem>
                  <SelectItem value="condition">Best Condition</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {warehouseDeals.length} Warehouse Deals Found
            </h2>
            <div className="text-sm text-gray-600">
              Updated 5 minutes ago
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouseDeals.map(deal => (
              <WarehouseDealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WarehouseDeals;
