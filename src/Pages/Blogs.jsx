import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blogs = () => {
  // Example 5 blog data
  const blogData = [
    {
      id: 1,
      title: "Top 10 Action Games of 2025",
      author: "Ahsan Habib",
      date: "December 1, 2025",
      image: "https://i.ibb.co/3Wn9f4v/action-games.jpg",
    },
    {
      id: 2,
      title: "How to Improve Your Gaming Skills",
      author: "Ahsan Habib",
      date: "November 20, 2025",
      image: "https://i.ibb.co/4fH1S7b/gaming-tips.jpg",
    },
    {
      id: 3,
      title: "Upcoming RPG Games You Can't Miss",
      author: "Ahsan Habib",
      date: "October 15, 2025",
      image: "https://i.ibb.co/0j5QfPq/rpg-games.jpg",
    },
    {
      id: 4,
      title: "Gaming Hardware Trends in 2025",
      author: "Ahsan Habib",
      date: "September 10, 2025",
      image: "https://i.ibb.co/2nZc0Vt/gaming-hardware.jpg",
    },
    {
      id: 5,
      title: "Top Multiplayer Games to Play with Friends",
      author: "Ahsan Habib",
      date: "August 5, 2025",
      image: "https://i.ibb.co/3hX3q1m/multiplayer-games.jpg",
    },
  ];

  return (
    <div className="bg-black px-5 py-10 min-h-screen">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        All Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogData.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">{blog.title}</h3>
              <p className="text-gray-400 text-sm mb-2">By {blog.author}</p>
              <p className="text-gray-500 text-sm mb-3">{blog.date}</p>
              <Link to={`/blog/${blog.id}`}>
                <button className="bg-orange-500 px-4 py-2 rounded-lg text-white hover:bg-orange-600 transition">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
