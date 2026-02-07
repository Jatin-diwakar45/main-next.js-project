"use client";

import React, { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const ContactPage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <main>
            <Breadcrumb title="Contact us" activePage="Contact us" />

            <section className="contact pb-140">
                <div className="container">
                    <div className="xb-contact-wrap xb-border bg_img" data-background="/assets/img/bg/contact-bg02.png" style={{ backgroundImage: "url('/assets/img/bg/contact-bg02.png')" }}>
                        <div className="xb-contact-form xb-main-contact xb-border">
                            <div className="form-heading text-center mb-30">
                                <h3 className="title">Ready to collaborate with us?</h3>
                                <p className="sub-title clr-white">Who knows where a single message might lead you.</p>
                            </div>
                            <form action="#!" className="xb-contact-input-form main-contact-input-form">
                                <div className="row mt-none-20">
                                    <div className="col-lg-6 col-md-6 mt-20">
                                        <div className="xb-input-field">
                                            <input id="author-name" type="text" required />
                                            <label htmlFor="author-name">Your Name*</label>
                                            <img src="/assets/img/icon/user-balck-icon.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-20">
                                        <div className="xb-input-field">
                                            <input id="author-email" type="email" required />
                                            <label htmlFor="author-email">Email Address*</label>
                                            <img src="/assets/img/icon/sms-balck-icon.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-20">
                                        <div className="xb-input-field">
                                            <input id="author-phone" type="text" required />
                                            <label htmlFor="author-phone">Contact No*</label>
                                            <img src="/assets/img/icon/call-icon02.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-20">
                                        <div className="xb-input-field xb-select-file">
                                            <input type="file" required />
                                            <img src="/assets/img/icon/upload-icon.svg" alt="icon" />
                                            <span>Attach file...</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mt-20">
                                        <div className="xb-input-field xb-select-field">
                                            <select className="nice-select">
                                                <option value="1">Select Service*</option>
                                                <option value="2">AI - marketing</option>
                                                <option value="3">AI consulting</option>
                                                <option value="4">AI chatbot virtual</option>
                                            </select>
                                            <img src="/assets/img/icon/list-icon.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mt-20">
                                        <div className="xb-input-field xb-massage-field">
                                            <textarea id="massage" required></textarea>
                                            <label htmlFor="massage">Your Message..</label>
                                            <img src="/assets/img/icon/messages-icon.svg" alt="icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-submit-btn mt-35">
                                    <button type="submit" className="thm-btn form-btn">
                                        send a message
                                        <span className="xb-icon">
                                            <img src="/assets/img/icon/rotate-arrow-black02.svg" alt="icon" />
                                            <img src="/assets/img/icon/rotate-arrow-black02.svg" alt="icon" />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
