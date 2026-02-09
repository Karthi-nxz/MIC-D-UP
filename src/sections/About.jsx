import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { number: 100, suffix: '+', label: 'Events' },
        { number: 50, suffix: '+', label: 'Clients' },
        { number: 10, suffix: '+', label: 'Cities' },
    ];

    return (
        <section id="about" className="about section section-light" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-wrapper">
                            <div className="image-placeholder">
                                <div className="placeholder-icon">🎤</div>
                                <span>Event Setup</span>
                            </div>
                            <div className="image-border"></div>
                        </div>
                        <div className="floating-badge">
                            <span className="badge-number">5+</span>
                            <span className="badge-text">Years Experience</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="section-tag">About Us</span>
                        <h2>Crafting <span className="gold-text">Unforgettable</span> Experiences</h2>
                        <p className="about-lead">
                            MIC'D UP is a premium event production company dedicated to delivering world-class
                            sound, lighting, and stage experiences for events of all scales.
                        </p>
                        <p>
                            From electrifying concerts to elegant corporate gatherings, we bring technical
                            excellence and creative vision to every project. Our team of seasoned professionals
                            ensures flawless execution, transforming your vision into reality.
                        </p>
                        <p>
                            With state-of-the-art equipment and a passion for perfection, we've earned the
                            trust of leading brands, artists, and organizations across the country.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <span className="stat-number">
                                        <Counter target={stat.number} isInView={isInView} />
                                        {stat.suffix}
                                    </span>
                                    <span className="stat-label">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Animated counter component
const Counter = ({ target, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span>{count}</span>;
};

export default About;
