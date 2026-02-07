"use client";

import React, { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const TermsPage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <main>
            <Breadcrumb title="Terms of Service" activePage="Terms of Service" />

            <section className="terms-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="terms-content">
                                <div className="sec-title mb-40">
                                    <h2 className="title" style={{ fontSize: '32px' }}>Terms of Service</h2>
                                    <p className="mt-10">Effective Date: 15-July-2015</p>
                                </div>

                                <p className="mb-30">Welcome to the Kloudon Technologies WhatsApp Business API Panel. By
                                    accessing or using this platform, you agree to comply with and be bound by these
                                    Terms of Service. Please read them carefully before subscribing or using the
                                    service.</p>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>1. ✅ Acceptance of Terms</h3>
                                    <p>By using or subscribing to our WhatsApp Business API service, you confirm that
                                        you have read, understood, and agreed to these Terms and our Privacy Policy. If
                                        you do not accept these terms, please discontinue use of the platform.</p>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>2. 🔧 Service Overview</h3>
                                    <p className="mb-20">This panel provides WhatsApp Business API access and tools that
                                        help businesses automate communication, manage leads, and improve customer
                                        engagement through WhatsApp.</p>
                                    <p className="mb-20">👉 This software panel has been fully developed, owned, and
                                        maintained by Kloudon Technologies.<br />
                                        Kloudon Technologies is a recognized software development and training company
                                        based in
                                        Agra, India.</p>

                                    <div className="developer-info p-4 border rounded">
                                        <h5 className="mb-15">Developer Information:</h5>
                                        <p className="mb-0"><strong>Kloudon Technologies</strong><br />
                                            Plot No. 4, Mahaveer Town, Maruti City Road,Kahrai Mod Agra, UP<br />
                                            🌐 <a href="https://www.kloudon.com" target="_blank" rel="noopener noreferrer"
                                                style={{ color: 'var(--color-primary)' }}>www.kloudon.com</a></p>
                                    </div>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>3. 💳 Subscriptions & Payment</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Subscription is
                                            offered on a monthly or annual basis as per your selected plan.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Services begin
                                            after successful payment confirmation.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> You are
                                            responsible for keeping your contact and billing details accurate.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Refunds for
                                            duplicate/failed payments will be issued upon verification.</li>
                                    </ul>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>4. 🚫 User Responsibilities</h3>
                                    <p className="mb-20">Users of this platform agree:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-dot-circle text-primary me-2 mt-1"></i> Not to engage in
                                            spam, fraud, or any illegal/abusive activity using the service.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-dot-circle text-primary me-2 mt-1"></i> To strictly follow
                                            WhatsApp's Business policies and guidelines.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-dot-circle text-primary me-2 mt-1"></i> That they are
                                            solely responsible for the use of their account and any messages sent
                                            through it.</li>
                                    </ul>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>5. ❌ Account Suspension</h3>
                                    <p className="mb-20">Kloudon Technologies reserves the right to suspend or terminate any
                                        user
                                        account without prior notice in the following circumstances:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-times-circle text-danger me-2 mt-1"></i> Violation of
                                            these Terms</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-times-circle text-danger me-2 mt-1"></i> Use of the
                                            service for unauthorized or illegal purposes</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-times-circle text-danger me-2 mt-1"></i> Misrepresentation
                                            or non-payment</li>
                                    </ul>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>6. ⚠️ Limitation of Liability</h3>
                                    <p className="mb-20">Kloudon Technologies shall not be liable for:</p>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="fas fa-exclamation-triangle text-warning me-2 mt-1"></i> Any
                                            indirect, incidental, or consequential damages</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="fas fa-exclamation-triangle text-warning me-2 mt-1"></i> Service
                                            interruptions caused by internet failures, WhatsApp server issues, or other
                                            third-party disruptions</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="fas fa-exclamation-triangle text-warning me-2 mt-1"></i> Loss of
                                            data or business arising out of misuse of the platform</li>
                                    </ul>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>7. 🔄 Cancellation & Refund Policy</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> You may cancel
                                            your subscription at any time by contacting our support team.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Service will
                                            continue until the end of the active billing cycle.</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Monthly plans
                                            are non-refundable</li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Annual plans are
                                            eligible for pro-rated refunds if cancelled within 15 days of activation
                                        </li>
                                        <li className="mb-2 d-flex align-items-start"><i
                                            className="far fa-check-circle text-primary me-2 mt-1"></i> Refunds for
                                            duplicate/failed payments will be processed after internal verification</li>
                                    </ul>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>8. 🔁 Changes to Terms</h3>
                                    <p>Kloudon Technologies reserves the right to update or modify these Terms of
                                        Service at any
                                        time. Continued use of the platform after any changes implies your agreement to
                                        the revised terms.</p>
                                </div>

                                <div className="terms-block mb-40">
                                    <h3 className="mb-20" style={{ fontSize: '24px' }}>9. ⚖️ Governing Law</h3>
                                    <p>These Terms are governed by and construed in accordance with the laws of India.
                                        Any legal disputes will be subject to the exclusive jurisdiction of the courts
                                        in Agra, Uttar Pradesh.</p>
                                </div>

                                <div className="contact-info mt-60 p-40 rounded">
                                    <h3 className="mb-30" style={{ fontSize: '24px' }}>📬 Contact Us</h3>
                                    <p className="mb-20">For technical support, subscription inquiries, or other assistance:
                                    </p>
                                    <ul className="list-unstyled mb-20">
                                        <li className="mb-10">📧 Email: <a href="mailto:info@kloudon.com"
                                            style={{ color: 'var(--color-primary)' }}>info@kloudon.com</a></li>
                                        <li className="mb-10">📞 Phone: <a href="tel:+919105597548"
                                            style={{ color: 'var(--color-primary)' }}>+91 9105597548</a></li>
                                        <li className="mb-10">🌐 Website: <a href="https://www.kloudon.com" target="_blank" rel="noopener noreferrer"
                                            style={{ color: 'var(--color-primary)' }}>www.kloudon.com</a></li>
                                    </ul>
                                    <div>
                                        <strong>🏢 Office Address:</strong><br />
                                        Kloudon Technologies,<br />
                                        Maruti City Road, Plot No. 10, opposite Maruti Floor, Baroli Ahir,<br />
                                        Agra, Gutila, Uttar Pradesh 282001
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

export default TermsPage;
