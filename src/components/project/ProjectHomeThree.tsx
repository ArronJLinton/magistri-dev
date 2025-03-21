'use client';

import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectHomeThree = () => {
  return (
    <>
      <div className="it-project-5__area pt-115 pb-115">
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-project-5__section-box text-center">
                  <span className="it-section-subtitle-5">OUR SHOWCASE</span>
                  <h4 className="it-section-title">
                    Check Our Latest Projects
                  </h4>
                </div>
              </div>
            </div>

            <div className="it-project-5__wrapper">
              <div className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                  {data.map((e, i) => (
                    <div
                      key={e.id}
                      className="relative flex justify-center items-center self-center"
                    >
                      <Link href="/project-details">
                        <div className="relative flex justify-center items-center">
                          {/* MacBook - Layered behind with actual frame */}
                          <div className="absolute w-full opacity-80 z-0 flex justify-center">
                            <img
                              src={e.desktop}
                              alt={e.title}
                              className="w-full h-auto relative top-6"
                            />
                          </div>
                          {/* iPhone - Left with actual frame */}
                          <div className="relative z-10 -translate-x-10 flex justify-center">
                            <img
                              src={e.mobile}
                              alt={e.title}
                              className="w-full h-auto relative top-20"
                            />
                          </div>
                          {/* Tablet - Right with actual frame */}
                          <div className="relative z-10 translate-x-10 flex justify-center">
                            <img
                              src={e.tablet}
                              alt={e.title}
                              className="w-5/6 h-auto relative top-20"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeThree;
// src = 'assets/img/project/aquilini-wines-home.png';

const data = [
  {
    id: 1,
    title: 'Aquilini Wines',
    mobile: 'assets/img/project/aquilini-wines-mobile.png',
    tablet: 'assets/img/project/aquilini-wines-tablet.png',
    desktop: 'assets/img/project/aquilini-wines-desktop.png',
  },
  {
    id: 2,
    title: 'My Aphasia Coach',
    mobile: 'assets/img/project/aphasia-mobile.png',
    tablet: 'assets/img/project/aphasia-tablet.png',
    desktop: 'assets/img/project/aphasia-desktop.png',
  },
  {
    id: 3,
    title: 'The Takedown',
    mobile: 'assets/img/project/takedown-mobile.png',
    tablet: 'assets/img/project/takedown-tablet.png',
    desktop: 'assets/img/project/takedown-desktop.png',
  },
  // {
  //   id: 4,
  //   title: 'Le Fashion Cottage',
  //   mobile: 'assets/img/project/fashion-cottage-mobile.png',
  //   tablet: 'assets/img/project/fashion-cottage-tablet.png',
  //   desktop: 'assets/img/project/fashion-cottage-desktop.png',
  // },
  // {
  //   id: 5,
  //   title: 'Munca Technologies',
  //   mobile: 'assets/img/project/munca-mobile.png',
  //   tablet: 'assets/img/project/munca-tablet.png',
  //   desktop: 'assets/img/project/munca-desktop.png',
  // },
];
