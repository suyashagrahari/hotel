import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import ChefTeam from "../components/about/ChefTeam";
import Values from "../components/about/Values";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <ChefTeam />
        <Values />
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
