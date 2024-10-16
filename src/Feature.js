import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Feature.css';

const Feature = () => {
  const features = [
    { src: "/img/features/j1.jpeg", alt: "Luxury Clothes", link: "shop.html#product1", text: "Luxury Clothes", bgColor: "#fddde4" },
    { src: "/img/features/l1.jpg", alt: "Mobile Phone", link: "shop.html#product3", text: "Mobile Phone", bgColor: "#CDEBBC" },
    { src: "/img/features/l2.jpg", alt: "Laptop", link: "shop.html#product4", text: "Laptop", bgColor: "#D1E8F2" },
    { src: "/img/features/j4.jpeg", alt: "Luggage & Bags", link: "shop.html#product2", text: "Luggage & Bags", bgColor: "#CDD4F8" },
    { src: "/img/features/j5.jpeg", alt: "Watches", link: "shop.html#product5", text: "Watches", bgColor: "#F6DBF6" },
    { src: "/img/features/j6.jpeg", alt: "Footwear", link: "shop.html#product6", text: "Footwear", bgColor: "#FFF2E5" }
  ];
  return (
    <div id="feature" className="section-p1">
    <Container>
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4 d-flex justify-content-center">
            <Card className="h-100 zoom-card" id='cardsection'>
              <Card.Img variant="top" src={feature.src} alt={feature.alt} style={{ maxHeight: '200px', objectFit: 'cover', borderRadius:'10px' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Button
                  variant="primary"
                  href={feature.link}
                  style={{ backgroundColor: feature.bgColor, color: '#088178', borderColor: feature.bgColor }}
                  className="mt-3"
                >
                  {feature.text}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Feature;
