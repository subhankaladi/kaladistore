import React from 'react';
import './footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Welcome to our ecommerce platform where we provide quality products at the best prices. 
            Our goal is to ensure customer satisfaction and to deliver products that add value to your life.
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link href="/list">Shop</Link></li>
            <li><Link href="/">Contact Us</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Customer Service</h2>
          <ul>
            <li><Link href="/bseller">Returns</Link></li>
            <li><Link href="/list">Shipping Info</Link></li>
            <li><Link href="/">Support</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: subhankaladi@gmail.com</p>
          <p>Phone: 03293086256</p>
          <p>Address: Ph2: Gulshan E Hadeed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Subhan Kaladi. All rights reserved.</p>
        <div className="social-icons">
          <Link href="https://www.facebook.com/subhanallahkaladi" target="_blank" rel="noreferrer">Facebook</Link>
          <Link href="https://www.instagram.com/subhan_kaladi/" target="_blank" rel="noreferrer">Instagram</Link>
          <Link href="https://www.linkedin.com/in/subhan-kaladi-6242bb31b/" target="_blank" rel="noreferrer">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
