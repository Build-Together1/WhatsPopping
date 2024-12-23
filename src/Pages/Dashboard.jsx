import React, { useState, useEffect, useContext } from "react";
import "../styles/Dashboard.css";
import { getUserDetails } from "../services/apiRequest";
import { getEvents } from "../data/event";
import { UserContext } from "../context/UserContext"; 

const Dashboard = () => {
  const { user } = useContext(UserContext); 
  const [userDetails, setUserDetails] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("paid");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user.userId || !user.token) {
        console.error("User is not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await getUserDetails(user.userId);
        if (response && response.status === 200) {
          setUserDetails(response.data);
        } else {
          console.error("Failed to fetch user details:", response?.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [user.userId, user.token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDetails) {
    return <div>Error loading user details.</div>;
  }

  return (
    <div className="responsive-dashboard">
      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${userDetails.coverPhoto || ""})` }}
      >
        <div className="profile-info">
          <img
            src={userDetails.profilePic || ""}
            alt="Profile"
            className="profile-pic"
          />
          <div className="user-info">
            <div>
              <h2>{userDetails.name}</h2>
              <p>{userDetails.email_address}</p>
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
