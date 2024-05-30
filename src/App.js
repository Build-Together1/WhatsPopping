import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topnav from "./commponents/Navbar";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import AboutUs from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Event from "./Pages/Event";
import Error from "./Pages/Error";
import SignUp from "./auth/SignUp";

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
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
