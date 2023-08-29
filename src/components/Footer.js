import React from 'react';
import './Footer.css'; // Import your custom CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Remove the container if you want to extend the Footer to full width. */}
      
        {/* Footer */}
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#007cda' }}>
            {/* Left */}
            <div className="me-5">
              <span>Discover the most exciting recreational destinations</span>
              
            </div>
            {/* Left */}

            {/* Right */}
            <div>
              <a href="https://www.facebook.com/your-facebook-page" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/your-twitter-page" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/your-instagram-page" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}

          {/* Section: Links */}
          <section>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Explore Nairobi</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                  Our website is your guide to the city's vibrant recreational locations and entertainment spots.
                  From adrenaline-pumping outdoor challenges to friendly matches in dynamic arenas, our platform showcases the best sporty activities Nairobi has to offer and more.
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Benefits</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                    <a href="#!" className="text-white">Fun Experiences: </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Variety of Activities:</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Social Connections</a>
                  </p>
                  <p>
                    <a href="#!" className="Responsive Design">Responsive Design</a>
                  </p>
                  
                </div>
                {/* Grid column */}

                {/* Grid column */}
                {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> */}
                  {/* Links */}
                  {/* <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                    <a href="#!" className="text-white">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Help</a>
                  </p>
                </div> */}
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <div  style={{ textAlign: 'left'}}>
                  <p><i  className="fas fa-envelope mr-0"></i> tylerkirumba@gmail.com</p>
                  <p><i className="fas fa-phone mr-0"></i> 0717200264</p>
                  </div>
                  
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links */}

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">explore-nairobi.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
     
      {/* End of .container */}
    </footer>
  );
};

export default Footer;