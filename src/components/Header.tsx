
import { useState } from 'react';
import { Search, User, Menu, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              AIDealMonitor
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/deals" className="hover:text-blue-400 transition-colors">Deals</Link>
            <Link to="/warehouse-deals" className="hover:text-blue-400 transition-colors">Warehouse Deals</Link>
            <Link to="/categories" className="hover:text-blue-400 transition-colors">Categories</Link>
            <Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
            <Link to="/upgrade">
              <Button variant="outline" className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-slate-800">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for deals..."
                className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden md:flex items-center">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for deals..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Link to="/deals" className="hover:text-blue-400 transition-colors">Deals</Link>
              <Link to="/warehouse-deals" className="hover:text-blue-400 transition-colors">Warehouse Deals</Link>
              <Link to="/categories" className="hover:text-blue-400 transition-colors">Categories</Link>
              <Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
              <Link to="/upgrade">
                <Button variant="outline" className="text-yellow-400 border-yellow-400 w-fit">
                  <Crown className="w-4 h-4 mr-2" />
                  Premium
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
