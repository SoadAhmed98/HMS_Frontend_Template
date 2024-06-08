import Header from "../Components/header.js";
import PioneeringHealth from "../Components/pioneeringHealth.js";
import HomeServices from "../Components/homeComponents/home_services.js";
import  Navbar  from "../Components/navbar.js";
import WOW from 'wowjs';
import { useEffect } from "react";
function Services () {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

    return (
      <>
      <Navbar/>
       <Header head="Services MediTech" content="What We Actually Do?" place="Services"/>
       <HomeServices/>
       <PioneeringHealth/>

      </>
    );
  };
  
  export default Services;