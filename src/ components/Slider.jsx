import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const slides = [
  {
    img: "https://i.ibb.co/5WXJfw93/free.jpg",
    title: "PUBG",
    subtitle: "Join the battle royale adventure now!",
    buttonText: "Play Now",
    buttonLink: "/allgames",
  },
  {
    img: "https://i.ibb.co/YTYgTDgc/image.jpg",
    title: "Genshin Impact",
    subtitle: "Explore the magical world of Teyvat",
    buttonText: "Discover",
    buttonLink: "/allgames",
  },
  {
    img: "https://i.ibb.co/5hwHzKrz/coc.webp",
    title: "Minecraft",
    subtitle: "Build your own universe block by block",
    buttonText: "Start Building",
    buttonLink: "/allgames",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const Slider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const prevSlide = () => {
    setCurrent([current === 0 ? slides.length - 1 : current - 1, -1]);
  };

  const nextSlide = () => {
    setCurrent([current === slides.length - 1 ? 0 : current + 1, 1]);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-lg">
            <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">
              {slides[current].title}
            </h2>
            <p className="mb-4 text-lg drop-shadow-md">{slides[current].subtitle}</p>
            <a
              href={slides[current].buttonLink}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              {slides[current].buttonText}
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between">
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition"
        >
        <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition"
        >
        <MdOutlineKeyboardDoubleArrowRight />

        </button>
      </div>
    </div>
  );
};

export default Slider;
