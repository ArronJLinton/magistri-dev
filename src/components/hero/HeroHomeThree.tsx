import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroHomeThree = () => {
  return (
    <section className="md-hero">
      <div className="md-container">
        <div className="md-hero-grid">
          <div className="md-fade-up">
            <p className="md-eyebrow md-eyebrow-blue">
              Software. Apps. Solutions.
            </p>
            <h1>We Build AI Solutions for your Business</h1>
            <p className="md-hero-copy">
              Empowering small to medium businesses with modern, scalable, and
              intelligent software. From custom web applications to AI-driven
              workflows.
            </p>
            <div className="md-hero-actions">
              <Link href="/services" className="md-btn md-btn-primary">
                Explore Services <i className="fa-regular fa-arrow-right" />
              </Link>
              <Link href="/projects" className="md-btn md-btn-outline">
                View Projects
              </Link>
            </div>
          </div>

          <div className="md-hero-media md-fade-up-delay">
            <Image
              src="/assets/img/home/hero-office.jpg"
              alt="Consultant meeting with a client at their warehouse site"
              fill
              priority
              quality={90}
              sizes="(max-width: 991px) 100vw, (max-width: 1400px) 50vw, 900px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeThree;
