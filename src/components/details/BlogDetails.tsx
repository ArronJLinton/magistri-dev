
"use client"

import Link from 'next/link';
import React from 'react';

const BlogDetails = () => {
  return (
    <>
      <div className="postbox__area pt-100 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper">
                <article>
                  <div className="postbox__thumb mb-20 w-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                    <Link href="/blog-details">
                      <img src="assets/img/blog/Details-1-1.jpg" alt="rk-theme" />
                    </Link>
                  </div>
                  <div className="postbox__details-title-box pb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">

                    <h4 className="postbox__details-title mb-20">Easy & Most Powerful Server Platform.</h4>
                    <span>March 23, 2022 _ DEVELOPMENT _ BY Katty Olson _ 2 Comments</span>
                    <p>With worldwide annual spend on digital advertising surpassing $325 billion, it is no surprise that different approaches to online marketing are becoming available. One of these new approaches is performance marketing or digital performance marketing. Keep reading to learn all about performance marketing, from how it works to how it compares to digital marketing. Plus, get insight into the benefits and risks of performance marketing and how it can affect your company’s long-term success and profitability. Performance marketing is an approach to digital marketing or advertising where businesses only pay when a specific result occurs. This result could be a new lead, sale, or other outcome agreed upon by the advertiser and business. Performance marketing involves channels such as affiliate marketing, online advertising.</p>
                  </div>
                  <div className="postbox__content pb-20 wow tpfadeUp" data-wow-duration=".9s"
                    data-wow-delay=".9s">
                    <div className="postbox__content-img mb-60 d-flex justify-content-between">
                      <img src="assets/img/blog/Details-1-2.jpg" alt="rk-theme" />
                      <img src="assets/img/blog/Details-1-3.jpg" alt="rk-theme" />
                    </div>
                    <div className="postbox__text">
                      <h4 className="postbox__details-title">Latest Articles Updated Daily</h4>
                      <p>With worldwide annual spend on digital advertising surpassing $325 billion, it is no surprise that different approaches to online marketing are becoming available. One of these new approaches is performance marketing or digital performance marketing. Keep reading to learn all about performance marketing</p>
                    </div>
                  </div>
                  <div className="postbox__item text-center">
                    <i className="fas fa-quote-right"></i>
                    <p>Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis
                      eros. Cursus libero viverra tempus netus diam vestibulum</p>
                    <span>David Backhum</span>
                  </div>
                  <div className="postbox__details-share-wrapper">
                    <div className="row align-items-center">
                      <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="postbox__details-tag">
                          <span>Posted in:</span>
                          <a href="#">Development</a>
                          <a href="#">Digital</a>
                          <a href="#">Tech</a>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="postbox__details-share text-lg-end">
                          <span>Share:</span>
                          <a href="#"><i className="fa-brands fa-youtube"></i></a>
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__comment">
                    <h3 className="postbox__comment-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.4s">01 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box d-flex align-items-center">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img src="assets/img/testimonial/author-4-5.png" alt="rk-theme" />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-reply d-flex align-items-center justify-content-between">
                              <span className="post-meta">September 6, 2022 at 1:28 pm </span>
                              <a href="#">Reply</a>
                            </div>
                            <div className="postbox__comment-name">
                              <h5>Jonathon Lopez</h5>
                            </div>
                            <p>Porem ipsum dolor sit amet consectetur adipi vestibulum lectus egestas cubilia nam sagittis, nulla posuere habitant</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper-box">
                <div className="sidebar__widge-title-box">
                  <h3 className="sidebar__widget-title">Search</h3>
                </div>
                <div className="sidebar__serch mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="sidebar__search">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="sidebar__search">
                        <input type="text" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details"><img src="assets/img/blog/blog-details-1.jpg" alt="rk-theme" /></Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">Keep Your Business Safe
                              Ensure High</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>Agu 10, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details"><img src="assets/img/blog/blog-details-1-2.jpg" alt="rk-theme" /></Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">Weve been a strategy
                              thought leader for nearly</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>Agu 10, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="rc__post d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details"><img src="assets/img/blog/blog-details-1-3.jpg" alt="rk-theme" /></Link>
                        </div>
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">This Weeks Top Stories
                              About It</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>Agu 10, 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog">Cloud Service</Link>
                      </li>
                      <li>
                        <Link href="/blog">Web Development</Link>
                      </li>
                      <li>
                        <Link href="/blog">Ui/Ux Designing</Link>
                      </li>
                      <li>
                        <Link href="/blog">IT Management</Link>
                      </li>
                      <li>
                        <Link href="/blog">Data Visualization</Link>
                      </li>
                      <li>
                        <Link href="/blog">Security System</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title sm-border">Tag</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <a href="#">IT Technology</a><a href="#">Software</a><a href="#">Design</a><a href="#">Service</a><a href="#">Development</a><a href="#">Digital</a><a href="#">Cyber</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-8">
              <div className="it-contact-2__input-box pb-100">
                <div className="it-contact-2__text pb-15">
                  <h5 className="it-contact-2__title-sm text-black">Lets Get in Touch</h5>
                  <p>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className="it-contact-2__form-box">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input type="text" placeholder="Your Name*" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input type="email" placeholder="Email Address*" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="it-contact-2__input">
                          <input type="email" placeholder="Website*" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="it-contact-2__input">
                          <textarea placeholder="Write Your Message*"></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="it-btn hover-2"><span>Send Your Message</span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;