import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import '../App.css';



function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick =()=> setClick(!click)
    const closeMobileMenu =()=> setClick(false)

    const showButton =()=> {
      if(window.innerWidth <= 960){
        setButton(false)
      }else{
        setButton(true)
      }
    };

    window.addEventListener('resize', showButton)
    
  return (
    <>
      <nav className="navbar">
        {/* <div className="black-holder"></div> */}
        <div className="navbar-container">
            <Link to ="/" className='navbar-logo'>
              EXPLORE
                <img className='logo1' src="./images/Adventure logo-02-02.png" alt="adventure-logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              
              </li> */}
              <li className="nav-item">
                <Link to ='https://drive.google.com/file/d/1glwUyJCiKtou_ZS7cVwzlPYx_yyOkKFt/view?usp=sharing' className='nav-links' onClick={closeMobileMenu}>
                  Trailer
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to ='/sign up' className='nav-links' onClick={closeMobileMenu}>
                <Button buttonStyle ='btn--outline'>SIGN UP</Button>
                </Link>
              </li> */}
            </ul>
           
            {button && <Button buttonStyle ='btn--outline'>SIGN UP</Button>}
           
        </div>
      </nav>
    </>
  )
}

export default Navbar
