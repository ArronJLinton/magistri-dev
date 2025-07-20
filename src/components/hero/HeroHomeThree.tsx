'use client';

import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, { useState } from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const HeroHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="it-slider__wrapper z-index fix">
        <Swiper
          loop={false}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          autoplay={true}
          modules={[Autoplay, EffectFade, Pagination]}
          pagination={{ el: '.it-slider-dots', clickable: true }}
          breakpoints={{
            '1200': {
              slidesPerView: 1,
            },
            '992': {
              slidesPerView: 1,
            },
            '768': {
              slidesPerView: 1,
            },
            '576': {
              slidesPerView: 1,
            },
            '0': {
              slidesPerView: 1,
            },
          }}
          className="swiper-container it-slider__active p-relative"
        >
          <SwiperSlide className="swiper-slide">
            <div className="it-slider__area it-slider__height it-slider__overlay bg-color-blue p-relative">
              <div className="it-slider__shape-1">
                <Image
                  src="/assets/img/slider/slider-shape-3-2.png"
                  alt="shape"
                  width={200}
                  height={200}
                />
              </div>
              <div className="it-slider__shape-2">
                <Image
                  src="/assets/img/slider/shape-4-2.png"
                  alt="shape"
                  width={200}
                  height={200}
                />
              </div>
              <div className="it-slider__shape-3 d-none d-xl-block">
                <Image
                  src="/assets/img/slider/slider-shape-1-3.png"
                  alt="shape"
                  width={200}
                  height={200}
                />
              </div>
              <div
                className="it-slider__bg"
                style={{
                  backgroundImage: `url(/assets/img/slider/slider-1-4.png)`,
                }}
              ></div>
              <div className="container">
                <div className="flex flex-row justify-center itemss-center">
                  <div className="col-xl-12">
                    <div className="it-slider__content-wrap">
                      <div className="it-slider__content text-center">
                        {/* <span className="it-slider-subtitle">SOLUTION FOR YOUR BUSINESS</span> */}
                        <h2 className="it-slider-title mt-10 pb-30">
                          Magistri Dev
                          <br />
                        </h2>
                        <span className="it-slider-subtitle">
                          We Build Software Solutions for your Business
                        </span>
                      </div>

                      <div className="flex justify-center items-center">
                        <Link
                          className="it-btn self-center flex justify-center items-center"
                          href="/#about-us"
                        >
                          <div>discover more</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="it-slider-dots"></div> */}
      </div>

      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'rhu7LAnc_kA'}
      /> */}
      {/* video modal end */}
    </>
  );
};

export default HeroHomeThree;
