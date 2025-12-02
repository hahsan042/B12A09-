import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "About | GameHub";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="bg-black min-h-screen text-white px-4 py-12 max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        About GameHub
      </motion.h1>

      <motion.p className="text-gray-300 text-lg mb-4 leading-relaxed" variants={itemVariants}>
        GameHub is your ultimate destination for discovering the latest and greatest video games.
        Track your progress, explore popular titles, and stay updated with the gaming community.
      </motion.p>

      <motion.p className="text-gray-300 text-lg mb-4 leading-relaxed" variants={itemVariants}>
        Our platform allows gamers to view detailed information about games, including ratings,
        reviews, and download links. Whether you are a casual player or a hardcore gamer, GameHub
        has something for everyone.
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-4" variants={itemVariants}>
        Our Mission
      </motion.h2>
      <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
        To connect gamers worldwide and provide a comprehensive database of games. We strive to
        make gaming information accessible, engaging, and up-to-date.
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-4" variants={itemVariants}>
        Contact Us
      </motion.h2>
      <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
        Email: hahsan042@gmail.com <br />
        Phone: 01709082144
      </motion.p>
    </motion.div>
  );
};

export default About;
