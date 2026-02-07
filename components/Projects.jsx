"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px', // Center-ish trigger area
            threshold: 0.2
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = itemRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        itemRefs.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => {
            itemRefs.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const setItemRef = (el, index) => {
        itemRefs.current[index] = el;
    };

    return (
        <section className="project bg_img pt-135 pb-150" data-background="/assets/img/bg/project-bg.png" style={{ backgroundImage: "url('/assets/img/bg/project-bg.png')" }}>
            <div className="container">
                <div className="sec-title custom-sec-title xb-sec-padding text-center">
                    <span className="sub-title">Our Projects</span>
                    <h2 className="title">Results that speak for our hard work.</h2>
                    <div className="xb-heading-btn d-inline">
                        <Link className="thm-btn agency-btn" href="/project">
                            <span className="text">view more projects</span>
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
            <div className="container mxw-1800">
                <div className="xb-project-wrap" ref={containerRef}>
                    <div className="xb-project-pagination-wrap">
                        <ul className="xb-project-pagination">
                            {[1, 2, 3, 4].map((num, idx) => (
                                <li key={num} className={activeIndex === idx ? 'active' : ''}>{num}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="xb-project-inner">
                        {[
                            {
                                img: "/assets/img/project/project-img01.jpg",
                                title: "Chatbot and NLP projects..",
                                content: "We design advanced chatbots and NLP systems that deliver natural interactions. Our AI streamlines communication across customer support and document analysis while improving efficiency and user experience.",
                                techs: ["project-icon01.svg", "project-icon02.svg", "project-icon03.svg"]
                            },
                            {
                                img: "/assets/img/project/project-img02.jpg",
                                title: "E-commerce & marketing..",
                                content: "We design intelligent AI systems that enhance sales performance and customer engagement through personalized recommendations, dynamic pricing, and behavior-driven targeting.",
                                techs: ["project-icon01.svg", "project-icon08.svg", "project-icon09.svg"]
                            },
                            {
                                img: "/assets/img/project/project-img03.jpg",
                                title: "Computer vision projects..",
                                content: "We build advanced computer vision systems that interpret visual data to automate inspections, detect patterns, and enhance business accuracy and decision-making.",
                                techs: ["project-icon10.svg", "project-icon11.svg", "project-icon01.svg"]
                            },
                            {
                                img: "/assets/img/project/project-img04.jpg",
                                title: "Data science analytics..",
                                content: "Convert data into decisions with AI-driven analytics—predictive models, real-time dashboards, and confident business intelligence.",
                                techs: ["project-icon08.svg", "project-icon12.svg", "project-icon13.svg"]
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => setItemRef(el, index)}
                                className="xb-project-item bg_img"
                                data-background={item.img}
                                style={{ backgroundImage: `url('${item.img}')` }}
                            >
                                <div className="xb-project-content">
                                    <div className="xb-item--inner xb-border">
                                        <h2 className="xb-item--title">{item.title}</h2>
                                        <p className="xb-item--content">{item.content}</p>
                                        <div className="xb-item--technologie ul_li">
                                            <span>Core Technologies:</span>
                                            <ul className="list-unstyled ul_li">
                                                {item.techs.map((icon, i) => (
                                                    <li key={i}><img src={`/assets/img/icon/${icon}`} alt="icon" /></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="xb-item---btn mt-70">
                                            <Link className="thm-btn agency-btn" href="/project">
                                                <span className="text">read more</span>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
