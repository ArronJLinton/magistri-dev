import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: 'Web & Mobile Development',
    icon: 'flaticon-support',
    description:
      'Full-stack solutions engineered for scale. We build responsive web applications and native mobile experiences that drive engagement and streamline operations for modern businesses.',
    learnMore: true,
  },
  {
    title: 'UI/UX Design',
    icon: 'flaticon-web-design',
    description:
      'Clean, minimal, and user-centric interfaces. We design digital products that look premium and function seamlessly.',
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
    <defs>
      <radialGradient id="aiGlow" cx="70%" cy="45%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="210" cy="110" rx="110" ry="90" fill="url(#aiGlow)" />
    <rect
      x="78"
      y="36"
      width="164"
      height="128"
      rx="16"
      stroke="#93C5FD"
      strokeWidth="2.5"
      opacity="0.95"
    />
    <rect
      x="98"
      y="56"
      width="124"
      height="78"
      rx="8"
      stroke="#60A5FA"
      strokeWidth="1.75"
      opacity="0.75"
    />
    <circle cx="160" cy="95" r="18" stroke="#93C5FD" strokeWidth="2" />
    <path
      d="M160 77V62M160 128V113M118 95H102M218 95H202M138 73L128 63M182 117L192 127M182 73L192 63M138 117L128 127"
      stroke="#60A5FA"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <rect x="236" y="88" width="34" height="34" rx="6" stroke="#E2E8F0" strokeWidth="1.75" />
    <path
      d="M244 95H262M244 103H262M244 111H262M241 98V114M253 95V121M265 98V114"
      stroke="#93C5FD"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <rect x="132" y="178" width="56" height="8" rx="4" fill="#2563EB" />
    <circle cx="160" cy="36" r="3.5" fill="#60A5FA">
      <animate
        attributeName="opacity"
        values="0.45;1;0.45"
        dur="2.4s"
        repeatCount="indefinite"
      />
    </circle>
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
            We bridge the gap between complex artificial intelligence and
            practical business applications, delivering sleek, performant, and
            intuitive tools.
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
            <span className="md-ai-pill">Next-Gen</span>
            <h3>AI Agent Development</h3>
            <p>
              Automate complex workflows, enhance customer support, and unlock
              new capabilities with custom-trained artificial intelligence
              models integrated directly into your infrastructure.
            </p>
            <Link href="/contact" className="md-btn md-btn-light">
              Explore AI Solutions <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
          <div className="md-ai-art-wrap">
            <AiArt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHomeThree;
