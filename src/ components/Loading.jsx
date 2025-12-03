import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      {/* Spinner */}
      <motion.div
        className="w-20 h-20 border-4 border-t-blue-500 border-b-purple-500 border-gray-700 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      ></motion.div>

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-xl font-semibold tracking-wide text-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading GameHub...
      </motion.p>
    </div>
  );
};

export default Loading;
