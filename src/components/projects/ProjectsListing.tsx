import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { projects } from '@/data/projects';

const ProjectsListing = () => {
  const featured =
    projects.find((p) => p.featured) ?? projects[projects.length - 1];
  const gridProjects = projects.filter((p) => p.id !== featured.id);

  return (
    <>
      <section className="md-page-hero">
        <div className="md-container">
          <h1>Selected Work</h1>
          <p>
            Showcasing a portfolio of robust, scalable AI solutions and modern
            web applications built for precision and performance.
          </p>
        </div>
      </section>

      <section className="md-projects-page">
        <div className="md-container">
          <div className="md-projects-page-grid">
            {gridProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/details/${project.id}`}
                className="md-projects-page-card"
              >
                <div className="md-projects-page-media">
                  <Image
                    src={project.desktop}
                    alt={`Desktop mockup of ${project.listingTitle}`}
                    width={720}
                    height={480}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <span className="md-projects-page-meta">{project.metaLabel}</span>
                <h2>{project.listingTitle}</h2>
                <p>{project.listingDescription}</p>
              </Link>
            ))}
          </div>

          <div className="md-projects-featured-row">
            <div className="md-projects-featured-copy">
              <span className="md-projects-page-meta">{featured.metaLabel}</span>
              <h2>{featured.listingTitle}</h2>
              <p>{featured.listingDescription}</p>
              <Link
                href={`/projects/details/${featured.id}`}
                className="md-btn md-btn-outline"
              >
                Explore Project
              </Link>
            </div>
            <div className="md-projects-featured-media">
              <Image
                src={featured.desktop}
                alt={`Desktop mockup of ${featured.listingTitle}`}
                width={800}
                height={520}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md-cta md-cta-compact">
        <div className="md-container">
          <h2>Ready to build?</h2>
          <p>
            Partner with Magistri Dev to engineer intelligent solutions that
            elevate your business.
          </p>
          <Link href="/contact" className="md-btn md-btn-blue">
            <i className="fa-regular fa-comment" />
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectsListing;
