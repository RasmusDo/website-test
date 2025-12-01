import React from 'react';
import Hero from '../components/Hero';
import EventList from '../components/EventList';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Events Section */}
            <section className="container section">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '6rem',
                        flexWrap: 'wrap',
                        gap: '2rem'
                    }}>
                        <div>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '-0.02em',
                                lineHeight: 0.9
                            }}>
                                Upcoming<br />Rituals
                            </h2>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1rem',
                                color: '#666',
                                maxWidth: '400px',
                                lineHeight: 1.6
                            }}>
                                Experience the sound of the underground. Each event is a journey into the depths of electronic music.
                            </p>
                        </div>

                        <Link to="/events" className="btn">
                            View All Events
                        </Link>
                    </div>

                    <EventList />
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container section" style={{ paddingTop: '15vh', paddingBottom: '15vh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        padding: '8vh 0',
                        borderTop: '1px solid rgba(197, 160, 89, 0.1)',
                        borderBottom: '1px solid rgba(197, 160, 89, 0.1)'
                    }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em'
                    }}>
                        Join The Circle
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.1rem',
                        color: '#888',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem'
                    }}>
                        Membership grants you priority access to tickets and exclusive location reveals.
                    </p>
                    <Link to="/membership" className="btn">
                        Apply Now
                    </Link>
                </motion.div>
            </section>
        </>
    );
};

export default Home;
