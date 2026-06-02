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

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
          }`}
      >
        {/* 🔶 Top Bar */}
        <div className={`flex items-center justify-between border-b border-border/30 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>

          {/* 🔥 Logo Section */}
          <div className="flex items-center px-4 md:px-6 lg:px-12">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-4 md:hidden text-foreground"
            >
              <Menu className="h-14 md:h-16" />
            </button>

            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Revoro Logo"
                className={`object-contain transition-all duration-300 ${isScrolled ? "h-12" : "h-20"}`}
              />
            </Link>
          </div>

          {/* 🔶 Right Side */}
         <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 px-4 md:px-6 lg:px-12">

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/riveroautoparts/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
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

          </div>
        </div>

        {/* 🔶 Navigation (OUTSIDE top bar now ✅) */}
        <nav className={`transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

            <ul className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="#quote-form"
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm font-bold text-sm hover:bg-primary/90"
            >
              GET A QUOTE
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </nav>
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