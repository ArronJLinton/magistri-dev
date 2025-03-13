
"use client"

import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, { useState } from 'react';

const VideoHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="it-video__area it-video__space p-relative grey-bg">
        <div className="it-video__bg" style={{ backgroundImage: 'url(/assets/img/video/video-1-1.png)' }}>
          <div className="it-video__bg-icon">
            <a className="popup-video"
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}><i className="fa-sharp fa-solid fa-play"></i></a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-video__left-box z-index-5">
                <div className="it-video__section-box">
                  <span className="it-section-subtitle">WHAT ELSE HERE</span>
                  <h4 className="it-section-title pb-20">The Best Tech Solution for <br /> Our Clients</h4>
                  <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean <br />sollicitudin,
                    lorem is simply free text quis bibendum. There are many <br />variations of passages
                    of availabl</p>
                </div>
                <div className="it-video__content-box pb-40">
                  <div className="it-video__content p-relative">
                    <ul>
                      <li><i className="flaticon-check-mark"></i>Deliver Awesome Idea</li>
                      <li><i className="flaticon-check-mark"></i>Work With Global Brands</li>
                      <li><i className="flaticon-check-mark"></i>Deliver Awesome Idea</li>
                    </ul>
                  </div>
                </div>
                <div className="it-video__button">
                  <Link className="it-btn hover-2" href="/about-us"><span>discover more</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"rhu7LAnc_kA"}
      />
      {/* video modal end */}

    </>
  );
};

export default VideoHomeOne;