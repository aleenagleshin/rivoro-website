import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"; // 1. Import useState
import ProductCard from "./ProductCard";

const categories = ["All Categories", "Engine", "Wheels & Tires", "Exterior", "Interior"];

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "Wheels & Tires", // Matches the category list
    title: "SuperHyper XT500 HLT Rim Chrome Plated",
    price: "$2,790",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=600&q=80",
    category: "Engine",
    title: "Spark plugs Series 200 Long Life White Matte",
    price: "$280",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    category: "Engine",
    title: "Total Energies Quartz Ineo Pure Power",
    price: "$1,230",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80",
    category: "Engine",
    title: "HKS Sports Brake Pro Kit GT III RS",
    price: "$3,600",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    category: "Wheels & Tires",
    title: "Kitsune Racing 800 Series Chrome Plated",
    price: "$800",
    originalPrice: "$1,200",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
    category: "Exterior",
    title: "Carbon Fiber Hood Scoop Racing Edition",
    price: "$450",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1684849843263-fd9ed30985f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Interior",
    title: "Custom Alcantara Sport Steering Wheel",
    price: "$1,150",
    originalPrice: "$1,400",
  }
];

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState("All Categories");

  const filteredProducts = activeTab === "All Categories"
    ? products
    : products.filter(product => product.category === activeTab);

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <h2 className="section-title">Best Seller</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`font-heading text-sm uppercase tracking-wider transition-colors relative pb-1 ${activeTab === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  {...product}
                  delay={0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;