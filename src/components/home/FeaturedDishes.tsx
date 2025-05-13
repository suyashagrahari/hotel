import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Featured dishes data
const featuredDishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Arborio rice cooked with wild mushrooms, finished with black truffle and aged parmesan.",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Main Course",
  },
  {
    id: 2,
    name: "Seared Scallops",
    description: "Fresh scallops with pea purée, pancetta crisp and mint oil.",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Appetizer",
  },
  {
    id: 3,
    name: "Chocolate Soufflé",
    description:
      "Dark chocolate soufflé with vanilla bean ice cream and warm chocolate sauce.",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dessert",
  },
  {
    id: 4,
    name: "Lobster Thermidor",
    description:
      "Lobster meat cooked in a rich, creamy sauce with gruyère cheese and cognac.",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Main Course",
  },
];

const FeaturedDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <section ref={ref} className="py-20 bg-restaurant-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-restaurant-brown mb-4">Featured Dishes</h2>
          <p className="text-restaurant-brown/70 max-w-2xl mx-auto">
            Our award-winning chefs present their most beloved creations,
            showcasing the finest seasonal ingredients and innovative
            techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-restaurant-gold text-white text-xs px-2 py-1 rounded-sm">
                    {dish.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-restaurant-brown">{dish.name}</h4>
                  <span className="text-restaurant-gold font-semibold">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block text-restaurant-gold border-b border-restaurant-gold hover:border-restaurant-brown hover:text-restaurant-brown transition-colors duration-300">
            View Our Complete Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
