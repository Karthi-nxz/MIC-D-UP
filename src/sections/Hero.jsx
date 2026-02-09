import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background Effects */}
            <div className="hero-bg">
                <div className="spotlight spotlight-1"></div>
                <div className="spotlight spotlight-2"></div>
                <div className="spotlight spotlight-3"></div>
                <div className="light-beams">
                    <div className="beam beam-1"></div>
                    <div className="beam beam-2"></div>
                    <div className="beam beam-3"></div>
                    <div className="beam beam-4"></div>
                </div>
                <div className="particles"></div>
            </div>

            <div className="hero-content">
                <motion.span
                    className="hero-tag"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Premium Event Production
                </motion.span>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Where Sound Meets<br />
                    <span className="gradient-text">Spectacle</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Professional Event Production | Stage | Sound | Lighting
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        <span>Book Your Event</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#portfolio" className="btn btn-outline">
                        View Our Work
                    </a>
                </motion.div>

                <motion.div
                    className="hero-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="scroll-indicator">
                        <div className="scroll-dot"></div>
                    </div>
                    <span>Scroll to explore</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
