import Breadcrumb from '@/components/common/Breadcrumb';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import Project from '@/components/project/Project';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'SAME PROJECT',
};

const index = () => {
  console.log('123g2u1yg3lw12gyo783y2ps0xbyt');
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Our Project" subtitle="Our Project" />
        <Project />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;
