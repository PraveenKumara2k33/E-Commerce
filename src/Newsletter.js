import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1">
      <div className="newsletter-text">
        <h4>Sign Up for Newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
};

export default Newsletter;
