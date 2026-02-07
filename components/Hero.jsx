"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './HeroSlider.css';

const HeroBackgroundSlider = () => {
    const images = [
        '/images/hero-img1.jpg',
        '/images/hero-img(hands).jpg',
        '/images/hero-img(earth).jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="hero-slider-bg">
            {images.map((image, index) => {
                let className = "hero-slide";
                if (index === currentIndex) className += " active";
                if (index === prevIndex) className += " exiting";

                return (
                    <div
                        key={index}
                        className={className}
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                );
            })}
        </div>
    );
};

const Hero = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && window.WOW) {
                new window.WOW().init();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero hero-style pos-rel overflow-hidden">
            <HeroBackgroundSlider />
            <div className="container pos-rel">
                <div className="row">
                    <div className="col-lg-9 col-md-9">
                        <div className="hero-content">
                            <h2 className="title scale-animation wow">Smarter AI. Stronger business outcomes.</h2>
                            <p className="sub-title scale-animation wow">Drive scalable growth and efficiency through tailored AI solutions, combining automation with data-driven intelligence to unlock innovation.</p>
                            <div className="hero-btn scale-animation wow">
                                <Link href="/about" className="thm-btn agency-btn">
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
                    </div>
                </div>
                <div className="row mt-55">
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-feature-item wow fadeInUp" data-wow-delay="700ms" data-wow-duration="600ms">
                            <div className="xb-item--inner xb-border">
                                <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon01.svg" alt="icon" /></span>
                                <div className="xb-item--holder">
                                    <h2 className="xb-item--title">Smarter insights</h2>
                                    <p className="xb-item--content">Make faster, data-driven decisions with real-time AI analysis and predictive insights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-feature-item wow fadeInUp" data-wow-delay="800ms" data-wow-duration="600ms">
                            <div className="xb-item--inner xb-border">
                                <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon02.svg" alt="icon" /></span>
                                <div className="xb-item--holder">
                                    <h2 className="xb-item--title">Integrated AI solutions</h2>
                                    <p className="xb-item--content">Built-in, scalable AI—no plugins, no extra tools, from day one..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-feature-item wow fadeInUp" data-wow-delay="900ms" data-wow-duration="600ms">
                            <div className="xb-item--inner xb-border">
                                <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon03.svg" alt="icon" /></span>
                                <div className="xb-item--holder">
                                    <h2 className="xb-item--title">End-to-end automation</h2>
                                    <p className="xb-item--content">Smarter workflows. Fewer bottlenecks. Total clarity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
