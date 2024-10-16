import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './DealsOffer.css'; 

const DealsOffer = () => {
    return (
        <>
            <section id="sm-banner" className="section-p1">
                <Container>
                    <Row className='gap-5'>
                        <Col md={5} className="banner-box">
                            <h4>crazy deals</h4>
                            <h2>buy 1 get 1 free</h2>
                            <span>The Best classic dress is on sale at cara</span>
                            <Button  id='button'>Learn More</Button>
                        </Col>
                        <Col md={6} className="banner-box banner-box2">
                            <h4>Spring/Summer</h4>
                            <h2>Upcoming Season</h2>
                            <span>The Best classic dress is on sale at cara</span>
                            <Button id='button'>Collection</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="banner3">
                <Container>
                    <Row className='gap-5'>
                        <Col md={3} className="banner-box">
                            <h2>Upcoming Season</h2>
                            <h3>Winter Collection -50% OFF</h3>
                            <Button  id='button'>Learn More</Button>
                        </Col>
                        <Col md={3} className="banner-box banner-box2">
                            <h2>NEW FOOTWEAR COLLECTION</h2>
                            <h3>Spring/Summer 2023</h3>
                            <Button  id='button'>Learn More</Button>
                        </Col>
                        <Col md={3} className="banner-box banner-box3">
                            <h2>T-shirts</h2>
                            <h3>New Trendy Prints</h3>
                            <Button  id='button'>Learn More</Button>
                        </Col>
                    </Row>
                    <Row className='gap-5'>
                        <Col md={3} className="banner-box banner-box4">
                            <h2>Jacket</h2>
                            <h3>New Trendy Jacket</h3>
                            <Button id='button' onClick={() => window.location.href = 'shop.html#product1'}>Learn More</Button>
                        </Col>
                        <Col md={3} className="banner-box banner-box5">
                            <h2>Watches</h2>
                            <h3>New Trendy Watches</h3>
                            <Button id='button' onClick={() => window.location.href = 'shop.html#product5'}>Learn More</Button>
                        </Col>
                        <Col md={3} className="banner-box banner-box6">
                            <h2>SmartPhone</h2>
                            <h3>New Trendy SmartPhone</h3>
                            <Button id='button' onClick={() => window.location.href = 'shop.html#product3'}>Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default DealsOffer;
