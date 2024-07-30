import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnav from "./commponents/Navbar";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import AboutUs from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog";
import Event from "./Pages/Event";
import Error from "./Pages/Error";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
