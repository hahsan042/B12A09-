import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { IoEyeOff } from "react-icons/io5";

import { IoEye } from "react-icons/io5";
import { toast } from "react-toastify";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import GoogleSignIn from "../ components/GoogleSignIn";

const Register = () => {
  useEffect(() => {
    document.title = "Register | GameHub";
  }, []);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { createuser, user, setUser } = useContext(AuthContext);
  const navigate=useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters with one uppercase and one lowercase letter."
      );
      return;
    }

    setError("");
    setSuccess(false);

    createuser(email, password)
      .then((res) => {
        // Update profile
        updateProfile(res.user, { displayName: name, photoURL: photo }).catch(
          (err) => console.log(err)
        );

        // Send email verification
        sendEmailVerification(res.user).then(() =>
          toast.success("Email verification sent")
        );

        setUser(res.user);
        setSuccess(true);
        e.target.reset();

        // Redirect after 2 seconds
setTimeout(() => {
  navigate("/login");
}, 2000);
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Signup failed: " + err.message);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Create Your Account
          </h1>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Join our gaming community, track achievements, and unlock exclusive
            features.
          </p>
        </div>

        {/* Sign-Up Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8"
        >
          <form onSubmit={handleSignup} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full border border-white/30 rounded-md px-3 py-2 text-white placeholder-white/50 bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your photo URL"
                className="w-full border border-white/30 rounded-md px-3 py-2 text-white placeholder-white/50 bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full border border-white/30 rounded-md px-3 py-2 text-white placeholder-white/50 bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-white/80">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full border border-white/30 rounded-md px-3 py-2 text-white placeholder-white/50 bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-white/70 cursor-pointer select-none"
              >
                {showPassword ?  <IoEye />: <IoEyeOff /> }
              </span>
            </div>

            {/* Error/Success Message */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500"
              >
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500"
              >
                Account created successfully!
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full py-2 font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/20"></div>
              <span className="text-sm text-white/50">or</span>
              <div className="h-px w-16 bg-white/20"></div>
            </div>

            {/* Google Signin */}
            <GoogleSignIn />

            <div className="text-center mt-3">
              <p className="text-sm text-white/70">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;
