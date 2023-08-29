import React, { useEffect } from 'react';
import './location.css'


const Archery = () => {
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
            <a href="/ziplining">
            <img style={{width:'60px', marginBottom:'20px', }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
          <div className="heading-jumbo">ARCHERY<br /></div>
          <img style={{marginBottom:'10px'}}
            src="images/archery-vector.png"
            loading="lazy" width="50" sizes="65px"
            srcSet="images/archery-vector.png"
            alt="" className="image" />
            <a href="/gp-carting">
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
              src="images/nairobi-archery-1.jpg"
              loading="lazy" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/nairobi-archery-1.jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="5a90c323-c2e9-7dcf-1aa0-d815da532393"
            style={{ opacity: 0, transform: 'translate3d(-900px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/nairobi-archery-2.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/nairobi-archery-2.jpg"
              alt="" className="image-2" />
          </div>
          <div data-w-id="75406c94-a673-ac77-d3e5-5fad8669ca7d"
            style={{ transform: 'translate3d(-1300px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0 }}
            className="w-layout-blockcontainer container-5 w-container">
            <img
              src="images/nairobi-archery-3.jpg"
              loading="lazy" width="331" sizes="(max-width: 479px) 100vw, 400px"
              srcSet="images/nairobi-archery-3.jpg"
              alt="" className="image-2" />
          </div>
          {/* Add more images here */}
        </div>
        <div class="w-layout-blockcontainer w-container">
            <p class="paragraph">Test your aim and precision at the<br />Nairobi Archery Club shooting range
                </p>
        </div>
      </div>
      
      <div className="w-layout-blockcontainer container-6 w-container">
        <h3 className="summary-head">Activity Summary</h3>
        <div className="container">
          <div className="divider"></div>
          <p className="summary-paragraph">
          The Nairobi Archery Club, located within the serene Mamba Village in Karen, welcomes 
          <br />
          both beginers and seasoned archers.
         
        <br /><br />
        Targets set at different distances cater to the experience of each shooter, ensuring a rewarding challenge for all. Expert instructors are on hand to offer guidance, 
        making the Nairobi Archery Club the perfect place to embark on a thrilling archery journey, regardless of your level of expertise.
        <br /><br />
        If using public transport, vehicles heading toward Mamba Village can be found at the bus station stage, specifically vehicles using route number 24. The shooting range is open on Saturday and Sunday from 10am to 5pm.
        
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
        <h5> Ksh 1500</h5>
        </div>
        </div>
        <div style={{ marginLeft: '60px', marginRight: '90px' }} className='how-it-works-pic'>
        <img src='images/location-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Location:</h4>
        <h5>Mamba Village Karen</h5>
        </div>
        </div>
        <div className='how-it-works-pic'>
        <img  src='images/phone-icon.png' alt='vector'/>
        <div className='mid-image-text'>
        <h4 style={{ marginTop: '20px', marginBottom: '5px' }}>Contacts:</h4>
        <h5>0708 386 685</h5>
        </div>
        </div>
      </div>
      
     
    </div>
    <div style={{marginTop:"50px"}}>
      <a href="/ziplining">
            <img style={{width:'60px', marginBottom:'20px', marginRight:'50px' }} className='back-arrow' src = 'images/previous.png' alt='back-arrow'
             />
             </a>
      <a href="/gp-carting">
             <img style={{width:'60px', marginBottom:'20px', marginLeft:'50px' }} className='front-arrow' src = 'images/forward.png' alt='front-arrow' />
             </a>
      </div>
    {/* <Footer /> */}
    </div>

    
  );
};

export default Archery;
