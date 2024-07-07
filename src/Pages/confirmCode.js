import React, { useEffect } from 'react';
import Header from "../Components/header.js";
import ConfirmCodeComponent from "../Components/confirmCode.js";
import Navbar from "../Components/navbar.js";
import WOW from 'wowjs';
import { useHistory } from 'react-router-dom';

function ConfirmCode() {
  const history = useHistory();

  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('login');
    if (isLoggedIn === "true") {
        history.push('/'); 
    }
}, [history]);
  return (
    <>
      <Navbar />
      <ConfirmCodeComponent />
    </>
  );
};

export default ConfirmCode;
