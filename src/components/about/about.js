import React from 'react';
import './about.css';
import aboutImg from './images/about.svg';
import aboutImgItems from './images/about1.svg';


export const About = () => {
  return (
   <section className="hsck_about hsck_row" id="about">
      <samp className="hsck_about_rightbar hsck_ani_tpbtm">
        <img src="assets/images/aboutRight.svg" alt="" />
      </samp>
      <div className="hsck_container">
        <div className="hsck_about_inner">
          <img src={aboutImg} alt="" />
          <strong>About Us</strong>
          <h3>Welcome To Our Web</h3>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibhie euismod vivamus at mauris. </p>
        </div>
        <div className="hsck_about_outer">
          <div className="hsck_items">
            <img src={aboutImgItems} alt="" />
            <h4>Fast and optimized</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm. </p>
            <button className="hsck_btn hsck_btn_hvr">
              Read More <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
          <div className="hsck_items">
          <img src={aboutImgItems} alt="" />
            <h4>well Documented</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
              nonumm.
            </p>
            <button className="hsck_btn hsck_btn_hvr">
              Read More <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
          <div className="hsck_items">
          <img src={aboutImgItems} alt="" />
            <h4>Easy Integration</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
              nonumm.
            </p>
            <button className="hsck_btn hsck_btn_hvr">
              Read More <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
