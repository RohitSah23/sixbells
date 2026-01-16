import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-charcoal text-cream pt-16 pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-heading text-2xl font-bold mb-2">
              Six Bells
              <span className="text-gold ml-2">Oxford</span>
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-4">
              A refined pub experience in the heart of Oxford. Exceptional food,
              fine drinks, and timeless hospitality since 1820.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sixbells_oxford/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Book", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(
                          `#${link === "Book" ? "reservations" : link.toLowerCase()}`
                        );
                      }}
                      className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  123 High Street
                  <br />
                  Oxford, OX1 2AB
                  <br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+441234567890"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  +44 (0) 1234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@sixbellsoxford.com"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  hello@sixbellsoxford.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">
              Opening Hours
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-cream/70">Monday - Thursday</span>
                <span className="text-cream">12:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-cream/70">Friday - Saturday</span>
                <span className="text-cream">12:00 - 00:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-cream/70">Sunday</span>
                <span className="text-cream">12:00 - 22:00</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-sm text-cream/80">
                <Clock className="w-4 h-4 inline mr-2 text-gold" />
                Kitchen closes 1 hour before closing
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-cream/10 pt-8 text-center"
        >
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Six Bells Oxford. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
