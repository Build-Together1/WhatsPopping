import React, { useState, useEffect, useContext } from "react";
import "../styles/Dashboard.css";
import { getUserDetails, deleteUser } from "../services/apiRequest";
import { getEvents } from "../data/event";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("paid");
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
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
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
              <h2>{userDetails.username}</h2>
              <p>{userDetails.email_address}</p>
            </div>
            <div>
              <Link className="pri-btn" to="/edit-profile">
                Edit Profile
              </Link>
            </div>
            <div>
              <Link className="pri-btn" to="/event-creation">
                Create Event
              </Link>
            </div>
            <div>
              <button className="sec-btn" onClick={handleDeleteAccount}>
                Delete Account
              </button>
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
