import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: 'Web & Mobile Development',
    icon: 'flaticon-support',
    description:
      'Custom websites and mobile apps built for performance, usability, and long-term growth.',
    learnMore: true,
  },
  {
    title: 'UI/UX Design',
    icon: 'flaticon-web-design',
    description:
      'Clean interfaces and thoughtful experiences that help users convert and stay engaged.',
    learnMore: false,
  },
];

const AiArt = () => (
  <svg
    className="md-ai-art"
    viewBox="0 0 320 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="70"
      y="28"
      width="180"
      height="150"
      rx="18"
      stroke="#60A5FA"
      strokeWidth="3"
      opacity="0.9"
    />
    <rect
      x="92"
      y="50"
      width="136"
      height="90"
      rx="10"
      stroke="#93C5FD"
      strokeWidth="2"
      opacity="0.7"
    />
    <circle cx="160" cy="95" r="22" stroke="#60A5FA" strokeWidth="2.5" />
    <path
      d="M160 73V55M160 137V117M117 95H98M222 95H203M132 67L120 55M188 123L200 135M188 67L200 55M132 123L120 135"
      stroke="#60A5FA"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="130" y="188" width="60" height="10" rx="5" fill="#2563EB" />
    <path
      d="M40 170C70 130 100 150 130 120C160 90 190 110 220 80C250 50 280 70 300 40"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.45"
    />
  </svg>
);

const ServiceHomeThree = () => {
  return (
    <section id="services" className="md-capabilities">
      <div className="md-container">
        <div className="md-section-intro">
          <span className="md-label">Our Capabilities</span>
          <h2>Scalable AI & Software Engineering</h2>
          <p>
            From product design to intelligent automation, we help teams ship
            software that is practical, maintainable, and ready to scale.
          </p>
        </div>

        <div className="md-service-grid">
          {services.map((service) => (
            <article key={service.title} className="md-service-card">
              <div className="md-service-card-top">
                <span className="md-service-icon">
                  <i className={service.icon} />
                </span>
                {service.learnMore && (
                  <Link href="/contact" className="md-learn-more">
                    Learn More <i className="fa-regular fa-arrow-right" />
                  </Link>
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="md-ai-banner">
          <div>
            <div className="md-ai-kicker">
              <span />
              Next-Gen AI Agents
            </div>
            <h3>AI Agent Development</h3>
            <p>
              Design and deploy intelligent agents that automate workflows,
              support customers, and unlock faster decision-making across your
              business.
            </p>
            <Link href="/contact" className="md-btn md-btn-light">
              Browse AI Solutions <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
          <AiArt />
        </div>
      </div>
    </section>
  );
};

export default ServiceHomeThree;
