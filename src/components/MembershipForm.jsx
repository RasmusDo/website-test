import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MembershipForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        email: '',
        phone: '',
        street: '',
        zip: '',
        city: '',
        acceptTerms: false
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Submitting to API:', formData);
            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                gender: '',
                birthDay: '',
                birthMonth: '',
                birthYear: '',
                email: '',
                phone: '',
                street: '',
                zip: '',
                city: '',
                acceptTerms: false
            });
        } catch (err) {
            setStatus('error');
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem 0',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
        color: 'white',
        outline: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.75rem',
        fontSize: '0.75rem',
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontFamily: 'var(--font-body)',
        fontWeight: 600
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                background: 'transparent',
                padding: '0',
                maxWidth: '700px',
                width: '100%',
                margin: '0 auto'
            }}
        >
            {status === 'success' ? (
                <div style={{
                    textAlign: 'center',
                    padding: '4rem 0'
                }}>
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: 'var(--accent-color)'
                    }}>
                        Application Received
                    </h3>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        color: '#888',
                        marginBottom: '2rem'
                    }}>
                        We will contact you shortly.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn"
                    >
                        Send another
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {/* Name Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label style={labelStyle}>First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <label style={labelStyle}>Gender *</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            style={{
                                ...inputStyle,
                                cursor: 'pointer',
                                appearance: 'none',
                                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C5A059' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 0.5rem center',
                                backgroundSize: '1.2rem',
                                paddingRight: '2.5rem'
                            }}
                            onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label style={labelStyle}>Date of Birth *</label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr', gap: '1rem' }}>
                            <input
                                type="number"
                                name="birthDay"
                                placeholder="Day"
                                min="1"
                                max="31"
                                value={formData.birthDay}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                            <select
                                name="birthMonth"
                                value={formData.birthMonth}
                                onChange={handleChange}
                                required
                                style={{
                                    ...inputStyle,
                                    cursor: 'pointer',
                                    appearance: 'none',
                                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C5A059' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.5rem center',
                                    backgroundSize: '1.2rem',
                                    paddingRight: '2.5rem'
                                }}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            >
                                <option value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <input
                                type="number"
                                name="birthYear"
                                placeholder="Year"
                                min="1900"
                                max={new Date().getFullYear()}
                                value={formData.birthYear}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label style={labelStyle}>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label style={labelStyle}>Street Address *</label>
                        <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                        <div>
                            <label style={labelStyle}>Zip Code *</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>City *</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'}
                                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(197, 160, 89, 0.2)'}
                            />
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div style={{ marginTop: '1rem' }}>
                        <label style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            color: '#aaa'
                        }}>
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginTop: '0.2rem',
                                    accentColor: 'var(--accent-color)',
                                    cursor: 'pointer'
                                }}
                            />
                            <span>
                                I accept the Bylaws & Personal Data Handling Policy *
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn"
                        disabled={status === 'loading'}
                        style={{
                            opacity: status === 'loading' ? 0.7 : 1,
                            marginTop: '1rem',
                            alignSelf: 'flex-start'
                        }}
                    >
                        {status === 'loading' ? 'Processing...' : 'Submit Application'}
                    </button>

                    {status === 'error' && (
                        <p style={{
                            color: '#f44336',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-body)'
                        }}>
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            )}
        </motion.div>
    );
};

export default MembershipForm;
