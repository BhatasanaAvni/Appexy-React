import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero5Img from "../../../assets/Image/heros/hero-5-img.png";
import heroBottomShape from "../../../assets/Image/hero-bottom-shape.png";
import "./HerosSection1.css"; 
import Header from "../Navigation/Navigation";
import MainLayoutIndex from "../../../MainLayout/DemoIndex";

const HeroSection5 = () => {
  return (
    <>
      <section className="hero-5 bg-light" id="home">
        <Header isLight={true} menuColor="text-white" isDarkSection={true} />

        <Container>
          <Row className="justify-content-center text-center hero-content">
            <Col lg={8}>
              <h1 className="hero-title fw-bold mb-4 display-4">
                Let's <span className="text-primary">Build Your Products</span>{" "}
                by Appexy App.
              </h1>
              <p className="opacity-75 mb-4 pb-3 fs-17">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores quas molestias excepturi similique sint non provident
                sunt in culpa.
              </p>
              <Button variant="gradient-primary" className="btn-lg">
                Let's Get Started
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="bottom-shape position-absolute bottom-0 start-0 end-0  ">
          <img src={heroBottomShape} alt="Bottom Shape" className="w-100" />
        </div>

        <div className="hero-5-img">
          <Container>
            <Row className="justify-content-center hero-content">
              <Col lg={10}>
                <div className="hero-5-img-content ">
                  <img
                    src={hero5Img}
                    alt="Hero Section 5"
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <MainLayoutIndex />
    </>
  );
};

export default HeroSection5;
