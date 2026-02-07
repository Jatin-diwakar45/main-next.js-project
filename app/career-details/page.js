"use client";

import React, { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const CareerDetailsPage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <main>
            <Breadcrumb title="Career Details" activePage="Career Details" />

            <section className="career-details pt-120 pb-120">
                <div className="container">
                    <div className="cp-details-wrap">
                        <div className="cp-manager_info">
                            <h2 className="details-content-title mb-30" style={{ fontSize: '32px' }}>Technical project manager - (Full-time)</h2>
                            <ul className="xb-details-content list-unstyled mb-35">
                                <li className="mb-2"><strong>Department :</strong> Technical Project Manager</li>
                                <li className="mb-2"><strong>No. of Openings :</strong> (3)</li>
                                <li className="mb-2"><strong>FullJob Type :</strong> -Time</li>
                                <li className="mb-2"><strong>Location :</strong> Plot No. 4, Mahaveer Town, Maruti City Road, Kahrai Mod Agra, UP</li>
                                <li className="mb-2"><strong>Deadline :</strong> December 10, 2025</li>
                                <li className="mb-2"><strong>Experience Required :</strong> 5+ Years</li>
                            </ul>
                            <p className="mb-30">
                                We’re looking for a Technical Project Manager and knowledgeable Product Designer to join
                                our technical team in Warsaw, Poland. You’ll be expected to utilize bleeding-edge
                                technology and robust techniques. You should be an excellent communicator and
                                comfortable managing multiple tasks. you also need to be a team player and have a
                                problem-solving aptitude.
                            </p>
                            <p>
                                Working quickly and creatively should come naturally to you, as well as being an
                                innovative problem-solver who takes pride in producing logical, simple, and effective
                                solutions to what are often very new and complex issues.
                            </p>
                        </div>

                        <div className="xb-details-item mt-70">
                            <h3 className="details-title" style={{ fontSize: '24px' }}>What you'll get to do...</h3>
                            <ul className="content-list mt-25 list-unstyled">
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Refactor current code to service-oriented architecture.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Collaborate with a unique background of engineering, product, and operations team members to deliver the best solution for our customers.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Solve technical problems that few have solved before – no one else helps local businesses the way we do.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Participate in the decision-making progress – we want you to speak up.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Mentor your team members to share your passion for software, your appreciation for engineering field, and your respect.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Take on the challenge of making what you build higher quality, faster, and more scalable.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> Participate in on-call rotation.</li>
                            </ul>
                        </div>

                        <div className="xb-details-item mt-70">
                            <h3 className="details-title" style={{ fontSize: '24px' }}>Your experience should include...</h3>
                            <ul className="content-list mt-25 list-unstyled">
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> 6+ years of previous professional Proficient Project Management experience.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Technical Expertise:</strong> Solid understanding for effective communication.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Stakeholder Management:</strong> Track record of ensuring alignment and success.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Agile Methodologies:</strong> Hands-on experience in Agile frameworks.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Risk Management:</strong> Skill in identifying and mitigating project risks.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Team Leadership:</strong> Ability to motivate diverse teams.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Communication Skills:</strong> Strong ability to convey technical concepts.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Problem-Solving:</strong> Proactive approach to implement solutions.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> <strong>Quality Assurance:</strong> Experience in ensuring deliverable standards.</li>
                            </ul>
                        </div>

                        <div className="xb-details-item mt-70">
                            <h3 className="details-title" style={{ fontSize: '24px' }}>You might also have...</h3>
                            <ul className="content-list mt-25 list-unstyled">
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-plus-circle text-primary me-2 mt-1"></i> Experience with AWS.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-plus-circle text-primary me-2 mt-1"></i> Experience building CI/CD and server/deployment automation solutions</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-plus-circle text-primary me-2 mt-1"></i> Experience with open-source puppet, infrastructure-as-code.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-plus-circle text-primary me-2 mt-1"></i> Passion for technology.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-plus-circle text-primary me-2 mt-1"></i> You have high standards and want to make a difference with your work.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-plus-circle text-primary me-2 mt-1"></i> You are always trying to improve.</li>
                            </ul>
                        </div>

                        <div className="xb-details-item mt-70">
                            <h3 className="details-title" style={{ fontSize: '24px' }}>Great benefits...</h3>
                            <ul className="content-list mt-25 list-unstyled">
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-gift text-primary me-2 mt-1"></i> Company-wide 401(k) plan.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-gift text-primary me-2 mt-1"></i> Life & disability insurance offered.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-gift text-primary me-2 mt-1"></i> Competitive compensation—salary, bonus, equity</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-gift text-primary me-2 mt-1"></i> Medical, dental, and vision; flex spending account.</li>
                                <li className="mb-2 d-flex align-items-start"><i className="fas fa-gift text-primary me-2 mt-1"></i> Flexible paid time off & sick leave.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="xb-contact-form details-contact-form xb-border mt-100 p-40 rounded">
                        <div className="form-heading mb-40">
                            <h3 className="title" style={{ fontSize: '28px' }}>Apply for this job</h3>
                            <p className="sub-title">Kloudon Technologies doesn’t accept unsolicited resumes from recruiters or employment agencies.</p>
                        </div>
                        <form action="#!" className="xb-contact-input-form details-contact-input-form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mt-20">
                                    <label htmlFor="author-name">Your Name*</label>
                                    <div className="xb-input-field">
                                        <input id="author-name" type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-20">
                                    <label htmlFor="author-email">Email*</label>
                                    <div className="xb-input-field">
                                        <input id="author-email" type="email" className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-20">
                                    <label htmlFor="author-phone">Phone*</label>
                                    <div className="xb-input-field">
                                        <input id="author-phone" type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-20">
                                    <label htmlFor="author-address">Address*</label>
                                    <div className="xb-input-field">
                                        <input id="author-address" type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 mt-20">
                                    <label htmlFor="massage">Message</label>
                                    <div className="xb-input-field xb-massage-field">
                                        <textarea id="massage" className="form-control" style={{ minHeight: '150px' }} required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="cp-contact-bottom ul_li_between mt-70">
                                <div className="xb-upload_file">
                                    <label htmlFor="file">Upload your resume / CV</label>
                                    <input id="file" type="file" className="form-control-file mb-2" />
                                    <p className="xb-content mb-0">
                                        <span>Accepted file types :</span> pdf, doc, jpg, Max. <span>file size:</span> 15 MB.
                                    </p>
                                </div>
                                <div className="form-submit-btn mt-20">
                                    <button className="thm-btn agency-btn" type="submit">
                                        <span className="text">Submit now</span>
                                        <span className="arrow">
                                            <span className="arrow-icon">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                                    <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                                    <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                                    <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                                    <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                                    <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                                    <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CareerDetailsPage;
