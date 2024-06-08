import React, { useEffect } from "react";
import Header from "../Components/header.js";
import ContactForm from "../Components/contactForm.js";
import ContactMap from "../Components/contactMap.js";
import  Navbar  from "../Components/navbar.js";
import WOW from 'wowjs';

function Contact () {

  useEffect(() => {
		new WOW.WOW().init();
	}, []);

    return (
      <>
      <Navbar/>
      <Header head="Contact For MediTech" content="What We Actually Do?" place="Contact Us"/>
      <ContactForm/>
      <ContactMap/>
      </>
    );
  };
  
  export default Contact;