import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1 className='overall-card-title'>EXPLORE THESE EXCITING ACTIVITIES!</h1>
      <div className='divider'>
      <hr className="thicker-hr" />  <i class="fa-regular fa-compass custom-compass-icon"></i> <hr className="thicker-hr" />
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem
                src='images/rock-climbing.jpg'
                text='Rock Climbing: Climb Blue Sky'
                label="Ksh. 1300"
                path='/rock-climbing'
                />
                <CardItem
                src='images/zipline.jpg'
                text=' Ziplining: The Hub'
                label="Ksh. 1500"
                path='/ziplining'
                />
                 <CardItem
                src='images/archery.jpg'
                text=' Archery: Mamba Village'
                label="Ksh. 1500"
                path='/archery'
                />
            </ul>
            <ul className="cards__items">
                <CardItem
                src='images/GP-karting.jpg'
                text='GP-Karting: Off Langata road (and others)'
                label="Ksh. 1500"
                path='/gp-carting'
                />
                <CardItem
                src='images/skating.jpg'
                text=' Indoor Skating: Skate City'
                label="Ksh. 2000"
                path='/skating'
                />
                 <CardItem
                src='images/ride.jpg'
                text=' Spin Ride: Space X Bar and Grill'
                label="Ksh. 500"
                path='/spin-ride'
                />
            </ul>
            <ul className="cards__items">
                <CardItem
                src='images/laser tag.jpg'
                text='Laser tag: Laser Land Karen'
                label="Ksh. 1200"
                path='/laser-tag'
                />
                <CardItem
                src='images/paintball.jpg'
                text='Paintball: The Waterfront Paintball Fury'
                label="Ksh. 1500"
                path='/paintball'
                />
                 <CardItem
                src='images/bowling.jpg'
                text=' Bowling: Pins Sarit (and other locations)'
                label="Ksh. 600"
                path='/bowling'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
