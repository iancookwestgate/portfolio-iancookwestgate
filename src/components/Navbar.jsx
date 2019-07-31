import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Navbar(){
  return (
    <div className="bg-nvy navbar">
      <div id="internal-menu">
        <Link to="/"><p class="flippy-flop">Home</p></Link>
        <Link to="/"><p class="flippy-flop">About</p></Link>
        <Link to="/"><p class="flippy-flop">Services</p></Link>
        <Link to="/"><p class="flippy-flop">Contact</p></Link>
      </div>
      <a class="nav-resize">
        <i class="angle-left">hello</i>
      </a>
    </div>
  );
}

export default Navbar;
