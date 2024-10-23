import React from 'react';
import Footer from './Footer';
import '../styles/About.css';
import Frame1 from '../assets/images/Frame1.png';
import teamImages from '../assets/images/teamImages';

const teamMembers = [
  { name: 'Mike Olayemi', role: 'Fullstack Developer', image: teamImages.Frame2 },
  { name: 'Jane Doe', role: 'Frontend Developer', image: teamImages.Frame3 },
  { name: 'John Smith', role: 'Backend Developer', image: teamImages.Frame4 },
  { name: 'Sarah Lee', role: 'UI/UX Designer', image: teamImages.Frame5 },
  { name: 'Alex Johnson', role: 'Project Manager', image: teamImages.Frame6 },
  { name: 'Emily Clark', role: 'DevOps Engineer', image: teamImages.Frame7 },
  { name: 'David Wright', role: 'Mobile Developer', image: teamImages.Frame8 },
  { name: 'Chris Green', role: 'QA Engineer', image: teamImages.Frame9 },
];

const Aboutus = () => {
  return (
    <>
      <div className="aboutus-container">
        <section className="intro text-center mt-5">
          <h3 className="maintxt mt-5">
            Connecting people through <br />
            unforgettable experiences
          </h3>
          <p className="subtxt">
            We empower you to discover, manage, and share events <br />
            that ignite your passions.
          </p>
          <img src={Frame1} className="frame1 mt-5" alt="Event" />
        </section>

        <section className="team mt-5">
          <h3 className="text-center mt-5 mb-5">The Team</h3>
          <div className="container items-center text-center">
            <div className="row d-flex justify-content-center">
              {teamMembers.map((member, index) => (
                <div className="col-6 col-md-3 tminfo" key={index}>
                  <img src={member.image} className="imginfo" alt={`${member.name}`} />
                  <p className="stark">
                    <span className="name">{member.name}</span>
                    <br />
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story text-center">
          <h2>Our Story</h2>
          <p className="storydetails">
            Immerse yourself in our vibrant event community! Connect, Discover, Share: Join our vibrant event
            community and find fellow enthusiasts, insightful tips, and a space to share your unforgettable
            experiences. Explore a diverse tapestry of events, ignite your passions with music festivals and
            insightful workshops, and broaden your horizons through captivating experiences. Engage in
            meaningful conversations, share your unforgettable moments, and learn from the diverse perspectives
            of fellow enthusiasts.
          </p>
        </section>

        <section className="subscribe text-center">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get daily updates on events delivered to your inbox</p>
          <button>Subscribe</button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
