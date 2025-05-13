import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Fine dining restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-restaurant-brown/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h4 className="text-restaurant-gold font-playfair text-lg md:text-xl mb-4">
              Welcome to La Saveur
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <h1 className="text-restaurant-cream mb-6 leading-tight">
              Exquisite Culinary Experience
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <p className="text-restaurant-cream/90 text-lg mb-8 max-w-xl">
              Indulge in a symphony of flavors crafted with passion and
              precision. Our award-winning chefs transform the finest
              ingredients into unforgettable dining experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4">
            <Button as={Link} to="/reservation" variant="gold" size="lg">
              Reserve A Table
            </Button>
            <Button as={Link} to="/menu" variant="outline" size="lg">
              Explore Our Menu
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute -right-20 -bottom-20 w-96 h-96 border-2 border-restaurant-gold rounded-full"
      />
    </section>
  );
};

export default Hero;
