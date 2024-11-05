import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get route parameters
import Header from "../Components/DemoIndex/Navigation/Navigation.jsx";
import HowITWork from "../Components/DemoIndex/HowITWorks/HowItWorks.jsx";
import Features from "../Components/DemoIndex/Features/Features.jsx";
import Counter from "../Components/DemoIndex/Counter/Counter.jsx";
import Swiper from "../Components/DemoIndex/Swiper/Swipers.jsx";
import Testimonial from "../Components/DemoIndex/Testimonial/Testimonial.jsx";
import Pricing from "../Components/DemoIndex/Pricing/Pricing.jsx";
import CustomAccordion from "../Components/DemoIndex/Accordion/CustomAccordion.jsx";
import Available from "../Components/DemoIndex/Available/Available.jsx";
import ContactForm from "../Components/DemoIndex/Form/ContactForm.jsx";
import Footer from "../Components/DemoIndex/Footer/Footer.jsx";


import { Container } from 'react-bootstrap';


const DemoIndex = () => {
  return (
    <> 
      <HowITWork />
      <Features />
      <Counter />
      <Swiper />
      <Testimonial />
      <Pricing />
      <CustomAccordion />
      <Available />
      <ContactForm />
      <Footer />
    </>
  );
};

export default DemoIndex;
