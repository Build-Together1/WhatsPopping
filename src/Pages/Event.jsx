import React, { useState } from "react";
import "../styles/Event.css";
import Footer from "./Footer";
import Exp1 from "../assets/images/Exp1.png";
import Exp2 from "../assets/images/Exp2.png";
import Exp3 from "../assets/images/Exp3.png";
import Event1 from "../assets/images/Rectangle 57.png";
import Event2 from "../assets/images/Rectangle 58.png";
import Event3 from "../assets/images/Rectangle 59.png";
import Event4 from "../assets/images/Rectangle 60.png";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("paid");

  const paidEvents = [
    {
      image: Event1,
      title: "Masquerade Carnival",
      location: "Viva club, Abia",
      date: "12th July, 2023 | 01:00pm",
    },
    {
      image: Event2,
      title: "Fashion Runway",
      location: "Eko Hotel, Lagos",
      date: "20th August, 2023 | 12:00pm",
    },
    {
      image: Event3,
      title: "Food Festival",
      location: "TBS, Lagos",
      date: "10th September, 2023 | 10:00am",
    },
    {
      image: Event4,
      title: "Music Concert",
      location: "O2 Arena, London",
      date: "15th October, 2023 | 06:00pm",
    },
    {
      image: Event1,
      title: "Masquerade Carnival",
      location: "Viva club, Abia",
      date: "12th July, 2023 | 01:00pm",
    },
    {
      image: Event2,
      title: "Fashion Runway",
      location: "Eko Hotel, Lagos",
      date: "20th August, 2023 | 12:00pm",
    },
    {
      image: Event3,
      title: "Food Festival",
      location: "TBS, Lagos",
      date: "10th September, 2023 | 10:00am",
    },
    {
      image: Event4,
      title: "Music Concert",
      location: "O2 Arena, London",
      date: "15th October, 2023 | 06:00pm",
    },
  ];

  const freeEvents = [
    {
      image: Event1,
      title: "Community Gathering",
      location: "Community Center, Abia",
      date: "5th June, 2023 | 10:00am",
    },
    {
      image: Event2,
      title: "Art Exhibition",
      location: "Art Gallery, Lagos",
      date: "15th June, 2023 | 11:00am",
    },
    {
      image: Event1,
      title: "Community Gathering",
      location: "Community Center, Abia",
      date: "5th June, 2023 | 10:00am",
    },
    {
      image: Event2,
      title: "Art Exhibition",
      location: "Art Gallery, Lagos",
      date: "15th June, 2023 | 11:00am",
    },
  ];

  const forYouEvents = [
    {
      image: Event3,
      title: "Cooking Class",
      location: "Cooking Studio, Lagos",
      date: "25th July, 2023 | 02:00pm",
    },
    {
      image: Event4,
      title: "Yoga Workshop",
      location: "Wellness Center, London",
      date: "30th July, 2023 | 09:00am",
    },
    {
      image: Event3,
      title: "Cooking Class",
      location: "Cooking Studio, Lagos",
      date: "25th July, 2023 | 02:00pm",
    },
    {
      image: Event4,
      title: "Yoga Workshop",
      location: "Wellness Center, London",
      date: "30th July, 2023 | 09:00am",
    },
  ];

  const getEvents = () => {
    if (currentCategory === "paid") {
      return paidEvents;
    } else if (currentCategory === "free") {
      return freeEvents;
    } else {
      return forYouEvents;
    }
  };

  return (
    <div>
      <div className="event-banner">
        <div className="banner-text">
          <h1>Explore Event</h1>
          <p>
            Embark on a journey of discovery with us and immerse yourself in the
            world of unforgettable events!
          </p>
          <div className="banner-category">
            <label htmlFor="event">
              Find your next event
              <input
                type="text"
                id="event"
                name="event"
                placeholder="Type of Event"
              />
            </label>
            <label htmlFor="category">
              Categories <br />
              <select id="category" name="category">
                <option value="select">Select</option>
                <option value="music">Music</option>
                <option value="sports">Sports</option>
                <option value="art">Art</option>
                <option value="food">Food</option>
              </select>
            </label>
            <button>Search</button>
          </div>
        </div>
        <div className="banner-images">
          <img src={Exp1} alt="Exp1" />
          <img src={Exp2} alt="Exp2" />
          <img src={Exp3} alt="Exp3" />
        </div>
      </div>

      <div className="event-list">
        <h1>Events</h1>
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
          {getEvents().map((event, index) => (
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

      <Footer />
    </div>
  );
};

export default Product;
