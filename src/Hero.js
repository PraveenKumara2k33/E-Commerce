import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Hero.css';


const Hero = () => {
  return (
    <Carousel interval={3000} pause={false} style={{marginTop:"-16px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/banner.png"
          style={{height:"400px"}}
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-center hero-slide1">
          <h4>Fancy-Deals</h4>
          <h2>Super Value deals</h2>
          <h1>On all Products</h1>
          <p>Save more With copons &amp; up to 25% off!</p>
          <Button className="mt-3 butcustom">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/smartdevice.jpg"
          style={{height:"400px"}}
          alt="Second slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-center hero-slide2">
          <h4>Fancy-Deals</h4>
          <h2>Super Value deals</h2>
          <h1>On all Products</h1>
          <p>Save more With copons &amp; up to 25% off!</p>
          <Button  className="mt-3 butcustom">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/shoes0.jpg"
          style={{height:"400px"}}
          alt="Third slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-center hero-slide3">
          <h4>Fancy-Deals</h4>
          <h2>Super Value deals</h2>
          <h1>On all Products</h1>
          <p>Save more With copons &amp; up to 25% off!</p>
          <Button className="mt-3 butcustom">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
