import React, { useEffect } from 'react';
import Header from "../Components/header.js";
import Navbar from "../Components/navbar.js";
import WOW from 'wowjs';

function ConfirmCode() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Navbar />
      <Header head="Package Invoice For MediTech" content="How to confirm your booking?" place="Package Invoice"/>

      
    </>
  );
};

export default ConfirmCode;
