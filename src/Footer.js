import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3} className="col">
            <h4>Contact</h4>
            <p><strong>Address:</strong> 123 Street, City, Country</p>
            <p><strong>Phone:</strong> +123 456 789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
              <h4>Follow Us</h4>
              <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram" id='instagram'></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </Col>
          <Col md={2} className="col">
            <h4>About</h4>
            <a href="/#">About Us</a>
            <a href="/#">Delivery Information</a>
            <a href="/#">Privacy Policy</a>
            <a href="/#">Terms & Conditions</a>
            <a href="/#">Contact Us</a>
          </Col>
          <Col md={3} className="col">
            <h4>My Account</h4>
            <a href="/#">Sign In</a>
            <a href="/#">View Cart</a>
            <a href="/#">My Wishlist</a>
            <a href="/#">Track My Order</a>
            <a href="/#">Help</a>
          </Col>
          <Col md={4} className="col">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row gap-1">
              <img src="/img/pay/app.jpg" alt="App Store" className="img-fluid" />
              <img src="/img/pay/play.jpg" alt="Google Play" className="img-fluid" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="/img/pay/pay.png" alt="Payment Methods" className="img-fluid1" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <div className="copyright">
              <p>&copy; 2024 APK Tech Private Limited. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
