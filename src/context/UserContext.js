import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("user_id") || null,
  });

  const loginUser = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", userId);
    setUser({ token, userId });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setUser({ token: null, userId: null });
  };

  useEffect(() => {
    setUser({
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("user_id"),
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
