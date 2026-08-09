import React from 'react';
import { notFound } from 'next/navigation';
import Wrapper from '@/layouts/Wrapper';
import HeaderThree from '@/layouts/headers/HeaderThree';
import FooterOne from '@/layouts/footers/FooterOne';
import ProjectCaseStudy from '@/components/projects/ProjectCaseStudy';
import { getProjectById, projects } from '@/data/projects';

type PageProps = {
  params: { id: string };
};

export const generateStaticParams = () =>
  projects.map((project) => ({ id: String(project.id) }));

export const generateMetadata = ({ params }: PageProps) => {
  const project = getProjectById(params.id);
  if (!project) {
    return { title: 'Project Not Found | Magistri Dev' };
  }
  return {
    title: `${project.title} | Magistri Dev`,
    description: project.description,
  };
};

const ProjectDetailsPage = ({ params }: PageProps) => {
  const project = getProjectById(params.id);
  if (!project) {
    notFound();
  }

  return (
    <Wrapper>
      <div className="md-home">
        <HeaderThree />
        <main>
          <ProjectCaseStudy project={project!} />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ProjectDetailsPage;
