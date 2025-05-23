"use client";

import Link from "next/link";
import NavMenu from "./Menu/nav-menu";
import React, { useState } from "react";
import useSticky from "@/hooks/use-sticky";
import Search from "@/components/common/Search";
import Offcanvus from "@/components/common/Offcanvus";

const HeaderOne = () => {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className="">
        {/* <!-- header-area-start --> */}
        {/* <div className="it-header-top__area theme-bg pt-10 pb-10">
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                <div className="it-header-top__social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-6">
                <div className="it-header-top__left-box text-sm-start text-center">
                  <span>
                    <i className="fa-light fa-envelope"></i>
                    <a href="mailto:info.rk-theme.com">info.rktheme.com</a>
                  </span>
                  <span className="d-none d-md-inline-block">
                    <i className="fa-light fa-phone-rotary"></i>
                    <a href="tel:+999008756">+ 999008756</a>
                  </span>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 d-none d-sm-block">
                <div className="it-header-top__right-box text-end">
                  <button
                    onClick={() => setOpen(!open)}
                    className="search-open-btn"
                  >
                    <i className="fa-sharp fa-light fa-magnifying-glass"></i>
                  </button>
                  <Link href="/cart">
                    <i className="fa-sharp fa-light fa-cart-shopping"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          id="header-sticky"
          className={`it-header__area ${sticky ? "header-sticky" : ""}`}
        >
          <div className="mx-auto flex flex-row">
            {/* <div className="it-header__logo d-none d-xl-block"> */}
            <Link href="/">
              <img
                className="hidden md:block w-full h-[200px] object-contain"
                src="assets/img/logo/magistri-dev-logo.png"
                alt="rk-theme"
              />
            </Link>
            {/* </div> */}
            <div className="flex flex-row justify-between md:justify-end items-center w-full">
              <div className="flex">
                <div className="it-header__menu hidden md:block text-center">
                  <nav className="it-menu-content">
                    <NavMenu />
                  </nav>
                </div>
                <div className="it-header__main-logo block md:hidden">
                  <Link href="/">
                    <img
                      src="assets/img/logo/magistri-dev-logo-mobile.png"
                      alt="rk-theme"
                      className="w-auto h-[150px] object-contain"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="it-header__right-box">
                  {/* <div className="it-header__btn d-none d-md-block">
                    <a className="it-btn" href="#">
                      <span>Get solution</span>
                    </a>
                  </div> */}
                  <div className="it-header__bar block md:hidden ">
                    <button className="it-menu-bar">
                      <span onClick={() => setOpenSidebar(!openSidebar)}>
                        <i className="fa-regular fa-bars"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area-end --> */}
      </header>

      <Search open={open} setOpen={setOpen} />
      <Offcanvus openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default HeaderOne;
