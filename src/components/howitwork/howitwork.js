import React from 'react';
import './howitwork.css';
import howWorkImg from './images/work_process.svg';
import howWorkImgRight from './images/work_process_right.svg';

export const Howitwork = () => {
  return (
    <section className="hsck_work_process hsck_row">
      <div className="hsck_container">
        <div className="hsck_work_process_inner">
          <img src={howWorkImg} alt="" />
          <strong>Work Process </strong>
          <h3>How it works ?</h3>
        </div>
        <div className="item">
          <div className="hsck_left_section">
            <h1>We Develop Exceptional Enterprise software solution.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
              nonumm. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, diam nonumm. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, diam nonumm.
            </p>
            <button className="hsck_btn hsck_btn_hvr">Read More</button>
          </div>
          <div className="hsck_right_section">
            <img src={howWorkImgRight} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
