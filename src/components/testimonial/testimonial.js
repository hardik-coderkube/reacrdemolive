import React from 'react';
import './testimonial.css';
import testimonialImg from './images/testimonial.svg'
import testimonialProf from './images/testimonial-img.jpeg'

export const Testimonial = () => {
  return (
    <section className="hsck_testimonial hsck_row" id="testimonial">
      <samp className="hsck_testimonial_rightbar hsck_ani_tpbtm">
        <img src="assets/images/servicesRight.svg" alt="" />
      </samp>
      <div className="hsck_container">
        <div className="hsck_testimonial_inner">
          <img src={testimonialImg} alt="" />
          <strong>Testimonial</strong>
          <h3>Our Testimonial</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
            nonummy nibhie euismod vivamus at mauris.
          </p>
        </div>
        <div className="owl-carousel hsck_testimonial_carousel owl-theme">
          <div className="item">
            <div className="hsck_right_section">
              <div className="hsck_testimonial_block">
              <img src={testimonialProf} alt="" />
              </div>
            </div>
            <div className="hsck_left_section">
              <h1>What clients say.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer piscing elit, sed
                diam nonummy nibh euism tincidunt ut. Lorem ipsum dolor sit
                amet, consectetuer piscing elit, sed diam nonummy nibh euism
                tincidunt ut. Lorem ipsum dolor sit amet, consectetuer
                piscing elit, sed diam nonummy nibh euism tincidunt ut.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="hsck_right_section">
              <div className="hsck_testimonial_block">
                <img src={testimonialProf} alt="" />
              </div>
            </div>
            <div className="hsck_left_section">
              <h1>What clients say.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer piscing elit, sed
                diam nonummy nibh euism tincidunt ut. Lorem ipsum dolor sit
                amet, consectetuer piscing elit, sed diam nonummy nibh euism
                tincidunt ut. Lorem ipsum dolor sit amet, consectetuer
                piscing elit, sed diam nonummy nibh euism tincidunt ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
