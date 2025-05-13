import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    description:
      "La Saveur opened its doors in a small, intimate space with just 24 seats. Chef Laurent's vision was simple: create extraordinary dining experiences using the finest local ingredients.",
  },
  {
    year: "2013",
    title: "First Michelin Star",
    description:
      "After just three years, La Saveur was awarded its first Michelin star, recognizing our commitment to culinary excellence and innovation.",
  },
  {
    year: "2016",
    title: "Expansion",
    description:
      "We moved to our current location, a beautifully restored historical building, expanding our capacity while maintaining our intimate atmosphere.",
  },
  {
    year: "2018",
    title: "Second Michelin Star",
    description:
      "Our continued dedication to pushing culinary boundaries while honoring traditional techniques earned us our second Michelin star.",
  },
  {
    year: "2022",
    title: "Culinary Academy",
    description:
      "We launched the La Saveur Culinary Academy to nurture the next generation of talented chefs and continue our legacy of excellence.",
  },
];

const OurStory = () => {
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
          <h2 className="text-restaurant-brown mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to culinary excellence, our path has been
            defined by passion, innovation, and an unwavering commitment to
            creating memorable dining experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-restaurant-gold/30"></div>

          {/* Milestones */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center mb-16 last:mb-0`}>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0
                        ? "md:items-end md:text-right"
                        : "md:items-start"
                    }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="text-restaurant-gold" />
                      <span className="text-restaurant-gold font-semibold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-restaurant-brown mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="md:w-0 flex justify-center relative">
                  <div className="w-12 h-12 rounded-full bg-restaurant-brown border-4 border-restaurant-gold flex items-center justify-center">
                    <span className="text-restaurant-cream font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="md:w-1/2 p-6 md:p-8 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
