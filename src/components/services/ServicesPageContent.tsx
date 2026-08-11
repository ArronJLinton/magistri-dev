import Link from 'next/link';
import React from 'react';

const capabilities = [
  {
    title: '24/7 Receptionist',
    description: 'Answer calls and messages around the clock so no lead gets missed.',
    icon: 'fa-regular fa-headset',
  },
  {
    title: 'Scheduling',
    description: 'Book appointments automatically and keep calendars up to date.',
    icon: 'fa-regular fa-calendar',
  },
  {
    title: 'Sales Assistant',
    description: 'Qualify leads and follow up so your team can close more deals.',
    icon: 'fa-regular fa-bolt',
  },
  {
    title: 'FAQ Support',
    description: 'Handle common questions instantly and free up your staff.',
    icon: 'fa-regular fa-comments',
  },
  {
    title: 'Order Tracking',
    description: 'Give customers clear updates on status without the back-and-forth.',
    icon: 'fa-regular fa-box',
  },
  {
    title: 'Lead Capture',
    description: 'Collect and organize new inquiries so nothing falls through.',
    icon: 'fa-regular fa-user-plus',
  },
];

const steps = [
  {
    number: '1',
    title: 'Discovery',
    description:
      'We analyze your business processes, identify bottlenecks, and define clear objectives for AI implementation.',
  },
  {
    number: '2',
    title: 'Strategy',
    description:
      'Developing a comprehensive roadmap, selecting the right models, and designing the architecture tailored to your needs.',
  },
  {
    number: '3',
    title: 'Implementation',
    description:
      'Building, training, and integrating the custom AI solutions seamlessly into your existing operational tech stack.',
  },
  {
    number: '4',
    title: 'Optimization',
    description:
      'Continuous monitoring, human-in-the-loop refinement, and scaling capabilities as your business grows.',
  },
];

const ServicesPageContent = () => {
  return (
    <>
      <section className="md-services-hero">
        <div className="md-container">
          <div className="md-services-hero-intro">
            <h1>Intelligent Capabilities</h1>
            <p>
              From small startups to expanding enterprises, businesses trust our
              AI architects to handle complex workflows, analyze data securely,
              and support growth with professional precision.
            </p>
          </div>

          <div className="md-services-capability-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="md-services-capability-card">
                <span className="md-services-capability-icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="md-services-process">
        <div className="md-container">
          <div className="md-services-process-intro">
            <h2>How It Works in 4 Simple Steps</h2>
            <p>
              Our structured consultancy process ensures a smooth transition
              from legacy systems to intelligent automation.
            </p>
          </div>

          <div className="md-services-steps">
            {steps.map((step) => (
              <article key={step.number} className="md-services-step-card">
                <span className="md-services-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="md-services-cta-wrap">
        <div className="md-container">
          <div className="md-services-cta">
            <h2>The future of operations is here. Are you ready?</h2>
            <p>
              Join the growing list of companies who count on Magistri Dev to
              build intelligent, scalable solutions that drive real business
              value.
            </p>
            <div className="md-services-cta-actions">
              <Link href="/contact" className="md-btn md-btn-blue">
                Schedule a Consultation
              </Link>
              <Link href="/projects" className="md-btn md-btn-ghost">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPageContent;
