import React, { useEffect } from 'react';
import './location.css'
import { Link } from 'react-router-dom';

const RockClimbing = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.w-layout-blockcontainer.container-5');
        
        images.forEach((image, index) => {
          setTimeout(() => {
            image.style.opacity = '1';
            image.style.transform = 'none';
          }, index * 300);
        });
      }, []);

  return (
    <div className="body">
      <div className="section cc-store-home-wrap">
        <div className="w-layout-blockcontainer container-2 w-container">
          <div style={{marginLeft:'300px'}} className="heading-jumbo">ROCK CLIMBING<br /></div>
          <img
            src="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e8d86fdb928c44d913806b_rock-climbing-vector.png"
            loading="lazy" width="50" sizes="65px"
            srcSet="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e8d86fdb928c44d913806b_rock-climbing-vector-p-500.png 500w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e8d86fdb928c44d913806b_rock-climbing-vector-p-800.png 800w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e8d86fdb928c44d913806b_rock-climbing-vector.png 915w"
            alt="" className="image" />
            <Link to="/ziplining">
             <img style={{width:'60px', marginBottom:'20px', }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </Link>
        </div>
      </div>
      
      <div className="w-layout-blockcontainer container-3 w-container">
        <img
          src="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9d8680effffde4fbeac28_city-panoramic-2.jpg"
          loading="lazy" sizes="100vw"
          srcSet="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9d8680effffde4fbeac28_city-panoramic-2-p-500.jpg 500w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9d8680effffde4fbeac28_city-panoramic-2-p-800.jpg 800w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9d8680effffde4fbeac28_city-panoramic-2-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9d8680effffde4fbeac28_city-panoramic-2.jpg 1217w"
          alt="" className="city-panoramic" />
        <h3 className="heading">Sample images</h3>
        
        <div className="w-layout-blockcontainer container-4 w-container">
          <div data-w-id="af1d3b85-abd1-f7a0-5013-a4023aa09d68" style={{ opacity: 0 }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9b0cc97a309c331f3c036_climbbluesky2.jpg"
              loading="lazy" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9b0cc97a309c331f3c036_climbbluesky2-p-500.jpg 500w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9b0cc97a309c331f3c036_climbbluesky2.jpg 683w"
              alt="" className="image-2" />
          </div>
          <div data-w-id="5a90c323-c2e9-7dcf-1aa0-d815da532393"
            style={{ opacity: 0, transform: 'translate3d(-900px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e999b9691846d290bca2d6_climbbluesky-1.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e999b9691846d290bca2d6_climbbluesky-1-p-500.jpg 500w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e999b9691846d290bca2d6_climbbluesky-1.jpg 640w"
              alt="" className="image-2" />
          </div>
          <div data-w-id="75406c94-a673-ac77-d3e5-5fad8669ca7d"
            style={{ transform: 'translate3d(-1300px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9b637335d3c7bcc6bfda3_climbbluesky-3.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9b637335d3c7bcc6bfda3_climbbluesky-3-p-500.jpg 500w, https://uploads-ssl.webflow.com/64e8a95c353db6719059b02a/64e9b637335d3c7bcc6bfda3_climbbluesky-3.jpg 794w"
              alt="" className="image-2" />
          </div>
          {/* Add more images here */}
        </div>
        <div class="w-layout-blockcontainer w-container">
            <p class="paragraph">Test your strength, agility and endurance at the<br />Diamond Plaza Climb Blue
                Sky<br />Rock Climbing center</p>
        </div>
      </div>
      
      <div className="w-layout-blockcontainer container-6 w-container">
        <h3 className="summary-head">Activity Summary</h3>
        <div className="container">
          <div className="divider"></div>
          <p className="summary-paragraph">
          Discover the thrill of rock climbing at the Climb Blue Sky gym located in Parklands Nairobi Diamond Plaza. Whether you're a novice or a seasoned pro, the facility caters to all levels of climbers. With a range of difficulty levels, from beginner-friendly walls to challenging ones, everyone can find their
        perfect climb. 
        <br /><br />
        The facility's expert rock climbing instructors are dedicated to ensuring a safe and enjoyable experience for all. Climb Blue Sky is open Monday to Saturday, from 11 am to 8:45 pm, providing ample opportunity for adventure. Conquer new heights in a fun and supportive environment.
        <br /><br />
        If using public transport, vehicles heading toward Diamond Plaza can be found at the Koja bus stage on Tom Mboya Street. Please note, the gym is closed on Sundays and public holidays.
        
          </p>
        </div>
      </div>

      <div className='icon-section'>
      <div className='how-it-works'>
        <h1 style={{ marginBottom: '30px' }}>Activity Details</h1>
       
        <div className='how-it-works-pic'>
        <img  src='images/price-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Cost:</h4>
        <h5> Ksh 1300</h5>
        </div>
        </div>
        <div style={{ marginLeft: '60px', marginRight: '90px' }} className='how-it-works-pic'>
        <img src='images/location-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Location:</h4>
        <h5>Diamond Plaza Parklands Nairobi</h5>
        </div>
        </div>
        <div className='how-it-works-pic'>
        <img  src='images/phone-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Contacts:</h4>
        <h5>0792790087</h5>
        </div>
        </div>
      </div>
      </div>
      <div style={{marginTop:"50px"}}>
      <a href="/rock-climbing">
            <img style={{width:'60px', marginBottom:'20px', marginRight:'50px' }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
      <a href="/ziplining">
             <img style={{width:'60px', marginBottom:'20px', marginLeft:'50px' }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </a>
      </div>
    
    </div>

    
  );
};

export default RockClimbing;
