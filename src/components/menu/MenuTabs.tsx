import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Menu data
const menuCategories = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

const menuItems = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Arborio rice cooked with wild mushrooms, finished with black truffle and aged parmesan",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "mains",
  },
  {
    id: 2,
    name: "Seared Scallops",
    description: "Fresh scallops with pea purée, pancetta crisp and mint oil",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "starters",
  },
  {
    id: 3,
    name: "Chocolate Soufflé",
    description:
      "Dark chocolate soufflé with vanilla bean ice cream and warm chocolate sauce",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
  },
  {
    id: 4,
    name: "Lobster Thermidor",
    description:
      "Lobster meat cooked in a rich, creamy sauce with gruyère cheese and cognac",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "mains",
  },
  {
    id: 5,
    name: "Beef Tartare",
    description: "Hand-cut beef with capers, shallots, mustard, and quail egg",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1635146037526-a75e6905ad78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "starters",
  },
  {
    id: 6,
    name: "Foie Gras Terrine",
    description:
      "Duck foie gras with fig compote, toasted brioche and port reduction",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1726947226182-3d12f314d2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "starters",
  },
  {
    id: 7,
    name: "Rack of Lamb",
    description:
      "Herb-crusted lamb with rosemary jus, fondant potatoes and seasonal vegetables",
    price: "$42",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "mains",
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar crust",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
  },
  {
    id: 9,
    name: "Aged Negroni",
    description: "Barrel-aged gin, Campari, and vermouth with orange twist",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1726455414693-4323bf8cbb75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
  },
  {
    id: 10,
    name: "Wellington of Duck",
    description:
      "Duck breast wrapped in mushroom duxelles and puff pastry, served with red wine sauce",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "mains",
  },
  {
    id: 11,
    name: "Passionfruit Pavlova",
    description:
      "Crisp meringue with passionfruit curd, fresh berries and Chantilly cream",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
  },
  {
    id: 12,
    name: "Signature Martini",
    description:
      "Craft gin, dry vermouth, and lemon essence with olive garnish",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
  },
];

const MenuTabs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-restaurant-gold text-white"
                    : "bg-restaurant-cream/50 text-restaurant-brown hover:bg-restaurant-cream"
                }`}>
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-restaurant-gold text-white text-xs px-2 py-1 rounded-sm">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-restaurant-brown font-playfair text-xl mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center">
          <p className="text-gray-500 italic">
            * Please note that our menu changes seasonally and items may vary.
            All prices are subject to change.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuTabs;
