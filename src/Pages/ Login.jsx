import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import GoogleSignIn from '../ components/GoogleSignIn';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Login = () => {
  useEffect(() => {
    document.title = "Login | GameHub";
  }, []);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const { logInUser, user, setUser, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError('');
    setSuccess(false);

    logInUser(email, password)
      .then(res => {
        if (!res.user.emailVerified) {
          toast.error("You need to verify your email before login!");
          return;
        }
        setUser(res.user);
        toast.success("Login successful! 🎉");
        setSuccess(true);
        navigate('/');
      })
      .catch(err => {
        setError(err.message);
        toast.error("Login failed: " + err.message);
      });
  };



  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Animated Card */}
      <motion.div
     initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
        
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white"
      >
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Welcome Back
          </h1>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Sign in to continue your adventure. Manage your profile, track achievements, and join the community.
          </p>
        </div>

        {/* Login Form Card */}
        <motion.form
          onSubmit={handleLogIn}
               initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 space-y-5"
        >
          <h2 className="text-2xl font-semibold mb-2 text-center text-white">
            Sign In
          </h2>

          <div>
            <label className="block text-sm mb-1 text-white/80">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full border border-white/30 rounded-md px-3 py-2 text-white placeholder-white/50 bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1 text-white/80">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="w-full border border-white/30 rounded-md px-3 py-2 text-white placeholder-white/50 bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[38px] text-white/70 cursor-pointer select-none"
            >
            
                {showPass ?  <IoEye />: <IoEyeOff /> }
            </span>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Account logged in successfully!</p>}

          <Link to={"/PasswordForgot"}
            type="button"
            className="w-full text-left text-sm text-cyan-400 hover:text-cyan-300 underline"
          
          >
            Forget password?
          </Link>

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-white/20"></div>
            <span className="text-sm text-white/50">or</span>
            <div className="h-px w-16 bg-white/20"></div>
          </div>

          <GoogleSignIn />

          <p className="text-center text-sm text-white/70 mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="text-purple-400 hover:text-purple-300 underline">
              Sign up
            </Link>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
