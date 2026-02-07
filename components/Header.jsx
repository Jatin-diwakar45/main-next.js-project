
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleSubMenu = (menuId) => {
        if (activeSubMenu === menuId) {
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(menuId);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveSubMenu(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="xb-header-area" className="header-area header-style--one header-transparent is-sticky">
            <div className={`xb-header stricky ${isSticky ? 'xb-header-area-sticky xb-header-fixed' : ''}`}>
                <div className="container mxw-1650">
                    <div className="header__wrap ul_li_between">
                        <div className="xb-header-logo">
                            <Link href="/" className="logo1"><img src="/assets/img/logo/logo-inside.png" alt="" /></Link>
                        </div>
                        <div className="main-menu__wrap navbar navbar-expand-lg p-0">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li className="">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="menu-item-has-children megamenu">
                                        <Link href="#!"><span>Product</span></Link>
                                        <ul className="submenu">
                                            <li>
                                                <div className="mega_menu_wrapper">
                                                    <div className="container-fluid p-0">
                                                        <div className="mega_menu_wrapper_inner">
                                                            <div className="row mt-none-30">
                                                                <div className="col-12 mt-30">
                                                                    <div className="megamenu_pages_wrapper">
                                                                        <div className="row g-10">
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <a className="iconbox_block_2"
                                                                                    href="https://wa.me/919105597548">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_01.svg"
                                                                                                alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">WhatsApp
                                                                                            API</small>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <a className="iconbox_block_2" href="#!">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_02.svg"
                                                                                                alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">ERP
                                                                                            Model</small>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children megamenu">
                                        <Link href="#!"><span>Pages</span></Link>
                                        <ul className="submenu">
                                            <li>
                                                <div className="mega_menu_wrapper">
                                                    <div className="container-fluid p-0">
                                                        <div className="mega_menu_wrapper_inner">
                                                            <div className="row mt-none-30">
                                                                <div className="col-12 mt-30">
                                                                    <div className="megamenu_pages_wrapper">
                                                                        <div className="row g-10">
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <Link className="iconbox_block_2"
                                                                                    href="/terms">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_01.svg"
                                                                                                alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Terms
                                                                                            and Condition</small>
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <Link className="iconbox_block_2"
                                                                                    href="/privacy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_01.svg"
                                                                                                alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Privacy
                                                                                            and Policy</small>
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <Link className="iconbox_block_2"
                                                                                    href="/career">
                                                                                    <span className="icon_title_wrap">
                                                                                        <span className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_03.svg"
                                                                                                alt="" />
                                                                                        </span>
                                                                                        <small
                                                                                            className="iconbox_title">Career</small>
                                                                                        <span className="badge">Weâ€™re
                                                                                            Hiring</span>
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <Link className="iconbox_block_2"
                                                                                    href="/career-details">
                                                                                    <span className="icon_title_wrap">
                                                                                        <span className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_02.svg"
                                                                                                alt="" />
                                                                                        </span>
                                                                                        <small
                                                                                            className="iconbox_title">Career
                                                                                            details</small>
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-lg-4">
                                                                                <Link className="iconbox_block_2"
                                                                                    href="/team">
                                                                                    <span className="icon_title_wrap">
                                                                                        <span className="iconbox_icon">
                                                                                            <img src="/assets/img/icon/m_04.svg"
                                                                                                alt="" />
                                                                                        </span>
                                                                                        <small className="iconbox_title">Our
                                                                                            team</small>
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className=""><Link href="/about"><span>About Us</span></Link></li>
                                    <li><Link href="/contact"><span>Contact Us</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-btn">
                            <Link className="thm-btn" href="/contact">join now</Link>
                        </div>
                        <div className="header-bar-mobile side-menu d-lg-none">
                            <button className="xb-nav-mobile" onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'inherit' }}>
                                <i className="far fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div className="xb-header-wrap">
                        <div className={`xb-header-menu ${isMenuOpen ? 'active' : ''}`}>
                            <div className="xb-header-menu-scroll">
                                <div className="xb-menu-close xb-hide-xl xb-close" onClick={closeMenu}></div>
                                <div className="xb-logo-mobile xb-hide-xl">
                                    <Link href="/" rel="home" onClick={closeMenu}><img src="/assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                                <div className="xb-header-mobile-search xb-hide-xl">
                                    <form role="search" action="#">
                                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                                        <button className="search-submit" type="submit"><i
                                            className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <nav className="xb-header-nav">
                                    <ul className="xb-menu-primary clearfix">
                                        <li className="menu-item">
                                            <Link href="/" onClick={closeMenu}><span>Home</span></Link>
                                        </li>
                                        <li><Link href="/about" onClick={closeMenu}><span>about us</span></Link></li>
                                        <li className={`menu-item menu-item-has-children ${activeSubMenu === 'm-page' ? 'active' : ''}`}>
                                            <a href="#!" onClick={(e) => e.preventDefault()}><span>page</span></a>
                                            <span className={`xb-menu-toggle ${activeSubMenu === 'm-page' ? 'active' : ''}`} onClick={() => toggleSubMenu('m-page')}></span>
                                            <ul className={`sub-menu ${activeSubMenu === 'm-page' ? 'active' : ''}`} style={{ display: activeSubMenu === 'm-page' ? 'block' : 'none' }}>
                                                <li><Link href="/team" onClick={closeMenu}><span>Team</span></Link></li>
                                                <li><Link href="/project" onClick={closeMenu}><span>Project</span></Link></li>
                                                <li><Link href="/project-details" onClick={closeMenu}><span>Project Details</span></Link></li>
                                                <li><Link href="/career" onClick={closeMenu}><span>Career</span></Link></li>
                                                <li><Link href="/career-details" onClick={closeMenu}><span>Career Details</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className={`menu-item menu-item-has-children ${activeSubMenu === 'm-services' ? 'active' : ''}`}>
                                            <a href="#!" onClick={(e) => e.preventDefault()}><span>services</span></a>
                                            <span className={`xb-menu-toggle ${activeSubMenu === 'm-services' ? 'active' : ''}`} onClick={() => toggleSubMenu('m-services')}></span>
                                            <ul className={`sub-menu ${activeSubMenu === 'm-services' ? 'active' : ''}`} style={{ display: activeSubMenu === 'm-services' ? 'block' : 'none' }}>
                                                <li><Link href="/service" onClick={closeMenu}><span>Services</span></Link></li>
                                                <li><Link href="/service-details" onClick={closeMenu}><span>Service Details</span></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact" onClick={closeMenu}><span>Contact Us</span></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="xb-header-menu-backdrop" onClick={closeMenu}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
