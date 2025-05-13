import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, HeartHandshake, Leaf, Utensils } from "lucide-react";

const values = [
  {
    icon: Utensils,
    title: "Culinary Excellence",
    description:
      "We are committed to the highest standards of culinary craftsmanship, using refined techniques and meticulous attention to detail in every dish we create.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We source ingredients responsibly, minimize waste, and support local farmers and producers who share our commitment to environmental stewardship.",
  },
  {
    icon: HeartHandshake,
    title: "Hospitality",
    description:
      "We create warm, memorable experiences through thoughtful service that anticipates needs and exceeds expectations for every guest.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We embrace creativity and continuous learning, constantly evolving our craft while respecting culinary traditions and techniques.",
  },
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-restaurant-brown mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide every aspect of our restaurant, from the
            dishes we create to the experiences we provide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-restaurant-cream rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-restaurant-gold/10 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-restaurant-gold" />
              </div>
              <h3 className="text-restaurant-brown text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
