import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useCustomHook from "./useCustomHook";
import ProductsCard from "../ components/ProductsCard";
import Logo from "../assets/react.svg";


const AllGames = () => {
  useEffect(() => {
  document.title = "AllGames | GameHub";
}, []);

  const { products, loading } = useCustomHook();
  

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center backdrop-blur-sm bg-black/30 z-50">
        <img
          src={Logo}
          alt="Loading..."
          className="w-16 h-16 animate-spin mb-4"
          
        />
        <div className="text-blue-600 font-semibold text-lg animate-pulse">
          Loading Applications...
        </div>
      </div>
    );
  }

  return (

    
    <div className="bg-black min-h-screen px-3 py-8">
  <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
    Popular Games
  </h1>

  <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
    gap-y-3
  ">
    {products.map((product) => (


         <motion.div
              key={product.id}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            <ProductsCard key={product.id} product={product} />
            </motion.div>
    
    ))}
  </div>
</div>

  );
};

export default AllGames;
