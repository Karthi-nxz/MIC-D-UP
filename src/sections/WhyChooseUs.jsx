import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        {
            icon: '🎯',
            title: 'Precision Planning',
            description: 'Meticulous attention to every detail ensures flawless execution of your event.',
        },
        {
            icon: '🎛️',
            title: 'Premium Equipment',
            description: 'State-of-the-art sound systems, lighting rigs, and staging equipment.',
        },
        {
            icon: '👥',
            title: 'Expert Team',
            description: 'Seasoned professionals with years of experience in event production.',
        },
        {
            icon: '⚡',
            title: 'Reliable Support',
            description: '24/7 technical support and rapid response for any situation.',
        },
        {
            icon: '🎨',
            title: 'Creative Design',
            description: 'Innovative stage designs and visual concepts that captivate audiences.',
        },
        {
            icon: '💰',
            title: 'Competitive Pricing',
            description: 'Premium quality services at prices that respect your budget.',
        },
    ];

    return (
        <section id="why-us" className="why-choose-us section section-light" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">Why Us</span>
                    <h2 className="gold-underline">Why Choose <span className="gold-text">MIC'D UP</span></h2>
                    <p>What sets us apart from the rest</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="feature-line"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
