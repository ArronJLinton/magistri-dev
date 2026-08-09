import React from 'react';

const features = [
  {
    title: 'Best Business Solution',
    description: 'Tech that fits your business—built right, built to last.',
    icon: 'fa-regular fa-lightbulb',
  },
  {
    title: 'Business Growth',
    description: 'Software solutions designed to accelerate your growth.',
    icon: 'fa-regular fa-chart-line',
  },
  {
    title: 'Brand Awareness',
    description: 'Helping your customers discover and trust your brand.',
    icon: 'fa-regular fa-globe',
  },
];

const FeatureHomeThree = () => {
  return (
    <section className="md-features">
      <div className="md-container">
        <div className="md-features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="md-feature-item">
              <div className="md-feature-icon">
                <i className={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHomeThree;
