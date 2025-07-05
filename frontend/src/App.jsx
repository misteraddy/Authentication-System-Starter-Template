import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";

import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import HomeContainer from "./pages/Home/HomeContainer";
import EmailVerifyContainer from "./pages/EmailVerify/EmailVerifyContainer";
import ResetPasswordContainer from "./pages/ResetPassword/ResetPasswordContainer";

import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedLayout";
import Loader from "./pages/Loader/Loader";

const App = () => {
  const { isLoggedIn, getUserData, loading } = useContext(AppContext);

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) return <Loader />;

  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={!isLoggedIn ? <LandingPage /> : <Navigate to="/home" replace />}
        />
        <Route path="/reset-password" element={<ResetPasswordContainer />} />

        {/* Protected Route Group under RootLayout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<HomeContainer />} />
          <Route path="email-verify" element={<EmailVerifyContainer />} />
          {/* Add more child routes here */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
