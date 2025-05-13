import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1632239008255-f3d12a19e13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing gourmet dish"
                className="rounded-lg shadow-xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-[-30px] right-[-30px] w-48 h-48 md:w-64 md:h-64 rounded-lg -z-10">
              <img
                src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-restaurant-gold rounded-full -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <h4 className="text-restaurant-gold font-playfair text-lg mb-2">
              Our Story
            </h4>
            <h2 className="text-restaurant-brown mb-6">
              A Passion for Culinary Excellence
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2010 by acclaimed chef Michel Laurent, La Saveur has
              grown from a humble bistro to one of the most celebrated dining
              destinations in the city. Our journey has been defined by an
              unwavering commitment to culinary excellence and memorable dining
              experiences.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We work closely with local farmers and suppliers to source the
              finest ingredients, ensuring each dish tells a story of quality
              and sustainability. Every plate that leaves our kitchen reflects
              our passion for the craft and respect for traditional techniques
              combined with modern innovation.
            </p>
            <Button as={Link} to="/about" variant="primary" size="lg">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
