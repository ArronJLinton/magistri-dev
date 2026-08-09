import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Service', href: '/contact' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
  { label: 'Case Studies', href: '/projects' },
];

const FooterOne = ({ style_2 }: { style_2?: boolean }) => {
  if (style_2) {
    return (
      <footer>
        <div className="it-footer__area it-footer__space black-bg z-index">
          <div className="container">
            <div className="flex flex-row justify-around">
              <div className="inline-flex flex-col mb-30">
                <a href="/" className="inline-flex">
                  <Image
                    src="/assets/img/logo/magistri-dev-logo.png"
                    alt="Magistri Dev"
                    width={220}
                    height={120}
                    className="w-1/2 sm:w-full h-[200px] object-contain"
                  />
                </a>
              </div>
              <div className="flex flex-col mb-30">
                <h4 className="it-footer__widget-title">Useful Links</h4>
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
                      <a href="/projects">Our Projects</a>
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
        <div className="it-copyright__area black-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="it-copyright__text text-center">
                  <span>
                    Copyright © {new Date().getFullYear()}{' '}
                    <b className="color-red">Magistri Dev LLC.</b> All Rights
                    Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="md-footer-bar">
      <div className="md-container">
        <div className="md-footer-bar-inner">
          <div className="md-footer-bar-brand">
            <Link href="/" className="md-footer-brand-text">
              Magistri Dev
            </Link>
            <p>
              © {new Date().getFullYear()} Magistri Dev. All rights reserved.
            </p>
          </div>

          <nav className="md-footer-bar-links" aria-label="Footer">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
