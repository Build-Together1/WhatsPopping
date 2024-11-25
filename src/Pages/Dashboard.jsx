import React, { useState } from "react";
import "../styles/Dashboard.css";
import Profilepic from "../assets/images/icons/icons8-avatar-96.png";
import CoverPhoto from "../assets/images/cover-photo.png";
import { getEvents } from "../data/event";
// import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const userDetails = {
    name: "Muhammed Badmus",
    email: "muhammed@example.com",
    profilePic: Profilepic,
    coverPhoto: CoverPhoto,
  };

  const [currentCategory, setCurrentCategory] = useState("paid");

  return (
    <div className="responsive-dashboard">
      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${userDetails.coverPhoto})` }}
      >
        <div className="profile-info">
          <img
            src={userDetails.profilePic}
            alt="Profile"
            className="profile-pic"
          />
          <div className="user-info">
            <div>
              <h2>{userDetails.name}</h2>
              <p>{userDetails.email}</p>
            </div>
            <div>
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Dashboard;
