import React from 'react';
import './feature.css';
import featureImg from './images/feature.svg';
import featureItems from './images/feature_liimg.svg';
import featureVideo from './images/feature_video.mp4';
import iphoneImg from './images/iphone.svg';


export const Feature = () => {
  return (
    <section className="hsck_feature hsck_row" id="feature">
        <div className="hsck_container">
          <div className="hsck_feature_inner">
            <img src={featureImg} alt="" />
            <strong>Feature</strong>
            <h3>More Awesome Features</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
              nonummy nibhie euismod vivamus at mauris.
            </p>
          </div>
          <div className="hsck_feature_video">
            <video controls>
              <source src={featureVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="hsck_feature_outer_main">
          <div className="hsck_container hsck_feature_outer">
            <div className="hsck_feature_left">
              <img src={iphoneImg} alt="" />
            </div>
            <div className="hsck_feature_right">
              <ul>
                <li>
                  <img src={featureItems} alt="" />
                  <strong>Responsive web design</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </li>
                <li>
                  <img src={featureItems} alt="" />
                  <strong>Responsive web design</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </li>
                <li>
                  <img src={featureItems} alt="" />
                  <strong>Built with Sass</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </li>
                <li>
                  <img src={featureItems} alt="" />
                  <strong>Built with Sass</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </li>
                <li>
                  <img src={featureItems} alt="" />
                  <strong>Responsive web design</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </li>
                <li>
                  <img src={featureItems} alt="" />
                  <strong>Responsive web design</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}
