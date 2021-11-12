import React from 'react';
import './trustedclient.css';
import trustedImg from './images/trusted.svg'
import slide1 from './images/stripe.svg'
import slide2 from './images/slack.svg'
import slide3 from './images/paypal.svg'

export const Trustedclient = () => {
  return (
    <section className="hsck_People hsck_row">
          <div className="hsck_container">
            <div className="hsck_People_inner">
              <img src={trustedImg} alt="" />
              <strong>Trusted</strong>
              <h3>Trusted People</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
                nonummy nibhie euismod vivamus at mauris.
              </p>
            </div>
            <div className="hsck_People_slider owl-carousel">
              <div className="item">
                <img src={slide1} alt="" />
              </div>
              <div className="item">
                <img src={slide2} alt="" />
              </div>
              <div className="item">
                <img src={slide3} alt="" />
              </div>
              <div className="item">
                <img src={slide1} alt="" />
              </div>
              <div className="item">
                <img src={slide2} alt="" />
              </div>
              <div className="item">
                <img src={slide3} alt="" />
              </div>
              <div className="item">
                <img src={slide1} alt="" />
              </div>
              <div className="item">
                <img src={slide2} alt="" />
              </div>
            </div>
          </div>
        </section>
  )
}
