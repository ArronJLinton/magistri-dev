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

            <div className="">
              <div className="py-6 xl:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 xl:gap-96 relative">
                  {data.map((e, i) => (
                    <div
                      key={e.id}
                      className="relative flex justify-center items-center self-center"
                    >
                      <Link
                        href={{
                          pathname: '/project-details',
                          query: { data: JSON.stringify(e) },
                        }}
                      >
                        <div className="relative flex justify-center items-center">
                          {/* MacBook - Layered behind with actual frame */}
                          <div className="absolute w-full xl:w-[450px] opacity-80 z-0 flex justify-center">
                            <img
                              src={e.desktop}
                              alt={e.title}
                              className="w-full h-full relative top-6"
                            />
                          </div>
                          {/* iPhone - Left with actual frame */}
                          <div className="relative w-[100px] z-10 -translate-x-24 flex justify-center">
                            <img
                              src={e.mobile}
                              alt={e.title}
                              className="w-full h-full relative top-20"
                            />
                          </div>
                          {/* Tablet - Right with actual frame */}
                          <div className="relative w-[200px] z-10 translate-x-24 flex justify-center">
                            <img
                              src={e.tablet}
                              alt={e.title}
                              className="w-full h-auto relative top-20 right-0"
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

export const data = [
  {
    id: 1,
    title: 'Aquilini Wines',
    mobile: 'assets/img/project/aquilini-wines-mobile.png',
    tablet: 'assets/img/project/aquilini-wines-tablet.png',
    desktop: 'assets/img/project/aquilini-wines-desktop.png',
    category: 'Website Design/Development',
    client: 'Aquilini Wine Group',
  },
  {
    id: 2,
    title: 'My Aphasia Coach',
    mobile: 'assets/img/project/aphasia-mobile.png',
    tablet: 'assets/img/project/aphasia-tablet.png',
    desktop: 'assets/img/project/aphasia-desktop.png',
    ios: 'https://apps.apple.com/us/app/my-aphasia-coach/id1163288893?ls=1',
    android: 'https://play.google.com/store/apps/details?id=com.myaphasiacoach',
    category: 'Web/Mobile App Development',
    client: 'Phasic Software, LLC',
  },
  {
    id: 3,
    title: 'The Takedown',
    mobile: 'assets/img/project/takedown-mobile.png',
    tablet: 'assets/img/project/takedown-tablet.png',
    desktop: 'assets/img/project/takedown-desktop.png',
    category: 'Web App Development, CMS',
    client: 'The Takedown',
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
