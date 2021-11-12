import React from 'react';
import './services.css';
import srvicesImg from './images/services.svg';
import srvicesImgItem from './images/services_img.svg';
import srvicesImgActive from './images/services_active_img.svg';

export const Services = () => {
  return (
    
    <section className="hsck_services hsck_row" id="services">
          <samp className="hsck_services_rightbar hsck_ani_tpbtm">
            <img src="assets/images/servicesRight.svg" alt="Service" />
          </samp>
          <div className="hsck_container">
            <div className="hsck_services_inner">
              <img src={srvicesImg} alt="" />
              <strong>Services</strong>
              <h3>Our Popular Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
                nonummy nibhie euismod vivamus at mauris.
              </p>
            </div>
            <div className="hsck_services_outer">
              <div className="hsck_items">
                <img src={srvicesImgItem} alt="" />
                <img className="active" src={srvicesImgActive} alt="" />
                <h4>Latest Technology</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm.</p>
              </div>
              <div className="hsck_items">
                <img src={srvicesImgItem} alt="" />
                <img className="active" src={srvicesImgActive} alt=""/>
                <h4>Latest Technology</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm.</p>
              </div>
              <div className="hsck_items">
                <img src={srvicesImgItem} alt="" />
                <img className="active" src={srvicesImgActive} alt=""/>
                <h4>Latest Technology</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm. </p>
              </div>
              <div className="hsck_items">
               <img src={srvicesImgItem} alt="" />
                <img className="active" src={srvicesImgActive} alt=""/>
                <h4>Latest Technology</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm. </p>
              </div>
              <div className="hsck_items">
                <img src={srvicesImgItem} alt="" />
                <img className="active" src={srvicesImgActive} alt=""/>
                <h4>Latest Technology</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm.</p>
              </div>
              <div className="hsck_items">
                <img src={srvicesImgItem} alt="" />
                <img className="active" src={srvicesImgActive} alt=""/>
                <h4>Latest Technology</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonumm.</p>
              </div>
            </div>
          </div>
        </section>
  )
}
