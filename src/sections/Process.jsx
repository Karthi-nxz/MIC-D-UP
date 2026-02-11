import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Process.css';

const Process = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const steps = [
        {
            number: '01',
            title: 'Discovery & Strategy',
            description: 'We begin with a deep dive into your goals, audience, and brand identity to craft a winning strategy.',
            icon: '🔍',
        },
        {
            number: '02',
            title: 'Creative & Planning',
            description: 'Concept development, messaging, and campaign assets are created to align with your vision.',
            icon: '✏️',
        },
        {
            number: '03',
            title: 'Execution & Promotion',
            description: 'From bookings to media outreach, we handle logistics, deployments, and real-time campaign management.',
            icon: '🚀',
        },
        {
            number: '04',
            title: 'Analysis & Reporting',
            description: 'Post-event reports show sponsor reach, media coverage, and the metrics that matter most to you.',
            icon: '📊',
        },
    ];

    return (
        <section id="process" className="process section section-light" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">Our Process</span>
                    <h2 className="gold-underline">How It <span className="gold-text">Works</span></h2>
                    <p>A proven process from concept to completion</p>
                </motion.div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="process-step"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                        >
                            <div className="step-number-wrapper">
                                <span className="step-number">{step.number}</span>
                                {index < steps.length - 1 && <div className="step-connector"></div>}
                            </div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
