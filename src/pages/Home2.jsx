import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home2.css';
import Scene from '../components/Scene';
import rightDesign from '../assets/images/HögerDesign.png';
import leftDesign from '../assets/images/Vänsterdesign.png';
import overlay2 from '../assets/images/Overlay2.png';
import portrait1 from '../assets/images/porträtt.jpg';
import portrait2 from '../assets/images/porträtt2.jpg';
import portrait3 from '../assets/images/portrait3.jpg';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Home2 = () => {
    const { scrollY } = useScroll();
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Scroll Animations
    const yParallax = useTransform(scrollY, [0, 1000], [0, 150]); // Text moves down slightly
    const heavyParallax = useTransform(scrollY, [0, 1000], [0, 50]); // Images move very little (super heavy feel)
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]); // Subtle scale up

    const faqs = [
        {
            question: "What does it mean to become a member?",
            answer: `There are two types of membership:

General Membership (required) – A must to attend our events, access to location drops, tickets etc. This makes you a member in Kulturföreningen Musikbopp.

Selective Membership – A curated, limited tier for those who are deeply connected to what we do. Selective members get access to our most private parties and internal spaces. You're in the loop and one step ahead.

The reason we use membership is simple: our events are private. This keeps the vibe intact. Personal, intentional and far from the mainstream.

Becoming a member means you're aligned with our culture and values. Membership gives you access to a space beyond the ordinary. A nightlife built on sound, trust, and something real.

It's free, always will be, and lasts for one year at a time.`
        },
        {
            question: "What makes us special?",
            answer: `We're a nonprofit that curates nightlife experiences with one goal: connection through sound and setting. We host unique events like outdoor parties to support DJs, underground music, and the community that surrounds it.

A real alternative to the current nightlife scene. Not quite club, not quite rave but always real.`
        },
        {
            question: "When is the next event?",
            answer: `We don't do quantity – we do quality. We aim for just enough to keep it rare, memorable and worth the wait. Every event is built from scratch, and we don't throw parties just for the sake of it.

We announce our events on Instagram. Stay tuned!`
        },
        {
            question: "What's your stance on drugs?",
            answer: `We're against drug use at our events. Not for moral panic but because it breaks the energy. It creates an environment we're not here for.`
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="home2-page">
            <div className="home2-content">
                <section className="h2-section hero" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                        <Scene />
                    </div>

                    {/* Text Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        mixBlendMode: 'difference' // Using difference so white text turns black over white logo
                    }}>
                        <h1 style={{
                            color: '#ffffff',
                            fontSize: 'clamp(4rem, 12vw, 10rem)',
                            fontFamily: '"Oswald", sans-serif',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            textAlign: 'center',
                            lineHeight: 0.9,
                            margin: 0,
                            letterSpacing: '-0.02em'
                        }}>
                            Music<br />in mind.
                        </h1>
                    </div>
                </section>

                {/* Boundary Elements - Moved outside content-wrapper for better blending */}
                <div style={{
                    position: 'absolute',
                    top: '100vh', // Exact fold line
                    left: '0',
                    width: '100%',
                    transform: 'translateY(-50%)', // Center on the line
                    zIndex: 20,
                    pointerEvents: 'none',
                    mixBlendMode: 'difference',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    <div
                        className="boundary-text-wrapper"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            transform: 'translateY(-20px)'
                        }}
                    >
                        <p className="boundary-subtext" style={{
                            fontSize: '1.5rem',
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: '500',
                            color: '#ffffff',
                            margin: '0 0 -1rem 0',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em'
                        }}>
                            Not your average
                        </p>
                        <h2 className="boundary-maintext" style={{
                            fontSize: 'clamp(3rem, 15vw, 12rem)',
                            fontFamily: '"Oswald", sans-serif',
                            fontWeight: '700',
                            color: '#ffffff',
                            margin: 0,
                            lineHeight: 1,
                            letterSpacing: '-0.02em'
                        }}>
                            NIGHT
                        </h2>
                    </div>
                </div>

                {/* Side Designs - Static with Perfect Color Matching */}
                <div style={{
                    position: 'absolute',
                    top: '100vh', // Exact fold line
                    left: '0',
                    width: '100%',
                    transform: 'translateY(-50%)', // Center on the line
                    zIndex: 20,
                    pointerEvents: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    {/* Left Design - #e9e9e9 (Matches Content BG) */}
                    <div style={{ position: 'absolute', left: 0, height: '30vw', maxHeight: '400px', transform: 'translateY(-20px)' }}>
                        {/* Hidden image to set size/aspect ratio */}
                        <img src={leftDesign} alt="" style={{ height: '100%', width: 'auto', opacity: 0 }} />
                        {/* Visible masked fill */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            backgroundColor: '#e9e9e9',
                            maskImage: `url(${leftDesign})`,
                            WebkitMaskImage: `url(${leftDesign})`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }} />
                    </div>

                    {/* Right Design - Matches Hero Gradient */}
                    <div style={{ position: 'absolute', right: 0, height: '30vw', maxHeight: '400px', transform: 'translateY(20px)' }}>
                        {/* Hidden image to set size/aspect ratio */}
                        <img src={rightDesign} alt="" style={{ height: '100%', width: 'auto', opacity: 0 }} />
                        {/* Visible masked fill with fixed gradient */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            backgroundColor: '#111111', // Matches the solid page background
                            maskImage: `url(${rightDesign})`,
                            WebkitMaskImage: `url(${rightDesign})`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center'
                        }} />
                    </div>
                </div>

                {/* Triangular Image Gallery */}
                <div className="image-gallery-section">
                    <div className="image-gallery-container">
                        <div className="gallery-images-row">
                            <motion.div
                                className="gallery-image-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                style={{ scale: useTransform(scrollY, [0, 2000], [1, 1.05]) }}
                            >
                                <img src={portrait1} alt="Event atmosphere" />
                            </motion.div>
                            <motion.div
                                className="gallery-image-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{ scale: useTransform(scrollY, [0, 2000], [1, 1.08]) }}
                            >
                                <img src={portrait2} alt="DJ performance" />
                            </motion.div>
                            <motion.div
                                className="gallery-image-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={{ scale: useTransform(scrollY, [0, 2000], [1, 1.06]) }}
                            >
                                <img src={portrait3} alt="Crowd dancing" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper" style={{ position: 'relative' }}>
                    <section className="h2-section content next-event-section">
                        <div className="next-event-container">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="next-event-content"
                            >
                                <p className="next-event-label">Next Event</p>
                                <h2 className="next-event-title">Winter Solstice</h2>

                                <div className="event-details">
                                    <div className="event-detail-item">
                                        <span className="detail-label">Date</span>
                                        <span className="detail-value">December 21, 2025</span>
                                    </div>
                                    <div className="event-detail-item">
                                        <span className="detail-label">Time</span>
                                        <span className="detail-value">22:00 - 04:00</span>
                                    </div>
                                    <div className="event-detail-item">
                                        <span className="detail-label">Location</span>
                                        <span className="detail-value">TBA for Members</span>
                                    </div>
                                </div>

                                <div className="event-vibe">
                                    <span className="detail-label">Vibe</span>
                                    <span className="detail-value">Tech House</span>
                                </div>

                                <Link to="/events" className="next-event-button">
                                    <span>View the Event</span>
                                    <motion.span
                                        className="button-arrow"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                    </section>

                    <section className="h2-section content faqs-section">
                        <div className="faqs-container">
                            <h2 className="faqs-title">FAQs</h2>
                            <div className="faqs-list">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="faq-item">
                                        <button
                                            className={`faq-question ${openFaqIndex === index ? 'active' : ''}`}
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <span>{faq.question}</span>
                                            <motion.span
                                                className="faq-icon"
                                                animate={{ rotate: openFaqIndex === index ? 45 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                +
                                            </motion.span>
                                        </button>
                                        <AnimatePresence>
                                            {openFaqIndex === index && (
                                                <motion.div
                                                    className="faq-answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className="faq-answer-content">
                                                        {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                                                            <p key={pIndex}>{paragraph}</p>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home2;
