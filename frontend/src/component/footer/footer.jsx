import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>BhartiyaSanskriti</h2>
          <p>
            Embracing the rich cultural heritage of India by bringing local arts,
            crafts, and traditions to the global market. Join us in celebrating
            and supporting local artisans.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section follow">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 BhartiyaSanskriti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
