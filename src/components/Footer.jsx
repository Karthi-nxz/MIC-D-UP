import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Celebrity Pitching',
        'Public Relations',
        'Event Marketing',
        'Sponsorship Activation',
    ];

    const socialLinks = [
        { name: 'Instagram', icon: '📷', href: '#' },
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'YouTube', icon: '🎬', href: '#' },
        { name: 'LinkedIn', icon: '💼', href: '#' },
    ];

    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="MIC'D UP Event Production" className="footer-logo-img" />
                        </div>
                        <p className="footer-tagline">
                            Where Every Brand Gets the Spotlight. We elevate your events with celebrity pitching, strategic PR, and powerful sponsorship support.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                {services.map((service) => (
                                    <li key={service}>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul className="contact-list">
                                <li>
                                    <span className="contact-icon">📍</span>
                                    <span>Chennai, India</span>
                                </li>
                                <li>
                                    <span className="contact-icon">📞</span>
                                    <a href="tel:+916369933732">+91 63699 33732</a>
                                </li>
                                <li>
                                    <span className="contact-icon">✉️</span>
                                    <a href="mailto:info@micdup.com">info@micdup.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} MIC'D UP Event Production. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
