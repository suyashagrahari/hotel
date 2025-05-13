import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477948879622-5f16e220fa42?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Restaurant dining hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-restaurant-brown/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h4 className="text-restaurant-gold font-playfair text-lg md:text-xl mb-4">
              Our Story
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <h1 className="text-restaurant-cream mb-6 leading-tight">
              About La Saveur
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <p className="text-restaurant-cream/90 text-lg max-w-xl">
              A journey through culinary excellence, passion, and tradition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
