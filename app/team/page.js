"use client";

import React, { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const TeamPage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    const teamMembers = [
        {
            name: "Ankur tiwari",
            designation: "CEO & Chairman",
            company: "Kloudon Technologies",
            image: "/assets/img/team/img09.jpg",
            big: true
        },
        {
            name: "Lennox Gabriel",
            designation: "Chief Operating Officer",
            company: "Kloudon Technologies",
            image: "/assets/img/team/img10.jpg",
            big: true
        },
        {
            name: "Aman kushwah",
            designation: "Python Developer",
            image: "/images/WhatsApp Image 2026-01-29 at 5.01.32 PM.jpeg",
            big: false
        },
        {
            name: "Jatin Diwakar",
            designation: "Backend Developer",
            image: "/assets/img/team/img02.jpg",
            big: false
        },
        {
            name: "Sahil Kumar",
            designation: "C sharp Developer",
            image: "/assets/img/team/img03.jpg",
            big: false
        },
        {
            name: "Atul Rathore",
            designation: "Frontend Developer",
            image: "/assets/img/team/img04.jpg",
            big: false
        }
    ];

    return (
        <main>
            <Breadcrumb title="Our Team" activePage="Our Team" />

            <section className="team pt-120 pb-120">
                <div className="container">
                    <div className="row mt-none-55">
                        {teamMembers.map((member, index) => (
                            <div key={index} className={member.big ? "col-xl-6 col-lg-6 col-md-8 mt-55" : "col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55"}>
                                <div className={`xb-team-item xb-border ${member.big ? 'xb-team-item-big' : ''}`}>
                                    <div className="xb-item--img">
                                        <img src={member.image} alt={member.name} style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                    <div className="xb-item--holder ul_li_between">
                                        <div className="xb-item--author">
                                            <h2 className="xb-item--name">{member.name}</h2>
                                            <span className="xb-item--desig">
                                                {member.designation} {member.company && <>at, <span>{member.company}</span></>}
                                            </span>
                                        </div>
                                        <span className="xb-item--social xb-border">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </span>
                                    </div>
                                    <div className="xb-bg"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TeamPage;
