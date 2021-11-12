import React from 'react';
import './work.css';
import workImg from './images/work.svg';
import workItem1 from './images/img1.jpg';
import workItem2 from './images/img2.jpg';
import workItem3 from './images/img3.jpg';
import workItem4 from './images/img4.jpg';
import workItem5 from './images/img5.jpg';
import workItem6 from './images/img6.jpg';

export const Work = () => {
  return (
    <section className="hsck_work hsck_row" id="work">
      <samp className="hsck_work_rightbar hsck_ani_tpbtm">
        <img src="assets/images/aboutRight.svg" alt="" />
      </samp>
      <div className="hsck_container">
        <div className="hsck_work_inner">
          <img src={workImg} alt="" />
          <strong>Work</strong>
          <h3>Awesome Work</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibhie euismod vivamus at mauris.</p>
        </div>
        <div className="hsck_work_outer">
          <div className="hsck_work_menublog">
            <button className="clicked active">all</button>
            <button className="clicked">seo</button>
            <button className="clicked">wordpress</button>
            <button className="clicked">php</button>
            <button className="clicked">webdesign</button>
            <button className="clicked">magento</button>
          </div>
          <div className="image-container">
            <div className="hsck_image_blog">
              <img src={workItem1} alt="" data-album="seo" />
              <div className="hsck_work_hover">
                <h5>Category</h5>
                <h6>Project title</h6>
              </div>
            </div>
            <div className="hsck_image_blog">
              <img src={workItem2} alt="" data-album="wordpress" />
              <div className="hsck_work_hover">
                <h5>Category</h5>
                <h6>Project title</h6>
              </div>
            </div>
            <div className="hsck_image_blog">
              <img src={workItem3} alt="" data-album="php" />
              <div className="hsck_work_hover">
                <h5>Category</h5>
                <h6>Project title</h6>
              </div>
            </div>
            <div className="hsck_image_blog">
              <img src={workItem4} alt=""data-album="webdesign"/>
              <div className="hsck_work_hover">
                <h5>Category</h5>
                <h6>Project title</h6>
              </div>
            </div>
            <div className="hsck_image_blog">
              <img src={workItem5} alt="" data-album="magento" />
              <div className="hsck_work_hover">
                <h5>Category</h5>
                <h6>Project title</h6>
              </div>
            </div>
            <div className="hsck_image_blog">
              <img src={workItem6} alt="" data-album="seo" />
              <div className="hsck_work_hover">
                <h5>Category</h5>
                <h6>Project title</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
