import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: '🎤',
            title: 'Celebrity Pitching & Influencer Partnerships',
            description: 'We connect your brand with the right celebrities, influencers, and public figures to boost visibility and credibility. Our team crafts strategic pitches focused on mutual value and long-term collaboration.',
        },
        {
            icon: '📰',
            title: 'Public Relations & Media Outreach',
            description: 'Our PR experts build buzz and media presence for your event through press releases, media kits, and targeted outreach to journalists and outlets. A strong media strategy ensures your event gets the attention it deserves.',
        },
        {
            icon: '📣',
            title: 'Promotion & Event Marketing',
            description: 'From social media campaigns to digital ads and email blasts, we amplify your event\'s reach. We handle content creation, scheduling, and cross-platform promotion — all designed to maximize engagement and attendance.',
        },
        {
            icon: '🤝',
            title: 'Sponsorship Activation & Stall Management',
            description: 'We secure and manage sponsorship deals tailored to your event. From branded stalls and activations to sponsor visibility, we make sure every partner gets maximum exposure and value.',
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="services" className="services section section-dark" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">What We Do</span>
                    <h2 className="gold-underline">Our Services</h2>
                    <p>Comprehensive event production solutions tailored to your vision</p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="service-card card"
                            variants={cardVariants}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="card-shine"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
