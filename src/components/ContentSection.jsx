import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
    return (
        <section className="content-section">
            <div className="floating-element text-block">
                <h2>Redefining <br /> Elegance</h2>
                <p>
                    Where bold aesthetics meet timeless design.
                    A new era of expression.
                </p>
            </div>

            <div className="floating-element image-block">
                <div className="placeholder-image"></div>
            </div>

            <div className="floating-element stat-block">
                <span className="stat-number">25</span>
                <span className="stat-label">Collection</span>
            </div>
        </section>
    );
};

export default ContentSection;
