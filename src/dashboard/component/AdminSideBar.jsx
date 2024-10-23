import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  const menuItems = [
    { name: "Dashboard", route: "/admin-dashboard" },
    { name: "Event Management", route: "/event-management" },
    { name: "Attendee Management", route: "/attendee-management" },
    { name: "Settings", route: "/settings" },
  ];

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Navbar.Brand href="/" className="head">
          WhatsPopping
        </Navbar.Brand>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className={`menu-item ${activePath === item.route ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>log out</p>
      </div>
    </div>
  );
}

export default Sidebar;
