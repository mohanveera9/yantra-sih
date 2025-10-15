import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModelViewer } from "@/components/ModelViewer";
import samratModel from "../assets/models/samrat.glb";
import ramaModel from "../assets/models/rama.glb";
import dhakshinottaraModel from "../assets/models/dhakshinottara.glb";

// Convert various Google Maps Street View URLs to an embeddable URL.
// We extract lat/lng if present in patterns like .../@lat,lng,3a,... and build an embed link.
// Convert various Google Maps Street View URLs to an embeddable URL.
// We extract lat/lng and pano ID if present and build a proper embed link.
function getEmbedStreetViewUrl(rawUrl: string | null): string | null {
  if (!rawUrl) return null;

  try {
    // Extract coordinates from patterns like https://www.google.com/maps/@lat,lng,3a,...
    const coordMatch = rawUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);

    // Extract panorama ID from patterns like !1sCAoSLEFGMVFpcE5mcj...
    const panoMatch = rawUrl.match(/!1s([A-Za-z0-9_-]+)/);

    if (coordMatch && coordMatch[1] && coordMatch[2]) {
      const lat = coordMatch[1];
      const lng = coordMatch[2];

      // If we have a panorama ID, use it for better accuracy
      if (panoMatch && panoMatch[1]) {
        return `https://www.google.com/maps/embed?pb=!4v${Date.now()}!6m8!1m7!1s${panoMatch[1]}!2m2!1d${lat}!2d${lng}!3f0!4f0!5f0.7820865974627469`;
      }

      // Otherwise use coordinates only
      return `https://www.google.com/maps/embed?pb=!4v${Date.now()}!6m8!1m7!1sCAoSLEFGMVFpcE5mcjRKS0l2RzY5OFhxNzBSTGlVYzNXTlN6VGRXYnFTVkpXTUZx!2m2!1d${lat}!2d${lng}!3f0!4f0!5f0.7820865974627469`;
    }

    // If the URL is already an embed link, keep it
    if (rawUrl.includes("/maps/embed")) return rawUrl;

    return null;
  } catch {
    return null;
  }
}
const Learn = () => {
  const [streetViewUrl, setStreetViewUrl] = useState<string | null>(null);
  const yantras = [
    {
      name: "Samrat Yantra",
      subtitle: "The Supreme Instrument",
      description: "The world's largest stone sundial and masterpiece of Jantar Mantar, the Samrat Yantra measured solar time to within two seconds. Its massive triangular gnomon aligns parallel to Earth's axis, pointing at the Pole Star, while its shadow sweeps across marble quadrants—a physical embodiment of Earth's celestial journey used to track time, solar declination, and celestial positions.",
      slug: "samrat-yantra",
      modelPath: samratModel,
      streetViewUrl: "https://www.google.com/maps/@26.9246688,75.8245277,3a,75y,90t/data=!3m6!1e1!3m4!1sAF1QipMWGEt3qBvF0rTj_VbRKwqYqXVLz8xQxPqKqxqY!2e10!7i5760!8i2880",
      externalLink: "https://jantarmantar.org/learn/observatories/instruments/samrat/index.html"
    },
    {
      name: "Dhakshinottara Bhitti Yantra",
      subtitle: "Measuring celestial meridian transits.",
      description: "This towering meridian wall stands as a celestial gateway, aligned precisely north-south to intercept heavenly bodies at their moment of glory—the instant they reach their highest arc across the sky. Its graduated face captures stars and planets mid-transit, measuring their zenith distance with exacting precision. Every calculation, every prediction in the observatory flows from the coordinates recorded on this commanding vertical sentinel.",
      slug: "dhakshinottara-bhitti-yantra",
      modelPath: dhakshinottaraModel,
      streetViewUrl: "https://www.google.com/maps/@26.924758,75.824443,3a,75y,180t/data=!3m6!1e1!3m4!1sAF1QipPxQKqNF_vXqGY8wZqQxPqKqxqY!2e10!7i5760!8i2880",
      externalLink: "https://www.youtube.com/watch?v=YLCz8_yA-T8"
    },
    {
      name: "Rama Yantra",
      subtitle: "The Celestial Coordinator",
      description: "A uniquely ingenious paired instrument for mapping celestial positions using altitude and azimuth. Two complementary cylindrical structures with central pillars feature alternating solid sectors and gaps—where one has a marked sector, the other has an opening—enabling continuous 360-degree tracking of any celestial object without blind spots.",
      slug: "rama-yantra",
      modelPath: ramaModel,
      streetViewUrl: "https://www.google.com/maps/@26.9247893,75.8246502,3a,75y,270t/data=!3m6!1e1!3m4!1sAF1QipNYvQxPqKqxqY8wZqG_vXqGY!2e10!7i5760!8i2880",
      externalLink: "https://jantarmantar.org/learn/observatories/instruments/rama/index.html"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 pb-16 relative">
        <div className="text-center py-12 ">
          <h1 className="font-display text-6xl font-bold text-heritage-burgundy">
            Ancient Astronomical Instruments
          </h1>
        </div>
        <section className="bg-heritage-parchment relative">
          {yantras.map((yantra, index) => {
            const isEven = index % 2 === 0;
            const bgColor = isEven ? "bg-heritage-parchment" : "bg-heritage-parchment-dark";

            return (
              <section key={yantra.slug} className={`${bgColor} py-24 px-8 relative `}>
                {index > 0 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-heritage-gold to-transparent opacity-40"></div>
                )}

                <div className="container mx-auto max-w-[1400px]">
                  <div className={`grid md:grid-cols-2 gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    {isEven ? (
                      <>
                        <div className="relative min-h-[360px] bg-heritage-parchment-dark border-[6px] border-heritage-bronze rounded-lg shadow-[inset_0_4px_12px_rgba(0,0,0,0.15),0_8px_30px_rgba(62,34,22,0.2)] flex items-center justify-center animate-fade-in">
                          {yantra.modelPath ? (
                            <div className="w-full h-full">
                              <ModelViewer modelPath={yantra.modelPath} />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <div className="w-12 h-12 opacity-20 mb-4">
                                <svg viewBox="0 0 100 100" fill="none">
                                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-heritage-gold" />
                                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-heritage-gold" />
                                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" className="text-heritage-gold" />
                                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" className="text-heritage-gold" />
                                </svg>
                              </div>
                              <p className="font-heading text-2xl text-heritage-brown/40 italic text-center px-8">
                                3D Model Coming Soon
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                          <h2 className="font-heading text-5xl font-bold text-heritage-burgundy mb-3">
                            {yantra.name}
                          </h2>
                          <p className="font-heading text-2xl italic text-heritage-bronze mb-6">
                            {yantra.subtitle}
                          </p>
                          <p className="font-body text-lg leading-relaxed text-heritage-brown/90 mb-8">
                            {yantra.description}
                          </p>
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                              <Link to={`/create?yantra=${yantra.slug}`}>
                                <Button variant="hero" size="lg">
                                  Create This Yantra
                                </Button>
                              </Link>
                              <Link to={`/book/${yantra.slug}`}>
                                <Button variant="secondary" size="lg">
                                  Explore Detail
                                </Button>
                              </Link>
                            </div>
                            {yantra.streetViewUrl && (
                              <button
                                className="text-left font-body text-heritage-bronze hover:text-heritage-burgundy underline decoration-heritage-bronze/40 hover:decoration-heritage-burgundy transition-colors"
                                onClick={() => setStreetViewUrl(yantra.streetViewUrl as string)}
                              >
                                View on Google Street View →
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                          <h2 className="font-heading text-5xl font-bold text-heritage-burgundy mb-3">
                            {yantra.name}
                          </h2>
                          <p className="font-heading text-2xl italic text-heritage-bronze mb-6">
                            {yantra.subtitle}
                          </p>
                          <p className="font-body text-lg leading-relaxed text-heritage-brown/90 mb-8">
                            {yantra.description}
                          </p>
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                              <Link to={`/create?yantra=${yantra.slug}`}>
                                <Button variant="hero" size="lg">
                                  Create This Yantra
                                </Button>
                              </Link>
                              <Link to={`/book/${yantra.slug}`}>
                                <Button variant="secondary" size="lg">
                                  Explore Detail
                                </Button>
                              </Link>
                            </div>
                            {yantra.streetViewUrl && (
                              <button
                                className="text-left font-body text-heritage-bronze hover:text-heritage-burgundy underline decoration-heritage-bronze/40 hover:decoration-heritage-burgundy transition-colors"
                                onClick={() => setStreetViewUrl(yantra.streetViewUrl as string)}
                              >
                                View on Google Street View →
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="relative min-h-[360px] bg-heritage-parchment-dark border-[6px] border-heritage-bronze rounded-lg shadow-[inset_0_4px_12px_rgba(0,0,0,0.15),0_8px_30px_rgba(62,34,22,0.2)] flex items-center justify-center animate-fade-in">
                          {yantra.modelPath ? (
                            <div className="w-full h-full">
                              <ModelViewer modelPath={yantra.modelPath} />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <div className="w-12 h-12 opacity-20 mb-4">
                                <svg viewBox="0 0 100 100" fill="none">
                                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-heritage-gold" />
                                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-heritage-gold" />
                                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" className="text-heritage-gold" />
                                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" className="text-heritage-gold" />
                                </svg>
                              </div>
                              <p className="font-heading text-2xl text-heritage-brown/40 italic text-center px-8">
                                3D Model Coming Soon
                              </p>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </div>

      {/* Street View Modal */}
      {streetViewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setStreetViewUrl(null)}
          />
          <div className="relative z-10 w-[95vw] max-w-5xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden border border-heritage-bronze">
            <div className="flex items-center justify-between px-4 py-2 bg-heritage-parchment-dark border-b border-heritage-bronze">
              <h3 className="font-heading text-xl text-heritage-burgundy">Google Street View</h3>
              <button
                className="px-3 py-1 text-sm rounded border border-heritage-bronze hover:bg-heritage-parchment"
                onClick={() => setStreetViewUrl(null)}
                aria-label="Close Street View"
              >
                Close
              </button>
            </div>
            <iframe
              title="Google Street View"
              src={getEmbedStreetViewUrl(streetViewUrl) ?? undefined}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Learn;