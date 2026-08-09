import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Project } from '@/data/projects';

const ProjectCaseStudy = ({ project }: { project: Project }) => {
  return (
    <>
      <section className="md-case-hero">
        <div className="md-container">
          <div className="md-case-hero-grid">
            <div>
              <span className="md-case-kicker">Case Study</span>
              <h1>{project.title}</h1>
              <p className="md-case-subtitle">{project.subtitle}</p>

              <div className="md-case-meta">
                <div>
                  <span>Client</span>
                  <strong>{project.client}</strong>
                </div>
                <div>
                  <span>Category</span>
                  <strong>{project.category}</strong>
                </div>
              </div>

              {(project.ios || project.android) && (
                <div className="md-case-store-btns">
                  {project.ios && (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noreferrer"
                      className="md-store-btn md-store-btn-dark"
                    >
                      <i className="fa-brands fa-apple" />
                      App Store
                    </a>
                  )}
                  {project.android && (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noreferrer"
                      className="md-store-btn md-store-btn-light"
                    >
                      <i className="fa-brands fa-google-play" />
                      Google Play
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="md-case-hero-media">
              <Image
                src={project.desktop}
                alt={`Desktop mockup of ${project.title}`}
                width={820}
                height={560}
                priority
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {project.platformSection && (
        <section className="md-case-platforms">
          <div className="md-container">
            <div className="md-case-platforms-intro">
              <h2>{project.platformSection.title}</h2>
              <p>{project.platformSection.description}</p>
            </div>

            <div className="md-case-platform-grid">
              <article className="md-case-platform-card">
                <div className="md-case-platform-media">
                  <Image
                    src={project.tablet}
                    alt={`Tablet mockup of ${project.title}`}
                    width={640}
                    height={480}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <h3>{project.platformSection.tabletTitle}</h3>
                <p>{project.platformSection.tabletDescription}</p>
              </article>

              <article className="md-case-platform-card">
                <div className="md-case-platform-media">
                  <Image
                    src={project.mobile}
                    alt={`Mobile mockup of ${project.title}`}
                    width={360}
                    height={720}
                    style={{ width: 'auto', height: '100%', maxHeight: 320 }}
                  />
                </div>
                <h3>{project.platformSection.mobileTitle}</h3>
                <p>{project.platformSection.mobileDescription}</p>
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="md-cta md-cta-compact">
        <div className="md-container">
          <h2>Ready to build your next solution?</h2>
          <p>
            Let’s turn your product vision into software that performs in the
            real world.
          </p>
          <Link href="/contact" className="md-btn md-btn-blue">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectCaseStudy;
