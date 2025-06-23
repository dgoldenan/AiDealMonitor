
import { useState } from 'react';
import { Eye, EyeOff, Check, Brain, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const benefits = [
    "Track your favorite deals",
    "Set price alerts",
    "Get exclusive offers",
    "Price history tracking",
    "Mobile notifications",
    "DealSage AI assistant (1 inquiry/day)",
    "Real-time deal updates"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Registration Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 animate-fade-in">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-600">Join thousands of smart shoppers saving money with AI</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Must be at least 8 characters long
                  </p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-colors duration-200"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="/terms" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="marketing"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-colors duration-200"
                      defaultChecked
                    />
                    <label htmlFor="marketing" className="ml-2 text-sm text-gray-700">
                      Send me deal alerts and promotional emails
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Create Account
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in here
                </a>
              </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-8 rounded-2xl text-white relative overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">Why Join AIDealMonitor?</h2>
                
                <div className="space-y-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${300 + index * 50}ms` }}>
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* DealSage AI Highlight */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-6 animate-scale-in" style={{ animationDelay: '600ms' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">Meet DealSage AI</span>
                  </div>
                  <p className="text-sm text-blue-100 mb-3">
                    Your personal AI deal assistant. Ask questions, get recommendations, and discover deals in natural language.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      <span>1 inquiry/day free</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Brain className="w-3 h-3 text-yellow-400" />
                      <span>25 inquiries with Premium</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Join 50,000+ Smart Shoppers</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Our community has saved over $2.5 million on Amazon purchases this year alone with AI-powered deal discovery.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div>
                      <div className="font-semibold">10,000+</div>
                      <div className="text-blue-200">Active Deals</div>
                    </div>
                    <div>
                      <div className="font-semibold">24/7</div>
                      <div className="text-blue-200">AI Monitoring</div>
                    </div>
                    <div>
                      <div className="font-semibold">Free</div>
                      <div className="text-blue-200">Forever</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
