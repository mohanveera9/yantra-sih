import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import divisor from "../assets/divisor.svg";
import ele from "../assets/ele.svg";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-heritage-brown to-[#2A1810] text-heritage-parchment pt-16 pb-10 relative">
      {/* Decorative moving elephants */}
      {/* Decorative moving elephants */}
      {/* Decorative moving elephants */}
      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "0s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-2.5s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-5s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-7.5s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-10s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-12.5s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-15s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-17.5s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-20s" }}
        />
      </div>

      <div className="absolute w-full z-5" style={{ bottom: "calc(100% - 8px)" }} >
        <img
          src={ele}
          alt=""
          className="w-32 h-auto animate-move-left-to-right "
          style={{ left: '-64px', animationDuration: "25s", animationDelay: "-22.5s" }}
        />
      </div>
      {/* Original divisor */}
      <img src={divisor} alt="Mohan" className="top-0 left-0 absolute w-full" />
      <div className="pt-10"></div>

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
