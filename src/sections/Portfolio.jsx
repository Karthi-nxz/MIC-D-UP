import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'concerts', label: 'Concerts' },
        { id: 'corporate', label: 'Corporate' },
        { id: 'weddings', label: 'Weddings' },
        { id: 'college', label: 'College Fests' },
    ];

    const projects = [
        { id: 1, title: 'Rock Festival 2024', category: 'concerts', size: 'large' },
        { id: 2, title: 'Tech Summit', category: 'corporate', size: 'small' },
        { id: 3, title: 'Grand Wedding', category: 'weddings', size: 'small' },
        { id: 4, title: 'College Fest Night', category: 'college', size: 'medium' },
        { id: 5, title: 'Music Awards', category: 'concerts', size: 'medium' },
        { id: 6, title: 'Product Launch', category: 'corporate', size: 'large' },
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
