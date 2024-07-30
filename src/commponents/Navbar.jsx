import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Topnav = () => {
  const menuData = [
    { path: "/about-us", name: "About Us" },
    { path: "/community", name: "Solutions" },
    { path: "/event", name: "Events" },
    { path: "/blog", name: "Blog" },
    { path: "/faq", name: "FAQ" },
    { path: "/contact", name: "Contact" },

  ];

  const location = useLocation();

  const isAuthPage = ["/signup", "/login", "/forgot-password"].includes(location.pathname);

  if (isAuthPage) {
    return null;
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
            <NavLink className="btn btn-primary" id="btn2" to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
