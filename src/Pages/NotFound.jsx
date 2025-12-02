import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
     useEffect(() => {
      document.title = "NotFound | GameHub";
    }, []);
    
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-center">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
