"use client";

import React, { useEffect } from 'react';

const Testimonial = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined') {
                if (window.Swiper) {
                    new window.Swiper(".xb-testimonial-slider", {
                        loop: true,
                        speed: 400,
                        spaceBetween: 30,
                        slidesPerView: 5,
                        centeredSlides: false,
                        autoplay: {
                            enabled: true,
                            delay: 6000
                        },
                        breakpoints: {
                            '1700': { slidesPerView: 5 },
                            '1600': { slidesPerView: 4 },
                            '1024': { slidesPerView: 3 },
                            '768': { slidesPerView: 2 },
                            '576': { slidesPerView: 1 },
                            '0': { slidesPerView: 1 },
                        },
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
        <section className="testimonial pb-150 bg_img" data-background="/assets/img/bg/testimonial-bg.png" style={{ backgroundImage: "url('/assets/img/bg/testimonial-bg.png')" }}>
            <div className="container">
                <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
                    <span className="sub-title mb-15">Our Testimonial</span>
                    <h2 className="title">Hear from our happy customers</h2>
                </div>
            </div>
            <div className="xb-testimonial-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="xb-testimonial-item">
                            <div className="xb-item--inner xb-border">
                                <ul className="xb-item--rating list-unstyled ul_li">
                                </ul>
                                <p className="xb-item--content">
                                    "We saw a big boost in engagement and sales with their recommendation engine. It personalizes the shopping experience perfectly.
                                </p>
                                <div className="xb-item--author ul_li">
                                    <div className="xb-item--avatar"><img src="/assets/img/avatar/women-icon.jpg" alt="avatar-image" /></div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--name">Riya Mehta</h3>
                                        <span className="xb-item--desig">Manager - SmartRetail Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="xb-testimonial-item">
                            <div className="xb-item--inner xb-border">
                                <ul className="xb-item--rating list-unstyled ul_li">
                                </ul>
                                <p className="xb-item--content">
                                    "Their NLP tool saves us hours by extracting key info from large documents instantly. It's fast, accurate, and a huge time-saver.
                                </p>
                                <div className="xb-item--author ul_li">
                                    <div className="xb-item--avatar"><img src="/assets/img/avatar/man-icon.jpg" alt="avatar-image" /></div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--name">Navindar Singh</h3>
                                        <span className="xb-item--desig">CEO & Founder - DocuTech India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="xb-testimonial-item">
                            <div className="xb-item--inner xb-border">
                                <ul className="xb-item--rating list-unstyled ul_li">
                                </ul>
                                <p className="xb-item--content">
                                    "Their automation solutions saved us countless hours. Tasks that took days are now completed in minutes. The ROI was almost immediate."
                                </p>
                                <div className="xb-item--author ul_li">
                                    <div className="xb-item--avatar"><img src="/assets/img/avatar/man-icon.jpg" alt="avatar-image" /></div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--name">Aditya Verma</h3>
                                        <span className="xb-item--desig">Manager - SwiftLogix India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="xb-testimonial-item">
                            <div className="xb-item--inner xb-border">
                                <ul className="xb-item--rating list-unstyled ul_li">
                                </ul>
                                <p className="xb-item--content">
                                    "The AI chatbot they developed has transformed our customer service. We now handle 70% of queries with higher customer satisfaction!"
                                </p>
                                <div className="xb-item--author ul_li">
                                    <div className="xb-item--avatar"><img src="/assets/img/avatar/women-icon.jpg" alt="avatar-image" /></div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--name">Priya Patel</h3>
                                        <span className="xb-item--desig">CEO - InnovateX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="xb-testimonial-item">
                            <div className="xb-item--inner xb-border">
                                <ul className="xb-item--rating list-unstyled ul_li">
                                </ul>
                                <p className="xb-item--content">
                                    "We gained deep insights into customer behavior and performance. Their analytics made our decision-making sharper and more confident."
                                </p>
                                <div className="xb-item--author ul_li">
                                    <div className="xb-item--avatar"><img src="/assets/img/avatar/man-icon.jpg" alt="avatar-image" /></div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--name">Vikram Singh</h3>
                                        <span className="xb-item--desig">Director - FinCap Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
