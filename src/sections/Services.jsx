import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: '🎸',
            title: 'Concert Production',
            description: 'Full-scale concert production with world-class sound systems, lighting rigs, and stage design for unforgettable live experiences.',
        },
        {
            icon: '🏢',
            title: 'Corporate Events',
            description: 'Professional audio-visual solutions for conferences, product launches, and corporate gatherings that leave lasting impressions.',
        },
        {
            icon: '🎓',
            title: 'College Fests',
            description: 'High-energy setups for college festivals with cutting-edge sound, dynamic lighting, and crowd-pumping atmosphere.',
        },
        {
            icon: '💒',
            title: 'Wedding Stage Setup',
            description: 'Elegant and customized stage designs with premium decor, lighting, and sound for your special day.',
        },
        {
            icon: '🔊',
            title: 'Professional Audio',
            description: 'State-of-the-art sound systems, mixing consoles, and acoustic engineering for crystal-clear audio delivery.',
        },
        {
            icon: '💡',
            title: 'Lighting & Rigging',
            description: 'Creative lighting design, LED walls, moving heads, and professional rigging for spectacular visual effects.',
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
