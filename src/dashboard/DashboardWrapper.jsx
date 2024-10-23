import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header";
import Sidebar from "./component/AdminSideBar";
import "./styles/DashboardWrapper.css";

const DashboardWrapper = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar className="sidebar" />

      <div className="main-content">
        <Header className="header" />

        <div className="content-area">
          {children}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DashboardWrapper;
