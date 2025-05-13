import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

// Chef data
const chefs = [
  {
    name: "Michel Laurent",
    role: "Executive Chef",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "With over 20 years of experience in Michelin-starred restaurants across France and America, Chef Laurent brings his innovative vision and technical mastery to La Saveur.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sophia Martinez",
    role: "Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1574966740793-953ad374e8fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Renowned for her artistic dessert creations that balance classic techniques with modern presentation, Chef Martinez transforms each dessert into a memorable finale.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hiroshi Tanaka",
    role: "Chef de Cuisine",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Chef Tanaka blends Japanese precision with French techniques, creating dishes that harmoniously combine flavors from both culinary traditions.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Elena Rossi",
    role: "Sommelier",
    image:
      "https://images.unsplash.com/photo-1697898109582-40f15c65f174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "With an impeccable palate and encyclopedic knowledge of wines, Elena curates our award-winning wine list and creates perfect pairings for our seasonal menus.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const ChefTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section ref={ref} className="py-20 bg-restaurant-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-restaurant-brown mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of culinary professionals brings passion,
            creativity, and expertise to every dish we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="flex space-x-4 p-4">
                    <a
                      href={chef.social.instagram}
                      className="text-white hover:text-restaurant-gold transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a
                      href={chef.social.twitter}
                      className="text-white hover:text-restaurant-gold transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a
                      href={chef.social.linkedin}
                      className="text-white hover:text-restaurant-gold transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-restaurant-brown font-semibold mb-1">
                  {chef.name}
                </h3>
                <p className="text-restaurant-gold text-sm mb-3">{chef.role}</p>
                <p className="text-gray-600 text-sm">{chef.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefTeam;
