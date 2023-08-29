import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import RockClimbing from './components/RockClimbing';
import Ziplining from './components/Ziplining';
import Archery from './components/Archery';
import GPcarting from './components/GPcarting';
import Skating from './components/Skating';
import SpinRide from './components/SpinRide';
import LaserTag from './components/LaserTag';
import Paintball from './components/Paintball';
import Bowling from './components/Bowling';

// import Test from './components/Test';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path='/products' Component={Products}/>
          <Route path='/sign-up' Component={SignUp}/>
          <Route path='/rock-climbing' Component={RockClimbing}/>
          <Route path='/ziplining' Component={Ziplining}/>
          <Route path='/archery' Component={Archery}/>
          <Route path='/gp-carting' Component={GPcarting}/>
          <Route path='/skating' Component={Skating}/>
          <Route path='/spin-ride' Component={SpinRide}/>
          <Route path='/laser-tag' Component={LaserTag}/>
          <Route path='/paintball' Component={Paintball}/>
          <Route path='/bowling' Component={Bowling}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
