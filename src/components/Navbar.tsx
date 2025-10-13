import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Compass, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { LoginDialog } from "./LoginDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const location = useLocation();
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-heritage-burgundy/85 backdrop-blur-md border-b-[3px] border-heritage-gold shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-8 h-full flex items-center justify-between max-w-[1400px]">
          <Link 
            to="/" 
            className="font-display text-2xl font-bold text-heritage-gold hover:text-heritage-cream transition-colors"
          >
            YantraVeda
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`font-display text-[15px] font-medium uppercase tracking-[0.1em] transition-all relative ${
                isActive("/")
                  ? "text-heritage-cream"
                  : "text-heritage-gold hover:text-heritage-cream hover:animate-[golden-glow_1.5s_ease-in-out]"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-heritage-gold to-transparent animate-pulse" />
              )}
            </Link>
            <Link
              to="/about"
              className={`font-display text-[15px] font-medium uppercase tracking-[0.1em] transition-all relative ${
                isActive("/about")
                  ? "text-heritage-cream"
                  : "text-heritage-gold hover:text-heritage-cream hover:animate-[golden-glow_1.5s_ease-in-out]"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-heritage-gold to-transparent animate-pulse" />
              )}
            </Link>
            <Link
              to="/learn"
              className={`font-display text-[15px] font-medium uppercase tracking-[0.1em] transition-all relative ${
                isActive("/learn")
                  ? "text-heritage-cream"
                  : "text-heritage-gold hover:text-heritage-cream hover:animate-[golden-glow_1.5s_ease-in-out]"
              }`}
            >
              Learn
              {isActive("/learn") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-heritage-gold to-transparent animate-pulse" />
              )}
            </Link>
            <Link
              to="/create"
              className={`font-display text-[15px] font-medium uppercase tracking-[0.1em] transition-all relative ${
                isActive("/create")
                  ? "text-heritage-cream"
                  : "text-heritage-gold hover:text-heritage-cream hover:animate-[golden-glow_1.5s_ease-in-out]"
              }`}
            >
              Create
              {isActive("/create") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-heritage-gold to-transparent animate-pulse" />
              )}
            </Link>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="nav" 
                    size="sm"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {user?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-48 bg-heritage-cream border-2 border-heritage-gold z-[60]"
                >
                  <DropdownMenuItem 
                    className="font-body text-heritage-brown hover:bg-heritage-parchment cursor-pointer"
                    disabled
                  >
                    <User className="w-4 h-4 mr-2" />
                    My Creations
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={logout}
                    className="font-body text-heritage-burgundy hover:bg-heritage-parchment cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="nav" 
                size="sm"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
            )}

            <button
              onClick={() => setShowChatbot(!showChatbot)}
              className="ml-4 text-heritage-gold hover:text-heritage-cream transition-all hover:rotate-180 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] duration-300"
            >
              <Compass size={32} />
            </button>
          </div>
        </div>
      </nav>

      {showChatbot && (
        <div className="fixed bottom-8 right-8 z-50 w-96 h-[500px] bg-heritage-brown/95 backdrop-blur-md border-2 border-heritage-gold rounded-lg shadow-2xl flex flex-col">
          <div className="p-4 border-b border-heritage-gold flex justify-between items-center">
            <h3 className="font-display text-lg text-heritage-cream">AI Guide</h3>
            <button onClick={() => setShowChatbot(false)} className="text-heritage-gold hover:text-heritage-cream">
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-heritage-burgundy/30 rounded-lg p-3 mb-3">
              <p className="text-heritage-parchment text-sm font-body">
                Welcome to YantraVeda! I can help you understand ancient astronomical instruments and guide you through creating your own calculations.
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-heritage-gold">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full px-4 py-2 bg-heritage-cream text-heritage-brown border-2 border-heritage-bronze rounded-md focus:outline-none focus:border-heritage-gold font-body"
            />
          </div>
        </div>
      )}

      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </>
  );
};
