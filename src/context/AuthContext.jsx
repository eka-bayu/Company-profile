import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
