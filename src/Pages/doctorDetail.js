import Header from "../Components/header.js";
import WOW from 'wowjs';
import DoctorDetails from "../Components/doctorDetails.js";
import { useEffect } from "react";
import  Navbar  from "../Components/navbar.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";

function DoctorDetail () {
  const param = useParams();
  const id = param.id
  useEffect(() => {
		new WOW.WOW().init();
	}, []);
    return (
      <>
      <Navbar/>
      <Header head="Dr. Detail For MediTech" content="What We Actually Do?" place="Doctor Detail"/>
      <DoctorDetails id={id}/>
      </>
    );
  };
  
  export default DoctorDetail;
