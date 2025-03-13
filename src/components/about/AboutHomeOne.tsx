

import React from 'react';
import Count from '../common/count';
import Link from 'next/link';

const AboutHomeOne = ({style_2}: any) => {
  return (
    <>
      <div className={`it-about__area pb-120 ${style_2 ? "pt-120" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about__left-box text-end p-relative">
                <div className="it-about__thumb">
                  <img src="assets/img/about/about-1-1.png" alt="rk-theme" />
                </div>
                <div className="it-about__experience-box">
                  <div className="it-about__experience d-flex align-items-center">
                    <h6>
                      <Count number={25} />
                    </h6>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-about__right-box">
                <div className="it-about__section-title pb-20">
                  <span className="it-section-subtitle">KNOW ABOUT Tecch</span>
                  <h4 className="it-section-title">We Execute Our ideas From The Start to Finish</h4>
                </div>
                <div className="it-about__content">
                  <p>
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, <br />
                    lorem is simply free text quis bibendum. There are many variations of <br /> passages
                    of available
                  </p>
                  <div className="it-about__list-box">
                    <ul>
                      <li><i className="flaticon-check-mark"></i>Aliquam accumsan et ante id pellentesque
                      </li>
                      <li><i className="flaticon-check-mark"></i>Aliquam accumsan et ante id</li>
                    </ul>
                  </div>
                  <div className="it-about__btn d-flex align-items-center">
                    <Link className="it-btn hover-2" href="/about-us"><span>discover more</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeOne;