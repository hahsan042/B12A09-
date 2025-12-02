import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';

const GoogleSignIn = () => {
 
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState(false);
  const { GoogleLogIn, user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
  console.log(user);
  

  // const handleLogIn2 = () => {
  //   setError("");
  //   setSucess(false);

  //   GoogleLogIn()
  //     .then((result) => {
        
  //       console.log(result.user);
  //       setUser(result.user)
  //       setSucess(true);
  //       toast.success("Login successful! 🎉");
  //     })
  //     .catch((erro) => {
  //       setError(erro.message);
  //       toast.error("Login failed: " + erro.message);
  //     });
  // };


  const handleLogIn2 = () => {
  setError("");
  setSucess(false);

  GoogleLogIn()
    .then(async (result) => {
      const user = result.user;

      try {
        // Optional: Update profile after Google login
        await updateProfile(user, {
          displayName: user.displayName || "New User",
          photoURL: user.photoURL || "https://i.pinimg.com/474x/51/51/cd/5151cd36e805777f86ec63d580c4c173.jpg",
        });

        setUser(user);   // Update context
        setSucess(true);
        
      } catch (err) {
        toast.error("Profile update failed: " + err.message);
      }

 navigate('/');
    setSucess(true)
    setUser(result.user)
     toast.success("Login successful! 🎉");

    })
    .catch((erro) => {
      setError(erro.message);
      toast.error("Login failed: " + erro.message);
    });
};

  return (
    <>
      <button
        onClick={handleLogIn2}
        type="button"
        className="flex items-center justify-center gap-3 bg-white/90 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-white/100 transition-colors cursor-pointer"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleSignIn;
