import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderThree from '@/layouts/headers/HeaderThree';
import FooterOne from '@/layouts/footers/FooterOne';
import ProjectsListing from '@/components/projects/ProjectsListing';

export const metadata = {
  title: 'Projects | Magistri Dev',
  description:
    'Selected work from Magistri Dev — AI solutions, modern web apps, and digital platforms.',
};

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className="md-home">
        <HeaderThree />
        <main>
          <ProjectsListing />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
