import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../config/firebaseConfig'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Set loading to false after checking auth state
    });

    return () => unsubscribe();
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext