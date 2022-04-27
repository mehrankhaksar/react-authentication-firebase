import React, { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../configs/fbConfig';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    <AuthContext.Provider value={{ currentUser, signUp, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
