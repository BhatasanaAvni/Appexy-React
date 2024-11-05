import React,{useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import heroBg1 from '../../../assets/Image/heros/hero-6-bg-1.jpg';
import heroBg2 from '../../../assets/Image/heros/hero-6-bg-2.jpg';
import heroBg3 from '../../../assets/Image/heros/hero-6-bg-3.jpg';
import { MdRocketLaunch, MdAttachMoney, MdLayers, MdArrowBack, MdArrowForward } from 'react-icons/md';
import Header from "../../../Components/DemoIndex/Navigation/Navigation";
import "../Heros/Styled/Heros1.css";
import MainLayoutIndex from "../../../MainLayout/DemoIndex";
const HeroSection6 = ({ isLight, menuColor, isDarkSection}) => {
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
  const slides = [
    {
      id: 1,
      bgImage: heroBg1,
      icon: <MdRocketLaunch size={24} />,
      title: 'Integrate Salesforce with The Apps You Use.',
      description: 'At vero eos et accusamus et iusto odio dignissimos...',
    },
    {
      id: 2,
      bgImage: heroBg2,
      icon: <MdAttachMoney size={24} />,
      title: 'Make Your Transactions even easier with Appexy',
      description: 'At vero eos et accusamus et iusto odio dignissimos...',
    },
    {
      id: 3,
      bgImage: heroBg3,
      icon: <MdLayers size={24} />,
      title: 'Manage all Your Finances Easily with Appexy',
      description: 'At vero eos et accusamus et iusto odio dignissimos...',
    },
  ];

  return (
    <>
    <section id="home" className="hero-6 position-relative">
    <Header isLight={isLight} menuColor={isScrolled ? 'text-dark' : 'text-white'}  isDarkSection={isDarkSection} />

      <Carousel fade controls prevIcon={<MdArrowBack />} nextIcon={<MdArrowForward />}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} style={{ backgroundImage: `url(${slide.bgImage})` }}>
            <div className="bg-overlay"></div>
            <div className="carousel-content">
              <Container style={{padding:"120px 0 "}}>
                <Row className="justify-content-center text-center text-white">
                  <Col md={10} lg={7}>
                    <div className=" text-light avatar avatar-xl rounded-circle mx-auto mb-4 " >
                      {slide.icon}
                    </div>
                    <h1 className="display-4 fw-semibold mb-4">{slide.title}</h1>
                    <p className="text-white-50 mx-lg-5 mb-5">{slide.description}</p>
                    <Button variant="primary" size="lg px-4 py-2 " style={{ fontSize: "17px"}}>
                      Get Started
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
       <MainLayoutIndex />
       </>
  );
};

export default HeroSection6;
