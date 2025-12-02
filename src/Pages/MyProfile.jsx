import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const { user, setUser, SignOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        toast.success("Successfully logged out!");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <img
        src={user?.photoURL}
        className="h-10 w-10 rounded-full cursor-pointer"
        alt=""
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg py-2 z-50">
          <button
            onClick={() => navigate("/update-profile")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Update profile
          </button>
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
