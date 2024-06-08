import React, { useEffect } from "react";
import WOW from 'wowjs';
import  Navbar  from "../Components/navbar.js";


const NotFound = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
    <Navbar/>
    <section className="text-center">
    <h1 >Page Not Found</h1>
    <img src="images/404404.gif" style={{width:"20rem",height:"18rem"}}/>
    </section>
    </>
  );
};

export default NotFound;
