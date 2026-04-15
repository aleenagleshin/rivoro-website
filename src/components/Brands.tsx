import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const manufacturers = [
  {
    name: "Toyota",
    logo: "https://images.seeklogo.com/logo-png/17/2/toyota-logo-png_seeklogo-171947.png",
  },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    name: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png",
  },
  {
    name: "Audi",
    logo: "https://www.pngall.com/wp-content/uploads/13/Audi-Logo-PNG-Clipart.png",
  },
  {
    name: "Bentley",
    logo: "https://pngimg.com/uploads/bentley/bentley_PNG21.png",
  },
  {
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg",
  },
  {
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
  },
  {
    name: "Nissan",
    logo: "https://cdn.worldvectorlogo.com/logos/nissan-6.svg",
  },
];

const Brands = () => {
  const duplicatedLogos = [...manufacturers, ...manufacturers];

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Detect which logo is closest to center
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-12 border-y border-border/30 overflow-hidden relative">
      {/* Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div ref={containerRef} className="flex overflow-hidden">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((brand, index) => {
            const isActive =
              hoveredIndex === index || (hoveredIndex === null && centerIndex === index);

            return (
              <div
                key={`${brand.name}-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center justify-center w-32 h-16 cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "grayscale-0 opacity-100 scale-110"
                    : "grayscale opacity-40 scale-100"
                }`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;