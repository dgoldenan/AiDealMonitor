
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DealFiltersProps {
  filters: {
    category: string;
    priceRange: [number, number];
    discount: number;
    sortBy: string;
  };
  setFilters: (filters: any) => void;
}

const DealFilters = ({ filters, setFilters }: DealFiltersProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Category Filter */}
        <div className="flex-1">
          <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="sports">Sports & Outdoors</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Discount Filter */}
        <div className="flex-1">
          <Select value={filters.discount.toString()} onValueChange={(value) => setFilters({...filters, discount: parseInt(value)})}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Min Discount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any Discount</SelectItem>
              <SelectItem value="25">25% or more</SelectItem>
              <SelectItem value="50">50% or more</SelectItem>
              <SelectItem value="75">75% or more</SelectItem>
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
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Grid className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealFilters;
