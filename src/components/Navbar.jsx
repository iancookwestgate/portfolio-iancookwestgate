import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Navbar(){
  return (
    <div className="bg-nvy navbar">
      <div id="internal-menu">
        <Link to="/" class="flippy-flop"><p>Home</p></Link>
        <Link to="/" class="flippy-flop"><p>About</p></Link>
        <Link to="/" class="flippy-flop"><p>Services</p></Link>
        <Link to="/" class="flippy-flop"><p>Contact</p></Link>
      </div>
    </div>
  );
}

export default Navbar;
