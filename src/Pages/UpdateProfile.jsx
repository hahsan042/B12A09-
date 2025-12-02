import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        navigate("/"); 
      })
      .catch(err => toast.error("Update failed: " + err.message));
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Update Your Info</h2>
      <motion.form 
        onSubmit={handleUpdate} 
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
          <label>Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter photo URL"
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Update Information
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default UpdateProfile;
