import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Compass } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="text-center max-w-[600px]">
          <div className="mb-8 flex justify-center">
            <Compass size={120} className="text-heritage-gold opacity-30" />
          </div>
          
          <h1 className="font-display text-8xl font-black text-heritage-burgundy mb-4">
            404
          </h1>
          
          <h2 className="font-heading text-4xl font-bold text-heritage-brown mb-6">
            Lost in the Cosmos
          </h2>
          
          <p className="font-body text-lg text-heritage-brown/90 mb-8 leading-relaxed">
            The celestial path you seek does not exist in our astronomical charts. 
            Let us guide you back to familiar constellations.
          </p>
          
          <Link to="/">
            <Button variant="hero" size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
