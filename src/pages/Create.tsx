import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { ModelViewer } from "@/components/ModelViewer";
import { MapPin } from "lucide-react";
import { toast } from "sonner";
import indiaMap from "@/assets/india-map-heritage.jpg";
import JantarMantarStreetView from "@/components/JantarMantarStreetView";
import samratModel from "@/assets/models/samrat.glb";
import ramaModel from "@/assets/models/rama.glb";
import dhakshinottaraModel from "@/assets/models/dhakshinottara.glb";
import gnomonAngle from "../assets/create/GnomonAngle.png";
import height from "../assets/create/Gnomon height.jpg";
import quadrant from "../assets/create/Quadrant radius.png";
import sideView from "../assets/create/SideViewSmarat.png";
import topView from "../assets/create/TopViewSmaratYnatra.png";
import frontView from "../assets/create/FrontView.png";

const Create = () => {
  const [searchParams] = useSearchParams();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectedYantra, setSelectedYantra] = useState("samrat-yantra");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
    { value: "dhakshinottara-bhitti-yantra", label: "Dhakshinottara Bhitti Yantra" },
    { value: "rama-yantra", label: "Rama Yantra" }
  ];

  const getModelForSelected = () => {
    if (selectedYantra === "samrat-yantra") return samratModel;
    if (selectedYantra === "dhakshinottara-bhitti-yantra") return dhakshinottaraModel;
    return ramaModel;
  };
  const stableModelPath = useMemo(() => getModelForSelected(), [selectedYantra]);

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
                <div className="text-center text-heritage-brown">Or</div>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleUseCurrentLocation}
                  className="w-full"
                >
                  <MapPin className="mr-2" size={18} />
                  Use Current Location
                </Button>

                <div className="relative">
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
                  <svg
                    className="absolute right-4 top-[52px] w-5 h-5 text-heritage-brown pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>



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
              {/* Split layout: left cards / right 3D model */}
              <div className="heritage-card p-8 border-2 border-heritage-bronze rounded-lg bg-heritage-parchment mb-16">
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-6 text-center">Calculation Results</h2>
                <div className="grid md:grid-cols-[45%_55%] gap-10 items-start">
                {/* Left: Cards */}
                <div className="space-y-6">
                  {/* Gnomon Inclination */}
                  <div className="border-2 border-heritage-bronze rounded-lg overflow-hidden bg-heritage-cream shadow-[0_12px_40px_rgba(62,34,22,0.08)]">
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between"
                      onClick={() => setExpandedCard(expandedCard === 'inclination' ? null : 'inclination')}
                    >
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-heritage-burgundy">
                          Gnomon Inclination
                        </h3>
                        <p className="font-body text-heritage-brown/80">Angle equals your latitude.</p>
                      </div>
                      <span className="font-heading font-bold text-xl text-heritage-burgundy">{results.result.angles.gnomon_inclination.value}°</span>
                    </button>
                    {expandedCard === 'inclination' && (
                      <div className="px-6 pb-6">
                        <img src={gnomonAngle} alt="Gnomon inclination" className="w-full rounded mb-4" />
                        <p className="font-body text-heritage-brown">
                          The gnomon's hypotenuse must be set to your site latitude so that it is parallel to Earth's axis. This ensures the shadow moves uniformly across the quadrants.
                        </p>
                        <ul className="font-body text-heritage-brown mt-3 list-disc pl-5 space-y-1">
                          <li>Align top edge precisely along north–south line.</li>
                          <li>Use a calibrated digital inclinometer for accuracy.</li>
                          <li>Re-check angle after curing or structural settling.</li>
                          <li>Sharper edge yields crisper shadow time marks.</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Primary Dimensions */}
                  <div className="border-2 border-heritage-bronze rounded-lg overflow-hidden bg-heritage-cream shadow-[0_12px_40px_rgba(62,34,22,0.08)]">
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between"
                      onClick={() => setExpandedCard(expandedCard === 'dimensions' ? null : 'dimensions')}
                    >
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-heritage-burgundy">
                          Primary Dimensions
                        </h3>
                        <p className="font-body text-heritage-brown/80">Key lengths that define the structure.</p>
                      </div>
                      <span className="font-heading font-bold text-xl text-heritage-burgundy">{results.result.dimensions.quadrant_radius.value} {results.result.dimensions.quadrant_radius.units} R</span>
                    </button>
                    {expandedCard === 'dimensions' && (
                      <div className="px-6 pb-6">
                        <img src={height} alt="Primary dimensions" className="w-full rounded mb-4" />
                        <ul className="font-body text-heritage-brown space-y-2">
                          {Object.entries(results.result.dimensions).map(([key, value]: [string, any]) => (
                            <li key={key}><span className="font-semibold">{key.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:</span> {value.value} {value.units}</li>
                          ))}
                        </ul>
                        <ul className="font-body text-heritage-brown mt-3 list-disc pl-5 space-y-1">
                          <li>Confirm scale using a known on-site reference.</li>
                          <li>Maintain consistent units in drawings and site work.</li>
                          <li>Account for finish thickness in final dimensions.</li>
                          <li>Document tolerances for masonry vs. stone work.</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Space Needed */}
                  <div className="border-2 border-heritage-bronze rounded-lg overflow-hidden bg-heritage-cream shadow-[0_12px_40px_rgba(62,34,22,0.08)]">
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between"
                      onClick={() => setExpandedCard(expandedCard === 'space' ? null : 'space')}
                    >
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-heritage-burgundy">
                          Site Area Requirement
                        </h3>
                        <p className="font-body text-heritage-brown/80">Allow clear shadows and safe access.</p>
                      </div>
                      {(() => {
                        const R = results.result.dimensions.quadrant_radius.value as number;
                        const area = Math.round((2.5 * R) * (2.5 * R));
                        return <span className="font-heading font-bold  text-xl text-heritage-burgundy">≈ {area} m²</span>;
                      })()}
                    </button>
                    {expandedCard === 'space' && (
                      <div className="px-6 pb-6">
                        <img src={quadrant} alt="Site area" className="w-full rounded mb-4" />
                        <p className="font-body text-heritage-brown">
                          Recommended footprint is approximately 2.5R × 2.5R to accommodate the quadrants and visitor circulation. The ground must be flat, free of obstructions and shadows.
                        </p>
                        <ul className="font-body text-heritage-brown mt-3 list-disc pl-5 space-y-1">
                          <li>Ensure full-day sunlight exposure year-round.</li>
                          <li>Provide safe perimeter and viewing access.</li>
                          <li>Plan drainage to keep surfaces dry and stable.</li>
                          <li>Consider orientation signage for visitors.</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: 3D Model */}
                <div className={`relative bg-heritage-parchment-dark border-[6px] border-heritage-bronze rounded-lg shadow-[inset_0_4px_12px_rgba(0,0,0,0.15),0_8px_30px_rgba(62,34,22,0.2)] transition-all duration-500 ${expandedCard ? 'h-[420px]' : 'h-[420px]'}`}>
                  <ModelViewer key={selectedYantra} modelPath={stableModelPath} />
                </div>
                </div>
              </div>

              {/* Reference Views below results */}
              <div className="heritage-card p-10 mb-10">
                <h3 className="font-heading text-3xl font-bold text-heritage-burgundy mb-6 text-center">Reference Views</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border-2 border-heritage-bronze rounded-lg overflow-hidden bg-heritage-cream">
                    <div className="aspect-[4/3] w-full flex items-center justify-center text-heritage-brown/70">
                      <img src={frontView} alt="Front View" />
                    </div>
                    <div className="px-4 py-3 bg-heritage-parchment-dark text-heritage-brown text-sm">Use to verify overall height and gnomon inclination.</div>
                  </div>
                  <div className="border-2 border-heritage-bronze rounded-lg overflow-hidden bg-heritage-cream">
                    <div className="aspect-[4/3] w-full flex items-center justify-center text-heritage-brown/70">
                      <img src={sideView} alt="Side View" />
                    </div>
                    <div className="px-4 py-3 bg-heritage-parchment-dark text-heritage-brown text-sm">Check thicknesses, stairs/ramps, and angular faces.</div>
                  </div>
                  <div className="border-2 border-heritage-bronze rounded-lg overflow-hidden bg-heritage-cream">
                    <div className="aspect-[4/3] w-full flex items-center justify-center text-heritage-brown/70">
                      <img src={topView} alt="Top View" />
                    </div>
                    <div className="px-4 py-3 bg-heritage-parchment-dark text-heritage-brown text-sm">Validate quadrant radius, alignments, and platform.</div>
                  </div>
                </div>
              </div>

              {/* Instructions below */}
              <div className="heritage-card p-10">
                <h2 className="font-heading text-4xl font-bold text-heritage-burgundy mb-4 text-center">Simple Guide to Building a Samrat Yantra</h2>
                <p className="font-body text-lg text-heritage-brown mb-6 text-center">The Samrat Yantra is the world's largest sundial. Here's how to build your own replica.</p>
                <hr className="border-heritage-bronze/40 mb-8" />

                <h3 className="font-heading text-2xl font-bold text-heritage-brown mb-3">STEP 1: Calculate Your Measurements</h3>
                <p className="font-body text-heritage-brown mb-4">Before buying anything, you need these numbers based on YOUR location:</p>
                <div className="space-y-2 font-body text-heritage-brown mb-6">
                  <p><span className="font-semibold">1. Your Latitude (ϕ)</span> - Use Google Maps or your phone's GPS. <em>Example: Jaipur is at 27°</em></p>
                  <p><span className="font-semibold">2. Gnomon Angle (α)</span> - The angle must equal your latitude. <em>Example: If latitude is 27°, angle is 27°</em></p>
                  <p><span className="font-semibold">3. Choose Your Size (Base Radius R)</span> - Small backyard model: R = 2 m; Large public model: R = 10 m</p>
                  <p><span className="font-semibold">4. Calculate Gnomon Height (H)</span> - Formula: H = R × tan(ϕ). <em>Example: If R = 2 m and ϕ = 27°, H ≈ 1.02 m</em></p>
                </div>

                <h3 className="font-heading text-2xl font-bold text-heritage-brown mb-3">STEP 2: How Much Space Do You Need?</h3>
                <p className="font-body text-heritage-brown mb-4"><span className="font-semibold">Formula:</span> Area = 2.5R × 2.5R</p>
                <ul className="list-disc pl-6 font-body text-heritage-brown space-y-1 mb-2">
                  <li><span className="font-semibold">Small model (R = 2 m):</span> Need 5 m × 5 m space (25 m²)</li>
                  <li><span className="font-semibold">Large model (R = 10 m):</span> Need 25 m × 25 m space (625 m²)</li>
                </ul>
                <p className="font-body text-heritage-brown mb-6">Important: Site must be flat with no trees or buildings casting shadows.</p>

                <h3 className="font-heading text-2xl font-bold text-heritage-brown mb-3">STEP 3: Materials & Cost (Small Model)</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-heritage-parchment-dark text-heritage-brown">
                        <th className="p-3 border border-heritage-bronze">Item</th>
                        <th className="p-3 border border-heritage-bronze">Material</th>
                        <th className="p-3 border border-heritage-bronze">Cost (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-heritage-brown">
                      <tr>
                        <td className="p-3 border border-heritage-bronze">Base Foundation</td>
                        <td className="p-3 border border-heritage-bronze">Level concrete slab</td>
                        <td className="p-3 border border-heritage-bronze">₹15,000 - ₹25,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-heritage-bronze">Gnomon (triangle)</td>
                        <td className="p-3 border border-heritage-bronze">Polished stone or concrete</td>
                        <td className="p-3 border border-heritage-bronze">₹20,000 - ₹50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-heritage-bronze">Quadrant Arcs</td>
                        <td className="p-3 border border-heritage-bronze">Brick/concrete with plaster</td>
                        <td className="p-3 border border-heritage-bronze">₹30,000 - ₹75,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-heritage-bronze">Hour Markings</td>
                        <td className="p-3 border border-heritage-bronze">Engraved or brass inlay</td>
                        <td className="p-3 border border-heritage-bronze">₹10,000 - ₹20,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-heritage-bronze">Labor & Tools</td>
                        <td className="p-3 border border-heritage-bronze">Skilled workers</td>
                        <td className="p-3 border border-heritage-bronze">₹50,000 - ₹1,00,000</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="p-3 border border-heritage-bronze">TOTAL</td>
                        <td className="p-3 border border-heritage-bronze"></td>
                        <td className="p-3 border border-heritage-bronze">₹1,25,000 - ₹2,70,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-heading text-2xl font-bold text-heritage-brown mb-3">STEP 4: Building Instructions</h3>
                <div className="font-body text-heritage-brown space-y-2 mb-6">
                  <p><span className="font-semibold">A. Find True North</span> – Use a compass or GPS app; mark the North–South line precisely.</p>
                  <p><span className="font-semibold">B. Build the Base</span> – Pour level concrete foundation; mark the North–South axis clearly.</p>
                  <p><span className="font-semibold">C. Build the Gnomon (Triangle)</span> – Two parallel triangular walls; top edge slope equals latitude; verify with a digital level.</p>
                  <p><span className="font-semibold">D. Build the Quadrant Arcs</span> – Mark two quarter-circles of radius R; walls perfectly vertical.</p>
                  <p><span className="font-semibold">E. Add Time Markings</span> – Mark hours/minutes on arcs; requires spherical trig; indicates shadow positions.</p>
                </div>

                <h3 className="font-heading text-2xl font-bold text-heritage-brown mb-3">STEP 5: Testing Your Sundial</h3>
                <div className="font-body text-heritage-brown space-y-2 mb-6">
                  <p><span className="font-semibold">Test 1: Local Noon</span> – At true local noon, shadow should fall exactly on the North–South line.</p>
                  <p><span className="font-semibold">Test 2: Equinox Day</span> – On Mar 20 or Sep 23, shadow tip stays on center line.</p>
                </div>

                <div className="font-body text-heritage-brown">
                  <p className="mb-1"><span className="font-semibold">The Most Important Thing:</span> The gnomon angle must equal your latitude.</p>
                  <p className="mb-1"><span className="font-semibold">Time Needed:</span> Several weeks to months depending on size.</p>
                  <p><span className="font-semibold">Difficulty:</span> High – requires precision construction and astronomical calculations.</p>
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