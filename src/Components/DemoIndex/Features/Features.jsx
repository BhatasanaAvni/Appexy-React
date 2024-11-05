// src/components/FeaturesSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureList from './FeatureList';
import "../Features/Feature.css";
import {Featuresimg1,Featuresimg2} from "../../../assets/Image/Images"
const Features= () => {
  const features = [
    {
      
      description: <p><strong>The wise a therefore always holds</strong> in us matters to this principle a selection a rejects pleasures.</p>,
      icon: 'check',
    },
    {
     
      description: <p>Sed perspiciatis omnis a <strong> natus error accusantium doloremque</strong> laudantium tota rem aperiam eaque ipsa quae illo inventore.</p>,
      icon: 'layers',
    },
    {
  
      description: <p>Et sit <strong>quidem rerum facilis as expedita</strong>  distinctio am libero tempore cum <strong>soluta nobis est</strong>  eligendi optio cumque nihil impedit quo minus.</p>,
      icon: 'lock',
    },
  ];

  return (
    <section className="section bg-light" id="features">
      <Container style={{padding: "90px"}} className="custom-container">
        <Row className="justify-content-center mb-5" >
          <Col md={8} lg={10} className="text-center">
            <h6 className="subtitle">Our <span className="fw-bold">Features</span></h6>
            <h2 className="title">Smart Solutions For Busy People</h2>
            <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.</p>
          </Col>
        </Row>

        <Row className="align-items-center ">
          <Col lg={6}>
            <img src={Featuresimg1} alt="" className="img-fluid d-block mx-auto ms-lg-auto" />
          </Col>
          <Col lg={6} offset-lg={1}>
            <h1 className="fs-38 mb-4">Discover your destination</h1>
            <p className="text-muted">On the other hand, we denounce with righteous indignation so blinded that they cannot.</p>
            <FeatureList features={features} />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="fs-38 mb-4">Connecting people, Places</h1>
            <p className="text-muted">On the other hand, we denounce with righteous indignation so blinded that they cannot.</p>
            <FeatureList features={features} />
          </Col>
          <Col lg={6} offset-lg={1}>
            <img src={Featuresimg2} alt="" className="img-fluid d-block mx-auto ms-lg-auto" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;

