import React from 'react'
import Navigation from '../LandingPage/Navigation/Navigation'
import HeroSection from  "../LandingPage/HeroSection/HeroSection"
import DemoIndex from "../LandingPage/DemoIndex/Demoindex"
import AdminUi from "../LandingPage/AdminUi/AdminUi"
import Footer from '../LandingPage/Footer/Footer'
import { useNavigate } from 'react-router-dom';
const LandingIndex = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/'); 
    
  };

  return (
    <>
    
    <Navigation handleRedirect={handleRedirect}/>
    <HeroSection/>
    <DemoIndex/>
    <AdminUi/>
    <Footer/>
    </>
  )
}

export default LandingIndex