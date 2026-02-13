'use client';

import React from 'react';

const DataDeletionPage = () => {
    return (
        <>
            <main className="data-deletion-area pt-150 pb-150" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="data-deletion-box" style={{
                        backgroundColor: '#ffffff',
                        padding: '80px 60px',
                        borderRadius: '32px',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                        maxWidth: '900px',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            color: '#6366f1',
                            fontSize: '42px',
                            fontWeight: '700',
                            marginBottom: '30px',
                            fontFamily: 'var(--font-body)',
                            letterSpacing: '-0.02em'
                        }}>Data Deletion Request</h2>

                        <p style={{
                            color: '#4b5563',
                            fontSize: '20px',
                            lineHeight: '1.7',
                            marginBottom: '45px',
                            maxWidth: '700px',
                            margin: '0 auto 45px'
                        }}>
                            At Kloudon Technologies, we respect your privacy. If you wish to request the deletion of your data from our system, please contact us by email.
                        </p>

                        <a href="mailto:support@kloudon.com" className="xb-btn" style={{
                            backgroundColor: '#6366f1',
                            color: '#ffffff',
                            padding: '18px 40px',
                            borderRadius: '12px',
                            fontSize: '18px',
                            fontWeight: '600',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            marginBottom: '45px',
                            boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)'
                        }}>
                            Request Data Deletion
                        </a>

                        <p style={{
                            color: '#1f2937',
                            fontSize: '18px',
                            fontWeight: '500',
                            marginBottom: '60px'
                        }}>
                            We will process your request within <span style={{ fontWeight: '700' }}>7 business days</span>.
                        </p>

                        <div className="data-deletion-footer" style={{ borderTop: '1px solid #f3f4f6', paddingTop: '40px' }}>
                            <p style={{
                                color: '#9ca3af',
                                fontSize: '15px'
                            }}>
                                © {new Date().getFullYear()} Kloudon Technologies. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .xb-btn:hover {
                    background-color: #4f46e5 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.4) !important;
                }
                @media (max-width: 767px) {
                    .data-deletion-box {
                        padding: 40px 20px !important;
                        border-radius: 20px !important;
                    }
                    h2 {
                        font-size: 28px !important;
                    }
                    p {
                        font-size: 16px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default DataDeletionPage;
