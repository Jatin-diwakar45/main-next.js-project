import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Script from 'next/script';

export default function About() {
    return (
        <main>
            <Breadcrumb title="About Us" activePage="About Us" />

            {/* about start */}
            <section className="about pos-rel pb-140">
                <div className="container">
                    <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
                        <span className="sub-title mb-10">Who We Are</span>
                        <h2 className="title" style={{ marginBottom: '20px' }}>
                            Empower your business with smarter AI agency
                        </h2>
                        <p className="content">
                            Unlock growth and efficiency with tailored AI solutions. We use automation and data-driven
                            strategies to help you innovate and scale.
                        </p>
                    </div>

                    <div className="row mt-40">
                        <div className="col-lg-12 text-center mb-50">
                            <h3>🚀 Our Mission</h3>
                            <p className="mt-20" style={{ fontSize: '18px', fontStyle: 'italic' }}>
                                “To simplify business communication and make automation accessible — without technical complexity.”
                            </p>
                            <p className="mt-10">
                                We are passionate about enabling MSMEs, educators, and entrepreneurs to
                                harness the power of WhatsApp to boost operational efficiency, increase customer
                                satisfaction, and scale conversations without manual effort.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-10">
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="xb-feature-item">
                                <div className="xb-item--inner xb-border">
                                    <span className="xb-item--icon"><i className="far fa-file-invoice-dollar" style={{ fontSize: '30px', color: 'var(--color-primary)' }}></i></span>
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title">Flexible Plans</h2>
                                        <p className="xb-item--content">Transparent subscription plans & flexible billing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="xb-feature-item">
                                <div className="xb-item--inner xb-border">
                                    <span className="xb-item--icon"><i className="fas fa-lock" style={{ fontSize: '30px', color: 'var(--color-primary)' }}></i></span>
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title">Data Privacy</h2>
                                        <p className="xb-item--content">Strong data privacy and security standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="xb-feature-item">
                                <div className="xb-item--inner xb-border">
                                    <span className="xb-item--icon"><i className="fas fa-bolt" style={{ fontSize: '30px', color: 'var(--color-primary)' }}></i></span>
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title">Fast Activation</h2>
                                        <p className="xb-item--content">Fast service activation and reliable performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="xb-feature-item">
                                <div className="xb-item--inner xb-border">
                                    <span className="xb-item--icon"><i className="fas fa-headset" style={{ fontSize: '30px', color: 'var(--color-primary)' }}></i></span>
                                    <div className="xb-item--holder">
                                        <h2 className="xb-item--title">Expert Support</h2>
                                        <p className="xb-item--content">Prompt and professional customer support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-bg">
                    <img src="/assets/img/bg/about-bg02.png" alt="bg-image" />
                </div>
            </section>
            {/* about end */}

            {/* founder note start */}
            <section className="testimonial-section pos-rel pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="sec-title sec-title-center text-center mb-60">
                                <span className="sub-title mb-10">Founder's Note</span>
                            </div>
                            <div className="testimonial-slider-two">
                                <div className="xb-testimonial-item text-center">
                                    <div className="xb-item--quote-icon">
                                        <img src="/assets/img/logo/logo.png" alt="icon" />
                                    </div>
                                    <p className="xb-item--content">
                                        "Technology should empower, not overwhelm. At Kloudon Technologies , our mission
                                        is to build digital tools that feel natural, reliable, and purpose-driven. We
                                        want business owners to focus on growth — and leave the automation to us."
                                    </p>
                                    <div className="xb-item--bottom">
                                        <h3 className="xb-item--title">Kloudon Technologies</h3>
                                        <span className="xb-item--designation">Founder, Kloudon Technologies</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* founder note end */}

            {/* brand start */}
            <section className="brand pb-150">
                <div className="container">
                    <div className="sec-title sec-title-center brand-sec-title text-center mb-40">
                        <p className="sub-title">Trusted by innovative businesses worldwide</p>
                    </div>
                </div>
                <div className="brand-marquee ac-brand-marquee marquee-left">
                    <div className="ac-brand-inner ul_li_between">
                        <div className="xb-brand-item"><img src="/assets/img/brand/logo01.png" alt="logo" /></div>
                        <div className="xb-brand-item"><img src="/assets/img/brand/logo02.png" alt="logo" /></div>
                        <div className="xb-brand-item"><img src="/assets/img/brand/logo03.png" alt="logo" /></div>
                        <div className="xb-brand-item"><img src="/assets/img/brand/logo04.png" alt="logo" /></div>
                        <div className="xb-brand-item"><img src="/assets/img/brand/logo05.png" alt="logo" /></div>
                        <div className="xb-brand-item"><img src="/assets/img/brand/logo06.png" alt="logo" /></div>
                    </div>
                </div>
            </section>
            {/* brand end */}

            {/* contact section (inline) */}
            <section className="contact-inline-section bg_img pb-140" data-background="/assets/img/bg/contact_bg.jpg" style={{ backgroundImage: "url('/assets/img/bg/contact_bg.jpg')" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-info p-40 rounded text-center">
                                <h3 className="mb-30" style={{ fontSize: '28px' }}>📞 Reach Out to Us Anytime</h3>
                                <p className="mb-20">Have a question or need support? Our team is always ready to help:</p>
                                <ul className="list-unstyled mb-20" style={{ display: 'inline-block', textAlign: 'left' }}>
                                    <li className="mb-10">📧 Email: <a href="mailto:info@kloudon.com" style={{ color: 'var(--color-primary)' }}>info@kloudon.com</a></li>
                                    <li className="mb-10">📞 Phone/WhatsApp: <a href="tel:+919105597548" style={{ color: 'var(--color-primary)' }}>+91 9105597548</a></li>
                                    <li className="mb-10">🌐 Website: <a href="http://www.kloudon.com" target="_blank" style={{ color: 'var(--color-primary)' }}>www.kloudon.com</a></li>
                                </ul>
                                <div className="mt-20">
                                    <strong>🏢 Office Address:</strong><br />
                                    Kloudon Technologies,<br />
                                    Plot No. 4, Mahaveer Town, Maruti City Road,Kahrai Mod Agra, UP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
