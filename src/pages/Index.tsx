
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DealFilters from '@/components/DealFilters';
import DealFeed from '@/components/DealFeed';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Index = () => {
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    discount: 0,
    sortBy: 'newest'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <DealFilters filters={filters} setFilters={setFilters} />
            <DealFeed filters={filters} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
