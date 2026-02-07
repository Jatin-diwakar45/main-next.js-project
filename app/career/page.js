"use client";

import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

const CareerPage = () => {
    const [filter, setFilter] = useState('*');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    const jobs = [
        { id: 1, title: 'Machine learning engineer.', category: ['cat2', 'cat4'] },
        { id: 2, title: 'NLP (natural language processing) engineer.', category: ['cat1', 'cat2'] },
        { id: 3, title: 'Technical project manager (AI).', category: ['cat1', 'cat3'] },
        { id: 4, title: 'Conversational UX designer.', category: ['cat3', 'cat4'] },
        { id: 5, title: 'HR & talent manager (AI Sector).', category: ['cat4', 'cat1'] },
    ];

    const filteredJobs = filter === '*' ? jobs : jobs.filter(job => job.category.includes(filter));

    return (
        <main>
            <Breadcrumb title="Careers" activePage="Careers" />

            {/* Begin Today Section */}
            <section className="career pt-120 pb-120">
                <div className="container">
                    <div className="xb-career-btn text-center">
                        <Link href="/contact" className="thm-btn agency-btn">
                            <span className="text">Begin Today with us</span>
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
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="hiring-process pt-140 pb-150">
                <div className="container">
                    <div className="row mt-none-50 align-items-center">
                        <div className="col-lg-6 mt-50">
                            <div className="sec-title sec-title-center mb-35">
                                <span className="sub-title mb-20">Hiring Process</span>
                                <h2 className="title title-line_height">Our hiring process</h2>
                            </div>
                            <div className="xb-faq career-faq">
                                <ul className="accordion_box clearfix list-unstyled">
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <span className="number">01</span> _Send your CV
                                            <span className="arrow"><span></span></span>
                                        </div>
                                        <div className="acc_body current">
                                            <div className="content">
                                                <p>Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <span className="number">02</span> _Initial screening
                                            <span className="arrow"><span></span></span>
                                        </div>
                                        <div className="acc_body">
                                            <div className="content">
                                                <p>Our talent acquisition team will review your application and reach out if your profile matches our requirements.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <span className="number">03</span> _Job interview
                                            <span className="arrow"><span></span></span>
                                        </div>
                                        <div className="acc_body">
                                            <div className="content">
                                                <p>Engage in a conversation with our team to discuss your experience, skills, and cultural fit.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <span className="number">04</span> _Test task
                                            <span className="arrow"><span></span></span>
                                        </div>
                                        <div className="acc_body">
                                            <div className="content">
                                                <p>Showcase your technical abilities through a practical task tailored to your role.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <span className="number">05</span> _You’re hired!
                                            <span className="arrow"><span></span></span>
                                        </div>
                                        <div className="acc_body">
                                            <div className="content">
                                                <p>Welcome to the team! We'll provide all the necessary onboarding to get you started on your journey with us.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-50">
                            {/* Process Image Placeholder */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Board */}
            <section className="job_section pt-90 pb-150 bg_img" style={{ backgroundImage: 'url(/assets/img/bg/job-bg.png)' }}>
                <div className="container">
                    <div className="sec-title sec-title-center fea-sec-title text-center mb-40">
                        <span className="sub-title">Open Positions</span>
                        <h2 className="title">Be part of the team</h2>
                    </div>
                    <div className="text-center">
                        <div className="career-menu ul_li">
                            <button className={filter === '*' ? 'active' : ''} onClick={() => setFilter('*')}>View all</button>
                            <button className={filter === 'cat1' ? 'active' : ''} onClick={() => setFilter('cat1')}>Technical</button>
                            <button className={filter === 'cat2' ? 'active' : ''} onClick={() => setFilter('cat2')}>Business</button>
                            <button className={filter === 'cat3' ? 'active' : ''} onClick={() => setFilter('cat3')}>Marketing</button>
                            <button className={filter === 'cat4' ? 'active' : ''} onClick={() => setFilter('cat4')}>Leadership</button>
                        </div>
                    </div>
                    <div className="career-nav-wrapper grid row g-4">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="col-lg-6">
                                <div className="xb-career-item grid-item xb-border h-100 d-flex flex-column justify-content-between">
                                    <div className="xb-item--content">
                                        <h2 className="xb-item--title">
                                            <Link href="/career-details">
                                                {job.title}
                                            </Link>
                                        </h2>
                                    </div>
                                    <div className="team-btn">
                                        <Link href="/career-details" className="thm-btn agency-btn">
                                            <span className="text">view job</span>
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
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <div className="container pb-120">
                <div className="xb-video">
                    <video src="https://www.pexels.com/download/video/7693469/" loop muted playsInline autoPlay poster="/assets/img/career/img06.jpg" style={{ width: '100%', borderRadius: '20px' }}></video>
                </div>
            </div>
        </main>
    );
};

export default CareerPage;
