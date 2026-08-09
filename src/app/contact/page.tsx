import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderThree from '@/layouts/headers/HeaderThree';
import FooterOne from '@/layouts/footers/FooterOne';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata = {
  title: 'Contact | Magistri Dev',
  description:
    'Contact Magistri Dev to discuss AI solutions, software engineering, and product development.',
};

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="md-home">
        <HeaderThree />
        <main>
          <ContactPageContent />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ContactPage;
