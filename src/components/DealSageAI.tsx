
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Zap, Crown, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIResponse {
  content: string;
  remainingInquiries: number;
  isUpgradePrompt?: boolean;
}

const DealSageAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inquiriesRemaining, setInquiriesRemaining] = useState(1); // Free tier default
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock user tier - in real app this would come from user context
  const [userTier] = useState<'free' | 'premium'>('free');
  const maxInquiries = userTier === 'premium' ? 25 : 1;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const simulateAIResponse = async (query: string): Promise<AIResponse> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock responses based on query
    const responses = [
      {
        content: `I found a great deal on **Sony WH-1000XM4 Noise-Cancelling Headphones** for **$249.99** (originally $349.99, **29% off**). This is an excellent price for this premium model with industry-leading noise cancellation. The headphones feature 30-hour battery life and touch controls. Based on price history, this is near the lowest price we've seen. Perfect timing to buy!`,
        remainingInquiries: inquiriesRemaining - 1
      },
      {
        content: `Here are the top gaming monitor deals I found:\n\n• **Dell S2721DGF 27" 1440p 165Hz** - **$289.99** (was $350, **17% off**)\n• **ASUS TUF Gaming VG27AQ 1440p 165Hz** - **$259.99** (was $329, **21% off**)\n• **LG 27GL83A-B 1440p 144Hz** - **$199.99** (was $279, **29% off**)\n\nThe LG monitor offers the best value right now. Historically, gaming monitors see bigger drops during Prime Day and Black Friday if you can wait.`,
        remainingInquiries: inquiriesRemaining - 1
      }
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    if (inquiriesRemaining <= 1 && userTier === 'free') {
      return {
        content: randomResponse.content + "\n\n🔒 **You've used your daily inquiry!** Upgrade to **DealSage Pro** for 25 daily inquiries, advanced insights, and priority support.",
        remainingInquiries: 0,
        isUpgradePrompt: true
      };
    }

    return randomResponse;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    if (inquiriesRemaining <= 0) {
      // Show upgrade prompt
      const upgradeMessage: Message = {
        id: Date.now().toString(),
        content: "🔒 You've reached your daily inquiry limit. Upgrade to DealSage Pro for unlimited access!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, upgradeMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await simulateAIResponse(inputValue);
      
      setIsTyping(false);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setInquiriesRemaining(response.remainingInquiries);
    } catch (error) {
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm having trouble processing your request right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/•/g, '•');
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4"
        size="lg"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        Ask DealSage AI
        <Zap className="w-4 h-4 ml-2" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5" />
          <div>
            <h3 className="font-semibold">DealSage AI</h3>
            <p className="text-xs opacity-90">
              {userTier === 'premium' ? (
                <span className="flex items-center">
                  <Crown className="w-3 h-3 mr-1" />
                  Pro: {inquiriesRemaining}/{maxInquiries} remaining
                </span>
              ) : (
                `Free: ${inquiriesRemaining}/${maxInquiries} remaining`
              )}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <Zap className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <p className="text-sm">Ask me anything about deals!</p>
            <p className="text-xs mt-2 text-gray-400">
              Try: "Find me headphones under $200" or "Best laptop deals today"
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: formatMessageContent(message.content)
                }}
              />
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">DealSage is thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        {inquiriesRemaining <= 0 && userTier === 'free' ? (
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Daily limit reached</p>
            <Button 
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
              size="sm"
            >
              <Crown className="w-4 h-4 mr-2" />
              Upgrade to Pro
            </Button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about deals..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealSageAI;
