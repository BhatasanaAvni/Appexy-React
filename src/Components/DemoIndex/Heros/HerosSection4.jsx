import React ,{useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero4Img from "../../../assets/Image/heros/hero-4-img.png";
import hero4bg from "../../../assets/Image/heros/hero-4-bg.jpg";
import Header from "../../DemoIndex/Navigation/Navigation";
import "../Heros/Styled/Heros1.css";
import MainLayoutIndex from "../../../MainLayout/DemoIndex";
const HeroSection4 = ({ isLight, menuColor, isDarkSection}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className="hero-4"
        id="home"
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "170px",
        }}
      >
        <div
          className="bg-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${hero4bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1, 
          }}
        ></div>
      <Header isLight={isLight} menuColor={isScrolled ? 'text-dark' : 'text-white'}  isDarkSection={isDarkSection} />

        <Container>
          <Row className="align-items-center hero-content">
            <Col lg={6}>
              <div
                className="avatar avatar-xl rounded-circle bg-soft-light text-white shadow-sm mb-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  height: "7.5rem",
                  width: "7.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="material-icons mb-0 h2"
                  style={{ fontSize: "3rem" }}
                >
                  shield
                </span>
              </div>
              <h1 className="hero-title text-white text-start fw-bold mb-5 display-5">
                Secure Your <span className="text-primary">Payment</span>{" "}
                Application
              </h1>
              <p className="text-white-50 mb-4 pb-2 fs-17 mb-5 text-start">
                Maecenas tempus, tellus eget condimentum rhoncus quam semper
                libero sit amet adipiscing sem neque sed.
              </p>

          
              <p className="text-white-50 d-flex align-items-center mb-2">
                <span className="material-icons text-success me-2 ">
                  check_circle
                </span>
                Nemo enim ipsam voluptatem voluptas aspernatur.
              </p>
              <p className="text-white-50 d-flex align-items-center mb-2">
                <span className="material-icons text-success me-2">
                  check_circle
                </span>
                Quis autem vel eum iure reprehenderit.
              </p>

              <Button
                variant="primary"
                className="btn-lg d-flex justify-content-start align-items-center"
                style={{ marginTop: "100px", marginLeft: "0" }} 
              >
                Get Started{" "}
                <span className="material-icons ms-1 fs-22">arrow_forward</span>
              </Button>
            </Col>

            <Col lg={6} className="d-none d-lg-block">
              <div className="mt-5 mt-lg-0">
                <img
                  src={hero4Img}
                  alt="Hero Section 4"
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MainLayoutIndex />
    </>
  );
};

export default HeroSection4;
