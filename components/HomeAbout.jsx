"use client";

import React, { useEffect } from 'react';

const homeAbout = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            const timer = setTimeout(() => {
                new window.WOW().init();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const aboutImages = [
        "/assets/img/about/img01.jpg",
        "/assets/img/about/img02.jpg",
        "/assets/img/about/img03.jpg",
        "/assets/img/about/img04.jpg",
    ];

    return (
        <section className="about pt-140">
            <div className="container">
                <div className="sec-title about-sec-title mb-75">
                    <span className="sub-title">Who We are?</span>
                    <h2 className="title">
                        We help businesses grow and scale using smart AI solutions.
                    </h2>
                </div>
            </div>
            <div className="xb-about-img-wrap bg_img wow" data-background="/assets/img/bg/about-bg.png" style={{ backgroundImage: "url('/assets/img/bg/about-bg.png')" }}>
                <div className="marquee-container">
                    <div className="xb-about-img-inner marquee-track marquee-left-anim">
                        {[...aboutImages, ...aboutImages, ...aboutImages].map((img, index) => (
                            <div className="xb-about-img-item img-hove-effect" key={index}>
                                <div className="xb-img">
                                    <a href="#!"><img src={img} alt={`image-${index}`} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default homeAbout;
