import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Reusable Counter Component
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Clean the string (e.g., "10K+" becomes 10, "99%" becomes 99)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: duration });
      return controls.stop;
    }
  }, [isInView, count, numericValue, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const PromoBanner = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80)`,
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="category-tag text-primary mb-4">Limited Time Offer</p>
            <h2 className="section-title mb-6">
              Up to 40% Off<br />
              Premium Parts
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-md">
              Get the best deals on high-quality automotive parts. Limited stock available.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-outline">View All Deals</button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "10K+", label: "Products Available" },
              { number: "50+", label: "Top Brands" },
              { number: "24/7", label: "Customer Support" },
              { number: "99%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="border border-border p-8 text-center bg-card/30 backdrop-blur-sm"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number === "24/7" ? (
                    stat.number
                  ) : (
                    <Counter value={stat.number} />
                  )}
                </p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;