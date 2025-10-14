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
import rama9 from '../assets/book/rama/chapter9.png';
import rama10 from '../assets/book/rama/chapter10.png';

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
            title: 'Introduction',
            content: 'The Samrat Yantra is one of the largest and most accurate sundials in the world, designed by Maharaja Jai Singh II in the early 18th century. Built as part of the Jantar Mantar observatories in Jaipur, Delhi, and other Indian cities, the name "Samrat" means King, signifying its supreme precision in measuring time and celestial movements.',
            image: samrat1
          },
          {
            title: 'Function and Purpose',
            content: 'The main purpose of the Samrat Yantra is to measure local time accurately using the position of the Sun\'s shadow. It can also determine the declination of the Sun, altitude and azimuth of celestial bodies, local meridian and equinox timings with remarkable precision.',
            image: samrat2
          },
          {
            title: 'Structure and Design',
            content: 'The yantra takes the shape of a giant right-angled triangle forming a sundial. Its main components include the Gnomon - a triangular wall (hypotenuse inclined towards the North Pole) - and two curved stone quadrants on either side with time markings. Standing at around 27 meters in Jaipur, the gnomon\'s hypotenuse is parallel to Earth\'s axis.',
            image: samrat3
          },
          {
            title: 'Working Principle',
            content: 'The Samrat Yantra works on the principle of casting a shadow. As the Sun moves across the sky, the gnomon\'s shadow shifts along the time-marked quadrants. The edge of the shadow corresponds to a specific time of the day. Since the gnomon is aligned with Earth\'s axis, it reflects the Sun\'s apparent motion relative to the observer\'s meridian.',
            image: samrat4
          },
          {
            title: 'Mathematical Concepts',
            content: 'Based on trigonometry and geometry, the angle of inclination of the gnomon equals the latitude of the location (approximately 27°N for Jaipur). Time is read using the hour angle (H), derived from the Sun\'s shadow using the formula: H = 15° × (t - 12), where t represents local solar time.',
            image: samrat5
          },
          {
            title: 'Historical Significance',
            content: 'The Samrat Yantra stands as a monumental blend of science, mathematics, and architecture. Its design allows highly accurate time measurement - within 2 seconds of modern accuracy - using only sunlight and shadows. Recognized by UNESCO as part of the World Heritage Site at Jaipur\'s Jantar Mantar, it represents the genius of Maharaja Jai Singh II and the astronomical excellence of 18th-century India.',
            image: samrat6
          },
          {
            title: 'Materials and Construction',
            content: 'Constructed mainly from local stone and marble, the Samrat Yantra features precision-crafted markings engraved on the quadrants for minute and second readings. Built by skilled Rajput and Mughal craftsmen under Jai Singh\'s supervision, it demonstrates exceptional craftsmanship and engineering precision.',
            image: samrat7
          },
          {
            title: 'Location and Calibration',
            content: 'The primary location is Jaipur, Rajasthan at Jantar Mantar (Latitude ≈ 26.92° N, Longitude ≈ 75.82° E). Calibrated to match the local meridian of Jaipur, smaller Samrat Yantras exist in Delhi, Ujjain, Varanasi, and Mathura.',
            image: samrat8
          },
          {
            title: 'Scientific Importance',
            content: 'A symbol of India\'s advanced astronomical knowledge before modern instruments, the Samrat Yantra demonstrates precise timekeeping and celestial measurement using geometry. It inspires modern interest in ancient Indian science and engineering.',
            image: samrat9
          },
          {
            title: 'Legacy and Recognition',
            content: 'The Samrat Yantra represents the genius of Maharaja Jai Singh II and continues to function accurately today. UNESCO recognition and global interest in its design principles showcase the lasting impact of 18th-century Indian astronomical innovation.',
            image: samrat10
          }
        ]
      },
      'dhakshinottara-bhitti-yantra': {
        title: 'Dakshinottara Bhitti Yantra',
        chapters: [
          {
            title: 'Introduction',
            content: 'The Dakshinottara Bhitti Yantra, meaning "South-North Wall Instrument," was constructed by Maharaja Jai Singh II in the 18th century at the Jantar Mantar observatories. It is a vertical sundial built on a wall aligned along the north-south (meridian) line, specifically designed to measure the Sun\'s altitude and declination.',
            image: bhitti1
          },
          {
            title: 'Function and Purpose',
            content: 'This remarkable instrument is used to determine the meridian altitude, zenith distance, and declination of the Sun when it crosses the local meridian. It plays a crucial role in verifying solar observations and calendar making, providing essential data for astronomical calculations.',
            image: bhitti2
          },
          {
            title: 'Structure and Design',
            content: 'The yantra features a vertical wall (Bhitti) aligned precisely along the north-south direction. Its main components include a quadrant scale marked on the wall and a movable sighting rod or pinhole for sunlight projection. The plane of the wall lies on the meridian plane, facing south for optimal solar observation.',
            image: bhitti3
          },
          {
            title: 'Working Principle',
            content: 'When the Sun crosses the meridian at noon, its rays fall directly on the wall. The shadow or sunlight spot on the graduated scale gives the altitude or declination of the Sun for that specific day. This simple yet effective method provides accurate measurements of the Sun\'s position throughout the year.',
            image: bhitti4
          },
          {
            title: 'Mathematical Foundation',
            content: 'Based on spherical trigonometry, the declination (δ) is derived using the formula: δ = h + φ - 90°, where h represents the Sun\'s altitude and φ is the observer\'s latitude. This helps in determining solar noon and tracking the Sun\'s seasonal movement with remarkable precision.',
            image: bhitti5
          },
          {
            title: 'Significance',
            content: 'The Dakshinottara Bhitti Yantra demonstrates the scientific precision of ancient Indian astronomy. Made of stone and marble with finely engraved angular scales, it was built with high geometric precision for accurate meridian alignment. It reflects the scientific skill and astronomical insight of Jai Singh\'s era, serving as a testament to India\'s advanced astronomical knowledge.',
            image: bhitti6
          },
          {
            title: 'Construction Materials',
            content: 'Made of stone and marble, with finely engraved angular scales. Built with high geometric precision for accurate meridian alignment, the construction showcases the advanced masonry techniques of the 18th century.',
            image: bhitti7
          },
          {
            title: 'Calibration Methods',
            content: 'Found at Jantar Mantar, Jaipur, and other observatories. Aligned to the local meridian (north-south direction). Calibrated according to latitude ≈ 27° N for Jaipur, ensuring accurate solar observations year-round.',
            image: bhitti8
          },
          {
            title: 'Astronomical Applications',
            content: 'Used to verify other instruments like Samrat Yantra and for solar observations crucial in calendar making. The instrument helped establish precise timekeeping standards and seasonal determinations.',
            image: bhitti9
          },
          {
            title: 'Scientific Legacy',
            content: 'Shows the scientific precision of ancient Indian astronomy. The Dakshinottara Bhitti Yantra is a simple yet powerful vertical sundial that reflects the scientific skill and astronomical insight of Jai Singh\'s era.',
            image: bhitti10
          }
        ]
      },
      'rama-yantra': {
        title: 'Rama Yantra - The Celestial Coordinator',
        chapters: [
          {
            title: 'Introduction',
            content: 'The Rama Yantra was designed by Maharaja Jai Singh II in the early 18th century as part of his Jantar Mantar observatories. Unlike the Samrat Yantra which measures time, the Rama Yantra is specifically used to determine the position of celestial bodies in the sky. Its name "Rama" is derived from Sanskrit, symbolizing precision and alignment with astronomical principles.',
            image: rama1
          },
          {
            title: 'Function and Purpose',
            content: 'The main purpose of the Rama Yantra is to measure the altitude of celestial objects (angle above the horizon) and azimuth of celestial objects (compass direction from the observer). It helps astronomers calculate the exact position of stars, planets, and the Sun in the sky with remarkable accuracy.',
            image: rama2
          },
          {
            title: 'Structure and Design',
            content: 'The yantra consists of two large cylindrical structures - one for measuring latitude and one for longitude. The vertical cylinder features an outer wall with marked scales for altitude, while the horizontal cylinder has an inner floor with azimuth scales. Cross-wires or sighting pillars provide alignment with celestial objects. The cylinders are oriented along cardinal directions for precise measurements.',
            image: rama3
          },
          {
            title: 'Working Principle',
            content: 'The Rama Yantra works through direct sighting of celestial bodies. The observer stands inside the cylindrical structure and uses marked scales and cross-wires to determine both altitude (vertical angle) and azimuth (horizontal angle) of celestial objects. The innovative design minimizes parallax error, providing accurate readings of celestial positions.',
            image: rama4
          },
          {
            title: 'Mathematical Concepts',
            content: 'Based on spherical trigonometry, the yantra uses formulas for altitude (h) - the angle between the object and horizon - and azimuth (A) - the angle between north direction and the object\'s projection on the horizontal plane. These calculations incorporate the observer\'s latitude, the celestial object\'s declination, and the hour angle.',
            image: rama5
          },
          {
            title: 'Legacy and Importance',
            content: 'The Rama Yantra demonstrates India\'s advanced astronomical knowledge in the 18th century, allowing precise determination of celestial coordinates without telescopes. Constructed from local stone with precision-engraved scales, it complements other yantras for complete sky observation. UNESCO recognizes it as part of the World Heritage Jantar Mantar in Jaipur, reflecting the scientific ingenuity of Maharaja Jai Singh II.',
            image: rama6
          },
          {
            title: 'Construction Details',
            content: 'Constructed from local stone and masonry with scales and markings engraved with precision. Built by skilled artisans under Jai Singh II\'s supervision, the construction demonstrates exceptional architectural planning and execution.',
            image: rama7
          },
          {
            title: 'Geographic Location',
            content: 'Primary Location: Jaipur, Rajasthan (Jantar Mantar) at Coordinates: Latitude ≈ 26.92° N, Longitude ≈ 75.82° E. Smaller Rama Yantras exist in Delhi, Ujjain, Mathura, and Varanasi. Calibrated to align with the cardinal directions and local meridian.',
            image: rama8
          },
          {
            title: 'Observational Techniques',
            content: 'Demonstrates precise determination of celestial coordinates without telescopes. Allows complete sky observation when used with other instruments. The technique minimizes observational errors through geometric design.',
            image: rama9
          },
          {
            title: 'UNESCO Recognition',
            content: 'UNESCO recognizes it as part of the World Heritage Jantar Mantar in Jaipur. The Rama Yantra is a remarkable example of precision astronomy using geometry and observation, reflecting the scientific ingenuity of Maharaja Jai Singh II and 18th-century India.',
            image: rama10
          }
        ]
      }
    };

    setBookData(data[slug] || {
      title: 'Ancient Astronomical Instruments',
      chapters: [
        {
          title: 'Introduction to Yantras',
          content: 'Ancient Indian astronomical instruments represent a remarkable fusion of science, mathematics, and architecture.',
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
            className={`w-[480px] h-[740px] mb-40 relative mx-auto transition-all duration-1000 ${
              currentPage > 0 ? 'translate-x-[175px]' : ''
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
                  <h1 className="text-[#4173a5] text-3xl font-bold mb-4 text-center">
                    Table of Contents
                  </h1>
                  <div className="text-center text-gray-400 mb-6 text-sm">
                    ─────────────────
                  </div>
                  <div className="overflow-y-auto space-y-2">
                    {bookData.chapters.map((chapter, index) => (
                      <div key={index} className="flex items-start gap-3 p-1">
                        <span className="text-blue-600 font-semibold text-base min-w-[25px]">
                          {index + 1}.
                        </span>
                        <span className="text-gray-800 text-base">
                          {chapter.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center text-gray-600 text-sm italic">
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
                      <div className="mb-2 text-xs text-blue-500 font-semibold uppercase tracking-wider">
                        Chapter {index + 1}
                      </div>
                      <h2 className="text-[#4173a5] text-2xl font-bold mb-4 border-b-2 border-blue-300 pb-3">
                        {chapter.title}
                      </h2>
                      <p className="text-gray-800 text-base leading-relaxed overflow-y-auto">
                        {chapter.content}
                      </p>
                    </div>
                    <div className="absolute bottom-6 right-6 text-xs text-gray-700 font-semibold">
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