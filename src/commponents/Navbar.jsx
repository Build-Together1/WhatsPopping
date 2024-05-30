import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Topnav = () => {
  const menuData = [
    { path: "/", name: "Home" },
    { path: "/community", name: "Community" },
    { path: "/about-us", name: "About Us" },
    { path: "/contact", name: "Contact" },
    { path: "/event", name: "Event" },
  ];

  const location = useLocation();

  // Check if the current path is "/signup"
  const isSignupPage = location.pathname === "/signup";

  if (isSignupPage) {
    return null; // Return null to hide the navbar on the signup page
  }

  return (
    <Navbar expand="lg" className="navbarr">
      <Container className="navbar">
        <Navbar.Brand href="#home" className="brand">
          WhatsPopping
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-center">
            <Nav className="me-auto">
              {menuData.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={item.path}
                  key={item.path}
                >
                  {item.name}
                </NavLink>
              ))}
            </Nav>
          </div>
          <Nav className="ms-auto nav-btns">
            <NavLink className="btn btn-success" id="btn1" to="/signup">
              Sign Up
            </NavLink>
            <button className="btn btn-success" id="btn2">
              Log In
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
