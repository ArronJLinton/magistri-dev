import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderThree from '@/layouts/headers/HeaderThree';
import FooterOne from '@/layouts/footers/FooterOne';
import ServicesPageContent from '@/components/services/ServicesPageContent';

export const metadata = {
  title: 'Services | Magistri Dev',
  description:
    'Intelligent AI capabilities from Magistri Dev — agents, automation, secure analysis, and always-on support.',
};

const ServicesPage = () => {
  return (
    <Wrapper>
      <div className="md-home">
        <HeaderThree />
        <main>
          <ServicesPageContent />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ServicesPage;
