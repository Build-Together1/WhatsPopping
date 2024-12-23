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
import ForgotPassword from "./auth/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import EventCreation from "./EventCreation/EventCreation";
import Pricing from "./Pages/Pricing";
import DashboardWrapper from './dashboard/DashboardWrapper';
import Header from './dashboard/component/Header';
import Sidebar from './dashboard/component/AdminSideBar';
import AdminDashboard from "./dashboard/AdminDashboard";
import EventManagement from "./dashboard/EventManagement";
import AttendeeManagement from "./dashboard/AttendeeManagement";
import Settings from "./dashboard/Settings";
import AuthWrapper from "./auth/AuthWrapper";
import { UserProvider } from "./context/UserContext";

import "./App.css";


function App() {
  return (
    <UserProvider>
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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event-creation" element={<EventCreation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard-wrapper" element={<DashboardWrapper />} />
        <Route path="/admin-dashboard" element={<DashboardWrapper><AdminDashboard /></DashboardWrapper>} />
        <Route path="/event-management" element={<DashboardWrapper><EventManagement /></DashboardWrapper>} />
        <Route path="/attendee-management" element={<DashboardWrapper><AttendeeManagement /></DashboardWrapper>} />
        <Route path="/settings" element={<DashboardWrapper><Settings /></DashboardWrapper>} />
        <Route path="/auth" element={<AuthWrapper />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
