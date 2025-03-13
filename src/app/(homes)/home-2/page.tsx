
// "use client"


import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import AboutHomeTwo from '@/components/about/AboutHomeTwo';
import ServiceHomeTwo from '@/components/service/ServiceHomeTwo';
import NewsletterHomeTwo from '@/components/newsletter/NewsletterHomeTwo';
import ProjectHomeTwo from '@/components/project/ProjectHomeTwo';
import TestimonialHomeTwo from '@/components/testimonial/TestimonialHomeTwo';
import TechnologyHomeTwo from '@/components/technology/TechnologyHomeTwo';
import SolutionHomeTwo from '@/components/solution/SolutionHomeTwo';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import FaqHomeTwo from '@/components/faq/FaqHomeTwo';
import CtaHomeTwo from '@/components/cta/CtaHomeTwo';
import BlogHomeTwo from '@/components/blog/BlogHomeTwo';
import BrandHomeTwo from '@/components/brand/BrandHomeTwo';
import FooterOne from '@/layouts/footers/FooterOne';


// import { Metadata } from 'next';
// export const metadata: Metadata = {
//   title: 'Tecch - Technology & IT Solutions Next js Template',
//   description: 'Tecch - Technology & IT Solutions Next js Template',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// if(typeof window !== 'undefined') {
//   require("bootstrap/dist/js/bootstrap");
// }

const index = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <HeroHomeTwo />
        <AboutHomeTwo />
        <ServiceHomeTwo />
        <NewsletterHomeTwo />
        <ProjectHomeTwo />
        <TestimonialHomeTwo />
        <TechnologyHomeTwo />
        <SolutionHomeTwo />
        <TeamHomeTwo />
        <FaqHomeTwo />
        <CtaHomeTwo />
        <BlogHomeTwo />
        <BrandHomeTwo />
      </main>
      <FooterOne style_2={true} />
    </Wrapper>
  );
};

export default index;