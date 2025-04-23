import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLevel, setUserLevel] = useState(null); // Beginner, Intermediate, Advanced
  const [learningReason, setLearningReason] = useState(null); // Culture, Travel, Family

  return (
    <UserContext.Provider value={{ userLevel, setUserLevel, learningReason, setLearningReason }}>
      {children}
    </UserContext.Provider>
  );
};