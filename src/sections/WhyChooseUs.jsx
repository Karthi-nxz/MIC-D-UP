import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        {
            icon: '📖',
            title: 'Event & Brand Storytelling',
            description: 'We craft compelling narratives that bring your brand and event to life for every audience.',
        },
        {
            icon: '⭐',
            title: 'Celebrity & Influencer Campaigns',
            description: 'Personalized celebrity and influencer partnerships tailored to your brand\'s identity and goals.',
        },
        {
            icon: '📢',
            title: 'Integrated PR & Promotion',
            description: 'Seamless PR and promotional execution across media, social, and digital channels.',
        },
        {
            icon: '📊',
            title: 'Data-Driven Sponsorship',
            description: 'Strategic sponsorship planning powered by data, ensuring maximum ROI for every partner.',
        },
        {
            icon: '🤝',
            title: 'Dedicated Support',
            description: 'A committed team by your side from initial concept all the way through to post-event reporting.',
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
