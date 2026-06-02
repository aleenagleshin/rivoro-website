import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Branding: Matches the Header Style */}
            <div className="flex flex-col mb-6">
              <div className="flex items-baseline mb-1">
                <span className="font-heading text-2xl font-bold tracking-tighter text-foreground">
                  REVORO<span className="text-primary">.</span>
                  {/* <span className="text-sm lowercase font-medium">ae</span> */}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium -mt-1">
                Auto Spare Parts L.L.C
              </span>
            </div>

            <p className="font-body text-muted-foreground mb-6 max-w-xs">
              Premium automotive parts and accessories for enthusiasts who demand the best in performance and reliability.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/riveroautoparts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-bold uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Shop", "Blog", "Contact", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-bold uppercase mb-6">Categories</h4>
            <ul className="space-y-3">
              {["Engine Parts", "Wheels & Tires", "Exterior", "Interior", "Performance"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-bold uppercase mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=REVORO+AUTO+SPARE+PARTS+TRD+LLC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />

                  <span className="font-body text-muted-foreground group-hover:text-primary transition-colors">
                    AL QUOZ 4, 16D st DUBAI, UAE
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  +971 4 547 7977
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto: revoroautoparts@gmail.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  revoroautoparts@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 REVORO. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
