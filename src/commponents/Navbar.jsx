import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Navbar.css";
import { toast } from "react-toastify";

const Topnav = () => {
  const { user, logoutUser } = useContext(UserContext); 
  const location = useLocation();
  const navigate = useNavigate();

  const menuData = [
    { path: "/about-us", name: "About Us" },
    { path: "/event", name: "Find Events" },
    { path: "/pricing", name: "Pricing" },
    { path: "/faq", name: "FAQ's" },
    { path: "/overview", name: "Create Events" },
  ];

  const isAuthOrDashboardPage = [
    "/signup",
    "/login",
    "/forgot-password",
    "/dashboard-wrapper",
    "/event-creation",
    "/admin-dashboard",
    "/event-management",
    "/attendee-management",
    "/settings",
    "/auth",
  ].includes(location.pathname);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logout successful!", {
      autoClose: 3000,
    });
    navigate("/auth");
  };

  if (isAuthOrDashboardPage) {
    return null;
  }

  return (
    <Navbar expand="lg" className="navbarr">
      <Container className="navbar">
        <Navbar.Brand href="/" className="brand">
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
            {user && user.token ? (
              <>
                <NavLink className="btn btn-primary" id="btn1" to="/dashboard">
                  Profile
                </NavLink>
                <button
                  className="btn btn-danger"
                  id="btn2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className="btn btn-success" id="btn1" to="/auth">
                  Sign Up
                </NavLink>
                <NavLink className="btn btn-primary" id="btn2" to="/auth">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
