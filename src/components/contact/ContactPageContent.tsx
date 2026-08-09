'use client';

import React, { FormEvent, useState } from 'react';

const ContactPageContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || 'Magistri Dev website'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`
    );
    window.location.href = `mailto:contact@magistri.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section className="md-contact-page">
      <div className="md-container">
        <div className="md-contact-grid">
          <div className="md-contact-info">
            <h1>Let&apos;s build something exceptional.</h1>
            <p>
              Ready to integrate intelligent AI solutions into your workflow?
              Reach out to discuss your project requirements with our consultancy
              team.
            </p>

            <ul className="md-contact-list">
              <li>
                <span className="md-contact-icon" aria-hidden="true">
                  <i className="fa-regular fa-envelope" />
                </span>
                <div>
                  <span>Email Inquiries</span>
                  <a href="mailto:contact@magistri.dev">contact@magistri.dev</a>
                </div>
              </li>
              <li>
                <span className="md-contact-icon" aria-hidden="true">
                  <i className="fa-regular fa-phone" />
                </span>
                <div>
                  <span>Direct Line</span>
                  <a href="tel:+19082512389">+1 908 251 2389</a>
                </div>
              </li>
              <li>
                <span className="md-contact-icon" aria-hidden="true">
                  <i className="fa-regular fa-location-dot" />
                </span>
                <div>
                  <span>Headquarters</span>
                  <strong>New Jersey, USA</strong>
                </div>
              </li>
            </ul>
          </div>

          <div className="md-contact-form-card">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <label className="md-field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label className="md-field">
                <span>Business Email</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="md-field">
                <span>Project Details</span>
                <textarea
                  name="details"
                  rows={6}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  required
                />
              </label>

              <button type="submit" className="md-btn md-btn-primary md-btn-block">
                Submit Inquiry <i className="fa-regular fa-arrow-right" />
              </button>
              <p className="md-contact-note">
                We typically respond within 1-2 business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
