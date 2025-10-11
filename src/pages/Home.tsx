import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-yantra.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-40 px-8 relative overflow-hidden"
        style={{ 
          background: 'var(--gradient-hero)',
          backgroundImage: `linear-gradient(135deg, rgba(107, 40, 40, 0.85) 0%, rgba(62, 34, 22, 0.85) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, transparent 30%, hsl(var(--gold-antique)) 30%, hsl(var(--gold-antique)) 30.5%, transparent 30.5%), 
                             radial-gradient(circle at 80% 50%, transparent 0%, transparent 30%, hsl(var(--gold-antique)) 30%, hsl(var(--gold-antique)) 30.5%, transparent 30.5%)`,
            backgroundSize: '400px 400px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-[1200px] text-center relative z-10">
          <h1 className="font-display text-7xl lg:text-8xl font-black uppercase tracking-[0.15em] mb-6 gradient-text text-shadow-hero animate-fade-in">
            YantraVeda
          </h1>
          <p className="font-devanagari text-4xl text-heritage-gold mb-12 opacity-90">
            यंत्रवेद
          </p>
          <p className="font-serif text-xl leading-relaxed max-w-[900px] mx-auto text-heritage-parchment mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Reviving ancient India's monumental astronomical instruments through computational reconstruction, 
            transforming sacred geometry and celestial mechanics into interactive, location-specific experiences.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-8">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Learn Card */}
            <div className="heritage-card p-12 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-heritage-gold rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-heritage-gold rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-heritage-gold rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-heritage-gold rounded-br-lg"></div>

              <h2 className="font-heading text-5xl font-bold text-heritage-burgundy mb-6">
                Learn
              </h2>
              <p className="font-body text-lg leading-relaxed text-heritage-brown/90 mb-8">
                Journey through India's astronomical golden age—discover the science and celestial mechanics 
                behind instruments like the Samrat Yantra and Rama Yantra, where ancient masters predicted 
                eclipses and measured the universe with breathtaking precision.
              </p>
              <Link to="/learn">
                <Button variant="secondary" size="lg" className="w-full">
                  Explore Knowledge
                </Button>
              </Link>
            </div>

            {/* Create Card */}
            <div className="heritage-card p-12 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-heritage-gold rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-heritage-gold rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-heritage-gold rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-heritage-gold rounded-br-lg"></div>

              <h2 className="font-heading text-5xl font-bold text-heritage-burgundy mb-6">
                Create
              </h2>
              <p className="font-body text-lg leading-relaxed text-heritage-brown/90 mb-8">
                Become a celestial architect. Enter your location and let YantraVeda calculate authentic 
                dimensions for an astronomical instrument calibrated to your latitude—bringing ancient science 
                to your doorstep.
              </p>
              <Link to="/create">
                <Button variant="hero" size="lg" className="w-full">
                  Begin Creation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
