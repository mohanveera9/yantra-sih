import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIGuideProps {
  onClose: () => void;
}

export const AIGuide = ({ onClose }: AIGuideProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to YantraVeda! I can help you understand ancient astronomical instruments and guide you through creating your own calculations.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dummy responses database
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("samrat yantra")) {
      return "The Samrat Yantra is the largest and most impressive sundial at Jantar Mantar observatories. Built by Maharaja Jai Singh II, it features a massive triangular gnomon that rises 27 meters high. This instrument can measure time with an accuracy of about 2 seconds and also helps determine declinations and other celestial coordinates.";
    }

    if (lowerMessage.includes("jantar mantar")) {
      return "Jantar Mantar refers to a collection of architectural astronomical instruments built by Maharaja Jai Singh II in the early 18th century. There are five such observatories in India - in Jaipur, Delhi, Ujjain, Varanasi, and Mathura. These monuments showcase the scientific advancement and astronomical knowledge of ancient India.";
    }

    if (lowerMessage.includes("ram yantra")) {
      return "The Ram Yantra consists of two complementary cylindrical structures used to measure the altitude and azimuth of celestial objects. Each structure has graduated scales on the floor and walls, allowing astronomers to track the position of stars and planets throughout the night sky.";
    }

    if (lowerMessage.includes("jai prakash yantra")) {
      return "The Jai Prakash Yantra is a unique hemispherical sundial named after its creator, Maharaja Jai Singh II. It consists of two complementary hemispheres with crosswires suspended at their centers. This instrument can measure the position of the sun and other celestial bodies throughout the day.";
    }

    if (lowerMessage.includes("sundial") || lowerMessage.includes("time")) {
      return "Ancient Indian sundials were sophisticated instruments that used the shadow cast by the sun to tell time. The Samrat Yantra is the most famous example, but there are many types of sundials, each designed for specific astronomical calculations and time measurements.";
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Namaste! How can I assist you in your journey through ancient Indian astronomy today?";
    }

    if (lowerMessage.includes("help")) {
      return "I can help you with information about various Yantras (astronomical instruments) like Samrat Yantra, Ram Yantra, Jai Prakash Yantra, and more. Feel free to ask about any specific instrument or astronomical concept!";
    }

    if (lowerMessage.includes("create") || lowerMessage.includes("build")) {
      return "Would you like to create your own astronomical calculations? Visit the 'Create' section to explore interactive tools for celestial measurements and astronomical computations inspired by ancient instruments.";
    }

    // Default response
    return "That's an interesting question! While I have knowledge about ancient astronomical instruments like Samrat Yantra, Ram Yantra, and Jai Prakash Yantra, I'd need more specific details to help you better. Could you ask about a particular Yantra or astronomical concept?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Random delay between 1-3 seconds
    const randomDelay = Math.floor(Math.random() * 2000) + 1000;

    // Get AI response with random delay
    setTimeout(() => {
      const aiResponseText = getAIResponse(userMessage.text);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, randomDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="fixed bottom-8 right-8 z-50 w-96 h-[500px] bg-heritage-brown/95 backdrop-blur-md border-2 border-heritage-gold rounded-lg shadow-2xl flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-heritage-gold flex justify-between items-center">
        <h3 className="font-display text-lg text-heritage-cream">AI Guide</h3>
        <button
          onClick={onClose}
          className="text-heritage-gold hover:text-heritage-cream transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Area with custom scrollbar */}
      <div 
        className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-heritage-gold scrollbar-track-heritage-brown/30"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#D4AF37 rgba(74, 44, 42, 0.3)'
        }}
      >
        <style>{`
          .scrollbar-thin::-webkit-scrollbar {
            width: 8px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: rgba(74, 44, 42, 0.3);
            border-radius: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #D4AF37;
            border-radius: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: #C19B2E;
          }
        `}</style>
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-lg p-3 ${
              message.sender === "ai"
                ? "bg-heritage-burgundy/30 text-heritage-parchment"
                : "bg-heritage-gold/20 text-heritage-cream ml-8"
            }`}
          >
            <p className="text-sm font-body leading-relaxed">{message.text}</p>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="rounded-lg p-3 bg-heritage-burgundy/30 text-heritage-parchment flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-heritage-gold" />
            <p className="text-sm font-body">Thinking...</p>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-heritage-gold">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-heritage-cream text-heritage-brown border-2 border-heritage-bronze rounded-md focus:outline-none focus:border-heritage-gold font-body text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="px-4 py-2 bg-heritage-gold text-heritage-brown rounded-md hover:bg-heritage-cream transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};