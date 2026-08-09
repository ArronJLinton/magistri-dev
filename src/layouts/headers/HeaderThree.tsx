'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/components/common/Offcanvus';

const navLinks = [
  { title: 'Services', href: '/#services', match: 'services' },
  { title: 'Projects', href: '/projects', match: 'projects' },
  { title: 'Contact', href: '/contact', match: 'contact' },
];

const HeaderThree = () => {
  const { sticky } = useSticky();
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);

  const isActive = (match: string) => {
    if (match === 'projects') {
      return pathname === '/projects' || pathname.startsWith('/projects/');
    }
    if (match === 'contact') {
      return pathname === '/contact';
    }
    return false;
  };

  return (
    <>
      <header className={`md-home-header ${sticky ? 'is-sticky' : ''}`}>
        <div className="md-container">
          <div className="md-header-inner">
            <Link href="/" className="md-logo" aria-label="Magistri Dev">
              <Image
                src="/assets/img/logo/magistri-dev-logo-mobile.png"
                alt=""
                aria-hidden="true"
                width={420}
                height={126}
                priority
              />
              <span className="md-logo-text">Magistri Dev</span>
            </Link>

            <div className="md-header-right">
              <nav className="md-nav" aria-label="Primary">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={isActive(link.match) ? 'is-active' : undefined}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>

              <div className="md-header-actions">
                <Link
                  href="/contact"
                  className="md-btn md-btn-primary d-none d-md-inline-flex"
                >
                  Get Started
                </Link>
                <button
                  type="button"
                  className="md-menu-btn"
                  aria-label="Open menu"
                  onClick={() => setOpenSidebar(true)}
                >
                  <i className="fa-regular fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default HeaderThree;
