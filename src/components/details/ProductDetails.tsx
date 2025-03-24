import Link from 'next/link';
import React from 'react';
import { data } from '@/components/project/ProjectHomeThree';
import { useSearchParams } from 'next/navigation';

interface ProductDetailsProps {
  projectData: {
    id: number;
    title: string;
    mobile: string;
    tablet: string;
    desktop: string;
    ios?: string;
    android?: string;
    category?: string;
    client?: string;
  };
}

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const projectData = JSON.parse(searchParams.get('data') || '{}');
  console.log(projectData);
  return (
    <>
      <div className="it-project-details__area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-project-details__wrapper">
                <div className="it-project-details__thumb mb-20 mt-10">
                  {projectData.ios && projectData.android ? (
                    <div className="flex flex-row px-4 gap-16">
                      <img
                        src={projectData.mobile}
                        alt={`${projectData.title} - Mobile View`}
                        className="w-1/3 h-auto"
                      />
                      <div className="flex justify-center items-center gap-4 mt-4">
                        <a
                          href={projectData.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/appstores/ios.png"
                            alt="iOS App Store"
                            className="w-[150px] md:w-[400px] h-auto md:h-[100px]"
                          />
                        </a>
                        <a
                          href={projectData.android}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/appstores/android.png"
                            alt="Google Play Store"
                            className="w-[150px] md:w-[400px] h-auto md:h-[100px]"
                          />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <img src={projectData.desktop} alt={projectData.title} />
                  )}
                </div>
                <div className="it-project-details__thumb-text-box mb-45 d-flex align-items-center justify-content-between">
                  <div className="it-project-details__thumb-text">
                    <span>Project:</span>
                    <strong>{projectData.title}</strong>
                  </div>
                  {/* <div className="it-project-details__thumb-text">
                    <span>Published:</span>
                    <strong>April 20, 2023</strong>
                  </div> */}
                  <div className="it-project-details__thumb-text">
                    <span>Category:</span>
                    <strong>{projectData.category}</strong>
                  </div>
                  <div className="it-project-details__thumb-text">
                    <span>Client:</span>
                    <strong>{projectData.client}</strong>
                  </div>
                  {/* <div className="it-team-details__social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter twitter"></i>
                    </a>
                  </div> */}
                </div>
                <div className="it-project-details__text">
                  <h5 className="postbox__details-title mb-20">
                    {projectData.title}
                  </h5>
                  {/* <p>
                    With worldwide annual spend on digital advertising
                    surpassing $325 billion, its no surprise that different
                    approaches to online marketing are becoming available. One
                    of these new approache marketing or digital performance
                    marketing. Keep reading to learn all about performance
                    marketing, from how it works to how it compares to digital
                    marketing. Plus, get insight into the benefits and risks of
                    performance marketing and how it can affect your companys
                    long-term success and profitability. Performance marketing
                    is an approach to digital marketing or advertising where
                    businesses only pay when a specific result occurs. This
                    result could be a new lead, sale, or other outcome agreed
                    upon by the advertiser and business. Performance marketing
                    involves channels such as affiliate marketing, online
                  </p>
                  <p>
                    The main thing that separates performance marketing from
                    other types of marketing is the way businesses pay for their
                    campaigns. Rather than paying up front or by month,
                    advertisers pay when a specific action takes place. You
                    might enlist a marketing companys help to bring your
                    branding to more individuals by having these marketers
                    promote your business to prospective customers. The hope is
                    that users will complete a form to learn more about your
                    company and become a lead.
                  </p> */}
                </div>
                {projectData.ios && projectData.android ? (
                  <div className="flex justify-between mt-10">
                    <div className="w-2/3 px-4">
                      <img
                        src={projectData.desktop}
                        alt={`${projectData.title} - Desktop View`}
                      />
                      <p className="text-center mt-2">Desktop View</p>
                    </div>
                    <div className="w-1/2 px-4">
                      <img
                        src={projectData.tablet}
                        alt={`${projectData.title} - Tablet View`}
                      />
                      <p className="text-center mt-2">Tablet View</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between mt-10">
                    <div className="w-1/2 px-4">
                      <img
                        src={projectData.mobile}
                        alt={`${projectData.title} - Mobile View`}
                      />
                      <p className="text-center mt-2">Mobile View</p>
                    </div>
                    <div className="w-1/2 px-4">
                      <img
                        src={projectData.tablet}
                        alt={`${projectData.title} - Tablet View`}
                      />
                      <p className="text-center mt-2">Tablet View</p>
                    </div>
                  </div>
                )}
                <div className="it-project-3__section-wrap pt-120 mb-60">
                  <div className="row align-items-end">
                    <div className="col-xl-12">
                      <div className="it-project-3__title-box text-center">
                        <span className="it-section-subtitle-2">
                          OUR SHOWCASE
                        </span>
                        <h4 className="it-section-title">See More Projects</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {data
                    .filter((project) => project.id !== projectData.id)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30"
                      >
                        <div className="it-project-5__item fix">
                          <img src={project.desktop} alt={project.title} />
                          <div className="it-project-5__text">
                            <Link
                              href={{
                                pathname: '/project-details',
                                query: { data: JSON.stringify(project) },
                              }}
                            >
                              <i className="fa-sharp fa-regular fa-arrow-right"></i>
                            </Link>
                            <span>Project</span>
                            <h6>{project.title}</h6>
                          </div>
                          <div className="it-project-5__shape">
                            <img
                              src="assets/img/project/shape-5-1.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
