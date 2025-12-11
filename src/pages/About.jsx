import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="about-name">
                        HENRI<br />
                        HEYMANS
                    </h1>

                    <div className="about-details">
                        <p className="about-title">Creative Developer</p>
                        <p className="about-location">Based in Stockholm</p>
                    </div>

                    <div className="about-links">
                        <a href="#" className="about-link">Work</a>
                        <a href="#" className="about-link">Contact</a>
                        <a href="#" className="about-link">Instagram</a>
                    </div>
                </motion.div>

                <motion.div
                    className="about-scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="scroll-text">Scroll</div>
                    <div className="scroll-line"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
