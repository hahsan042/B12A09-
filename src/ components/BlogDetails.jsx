import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Blog Details | GameHub";
  }, []);

  // Example Blog Data (replace with API/backend data)
  const blogData = {
 1: {
    title: "Top 10 Action Games of 2025",
    author: "Ahsan Habib",
    date: "December 1, 2025",
    image: "https://i.ibb.co/3Wn9f4v/action-games.jpg",
    content: [
      "Action games are getting bigger and better in 2025. From immersive gameplay to stunning graphics, here's our top 10 picks.",
      "Whether you are a casual gamer or hardcore, these games have something for everyone. Enjoy intense missions, epic battles, and amazing storylines.",
      "Don't miss out on the online multiplayer modes and community events for each game."
    ]
  },
  2: {
    title: "How to Improve Your Gaming Skills",
    author: "Ahsan Habib",
    date: "November 20, 2025",
    image: "https://i.ibb.co/4fH1S7b/gaming-tips.jpg",
    content: [
      "Improving gaming skills requires practice, focus, and strategy. Here are some expert tips to level up your gameplay.",
      "Learn from top gamers, watch tutorials, and join online communities to gain new insights.",
      "Remember to take breaks, avoid fatigue, and enjoy the process of gaming."
    ]
  },
  3: {
    title: "Upcoming RPG Games You Can't Miss",
    author: "Ahsan Habib",
    date: "October 15, 2025",
    image: "https://i.ibb.co/0j5QfPq/rpg-games.jpg",
    content: [
      "RPG games in 2025 are pushing the boundaries of storytelling and graphics. Check out these upcoming titles that promise epic adventures.",
      "From deep character customization to massive open worlds, these games are perfect for immersive role-playing.",
      "Stay tuned for beta releases and early access opportunities to try them first."
    ]
  },
  4: {
    title: "Gaming Hardware Trends in 2025",
    author: "Ahsan Habib",
    date: "September 10, 2025",
    image: "https://i.ibb.co/2nZc0Vt/gaming-hardware.jpg",
    content: [
      "The gaming hardware industry is evolving rapidly. From GPUs to VR headsets, 2025 brings exciting innovations.",
      "Learn which setups give you the best performance and value for your money.",
      "Discover upcoming tech that will redefine your gaming experience."
    ]
  },
  5: {
    title: "Top Multiplayer Games to Play with Friends",
    author: "Ahsan Habib",
    date: "August 5, 2025",
    image: "https://i.ibb.co/3hX3q1m/multiplayer-games.jpg",
    content: [
      "Multiplayer gaming continues to dominate in 2025. Here are the top games to enjoy with friends online.",
      "From competitive shooters to cooperative adventures, these games offer hours of fun.",
      "Join tournaments, engage with the community, and build your squad for epic battles."
    ]
  }
  };

  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white px-5 py-10">
      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto mb-8"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          {blog.title}
        </h1>

        <div className="flex justify-center items-center mb-6 text-gray-400 text-sm">
          <span>By {blog.author}</span>
          <span className="mx-2">|</span>
          <span>{blog.date}</span>
        </div>

        {blog.content.map((paragraph, index) => (
          <p key={index} className="text-gray-300 text-lg leading-relaxed mb-5">
            {paragraph}
          </p>
        ))}

        <div className="mt-8 text-center">
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition"
            >
              Back to Blog List
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
