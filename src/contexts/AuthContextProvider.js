import React, { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../configs/fbConfig';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const onsub = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });

    return () => {
      onsub();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signUp, logIn, logInWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
