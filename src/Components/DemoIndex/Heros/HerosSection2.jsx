import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import hero2 from "../../../assets/Image/heros/hero-2-img.png";
import hero2bg from "../../../assets/Image/heros/hero-2-bg.png";
import Header from "../../DemoIndex/Navigation/Navigation";
import "../Heros/Styled/Heros1.css";
import MainLayoutIndex from "../../../MainLayout/DemoIndex";

const HeroSection2 = ({ isLight, menuColor, isDarkSection }) => {
  return (
    <>
      <section
        className="hero-2"
        id="home"
        style={{ position: "relative", paddingBottom: "2rem" }}
      >
       
        <div
          className="bg-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${hero2bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1, 
          }}
        ></div>

        <Header isLight={false} menuColor="text-dark" isDarkSection={true} />
        {/* <Header isLight={true} menuColor="text-white" isDarkSection={true} /> */}
        <Container>
          <Row className="align-items-center justify-content-center hero-content">
            <Col lg={6}>
              <div
                className="avatar avatar-xl rounded-circle bg-soft-primary text-primary shadow-sm mb-4"
                style={{
                  backgroundColor: "rgba(31, 97, 235, 0.15)",
                  height: "7.5rem",
                  width: "7.5rem",
                }}
              >
                <span
                  className="material-icons mb-0 h2"
                  style={{ fontSize: "rem" }}
                >
                  rocket_launch
                </span>
              </div>
              <h1 className="hero-title fw-bold mb-4 display-5 text-black text-start">
                Manage Your Activity With{" "}
                <span className="text-black">Appexy</span>
              </h1>
              <p className="opacity-75 mb-4 pb-3 fs-17 text-black text-start">
                Maecenas tempus, tellus eget condimentum rhoncus quam semper
                libero sit amet adipiscing sem neque sed ipsum nam quam nunc
                blandit vel luctus pulvinar.
              </p>
              <Row className=" me-3 d-flex justify-content-lg-start w-75">
                <Col>
                  <Button variant="gradient-primary" className="btn-lg ">
                    Get Started Today
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-dark" className="btn-lg ">
                    Download App
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={8} lg={5} className="offset-lg-1">
              <div className="hero-2-img mt-5 mt-lg-0 text-center d-none d-lg-block">
                <Image
                  src={hero2}
                  alt=""
                  fluid
                  className="rounded-lg  d-none d-sm-block"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MainLayoutIndex style={{ paddingTop: "20%" }} />
    </>
  );
};

export default HeroSection2;
