import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MenuHero from "../components/menu/MenuHero";
import MenuTabs from "../components/menu/MenuTabs";

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Navbar />
      <main>
        <MenuHero />
        <MenuTabs />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Menu;
