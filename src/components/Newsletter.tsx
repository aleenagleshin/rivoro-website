import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-2">
              Subscribe to Newsletter
            </h2>
            <p className="font-body text-primary-foreground/80">
              Get the latest updates on new products and upcoming sales
            </p>
          </div>

          <form className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-80 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 font-body outline-none focus:border-primary-foreground transition-colors"
            />
            <button
              type="submit"
              className="px-4 sm:px-6 py-4 bg-background text-foreground font-heading uppercase tracking-wider hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <span className="hidden sm:inline">Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
