import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Navbar(){
  return (
    <div className="bg-nvy navbar">
      <div id="internal-menu">
        <Link to="/"><p>Home</p></Link>
        <Link to="/"><p>About</p></Link>
      </div>
    </div>
  );
}

export default Navbar;
