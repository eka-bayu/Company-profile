import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "../style/home.css";

const HomePage = () => {
  return (
    <div>
      <div className="hero text-center">
        <Container>
          <h1>Welcome to CompanyName</h1>
          <p>We offer innovative solutions to help your business grow.</p>
          <Button variant="primary">Learn More</Button>
        </Container>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=First+Slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Second+Slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Third+Slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col md={4}>
            <h2>About Us</h2>
            <p>
              We are a leading company in the industry with a commitment to
              excellence.
            </p>
          </Col>
          <Col md={4}>
            <h2>Our Services</h2>
            <p>We provide a range of services tailored to your needs.</p>
          </Col>
          <Col md={4}>
            <h2>Contact Us</h2>
            <p>Get in touch with us for more information.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
