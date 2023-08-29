import React, { useEffect } from 'react';
import './location.css'


const Ziplining = () => {
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
        <a href="/rock-climbing">
            <img style={{width:'60px', marginBottom:'20px', }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
          <div className="heading-jumbo">ZIPLINING<br /></div>
          <img style={{marginBottom:'15px', width:'75px'}}
            src="images/zipline-vector.png"
            loading="lazy" width="50" sizes="65px"
            srcSet="images/zipline-vector.png"
            alt="vector" className="image" />
            <a href="/archery">
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
              src="images/big-jump (1).jpg"
              loading="lazy" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/big-jump (1).jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="5a90c323-c2e9-7dcf-1aa0-d815da532393"
            style={{ opacity: 0, transform: 'translate3d(-900px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/zipline-sample.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/zipline-sample.jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="75406c94-a673-ac77-d3e5-5fad8669ca7d"
            style={{ transform: 'translate3d(-1300px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/jump-bag.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/jump-bag.jpg"
              alt="" className="image-2" />
          </div>
          {/* Add more images here */}
        </div>
        <div class="w-layout-blockcontainer w-container">
            <p class="paragraph">Experience the Ultimate Thrill: <br />Ziplining and other activities at the Flying Fox Adventure
                <br />at The Hub Mall!</p>
        </div>
      </div>
      
      <div className="w-layout-blockcontainer container-6 w-container">
        <h3 className="summary-head">Activity Summary</h3>
        <div className="container">
          <div className="divider"></div>
          <p className="summary-paragraph">
          Flying Fox, an exhilarating adventure destination offers a range of adrenaline-packed activities that promise an unforgettable experience.   
        <br /><br />
        From the thrill of ziplining and airbag jumps to the excitement of the giant swing and more, Flying Fox caters to all adventure enthusiasts seeking an adrenaline rush.
        <br /><br />
        If using public transport, vehicles heading toward The Hub can be found at Railways bus stage, or any other stage that has vehicles using the Karen Ngong route. The facility is open on weekdays from 12pm to 8pm and on weekends and public holidays from 11am to 8pm. 
        
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
        <h5> Ksh 1500 (May vary depending on the activity)
        </h5>
        </div>
        </div>
        <div style={{ marginLeft: '30px', marginRight: '170px' }} className='how-it-works-pic'>
        <img src='images/location-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Location:</h4>
        <h5>Flying Fox: The Hub Mall Karen
        </h5>
        </div>
        </div>
        <div className='how-it-works-pic'>
        <img  src='images/phone-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Contacts:</h4>
        <h5>0715969696</h5>
        </div>
        </div>
      </div>
      <div style={{marginTop:"90px"}}>
      <a href="/rock-climbing">
            <img style={{width:'60px', marginBottom:'20px', marginRight:'50px' }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
      <a href="/archery">
             <img style={{width:'60px', marginBottom:'20px', marginLeft:'50px' }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </a>
      </div>
    </div>

    {/* <Footer /> */}
    </div>

    
  );
};

export default Ziplining;
