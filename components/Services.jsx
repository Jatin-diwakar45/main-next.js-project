"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const Services = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined') {
                if (window.$) {
                    window.$(".xb-mouseenter").on('mouseenter', function () {
                        window.$(".xb-mouseenter").removeClass("active");
                        window.$(this).addClass("active");
                    });
                }
                if (window.WOW) {
                    new window.WOW().init();
                }
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="service pt-135">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="sec-title custom-sec-title xb-sec-padding text-center">
                            <span className="sub-title">Our Main Services</span>
                            <h2 className="title">
                                <span className="round-img"></span> Helping you grow with the power of AI
                            </h2>
                            <div className="xb-heading-btn d-inline">
                                <Link className="thm-btn agency-btn" href="/service">
                                    <span className="text">
                                        view more services
                                    </span>
                                    <span className="arrow">
                                        <span className="arrow-icon">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221"
                                                    transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                                <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                                <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                                <rect x="15.334" y="7.85205" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                                <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                                <rect x="18.4084" y="15.52" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                                <rect x="18.104" y="19.2012" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                                            </svg>
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221"
                                                    transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                                <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                                <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                                <rect x="15.334" y="7.85205" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                                <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                                <rect x="18.4084" y="15.52" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                                <rect x="18.104" y="19.2012" width="2.61221" height="2.61221"
                                                    transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-service-wrap bg_img" data-background="/assets/img/bg/service-bg.png" style={{ backgroundImage: "url('/assets/img/bg/service-bg.png')" }}>
                <div className="xb-service-item xb-border xb-mouseenter active">
                    <div className="xb-item--inner">
                        <div className="xb-item--item">
                            <div className="xb-item--head-item">
                                <h3 className="xb-item--title border-effect">
                                    <Link href="/service-details">AI saas product</Link>
                                </h3>
                                <Link className="xb-item--icon" href="/service-details">
                                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                                </Link>
                            </div>
                            <p className="xb-item--content">Use AI to target audiences, personalize campaigns, and
                                analyze data for better engagement and results.</p>
                            <div className=" img-hove-effect">
                                <div className="xb-item--img xb-img">
                                    <Link href="/service-details"><img src="/assets/img/service/img01.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img01.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img01.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img01.jpg"
                                        alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-vertical-text">
                            <h3 className="xb-item--title">
                                <Link href="/service-details">AI saas product</Link>
                            </h3>
                            <Link className="xb-icon" href="/service-details">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.28979" y="21.4111" width="22.36" height="2.83936"
                                        transform="rotate(-40.2798 6.28979 21.4111)" fill="white" />
                                    <rect x="9.44751" y="7.57031" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 9.44751 7.57031)" fill="white" />
                                    <rect x="13.449" y="7.90015" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 13.449 7.90015)" fill="white" />
                                    <rect x="17.4507" y="8.23047" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 17.4507 8.23047)" fill="white" />
                                    <rect x="21.1223" y="12.5627" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 21.1223 12.5627)" fill="white" />
                                    <rect x="20.7925" y="16.5649" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.7925 16.5649)" fill="white" />
                                    <rect x="20.4617" y="20.5667" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.4617 20.5667)" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xb-service-item xb-border xb-mouseenter">
                    <div className="xb-item--inner">
                        <div className="xb-item--item">
                            <div className="xb-item--head-item">
                                <h3 className="xb-item--title border-effect">
                                    <Link href="/service-details">Data science</Link>
                                </h3>
                                <Link className="xb-item--icon" href="/service-details">
                                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                                </Link>
                            </div>
                            <p className="xb-item--content">We turn complex data into clear, actionable insights using
                                AI and advanced analytics—empowering smarter decisions.</p>
                            <div className=" img-hove-effect">
                                <div className="xb-item--img xb-img">
                                    <Link href="/service-details"><img src="/assets/img/service/img02.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img02.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img02.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img02.jpg"
                                        alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-vertical-text">
                            <h3 className="xb-item--title">
                                <Link href="/service-details">Data science</Link>
                            </h3>
                            <Link className="xb-icon" href="/service-details">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.28979" y="21.4111" width="22.36" height="2.83936"
                                        transform="rotate(-40.2798 6.28979 21.4111)" fill="white" />
                                    <rect x="9.44751" y="7.57031" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 9.44751 7.57031)" fill="white" />
                                    <rect x="13.449" y="7.90015" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 13.449 7.90015)" fill="white" />
                                    <rect x="17.4507" y="8.23047" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 17.4507 8.23047)" fill="white" />
                                    <rect x="21.1223" y="12.5627" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 21.1223 12.5627)" fill="white" />
                                    <rect x="20.7925" y="16.5649" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.7925 16.5649)" fill="white" />
                                    <rect x="20.4617" y="20.5667" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.4617 20.5667)" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xb-service-item xb-border xb-mouseenter">
                    <div className="xb-item--inner">
                        <div className="xb-item--item">
                            <div className="xb-item--head-item">
                                <h3 className="xb-item--title border-effect">
                                    <Link href="/service-details">AI chatbot virtual</Link>
                                </h3>
                                <Link className="xb-item--icon" href="/service-details">
                                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                                </Link>
                            </div>
                            <p className="xb-item--content">We create intelligent chatbots and virtual assistants that
                                improve customer support and automate interactions 24/7.</p>
                            <div className=" img-hove-effect">
                                <div className="xb-item--img xb-img">
                                    <Link href="/service-details"><img src="/assets/img/service/img03.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img03.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img03.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img03.jpg"
                                        alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-vertical-text">
                            <h3 className="xb-item--title">
                                <Link href="/service-details">AI chatbot virtual</Link>
                            </h3>
                            <Link className="xb-icon" href="/service-details">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.28979" y="21.4111" width="22.36" height="2.83936"
                                        transform="rotate(-40.2798 6.28979 21.4111)" fill="white" />
                                    <rect x="9.44751" y="7.57031" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 9.44751 7.57031)" fill="white" />
                                    <rect x="13.449" y="7.90015" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 13.449 7.90015)" fill="white" />
                                    <rect x="17.4507" y="8.23047" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 17.4507 8.23047)" fill="white" />
                                    <rect x="21.1223" y="12.5627" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 21.1223 12.5627)" fill="white" />
                                    <rect x="20.7925" y="16.5649" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.7925 16.5649)" fill="white" />
                                    <rect x="20.4617" y="20.5667" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.4617 20.5667)" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xb-service-item xb-border xb-mouseenter">
                    <div className="xb-item--inner">
                        <div className="xb-item--item">
                            <div className="xb-item--head-item">
                                <h3 className="xb-item--title border-effect">
                                    <Link href="/service-details">AI for ecommerce</Link>
                                </h3>
                                <Link className="xb-item--icon" href="/service-details">
                                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                                </Link>
                            </div>
                            <p className="xb-item--content">We enhance e-commerce with AI-powered, dynamic pricing, and
                                personalized customer experiences.</p>
                            <div className=" img-hove-effect">
                                <div className="xb-item--img xb-img">
                                    <Link href="/service-details"><img src="/assets/img/service/img04.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img04.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img04.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img04.jpg"
                                        alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-vertical-text">
                            <h3 className="xb-item--title">
                                <Link href="/service-details">AI for ecommerce</Link>
                            </h3>
                            <Link className="xb-icon" href="/service-details">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.28979" y="21.4111" width="22.36" height="2.83936"
                                        transform="rotate(-40.2798 6.28979 21.4111)" fill="white" />
                                    <rect x="9.44751" y="7.57031" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 9.44751 7.57031)" fill="white" />
                                    <rect x="13.449" y="7.90015" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 13.449 7.90015)" fill="white" />
                                    <rect x="17.4507" y="8.23047" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 17.4507 8.23047)" fill="white" />
                                    <rect x="21.1223" y="12.5627" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 21.1223 12.5627)" fill="white" />
                                    <rect x="20.7925" y="16.5649" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.7925 16.5649)" fill="white" />
                                    <rect x="20.4617" y="20.5667" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.4617 20.5667)" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xb-service-item xb-border xb-mouseenter">
                    <div className="xb-item--inner">
                        <div className="xb-item--item">
                            <div className="xb-item--head-item">
                                <h3 className="xb-item--title border-effect">
                                    <Link href="/service-details">AI consulting</Link>
                                </h3>
                                <Link className="xb-item--icon" href="/service-details">
                                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                                </Link>
                            </div>
                            <p className="xb-item--content">We guide businesses in adopting AI strategies, optimizing
                                processes, and integrating technologies for lasting success.</p>
                            <div className=" img-hove-effect">
                                <div className="xb-item--img xb-img">
                                    <Link href="/service-details"><img src="/assets/img/service/img05.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img05.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img05.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img05.jpg"
                                        alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-vertical-text">
                            <h3 className="xb-item--title">
                                <Link href="/service-details">AI consulting</Link>
                            </h3>
                            <Link className="xb-icon" href="/service-details">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.28979" y="21.4111" width="22.36" height="2.83936"
                                        transform="rotate(-40.2798 6.28979 21.4111)" fill="white" />
                                    <rect x="9.44751" y="7.57031" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 9.44751 7.57031)" fill="white" />
                                    <rect x="13.449" y="7.90015" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 13.449 7.90015)" fill="white" />
                                    <rect x="17.4507" y="8.23047" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 17.4507 8.23047)" fill="white" />
                                    <rect x="21.1223" y="12.5627" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 21.1223 12.5627)" fill="white" />
                                    <rect x="20.7925" y="16.5649" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.7925 16.5649)" fill="white" />
                                    <rect x="20.4617" y="20.5667" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.4617 20.5667)" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xb-service-item xb-border xb-mouseenter">
                    <div className="xb-item--inner">
                        <div className="xb-item--item">
                            <div className="xb-item--head-item">
                                <h3 className="xb-item--title border-effect">
                                    <Link href="/service-details">AI - marketing</Link>
                                </h3>
                                <Link className="xb-item--icon" href="/service-details">
                                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                                </Link>
                            </div>
                            <p className="xb-item--content">Use AI to target audiences, personalize campaigns, and
                                analyze data for better engagement and results.</p>
                            <div className=" img-hove-effect">
                                <div className="xb-item--img xb-img">
                                    <Link href="/service-details"><img src="/assets/img/service/img06.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img06.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img06.jpg"
                                        alt="image" /></Link>
                                    <Link href="/service-details"><img src="/assets/img/service/img06.jpg"
                                        alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-vertical-text">
                            <h3 className="xb-item--title">
                                <Link href="/service-details">AI - marketing</Link>
                            </h3>
                            <Link className="xb-icon" href="/service-details">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6.28979" y="21.4111" width="22.36" height="2.83936"
                                        transform="rotate(-40.2798 6.28979 21.4111)" fill="white" />
                                    <rect x="9.44751" y="7.57031" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 9.44751 7.57031)" fill="white" />
                                    <rect x="13.449" y="7.90015" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 13.449 7.90015)" fill="white" />
                                    <rect x="17.4507" y="8.23047" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 17.4507 8.23047)" fill="white" />
                                    <rect x="21.1223" y="12.5627" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 21.1223 12.5627)" fill="white" />
                                    <rect x="20.7925" y="16.5649" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.7925 16.5649)" fill="white" />
                                    <rect x="20.4617" y="20.5667" width="2.83936" height="2.83936"
                                        transform="rotate(-40.2798 20.4617 20.5667)" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
