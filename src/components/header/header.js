import React from "react";
import './header.css';
import Logo from './images/logo.svg';
import {Link} from 'react-router-dom';

function header() {
  return (
    <section className="hsck_menu hsck_row">
      <div className="hsck_container">
        <nav className="hsck_navbar">
          <div className="hsck_logo_outer">
            <Link className="hsck_logo_inner" to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="hsck_menu_toggle">
            <span className="top_line"></span>
            <span className="center_line"></span>
            <span className="bottom_line"></span>
          </div>
          <ul className="hsck_menu_right">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="/feature">Features</Link>
            </li>
            <li>
              <Link to="#contect">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default header;
