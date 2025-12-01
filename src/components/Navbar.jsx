import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: 'var(--nav-height)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 4vw',
                zIndex: 100,
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
            }}
        >
            <Link to="/" style={{ textDecoration: 'none' }}>
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Logo/Icon */}


                    {/* Brand Name */}
                    <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        letterSpacing: '0.05em',
                        color: '#1a1a1a',
                        textTransform: 'uppercase'
                    }}>
                        Slutstation
                    </div>
                </motion.div>
            </Link>

            <ul style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                <li>
                    <Link to="/" style={{
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '0.1em',
                        fontWeight: 400,
                        color: '#ccc'
                    }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/events" style={{
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        letterSpacing: '0.1em',
                        fontWeight: 400,
                        color: '#ccc'
                    }}>
                        Events
                    </Link>
                </li>
                <li>
                    <Link to="/membership">
                        <motion.span
                            style={{
                                fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                                fontSize: '0.85rem',
                                letterSpacing: '0.1em',
                                color: 'var(--accent-color)',
                                fontWeight: 600,
                                padding: '0.5rem 1.5rem',
                                border: '1px solid rgba(197, 160, 89, 0.4)',
                                display: 'inline-block',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{
                                borderColor: 'var(--accent-color)',
                                backgroundColor: 'rgba(197, 160, 89, 0.1)'
                            }}
                        >
                            Join
                        </motion.span>
                    </Link>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
