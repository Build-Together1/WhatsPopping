import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvent } from "../services/apiRequest";

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEventDetails = async () => {
      setLoading(true);
      setError("");

      if (!eventId) {
        setError("Event ID is missing. Redirecting to the dashboard...");
        console.error("Event ID is missing. Redirecting to the dashboard...");
        setTimeout(() => navigate("/dashboard"), 3000);
        setLoading(false);
        return;
      }

      try {
        const data = await getEvent(eventId);
        setEventDetails(data);
      } catch (err) {
        setError(err.message || "Failed to fetch event details");
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId, navigate]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    eventDetails && (
      <div className="event-details-page">
        <h1>{eventDetails.event_name}</h1>
        <p>{eventDetails.event_description}</p>
        <img src={eventDetails.event_image} alt={eventDetails.event_name} />
        <p>Location: {eventDetails.event_location}</p>
        <p>Date: {eventDetails.event_date}</p>
        <p>Time: {eventDetails.event_time}</p>
      </div>
    )
  );
};


export default EventDetails;
