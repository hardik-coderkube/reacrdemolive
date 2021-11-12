import React from 'react';
import './slider.css';
import sliderImg1 from './images/rightblog.svg';
import sliderImg2 from './images/work_process_right.svg';

export const Slider = () => {
  return (
    <section className="hsck_slider hsck_row">
      <div className="hsck_container owl-carousel hsck_slider_carousel owl-theme">
        <div className="item">
          <div className="hsck_left_section">
            <h1>We deliver the <br /><span>Software</span> you need <br />no more <span>less</span></h1>
            <p>Lorem ipsum dolor sit amet,<br /> consectetuer adipiscingelit, diam nonummy<br />nibhie euismod vivamus at mauris.</p>
            <button className="hsck_btn hsck_btn_hvr">Read More</button>
          </div>
          <div className="hsck_right_section">
            <img src={sliderImg1} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="hsck_left_section">
            <h1>We deliver the <br /><span>Software</span> you need <br /> no more <span>less</span></h1>
            <p>Lorem ipsum dolor sit amet, <br />consectetuer adipiscingelit, diam nonummy <br />nibhie euismod vivamus at mauris. </p>
            <button className="hsck_btn hsck_btn_hvr">Read More</button>
          </div>
          <div className="hsck_right_section">
            <img src={sliderImg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
