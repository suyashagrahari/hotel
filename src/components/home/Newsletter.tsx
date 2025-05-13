import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import Button from "../ui/Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Thank you for subscribing to our newsletter!");
    }, 1000);
  };

  return (
    <section ref={ref} className="py-16 bg-restaurant-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}>
            <Mail className="w-12 h-12 mx-auto text-restaurant-gold mb-6" />
            <h2 className="text-restaurant-brown mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive offers, events, and
              culinary insights from our master chefs.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-restaurant-gold focus:border-transparent transition-all duration-300"
            />
            <Button
              type="submit"
              variant="gold"
              disabled={isSubmitting}
              className="whitespace-nowrap">
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
