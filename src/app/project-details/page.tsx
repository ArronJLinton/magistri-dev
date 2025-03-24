'use client';

import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductDetails from '@/components/details/ProductDetails';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { data as projectsData } from '@/components/project/ProjectHomeThree';

// export const metadata = {
//   title: 'NUMBER 2',
// };

const ProjectDetails = () => {
  const searchParams = useSearchParams();
  const projectData = JSON.parse(searchParams.get('data') || '{}');
  console.log(projectData);
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb title="Project Details" subtitle="Project Details" />
        <ProductDetails projectData={projectData} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default ProjectDetails;
