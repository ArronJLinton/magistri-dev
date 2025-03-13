

import Breadcrumb from '@/components/common/Breadcrumb';
import Contact from '@/components/contact/Contact';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import ContactForm from '@/components/form/ContactForm';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Contact Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Contact" subtitle="Contact" />
        <Contact />
        <ContactForm />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />      
    </Wrapper>
  );
};

export default index;