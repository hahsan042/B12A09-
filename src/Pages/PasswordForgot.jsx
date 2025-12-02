import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const PasswordForgot = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  // Login থেকে আসা email auto fill হবে
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  // Reset password handler
  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Redirecting to Gmail...");
      setTimeout(() => {
        window.location.href = "https://mail.google.com/";
      }, 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl text-white"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          Reset Password
        </h2>
        <p className="text-center text-white/70 mb-6">
          Enter your registered email to reset your password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-white/80">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-white/30 bg-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 rounded-md text-black font-semibold transition-colors"
          >
            Send Reset Email
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordForgot;
