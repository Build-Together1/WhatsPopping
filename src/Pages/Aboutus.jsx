import React from 'react';
import Footer from './Footer';
import '../styles/About.css';
import Frame1 from '../assets/images/Frame1.png'
import Frame2 from '../assets/images/Frame2.png'
import Frame3 from '../assets/images/Frame3.png'
import Frame4 from '../assets/images/Frame4.png'
import Frame5 from '../assets/images/Frame5.png'
import Frame6 from '../assets/images/Frame6.png'
import Frame7 from '../assets/images/Frame7.png'
import Frame8 from '../assets/images/Frame8.png'
import Frame9 from '../assets/images/Frame9.png'

const Aboutus = () => {
  return (
    <>
    <div>
      <div className='text-center mt-5'>
      <h3 className='maintxt mt-5'>
        Connecting people through <br />
        unforgettable experiences
      </h3>
      <p className='subtxt'>
      We empower you to discover, manage, and share events <br />
      that ignite your passions.
      </p>
    </div>
    <img src={Frame1} className='frame1 mt-5' alt='img-responsive' />

    <div className="team mt-5">
      <h3 className='text-center mt-5 mb-5'>The Team</h3>

        <div className="info ">
          <div className="container">
            <div className="row row-cols-4 d-flex">
              <div className="col-3">
                <img src={Frame2} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame3} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame4} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame5} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame6} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame7} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame8} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
              <div className="col-3 tminfo">
                <img src={Frame9} className='imginfo' alt='img-responsive' />
                <p className='stark'> <span className='name'>mike Olayemi</span><br />Fullstark Developer</p>
              </div>
            </div>
          </div>
        </div>
    </div>


    <div className='story text-center'>
      <h2>Our Story</h2>

      <p className='storydetails'>
        Immerse yourself in our vibrant event community! Connect, Discover, Share: Join our vibrant event 
        community and find fellow enthusiasts, insightful tips, and a space to share your unforgettable 
        experiences.  Explore a diverse tapestry of events, ignite your passions with music festivals and insightful 
        workshops, and broaden your horizons through captivating experiences. Engage in meaningful conversations, share your unforgettable moments, and learn from the diverse perspectives of fellow 
        enthusiasts. 
      </p>
    </div>

    <div className='subscribe'>
      <h1 >Subscribe to our Newsletter</h1>
      <p>Get daily updates on event into your inbox</p>
      <button>Subscribe</button>
    </div>

    <Footer />
      </div>
    </>
  )
}

export default Aboutus;