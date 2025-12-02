// import React, { useContext, useState, useRef, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// import { toast } from "react-toastify";
// import "../Navbar.css";

// const Navbar = () => {
//   const { user, SignOut } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLogout = () => {
//     SignOut()
//       .then(() => {
//         toast.success("Logged out successfully 👋");
//         setDropdownOpen(false);
//         navigate("/login");
//       })
//       .catch((err) => toast.error(err.message));
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/allgames">All Games</NavLink>
//       </li>
//       <li>
//         <NavLink to="/about">About</NavLink>
//       </li>
//       {!user && (
//         <>
//           <li>
//             <NavLink to="/login">Login</NavLink>
//           </li>
//           <li>
//             <NavLink to="/register">Register</NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm relative">
//       <div className="navbar-start">
//         {/* Mobile Dropdown */}
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>

//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>

//         {/* Logo */}
//         <NavLink to="/" className="btn btn-ghost text-2xl">
//           Game <span className="text-blue-400">Hub</span>
//         </NavLink>
//       </div>

//       {/* Desktop Links */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       {/* Right Side (Profile Dropdown) */}
//       <div className="navbar-end relative" ref={dropdownRef}>
//         {user && (
//           <div className="flex items-center gap-2 relative">
//             <img
//               src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer hover:scale-105 transition-transform"
//               title={user.displayName || "My Profile"}
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-12 w-40 bg-gray-800 text-white rounded-md shadow-lg py-2 z-50">
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-700"
//                   onClick={() => {
//                     setDropdownOpen(false);
//                     navigate("/UpdateProfile");
//                   }}
//                 >
//                   Update Info
//                 </button>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-700"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import "../Navbar.css";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // profile dropdown
  const [mobileOpen, setMobileOpen] = useState(false);     // mobile dropdown
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);

  const handleLogout = () => {
    SignOut()
      .then(() => {
        toast.success("Logged out successfully 👋");
        setDropdownOpen(false);
        setMobileOpen(false);
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allgames" onClick={() => setMobileOpen(false)}>All Games</NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login" onClick={() => setMobileOpen(false)}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" onClick={() => setMobileOpen(false)}>Register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm relative">
      {/* Mobile Menu Button */}
      <div className="navbar-start lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="btn btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <ul
            ref={mobileRef}
            className="menu menu-compact mt-1 p-4 shadow bg-base-100 rounded-box w-52 absolute top-14 left-2 z-50"
          >
            {links}
            {user && (
              <>
                <li>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      navigate("/UpdateProfile");
                    }}
                  >
                    Update Info
                  </button>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        )}
      </div>

      {/* Logo */}
      <div className="navbar-start lg:flex-none">
        <NavLink to="/" className="btn btn-ghost text-2xl">
          Game <span className="text-blue-400">Hub</span>
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Profile Dropdown */}
      <div className="navbar-end relative" ref={dropdownRef}>
        {user && (
          <div className="flex items-center gap-2 relative">
            <img
              src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer hover:scale-105 transition-transform"
              title={user.displayName || "My Profile"}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-12 w-40 bg-gray-800 text-white rounded-md shadow-lg py-2 z-50">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/UpdateProfile");
                  }}
                >
                  Update Info
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


