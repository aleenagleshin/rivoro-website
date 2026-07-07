<link rel="icon" type="image/x-icon" href="/favicon.ico" />
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Facebook,
  InstagramIcon,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "./assets/BLACK REVORO.png";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  /*{ label: "BRANDS", href: "#" },
  { label: "PRODUCTS", href: "#" },
  { label: "CATALOG", href: "#" },*/
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setIsCollapsed(window.scrollY > 120); // collapse later
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <header
        className={`sticky top-0 z-50 overflow-hidden transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
          }`}
      >
        {/* glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/10 blur-[120px]" />
        </div>

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] pointer-events-none" />


        {/* 🔶 Top Bar */}
        <div className={`relative z-10 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-1" : "py-2"}`}>

          {/* 🔥 Logo Section */}
          <div className="flex items-center justify-between px-4 md:px-6 lg:px-12 min-h-[70px] md:min-h-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-4 md:hidden text-foreground"
            >
              <Menu className="h-14 md:h-16" />
            </button>

            <Link to="/" className="flex items-center min-w-[120px]">
              <img
                src={logo}
                alt="Revoro Logo"
                className={`
                object-contain transition-all duration-300

                h-20
                md:h-28
                lg:h-32

                ${isScrolled ? "md:h-20 lg:h-24" : ""}
              `}
              />
            </Link>
          </div>

          
            {/* Mobile Contact */}
            <div className="flex flex-col items-end pr-4 lg:hidden">
              <a
                href="https://maps.google.com/?q=REVORO+AUTO+SPARE+PARTS+TRD+LLC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] text-muted-foreground"
              >
                <MapPin className="w-3 h-3 text-primary" />
                <span>AL QUOZ 4, DUBAI</span>
              </a>

              <a
                href="tel:+97145477977"
                className="flex items-center gap-1 text-[10px] font-medium"
              >
                <Phone className="w-3 h-3 text-primary" />
                <span>+971 4 547 7977</span>
              </a>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-8 px-4 md:px-6 lg:px-12">

              {/* Navigation */}
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="font-semibold text-sm hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div className="flex items-center gap-3 border-l border-r border-border/50 px-6">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/revoroautospare?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">+971 4 547 7977</span>
                </div>

                <a
                  href="https://maps.google.com/?q=REVORO+AUTO+SPARE+PARTS+TRD+LLC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium">
                    AL QUOZ 4, 16D st DUBAI, UAE
                  </span>
                </a>
              </div>

              {/* CTA */}
              <a
                href="#quote-form"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm font-bold text-sm hover:bg-primary/90"
              >
                GET A QUOTE
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </div>



          {/* Premium Thin Accent */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </header>

      {/* 🔶 Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[100]"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-10">
                <img src={logo} className="h-10" />
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
              </div>

              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-3xl font-bold hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
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