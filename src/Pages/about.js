import React, { useEffect } from "react";
import Header from "../Components/header.js";
import HealthSection from "../Components/healthSection.js";
import FeaturedSection from "../Components/Featured.js";
import CounterSection from "../Components/counter.js";
import DoctorInfoSection from "../Components/doctor-info.js";
import TeamSection from "../Components/team.js";
import VideoSection from "../Components/video.js";
import AppointmentSection from "../Components/appointment.js";
import TestimonialSection from "../Components/testimonial-section.js";
import  Navbar  from "../Components/navbar.js";
import WOW from 'wowjs';

function About () {
  useEffect(() => {
		new WOW.WOW().init();
	}, []);
  

  return (
    <>
      <Navbar/>
      <Header head="About MediTech" content="What We Actually Do?" place="About MediTech"/>
      <HealthSection/>
      <FeaturedSection/>
      <CounterSection/>
      <DoctorInfoSection/>
      <TeamSection/>
      <VideoSection/>
      <AppointmentSection/>
      <TestimonialSection/>

    </>
  );
};

export default About;
