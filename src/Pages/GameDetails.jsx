import React, { useContext, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import useCustomHook from './useCustomHook';
import { AuthContext } from '../Context/AuthContext';
import { motion } from 'framer-motion';

const GameDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { products, loading } = useCustomHook();
  

  // Protect the page
  if (!user) return <Navigate to="/login" replace />;

  useEffect(() => {
    document.title = "GameDetails | GameHub";
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }

  const detail = products.find((p) => Number(p.id) === Number(id));

  if (!detail) {
    return (
      <div className="text-white text-center mt-10">
        Game not found!
      </div>
    );
  }

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 to-black text-white rounded-2xl max-w-5xl mx-auto shadow-2xl overflow-hidden mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Banner Image */}
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <img
          src={detail.coverPhoto}
          alt={detail.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            {detail.title}
          </h1>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-300 leading-relaxed">{detail.description}</p>
          </div>
          <div>
            <span className="inline-block bg-blue-600 px-4 py-2 rounded-lg font-semibold">
              Rating: {detail.ratings || "N/A"}
            </span>
          </div>
        </div>

        <motion.a
          href={detail.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Game
        </motion.a>
      </div>
    </motion.div>
  );
};

export default GameDetails;
