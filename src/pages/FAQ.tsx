
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is LiveDealMonitor?",
          answer: "LiveDealMonitor is a comprehensive platform that tracks Amazon deals in real-time, helping you find the best discounts and save money on your purchases. We monitor thousands of products 24/7 to bring you the most current deals available."
        },
        {
          question: "How often are deals updated?",
          answer: "Our advanced monitoring system updates deals every few minutes throughout the day. This ensures you never miss time-sensitive offers and always have access to the latest discounts available on Amazon."
        },
        {
          question: "Is LiveDealMonitor free to use?",
          answer: "Yes! We offer a free tier that includes access to basic deal browsing and filtering. Premium members get additional features like price alerts, exclusive deals, price history tracking, and priority support."
        }
      ]
    },
    {
      category: "Deals & Pricing",
      questions: [
        {
          question: "How do you verify deal authenticity?",
          answer: "All deals are sourced directly from Amazon through official channels. We verify pricing accuracy and availability in real-time. As official Amazon associates, we ensure all deals meet Amazon's terms and conditions."
        },
        {
          question: "Why do some deals expire or become unavailable?",
          answer: "Amazon deals are often time-limited or have limited quantities. Popular deals can sell out quickly, and Amazon may end promotions at any time. We recommend acting fast on deals you're interested in."
        },
        {
          question: "Can I get price alerts for specific products?",
          answer: "Yes! Premium members can set up price alerts for specific products or categories. You'll receive instant notifications via email or mobile app when prices drop or match your criteria."
        }
      ]
    },
    {
      category: "Account & Premium",
      questions: [
        {
          question: "What are the benefits of Premium membership?",
          answer: "Premium members enjoy exclusive deals, advanced price alerts, detailed price history graphs, priority customer support, and early access to Lightning Deals. Premium also removes ads and provides unlimited alert creation."
        },
        {
          question: "How much does Premium cost?",
          answer: "Premium membership is $9.99/month or $99/year (save 17%). We also offer a 7-day free trial so you can experience all premium features before committing."
        },
        {
          question: "Can I cancel my Premium subscription anytime?",
          answer: "Absolutely! You can cancel your Premium subscription at any time from your account settings. Your premium features will remain active until the end of your current billing period."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "Why am I not receiving email notifications?",
          answer: "Check your spam folder first. If emails aren't there, verify your email address in account settings and ensure notifications are enabled. You may also need to whitelist our email domain."
        },
        {
          question: "The mobile app isn't working properly. What should I do?",
          answer: "Try closing and reopening the app first. If issues persist, check for app updates in your device's app store. For continued problems, contact our support team with your device model and app version."
        },
        {
          question: "How do I report a bug or technical issue?",
          answer: "Use our contact form or email support@livedealmonitor.com with a detailed description of the issue, including your browser/device info and steps to reproduce the problem. Screenshots are helpful too!"
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about LiveDealMonitor, 
            our services, and how to get the most out of your deal hunting experience.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 1000 + questionIndex;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div key={questionIndex} className="bg-white rounded-lg shadow-sm border">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 bg-white p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Didn't Find Your Answer?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help with any questions not covered here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="/help" 
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
