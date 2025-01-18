
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";


export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, []);

  const authContextValue = {
    isAuthenticated,
    setIsAuthenticated: (value, callback) => {
      setIsAuthenticated(value, () => {
        if (callback) {
          callback();
        }
      });
    },
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
