import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import logo from '../../assets/Logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logoo">
          <Link to="/"><img src={logo} alt="Your Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/approach">Approach</Link>
          </li>
        </ul>
        <div className="action-buttons">
          <Link to="/login" className="btn login">
            Login
          </Link>
          <Link to="/signup" className="btn signup">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
