import React from 'react';
import './footer.css';
import Logo from './images/logo.svg';
function footer() {
  return (
    <section className="hsck_footer hsck_row" id="contect">
          <div className="hsck_container">
            <div className="hsck_footer_inner">
              <div className="hsck_col_4">
                <img className="hsck_foter_logo" src={Logo} alt="" />
                <p>Lorem ipsum dolor sit amet,<br />consectetuer piscing elit, sed diam<br />nonummy nibh euism .</p>
                <ul className="hsck_footer_social">
                  <li>
                    <a href="/#"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="/#"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="/#)"><i className="fa fa-pinterest-p"></i></a>
                  </li>
                  <li>
                    <a href="/#"><i className="fa fa-twitter"></i></a>
                  </li>
                </ul>
              </div>
              <div className="hsck_col_4 hsck_footer_centerr4">
                <div className="hsck_footer_centerr">
                  <h2>Contact Info</h2>
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="fa fa-map-marker"></i>304, Star Arcade,
                        Nanpura Road
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-paper-plane"></i>info@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-phone"></i>+91 02458 2536
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-globe"></i>https://coderkube.com/
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hsck_col_4 hsck_footer_right4">
                <div className="hsck_footer_right">
                  <h2>Support & Download</h2>
                  <p>Lorem ipsum dolor sit amet,<br />consectetuer piscing elit, sed diam<br />nonummy nibh euism .</p>
                </div>
              </div>
            </div>
            <div className="hsck_footer_outer">
              <p>© Copyrights 2020 </p>
            </div>
          </div>
        </section>
  )
}

export default footer;
