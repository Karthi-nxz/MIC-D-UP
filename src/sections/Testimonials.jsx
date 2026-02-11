import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Shree Rahul',
            role: 'Event Manager, TechCorp',
            text: 'MIC\'D UP transformed our annual conference into an unforgettable experience. The sound quality was impeccable, and the lighting design was absolutely stunning.',
        },
        {
            id: 2,
            name: 'Pavan',
            role: 'College Fest Coordinator',
            text: 'Working with MIC\'D UP was a game-changer for our college fest. Their professionalism and attention to detail exceeded all our expectations.',
        },
        {
            id: 3,
            name: 'Kirath Vignan',
            role: 'Concert Promoter',
            text: 'The team delivered world-class production for our music festival. From stage design to audio engineering, everything was perfect.',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="testimonials section section-dark" ref={ref}>
            <div className="testimonials-glow"></div>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">Testimonials</span>
                    <h2 className="gold-underline">What Our Clients Say</h2>
                </motion.div>

                <motion.div
                    className="testimonials-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="quote-icon">"</div>

                    <div className="testimonial-carousel">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="testimonial-slide"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h4>{testimonials[currentIndex].name}</h4>
                                        <span>{testimonials[currentIndex].role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="testimonial-nav">
                        <button onClick={prevTestimonial} className="nav-btn" aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={nextTestimonial} className="nav-btn" aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
