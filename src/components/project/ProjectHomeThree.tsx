import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { projects } from '@/data/projects';

export { projects as data } from '@/data/projects';

const ProjectHomeThree = () => {
  const featured = projects.find((item) => item.featured) ?? projects[0];
  const secondary = projects.filter((item) => item.id !== featured.id);

  return (
    <section id="projects" className="md-projects">
      <div className="md-container">
        <div className="md-projects-head">
          <div>
            <span className="md-label">Selected Work</span>
            <h2>Proven Solutions for Real Businesses.</h2>
          </div>
          <Link href="/projects" className="md-view-all">
            View All Projects <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>

        <div className="md-featured">
          <Link href={`/projects/details/${featured.id}`}>
            <div className="md-project-media">
              <Image
                src={featured.desktop}
                alt={`Desktop mockup of ${featured.title} website`}
                width={720}
                height={480}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="md-tags">
              {featured.tags?.map((tag) => (
                <span key={tag} className="md-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="md-project-title">{featured.title}</h3>
            <p>{featured.description}</p>
          </Link>

          {featured.quote && (
            <blockquote className="md-quote">
              <div className="md-quote-mark" aria-hidden="true">
                “
              </div>
              <p>{featured.quote}</p>
            </blockquote>
          )}
        </div>

        <div className="md-project-grid">
          {secondary.map((project) => (
            <Link
              key={project.id}
              href={`/projects/details/${project.id}`}
              className="md-project-card"
            >
              <div className="md-project-media">
                <Image
                  src={project.desktop}
                  alt={`Desktop mockup of ${project.title}`}
                  width={640}
                  height={420}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="md-tags">
                {project.tags?.map((tag) => (
                  <span key={tag} className="md-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="md-project-title">{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHomeThree;
