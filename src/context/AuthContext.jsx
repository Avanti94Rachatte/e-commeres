import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Fake signup
  const signup = (email, password, firstName, lastName) => {
    const newUser = { email, firstName, lastName };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Fake login (checks saved user)
  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email) {
      setUser(savedUser);
    } else {
      alert("User not found. Please sign up first.");
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
