// src/components/Testimonial.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import necessary Bootstrap components
import user1img from "../../../assets/Image/users/user-1.jpg";
// Brand images
import {BootStrapLogo,DribbbleLogo,InstaLogo,JqueryLogo} from "../../../assets/Image/brand-logo/BrandLogo"

function Testimonial() {
  const TestimonialData = [
    {
      quote: "Itaque earum us tenetur sapiente delectus asperiores repellat.",
      detail: "At vero eos et accusamus iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqued corrupti as quos dolores quas molestias excepturi occaecati provident.",
      imgSrc: user1img,
      name: "Mayra Vasquez",
      role: "Web Development, USA",
    },
  ];

  const BrandData = [
    { imgSrc: DribbbleLogo, alt: "Dribbble", height: 40 },
    { imgSrc: InstaLogo, alt: "Instagram", height: 40 },
    { imgSrc: BootStrapLogo, alt: "Bootstrap", height: 40 },
    { imgSrc: JqueryLogo, alt: "jQuery", height: 40 },
  ];

  return (
    <section className="section bg-light" id="testimonial">
      <Container className="custom-container">
        {/* Heading */}
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={11} className="text-center">
            <h6 className="subtitle">
              Our <span className="fw-bold">Testimonial</span>
            </h6>
            <h2 className="title">What Our Customers Say</h2>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
            </p>
          </Col>
        </Row>

        {/* Testimonial Box */}
        <Row className="justify-content-center">
          <Col lg={8}>
            {TestimonialData.map((testimonial, index) => (
              <div className="testimonial-box text-center" key={index}>
                <p className="text-muted mb-2">“{testimonial.quote}”</p>
                <h5 className="fs-18 fw-semibold lh-base mb-4 pb-3">
                  {testimonial.detail}
                </h5>
                <img
                  src={testimonial.imgSrc}
                  alt=""
                  className="shadow rounded-circle"
                  width="70"
                />
                <h5 className="fs-18 fw-semibold mt-4 mb-0">{testimonial.name}</h5>
                <p className="text-muted fs-14">{testimonial.role}</p>
              </div>
            ))}
          </Col>
        </Row>

        {/* Brand Logos */}
        <Row className="mt-5 w-100">
          {BrandData.map((brand, index) => (
            <Col  className="text-center w-100" key={index}>
              <img src={brand.imgSrc} alt={brand.alt} height={brand.height} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
