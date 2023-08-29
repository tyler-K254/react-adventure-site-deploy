import React, { useEffect } from 'react';
import './location.css'
import { Link } from 'react-router-dom';


const Skating = () => {
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
            <Link to="/gp-carting">
            <img style={{width:'60px', marginBottom:'20px', }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </Link>
          <div className="heading-jumbo">INDOOR SKATING<br /></div>
          <img style={{marginBottom:'10px'}}
            src="images/roller-blade.png"
            loading="lazy" width="50" sizes="65px"
            srcSet="images/roller-blade.png"
            alt="" className="image" />
            <Link to="/spin-ride">
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
              src="images/sk8-1.png"
              loading="lazy" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/sk8-1.png"
              alt="" className="image-2" />
          </div>
          <div data-w-id="5a90c323-c2e9-7dcf-1aa0-d815da532393"
            style={{ opacity: 0, transform: 'translate3d(-900px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/sk8city-1.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/sk8city-1.jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="75406c94-a673-ac77-d3e5-5fad8669ca7d"
            style={{ transform: 'translate3d(-1300px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/sk8city-3.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/sk8city-3.jpg"
              alt="" className="image-2" />
          </div>
          {/* Add more images here */}
        </div>
        <div class="w-layout-blockcontainer w-container">
            <p class="paragraph">Experience the Thrill of indoor Roller Blading at sk8CIty!
                </p>
        </div>
      </div>
      
      <div className="w-layout-blockcontainer container-6 w-container">
        <h3 className="summary-head">Activity Summary</h3>
        <div className="container">
          <div className="divider"></div>
          <p className="summary-paragraph">
          Enjoy the smooth skating surface, tasty food and drinks, and an incredible selection of fascinating arcade games at Sk8City Nairobi 
          It is located on the fourth floor of Diamond Plaza 2, 12th Parklands Avenue in Nairobi, Kenya.
        <br /><br />
        This vibrant entertainment center is ideal for visitors of all ages seeking an exceptional experience.
        Sk8city, in addition to skating, has a variety of fun activities such as ice hockey, basketball dunks, and a punching bag. The arcade, resting, skating, and munching are all options for visitors. 
        <br /><br />
        If using public transport, vehicles heading toward Diamond Plaza can be found at the Koja bus stage on Tom Mboya Street. The venue is open from 10am to 3am
        
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
        <h5> Ksh 2000</h5>
        </div>
        </div>
        <div style={{ marginLeft: '60px', marginRight: '90px' }} className='how-it-works-pic'>
        <img src='images/location-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Location:</h4>
        <h5>4th floor of Diamond Plaza 2, 12th Parklands Avenue</h5>
        </div>
        </div>
        <div className='how-it-works-pic'>
        <img  src='images/phone-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Contacts:</h4>
        <h5>0712 809209</h5>
        </div>
        </div>
      </div>
      
     
    </div>
    <div style={{marginTop:"50px"}}>
      <Link to="/gp-carting">
            <img style={{width:'60px', marginBottom:'20px', marginRight:'50px' }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </Link>
      <Link to="/spin-ride">
             <img style={{width:'60px', marginBottom:'20px', marginLeft:'50px' }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </Link>
      </div>
    {/* <Footer /> */}
    </div>

    
  );
};

export default Skating;
