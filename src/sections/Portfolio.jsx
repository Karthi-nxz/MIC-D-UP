import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'brand-launch', label: 'Brand Launches' },
        { id: 'gala', label: 'Corporate Galas' },
        { id: 'festival', label: 'Festivals' },
        { id: 'activation', label: 'Product Activations' },
    ];

    const projects = [
        { id: 1, title: 'Luxury Brand Launch', category: 'brand-launch', size: 'large' },
        { id: 2, title: 'Annual Corporate Gala', category: 'gala', size: 'small' },
        { id: 3, title: 'Music & Culture Festival', category: 'festival', size: 'small' },
        { id: 4, title: 'Tech Product Activation', category: 'activation', size: 'medium' },
        { id: 5, title: 'Fashion Brand Showcase', category: 'brand-launch', size: 'medium' },
        { id: 6, title: 'Charity Gala Night', category: 'gala', size: 'large' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="portfolio" className="portfolio section section-dark" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">Our Work</span>
                    <h2 className="gold-underline">Portfolio</h2>
                    <p>Showcasing our finest productions and memorable events</p>
                </motion.div>

                <motion.div
                    className="portfolio-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    className="portfolio-grid"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className={`portfolio-item ${project.size}`}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="portfolio-placeholder">
                                    <span className="placeholder-emoji">📸</span>
                                </div>
                                <div className="portfolio-overlay">
                                    <span className="portfolio-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <button className="portfolio-link">View Project</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
