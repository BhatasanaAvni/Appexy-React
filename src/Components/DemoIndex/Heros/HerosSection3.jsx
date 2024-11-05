import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero3Img from '../../../assets/Image/heros/hero-3-img.png';
import hero3bg from '../../../assets/Image/heros/hero-3-bg.png';
import Header from "../../DemoIndex/Navigation/Navigation";
import "../Heros/Styled/Heros1.css";
import MainLayoutIndex from "../../../MainLayout/DemoIndex";
const HeroSection3 = () => {
  return (
    <>
    <section className="hero-3 " id="home" style={{ position: "relative", paddingTop: "120px" ,paddingBottom:"170px"}}>
      <div
        className="bg-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${hero3bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, 
        }}
      ></div>
      <Header isLight={true} menuColor="text-white" isDarkSection={true} />  

      <Container>
        <Row className="align-items-center hero-content">
          <Col lg={6}>
            <h1 className="hero-title fw-bold mb-4 display-4 text-start">
              Best Way to Make Online Payments
            </h1>
            <p className="opacity-75 mb-4 fs-17 text-start">
              Maecenas tempus, tellus eget condimentum rhoncus quam semper libero sit amet adipiscing sem neque sed.
            </p>

        
            <p className="d-flex align-items-center justify-content-start text-sm-start">
              <span className="material-icons text-success me-2">check_circle</span>
              Aenean leo ligula porttitor eu consequat vitae.
            </p>
            <p className="d-flex align-items-center justify-content-start text-sm-start">
              <span className="material-icons text-success me-2">check_circle</span>
              Maecenas tempus tellus eget condimentum rhoncus quam.
            </p>
            <p className="d-flex align-items-center justify-content-start text-sm-start">
              <span className="material-icons text-success me-2">check_circle</span>
              Donec sodales sagittis as consequat.
            </p>

            <Button variant="primary" className="btn-lg d-flex justify-content-lg-start">
               Get Started
            </Button>
          </Col>

          <Col lg={6}>
            <img src={hero3Img} alt="Hero Section 3" className="img-fluid mt-5 mt-lg-0" />
          </Col>
        </Row>
      </Container>
    </section>
    <MainLayoutIndex/>
        </>
  );
};

export default HeroSection3;
