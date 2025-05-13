import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  //   { name: "Services", href: "/services" },
  //   { name: "Blog", href: "/blog" },
  //   { name: "Contact", href: "/contact" },
  //   { name: "Reservations", href: "/reservation" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-restaurant-brown/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-6"
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center">
            <Link
              to="/"
              className="text-restaurant-cream font-playfair text-2xl font-bold">
              <span className="text-restaurant-gold">La</span>Saveur
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-8">
            {NavLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-restaurant-cream hover:text-restaurant-gold transition-colors duration-300 
                  ${link.name === "Reservations" ? "font-semibold" : ""}`}>
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-restaurant-cream hover:text-restaurant-gold transition-colors">
              {isOpen ? (
                <X size={24} className="text-restaurant-gold" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-restaurant-brown border-t border-restaurant-gold/20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col py-4 gap-4">
                {NavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-restaurant-cream hover:text-restaurant-gold transition-colors p-2
                      ${
                        link.name === "Reservations"
                          ? "font-semibold text-restaurant-gold"
                          : ""
                      }`}
                    onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
