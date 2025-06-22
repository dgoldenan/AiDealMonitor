
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              LiveDealMonitor
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted companion for finding the best Amazon deals. 
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
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Browse Deals</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Categories</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Premium</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
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
              © 2024 LiveDealMonitor. All rights reserved.
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
