
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer
            className="footer footer-style-one pt-100"
            style={{
                backgroundImage: "url('/assets/img/bg/footer-bg.png')",
                backgroundColor: '#00020f',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                minHeight: '400px'
            }}
        >
            <div className="container">
                <div className="xb-footer-top mb-80">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="xb-footer-heading">
                                <h2 className="title" style={{ fontSize: '30px', color: '#fff', marginBottom: '20px' }}>Kloudon<br />Technologies</h2>
                                <p style={{ color: '#b2b3b7', maxWidth: '500px', fontSize: '18px' }}>
                                    Empowering businesses with cutting-edge AI solutions and innovative technology strategies. Join us in shaping the future.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="xb-footer-newsletter-box">
                                <h3 className="newsletter-title" style={{ color: '#fff', marginBottom: '15px' }}>Subscribe to our Newsletter</h3>
                                <form className="xb-footer-newsletter-form">
                                    <input type="email" placeholder="Email Address" required />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-60">
                    <div className="col-lg-4 col-md-6 mb-40">
                        <div className="xb-footer-widget">
                            <h4 className="widget-title">Contact Us</h4>
                            <ul className="xb-footer-info-list list-unstyled">
                                <li>
                                    <div className="text"><a href="mailto:info@kloudon.com">info@kloudon.com</a></div>
                                </li>
                                <li>
                                    <div className="text"><a href="tel:+919105658313">+91 9105658313</a></div>
                                </li>
                                <li>
                                    <div className="text">Plot No. 4, Mahaveer Town, Maruti City Road, Kahrai Mod Agra, UP</div>
                                </li>
                            </ul>
                            <div className="xb-footer-social mt-30">
                                <ul className="ul_li list-unstyled">
                                    <li><a href="https://www.facebook.com/kloudontechnologies"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-40">
                        <div className="xb-footer-widget">
                            <h4 className="widget-title">Quick Links</h4>
                            <ul className="xb-footer-menu list-unstyled">
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/contact">Contact Support</Link></li>
                                <li><Link href="/terms">Privacy & Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-40">
                        <div className="xb-footer-widget">
                            <h4 className="widget-title">Working Hours</h4>
                            <ul className="xb-footer-info-list list-unstyled">
                                <li>
                                    <div className="text">Tuesday - Sunday: <span style={{ color: 'var(--color-primary)' }}>10:00 - 06:00</span></div>
                                </li>
                                <li>
                                    <div className="text">Sunday: <span style={{ color: 'var(--color-primary)' }}>10:00 - 05:00</span></div>
                                </li>
                                <li>
                                    <div className="text">Monday: <span style={{ color: 'var(--color-primary)' }}>Closed</span></div>
                                </li>
                            </ul>
                            <p className="mt-20" style={{ color: '#b2b3b7', fontSize: '14px' }}>
                                Feel free to reach out to us during our working hours. We're here to help!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xb-footer-bottom-professional">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>Copyright © 2026 <Link href="/" style={{ color: 'var(--color-primary)' }}>Kloudon Technologies</Link>. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="xb-footer-bottom-links ul_li_right list-unstyled">
                                <li><Link href="/terms">Terms of Service</Link></li>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/contact">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


