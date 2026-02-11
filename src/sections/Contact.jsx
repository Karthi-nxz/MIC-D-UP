import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
    };

    const contactInfo = [
        { icon: '📍', label: 'Address', value: 'Chennai, India' },
        { icon: '📞', label: 'Phone', value: '+917845482970', href: 'tel:+917845482970' },
        { icon: '✉️', label: 'Email', value: 'micdupeventproductions@gmail.com', href: 'mailto:micdupeventproductions@gmail.com' },
    ];

    return (
        <section id="contact" className="contact section section-dark" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="gold-underline">Contact Us</h2>
                    <p>Let's turn your event into an unforgettable experience.</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Let's Make It Happen</h3>
                        <p>
                            Whether you're looking for celebrity pitching, PR support, promotions,
                            stalls, or sponsorship collaborations — we're just one message away.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="contact-item">
                                    <span className="contact-icon">{info.icon}</span>
                                    <div>
                                        <span className="contact-label">{info.label}</span>
                                        {info.href ? (
                                            <a href={info.href}>{info.value}</a>
                                        ) : (
                                            <span>{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="quick-contact">
                            <h4>Quick Connect</h4>
                            <div className="quick-buttons">
                                <a href="https://wa.me/917845482970" className="quick-btn whatsapp" target="_blank" rel="noopener noreferrer">
                                    <span>💬</span> WhatsApp
                                </a>
                                <a href="https://www.instagram.com/kartthii._/?hl=en" className="quick-btn instagram" target="_blank" rel="noopener noreferrer">
                                    <span>📷</span> Instagram
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="gmail@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 99999 99999"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventType">Event Type</label>
                                <select
                                    id="eventType"
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Service</option>
                                    <option value="celebrity">Celebrity Pitching</option>
                                    <option value="pr">PR Support</option>
                                    <option value="promotion">Promotions</option>
                                    <option value="stalls">Stalls & Activations</option>
                                    <option value="sponsorship">Sponsorship</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your event..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            <span>Send Message</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                    </motion.form>
                </div>

                <motion.div
                    className="map-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11539317544!2d79.87933054999999!3d13.04780585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6571dff0!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707560000000!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MIC'D UP Location - Chennai"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
