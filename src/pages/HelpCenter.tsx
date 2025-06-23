
import { Search, MessageCircle, Book, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HelpCenter = () => {
  const topics = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using LiveDealMonitor",
      articles: 8
    },
    {
      icon: MessageCircle,
      title: "Account & Billing",
      description: "Manage your account and subscription",
      articles: 12
    },
    {
      icon: Search,
      title: "Finding Deals",
      description: "Tips for discovering the best deals",
      articles: 6
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Troubleshooting and technical issues",
      articles: 15
    }
  ];

  const faqs = [
    {
      question: "How often are deals updated?",
      answer: "Our system monitors Amazon deals 24/7 and updates every few minutes to ensure you never miss a great deal."
    },
    {
      question: "Is LiveDealMonitor free to use?",
      answer: "Yes! We offer a free tier with basic features. Premium members get additional benefits like price alerts and exclusive deals."
    },
    {
      question: "How do price alerts work?",
      answer: "Set up alerts for specific products or price ranges. We'll notify you instantly via email or push notification when deals match your criteria."
    },
    {
      question: "Are the deals legitimate?",
      answer: "All deals are sourced directly from Amazon and verified by our system. We're official Amazon associates."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Help Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <topic.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
              <span className="text-sm text-blue-600 font-medium">
                {topic.articles} articles
              </span>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Support
            </Button>
            <Button variant="outline">
              Browse All Articles
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
