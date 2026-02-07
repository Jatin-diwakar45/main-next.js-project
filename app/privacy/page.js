"use client";

import React, { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const PrivacyPage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <main>
            <Breadcrumb title="Privacy Policy" activePage="Privacy Policy" />

            <section className="privacy-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="privacy-content">
                                <div className="sec-title mb-40">
                                    <h2 className="title" style={{ fontSize: '32px' }}>Privacy Policy</h2>
                                    <p className="mt-10">Effective Date: 15-July-2015</p>
                                </div>

                                <p className="mb-30">At Kloudon Technologies, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our WhatsApp Business API Panel.</p>

                                <div className="privacy-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>1. 📝 Information We Collect</h3>
                                    <p className="mb-15">We collect the following types of information to provide and improve our services:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> <strong>User Provided Information:</strong> Name, business email, phone number, and billing details.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> <strong>Account Data:</strong> Login credentials and account configuration details.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-check-circle text-primary me-2 mt-1"></i> <strong>Communication Logs:</strong> Basic meta-data related to messages sent through the WhatsApp Business API.</li>
                                    </ul>
                                </div>

                                <div className="privacy-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>2. 🚀 How We Use Your Information</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> To set up and manage your WhatsApp API account.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> To provide technical support and ensure smooth platform operation.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> To process payments and manage subscriptions.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-dot-circle text-primary me-2 mt-1"></i> To send important service updates and security notifications.</li>
                                    </ul>
                                </div>

                                <div className="privacy-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>3. 🤝 Data Sharing & Third Parties</h3>
                                    <p className="mb-15">We do not sell or trade your data. However, we may share information with:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-user text-primary me-2 mt-1"></i> <strong>WhatsApp (Meta):</strong> As part of the WhatsApp Business API service requirements.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-user text-primary me-2 mt-1"></i> <strong>Service Providers:</strong> Secure payment gateways and server hosting partners.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="far fa-user text-primary me-2 mt-1"></i> <strong>Legal Compliance:</strong> If required by Indian law or government authorities.</li>
                                    </ul>
                                </div>

                                <div className="privacy-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>4. 🔒 Data Security</h3>
                                    <p>We implement industry-standard encryption and security protocols to prevent unauthorized access, alteration, or disclosure of your data. However, no method of transmission over the internet is 100% secure.</p>
                                </div>

                                <div className="privacy-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>5. ⚖️ Your Data Rights</h3>
                                    <p className="mb-15">As a Kloudon Technologies user, you have the right to:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i className="fas fa-check text-success me-2 mt-1"></i> Access and update your profile information.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="fas fa-check text-success me-2 mt-1"></i> Request a copy of the data we store about you.</li>
                                        <li className="mb-2 d-flex align-items-start"><i className="fas fa-check text-success me-2 mt-1"></i> Request account deletion (subject to contractual obligations).</li>
                                    </ul>
                                </div>

                                <div className="privacy-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>6. 🍪 Cookies</h3>
                                    <p>We use cookies to improve your user experience and keep you logged in to the panel. You can manage cookie preferences in your browser settings.</p>
                                </div>

                                <div className="contact-info mt-60 p-40 rounded">
                                    <h3 className="mb-30" style={{ fontSize: '24px' }}>📬 Privacy Inquiries</h3>
                                    <p className="mb-20">If you have any questions regarding this Privacy Policy, please contact our data Protection team:</p>
                                    <ul className="list-unstyled mb-20">
                                        <li className="mb-10">📧 Email: <a href="mailto:info@kloudon.com" style={{ color: 'var(--color-primary)' }}>info@kloudon.com</a></li>
                                        <li className="mb-10">📞 Phone: <a href="tel:+919105597548" style={{ color: 'var(--color-primary)' }}>+91 9105597548</a></li>
                                    </ul>
                                    <div>
                                        <strong>🏬 Developed & Maintained By:</strong><br />
                                        Kloudon Technologies, Agra, India.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPage;
