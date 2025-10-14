import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import coverImage from '../assets/book/cover.jpg';
import rightPageImage from '../assets/book/right.png';
import leftPageImage from '../assets/book/left.png';

// Import chapter images for each book
// Samrat Yantra images
import samrat1 from '../assets/book/samrat/chapter1.png';
import samrat2 from '../assets/book/samrat/chapter2.png';
import samrat3 from '../assets/book/samrat/chapter3.png';
import samrat4 from '../assets/book/samrat/chapter4.png';
import samrat5 from '../assets/book/samrat/chapter5.png';
import samrat6 from '../assets/book/samrat/chapter6.png';
import samrat7 from '../assets/book/samrat/chapter7.png';
import samrat8 from '../assets/book/samrat/chapter8.png';
import samrat9 from '../assets/book/samrat/chapter9.png';
import samrat10 from '../assets/book/samrat/chapter10.png';

// Dakshinottara Bhitti Yantra images
import bhitti1 from '../assets/book/bhitti/chapter1.png';
import bhitti2 from '../assets/book/bhitti/chapter2.png';
import bhitti3 from '../assets/book/bhitti/chapter3.png';
import bhitti4 from '../assets/book/bhitti/chapter4.png';
import bhitti5 from '../assets/book/bhitti/chapter5.png';
import bhitti6 from '../assets/book/bhitti/chapter6.png';
import bhitti7 from '../assets/book/bhitti/chapter7.png';
import bhitti8 from '../assets/book/bhitti/chapter8.png';
import bhitti9 from '../assets/book/bhitti/chapter9.png';
import bhitti10 from '../assets/book/bhitti/chapter10.png';

// Rama Yantra images
import rama1 from '../assets/book/rama/chapter1.png';
import rama2 from '../assets/book/rama/chapter2.png';
import rama3 from '../assets/book/rama/chapter3.png';
import rama4 from '../assets/book/rama/chapter4.png';
import rama5 from '../assets/book/rama/chapter5.png';
import rama6 from '../assets/book/rama/chapter6.png';
import rama7 from '../assets/book/rama/chapter7.png';
import rama8 from '../assets/book/rama/chapter8.png';
import rama9 from '../assets/book/rama/chapter9.jpg';

const Book = () => {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [bookData, setBookData] = useState({
    title: '',
    chapters: []
  });

  useEffect(() => {
    const data = {
      'samrat-yantra': {
        title: 'Samrat Yantra ',
        chapters: [
          {
            title: 'Introduction / Overview',
            content: `<p>The <strong>Samrat Yantra</strong> is one of the largest and most accurate sundials in the world, designed by <em>Maharaja Jai Singh II</em> in the early 18th century.</p>
            <p>Built as part of the Jantar Mantar observatories in Jaipur, Delhi, and other Indian cities, the name "Samrat" means <strong>King</strong>, signifying its supreme precision in measuring time and celestial movements.</p>`,
            image: samrat1
          },
          {
            title: 'Function / Purpose',
            content: `<p>The main purpose of the Samrat Yantra is to measure local time accurately using the position of the Sun's shadow.</p>
            <p>It can also determine:</p>
            <ul>
              <li>Declination of the Sun</li>
              <li>Altitude and azimuth of celestial bodies</li>
              <li>Local meridian and equinox timings</li>
            </ul>
            <p>All with remarkable precision.</p>`,
            image: samrat2
          },
          {
            title: 'Structure and Design',
            content: `<p>The yantra takes the shape of a giant right-angled triangle forming a sundial.</p>
            <p><strong>Main components:</strong></p>
            <ul>
              <li><strong>Gnomon:</strong> A triangular wall (hypotenuse inclined towards the North Pole)</li>
              <li><strong>Quadrants:</strong> Two curved stone quadrants on either side with time markings</li>
            </ul>
            <p>Standing at around <strong>27 meters</strong> in Jaipur, the gnomon's hypotenuse is parallel to Earth's axis.</p>`,
            image: samrat3
          },
          {
            title: 'Working Principle',
            content: `<p>The Samrat Yantra works on the principle of casting a shadow.</p>
            <p>As the Sun moves across the sky, the gnomon's shadow shifts along the time-marked quadrants. The edge of the shadow corresponds to a specific time of the day.</p>
            <p>Since the gnomon is aligned with Earth's axis, it reflects the Sun's apparent motion relative to the observer's meridian.</p>`,
            image: samrat4
          },
          {
            title: 'Mathematical / Scientific Concept',
            content: `<p>Based on <strong>trigonometry and geometry</strong>, the angle of inclination of the gnomon equals the latitude of the location (approximately 27°N for Jaipur).</p>
            <p>Time is read using the <em>hour angle (H)</em>, derived from the Sun's shadow using the formula:</p>
            <p><strong>H = 15° × (t - 12)</strong></p>
            <p>where <em>t</em> represents local solar time.</p>`,
            image: samrat5
          },
          {
            title: 'Materials and Construction',
            content: `<p>The Samrat Yantra stands as a monumental blend of science, mathematics, and architecture.</p>
            <p>Its design allows highly accurate time measurement - <strong>within 2 seconds of modern accuracy</strong> - using only sunlight and shadows.</p>
            <p>Recognized by UNESCO as part of the World Heritage Site at Jaipur's Jantar Mantar, it represents the genius of Maharaja Jai Singh II and the astronomical excellence of 18th-century India.</p>`,
            image: samrat6
          },
          {
            title: 'Location and Calibration',
            content: `<p>Constructed mainly from local stone and marble, the Samrat Yantra features precision-crafted markings engraved on the quadrants for minute and second readings.</p>
            <p>Built by skilled Rajput and Mughal craftsmen under Jai Singh's supervision, it demonstrates exceptional craftsmanship and engineering precision.</p>`,
            image: samrat7
          },
          {
            title: 'Importance / Significance',
            content: `<p><strong>Primary location:</strong> Jaipur, Rajasthan at Jantar Mantar</p>
            <ul>
              <li>Latitude ≈ 26.92° N</li>
              <li>Longitude ≈ 75.82° E</li>
            </ul>
            <p>Calibrated to match the local meridian of Jaipur, smaller Samrat Yantras exist in Delhi, Ujjain, Varanasi, and Mathura.</p>`,
            image: samrat8
          },
          {
            title: 'Conclusion',
            content: `<p>A symbol of India's advanced astronomical knowledge before modern instruments, the Samrat Yantra demonstrates precise timekeeping and celestial measurement using geometry.</p>
            <p>It inspires modern interest in ancient Indian science and engineering.</p>`,
            image: samrat9
          },
        ]
      },
      'dhakshinottara-bhitti-yantra': {
        title: 'Dakshinottara Bhitti Yantra',
        chapters: [
          {
            title: 'Introduction / Overview',
            content: `<p>The <strong>Dakshinottara Bhitti Yantra</strong>, meaning "South-North Wall Instrument," was constructed by Maharaja Jai Singh II in the 18th century at the Jantar Mantar observatories.</p>
            <p>It is a vertical sundial built on a wall aligned along the north-south (meridian) line, specifically designed to measure the Sun's altitude and declination.</p>`,
            image: bhitti1
          },
          {
            title: 'Function / Purpose',
            content: `<p>This remarkable instrument is used to determine:</p>
            <ul>
              <li>Meridian altitude</li>
              <li>Zenith distance</li>
              <li>Declination of the Sun when it crosses the local meridian</li>
            </ul>
            <p>It plays a crucial role in verifying solar observations and calendar making, providing essential data for astronomical calculations.</p>`,
            image: bhitti2
          },
          {
            title: 'Structure and Design',
            content: `<p>The yantra features a <strong>vertical wall (Bhitti)</strong> aligned precisely along the north-south direction.</p>
            <p><strong>Main components include:</strong></p>
            <ul>
              <li>A quadrant scale marked on the wall</li>
              <li>A movable sighting rod or pinhole for sunlight projection</li>
            </ul>
            <p>The plane of the wall lies on the meridian plane, facing south for optimal solar observation.</p>`,
            image: bhitti3
          },
          {
            title: 'Working Principle',
            content: `<p>When the Sun crosses the meridian at noon, its rays fall directly on the wall.</p>
            <p>The shadow or sunlight spot on the graduated scale gives the <em>altitude</em> or <em>declination</em> of the Sun for that specific day.</p>
            <p>This simple yet effective method provides accurate measurements of the Sun's position throughout the year.</p>`,
            image: bhitti4
          },
          {
            title: 'Mathematical Foundation',
            content: `<p>Based on <strong>spherical trigonometry</strong>, the declination (δ) is derived using the formula:</p>
            <p><strong>δ = h + φ - 90°</strong></p>
            <p>where:</p>
            <ul>
              <li><em>h</em> represents the Sun's altitude</li>
              <li><em>φ</em> is the observer's latitude</li>
            </ul>
            <p>This helps in determining solar noon and tracking the Sun's seasonal movement with remarkable precision.</p>`,
            image: bhitti5
          },
          {
            title: 'Significance',
            content: `<p>The Dakshinottara Bhitti Yantra demonstrates the scientific precision of ancient Indian astronomy.</p>
            <p>Made of stone and marble with finely engraved angular scales, it was built with high geometric precision for accurate meridian alignment.</p>
            <p>It reflects the scientific skill and astronomical insight of Jai Singh's era, serving as a testament to India's advanced astronomical knowledge.</p>`,
            image: bhitti6
          },
          {
            title: 'Construction Materials',
            content: `<p>Made of <strong>stone and marble</strong>, with finely engraved angular scales.</p>
            <p>Built with high geometric precision for accurate meridian alignment, the construction showcases the advanced masonry techniques of the 18th century.</p>`,
            image: bhitti7
          },
          {
            title: 'Calibration Methods',
            content: `<p>Found at Jantar Mantar, Jaipur, and other observatories.</p>
            <p><strong>Alignment specifications:</strong></p>
            <ul>
              <li>Aligned to the local meridian (north-south direction)</li>
              <li>Calibrated according to latitude ≈ 27° N for Jaipur</li>
            </ul>
            <p>This ensures accurate solar observations year-round.</p>`,
            image: bhitti8
          },
          {
            title: 'Astronomical Applications',
            content: `<p>Used to verify other instruments like Samrat Yantra and for solar observations crucial in calendar making.</p>
            <p>The instrument helped establish precise timekeeping standards and seasonal determinations.</p>`,
            image: bhitti9
          },
          {
            title: 'Scientific Legacy',
            content: `<p>Shows the scientific precision of ancient Indian astronomy.</p>
            <p>The Dakshinottara Bhitti Yantra is a simple yet powerful vertical sundial that reflects the scientific skill and astronomical insight of Jai Singh's era.</p>`,
            image: bhitti10
          }
        ]
      },
      'rama-yantra': {
        title: 'Rama Yantra',
        chapters: [
          {
            title: 'Introduction / Overview',
            content: `<section class="intro" aria-label="main introduction">
        <p>
          The <strong>Rama Yantra</strong> is an 18th-century astronomical instrument built by Maharaja Sawai Jai Singh II. 
          It measures the <em>altitude</em> and <em>azimuth</em> of celestial bodies with great precision. 
          The instrument features two paired cylindrical structures, each with a radius of <strong>7.6 meters</strong>.
        </p>
        <br>

        <p>
          The clever design covers the entire 360-degree horizon without blind spots. Each cylinder is divided into 
          <strong>12 equal sectors</strong> of <strong>30 degrees</strong> each, with the walls of one structure 
          filling the gaps of the other.
        </p>
        <br>

        <p>
          The Rama Yantra showcases India's advanced astronomical knowledge before the telescope era. 
          You can visit these remarkable structures at the Jantar Mantar observatories in <strong>Jaipur</strong> 
          and <strong>Delhi</strong>, where they stand as symbols of India's rich scientific heritage.
        </p>
    </section>`,
            image: rama1
          },
          {
            title: 'Function / Purpose',
            content: `<div>
  <p><strong>Key Functions:</strong></p>
  <ul>
    <li>Measures altitude (vertical angle) and azimuth (horizontal direction) of celestial objects including the Sun, Moon, stars, and planets</li>
    <li>Tracks continuous celestial motion across the sky throughout day and night</li>
    <li>Provides complete 360-degree horizon coverage through its dual structure, eliminating blind spots</li>
  </ul>

  <p><strong>Key Purposes:</strong></p>
  <ul>
    <li>Creates accurate astronomical tables for predicting celestial positions</li>
    <li>Determines precise local time and refines calendar systems for religious and agricultural activities</li>
    <li>Verifies and corrects astronomical data as part of Maharaja Jai Singh II's 18th-century reforms</li>
  </ul>
</div>`,
            image: rama2
          },
          {
            title: 'Structure and Design',
            content: `<article>
    <p>The Rama Yantra combines architectural brilliance with astronomical precision as one of the most innovative instruments at Jantar Mantar observatories.</p>

<b>Key Structural Components:</b>

<ul>
    <li><strong>Dual Cylindrical Structures:</strong> Two complementary cylinders, each 7.6 meters in radius, with open tops</li>
    
    <li><strong>Sectoral Division:</strong> 12 equal sectors of 30 degrees with alternating solid walls and open segments</li>
    
    <li><strong>Graduated Scales:</strong> Precise degree markings on floors and walls for angular measurements</li>
    
    <li><strong>Central Gnomon:</strong> Vertical pillar serving as the observation reference point</li>
</ul>

<b><strong>Design Innovation:</strong></b>

<p>The paired structures synchronize perfectly—solid portions of one cylinder align with open spaces of the other, eliminating blind spots across 360 degrees. Mathematically calculated angles ensure accurate celestial measurements day and night.</p>
</article>`,
            image: rama3
          },
          {
            title: 'Working Principle',
            content: `<article>    
    <p><strong><b>Basic Operation</b></strong></p>
    <p>The Rama Yantra works through shadow projection on graduated cylindrical surfaces. An observer stands at the central pillar and uses a sighting mechanism to align with a celestial object.</p>
    
    <p><strong><b>Measurement Process</b></strong></p>
    
    <p><strong><b>Step 1: Object Sighting</b></strong></p>
    <p>The observer positions themselves at the center and sights the celestial body (sun, moon, star, or planet) through the vertical pillar or gnomon.</p>
    
    <p><strong><b>Step 2: Shadow Formation</b></strong></p>
    <p>When sunlight passes through the central structure, it creates a shadow that falls on the cylindrical walls and floor surfaces. The position of this shadow changes as the celestial body moves across the sky.</p>
    
    <p><strong><b>Step 3: Reading Altitude</b></strong></p>
    <p>The point where the shadow intersects the vertical graduated wall directly indicates the altitude angle. The vertical scales are marked with degree divisions that can be read immediately.</p>
    
    <p><strong><b>Step 4: Reading Azimuth</b></strong></p>
    <p>The horizontal position of the shadow on the floor (or the segment of the cylindrical wall where it falls) indicates the azimuth angle. The 12 segments provide directional reference.</p>
    
    <p><strong><b>Step 5: Dual Structure Usage</b></strong></p>
    <p>When a celestial object is positioned such that one cylindrical structure cannot capture its shadow properly, the observer switches to the perpendicular structure, which is oriented to measure that portion of the sky.</p>
    
    <p><strong><b>Continuous Tracking</b></strong></p>
    <p>As celestial bodies move, the shadow continuously changes position on the graduated surfaces, allowing real-time tracking and measurement throughout the day or night.</p>
</article>`,
            image: rama4
          },
          {
            title: 'Mathematical / Scientific Concept',
            content: `<article>
    <u><b>Key Sundial Formulas</b></u>
    
    <div class="formula-section">
        <b>Altitude Formula</b>
        <p class="formula">h = 90° - zenith angle</p>
        <small>Measured from directly overhead</small>
    </div>
    <br>
    
    <div class="formula-section">
        <b>Azimuth</b>
        <p class="formula">Azimuth = 0° to 360° (clockwise from North)></p>
        <small>Angular distance from North direction</small>
    </div>
    <br>
    
    <div class="formula-section">
        <b>Shadow Length</b>
        <p class="formula">Shadow = Height / tan(altitude)</p>
        <small>Shorter shadow means higher sun position</small>
    </div>
    <br>
    <div class="formula-section">
        <b>Hour Angle</b>
        <p class="formula">Hour Angle = 15° × hours from noon</p>
        <small>Used to calculate time from sun's position</small>
    </div>
    <br>
    
    <div class="formula-section">
        <b>Angular Distance</b>
        <p class="formula">Distance = √[(Δh)² + (Δaz × cos(h))²]</p>
        <small>Distance between two celestial points</small>
    </div>
    <hr>
    
    <b>Key Concept</b>
    <p>Earth rotates 15° per hour → Shadow moves 15° = 1 hour passed</p>
</article>`,
            image: rama5
          },
          {
            title: 'Construction Details',
            content: `<article>
    <u><p><strong><b>Materials</b></strong></p></u>
    <p><strong><b>Stone</b></strong> - Red sandstone and marble, Primary structural material</p>
    <p><strong><b>Lime Mortar</b></strong> - Binding material for stone blocks</p>
    <p><strong><b>Plaster</b></strong> - Surface finishing and scale markings</p>
    <u><p><strong><b>Construction</b></strong></p></u>
    <p><strong><b>Cylindrical Walls</b></strong> - Vertical stone walls arranged in cylindrical sectors, Height: 2 to 5 meters, Precisely cut and stacked blocks</p>
    <p><strong><b>Central Pillar</b></strong> - Solid stone vertical pillar at center, Perfectly vertical alignment</p>
    <p><strong><b>Floor Surface</b></strong> - Leveled stone slabs, Horizontal base with scale markings</p>
    <p><strong><b>Foundation</b></strong> - Deep stone foundation, Prevents tilting and ensures stability</p>
    <p><strong><b>Dual Structure</b></strong> - Two identical structures placed perpendicular (90 degrees apart), Complete 360-degree coverage</p>
    <p><strong><b>Scale Markings</b></strong> - Engraved into stone surfaces, Marble inlays for visibility, Degree divisions on walls and floor</p>
    <p><strong><b>Alignment</b></strong> - Precisely oriented with cardinal directions (North-South-East-West), Water levels and plumb lines used for accuracy</p>

</article>`,
            image: rama6
          },
          {
            title: 'Geographic Location',
content: `
  <p><strong>Primary Location:</strong> Jaipur, Rajasthan — home to the renowned <em>Jantar Mantar</em>, one of India’s largest and most precisely constructed observatories.</p>
  <p><strong>Geographical Coordinates:</strong></p>
  <ul>
    <li>Latitude: approximately 26.92° N</li>
    <li>Longitude: approximately 75.82° E</li>
  </ul>
  <p>
    The Jantar Mantar in Jaipur is meticulously aligned with the cardinal directions and calibrated to the local meridian, ensuring exceptional astronomical accuracy. 
    Smaller <em>Rama Yantras</em>—instruments for measuring the altitude and azimuth of celestial objects—are also found in Delhi, Ujjain, Mathura, and Varanasi, 
    each adapted to their specific geographic positions to maintain observational precision.
  </p>`,
            image: rama7
          },
          {
           title: 'Importance or Significance',
content: `
  <b>Astronomical and Technical Significance</b>
  <ul>
    <li>Represents a unique approach to measuring celestial coordinates through its innovative cylindrical design</li>
    <li>Demonstrates the sophisticated understanding of spherical astronomy in 18th-century India</li>
    <li>Allows for simultaneous measurement of both altitude and azimuth (horizontal and vertical coordinates)</li>
    <li>Enables accurate determination of celestial object positions in the local coordinate system</li>
   
  </ul>

  <b>Historical and Cultural Impact</b>
  <ul>
    <li>Showcases Maharaja Sawai Jai Singh II's commitment to advancing astronomical precision</li>
    <li>Contributed to the development of accurate astronomical tables for the Indian subcontinent</li>
    <li>Symbolizes the scientific renaissance in Mughal-era India</li>
    
  </ul>
`,
            image: rama8
          },
          {
            title: 'Conclusion',
            content: `<p>
    The Rama Yantra is a remarkable astronomical instrument built by Maharaja Sawai Jai Singh II in the 18th century. 
    It is designed to measure the <strong>altitude</strong> and <strong>azimuth</strong> of celestial bodies with high precision. 
    The instrument uses a central pillar, circular floor, and marked cylindrical walls to record accurate observations. 
    Located at Jantar Mantar in Jaipur and Delhi, it showcases the advanced understanding of geometry and astronomy of that era. 
    Its twin structures allow cross-verification of readings. 
    Even today, the Rama Yantra stands as a symbol of India’s rich scientific heritage and ingenuity.
  </p>`,
            image: rama9
          }
        ]
      }
    };

    setBookData(data[slug] || {
      title: 'Ancient Astronomical Instruments',
      chapters: [
        {
          title: 'Introduction / Overview to Yantras',
          content: '<p>Ancient Indian astronomical instruments represent a remarkable fusion of science, mathematics, and architecture.</p>',
          image: samrat1
        }
      ]
    });
  }, [slug]);

  // Total pages: cover + TOC + all chapters
  const totalPages = 1 + 1 + bookData.chapters.length;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="text-center py-10 pt-20 bg-heritage-parchment-dark">
        <div className="mb-0 mt-8 [&_ol]:!text-xl text-left ml-10 [&_ol]:!text-heritage-burgundy/85">
          <Breadcrumbs
            labelMapping={{
              [`/book/${slug}`]: bookData.title,
              ['/book']: 'Learn',
            }}
            routeMapping={{
              ['/book']: '/learn',
            }}
          />
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center bg-heritage py-16">
        <div className="w-full max-w-6xl px-4">
          <div
            className={`w-[480px] h-[740px] mb-40 relative mx-auto transition-all duration-1000 ${currentPage > 0 ? 'translate-x-[175px]' : ''
              }`}
            style={{ perspective: '1500px' }}
          >
            {/* Cover Page (Page 0) */}
            <div
              className="absolute w-full h-full rounded-r-[15px] flex items-center justify-center cursor-pointer text-white text-2xl font-bold bg-cover bg-no-repeat shadow-2xl transition-all duration-1000"
              style={{
                transformOrigin: 'center left',
                backgroundImage: `url(${coverImage})`,
                transform: currentPage > 0 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                zIndex: currentPage > 0 ? 1 : totalPages + 10,
                transformStyle: 'preserve-3d'
              }}
              onClick={() => currentPage === 0 && nextPage()}
            >
              <div
                className="w-full h-full flex pt-8 items-center text-4xl justify-center px-6 text-center font-devanagari"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {bookData.title}
              </div>
            </div>

            {/* TOC Page (Page 1) - Front: TOC, Back: Chapter 1 Image */}
            <div
              className="absolute w-full h-full transition-all duration-1000 ease-in-out"
              style={{
                transformOrigin: 'left',
                transformStyle: 'preserve-3d',
                transform: currentPage > 1 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                zIndex: currentPage > 1 ? 2 : totalPages + 9
              }}
            >
              {/* Front - Table of Contents */}
              <div
                className="absolute w-full h-full bg-cover bg-no-repeat rounded-r-[15px] shadow-xl flex overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${rightPageImage})`,
                  backfaceVisibility: 'hidden'
                }}
                onClick={currentPage === 1 ? nextPage : undefined}
              >
                <div className="w-full flex flex-col p-8">
                  <h1 className="text-black text-3xl font-bold mt-4 mb-0 text-center font-devanagari">
                    Table of Contents
                  </h1>
                  <div className="text-center text-black mb-6 text-sm">
                    ─────────────────
                  </div>
                  <div className="overflow-y-auto space-y-2">
                    {bookData.chapters.map((chapter, index) => (
                      <div key={index} className="flex items-start gap-3 p-1">
                        <span className="text-black font-semibold text-base min-w-[25px]">
                          {index + 1}.
                        </span>
                        <span className="text-black font-serif text-lg font-semibold">
                          {chapter.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-20 ml-40 text-center text-black font-semibold text-sm italic">
                    Click to begin your journey
                  </div>
                </div>
              </div>

              {/* Back - Chapter 1 Image */}
              <div
                className="absolute w-full h-full bg-cover bg-no-repeat rounded-l-[15px] shadow-xl flex overflow-hidden cursor-pointer"
                style={{
                  transform: 'rotateY(180deg)',
                  backgroundImage: `url(${leftPageImage})`,
                  backfaceVisibility: 'hidden'
                }}
                onClick={currentPage === 2 ? prevPage : undefined}
              >
                <div className="w-full flex items-center justify-center p-8">
                  <img
                    src={bookData.chapters[0]?.image}
                    alt={bookData.chapters[0]?.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Chapter Pages - Each page: Front has content, Back has next chapter's image */}
            {bookData.chapters.map((chapter, index) => {
              const pageNum = 2 + index; // Page 2, 3, 4, etc.
              const isFlipped = currentPage > pageNum;
              const baseZIndex = totalPages + 8 - index;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full transition-all duration-1000 ease-in-out"
                  style={{
                    transformOrigin: 'left',
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                    zIndex: isFlipped ? pageNum : baseZIndex
                  }}
                >
                  {/* Front - Chapter Content */}
                  <div
                    className="absolute w-full h-full bg-cover bg-no-repeat rounded-r-[15px] shadow-xl flex overflow-hidden cursor-pointer"
                    style={{
                      backgroundImage: `url(${rightPageImage})`,
                      backfaceVisibility: 'hidden'
                    }}
                    onClick={currentPage === pageNum ? nextPage : undefined}
                  >
                    <div className="w-full flex flex-col p-8">
                      <div className="mb-2 text-xs text-black font-devanagari font-semibold uppercase tracking-wider">
                        Chapter {index + 1}
                      </div>
                      <h2 className="text-black font-devanagari text-2xl font-bold mb-4 border-b-2 border-black pb-3">
                        {chapter.title}
                      </h2>
                      <div
                        className="text-black font-mono text-base leading-relaxed overflow-y-auto prose prose-sm prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-strong:text-black prose-em:text-black max-w-none [&_ul]:list-disc [&_ul]:pl-6 [&_li]:ml-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-semibold"
                        dangerouslySetInnerHTML={{ __html: chapter.content }}
                      /></div>
                    <div className="absolute bottom-6 right-6 text-xs text-black font-semibold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Back - Next Chapter's Image (or blank for last chapter) */}
                  <div
                    className="absolute w-full h-full bg-cover bg-no-repeat rounded-l-[15px] shadow-xl flex overflow-hidden cursor-pointer"
                    style={{
                      transform: 'rotateY(180deg)',
                      backgroundImage: `url(${leftPageImage})`,
                      backfaceVisibility: 'hidden'
                    }}
                    onClick={currentPage === pageNum + 1 ? prevPage : undefined}
                  >
                    {index < bookData.chapters.length - 1 && (
                      <div className="w-full flex items-center justify-center p-8">
                        <img
                          src={bookData.chapters[index + 1]?.image}
                          alt={bookData.chapters[index + 1]?.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Back Cover */}
            <div
              className="absolute w-full h-full rounded-l-[15px] flex items-center justify-center bg-cover bg-no-repeat shadow-2xl"
              style={{
                transformOrigin: 'center left',
                backgroundImage: `url(${coverImage})`,
                zIndex: 0
              }}
            >
              <div className="text-center bg-black/40 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-white text-2xl font-bold mb-4 drop-shadow-lg">
                  End of Book
                </h2>
                <p className="text-white/90 text-sm mb-6">Thank you for reading</p>
                <button
                  onClick={() => setCurrentPage(0)}
                  className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Book;