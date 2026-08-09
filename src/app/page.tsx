import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import CtaHomeThree from '@/components/cta/CtaHomeThree';
import HeroHomeThree from '@/components/hero/HeroHomeThree';
import ProjectHomeThree from '@/components/project/ProjectHomeThree';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import FeatureHomeThree from '@/components/feature/FeatureHomeThree';

export const metadata = {
  title: 'Magistri Dev',
};

const index = () => {
  return (
    <Wrapper>
      <div className="md-home">
        <HeaderThree />
        <main>
          <HeroHomeThree />
          <ServiceHomeThree />
          <ProjectHomeThree />
          <FeatureHomeThree />
          <CtaHomeThree />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;
