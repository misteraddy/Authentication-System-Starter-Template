import { createContext, useState } from "react";
import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backendURL = BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.get(`${backendURL}/profile`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setUserData(response.data);
        setIsLoggedIn(true);
      } else {
        alert("Unable to get user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const contextValue = {
    backendURL,
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    getUserData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
