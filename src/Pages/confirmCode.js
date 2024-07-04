import React, { useEffect } from 'react';
import Header from "../Components/header.js";
import ConfirmCodeComponent from "../Components/confirmCode.js";
import Navbar from "../Components/navbar.js";
import WOW from 'wowjs';

function ConfirmCode() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Navbar />
      <ConfirmCodeComponent />
    </>
  );
};

export default ConfirmCode;
