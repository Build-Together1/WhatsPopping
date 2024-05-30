import React from 'react';
import "../styles/Community.css";
import Footer from './Footer';
import Image174 from "../assets/images/image 174.png";

const Community = () => {
  return (
    <div className='community_container'>
      <h1>Community</h1>
      <p>Unforgettable experiences start here. Your Hub for Event Enthusiasts!</p>
      <img src={Image174} alt="community_image"  />
      <Footer />
    </div>
  )
}

export default Community;