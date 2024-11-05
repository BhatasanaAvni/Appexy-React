import React,{useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Heros/Styled/Heros1.css";
import hero1bg from "../../../assets/Image/heros/hero-1-bg.png";
import Header from "../Navigation/Navigation";
import hero1 from "../../../assets/Image/heros/hero-1-img.png";
import herobotton from "../../../assets/Image/heros/hero-1-bottom-shape.png";
import MainLayoutIndex from "../../../MainLayout/DemoIndex";
const HeroSection1 = ({ isLight, menuColor, isDarkSection }) => {
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
      <section className="hero-1" id="home" style={{ overflow: "hidden", position: "relative" }}>
  <div
    className="bg-overlay-img"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${hero1bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
     
    }}
  ></div>

  {/* <Header isLight={true} menuColor="text-white" isDarkSection={true} /> */}
  <Header isLight={isLight} menuColor={isScrolled ? 'text-dark' : 'text-white'}  isDarkSection={isDarkSection} />

  <Container>
    <Row className="align-items-center hero-content">
      <Col lg={6}>
        <h1 className="hero-title fw-bold mb-4 pb-3 text-white text-start">
          Here is the best way to present your apps
        </h1>
        <p className="text-white opacity-75 mb-4 pb-3 fs-17 text-start">
          Maecenas tempus, tellus eget condimentum rhoncus quam semper libero sit amet adipiscing sem neque sed ipsum nam quam nunc blandit vel luctus pulvinar.
        </p>
        <div className="subscribe-form me-lg-5 mb-5 mb-lg-0">
          <i className="mdi mdi-email-outline form-icon"></i>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Email Address"
          />
          <a
            href="#"
            className="btn btn-success form-btn"
          >
            <span>Download Now</span>
            <i className="mdi mdi-download download-icon"></i>
          </a>
        </div>
      </Col>
      <Col lg={6} className="text-center text-lg-end d-none d-lg-block">
  <img
    src={hero1}
    alt="Hero"
    className="img-fluid d-none d-sm-block"
    style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
  />
</Col>
    </Row>
  </Container>

  <Container fluid>
    <Row>
      <Col>
        <div className="hero-bottom-shape ">
          <img src={herobotton} alt="Bottom Shape" className="w-100" style={{ objectFit: "cover", overflow: "hidden" }} />
        </div>
      </Col>
    </Row>
  </Container>

  <Container>
    <Row>
      <Col>
        <div className="down-arrow-btn">
          <a href="#how-it-work" className="down-arrow">
          <span className="material-icons">arrow_downward</span>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</section>

      <MainLayoutIndex />
    </>
  );
};

export default HeroSection1;
