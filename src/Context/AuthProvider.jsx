import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user , setUser]=useState("")
    const [loading, setLoading] = useState(true);
   const createuser=(email , password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
   }
   const logInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }
   const GoogleLogIn=()=>{
    const provider = new GoogleAuthProvider();

return    signInWithPopup(auth, provider)
   }
   const SignOut=()=>{
    return signOut(auth)
   }
   const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
}

     // ✅ Keep user logged in after reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // cleanup
  }, []);

 

   const authInfo={
    createuser,
    logInUser,
    GoogleLogIn,
    SignOut,
    user,
    setUser,
    resetPassword,
    loading,
   }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;