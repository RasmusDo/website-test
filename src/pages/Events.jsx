import React from 'react';
import EventList from '../components/EventList';
import { motion } from 'framer-motion';

const Events = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '8vh' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '8vh' }}
                >
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 0.9
                    }}>
                        All Events
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.1rem',
                        color: '#666',
                        maxWidth: '600px'
                    }}>
                        A curated selection of underground electronic music experiences.
                    </p>
                </motion.div>

                <EventList />
            </div>
        </div>
    );
};

export default Events;
