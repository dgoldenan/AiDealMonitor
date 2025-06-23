
import { useState } from 'react';
import { Search, User, Menu, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 border-b border-slate-700/50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 animate-pulse"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="group flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-blue-500 transition-all duration-300">
                AIDealMonitor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { to: "/deals", label: "Deals" },
              { to: "/warehouse-deals", label: "Warehouse Deals" },
              { to: "/categories", label: "Categories" },
              { to: "/how-it-works", label: "How It Works" }
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="relative px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            <Link to="/upgrade" className="ml-2">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 w-4 h-4 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search for deals..."
                className="w-full pl-10 pr-4 py-2 bg-slate-700/50 backdrop-blur-sm text-white placeholder-gray-400 rounded-lg border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden md:flex items-center hover:bg-white/10 transition-all duration-300">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 w-4 h-4 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search for deals..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 backdrop-blur-sm text-white placeholder-gray-400 rounded-lg border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
              {[
                { to: "/deals", label: "Deals" },
                { to: "/warehouse-deals", label: "Warehouse Deals" },
                { to: "/categories", label: "Categories" },
                { to: "/how-it-works", label: "How It Works" }
              ].map((item, index) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="hover:text-blue-400 transition-colors duration-300 py-2 hover:bg-white/5 rounded-lg px-2 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/upgrade" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white w-fit transition-all duration-300">
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
