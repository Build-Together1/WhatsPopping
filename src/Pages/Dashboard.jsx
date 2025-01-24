import React, { useState, useEffect, useContext } from "react";
import "../styles/Dashboard.css";
import {
  getUserDetails,
  deleteUser,
  // getAllEvents,
} from "../services/apiRequest";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TrendingEvents from "../Event/TrendingEvent";
import Footer from "./Footer";
import axios from "axios";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user.id) {
        console.error("User is not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await getUserDetails(user.id);
        if (response && response.status === 200) {
          setUserDetails(response.data);
        } else {
          console.error("Failed to fetch user details:", response?.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    //   try {
    //     const eventsData = await getAllEvents();
    //     setEvents(eventsData);
    //   } catch (error) {
    //     console.error("Error fetching events:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const fetchUserEvents = async () => {
      try {
        const response = await axios.get(
          `https://whats-popping-server.onrender.com/user/events/${user.id}`,
          console.log("User ID:", user.id),
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          setUserEvents(response.data);
        } else {
          console.error("Failed to fetch user events:", response?.data);
        }
      } catch (error) {
        console.error("Error fetching user events:", error);
      }
    };

    const fetchData = async () => {
      setLoading(true); 
      await Promise.all([fetchUserDetails(), fetchUserEvents()]);
      setLoading(false); 
    };
  
    fetchData();
  }, [user.id]);

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);
      const response = await deleteUser(user.id);
      if (response.status === 200) {
        toast.success("Account deleted successfully.");
        navigate("/");
      } else {
        alert("Failed to delete your account. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEventClick = (eventId) => {
    localStorage.setItem("eventId", eventId);
    // navigate(`/event/${eventId}`);
    // navigate(`/event-details/${eventId}`);
    console.log("Event ID:", eventId);
  };
  

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!userDetails) {
    return <div>Error loading user details.</div>;
  }

  return (
    <div className="responsive-dashboard">
      <div
        className="cover-photo"
        style={{
          backgroundImage: `url(${userDetails.profile_header_path || ""})`,
        }}
      >
        <div className="profile-info">
          <img
            src={userDetails.profile_pic_path || ""}
            alt="Profile"
            className="profile-pic"
          />
          <div className="user-info">
            <div>
              <h2>{userDetails.name}</h2>
              <p>@{userDetails.username}</p>
              <div className="user-info-actions">
                <Link className="pri-btnn" to="/event-creation">
                  Create Event
                </Link>
                <button className="del-btn" onClick={handleDeleteAccount}>
                  Delete Account
                </button>
              </div>
            </div>
            <div>
              <Link className="pri-btn" to="/edit-profile">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="user-events-section">
        <h2>Your Created Events</h2>
        <div className="user-events">
          {userEvents.length > 0 ? (
            userEvents.map((event, index) => (
              <div key={index} className="event">
                <img src={event.event_image} alt="Event" />
                <div className="event-details">
                  <h3
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEventClick(event.id)}
                  >
                    {event.event_name}
                  </h3>
                  <p>{event.event_description}</p>
                  <p>{event.event_location}</p>
                  <p>{event.event_date}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No events created yet.</p>
          )}
        </div>
      </div>

      <TrendingEvents />

      <Footer />
    </div>
  );
};

export default Dashboard;
