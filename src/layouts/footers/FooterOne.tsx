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
                      className="w-1/2 sm:w-full object-contain"
                    />
                  </a>
                  {/* </div> */}
                  {/* <div className="it-footer__text pb-15">
                    <p>
                      There is no one who loves pain itsel <br /> seeks after it
                      and wants to have{' '}
                    </p>
                  </div> */}
                  {/* <div className="it-footer__contact-list">
                    <ul> */}
                  {/* <li>
                        <a href="tel:+8973534529245">+897 35345 29245</a>
                      </li> */}
                  {/* <li>
                        <a
                          className={`color ${style_2 ? 'color-red' : ''}`}
                          href="mailto:www.tecch.rk-theme.com"
                        >
                          www.tecch.rk-theme.com
                        </a>
                      </li> */}
                  {/* </ul> */}
                  {/* </div> */}
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
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="#">Contact Team</a>
                      </li>
                      {/* <li>
                        <i className="flaticon-next"></i>
                        <a href="#">News & Media</a>
                      </li> */}
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="#">Our Projects</a>
                      </li>
                      <li>
                        <i className="flaticon-next"></i>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Blog */}
              {/* <div
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="it-footer__widget footer-col-3">
                  <h4 className="it-footer__widget-title">Recent Blogs</h4>
                  <div className="it-footer__gallery-box">
                    <div className="it-footer__gallery d-flex align-items-center">
                      <img
                        src="assets/img/footer/footer-sm-1-1.jpg"
                        alt="rk-theme"
                      />
                      <div className="it-footer__gallery-content">
                        <span className={`${style_2 ? 'color-red' : ''}`}>
                          <i className="far fa-clock"></i>02 Feb, 2023
                        </span>
                        <p>
                          Cras quis tempus diam. In vel orci id sem pretium comm
                        </p>
                      </div>
                    </div>
                    <div className="it-footer__gallery d-flex align-items-center">
                      <img
                        src="assets/img/footer/footer-sm-1-2.jpg"
                        alt="rk-theme"
                      />
                      <div className="it-footer__gallery-content">
                        <span className={`${style_2 ? 'color-red' : ''}`}>
                          <i className="far fa-clock"></i>02 Feb, 2023
                        </span>
                        <p>
                          There is no one who loves pai itsel who seeks after it
                          and
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Subscribe */}
              {/* <div
                className="col-xl-3 col-lg-4 col-md-6 mb-30 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="it-footer__widget footer-col-4">
                  <h4 className="it-footer__widget-title">Subscribe</h4>
                  <div className="it-footer__input-box">
                    <input type="text" placeholder="Keep in touch" />
                    <div
                      className={`it-footer__button-box ${
                        style_2 ? 'color-red' : ''
                      }`}
                    >
                      <button>
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="it-footer__text pb-10">
                    <p>
                      Our expertise, as well as our passion for web <br />
                      design, sets us agenciese
                    </p>
                  </div>
                  <div className="it-footer__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>{' '}
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>{' '}
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>{' '}
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>{' '}
                  </div>
                </div>
              </div> */}
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
