import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: localStorage.getItem("user_id") || null,
    token: localStorage.getItem("token") || null, 
  });

  const loginUser = (userId, token) => {
    localStorage.setItem("user_id", userId);
    localStorage.setItem("token", token); 
    setUser({ id: userId, token: token }); 
  };

  const logoutUser = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    setUser({ id: null, token: null });
  };

  useEffect(() => {
    setUser({
      id: localStorage.getItem("user_id"),
      token: localStorage.getItem("token"),
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
