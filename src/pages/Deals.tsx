
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DealFilters from '@/components/DealFilters';
import DealFeed from '@/components/DealFeed';

const Deals = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000] as [number, number],
    discount: 0,
    sortBy: 'newest'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Deals
          </h1>
          <p className="text-gray-600">
            Discover the latest Amazon deals, updated in real-time
          </p>
        </div>

        {/* Filters and Feed */}
        <DealFilters filters={filters} setFilters={setFilters} />
        <DealFeed filters={filters} />
      </div>

      <Footer />
    </div>
  );
};

export default Deals;
