import Image from 'next/image';
import React from 'react';

const points = [
  'Your trusted partner in navigating the digital landscape.',
  'Empowering businesses with seamless, scalable technology.',
  'Bringing innovation and expertise to every project we start.',
];

const AboutHomeThree = () => {
  return (
    <section id="about-us" className="md-about">
      <div className="md-container">
        <div className="md-about-grid">
          <div>
            <h2>
              We deliver reliable, tailored software solutions to drive your
              business forward
            </h2>
            <ul>
              {points.map((point) => (
                <li key={point}>
                  <span className="md-check" aria-hidden="true">
                    <i className="fa-solid fa-check" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md-about-media">
            <Image
              src="/assets/img/about/about-5-1.jpg"
              alt="Team collaborating around a workspace table"
              width={640}
              height={820}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeThree;
