import React from 'react';
import Link from 'next/link';

export default function Breadcrumb({ title, activePage, bgImage = '/assets/img/bg/bootcamp-bg.png' }) {
    return (
        <section className="breadcrumb bg_img" data-background={bgImage} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <div className="breadcrumb__content">
                    <ul className="breadcrumb__list clearfix list-unstyled">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item">{activePage}</li>
                    </ul>
                    <h2 className="breadcrumb__title">{title}</h2>
                </div>
            </div>
        </section>
    );
}
