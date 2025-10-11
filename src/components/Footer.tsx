import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-heritage-brown to-[#2A1810] text-heritage-parchment border-t-4 border-heritage-gold pt-16 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 h-3 bg-repeat-x" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          hsl(var(--gold-antique)) 0px,
          hsl(var(--gold-antique)) 10px,
          transparent 10px,
          transparent 12px,
          hsl(var(--bronze-copper)) 12px,
          hsl(var(--bronze-copper)) 14px,
          transparent 14px,
          transparent 24px
        )`
      }}></div>

      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-3xl font-bold text-heritage-gold mb-4">
              YantraVeda
            </h3>
            <p className="font-body text-[15px] leading-relaxed opacity-90">
              Reviving ancient India's monumental astronomical instruments through computational reconstruction and interactive exploration.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-heritage-cream">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-heritage-gold hover:text-heritage-cream transition-all hover:text-shadow-[0_0_8px_rgba(212,175,55,0.5)] font-body">
                Home
              </Link>
              <Link to="/about" className="text-heritage-gold hover:text-heritage-cream transition-all font-body">
                About
              </Link>
              <Link to="/learn" className="text-heritage-gold hover:text-heritage-cream transition-all font-body">
                Learn
              </Link>
              <Link to="/create" className="text-heritage-gold hover:text-heritage-cream transition-all font-body">
                Create
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-heritage-cream">
              Legal
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <Link to="/privacy-policy" className="text-heritage-gold hover:text-heritage-cream transition-all font-body">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-heritage-gold hover:text-heritage-cream transition-all font-body">
                Terms of Service
              </Link>
            </div>

            <h4 className="font-heading text-xl font-semibold mb-4 text-heritage-cream">
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-heritage-gold hover:text-heritage-cream hover:scale-110 transition-all">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-heritage-gold hover:text-heritage-cream hover:scale-110 transition-all">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-heritage-gold hover:text-heritage-cream hover:scale-110 transition-all">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-heritage-gold hover:text-heritage-cream hover:scale-110 transition-all">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-heritage-gold/30 pt-8 text-center">
          <p className="font-body text-sm text-heritage-parchment/70 italic">
            © 2025 YantraVeda. All rights reserved. Honoring India's astronomical heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};
