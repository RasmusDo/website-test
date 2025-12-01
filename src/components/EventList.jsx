import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { events } from '../data/events';

const EventList = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div style={{ position: 'relative' }}>
            {/* Background Image Display */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '50vw',
                height: '100vh',
                zIndex: -1,
                opacity: hoveredId ? 0.3 : 0,
                transition: 'opacity 0.6s ease',
                pointerEvents: 'none'
            }}>
                {events.map(event => (
                    <motion.div
                        key={event.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: hoveredId === event.id ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            clipPath: 'polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)'
                        }}
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(50%) brightness(0.7)'
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Event List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {events.map((event, index) => (
                    <Link
                        key={event.id}
                        to={`/event/${event.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(event.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                padding: '4rem 0',
                                borderBottom: '1px solid rgba(197, 160, 89, 0.1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '2rem'
                                }}
                                whileHover={{ x: 20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Index */}
                                <span style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '1rem',
                                    color: 'var(--accent-color)',
                                    opacity: 0.5,
                                    minWidth: '3rem'
                                }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Title */}
                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.02em',
                                    flex: 1,
                                    lineHeight: 1
                                }}>
                                    {event.title}
                                </h3>

                                {/* Date & Location */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    gap: '0.5rem',
                                    minWidth: '200px'
                                }}>
                                    <span style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.9rem',
                                        color: 'var(--accent-color)',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {event.date}
                                    </span>
                                    <span style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {event.location}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <motion.div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid rgba(197, 160, 89, 0.3)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        color: 'var(--accent-color)'
                                    }}
                                    whileHover={{ scale: 1.1, borderColor: 'var(--accent-color)' }}
                                >
                                    →
                                </motion.div>
                            </motion.div>

                            {/* Hover Line Effect */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    height: '2px',
                                    background: 'var(--accent-color)',
                                    width: hoveredId === event.id ? '100%' : '0%',
                                    transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                            />
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventList;
