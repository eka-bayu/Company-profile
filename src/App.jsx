import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbarnav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {<Route index element={<HomePage />} />}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
