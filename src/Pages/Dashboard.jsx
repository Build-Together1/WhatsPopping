// src/components/Dashboard.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css"; // Create this CSS file to style your dashboard
import { getEvents } from "../data/event"; // Import the events data

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [userType, setUserType] = useState(""); // "individual" or "corporate"
  const [currentCategory, setCurrentCategory] = useState("paid");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const response = await axios.get("https://whats-popping-server.onrender.com/user-details", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserDetails(response.data);
        setUserType(response.data.accountType); // Assuming accountType is "individual" or "corporate"
      } catch (err) {
        console.error("Failed to fetch user details. Please try again.");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="dashboard">
      {userDetails ? (
        <>
          <h1>Welcome, {userDetails.name}</h1>

          <div className="user-details">
            <h2>Your Details</h2>
            <p>Email: {userDetails.email}</p>
            <p>Account Type: {userType}</p>
          </div>
        </>
      ) : (
        <div className="not-logged-in">
          <h1>You are not signed in</h1>
            <p>Sign in to access your dashboard</p>
          <button onClick={() => window.location.href = "/login"}>Sign In</button>

        </div>
      )}

      <div className="events-section">
        <h2>Events</h2>
        <div className="event-nav">
          <span
            className={currentCategory === "paid" ? "active" : ""}
            onClick={() => setCurrentCategory("paid")}
          >
            Paid Events
          </span>
          <span
            className={currentCategory === "free" ? "active" : ""}
            onClick={() => setCurrentCategory("free")}
          >
            Free Events
          </span>
          <span
            className={currentCategory === "foryou" ? "active" : ""}
            onClick={() => setCurrentCategory("foryou")}
          >
            For You
          </span>
        </div>
        <div className="events">
          {getEvents(currentCategory).map((event, index) => (
            <div key={index} className="event">
              <img src={event.image} alt="Event" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>{event.date}</p>
                <div className="event-price">
                  {currentCategory === "paid" && <p>$50</p>}
                  <p>
                    <strong>Get tickets</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {userType === "corporate" && (
        <div className="create-event-section">
          <h2>Create an Event</h2>
          {/* Add your event creation form/component here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
