import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Premium Engine Oil",
    subtitle: "Fully Synthetic 5W-30",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&q=80",
  },
  {
    id: 2,
    title: "Brake System",
    tag: "Safety",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
  },
  {
    id: 3,
    title: "Alloy Wheels",
    tag: "Performance",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
  },
  {
    id: 4,
    title: "LED Headlights",
    tag: "Upgrade",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

const PremiumShowcase = () => {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* 🔥 LEFT - HERO PRODUCT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative h-[520px] overflow-hidden group"
        >
          <img
            src={products[0].image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 p-8">
            <p className="text-primary text-sm mb-2">
              {products[0].subtitle}
            </p>

            <h2 className="text-white text-3xl font-bold mb-4">
              {products[0].title}
            </h2>

            <button className="flex items-center gap-2 text-sm uppercase tracking-wide text-white">
              Explore
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 🔥 RIGHT - PRODUCT CARDS GRID */}
        <div className="grid grid-cols-2 gap-6">

          {products.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-secondary overflow-hidden hover:bg-secondary/70 transition-all"
            >

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                {/* Tag */}
                <p className="text-primary text-xs uppercase tracking-widest mb-2">
                  {item.tag}
                </p>

                {/* Title */}
                <h3 className="text-sm font-semibold mb-3 group-hover:text-primary transition">
                  {item.title}
                </h3>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground group-hover:text-primary transition">
                  View Product
                  <ArrowRight className="w-4 h-4" />
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;