
import { Smartphone, Home, Shirt, Book, Dumbbell, Car, Baby, Gamepad2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const categories = [
    {
      icon: Smartphone,
      name: "Electronics",
      count: 2845,
      description: "Smartphones, laptops, gadgets, and tech accessories",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Home,
      name: "Home & Garden",
      count: 1932,
      description: "Furniture, decor, kitchen appliances, and garden tools",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shirt,
      name: "Fashion",
      count: 1567,
      description: "Clothing, shoes, accessories, and jewelry",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Book,
      name: "Books & Media",
      count: 892,
      description: "Books, audiobooks, movies, and music",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Dumbbell,
      name: "Sports & Fitness",
      count: 756,
      description: "Exercise equipment, sportswear, and outdoor gear",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Car,
      name: "Automotive",
      count: 634,
      description: "Car accessories, tools, and maintenance supplies",
      color: "bg-gray-100 text-gray-600"
    },
    {
      icon: Baby,
      name: "Baby & Kids",
      count: 523,
      description: "Baby products, toys, and children's items",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Gamepad2,
      name: "Gaming",
      count: 445,
      description: "Video games, consoles, and gaming accessories",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Deal Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore deals across all your favorite categories. Find exactly what you're looking for 
            with our organized deal collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  {category.count} active deals
                </span>
                <Button variant="outline" size="sm">
                  Browse
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Deals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2.5M+</div>
              <div className="text-gray-600">Money Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Deal Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
