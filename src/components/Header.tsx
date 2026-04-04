import { useState } from "react";
import {
  Menu,
  X,
  Headphones,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  InstagramIcon,
  Twitter,
  MessageSquareQuote,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "#", active: true },
  { label: "ABOUT", href: "#" },
  { label: "BRANDS", href: "#" },
  { label: "PRODUCTS", href: "#" },
  { label: "CATALOG", href: "#" },
  // { label: "CONTACT", href: "#" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-background sticky top-0 z-50">
        {/* Main Header */}
        <div className="flex items-center justify-between border-b border-border/30">
          {/* Logo Section */}
          <div className="bg-primary flex items-center px-4 md:px-6 lg:px-12 py-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-4 md:hidden text-primary-foreground hover:opacity-80 transition-opacity"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="flex flex-col leading-none">
              <span className="font-heading text-xl md:text-2xl lg:text-4xl font-black tracking-tighter text-primary-foreground">
                REVORO<span className="text-primary-foreground">.</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-medium tracking-[0.22em] text-primary-foreground/90 uppercase mt-1">
                Auto Spare Parts LLC
              </span>
            </a>
          </div>

          {/* Right Side: Socials, Phone & Location */}
          <div className="flex items-center gap-4 md:gap-8 px-3 md:px-6 lg:px-12">
            {/* Social Icons - Hidden on very small screens */}
            <div className="hidden lg:flex items-center gap-3 border-r border-border/50 pr-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-body">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <a
                href="tel:00987513024008"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                0098 751 30 2408
              </a>
            </div>

            {/* Meaningful Location Link */}
            <a
              href="https://maps.google.com/?q=Al+Quoz+Dubai" // Replace with actual Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-body text-muted-foreground hover:text-primary transition-colors group"
            >
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary group-hover:animate-bounce" />
              <div className="flex flex-col leading-tight">
                <span className="hidden sm:block text-[10px] uppercase opacity-70">
                  Our Location
                </span>
                <span className="font-semibold text-foreground group-hover:text-primary">
                  Al Quoz, Dubai
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-b border-border/30 py-5">
          <div className="container flex items-center justify-between">
            <ul className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${item.active ? "active text-primary" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Primary Action Button: Get a Quote */}
            <a
              href="#quote-form"
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm font-bold text-sm tracking-wide hover:bg-primary/90 transition-all group"
            >
              GET A QUOTE
              <motion.span
                className="inline-block"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[100]"
          >
            <div className="container py-8">
              <div className="flex justify-between items-center mb-12">
                <span className="font-heading text-2xl font-bold text-primary">
                  REVORO
                </span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
              </div>
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="font-heading text-4xl font-bold hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
