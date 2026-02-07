"use client";

import React, { useEffect } from 'react';

const Industries = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            const timer = setTimeout(() => {
                new window.WOW().init();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const marqueeItemsLeft = [
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "GET", number: "200", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "GET", number: "200", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "GET", number: "200", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "GET", number: "200", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "GET", number: "200", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "GET", number: "200", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
    ];

    const marqueeItemsRight = [
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
        { tag: "delate", number: "500", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1", isRed: true },
        { tag: "post", number: "300", text: "users/d72d9c38-f0d7-32b6-8c53-508d2134354/1" },
    ];

    const industriesServed = [
        { icon: "/assets/img/icon/service-icon01.svg", title: "Education" },
        { icon: "/assets/img/icon/service-icon02.svg", title: "Logistics" },
        { icon: "/assets/img/icon/service-icon03.svg", title: "Marketing" },
        { icon: "/assets/img/icon/service-icon04.svg", title: "Healthcare" },
        { icon: "/assets/img/icon/service-icon05.svg", title: "Finance" },
        { icon: "/assets/img/icon/service-icon06.svg", title: "Manufacturing" },
        { icon: "/assets/img/icon/service-icon07.svg", title: "E-commerce" },
    ];

    return (
        <>
            {/* industries start */}
            <section className="industries pos-rel pt-145 pb-50 bg_img">
                <div className="container">
                    <div className="sec-title sec-title-center text-center mb-40">
                        <span className="sub-title mb-15">Professional & Trust-Building</span>
                        <h2 className="title">Real-time AI for smarter business</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="xb-industries-wrapper">
                                <div className="xb-industries-marquee">
                                    <div className="xb-indus-marquee-inner">

                                        {/* Left Marquee */}
                                        <div className="marquee-container">
                                            <div className="xb-marquee-items marquee-track marquee-left-anim">
                                                {[...marqueeItemsLeft, ...marqueeItemsLeft, ...marqueeItemsLeft].map((item, index) => (
                                                    <div className="xb-marquee-item" key={`left-${index}`}>
                                                        <span className={`tag ${item.isRed ? 'tag-red' : ''}`}>{item.tag}</span>
                                                        <span className={`number ${item.isRed ? 'number-red' : ''}`}>{item.number}</span>
                                                        <p>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Marquee */}
                                        <div className="marquee-container">
                                            <div className="xb-marquee-items marquee-track marquee-right-anim">
                                                {[...marqueeItemsRight, ...marqueeItemsRight, ...marqueeItemsRight].map((item, index) => (
                                                    <div className="xb-marquee-item" key={`right-${index}`}>
                                                        <span className={`tag ${item.isRed ? 'tag-red' : ''}`}>{item.tag}</span>
                                                        <span className={`number ${item.isRed ? 'number-red' : ''}`}>{item.number}</span>
                                                        <p>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="xb-gardiant-shape">
                                        <img src="/assets/img/industries/gradient.png" alt="gardiant-image" />
                                    </div>
                                    <div className="xb-gardiant-shape-two updown-2">
                                        <img src="/assets/img/industries/gradient02.png" alt="gardiant-image" />
                                    </div>
                                </div>
                                <div className="xb-industries-logo wow zoomIn" data-wow-delay="0ms" data-wow-duration="600ms">
                                    <img src="/assets/img/industries/indus-logo.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="indu-shape">
                        <img src="/assets/img/shape/indus-shape.png" alt="shape" />
                    </div>
                </div>
                <div className="xb-gradiant-line">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>
            {/* industries end */}

            {/* industries served start */}
            <section className="industries pb-165 bg_img" data-background="/assets/img/bg/industries-bg02.png" style={{ backgroundImage: "url('/assets/img/bg/industries-bg02.png')" }}>
                <div className="container">
                    <div className="sec-title sec-title-center text-center mb-50">
                        <span className="sub-title mb-15">Industries Served</span>
                        <h2 className="title">Industries we served with AI</h2>
                    </div>
                </div>
                <div className="xb-industries-wrapper d-inline-block w-100">
                    <div className="marquee-container">
                        <div className="xb-industries-inner marquee-track marquee-right-anim" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                            {[...industriesServed, ...industriesServed, ...industriesServed].map((item, index) => (
                                <div className="xb-industries-item xb-border" key={`served-${index}`}>
                                    <div className="xb-icon">
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                    <h3 className="xb-title">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* industries served end */}
        </>
    );
};

export default Industries;
