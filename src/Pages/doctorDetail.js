import Header from "../Components/header.js";
import WOW from 'wowjs';
import DoctorDetails from "../Components/doctorDetails.js";
import { useEffect } from "react";
import  Navbar  from "../Components/navbar.js";

function DoctorDetail () {
  useEffect(() => {
		new WOW.WOW().init();
	}, []);
    return (
      <>
      <Navbar/>
      <Header head="Dr. Detail For MediTech" content="What We Actually Do?" place="Doctor Detail"/>
      <DoctorDetails/>
      </>
    );
  };
  
  export default DoctorDetail;