import { motion } from "framer-motion";

const manufacturers = [
  { name: "Toyota", logo: "https://images.seeklogo.com/logo-png/17/2/toyota-logo-png_seeklogo-171947.png" },
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" },
  { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/de/1/15/Audi_logo.svg" },
  { name: "Bentley", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/12/Bentley-logo-svg-vector.svg/2560px-Bentley-logo-svg-vector.svg.png" },
  { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg" },
  { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
  { name: "Nissan", logo: "https://cdn.worldvectorlogo.com/logos/nissan-6.svg" },
];

const Brands = () => {
  // We duplicate the array to ensure the loop is seamless
  const duplicatedLogos = [...manufacturers, ...manufacturers];

  return (
    <section className="bg-background py-12 border-y border-border/30 overflow-hidden relative">
      {/* Optional: Gradient masks for smooth fade-in/out effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // Moves halfway because the list is doubled
          }}
          transition={{
            duration: 25, // Adjust for speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos?.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center w-32 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;