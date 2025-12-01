import React from 'react';
import MembershipForm from '../components/MembershipForm';
import { motion } from 'framer-motion';

const Membership = () => {
    return (
        <div style={{
            paddingTop: '120px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '8vh'
        }}>
            <div className="container" style={{ width: '100%', maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 0.9
                    }}>
                        Membership
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        color: '#888',
                        lineHeight: 1.8,
                        fontSize: '1.1rem'
                    }}>
                        Access to our events is strictly for members. Apply below to join our community.
                        Membership grants you priority access to tickets and exclusive location reveals.
                    </p>
                </motion.div>

                <MembershipForm />
            </div>
        </div>
    );
};

export default Membership;
