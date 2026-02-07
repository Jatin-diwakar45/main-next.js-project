"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isRemoved, setIsRemoved] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Reset state on path change or initial load
        setIsVisible(true);
        setIsRemoved(false);

        const timer = setTimeout(() => {
            setIsVisible(false);
            const removeTimer = setTimeout(() => {
                setIsRemoved(true);
            }, 600);
            return () => clearTimeout(removeTimer);
        }, 800); // Slightly longer for better visibility

        return () => clearTimeout(timer);
    }, [pathname]);

    if (isRemoved) return null;

    return (
        <div id="preloader" style={{
            transition: 'opacity 0.5s ease',
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'all' : 'none'
        }}>
            <div className="preloader-inner">
                <div className="preloader-circle"></div>
                <img
                    src="/assets/img/logo/logo.png"
                    alt="Kloudon Logo"
                    className="preloader-logo"
                />
            </div>
        </div>
    );
};

export default Preloader;
