import React, { use, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "../ components/Slider";
import useCustomHook from "./useCustomHook";
import Logo from "../assets/react.svg";
import PopularCard from "../ components/PopularCard";
import { AuthContext } from "../Context/AuthContext";
import Newsletter from "../ components/Newsletter";
import OfferCard from "../ components/OfferCard";
import BlogCard from "../ components/BlogCard;";
import Loading from "../ components/Loading";


const Home = () => {
  useEffect(() => {
  document.title = "Home | GameHub";
}, []);

  const authInfo=use(AuthContext);
  console.log(authInfo);
  
  const { products, loading } = useCustomHook();

  if (loading) {
    return (
     <Loading></Loading>
    );
  }

  const popularGame = products
    .filter((data) => Number(data.ratings) > 4.3)
    .sort((a, b) => Number(b.ratings) - Number(a.ratings));

  return (
    <>
     <Slider />
     <div className="bg-black min-h-screen px-3 py-8">
     

      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
        Popular Games
      </h1>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          gap-y-3          
        "
      >
        {popularGame.map((data) => (
        

         <motion.div
              key={data.id}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            <PopularCard key={data.id} data={data} />
            </motion.div>
        ))}
      </div>
    </div>
    <BlogCard></BlogCard>
 <Newsletter></Newsletter>
 <OfferCard></OfferCard>


    </>
    
  );
};

export default Home;
