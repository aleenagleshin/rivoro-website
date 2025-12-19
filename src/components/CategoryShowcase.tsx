import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Engine Parts",
    count: "120+ Products",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
  },
  {
    id: 2,
    title: "Wheels & Tires",
    count: "85+ Products",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 3,
    title: "Exterior",
    count: "200+ Products",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

const CategoryShowcase = () => {
  return (
    <section className="bg-secondary py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Shop by Category</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Browse our extensive collection of automotive parts and accessories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="category-tag text-primary mb-2">{category.count}</p>
                <h3 className="font-heading text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-heading uppercase tracking-wider opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
