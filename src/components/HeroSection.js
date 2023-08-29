import { Button } from './Button';
import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button2 } from './Button2';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-3.mp4" autoPlay loop muted />
        <div className='text'>
        <h1>EXPLORE NAIROBI</h1>
        <p>Discover exciting activities and  places</p>
        <div  className="hero-btns">
        <Button  className='btns1' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            GET STARTED
        </Button>
       
        <Button2 className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
        </Button2>
        </div>
        </div>      
    </div>
  )
}

export default HeroSection
