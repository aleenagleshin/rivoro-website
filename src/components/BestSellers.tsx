import { motion } from "framer-motion";
import {
  Cog,
  CircleDot,
  Car,
  Armchair,
  Disc,
  Wrench,
  Lightbulb,
  Gauge,
  Flame,
  Package,
} from "lucide-react";

const categories = [
  "Engine",
  "Wheels & Tires",
  "Exterior",
  "Interior",
  "Brakes",
  "Suspension",
  "Lighting",
  "Performance",
  "Exhaust",
  "Accessories",
];

const categoryIcons: Record<string, React.ElementType> = {
  Engine: Cog,
  "Wheels & Tires": CircleDot,
  Exterior: Car,
  Interior: Armchair,
  Brakes: Disc,
  Suspension: Wrench,
  Lighting: Lightbulb,
  Performance: Gauge,
  Exhaust: Flame,
  Accessories: Package,
};

const BestSellers = () => {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Categories</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore premium performance parts crafted for precision, power, and perfection.
          </p>
        </motion.div>

        {/* Compact Premium Category Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];

            return (
              <div
                key={cat}
                className="group bg-card border border-border rounded-xl py-10 px-6 flex flex-col items-center justify-center text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />

                <h3 className="mt-4 text-sm font-semibold tracking-wide">
                  {cat}
                </h3>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default BestSellers;