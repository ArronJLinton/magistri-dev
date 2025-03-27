'use client';

import React from 'react';
import Link from 'next/link';
import MobileMenus from '@/layouts/headers/Menu/mobile-menus';

const Offcanvus = ({ openSidebar, setOpenSidebar }: any) => {
  return (
    <>
      <div className="it-offcanvas-area">
        <div className={`itoffcanvas ${openSidebar ? 'opened' : ''}`}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link href="/">
              <img src="assets/img/logo/magistri-dev-logo-mobile.png" alt="" />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="it-menu-mobile">
            <MobileMenus />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:hello@yourmail.com">magistri.dev@gmail.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:(00)45611227890">+19082512389</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a href="#" target="_blank">
                  New Jersey, USA{' '}
                </a>
              </div>
            </div>
          </div>
          {/* Social Icons */}
          {/* <div className="itoffcanvas__social">
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <div
        className={`body-overlay ${openSidebar ? 'apply' : ''}`}
        onClick={() => setOpenSidebar(!openSidebar)}
      ></div>
    </>
  );
};

export default Offcanvus;
