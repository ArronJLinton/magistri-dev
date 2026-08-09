import Link from 'next/link';
import React from 'react';

const CtaHomeThree = () => {
  return (
    <section className="md-cta">
      <div className="md-container md-fade-up">
        <h2>Ready to build your next solution?</h2>
        <p>
          Partner with Magistri Dev to design, ship, and scale software that
          moves your business forward.
        </p>
        <Link href="/contact" className="md-btn md-btn-blue">
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CtaHomeThree;
