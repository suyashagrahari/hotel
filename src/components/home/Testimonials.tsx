import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "An unforgettable culinary journey. The attention to detail in each dish is remarkable, and the service is impeccable.",
    author: "Emma Thompson",
    role: "Food Critic",
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote:
      "La Saveur has redefined fine dining for us. Each visit is a celebration of flavors and artistry that leaves us eagerly anticipating our return.",
    author: "Michael Chen",
    role: "Loyal Customer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote:
      "From the moment you enter, it's clear this is no ordinary restaurant. The ambiance, the food, the wine list – everything is meticulously crafted for a perfect evening.",
    author: "Sophia Rodriguez",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    quote:
      "The chef's tasting menu was a revelation. Each course told a story and showcased techniques that were both innovative and respectful of tradition.",
    author: "James Wilson",
    role: "Culinary Enthusiast",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  // Function to reset the timeout
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setAutoplay(false);
    resetTimeout();
  };

  // Resume autoplay on mouse leave
  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Autoplay effect
  useEffect(() => {
    resetTimeout();

    if (autoplay) {
      timeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      resetTimeout();
    };
  }, [current, autoplay]);

  return (
    <section
      ref={ref}
      className="py-20 bg-restaurant-brown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-restaurant-cream mb-4">Guest Experiences</h2>
          <p className="text-restaurant-cream/70 max-w-2xl mx-auto">
            Hear what our guests have to say about their dining experience at La
            Saveur.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center">
                <Quote className="mx-auto text-restaurant-gold w-12 h-12 mb-6 opacity-50" />
                <p className="text-restaurant-cream text-xl md:text-2xl font-playfair italic mb-8 leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-restaurant-cream font-medium">
                      {testimonials[current].author}
                    </div>
                    <div className="text-restaurant-gold text-sm">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  current === index
                    ? "bg-restaurant-gold"
                    : "bg-restaurant-cream/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 text-restaurant-cream hover:text-restaurant-gold transition-colors"
            aria-label="Previous testimonial">
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 text-restaurant-cream hover:text-restaurant-gold transition-colors"
            aria-label="Next testimonial">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
