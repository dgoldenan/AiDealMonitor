import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              AIDealMonitor
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your AI-powered companion for finding the best Amazon deals. 
              Never miss a great discount again.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/deals" className="block text-gray-400 hover:text-white transition-colors text-sm">Browse Deals</Link>
              <Link to="/categories" className="block text-gray-400 hover:text-white transition-colors text-sm">Categories</Link>
              <Link to="/upgrade" className="block text-gray-400 hover:text-white transition-colors text-sm">Premium</Link>
              <Link to="/how-it-works" className="block text-gray-400 hover:text-white transition-colors text-sm">How It Works</Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-gray-400 hover:text-white transition-colors text-sm">Help Center</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Get the hottest deals delivered to your inbox daily.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-slate-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 AIDealMonitor. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>🚀 Made with Lovable</span>
              <span>•</span>
              <span>Amazon Associate Program Participant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
