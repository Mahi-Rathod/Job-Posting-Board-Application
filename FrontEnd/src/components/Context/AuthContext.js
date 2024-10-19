import React, { createContext, useState } from 'react';

// Create an AuthContext for global state management
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // This can hold user information, such as email

  // Simulate login and signup
  const login = (email) => {
    setIsAuthenticated(true);
    setUser({ email });
  };

  const signup = (email) => {
    setIsAuthenticated(true);
    setUser({ email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
