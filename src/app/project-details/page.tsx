'use client';

import Breadcrumb from '@/components/common/Breadcrumb';
import ProductDetails from '@/components/details/ProductDetails';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import { Suspense } from 'react';

// export const metadata = {
//   title: 'NUMBER 2',
// };

const ProjectDetails = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb title="Project Details" subtitle="Project Details" />
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetails />
        </Suspense>
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default ProjectDetails;
