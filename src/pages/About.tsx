import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-24 px-8 flex-1">
        <div className="container mx-auto max-w-[900px]">
          <h1 className="font-display text-6xl font-bold text-heritage-burgundy text-center mb-8">
            About YantraVeda
          </h1>
          <p className="font-decorative text-4xl text-heritage-gold text-center mb-16">
            Bridging Ancient Wisdom & Modern Technology
          </p>

          <div className="heritage-card p-12 mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
              Our Mission
            </h2>
            <p className="font-body text-lg leading-relaxed text-heritage-brown/90">
              YantraVeda is dedicated to preserving and reviving the astronomical heritage of ancient India. 
              Through computational reconstruction, we bring the magnificent instruments of Jantar Mantar 
              to life, making them accessible to scholars, students, and enthusiasts worldwide.
            </p>
          </div>

          <div className="heritage-card p-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
              The Legacy
            </h2>
            <p className="font-body text-lg leading-relaxed text-heritage-brown/90 mb-4">
              In the 18th century, Maharaja Sawai Jai Singh II constructed the Jantar Mantar observatories 
              across India. These architectural marvels represent the pinnacle of pre-telescope astronomy, 
              combining mathematical precision with monumental construction.
            </p>
            <p className="font-body text-lg leading-relaxed text-heritage-brown/90">
              Each Yantra was carefully calibrated to its specific latitude, demonstrating a deep understanding 
              of celestial mechanics and Earth's position in the cosmos. Today, we use modern computational 
              methods to calculate these ancient designs for any location, preserving this knowledge for 
              future generations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
