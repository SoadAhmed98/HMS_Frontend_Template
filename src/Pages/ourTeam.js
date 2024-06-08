import Header from "../Components/header.js";
import DoctorSec from "../Components/doctorSec.js";
import Time from "../Components/time.js";
import TeamSection from "../Components/team.js";
import  Navbar  from "../Components/navbar.js";
import WOW from 'wowjs';
import { useEffect } from "react";


function OurTeam () {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

    return (
      <>
      <Navbar/>
      <Header head="Team MediTech" content="What We Actually Do?" place="Team"/>
      <TeamSection/>
      <Time/>
      <DoctorSec/>
      </>
    );
  };
  
  export default OurTeam;