import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once when it enters viewport

  return (
    <section ref={ref} className="bg-gray-900 text-white py-12 px-4 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Join Our Newsletter
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Subscribe to get updates about new games, offers, and events!
      </motion.p>

      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for subscribing!");
        }}
        className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="px-4 py-2 rounded-lg text-gray-800 flex-1"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 px-6 py-2 rounded-lg font-semibold"
        >
          Subscribe
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Newsletter;
