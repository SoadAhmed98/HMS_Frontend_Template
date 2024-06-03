import React from "react";
import Header from "../Components/header.js";
import ContactForm from "../Components/contactForm.js";
import ContactMap from "../Components/contactMap.js";
function Contact () {
    return (
      <>
      <Header head="Contact For MediTech" content="What We Actually Do?" place="Contact Us"/>
      <ContactForm/>
      <ContactMap/>
      </>
    );
  };
  
  export default Contact;