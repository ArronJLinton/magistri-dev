import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroHomeThree = () => {
  return (
    <section className="md-hero">
      <div className="md-container">
        <div className="md-hero-grid">
          <div className="md-fade-up">
            <p className="md-eyebrow">Engagement. Results. Success.</p>
            <h1>We Build Software Solutions for your Business</h1>
            <p className="md-hero-copy">
              Empowering small to medium businesses with high-performance,
              scalable, and reliable technology tailored to your goals.
            </p>
            <div className="md-hero-actions">
              <Link href="/#services" className="md-btn md-btn-primary">
                Explore Services <i className="fa-regular fa-arrow-right" />
              </Link>
              <Link href="/projects" className="md-btn md-btn-outline">
                View Projects
              </Link>
            </div>
          </div>

          <div className="md-hero-media md-fade-up-delay">
            <Image
              src="/assets/img/slider/slider-4-1.jpg"
              alt="Team collaborating around software dashboards"
              fill
              priority
              sizes="(max-width: 991px) 100vw, 520px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeThree;
