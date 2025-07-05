import "./App.css";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import HomeContainer from "./pages/Home/HomeContainer";
import EmailVerifyContainer from "./pages/EmailVerify/EmailVerifyContainer";
import ResetPasswordContainer from "./pages/ResetPassword/ResetPasswordContainer";


const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/"
          element={<RootLayout />}
        >
          <Route path="/home" element={<HomeContainer />} />
        </Route>
        <Route path="/email-verify" element={<EmailVerifyContainer/>}/>
        <Route path="/reset-password" element={<ResetPasswordContainer/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
