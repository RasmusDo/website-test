import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import posterImage from '../assets/images/image.png';
import './PosterLanding.css';

const PosterLanding = () => {
    // Force white/clean background
    useEffect(() => {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, []);

    return (
        <div className="poster-page">

            {/* LEFT PANEL - IMAGE */}
            <div className="poster-image-container">
                <img src={posterImage} alt="Abstract Poster Art" className="poster-image" />
                <div className="poster-overlay">
                    <h1 className="poster-title-overlay">SLUT<br />STATION</h1>
                </div>
            </div>

            {/* RIGHT PANEL - CONTENT */}
            <div className="poster-content-container">

                <header className="poster-header">
                    <div className="meta-row">
                        <span>EST. 2024</span>
                        <span>STOCKHOLM</span>
                    </div>
                    <h2 className="content-title">UNDERGROUND<br />CULTURE</h2>
                </header>

                <div className="poster-divider"></div>

                <section className="poster-section">
                    <h3 className="section-label">UPCOMING PROGRAM</h3>
                    <div className="poster-events">
                        {events.map((event, index) => (
                            <Link to={`/event/${event.id}`} key={event.id} className="poster-event-link">
                                <motion.div
                                    className="poster-event-item"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="event-index">0{index + 1}</span>
                                    <div className="event-info">
                                        <span className="event-name">{event.title}</span>
                                        <span className="event-meta">{event.date} — {event.location}</span>
                                    </div>
                                    <span className="event-arrow">↗</span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="poster-divider"></div>

                <section className="poster-section membership-section">
                    <h3 className="section-label">MEMBERSHIP</h3>
                    <p className="poster-text">
                        Access the inaccessible. Join our community for priority tickets and secret location reveals.
                    </p>
                    <Link to="/membership" className="poster-btn">
                        APPLY FOR ACCESS
                    </Link>
                </section>

                <footer className="poster-footer">
                    <span>© 2024 SLUTSTATION</span>
                    <span>INFO@SLUTSTATION.SE</span>
                </footer>

            </div>
        </div>
    );
};

export default PosterLanding;
