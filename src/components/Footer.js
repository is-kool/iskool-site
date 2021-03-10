import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-info">
        <div>
          <h2>
            Want to Learn More, <br /> Get in Touch With Us
          </h2>
          <p>
            Support: 630-254-5543
            <br />
            Mon-Fri: 7.00 Am to 9.00 Pm (MST)
          </p>
        </div>
        <div className="links">
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              IsKool
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">IsKool © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="http://chaithanyakaruna.blogspot.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="http://chaithanyakaruna.blogspot.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="http://chaithanyakaruna.blogspot.com/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="http://chaithanyakaruna.blogspot.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="http://chaithanyakaruna.blogspot.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
