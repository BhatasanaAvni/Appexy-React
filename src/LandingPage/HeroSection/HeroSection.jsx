import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonButton from "../../CommonComponents/CommonButton";
import { img1 } from "../../assets/Image/demo/demoImage";
const HeroSection = () => {
  const textTransparentStyle = {
    color: "transparent",
    backgroundColor: "rgb(29, 78, 216)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    fontSize: "40px",
    marginBottom: "40px",
    lineHeight: "54px",
    fontWeight: 600,
  };
  const topPaddingCss = {
    padding: "140px 0 80px 0 ",
  };
  return (
    <React.Fragment>
      <section className="section bg-light" id="home" style={topPaddingCss}>
        <div className="custom-container">
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <div className="home-wrapper">
                <div className="text-tran-box">
                  <h1 style={textTransparentStyle}>
                    Appexy - Landing & Admin Dashboard HTML Template
                  </h1>
                </div>
                <p>
                  Appexy is a fully responsive landing template built using the
                  latest bootstrap framework. It’s designed for describing your
                  app, agency or business.
                </p>
                <div className="w-75">
                  <CommonButton
                    icon="visibility"
                    label="Demo"
                    link="#demo"
                    className="btn btn-sm btn-primary mt-4 w-25"
                  />
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="bg-white p-2 shadow rounded-4 h-100 w-100">
                <img src={img1} alt="Hero" className="img-fluid rounded-3" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
