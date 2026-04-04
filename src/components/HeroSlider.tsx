import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  ShieldCheck,
  Settings,
} from "lucide-react";
import OilImage from "../components/assets/oil_filter_Hero_imae.png";
import PistonImage from "../components/assets/PISTON_HERO_IMAGE.png";
const slides = [
  {
    id: 1,
    subtitle: "High-Performance Lubricants",
    title: "Premium Engine Oils & Filters",
    description:
      "Extend your engine life with our synthetic range and high-flow filtration systems.",
    image: OilImage, // Dark oil/mechanical theme
  },
  {
    id: 2,
    subtitle: "Precision Engineering",
    title: "Genuine Engine & Transmission Parts",
    description:
      "Cylinder heads, pistons, and gear components for maximum reliability.",
    image: PistonImage, // Dark engine part
  },
  {
    id: 3,
    subtitle: "OEM Body & Exterior",
    title: "Body Parts & Styling Components",
    description:
      "From bumpers to lighting systems, perfectly fitted for your vehicle model.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e14526847?w=1920&q=80", // Dark car silhouette/body
  },
  {
    id: 4,
    subtitle: "Changan • Haval • Geely • MG",
    title: "Chinese Brand Specialist Accessories",
    description:
      "Premium interior upgrades and exterior accessories for all major Chinese brands.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80", // Luxury dark interior
  },
  {
    id: 5,
    subtitle: "Mechanical Durability",
    title: "Suspension & Braking Systems",
    description:
      "Heavy-duty shock absorbers, brake pads, and steering components.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80", // Dark workshop/parts
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[75vh] md:h-[80vh] overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                {/* Background Image with heavy dark overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] scale-110 animate-ken-burns"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Dark gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="container relative h-full flex items-center">
                  <div className="max-w-2xl px-6 md:px-0">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <span className="bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1">
                        Professional Grade
                      </span>
                      <div className="h-[1px] w-12 bg-primary/50" />
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-primary font-bold tracking-widest text-sm md:text-base uppercase mb-2"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-400 text-lg mb-8 max-w-lg font-light leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-wrap gap-4"
                    >
                      <button className="bg-primary hover:bg-white hover:text-black text-primary-foreground px-8 py-4 flex items-center gap-3 font-bold transition-all group">
                        <MessageSquareQuote className="w-5 h-5" />
                        REQUEST QUOTE
                      </button>
                      <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 font-bold transition-all backdrop-blur-sm">
                        EXPLORE PARTS
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation Controls - Minimalist Style */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-14 h-14 flex items-center justify-center border border-white/10 text-white hover:bg-primary hover:border-primary transition-all rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 flex items-center justify-center border border-white/10 text-white hover:bg-primary hover:border-primary transition-all rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-primary"
        />
      </div>
    </section>
  );
};

export default HeroSlider;
