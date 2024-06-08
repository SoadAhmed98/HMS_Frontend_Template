import Header from "../Components/header.js";
import Price from "../Components/price.js";
import AppointmentSection from "../Components/appointment.js";
import { useEffect } from "react";
import WOW from 'wowjs';
import  Navbar  from "../Components/navbar.js";

function Doctor () {

  useEffect(() => {
		new WOW.WOW().init();
	}, []);
    return (
      <>
      <Navbar/>
       <Header head="Pricetable For MediTech" content="What We Actually Do?" place="Pricetable"/>
      <Price/>
      <AppointmentSection/>
      
      </>
    );
  };
  
  export default Doctor;