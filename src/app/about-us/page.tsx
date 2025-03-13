

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import FunfactHomeOne from '@/components/funfact/FunfactHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import BusinessAbout from '@/components/business/BusinessAbout';

export const metadata = {
  title: "About Tecch - Technology & IT Solutions Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="About Us" subtitle="About Us" />
        <AboutHomeOne style_2={true} />
        <VideoHomeOne />
        <FunfactHomeOne style_2={true} />
        <ServiceHomeOne style_2={true} />
        <BusinessAbout />
        <CtaHomeOne style_2={true} />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;