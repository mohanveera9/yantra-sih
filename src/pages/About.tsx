import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import aryabhatta from "../assets/about/AryaBhatta.jpg";
import bhaskara from "../assets/about/Bhaskara_II.jpg";
import Bharma from "../assets/about/Bhrama_Gupta.jpg";
import AlBiruni from "../assets/about/Al-Biruni.jpg";
import delhiJantarMantar from "../assets/about/Delhi_jantar_Mantar.jpg";
import jantraMantar from "../assets/about/jatara-matara.jpg";
import maharajaSwami from "../assets/about/Maharaja_Sawai_Jai_Singh_II.jpg";
import ujjainJantarMantar from "../assets/about/Ujjain_Jantar_Mantar.jpg";
import varansiJantarMantar from "../assets/about/Varansi_Jantar_mantar.jpg";
import varahaMihara from "../assets/about/Varahamihira.jpg";
import jaipurJantarMantar from "../assets/about/jantar mantar jaipur.png";
import madhura from "../assets/about/madhura.png";
import samrat from "../assets/about/samrat.jpg";
import rama from "../assets/about/rama.jpg";
import jaiprakash from "../assets/about/jayaprakash.png";
import misra from "../assets/about/misra yantra.jpg";
import first from "../assets/about/Ancient Indian Astronomy.png";

const About = () => {
  useEffect(() => {
    const timelineSection = document.getElementById('timeline-section');
    const timelineGlow = document.getElementById('timeline-glow');
    const timelineGlowMobile = document.getElementById('timeline-glow-mobile');
    const nodes = document.querySelectorAll('.timeline-node');
    const activatedNodes = new Set<string>();

    // Function to activate a node
    const activateNode = (node: HTMLElement) => {
      const nodeId = node.dataset.node;
      if (!nodeId || activatedNodes.has(nodeId)) return;

      activatedNodes.add(nodeId);

      const circle = node.querySelector('.node-circle') as HTMLElement;
      const year = circle?.querySelector('span') as HTMLElement;
      const content = node.querySelector('.node-content') as HTMLElement;

      if (circle) {
        circle.style.background = 'hsl(45 67% 53%)';
        circle.style.borderColor = 'hsl(45 67% 53%)';
        circle.style.boxShadow = '0 0 30px hsla(45, 67%, 53%, 0.8)';
      }

      if (year) {
        year.style.color = 'hsl(45 67% 53%)';
      }

      if (content) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }
    };

    // Check nodes that are already in viewport on load
    const checkInitialNodes = () => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // More lenient initial check - if any part is visible in middle 60% of screen
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          activateNode(node as HTMLElement);
        }
      });
    };

    // Call multiple times to catch late renders
    setTimeout(checkInitialNodes, 100);
    setTimeout(checkInitialNodes, 300);
    setTimeout(checkInitialNodes, 600);

    // Intersection Observer for node activation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateNode(entry.target as HTMLElement);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px',
      }
    );
    nodes.forEach((node) => observer.observe(node));

    // Timeline glow scroll tracking
    const updateGlow = () => {
      if (!timelineSection) return;

      const sectionTop = timelineSection.offsetTop;
      const sectionHeight = timelineSection.offsetHeight;
      const scrollPos = window.scrollY;

      const progress = Math.max(0, Math.min(1,
        (scrollPos - sectionTop + 120) / sectionHeight
      ));

      if (timelineGlow) timelineGlow.style.height = `${progress * 100}%`;
      if (timelineGlowMobile) timelineGlowMobile.style.height = `${progress * 100}%`;
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateGlow();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateGlow();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Generate random stars for hero background
  const generateStars = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  };

  const stars = generateStars();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[hsl(0,48%,29%)] to-[hsl(20,40%,18%)]">
        {/* Starfield background */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-[hsl(43,48%,60%)] rounded-full opacity-60"
            style={{
              left: star.left,
              top: star.top,
              animation: `twinkle 3s ${star.delay} infinite`,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="font-heading text-7xl md:text-8xl text-[hsl(45,67%,53%)] tracking-wider mb-6">
            The Astronomers
          </h1>
          <p className="font-serif text-xl md:text-2xl text-[hsl(40,70%,95%)] mt-6">
            Guardians of Celestial Knowledge · 1500 BCE to 1900 CE
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[hsl(43,48%,60%)]" />
        </div>
      </section>

      {/* SECTION 2: OPENING STATEMENT */}
      <section className="min-h-screen flex items-center justify-center bg-[hsl(40,50%,97%)] py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-4xl font-devanagari text-[hsl(43,48%,60%)] mb-4">
            नक्षत्राणामहं शशी
          </p>
          <p className="text-lg text-[hsl(20,30%,26%)] italic mb-8">
            "Among the stars, I am the Moon" — Bhagavad Gita
          </p>
          <p className="text-lg font-serif text-[hsl(20,40%,18%)] leading-relaxed">
            For over three millennia, scholars across the Indian subcontinent gazed at the heavens, decoded celestial rhythms, and constructed mathematical frameworks that would echo through civilizations. From the Vedic seers who mapped the nakshatras to the astronomer-kings who built monumental observatories in stone, this is their enduring legacy—a testament to humanity's quest to understand the cosmos.
          </p>
        </div>
      </section>

      {/* SECTION 3: VERTICAL TIMELINE */}
      <section
        id="timeline-section"
        className="relative bg-[hsl(35,45%,80%)]"
        style={{ scrollSnapType: 'y mandatory', scrollPaddingTop: '120px' }}
      >
        {/* Desktop timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[hsl(30,35%,45%)] -translate-x-1/2 hidden md:block" />

        {/* Desktop animated glow */}
        <div
          id="timeline-glow"
          className="absolute left-1/2 top-0 w-2 bg-gradient-to-b from-[hsl(45,67%,53%)] to-[hsl(43,48%,60%)] -translate-x-1/2 hidden md:block"
          style={{
            height: '0%',
            transition: 'height 0.2s ease-out',
            boxShadow: '0 0 20px hsla(45, 67%, 53%, 0.6)'
          }}
        />

        {/* Mobile timeline line */}
        <div className="absolute left-16 top-0 bottom-0 w-1 bg-[hsl(30,35%,45%)] md:hidden" />

        {/* Mobile glow */}
        <div
          id="timeline-glow-mobile"
          className="absolute left-16 top-0 w-2 bg-gradient-to-b from-[hsl(45,67%,53%)] to-[hsl(43,48%,60%)] md:hidden"
          style={{ height: '0%', transition: 'height 0.2s ease-out' }}
        />

        {/* NODE 1 - LEFT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="1"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* For left-side node: place year to the right of the circle on desktop */}
              <span className="absolute top-0 left-14 md:left-[calc(50%_+_1.75rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                c. 1500 BCE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:mr-auto md:pr-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  Vedic Astronomers
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  The Foundation
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                  The Vedanga Jyotisha, composed around 1500-1000 BCE, represents humanity's earliest systematic approach to time measurement. Ancient Rishis identified 27 nakshatras (lunar mansions), calculated the solar year at 366 days, and established mathematical relationships between lunar and solar cycles. This wasn't mere observation—it was rigorous celestial mathematics used for ritual timing and agricultural planning.
                </p>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={first} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 2 - RIGHT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="2"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* For right-side node: place year to the left of the circle on desktop */}
              <span className="absolute top-10 left-[-10rem] md:left-[calc(50%_-_4rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                499 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:ml-auto md:pl-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  Aryabhata
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  आर्यभट · The Pioneer
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                  At age 23, Aryabhata revolutionized astronomy in his masterwork Aryabhatiya. He introduced zero as a number, developed the place-value decimal system still used worldwide, and calculated π to four decimal places. Most radically, he proposed that Earth rotates on its axis—a concept Europe wouldn't accept for another millennium. His sine tables and astronomical parameters showed unprecedented precision.
                </p>
                <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] italic mb-6">
                  "भूगोलः सर्वतः वृत्तः" · The Earth is spherical
                </p>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={aryabhatta} alt="Mohan" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 3 - LEFT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="3"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* Left node: year on right */}
              <span className="absolute top-0 left-14 md:left-[calc(50%_+_1.95rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                505 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:mr-auto md:pr-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  Varahamihira
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  वराहमिहिर · The Encyclopedia
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                  Varahamihira's Pancha-Siddhantika synthesized five major astronomical traditions, preserving ancient knowledge while advancing new theories. He studied solar and lunar eclipses, planetary conjunctions, and developed sophisticated methods for weather prediction. His work bridged pure astronomy and its practical applications, from agriculture to architecture.
                </p>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={varahaMihara} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 4 - RIGHT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="4"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* Right node: year on left */}
              <span className="absolute top-0 left-[-10rem] md:left-[calc(50%_-_6rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                628 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:ml-auto md:pl-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  Brahmagupta
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  ब्रह्मगुप्त · Master of Zero
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                  In his Brahmasphutasiddhanta, Brahmagupta formalized rules for arithmetic with zero and negative numbers—concepts unknown in contemporary Europe. He calculated Earth's circumference to within 1% accuracy, described gravitational force centuries before Newton, and developed algebraic solutions still taught today. His work on indeterminate equations influenced Islamic mathematicians and eventually reached Renaissance Europe.
                </p>
                <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] italic mb-6">
                  "सूर्यः सर्वस्य लोकस्य चक्षुः" · The Sun is the eye of all worlds
                </p>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={Bharma} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 5 - LEFT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="5"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* Left node: year on right */}
              <span className="absolute top-0 left-14 md:left-[calc(50%_+_1.75rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                1036 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:mr-auto md:pr-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  The Islamic Golden Age Connection
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  Cross-Cultural Exchange
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                  Al-Biruni spent years in India documenting mathematical and astronomical texts. His Tarikh al-Hind became the bridge between Indian and Islamic scholarship. Indian sine tables were translated into Arabic as 'jiba', eventually becoming 'sinus' in Latin. This wasn't appropriation—it was knowledge flowing along trade routes, enriching multiple civilizations.
                </p>
                <div className=" border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={AlBiruni} alt="" className=" h-[550px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 6 - RIGHT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="6"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              <span className="absolute top-0 left-[-4rem] -translate-x-1/2 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                1150 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:ml-auto md:pl-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  Bhaskara II (Bhaskaracharya)
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  भास्कराचार्य · The Celestial Calculator
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                  Bhaskara's Siddhanta Shiromani represents the pinnacle of medieval mathematical astronomy. He derived differential calculus concepts 500 years before Newton and Leibniz, solved indeterminate equations using novel methods, and calculated planetary positions with remarkable accuracy. His Lilavati remains one of the most elegant mathematical texts ever written.
                </p>
                <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] italic mb-6">
                  "गणितं शास्त्रं सर्वेषाम्" · Mathematics is the foundation of all sciences
                </p>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={bhaskara} alt="" className="h-[500px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 7 - LEFT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="7"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* Left node: year on right */}
              <span className="absolute top-0 left-14 md:left-[calc(50%_+_1.75rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                1724 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:mr-auto md:pr-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  Maharaja Jai Singh II
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  सवाई जय सिंह · The Astronomer King
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                  Between 1724-1735, Maharaja Jai Singh II constructed five monumental observatories across northern India—Delhi, Jaipur, Ujjain, Varanasi, and Mathura. These weren't merely symbolic; they were precision instruments built in stone, designed to verify and improve upon earlier astronomical calculations. The Jaipur Jantar Mantar stands today as a UNESCO World Heritage Site.
                </p>
                <div className="grid grid-cols-2 gap-2 text-base mb-6 font-serif text-[hsl(20,40%,18%)]">
                  <div>• Delhi (1724)</div>
                  <div>• Jaipur (1728)</div>
                  <div>• Ujjain (1725)</div>
                  <div>• Varanasi (1737)</div>
                  <div className="col-span-2">• Mathura (1735)</div>
                </div>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={maharajaSwami} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 8 - RIGHT */}
        <div
          className="timeline-node min-h-screen py-32 md:py-40 relative"
          data-node="8"
        >
          <div className="max-w-7xl mx-auto px-6 relative flex items-start justify-center">
            <div className="node-circle absolute left-16 md:left-1/2 top-16 md:top-20 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-[hsl(43,48%,60%)] bg-[hsl(35,45%,80%)] z-10 transition-all duration-500">
              {/* Right node: year on left */}
              <span className="absolute top-0 left-[-7rem] md:left-[calc(50%_-_7rem)] md:-translate-x-0 text-lg font-semibold text-[hsl(43,48%,60%)] whitespace-nowrap transition-colors duration-500">
                1900 CE
              </span>
            </div>

            <div className="node-content opacity-0 translate-y-10 transition-all duration-700 ml-28 md:ml-0 md:ml-auto md:pl-32 max-w-2xl">
              <div className="heritage-card p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl text-[hsl(0,48%,29%)] mb-2">
                  The Living Heritage
                </h2>
                <h3 className="font-devanagari text-xl md:text-2xl text-[hsl(43,48%,60%)] mb-6">
                  Knowledge Unbroken
                </h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                  Despite colonial suppression and modernization, this astronomical tradition never died. Panchangs (Hindu calendars) are still calculated using these ancient methods. Festivals are timed by lunar phases determined through 2000-year-old formulas. The observatories, once crumbling, have been restored and protected. What began as sacred timekeeping has become recognized as world heritage—proof that some knowledge transcends empires.
                </p>
                <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                  <img src={jantraMantar} alt="" className="w-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE FIVE JANTAR MANTARS */}
      <section className="bg-[hsl(40,50%,97%)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-heading text-center text-[hsl(0,48%,29%)] mb-4">
            The Five Jantar Mantars
          </h2>
          <p className="text-2xl font-devanagari text-center text-[hsl(43,48%,60%)] mb-8">
            स्थापत्य विज्ञान · Architecture Meets Astronomy
          </p>
          <p className="text-lg font-serif text-center text-[hsl(20,40%,18%)] max-w-4xl mx-auto mb-16">
            Between 1724-1737, Maharaja Jai Singh II constructed five astronomical observatories that blended Mughal architecture with Ptolemaic, Islamic, and Indian astronomical traditions. These were not monuments to ego—they were working instruments, precision tools carved in marble and sandstone.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jaipur - Featured */}
            <div className="md:col-span-2 heritage-card p-10">
              <h3 className="font-devanagari text-2xl text-[hsl(0,66%,32%)] mb-2">जयपुर · Jaipur</h3>
              <p className="text-sm text-[hsl(43,48%,60%)] mb-4">Constructed 1728 · UNESCO World Heritage Site (2010)</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                The largest and best-preserved observatory. Houses the world's largest stone sundial (Samrat Yantra), capable of measuring time to two-second accuracy. Contains 19 instruments, each designed for specific astronomical calculations.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                <img src={jaipurJantarMantar} alt="Jaipur Jantar Mantar" className="w-full h-full object-cover"/>
              </div>
            </div>

            {/* Delhi */}
            <div className="heritage-card p-8">
              <h3 className="font-devanagari text-xl text-[hsl(0,66%,32%)] mb-2">दिल्ली · Delhi</h3>
              <p className="text-sm text-[hsl(43,48%,60%)] mb-4">Constructed 1724</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                The first observatory built by Jai Singh. Four primary instruments survive, including the Samrat Yantra and Misra Yantra. Located near Connaught Place in modern Delhi.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                <img src={jantraMantar} alt="" className="w-full h-[400px]"/>
              </div>
            </div>

            {/* Ujjain */}
            <div className="heritage-card p-8">
              <h3 className="font-devanagari text-xl text-[hsl(0,66%,32%)] mb-2">उज्जैन · Ujjain</h3>
              <p className="text-sm text-[hsl(43,48%,60%)] mb-4">Constructed 1725</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                Built on the Tropic of Cancer, this observatory was crucial for calculating the Hindu calendar. Contains 13 instruments, including a unique 180-degree sundial.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                <img src={ujjainJantarMantar} alt="" className="h-[400px]"/>
              </div>
            </div>

            {/* Varanasi */}
            <div className="heritage-card p-8">
              <h3 className="font-devanagari text-xl text-[hsl(0,66%,32%)] mb-2">वाराणसी · Varanasi</h3>
              <p className="text-sm text-[hsl(43,48%,60%)] mb-4">Constructed 1737</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                Located at Man Singh Observatory near Dashashwamedh Ghat. Contains instruments for measuring celestial latitudes and the position of the sun.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                <img src={varansiJantarMantar} alt="" className="h-full"/>
              </div>
            </div>

            {/* Mathura */}
            <div className="heritage-card p-8">
              <h3 className="font-devanagari text-xl text-[hsl(0,66%,32%)] mb-2">मथुरा · Mathura</h3>
              <p className="text-sm text-[hsl(43,48%,60%)] mb-4">Constructed 1735 · Now Lost</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-6">
                The only observatory that no longer exists. Documented in historical records but destroyed during colonial period. Serves as a reminder of how much knowledge has been lost.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
             <img src={madhura} alt="" className="w-full h-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE INSTRUMENTS */}
      <section className="bg-[hsl(35,45%,80%)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-heading text-center text-[hsl(0,48%,29%)] mb-4">
            The Yantras
          </h2>
          <p className="text-2xl font-devanagari text-center text-[hsl(43,48%,60%)] mb-16">
            यन्त्राणि · Tools Carved in Stone
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Samrat Yantra */}
            <div className="heritage-card p-8">
              <h3 className="font-heading text-2xl text-[hsl(0,48%,29%)] mb-2">Samrat Yantra</h3>
              <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] mb-4">सम्राट यन्त्र · Supreme Instrument</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                World's largest stone sundial. The massive triangular gnomon casts a shadow that moves at 1mm per second, allowing time measurement to within 2 seconds. Also measures solar declination and celestial positions.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                <img src={samrat} alt="" className="w-full h-full"/>
              </div>
            </div>

            {/* Jai Prakash Yantra */}
            <div className="heritage-card p-8">
              <h3 className="font-heading text-2xl text-[hsl(0,48%,29%)] mb-2">Jai Prakash Yantra</h3>
              <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] mb-4">जय प्रकाश यन्त्र · Light of Victory</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                Two hemispherical structures that invert the image of the sky. Used to measure azimuth, altitude, and hour angle. The complementary bowls ensure 24-hour observation capability.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
                <img src={jaiprakash} alt="" className="h-full w-full"/>
              </div>
            </div>

            {/* Ram Yantra */}
            <div className="heritage-card p-8">
              <h3 className="font-heading text-2xl text-[hsl(0,48%,29%)] mb-2">Ram Yantra</h3>
              <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] mb-4">राम यन्त्र · Altitude-Azimuth Instrument</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                Paired cylindrical structures with alternating solid and open sectors. Where one has a wall, the other has an opening, enabling continuous 360° tracking of celestial objects.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
        <img src={rama} alt="" />
              </div>
            </div>

            {/* Misra Yantra */}
            <div className="heritage-card p-8">
              <h3 className="font-heading text-2xl text-[hsl(0,48%,29%)] mb-2">Misra Yantra</h3>
              <p className="font-devanagari text-lg text-[hsl(43,48%,60%)] mb-4">मिश्र यन्त्र · Mixed Instrument</p>
              <p className="font-serif text-base leading-relaxed text-[hsl(20,40%,18%)] mb-4">
                Multiple instruments combined into one structure. Measures the noon-day sun's declination for different world capitals, allowing astronomers to calculate times and positions for global locations.
              </p>
              <div className="border-4 border-dashed border-[hsl(30,35%,45%)] bg-[hsl(35,40%,70%)] aspect-video flex items-center justify-center text-[hsl(0,0%,55%)] italic rounded">
             <img src={misra} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE LEGACY */}
      <section className="bg-gradient-to-b from-[hsl(0,48%,29%)] to-[hsl(20,40%,18%)] py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* 6A: Global Influence */}
          <div className="mb-20">
            <h2 className="font-heading text-4xl text-[hsl(40,70%,95%)] mb-8">
              The Global Influence
            </h2>
            <p className="font-serif text-lg leading-relaxed text-[hsl(40,50%,97%)] mb-6">
              Indian astronomical concepts traveled along Silk Road trade routes, influencing Islamic Golden Age scholars in Baghdad and Cordoba. When Al-Khwarizmi wrote his astronomical tables, he drew from Indian methods. When Fibonacci introduced Arabic numerals to Europe, they were originally Indian. The sine function, calculated to six decimal places by Aryabhata in 499 CE, became the foundation of modern trigonometry.
            </p>
            <p className="font-serif text-lg leading-relaxed text-[hsl(40,50%,97%)]">
              This wasn't cultural appropriation—it was knowledge flowing freely, enriching every civilization it touched. Mathematics has no nationality; wisdom recognizes no borders.
            </p>
          </div>

          {/* 6B: Cultural Continuity */}
          <div className="mb-20">
            <h2 className="font-heading text-4xl text-[hsl(40,70%,95%)] mb-8">
              An Unbroken Tradition
            </h2>
            <p className="font-serif text-lg leading-relaxed text-[hsl(40,50%,97%)] mb-6">
              Walk into any temple in India today and you'll find panchangs—Hindu calendars calculated using methods 2000 years old. Festivals are still timed by lunar phases determined through ancient formulas. Muhurtas (auspicious times) are computed using planetary positions derived from Siddhanta texts. The knowledge never died; it simply became so embedded in culture that it became invisible.
            </p>
            <p className="font-serif text-lg leading-relaxed text-[hsl(40,50%,97%)]">
              The observatories themselves, once crumbling and forgotten, have been restored. UNESCO declared Jaipur's Jantar Mantar a World Heritage Site in 2010—recognition that these monuments represent humanity's shared quest to understand the cosmos.
            </p>
          </div>

          {/* 6C: Final Tribute */}
          <div className="border-t-4 border-[hsl(43,48%,60%)] pt-20">
            <p className="font-devanagari text-4xl md:text-5xl text-[hsl(45,67%,53%)] mb-6 leading-relaxed">
              तमसो मा ज्योतिर्गमय
            </p>

            <p className="font-serif text-xl text-[hsl(43,48%,60%)] italic mb-12">
              "Lead us from darkness to light"
              <span className="block text-base mt-2 text-[hsl(40,50%,97%)]">
                — Brihadaranyaka Upanishad
              </span>
            </p>

            <div className="max-w-3xl mx-auto mb-16">
              <p className="font-serif text-lg leading-relaxed text-[hsl(40,70%,95%)] mb-6">
                This page is dedicated to the countless scholars, observers, and mathematicians who looked up at the sky and decoded its mysteries. Their names may be lost to time, but their knowledge remains eternal.
              </p>
              <p className="font-serif text-lg leading-relaxed text-[hsl(40,70%,95%)]">
                From the Vedic rishis who first mapped the heavens, to Aryabhata who dared to say Earth rotates, to Jai Singh who carved precision in stone—each generation built upon the last. They didn't seek fame or fortune. They sought truth. And in seeking truth, they illuminated the path for all of humanity.
              </p>
            </div>

            <div className="pt-8 border-t border-[hsl(43,48%,60%)]/30">
              <p className="font-devanagari text-3xl text-[hsl(45,67%,53%)] mb-4">
                ॐ शान्तिः शान्तिः शान्तिः
              </p>
              <p className="font-serif text-sm text-[hsl(43,48%,60%)] italic">
                Om, peace, peace, peace
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;