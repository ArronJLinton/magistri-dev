import Link from 'next/link';
import React from 'react';

const FooterOne = ({ style_2 }: any) => {
  return (
    <>
      <footer>
        {/* <!-- footer-area-start --> */}
        <div
          className={`it-footer__area it-footer__space ${
            style_2 ? 'black-bg' : 'theme-bg'
          } z-index`}
        >
          <div className="container">
            <div className="flex flex-row justify-around">
              <div
                className="inline-flex flex-col mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-footer__widget">
                  {/* <div className="it-footer__logo"> */}
                  <a href="/" className="inline-flex">
                    <img
                      src="assets/img/logo/magistri-dev-logo.png"
                      alt="rk-theme"
                      className="w-1/2 sm:w-full h-[200px] object-contain"
                    />
                  </a>
                </div>
              </div>

              <div
                className="flex flex-col mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="">
                  <h4 className="it-footer__widget-title">Usefull Links</h4>
                  <div className="it-footer__list">
                    <ul>
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="/#services">Our Services</a>
                      </li>
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="/#projects">Our Projects</a>
                      </li>
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer-area-end --> */}

        {/* <!-- copyright-area-start --> */}
        <div
          className={`it-copyright__area ${
            style_2 ? 'black-bg' : 'it-copyright__bg'
          }`}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-12 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-copyright__text text-center">
                  <span>
                    Copyright © {new Date().getFullYear()}{' '}
                    <b className={`${style_2 ? 'color-red' : ''}`}>
                      Magistri Dev LLC.
                    </b>{' '}
                    All Rights Reserved{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- copyright-area-end --> */}
      </footer>
    </>
  );
};

export default FooterOne;
