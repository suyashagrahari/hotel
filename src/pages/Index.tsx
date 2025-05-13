import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import FeaturedDishes from "../components/home/FeaturedDishes";
import AboutPreview from "../components/home/AboutPreview";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <AboutPreview />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
