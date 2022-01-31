import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return <header class="stick_nav">
  <div className="logo">Jadoo</div>
  <nav>
    <ul className="nav__links">
      <li><a href="#home">Destinations</a></li>
      <li><a href="#about">Hotels</a></li>
      <li><a href="#skills">Flights</a></li>
      <li><a href="#project">Bookings</a></li>
      <li><a href="#project">Login</a></li>
    </ul>
  </nav>
  <a className="cta" href="#contact">Sign UP</a>
  <select className="options">
        <option value={"English"}>EN</option>
        <option value={"English"}>Hindi</option>
        
  </select>
</header>;
};

export default NavBar;
