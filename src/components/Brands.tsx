import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ✅ LOCAL ASSETS IMPORT
import toyota from "./assets/brands/toyota.png";
import bmw from "./assets/brands/bmw.svg";
import mercedes from "./assets/brands/mercedes.png";
import audi from "./assets/brands/audi.png";
import bentley from "./assets/brands/bentley.png";
import honda from "./assets/brands/honda.png";
import ford from "./assets/brands/ford.png";
import nissan from "./assets/brands/nissan.png";

import tesla from "./assets/brands/tesla.png";
import byd from "./assets/brands/byd.png";
import jac from "./assets/brands/jac.png";
import jetour from "./assets/brands/jetour.png";
import chery from "./assets/brands/chery.png";
import geely from "./assets/brands/geely.png";
import mg from "./assets/brands/mg.png";
import baic from "./assets/brands/baic.png";
import changan from "./assets/brands/changan.png";

const manufacturers = [
  { name: "Toyota", logo: toyota },
  { name: "BMW", logo: bmw },
  { name: "Mercedes", logo: mercedes },
  { name: "Audi", logo: audi },
  { name: "Bentley", logo: bentley },
  { name: "Honda", logo: honda },
  { name: "Ford", logo: ford },
  { name: "Nissan", logo: nissan },

  { name: "Tesla", logo: tesla },
  { name: "BYD", logo: byd },
  { name: "JAC Motors", logo: jac },
  { name: "Jetour", logo: jetour },
  { name: "Chery", logo: chery },
  { name: "Geely", logo: geely },
  { name: "MG Motors", logo: mg },
  { name: "Baic Motors", logo: baic },
  { name: "Changan", logo: changan },
];

const Brands = () => {
  const duplicatedLogos = [...manufacturers, ...manufacturers];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [centerIndex, setCenterIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section className="bg-background py-20 md:py-28 border-y border-border/30 overflow-hidden relative">

      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Trusted Brands</h2>
        <p className="text-muted-foreground mt-2">
          Genuine parts from global manufacturers
        </p>
      </div>

      <div ref={containerRef} className="flex overflow-hidden">
        <motion.div
          className="flex gap-24 items-center whitespace-nowrap py-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((brand, index) => {
            const isActive =
              hoveredIndex === index ||
              (hoveredIndex === null && centerIndex === index);

            return (
              <div
                key={`${brand.name}-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center justify-center w-32 h-20 md:w-40 md:h-24 transition-all duration-500 ${isActive
                  ? "grayscale-0 opacity-100 scale-105 z-20"
                  : "grayscale opacity-40 scale-100"
                  }`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-full object-contain"
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