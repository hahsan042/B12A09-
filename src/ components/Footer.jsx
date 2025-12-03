import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Optional neon glow in background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & About */}
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-2xl">
            Game <span className="text-blue-400">Hub</span>
          </NavLink>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Dive into the ultimate gaming universe. Track scores, join communities, and discover the latest games.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allgames" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Games
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>

{/* Socials */}
<div className="flex-1">
  <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
  <div className="flex gap-4">
    <a href="https://www.facebook.com/hahsan042" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
      <FaFacebookF size={20} />
    </a>
    <a href="https://github.com/hahsan042" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors">
      <FaGithub size={20} />
    </a>
    <a href="https://linkedin.com/in/md-ahsan-habib-51a41b392" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
      <FaLinkedinIn size={20} />
    </a>
  </div>
</div>


        {/* Newsletter */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-3">Get the latest game updates directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-md font-semibold text-black transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 text-center py-4 text-gray-500 text-sm">
        © 2025 GameHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
