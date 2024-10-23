import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import FAQ from "../commponents/Faq";
import Profile from "../assets/images/profile.png";
import Amico from "../assets/images/amico.png";
import Bro from "../assets/images/bro.png";
import Artboard from "../assets/images/icons/artboard.png";
import ListSetting from "../assets/images/icons/list-setting.png";
import EmailMessage from "../assets/images/icons/message-done-01.png";
import Share from "../assets/images/icons/share-08.png";
import RSVP from "../assets/images/icons/presentation-online.png";
import TimeManagement from "../assets/images/icons/time-management.png";
import QRcode from "../assets/images/icons/qr-code-01.png";
import Ticket from "../assets/images/icons/ticket-01.png";
import CustomerServices from "../assets/images/icons/customer-service-01.png";
import Analysis from "../assets/images/icons/analysis-text-link.png";
import Payment from "../assets/images/icons/payment-02.png";
import CustomerSupport from "../assets/images/icons/Vector (3).png";
import Looking from "../assets/images/Frame 1000002753.png";
import Complement from "../assets/images/Group 1.png";
import Footer from "./Footer";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    require("../assets/images/Prop1.png"),
    require("../assets/images/Prop2.png"),
    require("../assets/images/Prop3.png"),
    require("../assets/images/Prop4.png"),
    Amico,
    Bro,
    Profile,
    Artboard,
    ListSetting,
    EmailMessage,
    Share,
    RSVP,
    TimeManagement,
    QRcode,
    Ticket,
    CustomerServices,
    Analysis,
    Payment,
    CustomerSupport,
    Looking,
    Complement,
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setBackgroundImage((prev) => (prev + 1) % 4); 
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="about-us">
        <section
          className="about-banner"
          style={{ backgroundImage: `url(${images[backgroundImage]})` }}
        >
          <h1>Navigate the Event Verse with Whatspopping</h1>
          <p>
            Create live or virtual events, discover and book exciting local
            events, festivals, and experiences near you
          </p>
          <div className="banner-buttons">
            <button className="btn-a">Find your next event</button>
            <button className="btn-b">Create an Account</button>
          </div>
        </section>

        <hr />

        {/* The rest of the component stays the same */}
        <section className="services">
          <h2>Do more with Whatspopping</h2>

          <div className="each">
            <div className="xc">
              <h3>Plan Events</h3>
              <p>
                Create an unforgettable event experience from free to a paid or
                invite-only event that enhances brand perception. At
                Whatspopping, we make it easy for event organizers like you to
                create, promote, and sell tickets to your event, creating a
                memorable experience with the right tools and amazing customer
                support.
              </p>
              <ul>
                <li><img src={ListSetting} alt="" />Attendee Management</li>
                <li><img src={Share} alt="" />Email Messaging</li>
                <li><img src={EmailMessage} alt="" />SMS and WhatsApp Messaging</li>
                <li><img src={RSVP} alt="" />Digital RSVP Forms</li>
                <li><img src={TimeManagement} alt="" />Session and Attendee Management</li>
                <li><img src={QRcode} alt="" />QR Code Creation</li>
              </ul>
            </div>
            <img className="es" src={Amico} alt="" />
            <img className="ex" src={Bro} alt="" />
            <div className="xs">
              <h3>Smooth and Secure Payments</h3>
              <p>
                Create an unforgettable event experience from free to a paid or
                invite-only event that enhances brand perception. At
                Whatspopping, we make it easy for event organizers like you to
                create, promote, and sell tickets to your event, creating a
                memorable experience with the right tools and amazing customer
                support.
              </p>
              <ul>
                <li><img src={Artboard} alt="" />Event Creation & Promotion</li>
                <li><img src={Ticket} alt="" />Ticket Sales Management</li>
                <li><img src={CustomerServices} alt="" />Customized Event Branding</li>
                <li><img src={Analysis} alt="" />Advanced Analytics & Reporting</li>
                <li><img src={Payment} alt="" />Seamless Payment Integration</li>
                <li><img src={CustomerSupport} alt="" />Exceptional Customer Support</li>
              </ul>
            </div>
          </div>
          <br /><br />
          <div className="each">
            <div className="xc">
              <h3>Plan Events</h3>
              <p>
                Create an unforgettable event experience from free to a paid or
                invite-only event that enhances brand perception. At
                Whatspopping, we make it easy for event organizers like you to
                create, promote, and sell tickets to your event, creating a
                memorable experience with the right tools and amazing customer
                support.
              </p>
              <ul>
                <li><img src={ListSetting} alt="" />Attendee Management</li>
                <li><img src={Share} alt="" />Email Messaging</li>
                <li><img src={EmailMessage} alt="" />SMS and WhatsApp Messaging</li>
                <li><img src={RSVP} alt="" />Digital RSVP Forms</li>
                <li><img src={TimeManagement} alt="" />Session and Attendee Management</li>
                <li><img src={QRcode} alt="" />QR Code Creation</li>
              </ul>
            </div>
            <img className="es" src={Amico} alt="" />
            <img className="ex" src={Bro} alt="" />
            <div className="xs">
              <h3>Smooth and Secure Payments</h3>
              <p>
                Create an unforgettable event experience from free to a paid or
                invite-only event that enhances brand perception. At
                Whatspopping, we make it easy for event organizers like you to
                create, promote, and sell tickets to your event, creating a
                memorable experience with the right tools and amazing customer
                support.
              </p>
              <ul>
                <li><img src={Artboard} alt="" />Event Creation & Promotion</li>
                <li><img src={Ticket} alt="" />Ticket Sales Management</li>
                <li><img src={CustomerServices} alt="" />Customized Event Branding</li>
                <li><img src={Analysis} alt="" />Advanced Analytics & Reporting</li>
                <li><img src={Payment} alt="" />Seamless Payment Integration</li>
                <li><img src={CustomerSupport} alt="" />Exceptional Customer Support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="find-event">
          <h1>Do more with Whatspopping</h1>
          <p>Comprehensive Event Solutions Tailored for You</p>
          <div className="find-event-container">
            <div className="event-text">
              <ul>
                <li>Arts</li>
                <li>Culture</li>
                <li>Sports</li>
                <li>Corporate</li>
                <li>Media & Entertainment</li>
              </ul>
            </div>
            <div className="event-img">
              <img className="event-img" src={Looking} alt="" />
            </div>
          </div>
        </section>

        <section className="review">
          <h1>What people say about us</h1>
          <div className="review-cards">
            <div className="each-card">
              <div className="card-header">
                <img src={Profile} alt="" />
                <div className="card-header-text">
                  <h3>Bisi Olaoye</h3>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <p>
                Promoting my event through this platform has been incredibly
                successful. The reach and targeted advertising ensured a large
                and engaged audience, and the user-friendly registration process
                made it easy for attendees to sign up. I highly recommend them
                to any event organizer.
              </p>
            </div>
            <div className="each-card">
              <div className="card-header">
                <img src={Profile} alt="" />
                <div className="card-header-text">
                  <h3>Bisi Olaoye</h3>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <p>
                Promoting my event through this platform has been incredibly
                successful. The reach and targeted advertising ensured a large
                and engaged audience, and the user-friendly registration process
                made it easy for attendees to sign up. I highly recommend them
                to any event organizer.
              </p>
            </div>
            <div className="each-card">
              <div className="card-header">
                <img src={Profile} alt="" />
                <div className="card-header-text">
                  <h3>Bisi Olaoye</h3>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <p>
                Promoting my event through this platform has been incredibly
                successful. The reach and targeted advertising ensured a large
                and engaged audience, and the user-friendly registration process
                made it easy for attendees to sign up. I highly recommend them
                to any event organizer.
              </p>
            </div>
          </div>
        </section>

        <section className="complement">
          <div className="comlement-text">
            <h1>Sign up now for a complimentary <br /> trial, risk-free and simple</h1>
            <p>
              Create an unforgettable event experience from free to a paid or
              invite-only event that enhances brand perception. At Whatspopping,
              we make it easy for event organizers like you to create, promote
              and sell tickets to your event, creating a memorable experience
              with the right tools and amazing customer support.
            </p>
            <button>Get Started</button>
          </div>
          <div className="comlement-image">
            <img src={Complement} alt="" />
          </div>
        </section>

        {/* <FAQ /> */}

        <section className="newsletter">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get daily updates on events into your inbox</p>
          <button>Subscribe</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
