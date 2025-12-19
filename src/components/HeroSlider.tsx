import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    price: "$1.230",
    subtitle: "Fully-Synthetic - PROTEC",
    title: "Premium engine oil 5W-40",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
  },
  {
    id: 2,
    price: "$3.600",
    subtitle: "Turbo Start-up",
    title: "Engine Bundle pro Series",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
  },
  {
    id: 3,
    price: "$800.00",
    subtitle: "Alloy & stamped steel",
    title: "Chrome Custom rims",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
  },
  {
    id: 4,
    price: "$1.230",
    subtitle: "Fully-Synthetic - PROTEC",
    title: "Premium engine oil 5W-40",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: 5,
    price: "$3.600",
    subtitle: "Turbo Start-up",
    title: "Engine Bundle pro Series",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1920&q=80",
  },
  {
    id: 6,
    price: "$800.00",
    subtitle: "Alloy & stamped steel",
    title: "Chrome Custom rims",
    image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=1920&q=80",
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
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-secondary">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="container relative h-full flex items-center">
                  <div className="max-w-xl">
                    {/* Commented out the Price Section */}
                    {/* <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-primary font-heading text-3xl md:text-4xl font-bold mb-2"
                    >
                      {slide.price}
                    </motion.p> */}

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted-foreground font-body text-lg mb-4"
                    >
                      {slide.subtitle}
                    </motion.p>
                    {/* Alternative: Performance/Quality Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                        Premium Grade
                      </span>
                      <span className="text-foreground/60 text-[10px] uppercase tracking-[0.2em] font-medium border-l border-border/50 pl-2">
                        Genuine Certified
                      </span>
                    </motion.div>
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="section-title mb-8"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-4"
                    >
                      {/* Changed "Shop Now" to "View Collection" for catalog focus */}
                      <button className="btn-primary">View Collection</button>
                      <button className="btn-outline">Technical Specs</button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-foreground/30 text-foreground hover:bg-primary hover:border-primary transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-foreground/30 text-foreground hover:bg-primary hover:border-primary transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 transition-all duration-300 ${index === currentSlide ? "bg-primary scale-125" : "bg-foreground/30 hover:bg-foreground/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
