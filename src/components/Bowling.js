import React, { useEffect } from 'react';
import './location.css'


const LaserTag = () => {
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
            <a href="/paintball">
            <img style={{width:'60px', marginBottom:'20px', }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
          <div className="heading-jumbo">BOWLING<br /></div>
          <img style={{marginBottom:'20px'}}
            src="images/bowling-vector.png"
            loading="lazy" width="50" sizes="65px"
            srcSet="images/bowling-vector.png"
            alt="" className="image" />
            <a href="/">
             <img style={{width:'60px', marginBottom:'20px', }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </a>
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
              src="images/pins1.jpg"
              loading="lazy" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/pins1.jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="5a90c323-c2e9-7dcf-1aa0-d815da532393"
            style={{ opacity: 0, transform: 'translate3d(-900px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/pins2.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/pins2.jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="75406c94-a673-ac77-d3e5-5fad8669ca7d"
            style={{ transform: 'translate3d(-1300px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/pins3.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/pins3.jpg"
              alt="" className="image-2" />
          </div>
          {/* Add more images here */}
        </div>
        <div class="w-layout-blockcontainer w-container">
            <p class="paragraph">Strike up Fun and Memories at Pins: Your Ultimate Bowling Destination
                </p>
        </div>
      </div>
      
      <div className="w-layout-blockcontainer container-6 w-container">
        <h3 className="summary-head">Activity Summary</h3>
        <div className="container">
          <div className="divider"></div>
          <p className="summary-paragraph">
          Pins, located within Sarit Center, stands as an exciting bowling hub offering a dynamic and vibrant atmosphere.
          With its array of lanes, the venue guarantees a lively and entertaining bowling experience. 
        <br /><br />
        Beyond bowling, the entertainment continues with a diverse selection of games including foosball, pool, space hockey and others
         as well as a restaurant that provides amazing food and drinks
        <br /><br />
        Other bowling destinations in Nairobi, such as Village Market, Next Gen Mall, and The Waterfront Mall, also contribute to the city's bowling scene.
        If using public transport, vehicles heading toward Sarit Center can be found at the Koja bus stage on Tom Mboya Street.
        Pins operating hours run from 10 am to 12 am
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
        <h5> Ksh 600</h5>
        </div>
        </div>
        <div style={{ marginLeft: '60px', marginRight: '90px' }} className='how-it-works-pic'>
        <img src='images/location-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Location:</h4>
        <h5>Pins: Sarit Center Westlands</h5>
        </div>
        </div>
        <div className='how-it-works-pic'>
        <img  src='images/phone-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Contacts:</h4>
        <h5>0780 101010</h5>
        </div>
        </div>
      </div>
      
     
    </div>
    <div style={{marginTop:"50px"}}>
      <a href="/paintball">
            <img style={{width:'60px', marginBottom:'20px', marginRight:'50px' }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
      <a href="/">
             <img style={{width:'60px', marginBottom:'20px', marginLeft:'50px' }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </a>
      </div>
    {/* <Footer /> */}
    </div>

    
  );
};

export default LaserTag;
