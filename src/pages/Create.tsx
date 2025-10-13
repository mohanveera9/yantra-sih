import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { MapPin } from "lucide-react";
import { toast } from "sonner";
import indiaMap from "@/assets/india-map-heritage.jpg";

const Create = () => {
  const [searchParams] = useSearchParams();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectedYantra, setSelectedYantra] = useState("samrat-yantra");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const yantraParam = searchParams.get("yantra");
    if (yantraParam) {
      setSelectedYantra(yantraParam);
    }
  }, [searchParams]);

  const handleUseCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(4));
          setLongitude(position.coords.longitude.toFixed(4));
          toast.success("Location fetched successfully!");
        },
        (error) => {
          toast.error("Unable to fetch location. Please enter manually.");
          console.error("Geolocation error:", error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const validateInputs = () => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (!latitude || !longitude) {
      toast.error("Please enter both latitude and longitude.");
      return false;
    }
    if (isNaN(lat) || lat < -90 || lat > 90) {
      toast.error("Latitude must be between -90 and 90.");
      return false;
    }
    if (isNaN(lon) || lon < -180 || lon > 180) {
      toast.error("Longitude must be between -180 and 180.");
      return false;
    }
    return true;
  };

  const handleGenerate = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        request_info: {
          latitude: parseFloat(latitude),
          yantra_slug: selectedYantra
        },
        result: {
          yantra_name: selectedYantra === "samrat-yantra" ? "Samrat Yantra" :
            selectedYantra === "dhruva-darshak-pattika" ? "Dhruva Darshak Pattika" :
              "Rama Yantra",
          dimensions: {
            gnomon_base_length: { value: 44.0, units: "m" },
            gnomon_height: { value: 22.35, units: "m" },
            quadrant_radius: { value: 21.99, units: "m" }
          },
          angles: {
            gnomon_inclination: { value: parseFloat(latitude), units: "degrees" }
          }
        }
      };

      setResults(mockResponse);
      setIsLoading(false);
      toast.success("Calculations complete!");

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 2000);
  };

  const yantraOptions = [
    { value: "samrat-yantra", label: "Samrat Yantra" },
    { value: "dhruva-darshak-pattika", label: "Dhruva Darshak Pattika" },
    { value: "rama-yantra", label: "Rama Yantra" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isLoading && <LoadingOverlay />}
      <div className="text-center py-12 pt-28 bg-heritage-parchment-dark">
        <h1 className="font-display text-6xl font-bold text-heritage-burgundy">
         YantraSrishti (यन्त्रसृष्टि)
        </h1>
      </div>
      <div className="pt-24 pb-16 px-8 flex-1 bg-heritage-parchment">

        <div className="container mx-auto max-w-[1400px] ">
          <div className="grid md:grid-cols-[45%_55%] gap-16 mb-16">
            {/* Form Section */}
            <div className="heritage-card p-12 animate-fade-in">
              <h2 className="font-heading text-4xl font-bold text-heritage-burgundy mb-8">
                Calculate Your Yantra
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block font-serif font-semibold text-heritage-brown-medium mb-2">
                    Latitude
                  </label>
                  <input
                    type="text"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="e.g., 26.9248"
                    className="w-full h-14 px-6 bg-heritage-cream text-heritage-brown border-2 border-heritage-terracotta rounded-md font-body text-lg focus:outline-none focus:border-heritage-gold focus:shadow-[0_0_0_3px_rgba(201,169,97,0.2)] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-serif font-semibold text-heritage-brown-medium mb-2">
                    Longitude
                  </label>
                  <input
                    type="text"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="e.g., 75.7873"
                    className="w-full h-14 px-6 bg-heritage-cream text-heritage-brown border-2 border-heritage-terracotta rounded-md font-body text-lg focus:outline-none focus:border-heritage-gold focus:shadow-[0_0_0_3px_rgba(201,169,97,0.2)] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-serif font-semibold text-heritage-brown-medium mb-2">
                    Select Yantra
                  </label>
                  <select
                    value={selectedYantra}
                    onChange={(e) => setSelectedYantra(e.target.value)}
                    className="w-full h-14 px-6 bg-heritage-cream text-heritage-brown border-2 border-heritage-terracotta rounded-md font-body text-lg focus:outline-none focus:border-heritage-gold focus:shadow-[0_0_0_3px_rgba(201,169,97,0.2)] transition-all appearance-none cursor-pointer"
                  >
                    {yantraOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleUseCurrentLocation}
                  className="w-full"
                >
                  <MapPin className="mr-2" size={18} />
                  Use Current Location
                </Button>

                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleGenerate}
                  className="w-full mt-8"
                >
                  Generate Calculations
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="border-4 border-heritage-bronze rounded-lg overflow-hidden shadow-[0_12px_40px_rgba(62,34,22,0.15)] min-h-[600px] relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src={indiaMap}
                alt="Heritage Map of India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-heritage-burgundy/10 flex items-center justify-center">
                <p className="font-heading text-2xl text-heritage-cream bg-heritage-brown/80 px-6 py-3 rounded-lg backdrop-blur-sm">
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {results && (
            <div ref={resultsRef} className="animate-fade-in">
              <div className="mb-12 border-[6px] border-heritage-bronze rounded-xl overflow-hidden shadow-2xl">
                <video
                  controls
                  className="w-full max-w-[900px] mx-auto"
                  src={`/${results.request_info.yantra_slug.replace(/-/g, '_')}.mp4`}
                  poster="/yantra-poster.jpg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="heritage-card p-12 relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-heritage-gold"></div>

                <h2 className="font-heading text-4xl font-bold text-heritage-burgundy mb-2 text-center">
                  Calculation Results
                </h2>
                <p className="font-decorative text-3xl text-heritage-gold text-center mb-8">
                  Sacred Geometry Revealed
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-heritage-brown mb-4 border-b-2 border-heritage-gold inline-block pb-1">
                      Yantra Information
                    </h3>
                    <p className="font-body text-xl text-heritage-brown">
                      <span className="font-semibold">Name:</span> {results.result.yantra_name}
                    </p>
                    <p className="font-body text-xl text-heritage-brown mt-2">
                      <span className="font-semibold">Calculated for Latitude:</span> {results.request_info.latitude}°
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-heritage-brown mb-4 border-b-2 border-heritage-gold inline-block pb-1">
                      Key Angles
                    </h3>
                    {Object.entries(results.result.angles).map(([key, value]: [string, any]) => (
                      <p key={key} className="font-body text-lg text-heritage-brown mt-2">
                        <span className="font-semibold">• {key.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</span> {value.value} {value.units}
                      </p>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-heritage-brown mb-4 border-b-2 border-heritage-gold inline-block pb-1">
                      Primary Dimensions
                    </h3>
                    {Object.entries(results.result.dimensions).map(([key, value]: [string, any]) => (
                      <p key={key} className="font-body text-lg text-heritage-brown mt-2">
                        <span className="font-semibold">• {key.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</span> {value.value} {value.units}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Create;
